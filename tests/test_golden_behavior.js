/**
 * tests/test_golden_behavior.js
 * 
 * Stage 0 Golden Characterization Test Suite.
 * Executes the real content script bundle against representative sanitized DOM fixtures
 * in exact manifest load order to lock down detection behavior before any refactoring.
 */

const assert = require('assert');
const path = require('path');
const { runGoldenFixture } = require('./helpers/golden_dom_harness');

console.log('=== TEST SUITE: STAGE 0 GOLDEN CHARACTERIZATION TESTS ===\n');

// 1. TikTok video fixture
console.log('Testing TikTok video detection...');
const tiktokResult = runGoldenFixture('tests/fixtures/tiktok_video.html', {
  url: 'https://www.tiktok.com/@user/video/1234567890'
});
assert.ok(tiktokResult.widgetCreated, 'TikTok fixture must mount savior widget');
assert.ok(tiktokResult.eeEvents.some(e => e.name.includes('widget') || e.name.includes('media') || e.name.includes('node')), 
  'TikTok must emit widget/media/node lifecycle events on EE');
console.log('PASS: TikTok golden fixture detection verified.');

// 2. Facebook Reels fixture
console.log('Testing Facebook Reels detection...');
const fbReelsResult = runGoldenFixture('tests/fixtures/facebook_reels.html', {
  url: 'https://www.facebook.com/reel/123456789'
});
assert.ok(fbReelsResult.widgetCreated, 'Facebook Reels fixture must mount savior widget');
console.log('PASS: Facebook Reels golden fixture detection verified.');

// 3. YouTube Watch fixture
console.log('Testing YouTube Watch detection...');
const ytResult = runGoldenFixture('tests/fixtures/youtube_watch.html', {
  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
});
assert.ok(ytResult.widgetCreated, 'YouTube Watch fixture must mount savior widget');
console.log('PASS: YouTube Watch golden fixture detection verified.');

// 4. Generic HLS fixture
console.log('Testing Generic HLS detection...');
const hlsResult = runGoldenFixture('tests/fixtures/generic_hls.html', {
  url: 'https://example.com/watch/video.html'
});
assert.ok(hlsResult.widgetCreated, 'Generic HLS fixture must mount savior widget');
console.log('PASS: Generic HLS golden fixture detection verified.');

// 5. Mutation Gate Verification
console.log('Testing Golden Harness Mutation Gate...');
assert.throws(() => {
  runGoldenFixture('tests/fixtures/generic_hls.html', {
    url: 'https://example.com/watch/video.html',
    breakDetection: true
  });
}, /Detection expectation failed/, 'Harness must fail when detection behavior is intentionally broken');
console.log('PASS: Mutation gate verified (catches broken detection).\n');

console.log('ALL GOLDEN CHARACTERIZATION TESTS PASSED! ✅');
