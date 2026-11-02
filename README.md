# Vidown (VidManager Media Downloader Extension)

Vidown is a media detection and downloader browser extension for Chrome Manifest V3 (`minimum_chrome_version: 116`).

> **Architecture & Production Source Notice:**  
> All shipped extension scripts (`content-script.js`, `background.js`, `common.js`, and `inject/*`) are compiled from readable, structured sources under `src/` via the unified `npm run build` pipeline:
> - `src/content/`: Modular content script (649 modules mapped across 776 slots in `module-registry.js` & `slots.js`).
> - `src/background/`: Background service worker modules partitioned by subsystem (`entry`, `messaging`, `downloads`, `storage`, `tabs`, `events`, `crypto`, `utilities`).
> - `src/common/`: Shared runtime library and global context helpers.
> - `src/inject/`: Main-world site extractors for modern web platforms (TikTok, Douyin, YouTube, Facebook, Twitter/X, LinkedIn, etc.).

---

## Build Pipeline & Artifact Invariants

- **Original Baseline Bundle**: 2,404,925 bytes (630 B CSS + 2,404,295 B Webpack IIFE).
- **Current Shipped Built Bundle**: 2,352,581 bytes.
- **Net Raw Code Reduction**: 52,344 bytes (Gate 5 target $\ge 50,000$ B met per owner ruling).
- **Vendor Optimizations (Milestone 2)**:
  - `bn.js` 6-to-1 deduplication: canonical `src/content/vendor/elliptic/module-126.js` (43,355 B committed git blob) preserved; 5 duplicate instances replaced with 103 B alias stubs, saving 216,015 B raw.
  - `regenerator-runtime` deduplication: shared core in `src/content/vendor/regenerator-core.js` (2,564 B committed git blob); eliminates inlined generator copies in `content-script.js`, saving 342,202 B raw.
  - Third-party libraries cleanly isolated in `src/content/vendor/` (`cryptojs`, `qrcode`, `stream`, `fast-xml-parser`, `mustache`, `eventemitter3`, `buffer`, `shims`, `parser`, `elliptic`).
- **Release Package**: `dist/savior-extension-v3.0.0.zip` is ~1.08 MB (1,135,323 bytes, strictly $\le 1.15$ MB ceiling) containing 66 verified entries with 0 `node_modules` and 0 executables.

---

## Getting Started

### Prerequisites & Building from Source

The build pipeline compiles the extension artifacts from unpacked source:

```bash
# Clone repository
git clone https://github.com/DontAskMeWhy0507/Vidown.git
cd Vidown

# Install development dependencies
npm install

# Full build: compiles common.js, background.js, content-script.js, inject/, and packages release zip
npm run build

# Development build with unminified output and inline sourcemaps
npm run build:dev

# Run automated test suites
npm test

# Run golden characterization tests on real DOM fixtures
node tests/test_golden_behavior.js
```

### Loading in Chrome
1. Navigate to `chrome://extensions/` in Google Chrome.
2. Enable **Developer mode** in the upper right corner.
3. Click **Load unpacked** and select the repository root directory.

---

## Repository Structure

```
├── manifest.json                 # Chrome Manifest V3 manifest
├── content-script.js             # Shipped production content script bundle (2,352,581 B)
├── background.js                 # Shipped background service worker bundle (1,185,532 B)
├── common.js                     # Shipped common runtime utility bundle (501,606 B)
├── inject/                       # Shipped main-world site extractors
├── src/
│   ├── content/                  # Modular content script sources (649 modules)
│   │   ├── core/                 # dom-utils.js, media-sniffer.js, format-resolver.js, etc.
│   │   ├── detector/             # media-constants.js, url-utils.js, dom-scanner.js, content-entry.js, etc.
│   │   ├── platform/             # tiktok-douyin.js, facebook.js, youtube.js, specialized extractors
│   │   ├── providers/            # ab-test-provider.js, media providers
│   │   ├── widget/               # settings-manager.js, dom-constants.js, overlay-styles.js, download-list.js, widget-manager.js, floating-bar-manager.js
│   │   ├── vendor/               # cryptojs, qrcode, stream, fast-xml-parser, mustache, eventemitter3, buffer, shims, parser, elliptic
│   │   ├── module-registry.js    # 649 active module path mappings
│   │   └── slots.js              # 776-slot Webpack array mapping (127 null holes)
│   ├── background/               # Modular background service worker sources
│   │   ├── entry/                # Service worker main entry point (module-178.js)
│   │   ├── messaging/            # Runtime message routers
│   │   ├── downloads/            # Chrome downloads API managers
│   │   ├── storage/              # Extension storage accessors
│   │   ├── tabs/                 # Tab state trackers
│   │   ├── events/               # Background event broadcasters
│   │   ├── crypto/               # Cryptographic helpers
│   │   ├── utilities/            # Helper functions
│   │   └── module-registry.js    # Background module mappings
│   ├── common/                   # Modular common runtime sources
│   │   ├── core-utils/           # Core DOM and event utilities
│   │   ├── entry/                # Entry initialization (module-736.js)
│   │   ├── crypto/               # Cryptographic routines
│   │   ├── utilities/            # General helpers
│   │   └── module-registry.js    # Common module mappings
│   ├── inject/                   # Source main-world extractors (synced to inject/ via build:inject)
├── tests/                        # Automated regression, golden characterization & oracle suites
├── scripts/                      # Build pipelines (build_content_script, build_background, build_common, build_inject, package_release)
└── dist/                         # Release packages (savior-extension-v3.0.0.zip)
```

---

## Licensing & Notice

Vidown is licensed under the [MIT License](LICENSE) © 2026 Vu Tien Tuan Trung.

Please see [NOTICE.md](NOTICE.md) for full attribution of the underlying Cốc Cốc Savior origin and third-party vendored components (bn.js, elliptic, regenerator-runtime, CryptoJS, Acorn, node-qrcode, readable-stream, fast-xml-parser, mustache.js, eventemitter3).
