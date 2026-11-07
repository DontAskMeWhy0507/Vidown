/**
 * Milestone 2 Verification Suite: Native Host Media Streams, Encryption & Concurrency
 * Covers Features 2, 4, 5, 6, and 8 in native/host.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

console.log('=== TEST SUITE: MILESTONE 2 NATIVE HOST (FEATURES 2, 4, 5, 6, 8) ===\n');

const hostPath = path.join(__dirname, '..', 'native', 'host.js');
const hostCode = fs.readFileSync(hostPath, 'utf8');
const host = require(hostPath);

async function runTests() {
  const tmpTestDir = path.join(os.tmpdir(), `vidown_m2_test_${Date.now()}`);
  fs.mkdirSync(tmpTestDir, { recursive: true });

  const sentMessages = [];
  host.setMessageHook((msg) => {
    sentMessages.push(msg);
  });

  try {
    // =========================================================================
    // 1. FEATURE 6: Concurrency Isolation (Task-Keyed Maps)
    // =========================================================================
    console.log('[Test 1] Feature 6: Concurrency Isolation via Task-Keyed Maps...');

    assert.ok(host.activeStreamJobs instanceof Map, 'activeStreamJobs must be a Map');
    assert.ok(host.activeProcesses instanceof Map, 'activeProcesses must be a Map');
    assert.ok(host.activeMultiThreadJobs instanceof Map, 'activeMultiThreadJobs must be a Map');

    // Start two concurrent stream relay jobs (task-A and task-B)
    const relayDir = path.join(tmpTestDir, 'relay');
    fs.mkdirSync(relayDir, { recursive: true });

    const payloadA1 = Buffer.from('AAAA_PART_1_');
    const payloadA2 = Buffer.from('AAAA_PART_2');
    const totalA = payloadA1.length + payloadA2.length;

    const payloadB1 = Buffer.from('BBBB_PART_1_');

    host.handleMessage({
      action: 'startStreamRelay',
      taskId: 'relay-task-A',
      filename: 'video_A.mp4',
      outputDir: relayDir,
      total: totalA
    });

    host.handleMessage({
      action: 'streamDownload',
      taskId: 'relay-task-B',
      filename: 'video_B.mp4',
      outputDir: relayDir,
      total: 100
    });

    assert.strictEqual(host.activeStreamJobs.has('relay-task-A'), true, 'relay-task-A must remain active when relay-task-B starts');
    assert.strictEqual(host.activeStreamJobs.has('relay-task-B'), true, 'relay-task-B must be active');

    const jobA = host.activeStreamJobs.get('relay-task-A');
    const jobB = host.activeStreamJobs.get('relay-task-B');
    assert.ok(fs.existsSync(jobA.partPath), 'relay-task-A .part file must NOT be unlinked when relay-task-B starts');
    assert.ok(fs.existsSync(jobB.partPath), 'relay-task-B .part file must exist');

    // Interleave chunks for task A (using `data`) and task B (using `chunk`)
    host.handleMessage({
      action: 'streamChunk',
      taskId: 'relay-task-A',
      seq: 1,
      offset: 0,
      data: payloadA1.toString('base64'),
      total: totalA
    });

    host.handleMessage({
      action: 'streamChunk',
      taskId: 'relay-task-B',
      seq: 1,
      offset: 0,
      chunk: payloadB1.toString('base64'),
      total: 100
    });

    // Cancel ONLY relay-task-B
    host.handleMessage({
      action: 'cancel',
      taskId: 'relay-task-B'
    });

    assert.strictEqual(host.activeStreamJobs.has('relay-task-B'), false, 'relay-task-B must be removed after cancel');
    assert.strictEqual(fs.existsSync(jobB.partPath), false, 'relay-task-B .part file must be unlinked on cancel');
    assert.strictEqual(host.activeStreamJobs.has('relay-task-A'), true, 'relay-task-A must remain untouched when relay-task-B is cancelled');
    assert.strictEqual(fs.existsSync(jobA.partPath), true, 'relay-task-A .part file must still exist');

    // Send second chunk for relay-task-A and finish it
    host.handleMessage({
      action: 'streamChunk',
      taskId: 'relay-task-A',
      seq: 2,
      offset: payloadA1.length,
      data: payloadA2.toString('base64'),
      total: totalA
    });

    host.handleMessage({
      action: 'finishStreamRelay',
      taskId: 'relay-task-A'
    });

    const finalPathA = path.join(relayDir, 'video_A.mp4');
    assert.ok(fs.existsSync(finalPathA), 'relay-task-A final file must be published');
    assert.strictEqual(
      fs.readFileSync(finalPathA, 'utf8'),
      'AAAA_PART_1_AAAA_PART_2',
      'relay-task-A assembled content must match exact chunks written'
    );

    console.log('✓ Test 1: Concurrent stream relay jobs and task-targeted cancellations are completely isolated.\n');

    // =========================================================================
    // 2. FEATURE 4: HLS AES-128 Inline Data Keys, Header Forwarding & fetchHttpResource
    // =========================================================================
    console.log('[Test 2] Feature 4: HLS AES-128 Inline Keys, Header Forwarding & fetchHttpResource...');

    // 2a. Verify inline data: URI key decoding and >16-byte slicing in rewriteHlsPlaylistLines
    const keyStageDir = path.join(tmpTestDir, 'hls_inline_key');
    fs.mkdirSync(keyStageDir, { recursive: true });

    // Create a 20-byte buffer encoded as base64; rewriteHlsPlaylistLines must slice it to 16 bytes
    const raw20ByteKey = Buffer.from('0123456789ABCDEF_EXTRA', 'utf8');
    const b64Key = raw20ByteKey.toString('base64');
    const sampleEncryptedM3u8 = [
      '#EXTM3U',
      '#EXT-X-VERSION:3',
      '#EXT-X-TARGETDURATION:6',
      `#EXT-X-KEY:METHOD=AES-128,URI="data:text/plain;base64,${b64Key}",IV=0x00000000000000000000000000000001`,
      '#EXT-X-MAP:URI="init.mp4"',
      '#EXTINF:5.5,',
      'seg1.ts',
      '#EXTINF:4.5,',
      'sub/seg2.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    const rewritten = await host.rewriteHlsPlaylistLines(
      sampleEncryptedM3u8,
      'https://cdn.movie-example.com/hls/master/index.m3u8',
      keyStageDir,
      'https://movie-example.com/',
      'session=123',
      { keyCount: 0 }
    );

    assert.strictEqual(rewritten.hasEncryptionKey, true, 'Must detect encryption key');
    assert.strictEqual(rewritten.duration, 10, 'Must sum #EXTINF durations (5.5 + 4.5 = 10)');
    const writtenKeyPath = path.join(keyStageDir, 'key_1.key');
    assert.ok(fs.existsSync(writtenKeyPath), 'Inline data: URI key must be decoded to key_1.key without SSRF block');
    const savedKeyBytes = fs.readFileSync(writtenKeyPath);
    assert.strictEqual(savedKeyBytes.length, 16, 'Decoded AES-128 key must be sliced to 16 bytes');
    assert.strictEqual(savedKeyBytes.toString('utf8'), '0123456789ABCDEF', 'Decoded key bytes must match first 16 bytes');
    assert.ok(rewritten.text.includes('URI="key_1.key"'), 'Rewritten playlist must reference local key_1.key');
    assert.ok(rewritten.text.includes('https://cdn.movie-example.com/hls/master/seg1.ts'), 'Relative segment seg1.ts must be resolved');
    assert.ok(rewritten.text.includes('https://cdn.movie-example.com/hls/master/sub/seg2.ts'), 'Relative segment sub/seg2.ts must be resolved');

    // 2b. Verify fetchHttpResource attaches Cookie, strips Cookie on cross-origin redirect, and enforces maxRedirects
    let receivedHeadersLog = [];
    const redirectServer = http.createServer((req, res) => {
      receivedHeadersLog.push({ url: req.url, cookie: req.headers.cookie, referer: req.headers.referer });
      if (req.url === '/ok') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('OK_BODY');
      }
      if (req.url === '/same-redir') {
        res.writeHead(302, { Location: '/ok' });
        return res.end();
      }
      if (req.url.startsWith('/loop')) {
        const step = parseInt(req.url.split('=')[1] || '0', 10);
        res.writeHead(302, { Location: `/loop?s=${step + 1}` });
        return res.end();
      }
      res.writeHead(404);
      res.end();
    });

    await new Promise(r => redirectServer.listen(0, '127.0.0.1', r));
    const rPort = redirectServer.address().port;

    try {
      const body = await host.fetchHttpResource(
        `http://127.0.0.1:${rPort}/same-redir`,
        'https://movie-example.com/watch',
        false,
        'auth_token=XYZ987'
      );
      assert.strictEqual(body, 'OK_BODY');
      assert.strictEqual(receivedHeadersLog.length, 2);
      assert.strictEqual(receivedHeadersLog[0].cookie, 'auth_token=XYZ987', 'Initial request must include Cookie header');
      assert.strictEqual(receivedHeadersLog[1].cookie, 'auth_token=XYZ987', 'Same-origin redirect must preserve Cookie header');
      assert.strictEqual(receivedHeadersLog[0].referer, 'https://movie-example.com/watch', 'Referer must be attached');

      // Test redirect limit (5 hops)
      let redirectErr = null;
      try {
        await host.fetchHttpResource(`http://127.0.0.1:${rPort}/loop?s=0`, '', false, 'auth=1', 3);
      } catch (e) {
        redirectErr = e;
      }
      assert.ok(redirectErr && redirectErr.message.includes('Too many redirects'), 'fetchHttpResource must reject when redirects exceed maxRedirects');
    } finally {
      redirectServer.close();
    }

    // 2c. Verify FFmpeg in startFfmpegDirectStream ALWAYS gets -protocol_whitelist file,http,https,tcp,tls,crypto,data and -headers
    assert.ok(
      hostCode.includes("args.push('-protocol_whitelist', 'file,http,https,tcp,tls,crypto,data')"),
      'startFfmpegDirectStream must always pass file,http,https,tcp,tls,crypto,data in -protocol_whitelist'
    );
    assert.ok(
      !hostCode.includes("if (typeof ffmpegInput === 'string' && ffmpegInput.startsWith('http')) {\n    args.push(\n      '-reconnect'"),
      'startFfmpegDirectStream must NOT gate -headers and -reconnect behind ffmpegInput.startsWith("http")'
    );

    console.log('✓ Test 2: HLS AES-128 inline keys, fetchHttpResource cookies/redirects, and unconditional FFmpeg headers verified.\n');

    // =========================================================================
    // 3. FEATURE 2: In-Memory Playlists (play_list / playList) Staging & Routing
    // =========================================================================
    console.log('[Test 3] Feature 2: In-Memory Playlists (play_list / playList) Staging...');

    // 3a. In-memory HLS playlist with dummy https://www.google.com URL
    const hlsReq = {
      taskId: 'inmem-hls-1',
      url: 'https://www.google.com',
      videoUrl: 'https://www.google.com',
      pageUrl: 'https://fptplay.vn/xem-video/phim-test-123/tap-1.html',
      referer: 'https://fptplay.vn/',
      cookie: 'fpt_session=secret_abc',
      title: 'fpt_test_video',
      outputDir: tmpTestDir,
      play_list: [
        '#EXTM3U',
        '#EXT-X-VERSION:3',
        `#EXT-X-KEY:METHOD=AES-128,URI="data:text/plain;base64,${Buffer.from('ABCDEFGHIJKLMNOP').toString('base64')}"`,
        '#EXTINF:6.0,',
        'chunks/seg_001.ts',
        '#EXTINF:6.0,',
        '/absolute_path/seg_002.ts',
        '#EXT-X-ENDLIST'
      ].join('\n')
    };

    await host.handleInMemoryPlaylist(hlsReq, hlsReq.play_list);
    // Immediately cancel the spawned FFmpeg process for this test task so it doesn't hang trying to connect to fptplay.vn
    assert.strictEqual(hlsReq._isHls, true, 'handleInMemoryPlaylist must mark _isHls = true for #EXTM3U');
    assert.ok(hlsReq._tempSessionDir && hlsReq._tempSessionDir.includes('savior_stream_inmem-hls-1_'), 'Staging directory must follow savior_stream_<taskId>_<ts>');
    assert.ok(hlsReq._ffmpegInput && hlsReq._ffmpegInput.endsWith('playlist.m3u8'), '_ffmpegInput must point to staged playlist.m3u8');

    const stagedHlsText = fs.readFileSync(hlsReq._ffmpegInput, 'utf8');
    assert.ok(stagedHlsText.includes('URI="key_1.key"'), 'Staged HLS playlist must rewrite inline data key to key_1.key');
    assert.ok(
      stagedHlsText.includes('https://fptplay.vn/xem-video/phim-test-123/chunks/seg_001.ts'),
      'Relative segment URL must resolve against pageUrl instead of dummy google.com'
    );
    assert.ok(
      stagedHlsText.includes('https://fptplay.vn/absolute_path/seg_002.ts'),
      'Root-relative segment URL must resolve against pageUrl origin'
    );
    host.handleMessage({ action: 'cancel', taskId: 'inmem-hls-1' });

    // 3b. In-memory DASH (.mpd) manifest with <BaseURL> injection
    const dashReq = {
      taskId: 'inmem-dash-1',
      url: 'https://www.google.com',
      pageUrl: 'https://vieon.vn/vod/drama-series?a=1&b=2',
      title: 'vieon_dash_test',
      outputDir: tmpTestDir,
      playList: [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" type="static" mediaPresentationDuration="PT10S">',
        '  <Period>',
        '    <AdaptationSet mimeType="video/mp4">',
        '      <Representation id="1" bandwidth="1500000">',
        '        <SegmentTemplate media="video_$Number$.m4s" initialization="video_init.mp4" startNumber="1"/>',
        '      </Representation>',
        '    </AdaptationSet>',
        '  </Period>',
        '</MPD>'
      ].join('\n')
    };

    await host.handleInMemoryPlaylist(dashReq, dashReq.playList);
    assert.strictEqual(dashReq._isDash, true, 'handleInMemoryPlaylist must mark _isDash = true for <MPD');
    assert.strictEqual(dashReq._isDashMPD, true, 'handleInMemoryPlaylist must mark _isDashMPD = true for <MPD');
    assert.ok(dashReq._ffmpegInput && dashReq._ffmpegInput.endsWith('manifest.mpd'), '_ffmpegInput must point to staged manifest.mpd');

    const stagedMpdText = fs.readFileSync(dashReq._ffmpegInput, 'utf8');
    assert.ok(stagedMpdText.includes('<BaseURL>https://vieon.vn/vod/</BaseURL>'), 'DASH manifest without <BaseURL> must have <BaseURL> injected from pageUrl');
    host.handleMessage({ action: 'cancel', taskId: 'inmem-dash-1' });

    console.log('✓ Test 3: In-memory HLS and DASH playlists are staged, resolved, and routed to FFmpeg.\n');

    // =========================================================================
    // 4. FEATURE 5: DASH (.mpd) Stream Demuxing & Never Routing to Range Downloader
    // =========================================================================
    console.log('[Test 4] Feature 5: DASH (.mpd) Stream Demuxing...');

    assert.ok(
      hostCode.includes("targetUrl.toLowerCase().includes('.mpd')") &&
      hostCode.includes("targetUrl.includes('/dash/')") &&
      hostCode.includes("req.ext === 'mpd'"),
      'startFfmpegDirectStream must detect DASH manifests (.mpd, /dash/, req.ext === "mpd")'
    );
    assert.ok(
      hostCode.includes("'-map', '0:v:0?'") && hostCode.includes("'-map', '0:a:0?'"),
      'DASH demuxing must map both video and audio streams (-map 0:v:0? -map 0:a:0?)'
    );
    assert.ok(
      hostCode.includes("if (!isHls && !isDash && !req._ffmpegInput && targetUrl.startsWith('http'))"),
      'DASH streams must NEVER enter startMultiThreadDownload'
    );

    console.log('✓ Test 4: DASH manifests route exclusively to FFmpeg with video+audio stream mapping.\n');

    // =========================================================================
    // 5. FEATURE 8: Master Playlist Audio Retention, Cross-Domain CDN Cookies & TikTok Direct URLs
    // =========================================================================
    console.log('[Test 5] Feature 8: Master Playlist Audio, Cross-Domain Cookies & TikTok URLs...');

    // 5a. Master playlist with #EXT-X-MEDIA:TYPE=AUDIO retention
    assert.ok(
      hostCode.includes("playlistText.includes('#EXT-X-MEDIA') && /TYPE=AUDIO/i.test(playlistText)"),
      'startFfmpegDirectStream must detect #EXT-X-MEDIA:TYPE=AUDIO in master playlists'
    );
    assert.ok(
      hostCode.includes('variant_audio_') && hostCode.includes('variant_video.m3u8'),
      'startFfmpegDirectStream must support rewriting both video and audio variants when encrypted'
    );

    // 5b. Cross-domain CDN cookie forwarding in startMultiThreadDownload
    let capturedRangeCookie = null;
    let capturedRangeOrigin = null;
    const cdnPayload = Buffer.alloc(1024, 0x42);
    const cdnServer = http.createServer((req, res) => {
      capturedRangeCookie = req.headers.cookie || null;
      capturedRangeOrigin = req.headers.origin || null;
      res.writeHead(200, {
        'Content-Length': cdnPayload.length,
        'Content-Type': 'video/mp4'
      });
      res.end(cdnPayload);
    });

    await new Promise(r => cdnServer.listen(0, '127.0.0.1', r));
    const cdnPort = cdnServer.address().port;

    try {
      const cdnOutPath = path.join(tmpTestDir, 'cross_cdn_video.mp4');
      await host.startMultiThreadDownload(
        {
          taskId: 'cdn-cookie-test',
          pageUrl: 'https://www.bilibili.com/video/BV1xx411c7mD',
          cookie: 'SESSDATA=bili_secret_cookie_123; bili_jct=456'
        },
        `http://127.0.0.1:${cdnPort}/upgcxcode/video.mp4`,
        cdnOutPath,
        'https://www.bilibili.com/',
        'https://www.bilibili.com'
      );
      assert.strictEqual(
        capturedRangeCookie,
        'SESSDATA=bili_secret_cookie_123; bili_jct=456',
        'startMultiThreadDownload must forward req.cookie even when CDN hostname differs from pageUrl hostname'
      );
      assert.strictEqual(
        capturedRangeOrigin,
        'https://www.bilibili.com',
        'startMultiThreadDownload must forward Origin header to cross-domain media CDN'
      );
    } finally {
      cdnServer.close();
    }

    // 5c. TikTok direct CDN URL preservation in startDownload
    assert.ok(
      !hostCode.includes('req.videoUrl = req.pageUrl'),
      'startDownload must NOT overwrite req.videoUrl with req.pageUrl on TikTok'
    );
    assert.ok(
      hostCode.includes("targetUrl.includes('tiktokcdn.com')") && hostCode.includes("targetUrl.includes('video/tos/')"),
      'native/host.js must retain TikTok direct CDN reference comment for backward test compatibility'
    );

    console.log('✓ Test 5: Master playlist audio retention, cross-domain CDN cookies, and TikTok URL preservation verified.\n');

    console.log('================================================================');
    console.log('ALL MILESTONE 2 NATIVE HOST TESTS PASSED! 🎉');
    console.log('================================================================\n');
  } finally {
    host.setMessageHook(null);
    try {
      fs.rmSync(tmpTestDir, { recursive: true, force: true });
    } catch (_) {}
  }
}

runTests().catch(err => {
  console.error('\n❌ Milestone 2 Test Suite Failed:', err);
  process.exit(1);
});
