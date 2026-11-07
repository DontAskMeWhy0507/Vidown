/**
 * Milestone 3 Test Suite: Media Parser & Tag Whitelisting
 * 
 * Verifies that legitimate media CDN patterns for:
 * - Facebook Northern Vietnam Hanoi node (video.fhan*.fna.fbcdn.net)
 * - Vimeo (vimeocdn.com)
 * - NhacCuaTui (nixcdn.com)
 * - Zing (zdn.vn)
 * have been unblocked across content, background, and common modules,
 * while genuine safety and ad-blocking rules remain strictly enforced.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: MILESTONE 3 - MEDIA PARSER & TAG WHITELISTING ===\n');

// Helper to evaluate ESM-style module functions in Node.js
function loadESMFactory(relativePath) {
  const fullPath = path.resolve(__dirname, '..', relativePath);
  assert.ok(fs.existsSync(fullPath), `Module file must exist: ${relativePath}`);
  let code = fs.readFileSync(fullPath, 'utf8');
  code = code.replace(/^\/\/[^\n]*\n/, ''); // strip leading comment line
  code = code.replace(/^export default\s+/, 'return ');
  return new Function(code)();
}

function createMockRequire(definitions = {}) {
  const req = (id) => definitions[id] || {};
  req.d = (exports, name, getter) => {
    Object.defineProperty(exports, name, { enumerable: true, get: getter });
  };
  return req;
}

// ---------------------------------------------------------------------------
// 1. Content Script Media Parser: src/content/detector/media-parser.js
// ---------------------------------------------------------------------------
console.log('[Test 1] Verifying src/content/detector/media-parser.js exports...');
const contentParserFactory = loadESMFactory('src/content/detector/media-parser.js');
const contentParserExports = {};
contentParserFactory({}, contentParserExports, createMockRequire());

assert.ok(Array.isArray(contentParserExports.h), 'Content parser must export "h" array (BLOCKED_TAGS)');
const contentBlockedTags = contentParserExports.h;

// Confirm unblocked patterns are completely absent
assert.ok(
  !contentBlockedTags.some(rule => rule instanceof RegExp && rule.source.includes('fhan')),
  'BLOCKED_TAGS must NOT contain Facebook Hanoi pattern (/video.fhan/)'
);
assert.ok(
  !contentBlockedTags.includes('||vimeocdn.com/'),
  'BLOCKED_TAGS must NOT contain "||vimeocdn.com/"'
);
assert.ok(
  !contentBlockedTags.includes('||nixcdn.com/'),
  'BLOCKED_TAGS must NOT contain "||nixcdn.com/"'
);
assert.ok(
  !contentBlockedTags.includes('||zdn.vn/'),
  'BLOCKED_TAGS must NOT contain "||zdn.vn/"'
);

// Confirm remaining blocked patterns remain intact
assert.ok(contentBlockedTags.includes('||fb88.mp4'), 'BLOCKED_TAGS must retain "||fb88.mp4"');
assert.ok(contentBlockedTags.includes('||clip.vn/'), 'BLOCKED_TAGS must retain "||clip.vn/"');
assert.ok(contentBlockedTags.includes('||nhacrap.tv/'), 'BLOCKED_TAGS must retain "||nhacrap.tv/"');
assert.ok(contentBlockedTags.includes('||mail.google.com/'), 'BLOCKED_TAGS must retain "||mail.google.com/"');
assert.ok(contentBlockedTags.includes('||docs.google.com/'), 'BLOCKED_TAGS must retain "||docs.google.com/"');
assert.ok(contentBlockedTags.includes('||drive.google.com/'), 'BLOCKED_TAGS must retain "||drive.google.com/"');
assert.ok(contentBlockedTags.includes('||dropbox.com/'), 'BLOCKED_TAGS must retain "||dropbox.com/"');
assert.ok(contentBlockedTags.includes('||fptplay.net/livetv'), 'BLOCKED_TAGS must retain "||fptplay.net/livetv"');
assert.ok(
  contentBlockedTags.some(r => r instanceof RegExp && r.source.includes('blank_video')),
  'BLOCKED_TAGS must retain blank_video regex'
);
console.log('✓ Test 1: Content script media-parser BLOCKED_TAGS correctly whitelisted and intact!\n');

// ---------------------------------------------------------------------------
// 2. Background Media Parser: src/background/utilities/media-parser.js
// ---------------------------------------------------------------------------
console.log('[Test 2] Verifying src/background/utilities/media-parser.js exports...');
const bgParserFactory = loadESMFactory('src/background/utilities/media-parser.js');
const bgParserExports = {};
bgParserFactory({}, bgParserExports, createMockRequire());

assert.ok(Array.isArray(bgParserExports.h), 'Background parser must export "h" array (list_s)');
const bgBlockedTags = bgParserExports.h;

// Confirm unblocked patterns are absent
assert.ok(
  !bgBlockedTags.some(rule => rule instanceof RegExp && rule.source.includes('fhan')),
  'Background list_s must NOT contain Facebook Hanoi pattern (/video.fhan/)'
);
assert.ok(
  !bgBlockedTags.includes('||vimeocdn.com/'),
  'Background list_s must NOT contain "||vimeocdn.com/"'
);
assert.ok(
  !bgBlockedTags.includes('||nixcdn.com/'),
  'Background list_s must NOT contain "||nixcdn.com/"'
);
assert.ok(
  !bgBlockedTags.includes('||zdn.vn/'),
  'Background list_s must NOT contain "||zdn.vn/"'
);

// Confirm remaining blocked patterns remain intact
assert.ok(bgBlockedTags.includes('||fb88.mp4'), 'Background list_s must retain "||fb88.mp4"');
assert.ok(bgBlockedTags.includes('||clip.vn/'), 'Background list_s must retain "||clip.vn/"');
assert.ok(bgBlockedTags.includes('||nhacrap.tv/'), 'Background list_s must retain "||nhacrap.tv/"');
assert.ok(bgBlockedTags.includes('||mail.google.com/'), 'Background list_s must retain "||mail.google.com/"');
assert.ok(bgBlockedTags.includes('||docs.google.com/'), 'Background list_s must retain "||docs.google.com/"');
assert.ok(bgBlockedTags.includes('||drive.google.com/'), 'Background list_s must retain "||drive.google.com/"');
assert.ok(bgBlockedTags.includes('||dropbox.com/'), 'Background list_s must retain "||dropbox.com/"');
console.log('✓ Test 2: Background media-parser list_s correctly whitelisted and intact!\n');

// ---------------------------------------------------------------------------
// 3. Content Media Constants: src/content/detector/media-constants.js
// ---------------------------------------------------------------------------
console.log('[Test 3] Verifying src/content/detector/media-constants.js exports...');
const contentConstFactory = loadESMFactory('src/content/detector/media-constants.js');
const contentConstExports = {};
contentConstFactory({}, contentConstExports, createMockRequire());

assert.ok(Array.isArray(contentConstExports.l), 'Content constants must export "l" array (BLOCKED_HOST_PATTERNS)');
const contentBlockedHosts = contentConstExports.l;

assert.ok(
  !contentBlockedHosts.some(pat => pat.test('nixcdn.com') || pat.test('data38.nixcdn.com')),
  'Content BLOCKED_HOST_PATTERNS must NOT match nixcdn.com'
);
assert.ok(
  contentBlockedHosts.some(pat => pat.test('vcmedia.vn') && pat.test('video.vcmedia.vn')),
  'Content BLOCKED_HOST_PATTERNS must retain vcmedia.vn'
);
assert.ok(
  contentBlockedHosts.some(pat => pat.test('kenhhd.tv') && pat.test('play.kenhhd.tv')),
  'Content BLOCKED_HOST_PATTERNS must retain kenhhd.tv'
);
console.log('✓ Test 3: Content media-constants BLOCKED_HOST_PATTERNS verified!\n');

// ---------------------------------------------------------------------------
// 4. Common Media Constants: src/common/utilities/media-constants.js
// ---------------------------------------------------------------------------
console.log('[Test 4] Verifying src/common/utilities/media-constants.js exports...');
const commonConstFactory = loadESMFactory('src/common/utilities/media-constants.js');
const commonConstExports = {};
commonConstFactory({}, commonConstExports, createMockRequire());

assert.ok(Array.isArray(commonConstExports.l), 'Common constants must export "l" array (list_c)');
const commonBlockedHosts = commonConstExports.l;

assert.ok(
  !commonBlockedHosts.some(pat => pat.test('nixcdn.com') || pat.test('data38.nixcdn.com')),
  'Common list_c must NOT match nixcdn.com'
);
assert.ok(
  commonBlockedHosts.some(pat => pat.test('vcmedia.vn')),
  'Common list_c must retain vcmedia.vn'
);
assert.ok(
  commonBlockedHosts.some(pat => pat.test('kenhhd.tv')),
  'Common list_c must retain kenhhd.tv'
);
console.log('✓ Test 4: Common media-constants list_c verified!\n');

// ---------------------------------------------------------------------------
// 5. Background Media Constants: src/background/utilities/media-constants.js
// ---------------------------------------------------------------------------
console.log('[Test 5] Verifying src/background/utilities/media-constants.js exports...');
const bgConstFactory = loadESMFactory('src/background/utilities/media-constants.js');
const bgConstExports = {};
bgConstFactory({}, bgConstExports, createMockRequire());

assert.ok(Array.isArray(bgConstExports.l), 'Background constants must export "l" array (list_c)');
const bgBlockedHosts = bgConstExports.l;

assert.ok(
  !bgBlockedHosts.some(pat => pat.test('nixcdn.com') || pat.test('data38.nixcdn.com')),
  'Background list_c must NOT match nixcdn.com'
);
assert.ok(
  bgBlockedHosts.some(pat => pat.test('vcmedia.vn')),
  'Background list_c must retain vcmedia.vn'
);
assert.ok(
  bgBlockedHosts.some(pat => pat.test('kenhhd.tv')),
  'Background list_c must retain kenhhd.tv'
);
console.log('✓ Test 5: Background media-constants list_c verified!\n');

// ---------------------------------------------------------------------------
// 6. Functional Verification: Content Script URL Matcher
// ---------------------------------------------------------------------------
console.log('[Test 6] Verifying functional Content Script URL Matcher...');
const contentMatcherFactory = loadESMFactory('src/content/detector/url-matcher.js');
const contentMatcherExports = {};
const contentMatcherDefs = {
  22: contentParserExports,
  7: { a: { set: () => {} } },
  0: { sleep: () => Promise.resolve(), Storage: { get: () => Promise.resolve({}) } },
  1: { w: 'w', i: 'i', c: 'c', n: 'n' },
  43: { a: { loadTestsFromServer: () => {} } },
  13: { IS_CONTENT_SCRIPT: true }
};
contentMatcherFactory({}, contentMatcherExports, createMockRequire(contentMatcherDefs));
const contentMatcher = contentMatcherExports.a;

// Unblocked URLs: MUST NOT be blocked by requests filter
const whitelistedUrls = [
  'https://video.fhan14-1.fna.fbcdn.net/v/t39.25447-2/12345_n.mp4?_nc_cat=101',
  'https://video.fhan2-1.fna.fbcdn.net/v/t39.25447-2/test.mp4',
  'https://vod-adaptive-ak.vimeocdn.com/exp=12345/playlist.json',
  'https://1234.vimeocdn.com/video/54321.mp4',
  'https://data38.nixcdn.com/Previews/sample.mp3',
  'https://stc-id.zdn.vn/video/sample.mp4',
  'https://m.zdn.vn/media/track.mp3'
];

for (const targetUrl of whitelistedUrls) {
  const isBlocked = contentMatcher.check(targetUrl, 'requests');
  assert.strictEqual(
    isBlocked,
    false,
    `Whitelisted media URL must NOT be blocked in content matcher: ${targetUrl}`
  );
}

// Blocked URLs: MUST remain blocked
const blockedUrls = [
  { url: 'https://mail.google.com/mail/u/0/video.mp4', label: 'mail.google.com' },
  { url: 'https://docs.google.com/viewer?video=1', label: 'docs.google.com' },
  { url: 'https://drive.google.com/file/d/123', label: 'drive.google.com' },
  { url: 'https://dropbox.com/s/12345/video.mp4', label: 'dropbox.com' },
  { url: 'https://fb88.mp4/video.mp4', label: 'fb88.mp4' },
  { url: 'https://clip.vn/video.mp4', label: 'clip.vn' },
  { url: 'https://nhacrap.tv/stream.mp3', label: 'nhacrap.tv' },
  { url: 'https://fptplay.net/livetv/channel1', label: 'fptplay.net/livetv' },
  { url: 'https://cdn.example.com/assets/blank_video/test.mp4', label: 'blank_video' }
];

for (const { url, label } of blockedUrls) {
  const isBlocked = contentMatcher.check(url, 'requests');
  assert.strictEqual(
    isBlocked,
    true,
    `Blocked URL pattern must remain blocked in content matcher: ${label} (${url})`
  );
}
console.log('✓ Test 6: Content script URL matcher correctly permits CDNs and blocks restricted patterns!\n');

// ---------------------------------------------------------------------------
// 7. Functional Verification: Background Service Worker URL Matcher
// ---------------------------------------------------------------------------
console.log('[Test 7] Verifying functional Background Service Worker URL Matcher...');
const bgMatcherFactory = loadESMFactory('src/background/utilities/url-matcher.js');
const bgMatcherExports = {};
const bgMatcherDefs = {
  22: bgParserExports,
  7: { a: { set: () => {} } },
  0: { sleep: () => Promise.resolve(), Storage: { get: () => Promise.resolve({}) } },
  1: { w: 'w', i: 'i', c: 'c', n: 'n' },
  43: { a: { loadTestsFromServer: () => {} } }
};
bgMatcherFactory({}, bgMatcherExports, createMockRequire(bgMatcherDefs));
const bgMatcher = bgMatcherExports.a;

for (const targetUrl of whitelistedUrls) {
  const isBlocked = bgMatcher.check(targetUrl, 'requests');
  assert.strictEqual(
    isBlocked,
    false,
    `Whitelisted media URL must NOT be blocked in background matcher: ${targetUrl}`
  );
}

for (const { url, label } of blockedUrls) {
  const isBlocked = bgMatcher.check(url, 'requests');
  assert.strictEqual(
    isBlocked,
    true,
    `Blocked URL pattern must remain blocked in background matcher: ${label} (${url})`
  );
}
console.log('✓ Test 7: Background service worker URL matcher correctly permits CDNs and blocks restricted patterns!\n');

// ---------------------------------------------------------------------------
// 8. Download Manager Multi-Stream Concurrency Verification
// ---------------------------------------------------------------------------
console.log('[Test 8] Verifying Download Manager stream concurrency constraints...');
const checkHostMatches = (urls, patterns) => {
  return urls.some(u => patterns.some(pat => pat.test(u)));
};

// nixcdn.com must NOT match BLOCKED_HOST_PATTERNS -> allows multi-threaded downloads
const nixUrls = ['https://data38.nixcdn.com/song.mp3'];
assert.strictEqual(
  checkHostMatches(nixUrls, contentBlockedHosts),
  false,
  'nixcdn.com must not be constrained in content constants'
);
assert.strictEqual(
  checkHostMatches(nixUrls, commonBlockedHosts),
  false,
  'nixcdn.com must not be constrained in common constants'
);
assert.strictEqual(
  checkHostMatches(nixUrls, bgBlockedHosts),
  false,
  'nixcdn.com must not be constrained in background constants'
);

// vcmedia.vn and kenhhd.tv MUST match BLOCKED_HOST_PATTERNS -> streamsNumber constrained to 1
const vcmediaUrls = ['https://video.vcmedia.vn/clip.mp4'];
assert.strictEqual(
  checkHostMatches(vcmediaUrls, contentBlockedHosts),
  true,
  'vcmedia.vn must be constrained to 1 stream in content constants'
);
assert.strictEqual(
  checkHostMatches(vcmediaUrls, commonBlockedHosts),
  true,
  'vcmedia.vn must be constrained to 1 stream in common constants'
);
assert.strictEqual(
  checkHostMatches(vcmediaUrls, bgBlockedHosts),
  true,
  'vcmedia.vn must be constrained to 1 stream in background constants'
);

console.log('✓ Test 8: Download concurrency constraints verified for all targets!\n');

console.log('================================================================');
console.log('ALL MILESTONE 3 TAG WHITELISTING TESTS PASSED SUCCESSFULLY! ✅');
console.log('================================================================\n');
