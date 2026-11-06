const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const registry = require('../src/content/module-registry');
const hashesPath = path.resolve(__dirname, '../tests/fixtures/unpacked_module_hashes.json');
const fixtureCensusPath = path.resolve(__dirname, '../tests/fixtures/module_census.json');
const docsCensusPath = path.resolve(__dirname, '../docs/superpowers/census/2026-11-01-module-census.json');
const bundlePath = path.resolve(__dirname, '../content-script.js');

const hashes = JSON.parse(fs.readFileSync(hashesPath, 'utf8'));
const census = JSON.parse(fs.readFileSync(fixtureCensusPath, 'utf8'));

let updatedCount = 0;
for (const [idStr, relPath] of Object.entries(registry.modules)) {
  const fullPath = path.resolve(__dirname, '../src/content', relPath);
  if (!fs.existsSync(fullPath)) continue;
  const raw = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const size = Buffer.byteLength(raw, 'utf8');
  const sha256 = crypto.createHash('sha256').update(raw, 'utf8').digest('hex');

  if (hashes[idStr]) {
    if (hashes[idStr].sha256 !== sha256 || hashes[idStr].size !== size) {
      hashes[idStr].sha256 = sha256;
      hashes[idStr].size = size;
      updatedCount++;
    }
  }
  if (census.modules[idStr]) {
    census.modules[idStr].fileSize = size;
  }
}

if (fs.existsSync(bundlePath)) {
  census.currentBuiltBundleSize = fs.statSync(bundlePath).size;
}

const serializedCensus = JSON.stringify(census, null, 2) + '\n';
fs.writeFileSync(hashesPath, JSON.stringify(hashes, null, 2) + '\n', 'utf8');
fs.writeFileSync(fixtureCensusPath, serializedCensus, 'utf8');
if (fs.existsSync(docsCensusPath)) {
  fs.writeFileSync(docsCensusPath, serializedCensus, 'utf8');
}

console.log(`Synced ${updatedCount} updated module hashes & census fileSize. Built bundle size: ${census.currentBuiltBundleSize}`);
