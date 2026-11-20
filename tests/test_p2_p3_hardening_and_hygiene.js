/**
 * Regression Test Suite: P2/P3 Hardening, Lifecycle & Hygiene Audit Fixes (AUD-012 .. AUD-015)
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
const host = require('../native/host');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));

console.log('=== TEST SUITE: P2/P3 HARDENING & HYGIENE REGRESSIONS ===\n');

(async () => {
  const hostSrc = fs.readFileSync(path.join(ROOT, 'native/host.js'), 'utf8');
  const bgSrc = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');
  const popupSrc = fs.readFileSync(path.join(ROOT, 'popup/popup.js'), 'utf8');
  const dlSrc = fs.readFileSync(path.join(ROOT, 'downloads/downloads.js'), 'utf8');

  // ------------------------------------------------------------------
  // AUD-012: Bounded stderr, bounded msgLen, tempSessionDir cleanup, browseFolder cleanup
  // ------------------------------------------------------------------
  console.log('[AUD-012] Resource bounds & temp/listener cleanup...');
  {
    assert.strictEqual(typeof host.appendBoundedStderr, 'function');
    const big = 'A'.repeat(100000);
    const bounded = host.appendBoundedStderr('', big);
    assert.strictEqual(bounded.length, 65536, 'appendBoundedStderr must cap output at 65536 chars');
    assert.strictEqual(host.MAX_NATIVE_MSG_BYTES, 64 * 1024 * 1024);

    // Invalid HLS playlist must not leak savior_stream_* directory
    const srv = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<html>not an m3u8</html>');
    });
    await new Promise((r) => srv.listen(0, '127.0.0.1', r));
    const uniqueTaskId = `aud012_leak_${Date.now()}`;
    try {
      const msgs = [];
      host.setMessageHook((m) => msgs.push(m));
      await host.startFfmpegDirectStream({
        taskId: uniqueTaskId,
        url: `http://127.0.0.1:${srv.address().port}/fake.m3u8`,
        filename: 'fake.mp4'
      });
      host.setMessageHook(null);
      const leaked = fs.readdirSync(os.tmpdir()).filter((d) => d.startsWith(`savior_stream_${uniqueTaskId}_`));
      assert.strictEqual(leaked.length, 0, 'tempSessionDir must be cleaned up when HLS playlist is invalid');
    } finally {
      await new Promise((r) => srv.close(r));
    }

    assert.ok(
      bgSrc.includes('onBrowseDisconnect') && bgSrc.includes('clearTimeout(browseTimer)'),
      'browseFolder must clean up listener on disconnect and timeout'
    );
  }
  console.log('✓ AUD-012 passed.');

  // ------------------------------------------------------------------
  // AUD-013: openFile async pending contract
  // ------------------------------------------------------------------
  console.log('[AUD-013] openFile async pending contract...');
  {
    assert.ok(bgSrc.includes('sendResponse({ success: true, pending: Boolean(port) })'));
    assert.ok(popupSrc.includes('if (res && res.pending)'));
    assert.ok(dlSrc.includes('if (res && res.pending)'));
  }
  console.log('✓ AUD-013 passed.');

  // ------------------------------------------------------------------
  // AUD-014: Cross-platform yt-dlp guard in test_multisite_resolution.js
  // ------------------------------------------------------------------
  console.log('[AUD-014] Cross-platform yt-dlp check in test_multisite_resolution.js...');
  {
    const multiSrc = fs.readFileSync(path.join(ROOT, 'tests/test_multisite_resolution.js'), 'utf8');
    assert.ok(
      multiSrc.includes("process.platform==='win32'") && multiSrc.includes('fs.existsSync(ytdlpBin)'),
      'test_multisite_resolution.js must resolve yt-dlp cross-platform and check existence'
    );
  }
  console.log('✓ AUD-014 passed.');

  // ------------------------------------------------------------------
  // AUD-015: Version sync (3.1.0) & execFile for taskkill
  // ------------------------------------------------------------------
  console.log('[AUD-015] Version synchronization & execFile taskkill...');
  {
    const msgs = [];
    host.setMessageHook((m) => msgs.push(m));
    host.handleMessage({ action: 'ping' });
    host.setMessageHook(null);
    const pong = msgs.find((m) => m.action === 'pong');
    assert.ok(pong, 'ping must emit pong');
    assert.strictEqual(pong.version, manifest.version, `Native host version (${pong.version}) must match manifest (${manifest.version})`);

    assert.ok(!hostSrc.includes('exec(`taskkill /F /T /PID'), 'host.js must not invoke taskkill via shell exec()');
    assert.ok(hostSrc.includes("execFile('taskkill', ['/F', '/T', '/PID', String(pid)]"), 'host.js must invoke taskkill via execFile()');
  }
  console.log('✓ AUD-015 passed.');

  console.log('\n======================================================');
  console.log('ALL P2/P3 HARDENING & HYGIENE REGRESSION TESTS PASSED!');
  console.log('======================================================\n');
})().catch((err) => {
  console.error('FAILED:', err);
  process.exit(1);
});
