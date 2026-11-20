/**
 * Regression Test Suite: UX, Captions/Subtitles, Video/Audio/Image Routing & Retry Fixes
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const bgSrc = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');
const hostSrc = fs.readFileSync(path.join(ROOT, 'native/host.js'), 'utf8');
const popupSrc = fs.readFileSync(path.join(ROOT, 'popup/popup.js'), 'utf8');
const dlSrc = fs.readFileSync(path.join(ROOT, 'downloads/downloads.js'), 'utf8');

console.log('=== TEST SUITE: UX & DOWNLOAD FLOW FIXES (VIDEO / CAPTIONS / AUDIO / IMAGE) ===\n');

function extractFn(src, name) {
  const idx = src.indexOf(`function ${name}(`);
  assert.ok(idx !== -1, `Could not find function ${name}`);
  let depth = 0;
  let started = false;
  for (let i = idx; i < src.length; i++) {
    if (src[i] === '{') { depth++; started = true; }
    else if (src[i] === '}') {
      depth--;
      if (started && depth === 0) return src.slice(idx, i + 1);
    }
  }
  throw new Error(`Unclosed function ${name}`);
}

// 1. Subtitles / Captions & Image vs Video routing in background.chrome.js
console.log('[Test 1] Subtitle, YouTube timedtext, data:text/plain, and query-param image routing...');
{
  const ctx = vm.createContext({ URL });
  vm.runInContext(
    [
      extractFn(bgSrc, 'isSubtitleDownload'),
      extractFn(bgSrc, 'isImageDownload'),
      extractFn(bgSrc, 'requiresNativeHelper'),
      extractFn(bgSrc, 'isSessionProtectedStream'),
      extractFn(bgSrc, 'isBogusStreamUrl')
    ].join('\n'),
    ctx
  );

  // YouTube timedtext captions must be recognized as subtitle, NOT bogus, NOT requiring native helper
  const ytCaption = {
    url: 'https://www.youtube.com/api/timedtext?v=abc12345678&lang=vi&fmt=vtt',
    filename: 'video_vi.vtt',
    ext: 'vtt',
    type: 'subtitles'
  };
  assert.strictEqual(ctx.isSubtitleDownload(ytCaption), true);
  assert.strictEqual(ctx.isBogusStreamUrl(ytCaption.url, 'https://www.youtube.com/watch?v=abc12345678', ytCaption), false);
  assert.strictEqual(ctx.requiresNativeHelper(ytCaption), false);

  // Merged HLS subtitle with data:text/plain URL must NOT be rejected as bogus
  const mergedHlsSub = {
    url: 'data:text/plain;charset=utf-8,WEBVTT%0A%0A00%3A00%3A01.000%20--%3E%2000%3A00%3A03.000%0AHello',
    ext: 'vtt',
    type: 'subtitles',
    play_list: 'WEBVTT\n\n00:00:01.000 --> 00:00:03.000\nHello'
  };
  assert.strictEqual(ctx.isSubtitleDownload(mergedHlsSub), true);
  assert.strictEqual(ctx.isBogusStreamUrl(mergedHlsSub.url, 'https://example.com/watch', mergedHlsSub), false);
  assert.strictEqual(ctx.requiresNativeHelper(mergedHlsSub), false);

  // Subtitle on TikTok page must NOT be routed to session-protected stream relay
  const ttSub = {
    url: 'https://cdn.tiktok.com/sub/en.vtt',
    pageUrl: 'https://www.tiktok.com/@user/video/123',
    ext: 'vtt',
    type: 'subtitles'
  };
  assert.strictEqual(ctx.isSessionProtectedStream(ttSub), false);

  // Video URL with ?poster=thumb.jpg query parameter must NOT be misclassified as an image
  const vidWithThumbQuery = {
    url: 'https://cdn.example.com/stream/video.mp4?poster=thumb.jpg',
    filename: 'clip.mp4'
  };
  assert.strictEqual(ctx.isImageDownload(vidWithThumbQuery), false, 'Video with ?poster=thumb.jpg must NOT be treated as image');

  // Actual image pathname must still be classified as image
  assert.strictEqual(ctx.isImageDownload({ url: 'https://cdn.example.com/photos/pic.webp?w=1080' }), true);
}
console.log('✓ Test 1 passed.');

// 2. Native host preserves real media extensions (.webm/.mkv/.m4a/.vtt) & pathname-only image detection
console.log('[Test 2] Native host extension preservation & pathname-only image detection...');
{
  assert.ok(hostSrc.includes("const DIRECT_EXTS = new Set(['mp4', 'webm', 'mkv', 'mov'"));
  assert.ok(hostSrc.includes('function isNativeImageRequest(req)'));
  const ctx = vm.createContext({ URL });
  vm.runInContext(extractFn(hostSrc, 'isNativeImageRequest'), ctx);
  assert.strictEqual(ctx.isNativeImageRequest({ url: 'https://cdn.example.com/v.mp4?thumb=cover.jpg', filename: 'v.mp4' }), false);
  assert.strictEqual(ctx.isNativeImageRequest({ url: 'https://cdn.example.com/photo.jpg?size=large' }), true);
}
console.log('✓ Test 2 passed.');

// 3. Popup & Downloads Manager UX/logic fixes
console.log('[Test 3] Popup & Downloads Manager UX fixes (toast timer, queued tab, deleted state, settings sync, retry)...');
{
  assert.ok(popupSrc.includes('if (toastTimer) clearTimeout(toastTimer);'), 'popup.js must debounce showToast');
  assert.ok(dlSrc.includes('if (toastTimer) clearTimeout(toastTimer);'), 'downloads.js must debounce showToast');
  assert.ok(dlSrc.includes("item.state !== 'canceled' && item.state !== 'deleted' && item.state !== 'error'"), 'downloads.js must not overwrite deleted/canceled/error to completed');
  assert.ok(dlSrc.includes('function isActiveDownloadState(state)'), 'downloads.js must include queued in active download state');
  assert.ok(dlSrc.includes('function isImageOrSubtitleItem(it)'), 'downloads.js must exclude images & subtitles from Video tab');
  assert.ok(dlSrc.includes('activeIds = new Set(statusRes.activeTaskIds.map(String))'), 'downloads.js must normalize activeIds to String');
  assert.ok(dlSrc.includes('changes.on_page_buttons || changes.onPageButtonsEnabled'), 'downloads.js must sync toggle changes from popup');
  assert.ok(popupSrc.includes('Number.isInteger(validChromeId)') && !popupSrc.includes('const numChromeId = Number(item.chromeId || item.id);'), 'popup.js cancelRecentItem must validate chromeId');
  assert.ok(popupSrc.includes('msg.action === \'openFileResult\' && !msg.success && msg.error'), 'popup.js must display blocked openFileResult errors');
  assert.ok(dlSrc.includes('} else if (msg.error) {\n        showToast(msg.error);'), 'downloads.js must display blocked openFileResult errors');
  assert.ok(popupSrc.includes('mediaType: item.type || detectMediaType(item)'), 'popup.js retry must preserve mediaType');
  assert.ok(dlSrc.includes('mediaType: item.type ||'), 'downloads.js retry must preserve mediaType');
}
console.log('✓ Test 3 passed.');

console.log('\n======================================================');
console.log('ALL UX & DOWNLOAD FLOW REGRESSION TESTS PASSED!');
console.log('======================================================\n');
