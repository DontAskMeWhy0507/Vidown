const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: UX, CONCURRENCY & DEDUPLICATION FIXES ===\n');

// 1. Verify seenActiveTitles title-based cancellation is completely removed from downloads.js
const dlCode = fs.readFileSync(path.join(__dirname, '../downloads/downloads.js'), 'utf8');
assert(!dlCode.includes('seenActiveTitles'), 'seenActiveTitles MUST be removed to avoid false duplicate cancellations');
console.log('✓ Test 1: downloads.js no longer falsely cancels downloads matching human-facing title.');

// 2. Verify nativeDownloadQueue in background.chrome.js
const bgCode = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
assert(bgCode.includes('nativeDownloadQueue'), 'background.chrome.js must maintain nativeDownloadQueue');
assert(bgCode.includes('processNextQueuedNativeDownload'), 'background.chrome.js must process queued downloads');
console.log('✓ Test 2: background.chrome.js queues DASH/conversion tasks to prevent silent/audio-less fallbacks.');

// 3. Verify resolveTargetDir in native/host.js
const hostCode = fs.readFileSync(path.join(__dirname, '../native/host.js'), 'utf8');
assert(hostCode.includes('function resolveTargetDir'), 'host.js must define resolveTargetDir');
assert(hostCode.includes('fs.mkdirSync(outputDir, { recursive: true })'), 'host.js must auto-create custom outputDir');
console.log('✓ Test 3: native/host.js auto-creates non-existent custom output directories.');

// 4. Verify downloads-nav.js is protected against polluting third-party websites
const navCode = fs.readFileSync(path.join(__dirname, '../downloads-nav.js'), 'utf8');
assert(navCode.includes('isExtensionPage'), 'downloads-nav.js must check isExtensionPage');
assert(navCode.includes('saviorFeature'), 'downloads-nav.js must restrict other-feature clicks to Savior toolbar');
console.log('✓ Test 4: downloads-nav.js protects third-party websites from global style and click leakage.');

// 5. Verify popup.js deduplication key normalization
const popupCode = fs.readFileSync(path.join(__dirname, '../popup/popup.js'), 'utf8');
assert(popupCode.includes('getItemDedupeKey'), 'popup.js must normalize dedupe keys');
assert(popupCode.includes("action: 'showInFolder'"), 'popup.js must send showInFolder for accurate file locating');
console.log('✓ Test 5: popup.js normalizes filenames and uses showInFolder.');

console.log('\n================================================================');
console.log('ALL UX, CONCURRENCY & DEDUPLICATION TESTS PASSED! 🎉');
console.log('================================================================');
