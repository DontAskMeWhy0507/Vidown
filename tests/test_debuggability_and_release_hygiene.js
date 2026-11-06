const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');

console.log('=== TEST SUITE: DEVELOPER DEBUGGABILITY & RELEASE HYGIENE ===\n');

// 1. Test --dev build produces a single valid V3 sourcemap mapping to real src/ files for background.js
console.log('[Test 1] Testing background.js --dev sourcemap mapping...');
execFileSync(process.execPath, [path.join(rootDir, 'scripts/build_background.js'), '--dev']);
const devBg = fs.readFileSync(path.join(rootDir, 'background.js'), 'utf8');
const bgMapMatches = devBg.match(/\/\/# sourceMappingURL=data:application\/json;base64,([A-Za-z0-9+/=]+)/g) || [];
assert.strictEqual(bgMapMatches.length, 1, 'background.js --dev must contain exactly 1 inline sourcemap');
const bgMapJson = JSON.parse(Buffer.from(bgMapMatches[0].split(',')[1], 'base64').toString('utf8'));
assert.strictEqual(bgMapJson.version, 3);
assert.ok(
  (bgMapJson.sources && bgMapJson.sources.some(s => s.includes('src/background/'))) ||
  (bgMapJson.sections && bgMapJson.sections.some(sec => sec.map.sources.some(s => s.includes('src/background/')))),
  'background.js --dev sourcemap must resolve to individual src/background/* files, not <stdin>'
);

// Restore production build immediately
execFileSync(process.execPath, [path.join(rootDir, 'scripts/build_background.js')]);
console.log('✓ Test 1: background.js --dev sourcemap maps to src/background/*\n');

// 2. Test --dev build produces a single valid V3 sourcemap mapping to real src/ files for content-script.js
console.log('[Test 2] Testing content-script.js --dev sourcemap mapping...');
execFileSync(process.execPath, [path.join(rootDir, 'scripts/build_content_script.js'), '--dev']);
const devCs = fs.readFileSync(path.join(rootDir, 'content-script.js'), 'utf8');
const csMapMatches = devCs.match(/\/\/# sourceMappingURL=data:application\/json;base64,([A-Za-z0-9+/=]+)/g) || [];
assert.strictEqual(csMapMatches.length, 1, 'content-script.js --dev must contain exactly 1 inline sourcemap');
const csMapJson = JSON.parse(Buffer.from(csMapMatches[0].split(',')[1], 'base64').toString('utf8'));
assert.strictEqual(csMapJson.version, 3);
assert.ok(
  (csMapJson.sources && csMapJson.sources.some(s => s.includes('src/content/'))) ||
  (csMapJson.sections && csMapJson.sections.some(sec => sec.map.sources.some(s => s.includes('src/content/')))),
  'content-script.js --dev sourcemap must resolve to individual src/content/* files, not <stdin>'
);

// Restore production build immediately
execFileSync(process.execPath, [path.join(rootDir, 'scripts/build_content_script.js')]);
console.log('✓ Test 2: content-script.js --dev sourcemap maps to src/content/*\n');

// 3. Verify .gitignore excludes audit_bundle.txt and docs/superpowers/
console.log('[Test 3] Verifying .gitignore entries...');
const gitignore = fs.readFileSync(path.join(rootDir, '.gitignore'), 'utf8');
assert.ok(gitignore.includes('audit_bundle.txt'), '.gitignore must ignore audit_bundle.txt');
assert.ok(gitignore.includes('docs/superpowers/'), '.gitignore must ignore docs/superpowers/');
console.log('✓ Test 3: .gitignore properly configured\n');

// 4. Verify native/install.bat does not overwrite tracked com.savior.helper.json in-place and compiles host.cs
console.log('[Test 4] Verifying native/install.bat...');
const installBat = fs.readFileSync(path.join(rootDir, 'native/install.bat'), 'utf8');
assert.ok(installBat.includes('csc.exe'), 'install.bat must auto-compile host.cs if host.exe is missing');
assert.ok(installBat.includes('LOCALAPPDATA'), 'install.bat must write generated manifest to %LOCALAPPDATA%');
console.log('✓ Test 4: install.bat verified\n');

// 5. Verify native/install.sh supports Linux
console.log('[Test 5] Verifying native/install.sh...');
const installSh = fs.readFileSync(path.join(rootDir, 'native/install.sh'), 'utf8');
assert.ok(installSh.includes('.config/google-chrome/NativeMessagingHosts'), 'install.sh must support Linux Chrome path');
assert.ok(installSh.includes('.config/chromium/NativeMessagingHosts'), 'install.sh must support Linux Chromium path');
console.log('✓ Test 5: install.sh verified\n');

// 6. Verify native/uninstall.bat and native/uninstall.sh
console.log('[Test 6] Verifying native/uninstall.bat and uninstall.sh...');
const uninstallBat = fs.readFileSync(path.join(rootDir, 'native/uninstall.bat'), 'utf8');
assert.ok(uninstallBat.includes('LOCALAPPDATA') || uninstallBat.includes('SaviorHelper'), 'uninstall.bat must clean up LOCALAPPDATA manifest if created');
const uninstallSh = fs.readFileSync(path.join(rootDir, 'native/uninstall.sh'), 'utf8');
assert.ok(uninstallSh.includes('.config/google-chrome/NativeMessagingHosts'), 'uninstall.sh must support Linux Chrome path');
console.log('✓ Test 6: uninstall scripts verified\n');

// 7. Verify package.json fields
console.log('[Test 7] Verifying package.json metadata...');
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
assert.strictEqual(pkg.license, 'MIT', 'package.json license must be MIT');
assert.ok(pkg.engines && pkg.engines.node, 'package.json must specify engines.node');
assert.strictEqual(pkg.scripts['sync:integrity'], 'node scripts/sync_module_integrity.js');
console.log('✓ Test 7: package.json metadata verified\n');

// 8. Verify fixtures/module_census.json
console.log('[Test 8] Verifying fixtures/module_census.json...');
assert.ok(fs.existsSync(path.join(rootDir, 'tests/fixtures/module_census.json')), 'tests/fixtures/module_census.json must exist');
console.log('✓ Test 8: tests/fixtures/module_census.json verified\n');

console.log('✓ All debuggability sourcemaps and open-source release hygiene checks passed!');
