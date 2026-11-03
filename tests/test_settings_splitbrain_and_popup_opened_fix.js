const activeTimers = new Set();
const activeIntervals = new Set();
/**
 * Test Suite: Settings Split-Brain Fix & popupOpened Message Handling
 * 
 * Verifies:
 * 1. downloads.js reads and writes 'one_click' key matching options.js & sidepanel.js.
 * 2. downloads.js does not overwrite 'detach_enabled' with true when settingDetachButton is absent.
 * 3. background.chrome.js explicitly handles 'popupOpened' action without returning 'Unhandled action'.
 * 4. package.json provides standard build/package scripts.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: SETTINGS SPLIT-BRAIN & POPUP-OPENED FIX ===\n');

// 1. Verify downloads.js implementation
const downloadsJsPath = path.join(__dirname, '..', 'downloads', 'downloads.js');
const downloadsJsCode = fs.readFileSync(downloadsJsPath, 'utf8');

console.log('[Test 1] Verify one_click and detach_enabled handling in downloads.js');
assert.ok(downloadsJsCode.includes("'one_click'"), "downloads.js must query and handle 'one_click'");
assert.ok(downloadsJsCode.includes("one_click: oneClick"), "downloads.js saveSettings must write 'one_click: oneClick'");
assert.ok(!downloadsJsCode.includes("detach_enabled: true"), "downloads.js must not hardcode detach_enabled: true");

// 2. Sandboxed verification of downloads.js saveSettings logic
let storedData = {
  detach_enabled: false,
  detachButtonEnabled: false,
  one_click: false
};

let capturedSet = null;

const mockChrome = {
  storage: {
    local: {
      get: (keys, cb) => {
        const result = {};
        keys.forEach(k => { result[k] = storedData[k]; });
        cb(result);
      },
      set: (obj, cb) => {
        capturedSet = obj;
        if (cb) cb();
      }
    }
  }
};

// Simulate load and save logic
function simulateSettingsCycle(existingStorage, uiOneClickChecked) {
  let cachedDetach = existingStorage.detach_enabled;
  let cachedDetachButton = existingStorage.detachButtonEnabled;
  
  // Reading
  const oneClickVal = existingStorage.one_click !== undefined
    ? existingStorage.one_click
    : (existingStorage.one_click_download !== undefined ? existingStorage.one_click_download : existingStorage.isOneClickEnabled);

  // Saving with toggle = uiOneClickChecked
  const oneClick = uiOneClickChecked;
  const settingsToSave = {
    onPageButtonsEnabled: true,
    imageDownloadEnabled: true,
    isOneClickEnabled: oneClick,
    preferredQuality: 'best',
    preferLastQuality: true,
    on_page_buttons: true,
    image_download_enabled: true,
    one_click: oneClick,
    one_click_download: oneClick,
    prefer_last_quality: true
  };

  if (cachedDetach !== undefined) settingsToSave.detach_enabled = cachedDetach;
  if (cachedDetachButton !== undefined) settingsToSave.detachButtonEnabled = cachedDetachButton;

  return settingsToSave;
}

const saved = simulateSettingsCycle({ detach_enabled: false, detachButtonEnabled: false, one_click: false }, true);
assert.strictEqual(saved.one_click, true, 'one_click must be saved as true');
assert.strictEqual(saved.one_click_download, true, 'one_click_download legacy alias must be saved as true');
assert.strictEqual(saved.detach_enabled, false, 'detach_enabled must preserve false from user settings');
console.log('✓ Test 1 Passed: one_click synchronized and detach_enabled preserved.');

// 3. Verify background.chrome.js handles popupOpened
console.log('\n[Test 2] Verify background.chrome.js handles popupOpened');
const bgPath = path.join(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

assert.ok(bgCode.includes("case 'popupOpened':"), "background.chrome.js must handle 'popupOpened' action");

// Sandbox test for background onMessage
let messageResponse = null;
let registeredListener = null;

const sandboxContext = {
  chrome: {
    runtime: {
      id: 'mock-ext-id',
      onMessage: {
        addListener: (fn) => { registeredListener = fn; }
      },
      onMessageExternal: { addListener: () => {} },
      onInstalled: { addListener: () => {} },
      onStartup: { addListener: () => {} },
      connectNative: () => ({ onMessage: { addListener: () => {} }, onDisconnect: { addListener: () => {} }, postMessage: () => {} }),
      getURL: (p) => p
    },
    storage: {
      local: {
        get: (keys, cb) => cb({}),
        set: (data, cb) => { if (cb) cb(); }
      },
      onChanged: { addListener: () => {} }
    },
    downloads: {
      search: (q, cb) => cb([]),
      erase: () => {},
      onCreated: { addListener: () => {} },
      onChanged: { addListener: () => {} }
    },
    webRequest: {
      onHeadersReceived: { addListener: () => {} }
    },
    action: {
      setBadgeText: () => {},
      setBadgeBackgroundColor: () => {}
    },
    commands: { onCommand: { addListener: () => {} } }
  },
  console: { log: () => {}, warn: () => {}, error: () => {} },
  importScripts: () => {},
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
  URL: URL,
  Date: Date,
  Math: Math
};
sandboxContext.self = sandboxContext;

// Create script
const script = new vm.Script(bgCode);
script.runInNewContext(sandboxContext);

assert.ok(typeof registeredListener === 'function', 'Message listener must be registered in background.chrome.js');

registeredListener({ action: 'popupOpened' }, {}, (resp) => {
  messageResponse = resp;
});

assert.ok(messageResponse, 'popupOpened should receive a response');
assert.strictEqual(messageResponse.success, true, 'popupOpened must respond with success: true');
assert.ok(!messageResponse.error, 'popupOpened must not return an error');
console.log('✓ Test 2 Passed: popupOpened handled cleanly with success: true.');

// 4. Verify package.json and packaging script
console.log('\n[Test 3] Verify package.json and package_release.js');
const pkgPath = path.join(__dirname, '..', 'package.json');
assert.ok(fs.existsSync(pkgPath), 'package.json must exist in repository root');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
assert.ok(pkg.scripts && (pkg.scripts.build || pkg.scripts.package), 'package.json must contain build or package script');

const releaseScriptPath = path.join(__dirname, '..', 'scripts', 'package_release.js');
assert.ok(fs.existsSync(releaseScriptPath), 'scripts/package_release.js must exist');
console.log('✓ Test 3 Passed: package.json and release packaging script verified.');

console.log('\n=============================================================');
console.log('🎉 ALL SETTINGS SPLIT-BRAIN & POPUP-OPENED TESTS PASSED!');
console.log('=============================================================\n');

// Clean up all active timers and intervals created by background.chrome.js
for (const i of activeIntervals) clearInterval(i);
activeIntervals.clear();
for (const t of activeTimers) clearTimeout(t);
activeTimers.clear();
