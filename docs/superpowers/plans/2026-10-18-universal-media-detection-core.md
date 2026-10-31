# Universal Media Detection Core Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the Universal Media Detection Core (Lessons 1, 3, 4, 5 from `F:\VideoDownloader`) into the Savior extension (`f:\downloadcodex\2.4.65_0`) as an additive modular enhancement for MSE/Blob stream interception, 512-byte stream-capped magic probing, evidence-based causal playlist linking, and a 3-tier resilient Media Registry.

**Architecture:** Additive modular core housed in `core/` directory (`media_types.js`, `media_registry.js`, `magic_probe.js`, `manifest_parse.js`, `network_observer.js`, `runtime_hook.js`, `security_gate.js`). The runtime hook is injected into the Main World at `document_start` to intercept `MediaSource` and `fetch/XHR`, bridged through a zero-trust Security Gate in the Isolated World, processed by a header-only Network Observer and Magic Prober in the Service Worker, and recorded into a debounced 3-tier Media Registry synchronized with `chrome.storage.session`.

**Tech Stack:** JavaScript (ES6+), Chrome Extensions Manifest V3, Web Streams API (`getReader().cancel()`), Web Crypto API, Node.js for test harness.

**Spec:** Documented in conversation `/grill-me` alignment and referenced from `F:\VideoDownloader\docs\superpowers\specs\2026-10-09-universal-media-detection-core-design.md`.

## Global Constraints
- Must NOT break or regress any of the 21 existing automated test suites in `tests/`.
- Must adhere strictly to Chrome Manifest V3 and Trusted Types (zero `.innerHTML` in injected content scripts).
- Must enforce Zero-Trust on all Main World inputs: max 2KB payload cap, schema validation, rate limit max 20 events/s.
- Magic probe must cap network reading at 512 bytes with immediate stream cancellation (`reader.cancel()` and `AbortController.abort()`).
- Registry must enforce FIFO cap of 30 items per tab and trailing debounce 500ms sync to `chrome.storage.session`.
- Download routing must prioritize Native Host (FFmpeg / Range Downloader) with fallback to `chrome.downloads.download`.

## Review Focus
1. Main World prototype pollution or oversized payloads crashing content scripts -> Pin via unit tests in `security_gate.js`.
2. Server ignoring HTTP Range on magic probe and streaming full gigabyte files -> Pin via stream reader cancellation in `magic_probe.js`.
3. Segment chunks from different videos sharing the same CDN being misattributed -> Pin via evidence-based `Set<string>` matching in `network_observer.js`.
4. Service Worker suspension after 30s causing tab media loss -> Pin via hydration from `chrome.storage.session` in `media_registry.js`.
5. Sanitization of sensitive signed URL parameters (`token`, `sig`, `key`) -> Pin via `sanitizeUrlForLogging` replacing with `[REDACTED]`.

---

### Task 1: Core Media Types & Universal Media Registry

**Files:**
- Create: `core/media_types.js`
- Create: `core/media_registry.js`
- Test: `tests/test_universal_media_core.js`

- [x] **Step 1: Write unit tests for MediaTypes and MediaRegistry in test harness**
  - Verify `MediaState` transitions (`DETECTED` -> `RESOLVING` -> `READY` -> `DOWNLOADING` -> `COMPLETED`/`ERROR`/`UNRESOLVED`).
  - Verify `computeResourceIdentity` deterministic canonical SHA-256 generation with preserved distinguishing parameters (`itag`, `quality`, `stream_id`).
  - Verify URL log sanitization masking tokens to `[REDACTED]`.
  - Verify 30-item FIFO cap per tab.
  - Verify debounced storage sync and hydration on boot.

- [x] **Step 2: Implement `core/media_types.js`**
  - Define `MediaState`, `UnresolvedReason`, `ProtocolType`, `TrackType`.
  - Implement `computeResourceIdentity(rawUrl, trackType)`.
  - Implement `sanitizeUrlForLogging(rawUrl)`.
  - Implement `createMediaRecord(options)`.

- [x] **Step 3: Implement `core/media_registry.js`**
  - Manage in-memory Map: `tabId -> Map<recordId, UniversalMediaRecord>`.
  - Implement CRUD: `registerMedia()`, `getTabMedia()`, `updateMediaState()`, `removeMedia()`.
  - Implement `scheduleDebouncedSync(tabId, 500)` with `chrome.storage.session`.
  - Implement `hydrateTabRegistry(tabId)` on service worker boot.
  - Implement cleanup on `clearTab(tabId)`.

- [x] **Step 4: Run Task 1 tests and verify pass**

---

### Task 2: Stream-Capped Magic Probe

**Files:**
- Create: `core/magic_probe.js`
- Test: `tests/test_universal_media_core.js`

- [x] **Step 1: Write unit tests for `magic_probe.js`**
  - Test ISO-BMFF box detection (`ftyp`, `moov`, majorBrand).
  - Test WebM EBML header detection (`0x1A 0x45 0xDF 0xA3`).
  - Test MPEG-TS sync byte detection (`0x47` at 188-byte intervals).
  - Test Audio ID3 and AAC sync byte detection.
  - Test exclusion filtering (skip ad networks, analytics, static files `.js`, `.css`, `.json`).
  - Test stream-capping: ensure mock stream is canceled after 512 bytes.

- [x] **Step 2: Implement `core/magic_probe.js`**
  - Add exclusion filter for ad networks, telemetry, and static asset extensions.
  - Implement `probeStreamCappedBytes(url, initiator, customFetcher)` with `AbortController` (3s timeout).
  - Use `response.body.getReader()`, read at most 512 bytes, execute `reader.cancel()` immediately.
  - Implement `inspectMagicBytes(bytes)` matching container formats.

- [x] **Step 3: Run Task 2 tests and verify pass**

---

### Task 3: Manifest Parser & Evidence-Based Causal Network Observer

**Files:**
- Create: `core/manifest_parse.js`
- Create: `core/network_observer.js`
- Test: `tests/test_universal_media_core.js`

- [x] **Step 1: Write unit tests for Manifest Parser and Network Observer**
  - Test HLS Master Playlist parsing (variants, resolutions, bandwidth, audio tracks).
  - Test DASH MPD parsing (Representations, video/audio tracks).
  - Test segment extraction into explicit `Set<string>`.
  - Test causal linking: segment is linked only if present in manifest Set.
  - Test static asset rejection (`image/`, `text/css`, `.png`, `.jpg`).

- [x] **Step 2: Implement `core/manifest_parse.js`**
  - Implement `parseM3u8(content, baseUrl)` extracting variants and segment Sets.
  - Implement `parseMpd(content, baseUrl)` extracting DASH representations.
  - Implement `extractManifestSegments(content, baseUrl)`.

- [x] **Step 3: Implement `core/network_observer.js`**
  - Implement header classifier for `onHeadersReceived`.
  - Manage tab manifest sessions map.
  - Implement evidence-based `findCausalManifest(tabId, segmentUrl)`.
  - Connect with `magic_probe.js` for ambiguous streams.

- [x] **Step 4: Run Task 3 tests and verify pass**

---

### Task 4: Main World Runtime Hook & Zero-Trust Security Gate

**Files:**
- Create: `core/runtime_hook.js`
- Create: `core/security_gate.js`
- Modify: `manifest.json`
- Test: `tests/test_universal_media_core.js`

- [x] **Step 1: Write unit tests for Security Gate**
  - Test prototype pollution rejection (`__proto__`, `constructor`).
  - Test payload size limit (reject payloads > 2048 bytes).
  - Test protocol whitelisting (accept `http:`, `https:`; reject `javascript:`, `data:`).
  - Test anti-DoS rate limiting (cap at 20 events per second).

- [x] **Step 2: Implement `core/runtime_hook.js`**
  - Intercept `window.fetch` for media streams.
  - Intercept `XMLHttpRequest.prototype.open` for media streams.
  - Intercept `MediaSource.prototype.addSourceBuffer` for MSE buffers.
  - Dispatch minimal `CustomEvent('UVD_RUNTIME_STREAM')` to `window`.

- [x] **Step 3: Implement `core/security_gate.js`**
  - Listen for `UVD_RUNTIME_STREAM` in Isolated World.
  - Run zero-trust validation pipeline.
  - Forward sanitized stream hint via `chrome.runtime.sendMessage`.

- [x] **Step 4: Update `manifest.json`**
  - Declare `core/runtime_hook.js` in `content_scripts` with `"world": "MAIN"`, `"run_at": "document_start"`.
  - Include `core/security_gate.js` in standard content scripts (`world: "ISOLATED"`).

- [x] **Step 5: Run Task 4 tests and verify pass**

---

### Task 5: Background & UI Integration Bridge

**Files:**
- Modify: `background.chrome.js`
- Modify: `content-script.js`
- Test: `tests/test_universal_media_core.js`

- [x] **Step 1: Connect Universal Media Core in `background.chrome.js`**
  - Load `core/media_types.js`, `core/media_registry.js`, `core/magic_probe.js`, `core/manifest_parse.js`, `core/network_observer.js`.
  - Hook into `chrome.webRequest.onHeadersReceived` for evidence-based classification and magic probing.
  - Handle `SAVIOR_RUNTIME_STREAM_HINT` messages from `security_gate.js`.
  - Synchronize detected streams to existing UI messages (`widget.updateMedia`, popup media list).
  - Wire download requests to Native Host priority with fallback to `chrome.downloads.download`.

- [x] **Step 2: Connect runtime stream hints in `content-script.js`**
  - Ensure detected media items trigger floating toolbar update.

- [x] **Step 3: Run integration tests and verify pass**

---

### Task 6: Master Test Suite & Regression Verification

**Files:**
- Test: `tests/test_universal_media_core.js`
- Regression: Run all 21 existing test suites in `tests/`

- [x] **Step 1: Execute `node tests/test_universal_media_core.js`**
  - Ensure all new unit & integration tests pass with 0 failures.

- [x] **Step 2: Execute all 21 existing test suites**
  - Run runner script across all files in `tests/`.
  - Verify 100% PASS with zero regressions across entire repository.
