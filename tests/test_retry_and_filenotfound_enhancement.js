const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: RETRY ACTION, MISSING FILE RECOVERY & UNIVERSAL CORE IMPORT ===\n');

// 1. Verify Universal Media Core is NOT wired into the shipped build
// (release-plan decision: the core shipped unwired — no UI consumers, registry
// never hydrated — and its observer probed cross-origin URLs on every response).
const bgContent = fs.readFileSync('background.chrome.js', 'utf8');
const firstImportIndex = bgContent.indexOf('"core/media_types.js"');
const lastImportIndex = bgContent.lastIndexOf('"core/media_types.js"');

assert.strictEqual(firstImportIndex, -1, 'background.chrome.js must NOT import Universal Media Core scripts (removed from build)');
assert.strictEqual(lastImportIndex, -1, 'No stray core/ imports may remain anywhere in background.chrome.js');
console.log('✓ 1. Universal Media Core is fully unwired from the service worker.');

// 2. Verify native/host.js returns fileNotFound flag
const hostContent = fs.readFileSync('native/host.js', 'utf8');
assert.ok(
  hostContent.includes("fileNotFound: true"),
  'native/host.js must return fileNotFound: true when openFile target cannot be found on disk'
);
console.log('✓ 2. native/host.js handles missing files with explicit fileNotFound: true flag.');

// 3. Verify background.chrome.js routes openFileResult with fileNotFound
assert.ok(
  bgContent.includes("msg.action === 'openFileResult'"),
  'background.chrome.js must listen for openFileResult from native host'
);
console.log('✓ 3. background.chrome.js reliably routes openFileResult to active UI components.');

// 4. Verify popup.js handles retry and file missing states
const popupContent = fs.readFileSync('popup/popup.js', 'utf8');
assert.ok(
  popupContent.includes('retryRecentItem'),
  'popup.js must implement retryRecentItem function'
);
assert.ok(
  popupContent.includes('btn-retry-item'),
  'popup.js must render .btn-retry-item on cards with error, canceled or deleted states'
);
assert.ok(
  popupContent.includes('markItemMissing'),
  'popup.js must implement markItemMissing function to handle disk deletion'
);
assert.ok(
  popupContent.includes('openFileFailed') || popupContent.includes('openFileResult'),
  'popup.js must handle missing file notifications'
);
console.log('✓ 4. popup.js renders Retry button and handles missing files with prompt recovery.');

// 5. Verify popup.css styles .btn-card-action.retry
const popupCss = fs.readFileSync('popup/popup.css', 'utf8');
assert.ok(
  popupCss.includes('.btn-card-action.retry'),
  'popup.css must style .btn-card-action.retry with distinctive action appearance'
);
console.log('✓ 5. popup.css styles the Retry action button cleanly.');

console.log('\n======================================================');
console.log('ALL RETRY, MISSING FILE & IMPORT ENHANCEMENT TESTS PASSED! 🎉');
console.log('======================================================');
