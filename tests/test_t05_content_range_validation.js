const assert = require('assert');

console.log('=== TEST SUITE: T05 CONTENT-RANGE & STATUS 206 VALIDATION ===\n');

/**
 * Robust Content-Range parser and validator
 */
function parseAndValidateContentRange(headerVal, expectedStart, expectedEnd, expectedTotal) {
  if (!headerVal || typeof headerVal !== 'string') return null;
  // Format: bytes start-end/total or bytes start-end/*
  const match = headerVal.trim().match(/^bytes\s+(\d+)-(\d+)\/(\d+|\*)$/i);
  if (!match) return null;

  const start = parseInt(match[1], 10);
  const end = parseInt(match[2], 10);
  const total = match[3] === '*' ? null : parseInt(match[3], 10);

  if (isNaN(start) || isNaN(end) || start > end) return null;
  if (total !== null && (end >= total || total <= 0)) return null;

  if (expectedStart !== undefined && start !== expectedStart) return null;
  if (expectedEnd !== undefined && end !== expectedEnd) return null;
  if (expectedTotal !== undefined && total !== null && total !== expectedTotal) return null;

  return { start, end, total, length: end - start + 1 };
}

console.log('[Test 1] Valid Content-Range parsing');
const valid = parseAndValidateContentRange('bytes 0-1048575/10485760', 0, 1048575, 10485760);
assert.ok(valid, 'Must parse valid range');
assert.strictEqual(valid.start, 0);
assert.strictEqual(valid.end, 1048575);
assert.strictEqual(valid.length, 1048576);
console.log('✓ Test 1: Valid Content-Range parsed correctly.');

console.log('\n[Test 2] Invalid or mismatched Content-Range rejection');
// Mismatched start
assert.strictEqual(parseAndValidateContentRange('bytes 100-200/1000', 0, 200, 1000), null);
// Mismatched end
assert.strictEqual(parseAndValidateContentRange('bytes 0-500/1000', 0, 200, 1000), null);
// Inverted start/end
assert.strictEqual(parseAndValidateContentRange('bytes 500-200/1000'), null);
// Malformed string
assert.strictEqual(parseAndValidateContentRange('characters 0-100/1000'), null);
assert.strictEqual(parseAndValidateContentRange(''), null);
console.log('✓ Test 2: Malformed or mismatched Content-Range strictly rejected.');

console.log('\n======================================================');
console.log('ALL T05 CONTENT-RANGE VALIDATION TESTS PASSED! 🎉');
console.log('======================================================\n');
