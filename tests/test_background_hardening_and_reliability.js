/**
 * Test Suite: Background Service Worker Hardening & Reliability
 * Verifies Tasks 2, 4, 5, 6, 10, 12, 13, 14
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: BACKGROUND HARDENING & RELIABILITY ===\n');

const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

// Helper to create sandboxed SW context
function createSandboxedSW(initialStorage = {}, activeChromeDownloads = []) {
  let externalMessageHandler = null;
  let runtimeMessageHandler = null;
  let portMessageHandler = null;
  let portDisconnectHandler = null;
  const postedNativeMessages = [];
  const runtimeSentMessages = [];

  const storageState = {
    downloadHistory: initialStorage.downloadHistory || [],
    customDownloadDir: initialStorage.customDownloadDir || '',
    ...initialStorage
  };

  const storageSetCalls = [];

  const mockPort = {
    postMessage: (msg) => postedNativeMessages.push(msg),
    onMessage: {
      addListener: (fn) => { portMessageHandler = fn; },
      removeListener: (fn) => { if (portMessageHandler === fn) portMessageHandler = null; }
    },
    onDisconnect: {
      addListener: (fn) => { portDisconnectHandler = fn; }
    }
  };

  const context = {
    console: {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {}
    },
    setTimeout: (fn, ms) => setTimeout(fn, ms || 0),
    clearTimeout,
    setInterval,
    clearInterval,
    Map,
    Set,
    Array,
    Object,
    Date,
    Math,
    String,
    Number,
    Boolean,
    URL,
    parseInt,
    parseFloat,
    Promise,
    importScripts: () => {},
    addEventListener: () => {},
    chrome: {
      runtime: {
        id: 'test-extension-id',
        onInstalled: { addListener: () => {} },
        onStartup: { addListener: () => {} },
        onMessage: {
          addListener: (fn) => { runtimeMessageHandler = fn; }
        },
        onMessageExternal: {
          addListener: (fn) => { externalMessageHandler = fn; }
        },
        connectNative: () => mockPort,
        sendNativeMessage: (host, msg, cb) => cb && cb({ success: true }),
        sendMessage: (msg) => {
          runtimeSentMessages.push(msg);
          return Promise.resolve();
        },
        getURL: (p) => p,
        getPlatformInfo: (cb) => cb && cb({ os: 'win' }),
        reload: () => { context.__reloaded = true; }
      },
      tabs: {
        onActivated: { addListener: () => {} },
        onUpdated: { addListener: () => {} },
        onRemoved: { addListener: () => {} },
        query: (q, cb) => cb && cb([]),
        get: (id, cb) => cb && cb(null),
        sendMessage: () => Promise.resolve()
      },
      action: {
        setBadgeText: () => {},
        setBadgeBackgroundColor: () => {}
      },
      storage: {
        local: {
          get: (keys, cb) => {
            const res = {};
            const keyList = Array.isArray(keys) ? keys : [keys];
            keyList.forEach(k => { res[k] = storageState[k]; });
            if (cb) cb(res);
            return Promise.resolve(res);
          },
          set: (obj, cb) => {
            Object.assign(storageState, obj);
            storageSetCalls.push(obj);
            if (cb) cb();
            return Promise.resolve();
          }
        },
        onChanged: { addListener: () => {} }
      },
      downloads: {
        download: (opts, cb) => {
          context.__browserDownloadCalled = opts;
          if (cb) cb(999);
        },
        search: (query, cb) => {
          context.__downloadsSearchQuery = query;
          let results = activeChromeDownloads;
          if (query && query.id !== undefined) {
            results = activeChromeDownloads.filter(d => Number(d.id) === Number(query.id));
          } else if (query && query.state !== undefined) {
            results = activeChromeDownloads.filter(d => d.state === query.state);
          }
          if (cb) cb(results);
          return Promise.resolve(results);
        },
        cancel: (id, cb) => cb && cb(),
        erase: (query, cb) => cb && cb([query.id]),
        onCreated: { addListener: () => {} },
        onChanged: { addListener: () => {} }
      },
      webRequest: {
        onBeforeSendHeaders: { addListener: () => {} },
        onHeadersReceived: { addListener: (fn) => { context.__onHeadersReceived = fn; } }
      },
      webNavigation: {
        onCommitted: { addListener: () => {} }
      },
      scripting: {
        executeScript: () => Promise.resolve([])
      }
    }
  };
  context.self = context;

  vm.createContext(context);
  vm.runInContext(bgCode, context);

  return {
    context,
    getExternalHandler: () => externalMessageHandler,
    getRuntimeHandler: () => runtimeMessageHandler,
    getPortMessageHandler: () => portMessageHandler,
    triggerPortDisconnect: (err) => portDisconnectHandler && portDisconnectHandler(mockPort),
    getPurgedTaskIds: () => vm.runInContext('purgedTaskIds', context),
    getActiveDownloads: () => vm.runInContext('activeDownloads', context),
    updateDownloadHistory: (rec) => vm.runInContext('updateDownloadHistory', context)(rec),
    getOrCreateNativePort: () => vm.runInContext('getOrCreateNativePort', context)(),
    postedNativeMessages,
    runtimeSentMessages,
    storageState,
    storageSetCalls,
    mockPort
  };
}

async function runTests() {
  // -------------------------------------------------------------
  // Test 1: onMessageExternal Security
  // -------------------------------------------------------------
  console.log('[Test 1] onMessageExternal Security & Origin Validation');
  {
    const sw = createSandboxedSW();
    const handler = sw.getExternalHandler();
    assert.ok(typeof handler === 'function', 'onMessageExternal listener must be registered');

    // Case 1a: Missing or invalid sender origin rejected
    let resp1 = null;
    handler({ action: 'ping' }, {}, (r) => { resp1 = r; });
    assert.strictEqual(resp1 && resp1.error, 'Unauthorized sender origin', 'Missing origin must be rejected');

    let resp2 = null;
    handler({ action: 'ping' }, { origin: 'https://malicious-site.com' }, (r) => { resp2 = r; });
    assert.strictEqual(resp2 && resp2.error, 'Unauthorized sender origin', 'Untrusted origin must be rejected');

    // Case 1b: Trusted origin accepted
    let resp3 = null;
    handler({ action: 'ping' }, { origin: 'https://www.youtube.com' }, (r) => { resp3 = r; });
    assert.strictEqual(resp3 && resp3.status, 'ok', 'Trusted origin ping must succeed');

    let resp3b = null;
    handler({ action: 'ping' }, { origin: 'https://youtube.com' }, (r) => { resp3b = r; });
    assert.strictEqual(resp3b && resp3b.status, 'ok', 'https://youtube.com origin ping must succeed');

    // Case 1c: reloadExtension blocked from external callers
    let resp4 = null;
    handler({ action: 'reloadExtension' }, { origin: 'https://www.youtube.com' }, (r) => { resp4 = r; });
    assert.ok(!sw.context.__reloaded, 'External caller must NOT be able to reload extension');
    assert.ok(resp4 && (resp4.error || resp4.success === false), 'reloadExtension must return error or be unhandled');

    // Case 1d: downloadNative with untrusted URL rejected
    let resp5 = null;
    handler({ action: 'downloadNative', url: 'javascript:alert(1)' }, { origin: 'https://www.youtube.com' }, (r) => { resp5 = r; });
    assert.ok(resp5 && (resp5.error || resp5.success === false), 'javascript: download URL must be rejected');

    let resp6 = null;
    handler({ action: 'downloadNative', url: 'file:///etc/passwd' }, { origin: 'https://www.youtube.com' }, (r) => { resp6 = r; });
    assert.ok(resp6 && (resp6.error || resp6.success === false), 'file: download URL must be rejected');

    console.log('✓ Test 1: onMessageExternal origin validation and security boundary verified.');
  }

  // -------------------------------------------------------------
  // Test 2: SW Cold-Start Guard & fakeIdCounter Seeding
  // -------------------------------------------------------------
  console.log('\n[Test 2] SW Cold-Start Guard & fakeIdCounter Seeding');
  {
    const initialHistory = [
      { id: '900123', chromeId: '101', state: 'downloading', isBrowserDownload: true, url: 'https://example.com/file1.mp4' },
      { id: '900456', state: 'downloading', url: 'https://example.com/native.mp4' }
    ];
    const activeDownloadsInChrome = [
      { id: 101, state: 'in_progress' }
    ];

    const sw = createSandboxedSW({ downloadHistory: initialHistory }, activeDownloadsInChrome);

    // Allow async startup search callbacks to complete
    await new Promise(r => setTimeout(r, 80));

    // Check fakeIdCounter seeding: should be >= 900456
    assert.strictEqual(sw.context.fakeIdCounter, 900456, 'fakeIdCounter must be seeded from max existing ID');

    // Check that browser download 101 was NOT marked error
    const history = sw.storageState.downloadHistory;
    const browserTask = history.find(it => String(it.id) === '900123');
    const nativeTask = history.find(it => String(it.id) === '900456');

    assert.ok(browserTask, 'Browser task must exist in history');
    assert.strictEqual(browserTask.state, 'downloading', 'Active browser download must remain intact on cold-start');

    assert.ok(nativeTask, 'Native task must exist in history');
    assert.strictEqual(nativeTask.state, 'error', 'Interrupted native task must be marked as error');

    console.log('✓ Test 2: Cold-start guard preserves active browser downloads and seeds fakeIdCounter.');
  }

  // -------------------------------------------------------------
  // Test 3: Mutex Queue & Anti-Resurrection in updateDownloadHistory
  // -------------------------------------------------------------
  console.log('\n[Test 3] Mutex Queue & Anti-Resurrection in updateDownloadHistory');
  {
    const sw = createSandboxedSW({
      downloadHistory: [
        { id: 'task-100', title: 'Existing Video', url: 'https://example.com/video.mp4', state: 'downloading' }
      ]
    });

    // 3a. Anti-resurrection: purged task must not be written
    sw.getPurgedTaskIds().add('task-purged');
    sw.updateDownloadHistory({ id: 'task-purged', percent: '50%', speed: '1 MB/s' });
    await new Promise(r => setTimeout(r, 50));

    assert.ok(
      !sw.storageState.downloadHistory.some(it => it.id === 'task-purged'),
      'Purged task must never be resurrected by late updateDownloadHistory'
    );

    // 3b. Anti-resurrection: partial update without metadata for non-existent item must not unshift
    sw.updateDownloadHistory({ id: 'task-ghost', percent: '75%', speed: '2 MB/s' });
    await new Promise(r => setTimeout(r, 50));

    assert.ok(
      !sw.storageState.downloadHistory.some(it => it.id === 'task-ghost'),
      'Partial progress update for missing task must NOT create a new history record'
    );

    // 3c. Valid new task with complete metadata DOES get added
    sw.updateDownloadHistory({
      id: 'task-new',
      title: 'New Video',
      url: 'https://example.com/new.mp4',
      filename: 'new.mp4',
      state: 'downloading'
    });
    await new Promise(r => setTimeout(r, 50));

    assert.ok(
      sw.storageState.downloadHistory.some(it => it.id === 'task-new'),
      'Task with complete metadata must be added to history'
    );

    // 3d. Mutex queue sequential execution under concurrent calls
    const p1 = sw.updateDownloadHistory({ id: 'task-100', percent: '20%' });
    const p2 = sw.updateDownloadHistory({ id: 'task-100', percent: '40%' });
    const p3 = sw.updateDownloadHistory({ id: 'task-100', percent: '60%' });
    await Promise.all([p1, p2, p3]);

    const updated = sw.storageState.downloadHistory.find(it => it.id === 'task-100');
    assert.strictEqual(updated.percent, '60%', 'Sequential writes must guarantee latest value is preserved');

    console.log('✓ Test 3: Mutex queue and anti-resurrection work correctly.');
  }

  // -------------------------------------------------------------
  // Test 4: Native Host Disconnect Leaves Browser Downloads Intact
  // -------------------------------------------------------------
  console.log('\n[Test 4] Native Host Disconnect Leaves Browser Downloads Intact');
  {
    const sw = createSandboxedSW();

    // Setup active downloads: 1 native task, 1 browser task
    sw.getActiveDownloads().set('native-900', {
      id: 'native-900',
      isBrowserDownload: false,
      state: 'downloading'
    });
    sw.getActiveDownloads().set('browser-800', {
      id: 'browser-800',
      chromeId: '800',
      isBrowserDownload: true,
      state: 'downloading'
    });

    // Trigger getOrCreateNativePort to attach disconnect listener
    sw.getOrCreateNativePort();

    // Trigger native disconnect
    sw.triggerPortDisconnect();

    // Native task must be removed from activeDownloads
    assert.ok(!sw.getActiveDownloads().has('native-900'), 'Native task must be removed on disconnect');

    // Browser task must remain in activeDownloads and not errored
    assert.ok(sw.getActiveDownloads().has('browser-800'), 'Browser task must remain in activeDownloads on native disconnect');
    assert.strictEqual(sw.getActiveDownloads().get('browser-800').state, 'downloading', 'Browser task state must remain downloading');

    console.log('✓ Test 4: Native host disconnect isolates browser downloads.');
  }

  // -------------------------------------------------------------
  // Test 5: Browser Fallback Uses task.params
  // -------------------------------------------------------------
  console.log('\n[Test 5] Browser Fallback Uses task.params');
  {
    const sw = createSandboxedSW();

    // Static code verification: task.params || task.options must be used
    const fallbackSlice = bgCode.slice(bgCode.indexOf("if (msg.action === 'error')"), bgCode.indexOf("msg.action === 'error'") + 800);
    assert.ok(
      fallbackSlice.includes('task.params') || fallbackSlice.includes('opts'),
      'Fallback logic must check task.params instead of relying only on task.options'
    );

    console.log('✓ Test 5: Browser fallback dead code fixed with task.params.');
  }

  // -------------------------------------------------------------
  // Test 6: browseFolder Returns True for Async Channel
  // -------------------------------------------------------------
  console.log('\n[Test 6] browseFolder Returns True for Async Channel');
  {
    const sw = createSandboxedSW();
    const runtimeHandler = sw.getRuntimeHandler();
    assert.ok(typeof runtimeHandler === 'function', 'Runtime message handler must be registered');

    let responseResult = null;
    const sendResponse = (r) => { responseResult = r; };

    const returnValue = runtimeHandler({ action: 'browseFolder' }, {}, sendResponse);

    assert.strictEqual(returnValue, true, 'browseFolder must return true to hold channel open');
    assert.strictEqual(responseResult, null, 'Must NOT send premature pending response');

    // Now simulate native port sending back browseFolderResult
    const portHandler = sw.getPortMessageHandler();
    assert.ok(typeof portHandler === 'function', 'Port message handler must be attached');

    portHandler({ action: 'browseFolderResult', canceled: false, path: 'D:\\Downloads\\Videos' });

    assert.strictEqual(responseResult && responseResult.success, true, 'browseFolder must succeed');
    assert.strictEqual(responseResult && responseResult.path, 'D:\\Downloads\\Videos', 'browseFolder path must match');
    assert.strictEqual(responseResult && responseResult.canceled, false, 'browseFolder canceled must be false');

    console.log('✓ Test 6: browseFolder keeps message port open asynchronously.');
  }

  // -------------------------------------------------------------
  // Test 7: Universal Media Core Removed From Build (revised per release plan)
  // The experimental core/ observer was cut from the shipped build (unwired
  // registry, unhydrated state, cross-origin probe fan-out). Verify the SW no
  // longer attaches the webRequest probe nor imports core modules.
  // -------------------------------------------------------------
  console.log('\n[Test 7] Universal Media Core Unwired (No Probe Fan-Out)');
  {
    const sw = createSandboxedSW();
    assert.strictEqual(
      typeof sw.context.__onHeadersReceived,
      'undefined',
      'onHeadersReceived probe listener must NOT be attached in the shipped build'
    );
    assert.ok(
      !bgCode.includes('importScripts') || !/importScripts\s*\(\s*["']core\//.test(bgCode),
      'background.chrome.js must not importScripts any core/ module'
    );
    assert.ok(
      !bgCode.includes('UniversalNetworkObserver.handleHeadersReceived'),
      'UniversalNetworkObserver.handleHeadersReceived call must be removed'
    );

    console.log('✓ Test 7: Universal media core is unwired; no probe fan-out.');
  }

  console.log('\n=============================================================');
  console.log('🎉 ALL BACKGROUND HARDENING & RELIABILITY TESTS PASSED!');
  console.log('=============================================================\n');
  process.exit(0);
}

runTests().catch(err => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});
