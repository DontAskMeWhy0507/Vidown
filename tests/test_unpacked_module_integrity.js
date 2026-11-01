const fs = require('fs');
const path = require('path');
const assert = require('assert');
const crypto = require('crypto');

console.log('=== TEST SUITE: UNPACKED MODULE INTEGRITY & CONTENT LOSS GUARDS ===\n');

const registryPath = path.resolve(__dirname, '..', 'src', 'content', 'module-registry.js');
assert.ok(fs.existsSync(registryPath), 'Registry must exist at src/content/module-registry.js');

const registry = require('../src/content/module-registry');

const moduleCount = Object.keys(registry.modules).length;
console.log(`Verifying ${moduleCount} unpacked modules in registry...`);
assert.strictEqual(moduleCount, 649, 'Registry must map exactly all 649 active modules');

// Load committed baseline SHA-256 hashes
const baselinePath = path.resolve(__dirname, 'fixtures', 'unpacked_module_hashes.json');
assert.ok(fs.existsSync(baselinePath), 'tests/fixtures/unpacked_module_hashes.json must exist');
const baselineHashes = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
assert.strictEqual(Object.keys(baselineHashes).length, 649, 'Baseline must contain hashes for all 649 modules');

// Known 103 B alias stubs for deduplicated elliptic copies
const knownAliasStubs = [437, 485, 618, 652, 668];

// 1. Per-Module Content and Non-Empty/Non-Truncation Guards & Integrity Verification
for (const [idStr, relPath] of Object.entries(registry.modules)) {
  const id = parseInt(idStr, 10);
  const fullPath = path.resolve(__dirname, '..', 'src', 'content', relPath);
  assert.ok(fs.existsSync(fullPath), `Module file src/content/${relPath} (module ${id}) must exist`);

  const raw = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const size = Buffer.byteLength(raw, 'utf8');

  // Guard against emptied module files
  assert.ok(size > 50, `Module ${id} file is suspiciously small (${size} bytes) - possible content loss`);

  // Verify against committed SHA-256 integrity baseline
  const sha256 = crypto.createHash('sha256').update(raw, 'utf8').digest('hex');
  assert.strictEqual(sha256.length, 64, `Module ${id} hash must be a valid 64-char hex string`);
  assert.ok(baselineHashes[idStr], `Module ${id} must have a committed baseline entry`);
  assert.strictEqual(
    sha256,
    baselineHashes[idStr].sha256,
    `Module ${id} (${relPath}) SHA-256 mismatch vs committed baseline!`
  );

  // Guard against truncated or corrupted module files
  const trimmed = raw.trim();
  const body = trimmed.replace(/^\/\/[^\r\n]*\r?\n/, '').trim();
  assert.ok(
    body.startsWith('function(') || 
    body.startsWith('function (') || 
    body.startsWith('export default function(') || 
    body.startsWith('export default function (') ||
    body.startsWith('module.exports = function('),
    `Module ${id} must begin with standard module function signature, got: ${body.slice(0, 40)}`
  );
  assert.ok(trimmed.endsWith('}') || trimmed.endsWith('};'),
    `Module ${id} appears truncated: does not end with closing brace, got: ${trimmed.slice(-20)}`);

  // Verify deliberate alias stubs
  if (knownAliasStubs.includes(id)) {
    assert.strictEqual(size, 103, `Alias stub module ${id} must be exactly 103 bytes`);
    assert.ok(raw.includes('r(126)'), `Alias stub module ${id} must delegate to r(126)`);
  }
}

// 2. High-Value / Critical Module Integrity Checks
const criticalModules = {
  37: { minSize: 110000, name: 'AST Parser' },
  89: { minSize: 40000, name: 'AST Code Generator / Deobfuscator' },
  126: { minSize: 40000, name: 'bn.js Canonical Master' },
  161: { minSize: 70000, name: 'CryptoJS Base64 Machinery' },
  541: { minSize: 100000, name: 'Widget UI Engine' },
  543: { minSize: 1000, name: 'Main Entry Point Module' }
};

for (const [idStr, spec] of Object.entries(criticalModules)) {
  const relPath = registry.modules[idStr];
  const fullPath = path.resolve(__dirname, '..', 'src', 'content', relPath);
  const raw = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const size = Buffer.byteLength(raw, 'utf8');
  assert.ok(size >= spec.minSize, 
    `Critical module ${idStr} (${spec.name}) is below minimum expected size (${size} < ${spec.minSize} bytes)`);
}

// 3. Slot Table Verification (src/content/slots.js)
const slotsPath = path.resolve(__dirname, '..', 'src', 'content', 'slots.js');
assert.ok(fs.existsSync(slotsPath), 'slots.js must exist at src/content/slots.js');
const slotsContent = fs.readFileSync(slotsPath, 'utf8');

const exportPart = slotsContent.split('export default [')[1].split('];')[0];
const slotEntries = exportPart.split('\n').map(l => l.trim().replace(/,$/, '')).filter(l => l.length > 0);

assert.strictEqual(slotEntries.length, 776, `slots.js must contain exactly 776 slot entries, got ${slotEntries.length}`);

let nullSlotCount = 0;
let activeSlotCount = 0;

for (let i = 0; i < 776; i++) {
  const entry = slotEntries[i];
  const isActive = !!registry.modules[i];

  if (!isActive) {
    assert.strictEqual(entry, 'null', `Slot ${i} is not in registry and must be literal null, got '${entry}'`);
    nullSlotCount++;
  } else {
    assert.strictEqual(entry, `m${i}`, `Active module slot ${i} must reference module variable 'm${i}', got '${entry}'`);
    assert.notStrictEqual(entry, 'null', `Active module slot ${i} must never be null!`);
    activeSlotCount++;
  }
}

assert.strictEqual(nullSlotCount, 127, `Must have exactly 127 null hole slots in slots.js, got ${nullSlotCount}`);
assert.strictEqual(activeSlotCount, 649, `Must have exactly 649 active module slots in slots.js, got ${activeSlotCount}`);

// 4. Entry Point Verification
const entryPath = path.resolve(__dirname, '..', 'src', 'content', 'entry', 'index.js');
assert.ok(fs.existsSync(entryPath), 'Entry point module must exist at src/content/entry/index.js');
const entryCode = fs.readFileSync(entryPath, 'utf8');
assert.ok(entryCode.includes('import slots from \'../slots.js\';'), 'Entry point must import slots array');
assert.ok(entryCode.includes('__webpack_require__.s = 543') || entryCode.includes('r(543)'), 'Entry point must boot entry module 543');

console.log('✓ All 649 unpacked modules, SHA-256 integrity baseline comparison, critical module size guards, slot non-null invariants, and entry point verified!\n');
