/**
 * Test Suite: Save As Double Prompt & In-Flight Download Deduplication Fix
 *
 * Verifies that:
 * 1. background.chrome.js contains in-flight URL deduplication (isUrlRecentlyRequested)
 * 2. startBrowserDownload suppresses duplicate requests while a Save As / browser download is in flight
 * 3. startCocCocSessionDownload suppresses duplicate requests in flight
 * 4. chrome.downloads.download suppresses duplicate calls in flight
 * 5. case 'download' suppresses duplicate calls in flight
 * 6. native/com.savior.helper.json has relative portable path host.exe and matching extension ID
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');

console.log('=== TEST SUITE: SAVE AS DOUBLE PROMPT & IN-FLIGHT DEDUP FIX ===\n');

const ROOT = path.resolve(__dirname, '..');
const bgCode = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');

// 1. in-flight URL tracker definition
console.log('[Test 1] Verifying in-flight URL deduplication function...');
assert.ok(
  bgCode.includes('inFlightBrowserDownloads = new Map()'),
  'Must define inFlightBrowserDownloads Map'
);
assert.ok(
  bgCode.includes('function isUrlRecentlyRequested(u)'),
  'Must define isUrlRecentlyRequested helper'
);
console.log('✓ In-flight URL deduplication tracker verified.\n');

// 2. startBrowserDownload in-flight guard
console.log('[Test 2] Verifying startBrowserDownload in-flight guard...');
const sbdIdx = bgCode.indexOf('function startBrowserDownload(options, callback)');
assert.ok(sbdIdx !== -1, 'startBrowserDownload must exist');
const sbdBlock = bgCode.slice(sbdIdx, sbdIdx + 800);
assert.ok(
  sbdBlock.includes('if (isUrlRecentlyRequested(targetUrl))'),
  'startBrowserDownload must check isUrlRecentlyRequested(targetUrl)'
);
console.log('✓ startBrowserDownload in-flight guard verified.\n');

// 3. startCocCocSessionDownload in-flight guard
console.log('[Test 3] Verifying startCocCocSessionDownload in-flight guard...');
const scsdIdx = bgCode.indexOf('function startCocCocSessionDownload(options, callback)');
assert.ok(scsdIdx !== -1, 'startCocCocSessionDownload must exist');
const scsdBlock = bgCode.slice(scsdIdx, scsdIdx + 800);
assert.ok(
  scsdBlock.includes('if (isUrlRecentlyRequested(targetUrl))'),
  'startCocCocSessionDownload must check isUrlRecentlyRequested(targetUrl)'
);
console.log('✓ startCocCocSessionDownload in-flight guard verified.\n');

// 4. chrome.downloads.download in-flight guard
console.log('[Test 4] Verifying chrome.downloads.download in-flight guard...');
const cddIdx = bgCode.indexOf('chrome.downloads.download = function(options, callback)');
assert.ok(cddIdx !== -1, 'chrome.downloads.download must exist');
const cddBlock = bgCode.slice(cddIdx, cddIdx + 2500);
assert.ok(
  cddBlock.includes('if (isUrlRecentlyRequested(reqUrl))'),
  'chrome.downloads.download must check isUrlRecentlyRequested(reqUrl)'
);
console.log('✓ chrome.downloads.download in-flight guard verified.\n');

// 5. case 'download' in-flight guard
console.log('[Test 5] Verifying case download in-flight guard...');
const caseDlIdx = bgCode.indexOf("case 'download':");
assert.ok(caseDlIdx !== -1, "case 'download' must exist");
const caseDlBlock = bgCode.slice(caseDlIdx, caseDlIdx + 1000);
assert.ok(
  caseDlBlock.includes('if (isUrlRecentlyRequested(rawUrl))'),
  "case 'download' must check isUrlRecentlyRequested(rawUrl)"
);
console.log("✓ case 'download' in-flight guard verified.\n");

// 6. com.savior.helper.json configuration
console.log('[Test 6] Verifying native helper JSON configuration...');
const helperJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'native/com.savior.helper.json'), 'utf8'));
const manifestJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));

// Extension ID check
const crypto = require('crypto');
const pubKey = Buffer.from(manifestJson.key, 'base64');
const hash = crypto.createHash('sha256').update(pubKey).digest('hex');
const expectedExtId = hash.slice(0, 32).split('').map(c => String.fromCharCode(parseInt(c, 16) + 97)).join('');

assert.strictEqual(helperJson.path, 'host.exe', 'path must be host.exe');
assert.ok(
  helperJson.allowed_origins.some(o => o.includes(expectedExtId)),
  `allowed_origins must contain extension ID ${expectedExtId}`
);
console.log('✓ Native helper manifest matches extension ID and uses portable host.exe!\n');

console.log('================================================================');
console.log('ALL SAVE AS DOUBLE PROMPT FIX TESTS PASSED! 🎉');
console.log('================================================================\n');
