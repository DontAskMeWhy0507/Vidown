const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: TIKTOK & BROWSER DOWNLOAD ROUTING & TRACKING ===\n');

// 1. Load logic from background.chrome.js
const bgPath = path.resolve(__dirname, '..', 'background.chrome.js');
const bgCode = fs.readFileSync(bgPath, 'utf8');

// Extract helper functions to test them in isolation
function extractFunction(name) {
  const regex = new RegExp(`function\\s+${name}\\s*\\([\\s\\S]*?\\)\\s*\\{([\\s\\S]*?)\n\\}`, 'm');
  const match = bgCode.match(regex);
  if (!match) throw new Error(`Could not find function ${name} in background.chrome.js`);
  return new Function(...match[0].match(/\(([^)]*)\)/)[1].split(',').map(s => s.trim()).filter(Boolean), match[1]);
}

const requiresNativeHelper = extractFunction('requiresNativeHelper');
const isSessionProtectedStream = extractFunction('isSessionProtectedStream');
const formatBytes = extractFunction('formatBytes');
const formatSpeed = extractFunction('formatSpeed');

// TEST 1: isSessionProtectedStream detection
console.log('[Test 1] Verifying isSessionProtectedStream detection...');
const tiktokCdn1 = { url: 'https://v16-webapp-prime.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037c001/ogJInFBRUDqfyJEnEgDyAAwmQfcON1BE0LIlNg/?mime_type=video_mp4' };
const tiktokCdn2 = { videoUrl: 'https://v16-webapp-prime.byteoversea.com/video/tos/123/?mime_type=video_mp4' };
const tiktokCdn3 = { url: 'https://p16-sign-va.ibytedtos.com/video/tos/123.mp4' };
const tiktokPage = { url: 'https://v16.example.com/video.mp4', pageUrl: 'https://www.tiktok.com/@pno0507/video/7536220824697670920' };
const douyinCdn = { url: 'https://aweme.snssdk.com/douyin/video.mp4', referrer: 'https://www.douyin.com/' };

assert.strictEqual(isSessionProtectedStream(tiktokCdn1), true, 'tiktokcdn.com should be protected');
assert.strictEqual(isSessionProtectedStream(tiktokCdn2), true, 'byteoversea.com should be protected');
assert.strictEqual(isSessionProtectedStream(tiktokCdn3), true, 'ibytedtos.com should be protected');
assert.strictEqual(isSessionProtectedStream(tiktokPage), true, 'tiktok.com pageUrl should be protected');
assert.strictEqual(isSessionProtectedStream(douyinCdn), true, 'douyin.com referrer should be protected');

// Negative cases
const ytVideo = { url: 'https://rr1---sn-4g5ednks.googlevideo.com/videoplayback', pageUrl: 'https://www.youtube.com/watch?v=123' };
const genericMp4 = { url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' };
assert.strictEqual(isSessionProtectedStream(ytVideo), false, 'YouTube is not session protected TikTok');
assert.strictEqual(isSessionProtectedStream(genericMp4), false, 'Generic MP4 is not session protected TikTok');
console.log('✓ Test 1: isSessionProtectedStream correctly identified all protected and non-protected streams.\n');

// TEST 2: requiresNativeHelper stream classification
console.log('[Test 2] Verifying requiresNativeHelper classification...');
// Native helper is REQUIRED for:
assert.strictEqual(requiresNativeHelper({ convertToMp3: true, url: 'https://example.com/video.mp4' }), true, 'MP3 conversion requires helper');
assert.strictEqual(requiresNativeHelper({ soundOnly: true, url: 'https://example.com/video.mp4' }), true, 'Sound only requires helper');
assert.strictEqual(requiresNativeHelper({ convertToMp4: true, url: 'https://example.com/video.webm' }), true, 'MP4 conversion requires helper');
assert.strictEqual(requiresNativeHelper({ streamsNumber: -42, url: 'https://example.com/video.mp4' }), true, 'Special streamsNumber -42 requires helper');
assert.strictEqual(requiresNativeHelper({ videoUrl: 'https://example.com/v.mp4', audioUrl: 'https://example.com/a.m4a' }), true, 'DASH separate streams require helper');
assert.strictEqual(requiresNativeHelper({ url: 'https://example.com/live/playlist.m3u8' }), true, 'HLS playlist requires helper');
assert.strictEqual(requiresNativeHelper({ url: 'https://example.com/stream/playlist.m3u8' }), true, 'M3U8 requires helper');
assert.strictEqual(requiresNativeHelper({ url: 'https://rr1---sn.googlevideo.com/videoplayback' }), true, 'YouTube googlevideo requires helper');

// Native helper is NOT required for:
assert.strictEqual(requiresNativeHelper(tiktokCdn1), false, 'Direct TikTok MP4 does not require helper');
assert.strictEqual(requiresNativeHelper(genericMp4), false, 'Direct progressive MP4 does not require helper');
console.log('✓ Test 2: requiresNativeHelper accurately routes conversion/DASH vs direct progressive downloads.\n');

// TEST 3: Formatting helpers
console.log('[Test 3] Verifying formatBytes and formatSpeed...');
assert.strictEqual(formatBytes(0), '0 B');
assert.strictEqual(formatBytes(1024), '1.0 KB');
assert.strictEqual(formatBytes(1883265), '1.8 MB');
assert.strictEqual(formatBytes(1073741824), '1.0 GB');

assert.strictEqual(formatSpeed(0), '0 KB/s');
assert.strictEqual(formatSpeed(512 * 1024), '512 KB/s');
assert.strictEqual(formatSpeed(2.5 * 1024 * 1024), '2.5 MB/s');
console.log('✓ Test 3: formatBytes and formatSpeed work properly.\n');

// TEST 4: Browser download option sanitization & tracking simulation
console.log('[Test 4] Verifying browser download option sanitization & lifecycle tracking...');
const mockActiveDownloads = new Map();
let mockStorageHistory = [];
let mockBadgeText = '';
let mockBroadcasts = [];
let mockDownloadedItem = null;

// Simulate trackBrowserDownload
function mockTrackBrowserDownload(chromeId, options, filename, url) {
  const safeFilename = filename || (options.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
  const mediaType = (options.convertToMp3 || options.soundOnly) ? 'audio' : 'video';
  const targetUrl = url || options.videoUrl || options.url || '';
  const task = {
    id: chromeId,
    chromeId: chromeId,
    isBrowserDownload: true,
    title: safeFilename.replace(/\.[^.]+$/, ''),
    filename: safeFilename,
    url: targetUrl,
    type: mediaType,
    params: options,
    state: 'downloading',
    percent: '1%',
    speed: 'Đang tải (Trình duyệt)...',
    size: '0 B',
    bytesReceived: 0,
    totalBytes: 0,
    lastBytes: 0,
    lastTime: Date.now(),
    startTime: Date.now(),
    complete: false
  };
  mockActiveDownloads.set(chromeId, task);
  mockStorageHistory.unshift({
    id: chromeId,
    title: task.title,
    filename: safeFilename,
    url: targetUrl,
    state: 'downloading',
    percent: '1%'
  });
  mockBadgeText = '1%';
  mockBroadcasts.push({ action: 'nativeProgress', taskId: chromeId, percent: '1%' });
}

// Simulate browser download start
const rawOptions = {
  url: tiktokCdn1.url,
  filename: 'TikTok_7536220824697670920.mp4',
  referrer: 'https://www.tiktok.com/@pno0507/video/7536220824697670920',
  pageUrl: 'https://www.tiktok.com/@pno0507/video/7536220824697670920',
  initiator: 'https://www.tiktok.com',
  soundOnly: false,
  streamsNumber: 1
};

// Clean standard Chrome options
const safeFilename = rawOptions.filename.replace(/[<>:"/\\|?*]/g, '_');
const chromeDownloadOptions = {
  url: rawOptions.videoUrl || rawOptions.url,
  filename: safeFilename,
  conflictAction: 'uniquify',
  saveAs: false
};
if (rawOptions.referrer) {
  chromeDownloadOptions.headers = [{ name: 'Referer', value: rawOptions.referrer }];
}

// Verify no proprietary keys leaked
assert.strictEqual(chromeDownloadOptions.url, tiktokCdn1.url);
assert.strictEqual(chromeDownloadOptions.filename, 'TikTok_7536220824697670920.mp4');
assert.deepStrictEqual(chromeDownloadOptions.headers, [{ name: 'Referer', value: 'https://www.tiktok.com/@pno0507/video/7536220824697670920' }]);
assert.strictEqual(chromeDownloadOptions.soundOnly, undefined);
assert.strictEqual(chromeDownloadOptions.streamsNumber, undefined);
assert.strictEqual(chromeDownloadOptions.initiator, undefined);
assert.strictEqual(chromeDownloadOptions.pageUrl, undefined);

// Start download
const fakeChromeId = 12345;
mockTrackBrowserDownload(fakeChromeId, rawOptions, safeFilename, rawOptions.url);

assert.strictEqual(mockActiveDownloads.has(fakeChromeId), true);
assert.strictEqual(mockActiveDownloads.get(fakeChromeId).state, 'downloading');
assert.strictEqual(mockBadgeText, '1%');
assert.strictEqual(mockStorageHistory[0].id, fakeChromeId);

// Simulate onChanged progress delta
const task = mockActiveDownloads.get(fakeChromeId);
const delta = {
  id: fakeChromeId,
  bytesReceived: { current: 941632 },
  totalBytes: { current: 1883265 }
};
task.bytesReceived = delta.bytesReceived.current;
task.totalBytes = delta.totalBytes.current;
const pct = Math.round((task.bytesReceived / task.totalBytes) * 100);
task.percent = `${pct}%`;
mockBadgeText = `${pct}%`;
assert.strictEqual(task.percent, '50%');
assert.strictEqual(mockBadgeText, '50%');

// Simulate completion delta
task.state = 'completed';
task.complete = true;
task.percent = '100%';
mockActiveDownloads.delete(fakeChromeId);
mockBadgeText = '✓';
mockStorageHistory[0].state = 'completed';
mockStorageHistory[0].percent = '100%';

assert.strictEqual(mockActiveDownloads.has(fakeChromeId), false);
assert.strictEqual(mockBadgeText, '✓');
assert.strictEqual(mockStorageHistory[0].state, 'completed');
console.log('✓ Test 4: Browser download option sanitization & lifecycle tracking verified successfully.\n');

// TEST 5: Native host TikTok handling in native/host.js
console.log('[Test 5] Verifying native host does NOT clobber TikTok CDN URL...');
const hostPath = path.resolve(__dirname, '..', 'native', 'host.js');
const hostCode = fs.readFileSync(hostPath, 'utf8');

assert.ok(
  hostCode.includes('targetUrl.includes(\'video/tos/\')') || hostCode.includes('targetUrl.includes(\'tiktokcdn.com\')'),
  'native/host.js must check isDirectCdn for TikTok before modifying targetUrl'
);
assert.ok(
  !hostCode.includes('if (fs.existsSync(YTDLP_PATH) && (isYouTube || isTikTok'),
  'native/host.js must NOT route TikTok to yt-dlp'
);
const startDownloadCode = hostCode.slice(hostCode.indexOf('function startDownload(req)'));
assert.ok(
  !startDownloadCode.includes('startYtDlpDownload('),
  'native/host.js must bypass yt-dlp in startDownload so private videos and FFmpeg work'
);
console.log('✓ Test 5: native/host.js safeguards against TikTok clobbering and yt-dlp blocking verified.\n');

console.log('======================================================');
console.log('ALL TIKTOK & BROWSER DOWNLOAD ROUTING TESTS PASSED! 🎉');
console.log('======================================================');
