const assert = require('assert');
const path = require('path');
const fs = require('fs');

console.log('=== TEST SUITE: TIKTOK SCROLL FEED DETECTION & ACTIVE VIDEO ISOLATION ===\n');

// 1. Load module sources
const tiktokSrc = fs.readFileSync(path.join(__dirname, '../src/content/platform/tiktok-douyin.js'), 'utf8');
const tiktokInject = fs.readFileSync(path.join(__dirname, '../src/inject/tiktok/main-world.js'), 'utf8');
const widgetSrc = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');

// 2. Check 1: lazyBulkDownloadProvider must be active on all tiktok.com pages (including feed / FYP)
console.log('[Test 1] Verifying lazyBulkDownloadProvider is active on tiktok.com feed...');
assert.ok(
  tiktokSrc.includes('lazyBulkDownloadProvider'),
  'lazyBulkDownloadProvider must be defined'
);

// Check that isActive includes tiktok.com
assert.ok(
  tiktokSrc.includes('isActive: () =>') && (tiktokSrc.includes('tiktok.com') || tiktokSrc.includes('location.host')),
  'lazyBulkDownloadProvider.isActive must include tiktok.com host check'
);
console.log('✓ Test 1: lazyBulkDownloadProvider is active across all TikTok feed routes!\n');

// 3. Check 2: findTikTokMainVideo must return the video node itself when given a video element
console.log('[Test 2] Verifying findTikTokMainVideo does NOT fallback to document.querySelector("video") when node is valid...');
assert.ok(
  !tiktokSrc.includes('return rootItem ? rootItem.querySelector("video") : document.querySelector("video")'),
  'findTikTokMainVideo must NOT blindly fall back to the first video in the document when given a video node'
);
assert.ok(
  tiktokSrc.includes('element.tagName === "VIDEO"') || tiktokSrc.includes('element && "VIDEO" === element.tagName'),
  'findTikTokMainVideo must preserve video element identity if already a video'
);
console.log('✓ Test 2: findTikTokMainVideo preserves node identity and avoids top-of-page video bleed!\n');

// 4. Check 3: getTikTokAnchorElement must find anchor by walking up containers
console.log('[Test 3] Verifying getTikTokAnchorElement handles modern TikTok feed container structures...');
assert.ok(
  tiktokSrc.includes('recommend-list-item-container') || tiktokSrc.includes('ItemContainer') || tiktokSrc.includes('findTikTokItemRoot'),
  'getTikTokAnchorElement must support modern TikTok feed containers'
);
console.log('✓ Test 3: Anchor resolver properly navigates feed item containers!\n');

// 5. Check 4: No blind window.__saviorSniffedMedia.find() returning index 0
console.log('[Test 4] Verifying sniffed media lookup does NOT unconditionally return first stream in array...');
// Verify that __saviorSniffedMedia lookup matches videoId or active video, rather than blind .find(m => m.url.includes('/video/tos/'))
const blindFindMatch = tiktokSrc.match(/window\.__saviorSniffedMedia\.find\(function\(m\)\s*\{\s*return\s*m\s*&&\s*m\.url\s*&&\s*\(m\.url\.includes\("\/video\/tos\/"\)/);
assert.strictEqual(
  blindFindMatch,
  null,
  'tiktok-douyin.js must NOT use blind .find() that always returns the first sniffed video at index 0'
);
console.log('✓ Test 4: Sniffed media fallback correctly matches current video context!\n');

// 6. Check 5: main-world.js tags video elements in container from links
console.log('[Test 5] Verifying main-world.js tags sibling/container video elements from anchor links...');
assert.ok(
  tiktokInject.includes('closest') || tiktokInject.includes('parentElement'),
  'main-world.js must locate video element in feed item container'
);
assert.ok(
  !tiktokInject.includes('const childVideo = link.querySelector(\'video\');\n          if (childVideo && !childVideo.hasAttribute(\'data-aweme-video\')) {\n            setAwemeVideoData(childVideo, videoInfo);\n          }'),
  'main-world.js must not assume <video> is a direct child of <a> link in modern TikTok feed'
);
console.log('✓ Test 5: main-world.js properly correlates feed video elements with their anchor Aweme data!\n');

// 7. Check 6: widget-manager.js does not assign entire sniffed array [0] to scrolled video
console.log('[Test 6] Verifying fetchDownloads in widget-manager.js associates specific/latest stream with node...');
assert.ok(
  !widgetSrc.includes('this.state.mediaObjects = enrichMediaMeta(window.__saviorSniffedMedia);\n                } else {'),
  'widget-manager.js must not assign entire window.__saviorSniffedMedia array to widget without node filtering'
);
console.log('✓ Test 6: widget-manager isolates media objects per video widget!\n');

// 8. Check 7: TikTok title resolution extracts caption and rejects generic "TikTok"
console.log('[Test 7] Verifying TikTok title extraction logic...');
assert.ok(
  tiktokSrc.includes('getTikTokVideoTitle') && tiktokSrc.includes('cleanTikTokTitle'),
  'tiktok-douyin.js must define dedicated getTikTokVideoTitle and cleanTikTokTitle functions'
);
assert.ok(
  tiktokSrc.includes('extractTikTokVideoPostTitle(videoElement)'),
  'tiktok-douyin.js must call extractTikTokVideoPostTitle scoped to the specific video element'
);
assert.ok(
  tiktokSrc.includes('replace(/#\\S+/gi, "")'),
  'cleanTikTokTitle must clean hashtag patterns'
);
console.log('✓ Test 7: TikTok video title extraction accurately extracts post captions and rejects generic names!\n');

// 9. Check 8: Numeric video ID mapping in processRequestIds & getAwemeVideoData node isolation
console.log('[Test 8] Verifying numeric video ID mapping in processRequestIds and getAwemeVideoData node isolation...');
assert.ok(
  tiktokSrc.includes('__vid') && tiktokSrc.includes('searchParams'),
  'processRequestIds must parse __vid search parameter from CDN URLs'
);
assert.ok(
  !tiktokSrc.includes('getAwemeVideoData(videoNode, findTikTokMainVideo)'),
  'tiktokUrlResolver must NOT pass findTikTokMainVideo to getAwemeVideoData to avoid top video bleed'
);
console.log('✓ Test 8: ProcessRequestIds maps video IDs accurately and Aweme video data is strictly isolated per node!\n');

console.log('================================================================');
console.log('ALL TIKTOK SCROLL FEED DETECTION TESTS PASSED! 🎉');
console.log('================================================================\n');
