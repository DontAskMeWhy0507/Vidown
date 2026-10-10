const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TDD: TIKTOK & COCCOC SESSION DOWNLOAD OPTION SANITIZATION ===\n');

// Valid Chrome DownloadOptions fields per Chromium specification
const VALID_CHROME_DOWNLOAD_OPTIONS = new Set([
  'url',
  'filename',
  'conflictAction',
  'saveAs',
  'method',
  'headers',
  'body'
]);

// Mock Cốc Cốc proprietary options passed by Savior on TikTok/Douyin
const rawTikTokOptions = {
  url: 'https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/test.mp4?expire=123',
  videoUrl: 'https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/test.mp4?expire=123',
  audioUrl: '',
  pageUrl: 'https://www.tiktok.com/@valorant.vietnam/video/1234567890',
  referrer: 'https://www.tiktok.com/',
  title: 'Bất ngờ cuối video @valorant.vietnam',
  filename: 'Bất ngờ cuối video @valorant.vietnam.mp4',
  taskId: 900015,
  quality: 'best',
  soundOnly: false,
  isYouTubeDash: false,
  duration: 45,
  size: 5242880
};

// Inspect startCocCocSessionDownload implementation in background.chrome.js
const bgCode = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');

// Extract nativeOptions construction inside startCocCocSessionDownload
const fnMatch = bgCode.match(/function startCocCocSessionDownload\([\s\S]*?\{([\s\S]*?)_origDownload\(([\s\S]*?),/);
assert(fnMatch, 'startCocCocSessionDownload and _origDownload call must exist in background.chrome.js');

const fnBody = fnMatch[1];
const passedOptionsVar = fnMatch[2].trim();

// Check if raw options are spread without sanitizing unknown properties
const hasUnsanitizedSpread = fnBody.includes('...options') || fnBody.includes('nativeOptions = {\n    ...options');

if (hasUnsanitizedSpread) {
  // Simulate what is passed to _origDownload
  const simulatedNativeOptions = {
    ...rawTikTokOptions,
    url: rawTikTokOptions.url,
    filename: 'sanitized.mp4',
    conflictAction: 'uniquify',
    saveAs: false
  };

  const invalidKeys = Object.keys(simulatedNativeOptions).filter(k => !VALID_CHROME_DOWNLOAD_OPTIONS.has(k));
  console.log('Detected unsanitized properties passed to chrome.downloads.download:', invalidKeys);
  assert.strictEqual(invalidKeys.length, 0,
    `Error in invocation of downloads.download: Unexpected properties: ${invalidKeys.join(', ')}`
  );
} else {
  console.log('✓ Code is already sanitized!');
}
