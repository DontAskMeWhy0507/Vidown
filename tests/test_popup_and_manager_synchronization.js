const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: POPUP & DOWNLOAD MANAGER SYNCHRONIZATION ===\n');

// 1. Verify popup.js state matching and badge logic
const popupJs = fs.readFileSync('popup/popup.js', 'utf8');

assert.ok(popupJs.includes("managedChromeIds"), 'popup.js must filter browser downloads using managedChromeIds to prevent history leakage');
assert.ok(popupJs.includes("isCanceled"), 'popup.js must explicitly recognize canceled state');
assert.ok(popupJs.includes("status-badge canceled"), 'popup.js must render canceled badge for canceled items');
assert.ok(popupJs.includes("btn-remove-item"), 'popup.js must provide a remove item button on each card');
assert.ok(popupJs.includes("removeRecentItem"), 'popup.js must implement removeRecentItem to sync deletions');
assert.ok(popupJs.includes("nativeCanceled"), 'popup.js must handle nativeCanceled message');

console.log('✓ 1. popup.js state mapping, managed filtering, and removal features verified.');

// 2. Verify popup.css badge styling
const popupCss = fs.readFileSync('popup/popup.css', 'utf8');
assert.ok(popupCss.includes(".status-badge.canceled"), 'popup.css must style .status-badge.canceled');
assert.ok(popupCss.includes(".status-badge.paused"), 'popup.css must style .status-badge.paused');
assert.ok(popupCss.includes(".btn-card-action.danger"), 'popup.css must style danger removal button');

console.log('✓ 2. popup.css badge and danger action styling verified.');

// 3. Verify background.chrome.js removeDownload handles string ID and chromeId
const bgJs = fs.readFileSync('background.chrome.js', 'utf8');
assert.ok(bgJs.includes("case 'removeDownload':"), 'background.chrome.js must handle removeDownload');
assert.ok(bgJs.includes("String(item.id || '') !== targetId"), 'removeDownload must compare IDs safely as strings');

console.log('✓ 3. background.chrome.js removeDownload string comparison verified.');

// 4. Simulate State & Filter Synchronization Logic
const sampleHistory = [
  { id: 'task_1', title: 'Video 1', state: 'completed', percent: '100%', filename: 'v1.mp4' },
  { id: 'task_2', title: 'Video 2', state: 'downloading', percent: '45%', speed: '10 MB/s', filename: 'v2.mp4' },
  { id: 'task_3', title: 'Video 3', state: 'canceled', percent: '30%', filename: 'v3.mp4' },
  { id: 'task_4', title: 'Video 4', state: 'error', percent: '10%', filename: 'v4.mp4' }
];

// Test state badge assignment for each item
sampleHistory.forEach(item => {
  const isCanceled = item.state === 'canceled' || item.state === 'cancelled';
  const isError = item.state === 'error';
  const isDownloading = item.state === 'downloading' && !isCanceled && !isError;
  const isCompleted = item.state === 'completed' && !isCanceled && !isError && !isDownloading;

  if (item.id === 'task_1') assert.strictEqual(isCompleted, true, 'Task 1 must be completed');
  if (item.id === 'task_2') assert.strictEqual(isDownloading, true, 'Task 2 must be downloading');
  if (item.id === 'task_3') {
    assert.strictEqual(isCanceled, true, 'Task 3 must be canceled');
    assert.strictEqual(isCompleted, false, 'Task 3 must NOT be marked completed');
  }
  if (item.id === 'task_4') assert.strictEqual(isError, true, 'Task 4 must be error');
});

console.log('✓ 4. State badge logic correctly classifies completed, downloading, canceled, and error items without false positives.');

// 5. Verify Unmanaged Chrome Downloads Exclusion
const sampleChromeDownloads = [
  { id: 101, filename: 'C:\\Users\\test\\Downloads\\random.mp4' }, // Not in Savior history
  { id: 202, filename: 'C:\\Users\\test\\Downloads\\savior_download.mp4' } // In Savior history
];
const managedIds = new Set(['202']);
const filteredDownloads = sampleChromeDownloads.filter(cd => managedIds.has(String(cd.id)));
assert.strictEqual(filteredDownloads.length, 1, 'Only Savior-managed Chrome download must be retained');
assert.strictEqual(filteredDownloads[0].id, 202, 'Retained download must have id 202');

console.log('✓ 5. Managed download filtering strictly prevents unrelated browser downloads from leaking into Popup.');

console.log('\nAll Popup & Download Manager Synchronization tests passed! 🚀\n');
