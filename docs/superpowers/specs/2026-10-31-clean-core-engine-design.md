# Clean Core Engine Architecture & Black-Box Replacement Design

- **Status:** Approved
- **Author:** Antigravity & User Pair Programming
- **Date:** 2026-10-31
- **Target Repository:** `Vidown` (`DontAskMeWhy0507/Vidown`)

---

## 1. Executive Summary

This design replaces the legacy minified, source-less Cốc Cốc Savior bundles (`background.js` 715 KB, `common.js` 296 KB, and `content-script.js` 2.43 MB) and associated monkey-patch shims with an unminified, 100% open-source, modular media detection and download engine built natively for Chrome Extensions Manifest V3.

The replacement preserves existing user-facing UI assets (`popup/`, `downloads/`) and the hardened native messaging helper (`native/host.js`), reducing the total extension size from ~4.5 MB to under 500 KB while eliminating legacy `eval()` calls and all references to `coccoc.com`.

---

## 2. Architectural Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CHROME BROWSER ENVIRONMENT                      │
│                                                                        │
│  [ Web Page (Main World) ]                                            │
│       │ HTML5 <video> / MSE MediaSource Blob                           │
│       ▼                                                                │
│  [ core/runtime_hook.js ] (Monitors video play, src, and MSE buffers)  │
│       │ window.postMessage (Zero-trust validated, 2KB cap)             │
│       ▼                                                                │
│  [ core/security_gate.js ] (Validates origin & schema)                 │
│       │                                                                │
│  [ content/content_main.js ] (Lightweight content script, ~30 KB)      │
│       │ chrome.runtime.sendMessage                                     │
│       ▼                                                                │
│  [ service_worker.js ] (Clean background entry point)                 │
│       ├── core/network_observer.js  (chrome.webRequest header sniffer) │
│       ├── core/magic_probe.js       (512-byte stream-capped validator) │
│       ├── core/manifest_parse.js    (HLS .m3u8 & DASH .mpd parser)     │
│       └── core/media_registry.js    (Per-tab state & session storage)  │
│            │                                                           │
│            ├── UI IPC ───► [ popup/popup.js ]                          │
│            │          ───► [ downloads/downloads.js ]                  │
│            │                                                           │
│            └── Native Messaging ──► [ native/host.js ] (FFmpeg/yt-dlp) │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Subsystem Specifications

### 3.1 Service Worker (`service_worker.js`)
- **Role:** Background service worker replacing `background.js` and `background.chrome.js`.
- **Imports:** Uses ES module imports (`import ... from './core/...js'`).
- **Responsibilities:**
  1. Bootstraps and coordinates `core/media_registry.js`, `core/network_observer.js`, `core/manifest_parse.js`, and `core/magic_probe.js`.
  2. Maintains a persistent, auto-reconnecting `chrome.runtime.connectNative('com.savior.helper')` port.
  3. Manages extension badge text on active tabs (showing detected media counts).
  4. Responds to IPC messages from popup and download manager:
     - `getMediaForCurrentTab`: returns sanitized list of media records.
     - `startDownload`: routes request to native helper or browser download API.
     - `cancelDownload`: dispatches cancellation to native helper and updates storage.
     - `openFile` / `openFolder`: sends file interaction IPC to native helper.
  5. Broadcasts download progress and status updates to active UI listeners.

### 3.2 Detection & Sniffing Core (`core/`)
- **`core/media_types.js`:**
  Defines `UniversalMediaRecord`, quality descriptors (`1080p`, `720p`, `480p`, `audio`), and state enum (`DETECTED`, `RESOLVING`, `READY`, `DOWNLOADING`, `COMPLETED`, `ERROR`).
- **`core/media_registry.js`:**
  In-memory `Map<tabId, Map<recordId, UniversalMediaRecord>>` backed by debounced sync to `chrome.storage.session`. Enforces a strict FIFO limit of 30 records per tab to prevent memory leaks.
- **`core/network_observer.js`:**
  Monitors `chrome.webRequest.onHeadersReceived` for media mime-types (`video/*`, `audio/*`), `.m3u8` playlists, and `.mpd` manifests. Excludes transient 2-second transport chunks (`.ts`, `.m4s`).
- **`core/manifest_parse.js`:**
  Parses HLS master playlists into variants with bandwidths, resolutions, and linked audio tracks. Parses DASH manifests.
- **`core/magic_probe.js`:**
  Fetches at most the first 512 bytes with immediate reader cancellation (`reader.cancel()`) to identify magic bytes (`ftyp` for MP4, `EBML` for WebM, ID3 for MP3) when server headers are ambiguous.
- **`core/runtime_hook.js` & `core/security_gate.js`:**
  Injected into the Main World at `document_start` to intercept `MediaSource.addSourceBuffer` and HTMLMediaElement play events, bridged safely to Isolated World with strict validation.

### 3.3 Clean Content Script (`content/content_main.js`)
- **Role:** Replaces the 2.43 MB `content-script.js`.
- **Responsibilities:**
  1. Receives media events from `core/security_gate.js` and forwards them to `service_worker.js`.
  2. Scans for `<video>` elements using `IntersectionObserver` / `MutationObserver` (with `attributeFilter: ['src', 'data-src']`, excluding `style` and `class` to guarantee 0 forced reflows).
  3. Injects a lightweight floating action button on detected videos for instant resolution selection and download initiation.

### 3.4 UI & Native Integration
- **`popup/popup.js`:**
  Updated to query `service_worker.js` via clean IPC `{ action: 'getMediaForCurrentTab' }`. Renders resolution dropdowns and dispatches download requests.
- **`downloads/downloads.js`:**
  Subscribes to progress broadcasts from `service_worker.js`. Retains the unified single-X cancellation modal dialog and file opener buttons.
- **`native/host.js`:**
  Retained with all audit security hardenings (restricted FFmpeg protocol whitelist, `--config-location` cookie shielding, and `--` argument delimiters).

---

## 4. Deletion & Cleanup Inventory

The following legacy files will be permanently deleted:
- `background.js` (715 KB minified bundle)
- `common.js` (296 KB minified bundle)
- `content-script.js` (2.43 MB minified bundle)
- `context-guard.js` (legacy shim)
- `background.chrome.js` (legacy shim)
- `downloads-nav.js` (legacy shim)
- `inject/` directory (56 files of legacy Cốc Cốc scrapers containing `eval()`)

---

## 5. Manifest V3 Configuration

`manifest.json` will be updated to:
```json
{
  "manifest_version": 3,
  "name": "Vidown",
  "version": "2.4.65",
  "description": "Fast, lightweight browser media & video downloader extension",
  "background": {
    "service_worker": "service_worker.js",
    "type": "module"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content/content_main.js"],
      "run_at": "document_start",
      "all_frames": true
    }
  ],
  "web_accessible_resources": [
    {
      "resources": [
        "core/runtime_hook.js",
        "css/*",
        "images/*"
      ],
      "matches": ["<all_urls>"]
    }
  ],
  "permissions": [
    "storage",
    "downloads",
    "webRequest",
    "nativeMessaging",
    "tabs"
  ],
  "host_permissions": [
    "<all_urls>"
  ]
}
```

---

## 6. Verification & Quality Gates

1. **Automated Test Matrix:**
   - Universal Media Core unit tests (`tests/test_universal_media_core.js`).
   - Manifest parsing tests for HLS and DASH.
   - Network observer sniffing tests.
   - UI IPC and Native bridge communication tests.
   - Audit security & hygiene tests (`tests/test_audit_security_hardening_and_hygiene.js`).
2. **Security Verification:**
   - Grep verification: 0 occurrences of `eval()`.
   - Grep verification: 0 references to `coccoc.com`.
   - Clean linting with 0 layout reflow warnings.
3. **Packaging:**
   - Package release zip via `scripts/package_release.js`.
   - Verify package size < 500 KB (down from 1.58 MB).
