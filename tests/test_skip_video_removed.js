/**
 * Regression test: the Cốc Cốc "skip video" feature must stay removed.
 * The on-page button, the options toggle and the A/B banner variant are all
 * gated off; nothing may render regardless of any server-side test flag.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: SKIP VIDEO FEATURE REMOVED ===\n');

const read = (p) => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');

// 1. No UI may reference the skip-video toggle or banner variant
//    (the standalone options page was merged into the download manager and deleted)
const optionsHtml = read('downloads/downloads.html');
assert.ok(!optionsHtml.includes('show-skip-video-button'), 'options.html must not contain the skip-video toggle');
assert.ok(!optionsHtml.includes('options-banner-with-skip-video.jpg'), 'options.html must not reference the skip-video banner');
assert.ok(!optionsHtml.includes('skipVideoEnabled'), 'options.html must not reference skipVideoEnabled');
console.log('PASS: manager UI is free of skip-video references.');

// 2. The Cốc Cốc options bundles are gone entirely; settings live in the manager.
const fsExists = (p) => fs.existsSync(path.join(__dirname, '..', p));
assert.strictEqual(fsExists('options.js'), false, 'the minified Cốc Cốc options.js bundle must be deleted');
assert.strictEqual(fsExists('options-page.js'), false, 'options-page.js must be deleted (settings merged into the manager)');
console.log('PASS: no options bundle remains; no skip-video anywhere.');

// 3. content-script.js on-page button gate forced off
const cs = read('content-script.js');
assert.ok(cs.includes('this.isSkipVideoEnabled=!1'), 'content-script.js must force isSkipVideoEnabled to false');
assert.ok(!cs.includes('this.isSkipVideoEnabled=!!t.groupName&&u.a.get("skip_video_enabled")'), 'content-script.js must not enable the button from A/B + settings');
console.log('PASS: content-script.js never mounts the #skip-video button.');

// 4. The skip-video banner asset must not ship in the release package
const pkg = read('scripts/package_release.js');
assert.ok(pkg.includes('options-banner-with-skip-video.jpg'), 'packaging script must exclude the skip-video banner asset');
console.log('PASS: release package excludes the dead skip-video banner asset.');

console.log('\nALL SKIP VIDEO REMOVAL TESTS PASSED! ✅');
