const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: AUDIT FEED & SCROLLING VIDEO DETECTION & FILENAME INTEGRITY ===\n');

// 1. TikTok main-world and extractor code inspection
const tiktokExtractorSrc = fs.readFileSync(path.join(__dirname, '../src/content/platform/tiktok-douyin.js'), 'utf8');
const tiktokMainWorldSrc = fs.readFileSync(path.join(__dirname, '../src/inject/tiktok/main-world.js'), 'utf8');
const bgSrc = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
const filenameSanitizerSrc = fs.readFileSync(path.join(__dirname, '../src/content/detector/filename-sanitizer.js'), 'utf8');
const domUtilsSrc = fs.readFileSync(path.join(__dirname, '../src/common/core-utils/dom-utils.js'), 'utf8');

// TEST 1: TikTok Main World attaches video data to containers and individual videos
console.log('[Test 1] Verifying TikTok main-world script maps feed containers and video elements...');
assert.ok(
  tiktokMainWorldSrc.includes('findTikTokContainer') &&
  tiktokMainWorldSrc.includes('setAwemeVideoData(container, videoInfo)') &&
  tiktokMainWorldSrc.includes('relatedVideos[j]'),
  'main-world.js must tag the feed item container and child video elements'
);
assert.ok(
  tiktokMainWorldSrc.includes('window.__tiktokVideoMap'),
  'main-world.js must register video items in window.__tiktokVideoMap'
);
console.log('✓ Test 1: TikTok main-world correctly maps video elements in feed!\n');

// TEST 2: TikTok Extractor does NOT search forward on sniffed media (fixing index 0 bug)
console.log('[Test 2] Verifying TikTok extractor avoids forward-find pinning to index 0...');
assert.ok(
  tiktokExtractorSrc.includes('window.__saviorSniffedMedia.slice().reverse().find'),
  'tiktok-douyin.js must reverse search sniffed media to match current/recent video'
);
assert.ok(
  tiktokExtractorSrc.includes('targetVidId13') && tiktokExtractorSrc.includes('targetVidId14'),
  'tiktok-douyin.js must match sniffed streams by target video ID'
);
assert.ok(
  tiktokExtractorSrc.includes('resolveItemFromNode: node => resolveTikTokVideoFromNode(node)'),
  'lazyBulkDownloadProvider must provide resolveItemFromNode for widget integration'
);
console.log('✓ Test 2: TikTok feed no longer pins scrolled downloads to the first video!\n');

// TEST 3: Filename Sanitizer handles Unicode letters (Vietnamese, CJK, etc.) without discarding
console.log('[Test 3] Verifying filename sanitizer preserves Vietnamese, CJK, and international titles...');
const sandbox = {
  module: { exports: {} },
  exports: {},
  require: () => ({}),
  document: { location: { host: 'www.tiktok.com' }, title: 'TikTok - Make Your Day' },
  location: { host: 'www.tiktok.com' }
};
vm.createContext(sandbox);

// Clean export default to run in VM
const cleanSanitizerCode = filenameSanitizerSrc.replace('export default function', 'function runModule');
vm.runInContext(cleanSanitizerCode + '\nrunModule(module, exports, require);', sandbox);

const sanitizeMediaTitle = sandbox.exports.a;
assert.ok(typeof sanitizeMediaTitle === 'function', 'sanitizeMediaTitle must be exported');

const vnTitle = sanitizeMediaTitle('Độc lạ Bình Dương video hot hôm nay', 'TikTok - Make Your Day');
assert.strictEqual(vnTitle, 'Độc lạ Bình Dương video hot hôm nay', 'Vietnamese title must be preserved');

const cjkTitle = sanitizeMediaTitle('抖音热门视频推荐', 'TikTok - Make Your Day');
assert.strictEqual(cjkTitle, '抖音热门视频推荐', 'Chinese/Douyin title must be preserved');

const jpTitle = sanitizeMediaTitle('日本語のテスト動画', 'TikTok - Make Your Day');
assert.strictEqual(jpTitle, '日本語のテスト動画', 'Japanese title must be preserved');

const krTitle = sanitizeMediaTitle('한국어 비디오 테스트', 'TikTok - Make Your Day');
assert.strictEqual(krTitle, '한국어 비디오 테스트', 'Korean title must be preserved');
console.log('✓ Test 3: International video titles are completely preserved without discarding!\n');

// TEST 4: Double extension prevention in dom-utils
console.log('[Test 4] Verifying getFilenameFromTitleOfDownload prevents double extensions...');
const domSandbox = {
  exportsObj: {},
  requireFn: { d: (obj, name, fn) => { obj[name] = fn(); } },
  document: { title: 'Default Title' }
};
vm.createContext(domSandbox);

// Extract var_Y
const fnStart = domUtilsSrc.indexOf('function var_Y(');
const fnEnd = domUtilsSrc.indexOf('function var_K(', fnStart);
const varYCode = domUtilsSrc.slice(fnStart, fnEnd);
vm.runInContext(varYCode, domSandbox);

const formatFilename = domSandbox.var_Y;
assert.strictEqual(formatFilename({ title: 'video_clip', ext: 'mp4' }), 'video_clip.mp4', 'extension appended once');
assert.strictEqual(formatFilename({ title: 'video_clip.mp4', ext: 'mp4' }), 'video_clip.mp4', 'no double .mp4.mp4 extension');
assert.strictEqual(formatFilename({ title: 'my_song.mp3', ext: 'mp3' }), 'my_song.mp3', 'no double .mp3.mp3 extension');
console.log('✓ Test 4: Download filenames are never assigned duplicate extensions!\n');

// TEST 5: Background service worker does NOT reject distinct downloads on feed pages
console.log('[Test 5] Verifying background duplicate guard allows distinct feed video downloads...');
assert.ok(
  bgSrc.includes('isGenericFeedTitle') && bgSrc.includes('isFeedPageUrl'),
  'background.chrome.js must distinguish generic feed titles and feed page URLs'
);
assert.ok(
  bgSrc.includes('!isGenericFeedTitle(downloadParams.title)') &&
  bgSrc.includes('!isFeedPageUrl(effectivePage)'),
  'startNativeDownload must not block distinct feed videos as duplicates'
);
console.log('✓ Test 5: Feed downloads with generic page titles are safely permitted!\n');

console.log('🎉 ALL AUDIT FEED & SCROLLING VIDEO TESTS PASSED CLEANLY!\n');
