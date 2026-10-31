# Clean Modular Architecture & De-Bloat Design Specification

**Date:** 2026-10-31  
**Project:** Vidown (Savior Media Downloader Extension v2.4.65)  
**Status:** Approved for Implementation Planning  

---

## 1. Executive Summary & Goal

The current codebase relies on a 2.43 MB minified/bundled `content-script.js` and a 715 KB `background.js` extracted from Cốc Cốc Savior. Over 80% of this payload consists of dead legacy bloat: redundant cryptographic ciphers (CryptoJS with DES, Blowfish, RC4, Rabbit, MD5), obsolete A/B testing frameworks, Cốc Cốc SERP promotion scripts, and forbidden `eval()` calls that conflict with Chrome Manifest V3 Content Security Policy (CSP).

**Core Goal:**  
De-bloat and restructure the extension into a clean, modern, modular open-source architecture (`src/`), replacing the bloated bundles with lean, clean ES modules (< 250 KB total) while **strictly preserving 100% of the current User Interface (UI) and User Experience (UX)**.

---

## 2. Strict Safety & Non-Destructive Principles

> [!IMPORTANT]
> **Zero Accidental Deletions:** No existing working files, configurations, UI assets, or native helper code will be deleted carelessly.

1. **Non-destructive Migration:** All new modular code is developed inside a dedicated `src/` directory. Original files (`content-script.js`, `background.chrome.js`, `background.js`) are kept intact until the new build is 100% verified against the full test suite.
2. **Preserve All UI Assets:**
   * Floating Download Widget injected into video players (`<savior-host>` Shadow DOM).
   * Popup interface (`popup/popup.html`, `popup.js`, `popup.css`).
   * Downloads Manager interface (`downloads/downloads.html`, `downloads.js`, `downloads.css`).
   * Extension icons and styling (`images/savior_logo.png`, `css/content-script.css`).
3. **Preserve Native Messaging Integration:** The high-performance 8-thread chunk downloader and FFmpeg muxing engine in `native/host.js` and `background.chrome.js` remain fully functional and connected.

---

## 3. Module Inventory: What is Kept vs. What is Eliminated

### 3.1. Core Modules Kept (The Essential Engine ~20%)
* **Module 0 & 3 (Detector & Rule Engine):**
  * `isSpecialUrls`: Regex catalog for stream detection (YouTube, TikTok, Facebook, ZingMP3, NhacCuaTui, HLS `.m3u8`, DASH `.mpd`).
  * `createMP3Resources`: Audio stream extractor that derives high-quality MP3 options from video streams.
  * URL normalization, filename sanitization, and Content-Disposition parser.
* **Module 1 (Media Types & Standards):**
  * Definitions for `video`, `audio`, `no_watermark_video`, and `subtitles`.
  * Resolution definitions: `144p` up to `8K UHD HDR`.
* **Module 12 (Floating Widget Renderer):**
  * Shadow DOM creator (`<savior-host>` with open mode).
  * Video bounding rect calculator and auto-positioning logic.
  * Quality dropdown selection, hover delay timer, and click dispatchers.
* **Module 97 (Event Emitter Bus):**
  * Lightweight pub/sub message bus connecting DOM scanners, the floating widget, and the background worker.
* **Module 538 (YouTube Stream Parser):**
  * Cleaned-up `ytdl-core` stream parser for resolving adaptive audio and video streams.

### 3.2. Junk Modules Eliminated (~80%)
* **Cryptographic Bloat (Modules 14–32, ~1.5 MB):**
  * CryptoJS legacy algorithms: DES, TripleDES, Blowfish, RC4, Rabbit, RIPEMD160. None of these are used for standard web video streaming over TLS/HTTPS.
* **Telemetry & Tracking:**
  * Obsolete tracking calls to Cốc Cốc analytics and remote A/B testing servers.
* **Forbidden Dynamic Code Execution:**
  * Elimination of all `eval(injectCode)` calls in legacy injectors to ensure full Manifest V3 CSP compliance.
* **Scraper Stubs:**
  * Unused search engine result page (SERP) scrapers and promotional banners.

---

## 4. Target Directory Structure (`src/`)

```
Vidown/
├── src/
│   ├── background/
│   │   ├── index.js                  # Background Service Worker entry point
│   │   ├── native-bridge.js          # Native Messaging Host connector (8-thread + FFmpeg)
│   │   ├── download-manager.js       # Queue, history mutex, and chrome.storage syncing
│   │   └── web-request-sniffer.js    # Network headers detector (Content-Type/Content-Length)
│   │
│   ├── content/
│   │   ├── index.js                  # Content script entry point
│   │   ├── detector/
│   │   │   ├── site-rules.js         # Comprehensive video site regex rules (HLS, DASH, etc.)
│   │   │   ├── dom-scanner.js        # MutationObserver for <video>, <audio>, <iframe>
│   │   │   └── media-sniffer.js      # MediaSource & blob URL sniffer
│   │   ├── widget/
│   │   │   ├── host-element.js       # <savior-host> Shadow DOM constructor
│   │   │   ├── widget-ui.js          # Renders dropdown menu, resolution list, MP3 buttons
│   │   │   └── widget-events.js      # Hover states, click handling, and event dispatching
│   │   └── events/
│   │       └── bus.js                # Clean Event Emitter message bus
│   │
│   └── shared/
│       ├── media-types.js            # Video, Audio, No-Watermark, resolutions map
│       └── url-utils.js              # URL parsing, filename derivation, and sanitization
│
├── dist/                             # Compiled distribution bundles (< 250 KB total)
│   ├── content-script.js             # Bundled clean content script
│   └── background.js                 # Bundled clean background service worker
├── popup/                            # Preserved popup interface
├── downloads/                        # Preserved downloads manager interface
├── native/                           # Preserved native messaging host & installers
├── tests/                            # 59 automated test suites
└── scripts/
    ├── build.js                      # esbuild compilation script
    └── package_release.js            # CWS package release archiver
```

---

## 5. Build Pipeline & Technical Implementation

1. **Bundler:** Use `esbuild` for deterministic, sub-second compilation.
   * `src/content/index.js` -> `dist/content-script.js` (Target: ES2022, Browser)
   * `src/background/index.js` -> `dist/background.js` (Target: ES2022, ServiceWorker)
2. **NPM Scripts:**
   * `"build"`: `node scripts/build.js`
   * `"test"`: Run all 59 test suites in `tests/test_*.js`
   * `"package"`: `node scripts/package_release.js`

---

## 6. Verification & Quality Assurance

1. **Full Test Suite Regression:**
   * All 59 tests in `tests/test_*.js` must pass (100% pass rate).
   * Fix the Windows CRLF newline assertion in `tests/test_user_flows_and_edge_cases_audit.js`.
2. **Security & CSP Audit:**
   * AST verification confirming 0 occurrences of `eval()`.
   * Manifest V3 validation: No remote code loading.
3. **Bundle Size Benchmark:**
   * Compiled `content-script.js` must be under 250 KB (down from 2.43 MB).
4. **Interactive UI Verification:**
   * Floating bar renders accurately in Shadow DOM on video hover.
   * Popup and Download Manager synchronize seamlessly with active downloads.
