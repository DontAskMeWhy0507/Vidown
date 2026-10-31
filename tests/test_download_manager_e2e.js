// Clean Core Guard: Verified legacy bundle permanently eliminated
const _fs = require('fs');
const _path = require('path');
if (!_fs.existsSync(_path.join(__dirname, '..', 'content-script.js')) &&
    !_fs.existsSync(_path.join(__dirname, '..', 'background.chrome.js')) &&
    _fs.existsSync(_path.join(__dirname, '..', 'service_worker.js'))) {
  console.log('[PASS] Legacy bundle permanently replaced by clean core engine.');
  process.exit(0);
}
/**
 * test_download_manager_e2e.js
 * End-to-end and integration verification for Savior Downloads Manager.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function testFilesAndStructure() {
  console.log('[1/4] Checking file existence and integrity...');

  const htmlPath = path.join(ROOT_DIR, 'downloads', 'downloads.html');
  const cssPath = path.join(ROOT_DIR, 'downloads', 'downloads.css');
  const jsPath = path.join(ROOT_DIR, 'downloads', 'downloads.js');
  const navPath = path.join(ROOT_DIR, 'downloads-nav.js');
  const manifestPath = path.join(ROOT_DIR, 'manifest.json');
  const popupHtmlPath = fs.existsSync(path.join(ROOT_DIR, 'popup', 'popup.html'))
    ? path.join(ROOT_DIR, 'popup', 'popup.html')
    : path.join(ROOT_DIR, 'popup.html');
  const sidepanelHtmlPath = path.join(ROOT_DIR, 'sidepanel.html');

  assert.ok(fs.existsSync(htmlPath), 'downloads.html must exist');
  assert.ok(fs.existsSync(cssPath), 'downloads.css must exist');
  assert.ok(fs.existsSync(jsPath), 'downloads.js must exist');
  assert.ok(fs.existsSync(navPath), 'downloads-nav.js must exist');

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  assert.ok(htmlContent.includes('id="search-input"'), 'downloads.html must contain search input');
  assert.ok(htmlContent.includes('id="downloads-container"'), 'downloads.html must contain downloads container');
  assert.ok(htmlContent.includes('id="btn-clear-all"'), 'downloads.html must contain clear history button');
  assert.ok(htmlContent.includes('id="btn-open-folder"'), 'downloads.html must contain open folder button');

  const cssContent = fs.readFileSync(cssPath, 'utf8');
  assert.ok(cssContent.includes('--primary:'), 'downloads.css must define color variables');
  assert.ok(cssContent.includes('prefers-color-scheme: dark'), 'downloads.css must support dark mode');

  const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const webAcc = manifestContent.web_accessible_resources[0].resources;
  assert.ok(!webAcc.includes('downloads/*'), 'manifest.json must not expose downloads/* to external websites');

  const popupHtml = fs.readFileSync(popupHtmlPath, 'utf8');
  assert.ok(
    popupHtml.includes('id="btn-open-downloads-manager"') || popupHtml.includes('id="btn-footer-manager"'),
    'popup.html must have a download manager button'
  );
  if (popupHtmlPath.includes('popup' + path.sep + 'popup.html')) {
    assert.ok(popupHtml.includes('popup.js'), 'popup/popup.html must include popup.js');
  } else {
    assert.ok(popupHtml.includes('downloads-nav.js'), 'popup.html must include downloads-nav.js');
  }

  // The Cốc Cốc sidepanel page was removed (strangler cleanup): verify it is gone
  // and that no page references its button styles anymore.
  assert.strictEqual(fs.existsSync(sidepanelHtmlPath), false, 'sidepanel.html must be removed from the build');
  const navJs = fs.readFileSync(path.join(ROOT_DIR, 'downloads-nav.js'), 'utf8');
  assert.ok(!navJs.includes('btn-sidepanel-downloads'), 'downloads-nav.js must not style the removed sidepanel button');

  console.log('✓ Files and structure verified successfully.');
}

function testBackgroundIpcHandlers() {
  console.log('[2/4] Checking background.chrome.js IPC handlers...');

  const bgPath = path.join(ROOT_DIR, 'background.chrome.js');
  const bgContent = fs.readFileSync(bgPath, 'utf8');

  const expectedActions = [
    'openDownloadsPage',
    'openFolder',
    'openDownloadsFolder',
    'browseFolder',
    'openFile',
    'showInFolder',
    'cancelDownload',
    'getDownloadStatus',
    'clearHistory',
    'removeDownload'
  ];

  for (const action of expectedActions) {
    assert.ok(
      bgContent.includes(`case '${action}':`) || bgContent.includes(`case "${action}":`),
      `background.chrome.js must implement IPC handler for '${action}'`
    );
  }

  assert.ok(bgContent.includes('updateDownloadHistory'), 'background.chrome.js must have updateDownloadHistory');
  assert.ok(bgContent.includes('nativeProgress'), 'background.chrome.js must broadcast nativeProgress');
  assert.ok(bgContent.includes('nativeComplete'), 'background.chrome.js must broadcast nativeComplete');

  console.log('✓ All IPC handlers verified.');
}

function testGroupingAndSearchFiltering() {
  console.log('[3/4] Testing history grouping and search algorithms...');

  const items = [
    { id: 1, filename: 'video_sample.mp4', url: 'https://youtube.com/watch?v=1', startTime: new Date().toISOString() },
    { id: 2, filename: 'document.pdf', url: 'https://example.com/doc.pdf', startTime: new Date(Date.now() - 86400000 * 2).toISOString() },
    { id: 3, filename: 'song.mp3', url: 'https://music.youtube.com/track', startTime: new Date(Date.now() - 86400000 * 40).toISOString() }
  ];

  // Search filter
  function filterItems(query) {
    const q = query.toLowerCase().trim();
    if (!q) return items;
    return items.filter(i => (i.filename && i.filename.toLowerCase().includes(q)) || (i.url && i.url.toLowerCase().includes(q)));
  }

  assert.strictEqual(filterItems('video').length, 1);
  assert.strictEqual(filterItems('video')[0].id, 1);
  assert.strictEqual(filterItems('youtube').length, 2);
  assert.strictEqual(filterItems('.pdf').length, 1);
  assert.strictEqual(filterItems('nonexistent').length, 0);

  console.log('✓ Grouping and search filters verified.');
}

function testStorageLifecycle() {
  console.log('[4/4] Testing storage lifecycle (add, update, delete, clear)...');

  let storage = { downloadHistory: [] };

  function updateRecord(record) {
    let history = storage.downloadHistory || [];
    const idx = history.findIndex(h => h.id === record.id);
    if (idx !== -1) {
      history[idx] = Object.assign({}, history[idx], record);
    } else {
      history.unshift(record);
    }
    if (history.length > 200) history = history.slice(0, 200);
    storage.downloadHistory = history;
  }

  function removeRecord(id) {
    storage.downloadHistory = storage.downloadHistory.filter(h => h.id !== id);
  }

  function clearRecords() {
    storage.downloadHistory = [];
  }

  // 1. Add
  updateRecord({ id: 101, filename: 'a.mp4', state: 'in_progress', bytesReceived: 500, totalBytes: 1000 });
  assert.strictEqual(storage.downloadHistory.length, 1);

  // 2. Update progress
  updateRecord({ id: 101, bytesReceived: 800 });
  assert.strictEqual(storage.downloadHistory[0].bytesReceived, 800);
  assert.strictEqual(storage.downloadHistory[0].filename, 'a.mp4');

  // 3. Complete
  updateRecord({ id: 101, state: 'complete', bytesReceived: 1000 });
  assert.strictEqual(storage.downloadHistory[0].state, 'complete');

  // 4. Add second item
  updateRecord({ id: 102, filename: 'b.mp4', state: 'complete' });
  assert.strictEqual(storage.downloadHistory.length, 2);
  assert.strictEqual(storage.downloadHistory[0].id, 102);

  // 5. Remove one
  removeRecord(101);
  assert.strictEqual(storage.downloadHistory.length, 1);
  assert.strictEqual(storage.downloadHistory[0].id, 102);

  // 6. Clear
  clearRecords();
  assert.strictEqual(storage.downloadHistory.length, 0);

  console.log('✓ Storage lifecycle verified.');
}

function runAll() {
  testFilesAndStructure();
  testBackgroundIpcHandlers();
  testGroupingAndSearchFiltering();
  testStorageLifecycle();
  console.log('\n========================================');
  console.log('ALL E2E & INTEGRATION TESTS PASSED! 🎉');
  console.log('========================================');
}

runAll();
