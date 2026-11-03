/**
 * tests/test_stream_relay_timeout_and_bogus_guard.js
 * 
 * Verifies fixes for TikTok stream detection, bogus URL rejection,
 * and stream relay fetch timeout handling:
 * 1. startStreamRelayDownload rejects bogus stream URLs (e.g. https://www.tiktok.com/)
 * 2. isBogusStreamUrl accepts real TikTok CDN stream signatures (/video/tos/, tiktokcdn.com, mime_type=video_mp4)
 * 3. isBogusStreamUrl rejects bare webpage URLs
 * 4. Stream Relay network fetches have timeout guards (fetchWithTimeout / CONNECT_TIMEOUT)
 * 5. Stream Relay omits credentials for cross-origin CDN media streams to prevent CORS preflight hangs
 * 6. TikTok platform extractor defines getCurrentTikTokVideoId and avoids passing location.href
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: STREAM RELAY TIMEOUT & BOGUS STREAM GUARDS ===\n');

const ROOT = path.join(__dirname, '..');
const bg = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');
const tiktokPlatform = fs.readFileSync(path.join(ROOT, 'src/content/platform/tiktok-douyin.js'), 'utf8');

// 1. Guard against bogus stream URLs in startStreamRelayDownload
console.log('[Test 1] Verifying startStreamRelayDownload bogus URL guard...');
assert.ok(
  bg.includes('isBogusStreamUrl(targetUrl, effectivePage)'),
  'startStreamRelayDownload must check isBogusStreamUrl(targetUrl, effectivePage)'
);
console.log('✓ Test 1: startStreamRelayDownload rejects bogus stream URLs upfront.\n');

// 2. Timeout protection in Stream Relay fetch
console.log('[Test 2] Verifying timeout protection in Stream Relay fetch...');
assert.ok(
  bg.includes('fetchWithTimeout') && bg.includes('CONNECT_TIMEOUT'),
  'Stream Relay must wrap fetch with timeout to prevent infinite hang at 1%'
);
assert.ok(
  bg.includes('STREAM_HTML_RESPONSE'),
  'Stream Relay must detect and reject HTML responses'
);
console.log('✓ Test 2: Stream Relay fetches are bounded by timeout guards.\n');

// 3. CDN credentials policy (omit credentials for signed CDN URLs)
console.log('[Test 3] Verifying CDN credentials policy...');
assert.ok(
  bg.includes('isCdnStream ? \'omit\' : \'include\''),
  'Stream Relay must use credentials: omit for cross-origin signed CDN streams'
);
console.log('✓ Test 3: CDN credentials policy prevents cross-origin CORS stalls.\n');

// 4. TikTok platform extractor fixes
console.log('[Test 4] Verifying TikTok extractor definitions and media URL hygiene...');
assert.ok(
  tiktokPlatform.includes('getCurrentTikTokVideoId'),
  'tiktok-douyin.js must define getCurrentTikTokVideoId'
);
assert.ok(
  !tiktokPlatform.includes('url: location.href'),
  'scrapeCurrentVideoFromDoc must NOT pass location.href as downloadable media URL'
);
assert.ok(
  !tiktokPlatform.includes('url: meta.url || location.href'),
  'getUrl must NOT fall back to location.href'
);
console.log('✓ Test 4: TikTok platform extractor properly resolves video IDs and forbids bogus page URLs.\n');

// 5. Functional test of isBogusStreamUrl with TikTok CDN and page URLs
console.log('[Test 5] Functional verification of isBogusStreamUrl...');

// Extract isBogusStreamUrl from background.chrome.js
const isBogusMatch = bg.match(/function isBogusStreamUrl\(url, pageUrl\) \{[\s\S]*?\n\}/);
assert.ok(isBogusMatch, 'isBogusStreamUrl function must be present in background.chrome.js');

const isBogusStreamUrl = new Function('url', 'pageUrl', isBogusMatch[0] + '\nreturn isBogusStreamUrl(url, pageUrl);');

// Webpage URLs must be marked as bogus
assert.strictEqual(isBogusStreamUrl('https://www.tiktok.com/', 'https://www.tiktok.com/'), true, 'TikTok home URL must be bogus');
assert.strictEqual(isBogusStreamUrl('https://www.tiktok.com/@user/video/123456', 'https://www.tiktok.com/@user/video/123456'), true, 'TikTok video page HTML must be bogus');
assert.strictEqual(isBogusStreamUrl('about:blank'), true, 'about:blank must be bogus');

// Genuine TikTok and CDN media URLs must NOT be marked as bogus
assert.strictEqual(
  isBogusStreamUrl('https://v16m-default.akamaized.net/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oUfgvAEeDEDJ3I1D5jZ4?x-expires=123'),
  false,
  'TikTok Akamai CDN stream URL must be accepted as genuine stream'
);
assert.strictEqual(
  isBogusStreamUrl('https://v16-webapp-prime.tiktokcdn.com/video/tos/useast2a/12345?mime_type=video_mp4'),
  false,
  'TikTok prime CDN stream URL must be accepted as genuine stream'
);
assert.strictEqual(
  isBogusStreamUrl('https://rr1---sn-4g5ednkk.googlevideo.com/videoplayback?expire=123'),
  false,
  'YouTube videoplayback URL must be accepted as genuine stream'
);
assert.strictEqual(
  isBogusStreamUrl('https://example.com/stream.m3u8'),
  false,
  'M3U8 playlist URL must be accepted as genuine stream'
);
console.log('✓ Test 5: isBogusStreamUrl accurately distinguishes genuine media streams from webpage URLs.\n');

console.log('================================================================');
console.log('ALL STREAM RELAY TIMEOUT & BOGUS GUARD TESTS PASSED! 🎉');
console.log('================================================================\n');
