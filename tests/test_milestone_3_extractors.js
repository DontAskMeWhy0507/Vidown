const assert = require('assert');
const path = require('path');
const fs = require('fs');

const expDir = path.resolve(__dirname, '../src/experimental/content-next');
if (!fs.existsSync(expDir)) {
  console.log('=== TEST SUITE: EXPERIMENTAL CONTENT-NEXT PLATFORM EXTRACTORS & DETECTOR ===');
  console.log('SKIP: src/experimental/content-next/ deleted per Trung Gate 4.\n');
  process.exit(0);
}

console.log('=== TEST SUITE: EXPERIMENTAL CONTENT-NEXT PLATFORM EXTRACTORS & DETECTOR ===\n');

// Mock a lightweight DOM element
function createMockElement(tagName = 'video', attrs = {}) {
  const attributes = { ...attrs };
  return {
    tagName: tagName.toUpperCase(),
    src: attributes.src || '',
    getAttribute(name) {
      return attributes[name] !== undefined ? attributes[name] : null;
    },
    setAttribute(name, val) {
      attributes[name] = String(val);
    },
    hasAttribute(name) {
      return attributes[name] !== undefined;
    },
    removeAttribute(name) {
      delete attributes[name];
    },
    classList: {
      contains: (cls) => (attributes['class'] || '').split(' ').includes(cls)
    }
  };
}

// 1. Attribute Stamper
console.log('1. Testing Attribute Stamper...');
const { stampMediaAttributes, readMediaAttributes } = require('../src/experimental/content-next/detector/attribute-stamper');

const testEl = createMockElement('video');
stampMediaAttributes(testEl, {
  vid: '987654321012345',
  detail: { title: 'Facebook Reel Sample', url: 'https://video.fbcdn.net/sample.mp4' }
});

assert.strictEqual(testEl.getAttribute('savior-vid'), '987654321012345');
const readBack = readMediaAttributes(testEl);
assert.strictEqual(readBack.vid, '987654321012345');
assert.strictEqual(readBack.detail.title, 'Facebook Reel Sample');
console.log('PASS: Attribute Stamper verified! ✅\n');

// 2. TikTok Extractor
console.log('2. Testing TikTok Extractor...');
const TikTokMod = require('../src/experimental/content-next/providers/tiktok');
const TikTokExtractor = TikTokMod.default || TikTokMod;

assert.strictEqual(TikTokExtractor.match('https://www.tiktok.com/@user/video/1234567890'), true);
assert.strictEqual(TikTokExtractor.match('https://www.youtube.com/watch?v=123'), false);

const mockTikTokVideo = createMockElement('video', {
  src: 'https://v16-webapp-prime.tiktokcdn.com/sample.mp4'
});
const tiktokMedia = TikTokExtractor.extract(mockTikTokVideo, { url: 'https://www.tiktok.com/@user/video/1234567890' });
assert.strictEqual(tiktokMedia.type, 'video');
assert.ok(tiktokMedia.url.includes('tiktokcdn.com'));
console.log('PASS: TikTok Extractor verified! ✅\n');

// 3. Facebook Extractor
console.log('3. Testing Facebook Extractor...');
const FacebookMod = require('../src/experimental/content-next/providers/facebook');
const FacebookExtractor = FacebookMod.default || FacebookMod;

assert.strictEqual(FacebookExtractor.match('https://www.facebook.com/reel/123456789'), true);
assert.strictEqual(FacebookExtractor.match('https://www.tiktok.com/@user/video/123'), false);
assert.strictEqual(FacebookExtractor.getCompanionInjectorScript(), 'facebook/messenger-audio');

const fbMedia = FacebookExtractor.extract(testEl, { url: 'https://www.facebook.com/reel/123456789' });
assert.strictEqual(fbMedia.vid, '987654321012345');
assert.strictEqual(fbMedia.title, 'Facebook Reel Sample');
console.log('PASS: Facebook Extractor verified! ✅\n');

// 4. YouTube Extractor
console.log('4. Testing YouTube Extractor...');
const YouTubeMod = require('../src/experimental/content-next/providers/youtube');
const YouTubeExtractor = YouTubeMod.default || YouTubeMod;

assert.strictEqual(YouTubeExtractor.match('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), true);
assert.strictEqual(YouTubeExtractor.match('https://youtu.be/dQw4w9WgXcQ'), true);
assert.strictEqual(YouTubeExtractor.getVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
assert.strictEqual(YouTubeExtractor.getVideoId('https://youtu.be/dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
assert.strictEqual(YouTubeExtractor.getVideoId('https://www.youtube.com/shorts/abcdef12345'), 'abcdef12345');
console.log('PASS: YouTube Extractor verified! ✅\n');

// 5. Provider Registry
console.log('5. Testing Provider Registry...');
const { getProviderForUrl, registerProvider } = require('../src/experimental/content-next/providers/index');

const matchedTikTok = getProviderForUrl('https://www.tiktok.com/@user/video/123');
assert.strictEqual(matchedTikTok.name, 'tiktok');

const matchedFb = getProviderForUrl('https://www.facebook.com/reel/123');
assert.strictEqual(matchedFb.name, 'facebook');

const matchedYt = getProviderForUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
assert.strictEqual(matchedYt.name, 'youtube');

console.log('PASS: Provider Registry verified! ✅\n');
console.log('PASS: ALL MILESTONE 3 EXTRACTORS & DETECTOR TESTS PASSED! ✅\n');
