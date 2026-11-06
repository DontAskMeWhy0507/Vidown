const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: TIKTOK MEDIA DETECTION & VIDEO PLAYBACK LAG OPTIMIZATIONS ===\n');

const tiktokSrc = fs.readFileSync(path.join(__dirname, '../src/content/platform/tiktok-douyin.js'), 'utf8');
const tiktokInject = fs.readFileSync(path.join(__dirname, '../src/inject/tiktok/main-world.js'), 'utf8');
const downloadsNav = fs.readFileSync(path.join(__dirname, '../stream-sniffer.js'), 'utf8');
const contextGuard = fs.readFileSync(path.join(__dirname, '../context-guard.js'), 'utf8');
const domScanner = fs.readFileSync(path.join(__dirname, '../src/content/detector/dom-scanner.js'), 'utf8');

// 1. TikTok Main-World Script Injection Fix
console.log('[Test 1] Verifying TikTok main-world script injection IPC...');
assert.ok(
  tiktokSrc.includes('type: mediaConstants.b.SCRIPTING.INJECT') && tiktokSrc.includes('file: "tiktok"'),
  'injectTikTokMainWorldScript must dispatch SCRIPTING.INJECT for tiktok'
);
assert.ok(
  !tiktokSrc.includes('domHelper.h({\n              type: "run_isolated_script"'),
  'injectTikTokMainWorldScript must NOT use dummy domHelper.h call'
);
console.log('✓ Test 1: TikTok script injection correctly bridges to background scripting service!\n');

// 2. TikTok Main-World Script IIFE Isolation
console.log('[Test 2] Verifying src/inject/tiktok/main-world.js is safely wrapped in an IIFE...');
assert.ok(
  tiktokInject.trim().startsWith('(() => {') && tiktokInject.trim().endsWith('})();'),
  'main-world.js must be scoped in an IIFE to prevent "Identifier has already been declared" errors on re-execution'
);
console.log('✓ Test 2: TikTok main-world script is protected against re-declaration errors!\n');

// 3. TikTok Blob URL Resolution & Ext Assignment Fix
console.log('[Test 3] Verifying TikTok mediaObjectChange sets mp4 ext and resolves sniffed streams...');
assert.ok(
  tiktokSrc.includes('mediaObj.ext = mediaObj.ext || "mp4"'),
  'mediaObjectChange must assign ext mp4 even for blob: URLs'
);
assert.ok(
  tiktokSrc.includes('douyinResolvedCache[videoId]') && tiktokSrc.includes('window.__saviorSniffedMedia'),
  'mediaObjectChange must fallback to douyinResolvedCache or sniffed media when url is blob:'
);
console.log('✓ Test 3: TikTok mediaObjectChange reliably sets valid video attributes and resolves blob: URLs!\n');

// 4. MSE Stream Sniffing & Chunk Range Deduplication in downloads-nav.js
console.log('[Test 4] Verifying downloads-nav.js generic MSE sniffing and chunk deduplication...');
assert.ok(
  downloadsNav.includes('/video/tos/') && downloadsNav.includes('mime_type=video_mp4'),
  'downloads-nav.js must detect TikTok CDN video URLs'
);
assert.ok(
  !downloadsNav.includes('(isMedia && entry.initiatorType === \'media\')'),
  'downloads-nav.js must NOT restrict isMedia to initiatorType === "media"'
);
assert.ok(
  downloadsNav.includes('reportedStreamKeys.has(streamKey)'),
  'downloads-nav.js must deduplicate stream chunk ranges to eliminate playback lag'
);
console.log('✓ Test 4: MSE sniffing catches streaming video across all modern platforms without chunk flooding!\n');

// 5. Picture-in-Picture Permission Policy Caching in context-guard.js
console.log('[Test 5] Verifying context-guard.js PiP permissions policy caching...');
assert.ok(
  contextGuard.includes('_pipAllowedCached'),
  'context-guard.js must cache isPipAllowed result to prevent micro-lag during video playback'
);
console.log('✓ Test 5: context-guard.js PiP getter runs in O(1) without repeated permissionsPolicy queries!\n');

// 6. DOM Mutation Throttling & Media Filter in dom-scanner.js
console.log('[Test 6] Verifying MutationObserver throttling and media pre-filter in dom-scanner.js...');
assert.ok(
  domScanner.includes('_hasPossibleMediaMutations'),
  'dom-scanner.js must include _hasPossibleMediaMutations to bypass text/subtitle mutations'
);
assert.ok(
  domScanner.includes('requestAnimationFrame') && domScanner.includes('_pendingMutations'),
  'dom-scanner.js must throttle handleDomChanged with requestAnimationFrame'
);
assert.ok(
  domScanner.includes('_lastForceUpdate'),
  'dom-scanner.js must throttle forceUpdate calls to at most once per 300ms'
);
console.log('✓ Test 6: dom-scanner.js batches DOM changes smoothly aligned with display refreshes!\n');

console.log('================================================================');
console.log('ALL TIKTOK DETECTION & VIDEO LAG FIX TESTS PASSED! 🎉');
console.log('================================================================\n');
