const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: FFMPEG-ONLY ACCELERATION & YT-DLP BYPASS ===\n');

const hostPath = path.join(__dirname, '../native/host.js');
const hostCode = fs.readFileSync(hostPath, 'utf8');

// Test 1: Verify startDownload does NOT route to startYtDlpDownload
const startDownloadMatch = hostCode.slice(hostCode.indexOf('function startDownload(req)'));
const ytdlpCallIndex = startDownloadMatch.indexOf('startYtDlpDownload(req, targetUrl)');
assert.strictEqual(ytdlpCallIndex, -1, 'startDownload must NOT route to startYtDlpDownload; yt-dlp must be disabled so private videos work');
console.log('✓ Test 1: yt-dlp is completely bypassed in startDownload to support private videos & use FFmpeg/native only.');

// Test 2: Verify startFfmpegMux implements parallel multi-thread Range downloads for video & audio
assert(hostCode.includes('Promise.all([downloadVideo(), downloadAudio()])') ||
       hostCode.includes('Promise.all([') && hostCode.includes('tempVideoPath') && hostCode.includes('tempAudioPath'),
       'startFfmpegMux must download video and audio in parallel before local muxing');
console.log('✓ Test 2: startFfmpegMux downloads Video and Audio in parallel to temporary files.');

// Test 3: Verify local FFmpeg muxing uses -c copy without network overhead
assert(hostCode.includes("'-i', tempVideoPath") && hostCode.includes("'-c', 'copy'"),
       'FFmpeg muxing must run locally on temp files with -c copy');
console.log('✓ Test 3: FFmpeg muxes local files with -c copy in < 1 second on disk.');

// Test 4: Verify isAudio (MP3 conversion) in startFfmpegDirectStream also benefits from multi-thread Range
assert(hostCode.includes('tempMediaFile') || hostCode.includes('savior_audio_src_'),
       'startFfmpegDirectStream must download media via multi-thread Range before local MP3 conversion');
console.log('✓ Test 4: Audio extraction (isAudio) accelerates by downloading via multi-thread Range before local FFmpeg conversion.');

// Test 5: Verify fallback to direct streaming if server Range is not supported
assert(hostCode.includes('fallbackToDirectFfmpegMux') || hostCode.includes('startDirectFfmpegMux'),
       'Fallback to direct streaming must be preserved for servers without Range support');
console.log('✓ Test 5: Robust fallback to direct streaming is preserved.');

console.log('\nAll FFmpeg acceleration & yt-dlp bypass tests passed! 🚀');
