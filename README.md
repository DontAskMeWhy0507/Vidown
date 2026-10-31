# Vidown

> **Fast, Lightweight Browser Media & Video Downloader Extension**

Vidown is a privacy-focused, high-performance browser extension that sniffs, captures, and downloads online video and audio streams (including HLS/m3u8, DASH, TikTok streams, and YouTube 1080p+ with native FFmpeg muxing).

---

## Key Features

- **Universal Stream Sniffing:** Automatically detects and captures streaming media formats (`.m3u8`, `.mpd`, `.mp4`, `.webm`, `.mp3`, `.m4a`).
- **High-Speed Multi-Thread Engine:** Accelerated chunk-based Range downloader with automatic retry and stream reassembly.
- **YouTube 1080p, 2K, & 4K Support:** Seamless video and audio stream multiplexing via the Native Messaging Helper.
- **TikTok Watermark-Free Streams:** Direct CDN detection and Chrome-to-host stream relay for resilient downloading.
- **Unified & Modern UI:**
  - Injected media bar on web video players with zero layout thrashing or stutter.
  - Floating action badge and dropdown resolution selector in the browser bar.
  - Full-featured standalone Download Manager (`downloads/downloads.html`) with unified cancellation confirmation.
- **Privacy & Security First:**
  - **Zero Telemetry:** Completely severed and neutralized all legacy Cốc Cốc tracking, A/B test calls, and ad scripts.
  - **Strict Origin Gating:** Native host accepts commands strictly from the verified extension ID.
  - **Credential Shielding:** Cookies forwarded to accelerated download tools (`yt-dlp`) are shielded inside temporary configuration files rather than exposed in system process listings.
  - **Restricted FFmpeg Protocol Whitelist:** Network streams are strictly restricted to network protocols (`http,https,tcp,tls,crypto,data`), preventing unauthorized local file access.

---

## Architecture & The "Black Box" Core

Vidown builds upon and hardens the legacy Savior extension architecture:
- **Core Bundles (`background.js`, `common.js`, `content-script.js`):** These minified bundles provide the foundational stream detection and format parsing engine.
- **Security & Performance Shim Layer (`context-guard.js`, `background.chrome.js`):** Acts as a protective barrier around the compiled core bundles. It intercepts runtime APIs, drops all telemetry pings to `coccoc.com`, optimizes DOM mutation observers to eliminate video playback lag, and manages tab state caches with LRU eviction.
- **Native Helper (`native/host.js`, `native/host.exe`):** A lightweight Node.js/packaged native messaging host that interfaces with FFmpeg and yt-dlp to assemble complex media formats on disk.

---

## Installation

### 1. Load the Extension in your Browser
1. Clone or download this repository.
2. Open your Chromium-based browser (Chrome, Brave, Edge, Cốc Cốc, Opera).
3. Navigate to `chrome://extensions/` and enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the root directory of this repository (`2.4.65_0`).

### 2. Install the Native Helper (Required for 1080p+ YouTube & FFmpeg)
- **Windows:**
  Right-click `native/install.bat` and select **Run as administrator** (or double-click to install for the current user).
- **macOS / Linux:**
  Open Terminal and run:
  ```bash
  chmod +x native/install.sh native/host.sh
  ./native/install.sh
  ```

---

## Testing & Quality Assurance

Vidown features comprehensive automated test coverage with over 60 test suites covering stream detection, native queue synchronization, video playback smoothness, Chrome dashboard error fixes, and security hardening.

To execute all test suites:
```bash
npm test
```

To build a clean distribution package:
```bash
node scripts/package_release.js
```
The packaged release zip will be generated in `dist/`.

---

## License & Attribution

This project is licensed under the [MIT License](LICENSE).

*Disclaimer: Vidown includes runtime enhancements, performance fixes, and security shims built around components derived from the Savior extension (originally authored by Cốc Cốc). All upstream intellectual property and trademarks belong to their respective owners.*
