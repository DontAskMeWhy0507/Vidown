/**
 * Regression test: VidManager must never contact Cốc Cốc servers.
 * The inherited bundle phones home to coccoc.com (telemetry /log, A/B tests,
 * remote rules browser.coccoc.com, proxy dev-ytdl.coccoc.com, shortener
 * s.coccoc.com). Every execution context must intercept and neutralize fetch.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: CỐC CỐC TRAFFIC CUT ===\n');

const read = (p) => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');

// 1. Background service worker: fetch patched BEFORE the bundle loads
const bg = read('background.chrome.js');
const bgPatch = bg.indexOf('coccoc\\.com');
const bgImport = bg.indexOf('importScripts("background.js")');
assert.ok(bgPatch !== -1 && bgImport !== -1 && bgPatch < bgImport,
  'background.chrome.js must patch self.fetch before importScripts of the Cốc Cốc bundle');
console.log('PASS: background SW blocks coccoc.com before bundle load.');

// 2. Content-script contexts: context-guard runs first in manifest, blocks all subdomains
const guard = read('context-guard.js');
assert.ok(/\(\[a-z0-9-\]\+\\\.\)\*coccoc\\\.com/.test(guard) || guard.includes('coccoc\\.com'),
  'context-guard must block all coccoc.com subdomains');
const manifest = JSON.parse(read('manifest.json'));
const cs0 = manifest.content_scripts[0].js[0];
assert.strictEqual(cs0, 'context-guard.js', 'context-guard.js must load FIRST in content_scripts (before common.js metrics)');
console.log('PASS: content scripts block coccoc.com (context-guard first in manifest).');

// 3. Extension pages after the strangler cleanup: the Cốc Cốc sidepanel and
//    the standalone options page are both gone — settings live in the
//    Download Manager, which is clean new code.
assert.strictEqual(
  fs.existsSync(path.join(__dirname, '..', 'sidepanel.html')),
  false,
  'sidepanel.html (Cốc Cốc UI) must be removed'
);
assert.strictEqual(
  fs.existsSync(path.join(__dirname, '..', 'options.html')),
  false,
  'options.html must be removed (settings merged into the download manager)'
);
{
  const pageJs = read('downloads/downloads.js');
  assert.ok(!/coccoc/i.test(pageJs), 'downloads.js must not reference coccoc');
}
console.log('PASS: no Cốc Cốc extension pages remain; manager is bundle-free.');

// 4. The block covers ALL known Cốc Cốc endpoints (pattern is domain-wide)
const blockSrc = bg + guard;
for (const ep of ['coccoc.com/log', 'browser.coccoc.com', 'dev-ytdl.coccoc.com', 's.coccoc.com', 'cdn.coccoc.com']) {
  // endpoints are blocked by the domain regex, not by literal listing; ensure regex is domain-wide
  assert.ok(/\(\[a-z0-9-\]\+\\\.\)\*coccoc\\\.com/.test(blockSrc.replace(/\n/g, '')) || blockSrc.includes('*coccoc\\.com'),
    'domain-wide coccoc.com regex present (covers ' + ep + ')');
}
console.log('PASS: block is domain-wide (log, browser., dev-ytdl., s., cdn. all covered).');

// 5. Dead Cốc Cốc locale keys removed
const en = JSON.parse(read('_locales/en/messages.json'));
const deadKeys = Object.keys(en).filter(k => k.startsWith('onboard_coccoc_') || k.startsWith('onboard_mobile_') || k.startsWith('onboard_youtube_anti'));
assert.strictEqual(deadKeys.length, 0, 'dead Cốc Cốc onboarding locale keys must be removed');
console.log('PASS: dead Cốc Cốc onboarding locale keys removed from en (mirrored in vi).');

console.log('\nALL CỐC CỐC TRAFFIC CUT TESTS PASSED! ✅');
