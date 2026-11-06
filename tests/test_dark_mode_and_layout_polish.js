// tests/test_dark_mode_and_layout_polish.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const dlCss = fs.readFileSync(path.join(__dirname, '../downloads/downloads.css'), 'utf8');
const popupCss = fs.readFileSync(path.join(__dirname, '../popup/popup.css'), 'utf8');
const contentCss = fs.readFileSync(path.join(__dirname, '../css/content-script.css'), 'utf8');
const settingsMgr = fs.readFileSync(path.join(__dirname, '../src/background/storage/settings-manager.js'), 'utf8');
const userPrefSync = fs.readFileSync(path.join(__dirname, '../src/background/utilities/user-preference-sync.js'), 'utf8');
const dlJs = fs.readFileSync(path.join(__dirname, '../downloads/downloads.js'), 'utf8');

// 1. downloads.css uses CSS variables for workspace and titles, and targets real dark mode classes
assert.ok(!/\.workspace\s*\{[^}]*#f9fafb/.test(dlCss), '.workspace must use var(--bg-color), not hardcoded #f9fafb');
assert.ok(!/\.item-title-downloading\s*\{[^}]*#0f172a/.test(dlCss), '.item-title-downloading must use var(--text-primary)');
assert.ok(dlCss.includes('.top-nav'), 'downloads.css dark mode must style .top-nav');

// 2. popup.css supports prefers-color-scheme: dark and wraps .card-meta
assert.ok(popupCss.includes('@media (prefers-color-scheme: dark)'), 'popup.css must support dark mode');
assert.ok(/\.card-meta\s*\{[^}]*flex-wrap:\s*wrap/.test(popupCss), '.card-meta must wrap to prevent overflow');

// 3. content-script.css removes Microsoft CDN @font-face and widens .download-box
assert.ok(!contentCss.includes('c.s-microsoft.com'), 'content-script.css must not load fonts from c.s-microsoft.com');
assert.ok(!settingsMgr.includes('title="{{quality}}" title="{{i18n_quality}}"'), 'template-media must not have duplicate title attribute in settings-manager.js');
assert.ok(!userPrefSync.includes('title="{{quality}}" title="{{i18n_quality}}"'), 'template-media must not have duplicate title attribute in user-preference-sync.js');

// 4. Check layout anti-clipping rules
assert.ok(/\.download-box\s*\{[^}]*width:\s*268px/.test(contentCss), '.download-box width must be 268px');
assert.ok(dlJs.includes('titleTxt.title = item.title || \'\''), 'downloads.js must set title tooltip on titleTxt');

console.log('✓ Dark mode and layout polish verified!');
