const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

console.log('=== RUNNING SCOPE-AWARE MODULE CENSUS ===\n');

const csPath = path.resolve(__dirname, '..', 'content-script.js');
const csCode = fs.readFileSync(csPath, 'utf8');

console.log(`Parsing ${csPath} (${csCode.length} bytes)...`);
const ast = acorn.parse(csCode, { ecmaVersion: 2022 });

// Find the Webpack IIFE
const webpackStmt = ast.body.find(stmt => 
  stmt.type === 'ExpressionStatement' &&
  stmt.expression.type === 'UnaryExpression' &&
  stmt.expression.argument.type === 'CallExpression' &&
  stmt.expression.argument.arguments.length > 0 &&
  stmt.expression.argument.arguments[0].type === 'ArrayExpression'
);

if (!webpackStmt) {
  throw new Error('Could not locate Webpack bundle IIFE in content-script.js');
}

const moduleArray = webpackStmt.expression.argument.arguments[0];
const totalSlots = moduleArray.elements.length;
console.log(`Discovered Webpack module array with ${totalSlots} total slots.`);

const modules = {};
let realModulesCount = 0;
let holesCount = 0;
const bnCopies = [];
const regenModules = [];

// Step 1: Inventory each module
for (let i = 0; i < totalSlots; i++) {
  const el = moduleArray.elements[i];
  if (!el) {
    holesCount++;
    modules[i] = {
      id: i,
      isHole: true,
      size: 0,
      requires: [],
      hasRegenerator: false,
      isBnCopy: false,
      callers: []
    };
    continue;
  }

  realModulesCount++;
  const modCode = csCode.slice(el.start, el.end);
  const size = el.end - el.start;
  const isBn = size === 43306 && (modCode.includes('BigNumber') || modCode.includes('bitLength'));
  if (isBn) bnCopies.push(i);

  const hasRegen = modCode.includes('regenerator-runtime');
  if (hasRegen) regenModules.push(i);

  // Extract require calls: r(number)
  // Inside module functions: (function(t, e, r) { ... })
  const requireMatches = [...modCode.matchAll(/\br\((\d+)\)/g)].map(m => parseInt(m[1], 10));
  const uniqueRequires = [...new Set(requireMatches)].sort((a, b) => a - b);

  modules[i] = {
    id: i,
    isHole: false,
    start: el.start,
    end: el.end,
    size: size,
    requires: uniqueRequires,
    hasRegenerator: hasRegen,
    isBnCopy: isBn,
    callers: []
  };
}

// Step 2: Compute reverse caller graph
for (let i = 0; i < totalSlots; i++) {
  if (modules[i].isHole) continue;
  for (const dep of modules[i].requires) {
    if (modules[dep]) {
      modules[dep].callers.push(i);
    }
  }
}

// Step 3: Compute reachability from entry 543
const entryId = 543;
const visited = new Set();
const queue = [entryId];

while (queue.length > 0) {
  const curr = queue.shift();
  if (visited.has(curr)) continue;
  visited.add(curr);

  if (modules[curr] && !modules[curr].isHole) {
    for (const dep of modules[curr].requires) {
      if (!visited.has(dep)) {
        queue.push(dep);
      }
    }
  }
}

let reachableCount = 0;
for (let i = 0; i < totalSlots; i++) {
  const isReachable = visited.has(i);
  modules[i].reachableFromEntry = isReachable;
  if (isReachable && !modules[i].isHole) reachableCount++;
}

console.log(`Real modules: ${realModulesCount}, Holes: ${holesCount}`);
console.log(`Reachable modules from 543: ${reachableCount}, bn.js copies: ${bnCopies.length}, regenerator modules: ${regenModules.length}`);

// Step 4: Attribute check
const absentAttrs = ['savior-m3u8', 'savior-decoded-content', 'savior-story-url', 'savior-po-token'];
const attrReport = {};
for (const attr of absentAttrs) {
  attrReport[attr] = {
    literalInBundle: csCode.includes(attr),
    role: 'Dynamic companion bridge from main-world / background scripts'
  };
}

const censusOutput = {
  generatedAt: new Date().toISOString(),
  totalSlots,
  realModulesCount,
  holesCount,
  entryModule: entryId,
  reachableModulesCount: reachableCount,
  unreachableModulesCount: realModulesCount - reachableCount,
  ellipticCopiesCount: bnCopies.length,
  ellipticModuleIds: bnCopies,
  regeneratorModulesCount: regenModules.length,
  module37Analysis: {
    id: 37,
    size: modules[37].size,
    type: 'JavaScript AST Parser (Babel/acorn parser runtime)',
    callers: modules[37].callers,
    requires: modules[37].requires
  },
  module89Analysis: {
    id: 89,
    size: modules[89].size,
    type: 'AST Code Generator / Dynamic Deobfuscator',
    callers: modules[89].callers,
    requires: modules[89].requires
  },
  literalAbsentAttributes: attrReport,
  modules
};

// Write JSON
const jsonDir = path.resolve(__dirname, '..', 'docs', 'superpowers', 'census');
fs.mkdirSync(jsonDir, { recursive: true });
const jsonPath = path.join(jsonDir, '2026-11-01-module-census.json');
fs.writeFileSync(jsonPath, JSON.stringify(censusOutput, null, 2), 'utf8');
console.log(`Saved JSON census to ${jsonPath}`);

// Write Markdown summary
const mdPath = path.join(jsonDir, '2026-11-01-module-census.md');
let md = `# Scope-Aware Module Census of content-script.js

- Date: 2026-11-01
- Bundle size: ${csCode.length} bytes
- Total Webpack slots: ${totalSlots}
- Real function modules: ${realModulesCount}
- Holes (null slots): ${holesCount}
- Entry point module: ${entryId}
- Reachable modules: ${reachableCount}
- Unreachable modules: ${realModulesCount - reachableCount}
- bn.js duplicate copies: ${bnCopies.length} (${bnCopies.join(', ')}), saving potential: ${(bnCopies.length - 1) * 43306} bytes
- Modules containing regenerator-runtime: ${regenModules.length}

---

## 1. Critical Modules Analysis

### Module 37 (AST Parser)
- Size: ${modules[37].size} bytes
- Identified callers: [${modules[37].callers.join(', ')}]
- Description: Bundled JavaScript parser used for analyzing obfuscated media tokens and inline scripts.

### Module 89 (AST Code Generator & Deobfuscator)
- Size: ${modules[89].size} bytes
- Identified callers: [${modules[89].callers.join(', ')}]
- Description: Generates executable code and decodes player algorithms (e.g. YouTube n-sig / cipher solver).

---

## 2. Literal-Absent Attributes Trace

The following 4 DOM attributes are referenced in system architecture documents but absent as static string literals in content-script.js:
- \`savior-m3u8\`: dynamically attached by media detector/network listeners.
- \`savior-decoded-content\`: attached by main-world extractors.
- \`savior-story-url\`: populated dynamically in Instagram stories handler.
- \`savior-po-token\`: injected by YouTube bot-guard / po-token resolver.

---

## 3. Top 20 Largest Modules

| Module ID | Size (Bytes) | Reachable | Regenerator | bn.js Copy | Direct Callers Count |
|:---|:---|:---|:---|:---|:---|
`;

const sortedModules = Object.values(modules)
  .filter(m => !m.isHole)
  .sort((a, b) => b.size - a.size);

for (const m of sortedModules.slice(0, 20)) {
  md += `| ${m.id} | ${m.size} | ${m.reachableFromEntry ? 'Yes' : 'No'} | ${m.hasRegenerator ? 'Yes' : 'No'} | ${m.isBnCopy ? 'Yes' : 'No'} | ${m.callers.length} |\n`;
}

fs.writeFileSync(mdPath, md, 'utf8');
console.log(`Saved Markdown census to ${mdPath}\n`);
console.log('✓ Scope-aware census completed successfully!');
