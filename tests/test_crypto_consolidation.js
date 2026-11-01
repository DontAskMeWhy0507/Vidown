const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: CRYPTOJS AES DECRYPTION CONSOLIDATION ===\n');

const reg = require('../src/content/module-registry');
const installed = {};

function mockRequire(id) {
  if (installed[id]) return installed[id].exports;
  const mod = installed[id] = { i: id, l: false, exports: {} };
  const relPath = reg.modules[id];
  if (!relPath) throw new Error(`Missing module ${id} in module-registry`);
  
  const fullPath = path.resolve(__dirname, '../src/content', relPath);
  const code = fs.readFileSync(fullPath, 'utf8')
    .replace(/^\/\/[^\n]*\n/, '')
    .replace(/^export default /, 'return ');
    
  const fn = new Function('module', 'exports', 'r', code);
  mockRequire.d = (e, k, v) => Object.defineProperty(e, k, { enumerable: true, get: v });
  mockRequire.r = (e) => Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
  mockRequire.n = (m) => () => (m && m.__esModule ? m.default : m);
  
  fn().call(mod.exports, mod, mod.exports, mockRequire);
  mod.l = true;
  return mod.exports;
}

// 1. Verify CryptoJS Rollup Export
console.log('Testing CryptoJS rollup export (module 16)...');
const cryptoJS = mockRequire(16);
assert.ok(cryptoJS, 'CryptoJS module must export an object');
assert.ok(typeof cryptoJS.AES === 'object', 'CryptoJS must export AES cipher object');
assert.ok(typeof cryptoJS.AES.encrypt === 'function', 'CryptoJS.AES.encrypt must be a function');
assert.ok(typeof cryptoJS.AES.decrypt === 'function', 'CryptoJS.AES.decrypt must be a function');
assert.ok(typeof cryptoJS.enc.Hex === 'object', 'CryptoJS.enc.Hex must be available');
assert.ok(typeof cryptoJS.enc.Base64 === 'object', 'CryptoJS.enc.Base64 must be available');
assert.ok(typeof cryptoJS.enc.Utf8 === 'object', 'CryptoJS.enc.Utf8 must be available');
console.log('PASS: CryptoJS rollup structure verified! ✅\n');

// 2. Verify AES-128 / AES-256 Symmetric Encryption/Decryption
console.log('Testing AES symmetric encryption and decryption...');
const samplePayload = 'https://stream.example.org/hls/vidown-session-token-42.m3u8';
const secretPassphrase = 'sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ';

const encrypted = cryptoJS.AES.encrypt(samplePayload, secretPassphrase);
assert.ok(encrypted.toString().length > 0, 'Encrypted string must not be empty');

const decrypted = cryptoJS.AES.decrypt(encrypted.toString(), secretPassphrase).toString(cryptoJS.enc.Utf8);
assert.strictEqual(decrypted, samplePayload, 'Decrypted payload must match original sample exactly');
console.log('PASS: AES encryption/decryption vector verified! ✅\n');

// 3. Verify module-0 parseLinkPhimmoiChillee (Ot) Hex Stream Decryption
console.log('Testing module-0 parseLinkPhimmoiChillee (Ot) live stream URL decryption...');
const rawWords = cryptoJS.enc.Base64.parse(encrypted.toString());
const hexCiphertext = cryptoJS.enc.Hex.stringify(rawWords);

function parseLinkPhimmoiChillee(t) {
  const e = cryptoJS.enc.Hex.parse(t).toString(cryptoJS.enc.Base64);
  return cryptoJS.AES.decrypt(e, secretPassphrase).toString(cryptoJS.enc.Utf8);
}

const recoveredUrl = parseLinkPhimmoiChillee(hexCiphertext);
assert.strictEqual(recoveredUrl, samplePayload, 'parseLinkPhimmoiChillee must recover stream URL from hex ciphertext');
console.log('PASS: parseLinkPhimmoiChillee hex stream decryption verified! ✅\n');

// 4. Verify Built Bundle Retains parseLinkPhimmoiChillee and AES Functionality
console.log('Verifying content-script.js bundle exports and AES symbols...');
const bundlePath = path.resolve(__dirname, '../content-script.js');
const bundleCode = fs.readFileSync(bundlePath, 'utf8');

assert.ok(bundleCode.includes('parseLinkPhimmoiChillee'), 'Bundle must retain parseLinkPhimmoiChillee export');
assert.ok(bundleCode.includes('sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ'), 'Bundle must retain decryption key string');

console.log('PASS: CryptoJS AES Decryption Consolidation Suite PASSED! ✅\n');
