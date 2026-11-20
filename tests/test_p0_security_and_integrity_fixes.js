/**
 * Regression Test Suite: P0 Security & Data Integrity Audit Fixes (AUD-001 .. AUD-005)
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const os = require('os');
const vm = require('vm');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
const host = require('../native/host');
const outputFiles = require('../native/lib/output-files');

console.log('=== TEST SUITE: P0 SECURITY & DATA INTEGRITY REGRESSIONS ===\n');

(async () => {
  // ------------------------------------------------------------------
  // AUD-001: popup/popup.js must NEVER call chrome.downloads.erase({ id: undefined })
  // ------------------------------------------------------------------
  console.log('[AUD-001] Popup removeRecentItem chrome.downloads.erase guard...');
  {
    const popupSrc = fs.readFileSync(path.join(ROOT, 'popup/popup.js'), 'utf8');
    assert.ok(
      !popupSrc.includes('chrome.downloads.erase({ id: item.chromeId }'),
      'popup.js must not pass raw item.chromeId into chrome.downloads.erase'
    );
    assert.ok(
      popupSrc.includes('Number.isInteger(validChromeId)') &&
      popupSrc.includes('chrome.downloads.erase({ id: validChromeId }'),
      'popup.js must validate validChromeId as positive integer before calling erase'
    );
  }
  console.log('✓ AUD-001 passed.');

  // ------------------------------------------------------------------
  // AUD-002: background.chrome.js resolveSelectedPage must NOT treat content scripts as extension callers
  // ------------------------------------------------------------------
  console.log('[AUD-002] resolveSelectedPage origin enforcement with real chrome.runtime.id...');
  {
    const bgSrc = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');
    const startIdx = bgSrc.indexOf('function resolveSelectedPage(req, sender)');
    const endIdx = bgSrc.indexOf('\nconst cachedContentCss =', startIdx);
    assert.ok(startIdx > 0 && endIdx > startIdx, 'Could not locate resolveSelectedPage');
    const fnSrc = bgSrc.slice(startIdx, endIdx);

    const extId = 'nnjbdidmmnecdmcllkcaajboplpcimcf';
    const fakePort = {
      onMessage: { addListener() {}, removeListener() {} },
      onDisconnect: { addListener() {}, removeListener() {} },
      postMessage(msg) {
        this._lastMsg = msg;
      }
    };
    const ctx = vm.createContext({
      URL,
      Map,
      Date,
      Math,
      Promise,
      setTimeout,
      clearTimeout,
      canUseNativePageExtractor: () => true,
      getOrCreateNativePort: () => fakePort,
      chrome: {
        runtime: {
          id: extId,
          getURL: (p) => `chrome-extension://${extId}/${p || ''}`
        },
        cookies: {
          getAll: (_q, cb) => cb([{ name: 'SID', value: 'SECRET' }])
        }
      }
    });
    vm.runInContext('const mediaResolutionCache = new Map();\n' + fnSrc, ctx);

    // 1. Content script on evil.example has sender.id === chrome.runtime.id AND sender.tab!
    const crossOriginContentScript = {
      id: extId,
      tab: { id: 7, url: 'https://evil.example/page' },
      url: 'https://evil.example/page'
    };
    const resBlocked = await ctx.resolveSelectedPage(
      { pageUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      crossOriginContentScript
    );
    assert.strictEqual(
      resBlocked.error,
      'INVALID_PAGE_ORIGIN',
      'Cross-origin content script with sender.id === chrome.runtime.id MUST be blocked'
    );

    // 2. Spoofed sender without tab but non-extension URL must ALSO be blocked
    const spoofedNonExt = {
      id: extId,
      url: 'https://evil.example/frame'
    };
    const resSpoofed = await ctx.resolveSelectedPage(
      { pageUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      spoofedNonExt
    );
    assert.strictEqual(
      resSpoofed.error,
      'INVALID_PAGE_ORIGIN',
      'Non-extension URL caller MUST be blocked'
    );
  }
  console.log('✓ AUD-002 passed.');

  // ------------------------------------------------------------------
  // AUD-003: Path traversal via taskId/outputDir & openFile allowlist + SVG block
  // ------------------------------------------------------------------
  console.log('[AUD-003] Path safety: sanitizeTaskId, outputDir validation, openFile order & .svg block...');
  {
    assert.strictEqual(outputFiles.sanitizeTaskId('../../etc/passwd'), '______etc_passwd');
    assert.strictEqual(outputFiles.isSafeOutputDirectory('/'), false);
    assert.strictEqual(outputFiles.isSafeOutputDirectory('/etc'), false);
    assert.strictEqual(outputFiles.isSafeOutputDirectory(path.join(os.homedir(), '.ssh')), false);
    assert.strictEqual(outputFiles.isSafeOutputDirectory(os.tmpdir()), true);

    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vidown-aud003-'));
    try {
      const job = outputFiles.createJobFileContext({
        taskId: '../../../escape',
        outputDir: tmpDir,
        filename: 'video.mp4'
      });
      assert.ok(
        path.resolve(job.partPath).startsWith(path.resolve(tmpDir) + path.sep),
        'createJobFileContext must keep partPath strictly inside targetDir even with traversal taskId'
      );

      // .svg must be blocked from direct media launch
      assert.strictEqual(host.isAllowedMediaFile('malicious.svg'), false, '.svg must not be allowed for direct OS launch');
      assert.strictEqual(host.isAllowedMediaFile('normal.mp4'), true);

      // resolveTargetDir must reject root / system dirs and fall back to Downloads
      const fallback = host.resolveTargetDir('/');
      assert.strictEqual(fallback, path.join(os.homedir(), 'Downloads'));

      // openFile must reject files outside allowed dir even if attacker passes outputDir: '/'
      const msgs = [];
      host.setMessageHook((m) => msgs.push(m));
      host.handleMessage({
        action: 'openFile',
        taskId: 'aud003-open',
        path: '/etc/hosts',
        outputDir: '/'
      });
      host.setMessageHook(null);
      const openRes = msgs.find((m) => m.action === 'openFileResult' && m.taskId === 'aud003-open');
      assert.ok(openRes, 'openFile must emit openFileResult');
      assert.strictEqual(openRes.success, false, 'openFile on /etc/hosts with outputDir="/" must fail');
      assert.strictEqual(openRes.openedFolder, false, 'openFile must not open folder for blocked outside-dir path');
    } finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  }
  console.log('✓ AUD-003 passed.');

  // ------------------------------------------------------------------
  // AUD-004: SSRF & LFI protections (RFC 1918, IPv6, EXT-X-MEDIA, DASH MPD, protocol_whitelist)
  // ------------------------------------------------------------------
  console.log('[AUD-004] SSRF/LFI protections (private IPs, EXT-X-MEDIA, DASH MPD, redirects)...');
  {
    // Private & mapped IP blocking
    const unsafeUrls = [
      'http://10.0.0.1/secret',
      'http://172.16.0.5/internal',
      'http://172.31.255.254/internal',
      'http://192.168.1.1/router',
      'http://[::ffff:127.0.0.1]/local',
      'http://[::ffff:10.0.0.1]/private',
      'http://[fc00::1]/ula',
      'http://[fe80::1]/linklocal',
      'file:///etc/passwd',
      'data:text/plain;base64,SGVsbG8='
    ];
    for (const u of unsafeUrls) {
      assert.strictEqual(host.isSafeRemoteHlsUrl(u), false, `isSafeRemoteHlsUrl must block ${u}`);
    }
    assert.strictEqual(host.isSafeRemoteHlsUrl('https://cdn.example.com/playlist.m3u8'), true);

    // EXT-X-MEDIA unsafe URI must be dropped (not kept in rewritten playlist)
    const tmpHlsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vidown-aud004-hls-'));
    try {
      const maliciousPlaylist = [
        '#EXTM3U',
        '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="a",NAME="bad",URI="http://192.168.1.1/secret.m3u8"',
        '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="a",NAME="lfi",URI="file:///etc/passwd"',
        '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="a",NAME="ok",URI="https://cdn.example.com/audio.m3u8"',
        '#EXTINF:4.0,',
        'https://cdn.example.com/seg1.ts'
      ].join('\n');
      const rewritten = await host.rewriteHlsPlaylistLines(
        maliciousPlaylist,
        'https://cdn.example.com/master.m3u8',
        tmpHlsDir,
        'https://cdn.example.com/',
        ''
      );
      assert.ok(!rewritten.text.includes('192.168.1.1'), 'Unsafe RFC1918 EXT-X-MEDIA URI must be stripped');
      assert.ok(!rewritten.text.includes('file:///etc/passwd'), 'Unsafe file:// EXT-X-MEDIA URI must be stripped');
      assert.ok(rewritten.text.includes('https://cdn.example.com/audio.m3u8'), 'Safe EXT-X-MEDIA URI must be preserved');
    } finally {
      fs.rmSync(tmpHlsDir, { recursive: true, force: true });
    }

    // DASH MPD validation
    assert.strictEqual(
      host.isSafeDashManifest('<MPD><BaseURL>file:///etc/passwd</BaseURL></MPD>', 'https://cdn.example.com/'),
      false,
      'DASH MPD with file:// BaseURL must be rejected'
    );
    assert.strictEqual(
      host.isSafeDashManifest('<MPD><BaseURL>http://10.0.0.2/internal/</BaseURL></MPD>', 'https://cdn.example.com/'),
      false,
      'DASH MPD with RFC1918 BaseURL must be rejected'
    );
    assert.strictEqual(
      host.isSafeDashManifest('<MPD><Period><AdaptationSet><SegmentTemplate media="seg_$Number$.m4s"/></AdaptationSet></Period></MPD>', 'https://cdn.example.com/vid/'),
      true,
      'Safe relative DASH MPD with public baseUrl must be allowed'
    );

    // Verify remote FFmpeg args no longer include file/data in protocol_whitelist
    const hostSrc = fs.readFileSync(path.join(ROOT, 'native/host.js'), 'utf8');
    assert.ok(
      !hostSrc.includes("'file,http,https,tcp,tls,crypto,data'"),
      'host.js must not unconditionally pass file,data in -protocol_whitelist'
    );
  }
  console.log('✓ AUD-004 passed.');

  // ------------------------------------------------------------------
  // AUD-005: Cross-origin cookie leak fix in startFfmpegMux & direct/HLS streams
  // ------------------------------------------------------------------
  console.log('[AUD-005] Cross-origin cookie scoping in startFfmpegMux & HLS...');
  {
    const hostSrc = fs.readFileSync(path.join(ROOT, 'native/host.js'), 'utf8');
    assert.ok(
      hostSrc.includes('const videoHeaders = probeVideo.headers || reqHeadersObj;') &&
      hostSrc.includes('const audioHeaders = probeAudio.headers || reqHeadersObj;'),
      'startFfmpegMux must pass probeVideo.headers / probeAudio.headers (stripped on cross-origin redirect)'
    );
    assert.ok(
      hostSrc.includes('const keyCookie = baseUrl && isSameOriginOrSubdomain(baseUrl, absKeyUrl) ? safeCookie : \'\';'),
      'rewriteHlsPlaylistLines must scope key cookies to same-origin'
    );
    assert.ok(
      hostSrc.includes('Blocked cross-origin cookie forward in direct stream'),
      'startFfmpegDirectStream must guard against cross-origin cookie forwarding'
    );
  }
  console.log('✓ AUD-005 passed.');

  console.log('\n======================================================');
  console.log('ALL P0 SECURITY & DATA INTEGRITY REGRESSION TESTS PASSED!');
  console.log('======================================================\n');
})().catch((err) => {
  console.error('FAILED:', err);
  process.exit(1);
});
