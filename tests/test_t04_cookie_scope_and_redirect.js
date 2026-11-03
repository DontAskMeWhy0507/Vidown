const assert = require('assert');
const {
  isSameOriginOrSubdomain
} = require('../native/host');

console.log('=== TEST SUITE: T04 COOKIE BINDING & REDIRECT POLICY ===\n');

// 1. Same-origin & subdomain validation
console.log('[Test 1] Cookie origin domain scoping');
assert.strictEqual(isSameOriginOrSubdomain('https://example.com/video', 'https://example.com/stream'), true);
assert.strictEqual(isSameOriginOrSubdomain('https://example.com', 'https://cdn.example.com'), true);
assert.strictEqual(isSameOriginOrSubdomain('https://cdn.example.com', 'https://example.com'), true);
assert.strictEqual(isSameOriginOrSubdomain('https://example.com', 'https://evil.com'), false);
assert.strictEqual(isSameOriginOrSubdomain('https://example.com', 'https://example.com.attacker.com'), false);
assert.strictEqual(isSameOriginOrSubdomain('https://bank.com', 'https://notbank.com'), false);
console.log('✓ Test 1: Origin scoping allows same domain/subdomain and strictly blocks third-party hosts.');

// 2. Cookie stripping on cross-origin redirect
console.log('\n[Test 2] Cross-origin redirect header stripping');
function filterHeadersOnRedirect(originalUrl, redirectUrl, headers) {
  const safeHeaders = { ...headers };
  const origHost = new URL(originalUrl).hostname;
  const targetHost = new URL(redirectUrl).hostname;
  
  if (!isSameOriginOrSubdomain(origHost, targetHost)) {
    // Cross origin: Strip sensitive credentials!
    delete safeHeaders.Cookie;
    delete safeHeaders.cookie;
    delete safeHeaders.Authorization;
    delete safeHeaders.authorization;
  }
  return safeHeaders;
}

const reqHeaders = {
  Cookie: 'session_id=SECRET123; user=alice',
  Authorization: 'Bearer SECRET_TOKEN',
  'User-Agent': 'Vidown/3.0'
};

const sameHostRedirect = filterHeadersOnRedirect(
  'https://example.com/path1',
  'https://cdn.example.com/path2',
  reqHeaders
);
assert.ok(sameHostRedirect.Cookie, 'Same origin/subdomain retains cookie');
assert.ok(sameHostRedirect.Authorization, 'Same origin/subdomain retains authorization');

const crossHostRedirect = filterHeadersOnRedirect(
  'https://example.com/entry',
  'https://untrusted-cdn.com/stream.mp4',
  reqHeaders
);
assert.strictEqual(crossHostRedirect.Cookie, undefined, 'Cross-origin redirect MUST strip Cookie');
assert.strictEqual(crossHostRedirect.Authorization, undefined, 'Cross-origin redirect MUST strip Authorization');
assert.strictEqual(crossHostRedirect['User-Agent'], 'Vidown/3.0', 'Non-sensitive headers preserved');

console.log('✓ Test 2: Cross-origin redirects strictly drop Cookie and Authorization headers.');

console.log('\n======================================================');
console.log('ALL T04 COOKIE SCOPE & REDIRECT TESTS PASSED! 🎉');
console.log('======================================================\n');
