/**
 * Test Suite: Download Manager Permanent Right Settings Sidebar
 * 
 * Verifies that:
 * 1. downloads.html embeds settings as a permanent sidebar on the right inside workspace.
 * 2. downloads.css docks the settings panel to the right side with flexbox layout.
 * 3. downloads.js loads settings immediately on start and auto-saves changes.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- Testing Download Manager Right Settings Sidebar ---');

// 1. Check downloads.html structure
const htmlPath = path.join(__dirname, '..', 'downloads', 'downloads.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

assert.ok(htmlContent.includes('class="settings-sidebar"'), 'downloads.html must define settings-sidebar');
assert.ok(htmlContent.includes('id="settings-modal"'), 'downloads.html must preserve id="settings-modal"');
assert.ok(!htmlContent.includes('class="modal-backdrop"'), 'downloads.html should not treat settings as an overlay backdrop');
assert.ok(htmlContent.includes('id="setting-onpage-buttons"'), 'downloads.html must contain setting-onpage-buttons');
// 1-Click and 3GP settings were removed (desktop product decision)
assert.ok(!htmlContent.includes('id="setting-one-click"'), '1-Click setting must be removed');
assert.ok(!htmlContent.includes('id="setting-3gp"'), '3GP setting must be removed');
// default-quality, remember-quality, 1-Click, and 3GP settings removed per product decisions
assert.ok(!htmlContent.includes('id="setting-preferred-quality"'), 'default-quality setting must be removed');
assert.ok(!htmlContent.includes('id="setting-remember-quality"'), 'remember-quality setting must be removed');

console.log('✓ Test 1 Passed: downloads.html has permanent settings sidebar with all controls.');

// 2. Check downloads.css styling
const cssPath = path.join(__dirname, '..', 'downloads', 'downloads.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert.ok(cssContent.includes('.settings-sidebar'), 'downloads.css must style .settings-sidebar');
assert.ok(cssContent.includes('border-left:'), 'downloads.css must border the sidebar on the left');
assert.ok(cssContent.includes('display: flex !important'), 'downloads.css must ensure settings sidebar is displayed permanently');

console.log('✓ Test 2 Passed: downloads.css docks settings sidebar on the right permanently.');

// 3. Check downloads.js logic
const jsPath = path.join(__dirname, '..', 'downloads', 'downloads.js');
const jsContent = fs.readFileSync(jsPath, 'utf8');

assert.ok(jsContent.includes('loadSettingsIntoUI'), 'downloads.js must implement loadSettingsIntoUI');
assert.ok(jsContent.includes('saveSettings'), 'downloads.js must implement saveSettings');
assert.ok(jsContent.includes('loadSettingsIntoUI()'), 'downloads.js must invoke loadSettingsIntoUI() immediately on start');
// The settings panel is permanent: no modal open/close flow anymore.
assert.ok(!jsContent.includes('openSettingsModal'), 'the modal open flow must be removed (panel is always visible)');
assert.ok(jsContent.includes('loadSettingsIntoUI();'), 'settings load once on start');
assert.ok(!jsContent.includes('closeSettingsModal'), 'no close flow — panel is permanent');

console.log('✓ Test 3 Passed: downloads.js loads settings immediately and auto-saves.');

console.log('ALL RIGHT SETTINGS SIDEBAR TESTS PASSED! 🎉');
