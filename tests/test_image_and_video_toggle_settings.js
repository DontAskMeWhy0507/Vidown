const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: INDEPENDENT VIDEO & IMAGE FLOATING BAR SETTINGS ===\n');

// 1. Verify downloads.html has both switches
const downloadsHtml = fs.readFileSync('downloads/downloads.html', 'utf8');
assert.ok(downloadsHtml.includes('id="setting-onpage-buttons"'), 'downloads.html must have setting-onpage-buttons');
assert.ok(downloadsHtml.includes('id="setting-image-buttons"'), 'downloads.html must have setting-image-buttons');
assert.ok(downloadsHtml.includes('Hiển thị nút tải nổi trên hình ảnh'), 'downloads.html must label image floating bar option');
console.log('✓ 1. downloads.html contains independent video and image toggle switches.');

// 2. Verify downloads.js loads, saves, and auto-saves image_download_enabled
const downloadsJs = fs.readFileSync('downloads/downloads.js', 'utf8');
assert.ok(downloadsJs.includes('settingImageButtons'), 'downloads.js must declare settingImageButtons element');
assert.ok(downloadsJs.includes("'image_download_enabled'"), 'downloads.js must load image_download_enabled');
assert.ok(downloadsJs.includes("image_download_enabled: imageEnabled"), 'downloads.js must save image_download_enabled');
assert.ok(downloadsJs.includes("settingImageButtons.addEventListener('change'"), 'downloads.js must auto-save on image setting change');
console.log('✓ 2. downloads.js loads, saves, and auto-syncs image_download_enabled.');

// 3. Verify popup.html has both toggles (Video & Ảnh)
const popupHtml = fs.readFileSync('popup/popup.html', 'utf8');
assert.ok(popupHtml.includes('id="toggle-onpage-bar"'), 'popup.html must have toggle-onpage-bar for video');
assert.ok(popupHtml.includes('id="toggle-image-bar"'), 'popup.html must have toggle-image-bar for images');
assert.ok(popupHtml.includes('header-toggles-container'), 'popup.html must organize toggles in container');
console.log('✓ 3. popup.html has dedicated quick toggles for Video and Ảnh.');

// 4. Verify popup.js binds and syncs toggle-image-bar
const popupJs = fs.readFileSync('popup/popup.js', 'utf8');
assert.ok(popupJs.includes('toggleImageBar'), 'popup.js must bind toggleImageBar');
assert.ok(popupJs.includes('image_download_enabled: isEnabled'), 'popup.js must persist image_download_enabled on change');
assert.ok(popupJs.includes('changes.image_download_enabled'), 'popup.js must listen for image_download_enabled storage changes');
console.log('✓ 4. popup.js synchronizes image toggle state bidirectionally with storage.');

// 5. Verify content-script.js supports default and runtime dynamic toggle for images
const contentScript = fs.readFileSync('content-script.js', 'utf8');
assert.ok(/image_download_enabled\s*:\s*(!0|true)/.test(contentScript), 'content-script.js must default image_download_enabled to true');
assert.ok(/[a-zA-Z_$][\w$]*\.image_download_enabled\s*\|\|\s*[a-zA-Z_$][\w$]*\.imageDownloadEnabled/.test(contentScript), 'content-script.js must dynamically respond to image_download_enabled changes');
console.log('✓ 5. content-script.js default and dynamic runtime observer for images verified.');

console.log('\n================================================================');
console.log('ALL INDEPENDENT VIDEO & IMAGE SETTINGS TESTS PASSED! 🎉');
console.log('================================================================\n');
