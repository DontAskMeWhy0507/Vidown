const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('Testing Brand leftovers and logic fixes...');

// 1. Verify downloads.html has no Savior brand string in descriptions
const downloadsHtml = fs.readFileSync(path.join(__dirname, '../downloads/downloads.html'), 'utf8');
assert(!downloadsHtml.includes('nút tải Savior'), 'downloads.html must not contain "nút tải Savior"');
assert(downloadsHtml.includes('VidManager download button'), 'downloads.html must contain "VidManager download button"');

// 2. Verify popup.css header branding
const popupCss = fs.readFileSync(path.join(__dirname, '../popup/popup.css'), 'utf8');
assert(!popupCss.includes('Savior Video Downloader'), 'popup.css must not contain "Savior Video Downloader"');
assert(popupCss.includes('VidManager'), 'popup.css must reference VidManager');

// 3. Verify package.json description
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
assert(!pkg.description.includes('Savior'), 'package.json description must not contain "Savior"');
assert(pkg.description.includes('VidManager'), 'package.json description must contain "VidManager"');

// 4. Verify locale messages have no lingering Savior mentions
const viMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/vi/messages.json'), 'utf8'));
const enMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/en/messages.json'), 'utf8'));
assert(!viMessages.options_dark_theme.message.includes('Savior'), 'vi options_dark_theme must not contain "Savior"');
assert(!enMessages.options_dark_theme.message.includes('Savior'), 'en options_dark_theme must not contain "Savior"');
assert(!viMessages.pip_failed_to_find.message.includes('Savior'), 'vi pip_failed_to_find must not contain "Savior"');

// 5. Verify downloads.js detach_enabled fallback defaults to false
const downloadsJs = fs.readFileSync(path.join(__dirname, '../downloads/downloads.js'), 'utf8');
assert(downloadsJs.includes('cachedDetachEnabled !== undefined ? cachedDetachEnabled : false'), 'detach_enabled fallback must default to false');

// 6. Verify downloads.js categorization helpers
assert(downloadsJs.includes('function isAudioItem'), 'downloads.js must have isAudioItem helper');
assert(downloadsJs.includes('function isVideoItem'), 'downloads.js must have isVideoItem helper');

console.log('test_audit_brand_and_logic_fixes.js PASSED!');
