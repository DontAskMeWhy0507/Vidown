# Scope-Aware Module Census of content-script.js

- Date: 2026-11-01
- Baseline original bundle size: 2,404,925 bytes (630 B CSS prefetcher + 2,404,295 B Webpack IIFE)
- Current built bundle size: 1832616 bytes
- Total Webpack slots: 776
- Real function modules: 649
- Holes (null slots): 127
- Entry point module: 543
- Reachable modules: 156
- Unreachable modules: 493
- bn.js duplicate copies: 6 (126, 437, 485, 618, 652, 668), saving potential: 216530 bytes
- Modules containing regenerator-runtime: 164

---

## 1. Technical Explanation of the 592-Row Regeneration Drift

In commit `646c557`, re-running `scripts/census_content_script.js` caused 592 of 776 module size values to change. The technical mechanism of this drift was as follows:
1. **Target Artifact Difference:** The initial census (commit `3f1879b`) parsed the baseline monolithic unminified bundle (2,404,925 bytes), where all 6 `bn.js` module copies were present verbatim (43,306 bytes each).
2. **Minification and Deduplication Effects:** Prior to re-running the census in `646c557`, `npm run build:content` was executed. The build pipeline (`scripts/build_content_script.js`) assembled the split modules and applied `esbuild.transformSync`. This transform:
   - Serialized statements into top-level `SequenceExpression` nodes.
   - Stripped internal whitespace and re-compacted expressions.
   - Substituted 5 duplicate 43,306-byte `bn.js` modules (slots 437, 485, 618, 652, 668) with 103-byte alias stubs (`module.exports = r(126);`), removing 216,530 bytes from the middle of the array.
3. **AST Slice Offset Shift:** Because the generator measured module size via AST start/end slice offsets (`el.end - el.start`) on `content-script.js`, measuring against the minified build artifact yielded minified slice lengths rather than original unminified boundaries. Furthermore, replacing the five 43 KB modules shifted the byte positions of all subsequent modules backwards in the bundle text.
4. **Resolution & Dual Metrics:** The census schema now formally tracks two distinct, non-conflated metrics:
   - `size`: The canonical baseline reference bundle size (2,404,925 B).
   - `fileSize`: The exact committed source file size in `src/content/`, measured as git blob byte length (LF normalized to ensure exact cross-platform equality on Windows and POSIX).
   Stale baseline data is prevented by an automated assertion guard in `tests/test_module_census.js`.

---

## 2. Critical Modules Analysis

### Module 37 (AST Parser)
- Baseline bundle size: 119308 bytes
- Split source file size (`src/content/vendor/parser/module-37.js`): 119694 bytes
- Identified callers: [24, 89]
- Description: Bundled JavaScript parser used for analyzing obfuscated media tokens and inline scripts.

### Module 89 (AST Code Generator & Deobfuscator)
- Baseline bundle size: 45516 bytes
- Split source file size (`src/content/vendor/parser/module-89.js`): 45562 bytes
- Identified callers: [28, 120, 541, 700]
- Description: Generates executable code and decodes player algorithms (e.g. YouTube n-sig / cipher solver).

---

## 3. Dynamic Attribute Code-Site Trace

The 4 dynamic bridge attributes connect main-world page script injectors with isolated-world extension receivers:

### 1. `savior-m3u8`
- **Constructor Code Site:** `inject/stream_free/main-world.js` (line 5084)
  - Code: `document.body.setAttribute("savior-m3u8", pr);`
  - Trigger: StreamFree main-world player decrypts `#ENC-AESGCM` streams and writes the resolved m3u8 playlist to the DOM.
- **Consumer Code Site:** `inject/stream_free/index.js` (line 4)
  - Code: `var e = document.body.getAttribute("savior-m3u8");`
  - Relay: Relayed via `chrome.runtime.sendMessage({ type: "script_executed", data: { origin: "streamfree", m3u8: e } })` to StreamFree detector adapters (`src/content/detector/module-94.js` and `src/content/detector/module-564.js`).

### 2. `savior-decoded-content`
- **Constructor Code Site:** `inject/animevietsub/main-world.js` (line 8)
  - Code: `document.body.setAttribute("savior-decoded-content", String(content));`
  - Trigger: Function `setDecodedContent()` decrypts AES-CTR segment URLs and attaches output to body.
- **Consumer Code Site:** `inject/animevietsub/index.js` (line 4)
  - Code: `var e = document.body.getAttribute("savior-decoded-content"); document.body.removeAttribute("savior-decoded-content");`
  - Relay: Relayed via `chrome.runtime.sendMessage` to AnimeVietSub detector adapter (`src/content/detector/module-201.js`).

### 3. `savior-story-url`
- **Constructor Code Site:** `inject/facebook/stories/main-world.js` (line 92)
  - Code: `document.head.setAttribute('savior-story-url', storyUrl || '');`
  - Trigger: Main-world Facebook Stories extractor discovers active story video in React Fiber internals and stamps URL on head.
- **Consumer Code Site:** `inject/facebook/stories/index.js` (line 18)
  - Code: `var t = document.head.getAttribute("savior-story-url"); document.head.removeAttribute("savior-story-url");`
  - Relay: Relayed via `chrome.runtime.sendMessage` to Facebook Stories detector (`src/content/detector/module-254.js`).

### 4. `savior-po-token`
- **Constructor Code Site:** `inject/youtube/potoken/main-world.js` (lines 6 & 256)
  - Code: `document.body.setAttribute("savior-po-token", e);`
  - Trigger: Main-world YouTube BotGuard evaluator mints WebSafe attestation token via Google `GenerateIT` API and stamps on body.
- **Consumer Code Site:** `inject/youtube/potoken/index.js` (line 6)
  - Code: `var e = document.body.getAttribute("savior-po-token"); document.body.removeAttribute("savior-po-token");`
  - Relay: Relayed via `chrome.runtime.sendMessage` to YouTube decipher provider (`src/content/detector/module-120.js`).

---

## 4. Top 20 Largest Modules

| Module ID | Baseline Size (Bytes) | Split File Size (Bytes) | Reachable | Regenerator | bn.js Copy | Direct Callers Count |
|:---|:---|:---|:---|:---|:---|:---|
| 37 | 119308 | 119694 | Yes | No | No | 2 |
| 541 | 110571 | 110611 | Yes | Yes | No | 1 |
| 161 | 77663 | 77687 | No | No | No | 1 |
| 89 | 45516 | 45562 | Yes | Yes | No | 4 |
| 433 | 44315 | 44364 | No | No | No | 3 |
| 443 | 43900 | 43949 | No | Yes | No | 0 |
| 126 | 43306 | 43355 | No | No | Yes | 9 |
| 437 | 43306 | 103 | No | No | Yes | 3 |
| 485 | 43306 | 103 | No | No | Yes | 2 |
| 618 | 43306 | 103 | No | No | Yes | 1 |
| 652 | 43306 | 103 | No | No | Yes | 1 |
| 668 | 43306 | 103 | No | No | Yes | 1 |
| 24 | 40290 | 56523 | Yes | No | No | 2 |
| 442 | 39532 | 39574 | No | Yes | No | 0 |
| 6 | 39279 | 39315 | Yes | Yes | No | 80 |
| 0 | 27593 | 27855 | Yes | Yes | No | 117 |
| 163 | 27190 | 27230 | No | No | No | 1 |
| 741 | 26931 | 26971 | No | Yes | No | 0 |
| 643 | 26151 | 26200 | No | No | No | 1 |
| 162 | 25596 | 25638 | No | No | No | 1 |
