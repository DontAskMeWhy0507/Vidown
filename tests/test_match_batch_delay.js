/**
 * tests/test_match_batch_delay.js
 *
 * Regression suite for the v3.0.3 faster-button change:
 * the matched-request batching delay in the content entry must stay at
 * 200 ms (lowered from 1000 ms so the download widget learns about
 * matched media sooner), and the batching semantics must stay intact:
 * matches buffer into one array and emit ONCE as widget.request_matched.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: MATCH BATCH DELAY (v3.0.3) ===\n');

const entryPath = path.resolve(__dirname, '..', 'src', 'content', 'detector', 'content-entry.js');
assert.ok(fs.existsSync(entryPath), 'src/content/detector/content-entry.js must exist');
const src = fs.readFileSync(entryPath, 'utf8');

// Isolate the queueMatchedRequests function body.
const fnStart = src.indexOf('queueMatchedRequests');
assert.ok(fnStart >= 0, 'queueMatchedRequests must exist in content-entry.js');
const fnEnd = src.indexOf('};', fnStart) + 2;
const fnBody = src.slice(fnStart, fnEnd);

// Batching semantics preserved: buffer push + single batched emit.
assert.ok(fnBody.includes('bufferedMatches.push'), 'matches must still buffer into bufferedMatches');
assert.ok(fnBody.includes('EE.emit("widget.request_matched", bufferedMatches)'), 'the batch must emit widget.request_matched with the buffered array');
assert.ok(fnBody.includes('bufferedMatches = []'), 'the buffer must reset after the emit');
assert.ok(fnBody.includes('batchTimer = undefined'), 'the batch timer must reset after firing');

// The delay itself: the batchTimer setTimeout must fire at 200 ms.
const timerMatch = fnBody.match(/batchTimer = setTimeout\(\(\) => \{[\s\S]*?\}, (\d+)\);/);
assert.ok(timerMatch, 'batchTimer setTimeout block must be present');
assert.strictEqual(timerMatch[1], '200', `batch delay must be 200 ms, got ${timerMatch[1]}`);

// The old 1000 ms batch delay must be gone from this function.
assert.ok(!/\}, 1000\);/.test(fnBody), 'the old 1000 ms batch delay must not remain in queueMatchedRequests');

console.log('Batch delay is 200 ms with buffering semantics intact.');

// Dynamic behavioral simulation: verify leading-edge 0ms emit for first match
// and 200ms trailing emit for subsequent resolutions.
const vm = require('vm');
const emits = [];
const fakeEE = {
  emit(event, payload) {
    emits.push({ event, payload: JSON.parse(JSON.stringify(payload)), time: Date.now() });
  }
};

let capturedQueueFn = null;
const sandbox = {
  EE: fakeEE,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  console: console,
  capture(fn) { capturedQueueFn = fn; }
};

const wrappedCode = `
  var batchTimer;
  var bufferedMatches = [];
  ${fnBody}
  capture(queueMatchedRequests);
`;
vm.createContext(sandbox);
vm.runInContext(wrappedCode, sandbox);
assert.strictEqual(typeof capturedQueueFn, 'function', 'queueMatchedRequests must be extracted');

// Test 1: First item emits immediately (leading-edge emit ~0ms)
capturedQueueFn({ result: [{ id: 'video_1080p' }] });
assert.strictEqual(emits.length, 1, 'First media match must emit immediately (0ms leading edge)');
assert.strictEqual(emits[0].event, 'widget.request_matched');
assert.deepStrictEqual(emits[0].payload, [{ id: 'video_1080p' }]);

// Test 2: Secondary items within the 200ms window are buffered
capturedQueueFn({ result: [{ id: 'video_720p' }] });
capturedQueueFn({ result: [{ id: 'audio_aac' }] });
assert.strictEqual(emits.length, 1, 'Subsequent items in window must be buffered, not immediately emitted');

// Wait for the 200ms batch timer to flush
setTimeout(() => {
  assert.strictEqual(emits.length, 2, 'Buffered items must emit once batch timer expires');
  assert.deepStrictEqual(emits[1].payload, [{ id: 'video_720p' }, { id: 'audio_aac' }]);
  console.log('✓ Dynamic simulation confirms 0ms leading-edge emit and 200ms batched trailing emit.');
  console.log('=== SUITE PASSED: MATCH BATCH DELAY ===');
}, 250);
