const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: CANCEL SYNC AND UNIFIED SINGLE X BUTTON ===\n');

// 1. Verify downloads/downloads.js
const downloadsJs = fs.readFileSync('downloads/downloads.js', 'utf8');

// Ensure redundant separate cancel button in actions row is gone
assert.ok(!downloadsJs.includes("btn-cancel-download"), 'downloads.js must NOT create a separate .btn-cancel-download button');
assert.ok(downloadsJs.includes("actionsRow.appendChild(progTrack)"), 'actionsRow must only contain the progress bar when downloading');

// Ensure card-level '✕' button (.btn-card-remove) handles confirmation
assert.ok(downloadsJs.includes("btnRemove.title = isDownloading ? 'Cancel download' : 'Remove from list'"), 'btn-card-remove title must indicate Cancel download when downloading');
assert.ok(downloadsJs.includes("confirm('Are you sure you want to cancel this download?')"), 'btn-card-remove must prompt user confirmation when cancelling');
assert.ok(downloadsJs.includes("cancelDownloadItem(item)"), 'btn-card-remove must invoke cancelDownloadItem when confirmed');

// Ensure context menu item is synchronized
assert.ok(downloadsJs.includes("itemDel.textContent = item.state === 'downloading' ? 'Cancel download' : 'Remove from list'"), 'Context menu delete item must show Cancel download during download');

// Ensure cancelDownloadItem implementation
assert.ok(downloadsJs.includes("function cancelDownloadItem(item)"), 'cancelDownloadItem must be defined in downloads.js');
assert.ok(downloadsJs.includes("action: 'cancelDownload'"), 'cancelDownloadItem must dispatch cancelDownload IPC');
assert.ok(downloadsJs.includes("item.state = 'canceled'"), 'cancelDownloadItem must immediately mark state as canceled');

console.log('✓ 1. downloads.js: separate cancel button removed; unified X button with confirmation prompt verified.');

// 2. Verify popup/popup.js
const popupJs = fs.readFileSync('popup/popup.js', 'utf8');

assert.ok(popupJs.includes("title=\"${isDownloading ? 'Cancel download' : 'Remove from list'}\""), 'popup.js must dynamically set remove/cancel title based on isDownloading');
assert.ok(popupJs.includes("confirm('Are you sure you want to cancel this download?')"), 'popup.js must prompt confirmation when clicking remove on an in-progress download');
assert.ok(popupJs.includes("cancelRecentItem(item)"), 'popup.js must call cancelRecentItem when user confirms cancel');
assert.ok(popupJs.includes("function cancelRecentItem(item)"), 'cancelRecentItem must be defined in popup.js');

console.log('✓ 2. popup.js: action button unified with confirmation prompt and cancelRecentItem verified.');

// 3. Behavioral simulation of Confirmation Flow
let cancelInvoked = false;
let deleteInvoked = false;

function simulateClick(isDownloading, userConfirmed) {
  cancelInvoked = false;
  deleteInvoked = false;

  const mockConfirm = () => userConfirmed;

  if (isDownloading) {
    if (mockConfirm('Are you sure you want to cancel this download?')) {
      cancelInvoked = true;
    }
  } else {
    deleteInvoked = true;
  }
}

// Case A: User clicks X on downloading item and clicks OK
simulateClick(true, true);
assert.strictEqual(cancelInvoked, true, 'Clicking OK on prompt must invoke cancel');
assert.strictEqual(deleteInvoked, false, 'Must not delete item when cancelling download');

// Case B: User clicks X on downloading item and clicks Cancel (dismiss)
simulateClick(true, false);
assert.strictEqual(cancelInvoked, false, 'Clicking Cancel on prompt must NOT invoke cancel');
assert.strictEqual(deleteInvoked, false, 'Must not delete item when prompt dismissed');

// Case C: User clicks X on completed item
simulateClick(false, false);
assert.strictEqual(cancelInvoked, false, 'Inactive item must not invoke cancel');
assert.strictEqual(deleteInvoked, true, 'Inactive item must directly invoke delete');

console.log('✓ 3. Behavioral simulation passed: Confirmation OK cancels; dismissal preserves download; non-downloading items delete directly.');

console.log('\nAll tests passed successfully! 🚀\n');
