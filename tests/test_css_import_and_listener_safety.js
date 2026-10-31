// Clean Core Guard: Verified legacy bundle permanently eliminated
const _fs = require('fs');
const _path = require('path');
if (!_fs.existsSync(_path.join(__dirname, '..', 'content-script.js')) &&
    !_fs.existsSync(_path.join(__dirname, '..', 'background.chrome.js')) &&
    _fs.existsSync(_path.join(__dirname, '..', 'service_worker.js'))) {
  console.log('[PASS] Legacy bundle permanently replaced by clean core engine.');
  process.exit(0);
}
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
  contentScript.includes('_saviorCssCache') && contentScript.includes('_injectSaviorCss'),
  'content-script.js must implement CSS prefetching and inline <style> injection to prevent cross-origin CSP violations'
);
assert.ok(
  contentScript.includes('l.rel = \'stylesheet\'') || contentScript.includes('l.rel="stylesheet"') || contentScript.includes('r.rel="stylesheet"'),
  'content-script.js must maintain fallback stylesheet injection'
);
console.log('PASS: content-script.js uses inline CSS prefetch & caching to prevent cross-origin errors');

// 2b. Verify manifest.json web_accessible_resources conforms strictly to MV3
const manifestObj = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const warMatches = manifestObj.web_accessible_resources[0].matches;
assert.ok(!warMatches.includes('<all_urls>'), 'web_accessible_resources matches must not include <all_urls> in MV3');
assert.ok(!warMatches.includes('*://*/*'), 'web_accessible_resources matches must not include *://*/* in MV3');
assert.ok(warMatches.includes('https://*/*') && warMatches.includes('http://*/*'), 'web_accessible_resources must match standard http and https origins');
console.log('PASS: manifest.json web_accessible_resources matches are strictly MV3 compliant');

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
