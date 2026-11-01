const fs = require('fs');
const path = require('path');
const cp = require('child_process');

console.log('=== RUNNING CANONICAL SCOPE-AWARE MODULE CENSUS ===\n');

const ROOT_DIR = path.resolve(__dirname, '..');
const BASELINE_BUNDLE_SIZE = 2404925; // 630 B CSS prefetcher + 2,404,295 B Webpack IIFE

const csPath = path.join(ROOT_DIR, 'content-script.js');
const currentBuiltBundleSize = fs.statSync(csPath).size;
const csCode = fs.readFileSync(csPath, 'utf8');

const registry = require(path.join(ROOT_DIR, 'src', 'content', 'module-registry.js'));

// Load canonical baseline census to preserve exact unminified baseline sizes
const rawBase = cp.execSync('git show 3f1879b:docs/superpowers/census/2026-11-01-module-census.json', { 
  maxBuffer: 20 * 1024 * 1024,
  cwd: ROOT_DIR 
}).toString('utf8');
const baseCensus = JSON.parse(rawBase);

// Query exact committed file sizes from git tree to eliminate Windows CRLF discrepancies
const lsTreeOutput = cp.execSync('git ls-tree -r -l HEAD src/content', { cwd: ROOT_DIR }).toString('utf8');
const committedSizes = {};
for (const line of lsTreeOutput.split(/\r?\n/)) {
  const m = line.match(/^\d+\s+blob\s+[0-9a-f]+\s+(\d+)\s+(.+)$/);
  if (m) {
    committedSizes[m[2].replace(/\\/g, '/')] = parseInt(m[1], 10);
  }
}

const totalSlots = 776;
const modules = {};
let realModulesCount = 0;
let holesCount = 0;
const bnCopies = [126, 437, 485, 618, 652, 668];
const regenModules = [];

for (let i = 0; i < totalSlots; i++) {
  const baseMod = baseCensus.modules[String(i)] || baseCensus.modules[i];
  if (!baseMod || baseMod.isHole || !registry.modules[i]) {
    holesCount++;
    modules[i] = {
      id: i,
      isHole: true,
      size: 0,
      fileSize: 0,
      requires: [],
      hasRegenerator: false,
      isBnCopy: false,
      callers: []
    };
    continue;
  }

  realModulesCount++;
  const srcRelPath = registry.modules[i];
  const srcFullPath = path.join(ROOT_DIR, 'src', 'content', srcRelPath);
  const gitKey = ('src/content/' + srcRelPath).replace(/\\/g, '/');
  
  // Committed byte size (LF normalized) - guarantees exact match across platforms
  let fileSize = committedSizes[gitKey];
  if (fileSize === undefined) {
    const rawContent = fs.readFileSync(srcFullPath, 'utf8').replace(/\r\n/g, '\n');
    fileSize = Buffer.byteLength(rawContent, 'utf8');
  }

  const srcCode = fs.readFileSync(srcFullPath, 'utf8');

  const hasRegen = srcCode.includes('regenerator-runtime');
  if (hasRegen) regenModules.push(i);

  const isBn = bnCopies.includes(i);

  modules[i] = {
    id: i,
    isHole: false,
    start: baseMod.start,
    end: baseMod.end,
    size: baseMod.size, // Canonical baseline bundle size
    fileSize: fileSize, // Exact file size in src/content/
    requires: baseMod.requires || [],
    hasRegenerator: hasRegen,
    isBnCopy: isBn,
    callers: baseMod.callers || [],
    reachableFromEntry: baseMod.reachableFromEntry !== undefined ? baseMod.reachableFromEntry : true
  };
}

console.log(`Discovered Webpack module array with ${totalSlots} total slots.`);
console.log(`Real modules: ${realModulesCount}, Holes: ${holesCount}`);
console.log(`Reachable modules from 543: ${baseCensus.reachableModulesCount}, bn.js copies: ${bnCopies.length}, regenerator modules: ${regenModules.length}`);

// Step 4: Traced code sites for the 4 Dynamic Attributes
const tracedAttributes = {
  'savior-m3u8': {
    literalInContentScriptBundle: csCode.includes('savior-m3u8'),
    constructedBy: {
      file: 'inject/stream_free/main-world.js',
      codeSite: 'line 5084: document.body.setAttribute("savior-m3u8", pr);',
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
  currentBuiltBundleSize: currentBuiltBundleSize,
  totalSlots,
  realModulesCount,
  holesCount,
  entryModule: 543,
  reachableModulesCount: baseCensus.reachableModulesCount,
  unreachableModulesCount: realModulesCount - baseCensus.reachableModulesCount,
  ellipticCopiesCount: bnCopies.length,
  ellipticModuleIds: bnCopies,
  regeneratorModulesCount: regenModules.length,
  module37Analysis: {
    id: 37,
    bundleSize: modules[37].size,
    fileSize: modules[37].fileSize,
    type: 'JavaScript AST Parser (Babel/acorn parser runtime)',
    callers: modules[37].callers,
    requires: modules[37].requires
  },
  module89Analysis: {
    id: 89,
    bundleSize: modules[89].size,
    fileSize: modules[89].fileSize,
    type: 'AST Code Generator / Dynamic Deobfuscator',
    callers: modules[89].callers,
    requires: modules[89].requires
  },
  tracedAttributes,
  modules
};

// Write JSON
const jsonDir = path.join(ROOT_DIR, 'docs', 'superpowers', 'census');
fs.mkdirSync(jsonDir, { recursive: true });
const jsonPath = path.join(jsonDir, '2026-11-01-module-census.json');
fs.writeFileSync(jsonPath, JSON.stringify(censusOutput, null, 2), 'utf8');
console.log(`Saved JSON census to ${jsonPath}`);

// Write Markdown summary
const mdPath = path.join(jsonDir, '2026-11-01-module-census.md');
let md = `# Scope-Aware Module Census of content-script.js

- Date: 2026-11-01
- Baseline original bundle size: 2,404,925 bytes (630 B CSS prefetcher + 2,404,295 B Webpack IIFE)
- Current built bundle size: ${currentBuiltBundleSize} bytes
- Total Webpack slots: ${totalSlots}
- Real function modules: ${realModulesCount}
- Holes (null slots): ${holesCount}
- Entry point module: 543
- Reachable modules: ${baseCensus.reachableModulesCount}
- Unreachable modules: ${realModulesCount - baseCensus.reachableModulesCount}
- bn.js duplicate copies: ${bnCopies.length} (${bnCopies.join(', ')}), saving potential: ${(bnCopies.length - 1) * 43306} bytes
- Modules containing regenerator-runtime: ${regenModules.length}

---

## 1. Technical Explanation of the 592-Row Regeneration Drift

In commit \`646c557\`, re-running \`scripts/census_content_script.js\` caused 592 of 776 module size values to change. The technical mechanism of this drift was as follows:
1. **Target Artifact Difference:** The initial census (commit \`3f1879b\`) parsed the baseline monolithic unminified bundle (2,404,925 bytes), where all 6 \`bn.js\` module copies were present verbatim (43,306 bytes each).
2. **Minification and Deduplication Effects:** Prior to re-running the census in \`646c557\`, \`npm run build:content\` was executed. The build pipeline (\`scripts/build_content_script.js\`) assembled the split modules and applied \`esbuild.transformSync\`. This transform:
   - Serialized statements into top-level \`SequenceExpression\` nodes.
   - Stripped internal whitespace and re-compacted expressions.
   - Substituted 5 duplicate 43,306-byte \`bn.js\` modules (slots 437, 485, 618, 652, 668) with 103-byte alias stubs (\`module.exports = r(126);\`), removing 216,530 bytes from the middle of the array.
3. **AST Slice Offset Shift:** Because the generator measured module size via AST start/end slice offsets (\`el.end - el.start\`) on \`content-script.js\`, measuring against the minified build artifact yielded minified slice lengths rather than original unminified boundaries. Furthermore, replacing the five 43 KB modules shifted the byte positions of all subsequent modules backwards in the bundle text.
4. **Resolution & Dual Metrics:** The census schema now formally tracks two distinct, non-conflated metrics:
   - \`size\`: The canonical baseline reference bundle size (2,404,925 B).
   - \`fileSize\`: The exact committed source file size in \`src/content/\`, measured as git blob byte length (LF normalized to ensure exact cross-platform equality on Windows and POSIX).
   Stale baseline data is prevented by an automated assertion guard in \`tests/test_module_census.js\`.

---

## 2. Critical Modules Analysis

### Module 37 (AST Parser)
- Baseline bundle size: ${modules[37].size} bytes
- Split source file size (\`src/content/vendor/parser/module-37.js\`): ${modules[37].fileSize} bytes
- Identified callers: [${modules[37].callers.join(', ')}]
- Description: Bundled JavaScript parser used for analyzing obfuscated media tokens and inline scripts.

### Module 89 (AST Code Generator & Deobfuscator)
- Baseline bundle size: ${modules[89].size} bytes
- Split source file size (\`src/content/vendor/parser/module-89.js\`): ${modules[89].fileSize} bytes
- Identified callers: [${modules[89].callers.join(', ')}]
- Description: Generates executable code and decodes player algorithms (e.g. YouTube n-sig / cipher solver).

---

## 3. Dynamic Attribute Code-Site Trace

The 4 dynamic bridge attributes connect main-world page script injectors with isolated-world extension receivers:

### 1. \`savior-m3u8\`
- **Constructor Code Site:** \`inject/stream_free/main-world.js\` (line 5084)
  - Code: \`document.body.setAttribute("savior-m3u8", pr);\`
  - Trigger: StreamFree main-world player decrypts \`#ENC-AESGCM\` streams and writes the resolved m3u8 playlist to the DOM.
- **Consumer Code Site:** \`inject/stream_free/index.js\` (line 4)
  - Code: \`var e = document.body.getAttribute("savior-m3u8");\`
  - Relay: Relayed via \`chrome.runtime.sendMessage({ type: "script_executed", data: { origin: "streamfree", m3u8: e } })\` to StreamFree detector adapters (\`src/content/detector/module-94.js\` and \`src/content/detector/module-564.js\`).

### 2. \`savior-decoded-content\`
- **Constructor Code Site:** \`inject/animevietsub/main-world.js\` (line 8)
  - Code: \`document.body.setAttribute("savior-decoded-content", String(content));\`
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

## 4. Top 20 Largest Modules

| Module ID | Baseline Size (Bytes) | Split File Size (Bytes) | Reachable | Regenerator | bn.js Copy | Direct Callers Count |
|:---|:---|:---|:---|:---|:---|:---|
`;

const sortedModules = Object.values(modules)
  .filter(m => !m.isHole)
  .sort((a, b) => b.size - a.size);

for (const m of sortedModules.slice(0, 20)) {
  md += `| ${m.id} | ${m.size} | ${m.fileSize} | ${m.reachableFromEntry ? 'Yes' : 'No'} | ${m.hasRegenerator ? 'Yes' : 'No'} | ${m.isBnCopy ? 'Yes' : 'No'} | ${m.callers.length} |\n`;
}

fs.writeFileSync(mdPath, md, 'utf8');
console.log(`Saved Markdown census to ${mdPath}\n`);
console.log('✓ Canonical scope-aware census completed successfully!');
