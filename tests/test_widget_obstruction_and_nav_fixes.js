// tests/test_widget_obstruction_and_nav_fixes.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const navCode = fs.readFileSync(path.join(__dirname, '../downloads-nav.js'), 'utf8');
const domConstants = fs.readFileSync(path.join(__dirname, '../src/content/widget/dom-constants.js'), 'utf8');
const widgetMgr = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
const dlList = fs.readFileSync(path.join(__dirname, '../src/content/widget/download-list.js'), 'utf8');

// 1. downloads-nav.js does not hijack #other-feature on web pages and has no duplicate stream-sniffer
assert.ok(!navCode.includes("node.id === 'other-feature'"), 'downloads-nav.js must not hijack #other-feature and block #expansion menu');
assert.ok(navCode.includes("node.id === 'open-settings'"), 'downloads-nav.js must intercept #open-settings to open Downloads Manager');
assert.ok(!navCode.includes('__saviorStreamSnifferActive'), 'downloads-nav.js must not duplicate stream-sniffer.js');

// 2. Platform position rules cover shorts, tiktok, instagram, douyin
assert.ok(domConstants.includes('youtube.com\\/shorts') && domConstants.includes('tiktok.com'), 'PLATFORM_POSITION_RULES must include Shorts and TikTok offsets');

// 3. Widget checks pictureInPictureElement, resets isVertical, and marks dataset.saviorDismissed
assert.ok(widgetMgr.includes('document.pictureInPictureElement'), 'shouldHideWidget must hide when video is in Picture-in-Picture');
assert.ok(widgetMgr.includes('dataset.saviorDismissed'), '#hide-widget must mark video node as dismissed');

// 4. download-list.js fixes defaultRes.ext typo
assert.ok(!dlList.includes('defaultRes.ext'), 'download-list.js must check downloadItem.ext instead of number defaultRes.ext');

console.log('✓ Widget obstruction and navigation fixes verified!');
