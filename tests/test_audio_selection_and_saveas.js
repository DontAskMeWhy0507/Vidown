const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: AUDIO TRACK SELECTION & SAVE AS SUPPRESSION ===\n');

// Test 1: Verify host.js prioritizes startFfmpegMux when videoUrl and audioUrl are separate
const hostCode = fs.readFileSync(path.join(__dirname, '../native/host.js'), 'utf8');

const muxIndex = hostCode.indexOf("req.videoUrl && req.audioUrl && req.videoUrl !== req.audioUrl");
const ytdlpIndex = hostCode.indexOf("fs.existsSync(YTDLP_PATH) && isYouTube");

assert(muxIndex !== -1, 'Mux condition must exist in host.js');
assert(ytdlpIndex !== -1, 'YtDlp condition must exist in host.js');
assert(muxIndex < ytdlpIndex, 'startFfmpegMux MUST appear before startYtDlpDownload in startDownload to preserve custom audio selection');
console.log('✓ Test 1: host.js correctly prioritizes custom audio muxing (startFfmpegMux) ahead of yt-dlp.');

// Test 2: Verify saveAs is explicitly false in background.chrome.js
const bgCode = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
assert(bgCode.includes('saveAs: false'), 'saveAs must be explicitly false in background.chrome.js');
console.log('✓ Test 2: background.chrome.js explicitly sets saveAs: false to eliminate Save As prompt.');

// Test 3: Verify nativeHelperAvailable routing preference in background.chrome.js
const downloadFunc = bgCode.slice(bgCode.indexOf('chrome.downloads.download = function'));
const routingIndex = downloadFunc.indexOf('if (nativeHelperAvailable) {');
const fallbackIndex = downloadFunc.indexOf('startBrowserDownload(options, callback);');
assert(routingIndex !== -1 && fallbackIndex !== -1 && routingIndex < fallbackIndex, 'Native helper must be attempted first in chrome.downloads.download');
console.log('✓ Test 3: background.chrome.js routes all downloads to Native Helper first to download directly without dialogs.');

// Test 4: Verify openFile candidate matching in host.js
assert(hostCode.includes('startsWith(baseNameWithoutExt)'), 'host.js openFile must match base name prefix (e.g. filename (1).mp4)');
console.log('✓ Test 4: host.js openFile handles duplicated/numbered file names gracefully.');

console.log('\n================================================================');
console.log('ALL AUDIO SELECTION & SAVE AS SUPPRESSION TESTS PASSED! 🎉');
console.log('================================================================');
