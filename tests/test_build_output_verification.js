const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Test Task 6: Verify esbuild bundle output in dist/content-script.js
console.log('--- Testing esbuild Bundle Output & Size Verification ---');

const distBundlePath = path.join(__dirname, '..', 'dist', 'content-script.js');

// 1. Verify existence
assert.ok(fs.existsSync(distBundlePath), 'Compiled bundle dist/content-script.js must exist');

// 2. Verify bundle size is < 250 KB (256,000 bytes)
const stats = fs.statSync(distBundlePath);
const sizeKb = Math.round(stats.size / 1024);
console.log(`Bundle size: ${sizeKb} KB (${stats.size} bytes)`);
assert.ok(stats.size < 250 * 1024, `Bundle size must be < 250 KB, got ${sizeKb} KB`);

// 3. Verify zero eval()
const bundleCode = fs.readFileSync(distBundlePath, 'utf8');
assert.ok(!bundleCode.includes('eval('), 'Bundle must not contain eval() calls');

// 4. Verify valid JavaScript syntax via vm.Script
assert.doesNotThrow(() => {
  new vm.Script(bundleCode, { filename: 'content-script.js' });
}, 'Compiled bundle must have valid JavaScript syntax');

console.log('✓ Test Passed: dist/content-script.js verified (< 250 KB, valid syntax, zero eval()).');
console.log('\nALL BUILD OUTPUT VERIFICATION TESTS PASSED! 🎉');
