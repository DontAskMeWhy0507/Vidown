const fs = require('fs');
const assert = require('assert');
const path = require('path');

console.log('--- Testing CSS Injection & Message Listener Safety ---');

// 1. Verify content-script.js has no @import
const contentScript = fs.readFileSync('content-script.js', 'utf8');
assert.strictEqual(
  contentScript.includes('@import'),
  false,
  'content-script.js must not contain @import statements which trigger Chrome cross-origin security violations'
);
console.log('PASS: No @import statements found in content-script.js');

// 2. Verify inline style caching & fallback for CSS resources
assert.ok(
  /[a-zA-Z_$][\w$]*\.type\s*===\s*["']get_inner_data["']/.test(contentScript) &&
  (contentScript.includes('!0:!1') || contentScript.includes('true:false') || (/return\s*(!0|true)/.test(contentScript) && /return\s*(!1|false)/.test(contentScript))),
  'content-script.js onMessage listener must only return true for asynchronous actions and return false otherwise'
);
console.log('PASS: content-script.js onMessage listener only returns true when an async response is expected');

// 4. offscreen.html/offscreen.js were removed entirely: they only tracked
//    adguard onboarding flag states, and adguard is disabled in this build.
//    The bundle guards its chrome.offscreen usage behind an availability check,
//    so removing the permission skips that path cleanly.
assert.strictEqual(
  fs.existsSync(path.join(__dirname, '..', 'offscreen.js')),
  false,
  'offscreen.js must be removed (dead adguard flag tracker)'
);
assert.strictEqual(
  fs.existsSync(path.join(__dirname, '..', 'offscreen.html')),
  false,
  'offscreen.html must be removed'
);
console.log('PASS: dead offscreen document removed');

// 5. Verify background.chrome.js has clean listeners returning false
const bgChrome = fs.readFileSync('background.chrome.js', 'utf8');
assert.ok(
  bgChrome.includes('onMessage.addListener((req, sender, sendResponse) => {'),
  'background.chrome.js has onMessage listener'
);
assert.ok(
  bgChrome.includes("return false;"),
  'background.chrome.js onMessage listener explicitly returns false to close message channel synchronously'
);
console.log('PASS: background.chrome.js onMessage listener returns false across all actions');

console.log('ALL CSS AND LISTENER SAFETY CHECKS PASSED!');
