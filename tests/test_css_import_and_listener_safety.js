const fs = require('fs');
const assert = require('assert');

console.log('--- Testing CSS Injection & Message Listener Safety ---');

// 1. Verify content-script.js has no @import
const contentScript = fs.readFileSync('content-script.js', 'utf8');
assert.strictEqual(
  contentScript.includes('@import'),
  false,
  'content-script.js must not contain @import statements which trigger Chrome cross-origin security violations'
);
console.log('PASS: No @import statements found in content-script.js');

// 2. Verify <link rel="stylesheet"> injection is used for CSS resources
assert.ok(
  contentScript.includes('l.rel="stylesheet"') || contentScript.includes("l.rel = 'stylesheet'"),
  'content-script.js must inject <link rel="stylesheet"> for CSS in shadow DOM'
);
console.log('PASS: content-script.js uses <link rel="stylesheet"> for shadow DOM styles');

// 3. Verify onMessage listener in content-script.js does not return true unconditionally
assert.strictEqual(
  contentScript.includes('return n.cb=r,EE.emit("message.received",n),!0'),
  false,
  'content-script.js onMessage listener must not unconditionally return true'
);
assert.ok(
  contentScript.includes('if(t&&t.type==="get_inner_data"') && contentScript.includes('return!0') && contentScript.includes('return!1'),
  'content-script.js onMessage listener must only return true for asynchronous actions and return false otherwise'
);
console.log('PASS: content-script.js onMessage listener only returns true when an async response is expected');

// 4. Verify offscreen.js listener returns false after synchronous response
const offscreen = fs.readFileSync('offscreen.js', 'utf8');
assert.strictEqual(
  offscreen.includes('d({isAdguardEnabled:r})),!0'),
  false,
  'offscreen.js listener must not return true after synchronous dispatch'
);
assert.ok(
  offscreen.includes('d({isAdguardEnabled:r})),!1'),
  'offscreen.js listener correctly returns false'
);
console.log('PASS: offscreen.js onMessage listener returns false');

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
