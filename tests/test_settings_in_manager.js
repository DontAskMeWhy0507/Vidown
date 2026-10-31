/**
 * Regression test: ALL settings live in the Download Manager's settings
 * sidebar (the standalone options page was merged in and deleted).
 * The manager must handle the full legacy storage contract so background /
 * content script / widget keep working against the same keys.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: SETTINGS MERGED INTO DOWNLOAD MANAGER ===\n');

const ROOT = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const html = read('downloads/downloads.html');
const js = read('downloads/downloads.js');

// 1. The standalone options page is gone; nothing references it
assert.strictEqual(fs.existsSync(path.join(ROOT, 'options.html')), false, 'options.html must be deleted');
assert.strictEqual(fs.existsSync(path.join(ROOT, 'options-page.js')), false, 'options-page.js must be deleted');
const manifest = JSON.parse(read('manifest.json'));
assert.ok(!manifest.options_page, 'manifest must not declare an options page');
console.log('PASS: standalone options page fully removed.');

// 2. Legacy OPEN_SETTINGS routes to the manager (no lastError noise)
const bg = read('background.chrome.js');
assert.ok(bg.includes('openOrFocusDownloadsManager') && /openOptionsPage\s*=\s*function/.test(bg),
  'chrome.runtime.openOptionsPage must be patched to open the manager');
console.log('PASS: legacy "go to settings" opens the Download Manager.');

// 3. The manager sidebar covers the full settings contract
for (const id of ['setting-onpage-buttons', 'setting-image-buttons',
  'setting-min-size', 'setting-site-input', 'btn-add-site', 'settings-site-list']) {
  assert.ok(html.includes(`id="${id}"`), 'settings sidebar must contain #' + id);
}
// Removed per product decisions: 1-Click toggle, remember-quality, and 3GP (desktop product),
// the ⚙️ open button (panel is a permanent sidebar) and the Save button
// (every change auto-saves).
for (const gone of ['setting-one-click', 'setting-3gp', 'setting-remember-quality', 'btn-settings', 'btn-save-settings']) {
  assert.ok(!html.includes(`id="${gone}"`), '#' + gone + ' must be removed');
}
console.log('PASS: sidebar contains every setting control (and no removed ones).');

// 4. Storage keys still written (legacy contract for widget/background)
for (const key of ['on_page_buttons', 'image_download_enabled', 'one_click',
  'prefer_last_quality', 'show_3gp_ext', 'min_stream_size',
  'disable_savior_sites', 'detach_enabled']) {
  assert.ok(js.includes(`'${key}'`) || js.includes(key + ':') || js.includes('.' + key) || js.includes(key + ' ='),
    'downloads.js must handle storage key: ' + key);
}
console.log('PASS: full storage contract preserved.');

// 5. The default-quality setting was removed entirely (product decision):
// the widget's own quality list plus "remember last quality" handle quality.
assert.ok(!html.includes('id="setting-preferred-quality"'), 'default-quality control must be gone');
assert.ok(!js.includes('qualityLabelToLevel'), 'the label→level mapping helper must be gone');
console.log('PASS: default-quality setting fully removed.');

// 6. Site list add/delete with validation
assert.ok(js.includes('disable_savior_sites'), 'site list uses the legacy key');
assert.ok(/list\.includes\(raw\)/.test(js), 'duplicate domains rejected');
assert.ok(/list\.filter\(\(d\) => d !== domain\)/.test(js), 'delete removes the domain');
console.log('PASS: site list add/delete wired with validation.');

console.log('\nALL SETTINGS-IN-MANAGER TESTS PASSED! ✅');
