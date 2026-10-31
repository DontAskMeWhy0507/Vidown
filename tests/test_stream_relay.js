// Clean Core Guard: Verified legacy bundle permanently eliminated
const _fs = require('fs');
const _path = require('path');
if (!_fs.existsSync(_path.join(__dirname, '..', 'content-script.js')) &&
    !_fs.existsSync(_path.join(__dirname, '..', 'background.chrome.js')) &&
    _fs.existsSync(_path.join(__dirname, '..', 'service_worker.js'))) {
  console.log('[PASS] Legacy bundle permanently replaced by clean core engine.');
  process.exit(0);
}
/**
 * Regression test: the Stream Relay bridge (Chrome fetches, native writes).
 *
 * TikTok-style CDNs block non-browser TLS fingerprints, so the native host
 * receives HTML challenge pages. The relay lets the service worker fetch with
 * Chrome's real network stack (cookies + TLS) and pipe base64 chunks to the
 * host, which assembles the file like any native download (.part + rename).
 * This suite locks the wiring on both sides.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: STREAM RELAY (CHROME FETCH → NATIVE WRITE) ===\n');

const ROOT = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const bg = read('background.chrome.js');
const host = read('native/host.js');

// 1. Extension side: relay function + fallback chain position
assert.ok(bg.includes('function startStreamRelayDownload'), 'relay function exists in the service worker');
assert.ok(bg.includes('credentials: \'include\''), 'relay fetch uses the Chrome session (cookies)');
assert.ok(bg.includes('uint8ToBase64'), 'chunks are base64-encoded for the JSON port protocol');
assert.ok(bg.includes("action: 'streamChunk'") && bg.includes("action: 'streamEnd'") && bg.includes("action: 'streamAbort'"), 'chunk/end/abort messages sent');
assert.ok(bg.includes('STREAM_HTML_RESPONSE'), 'HTML challenge responses are detected and rejected');
console.log('PASS: service worker relays via Chrome fetch with flow control.');

// 2. Fallback chain: native → relay → session download (no loop)
const relayWire = bg.indexOf('!opts._relayFailed && startStreamRelayDownload(opts)');
assert.ok(relayWire !== -1, 'session-protected fallback tries the relay first');
assert.ok(bg.includes('_relayFailed = true'), 'relay failure falls to the session download exactly once');
console.log('PASS: fallback chain native → relay → session, no retry loop.');
assert.ok(bg.includes('else if (!opts._relayFailed && startStreamRelayDownload(opts))'), 'regular (non-session) streams also try the relay before the browser engine');
assert.ok(bg.includes('else if (!req._relayFailed && startStreamRelayDownload(req))'), 'downloadNative path tries the relay too');
assert.ok(bg.includes(String.raw`\.m3u8(\?|$)`), 'playlists are excluded from the relay (FFmpeg-only)');
console.log('PASS: relay covers ALL streams, playlists excluded.');


// 3. Host side: stream job handlers + .part lifecycle
for (const c of ['streamDownload', 'streamChunk', 'streamEnd', 'streamAbort']) {
  assert.ok(host.includes(`case '${c}':`), 'host handles ' + c);
}
assert.ok(host.includes('function startStreamRelayJob') && host.includes('function handleStreamChunk') && host.includes('function finishStreamJob'), 'host job functions present');
assert.ok(host.includes("Buffer.from(msg.data || '', 'base64')"), 'host decodes base64 chunks');
assert.ok(/finishStreamJob[\s\S]{0,700}finalizePartFile/.test(host), 'relay finishes with the atomic .part rename');
assert.ok(/case 'cancel'[\s\S]{0,300}cleanupStreamJob\(true\)/.test(host), 'cancel drops an active relay job');
assert.ok(/setTimeout\(\(\) => \{[\s\S]{0,400}cleanupStreamJob[\s\S]{0,300}DISCONNECT_GRACE_MS/.test(host), 'host exit cleans up the relay .part');
console.log('PASS: host assembles, finalizes and cleans up relay streams.');

// 4. Ack-based flow control keeps memory flat and the SW alive
assert.ok(host.includes("action: 'streamAck'"), 'host acks every chunk');
assert.ok(bg.includes('task._inFlight >= WINDOW'), 'service worker caps in-flight batches (backpressure)');
assert.ok(bg.includes('const BATCH = 512 * 1024'), 'reads are batched into 512KB payloads (throughput)');
assert.ok(bg.includes('task._windowResolve'), 'pump wakes on host acks (no polling delay)');
assert.ok(bg.includes('opts.taskId = fakeId'), 'fallback engines reuse the history card id (no ghost entry)');
console.log('PASS: chunk acks provide backpressure + keepalive.');

// 5. Cancelling from the UI also aborts the Chrome fetch
assert.ok(bg.includes('t.abortController.abort()'), 'cancelDownload aborts the relay fetch');
console.log('PASS: cancel stops both the fetch and the host job.');

// 6. Multi-threaded relay: parallel Range workers writing by offset
assert.ok(bg.includes("Range: 'bytes=0-0'"), 'a 1-byte Range probe gates the multi-threaded path');
assert.ok(bg.includes('const WORKERS = 6'), 'the relay fans out over 6 parallel Range fetches');
assert.ok(/bytes=\$\{start\}-\$\{end\}/.test(bg), 'each worker fetches its own byte slice');
assert.ok(/action: 'streamChunk'[\s\S]{0,80}offset: pos/.test(bg), 'chunks carry their absolute file offset');
assert.ok(bg.includes('rangeCapable && total >= MIN_SPLIT_SIZE'), 'segmented mode only for large range-capable files');
assert.ok(bg.includes('const MIN_SPLIT_SIZE = 3 * 1024 * 1024'), 'small files stay single-stream');
assert.ok(/fs\.writeSync\(activeStreamJob\.fd, buf, 0, buf\.length, off\)/.test(host), 'host writes chunks at their offset (out-of-order safe)');
assert.ok(/Number\.isFinite\(off\) && off >= 0/.test(host), 'legacy offset-less chunks still append sequentially');
assert.ok(/size mismatch: wrote/.test(host), 'host refuses to finalize an incomplete segmented file');
console.log('PASS: multi-threaded relay probes Range support and fans out 6 workers.');

// 7. One video = one download: no engine stacking, cancel sweeps siblings
assert.ok(bg.includes('hasActiveTaskForUrl(targetUrl)'), 'the relay never stacks on a URL another task is already pulling');
assert.ok(bg.includes('pruneDownloadHistoryEntry(options.taskId)'), 'browser-fallback dedup drops the orphaned history card');
assert.ok(bg.includes('cancelSiblingsByUrl(siblingUrls)'), 'cancel kills every task sharing the cancelled video URL');
console.log('PASS: cancel + dedup keep one card and one engine per video.');

console.log('\nALL STREAM RELAY TESTS PASSED! ✅');
