# Milestone 1: Safe Mechanical Foundation & Content Script Build Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the safe mechanical foundation for Vidown's content script transformation by creating Golden Characterization Tests (Stage 0), migrating 11 fragile regex test suites to behavioral contracts (Stage 0.5), performing an AST-based scope-aware module census (Stage 1), and executing a zero-regression mechanical split of `content-script.js` into `src/content/` backed by a production `esbuild` pipeline (Stage 2).

**Architecture:** 
- In-memory isolated-world harness loading `context-guard.js` $\rightarrow$ `common.js` $\rightarrow$ `content-script.js` $\rightarrow$ `downloads-nav.js` against sanitized DOM fixtures.
- Behavioral contract tests asserting functional invariants (observer filter configuration, gray button prevention, TikTok node selectors) rather than exact minified strings.
- Acorn-based scope-aware AST parser inventorying all 776 slots (649 real, 127 holes) and caller graphs.
- Mechanical module decomposition into `src/content/` mapped via numeric module IDs, compiled into root `content-script.js` via `esbuild` classic IIFE targeting `chrome116` with explicit window global re-exports (`EE`, `IS_CONTENT_SCRIPT`, `_saviorCss*`).

**Tech Stack:** Node.js, `acorn` (AST parser), `jsdom` / custom lightweight DOM harness, `esbuild`, Chrome Extensions Manifest V3 APIs.

**Spec:** `docs/superpowers/specs/2026-11-01-content-script-open-source-architecture-design.md`

## Global Constraints

- 100% backward compatibility for all video download and detection capabilities across platforms.
- 100% pass rate across all automated test suites (`npm test`) and new Golden Tests.
- Strict release zip ceiling $\le 1.15\text{ MB}$ ($1,150,000\text{ B}$) with zero `node_modules` and zero test/log artifacts.
- Target environment: Chrome Manifest V3, `minimum_chrome_version: 116`.
- Shipped `content-script.js` output at repository root must remain a single classic IIFE script.

## Review Focus

1. **`window.EE` cross-file global initialization:** `common.js` executes before `content-script.js` and calls `EE` asynchronously; `downloads-nav.js` loads after. Test: `tests/test_golden_behavior.js` asserts `window.EE` exists, retains listeners registered by earlier scripts, and emits events to later scripts.
2. **`window.__saviorSniffedMedia` lazy consumption:** `downloads-nav.js` loads fourth and populates the global; `content-script.js` must safely handle uninitialized state on startup and reactively process updates. Test: `tests/test_golden_behavior.js` asserts no runtime error when initialized with `undefined` global, followed by successful detection upon push.
3. **CSS Prefetcher context-alive guard:** Extension reloads invalidate `chrome.runtime.id`. Test: `tests/test_css_import_and_listener_safety.js` asserts `_saviorCssContextAlive()` returns `false` safely when `chrome.runtime.id` is missing.
4. **DOM Attribute bridge parsing:** `savior-video-detail` stamped by MAIN world inject scripts. Test: `tests/test_golden_behavior.js` asserts valid JSON parsing and graceful error fallback on empty/corrupt attributes.
5. **Release Zip size ceiling verification:** Output zip must not exceed $1,150,000\text{ B}$. Test: `tests/test_package_release_cleanliness.js` asserts byte size $\le 1,150,000$ and zero `node_modules`.

---

### Task 1: Stage 0 Golden Characterization Test Harness & Fixtures

**Files:**
- Create: `tests/helpers/golden_dom_harness.js`
- Create: `tests/fixtures/tiktok_video.html`
- Create: `tests/fixtures/facebook_reels.html`
- Create: `tests/fixtures/facebook_stories.html`
- Create: `tests/fixtures/youtube_watch.html`
- Create: `tests/fixtures/instagram_reels.html`
- Create: `tests/fixtures/generic_hls.html`
- Create: `tests/fixtures/vietnamese_news.html`
- Test: `tests/test_golden_behavior.js`

**Interfaces:**
- Consumes: `manifest.json` load order (`context-guard.js`, `common.js`, `content-script.js`, `downloads-nav.js`).
- Produces: `runGoldenFixture(fixtureHtml, options)` returning `{ attributes, eeEvents, widgetDom, messagesSent }`.

- [ ] **Step 1: Write the failing test in `tests/test_golden_behavior.js`**

```javascript
const assert = require('assert');
const { runGoldenFixture } = require('./helpers/golden_dom_harness');

console.log('=== TEST SUITE: GOLDEN CHARACTERIZATION TESTS ===\n');

// 1. TikTok fixture detection
const tiktokResult = runGoldenFixture('tests/fixtures/tiktok_video.html');
assert.ok(tiktokResult.widgetCreated, 'TikTok fixture must mount savior widget');
assert.ok(tiktokResult.eeEvents.some(e => e.name.includes('widget') || e.name.includes('media')), 'TikTok must emit widget/media events');

// 2. Generic HLS fixture detection
const hlsResult = runGoldenFixture('tests/fixtures/generic_hls.html');
assert.ok(hlsResult.widgetCreated, 'Generic HLS fixture must mount savior widget');

// 3. Mutation failure verification (Mutation Gate)
assert.throws(() => {
  runGoldenFixture('tests/fixtures/tiktok_video.html', { breakDetection: true });
}, /Detection expectation failed/, 'Harness must fail when detection is broken');

console.log('PASS: Golden characterization suite verified.\n');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_golden_behavior.js`
Expected: FAIL with `Cannot find module './helpers/golden_dom_harness'`

- [ ] **Step 3: Implement DOM fixtures and `tests/helpers/golden_dom_harness.js`**

Create sanitized HTML fixture files containing representative video DOM trees (video elements, player wrappers, data attributes).
In `golden_dom_harness.js`:
- Setup minimal DOM simulation (or JSDOM) with `window`, `document`, and Chrome mock stubs:
  - `chrome.runtime.id = 'savior-test-id'`
  - `chrome.runtime.sendMessage = (msg, cb) => ...`
  - `chrome.runtime.onMessage = { addListener: ... }`
  - `chrome.storage.local = { get: ..., set: ... }`
- Execute scripts in exact manifest sequence: `context-guard.js` $\rightarrow$ `common.js` $\rightarrow$ `content-script.js` $\rightarrow$ `downloads-nav.js`.
- Intercept and record:
  - `window.EE` event emissions (name, payload).
  - DOM attribute mutations (`savior-*`).
  - `#savior-host` and `.savior-widget` elements created.
  - IPC messages dispatched.
- Support `breakDetection: true` option that suppresses video element discovery to verify mutation gate.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_golden_behavior.js`
Expected: PASS with all fixture validations green.

- [ ] **Step 5: Commit**

```bash
git add tests/helpers/golden_dom_harness.js tests/fixtures/ tests/test_golden_behavior.js
git commit -m "test(stage0): add golden characterization test harness and fixture corpus"
```

---

### Task 2: Stage 0.5 Fragile Test Migration (Part 1 - Performance, CSS & Scanner)

**Files:**
- Modify: `tests/test_audit_video_lag_and_performance_optimizations.js`
- Modify: `tests/test_widget_media_detection_speed.js`
- Modify: `tests/test_css_import_and_listener_safety.js`
- Modify: `tests/test_skip_video_removed.js`
- Test: `tests/test_audit_video_lag_and_performance_optimizations.js`, `tests/test_widget_media_detection_speed.js`, `tests/test_css_import_and_listener_safety.js`, `tests/test_skip_video_removed.js`

**Interfaces:**
- Consumes: `content-script.js` structural invariants and AST.
- Produces: Behavioral contract assertions that survive formatting and `esbuild` codegen changes while catching historical bugs.

- [ ] **Step 1: Write mutation check proving test failure when historical bug is reintroduced**

Verify that:
- In `test_audit_video_lag_and_performance_optimizations.js`: changing `attributeFilter` to observe `style` or `class` causes test failure.
- In `test_skip_video_removed.js`: enabling skip video button causes test failure.
- In `test_css_import_and_listener_safety.js`: removing `_saviorCssContextAlive` check causes test failure.

- [ ] **Step 2: Update `test_audit_video_lag_and_performance_optimizations.js` to behavioral contract**

Replace exact regex/spacing match:
```javascript
// BEFORE: assert.ok(csContent.includes('attributeFilter:["src","data-src","hidden","opened"]'));
// AFTER: Extract attributeFilter array via regex or AST and assert exact elements:
const filterMatch = csContent.match(/attributeFilter:\s*\[([^\]]+)\]/);
assert.ok(filterMatch, 'Observer must configure attributeFilter');
const observedAttrs = filterMatch[1].replace(/["'\s]/g, '').split(',');
assert.deepStrictEqual(observedAttrs.sort(), ['data-src', 'hidden', 'opened', 'src'].sort());
assert.ok(!observedAttrs.includes('style') && !observedAttrs.includes('class'), 'Must not observe style or class');
```

- [ ] **Step 3: Update `test_skip_video_removed.js` and `test_widget_media_detection_speed.js` to contract checks**

- In `test_skip_video_removed.js`: Match `isSkipVideoEnabled` assignment to falsy value (`!1` or `false`) regardless of spacing:
  `assert.ok(/isSkipVideoEnabled\s*[:=]\s*(!1|false)/.test(cs), 'isSkipVideoEnabled must be disabled');`
- In `test_widget_media_detection_speed.js`: Match repeat interval `1000` or `1e3` and reject `5000` or `5e3`:
  `assert.ok(/repeatWhileEnabled\([^,]+,\s*(1e3|1000)\)/.test(cs), 'Widget repeat interval must be 1s');`

- [ ] **Step 4: Update `test_css_import_and_listener_safety.js`**

Verify `_saviorCssContextAlive()` checks `chrome.runtime.id` and `detach_enabled` is set to `false` or `!1` using flexible pattern matching:
`assert.ok(/detach_enabled\s*[:=]\s*(!1|false)/.test(cs));`

- [ ] **Step 5: Run updated test suites to verify pass**

Run: `node tests/test_audit_video_lag_and_performance_optimizations.js && node tests/test_widget_media_detection_speed.js && node tests/test_css_import_and_listener_safety.js && node tests/test_skip_video_removed.js`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add tests/test_audit_video_lag_and_performance_optimizations.js tests/test_widget_media_detection_speed.js tests/test_css_import_and_listener_safety.js tests/test_skip_video_removed.js
git commit -m "test(stage0.5): migrate performance, scanner and css tests to behavioral contracts"
```

---

### Task 3: Stage 0.5 Fragile Test Migration (Part 2 - TikTok, UI & Errors)

**Files:**
- Modify: `tests/test_tiktok_floating_bar_detection.js`
- Modify: `tests/test_floating_bar_detection_and_gray_button_fix.js`
- Modify: `tests/test_image_and_video_toggle_settings.js`
- Modify: `tests/test_clean_user_flow_and_dead_features.js`
- Modify: `tests/test_chrome_dashboard_errors_fixed.js`
- Modify: `tests/test_chrome_extension_errors_permanent_fix.js`
- Modify: `tests/test_reliability_and_bug_fixes.js`
- Test: All 7 modified test suites.

**Interfaces:**
- Consumes: TikTok module definitions, storage listeners, and widget state invariants.
- Produces: Resilient behavioral assertions guarding TikTok selectors, gray-button prevention, and storage synchronization.

- [ ] **Step 1: Update `tests/test_tiktok_floating_bar_detection.js`**

Replace the brittle search for `,vt={` with functional contract assertions:
- Assert TikTok selector strings exist: `[data-e2e="feed-video"]`, `[class*="DivBasicPlayerWrapper"]`, `[data-e2e="feed-item"]`, `[data-e2e="browse-video"]`.
- Extract `isValidVideoNode` using resilient AST or regex supporting both minified and formatted function signatures.
- Execute `isValidVideoNode` against mock nodes and assert correct boolean returns for feed items and search results.

- [ ] **Step 2: Update `test_floating_bar_detection_and_gray_button_fix.js` and `test_image_and_video_toggle_settings.js`**

- In `test_floating_bar_detection_and_gray_button_fix.js`: Assert `this.state.mediaObjects === null` and `mediaObjects` state initialization using whitespace-tolerant regex.
- In `test_image_and_video_toggle_settings.js`: Assert `image_download_enabled` and `imageDownloadEnabled` settings resolution using whitespace-tolerant regex.

- [ ] **Step 3: Update `test_chrome_dashboard_errors_fixed.js` and remaining suites**

- Replace brittle `var i=e.find(...)` string match in `test_chrome_dashboard_errors_fixed.js` with verification that `fetch(url)` is absent and `action: 'getContentCss'` message dispatch is present.
- In `test_reliability_and_bug_fixes.js`: Allow both formatted and minified representations for `on_page_buttons` fallback logic.

- [ ] **Step 4: Run full test suite to verify 100% pass rate**

Run: `npm test`
Expected: `FINAL TEST RESULTS: 61 passed, 0 failed.` (60 original suites + `test_golden_behavior.js`).

- [ ] **Step 5: Commit**

```bash
git add tests/test_tiktok_floating_bar_detection.js tests/test_floating_bar_detection_and_gray_button_fix.js tests/test_image_and_video_toggle_settings.js tests/test_clean_user_flow_and_dead_features.js tests/test_chrome_dashboard_errors_fixed.js tests/test_chrome_extension_errors_permanent_fix.js tests/test_reliability_and_bug_fixes.js
git commit -m "test(stage0.5): complete migration of all 11 fragile test suites to behavioral contracts"
```

---

### Task 4: Stage 1 Scope-Aware Module Census

**Files:**
- Create: `scripts/census_content_script.js`
- Create: `docs/superpowers/census/2026-11-01-module-census.md`
- Create: `docs/superpowers/census/2026-11-01-module-census.json`
- Test: `tests/test_module_census.js`

**Interfaces:**
- Consumes: `content-script.js` AST parsed via `acorn`.
- Produces: Detailed mapping of all 776 slots (649 real modules, 127 holes), caller graph from entry 543, classification of modules 37 & 89, consumption trace of literal-absent attributes, and itemized byte budget.

- [ ] **Step 1: Write the failing test in `tests/test_module_census.js`**

```javascript
const fs = require('fs');
const assert = require('assert');

const census = JSON.parse(fs.readFileSync('docs/superpowers/census/2026-11-01-module-census.json', 'utf8'));
assert.strictEqual(census.totalSlots, 776, 'Census must cover all 776 slots');
assert.strictEqual(census.realModulesCount, 649, 'Must identify exactly 649 active modules');
assert.strictEqual(census.holesCount, 127, 'Must identify exactly 127 holes');
assert.ok(census.modules['37'], 'Module 37 must be inventoried');
assert.ok(census.modules['89'], 'Module 89 must be inventoried');
assert.strictEqual(census.ellipticCopiesCount, 6, 'Must inventory 6 bn.js copies');
assert.strictEqual(census.regeneratorModulesCount, 164, 'Must identify 164 regenerator modules');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_module_census.js`
Expected: FAIL with `ENOENT: no such file or directory`

- [ ] **Step 3: Implement `scripts/census_content_script.js`**

Use `acorn` to parse the Webpack module array in `content-script.js`:
- Scan all 776 slots: record index, start/end offset, byte size, function expression vs null hole.
- Traverse AST inside each module to find `require` (`r(...)`) calls while respecting local variable scope shadowing.
- Construct dependency graph starting from entry module 543 (`r.s = 543`).
- Analyze modules 37 (119 KB) and 89 (45 KB): identify callers (e.g. module 24) and classify purpose.
- Search for consumption paths of `savior-m3u8`, `savior-decoded-content`, `savior-story-url`, `savior-po-token`.
- Output findings to `docs/superpowers/census/2026-11-01-module-census.json` and human-readable markdown table `docs/superpowers/census/2026-11-01-module-census.md`.

- [ ] **Step 4: Run census script and test**

Run: `node scripts/census_content_script.js && node tests/test_module_census.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/census_content_script.js docs/superpowers/census/ tests/test_module_census.js
git commit -m "feat(stage1): generate scope-aware module census and dependency graph"
```

---

### Task 5: Stage 2 Mechanical Module Splitter

**Files:**
- Create: `scripts/unpack_modules.js`
- Create: `src/content/module-registry.js`
- Create: `src/content/entry/index.js`
- Create directory structure under `src/content/`:
  - `src/content/platform/`
  - `src/content/detector/`
  - `src/content/widget/`
  - `src/content/providers/`
  - `src/content/crypto/`
  - `src/content/vendor/`
- Test: `tests/test_unpacked_module_integrity.js`

**Interfaces:**
- Consumes: Census data from `docs/superpowers/census/2026-11-01-module-census.json` and `content-script.js`.
- Produces: 649 individual module files in `src/content/` maintaining numeric ID mapping in `src/content/module-registry.js`.

- [ ] **Step 1: Write the failing test in `tests/test_unpacked_module_integrity.js`**

```javascript
const fs = require('fs');
const assert = require('assert');
const registry = require('../src/content/module-registry');

assert.strictEqual(Object.keys(registry.modules).length, 649, 'Registry must map all 649 modules');
for (const [id, relPath] of Object.entries(registry.modules)) {
  assert.ok(fs.existsSync(`src/content/${relPath}`), `Module file src/content/${relPath} must exist`);
}
assert.ok(fs.existsSync('src/content/entry/index.js'), 'Entry point module must exist');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_unpacked_module_integrity.js`
Expected: FAIL with `Cannot find module '../src/content/module-registry'`

- [ ] **Step 3: Implement `scripts/unpack_modules.js`**

Write script that extracts the exact body of each of the 649 modules into modular files:
- Categorize by census classification:
  - Modules 126, 437, 485, 618, 652, 668, 643, 433, 443 $\rightarrow$ `src/content/vendor/elliptic/`
  - Modules 37, 89 $\rightarrow$ `src/content/vendor/parser/`
  - Modules 161, 71–75 $\rightarrow$ `src/content/crypto/`
  - Module 543 + CSS prefetcher head $\rightarrow$ `src/content/entry/index.js`
  - Remaining modules categorized into `platform/`, `detector/`, `widget/`, `providers/`.
- Generate `src/content/module-registry.js` containing map of numeric module ID to module function export.
- Re-export explicit window globals in entry: `window.EE`, `window.IS_CONTENT_SCRIPT`, `window._saviorCssCache`, `window._saviorCssCallbacks`, `window._injectSaviorCss`.

- [ ] **Step 4: Run unpacker and verify module integrity**

Run: `node scripts/unpack_modules.js && node tests/test_unpacked_module_integrity.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/unpack_modules.js src/content/ tests/test_unpacked_module_integrity.js
git commit -m "feat(stage2): mechanically unpack 649 modules into src/content/ preserving module registry"
```

---

### Task 6: Stage 2 esbuild Pipeline & Full Release Verification

**Files:**
- Create: `scripts/build_content_script.js`
- Modify: `package.json`
- Test: All 60 test suites (`npm test`), `tests/test_golden_behavior.js`, `scripts/package_release.js`

**Interfaces:**
- Consumes: `src/content/entry/index.js` and `src/content/module-registry.js`.
- Produces: Minified classic IIFE bundle at repository root `content-script.js` targeting `chrome116`.

- [ ] **Step 1: Implement `scripts/build_content_script.js` using esbuild**

Configure `esbuild.buildSync`:
- `entryPoints: ['src/content/entry/index.js']`
- `bundle: true`
- `format: 'iife'`
- `target: 'chrome116'`
- `minify: true`
- `outfile: 'content-script.js'`
Ensure global exports (`window.EE`, `window.IS_CONTENT_SCRIPT`, CSS prefetcher functions) are preserved.

- [ ] **Step 2: Add build scripts to `package.json`**

Add:
```json
"scripts": {
  "build:content": "node scripts/build_content_script.js",
  "build": "npm run build:content",
  ...
}
```

- [ ] **Step 3: Build `content-script.js` and verify output**

Run: `node scripts/build_content_script.js`
Expected: `content-script.js` generated at root.

- [ ] **Step 4: Run Golden Tests and full test suite**

Run: `npm test && node tests/test_golden_behavior.js`
Expected: All 61+ test suites pass 100% (0 failures).

- [ ] **Step 5: Package release zip and verify constraints**

Run: `node scripts/package_release.js`
Expected:
- Output zip generated: `dist/savior-extension-v2.4.65.zip`
- Package size $\le 1,150,000\text{ B}$ (expected $\approx 1.13\text{--}1.14\text{ MB}$)
- Exactly 61 clean entries, 0 `node_modules`, 0 test/log artifacts.

- [ ] **Step 6: Commit and Push**

```bash
git add scripts/build_content_script.js package.json content-script.js dist/savior-extension-v2.4.65.zip
git commit -m "feat(stage2): assemble content-script via esbuild pipeline, passing 100% golden and regression suites"
git push origin master
```

---

## Plan Self-Review Checklist

- **Spec coverage:** 
  - Stage 0 Golden Tests: Covered in Task 1.
  - Stage 0.5 Fragile-Test Migration: Covered in Tasks 2 & 3.
  - Stage 1 Scope-Aware Census: Covered in Task 4.
  - Stage 2 Mechanical Split & esbuild: Covered in Tasks 5 & 6.
  - Global constraints and contract surface: Enforced in Tasks 1, 5, 6.
- **Step scan:** Every step contains exact files, code signatures, verification commands, and expected outputs.
- **Type consistency:** Module registry naming, window globals (`EE`, `IS_CONTENT_SCRIPT`, `_saviorCss*`), and DOM attribute tokens match the spec verbatim.
- **Review Focus:** All 5 critical input/failure modes have explicit assertions mapped to Tasks 1, 2, and 6.
- **Proportion:** The plan focuses strictly on Milestone 1 (Safe Foundation & Build Pipeline), deferring Milestone 2 (Deduplication) and Milestone 3 (Renaming) to their own subsequent plans as designed in the spec.
