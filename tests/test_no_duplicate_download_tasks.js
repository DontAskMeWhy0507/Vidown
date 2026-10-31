/**
 * Regression test: ONE user click must produce ONE download.
 *
 * Bug (observed in host_activity.log): the Cốc Cốc bundle fires a
 * "pre-resolution" download request with EMPTY videoUrl/audioUrl (just the
 * quality label, e.g. "4K UHD") ~100ms before the real request with resolved
 * URLs. startNativeDownload created a full task for the empty request →
 * ghost card stuck at 1% "Bắt đầu kết nối..." + useless error/fallback
 * roundtrip, so users saw two entries per video.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: NO DUPLICATE DOWNLOAD TASKS ===\n');

const read = (p) => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');
const bg = read('background.chrome.js');

// 1. Empty-URL guard: startNativeDownload must refuse to create a task
//    when no stream URL resolved.
const guardMarker = bg.indexOf("'[Savior] No downloadable stream URL resolved; skipping native download'");
const resolveIdx = bg.indexOf('const resolvedTarget = resolveRealStreamForDownload');
const taskCreateIdx = bg.indexOf('activeDownloads.set(fakeId, task)');
assert.ok(resolveIdx !== -1 && guardMarker > resolveIdx, 'empty-URL guard must run AFTER the stream resolver (which may fill it from sniffed streams)');
assert.ok(taskCreateIdx > guardMarker, 'no task may be created before the empty-URL guard passes');
const guardSlice = bg.slice(guardMarker - 200, guardMarker + 200);
assert.ok(guardSlice.includes('return false'),
  'guard must return false (no task, no history entry)');
console.log('PASS: empty-URL requests never create a native task.');

// 2. Ghost-card fix: when both native and fallback engines decline, the
//    history entry must be closed as error, not left "downloading".
const fbIdx = bg.indexOf('fallbackStarted = startBrowserDownload(opts)');
const closeIdx = bg.indexOf("state: 'error',\n            error: msg.error", fbIdx);
assert.ok(fbIdx !== -1, 'fallback result captured');
const afterSlice = bg.slice(fbIdx, fbIdx + 900);
assert.ok(
  afterSlice.includes('if (!fallbackStarted)') && afterSlice.includes("state: 'error'"),
  'failed fallback must mark the history entry as error (no ghost downloading card)'
);
console.log('PASS: failed fallback closes the history entry — no ghost 1% cards.');

// 2b. AUDIO dedup: the bundle fires audio-only follow-ups after DASH requests;
// the stray .m4a next to the finished .mp4 must never start.
assert.ok(bg.includes('Stream already covered by active task'), 'audio-aware duplicate guard present in startNativeDownload');
assert.ok(/tAudio === reqUrl/.test(bg), 'interceptor dedup matches audio URLs too');
assert.ok(bg.indexOf('Stream already covered by active task') < bg.indexOf('if (hasNativeJob) {'), 'duplicate guard must run BEFORE the busy-queue branch');
assert.ok(bg.includes('String(t.id) === String(downloadParams.taskId)) continue;'), 'duplicate guard must skip the request own placeholder (queue drain re-entry)');
console.log('PASS: audio-only duplicates are absorbed into the running DASH task.');

// 3. Dedup layer: a second request for an already-active URL is still ignored
assert.ok(bg.includes('Duplicate/trick download call ignored for active task'), 'interceptor dedup stays active');
console.log('PASS: duplicate URL requests are still deduplicated.');

console.log('\nALL NO-DUPLICATE-DOWNLOAD TESTS PASSED! ✅');
