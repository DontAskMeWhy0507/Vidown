const fs = require('fs');
const path = require('path');
const reg = require('../src/content/module-registry.js');

console.log('Regenerating src/content/slots.js...');

const TOTAL_SLOTS = 776;
const importLines = [];
const slotArray = [];

for (let i = 0; i < TOTAL_SLOTS; i++) {
  const relPath = reg.modules[i];
  if (relPath) {
    importLines.push(`import m${i} from './${relPath}';`);
    slotArray.push(`  m${i}`);
  } else {
    slotArray.push('  null');
  }
}

const slotsCode = `${importLines.join('\n')}\n\nexport default [\n${slotArray.join(',\n')}\n];\n`;

fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'content', 'slots.js'), slotsCode, 'utf8');
console.log('Successfully regenerated src/content/slots.js!');
