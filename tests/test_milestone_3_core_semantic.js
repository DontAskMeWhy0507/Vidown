const assert = require('assert');
const path = require('path');

console.log('=== TEST SUITE: MILESTONE 3 CORE SEMANTIC LAYER ===\n');

// 1. Test Constants
console.log('1. Testing semantic constants...');
const constants = require('../src/content/core/constants');

assert.ok(constants.MEDIA_TYPES, 'Must export MEDIA_TYPES');
assert.ok(constants.MEDIA_TYPES.video, 'Must include video media type');
assert.ok(constants.MEDIA_TYPES.audio, 'Must include audio media type');
assert.ok(constants.MEDIA_TYPES.video.extensions.includes('mp4'), 'Video extensions must include mp4');
assert.ok(constants.MEDIA_TYPES.video.extensions.includes('m3u8'), 'Video extensions must include m3u8');

assert.ok(constants.QUALITY_MAP, 'Must export QUALITY_MAP');
assert.strictEqual(constants.QUALITY_MAP['1080p'].label, 'Full HD', '1080p must map to Full HD');

assert.ok(constants.RESOLUTIONS.includes(1080), 'RESOLUTIONS must include 1080');
assert.ok(constants.RESOLUTIONS.includes(720), 'RESOLUTIONS must include 720');

assert.strictEqual(constants.isHlsOrZip('m3u8'), true, 'm3u8 is HLS');
assert.strictEqual(constants.isHlsOrZip('mp4'), false, 'mp4 is not HLS');

assert.strictEqual(constants.ACTION_TYPES.FETCH, 'background_request', 'FETCH action must be background_request');
assert.strictEqual(constants.ACTION_TYPES.DOWNLOAD, 'download', 'DOWNLOAD action must be download');

console.log('PASS: Constants verified! ✅\n');

// 2. Test EventBus
console.log('2. Testing semantic EventBus...');
const { getEventBus } = require('../src/content/core/events');
const bus = getEventBus();

let eventReceived = null;
bus.on('test.event', (data) => {
  eventReceived = data;
});

bus.emit('test.event', { status: 'ok', value: 42 });
assert.deepStrictEqual(eventReceived, { status: 'ok', value: 42 }, 'EventBus must deliver event payloads');
console.log('PASS: EventBus verified! ✅\n');

// 3. Test Core Utilities
console.log('3. Testing core utilities...');
const utils = require('../src/content/core/utils');

assert.strictEqual(typeof utils.query, 'function', 'Must export query');
assert.strictEqual(typeof utils.queryAll, 'function', 'Must export queryAll');
assert.strictEqual(typeof utils.beautifyFileSize, 'function', 'Must export beautifyFileSize');
assert.strictEqual(typeof utils.cleanSymbols, 'function', 'Must export cleanSymbols');
assert.strictEqual(typeof utils.detectMediaTypeAndExt, 'function', 'Must export detectMediaTypeAndExt');
assert.strictEqual(typeof utils.parseLinkPhimmoiChillee, 'function', 'Must export parseLinkPhimmoiChillee');

// Test cleanSymbols
const dirty = 'Video Title 123! @#$%';
assert.strictEqual(utils.cleanSymbols(dirty), 'Video Title 123! @#$%', 'Must preserve alphanumeric & common punctuation');

// Test beautifyFileSize
assert.strictEqual(utils.beautifyFileSize(1000), '1KB', '1000 bytes beautified');
assert.strictEqual(utils.beautifyFileSize(1000000), '1MB', '1,000,000 bytes beautified');

// Test detectMediaTypeAndExt
const item1 = { url: 'https://example.com/stream.m3u8' };
utils.detectMediaTypeAndExt(item1, 'application/x-mpegurl');
assert.strictEqual(item1.type, 'video', 'M3U8 must be detected as video');
assert.strictEqual(item1.ext, 'm3u8', 'Extension must be m3u8');

// Test AES decryption via parseLinkPhimmoiChillee
// Using live test vector with fixed key 'sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ'
const cryptoRollup = require('../src/content/crypto/crypto-rollup');
const secretKey = 'sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ';
const rawTestUrl = 'https://vidown.org/hls/sample-stream.m3u8';
const encrypted = cryptoRollup.AES.encrypt(rawTestUrl, secretKey);
const rawWords = cryptoRollup.enc.Base64.parse(encrypted.toString());
const hexPayload = cryptoRollup.enc.Hex.stringify(rawWords);

const decrypted = utils.parseLinkPhimmoiChillee(hexPayload);
assert.strictEqual(decrypted, rawTestUrl, 'parseLinkPhimmoiChillee must recover stream URL from hex ciphertext');

console.log('PASS: Core utilities verified! ✅\n');
console.log('PASS: ALL MILESTONE 3 CORE SEMANTIC TESTS PASSED! ✅\n');
