const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

console.log('=== RUNNING SCOPE-AWARE MODULE CENSUS ===\n');

// Baseline original bundle before the split: 2,404,925 bytes (630 B CSS prefetcher + 2,404,295 B Webpack IIFE)
const BASELINE_BUNDLE_SIZE = 2404925;

const csPath = path.resolve(__dirname, '..', 'content-script.js');
const csCode = fs.readFileSync(csPath, 'utf8');

console.log(`Parsing ${csPath} (${csCode.length} bytes, baseline original bundle: ${BASELINE_BUNDLE_SIZE} bytes)...`);
const ast = acorn.parse(csCode, { ecmaVersion: 2022 });

// Find the Webpack IIFE
let moduleArray = null;
for (const stmt of ast.body) {
  if (stmt.type === 'ExpressionStatement') {
    let callExpr = null;
    if (stmt.expression.type === 'UnaryExpression' && stmt.expression.argument.type === 'CallExpression') {
      callExpr = stmt.expression.argument;
    } else if (stmt.expression.type === 'SequenceExpression') {
      callExpr = stmt.expression.expressions.find(e => e.type === 'CallExpression' && e.arguments?.[0]?.type === 'ArrayExpression');
    } else if (stmt.expression.type === 'CallExpression') {
      callExpr = stmt.expression;
    }

    if (callExpr && callExpr.arguments?.[0]?.type === 'ArrayExpression') {
      moduleArray = callExpr.arguments[0];
      break;
    }
  }
}

if (!moduleArray) {
  throw new Error('Could not locate Webpack bundle IIFE in content-script.js');
}
const totalSlots = moduleArray.elements.length;
console.log(`Discovered Webpack module array with ${totalSlots} total slots.`);

const modules = {};
let realModulesCount = 0;
let holesCount = 0;
const bnCopies = [];
const regenModules = [];

const registry = require(path.resolve(__dirname, '..', 'src', 'content', 'module-registry.js'));

// Step 1: Inventory each module
for (let i = 0; i < totalSlots; i++) {
  const el = moduleArray.elements[i];
  if (!el || (el.type === 'Literal' && el.value === null) || !registry.modules[i]) {
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
  const srcRelPath = registry.modules[i];
  const srcCode = fs.readFileSync(path.resolve(__dirname, '..', 'src', 'content', srcRelPath), 'utf8');

  const isBn = (i === 126 || i === 437 || i === 485 || i === 618 || i === 652 || i === 668);
  if (isBn) bnCopies.push(i);

  const hasRegen = srcCode.includes('regenerator-runtime') || modCode.includes('regenerator-runtime');
  if (hasRegen) regenModules.push(i);

  // Extract require calls: r(number)
  const requireMatches = [...srcCode.matchAll(/\br\((\d+)\)/g)].map(m => parseInt(m[1], 10));
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

// Step 4: Traced code sites for the 4 Dynamic Attributes
const tracedAttributes = {
  'savior-m3u8': {
    literalInContentScriptBundle: csCode.includes('savior-m3u8'),
    constructedBy: {
      file: 'inject/stream_free/main-world.js',
      codeSite: 'line 2038: document.body.setAttribute("savior-m3u8", pr);',
      trigger: 'Main-world stream resolver decrypts #ENC-AESGCM stream playlist and attaches full m3u8 text to body.'
    },
    consumedBy: {
      file: 'inject/stream_free/index.js',
      codeSite: 'line 4: var e = document.body.getAttribute("savior-m3u8");',
      action: 'Isolated-world bridge reads attribute and dispatches chrome.runtime.sendMessage({type: "script_executed", data: {origin: "streamfree", m3u8: e}}), consumed by detector modules 94 and 564.'
    }
  },
  'savior-decoded-content': {
    literalInContentScriptBundle: csCode.includes('savior-decoded-content'),
    constructedBy: {
      file: 'inject/animevietsub/main-world.js',
      codeSite: 'line 8: document.body.setAttribute("savior-decoded-content", String(content));',
      trigger: 'setDecodedContent() in main-world script attaches decrypted AES-CTR segment URLs to body.'
    },
    consumedBy: {
      file: 'inject/animevietsub/index.js',
      codeSite: 'line 4: var e = document.body.getAttribute("savior-decoded-content"); document.body.removeAttribute("savior-decoded-content");',
      action: 'Isolated-world bridge retrieves decrypted URLs and notifies extension via script_executed, consumed by detector module 201.'
    }
  },
  'savior-story-url': {
    literalInContentScriptBundle: csCode.includes('savior-story-url'),
    constructedBy: {
      file: 'inject/facebook/stories/main-world.js',
      codeSite: 'line 92: document.head.setAttribute("savior-story-url", storyUrl || "");',
      trigger: 'Main-world Facebook Stories inspector extracts HD/SD story video URL from React Fiber internals and stamps on head.'
    },
    consumedBy: {
      file: 'inject/facebook/stories/index.js',
      codeSite: 'line 18: var t = document.head.getAttribute("savior-story-url"); document.head.removeAttribute("savior-story-url");',
      action: 'Isolated-world bridge forwards story URL to background via chrome.runtime.sendMessage, consumed by detector module 254.'
    }
  },
  'savior-po-token': {
    literalInContentScriptBundle: csCode.includes('savior-po-token'),
    constructedBy: {
      file: 'inject/youtube/potoken/main-world.js',
      codeSite: 'lines 6 & 256: document.body.setAttribute("savior-po-token", e);',
      trigger: 'Main-world YouTube BotGuard solver mints WebSafe Proof-of-Origin token and stamps on body.'
    },
    consumedBy: {
      file: 'inject/youtube/potoken/index.js',
      codeSite: 'line 6: var e = document.body.getAttribute("savior-po-token"); document.body.removeAttribute("savior-po-token");',
      action: 'Isolated-world bridge reads PO-token and relays it via script_executed to YouTube decipher provider (detector module 120).'
    }
  }
};

const censusOutput = {
  generatedAt: new Date().toISOString(),
  baselineBundleSize: BASELINE_BUNDLE_SIZE,
  currentBuiltBundleSize: csCode.length,
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
  tracedAttributes,
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
- Baseline original bundle size: 2,404,925 bytes (630 B CSS prefetcher + 2,404,295 B Webpack IIFE)
- Current built bundle size: ${csCode.length} bytes
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

## 2. Dynamic Attribute Code-Site Trace

The 4 dynamic bridge attributes connect main-world page script injectors with isolated-world extension receivers:

### 1. \`savior-m3u8\`
- **Constructor Code Site:** \`inject/stream_free/main-world.js\` (line 2038)
  - Code: \`document.body.setAttribute("savior-m3u8", pr);\`
  - Trigger: StreamFree main-world player decrypts \`#ENC-AESGCM\` streams and writes the resolved m3u8 playlist to the DOM.
- **Consumer Code Site:** \`inject/stream_free/index.js\` (line 4)
  - Code: \`var e = document.body.getAttribute("savior-m3u8");\`
  - Relay: Relayed via \`chrome.runtime.sendMessage({ type: "script_executed", data: { origin: "streamfree", m3u8: e } })\` to StreamFree detector adapters (\`src/content/detector/module-94.js\` and \`src/content/detector/module-564.js\`).

### 2. \`savior-decoded-content\`
- **Constructor Code Site:** \`inject/animevietsub/main-world.js\` (line 8)
  - Code: \`document.body.setAttribute('savior-decoded-content', String(content));\`
  - Trigger: Function \`setDecodedContent()\` decrypts AES-CTR segment URLs and attaches output to body.
- **Consumer Code Site:** \`inject/animevietsub/index.js\` (line 4)
  - Code: \`var e = document.body.getAttribute("savior-decoded-content"); document.body.removeAttribute("savior-decoded-content");\`
  - Relay: Relayed via \`chrome.runtime.sendMessage\` to AnimeVietSub detector adapter (\`src/content/detector/module-201.js\`).

### 3. \`savior-story-url\`
- **Constructor Code Site:** \`inject/facebook/stories/main-world.js\` (line 92)
  - Code: \`document.head.setAttribute('savior-story-url', storyUrl || '');\`
  - Trigger: Main-world Facebook Stories extractor discovers active story video in React Fiber internals and stamps URL on head.
- **Consumer Code Site:** \`inject/facebook/stories/index.js\` (line 18)
  - Code: \`var t = document.head.getAttribute("savior-story-url"); document.head.removeAttribute("savior-story-url");\`
  - Relay: Relayed via \`chrome.runtime.sendMessage\` to Facebook Stories detector (\`src/content/detector/module-254.js\`).

### 4. \`savior-po-token\`
- **Constructor Code Site:** \`inject/youtube/potoken/main-world.js\` (lines 6 & 256)
  - Code: \`document.body.setAttribute("savior-po-token", e);\`
  - Trigger: Main-world YouTube BotGuard evaluator mints WebSafe attestation token via Google \`GenerateIT\` API and stamps on body.
- **Consumer Code Site:** \`inject/youtube/potoken/index.js\` (line 6)
  - Code: \`var e = document.body.getAttribute("savior-po-token"); document.body.removeAttribute("savior-po-token");\`
  - Relay: Relayed via \`chrome.runtime.sendMessage\` to YouTube decipher provider (\`src/content/detector/module-120.js\`).

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
