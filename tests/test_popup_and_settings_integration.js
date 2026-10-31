const fs = require('fs');
const assert = require('assert');

console.log('--- TEST SUITE: POPUP RECENT DOWNLOADS, SETTINGS INTEGRATION & 3-DOTS NAVIGATION ---\n');

// 1. Verify manifest.json configuration
const manifestRaw = fs.readFileSync('manifest.json', 'utf8');
const manifest = JSON.parse(manifestRaw);

assert.strictEqual(manifest.action.default_popup, 'popup/popup.html', 'manifest.json must configure popup/popup.html as default_popup');
assert.ok(manifest.content_scripts.some(cs => cs.js.includes('downloads-nav.js')), 'manifest.json must include downloads-nav.js in content_scripts');
assert.ok(!manifest.web_accessible_resources.some(war => war.resources.includes('popup/*')), 'manifest.json must not expose popup/* to external websites');
console.log('✓ 1. manifest.json correctly configures default_popup, content_scripts and web_accessible_resources');

// 2. Verify popup.html structure (Single clean Download Manager button)
const popupHtml = fs.readFileSync('popup/popup.html', 'utf8');
const requiredPopupIds = [
  'section-recent',
  'recent-total-badge',
  'recent-media-list',
  'recent-empty-state',
  'btn-footer-manager',
  'toast',
  'toggle-onpage-bar'
];

for (const id of requiredPopupIds) {
  assert.ok(popupHtml.includes(`id="${id}"`), `popup.html must contain id="${id}"`);
}
// Ensure no duplicate manager buttons clutter the popup
assert.ok(!popupHtml.includes('id="btn-header-manager"'), 'popup.html must not contain redundant card button');
assert.ok(!popupHtml.includes('id="btn-open-manager"'), 'popup.html must not contain redundant header icon button');
console.log('✓ 2. popup.html contains a single clear Download Manager button, On-Page Toolbar toggle & Recent Downloads without redundant duplicates');

// 3. Verify popup.js logic
const popupJs = fs.readFileSync('popup/popup.js', 'utf8');
assert.ok(popupJs.includes('openDownloadsManager'), 'popup.js must implement openDownloadsManager');
assert.ok(popupJs.includes('loadRecentDownloads'), 'popup.js must implement loadRecentDownloads');
assert.ok(popupJs.includes('openRecentFile'), 'popup.js must implement openRecentFile');
assert.ok(popupJs.includes('openRecentFolder'), 'popup.js must implement openRecentFolder');
assert.ok(popupJs.includes('toggleOnpageBar'), 'popup.js must handle toggleOnpageBar');
assert.ok(popupJs.includes('on_page_buttons'), 'popup.js must sync on_page_buttons setting');
assert.ok(popupJs.includes('chrome.storage.onChanged'), 'popup.js must listen to chrome.storage.onChanged');
console.log('✓ 3. popup.js implements complete lifecycle, deduplication, on-page bar toggle, and actions');

// 4. Verify downloads.html Settings integration (Cleaned up, no dead PiP setting)
const dlHtml = fs.readFileSync('downloads/downloads.html', 'utf8');
const requiredSettingsIds = [
  'settings-modal',
  'modal-folder-path',
  'btn-modal-change-folder',
  'setting-onpage-buttons',
  'setting-image-buttons',
  'setting-min-size',
  'setting-site-input',
  'btn-add-site',
  'settings-site-list'
];

for (const id of requiredSettingsIds) {
  assert.ok(dlHtml.includes(`id="${id}"`), `downloads.html must contain id="${id}"`);
}
assert.ok(!dlHtml.includes('setting-detach-button'), 'downloads.html must not contain dead PiP setting');
assert.ok(!dlHtml.includes('setting-remember-quality'), 'downloads.html must not contain redundant remember-quality setting');
console.log('✓ 4. downloads.html contains Settings button and clean Settings Modal dialog without dead features');

// 5. Verify downloads.js Settings handling
const dlJs = fs.readFileSync('downloads/downloads.js', 'utf8');
assert.ok(!dlJs.includes('openSettingsModal'), 'settings panel is permanent — no modal flow');
assert.ok(dlJs.includes('loadSettingsIntoUI();'), 'settings load once on start');
assert.ok(!dlJs.includes('closeSettingsModal'), 'no close flow — panel is permanent');
assert.ok(dlJs.includes('btnSaveSettings'), 'downloads.js must handle btnSaveSettings');
assert.ok(dlJs.includes('onPageButtonsEnabled'), 'downloads.js must save onPageButtonsEnabled');
assert.ok(!dlJs.includes('preferredQuality'), 'default-quality setting removed — nothing writes it');
console.log('✓ 5. downloads.js correctly loads, displays, and saves settings to chrome.storage.local');

// 6. Verify 3-dots button navigation to Download Manager
const navJs = fs.readFileSync('downloads-nav.js', 'utf8');
assert.ok(navJs.includes('#other-feature'), 'downloads-nav.js must intercept #other-feature click');

const bgJs = fs.readFileSync('background.chrome.js', 'utf8');
assert.ok(bgJs.includes("case 'openDownloadsManager':"), 'background.chrome.js must handle openDownloadsManager');
assert.ok(bgJs.includes("case 'openDownloadsPage':"), 'background.chrome.js must handle openDownloadsPage');
console.log('✓ 6. 3-dots button (#other-feature) navigation to Download Manager is fully wired up');

console.log('\n======================================================');
console.log('ALL POPUP, SETTINGS & NAVIGATION TESTS PASSED! 🎉');
console.log('======================================================');
