const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: MILESTONES 4, 5, 6 - EXTRACTORS & DETECTORS ===\n');

// -------------------------------------------------------------
// Test 1: Milestone 4 - TikTok & Douyin
// -------------------------------------------------------------
console.log('[Test 1] Verifying TikTok & Douyin fixes...');
const tiktokDouyinContent = fs.readFileSync(path.join(__dirname, '../src/content/platform/tiktok-douyin.js'), 'utf8');

// 1. Check scrapeUniversalDataById step handling
assert.ok(
  tiktokDouyinContent.includes('scrapeUniversalDataById(currentVid') &&
  tiktokDouyinContent.includes('scrapedData = step.v;'),
  'TikTok resolveTikTokVideoFromNode must await scrapeUniversalDataById via step.v generator flow'
);

// 2. Check inverted anchorElem condition in bulk download
assert.ok(
  /anchorElem = findTikTokVideoLinks\(\)\.find[\s\S]+?if \(!anchorElem\)[\s\S]+?return step\.a\(2, \[\]\);[\s\S]+?step\.n = 4;[\s\S]+?resolveTikTokVideoFromNode\(anchorElem\)/.test(tiktokDouyinContent),
  'TikTok bulk download must return [] when anchorElem is NOT found, and proceed to resolveItem when found'
);

// 3. Check extractDouyinPageTitle instead of extractDouyinVideoNickname
assert.ok(
  !tiktokDouyinContent.includes('extractDouyinVideoNickname'),
  'Douyin must NOT call nonexistent extractDouyinVideoNickname'
);
assert.ok(
  tiktokDouyinContent.includes('extractDouyinPageTitle(videoElement)'),
  'Douyin must call extractDouyinPageTitle(videoElement)'
);

// 4. Check renderJson safely guarded
assert.ok(
  tiktokDouyinContent.includes('if (!renderJson || typeof renderJson !== "object")'),
  'Douyin parse must safely check renderJson before Object.keys'
);
console.log('✓ Test 1: TikTok & Douyin extractor fixes verified.\n');

// -------------------------------------------------------------
// Test 2: Milestone 4 - Bilibili Extractor
// -------------------------------------------------------------
console.log('[Test 2] Verifying Bilibili extractor audio & obj_g guards...');
const bilibiliContent = fs.readFileSync(path.join(__dirname, '../src/content/platform/bilibili_com-extractor.js'), 'utf8');

// 1. Audio[0] guard
assert.ok(
  bilibiliContent.includes('(var_c.audio && var_c.audio[0]) ? var_c.audio[0].baseUrl : null'),
  'Bilibili must guard var_c.audio[0]'
);

// 2. audio_resource guard
assert.ok(
  bilibiliContent.includes('return var_s_1.url = (var_u && var_u.url) ? {'),
  'Bilibili must guard var_u audio_resource'
);

// 3. DASH audio guard
assert.ok(
  bilibiliContent.includes('var var_f_url = var_f ? (var_f.base_url || var_f.baseUrl) : null;'),
  'Bilibili DASH must guard audio track URL'
);

// 4. obj_g loop guard
assert.ok(
  bilibiliContent.includes('if (!var__.length || !var__[0]) return list_y[0] ? list_y[0].url : null;'),
  'Bilibili must guard empty obj_g values array'
);
console.log('✓ Test 2: Bilibili extractor fixes verified.\n');

// -------------------------------------------------------------
// Test 3: Milestone 5 - Facebook Extractor & Main-World
// -------------------------------------------------------------
console.log('[Test 3] Verifying Facebook extractor & main-world injection...');
const fbContent = fs.readFileSync(path.join(__dirname, '../src/content/platform/facebook.js'), 'utf8');
const fbMainWorld = fs.readFileSync(path.join(__dirname, '../src/inject/facebook/main-world.js'), 'utf8');

// 1. SCRIPTING.INJECT for "facebook"
assert.ok(
  fbContent.includes('file: "facebook"') && fbContent.includes('file: "facebook/messenger-audio"'),
  'Facebook content script must inject main-world "facebook" script'
);

// 2. Read savior-manifest-url and savior-video-detail
assert.ok(
  fbContent.includes('node.getAttribute("savior-manifest-url")') &&
  fbContent.includes('node.getAttribute("savior-video-detail")'),
  'Facebook content script must read savior-manifest-url and savior-video-detail'
);

// 3. Guard against buildTahoeAsyncUrl(undefined)
assert.ok(
  fbContent.includes('if (!mediaObject.identifier || mediaObject.identifier === "undefined")'),
  'Facebook must guard against building invalid Tahoe URL with undefined identifier'
);
console.log('✓ Test 3: Facebook extractor & injection verified.\n');

// -------------------------------------------------------------
// Test 4: Milestone 5 - Instagram Extractor
// -------------------------------------------------------------
console.log('[Test 4] Verifying Instagram extractor...');
const instaContent = fs.readFileSync(path.join(__dirname, '../src/content/platform/instagram_com-extractor.js'), 'utf8');

// 1. Dynamic headers
assert.ok(
  instaContent.includes('function getDynamicInstagramHeaders()') &&
  instaContent.includes('document.cookie.match(/csrftoken=([^;]+)/)'),
  'Instagram extractor must read csrftoken dynamically from cookie'
);

// 2. Stories bounds check
assert.ok(
  instaContent.includes('return (var_C && var_C[1] && var_C[1].innerText) ? var_C[1].innerText.trim() :'),
  'Instagram Stories title extraction must guard var_C indices before innerText'
);

// 3. Flattened video_versions array
assert.ok(
  !instaContent.includes('[var_e_1];\n  }\n  ) : void 0;'),
  'Instagram video_versions must return flat items, not nested [[item]]'
);
console.log('✓ Test 4: Instagram extractor verified.\n');

// -------------------------------------------------------------
// Test 5: Milestone 5 - Twitter / X Extractor & Main-World
// -------------------------------------------------------------
console.log('[Test 5] Verifying Twitter / X extractor & fiber traversal...');
const twMainWorld = fs.readFileSync(path.join(__dirname, '../src/inject/twitter/main-world.js'), 'utf8');
const twContent = fs.readFileSync(path.join(__dirname, '../src/content/platform/twitter_com-extractor.js'), 'utf8');

// 1. Deep fiber traversal
assert.ok(
  twMainWorld.includes('function findSourceInTree') &&
  twMainWorld.includes('fiber.memoizedProps'),
  'Twitter main-world must traverse React Fiber tree memoizedProps and props'
);

// 2. Reverse sniffed media lookup
assert.ok(
  twContent.includes('window.__saviorSniffedMedia.slice().reverse().find'),
  'Twitter extractor must search sniffed media in reverse order to match current post'
);
console.log('✓ Test 5: Twitter / X extractor & fiber traversal verified.\n');

// -------------------------------------------------------------
// Test 6: Milestone 6 - YouTube & DASH Parser
// -------------------------------------------------------------
console.log('[Test 6] Verifying YouTube & DASH Parser fixes...');
const dashParserContent = fs.readFileSync(path.join(__dirname, '../src/content/detector/dash-parser.js'), 'utf8');
const ytContent = fs.readFileSync(path.join(__dirname, '../src/content/platform/youtube.js'), 'utf8');

// 1. No window.eval in dash-parser
assert.ok(
  !dashParserContent.includes('window.eval'),
  'dash-parser must NOT use window.eval (MV3 CSP compliance)'
);

// 2. Safe decipher function present
assert.ok(
  dashParserContent.includes('var cipherRegex = /([a-zA-Z0-9_$]+)=function') &&
  dashParserContent.includes('op === "reverse"') &&
  dashParserContent.includes('op === "splice"') &&
  dashParserContent.includes('op === "swap"'),
  'dash-parser must implement safe AST/regex deciphering for reverse, splice, and swap'
);

// 3. Promise rejection handling
assert.ok(
  dashParserContent.includes('.catch(() => {\n          extractFormatsFromConfig(resolveFn, metadata);\n        });'),
  'dash-parser fetch must catch errors and guarantee resolution'
);

// 4. Dedupe set check
assert.ok(
  dashParserContent.includes('if (dedupeSet.has(key)) return false;\n        dedupeSet.add(key);'),
  'dash-parser dedupe must check if dedupeSet.has(key) before adding'
);

// 5. YouTube playerContainer check
assert.ok(
  ytContent.includes('playerContainerNode = playerContainer;') &&
  ytContent.includes('null == playerContainerNode.node ? void 0 : playerContainerNode.node.offsetWidth'),
  'youtube.js must check playerContainerNode.node dimensions instead of reset array'
);
console.log('✓ Test 6: YouTube & DASH parser fixes verified.\n');

console.log('================================================================');
console.log('ALL EXTRACTOR & DETECTOR FIXES (MILESTONES 4, 5, 6) PASSED! 🎉');
console.log('================================================================');
