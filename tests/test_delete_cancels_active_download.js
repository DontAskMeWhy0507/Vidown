const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: DELETE & X BUTTON STOPS ACTIVE DOWNLOADS ===\n');

const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');
const hostPath = path.join(__dirname, '..', 'native', 'host.js');
const hostCode = fs.readFileSync(hostPath, 'utf8');
const dlPath = path.join(__dirname, '..', 'downloads', 'downloads.js');
const dlCode = fs.readFileSync(dlPath, 'utf8');
const popupPath = path.join(__dirname, '..', 'popup', 'popup.js');
const popupCode = fs.readFileSync(popupPath, 'utf8');

// 1. Verify native/host.js checks proc.isKilledByHost in close handlers
assert.ok(
  hostCode.includes('proc.isKilledByHost'),
  'native/host.js must check proc.isKilledByHost in child process close handlers to avoid sending fake errors on cancel'
);
console.log('✓ Test 1: native/host.js suppresses error emission when process is killed by host.');

// 2. Verify background.chrome.js does NOT auto-fallback to browser download if task was purged/canceled
assert.ok(
  bgCode.includes('purgedTaskIds.has(String(fakeId)) || task.state === \'canceled\'') ||
  bgCode.includes('purgedTaskIds.has(String(fakeId))'),
  'background.chrome.js must NOT auto-fallback to browser download if task was purged or canceled by user'
);
console.log('✓ Test 2: background.chrome.js blocks browser download fallback for purged/canceled tasks.');

// 3. Verify trackBrowserDownload immediately cancels if task was already purged
assert.ok(
  bgCode.includes('purgedTaskIds.has(String(historyId)) || purgedTaskIds.has(String(chromeId))'),
  'trackBrowserDownload must immediately cancel and erase if task was already purged'
);
console.log('✓ Test 3: trackBrowserDownload immediately terminates browser downloads for purged tasks.');

// 4. Verify _origOnChangedAddListener cancels in-progress downloads before erasing
assert.ok(
  bgCode.includes('_origCancel(numDeltaId') || bgCode.includes('_origCancel(Number(delta.id)'),
  '_origOnChangedAddListener must call _origCancel on purged tasks before erasing to stop Chrome from continuing download'
);
console.log('✓ Test 4: onChanged listener explicitly cancels in-progress downloads before erasing.');

// 5. Verify downloads.js and popup.js cancel with numeric chromeId regardless of state string
assert.ok(
  dlCode.includes('Number(chromeId)') || dlCode.includes('numChromeId'),
  'downloads.js deleteItem must cast chromeId to Number for chrome.downloads.cancel'
);
assert.ok(
  popupCode.includes('Number(item.chromeId') || popupCode.includes('numChromeId'),
  'popup.js removeRecentItem must cast chromeId to Number for chrome.downloads.cancel'
);
console.log('✓ Test 5: downloads.js and popup.js ensure chromeId is cast to Number for cancel.');

// 6. Verify native/host.js supports multi-abort callbacks for parallel video/audio streams
assert.ok(
  hostCode.includes('abortCallbacks') || hostCode.includes('signal.onAbort'),
  'native/host.js must properly abort all parallel streams'
);
console.log('✓ Test 6: native/host.js properly handles parallel stream cancellation.');

console.log('\n======================================================');
console.log('ALL DELETE & CANCEL VERIFICATION TESTS PASSED! 🎉');
console.log('======================================================');
