const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: CRYPTOJS AES DECRYPTION CONSOLIDATION ===\n');

const reg = require('../src/content/module-registry');
const installed = {};

function webpackRequire(moduleId) {
  if (installed[moduleId]) return installed[moduleId].exports;
  const mod = (installed[moduleId] = { i: moduleId, l: false, exports: {} });
  const relPath = reg.modules[moduleId];
  if (!relPath) throw new Error(`Missing module ${moduleId} in module-registry`);

  const fullPath = path.resolve(__dirname, '../src/content', relPath);
  let code = fs.readFileSync(fullPath, 'utf8')
    .replace(/^\/\/[^\n]*\n/, '')
    .replace(/^export default\s+/, '')
    .trim();
  if (code.endsWith(';')) code = code.slice(0, -1);

  const fn = new Function('module', 'exports', '__webpack_require__', `(${code})(module, exports, __webpack_require__)`);
  fn(mod, mod.exports, webpackRequire);
  mod.l = true;
  return mod.exports;
}

webpackRequire.d = (exports, name, getter) => {
  if (!webpackRequire.o(exports, name)) {
    Object.defineProperty(exports, name, { enumerable: true, get: getter });
  }
};
webpackRequire.r = (exports) => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  }
  Object.defineProperty(exports, '__esModule', { value: true });
};
webpackRequire.n = (module) => {
  const getter = module && module.__esModule ? () => module['default'] : () => module;
  webpackRequire.d(getter, 'a', getter);
  return getter;
};
webpackRequire.o = (object, property) => Object.prototype.hasOwnProperty.call(object, property);
webpackRequire.p = './';

// 1. Verify CryptoJS Rollup Export (module 16)
console.log('Testing CryptoJS rollup export (module 16)...');
const cryptoJS = webpackRequire(16);
assert.ok(cryptoJS, 'CryptoJS module must export an object');
assert.ok(typeof cryptoJS.AES === 'object', 'CryptoJS must export AES cipher object');
assert.ok(typeof cryptoJS.AES.encrypt === 'function', 'CryptoJS.AES.encrypt must be a function');
assert.ok(typeof cryptoJS.AES.decrypt === 'function', 'CryptoJS.AES.decrypt must be a function');
assert.ok(typeof cryptoJS.enc.Hex === 'object', 'CryptoJS.enc.Hex must be available');
assert.ok(typeof cryptoJS.enc.Base64 === 'object', 'CryptoJS.enc.Base64 must be available');
assert.ok(typeof cryptoJS.enc.Utf8 === 'object', 'CryptoJS.enc.Utf8 must be available');
console.log('PASS: CryptoJS rollup structure verified! ✅\n');

// 2. Load Actual Module 0 (core/dom-utils.js) and Verify parseLinkPhimmoiChillee
console.log('Testing actual Module 0 (core/dom-utils.js) parseLinkPhimmoiChillee export...');
const domUtils = webpackRequire(0);
assert.ok(domUtils, 'Module 0 must export functions');
assert.strictEqual(
  typeof domUtils.parseLinkPhimmoiChillee,
  'function',
  'Module 0 must export parseLinkPhimmoiChillee function'
);

// 3. Golden Deterministic HLS Decrypt Vector on Actual Module 0
// Deterministic OpenSSL salted ciphertext hex for sample HLS stream URL:
// Stream URL: https://m3u8-play-01.playstreamz.site/m3u8/phimmoi/stream-1080p.m3u8
// Key: sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ
const goldenHexVector =
  '53616c7465645f5f1a2b3c4d5e6f7a8b43642a776c51761a1a22aedd464c521d14c856642e60743e654259ef524a3916444cd717dab1935ad6e5893d1665e679b6a5baa6f98f3c9b838a12f6469db880b9002c751931959fd84dea79476434ae';
const expectedHlsUrl =
  'https://m3u8-play-01.playstreamz.site/m3u8/phimmoi/stream-1080p.m3u8';

console.log('Executing parseLinkPhimmoiChillee on golden HLS test vector...');
const recoveredUrl = domUtils.parseLinkPhimmoiChillee(goldenHexVector);
assert.strictEqual(
  recoveredUrl,
  expectedHlsUrl,
  'Real Module 0 parseLinkPhimmoiChillee must recover exact HLS stream URL from golden ciphertext'
);
console.log(`PASS: Real Module 0 decrypted golden vector -> ${recoveredUrl} ✅\n`);

// 4. Verify Built Bundle Retains parseLinkPhimmoiChillee and AES Functionality
console.log('Verifying content-script.js bundle exports and AES symbols...');
const bundlePath = path.resolve(__dirname, '../content-script.js');
const bundleCode = fs.readFileSync(bundlePath, 'utf8');

assert.ok(bundleCode.includes('parseLinkPhimmoiChillee'), 'Bundle must retain parseLinkPhimmoiChillee export');
assert.ok(bundleCode.includes('sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ'), 'Bundle must retain decryption key string');

console.log('PASS: CryptoJS AES Decryption Consolidation Suite PASSED! ✅\n');
