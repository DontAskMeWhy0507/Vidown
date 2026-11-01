# Vidown (VidManager Media Downloader Extension)

Vidown is a media detection and downloader browser extension for Chrome Manifest V3 (`minimum_chrome_version: 116`).

> **Architecture & Development Status Notice:**
> The shipped production bundle `content-script.js` (1,949,390 bytes) is compiled via `scripts/build_content_script.js` by assembling the 649 mechanically split modules in `src/content/` (mapped through `src/content/module-registry.js` across 776 slots) with `esbuild.transformSync` minification.
> 
> The directory `src/experimental/content-next/` contains an **unwired architectural prototype layer** (~26 KB across 4 platform families). It is **not** connected to the build pipeline and is **not** loaded in the browser. A full semantic replacement of the 649 modules remains pending architectural design and stakeholder direction.

---

## Build Pipeline & Artifact Invariants

- **Original Baseline Bundle**: 2,404,925 bytes (630 B CSS + 2,404,295 B Webpack IIFE).
- **Current Shipped Built Bundle**: 1,949,390 bytes (1,949,166 UTF-16 code units + 224 multi-byte UTF-8 expansion bytes from 134 non-ASCII characters).
- **Net Raw Code Reduction**: 455,535 bytes (achieving the Gate 5 requirement of $\ge 450,000$ B).
- **Vendor Optimizations (Milestone 2)**:
  - `bn.js` 6-to-1 deduplication: canonical `src/content/vendor/elliptic/module-126.js` (43,355 B committed git blob) preserved; 5 duplicate instances replaced with 103 B alias stubs, saving 216,015 B raw.
  - `regenerator-runtime` deduplication: shared core in `src/content/vendor/regenerator-core.js` (2,564 B committed git blob); eliminates all 164 inlined generator copies in `content-script.js`, saving 342,202 B raw.
  - AST Parser (`module-37.js`, 119,694 B) and Generator (`module-89.js`, 45,562 B): verified load-bearing for YouTube player response deciphering; isolated in `src/content/vendor/parser/`.
- **Release Package**: `dist/savior-extension-v2.4.65.zip` is ~1.03 MB (strictly $\le 1.15$ MB ceiling) containing 0 `node_modules` and 0 executables.

---

## Getting Started

### Prerequisites & Testing

```bash
# Clone repository
git clone https://github.com/DontAskMeWhy0507/Vidown.git
cd Vidown

# Run automated test suites (68 suites)
npm test

# Run golden characterization tests on real DOM fixtures
node tests/test_golden_behavior.js

# Build production content script
npm run build:content

# Package extension zip for distribution
npm run package
```

### Loading in Chrome
1. Navigate to `chrome://extensions/` in Google Chrome.
2. Enable **Developer mode** in the upper right corner.
3. Click **Load unpacked** and select the repository root directory.

---

## Repository Structure

```
├── manifest.json                 # Chrome Manifest V3 manifest
├── content-script.js             # Shipped production content script bundle (1,954,607 B)
├── src/
│   ├── content/                  # Shipped build source (649 modules)
│   │   ├── entry/                # CSS prefetcher header
│   │   ├── crypto/               # Modules 0, 16, 61, etc. (stream decryption)
│   │   ├── detector/             # Modules 1, 5, 11, etc. (DOM detection engine)
│   │   ├── platform/             # Platform handlers (356 modules)
│   │   ├── providers/            # Modules 43, 368, 389, 565, 566
│   │   ├── vendor/               # Canonical elliptic (126), parser (37, 89), regenerator-core
│   │   ├── widget/               # settings-manager.js, dom-constants.js, overlay-styles.js, download-list.js, widget-manager.js (Modules 7, 21, 138, 164, 541)
│   │   ├── module-registry.js    # 649 active module path mappings
│   │   └── slots.js              # 776-slot Webpack array mapping (127 null holes)
│   └── experimental/
│       └── content-next/         # UNWIRED draft ES module prototype (~26 KB)
│           ├── core/             # constants.js, events.js, utils.js
│           ├── crypto/           # crypto-rollup.js
│           ├── detector/         # attribute-stamper.js, dom-scanner.js
│           ├── providers/        # facebook.js, hls-dash.js, index.js, tiktok.js, youtube.js
│           └── index.js          # Draft ESM entry point
├── tests/                        # 68 automated regression & golden characterization suites
├── types/                        # TypeScript declaration contracts (types/content.d.ts)
└── dist/                         # Release packages (savior-extension-v2.4.65.zip)
```

---

## Licensing & Notice

Vidown is licensed under the [MIT License](LICENSE) © 2026 Vu Tien Tuan Trung.

Please see [NOTICE.md](NOTICE.md) for full attribution of the underlying Cốc Cốc Savior origin and third-party vendored components (bn.js, elliptic, regenerator-runtime, CryptoJS, Acorn).
