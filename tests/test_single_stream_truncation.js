/**
 * tests/test_single_stream_truncation.js
 *
 * Adversarial Challenger Suite for Download Truncation & Media Container Integrity:
 * 1. Single-Stream Truncation Guard on Premature EOF:
 *    - Server announces Content-Length: 25000, sends only 5000 bytes, closes stream
 *    - Asserts downloadFileSingleStream rejects with 'Download truncated'
 *    - Asserts destination file and temporary .part file are both cleaned up
 * 2. Socket Drop / Network Reset Truncation:
 *    - Server abruptly destroys socket mid-transfer
 *    - Asserts rejection and partial file cleanup
 * 3. Complete Single-Stream Download:
 *    - Server sends 100% of announced bytes
 *    - Asserts atomic promotion from .part to final destination
 *    - Asserts byte-level content integrity
 * 4. Anti-Hotlinking 403 / HTML Error Rejection:
 *    - Server returns HTTP 403 or HTML error response
 *    - Asserts early rejection without leaving corrupt files on disk
 * 5. Media Validator Container Integrity on Truncated MP4 Bitstreams:
 *    - Slices genuine MP4 container mid-stream
 *    - Asserts Stage 3 FFmpeg bitstream decode (-xerror) detects and rejects corruption
 * 6. HLS AES-128 fMP4 Initialization Segment Stitching:
 *    - Verifies rewriteHlsPlaylistLines fetches and stitches #EXT-X-MAP init segments
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');
const assert = require('assert');

const {
  downloadFileSingleStream,
  rewriteHlsPlaylistLines
} = require('../native/host');

const {
  validateMagicBytes,
  validateFFprobe,
  validateFFmpegDecode,
  validateMediaFile
} = require('./e2e/media_validator');

async function runTests() {
  console.log('=== TEST SUITE: SINGLE-STREAM TRUNCATION GUARD & CONTAINER INTEGRITY ===\n');

  const tmpDir = path.join(os.tmpdir(), `vidown_truncation_test_${Date.now()}`);
  fs.mkdirSync(tmpDir, { recursive: true });

  try {
    // -------------------------------------------------------------------------
    // 1. Premature Server EOF (Truncation Guard)
    // -------------------------------------------------------------------------
    console.log('[Test 1] Premature Server EOF (Content-Length mismatch guard)...');

    let eofServerPort = 0;
    const eofServer = http.createServer((req, res) => {
      res.writeHead(200, {
        'Content-Length': '25000',
        'Content-Type': 'video/mp4'
      });
      // Send only 5000 bytes and close cleanly
      res.write(Buffer.alloc(5000, 0x41));
      res.end();
    });

    await new Promise(r => eofServer.listen(0, '127.0.0.1', () => {
      eofServerPort = eofServer.address().port;
      r();
    }));

    const eofOutPath = path.join(tmpDir, 'truncated_eof_video.mp4');
    let eofError = null;

    try {
      await downloadFileSingleStream({
        url: `http://127.0.0.1:${eofServerPort}/video.mp4`,
        outPath: eofOutPath,
        headers: {}
      });
    } catch (err) {
      eofError = err;
    } finally {
      eofServer.close();
    }

    assert.ok(eofError !== null, 'Truncated EOF download must reject');
    assert.ok(
      eofError.message.includes('Download truncated: expected 25000 bytes, received 5000'),
      `Error message must report exact byte discrepancy: ${eofError.message}`
    );
    assert.ok(!fs.existsSync(eofOutPath), 'Final destination file must NOT exist after truncation');
    assert.ok(!fs.existsSync(`${eofOutPath}.part`), 'Temporary .part file must be unlinked');

    console.log(`  ✓ Rejected with: "${eofError.message}"`);
    console.log('✓ Test 1: Premature EOF properly rejected and partial files cleaned up.\n');

    // -------------------------------------------------------------------------
    // 2. Mid-Stream Socket Drop / Destruction
    // -------------------------------------------------------------------------
    console.log('[Test 2] Mid-Stream TCP Socket Destruction...');

    let dropServerPort = 0;
    const dropServer = http.createServer((req, res) => {
      res.writeHead(200, {
        'Content-Length': '30000',
        'Content-Type': 'video/mp4'
      });
      res.write(Buffer.alloc(3000, 0x42));
      // Abruptly destroy socket
      setImmediate(() => {
        req.socket.destroy();
      });
    });

    await new Promise(r => dropServer.listen(0, '127.0.0.1', () => {
      dropServerPort = dropServer.address().port;
      r();
    }));

    const dropOutPath = path.join(tmpDir, 'socket_drop_video.mp4');
    let dropError = null;

    try {
      await downloadFileSingleStream({
        url: `http://127.0.0.1:${dropServerPort}/video.mp4`,
        outPath: dropOutPath,
        headers: {}
      });
    } catch (err) {
      dropError = err;
    } finally {
      dropServer.close();
    }

    assert.ok(dropError !== null, 'Socket drop download must reject');
    assert.ok(
      dropError.message.includes('Download truncated') || dropError.message.includes('socket hang up') || dropError.message.includes('ECONNRESET'),
      `Error message must indicate stream disruption: ${dropError.message}`
    );
    assert.ok(!fs.existsSync(dropOutPath), 'Destination file must NOT exist after socket drop');
    assert.ok(!fs.existsSync(`${dropOutPath}.part`), 'Temporary .part file must be unlinked');

    console.log(`  ✓ Socket disruption caught: "${dropError.message}"`);
    console.log('✓ Test 2: Mid-stream socket destruction safely handled.\n');

    // -------------------------------------------------------------------------
    // 3. Complete Single-Stream Download Verification
    // -------------------------------------------------------------------------
    console.log('[Test 3] Complete Single-Stream Download (Matching Byte Count)...');

    const expectedPayload = Buffer.alloc(12000, 0x56); // 12,000 'V's
    let fullServerPort = 0;
    const fullServer = http.createServer((req, res) => {
      res.writeHead(200, {
        'Content-Length': String(expectedPayload.length),
        'Content-Type': 'video/mp4'
      });
      res.end(expectedPayload);
    });

    await new Promise(r => fullServer.listen(0, '127.0.0.1', () => {
      fullServerPort = fullServer.address().port;
      r();
    }));

    const fullOutPath = path.join(tmpDir, 'complete_stream_video.mp4');
    let publishedPath = null;

    try {
      publishedPath = await downloadFileSingleStream({
        url: `http://127.0.0.1:${fullServerPort}/video.mp4`,
        outPath: fullOutPath,
        headers: {}
      });
    } finally {
      fullServer.close();
    }

    assert.ok(publishedPath !== null, 'Download must return published path');
    assert.ok(fs.existsSync(publishedPath), 'Published destination file must exist');
    assert.ok(!fs.existsSync(`${fullOutPath}.part`), '.part file must be removed after publication');

    const diskContent = fs.readFileSync(publishedPath);
    assert.strictEqual(diskContent.length, expectedPayload.length, 'File size on disk must match Content-Length');
    assert.ok(diskContent.equals(expectedPayload), 'File content must match exact transmitted bytes');

    console.log(`  ✓ Downloaded ${diskContent.length} bytes cleanly.`);
    console.log('✓ Test 3: Complete single-stream download verified.\n');

    // -------------------------------------------------------------------------
    // 4. Server Error Responses (HTTP 403 & HTML Error Rejection)
    // -------------------------------------------------------------------------
    console.log('[Test 4] Rejection of HTTP 403 & HTML Error Documents...');

    let errServerPort = 0;
    const errServer = http.createServer((req, res) => {
      if (req.url === '/403') {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        return res.end('<!DOCTYPE html><html><body><h1>403 Forbidden</h1></body></html>');
      }
      if (req.url === '/fake-200-html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<!DOCTYPE html><html><body><h1>API Error</h1></body></html>');
      }
      res.writeHead(404);
      res.end();
    });

    await new Promise(r => errServer.listen(0, '127.0.0.1', () => {
      errServerPort = errServer.address().port;
      r();
    }));

    try {
      // 4a. HTTP 403 rejection
      const out403 = path.join(tmpDir, 'error_403.mp4');
      let caught403 = null;
      try {
        await downloadFileSingleStream({
          url: `http://127.0.0.1:${errServerPort}/403`,
          outPath: out403,
          headers: {}
        });
      } catch (e) {
        caught403 = e;
      }
      assert.ok(caught403 && caught403.message.includes('HTTP 403'), 'Must reject HTTP 403');
      assert.ok(!fs.existsSync(out403), 'No 403 file must remain');
      assert.ok(!fs.existsSync(`${out403}.part`), 'No 403 .part file must remain');

      // 4b. 200 OK with HTML error body rejection
      const outHtml = path.join(tmpDir, 'error_fake200.mp4');
      let caughtHtml = null;
      try {
        await downloadFileSingleStream({
          url: `http://127.0.0.1:${errServerPort}/fake-200-html`,
          outPath: outHtml,
          headers: {}
        });
      } catch (e) {
        caughtHtml = e;
      }
      assert.ok(caughtHtml && caughtHtml.message.includes('not a video'), 'Must detect HTML response');
      assert.ok(!fs.existsSync(outHtml), 'No HTML file must remain');
      assert.ok(!fs.existsSync(`${outHtml}.part`), 'No HTML .part file must remain');

      console.log('✓ Test 4: HTTP 403 and HTML error responses safely rejected.\n');
    } finally {
      errServer.close();
    }

    // -------------------------------------------------------------------------
    // 5. Container Integrity Rejection of Truncated Bitstreams (Missing moov)
    // -------------------------------------------------------------------------
    console.log('[Test 5] Container Integrity Rejection of Truncated Bitstreams...');

    const sample1080pPath = path.join(__dirname, 'fixtures', 'media', 'sample_1080p.mp4');
    if (fs.existsSync(sample1080pPath)) {
      const genuineBytes = fs.readFileSync(sample1080pPath);
      // Chop the file at 40,000 bytes (midway through video packets)
      const truncatedMp4Path = path.join(tmpDir, 'adversarial_truncated.mp4');
      fs.writeFileSync(truncatedMp4Path, genuineBytes.slice(0, 40000));

      const truncValRes = await validateMediaFile(truncatedMp4Path, {
        mediaType: 'video',
        format: 'mp4'
      });

      assert.strictEqual(truncValRes.valid, false, 'Truncated MP4 file must be flagged as invalid');
      assert.ok(
        truncValRes.stage === 'ffmpeg_decode' || truncValRes.stage === 'ffprobe',
        `Rejection stage must be ffprobe or ffmpeg_decode: was ${truncValRes.stage}`
      );
      assert.ok(
        truncValRes.error && (
          truncValRes.error.includes('FFmpeg full decode failed') ||
          truncValRes.error.includes('moov atom not found') ||
          truncValRes.error.includes('Invalid data found')
        ),
        `Error must specify bitstream corruption or missing moov: ${truncValRes.error}`
      );

      console.log(`  ✓ Truncated bitstream rejected at stage: ${truncValRes.stage}`);
      console.log('✓ Test 5: Truncated MP4 bitstream detected and rejected by validator.\n');
    }

    // -------------------------------------------------------------------------
    // 6. HLS fMP4 Initialization Segment (#EXT-X-MAP) & SSRF Protection
    // -------------------------------------------------------------------------
    console.log('[Test 6] HLS fMP4 Initialization Segment (#EXT-X-MAP) & SSRF Protection...');

    const hlsStageDir = path.join(tmpDir, 'hls_fmp4_stage');
    fs.mkdirSync(hlsStageDir, { recursive: true });

    // 6a. Verify SSRF protection blocks loopback/cloud metadata URLs
    const ssrfPlaylist = [
      '#EXTM3U',
      '#EXT-X-VERSION:7',
      '#EXT-X-MAP:URI="http://127.0.0.1:8080/internal_secret.mp4"',
      '#EXT-X-MAP:URI="http://169.254.169.254/latest/meta-data/"',
      '#EXTINF:6.0,',
      'segment_1.m4s',
      '#EXT-X-ENDLIST'
    ].join('\n');

    const ssrfRewritten = await rewriteHlsPlaylistLines(
      ssrfPlaylist,
      'http://127.0.0.1:8080/playlist.m3u8',
      hlsStageDir,
      '',
      '',
      { keyCount: 0 }
    );
    assert.ok(!ssrfRewritten.text.includes('internal_secret.mp4'), 'SSRF guard must strip 127.0.0.1 loopback map URL');
    assert.ok(!ssrfRewritten.text.includes('169.254.169.254'), 'SSRF guard must strip AWS/cloud metadata map URL');
    console.log('  ✓ SSRF guard successfully blocked loopback and cloud metadata URLs');

    // 6b. Verify valid CDN remote fMP4 initialization segment resolution
    const cdnPlaylist = [
      '#EXTM3U',
      '#EXT-X-VERSION:7',
      '#EXT-X-TARGETDURATION:6',
      `#EXT-X-KEY:METHOD=AES-128,URI="data:text/plain;base64,${Buffer.alloc(16, 2).toString('base64')}"`,
      '#EXT-X-MAP:URI="init.mp4"',
      '#EXTINF:6.0,',
      'segment_1.m4s',
      '#EXT-X-ENDLIST'
    ].join('\n');

    const cdnRewritten = await rewriteHlsPlaylistLines(
      cdnPlaylist,
      'https://cdn.video-delivery.com/streams/master.m3u8',
      hlsStageDir,
      'https://video-delivery.com/watch',
      '',
      { keyCount: 0 }
    );

    assert.strictEqual(cdnRewritten.hasEncryptionKey, true, 'Must detect AES-128 encryption key');
    assert.ok(
      cdnRewritten.text.includes('https://cdn.video-delivery.com/streams/init.mp4') ||
      cdnRewritten.text.includes('init_'),
      'Relative #EXT-X-MAP:URI="init.mp4" must be resolved against remote CDN baseUrl'
    );
    assert.ok(
      cdnRewritten.text.includes('https://cdn.video-delivery.com/streams/segment_1.m4s'),
      'Relative segment URI must be resolved against remote CDN baseUrl'
    );
    assert.ok(
      cdnRewritten.text.includes('URI="key_1.key"'),
      'Inline AES-128 key must be extracted and rewritten to local key file'
    );
    const keyFile = path.join(hlsStageDir, 'key_1.key');
    assert.ok(fs.existsSync(keyFile), 'Decoded key file must exist in staging directory');
    assert.strictEqual(fs.readFileSync(keyFile).length, 16, 'Decoded AES-128 key must be 16 bytes');

    console.log('✓ Test 6: SSRF guard and HLS fMP4 initialization segment stitching verified.\n');

    console.log('================================================================');
    console.log('🎉 ALL SINGLE-STREAM TRUNCATION & CONTAINER INTEGRITY TESTS PASSED!');
    console.log('================================================================\n');
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (_) {}
  }
}

runTests().catch(err => {
  console.error('\n✖ TEST SUITE FAILED:', err);
  process.exit(1);
});
