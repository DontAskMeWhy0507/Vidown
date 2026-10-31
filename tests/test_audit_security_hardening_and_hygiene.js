const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: Audit Security Hardening & Hygiene ---');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Verify FFmpeg protocol whitelist in native/host.js
const hostJsPath = path.join(ROOT_DIR, 'native', 'host.js');
assert.ok(fs.existsSync(hostJsPath), 'native/host.js must exist');
const hostJs = fs.readFileSync(hostJsPath, 'utf8');

assert.ok(
  hostJs.includes('ffmpegProtoWhitelist') || hostJs.includes('isRemoteFfmpegInput'),
  'native/host.js must conditionally select protocol whitelist based on whether input is remote'
);
assert.ok(
  hostJs.includes("protoWhitelist = hasLocalInput") || hostJs.includes("protoWhitelist = isNetVideo"),
  'native/host.js ffmpegMux must only allow file protocol when local inputs are present'
);

// 2. Verify yt-dlp `--` delimiter and `--config-location` cookie shielding
assert.ok(
  hostJs.includes("args.push('--', targetUrl)"),
  'native/host.js must pass -- delimiter before targetUrl to prevent option injection'
);
assert.ok(
  hostJs.includes('--config-location') && hostJs.includes('tempConfigFile'),
  'native/host.js must write cookie to tempConfigFile and pass via --config-location to shield from process list'
);
assert.ok(
  hostJs.includes('cleanupConfig()'),
  'native/host.js must clean up temp config file on exit or fallback'
);

// 3. Verify native/com.savior.helper.json hygiene
const helperManifestPath = path.join(ROOT_DIR, 'native', 'com.savior.helper.json');
assert.ok(fs.existsSync(helperManifestPath), 'native/com.savior.helper.json must exist');
const helperManifest = JSON.parse(fs.readFileSync(helperManifestPath, 'utf8'));
assert.ok(
  !helperManifest.path.includes('F:\\') && !helperManifest.path.includes('C:\\'),
  'native/com.savior.helper.json must not commit absolute dev machine paths'
);

// 4. Verify .gitignore ignores dist/
const gitignorePath = path.join(ROOT_DIR, '.gitignore');
assert.ok(fs.existsSync(gitignorePath), '.gitignore must exist');
const gitignore = fs.readFileSync(gitignorePath, 'utf8');
assert.ok(
  gitignore.includes('dist/'),
  '.gitignore must exclude dist/ directory'
);

// 5. Verify LICENSE and README.md exist and contain attribution
const licensePath = path.join(ROOT_DIR, 'LICENSE');
assert.ok(fs.existsSync(licensePath), 'LICENSE must exist');
const license = fs.readFileSync(licensePath, 'utf8');
assert.ok(license.includes('MIT License') && license.includes('Savior'), 'LICENSE must include MIT terms and Savior attribution');

const readmePath = path.join(ROOT_DIR, 'README.md');
assert.ok(fs.existsSync(readmePath), 'README.md must exist');
const readme = fs.readFileSync(readmePath, 'utf8');
assert.ok(readme.includes('Vidown') && readme.includes('Black Box'), 'README.md must document Vidown and the black-box architecture');

console.log('✅ ALL AUDIT SECURITY HARDENING & HYGIENE CHECKS PASSED!');
