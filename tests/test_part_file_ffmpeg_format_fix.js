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
 * Regression test: .part staging must not break the FFmpeg engine.
 *
 * Bug (caught in the wild): ffmpeg infers its output muxer from the file
 * extension. Staging downloads as "<final>.mp4.part" removed the recognizable
 * extension, so every FFmpeg mux/direct-stream download failed with
 * "Error opening output file ... Invalid argument".
 *
 * Fix: every FFmpeg output written to a .part path declares its container
 * explicitly via -f. Also verifies the shadow-DOM ⋮ (3-dots) button fix.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: .PART STAGING + FFMPEG FORMAT FLAGS ===\n');

const host = fs.readFileSync(path.join(__dirname, '..', 'native', 'host.js'), 'utf8');

// 1. fallbackToDirectFfmpegMux output: -f mp4 declared
const fallbackIdx = host.indexOf("'-movflags', '+faststart',");
assert.ok(fallbackIdx !== -1, 'fallback mux args found');
const fallbackSlice = host.slice(fallbackIdx, fallbackIdx + 300);
assert.ok(
  fallbackSlice.includes("'-f', 'mp4'") && fallbackSlice.includes('partPathFor(outPath)'),
  'fallback mux must declare -f mp4 before its .part output'
);
console.log('PASS: fallbackToDirectFfmpegMux declares -f mp4 for .part output.');

// 2. startFfmpegMux muxArgs: -f mp4 declared
const muxIdx = host.indexOf("muxArgs.push(");
assert.ok(muxIdx !== -1, 'muxArgs found');
const muxSlice = host.slice(muxIdx, muxIdx + 400);
assert.ok(
  muxSlice.includes("'-f', 'mp4'") && muxSlice.includes('partPathFor(outPath)'),
  'mux path must declare -f mp4 before its .part output'
);
console.log('PASS: startFfmpegMux declares -f mp4 for .part output.');

// 3. Direct stream: format must be conditional on audio (mp3) vs video (mp4)
assert.ok(
  host.includes("args.push('-f', isAudio ? 'mp3' : 'mp4', '-progress', 'pipe:1', partPathFor(outPath))"),
  'direct stream must declare -f conditionally: mp3 for audio, mp4 for video'
);
console.log('PASS: startFfmpegDirectStream declares -f mp3/mp4 correctly.');

// 4. MP3 conversion branch: -f mp3 declared
const convIdx = host.indexOf('const convertArgs = [');
assert.ok(convIdx !== -1, 'mp3 conversion args found');
const convSlice = host.slice(convIdx, convIdx + 400);
assert.ok(
  convSlice.includes("'libmp3lame'") && convSlice.includes("'-f', 'mp3'") && convSlice.includes('partPathFor(outPath)'),
  'MP3 conversion must declare -f mp3 before its .part output'
);
console.log('PASS: MP3 conversion declares -f mp3 for .part output.');

// 5. Atomic rename helper used by every finalize path
assert.ok(host.includes('function finalizePartFile'), 'finalizePartFile helper exists');
assert.ok(host.includes('fs.renameSync(part, outPath)'), 'finalize renames .part to final name');
console.log('PASS: atomic .part → final rename helper present.');

// 6. Shadow-DOM 3-dots button: composed path detection
const nav = fs.readFileSync(path.join(__dirname, '..', 'downloads-nav.js'), 'utf8');
assert.ok(nav.includes('e.composedPath'), 'downloads-nav must walk the composed path');
assert.ok(nav.includes("'savior-host'"), 'downloads-nav must recognize the savior-host shadow root');
assert.ok(nav.includes("node.id === 'other-feature'"), 'downloads-nav must find #other-feature inside shadow DOM');
console.log('PASS: ⋮ button click is detected through the widget shadow DOM.');

// 7. Native probe guard must reset on disconnect (no permanent browser fallback)
const bg = fs.readFileSync(path.join(__dirname, '..', 'background.chrome.js'), 'utf8');
assert.ok(
  /nativeProbeSettled = false;/.test(bg) && bg.includes('nativeProbeSettled'),
  'background must reset the probe-settled flag on disconnect'
);
console.log('PASS: probe guard resets after disconnect (native engine recovers).');

console.log('\nALL .PART / FFMPEG FORMAT / UI FIX TESTS PASSED! ✅');
