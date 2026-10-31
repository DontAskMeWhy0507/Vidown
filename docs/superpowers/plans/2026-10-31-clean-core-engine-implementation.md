# Clean Core Engine & Black-Box Replacement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Overview
Permanently remove the compiled Cốc Cốc Savior black-box bundles (`background.js`, `common.js`, `content-script.js`, and `inject/`) and replace them with our unminified, 100% open-source Manifest V3 modular engine powered by `core/`, a new `service_worker.js`, and a lightweight `content/content_main.js`.

---

## Tasks

- [ ] **Task 1: Service Worker Core & Module Orchestration**
  - [ ] Write unit test `tests/test_clean_service_worker_core.js` verifying module initialization, media registration, HLS variant parsing, and tab badge updates.
  - [ ] Adapt `core/media_registry.js`, `core/network_observer.js`, `core/manifest_parse.js`, and `core/magic_probe.js` for dual ES module & CommonJS compatibility.
  - [ ] Implement `service_worker.js` as the primary background service worker importing from `./core/`.
  - [ ] Run `node tests/test_clean_service_worker_core.js` and verify pass.

- [ ] **Task 2: Native Messaging Bridge & IPC Dispatching in Service Worker**
  - [ ] Write unit test `tests/test_service_worker_native_bridge.js` verifying IPC actions: `getMediaForCurrentTab`, `startDownload`, `cancelDownload`, `openFile`, `openFolder`, and progress relay.
  - [ ] Implement Native Messaging connection to `com.savior.helper` with auto-reconnection and progress broadcasting.
  - [ ] Run `node tests/test_service_worker_native_bridge.js` and verify pass.

- [ ] **Task 3: Lightweight Content Script & Video Detection**
  - [ ] Write unit test `tests/test_clean_content_script.js` verifying zero forced reflows (no `style`/`class` attribute observation), `runtime_hook` injection, security gate relaying, and floating download pill mounting.
  - [ ] Implement `content/content_main.js` (~30 KB clean JS) and `content/content.css`.
  - [ ] Run `node tests/test_clean_content_script.js` and verify pass.

- [ ] **Task 4: UI Compatibility Bridge (`popup/` & `downloads/`)**
  - [ ] Write unit test `tests/test_ui_clean_core_compatibility.js` verifying popup and download manager interact seamlessly with `service_worker.js`.
  - [ ] Verify resolution dropdown displays qualities (`1080p`, `720p`, `480p`, audio) and unified cancel modal functions properly.
  - [ ] Run `node tests/test_ui_clean_core_compatibility.js` and verify pass.

- [ ] **Task 5: Manifest V3 Migration & Deletion of Legacy Hộp Đen**
  - [ ] Write test `tests/test_legacy_blackbox_elimination.js` verifying 0 `eval()`, 0 `coccoc.com`, 0 legacy bundles, and package size < 500 KB.
  - [ ] Update `manifest.json` to point `service_worker` to `service_worker.js` and `content_scripts` to `content/content_main.js`.
  - [ ] Delete `background.js`, `common.js`, `content-script.js`, `context-guard.js`, `background.chrome.js`, `downloads-nav.js`, and `inject/` directory.
  - [ ] Run `node tests/test_legacy_blackbox_elimination.js` and verify pass.

- [ ] **Task 6: Full Regression Verification, Packaging & GitHub Push**
  - [ ] Update `scripts/package_release.js` to include `core/` and `content/`.
  - [ ] Run `node scripts/package_release.js` to build release package in `dist/`.
  - [ ] Run `npm test` across all test suites to confirm 100% pass rate.
  - [ ] Commit all changes and push to `master` on `origin` (`DontAskMeWhy0507/Vidown`).
