const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_INJECT = path.join(ROOT_DIR, 'src', 'inject');
const DEST_INJECT = path.join(ROOT_DIR, 'inject');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('=== BUILDING INJECT EXTRACTORS ===\n');
copyDir(SRC_INJECT, DEST_INJECT);
console.log('✓ Successfully synchronized inject extractors from src/inject/ to inject/!\n');
