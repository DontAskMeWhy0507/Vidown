# Content Script Milestone 3: Semantic Reconstruction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Overview

Transform the unpacked and deduplicated Vidown content script codebase from opaque numeric Webpack modules (`module-0.js`, `r(126)`, 776-slot array) into a clean, modern, fully semantic open-source ES module architecture.

Milestone 3 delivers:
1. Semantic domain namespaces (`src/content/core/`, `src/content/providers/`, `src/content/detector/`, `src/content/crypto/`, `src/content/widget/`, `src/content/vendor/`).
2. De-obfuscated, human-readable function and variable identifiers with explicit `import`/`export` syntax.
3. Clean ESM entry point `src/content/index.js` with an esbuild-powered build pipeline.
4. Backward-compatible bridge ensuring all 66+ existing test suites continue to pass 100%.
5. TypeScript definitions (`types/content.d.ts`) and Open-Source Contribution Guide (`CONTRIBUTING.md`).
6. Production release zip `dist/savior-extension-v2.4.65.zip` strictly $\le 1.15\text{ MB}$ with 0 `node_modules`.

---

## File Structure & Proposed Changes

```
src/content/
├── index.js                     # Clean ES module entry point for content script
├── core/
│   ├── utils.js                 # Reconstructed module-0 utilities (DOM queries, formatting, AES links)
│   ├── constants.js             # Reconstructed module-1 & module-11 constants and MIME definitions
│   ├── events.js                # Shared EventBus / EventEmitter (EE) interface
│   └── storage.js               # Chrome storage wrapper
├── crypto/
│   ├── aes.js                   # Live stream decryption & parseLinkPhimmoiChillee helper
│   └── crypto-rollup.js         # Consolidated CryptoJS rollup (replaces module-16)
├── detector/
│   ├── index.js                 # Media detector engine (replaces module-543 / 684)
│   ├── dom-scanner.js           # DOM mutation observer and media element scanner
│   └── attribute-stamper.js     # savior-* attribute stamper
├── providers/
│   ├── index.js                 # Provider registry & dispatcher
│   ├── tiktok.js                # TikTok video extractor (replaces module-121)
│   ├── youtube.js               # YouTube player & cipher extractor (replaces module-120)
│   ├── facebook.js              # Facebook Reels / Stories extractor
│   └── hls-dash.js              # Generic HLS/DASH playlist parser
├── vendor/
│   ├── elliptic/                # Canonical BN / Elliptic package (module-126)
│   ├── parser/                  # Acorn AST parser and generator (modules 37 & 89)
│   └── regenerator-core.js      # Shared Babel regenerator core
├── module-registry.js           # Backward-compatible numeric bridge for existing test suites
└── slots.js                     # 776-slot Webpack array mapping
types/
└── content.d.ts                 # Full TypeScript definitions for media types & extractors
CONTRIBUTING.md                  # Open-source architecture & developer onboarding guide
```

---

## Tasks

### Task 1: Core Semantic Layer Reconstruction (`src/content/core/`)

**Files:**
- Create: `src/content/core/utils.js`
- Create: `src/content/core/constants.js`
- Create: `src/content/core/events.js`
- Create: `tests/test_milestone_3_core_semantic.js`
- Modify: `src/content/crypto/module-0.js` (bridge to `core/utils.js`)

**Interfaces:**
- `src/content/core/utils.js`: exports `query`, `queryAll`, `findParent`, `nearestParent`, `beautifyFileSize`, `detectMediaTypeAndExt`, `parseLinkPhimmoiChillee`, `fetchWithTimeout`, `debounce`.
- `src/content/core/constants.js`: exports `MEDIA_TYPES`, `EXTENSIONS`, `ACTION_TYPES`.
- `src/content/core/events.js`: exports `getEventBus()`.

- [ ] **Step 1: Write test suite for semantic core layer**

Create `tests/test_milestone_3_core_semantic.js` testing all core utilities via direct ESM imports.

- [ ] **Step 2: Run test to confirm failures before implementation**

Run: `node tests/test_milestone_3_core_semantic.js`
Expected: Fails due to missing modules.

- [ ] **Step 3: Implement `src/content/core/constants.js`, `events.js`, and `utils.js`**

Extract and de-obfuscate utility functions from `module-0.js` and `module-1.js` with clean parameter names, clear return types, and standard ES export statements.

- [ ] **Step 4: Bridge `module-0.js` to semantic core utils**

Ensure `src/content/crypto/module-0.js` re-exports or delegates to `src/content/core/utils.js` so all existing numeric requires (`r(0)`) continue working seamlessly.

- [ ] **Step 5: Run tests and verify zero regressions**

Run: `node tests/test_milestone_3_core_semantic.js`
Run: `npm test`
Expected: ALL PASS.

- [ ] **Step 6: Commit**

```bash
git add src/content/core/ tests/test_milestone_3_core_semantic.js src/content/crypto/module-0.js
git commit -m "feat(milestone3): reconstruct core utilities and constants into clean semantic ES modules"
```

---

### Task 2: Platform Extractors & Detector Semantic Reconstruction (`src/content/providers/` & `src/content/detector/`)

**Files:**
- Create: `src/content/providers/tiktok.js`
- Create: `src/content/providers/facebook.js`
- Create: `src/content/providers/youtube.js`
- Create: `src/content/providers/hls-dash.js`
- Create: `src/content/providers/index.js`
- Create: `src/content/detector/attribute-stamper.js`
- Create: `src/content/detector/dom-scanner.js`
- Create: `tests/test_milestone_3_extractors.js`

**Interfaces:**
- `PlatformExtractor`: `{ name: string, match(url): boolean, extract(element, context): Promise<MediaItem[]> }`
- `AttributeStamper`: `stampMediaAttributes(element, mediaPayload)`

- [ ] **Step 1: Write test suite `tests/test_milestone_3_extractors.js`**

Assert that each platform extractor (TikTok, Facebook, YouTube, HLS) correctly extracts media from DOM fixtures with clean, human-readable signatures.

- [ ] **Step 2: Implement platform extractors and detector components**

Translate obfuscated logic from `module-120.js` (YouTube), `module-121.js` (TikTok), Facebook detection routines, and DOM scanner into readable ES modules.

- [ ] **Step 3: Run extractor test and golden behavior test**

Run: `node tests/test_milestone_3_extractors.js`
Run: `node tests/test_golden_behavior.js`
Expected: ALL PASS.

- [ ] **Step 4: Run full test suite**

Run: `npm test`
Expected: 67/67 PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/providers/ src/content/detector/ tests/test_milestone_3_extractors.js
git commit -m "feat(milestone3): reconstruct platform extractors and DOM detector into readable ES modules"
```

---

### Task 3: Modern ES Module Entry Point & Bundling Pipeline Transition

**Files:**
- Create: `src/content/index.js`
- Modify: `scripts/build_content_script.js`
- Test: `tests/test_golden_behavior.js`
- Test: `tests/test_milestone_2_dedupe.js`

**Interfaces:**
- `src/content/index.js`: Standard ESM entry point orchestrating core events, detector initialization, and provider registration.
- `scripts/build_content_script.js`: Uses `esbuild` to compile `src/content/index.js` into production `content-script.js`.

- [ ] **Step 1: Create `src/content/index.js`**

Wire together the semantic modules (`core`, `detector`, `providers`, `crypto`) into a single coherent entry point.

- [ ] **Step 2: Update build script to bundle via ES modules with esbuild**

Ensure `npm run build:content` compiles the clean ES module entry point into `content-script.js`, preserving bundle size optimizations.

- [ ] **Step 3: Verify build and run all tests**

Run: `npm run build:content`
Run: `node tests/test_golden_behavior.js`
Run: `npm test`
Expected: ALL PASS.

- [ ] **Step 4: Commit**

```bash
git add src/content/index.js scripts/build_content_script.js content-script.js
git commit -m "feat(milestone3): establish clean ESM entry point and modern esbuild bundling pipeline"
```

---

### Task 4: TypeScript Definitions, Contributing Guide & Open-Source Packaging

**Files:**
- Create: `types/content.d.ts`
- Create: `CONTRIBUTING.md`
- Modify: `README.md`
- Script: `npm run package`

**Interfaces:**
- `types/content.d.ts`: TypeScript contracts for `MediaItem`, `ExtractorPlugin`, `EventBus`, `VideoQuality`.
- `CONTRIBUTING.md`: Architecture guide, testing instructions, coding standards, and how to add platform extractors.

- [ ] **Step 1: Create `types/content.d.ts`**

Define complete TypeScript interfaces documenting the entire content script domain model.

- [ ] **Step 2: Create `CONTRIBUTING.md` and update `README.md`**

Provide comprehensive documentation on codebase structure, how tests run, and step-by-step instructions for contributors to implement new extractors.

- [ ] **Step 3: Package final release zip and verify invariants**

Run: `npm run package`
Assert: `dist/savior-extension-v2.4.65.zip` $\le 1,150,000\text{ B}$ (target: $\approx 1.05\text{ MB}$), exactly 61 files, 0 `node_modules`.

- [ ] **Step 4: Run full test suite**

Run: `npm test`
Expected: 100% PASS.

- [ ] **Step 5: Commit**

```bash
git add types/ CONTRIBUTING.md README.md dist/
git commit -m "docs(milestone3): add TypeScript definitions, contributor guide, and final open-source package"
```

---

### Task 5: Milestone 3 Crosswalk Verification & Sign-off

**Files:**
- Crosswalk: `trungmuseantigravity`

- [ ] **Step 1: Check Crosswalk board for any new incoming feedback**
- [ ] **Step 2: Post final Milestone 3 completion report to Muse and Trung**
- [ ] **Step 3: Push all commits to `origin/master`**
