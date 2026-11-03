const assert = require('assert');

console.log('=== TEST SUITE: T06 STREAM RELAY COVERAGE & INTERVAL INTEGRITY ===\n');

/**
 * High-performance interval tracker for stream relay.
 */
class StreamCoverageTracker {
  constructor(expectedTotal) {
    this.expectedTotal = expectedTotal || null;
    this.intervals = []; // Array of [start, end] inclusive
  }

  addRange(start, length) {
    if (typeof start !== 'number' || typeof length !== 'number' || length <= 0 || start < 0) {
      return false;
    }
    const end = start + length - 1;
    if (this.expectedTotal !== null && end >= this.expectedTotal) {
      return false; // Overflow
    }

    // Insert new interval and merge
    this.intervals.push([start, end]);
    this.intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let current = this.intervals[0];

    for (let i = 1; i < this.intervals.length; i++) {
      const next = this.intervals[i];
      if (next[0] <= current[1] + 1) {
        current[1] = Math.max(current[1], next[1]);
      } else {
        merged.push(current);
        current = next;
      }
    }
    merged.push(current);
    this.intervals = merged;
    return true;
  }

  hasGaps() {
    return this.intervals.length > 1;
  }

  isComplete() {
    if (this.intervals.length !== 1) return false;
    const [start, end] = this.intervals[0];
    if (start !== 0) return false;
    if (this.expectedTotal !== null && (end + 1) !== this.expectedTotal) return false;
    return true;
  }
}

console.log('[Test 1] Sequential stream coverage');
const tracker = new StreamCoverageTracker(1000);
assert.strictEqual(tracker.addRange(0, 500), true);
assert.strictEqual(tracker.hasGaps(), false);
assert.strictEqual(tracker.isComplete(), false);

assert.strictEqual(tracker.addRange(500, 500), true);
assert.strictEqual(tracker.hasGaps(), false);
assert.strictEqual(tracker.isComplete(), true);
console.log('✓ Test 1: In-order chunk streaming verified as gap-free and complete.');

console.log('\n[Test 2] Sparse / gap detection');
const sparseTracker = new StreamCoverageTracker(100);
sparseTracker.addRange(0, 40);
sparseTracker.addRange(60, 40); // Gap at 40-59!
assert.strictEqual(sparseTracker.hasGaps(), true, 'Must detect gap');
assert.strictEqual(sparseTracker.isComplete(), false, 'File with gaps cannot be complete');
console.log('✓ Test 2: Incomplete/sparse file accurately detected.');

console.log('\n[Test 3] Out-of-order arrival and duplicate chunk handling');
const oooTracker = new StreamCoverageTracker(100);
oooTracker.addRange(50, 50);
oooTracker.addRange(0, 50);
assert.strictEqual(oooTracker.hasGaps(), false);
assert.strictEqual(oooTracker.isComplete(), true);

// Duplicate chunk
assert.strictEqual(oooTracker.addRange(0, 50), true);
assert.strictEqual(oooTracker.isComplete(), true);
console.log('✓ Test 3: Out-of-order chunks merged into solid coverage.');

console.log('\n======================================================');
console.log('ALL T06 STREAM RELAY COVERAGE TESTS PASSED! 🎉');
console.log('======================================================\n');
