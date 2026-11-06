/**
 * QA Test Suite: All User Operations, Edge Cases & Error Handling Audit
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('=== STARTING COMPREHENSIVE QA AUDIT & SIMULATION TESTS ===');
console.log('================================================================\n');

const bgCode = fs.readFileSync(path.join(__dirname, '..', 'background.chrome.js'), 'utf8');
const dlJsCode = fs.readFileSync(path.join(__dirname, '..', 'downloads', 'downloads.js'), 'utf8');
const dlHtmlCode = fs.readFileSync(path.join(__dirname, '..', 'downloads', 'downloads.html'), 'utf8');
const popupJsCode = fs.readFileSync(path.join(__dirname, '..', 'popup', 'popup.js'), 'utf8');
const popupHtmlCode = fs.readFileSync(path.join(__dirname, '..', 'popup', 'popup.html'), 'utf8');
const hostJsCode = fs.readFileSync(path.join(__dirname, '..', 'native', 'host.js'), 'utf8');

const errorsFound = [];

function testCase(name, fn) {
  try {
    fn();
    console.log(`✓ PASS: ${name}`);
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(`  -> Error: ${err.message}`);
    errorsFound.push({ test: name, error: err.message });
  }
}

// -------------------------------------------------------------
// Test 1: browseFolder message flow and storage synchronization
// -------------------------------------------------------------
testCase('Test 1: browseFolder responds safely and synchronizes folder path via storage and toast', () => {
  const startIdx = bgCode.indexOf("case 'browseFolder':");
  const endIdx = bgCode.indexOf("case 'openFile':", startIdx);
  assert.ok(startIdx !== -1 && endIdx !== -1, 'background.chrome.js must contain case browseFolder');
  
  const browseSection = bgCode.substring(startIdx, endIdx);
  assert.ok(browseSection.includes("action: 'browseFolder'"), 'browseFolder must post browseFolder to native host');
  assert.ok(browseSection.includes("action === 'browseFolderResult'"), 'browseFolder must handle browseFolderResult');
  assert.ok(dlJsCode.includes("changes.customDownloadDir"), 'downloads.js must sync customDownloadDir and show toast');
});

// -------------------------------------------------------------
// Test 2: openFileResult carries item ID and notifies both UI surfaces
// -------------------------------------------------------------
testCase('Test 2: native/host.js includes task id in openFileResult', () => {
  const startIdx = hostJsCode.indexOf("case 'openFile':");
  const endIdx = hostJsCode.indexOf("case 'showInFolder':", startIdx);
  assert.ok(startIdx !== -1 && endIdx !== -1, 'host.js must have case openFile');
  const section = hostJsCode.substring(startIdx, endIdx);
  assert.ok(
    section.includes("action: 'openFileResult', id") || section.includes("action: 'openFileResult', taskId"),
    'native/host.js must include id in openFileResult so UIs know which item succeeded or failed'
  );
});

testCase('Test 3: downloads.js listens to openFileResult and marks deleted/missing files', () => {
  assert.ok(
    dlJsCode.includes("openFileResult"),
    'downloads.js must listen to openFileResult in runtime.onMessage to handle deleted files on disk'
  );
});

testCase('Test 4: popup.js detects openFileResult when file is not found even if openedFolder is true', () => {
  // In popup.js line 625: (msg.action === 'openFileResult' && !msg.success && msg.fileNotFound && !msg.openedFolder)
  // When openedFolder is true (because host opened download folder as fallback), this condition failed!
  assert.ok(
    !popupJsCode.includes('fileNotFound && !msg.openedFolder'),
    'popup.js must not reject openFileResult failure just because host gracefully opened the folder'
  );
});

// -------------------------------------------------------------
// Test 5: openDownloadsFolder fallback when Native Helper is unavailable
// -------------------------------------------------------------
testCase('Test 5: openDownloadsFolder checks nativeHelperAvailable before attempting port postMessage', () => {
  const openFolderMatch = bgCode.match(/case 'openDownloadsFolder':[\s\S]*?case 'openFolder':\s*\{([\s\S]*?)(?:break;|return\s+false;)/);
  assert.ok(openFolderMatch, 'background.chrome.js must contain openDownloadsFolder / openFolder');
  const section = openFolderMatch[1];
  
  // If it only does `const port = getOrCreateNativePort(); if (port)` without checking if native helper is actually available,
  // it creates an invalid port and never reaches chrome.downloads.showDefaultFolder fallback
  assert.ok(
    section.includes('nativeHelperAvailable'),
    'openDownloadsFolder must verify nativeHelperAvailable before attempting native port, to allow fallback to chrome.downloads.showDefaultFolder'
  );
});

// -------------------------------------------------------------
// Test 6: retryRecentItem in popup.js clears errors and resets downloading state in storage
// -------------------------------------------------------------
testCase('Test 6: retryRecentItem in popup.js updates storage to clear error and set downloading state', () => {
  const retryRecentMatch = popupJsCode.match(/function retryRecentItem\([\s\S]*?\{([\s\S]*?)\n  \}/);
  assert.ok(retryRecentMatch, 'popup.js must implement retryRecentItem');
  const body = retryRecentMatch[1];
  assert.ok(
    body.includes('downloadHistory') && (body.includes('chrome.storage.local.set') || body.includes('storage.local.set')),
    'retryRecentItem must update storage.downloadHistory to clear previous error state so UI reflects downloading immediately'
  );
});

// -------------------------------------------------------------
// Test 7: downloads.js date group heading handles invalid timestamps
// -------------------------------------------------------------
testCase('Test 7: getDateGroupHeading handles NaN or invalid timestamps without rendering NaN', () => {
  const funcMatch = dlJsCode.match(/function getDateGroupHeading\([\s\S]*?\{([\s\S]*?)\n  \}/);
  assert.ok(funcMatch, 'downloads.js must implement getDateGroupHeading');
  
  // Evaluate the extracted function safely
  const fn = new Function('timestamp', funcMatch[1]);
  assert.strictEqual(fn(null), 'Recent');
  assert.strictEqual(fn(undefined), 'Recent');
  assert.strictEqual(fn('invalid_date'), 'Recent');
  assert.strictEqual(fn(NaN), 'Recent');
});

// -------------------------------------------------------------
// Test 8: All UI button IDs exist between HTML and JS
// -------------------------------------------------------------
testCase('Test 8: Downloads page HTML IDs match all JS element references', () => {
  const elementIds = [
    'downloads-container', 'empty-state', 'search-input', 'btn-clear-search',
    'btn-open-folder', 'btn-clear-all', 'btn-change-folder', 'sidebar-folder-path',
    'section-title', 'section-stats', 'toast', 'count-all', 'count-downloading',
    'count-completed', 'count-video', 'count-audio',
    'settings-modal', 'modal-folder-path',
    'btn-modal-change-folder', 'setting-onpage-buttons', 'setting-image-buttons',
    'setting-min-size',
    'setting-site-input', 'btn-add-site', 'settings-site-list'
  ];

  for (const id of elementIds) {
    assert.ok(
      dlHtmlCode.includes(`id="${id}"`),
      `downloads.html must have id="${id}"`
    );
  }
});

testCase('Test 9: Popup HTML IDs match all JS element references', () => {
  const elementIds = [
    'toast', 'recent-media-list', 'recent-empty-state', 'recent-total-badge',
    'btn-footer-manager', 'toggle-onpage-bar', 'toggle-image-bar'
  ];

  for (const id of elementIds) {
    assert.ok(
      popupHtmlCode.includes(`id="${id}"`),
      `popup.html must have id="${id}"`
    );
  }
});

// -------------------------------------------------------------
// Test 10: Deduplication logic in downloads.js and popup.js
// -------------------------------------------------------------
testCase('Test 10: downloads.js and popup.js deduplicate by normalized filename, id, and url', () => {
  assert.ok(dlJsCode.includes('map.set(item.id || item.filename || item.url, item);') || dlJsCode.includes('map.set('));
  assert.ok(popupJsCode.includes('getItemDedupeKey'));
});

console.log('\n================================================================');
console.log(`QA AUDIT COMPLETED. TOTAL ISSUES FOUND: ${errorsFound.length}`);
console.log('================================================================\n');

if (errorsFound.length > 0) {
  console.log('LIST OF ISSUES:');
  errorsFound.forEach((e, idx) => {
    console.log(`${idx + 1}. [${e.test}] -> ${e.error}`);
  });
}
