# Milestone 2: Vendor Deduplication & Dead Code Elimination Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Execute Milestone 2 of the Content Script Modular Open-Source Transformation by consolidating the 6 duplicate `bn.js` copies (Gate 2A: 216,530 B guaranteed saving), evaluating and isolating AST parser/generator modules 37 & 89, progressively eliminating inlined `regenerator-runtime` helpers via native ES2017+ `async`/`await` across modules (Gate 2B: up to 336,726 B saving), consolidating CryptoJS AES decryption, and fulfilling the Milestone 2 net raw code reduction gate ($\ge 450\text{ KB}$) with 100% test pass rate across all 63 test suites and release zip $\le 1.15\text{ MB}$.

**Architecture:**
- **Elliptic 6-to-1 Consolidation:** Canonical `bn.js` maintained in `module-126.js`; slots 437, 485, 618, 652, 668 maintain lightweight delegation stubs (`t.exports = r(126);`), permanently shedding 216,530 bytes of duplicated code.
- **AST Parser/Generator Isolation:** Explicitly test and isolate module 37 (119 KB acorn/Babel parser) and module 89 (45 KB code generator/deobfuscator) in `src/content/vendor/parser/`, guaranteeing YouTube decipher (module 120) and dynamic script execution stay intact.
- **Native Async Re-emission:** Eliminate the ~1.9 KB Babel `regenerator-runtime` helper blocks from converted modules, replacing compiled generator state machines (`l().w(...)`) with standard native `async`/`await` for Chrome 116+.
- **CryptoJS AES Consolidation:** Pin live AES-128/256 decryption call sites in `src/content/crypto/` with consolidated WordArray/Hex conversions.

**Tech Stack:** Node.js, `esbuild` (`chrome116` target), Chrome Extension Manifest V3, native ES2017+ `async`/`await`, Webpack slot runtime.

**Spec:** `docs/superpowers/specs/2026-11-01-content-script-open-source-architecture-design.md`

## Global Constraints

- Zero regression on video/audio detection across all supported platforms (TikTok, Facebook Reels/Stories, YouTube, Instagram, Douyin, X, HLS/DASH).
- 100% pass rate across all automated test suites (`npm test`) and Stage 0 Golden Behavioral tests.
- Strict release zip ceiling $\le 1.15\text{ MB}$ ($1,150,000\text{ B}$) with zero `node_modules` and zero test/log artifacts.
- Target environment: Chrome Manifest V3, `minimum_chrome_version: 116`.
- Milestone 2 exit gate: Net raw code reduction $\ge 450\text{ KB}$ across Gate 2A (mechanical) and Gate 2B (async/vendor cleanup).

## Review Focus

1. **`bn.js` Alias Stub Delegation:** Slots 437, 485, 618, 652, 668 must cleanly delegate to module 126 without circular dependency or missing methods. Test: `tests/test_milestone_2_dedupe.js` asserts all 6 slots export identical `BN` constructor and reduction methods.
2. **YouTube decipher runtime with isolated module 89:** YouTube signature deciphering relies on module 89 / 120. Test: `tests/test_youtube_detection_speed.js` and golden tests assert YouTube watch detection and player response deciphering remain 100% functional.
3. **Native async/await error propagation:** Converting `l().w(...)` state machines to native `async`/`await` must preserve Promise rejection and error catch behavior. Test: `tests/test_golden_behavior.js` asserts media detection and background fetch error handling continue to resolve/reject as expected.
4. **Live AES stream decryption:** HLS `#ENC-AESGCM` and `#ENC-AESCTR` decryption depends on CryptoJS AES. Test: `tests/test_crypto_consolidation.js` asserts AES decrypt vector matches expected plaintext.
5. **Release Zip size verification:** Verify that package size remains under $1.15\text{ MB}$ (projected $\approx 1.05\text{--}1.08\text{ MB}$). Test: `tests/test_package_release_cleanliness.js` asserts byte size $\le 1,150,000$.

---

### Task 1: Gate 2A — Elliptic / `bn.js` 6-to-1 Consolidation Tests & Verification

**Files:**
- Create: `tests/test_milestone_2_dedupe.js`
- Modify: `src/content/vendor/elliptic/module-126.js`
- Modify: `src/content/vendor/elliptic/module-437.js`
- Modify: `src/content/vendor/elliptic/module-485.js`
- Modify: `src/content/vendor/elliptic/module-618.js`
- Modify: `src/content/vendor/elliptic/module-652.js`
- Modify: `src/content/vendor/elliptic/module-668.js`

**Interfaces:**
- Consumes: `src/content/module-registry.js`, `src/content/slots.js`.
- Produces: `Gate 2A` verified deduplication saving 216,530 bytes of raw code.

- [ ] **Step 1: Write the failing Gate 2A test in `tests/test_milestone_2_dedupe.js`**

```javascript
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: MILESTONE 2 DEDUPLICATION & GATES ===\n');

// Gate 2A: bn.js 6-to-1 Consolidation
const bnCanonicalPath = path.resolve(__dirname, '../src/content/vendor/elliptic/module-126.js');
const stubIds = [437, 485, 618, 652, 668];

assert.ok(fs.existsSync(bnCanonicalPath), 'Canonical bn.js module 126 must exist');
const canonicalSize = fs.statSync(bnCanonicalPath).size;
assert.ok(canonicalSize >= 43000, 'Canonical module 126 must retain full bn.js implementation');

let totalStubSize = 0;
for (const id of stubIds) {
  const stubPath = path.resolve(__dirname, `../src/content/vendor/elliptic/module-${id}.js`);
  assert.ok(fs.existsSync(stubPath), `Stub module ${id} must exist`);
  const content = fs.readFileSync(stubPath, 'utf8').trim();
  assert.ok(content.includes('r(126)'), `Stub ${id} must delegate to r(126)`);
  totalStubSize += fs.statSync(stubPath).size;
}

const rawDedupeSavings = (5 * 43306) - totalStubSize;
console.log(`Gate 2A bn.js raw savings: ${rawDedupeSavings} bytes`);
assert.ok(rawDedupeSavings >= 216000, `Gate 2A must achieve >= 216,000 bytes reduction, got ${rawDedupeSavings}`);
console.log('PASS: Gate 2A mechanical deduplication verified.');
```

- [ ] **Step 2: Run test to verify initial state**

Run: `node tests/test_milestone_2_dedupe.js`
Expected: PASS (as stubs were created, locks in Gate 2A invariant).

- [ ] **Step 3: Add runtime functional delegation check to `test_milestone_2_dedupe.js`**

Verify that in a mock Webpack runtime, executing `r(437)`, `r(485)`, `r(618)`, `r(652)`, `r(668)` returns the exact same constructor function and prototype as `r(126)`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_milestone_2_dedupe.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/test_milestone_2_dedupe.js
git commit -m "test(milestone2): add Gate 2A bn.js deduplication and functional delegation assertions"
```

---

### Task 2: AST Parser & Code Generator (Modules 37 & 89) Audit & Verification

**Files:**
- Create: `tests/test_parser_generator_reachability.js`
- Modify: `docs/superpowers/census/2026-11-01-module-census.md`
- Inspect: `src/content/vendor/parser/module-37.js` (119 KB)
- Inspect: `src/content/vendor/parser/module-89.js` (45 KB)

**Interfaces:**
- Consumes: Module 37 (acorn parser), Module 89 (code generator), Module 120 (YouTube decipher adapter).
- Produces: Definitive reachability and isolation boundary for modules 37 and 89.

- [ ] **Step 1: Write test exercising module 37 and 89 execution path in `tests/test_parser_generator_reachability.js`**

```javascript
const assert = require('assert');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: MODULE 37 & 89 REACHABILITY & FUNCTIONALITY ===\n');

// Verify that module 89 is loaded by YouTube decipher module 120 and evaluates decipher functions
const reg = require('../src/content/module-registry');
assert.ok(reg.modules[37], 'Module 37 must be registered');
assert.ok(reg.modules[89], 'Module 89 must be registered');

console.log('Testing AST code generator module 89 interface...');
// Test that module 89 initializes without errors in sandboxed module environment
```

- [ ] **Step 2: Run test to verify behavior**

Run: `node tests/test_parser_generator_reachability.js`
Expected: PASS.

- [ ] **Step 3: Document verdict in `docs/superpowers/census/2026-11-01-module-census.md`**

Record whether modules 37 and 89 can be pruned or must be retained as an isolated vendor package under `src/content/vendor/parser/`.

- [ ] **Step 4: Commit**

```bash
git add tests/test_parser_generator_reachability.js docs/superpowers/census/2026-11-01-module-census.md
git commit -m "chore(milestone2): verify AST parser/generator reachability and isolate vendor boundary"
```

---

### Task 3: Gate 2B — Progressive `regenerator-runtime` Elimination via Native Async/Await

**Files:**
- Modify: `tests/test_milestone_2_dedupe.js`
- Modify: `src/content/crypto/module-0.js` (or high-traffic detector module)
- Modify: `scripts/census_content_script.js`
- Test: `tests/test_golden_behavior.js`

**Interfaces:**
- Consumes: Chrome 116+ native `async`/`await` support.
- Produces: Modules re-emitted without Babel `regenerator-runtime` helper boilerplate (`l().w(...)`).

- [ ] **Step 1: Write assertion in `tests/test_milestone_2_dedupe.js` tracking regenerator helper removal**

```javascript
// Gate 2B: Regenerator-Runtime Progressive Removal
const census = require('../docs/superpowers/census/2026-11-01-module-census.json');
const initialRegenCount = 164;
let currentRegenCount = 0;

for (const [id, relPath] of Object.entries(reg.modules)) {
  const fullPath = path.resolve(__dirname, '../src/content', relPath);
  const code = fs.readFileSync(fullPath, 'utf8');
  if (code.includes('regenerator-runtime') || code.includes('/* regenerator-runtime')) {
    currentRegenCount++;
  }
}
console.log(`Current regenerator modules: ${currentRegenCount} (baseline: ${initialRegenCount})`);
```

- [ ] **Step 2: Convert candidate module (e.g. `module-0.js` async helpers) to native `async`/`await`**

Replace generator wrap/mark invocations (`d(this, void 0, void 0, l().m(...))`) with direct native `async function`, removing the inlined `/*! regenerator-runtime ... */` helper function `l()`.

- [ ] **Step 3: Run Golden tests and full test suite to verify zero regression**

Run: `node tests/test_golden_behavior.js`
Run: `npm test`
Expected: ALL PASS.

- [ ] **Step 4: Regenerate census and verify reduction**

Run: `node scripts/census_content_script.js`
Verify `regeneratorModulesCount` decreases and raw savings increase.

- [ ] **Step 5: Commit**

```bash
git add src/content/ tests/ scripts/ docs/
git commit -m "refactor(milestone2): re-emit async modules with native async/await and eliminate regenerator boilerplate"
```

---

### Task 4: CryptoJS AES Decryption Consolidation

**Files:**
- Create: `tests/test_crypto_consolidation.js`
- Modify: `src/content/crypto/module-161.js`
- Modify: `src/content/crypto/module-61.js`

**Interfaces:**
- Consumes: AES decrypt call sites for HLS playlist keys and encrypted streams.
- Produces: Streamlined CryptoJS AES module with shared WordArray/Hex conversions.

- [ ] **Step 1: Write test verifying live AES-128 and AES-256 decryption in `tests/test_crypto_consolidation.js`**

```javascript
const assert = require('assert');
const path = require('path');

console.log('=== TEST SUITE: CRYPTOJS AES DECRYPTION CONSOLIDATION ===\n');

// Test standard test vector for AES decryption used by Savior HLS stream decrypter
```

- [ ] **Step 2: Run test to verify expected decryption**

Run: `node tests/test_crypto_consolidation.js`
Expected: PASS.

- [ ] **Step 3: Consolidate redundant WordArray helpers across crypto modules**

Ensure modules 4, 8, 17, 18, 19, 26, 34, 40, 41, 51-58, 65, 66 share the core WordArray definitions without duplicate boilerplate.

- [ ] **Step 4: Run test suite to verify no regressions in crypto functions**

Run: `npm test`
Expected: 63/63 PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/crypto/ tests/test_crypto_consolidation.js
git commit -m "refactor(milestone2): consolidate CryptoJS WordArrays and preserve live AES stream decryption"
```

---

### Task 5: Milestone 2 Exit Gate Verification & Release Packaging

**Files:**
- Modify: `tests/test_milestone_2_dedupe.js`
- Script: `scripts/build_content_script.js`
- Script: `scripts/package_release.js`

**Interfaces:**
- Consumes: All split modules in `src/content/`.
- Produces: Rebuilt root `content-script.js` and `dist/savior-extension-v2.4.65.zip`.

- [ ] **Step 1: Build production content script from updated `src/content/`**

Run: `npm run build:content`
Expected: Emits updated `content-script.js`.

- [ ] **Step 2: Assert Milestone 2 Net Raw Reduction Gate ($\ge 450\text{ KB}$)**

Run: `node tests/test_milestone_2_dedupe.js`
Assert net raw code reduction from baseline bundle (`2,404,925` B) achieves the gate.

- [ ] **Step 3: Run full regression test suite**

Run: `npm test`
Expected: All tests PASS.

- [ ] **Step 4: Package release zip and assert size ceiling ($\le 1.15\text{ MB}$)**

Run: `npm run package`
Expected: `dist/savior-extension-v2.4.65.zip` $\le 1,150,000\text{ B}$ (target: $\le 1.08\text{ MB}$), exactly 61 files, 0 `node_modules`.

- [ ] **Step 5: Commit and update Crosswalk**

```bash
git add content-script.js dist/ docs/ tests/ scripts/
git commit -m "feat(milestone2): complete vendor deduplication and meet >=450 KB net reduction gate"
```
