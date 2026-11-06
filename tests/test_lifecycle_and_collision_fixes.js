// tests/test_lifecycle_and_collision_fixes.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// 1. chrome.downloads.cancel uses downloadId, not undefined targetId
const bgChrome = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
const cancelBlock = bgChrome.slice(bgChrome.indexOf('chrome.downloads.cancel ='), bgChrome.indexOf('chrome.downloads.erase ='));
assert.ok(!cancelBlock.includes('targetId'), 'chrome.downloads.cancel must not reference undefined targetId');
assert.ok(cancelBlock.includes('taskId: downloadId'), 'chrome.downloads.cancel must pass taskId: downloadId');

// 2. Cold-start checkItemState recovers stuck queued items
const checkStateBlock = bgChrome.slice(bgChrome.indexOf('function checkItemState(item)'), bgChrome.indexOf('Promise.all(history.map(checkItemState))'));
assert.ok(checkStateBlock.includes("item.state !== 'queued'"), 'checkItemState must recover orphaned queued tasks on SW restart');

// 3. TabMediaObserver.cleanFbUrl calls removeFbUrl instead of recursing infinitely
const observerCode = fs.readFileSync(path.join(__dirname, '../src/background/tabs/tab-media-observer.js'), 'utf8');
const cleanFbMatch = observerCode.match(/cleanFbUrl\s*\([^)]*\)\s*\{[\s\S]*?\}/);
assert.ok(cleanFbMatch && cleanFbMatch[0].includes('this.removeFbUrl(') && !cleanFbMatch[0].includes('this.cleanFbUrl('));

// 4. Multi-line template literals in getYTCookieAuth, getDateNumber, and url-utils are single-line
for (const rel of [
  '../src/common/core-utils/dom-utils.js',
  '../src/background/messaging/dom-utils.js',
  '../src/common/utilities/url-utils.js',
  '../src/background/utilities/url-utils.js'
]) {
  const code = fs.readFileSync(path.join(__dirname, rel), 'utf8');
  assert.ok(!/`\$\{param_e_1\}\s*\n/.test(code), `${rel} must not have newline in SAPISIDHASH template`);
  assert.ok(!/parseInt\(`\$\{var_t\}\s*\n/.test(code), `${rel} must not have newline in getDateNumber parseInt`);
  assert.ok(!/filename:\s*`\$\{var_a_1\}\s*\n/.test(code), `${rel} must not have newline in filename template`);
}

// 5. native/host.js captures publishedPath = finalizePartFile(outPath) everywhere
const hostCode = fs.readFileSync(path.join(__dirname, '../native/host.js'), 'utf8');
const bareFinalizeCalls = hostCode.match(/^\s*finalizePartFile\(outPath\);/gm) || [];
assert.strictEqual(bareFinalizeCalls.length, 0, 'All finalizePartFile(outPath) calls must capture the returned publishedPath');

console.log('✓ Lifecycle and collision fixes verified!');
