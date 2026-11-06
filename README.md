# Vidown (VidManager Media Downloader Extension)

Vidown is a modern, modular media detection and downloader browser extension for Chrome Manifest V3 (`minimum_chrome_version: 116`).

> **Architecture & Production Source Notice:**  
> All shipped extension scripts (`content-script.js`, `background.js`, `common.js`, and `inject/*`) are compiled from readable, structured sources under `src/` via the unified `npm run build` pipeline:
> - `src/content/`: Modular content script (649 modules mapped across 776 slots in `module-registry.js` & `slots.js`).
> - `src/background/`: Background service worker modules partitioned by subsystem (`entry`, `messaging`, `downloads`, `storage`, `tabs`, `events`, `crypto`, `utilities`).
> - `src/common/`: Shared runtime library and global context helpers.
> - `src/inject/`: Main-world site extractors for modern web platforms (TikTok, Douyin, YouTube, Facebook, Twitter/X, LinkedIn, etc.).

---

## Build Pipeline & Artifact Invariants

- **Original Baseline Bundle**: 2,404,925 bytes (630 B CSS + 2,404,295 B Webpack IIFE).
- **Current Shipped Built Bundle**: ~2.33 MB.
- **Net Raw Code Reduction**: >50,000 bytes met.
- **Vendor Optimizations**:
  - `bn.js` 6-to-1 deduplication: canonical `src/content/vendor/elliptic/module-126.js` preserved; duplicate instances replaced with alias stubs, saving 216,015 B raw.
  - `regenerator-runtime` deduplication: shared core in `src/content/vendor/regenerator-core.js`; eliminates inlined generator copies in `content-script.js`, saving 342,202 B raw.
  - Third-party libraries cleanly isolated in `src/content/vendor/` (`cryptojs`, `qrcode`, `stream`, `fast-xml-parser`, `mustache`, `eventemitter3`, `buffer`, `shims`, `parser`, `elliptic`).
- **Release Package**: `dist/savior-extension-v3.1.0.zip` is ~1.12 MB containing clean extension files with 0 `node_modules`, 0 executables, and zero sourcemaps.

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

# Development build with unminified output and per-module inline V3 sourcemaps
npm run build:dev

# Run automated test suites (92 test suites)
npm test

# Sync module integrity hashes and census file sizes
npm run sync:integrity
```

### Loading in Chrome
1. Navigate to `chrome://extensions/` in Google Chrome.
2. Enable **Developer mode** in the upper right corner.
3. Click **Load unpacked** and select the repository root directory.

---

## Debugging in Chrome DevTools (`npm run build:dev`)

Vidown features a dedicated developer debugging mode designed for friction-free pair programming and debugging:

```bash
npm run build:dev
```

### How Per-Module V3 Sourcemaps Work:
1. **Direct Module Mapping**: In `--dev` mode, `build_background.js`, `build_content_script.js`, and `build_common.js` generate a single inline V3 Indexed Source Map (`version: 3, sections: [...]`).
2. **Real Source Tree in DevTools**: In Chrome DevTools (under the **Sources** tab), you will see individual files directly mapped under `src/content/**`, `src/background/**`, and `src/common/**` instead of an opaque bundle or `<stdin>`.
3. **Breakpoints & Stepping**: Set breakpoints directly in the original modular source files (e.g., `src/background/downloads/manager.js` or `src/content/platform/youtube.js`). Variable inspection, call stacks, and stepping map 1-to-1 to individual source files.
4. **Release Safety**: The release packaging script (`npm run package` / `npm run build`) automatically checks for development sourcemaps and rebuilds clean production bundles before creating the release zip, guaranteeing zero sourcemap leakage into `dist/savior-extension-v3.1.0.zip`.

---

## Native Companion Setup (Windows / macOS / Linux)

The native messaging host (`com.savior.helper`) enables accelerated downloads, multi-thread downloading, HLS/DASH audio+video stream muxing, and YouTube 1080p+ downloads with FFmpeg.

### Windows Installation:
1. Run `native\install.bat` (double-click or from command line).
2. If `native\host.exe` is absent, `install.bat` will automatically compile `native\host.cs` using the .NET Framework C# compiler (`csc.exe`).
3. The manifest is generated at `%LOCALAPPDATA%\SaviorHelper\com.savior.helper.json` (leaving repository files untouched) and registered in HKCU for Google Chrome, CocCoc Browser, Microsoft Edge, and Brave.
4. To uninstall, run `native\uninstall.bat`.

### macOS Installation:
1. Make scripts executable and run the installer:
   ```bash
   chmod +x native/install.sh native/host.sh native/host.js
   ./native/install.sh
   ```
2. The installer detects `Darwin` and writes `com.savior.helper.json` into:
   - `~/Library/Application Support/Google/Chrome/NativeMessagingHosts`
   - `~/Library/Application Support/Chromium/NativeMessagingHosts`
   - `~/Library/Application Support/BraveSoftware/Brave-Browser/NativeMessagingHosts`
   - `~/Library/Application Support/Microsoft Edge/NativeMessagingHosts`
3. To uninstall, run `./native/uninstall.sh`.

### Linux Installation:
1. Run the installer:
   ```bash
   chmod +x native/install.sh native/host.sh native/host.js
   ./native/install.sh
   ```
2. The installer detects `Linux` and writes `com.savior.helper.json` into:
   - `~/.config/google-chrome/NativeMessagingHosts`
   - `~/.config/chromium/NativeMessagingHosts`
   - `~/.config/BraveSoftware/Brave-Browser/NativeMessagingHosts`
   - `~/.config/microsoft-edge/NativeMessagingHosts`
3. To uninstall, run `./native/uninstall.sh`.

### Acceleration Binaries:
Ensure `ffmpeg` and `yt-dlp` are placed in `native/bin/` (or installed on your system `PATH`) to enable hardware acceleration and stream muxing.

---

## Repository Structure

```
├── manifest.json                 # Chrome Manifest V3 manifest (v3.1.0)
├── content-script.js             # Shipped production content script bundle
├── background.js                 # Shipped background service worker bundle
├── common.js                     # Shipped common runtime utility bundle
├── inject/                       # Shipped main-world site extractors
├── src/
│   ├── content/                  # Modular content script sources (649 modules)
│   │   ├── core/                 # dom-utils.js, media-sniffer.js, format-resolver.js, etc.
│   │   ├── detector/             # media-constants.js, url-utils.js, dom-scanner.js, content-entry.js, etc.
│   │   ├── platform/             # tiktok-douyin.js, facebook.js, youtube.js, specialized extractors
│   │   ├── providers/            # ab-test-provider.js, media providers
│   │   ├── widget/               # settings-manager.js, dom-constants.js, overlay-styles.js, download-list.js, widget-manager.js
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
├── native/                       # Native messaging host (host.cs, host.js, host.sh, installers)
├── tests/                        # Automated regression, golden characterization & oracle suites (92 suites)
│   └── fixtures/                 # Test fixtures and module census data
├── scripts/                      # Build pipelines (build_content_script, build_background, build_common, build_inject, package_release)
└── dist/                         # Release packages (savior-extension-v3.1.0.zip)
```

---

## Security Notes & Standing Trade-Offs

- **YouTube & DASH Deciphering**: Evaluates site-player deciphering logic in the page's MAIN world and establishes a pass-through Trusted Types default policy. This reflects standard browser media extraction design (bounded strictly to the sites' own player code) to unpack signature and PoToken tokens.
- **Dynamic Code Execution in `helper-655`**: Module `src/content/platform/helper-655.js` evaluates stored parser expressions (`eval(this.code)`) and is deliberately preserved as the sole unrenamed module to prevent symbol collision or parser breakage.
- **Inert Remote-Rules Path**: Legacy remote-rule endpoints in background service worker logic are 100% neutralized and inert via runtime fetch shims in `background.chrome.js`.
- **Native Helper Allowed Origins**: The native messaging host manifest (`com.savior.helper.json`) pins the active RSA-2048 Chrome Extension ID (`nnjbdidmmnecdmcllkcaajboplpcimcf`). If the extension public key is regenerated in the future, the host installer must be re-executed.
- **Multilingual UI**: Certain user interface strings across the popup, downloads manager, and native status reporting intentionally remain in Vietnamese by deliberate product choice.

---

## Licensing & Notice

Vidown is licensed under the [MIT License](LICENSE) © 2026 Vu Tien Tuan Trung.

Please see [NOTICE.md](NOTICE.md) for full attribution of the underlying origin and third-party vendored components.
