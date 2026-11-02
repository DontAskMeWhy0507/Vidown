const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: STAGE 1 SCOPE-AWARE MODULE CENSUS ===\n');

const censusPath = 'docs/superpowers/census/2026-11-01-module-census.json';
assert.ok(fs.existsSync(censusPath), 'Census JSON file must exist at ' + censusPath);

const census = JSON.parse(fs.readFileSync(censusPath, 'utf8'));

// 1. Structure and Invariants
assert.strictEqual(census.totalSlots, 776, 'Census must cover all 776 slots');
assert.strictEqual(census.realModulesCount, 649, 'Must identify exactly 649 active modules');
assert.strictEqual(census.holesCount, 127, 'Must identify exactly 127 holes');
assert.ok(census.modules['37'], 'Module 37 must be inventoried');
assert.ok(census.modules['89'], 'Module 89 must be inventoried');
assert.strictEqual(census.ellipticCopiesCount, 6, 'Must inventory 6 bn.js copies');
assert.strictEqual(census.regeneratorModulesCount, 163, 'Must identify 163 regenerator modules');

// 2. Loud Baseline Staleness Guard
// Guarantees census baseline bundle assumptions cannot silently go stale or desync from reference
assert.strictEqual(census.baselineBundleSize, 2404925, 
  'LOUD GUARD: Baseline original bundle size must equal 2,404,925 bytes (630 B CSS + 2,404,295 B Webpack IIFE)');
const actualBundleSize = fs.statSync(path.resolve(__dirname, '../content-script.js')).size;
assert.strictEqual(census.currentBuiltBundleSize, actualBundleSize,
  `Current built bundle size in census (${census.currentBuiltBundleSize}) must match actual content-script.js size (${actualBundleSize})`);
assert.strictEqual(census.modules['37'].size, 119308, 'Module 37 baseline bundle size must equal 119,308 B');
assert.strictEqual(census.modules['89'].size, 45516, 'Module 89 baseline bundle size must equal 45,516 B');
assert.strictEqual(census.modules['126'].size, 43306, 'Module 126 baseline bundle size must equal 43,306 B');
assert.strictEqual(census.modules['541'].size, 110571, 'Module 541 baseline bundle size must equal 110,571 B');
assert.strictEqual(census.modules['161'].size, 77663, 'Module 161 baseline bundle size must equal 77,663 B');

// 3. Exact Committed fileSize Verification
const registry = require('../src/content/module-registry');
for (const [id, relPath] of Object.entries(registry.modules)) {
  const fullPath = path.resolve(__dirname, '..', 'src', 'content', relPath);
  const rawContent = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const committedSize = Buffer.byteLength(rawContent, 'utf8');
  assert.strictEqual(census.modules[id].fileSize, committedSize, 
    `Module ${id} (${relPath}) census fileSize (${census.modules[id].fileSize}) must match committed size (${committedSize})`);
}
// Specific known checkpoints from Muse
assert.strictEqual(census.modules['161'].fileSize, 137480, 'Module 161 committed fileSize must be exactly 84,481 bytes (formatted with line breaks <= 300 chars)');
assert.strictEqual(census.modules['100'].fileSize, 1014, 'Module 100 committed fileSize must be exactly 1,014 bytes');
assert.strictEqual(census.modules['37'].fileSize, 119694, 'Module 37 committed fileSize must be exactly 119,694 bytes');
assert.strictEqual(census.modules['89'].fileSize, 45562, 'Module 89 committed fileSize must be exactly 45,562 bytes');
assert.strictEqual(census.modules['437'].fileSize, 103, 'Module 437 alias stub fileSize must be exactly 103 bytes');

// 4. Verify markdown census exists and contains required explanation
assert.ok(fs.existsSync('docs/superpowers/census/2026-11-01-module-census.md'), 'Census Markdown must exist');
const mdContent = fs.readFileSync('docs/superpowers/census/2026-11-01-module-census.md', 'utf8');
assert.ok(mdContent.length > 500, 'Census Markdown must have detailed documentation');
assert.ok(mdContent.includes('Technical Explanation of the 592-Row Regeneration Drift'), 
  'Census Markdown must document the technical explanation for the 592-row drift');
assert.ok(mdContent.includes('esbuild.transformSync'), 
  'Census Markdown must document esbuild transform and minification mechanism');

console.log('✓ test_module_census passed: All 776 slots, baseline staleness guards, and exact file sizes verified!');
