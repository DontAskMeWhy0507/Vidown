const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: T03 TASK ISOLATION & CANCEL INTEGRITY ===\n');

const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

function createSandboxedServiceWorker() {
  const postedMessages = [];
  let portMessageHandler = null;
  const activeTimers = new Set();
  const activeIntervals = new Set();

  const mockPort = {
    postMessage: (msg) => { postedMessages.push(msg); },
    onMessage: {
      addListener: (fn) => { portMessageHandler = fn; },
      removeListener: (fn) => { if (portMessageHandler === fn) portMessageHandler = null; }
    },
    onDisconnect: { addListener: () => {} }
  };

  const context = {
    console: { log: () => {}, warn: () => {}, error: () => {}, info: () => {} },
    setTimeout: (fn, ms) => {
      const t = setTimeout(fn, ms);
      activeTimers.add(t);
      return t;
    },
    clearTimeout: (t) => {
      activeTimers.delete(t);
      clearTimeout(t);
    },
    setInterval: (fn, ms) => {
      const i = setInterval(fn, ms);
      activeIntervals.add(i);
      return i;
    },
    clearInterval: (i) => {
      activeIntervals.delete(i);
      clearInterval(i);
    },
    Map, Set, Array, Object, Date, Math, String, Number, Boolean, URL, parseInt, parseFloat,
    importScripts: () => {},
    self: { addListener: () => {} },
    chrome: {
      runtime: {
        onInstalled: { addListener: () => {} },
        onStartup: { addListener: () => {} },
        onMessage: { addListener: (fn) => { context.onMessage = fn; } },
        onMessageExternal: { addListener: () => {} },
        onConnectNative: { addListener: () => {} },
        connectNative: () => mockPort,
        sendMessage: () => Promise.resolve(),
        getURL: (p) => p
      },
      tabs: {
        onActivated: { addListener: () => {} },
        onUpdated: { addListener: () => {} },
        query: (q, cb) => cb && cb([]),
        get: (id, cb) => cb && cb(null),
        sendMessage: () => Promise.resolve()
      },
      action: { setBadgeText: () => {}, setBadgeBackgroundColor: () => {} },
      storage: {
        local: {
          get: (k, cb) => cb && cb({}),
          set: (o, cb) => cb && cb()
        }
      },
      downloads: {
        download: () => {},
        search: (q, cb) => cb && cb([]),
        cancel: () => {},
        erase: () => {},
        onCreated: { addListener: () => {} },
        onChanged: { addListener: () => {} }
      },
      webRequest: {
        onBeforeSendHeaders: { addListener: () => {} },
        onHeadersReceived: { addListener: () => {} }
      },
      scripting: { executeScript: () => Promise.resolve([]) }
    }
  };

  vm.createContext(context);
  vm.runInContext(bgCode, context);

  return {
    context,
    postedMessages,
    dispatchMessage: (msg, sendResponse) => {
      if (context.onMessage) context.onMessage(msg, {}, sendResponse || (() => {}));
    },
    getActiveDownloads: () => vm.runInContext('activeDownloads', context),
    getNativeDownloadQueue: () => vm.runInContext('nativeDownloadQueue', context),
    startNativeDownload: (params, cb) => vm.runInContext('startNativeDownload', context)(params, cb),
    destroy: () => {
      for (const i of activeIntervals) clearInterval(i);
      activeIntervals.clear();
      for (const t of activeTimers) clearTimeout(t);
      activeTimers.clear();
    }
  };
}

// -------------------------------------------------------------
// Test 1: Cancelling queued task B does NOT send cancel to host for running task A
// -------------------------------------------------------------
console.log('[Test 1] Cancelling queued job must NOT cancel active downloading job');
const sw = createSandboxedServiceWorker();
let idA = null, idB = null;

// Start Job A (DASH muxing task) -> active downloading
sw.startNativeDownload({ videoUrl: 'https://cdn.example.com/v_a.mp4', audioUrl: 'https://cdn.example.com/a_a.mp4', filename: 'A.mp4', taskId: 'task-A' }, id => { idA = id; });
// Start Job B (Queued)
sw.startNativeDownload({ videoUrl: 'https://cdn.example.com/v_b.mp4', audioUrl: 'https://cdn.example.com/a_b.mp4', filename: 'B.mp4', taskId: 'task-B' }, id => { idB = id; });

const act = sw.getActiveDownloads();
const q = sw.getNativeDownloadQueue();

assert.strictEqual(act.get(idA).state, 'downloading');
assert.strictEqual(act.get(idB).state, 'queued');
assert.strictEqual(q.length, 1);
assert.strictEqual(sw.postedMessages.length, 1, 'Only Task A message posted to host');

// Cancel queued Job B
sw.dispatchMessage({ action: 'cancelDownload', taskId: idB });

// Job B removed from queue
assert.strictEqual(q.length, 0, 'Job B must be removed from queue');
// Job A must STILL be downloading!
assert.ok(act.has(idA), 'Job A must remain in activeDownloads');
assert.strictEqual(act.get(idA).state, 'downloading', 'Job A must still be downloading');

// Host must NOT have received any { action: 'cancel' }!
const cancelToHost = sw.postedMessages.filter(m => m.action === 'cancel');
assert.strictEqual(cancelToHost.length, 0, 'Host must NOT receive cancel when a queued job is cancelled');
console.log('✓ Test 1: Cancelling queued job B leaves active job A completely untouched.');

// -------------------------------------------------------------
// Test 2: Cancelling active task A sends cancel with taskId to host
// -------------------------------------------------------------
console.log('\n[Test 2] Cancelling active job A sends cancel with taskId');
sw.dispatchMessage({ action: 'cancelDownload', taskId: idA });
const cancelMsg = sw.postedMessages.find(m => m.action === 'cancel');
assert.ok(cancelMsg, 'Host must receive cancel message');
assert.strictEqual(cancelMsg.taskId, idA, 'Cancel message to host must include taskId');
console.log('✓ Test 2: Host receives cancel specifically targeted to taskId A.');

sw.destroy();

console.log('\n======================================================');
console.log('ALL T03 TASK ISOLATION TESTS PASSED! 🎉');
console.log('======================================================\n');
