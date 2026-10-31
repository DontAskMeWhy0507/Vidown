const assert = require('assert');
const path = require('path');

// Test Task 2: Clean Shared Modules (media-types.js & url-utils.js)
console.log('--- Testing Clean Shared Modules ---');

const { MEDIA_TYPES, RESOLUTIONS, getMediaType } = require('../src/shared/media-types.js');
const { parseUrl, sanitizeFilename, getExtFromMime } = require('../src/shared/url-utils.js');

// 1. Verify MEDIA_TYPES structure
assert.ok(MEDIA_TYPES.video, 'MEDIA_TYPES must define video');
assert.ok(MEDIA_TYPES.audio, 'MEDIA_TYPES must define audio');
assert.ok(MEDIA_TYPES.no_watermark_video, 'MEDIA_TYPES must define no_watermark_video');
assert.ok(MEDIA_TYPES.video.extensions.includes('mp4'), 'video extensions must include mp4');
assert.ok(MEDIA_TYPES.video.extensions.includes('m3u8'), 'video extensions must include m3u8');
assert.ok(MEDIA_TYPES.video.extensions.includes('mpd'), 'video extensions must include mpd');
assert.ok(MEDIA_TYPES.video.icon.includes('<svg'), 'video must have SVG icon');
console.log('✓ Test 1 Passed: MEDIA_TYPES correctly defined.');

// 2. Verify RESOLUTIONS hierarchy
assert.ok(RESOLUTIONS['1080p'].value > RESOLUTIONS['720p'].value, '1080p must rank higher than 720p');
assert.ok(RESOLUTIONS['2160p'].value > RESOLUTIONS['1080p'].value, '4K must rank higher than 1080p');
assert.strictEqual(RESOLUTIONS['1080p'].label, 'Full HD', '1080p label must be Full HD');
console.log('✓ Test 2 Passed: RESOLUTIONS hierarchy verified.');

// 3. Verify getMediaType
assert.strictEqual(getMediaType('video/mp4', 'mp4'), 'video', 'video/mp4 must return video');
assert.strictEqual(getMediaType('audio/mpeg', 'mp3'), 'audio', 'audio/mpeg must return audio');
console.log('✓ Test 3 Passed: getMediaType correctly matches mime/ext.');

// 4. Verify parseUrl and sanitizeFilename
const parsed = parseUrl('https://example.com/videos/stream_1080p.mp4?token=abc#t=10');
assert.strictEqual(parsed.ext, 'mp4', 'parseUrl must extract extension mp4');
assert.strictEqual(parsed.filename, 'stream_1080p', 'parseUrl must extract filename');

const cleanName = sanitizeFilename('Video: "Cool" Movie/Clip? *awesome*|test');
assert.ok(!cleanName.includes(':'), 'sanitizeFilename must remove :');
assert.ok(!cleanName.includes('"'), 'sanitizeFilename must remove "');
assert.ok(!cleanName.includes('/'), 'sanitizeFilename must remove /');
assert.ok(!cleanName.includes('?'), 'sanitizeFilename must remove ?');
assert.ok(!cleanName.includes('*'), 'sanitizeFilename must remove *');
assert.ok(!cleanName.includes('|'), 'sanitizeFilename must remove |');
console.log('✓ Test 4 Passed: parseUrl and sanitizeFilename work accurately.');

// 5. Verify getExtFromMime
assert.strictEqual(getExtFromMime('application/x-mpegurl'), 'm3u8', 'm3u8 mime resolved');
assert.strictEqual(getExtFromMime('application/dash+xml'), 'mpd', 'dash mpd mime resolved');
console.log('✓ Test 5 Passed: getExtFromMime handles standard and stream mimes.');

console.log('\nALL CLEAN SHARED MODULES TESTS PASSED! 🎉');
