const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: MULTI-PLATFORM VIDEO DETECTION AUDIT & FIXES ===\n');

const fbSrc = fs.readFileSync(path.join(__dirname, '../src/content/platform/facebook.js'), 'utf8');
const twSrc = fs.readFileSync(path.join(__dirname, '../src/content/platform/twitter_com-extractor.js'), 'utf8');
const redditSrc = fs.readFileSync(path.join(__dirname, '../src/content/platform/reddit-extractor.js'), 'utf8');

// 1. Facebook blob check and Stories ext assignment
console.log('[Test 1] Verifying Facebook extractor fixes...');
assert.ok(
  fbSrc.includes('url.includes("blob:")') && !fbSrc.includes('(url.includes("blob://") || !url);'),
  'facebook.js must check url.includes("blob:") instead of the typo "blob://"'
);
assert.ok(
  fbSrc.includes('storyMedia.ext = "mp4"') && fbSrc.includes('storyMedia.exts = ["mp4"]'),
  'Facebook Stories must set ext and exts to "mp4" for isValidData verification'
);
assert.ok(
  fbSrc.includes('node.getAttribute("savior-vid")'),
  'Facebook extractor must check savior-vid from injected main-world script'
);
console.log('✓ Test 1: Facebook blob detection, Stories ext, and savior-vid resolution verified!\n');

// 2. Twitter / X broad regex matching and fallback
console.log('[Test 2] Verifying Twitter / X extractor fixes...');
assert.ok(
  twSrc.includes('video\\.twimg\\.com\\/.+video\\/(\\d+)') && !twSrc.includes('/pl/[a-z0-9\\-_]+\\.m3u8'),
  'twitter_com-extractor.js must match all twimg video URLs, not only specific m3u8 playlists'
);
assert.ok(
  twSrc.includes('savior-twitter-source') && twSrc.includes('window.__saviorSniffedMedia'),
  'twitter_com-extractor.js must fallback to savior-twitter-source attribute or sniffed media when obj_l is missing'
);
console.log('✓ Test 2: Twitter / X matches all twimg streams and resolves via stamped props or sniffing!\n');

// 3. Reddit shreddit-player web component support
console.log('[Test 3] Verifying Reddit modern shreddit-player tag support...');
assert.ok(
  redditSrc.includes('"shreddit-player"'),
  'reddit-extractor.js must include "shreddit-player" tag in addNode and isValidVideoNode'
);
console.log('✓ Test 3: Modern Reddit shreddit-player component is recognized!\n');

// 4. Verify all main-world inject scripts are scoped in IIFEs
console.log('[Test 4] Verifying all src/inject main-world scripts are scoped in IIFEs...');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) results = results.concat(walk(full));
    else if (file.endsWith('.js')) results.push(full);
  });
  return results;
}

const mainWorldFiles = walk(path.join(__dirname, '../src/inject')).filter(f => f.includes('main-world.js'));
assert.ok(mainWorldFiles.length >= 15, 'Must inspect at least 15 main-world scripts');

for (const file of mainWorldFiles) {
  const content = fs.readFileSync(file, 'utf8').trim();
  const isIife = /^\s*\(\s*(async\s+)?(function|\(\s*\)\s*=>)/.test(content);
  assert.ok(isIife, `File ${path.basename(path.dirname(file))}/${path.basename(file)} must be wrapped in an IIFE`);
}
console.log(`✓ Test 4: All ${mainWorldFiles.length} main-world scripts are protected with IIFEs against re-declaration crashes!\n`);

console.log('================================================================');
console.log('ALL MULTI-PLATFORM AUDIT & FIX TESTS PASSED! 🎉');
console.log('================================================================\n');
