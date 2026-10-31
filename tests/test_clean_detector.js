const assert = require('assert');

// Test Task 3: Clean Event Bus & Video Detector Rules
console.log('--- Testing Clean Detector & Event Bus ---');

const { EventBus } = require('../src/content/events/bus.js');
const { isSpecialUrls, extractVideoId } = require('../src/content/detector/site-rules.js');
const { createMP3Resources, dedupeMedia } = require('../src/content/detector/media-sniffer.js');

// 1. Verify EventBus
const bus = new EventBus();
let received = null;
const listener = (data) => { received = data; };
bus.on('test_event', listener);
bus.emit('test_event', { msg: 'hello' });
assert.deepStrictEqual(received, { msg: 'hello' }, 'EventBus must deliver event payload');

bus.off('test_event', listener);
received = null;
bus.emit('test_event', { msg: 'hello again' });
assert.strictEqual(received, null, 'EventBus must remove listener on off');

let onceCalls = 0;
bus.once('once_event', () => { onceCalls++; });
bus.emit('once_event');
bus.emit('once_event');
assert.strictEqual(onceCalls, 1, 'once listener must only fire once');
console.log('✓ Test 1 Passed: EventBus on/emit/off/once works.');

// 2. Verify isSpecialUrls
assert.ok(isSpecialUrls('https://hls.mediacdn.vn/video/master.mp4.json'), 'MediaCDN HLS must be detected');
assert.ok(isSpecialUrls('https://zingmp3.vn/api/v2/song/get/streaming?id=ZWZB96AA'), 'ZingMP3 stream must be detected');
assert.ok(isSpecialUrls('https://api-v2.soundcloud.com/media/soundcloud:tracks:123456'), 'SoundCloud stream must be detected');
assert.ok(isSpecialUrls('https://cdn.animevui.com/file/stream.m3u8'), 'AnimeVui HLS must be detected');
assert.ok(!isSpecialUrls('https://google.com/search?q=video'), 'Standard web page must not be detected as special stream');
console.log('✓ Test 2 Passed: isSpecialUrls correctly detects stream manifests.');

// 3. Verify extractVideoId
assert.strictEqual(extractVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 'dQw4w9WgXcQ', 'Standard YouTube watch URL');
assert.strictEqual(extractVideoId('https://youtu.be/dQw4w9WgXcQ?t=10'), 'dQw4w9WgXcQ', 'Short youtu.be URL');
assert.strictEqual(extractVideoId('https://www.youtube.com/shorts/dQw4w9WgXcQ'), 'dQw4w9WgXcQ', 'YouTube Shorts URL');
console.log('✓ Test 3 Passed: extractVideoId accurately parses YouTube IDs.');

// 4. Verify createMP3Resources
const sampleVideo = {
  id: 'vid1',
  type: 'video',
  title: 'Test Song Music Video',
  quality: 'Full HD',
  resolution: '1080p',
  ext: 'mp4',
  url: 'https://example.com/video.mp4'
};

const mp3List = createMP3Resources([sampleVideo]);
assert.ok(mp3List.length > 0, 'createMP3Resources must derive at least one audio option');
const mp3Item = mp3List[0];
assert.strictEqual(mp3Item.type, 'audio', 'derived item type must be audio');
assert.strictEqual(mp3Item.ext, 'mp3', 'derived item ext must be mp3');
assert.strictEqual(mp3Item.soundOnly, true, 'derived item soundOnly must be true');
console.log('✓ Test 4 Passed: createMP3Resources derives audio options.');

// 5. Verify dedupeMedia
const items = [
  { id: '1', url: 'https://cdn.com/1.mp4', title: 'Video 1' },
  { id: '2', url: 'https://cdn.com/1.mp4', title: 'Video 1 duplicate' },
  { id: '3', url: 'https://cdn.com/2.mp4', title: 'Video 2' }
];
const deduped = dedupeMedia(items);
assert.strictEqual(deduped.length, 2, 'dedupeMedia must filter items with identical URLs');
console.log('✓ Test 5 Passed: dedupeMedia accurately removes duplicate streams.');

console.log('\nALL CLEAN DETECTOR & EVENT BUS TESTS PASSED! 🎉');
