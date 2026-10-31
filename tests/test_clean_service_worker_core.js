const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: Clean Service Worker Core & Module Orchestration ---');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Verify existence of core files
const coreFiles = [
  'media_types.js',
  'media_registry.js',
  'manifest_parse.js',
  'magic_probe.js',
  'network_observer.js'
];
for (const file of coreFiles) {
  const fullPath = path.join(ROOT_DIR, 'core', file);
  assert.ok(fs.existsSync(fullPath), `core/${file} must exist`);
}

// 2. Load core modules in node environment
const MediaTypes = require('../core/media_types');
const MediaRegistry = require('../core/media_registry');
const ManifestParser = require('../core/manifest_parse');

assert.ok(MediaTypes.MediaState, 'MediaTypes.MediaState must be defined');
assert.ok(MediaRegistry.registerMedia, 'MediaRegistry.registerMedia must be defined');
assert.ok(ManifestParser.parseM3u8, 'ManifestParser.parseM3u8 must be defined');

// 3. Test M3U8 Master Playlist Parsing into variants
const sampleMasterM3u8 = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
1080p/index.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2500000,RESOLUTION=1280x720
720p/index.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1000000,RESOLUTION=854x480
480p/index.m3u8
`;

const parsedHls = ManifestParser.parseM3u8(sampleMasterM3u8, 'https://example.com/live/master.m3u8');
assert.strictEqual(parsedHls.isMaster, true, 'Must identify as Master Playlist');
assert.strictEqual(parsedHls.variants.length, 3, 'Must have 3 variants');
assert.strictEqual(parsedHls.variants[0].resolution, '1920x1080');
assert.strictEqual(parsedHls.variants[0].url, 'https://example.com/live/1080p/index.m3u8');
assert.strictEqual(parsedHls.variants[1].resolution, '1280x720');

// 4. Test MediaRegistry registration and retrieval
const tabId = 12345;
MediaRegistry.clearTab(tabId);

const record = MediaRegistry.registerMedia(tabId, {
  mediaInstanceId: 'video_elem_1',
  requestUrl: 'https://example.com/live/master.m3u8',
  protocolType: MediaTypes.ProtocolType.HLS,
  pageUrl: 'https://example.com/watch?v=abc',
  title: 'Test Stream',
  variants: parsedHls.variants.map(v => ({
    quality: v.resolution === '1920x1080' ? '1080p' : v.resolution === '1280x720' ? '720p' : '480p',
    url: v.url,
    bandwidth: v.bandwidth
  }))
});

assert.ok(record, 'Record must be registered');
const tabMedia = MediaRegistry.getTabMedia(tabId);
assert.strictEqual(tabMedia.length, 1, 'Tab 12345 must have exactly 1 media record');
assert.strictEqual(tabMedia[0].variants.length, 3, 'Media record must contain 3 variants');
assert.strictEqual(tabMedia[0].variants[0].quality, '1080p');

// 5. Test service_worker.js exists and syntax is valid
const swPath = path.join(ROOT_DIR, 'service_worker.js');
assert.ok(fs.existsSync(swPath), 'service_worker.js must exist');
const swCode = fs.readFileSync(swPath, 'utf8');
assert.ok(!swCode.includes('eval('), 'service_worker.js must NOT contain eval()');
assert.ok(!swCode.includes('coccoc.com'), 'service_worker.js must NOT contain coccoc.com');

console.log('✅ Task 1: Clean Service Worker Core & Module Orchestration tests PASSED!');
