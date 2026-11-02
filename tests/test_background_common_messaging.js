const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: BACKGROUND & COMMON REAL ORACLE MESSAGING ===\n');

// 1. Verify Common-Before-Content Ordering Contract in manifest.json
console.log('1. Verifying common-before-content ordering in manifest.json...');
const manifestPath = path.resolve(__dirname, '../manifest.json');
assert.ok(fs.existsSync(manifestPath), 'manifest.json must exist');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

assert.ok(manifest.content_scripts && manifest.content_scripts.length > 0, 'Must define content_scripts');
const contentScriptsJs = manifest.content_scripts[0].js;
const commonIdx = contentScriptsJs.indexOf('common.js');
const contentIdx = contentScriptsJs.indexOf('content-script.js');

assert.ok(commonIdx !== -1, 'common.js must be in content_scripts');
assert.ok(contentIdx !== -1, 'content-script.js must be in content_scripts');
assert.ok(
  commonIdx < contentIdx,
  `common.js (index ${commonIdx}) must strictly precede content-script.js (index ${contentIdx}) in manifest load order`
);
console.log(`PASS: Load order verified: common.js (#${commonIdx}) loads before content-script.js (#${contentIdx})! ✅\n`);

// 2. Build Chrome Runtime Proxy Mock Harness
const registeredListeners = {};

global.location = new URL('chrome-extension://vidown-test-id/background.js');
global.self = global;
global.window = global;

function createChromeProxy(name = 'chrome') {
  return new Proxy(() => {}, {
    get(target, prop) {
      if (prop === 'then' || prop === Symbol.toStringTag) return undefined;
      if (prop === 'addListener') {
        return (fn) => {
          registeredListeners[name] = registeredListeners[name] || [];
          registeredListeners[name].push(fn);
        };
      }
      return createChromeProxy(`${name}.${String(prop)}`);
    },
    apply(target, thisArg, args) {
      if (name.endsWith('getManifest')) return { version: '3.0.0', name: 'VidManager' };
      return Promise.resolve({});
    }
  });
}

global.chrome = createChromeProxy('chrome');

// 3. Execute common.js then background.js in VM context
console.log('2. Executing common.js then background.js in VM...');
const commonCode = fs.readFileSync(path.resolve(__dirname, '../common.js'), 'utf8');
vm.runInThisContext(commonCode);

const bgCode = fs.readFileSync(path.resolve(__dirname, '../background.js'), 'utf8');
vm.runInThisContext(bgCode);

assert.ok(
  registeredListeners['chrome.runtime.onMessageExternal'],
  'background.js must register chrome.runtime.onMessageExternal listener'
);
console.log('PASS: background.js successfully initialized and registered runtime listeners! ✅\n');

// 4. Test real message roundtrip dispatch and assert response payload
console.log('3. Testing external message dispatch roundtrip and asserting response...');
const externalListener = registeredListeners['chrome.runtime.onMessageExternal'][0];

// Test Case A: Valid pip_url request
let responseA = null;
externalListener(
  { action: 'pip_url', params: { url: 'https://stream.example.org/test.m3u8' } },
  { tab: { index: 0 } },
  (resp) => {
    responseA = resp;
  }
);
assert.deepStrictEqual(responseA, { status: 'ok' }, 'Valid pip_url request must respond with { status: "ok" }');
console.log('PASS: pip_url roundtrip response asserted ->', responseA);

// Test Case B: Empty / invalid request
let responseB = null;
externalListener(
  null,
  { tab: { index: 0 } },
  (resp) => {
    responseB = resp;
  }
);
assert.deepStrictEqual(
  responseB,
  { status: 'error', error_message: 'empty_request' },
  'Empty request must respond with { status: "error", error_message: "empty_request" }'
);
console.log('PASS: Empty request error roundtrip asserted ->', responseB);

console.log('\nALL BACKGROUND & COMMON MESSAGING TESTS PASSED! 🎉\n');
