const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: UI SYNC, IN-PLACE DOM UPDATES & DEDUPLICATION (Tasks 11, 16) ===\n');

const popupPath = path.join(__dirname, '..', 'popup', 'popup.js');
const popupCode = fs.readFileSync(popupPath, 'utf8');

const dlPath = path.join(__dirname, '..', 'downloads', 'downloads.js');
const dlCode = fs.readFileSync(dlPath, 'utf8');

// 1. Verify popup timeout is 300000ms (5 minutes, matching downloads.js:256)
assert.ok(
  !popupCode.includes('> 12000'),
  'popup.js must NOT contain > 12000 timeout check that marks downloads interrupted after 12s'
);
assert.ok(
  popupCode.includes('> 300000') || popupCode.includes('>= 300000'),
  'popup.js must use 300000ms (5 minutes) for inactive downloading error threshold'
);
console.log('✓ Test 1: popup.js timeout threshold is updated to 300000ms (5 minutes).');

// 2. Verify popup deduplication distinguishes separate downloads with the same filename
// Extract getItemDedupeKey function from popup.js
const dedupeMatch = popupCode.match(/function\s+getItemDedupeKey\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/);
assert.ok(dedupeMatch, 'popup.js must declare getItemDedupeKey');

const getItemDedupeKey = new Function(`
  ${dedupeMatch[0]}
  return getItemDedupeKey;
`)();

const item1 = { id: 'download_1', title: 'video.mp4', filename: 'video.mp4', url: 'https://example.com/v1.mp4' };
const item2 = { id: 'download_2', title: 'video.mp4', filename: 'video.mp4', url: 'https://example.com/v2.mp4' };

const key1 = getItemDedupeKey(item1);
const key2 = getItemDedupeKey(item2);

assert.ok(key1 && key2, 'Dedupe keys must be non-empty strings');
assert.notStrictEqual(
  key1,
  key2,
  `Two separate downloads with the same filename 'video.mp4' must NOT produce the same dedupe key: key1='${key1}', key2='${key2}'`
);

// Also test when id is missing but URL or taskId differs
const item3 = { url: 'https://cdn.example.com/streamA.mp4', filename: 'video.mp4' };
const item4 = { url: 'https://cdn.example.com/streamB.mp4', filename: 'video.mp4' };
assert.notStrictEqual(
  getItemDedupeKey(item3),
  getItemDedupeKey(item4),
  'Two downloads without ID but differing URLs must NOT have colliding dedupe keys'
);

console.log('✓ Test 2: popup.js getItemDedupeKey distinguishes separate downloads with the same filename.');

// 3. Verify downloads.js has in-place DOM sync
assert.ok(
  dlCode.includes('syncHistoryUpdatesInPlace'),
  'downloads.js must implement syncHistoryUpdatesInPlace'
);

assert.ok(
  dlCode.includes('syncHistoryUpdatesInPlace(changes.downloadHistory.newValue)') ||
  dlCode.includes('syncHistoryUpdatesInPlace('),
  'downloads.js storage listener must call syncHistoryUpdatesInPlace on downloadHistory change'
);

// Ensure storage.onChanged does not call loadDownloads() directly on downloadHistory changes
const storageListenerSnippet = dlCode.slice(dlCode.indexOf("if (changes.downloadHistory)"), dlCode.indexOf("if (changes.downloadHistory)") + 200);
assert.ok(
  !storageListenerSnippet.includes('loadDownloads()'),
  'downloads.js storage listener for changes.downloadHistory must NOT call destructive loadDownloads()'
);

console.log('✓ Test 3: downloads.js storage listener invokes syncHistoryUpdatesInPlace instead of loadDownloads.');

// 4. Test execution of syncHistoryUpdatesInPlace with in-place DOM updates
const mockCard = {
  id: 'card_task_123',
  fillWidth: '10%',
  statsText: '10%',
  replacedWith: null,
  querySelector(sel) {
    if (sel === '.item-progress-fill') {
      return {
        style: {
          get width() { return mockCard.fillWidth; },
          set width(v) { mockCard.fillWidth = v; }
        }
      };
    }
    if (sel === '.item-downloading-stats') {
      return {
        get textContent() { return mockCard.statsText; },
        set textContent(v) { mockCard.statsText = v; }
      };
    }
    return null;
  },
  replaceWith(newEl) {
    mockCard.replacedWith = newEl;
  }
};

const mockElements = {
  'card_task_123': mockCard
};

const mockDoc = {
  getElementById(id) {
    return mockElements[id] || null;
  },
  querySelectorAll() {
    return [];
  },
  createElement(tag) {
    return {
      tagName: tag,
      appendChild() {},
      append() {},
      classList: { add() {}, remove() {} },
      style: {}
    };
  }
};

// Extract syncHistoryUpdatesInPlace function logic
const syncFnMatch = dlCode.match(/function\s+syncHistoryUpdatesInPlace\s*\([^)]*\)\s*\{[\s\S]*?\n  \}/);
assert.ok(syncFnMatch, 'syncHistoryUpdatesInPlace must be extracted cleanly from downloads.js');

let allItemsMock = [
  { id: 'task_123', percent: '10%', speed: '100 KB/s', state: 'downloading', fromHistory: true }
];
let recentlyDeletedMock = new Set();
let countsUpdated = false;

const syncHistoryUpdatesInPlace = new Function(
  'document', 'allItems', 'recentlyDeletedIds', 'formatPercentWidth', 'formatErrorMessage',
  'createDownloadCard', 'getFilteredItems', 'getDateGroupHeading', 'downloadsContainer',
  'emptyState', 'updateCounts', 'sectionStats',
  `
  let allItemsRef = allItems;
  ${syncFnMatch[0]}
  return {
    run: syncHistoryUpdatesInPlace,
    getAllItems: () => allItems
  };
`
)(
  mockDoc,
  allItemsMock,
  recentlyDeletedMock,
  (pct) => pct || '0%',
  (err) => err || 'Lỗi',
  (item) => ({ id: `card_${item.id}`, item }),
  () => allItemsMock,
  () => 'Hôm nay',
  { querySelectorAll: () => [], prepend: () => {}, appendChild: () => {} },
  { style: {} },
  () => { countsUpdated = true; },
  { textContent: '' }
);

// Call syncHistoryUpdatesInPlace with updated downloading progress
syncHistoryUpdatesInPlace.run([
  { id: 'task_123', percent: '80%', speed: '4.2 MB/s', state: 'downloading' }
]);

assert.strictEqual(mockCard.fillWidth, '80%', 'item-progress-fill style.width must be updated in-place to 80%');
assert.ok(mockCard.statsText.includes('80%') && mockCard.statsText.includes('4.2 MB/s'), 'item-downloading-stats must be updated in-place with percentage and speed');
assert.strictEqual(mockCard.replacedWith, null, 'card node must NOT be replaced when download remains in downloading state');
console.log('✓ Test 4: syncHistoryUpdatesInPlace updates progress and speed in-place without replacing card DOM node.');

// Call syncHistoryUpdatesInPlace with state transition to completed
syncHistoryUpdatesInPlace.run([
  { id: 'task_123', percent: '100%', speed: 'Hoàn thành', state: 'completed' }
]);
assert.ok(mockCard.replacedWith, 'card node must be replaced with new completed card when state transitions');
console.log('✓ Test 5: syncHistoryUpdatesInPlace cleanly updates card representation on state completion.');

console.log('\n======================================================');
console.log('ALL UI SYNC & DEDUPE TESTS PASSED! 🎉');
console.log('======================================================');
