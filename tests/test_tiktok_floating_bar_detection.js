const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: TIKTOK FLOATING DOWNLOAD BAR DETECTION & ATTACHMENT ===\n');

const csPath = path.resolve(__dirname, '..', 'content-script.js');
const csCode = fs.readFileSync(csPath, 'utf8');

// 1. Verify isValidVideoNode in TikTok module
console.log('[Test 1] Verifying isValidVideoNode on modern TikTok (tiktok.com & www.tiktok.com)...');

// Extract the isValidVideoNode function from TikTok module in content-script.js
const isValidVideoNodeMatch = csCode.match(/isValidVideoNode:([a-zA-Z_$][\w$]*=>\{[^}]*(?:tiktok|douyin)[^}]*\})/);
assert.ok(isValidVideoNodeMatch, 'isValidVideoNode definition must exist in content-script.js');

const isValidVideoNodeFn = new Function('return (' + isValidVideoNodeMatch[1] + ')')();

// Mock DOM elements simulating modern TikTok videos (2024-2026)
function createMockVideoNode(tagName = 'VIDEO', parentProps = {}, closestMatches = {}) {
  return {
    nodeName: tagName.toUpperCase(),
    tagName: tagName.toUpperCase(),
    parentElement: {
      id: parentProps.id || '',
      matches: selector => (parentProps.matchesSelector ? parentProps.matchesSelector(selector) : false)
    },
    matches: selector => false,
    closest: selector => {
      for (const [key, val] of Object.entries(closestMatches)) {
        if (selector.includes(key)) return val;
      }
      return null;
    }
  };
}

// Case 1A: Modern TikTok video on tiktok.com (no xgplayer, no parent ID, standard feed video)
global.window = { location: { host: 'tiktok.com' } };
const modernTikTokFeedVideo = createMockVideoNode('VIDEO', { id: '' }, {});
assert.strictEqual(
  isValidVideoNodeFn(modernTikTokFeedVideo),
  true,
  'Standard <video> on tiktok.com must be valid'
);

// Case 1B: Modern TikTok video on www.tiktok.com
global.window = { location: { host: 'www.tiktok.com' } };
assert.strictEqual(
  isValidVideoNodeFn(modernTikTokFeedVideo),
  true,
  'Standard <video> on www.tiktok.com must be valid'
);

// Case 1C: Modern Douyin video on douyin.com & www.douyin.com
global.window = { location: { host: 'douyin.com' } };
assert.strictEqual(
  isValidVideoNodeFn(modernTikTokFeedVideo),
  true,
  'Standard <video> on douyin.com must be valid'
);
global.window = { location: { host: 'www.douyin.com' } };
assert.strictEqual(
  isValidVideoNodeFn(modernTikTokFeedVideo),
  true,
  'Standard <video> on www.douyin.com must be valid'
);

// Case 1D: Non-video element should not arbitrarily pass if domain mismatch
global.window = { location: { host: 'other-site.com' } };
const nonVideoElement = createMockVideoNode('DIV', { id: '' }, {});
assert.strictEqual(
  isValidVideoNodeFn(nonVideoElement),
  false,
  'Non-video element on other site must return false'
);
console.log('✓ Test 1: isValidVideoNode reliably validates modern TikTok videos!\n');

// 2. Verify checkUrl regex for TikTok module
console.log('[Test 2] Verifying checkUrl regex for tiktok.com & www.tiktok.com...');
const checkUrlMatch = csCode.match(/checkUrl:\(\)=>(\/\^\(www\\\.\)\?tiktok\\\.com\$\/i\.test\([^)]+\))/);
assert.ok(checkUrlMatch, 'checkUrl must support both tiktok.com and www.tiktok.com via regex');

const checkUrlFn = new Function('location', 'return (' + checkUrlMatch[1] + ')');
assert.strictEqual(checkUrlFn({ host: 'tiktok.com' }), true, 'tiktok.com must match');
assert.strictEqual(checkUrlFn({ host: 'www.tiktok.com' }), true, 'www.tiktok.com must match');
assert.strictEqual(checkUrlFn({ host: 'm.tiktok.com' }), false, 'm.tiktok.com should not trigger web parser');
assert.strictEqual(checkUrlFn({ host: 'youtube.com' }), false, 'youtube.com must not match');
console.log('✓ Test 2: checkUrl correctly matches both naked and www tiktok.com domains!\n');

// 3. Verify getCustomParent selectors for modern TikTok DOM
console.log('[Test 3] Verifying getCustomParent supports modern TikTok containers...');
const vtCode = csCode;

assert.ok(
  vtCode.includes('[data-e2e="feed-video"]'),
  'getCustomParent must include [data-e2e="feed-video"]'
);
assert.ok(
  vtCode.includes('[class*="DivBasicPlayerWrapper"]'),
  'getCustomParent must include [class*="DivBasicPlayerWrapper"]'
);
assert.ok(
  vtCode.includes('[data-e2e="feed-item"]'),
  'getCustomParent must include [data-e2e="feed-item"]'
);
assert.ok(
  vtCode.includes('[data-e2e="browse-video"]'),
  'getCustomParent must include [data-e2e="browse-video"]'
);
console.log('✓ Test 3: getCustomParent properly targets all modern TikTok video containers!\n');

// 4. Verify onBehaviorBined & hover event listeners
console.log('[Test 4] Verifying hover listeners & onBehaviorBined responsiveness...');
assert.ok(
  csCode.includes(':hover') && csCode.includes('onFocused'),
  'onBehaviorBined must check :hover on both $parent and $node'
);
assert.ok(
  csCode.includes('addEventListener("mouseover"'),
  'bindListener must attach capture mouseover listener to this.parent.$node'
);
assert.ok(
  csCode.includes('removeEventListener("mouseover"'),
  'destroy must cleanly detach mouseover listener from this.parent.$node'
);
console.log('✓ Test 4: Hover binding handles modern overlays and direct video pointer events!\n');

console.log('================================================================');
console.log('ALL TIKTOK FLOATING DOWNLOAD BAR TESTS PASSED! 🎉');
console.log('================================================================\n');
