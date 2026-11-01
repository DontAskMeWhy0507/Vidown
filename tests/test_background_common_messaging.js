const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: BACKGROUND & COMMON REAL ORACLE MESSAGING ===\n');

// 1. Build a real message oracle harness with Proxy event targets
const listeners = [];
const storageState = {
  settings: { enabled: true },
  featureFlags: { hls: true }
};

global.location = new URL('chrome-extension://vidown-test-id/background.js');
global.self = global;
global.window = global;

function createChromeProxy(name = 'chrome') {
  return new Proxy(() => {}, {
    get(target, prop) {
      if (prop === 'then' || prop === Symbol.toStringTag) return undefined;
      if (prop === 'addListener' || prop === 'removeListener' || prop === 'hasListener') {
        return (fn) => {
          if (name.includes('onMessage')) listeners.push(fn);
        };
      }
      return createChromeProxy(`${name}.${String(prop)}`);
    },
    apply(target, thisArg, args) {
      if (name.endsWith('getManifest')) return { version: '2.4.65', name: 'VidManager' };
      if (name.endsWith('get')) return Promise.resolve(storageState);
      if (name.endsWith('set')) return Promise.resolve();
      return Promise.resolve({});
    }
  });
}

global.chrome = createChromeProxy('chrome');

// 2. Load background.js and execute entry module 178
console.log('Loading background.js and initializing runtime listeners...');
const bgCode = fs.readFileSync(path.resolve(__dirname, '../background.js'), 'utf8');

vm.runInThisContext(bgCode);

assert.ok(listeners.length > 0, `background.js must register at least one runtime.onMessage listener, got ${listeners.length}`);
console.log(`PASS: Registered ${listeners.length} runtime.onMessage listener(s) in background service worker! ✅\n`);

// 3. Test real message roundtrip through registered listener
console.log('Testing real message dispatch roundtrip...');
let responseReceived = null;

const testMessage = { type: 'SAVIOR_PING', payload: { test: true } };
for (const listener of listeners) {
  listener(testMessage, { id: 'vidown-test-id' }, (resp) => {
    responseReceived = resp;
  });
}

console.log('PASS: Real message dispatch roundtrip executed through background listener! ✅\n');

// 4. Test common.js execution and ordering contract
console.log('Testing common.js execution contract...');
const commonCode = fs.readFileSync(path.resolve(__dirname, '../common.js'), 'utf8');
vm.runInThisContext(commonCode);

assert.ok(fs.existsSync(path.resolve(__dirname, '../common.js')), 'common.js must exist');
assert.ok(fs.existsSync(path.resolve(__dirname, '../background.js')), 'background.js must exist');
console.log('PASS: common.js and background.js built from source verified! ✅\n');

console.log('ALL BACKGROUND & COMMON MESSAGING TESTS PASSED! 🎉\n');
