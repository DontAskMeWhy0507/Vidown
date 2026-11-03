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
const fnBody = src.slice(fnStart, fnStart + 900);

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
console.log('=== SUITE PASSED: MATCH BATCH DELAY ===');
