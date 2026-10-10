const assert = require('assert');
const path = require('path');

// Import production implementations directly from native/host.js
const {
  parseProgressLine,
  extractYouTubeUrl,
  checkIsYouTube,
  checkIsTikTok,
  checkIsFacebook,
  detectPlatformName
} = require('../native/host.js');

// TEST 1: Custom template progress
const line1 = 'download:UVD_PROG::45.5%::12.5MiB/s::00:03::25.0MiB';
const p1 = parseProgressLine(line1, 'https://youtube.com');
assert.strictEqual(p1.percent, '45.5%');
assert.strictEqual(p1.speed, '12.5MiB/s');
assert.strictEqual(p1.eta, '00:03');
assert.strictEqual(p1.size, '25.0MiB');
console.log('✓ Test 1: Custom template parsed successfully');

// TEST 2: Progress with NA values cleaned
const lineNA = 'download:UVD_PROG::NA%::NA::NA::NA';
const pNA = parseProgressLine(lineNA, 'https://youtube.com');
assert.strictEqual(pNA.percent, '');
assert.strictEqual(pNA.speed, '');
assert.strictEqual(pNA.eta, '');
assert.strictEqual(pNA.size, '');
console.log('✓ Test 2: NA values safely suppressed to empty string');

// TEST 3: Fallback standard yt-dlp progress
const line2 = '[download]  85.2% of  100.00MiB at  25.40MiB/s ETA 00:01';
const p2 = parseProgressLine(line2, 'https://youtube.com');
assert.strictEqual(p2.percent, '85.2%');
assert.strictEqual(p2.size, '100.00MiB');
assert.strictEqual(p2.speed, '25.40MiB/s');
assert.strictEqual(p2.eta, '00:01');
console.log('✓ Test 3: Standard yt-dlp fallback parsed successfully');

// TEST 4: YouTube URL extraction from various URL patterns including /live/
const yt1 = extractYouTubeUrl(['https://www.youtube.com/watch?v=dQw4w9WgXcQ']);
assert.strictEqual(yt1, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const yt2 = extractYouTubeUrl(['https://youtu.be/dQw4w9WgXcQ?t=10']);
assert.strictEqual(yt2, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const yt3 = extractYouTubeUrl(['https://www.youtube.com/shorts/dQw4w9WgXcQ']);
assert.strictEqual(yt3, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const yt4 = extractYouTubeUrl(['https://www.youtube.com/embed/dQw4w9WgXcQ']);
assert.strictEqual(yt4, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const ytLive = extractYouTubeUrl(['https://www.youtube.com/live/dQw4w9WgXcQ']);
assert.strictEqual(ytLive, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

// Fallback from candidates: candidate 0 is googlevideo stream, candidate 1 is referer watch page
const yt5 = extractYouTubeUrl([
  'https://rr2---sn-4g5ednks.googlevideo.com/videoplayback?expire=123',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
]);
assert.strictEqual(yt5, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
console.log('✓ Test 4: YouTube URL canonicalization passed for watch, short, embed, live, and CDN fallback');

// TEST 5: Platform detection
assert.strictEqual(checkIsYouTube('https://rr1---sn.googlevideo.com/videoplayback'), true);
assert.strictEqual(checkIsTikTok('https://v16-webapp-prime.tiktokcdn.com/video'), true);
assert.strictEqual(checkIsFacebook('https://video.fbcdn.net/v/t39'), true);
assert.strictEqual(detectPlatformName('', 'https://www.tiktok.com/@user/video/123'), 'TikTok');
assert.strictEqual(detectPlatformName('', 'https://www.facebook.com/watch/?v=123'), 'Facebook');
console.log('✓ Test 5: Platform detection and CDN checks passed');

console.log('\nAll host acceleration tests passed! 🚀');
