const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: NATIVE DOWNLOAD QUEUE DEADLOCK FIX (🔴 Blocker 1) ===\n');

const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

// -------------------------------------------------------------
// Test 1: Static Code Verification
// -------------------------------------------------------------
console.log('[Test 1] Static Code Verification of Queued Task State');

// Find the queuing branch in startNativeDownload
const queueBlockIndex = bgCode.indexOf("if (requiresNativeHelper(downloadParams))");
assert.ok(queueBlockIndex !== -1, 'Must find queueing block in startNativeDownload');
const queueCodeSection = bgCode.slice(queueBlockIndex, queueBlockIndex + 1200);

assert.ok(
  queueCodeSection.includes("state: 'queued'"),
  'Queued task in activeDownloads must have state: "queued" instead of "downloading"'
);
console.log('✓ Test 1: Queued task in startNativeDownload correctly sets state: "queued".');

// -------------------------------------------------------------
// Test 2: Runtime Queue Processing & Deadlock Elimination
// -------------------------------------------------------------
console.log('\n[Test 2] Runtime Queue Execution & Deadlock Elimination');

function createSandboxedServiceWorker() {
  const postedMessages = [];
  let portMessageHandler = null;
  const activeTimers = new Set();
  const activeIntervals = new Set();

  const mockPort = {
    postMessage: (msg) => {
      postedMessages.push(msg);
    },
    onMessage: {
      addListener: (fn) => {
        portMessageHandler = fn;
      },
      removeListener: (fn) => {
        if (portMessageHandler === fn) portMessageHandler = null;
      }
    },
    onDisconnect: {
      addListener: () => {}
    }
  };

  const context = {
    console: {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {}
    },
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
    importScripts: () => {},
    self: {
      addEventListener: () => {}
    },
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
      action: {
        setBadgeText: () => {},
        setBadgeBackgroundColor: () => {}
      },
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
      scripting: {
        executeScript: () => Promise.resolve([])
      }
    }
  };

  vm.createContext(context);
  vm.runInContext(bgCode, context);

  return {
    context,
    postedMessages,
    sendPortMessage: (msg) => {
      if (portMessageHandler) portMessageHandler(msg);
    },
    getActiveDownloads: () => vm.runInContext('activeDownloads', context),
    getNativeDownloadQueue: () => vm.runInContext('nativeDownloadQueue', context),
    startNativeDownload: (params, cb) => vm.runInContext('startNativeDownload', context)(params, cb),
    processNextQueuedNativeDownload: () => vm.runInContext('processNextQueuedNativeDownload', context)(),
    destroy: () => {
      for (const i of activeIntervals) clearInterval(i);
      activeIntervals.clear();
      for (const t of activeTimers) clearTimeout(t);
      activeTimers.clear();
    }
  };
}

const sw = createSandboxedServiceWorker();

// Step 1: Start 1st Native Job (DASH muxing task)
const job1Params = {
  videoUrl: 'https://cdn.example.com/stream1_video.mp4',
  audioUrl: 'https://cdn.example.com/stream1_audio.mp4',
  filename: 'test_video_1.mp4'
};
let job1Id = null;
sw.startNativeDownload(job1Params, (id) => { job1Id = id; });

const activeDownloads = sw.getActiveDownloads();
const queue = sw.getNativeDownloadQueue();

assert.ok(job1Id, 'Job 1 must return a valid fakeId');
assert.strictEqual(activeDownloads.size, 1, 'Job 1 should be in activeDownloads');
const job1Task = activeDownloads.get(job1Id);
assert.strictEqual(job1Task.state, 'downloading', 'Job 1 state must be "downloading"');
assert.strictEqual(queue.length, 0, 'Queue should be empty initially');
assert.strictEqual(sw.postedMessages.length, 1, 'Job 1 should post message to native host');

// Step 2: Start 2nd Native Job while Job 1 is running
const job2Params = {
  videoUrl: 'https://cdn.example.com/stream2_video.mp4',
  audioUrl: 'https://cdn.example.com/stream2_audio.mp4',
  filename: 'test_video_2.mp4'
};
let job2Id = null;
sw.startNativeDownload(job2Params, (id) => { job2Id = id; });

assert.ok(job2Id, 'Job 2 must return a valid fakeId');
assert.strictEqual(queue.length, 1, 'Job 2 must be queued in nativeDownloadQueue');
assert.strictEqual(activeDownloads.size, 2, 'activeDownloads must contain both Job 1 and Job 2');

const job2Task = activeDownloads.get(job2Id);
assert.ok(job2Task, 'Job 2 must exist in activeDownloads');
assert.strictEqual(
  job2Task.state,
  'queued',
  `Job 2 state in activeDownloads must be "queued", but got "${job2Task.state}"`
);
assert.strictEqual(job2Task.percent, '0%', 'Job 2 initial percent must be "0%"');
assert.strictEqual(job2Task.speed, 'Queued...', 'Job 2 initial speed must be "Queued..."');

// Step 3: Verify calling processNextQueuedNativeDownload while Job 1 is still downloading does NOT unblock Job 2
sw.processNextQueuedNativeDownload();
assert.strictEqual(queue.length, 1, 'Queue must remain size 1 while Job 1 is downloading');
assert.strictEqual(sw.postedMessages.length, 1, 'No new native message should be posted yet');

// Step 4: Job 1 completes
sw.sendPortMessage({ action: 'complete', outputFile: 'test_video_1.mp4' });

assert.strictEqual(activeDownloads.has(job1Id), false, 'Job 1 should be removed from activeDownloads upon completion');

// Step 5: Process next queued download
sw.processNextQueuedNativeDownload();

assert.strictEqual(queue.length, 0, 'Job 2 should be dequeued from nativeDownloadQueue');
assert.strictEqual(job2Task.state, 'downloading', 'Job 2 state must transition to "downloading"');
assert.strictEqual(sw.postedMessages.length, 2, 'Job 2 must be dispatched to native host without deadlocking!');

console.log('✓ Test 2: Multi-job native download queue unblocks and executes seamlessly without deadlock!');

// -------------------------------------------------------------
// Test 3: Multiple Queued Jobs Pipeline (Job 1, Job 2, Job 3)
// -------------------------------------------------------------
console.log('\n[Test 3] Pipeline of 3 Native Downloads');
const sw3 = createSandboxedServiceWorker();

let j1 = null, j2 = null, j3 = null;
sw3.startNativeDownload({ videoUrl: 'https://cdn.example.com/v1.mp4', audioUrl: 'https://cdn.example.com/a1.mp4', filename: 'v1.mp4' }, id => { j1 = id; });
sw3.startNativeDownload({ videoUrl: 'https://cdn.example.com/v2.mp4', audioUrl: 'https://cdn.example.com/a2.mp4', filename: 'v2.mp4' }, id => { j2 = id; });
sw3.startNativeDownload({ videoUrl: 'https://cdn.example.com/v3.mp4', audioUrl: 'https://cdn.example.com/a3.mp4', filename: 'v3.mp4' }, id => { j3 = id; });

const act3 = sw3.getActiveDownloads();
const q3 = sw3.getNativeDownloadQueue();

assert.strictEqual(act3.get(j1).state, 'downloading');
assert.strictEqual(act3.get(j2).state, 'queued');
assert.strictEqual(act3.get(j3).state, 'queued');
assert.strictEqual(q3.length, 2, 'Two jobs should be waiting in queue');

// Complete Job 1
sw3.sendPortMessage({ action: 'complete', outputFile: 'v1.mp4' });
sw3.processNextQueuedNativeDownload();

assert.strictEqual(act3.has(j1), false, 'Job 1 removed');
assert.strictEqual(act3.get(j2).state, 'downloading', 'Job 2 is now downloading');
assert.strictEqual(act3.get(j3).state, 'queued', 'Job 3 remains queued');
assert.strictEqual(q3.length, 1, 'One job remains in queue');

// Complete Job 2
sw3.sendPortMessage({ action: 'complete', outputFile: 'v2.mp4' });
sw3.processNextQueuedNativeDownload();

assert.strictEqual(act3.has(j2), false, 'Job 2 removed');
assert.strictEqual(act3.get(j3).state, 'downloading', 'Job 3 is now downloading');
assert.strictEqual(q3.length, 0, 'Queue is now empty');

// Complete Job 3
sw3.sendPortMessage({ action: 'complete', outputFile: 'v3.mp4' });
assert.strictEqual(act3.has(j3), false, 'Job 3 removed');
assert.strictEqual(act3.size, 0, 'No active downloads remaining');

console.log('✓ Test 3: Pipeline of 3 consecutive native downloads executes sequentially without deadlock.');

// -------------------------------------------------------------
// Test 4: Error Handling Unblocks Next Queued Job
// -------------------------------------------------------------
console.log('\n[Test 4] Native Job Error Unblocks Queue');
const sw4 = createSandboxedServiceWorker();

let errJob1 = null, nextJob = null;
sw4.startNativeDownload({ videoUrl: 'https://cdn.example.com/err_video.mp4', audioUrl: 'https://cdn.example.com/err_audio.mp4', filename: 'err.mp4' }, id => { errJob1 = id; });
sw4.startNativeDownload({ videoUrl: 'https://cdn.example.com/ok_video.mp4', audioUrl: 'https://cdn.example.com/ok_audio.mp4', filename: 'ok.mp4' }, id => { nextJob = id; });

const act4 = sw4.getActiveDownloads();
const q4 = sw4.getNativeDownloadQueue();

assert.strictEqual(act4.get(errJob1).state, 'downloading');
assert.strictEqual(act4.get(nextJob).state, 'queued');

// Simulate Job 1 encountering error in native host
sw4.sendPortMessage({ action: 'error', error: 'FFmpeg mux failed' });
// On error, background initiates processNextQueuedNativeDownload (tested directly)
sw4.processNextQueuedNativeDownload();

assert.strictEqual(act4.get(nextJob).state, 'downloading', 'Next queued job is unblocked after prior job error');
assert.strictEqual(q4.length, 0, 'Queue is drained');

console.log('✓ Test 4: Next queued job starts successfully when previous job fails.');

console.log('\n======================================================');
console.log('ALL NATIVE QUEUE DEADLOCK FIX TESTS PASSED! 🎉');
console.log('======================================================');

// Teardown sandboxes
sw.destroy();
sw3.destroy();
sw4.destroy();
