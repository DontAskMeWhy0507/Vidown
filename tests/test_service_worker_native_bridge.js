const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: Service Worker Native Bridge & IPC Dispatching ---');

// Mock Chrome Extension environment
const mockListeners = [];
const mockNativeMessages = [];
let mockBadge = {};

global.self = global;
global.importScripts = () => {};

global.chrome = {
  runtime: {
    connectNative: (hostName) => {
      assert.strictEqual(hostName, 'com.savior.helper', 'Must connect to com.savior.helper');
      return {
        onMessage: { addListener: (cb) => { mockNativeListeners.push(cb); } },
        onDisconnect: { addListener: () => {} },
        postMessage: (msg) => { mockNativeMessages.push(msg); }
      };
    },
    onMessage: {
      addListener: (cb) => { mockListeners.push(cb); }
    },
    sendMessage: (msg) => Promise.resolve(),
    lastError: null
  },
  action: {
    setBadgeText: (opts) => { mockBadge[opts.tabId] = opts.text; },
    setBadgeBackgroundColor: () => {}
  },
  tabs: {
    onActivated: { addListener: () => {} },
    onRemoved: { addListener: () => {} },
    onUpdated: { addListener: () => {} }
  },
  webRequest: {
    onHeadersReceived: { addListener: () => {} }
  }
};

const mockNativeListeners = [];

// Mock core modules
const MediaTypes = require('../core/media_types');
const MediaRegistry = require('../core/media_registry');
global.self.UniversalMediaTypes = MediaTypes;
global.self.UniversalMediaRegistry = MediaRegistry;
global.self.UniversalManifestParser = {};
global.self.UniversalMagicProbe = {};
global.self.UniversalNetworkObserver = {};

// Load service_worker.js code
const swPath = path.join(__dirname, '..', 'service_worker.js');
const swCode = fs.readFileSync(swPath, 'utf8');
eval(swCode); // Execute mock context

assert.ok(mockListeners.length > 0, 'Service worker must register runtime.onMessage listener');
const dispatcher = mockListeners[0];

// Test 1: ping action
let pingResponse = null;
dispatcher({ action: 'ping' }, {}, (res) => { pingResponse = res; });
assert.ok(pingResponse, 'Must respond to ping');
assert.strictEqual(pingResponse.status, 'ok');
assert.strictEqual(pingResponse.engine, 'Vidown Clean Core');

// Test 2: registerMediaItem and getMediaForCurrentTab
const tabId = 999;
let registerResponse = null;
dispatcher({
  action: 'registerMediaItem',
  tabId: tabId,
  media: {
    mediaInstanceId: 'video_elem_test',
    requestUrl: 'https://example.com/video.mp4',
    protocol: MediaTypes.ProtocolType.DIRECT,
    title: 'Test MP4 Video',
    quality: '1080p'
  }
}, {}, (res) => { registerResponse = res; });

assert.ok(registerResponse && registerResponse.success, 'registerMediaItem must succeed');

let mediaResponse = null;
dispatcher({ action: 'getMediaForCurrentTab', tabId: tabId }, {}, (res) => { mediaResponse = res; });
assert.ok(mediaResponse && mediaResponse.success, 'getMediaForCurrentTab must succeed');
assert.strictEqual(mediaResponse.media.length, 1);
assert.strictEqual(mediaResponse.media[0].title, 'Test MP4 Video');

// Test 3: startDownload forwards to native host
let downloadResponse = null;
dispatcher({
  action: 'startDownload',
  url: 'https://example.com/video.mp4',
  title: 'Test MP4 Video',
  quality: '1080p',
  pageUrl: 'https://example.com/watch'
}, {}, (res) => { downloadResponse = res; });

assert.ok(downloadResponse && downloadResponse.success, 'startDownload must respond success');
assert.strictEqual(mockNativeMessages.length, 1, 'Must send message to native host');
assert.strictEqual(mockNativeMessages[0].action, 'download');
assert.strictEqual(mockNativeMessages[0].quality, '1080p');

// Test 4: cancelDownload forwards to native host
dispatcher({
  action: 'cancelDownload',
  downloadId: 'dl_123'
}, {}, () => {});

assert.strictEqual(mockNativeMessages.length, 2);
assert.strictEqual(mockNativeMessages[1].action, 'cancel');
assert.strictEqual(mockNativeMessages[1].downloadId, 'dl_123');

// Test 5: openFile and openFolder forward to native host
dispatcher({ action: 'openFile', filePath: 'C:/Downloads/video.mp4' }, {}, () => {});
assert.strictEqual(mockNativeMessages.length, 3);
assert.strictEqual(mockNativeMessages[2].action, 'openFile');

dispatcher({ action: 'openFolder', filePath: 'C:/Downloads/video.mp4' }, {}, () => {});
assert.strictEqual(mockNativeMessages.length, 4);
assert.strictEqual(mockNativeMessages[3].action, 'openFolder');

console.log('✅ Task 2: Service Worker Native Bridge & IPC Dispatching tests PASSED!');
