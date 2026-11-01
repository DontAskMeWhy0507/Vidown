const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: UNPACKED MODULE INTEGRITY ===\n');

const registryPath = path.resolve(__dirname, '..', 'src', 'content', 'module-registry.js');
assert.ok(fs.existsSync(registryPath), 'Registry must exist at src/content/module-registry.js');

const registry = require('../src/content/module-registry');

const moduleCount = Object.keys(registry.modules).length;
console.log(`Verifying ${moduleCount} unpacked modules in registry...`);
assert.strictEqual(moduleCount, 649, 'Registry must map exactly all 649 active modules');

for (const [id, relPath] of Object.entries(registry.modules)) {
  const fullPath = path.resolve(__dirname, '..', 'src', 'content', relPath);
  assert.ok(fs.existsSync(fullPath), `Module file src/content/${relPath} (module ${id}) must exist`);
}

const entryPath = path.resolve(__dirname, '..', 'src', 'content', 'entry', 'index.js');
assert.ok(fs.existsSync(entryPath), 'Entry point module must exist at src/content/entry/index.js');

console.log('✓ All 649 unpacked modules and entry point verified!');
