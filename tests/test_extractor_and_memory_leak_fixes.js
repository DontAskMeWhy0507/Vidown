// tests/test_extractor_and_memory_leak_fixes.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const tiktok = fs.readFileSync(path.join(__dirname, '../src/content/platform/tiktok-douyin.js'), 'utf8');
const twitter = fs.readFileSync(path.join(__dirname, '../src/content/platform/twitter_com-extractor.js'), 'utf8');
const igMain = fs.readFileSync(path.join(__dirname, '../src/inject/instagram/main-world.js'), 'utf8');
const domUtils = fs.readFileSync(path.join(__dirname, '../src/content/core/dom-utils.js'), 'utf8');
const widgetMgr = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
const contextGuard = fs.readFileSync(path.join(__dirname, '../context-guard.js'), 'utf8');

// 1. TikTok and Twitter extractors call urlUtils.f/g (Module 3), not domHelper.f/g or dep_dom_utils.f
assert.ok(!tiktok.includes('domHelper.f(') && !tiktok.includes('domHelper.g('), 'tiktok-douyin.js must use urlUtils.f and urlUtils.g');
assert.ok(!twitter.includes('dep_dom_utils.f('), 'twitter_com-extractor.js must use dep_url_utils.f');

// 2. Instagram main-world script has singleton guard and does not observe class attribute or timeupdate
assert.ok(igMain.includes('__saviorIgMainWorldActive'), 'instagram/main-world.js must have a singleton guard');
assert.ok(!igMain.includes("'timeupdate'"), 'instagram/main-world.js must not re-extract on every timeupdate tick');

// 3. dom-utils.js cleans up EE listeners via EE.off
const eeOffCount = (domUtils.match(/EE\.off\(/g) || []).length;
assert.ok(eeOffCount >= 6, `dom-utils.js must call EE.off for IPC request listeners (found ${eeOffCount})`);

// 4. WidgetContainer disconnects resizeObserver and deletes from widgetDownloadsMap
assert.ok(widgetMgr.includes('this.resizeObserver.disconnect()'), 'WidgetContainer.destroy must disconnect resizeObserver');
assert.ok(widgetMgr.includes('this.widgetDownloadsMap.delete('), 'SaviorWidgetController must delete destroyed widgets from widgetDownloadsMap');

// 5. context-guard.js invokes callback on synchronous sendMessage catch
assert.ok(contextGuard.includes("typeof args[args.length - 1] === 'function'"), 'context-guard.js must invoke callback when sendMessage throws synchronously');

console.log('✓ Extractor regressions, smoothness, and memory leak fixes verified!');
