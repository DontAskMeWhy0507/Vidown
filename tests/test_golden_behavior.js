/**
 * tests/test_golden_behavior.js
 * 
 * Stage 0 Golden Characterization Test Suite.
 * Executes the real content script bundle against representative sanitized realistic DOM fixtures
 * in exact manifest load order to lock down detection behavior before any refactoring.
 * 
 * Success is derived 100% from the bundle's own effects:
 * - Real <savior-host> mounted to document.documentElement
 * - Real EE events emitted by scripts (pre-installed recorder)
 * - Real video node detection in widget.node-changed
 * - Video stamped attributes collected from main-world / companion interactions per platform
 * - Mutation gate verifies broken detection behavior inside bundle fails test with intact fixture.
 */

const assert = require('assert');
const path = require('path');
const { runGoldenFixture } = require('./helpers/golden_dom_harness');

(async function runGoldenTests() {
  console.log('=== TEST SUITE: STAGE 0 GOLDEN CHARACTERIZATION TESTS ===\n');

  // 1. TikTok video fixture
  console.log('Testing TikTok video detection...');
  const tiktokResult = await runGoldenFixture('tests/fixtures/tiktok_video.html', {
    url: 'https://www.tiktok.com/@user/video/1234567890'
  });
  assert.ok(tiktokResult.hostAppended, 'TikTok fixture must mount real <savior-host> DOM element');
  assert.ok(tiktokResult.nodeChangedEmitted, 'TikTok detector must emit widget.node-changed with detected video');
  assert.ok(tiktokResult.widgetCreated, 'TikTok fixture must successfully create savior widget');
  assert.ok(tiktokResult.eeEvents.some(e => e.name === 'dom-scanner.load'), 'TikTok must emit dom-scanner.load on EE');
  assert.ok(tiktokResult.eeEvents.some(e => e.name === 'widget.node-changed'), 'TikTok must emit widget.node-changed on EE');
  assert.ok(Array.isArray(tiktokResult.stampedAttrs), 'TikTok fixture must collect stamped attributes array');
  assert.strictEqual(tiktokResult.stampedAttrs.length, 0, 'TikTok video element does not receive direct savior-* attributes');
  console.log('PASS: TikTok golden fixture detection verified (real DOM & EE effects).');

  // 2. Facebook Reels fixture
  console.log('Testing Facebook Reels detection...');
  const fbReelsResult = await runGoldenFixture('tests/fixtures/facebook_reels.html', {
    url: 'https://www.facebook.com/reel/123456789'
  });
  assert.ok(fbReelsResult.hostAppended, 'Facebook Reels fixture must mount real <savior-host> DOM element');
  assert.ok(fbReelsResult.nodeChangedEmitted, 'Facebook Reels must detect video node');
  assert.ok(fbReelsResult.widgetCreated, 'Facebook Reels fixture must mount savior widget');
  assert.ok(fbReelsResult.stampedAttrs.some(a => a.name === 'savior-video-detail' || a.name === 'savior-vid'), 
    'Facebook Reels video element must receive stamped savior-* metadata (savior-video-detail or savior-vid)');
  console.log('PASS: Facebook Reels golden fixture detection verified (real DOM, EE effects & stamped savior-* attrs).');

  // 3. YouTube Watch fixture
  console.log('Testing YouTube Watch detection...');
  const ytResult = await runGoldenFixture('tests/fixtures/youtube_watch.html', {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  });
  assert.ok(ytResult.hostAppended, 'YouTube Watch fixture must mount real <savior-host> DOM element');
  assert.ok(ytResult.nodeChangedEmitted, 'YouTube Watch must detect video node');
  assert.ok(ytResult.widgetCreated, 'YouTube Watch fixture must mount savior widget');
  assert.ok(Array.isArray(ytResult.stampedAttrs), 'YouTube Watch must collect stamped attributes array');
  console.log('PASS: YouTube Watch golden fixture detection verified (real DOM & EE effects).');

  // 4. Generic HLS fixture
  console.log('Testing Generic HLS detection...');
  const hlsResult = await runGoldenFixture('tests/fixtures/generic_hls.html', {
    url: 'https://example.com/watch/video.html'
  });
  assert.ok(hlsResult.hostAppended, 'Generic HLS fixture must mount real <savior-host> DOM element');
  assert.ok(hlsResult.nodeChangedEmitted, 'Generic HLS must detect video node');
  assert.ok(hlsResult.widgetCreated, 'Generic HLS fixture must mount savior widget');
  assert.ok(Array.isArray(hlsResult.stampedAttrs), 'Generic HLS must collect stamped attributes array');
  console.log('PASS: Generic HLS golden fixture detection verified (real DOM & EE effects).');

  // 5. Mutation Gate Verification: Disables behaviour inside bundle under test (NOT environment)
  console.log('Testing Golden Harness Mutation Gate...');
  let gateThrew = false;
  try {
    await runGoldenFixture('tests/fixtures/generic_hls.html', {
      url: 'https://example.com/watch/video.html',
      breakDetection: true
    });
  } catch (err) {
    if (/Detection expectation failed/.test(err.message)) {
      gateThrew = true;
    } else {
      throw err;
    }
  }
  assert.ok(gateThrew, 'Harness must fail when detection behavior inside the bundle is intentionally broken');
  console.log('PASS: Mutation gate verified (catches broken bundle behavior with intact DOM environment).\n');

  console.log('ALL GOLDEN CHARACTERIZATION TESTS PASSED! ✅');
})().catch(err => {
  console.error('Golden tests failed:', err);
  process.exit(1);
});
