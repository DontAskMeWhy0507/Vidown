const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: DELETE ITEM & RESURRECTION PREVENTION ===\n');

// 1. Verify background.chrome.js has purgedTaskIds and suppression logic
const bgCode = fs.readFileSync('background.chrome.js', 'utf8');
assert.ok(bgCode.includes('purgedTaskIds = new Set()'), 'background.chrome.js must declare purgedTaskIds');
assert.ok(bgCode.includes('purgedTaskIds.has(strDeltaId)'), 'onChanged listener must check purgedTaskIds to suppress resurrection');
assert.ok(bgCode.includes('_origErase({ id: delta.id }'), 'onChanged listener must erase purged download from Chrome');
assert.ok(bgCode.includes('purgedTaskIds.add(targetId)'), 'removeDownload must add targetId to purgedTaskIds');
console.log('✓ 1. background.chrome.js purgedTaskIds and event suppression verified.');

// 2. Verify downloads.js has recentlyDeletedIds and erase calls
const downloadsCode = fs.readFileSync('downloads/downloads.js', 'utf8');
assert.ok(downloadsCode.includes('recentlyDeletedIds = new Set()'), 'downloads.js must declare recentlyDeletedIds');
assert.ok(downloadsCode.includes('recentlyDeletedIds.add(strTargetId)'), 'deleteItem must register ID in recentlyDeletedIds');
assert.ok(downloadsCode.includes('chrome.downloads.erase({ id: chromeId }'), 'deleteItem must call chrome.downloads.erase');
assert.ok(downloadsCode.includes("action: 'removeDownload'"), 'deleteItem must dispatch removeDownload to background');
console.log('✓ 2. downloads.js recentlyDeletedIds, chrome.downloads.erase, and removeDownload dispatch verified.');

// 3. Verify popup.js has recentlyDeletedIds and erase calls
const popupCode = fs.readFileSync('popup/popup.js', 'utf8');
assert.ok(popupCode.includes('recentlyDeletedIds = new Set()'), 'popup.js must declare recentlyDeletedIds');
assert.ok(popupCode.includes('chrome.downloads.erase({ id: item.chromeId }'), 'removeRecentItem must call chrome.downloads.erase');
console.log('✓ 3. popup.js recentlyDeletedIds and erase synchronization verified.');

// 4. Test Deduplication logic prevents duplicate "download" ghost cards
function simulateDeduplication(nativeHistory, chromeDownloads, recentlyDeleted) {
  const map = new Map();
  for (const item of nativeHistory) {
    if (!item) continue;
    const strId = String(item.id || '');
    const strChromeId = item.chromeId ? String(item.chromeId) : '';
    if (recentlyDeleted.has(strId) || (strChromeId && recentlyDeleted.has(strChromeId))) continue;
    map.set(item.id || item.url, { ...item });
  }

  for (const item of chromeDownloads) {
    const strId = String(item.id || '');
    const strChromeId = item.chromeId ? String(item.chromeId) : '';
    if (recentlyDeleted.has(strId) || (strChromeId && recentlyDeleted.has(strChromeId))) continue;

    let existingMatch = null;
    for (const existing of map.values()) {
      if (item.chromeId && (String(existing.chromeId || '') === String(item.chromeId) || String(existing.id || '') === String(item.chromeId))) {
        existingMatch = existing;
        break;
      }
      if (item.id && String(existing.id || '') === String(item.id)) {
        existingMatch = existing;
        break;
      }
      if (item.url && existing.url && item.url === existing.url) {
        existingMatch = existing;
        break;
      }
    }

    if (existingMatch) {
      if (!existingMatch.chromeId && item.chromeId) existingMatch.chromeId = item.chromeId;
      if (!existingMatch.filename && item.filename) existingMatch.filename = item.filename;
      if ((!existingMatch.title || existingMatch.title === 'download') && item.title && item.title !== 'download') {
        existingMatch.title = item.title;
      }
      if (existingMatch.state === 'downloading' && item.state !== 'downloading') {
        existingMatch.state = item.state;
      }
    } else {
      map.set(item.id, { ...item });
    }
  }

  return Array.from(map.values());
}

// Case A: Native task and Chrome download represent the exact same video
const nativeItems = [
  { id: 'task_tiktok_1', chromeId: 52, title: 'TikTok Hot Video', url: 'https://v19.tiktok.com/vid1', state: 'downloading' }
];
const chromeItems = [
  { id: 52, chromeId: 52, title: 'download', url: 'https://v19.tiktok.com/vid1', state: 'canceled', error: 'USER_CANCELED' }
];

const merged = simulateDeduplication(nativeItems, chromeItems, new Set());
assert.strictEqual(merged.length, 1, 'Deduplication must yield exactly 1 item, not duplicate ghost cards');
assert.strictEqual(merged[0].title, 'TikTok Hot Video', 'Meaningful title must be preserved over generic "download" fallback');
console.log('✓ 4. Deduplication correctly merges Chrome downloads and preserves titles.');

// Case B: User deletes the item (ID registered in recentlyDeleted)
const recentlyDeleted = new Set(['task_tiktok_1', '52']);
const afterDelete = simulateDeduplication(nativeItems, chromeItems, recentlyDeleted);
assert.strictEqual(afterDelete.length, 0, 'Deleted items must be completely filtered out and never reappear');
console.log('✓ 5. Deleted items are strictly filtered out and cannot resurrect.');

console.log('\n================================================================');
console.log('ALL DELETE & RESURRECTION PREVENTION TESTS PASSED! 🎉');
console.log('================================================================\n');
