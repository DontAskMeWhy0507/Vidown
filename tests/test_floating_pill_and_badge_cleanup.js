const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: FLOATING PILL DETECTION & ICON BADGE CLEANUP ===\n');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Verify content_main.js attaches floating pill to YouTube, TikTok, Facebook containers
const csCode = fs.readFileSync(path.join(ROOT_DIR, 'content', 'content_main.js'), 'utf8');

assert.ok(csCode.includes('findVideoContainer'), 'content_main.js must define findVideoContainer');
assert.ok(csCode.includes('#movie_player'), 'findVideoContainer must support YouTube player container (#movie_player)');
assert.ok(csCode.includes('[data-e2e="feed-video"]'), 'findVideoContainer must support TikTok feed container');
assert.ok(csCode.includes('[data-pagelet*="Video"]'), 'findVideoContainer must support Facebook video container');
assert.ok(csCode.includes('vidown-floating-pill'), 'attachFloatingPill must create .vidown-floating-pill');

// 2. Verify attachFloatingPill is NOT unconditionally blocked by sensitive site checks
assert.ok(
  !csCode.includes('function attachFloatingPill(video) {\n    if (isSensitiveSite()) return;'),
  'attachFloatingPill must not early-return for all sensitive sites'
);
console.log('✓ 1. Floating download pill properly targets player containers on YouTube, TikTok, Facebook.');

// 3. Verify service_worker.js does NOT display media count badges on extension icon
const swCode = fs.readFileSync(path.join(ROOT_DIR, 'service_worker.js'), 'utf8');
const updateBadgeMatch = swCode.slice(swCode.indexOf('function updateTabBadge'), swCode.indexOf('function updateTabBadge') + 300);

assert.ok(!updateBadgeMatch.includes('String(count)'), 'updateTabBadge must NOT display stream count on extension badge');
assert.ok(updateBadgeMatch.includes("text: ''"), 'updateTabBadge must keep badge text empty when not actively downloading');
console.log('✓ 2. Extension icon badge is cleanly cleared and no longer shows media count numbers.');

// 4. Verify content.css styles for .vidown-floating-pill
const cssCode = fs.readFileSync(path.join(ROOT_DIR, 'content', 'content.css'), 'utf8');
assert.ok(cssCode.includes('.vidown-floating-pill'), 'content.css must style .vidown-floating-pill');
assert.ok(cssCode.includes('z-index: 2147483647'), 'Floating pill must have top-level z-index');
assert.ok(cssCode.includes('pointer-events: auto'), 'Floating pill must be clickable');
console.log('✓ 3. Floating pill CSS ensures maximum visibility and clickability.');

console.log('\nALL FLOATING PILL & BADGE TESTS PASSED! 🎉\n');
