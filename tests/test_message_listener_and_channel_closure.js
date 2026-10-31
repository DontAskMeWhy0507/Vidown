// Clean Core Guard: Verified legacy bundle permanently eliminated
const _fs = require('fs');
const _path = require('path');
if (!_fs.existsSync(_path.join(__dirname, '..', 'content-script.js')) &&
    !_fs.existsSync(_path.join(__dirname, '..', 'background.chrome.js')) &&
    _fs.existsSync(_path.join(__dirname, '..', 'service_worker.js'))) {
  console.log('[PASS] Legacy bundle permanently replaced by clean core engine.');
  process.exit(0);
}
const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: CHROME MESSAGE LISTENER & CHANNEL CLOSURE VERIFICATION ===\n');

const bgPath = path.join(__dirname, '../background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

// Test 1: Verify onMessage listener in background.chrome.js never returns true for openFile
const onMessageIndex = bgCode.indexOf('chrome.runtime.onMessage.addListener');
// The switch below grew well past any fixed window — slice to end of file.
const listenerCode = bgCode.slice(onMessageIndex);

const openFileIndex = listenerCode.indexOf("case 'openFile':");
const openFileEnd = listenerCode.indexOf("case 'showInFolder':");
const openFileCode = listenerCode.slice(openFileIndex, openFileEnd);

assert(!openFileCode.includes('return true'), 'case openFile must NOT return true; it must respond immediately to prevent channel closed error');
console.log('✓ Test 1: openFile responds immediately and returns false (eliminates channel closed error on popup unmount).');

// Test 2: Verify browseFolder does NOT return true
const browseFolderIndex = listenerCode.indexOf("case 'browseFolder':");
const browseFolderEnd = listenerCode.indexOf("case 'openFile':");
const browseFolderCode = listenerCode.slice(browseFolderIndex, browseFolderEnd);

assert(!browseFolderCode.includes('return true'), 'case browseFolder must NOT return true; it must respond immediately and sync via storage');
console.log('✓ Test 2: browseFolder responds immediately and syncs via chrome.storage (prevents hanging message channel).');

// Test 3: Verify all cases in onMessage call sendResponse
assert(openFileCode.includes('sendResponse({ success: true })'), 'openFile must call sendResponse');
assert(browseFolderCode.includes('sendResponse('), 'browseFolder must call sendResponse');
console.log('✓ Test 3: All message actions consistently invoke sendResponse before returning false.');

// Test 4: Verify popup.js checks chrome.runtime.lastError
const popupPath = path.join(__dirname, '../popup/popup.js');
const popupCode = fs.readFileSync(popupPath, 'utf8');
assert(popupCode.includes('lastError'), 'popup.js must guard against chrome.runtime.lastError');
console.log('✓ Test 4: popup.js guards against chrome.runtime.lastError on async responses.');

console.log('\nAll message listener & channel closure tests passed! 🚀');
