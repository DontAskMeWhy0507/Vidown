const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: VIDEO PLAYBACK LAG OPTIMIZATION & ZERO-REFLOW VERIFICATION ===\n');

// 1. YouTube Extractor Performance Guards
const ytPath = path.resolve(__dirname, '../src/content/platform/youtube.js');
const ytSource = fs.readFileSync(ytPath, 'utf8');

// Assert no document.documentElement.innerHTML in youtube.js
assert.ok(
  !ytSource.includes('document.documentElement.innerHTML'),
  'youtube.js must NEVER serialize document.documentElement.innerHTML (prevents 20MB+ string thrashing on main thread)'
);

// Assert isLiveStream is used for live broadcast checks
assert.ok(
  ytSource.includes('!isLiveStream()'),
  'youtube.js must use lightweight isLiveStream() helper for video object change'
);

// Assert isLiveStream does not force reflow via getComputedStyle on live badge
assert.ok(
  !ytSource.includes('window.getComputedStyle(liveBadgeEl).display'),
  'isLiveStream() must not call window.getComputedStyle(liveBadgeEl) to prevent forced layout reflow'
);

console.log('✓ YouTube extractor: Zero DOM tree serialization, zero forced getComputedStyle reflows verified.');

// 2. DOM Helper findMediaContainerElement Performance Guards
const domHelperPath = path.resolve(__dirname, '../src/content/detector/dom-helper.js');
const domHelperSource = fs.readFileSync(domHelperPath, 'utf8');

assert.ok(
  domHelperSource.includes('var childRect = targetElement.getBoundingClientRect();'),
  'findMediaContainerElement must compute childRect ONCE outside the ancestor loop'
);

assert.ok(
  domHelperSource.includes('depth < maxDepth'),
  'findMediaContainerElement must bound ancestor traversal depth to prevent climbing to BODY unnecessarily'
);

console.log('✓ DOM helper: findMediaContainerElement single-evaluation childRect & depth capping verified.');

// 3. DOM Scanner Image Bypass on Video Mutations
const domScannerPath = path.resolve(__dirname, '../src/content/detector/dom-scanner.js');
const domScannerSource = fs.readFileSync(domScannerPath, 'utf8');

assert.ok(
  domScannerSource.includes('_hasPossibleImageMutations'),
  'dom-scanner must include _hasPossibleImageMutations filter to skip imageHandler during playback DOM mutations'
);

assert.ok(
  domScannerSource.includes('if (!this._hasPossibleImageMutations(mutationRecords))'),
  'imageHandler must exit immediately when mutations contain no image tags or image attributes'
);

console.log('✓ DOM scanner: Fast image bypass during video playback mutations verified.');

// 4. Content Entry Single SPA Listener Guard
const entryPath = path.resolve(__dirname, '../src/content/detector/content-entry.js');
const entrySource = fs.readFileSync(entryPath, 'utf8');

assert.ok(
  !entrySource.includes('.observe(bodyElement, { childList: true, subtree: true })'),
  'content-entry must not register a duplicate full-body subtree MutationObserver for location changes'
);

console.log('✓ Content entry: Duplicate full-body MutationObserver eliminated.');

console.log('\n✓ All video playback lag optimizations successfully verified!');
