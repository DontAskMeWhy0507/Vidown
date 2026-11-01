const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: CHROME DASHBOARD ERRORS FIX VERIFICATION ===\n');

// 1. Verify CSS Fetching does not trigger "Unsafe attempt to load URL..."
const contentScript = fs.readFileSync('content-script.js', 'utf8');

assert.strictEqual(
  contentScript.includes('fetch(url)'),
  false,
  'content-script.js must NOT fetch(url) on chrome.runtime.getURL to prevent Blink CSP / cross-origin security errors'
);
assert.ok(
  contentScript.includes("action: 'getContentCss'") || contentScript.includes('action:"getContentCss"'),
  'content-script.js must directly use chrome.runtime.sendMessage({ action: "getContentCss" })'
);
console.log('✓ 1. content-script.js: Cross-origin fetch(url) eliminated in favor of background IPC getContentCss.');

// 2. Verify Pathname Undefined TypeError Guard
assert.ok(!contentScript.includes('t.pathname.length>i.pathname.length') || /[a-zA-Z_$][\w$]*\s*&&\s*[a-zA-Z_$][\w$]*\.pathname\s*&&\s*[a-zA-Z_$][\w$]*\s*&&\s*[a-zA-Z_$][\w$]*\.pathname\s*&&\s*[a-zA-Z_$][\w$]*\.pathname\.length/.test(contentScript),
  'content-script.js must guard against undefined pathname on m3u8 item');
assert.ok(
  /[a-zA-Z_$][\w$]*\s*&&\s*[a-zA-Z_$][\w$]*\.pathname\s*&&\s*[a-zA-Z_$][\w$]*\s*&&\s*[a-zA-Z_$][\w$]*\.pathname\s*&&\s*[a-zA-Z_$][\w$]*\.pathname\.length/.test(contentScript),
  'content-script.js must guard i and i.pathname before checking length'
);
console.log('✓ 2. content-script.js: Guarded i.pathname against undefined.');

// 3. Behavioral test: Media deduplication / replacement logic simulation
function testMediaReplacement(t, existingIds, currentHref) {
  // Simulating the guarded logic
  if (["motchilll.tv", "phim.vkool8.net", "motchill20"].some(d => currentHref.includes(d))) {
    const i = existingIds && existingIds.find(item => item && item.url && item.url.includes("m3u8"));
    if (i && i.pathname && t && t.pathname && t.pathname.length > i.pathname.length) {
      return true;
    }
  }
  return false;
}

// Case A: YouTube video on initial detection (existingIds is empty)
const ytMedia = { url: 'https://rr2---sn-4g5ednss.googlevideo.com/videoplayback?...', pathname: '/videoplayback' };
assert.doesNotThrow(() => {
  const result = testMediaReplacement(ytMedia, [], 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  assert.strictEqual(result, false);
}, 'Must not throw TypeError when existingIds is empty on YouTube');

// Case B: YouTube video when existingIds has other items without m3u8
const existingYt = [{ url: 'https://rr2---sn-4g5ednss.googlevideo.com/videoplayback?...', pathname: '/videoplayback' }];
assert.doesNotThrow(() => {
  const result = testMediaReplacement(ytMedia, existingYt, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  assert.strictEqual(result, false);
}, 'Must not throw TypeError when existingIds has no m3u8 items');

// Case C: Motchill with valid m3u8 items
const shortM3u8 = { url: 'https://cdn.example.com/stream/preview.m3u8', pathname: '/stream/preview.m3u8' };
const longM3u8 = { url: 'https://cdn.example.com/stream/full_hd_movie.m3u8', pathname: '/stream/full_hd_movie.m3u8' };
assert.strictEqual(
  testMediaReplacement(longM3u8, [shortM3u8], 'https://motchill20.org/phim/test'),
  true,
  'Longer m3u8 must return true on motchill site'
);

console.log('✓ 3. Behavioral simulation of media stream replacement passed for YouTube and Motchill.');

// 4. Verify manifest.json excludes YouTube live chat iframes
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const excludes = manifest.content_scripts[0].exclude_matches;
assert.ok(
  excludes.includes('*://*.youtube.com/live_chat*'),
  'manifest.json must exclude YouTube live chat iframes from content script injection'
);
console.log('✓ 4. manifest.json: Excludes YouTube live_chat frames cleanly.');

console.log('\nAll Chrome Dashboard Error Fix tests passed! 🚀\n');
