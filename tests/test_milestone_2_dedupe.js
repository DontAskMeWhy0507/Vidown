const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: MILESTONE 2 DEDUPLICATION & GATES ===\n');

// 1. Gate 2A: bn.js 6-to-1 Consolidation
console.log('Testing Gate 2A: bn.js 6-to-1 consolidation...');
const bnCanonicalPath = path.resolve(__dirname, '../src/content/vendor/elliptic/module-126.js');
const stubIds = [437, 485, 618, 652, 668];

assert.ok(fs.existsSync(bnCanonicalPath), 'Canonical bn.js module 126 must exist');
const canonicalSize = fs.statSync(bnCanonicalPath).size;
assert.ok(canonicalSize >= 43000, `Canonical module 126 must retain full bn.js implementation (got ${canonicalSize} bytes)`);

let totalStubSize = 0;
for (const id of stubIds) {
  const stubPath = path.resolve(__dirname, `../src/content/vendor/elliptic/module-${id}.js`);
  assert.ok(fs.existsSync(stubPath), `Stub module ${id} must exist`);
  const content = fs.readFileSync(stubPath, 'utf8').trim();
  assert.ok(content.includes('r(126)'), `Stub ${id} must delegate to r(126)`);
  totalStubSize += fs.statSync(stubPath).size;
}

const rawDedupeSavings = (5 * 43306) - totalStubSize;
console.log(`Gate 2A bn.js raw savings: ${rawDedupeSavings} bytes (total stub size: ${totalStubSize} bytes)`);
assert.ok(rawDedupeSavings >= 216000, `Gate 2A must achieve >= 216,000 bytes reduction, got ${rawDedupeSavings}`);

// 2. Runtime Functional Delegation Check
console.log('Testing runtime functional delegation of bn.js stubs...');
const modules = {};
const installedModules = {};
function mockRequire(id) {
  if (installedModules[id]) return installedModules[id].exports;
  const mod = installedModules[id] = { i: id, l: false, exports: {} };
  if (id === 96) {
    mod.exports = function(t) { return t; };
    mod.l = true;
    return mod.exports;
  }
  if (modules[id]) {
    modules[id].call(mod.exports, mod, mod.exports, mockRequire);
  }
  mod.l = true;
  return mod.exports;
}

// Load canonical module 126
const mod126Code = fs.readFileSync(bnCanonicalPath, 'utf8');
const fn126 = new Function('module', 'exports', 'r', mod126Code.replace(/^\/\/[^\n]*\n/, '').replace(/^export default /, 'return '));
modules[126] = fn126();

// Load stubs
for (const id of stubIds) {
  const stubPath = path.resolve(__dirname, `../src/content/vendor/elliptic/module-${id}.js`);
  const stubCode = fs.readFileSync(stubPath, 'utf8');
  const fnStub = new Function('module', 'exports', 'r', stubCode.replace(/^\/\/[^\n]*\n/, '').replace(/^module\.exports\s*=\s*/, 'return '));
  modules[id] = fnStub();
}

const canonicalBN = mockRequire(126);
assert.ok(typeof canonicalBN === 'function' || typeof canonicalBN.BN === 'function', 'Canonical module 126 must export BN constructor');

for (const id of stubIds) {
  const stubBN = mockRequire(id);
  assert.strictEqual(stubBN, canonicalBN, `Stub module ${id} must resolve to identical canonical BN export`);
}

console.log('PASS: Gate 2A mechanical deduplication and runtime functional delegation verified! ✅\n');

// 3. Gate 2B: Native Async/Await Re-emission & Regenerator Tracking
console.log('Testing Gate 2B: Regenerator deduplication and bundling...');
const bundlePath = path.resolve(__dirname, '../content-script.js');
const bundleCode = fs.readFileSync(bundlePath, 'utf8');

const regenMatches = bundleCode.match(/regenerator-runtime/g);
assert.strictEqual(regenMatches, null, 'Built bundle must contain zero instances of regenerator-runtime boilerplate');
assert.ok(bundleCode.includes('_saviorRegen'), 'Built bundle must declare shared _saviorRegen helper');

const baselineBundleSize = 2404925;
const currentBundleSize = fs.statSync(bundlePath).size;
const netRawSavings = baselineBundleSize - currentBundleSize;

console.log(`Gate 2B Bundle size: ${currentBundleSize} bytes (Baseline: ${baselineBundleSize} bytes)`);
console.log(`Total Net Raw Savings: ${netRawSavings} bytes (Gate 5 target: >= 50,000 bytes)`);

assert.ok(netRawSavings >= 50000, `Gate 5: Net raw reduction must be >= 48,000 bytes (got ${netRawSavings})`);
console.log('PASS: Gate 2B and Gate 5 net code reduction verified! ✅\n');

