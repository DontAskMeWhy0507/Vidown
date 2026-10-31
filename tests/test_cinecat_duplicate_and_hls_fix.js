const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: CINECAT DUPLICATE TASK & HLS STREAM FIX ===\n');

const bg = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
const host = fs.readFileSync(path.join(__dirname, '../native/host.js'), 'utf8');

// 1. Static assertions
assert.ok(bg.includes('function isBogusStreamUrl'), 'background.chrome.js must define isBogusStreamUrl helper');
assert.ok(bg.includes('isBogusStreamUrl(targetUrl'), 'resolveRealStreamForDownload must use isBogusStreamUrl');
assert.ok(bg.includes('isBogusStreamUrl(targetUrl, effectivePage)'), 'startNativeDownload must reject unresolved bogus URLs');
assert.ok(bg.includes('samePageAndTitle') || bg.includes('effectivePage && t.pageUrl && effectivePage === t.pageUrl'),
  'startNativeDownload must include same-page/title duplicate guard');
assert.ok(bg.includes('isPlaylistStream'),
  'background.chrome.js must prevent m3u8 playlists from falling back to raw browser downloads');
assert.ok(host.includes("u.includes('twimg.com')"),
  'native/host.js must check strict CDN referrers');
assert.ok(host.includes('#EXT-X-MAP'), 'native/host.js must handle #EXT-X-MAP initialization segments');

// 2. Functional test: isBogusStreamUrl
const sandbox = {
  console,
  URL,
  Map,
  Set,
  Array,
  String,
  Boolean
};
vm.createContext(sandbox);

// Extract isBogusStreamUrl
const isBogusCode = bg.slice(bg.indexOf('function isBogusStreamUrl'), bg.indexOf('function resolveRealStreamForDownload'));
vm.runInContext(isBogusCode, sandbox);

assert.strictEqual(sandbox.isBogusStreamUrl('https://cinecat.eu', 'https://cinecat.eu/media/123'), true,
  'page origin must be marked bogus stream');
assert.strictEqual(sandbox.isBogusStreamUrl('https://cinecat.eu/media/tmdb-movie-969681', 'https://cinecat.eu/media/tmdb-movie-969681'), true,
  'exact page URL must be marked bogus stream');
assert.strictEqual(sandbox.isBogusStreamUrl('blob:https://cinecat.eu/abc-123', 'https://cinecat.eu'), true,
  'blob URL must be marked bogus stream');
assert.strictEqual(sandbox.isBogusStreamUrl('https://video.twimg.com/amplify_video/2114399/pl/avc1/1920x1080/r3Ap.m3u8', 'https://cinecat.eu'), false,
  'valid m3u8 stream must not be marked bogus');

// 3. Functional test: resolveDefaultReferer in host.js
const refCodeStart = host.indexOf('function resolveDefaultReferer');
const refCodeEnd = host.indexOf('function findBestFileMatch', refCodeStart);
const refCode = host.slice(refCodeStart, refCodeEnd);
vm.runInContext(refCode, sandbox);

// twimg.com MUST override reqReferer
const twRef = sandbox.resolveDefaultReferer('https://video.twimg.com/amplify_video/123.m3u8', 'https://cinecat.eu', 'https://cinecat.eu');
assert.strictEqual(twRef, 'https://x.com/', 'twimg.com must have referer https://x.com/ even if reqReferer was cinecat.eu');

// tiktok.com MUST override reqReferer
const ttRef = sandbox.resolveDefaultReferer('https://v16-webapp.tiktokcdn.com/video/123.mp4', 'https://cinecat.eu', 'https://cinecat.eu');
assert.strictEqual(ttRef, 'https://www.tiktok.com/', 'tiktokcdn must have referer https://www.tiktok.com/');

// Normal site keeps reqReferer if valid
const normalRef = sandbox.resolveDefaultReferer('https://cdn.example.com/stream.mp4', 'https://example.com/video', 'https://example.com/video');
assert.strictEqual(normalRef, 'https://example.com/video', 'normal cdn keeps valid reqReferer');

console.log('ALL FUNCTIONAL & STATIC ASSERTIONS PASSED! ✅');
