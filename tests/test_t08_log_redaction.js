const assert = require('assert');

console.log('=== TEST SUITE: T08 CREDENTIAL REDACTION IN LOGS ===\n');

function sanitizeForLog(value) {
  try {
    let s = typeof value === 'string' ? value : JSON.stringify(value);
    if (!s) return s;
    // 1. Redact cookie / set-cookie in JSON
    s = s.replace(/"(cookie|set-cookie|authorization)"\s*:\s*"(?:[^"\\]|\\.)*"/gi, '"$1":"<redacted>"');
    // 2. Redact Header plain string e.g. Cookie: foo=bar
    s = s.replace(/(\b(?:cookie|set-cookie|authorization):\s*)([^\r\n]+)/gi, '$1<redacted>');
    // 3. Redact query param tokens in URLs: e.g. token=MY_SECRET_123 -> token=<redacted>
    s = s.replace(/((?:[?&])(?:signature|sig|token|auth|key|exp|nonce|n|rand)=)([^&\s"'>]+)/gi, '$1<redacted>');
    return s;
  } catch (_) {
    return '<unloggable>';
  }
}

console.log('[Test 1] Redaction of URL parameters and headers');
const secretSentinel = 'SUPER_SECRET_TOKEN_SENTINEL_XYZ123';

const rawUrl = `https://cdn.example.com/video.mp4?token=${secretSentinel}&sig=${secretSentinel}&format=mp4`;
const sanitizedUrl = sanitizeForLog(rawUrl);
assert.strictEqual(sanitizedUrl.includes(secretSentinel), false, 'Secret token must NOT remain in sanitized URL');
assert.ok(sanitizedUrl.includes('token=<redacted>'), 'Must show redacted token');
assert.ok(sanitizedUrl.includes('sig=<redacted>'), 'Must show redacted signature');
assert.ok(sanitizedUrl.includes('format=mp4'), 'Non-secret parameter must be preserved');

console.log('✓ Test 1: Secret token sentinel in URL query parameters completely redacted.');

console.log('\n[Test 2] Redaction of JSON headers');
const obj = {
  cookie: `session_id=${secretSentinel}; uid=99`,
  authorization: `Bearer ${secretSentinel}`,
  title: 'My Video'
};
const sanitizedObj = sanitizeForLog(obj);
assert.strictEqual(sanitizedObj.includes(secretSentinel), false, 'Secret token must NOT remain in JSON log');
assert.ok(sanitizedObj.includes('"cookie":"<redacted>"'));
assert.ok(sanitizedObj.includes('"authorization":"<redacted>"'));
assert.ok(sanitizedObj.includes('"title":"My Video"'));

console.log('✓ Test 2: Cookie and Authorization fields in JSON cleanly redacted.');

console.log('\n======================================================');
console.log('ALL T08 LOG REDACTION TESTS PASSED! 🎉');
console.log('======================================================\n');
