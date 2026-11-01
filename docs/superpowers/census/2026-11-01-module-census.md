# Scope-Aware Module Census of content-script.js

- Date: 2026-11-01
- Baseline original bundle size: 2,404,925 bytes (630 B CSS prefetcher + 2,404,295 B Webpack IIFE)
- Current built bundle size: 2291368 bytes
- Total Webpack slots: 776
- Real function modules: 649
- Holes (null slots): 127
- Entry point module: 543
- Reachable modules: 156
- Unreachable modules: 493
- bn.js duplicate copies: 6 (126, 437, 485, 618, 652, 668), saving potential: 216530 bytes
- Modules containing regenerator-runtime: 164

---

## 1. Critical Modules Analysis

### Module 37 (AST Parser)
- Size: 129796 bytes
- Identified callers: [24, 89]
- Description: Bundled JavaScript parser used for analyzing obfuscated media tokens and inline scripts.

### Module 89 (AST Code Generator & Deobfuscator)
- Size: 48208 bytes
- Identified callers: [28, 120, 541, 700]
- Description: Generates executable code and decodes player algorithms (e.g. YouTube n-sig / cipher solver).

---

## 2. Dynamic Attribute Code-Site Trace

The 4 dynamic bridge attributes connect main-world page script injectors with isolated-world extension receivers:

### 1. `savior-m3u8`
- **Constructor Code Site:** `inject/stream_free/main-world.js` (line 2038)
  - Code: `document.body.setAttribute("savior-m3u8", pr);`
  - Trigger: StreamFree main-world player decrypts `#ENC-AESGCM` streams and writes the resolved m3u8 playlist to the DOM.
- **Consumer Code Site:** `inject/stream_free/index.js` (line 4)
  - Code: `var e = document.body.getAttribute("savior-m3u8");`
  - Relay: Relayed via `chrome.runtime.sendMessage({ type: "script_executed", data: { origin: "streamfree", m3u8: e } })` to StreamFree detector adapters (`src/content/detector/module-94.js` and `src/content/detector/module-564.js`).

### 2. `savior-decoded-content`
- **Constructor Code Site:** `inject/animevietsub/main-world.js` (line 8)
  - Code: `document.body.setAttribute('savior-decoded-content', String(content));`
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

## 3. Top 20 Largest Modules

| Module ID | Size (Bytes) | Reachable | Regenerator | bn.js Copy | Direct Callers Count |
|:---|:---|:---|:---|:---|:---|
| 37 | 129796 | Yes | No | No | 2 |
| 541 | 113791 | Yes | Yes | No | 1 |
| 161 | 82564 | No | No | No | 1 |
| 89 | 48208 | Yes | Yes | No | 4 |
| 433 | 48008 | No | No | No | 3 |
| 126 | 46865 | No | No | Yes | 14 |
| 443 | 44600 | No | Yes | No | 0 |
| 24 | 42204 | Yes | Yes | No | 2 |
| 442 | 41154 | No | Yes | No | 0 |
| 6 | 41003 | Yes | Yes | No | 80 |
| 741 | 29308 | No | Yes | No | 0 |
| 0 | 28741 | Yes | Yes | No | 117 |
| 163 | 27468 | No | No | No | 1 |
| 643 | 26151 | No | No | No | 1 |
| 162 | 25849 | No | No | No | 1 |
| 27 | 21505 | Yes | No | No | 18 |
| 164 | 21039 | Yes | Yes | No | 1 |
| 232 | 20695 | No | Yes | No | 0 |
| 22 | 19787 | Yes | No | No | 1 |
| 14 | 16273 | Yes | Yes | No | 20 |
