const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: CLEAN USER FLOW & DEAD FEATURES REMOVAL ===\n');

// 1. Verify popup.html has exactly ONE Download Manager entry point
const popupHtml = fs.readFileSync('popup/popup.html', 'utf8');
assert.ok(popupHtml.includes('id="btn-footer-manager"'), 'Must have single primary footer manager button');
assert.ok(!popupHtml.includes('id="btn-header-manager"'), 'Must not have redundant card button');
assert.ok(!popupHtml.includes('id="btn-open-manager"'), 'Must not have redundant header button');

// Count manager triggers
const managerButtonMatches = (popupHtml.match(/Mở trang quản lý/gi) || []).length;
assert.strictEqual(managerButtonMatches, 1, 'There must be exactly ONE text occurrence for opening Download Manager');
console.log('✓ 1. popup.html has exactly 1 clean Download Manager button with zero duplicates.');

// 2. Verify on-page toolbar dead features (PiP & Light switch) are hidden
const contentCss = fs.readFileSync('css/content-script.css', 'utf8');
assert.ok(contentCss.includes('#open-pip'), 'content-script.css must target #open-pip');
assert.ok(contentCss.includes('#switch-light'), 'content-script.css must target #switch-light');
assert.ok(contentCss.includes('#open-mobile'), 'content-script.css must target #open-mobile');
assert.ok(contentCss.includes('display: none !important;'), 'content-script.css must hide dead features with display: none !important');
console.log('✓ 2. content-script.css completely hides dead on-page buttons (#open-pip, #switch-light, #open-mobile).');

// 3. Verify content-script.js defaults detach_enabled to false
const contentJs = fs.readFileSync('content-script.js', 'utf8');
assert.ok(contentJs.includes('detach_enabled:!1'), 'content-script.js must default detach_enabled to false');
console.log('✓ 3. content-script.js defaults detach_enabled to false (disabling PiP templates).');

// 4. Verify downloads.html Settings modal has no dead PiP setting
const dlHtml = fs.readFileSync('downloads/downloads.html', 'utf8');
assert.ok(!dlHtml.includes('setting-detach-button'), 'downloads.html must not contain dead PiP setting');
assert.ok(!dlHtml.includes('Picture-in-Picture'), 'downloads.html must not mention Picture-in-Picture in settings');
console.log('✓ 4. downloads.html Settings modal cleanly removes dead PiP setting.');

// 5. Verify downloads.js safely handles absence of settingDetachButton
const dlJs = fs.readFileSync('downloads/downloads.js', 'utf8');
assert.ok(dlJs.includes('if (settingDetachButton)'), 'downloads.js must guard settingDetachButton safely');
console.log('✓ 5. downloads.js gracefully handles settingDetachButton absence.');

console.log('\nAll Clean User Flow & Dead Features tests passed successfully! 🚀\n');
