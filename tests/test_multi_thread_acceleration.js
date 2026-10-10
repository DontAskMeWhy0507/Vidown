const assert = require('assert');
const { calculateChunks } = require('../native/host.js');

console.log('Testing calculateChunks and 8-thread Range acceleration...');

// 1. A 4MB file with concurrency=8 should yield 8 chunks of 512KB
const chunks4MB = calculateChunks(4 * 1024 * 1024, 8);
assert.strictEqual(chunks4MB.length, 8, `Expected 8 chunks, got ${chunks4MB.length}`);
assert.strictEqual(chunks4MB[0].start, 0);
assert.strictEqual(chunks4MB[chunks4MB.length - 1].end, 4 * 1024 * 1024 - 1);
console.log('✓ 4MB file correctly split into 8 chunks');

// 2. A 100MB file with concurrency=8 should yield 8 chunks
const chunks100MB = calculateChunks(100 * 1024 * 1024, 8);
assert.strictEqual(chunks100MB.length, 8, `Expected 8 chunks, got ${chunks100MB.length}`);
assert.strictEqual(chunks100MB[0].start, 0);
assert.strictEqual(chunks100MB[7].end, 100 * 1024 * 1024 - 1);
console.log('✓ 100MB file correctly split into 8 chunks');

// 3. A 1.5MB file with minChunkSize=512KB should yield 3 chunks
const chunks1_5MB = calculateChunks(1536 * 1024, 8);
assert.strictEqual(chunks1_5MB.length, 3, `Expected 3 chunks for 1.5MB file, got ${chunks1_5MB.length}`);
console.log('✓ 1.5MB file correctly split into 3 chunks (512KB each)');

// 4. A 300KB small file should yield 1 chunk
const chunks300KB = calculateChunks(300 * 1024, 8);
assert.strictEqual(chunks300KB.length, 1, `Expected 1 chunk for 300KB file, got ${chunks300KB.length}`);
assert.strictEqual(chunks300KB[0].start, 0);
assert.strictEqual(chunks300KB[0].end, 300 * 1024 - 1);
console.log('✓ 300KB small file correctly has 1 chunk');

// 5. Ensure contiguous bytes coverage without gaps or overlaps
for (let i = 0; i < chunks4MB.length - 1; i++) {
  assert.strictEqual(chunks4MB[i].end + 1, chunks4MB[i + 1].start, `Gap or overlap detected between chunk ${i} and ${i + 1}`);
}
console.log('✓ All chunks are strictly contiguous without gaps or overlaps');

console.log('\nAll multi-thread acceleration tests passed! 🚀');
