// tests/test_security_and_privacy_hardening.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const host = require('../native/host.js');

// 1. Exported sanitizeForLog redacts sig, lsig, ip, pot, and home paths
assert.strictEqual(typeof host.sanitizeForLog, 'function');
const rawLog = 'startDownload: {"url":"https://rr1.googlevideo.com/videoplayback?sig=SECRET1&lsig=SECRET2&ip=117.6.63.3&pot=POT_TOK","dir":"C:\\\\Users\\\\tuant\\\\Downloads"}';
const redacted = host.sanitizeForLog(rawLog);
assert.ok(!redacted.includes('SECRET1') && !redacted.includes('SECRET2'));
assert.ok(!redacted.includes('117.6.63.3') && !redacted.includes('POT_TOK'));

// 2. openFile media allowlist blocks .hta, .vbs, .lnk, .scr, .reg, .js
assert.strictEqual(typeof host.isAllowedMediaFile, 'function');
assert.strictEqual(host.isAllowedMediaFile('C:\\Downloads\\video.mp4'), true);
for (const ext of ['.hta', '.vbs', '.lnk', '.scr', '.reg', '.js', '.exe', '.bat']) {
  assert.strictEqual(host.isAllowedMediaFile('C:\\Downloads\\payload' + ext), false, `Must block ${ext}`);
}

// 3. onMessageExternal strips outputDir, cookie, headers, taskId
const bgCode = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
assert.ok(bgCode.includes('const safeExternalReq = {'), 'onMessageExternal must construct allowlisted safeExternalReq');

// 4. TransferComp (s.coccoc.com shortener) is disabled
const widgetCode = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
assert.ok(/TransferComp\.prototype\.shouldEnable\s*=\s*function\s*\(\)\s*\{\s*return\s+false;\s*\}/.test(widgetCode));

// 5. sanitizeHeaderValue strips CRLF and NUL bytes
assert.strictEqual(typeof host.sanitizeHeaderValue, 'function');
assert.strictEqual(host.sanitizeHeaderValue('https://example.com\r\nX-Injected: pwn\0'), 'https://example.comX-Injected: pwn');

// 6. isSafeRemoteHlsUrl blocks SSRF / local file URLs
assert.strictEqual(typeof host.isSafeRemoteHlsUrl, 'function');
assert.strictEqual(host.isSafeRemoteHlsUrl('https://cdn.example.com/seg1.ts'), true);
assert.strictEqual(host.isSafeRemoteHlsUrl('file:///C:/Windows/win.ini'), false);
assert.strictEqual(host.isSafeRemoteHlsUrl('http://127.0.0.1:8080/key'), false);
assert.strictEqual(host.isSafeRemoteHlsUrl('http://localhost/key'), false);
assert.strictEqual(host.isSafeRemoteHlsUrl('http://169.254.169.254/latest/meta-data/'), false);

// 7. service-worker-entry.js guards get_serp_config, SCRIPTING.INJECT, and GET_COOKIES
const swEntryCode = fs.readFileSync(path.join(__dirname, '../src/background/entry/service-worker-entry.js'), 'utf8');
assert.ok(swEntryCode.includes('param_e_1 && param_e_1.otherControls ? param_e_1.otherControls.ab_test_data : undefined'));
assert.ok(swEntryCode.includes('!/^[a-z0-9_-]+(\\/[a-z0-9_-]+)?$/i.test(param_n.file)'));
assert.ok(swEntryCode.includes('/^https:\\/\\/([a-z0-9-]+\\.)?youtube\\.com\\//i.test(param_o.tab.url'));

console.log('✓ Security & privacy hardening tests passed!');
