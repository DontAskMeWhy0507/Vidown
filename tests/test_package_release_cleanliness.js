/**
 * test_package_release_cleanliness.js
 * Verifies deletion of orphan root popup files and verifies package_release.js
 * produces a clean, compliant Chrome Web Store extension package.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const child_process = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const ZIP_PATH = path.join(DIST_DIR, 'savior-extension-v3.0.2.zip');

console.log('=== TEST SUITE: PACKAGING & CWS RELEASE CLEANLINESS ===\n');

// Preserve original zip so running tests never mutates working tree
let originalZipBytes = null;
if (fs.existsSync(ZIP_PATH)) {
  originalZipBytes = fs.readFileSync(ZIP_PATH);
}

// 1. Verify orphan root popup files do NOT exist
console.log('[Test 1] Checking absence of root orphan files...');
const rootPopupHtml = path.join(ROOT_DIR, 'popup.html');
const rootPopupJs = path.join(ROOT_DIR, 'popup.js');

assert.strictEqual(
  fs.existsSync(rootPopupHtml),
  false,
  'Orphan root popup.html must be deleted'
);
assert.strictEqual(
  fs.existsSync(rootPopupJs),
  false,
  'Orphan root popup.js must be deleted'
);

// Verify popup/popup.html and popup/popup.js still exist
assert.ok(
  fs.existsSync(path.join(ROOT_DIR, 'popup', 'popup.html')),
  'popup/popup.html must exist in subdirectory'
);
assert.ok(
  fs.existsSync(path.join(ROOT_DIR, 'popup', 'popup.js')),
  'popup/popup.js must exist in subdirectory'
);
console.log('✓ Test 1: Orphan root files removed and subdirectory popup files preserved.\n');

// 2. Run packaging script
console.log('[Test 2] Running packaging script scripts/package_release.js...');
const scriptPath = path.join(ROOT_DIR, 'scripts', 'package_release.js');
assert.ok(fs.existsSync(scriptPath), 'scripts/package_release.js must exist');

const packOutput = child_process.execSync(`node "${scriptPath}"`, {
  cwd: ROOT_DIR,
  encoding: 'utf8'
});
console.log(packOutput.trim());
console.log('✓ Test 2: Packaging script executed successfully.\n');

// 3. Inspect zip file existence and size
console.log('[Test 3] Inspecting package zip artifact...');
assert.ok(fs.existsSync(ZIP_PATH), `Zip package must exist at ${ZIP_PATH}`);

const stat = fs.statSync(ZIP_PATH);
const sizeBytes = stat.size;
const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
console.log(`Zip file size: ${sizeBytes} bytes (${sizeMB} MB)`);

// Must be well below 15MB and have reasonable payload
assert.ok(
  sizeBytes < 15 * 1024 * 1024,
  `Package size (${sizeMB} MB) exceeds maximum allowed 15MB limit`
);
assert.ok(
  sizeBytes > 100 * 1024,
  `Package size (${sizeMB} MB) unexpectedly small, files may be missing`
);
console.log('✓ Test 3: Package size is well below 15MB.\n');

// 4. Inspect zip entry contents
console.log('[Test 4] Inspecting entries inside release zip...');

function readZipEntryNames(zipFilePath) {
  const buf = fs.readFileSync(zipFilePath);
  let eocdOffset = -1;
  // Search backward for End of Central Directory signature: 0x06054b50
  for (let i = buf.length - 22; i >= 0; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) {
      eocdOffset = i;
      break;
    }
  }
  if (eocdOffset === -1) {
    throw new Error('Invalid zip file: EOCD not found');
  }

  const totalEntries = buf.readUInt16LE(eocdOffset + 10);
  const cdOffset = buf.readUInt32LE(eocdOffset + 16);

  const entryNames = [];
  let curr = cdOffset;
  for (let i = 0; i < totalEntries; i++) {
    const sig = buf.readUInt32LE(curr);
    if (sig !== 0x02014b50) break;
    const nameLen = buf.readUInt16LE(curr + 28);
    const extraLen = buf.readUInt16LE(curr + 30);
    const commentLen = buf.readUInt16LE(curr + 32);
    const name = buf.toString('utf8', curr + 46, curr + 46 + nameLen);
    entryNames.push(name.replace(/\\/g, '/'));
    curr += 46 + nameLen + extraLen + commentLen;
  }
  return entryNames;
}

const entries = readZipEntryNames(ZIP_PATH);
console.log(`Total zip entries: ${entries.length}`);

// Strictly forbidden patterns
const forbiddenExecRegex = /\.(exe|bat|cmd|sh)$/i;
const forbiddenLogRegex = /\.log$/i;
const forbiddenPrefixes = [
  'native/bin/',
  'tests/',
  'docs/',
  '.superpowers/',
  '.git',
  'dist/',
  'scripts/'
];

for (const entry of entries) {
  // Check for executable binaries
  assert.ok(
    !forbiddenExecRegex.test(entry),
    `Forbidden executable found in zip: ${entry}`
  );

  // Check for log files
  assert.ok(
    !forbiddenLogRegex.test(entry),
    `Forbidden log file found in zip: ${entry}`
  );

  // Check forbidden prefixes
  for (const prefix of forbiddenPrefixes) {
    assert.ok(
      !entry.startsWith(prefix) && !entry.includes('/' + prefix),
      `Forbidden entry under ${prefix} found in zip: ${entry}`
    );
  }

  // Check package files
  assert.ok(
    entry !== 'package.json' && entry !== 'package-lock.json',
    `package.json or package-lock.json should not be in release zip: ${entry}`
  );

  // Check orphan root popup files
  assert.ok(
    entry !== 'popup.html' && entry !== 'popup.js',
    `Orphan root popup file found in zip: ${entry}`
  );
}

// Required entries
const requiredEntries = [
  'manifest.json',
  'background.chrome.js',
  'popup/popup.html',
  'popup/popup.js',
  'downloads/downloads.html',
  'downloads/downloads.js'
];

for (const req of requiredEntries) {
  assert.ok(
    entries.includes(req),
    `Required entry missing from release zip: ${req}`
  );
}

console.log('✓ Test 4: All zip entries strictly verified: 0 executables, 0 logs, 0 forbidden directories, all required files present.\n');

console.log('======================================================');
console.log('ALL PACKAGING & RELEASE CLEANLINESS TESTS PASSED! 🎉');
console.log('======================================================');

// Restore original zip so working tree remains 100% clean
if (originalZipBytes) {
  fs.writeFileSync(ZIP_PATH, originalZipBytes);
}
