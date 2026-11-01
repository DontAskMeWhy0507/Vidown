const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: STAGE 1 SCOPE-AWARE MODULE CENSUS ===\n');

const censusPath = 'docs/superpowers/census/2026-11-01-module-census.json';
assert.ok(fs.existsSync(censusPath), 'Census JSON file must exist at ' + censusPath);

const census = JSON.parse(fs.readFileSync(censusPath, 'utf8'));

assert.strictEqual(census.totalSlots, 776, 'Census must cover all 776 slots');
assert.strictEqual(census.realModulesCount, 649, 'Must identify exactly 649 active modules');
assert.strictEqual(census.holesCount, 127, 'Must identify exactly 127 holes');
assert.ok(census.modules['37'], 'Module 37 must be inventoried');
assert.ok(census.modules['89'], 'Module 89 must be inventoried');
assert.strictEqual(census.ellipticCopiesCount, 6, 'Must inventory 6 bn.js copies');
assert.strictEqual(census.regeneratorModulesCount, 164, 'Must identify 164 regenerator modules');

// Verify markdown census exists and is non-empty
assert.ok(fs.existsSync('docs/superpowers/census/2026-11-01-module-census.md'), 'Census Markdown must exist');
const mdContent = fs.readFileSync('docs/superpowers/census/2026-11-01-module-census.md', 'utf8');
assert.ok(mdContent.length > 500, 'Census Markdown must have detailed documentation');

console.log('✓ test_module_census passed: All 776 slots and invariants verified!');
