const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: Legacy Black-Box Elimination & Purity ---');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Verify all legacy black box files and shims are completely gone
const deletedFiles = [
  'background.js',
  'common.js',
  'content-script.js'
];

for (const f of deletedFiles) {
  assert.ok(!fs.existsSync(path.join(ROOT_DIR, f)), `Legacy black-box file ${f} must be deleted!`);
}

// 2. Verify inject directory is deleted
assert.ok(!fs.existsSync(path.join(ROOT_DIR, 'inject')), 'Legacy inject/ directory must be deleted!');

// 3. Verify manifest.json points to clean modular files
const manifestPath = path.join(ROOT_DIR, 'manifest.json');
assert.ok(fs.existsSync(manifestPath), 'manifest.json must exist');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

assert.strictEqual(manifest.background.service_worker, 'service_worker.js', 'Must use clean service_worker.js');
assert.ok(manifest.content_scripts[0].js.includes('content/content_main.js'), 'Must use clean content_main.js');

// 4. Scan all project code (core, content, service_worker.js) for eval() and coccoc.com
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'tests') {
        scanDir(full);
      }
    } else if (entry.isFile() && entry.name.endsWith('.js') && !entry.name.endsWith('host.js')) {
      const content = fs.readFileSync(full, 'utf8');
      assert.ok(!content.includes('eval('), `File ${full} must NOT contain eval()!`);
      assert.ok(!content.includes('coccoc.com'), `File ${full} must NOT contain coccoc.com!`);
    }
  }
}

scanDir(path.join(ROOT_DIR, 'core'));
scanDir(path.join(ROOT_DIR, 'content'));
const swContent = fs.readFileSync(path.join(ROOT_DIR, 'service_worker.js'), 'utf8');
assert.ok(!swContent.includes('eval('), 'service_worker.js must NOT contain eval()!');
assert.ok(!swContent.includes('coccoc.com'), 'service_worker.js must NOT contain coccoc.com!');

console.log('✅ Task 5: Legacy Black-Box Elimination & Purity verification PASSED!');
