const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: UI Clean Core Compatibility ---');

// Mock Chrome API
const mockNativeCalls = [];
const mockTabsCreated = [];

global.self = global;
global.importScripts = () => {};

global.chrome = {
  runtime: {
    connectNative: (host) => ({
      onMessage: { addListener: () => {} },
      onDisconnect: { addListener: () => {} },
      postMessage: (msg) => { mockNativeCalls.push(msg); }
    }),
    onMessage: {
      addListener: (cb) => { global.__msgDispatcher = cb; }
    },
    sendMessage: () => Promise.resolve(),
    getURL: (p) => `chrome-extension://mock_id/${p}`,
    lastError: null
  },
  action: {
    setBadgeText: () => {},
    setBadgeBackgroundColor: () => {}
  },
  tabs: {
    create: (opts) => { mockTabsCreated.push(opts); },
    onActivated: { addListener: () => {} },
    onRemoved: { addListener: () => {} },
    onUpdated: { addListener: () => {} }
  },
  webRequest: {
    onHeadersReceived: { addListener: () => {} }
  }
};

const MediaTypes = require('../core/media_types');
const MediaRegistry = require('../core/media_registry');
global.self.UniversalMediaTypes = MediaTypes;
global.self.UniversalMediaRegistry = MediaRegistry;
global.self.UniversalManifestParser = {};
global.self.UniversalMagicProbe = {};
global.self.UniversalNetworkObserver = {};

// Load service_worker.js
const swPath = path.join(__dirname, '..', 'service_worker.js');
eval(fs.readFileSync(swPath, 'utf8'));

const dispatch = global.__msgDispatcher;
assert.ok(dispatch, 'Service worker must register message dispatcher');

// 1. Test openDownloadsPage
let openDownloadsRes = null;
dispatch({ action: 'openDownloadsPage' }, {}, (r) => { openDownloadsRes = r; });
assert.ok(openDownloadsRes && openDownloadsRes.success);
assert.strictEqual(mockTabsCreated.length, 1);
assert.ok(mockTabsCreated[0].url.includes('downloads.html'));

// 2. Test downloadNative (UI download invocation)
let dlRes = null;
dispatch({
  action: 'downloadNative',
  url: 'https://example.com/video.mp4',
  quality: '720p',
  title: 'Movie 720p'
}, {}, (r) => { dlRes = r; });
assert.ok(dlRes && dlRes.success);
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].quality, '720p');

// 3. Test showInFolder
let folderRes = null;
dispatch({ action: 'showInFolder', targetPath: 'C:/Videos/Movie.mp4' }, {}, (r) => { folderRes = r; });
assert.ok(folderRes && folderRes.success);
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].action, 'openFolder');
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].filePath, 'C:/Videos/Movie.mp4');

// 4. Test openDownloadsFolder
dispatch({ action: 'openDownloadsFolder' }, {}, () => {});
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].action, 'openFolder');

// 5. Test browseFolder
dispatch({ action: 'browseFolder' }, {}, () => {});
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].action, 'browseFolder');

// 6. Test cancelDownload & removeDownload
dispatch({ action: 'cancelDownload', downloadId: 'dl_xyz' }, {}, () => {});
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].action, 'cancel');

dispatch({ action: 'removeDownload', downloadId: 'dl_xyz' }, {}, () => {});
assert.strictEqual(mockNativeCalls[mockNativeCalls.length - 1].action, 'cancel');

// 7. Test getDownloadStatus
let statusRes = null;
dispatch({ action: 'getDownloadStatus' }, {}, (r) => { statusRes = r; });
assert.ok(statusRes && statusRes.success && Array.isArray(statusRes.downloads));

console.log('✅ Task 4: UI Clean Core Compatibility tests PASSED!');
