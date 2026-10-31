# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.4.66] - 2026-10-31

### Fixed
- **Instagram Stories crash**: Fixed an issue where viewing or transitioning between Instagram Stories failed or froze. The content script previously injected floating action elements (`.vidown-floating-pill`) directly into React-managed video containers, which violated React's virtual DOM reconciliation and triggered unhandled `NotFoundError` / `removeChild` exceptions.
- **TikTok first video playback stutter/lag**: Removed forced synchronous layout calculation (`window.getComputedStyle`) and container styling mutations on initial video mount that caused layout thrashing and triggered TikTok's `ResizeObserver` re-layout.

### Changed
- **SPA Player Isolation**: Added `isSensitiveSite()` protection for complex Single Page Apps (`instagram.com`, `tiktok.com`, `youtube.com`, `facebook.com`, `x.com`, `netflix.com`). On these platforms, content script DOM mutations are disabled, ensuring 100% native video player stability.
- **Headless Stream Sniffing**: Media streams on sensitive sites are now captured completely independently at the background network layer via `chrome.webRequest.onHeadersReceived` without touching the web page DOM.

---

## [2.4.65] - 2026-10-31

### Added
- **100% Clean Open-Source Core Engine**: Complete rewrite of the extension core under Manifest V3 architecture using native ES modules (`service_worker.js`, `core/media_registry.js`, `core/network_observer.js`, `core/manifest_parse.js`, `core/magic_probe.js`).
- **Comprehensive Automated Testing**: 66 automated test suites covering deadlock prevention, native messaging security, stream probing, and bundle cleanliness.

### Removed
- **Eliminated Cốc Cốc Legacy Black-Box**: Completely purged legacy compiled bundles (`background.js` 715 KB, `common.js` 296 KB, `content-script.js` 2.43 MB) and all 56 scrapers in `inject/`.
- **Zero Telemetry & Eval**: Removed all external tracking pings to `coccoc.com` and eliminated `eval()` / `new Function()` execution.

### Security & Performance
- **Package Size Reduction**: Reduced extension package size from 1.58 MB down to ~620 KB (33 clean files).
- **Hardened Native Helper**: Session cookies hidden from system process listings, restricted FFmpeg protocol whitelist, and eliminated CLI command injection risks.
