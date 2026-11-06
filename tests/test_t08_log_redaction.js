const assert = require('assert');
const { sanitizeForLog } = require('../native/host.js');

console.log('=== TEST SUITE: T08 CREDENTIAL REDACTION IN LOGS ===\n');

assert.strictEqual(typeof sanitizeForLog, 'function', 'native/host.js must export sanitizeForLog');

console.log('[Test 1] Redaction of URL parameters and headers');
const secretSentinel = 'SUPER_SECRET_TOKEN_SENTINEL_XYZ123';

const rawUrl = `https://cdn.example.com/video.mp4?token=${secretSentinel}&sig=${secretSentinel}&lsig=${secretSentinel}&ip=203.0.113.5&pot=${secretSentinel}&hdnea=${secretSentinel}&Policy=${secretSentinel}&Signature=${secretSentinel}&Key-Pair-Id=${secretSentinel}&format=mp4`;
const sanitizedUrl = sanitizeForLog(rawUrl);
assert.strictEqual(sanitizedUrl.includes(secretSentinel), false, 'Secret token must NOT remain in sanitized URL');
assert.strictEqual(sanitizedUrl.includes('203.0.113.5'), false, 'IP parameter must NOT remain in sanitized URL');
assert.ok(sanitizedUrl.includes('token=<redacted>'), 'Must show redacted token');
assert.ok(sanitizedUrl.includes('sig=<redacted>'), 'Must show redacted signature');
assert.ok(sanitizedUrl.includes('lsig=<redacted>'), 'Must show redacted lsig');
assert.ok(sanitizedUrl.includes('ip=<redacted>'), 'Must show redacted ip');
assert.ok(sanitizedUrl.includes('pot=<redacted>'), 'Must show redacted pot');
assert.ok(sanitizedUrl.includes('format=mp4'), 'Non-secret parameter must be preserved');

console.log('✓ Test 1: Secret token sentinel in URL query parameters completely redacted.');

console.log('\n[Test 2] Redaction of JSON headers & user home paths');
const homeDir = process.env.USERPROFILE || process.env.HOME || '';
const obj = {
  cookie: `session_id=${secretSentinel}; uid=99`,
  authorization: `Bearer ${secretSentinel}`,
  dir: homeDir ? `${homeDir}\\Downloads` : 'C:\\Users\\test\\Downloads',
  title: 'My Video'
};
const sanitizedObj = sanitizeForLog(obj);
assert.strictEqual(sanitizedObj.includes(secretSentinel), false, 'Secret token must NOT remain in JSON log');
assert.ok(sanitizedObj.includes('"cookie":"<redacted>"'));
assert.ok(sanitizedObj.includes('"authorization":"<redacted>"'));
assert.ok(sanitizedObj.includes('"title":"My Video"'));
if (homeDir) {
  assert.strictEqual(sanitizedObj.includes(homeDir), false, 'Raw home directory must be replaced with ~');
  assert.ok(sanitizedObj.includes('~'), 'Sanitized log must use ~ for home directory');
}

console.log('✓ Test 2: Cookie, Authorization, and Home directory in JSON cleanly redacted.');

console.log('\n======================================================');
console.log('ALL T08 LOG REDACTION TESTS PASSED! 🎉');
console.log('======================================================\n');
