# Clean Modular Architecture & De-Bloat Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (recommended for this single session) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** De-bloat and restructure the extension into a clean, modern ES module architecture (`src/`), replacing the 2.43 MB minified `content-script.js` with a modular build (< 250 KB) while preserving 100% of the UI (Floating Widget, Popup, Downloads Manager) and zero regression across all 59 test suites.

**Architecture:** 
1. Non-destructively extract the pure business logic modules (detector, site rules, widget renderer, event bus) from `dist/unpacked_cs/` into clean, human-readable ES modules in `src/`.
2. Strictly eliminate all dead crypto libraries (DES, Blowfish, RC4, MD5), tracking code, and forbidden `eval()` calls.
3. Configure an `esbuild` compilation pipeline in `scripts/build.js` to produce a high-performance, compact bundle into `dist/content-script.js`.
4. Ensure 100% pass rate across all 59 existing test suites.

**Tech Stack:** JavaScript (ES2022+), Chrome Extension Manifest V3 (Content Script, Shadow DOM, Service Worker), esbuild, Node.js stdlib (`assert`, `child_process`, `fs`, `path`).

**Spec:** [docs/superpowers/specs/2026-10-31-clean-modular-architecture-design.md](file:///f:/Vidown/docs/superpowers/specs/2026-10-31-clean-modular-architecture-design.md)

## Global Constraints

- Manifest V3 compatibility (zero `eval()`, zero remote code, CSP compliant).
- Strict non-destructive execution: preserve all existing working assets (`popup/`, `downloads/`, `native/`, `images/`, `css/`, `manifest.json`).
- Target compiled bundle size: under 250 KB (reduced from 2.43 MB).
- 100% test pass rate across all 59 test suites.
- 100% preservation of floating widget Shadow DOM UI and user interactions.

## Review Focus

1. Floating Widget Shadow DOM rendering when `<video>` tags are injected dynamically via AJAX/SPA.
2. Cross-origin CSS injection without violating host page CSP.
3. Accurate resolution dropdown sorting (from 8K UHD down to 144p Mobile) and MP3 derived option creation.
4. Seamless IPC communication between Content Script Event Bus and Background Service Worker.
5. Windows CRLF vs LF line-ending stability across test assertions.

---

### Task 1: Fix CRLF Assertion in Existing Test Suite

**Files:**
- Modify: `tests/test_user_flows_and_edge_cases_audit.js:46-55`
- Test: `tests/test_user_flows_and_edge_cases_audit.js`

**Interfaces:**
- Normalizes newline characters (`\r\n` -> `\n`) before performing multi-line string matching in `downloads.js`.

- [ ] **Step 1: Inspect line 50-53 of `tests/test_user_flows_and_edge_cases_audit.js`**
- [ ] **Step 2: Update assertion to normalize CRLF line endings**
- [ ] **Step 3: Run `node tests/test_user_flows_and_edge_cases_audit.js` to verify it passes**
- [ ] **Step 4: Run `npm test` and verify 59 of 59 tests pass**
- [ ] **Step 5: Commit**
  ```bash
  git add tests/test_user_flows_and_edge_cases_audit.js
  git commit -m "fix(test): normalize CRLF line endings in user flows audit test"
  ```

---

### Task 2: Scaffold `src/shared/media-types.js` & `src/shared/url-utils.js`

**Files:**
- Create: `src/shared/media-types.js`
- Create: `src/shared/url-utils.js`
- Test: `tests/test_clean_shared_modules.js`

**Interfaces:**
- `MEDIA_TYPES`: Maps `video`, `audio`, `no_watermark_video`, `subtitles` with icons, regex, and extension priorities.
- `RESOLUTIONS`: Maps standard quality labels (`1080p`, `720p`, etc.) to sorting values.
- `parseUrl(url)`: Derives filename, extension, and clean URL.
- `sanitizeFilename(name)`: Strips invalid filesystem characters.

- [ ] **Step 1: Write test `tests/test_clean_shared_modules.js` testing media types and URL parsing**
- [ ] **Step 2: Run test to verify failure**
  Run: `node tests/test_clean_shared_modules.js`
- [ ] **Step 3: Implement `src/shared/media-types.js` and `src/shared/url-utils.js`**
  Extract clean definitions from `dist/unpacked_cs/1.js` and `dist/unpacked_cs/3.js` without any minification artifacts.
- [ ] **Step 4: Run test to verify it passes**
  Run: `node tests/test_clean_shared_modules.js`
- [ ] **Step 5: Commit**
  ```bash
  git add src/shared/ tests/test_clean_shared_modules.js
  git commit -m "feat(core): scaffold clean shared media types and url utils"
  ```

---

### Task 3: Implement Clean Event Bus & Video Detector Rules

**Files:**
- Create: `src/content/events/bus.js`
- Create: `src/content/detector/site-rules.js`
- Create: `src/content/detector/media-sniffer.js`
- Test: `tests/test_clean_detector.js`

**Interfaces:**
- `EventBus`: Lightweight EventEmitter for `on`, `emit`, `off`.
- `isSpecialUrls(url)`: Regex matcher for HLS m3u8, DASH mpd, YouTube, TikTok, Facebook, ZingMP3, and video CDNs.
- `createMP3Resources(mediaList)`: Generates MP3 audio options from detected video streams.

- [ ] **Step 1: Write test `tests/test_clean_detector.js` verifying regex rules and MP3 creation**
- [ ] **Step 2: Run test to verify failure**
  Run: `node tests/test_clean_detector.js`
- [ ] **Step 3: Implement `src/content/events/bus.js`, `site-rules.js`, and `media-sniffer.js`**
  Derived from `dist/unpacked_cs/0.js` and `97.js`, completely free of crypto algorithms, telemetry, or eval.
- [ ] **Step 4: Run test to verify it passes**
  Run: `node tests/test_clean_detector.js`
- [ ] **Step 5: Commit**
  ```bash
  git add src/content/events/ src/content/detector/ tests/test_clean_detector.js
  git commit -m "feat(detector): implement clean site rules, media sniffer, and event bus"
  ```

---

### Task 4: Implement Clean Floating Widget Renderer (Shadow DOM UI)

**Files:**
- Create: `src/content/widget/host-element.js`
- Create: `src/content/widget/widget-ui.js`
- Create: `src/content/widget/widget-events.js`
- Test: `tests/test_clean_widget_ui.js`

**Interfaces:**
- `createHostElement()`: Returns `<savior-host>` with isolated Shadow DOM (`mode: 'open'`).
- `renderWidgetUI(mediaList, activeVideo)`: Builds the floating action bar with resolution dropdown and download buttons.
- `bindWidgetEvents(host, mediaList)`: Handles hover timers, dropdown toggles, and click dispatching.

- [ ] **Step 1: Write test `tests/test_clean_widget_ui.js` verifying Shadow DOM creation and dropdown rendering**
- [ ] **Step 2: Run test to verify failure**
  Run: `node tests/test_clean_widget_ui.js`
- [ ] **Step 3: Implement `host-element.js`, `widget-ui.js`, and `widget-events.js`**
  Derived from `dist/unpacked_cs/12.js`, maintaining 100% exact DOM structure, CSS classes, and SVG icons.
- [ ] **Step 4: Run test to verify it passes**
  Run: `node tests/test_clean_widget_ui.js`
- [ ] **Step 5: Commit**
  ```bash
  git add src/content/widget/ tests/test_clean_widget_ui.js
  git commit -m "feat(widget): implement clean floating widget with Shadow DOM"
  ```

---

### Task 5: Assemble Content Script Entry Point & DOM Scanner

**Files:**
- Create: `src/content/detector/dom-scanner.js`
- Create: `src/content/index.js`
- Test: `tests/test_clean_content_script_assembly.js`

**Interfaces:**
- `initDomScanner()`: Sets up `MutationObserver` on `document.body` to scan for `<video>`, `<audio>`, and `<iframe>`.
- `src/content/index.js`: Glues the CSS prefetcher, DOM scanner, detector, and widget UI into a cohesive content script.

- [ ] **Step 1: Write test `tests/test_clean_content_script_assembly.js`**
- [ ] **Step 2: Run test to verify failure**
  Run: `node tests/test_clean_content_script_assembly.js`
- [ ] **Step 3: Implement `dom-scanner.js` and `src/content/index.js`**
- [ ] **Step 4: Run test to verify it passes**
  Run: `node tests/test_clean_content_script_assembly.js`
- [ ] **Step 5: Commit**
  ```bash
  git add src/content/ tests/test_clean_content_script_assembly.js
  git commit -m "feat(content): assemble content script entry point and dom scanner"
  ```

---

### Task 6: Configure esbuild Build Script & Bundle Clean Distribution

**Files:**
- Create: `scripts/build.js`
- Modify: `package.json`
- Test: `tests/test_build_output_verification.js`

**Interfaces:**
- `node scripts/build.js`: Compiles `src/content/index.js` -> `dist/content-script.js`.
- Verifies output bundle size is < 250 KB and contains 0 occurrences of `eval()`.

- [ ] **Step 1: Write test `tests/test_build_output_verification.js`**
- [ ] **Step 2: Run test to verify failure**
  Run: `node tests/test_build_output_verification.js`
- [ ] **Step 3: Implement `scripts/build.js` and add `"build": "node scripts/build.js"` to `package.json`**
- [ ] **Step 4: Run `npm run build` and run test to verify it passes**
  Run: `node tests/test_build_output_verification.js`
- [ ] **Step 5: Commit**
  ```bash
  git add scripts/build.js package.json tests/test_build_output_verification.js
  git commit -m "feat(build): configure esbuild pipeline and bundle verification"
  ```

---

### Task 7: Full Regression Verification & Clean Up Scratch Artifacts

**Files:**
- Test: All 60 test suites (`tests/test_*.js`)

- [ ] **Step 1: Run full test suite with `npm test`**
  Verify all 60 tests pass with zero failures.
- [ ] **Step 2: Verify zero syntax or runtime errors in compiled bundle**
- [ ] **Step 3: Clean up temporary extraction directories (`dist/unpacked_bg/`, `dist/unpacked_cs/`)**
- [ ] **Step 4: Verify git status is clean and commit**
  ```bash
  git add -A
  git commit -m "feat(release): complete clean modular architecture migration"
  ```
