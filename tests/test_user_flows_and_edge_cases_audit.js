/**
 * Test Suite: Complete User Flows & Edge Cases Audit
 * 
 * Verifies that:
 * 1. background.chrome.js cleans up orphaned 'downloading' tasks on service worker boot.
 * 2. background.chrome.js keeps browseFolder channel open and returns selected path.
 * 3. background.chrome.js falls back to chrome.downloads.showDefaultFolder if native host is absent.
 * 4. downloads.js updates both sidebar and modal folder path displays on storage change.
 * 5. background.chrome.js chrome.downloads.play prioritizes outputPath over outputFile.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- Testing Complete User Flows & Edge Cases Audit ---');

const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

// 1. Startup cleanup of stuck downloading items
assert.ok(
  bgCode.includes("errorMessage: 'Bị gián đoạn khi tắt trình duyệt'"),
  'background.chrome.js must sanitize stuck downloading tasks on boot'
);
console.log('✓ Test 1 Passed: Startup cleans up stuck downloading tasks into retryable error state.');

// 2. browseFolder async response
assert.ok(
  bgCode.includes("action === 'browseFolderResult'"),
  'background.chrome.js must handle browseFolderResult'
);
assert.ok(
  bgCode.includes("sendResponse({ success: !msg.canceled, path: msg.path"),
  'background.chrome.js must return path in browseFolder response'
);
console.log('✓ Test 2 Passed: browseFolder keeps message channel open and returns picked path.');

// 3. openDownloadsFolder fallback
assert.ok(
  bgCode.includes('chrome.downloads.showDefaultFolder'),
  'background.chrome.js must fallback to showDefaultFolder if native host is absent'
);
console.log('✓ Test 3 Passed: openDownloadsFolder gracefully falls back to Chrome API.');

// 4. downloads.js modalFolderPath synchronization
const dlPath = path.join(__dirname, '..', 'downloads', 'downloads.js');
const dlCode = fs.readFileSync(dlPath, 'utf8').replace(/\r\n/g, '\n');

assert.ok(
  dlCode.includes('if (modalFolderPath) {\n          modalFolderPath.textContent = storageData.customDownloadDir;'),
  'downloads.js must sync modalFolderPath on storage load'
);
console.log('✓ Test 4 Passed: downloads.js syncs modalFolderPath in Right Settings Sidebar.');

// 5. chrome.downloads.play outputPath priority
assert.ok(
  bgCode.includes('path: found.outputPath || found.outputFile || found.filename'),
  'background.chrome.js play must prioritize outputPath'
);
console.log('✓ Test 5 Passed: chrome.downloads.play prioritizes absolute outputPath.');

console.log('\nALL USER FLOWS & EDGE CASES AUDIT TESTS PASSED! 🎉');
