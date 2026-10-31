const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: Lightweight Content Script & Video Detection ---');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Verify files exist
const contentMainPath = path.join(ROOT_DIR, 'content', 'content_main.js');
const contentCssPath = path.join(ROOT_DIR, 'content', 'content.css');

assert.ok(fs.existsSync(contentMainPath), 'content/content_main.js must exist');
assert.ok(fs.existsSync(contentCssPath), 'content/content.css must exist');

const contentJs = fs.readFileSync(contentMainPath, 'utf8');

// 2. Verify zero forced reflows / performance hygiene
assert.ok(
  !contentJs.includes("attributeFilter: ['style', 'class']") &&
  !contentJs.includes('attributeFilter: ["style", "class"]'),
  'content_main.js must NOT observe style or class attributes'
);

assert.ok(
  !contentJs.includes('eval('),
  'content_main.js must NOT contain any eval() call'
);

assert.ok(
  !contentJs.includes('coccoc.com'),
  'content_main.js must NOT contain coccoc.com or telemetry'
);

// 3. Verify runtime hook injection & security gate connection
assert.ok(
  contentJs.includes('runtime_hook.js'),
  'content_main.js must inject core/runtime_hook.js'
);

assert.ok(
  contentJs.includes('chrome.runtime.sendMessage'),
  'content_main.js must relay media events to service worker'
);

// 4. Verify file size is small (under 100 KB, replacing 2.43 MB)
const stat = fs.statSync(contentMainPath);
assert.ok(stat.size < 100 * 1024, `content_main.js size (${stat.size} bytes) must be under 100KB`);

console.log(`✅ Task 3: Clean Content Script verification PASSED! Size: ${stat.size} bytes (vs old 2.43 MB)`);
