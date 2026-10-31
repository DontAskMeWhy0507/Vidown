/**
 * Regression test: YouTube DASH download flows deliver url/videoUrl as an
 * ARRAY of candidate streams. resolveRealStreamForDownload called
 * targetUrl.includes() on the array and crashed the whole download handler
 * with "TypeError: targetUrl.includes is not a function".
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: ARRAY URL NORMALIZATION ===\n');

const bg = fs.readFileSync(path.join(__dirname, '..', 'background.chrome.js'), 'utf8');

// 1. resolveRealStreamForDownload must guard non-string input at entry
const resolveIdx = bg.indexOf('function resolveRealStreamForDownload');
assert.ok(resolveIdx !== -1, 'resolveRealStreamForDownload found');
const resolveSlice = bg.slice(resolveIdx, resolveIdx + 500);
assert.ok(
  resolveSlice.includes('Array.isArray(targetUrl)') && resolveSlice.includes("typeof targetUrl !== 'string'"),
  'resolveRealStreamForDownload must normalize array/non-string input before any string call'
);
console.log('PASS: resolveRealStreamForDownload is array-safe at entry.');

// 2. startNativeDownload must normalize url/videoUrl/audioUrl BEFORE the probe guard
const startIdx = bg.indexOf('function startNativeDownload');
assert.ok(startIdx !== -1, 'startNativeDownload found');
const startSlice = bg.slice(startIdx, startIdx + 1400);
assert.ok(startSlice.indexOf('normalizeStreamField') < startSlice.indexOf('nativeProbeSettled && !nativeHelperAvailable'),
  'startNativeDownload must normalize stream fields before any early return');
assert.ok(
  startSlice.includes('Array.isArray(downloadParams.audioUrl)'),
  'audioUrl arrays must be normalized too'
);
console.log('PASS: startNativeDownload normalizes array stream fields first.');

// 3. Content-script CSS fallback must not load extension URLs from an orphaned context
const cs = fs.readFileSync(path.join(__dirname, '..', 'content-script.js'), 'utf8');
assert.ok(cs.includes('_saviorCssContextAlive'), 'context-alive guard helper exists');
assert.ok(cs.includes('_saviorCssFallbackLink'), 'single guarded fallback helper exists');
const aliveIdx = cs.indexOf('function _saviorCssContextAlive');
const aliveSlice = cs.slice(aliveIdx, aliveIdx + 300);
assert.ok(aliveSlice.includes('chrome.runtime.id'), 'guard must check chrome.runtime.id (undefined after reload)');
console.log('PASS: CSS link fallback bails out after extension reload (no console spam).');

console.log('\nALL ARRAY URL NORMALIZATION TESTS PASSED! ✅');
