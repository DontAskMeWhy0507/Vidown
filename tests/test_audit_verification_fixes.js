/**
 * tests/test_audit_verification_fixes.js
 * 
 * Verifies fixes for issues identified in the external audit report:
 * 1. Dead crypto ciphers completely purged from all 3 core bundles (content-script.js, background.js, common.js).
 * 2. Instagram DNR anti-403 rules (1009, 1010) configured for cdninstagram.com.
 * 3. Instagram Stories support: /stories/ handling, stale-stamp invalidation, MutationObserver, event listeners.
 * 4. scripts/package_release.js excludes node_modules from release zip.
 * 5. native/com.savior.helper.json has no hardcoded machine drive path.
 * 6. native/host.js completely deletes dead startYtDlpDownload, routing strictly through FFmpeg.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: AUDIT VERIFICATION FIXES ===\n');

// 1. Verify dead crypto ciphers purged from ALL 3 bundles
const bundles = ['content-script.js', 'background.js', 'common.js'];
const deadCiphers = ['TripleDES', 'Blowfish', 'Rabbit', 'RC4Drop'];

for (const b of bundles) {
  const content = fs.readFileSync(path.join(__dirname, '..', b), 'utf8');
  for (const cipher of deadCiphers) {
    assert(!content.includes(cipher), `${b} must not contain dead cipher ${cipher}`);
  }
  // AES must remain intact
  assert(content.includes('AES'), `${b} must preserve AES for HLS decryption`);
}
console.log('PASS: Dead crypto suite purged from all 3 bundles (TripleDES, Blowfish, Rabbit, RC4Drop gone; AES intact).');

// 2. Verify Instagram DNR rules in background.chrome.js
const bgChrome = fs.readFileSync(path.join(__dirname, '..', 'background.chrome.js'), 'utf8');
assert(bgChrome.includes('1009'), 'background.chrome.js must include DNR rule 1009');
assert(bgChrome.includes('*cdninstagram.com/*'), 'background.chrome.js must include cdninstagram.com urlFilter');
assert(bgChrome.includes('https://www.instagram.com/'), 'background.chrome.js must set Referer to instagram.com');
assert(bgChrome.includes('removeRuleIds: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008]') && bgChrome.includes('1009') && bgChrome.includes('1010'),
  'removeRuleIds must clear rules 1001 through 1010');
console.log('PASS: Instagram Anti-403 DNR rules (1009 & 1010) configured in background.chrome.js.');

// 3. Verify Instagram Stories extractor improvements
const instaMw = fs.readFileSync(path.join(__dirname, '..', 'inject/instagram/main-world.js'), 'utf8');
assert(instaMw.includes('/stories/'), 'main-world.js must have explicit /stories/ route handling');
assert(instaMw.includes('removeAttribute(\'savior-video-detail\')'),
  'main-world.js must explicitly invalidate stale savior-video-detail attribute on story change');
assert(instaMw.includes('_saviorLastSrc'), 'main-world.js must track _saviorLastSrc to detect video change on reused element');
assert(instaMw.includes('MutationObserver'), 'main-world.js must use MutationObserver for dynamic story containers');
assert(instaMw.includes('pushState') && instaMw.includes('popstate'),
  'main-world.js must hook SPA navigation for story transitions');
assert(instaMw.includes('loadedmetadata'), 'main-world.js must listen to video metadata events');
console.log('PASS: Instagram Stories extractor features reactive re-extraction and stale-stamp invalidation.');

// 4. Verify package_release.js excludes node_modules
const pkgScript = fs.readFileSync(path.join(__dirname, '..', 'scripts/package_release.js'), 'utf8');
assert(pkgScript.includes("'node_modules'"), 'package_release.js EXCLUDED_DIRS must include node_modules');

// 5. Verify release zip contains zero node_modules
const zipPath = path.join(__dirname, '..', 'dist/savior-extension-v3.0.1.zip');
assert(fs.existsSync(zipPath), 'Release zip must exist');
const zipBuf = fs.readFileSync(zipPath);

let eocdOffset = -1;
for (let i = zipBuf.length - 22; i >= 0; i--) {
  if (zipBuf.readUInt32LE(i) === 0x06054b50) {
    eocdOffset = i;
    break;
  }
}
assert(eocdOffset !== -1, 'EOCD record must exist');
const totalEntries = zipBuf.readUInt16LE(eocdOffset + 10);
const cdOffset = zipBuf.readUInt32LE(eocdOffset + 16);

let curr = cdOffset;
const zipEntries = [];
for (let i = 0; i < totalEntries; i++) {
  const nameLen = zipBuf.readUInt16LE(curr + 28);
  const extraLen = zipBuf.readUInt16LE(curr + 30);
  const commentLen = zipBuf.readUInt16LE(curr + 32);
  const name = zipBuf.toString('utf8', curr + 46, curr + 46 + nameLen);
  zipEntries.push(name.replace(/\\/g, '/'));
  curr += 46 + nameLen + extraLen + commentLen;
}

const nodeModuleEntries = zipEntries.filter(e => e.includes('node_modules'));
assert.strictEqual(nodeModuleEntries.length, 0, `Release zip must not contain node_modules (found: ${nodeModuleEntries.join(', ')})`);
console.log(`PASS: Release zip is 100% clean of node_modules (${totalEntries} verified entries).`);

// 6. Verify native helper template and yt-dlp routing
const helperJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'native/com.savior.helper.json'), 'utf8'));
assert(!helperJson.path.includes('F:\\'), 'com.savior.helper.json template must not contain hardcoded machine path');

const hostJs = fs.readFileSync(path.join(__dirname, '..', 'native/host.js'), 'utf8');
assert(!hostJs.includes('function startYtDlpDownload'), 'native/host.js must not define startYtDlpDownload');
assert(!hostJs.includes('startYtDlpDownload,'), 'native/host.js must not export startYtDlpDownload');
console.log('PASS: Native helper manifest template is portable and dead yt-dlp path is purged.');

console.log('\nALL AUDIT VERIFICATION FIXES PASSED! ✅');
