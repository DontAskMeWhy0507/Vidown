/**
 * Test Suite: Manifest Hardening & Context Guard Sanitization
 * 
 * Verifies:
 * 1. manifest.json: minimum_chrome_version is updated to "116" (sidePanel API requirement).
 * 2. manifest.json: externally_connectable removes "http://localhost/*" and keeps only trusted matches.
 * 3. manifest.json: web_accessible_resources tightens access, eliminating downloads/* and popup/*.
 * 4. context-guard.js: does not call event.stopPropagation() on CSP securitypolicyviolation events,
 *    preserving the host website's CSP reporting pipeline.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: MANIFEST HARDENING & CONTEXT GUARD SANITIZATION ===\n');

// ---------------------------------------------------------
// 1. Manifest Hardening Checks
// ---------------------------------------------------------
console.log('[Test 1] Verifying manifest.json configuration...');
const manifestPath = path.join(__dirname, '..', 'manifest.json');
const manifestRaw = fs.readFileSync(manifestPath, 'utf8');
const manifest = JSON.parse(manifestRaw);

// Check minimum_chrome_version
assert.strictEqual(
  manifest.minimum_chrome_version,
  '116',
  `minimum_chrome_version must be "116" for sidePanel API support (got "${manifest.minimum_chrome_version}")`
);
console.log('✓ minimum_chrome_version is "116"');

// Check externally_connectable
assert.ok(manifest.externally_connectable, 'manifest.json must have externally_connectable');
assert.ok(
  Array.isArray(manifest.externally_connectable.matches),
  'externally_connectable.matches must be an array'
);
assert.ok(
  !manifest.externally_connectable.matches.includes('http://localhost/*'),
  'externally_connectable.matches must NOT include "http://localhost/*"'
);
assert.ok(
  !manifest.externally_connectable.matches.some(m => m.includes('localhost')),
  'externally_connectable.matches must not contain any localhost entry'
);
assert.ok(
  manifest.externally_connectable.matches.some(m => m.includes('youtube.com')),
  'externally_connectable.matches must retain trusted domains (e.g. YouTube)'
);
console.log('✓ externally_connectable removes localhost and preserves trusted matches');

// Check web_accessible_resources
assert.ok(
  Array.isArray(manifest.web_accessible_resources),
  'web_accessible_resources must be an array'
);
const allResources = manifest.web_accessible_resources.flatMap(entry => entry.resources || []);

assert.ok(
  !allResources.includes('downloads/*'),
  'web_accessible_resources must NOT expose "downloads/*"'
);
assert.ok(
  !allResources.includes('popup/*'),
  'web_accessible_resources must NOT expose "popup/*"'
);
assert.ok(
  !allResources.some(r => r.startsWith('downloads/') || r.startsWith('popup/')),
  'web_accessible_resources must not expose any downloads or popup paths'
);

// Verify required content script resources remain accessible
assert.ok(
  allResources.some(r => r.includes('css/content-script.css') || r.includes('css/*')),
  'web_accessible_resources must expose content script CSS'
);
assert.ok(
  allResources.some(r => r.includes('images/')),
  'web_accessible_resources must expose images needed by content script'
);
console.log('✓ web_accessible_resources strictly hardened (no downloads/* or popup/* leaks)');

// ---------------------------------------------------------
// 2. Context Guard Sanitization Checks
// ---------------------------------------------------------
console.log('\n[Test 2] Verifying context-guard.js CSP behavior...');
const guardPath = path.join(__dirname, '..', 'context-guard.js');
const guardCode = fs.readFileSync(guardPath, 'utf8');

// Static analysis: must not call event.stopPropagation() on securitypolicyviolation
assert.ok(
  !guardCode.includes('event.stopPropagation()'),
  'context-guard.js must NOT call event.stopPropagation() on CSP violations'
);

const spvMatch = guardCode.match(/securitypolicyviolation[\s\S]*?\}\s*,\s*true\s*\)/);
if (spvMatch) {
  assert.ok(
    !spvMatch[0].includes('stopPropagation'),
    'securitypolicyviolation handler must not call stopPropagation'
  );
}
console.log('✓ Static analysis confirms no stopPropagation in CSP handler');

// Dynamic execution simulation: verify host CSP event is not suppressed
let propagationStopped = false;
let immediatePropagationStopped = false;
let preventDefaultCalled = false;

const listeners = {};
const mockWindow = {
  addEventListener(event, fn, capture) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(fn);
  },
  removeEventListener() {},
  location: { href: 'https://example.com' }
};

const mockChrome = {
  runtime: {
    sendMessage: () => Promise.resolve(),
    onMessage: { addListener: () => {} }
  }
};

const sandbox = {
  window: mockWindow,
  chrome: mockChrome,
  console: { log: () => {}, warn: () => {}, error: () => {} }
};

vm.createContext(sandbox);
vm.runInContext(guardCode, sandbox);

if (listeners['securitypolicyviolation']) {
  const fakeCspEvent = {
    type: 'securitypolicyviolation',
    blockedURI: 'https://malicious.com',
    violatedDirective: 'script-src',
    stopPropagation() { propagationStopped = true; },
    stopImmediatePropagation() { immediatePropagationStopped = true; },
    preventDefault() { preventDefaultCalled = true; }
  };

  listeners['securitypolicyviolation'].forEach(fn => fn(fakeCspEvent));
}

assert.strictEqual(
  propagationStopped,
  false,
  'context-guard.js must NOT stop propagation of host page securitypolicyviolation events'
);
assert.strictEqual(
  immediatePropagationStopped,
  false,
  'context-guard.js must NOT stop immediate propagation of host page securitypolicyviolation events'
);
console.log('✓ Dynamic simulation confirms host page CSP event reporting remains intact');

console.log('\n======================================================');
console.log('ALL MANIFEST HARDENING & GUARD SANITIZATION TESTS PASSED! 🎉');
console.log('======================================================');
