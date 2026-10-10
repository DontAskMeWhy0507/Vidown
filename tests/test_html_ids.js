const fs = require('fs');
const html = fs.readFileSync('downloads/downloads.html', 'utf8');
const js = fs.readFileSync('downloads/downloads.js', 'utf8');

const regex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const ids = new Set();
let match;
while ((match = regex.exec(js)) !== null) {
  if (!match[1].startsWith('card_')) {
    ids.add(match[1]);
  }
}

console.log('Total static IDs queried in downloads.js:', ids.size);
let missingCount = 0;
for (const id of ids) {
  const present = html.includes(`id="${id}"`) || html.includes(`id='${id}'`);
  if (!present) {
    console.log('✗ MISSING in downloads.html:', id);
    missingCount++;
  } else {
    console.log('✓ Present:', id);
  }
}

if (missingCount > 0) {
  console.log(`\nFound ${missingCount} missing IDs!`);
} else {
  console.log('\nAll IDs present!');
}
