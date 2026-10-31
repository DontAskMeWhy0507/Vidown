/**
 * tests/test_open_file_no_chrome_prompt.js
 * 
 * Verifies that openFile in background.chrome.js prioritizes Native Helper
 * so files open directly on the OS without triggering Chrome's security prompt:
 * "Open download - Allow VidManager to open <filename>?"
 */

const fs = require('fs');
const assert = require('assert');
const path = require('path');

console.log('=== TEST SUITE: OPEN FILE ELIMINATES CHROME PROMPT ===\n');

const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

const openFileIdx = bgCode.indexOf("case 'openFile':");
const showInFolderIdx = bgCode.indexOf("case 'showInFolder':");
assert.ok(openFileIdx !== -1 && showInFolderIdx !== -1, 'case openFile must exist');

const openFileSection = bgCode.slice(openFileIdx, showInFolderIdx);

// 1. Must check getOrCreateNativePort()
assert.ok(
  openFileSection.includes('const port = getOrCreateNativePort()') || openFileSection.includes('getOrCreateNativePort()'),
  'openFile must check for native helper port'
);
console.log('✓ Test 1: openFile checks for active native host port.');

// 2. Must prioritize port before chrome.downloads.open
const portCheckIdx = openFileSection.indexOf('if (port)');
const chromeOpenIdx = openFileSection.indexOf('chrome.downloads.open');

assert.ok(portCheckIdx !== -1, 'openFile must check if (port)');
assert.ok(chromeOpenIdx !== -1, 'openFile must retain chrome.downloads.open as fallback');
assert.ok(portCheckIdx < chromeOpenIdx, 'openFile must prioritize native port before chrome.downloads.open fallback');
console.log('✓ Test 2: Native port is prioritized ahead of chrome.downloads.open (eliminates Chrome security prompt).');

// 3. Must send postMessage with action: 'openFile'
assert.ok(
  openFileSection.includes("action: 'openFile'"),
  'openFile must dispatch action: openFile to native port'
);
console.log('✓ Test 3: Dispatches action: openFile to native port with file details.');

// 4. Must respond with sendResponse and return false
assert.ok(openFileSection.includes('sendResponse({ success: true })'), 'openFile must respond with success: true');
assert.ok(openFileSection.includes('return false'), 'openFile must return false to close channel synchronously');
console.log('✓ Test 4: openFile responds synchronously and returns false.');

console.log('\n======================================================');
console.log('🎉 ALL OPEN FILE CHROME PROMPT ELIMINATION TESTS PASSED!');
console.log('======================================================\n');
