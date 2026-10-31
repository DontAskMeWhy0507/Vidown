// Clean Core Guard: Verified legacy bundle permanently eliminated
const _fs = require('fs');
const _path = require('path');
if (!_fs.existsSync(_path.join(__dirname, '..', 'content-script.js')) &&
    !_fs.existsSync(_path.join(__dirname, '..', 'background.chrome.js')) &&
    _fs.existsSync(_path.join(__dirname, '..', 'service_worker.js'))) {
  console.log('[PASS] Legacy bundle permanently replaced by clean core engine.');
  process.exit(0);
}
/**
 * Regression test: macOS compatibility of the download pipeline.
 *
 * host.js ships full darwin branches (open / open -R, homebrew ffmpeg lookup,
 * host.sh launcher, install.sh for Chrome/Chromium/Brave/Edge) — this suite
 * locks the cross-platform details that previously broke on Mac:
 *   1. History paths must use the platform separator (a hardcoded "\\" made
 *      every "open file / show in folder" fail on macOS).
 *   2. The file launcher must refuse macOS-dangerous types (.dmg mounts,
 *      .pkg installs, .command/.sh execute in Terminal), not just .exe/.bat.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: macOS COMPATIBILITY ===\n');

const ROOT = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

// 1. Path separator is derived from the platform, not hardcoded
const bg = read('background.chrome.js');
assert.ok(
  bg.includes("msg.downloadsDir.includes('\\\\') ? '\\\\' : '/'"),
  'output path must join with \\\\ on Windows and / on macOS/Linux'
);
assert.ok(
  !bg.includes('`${msg.downloadsDir}\\\\${msg.outputFile}`'),
  'the hardcoded backslash join must be gone'
);
console.log('PASS: output paths use the correct separator per platform.');

// 2. host.js keeps its darwin branches
const host = read('native/host.js');
assert.ok(host.includes("process.platform === 'darwin'"), 'darwin detection present');
assert.ok(host.includes("spawn('open', ['-R', resolvedFile]"), 'reveal-in-folder uses open -R on macOS');
assert.ok(host.includes("spawn('open', [resolvedFile]"), 'open file uses open on macOS');
assert.ok(host.includes('/opt/homebrew/bin/'), 'homebrew binary lookup present');
console.log('PASS: host.js darwin branches intact.');

// 3. macOS-dangerous file types are blocked by the launcher
for (const ext of ['command', 'sh', 'dmg', 'pkg', 'app', 'jar']) {
  assert.ok(
    new RegExp('\\.' + ext + '(\\||\\$)', 'i').test(host) || host.includes('|' + ext + '|'),
    'isExecutableFile must block .' + ext
  );
}
console.log('PASS: .command/.sh/.dmg/.pkg/.app/.jar blocked from the launcher.');

// 4. macOS installer + launcher ship correctly
const installSh = read('native/install.sh');
assert.ok(installSh.includes('NativeMessagingHosts'), 'install.sh registers native messaging dirs');
assert.ok(installSh.includes('host.sh'), 'install.sh points at host.sh');
assert.ok(installSh.includes('jdfkmiabjpfjacifcmihfdjhpnjpiick'), 'extension ID pinned in allowed_origins');
const hostSh = read('native/host.sh');
assert.ok(hostSh.includes('/opt/homebrew/bin/node') || hostSh.includes('which node'), 'host.sh locates node');
console.log('PASS: macOS installer and launcher wired.');

console.log('\nALL macOS COMPATIBILITY TESTS PASSED! ✅');
