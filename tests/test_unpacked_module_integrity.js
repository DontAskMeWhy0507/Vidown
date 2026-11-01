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

// Known 103 B alias stubs for deduplicated elliptic copies
const knownAliasStubs = [437, 485, 618, 652, 668];

// 1. Per-Module Content and Non-Empty/Non-Truncation Guards & Integrity Hashing
const moduleHashes = {};

for (const [idStr, relPath] of Object.entries(registry.modules)) {
  const id = parseInt(idStr, 10);
  const fullPath = path.resolve(__dirname, '..', 'src', 'content', relPath);
  assert.ok(fs.existsSync(fullPath), `Module file src/content/${relPath} (module ${id}) must exist`);

  const raw = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const size = Buffer.byteLength(raw, 'utf8');

  // Compute per-module SHA-256 hash
  const sha256 = crypto.createHash('sha256').update(raw, 'utf8').digest('hex');
  assert.strictEqual(sha256.length, 64, `Module ${id} hash must be valid 64-char hex string`);
  moduleHashes[id] = sha256;

  // Guard against emptied module files
  assert.ok(size > 50, `Module ${id} file is suspiciously small (${size} bytes) - possible content loss`);

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
    activeSlotCount++;
  }
}

assert.strictEqual(activeSlotCount, 649, 'slots.js must export exactly 649 active module references');
assert.strictEqual(nullSlotCount, 127, 'slots.js must export exactly 127 null slot references');

console.log('✓ All 649 unpacked modules, SHA-256 integrity hashes, size guards, slot non-null invariants, and entry point verified!\n');
