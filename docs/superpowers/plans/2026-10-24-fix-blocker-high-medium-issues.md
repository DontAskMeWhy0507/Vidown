# Fix Blocker, High, and Medium Architectural & Security Issues Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (recommended for this single session) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all verified 3 Blocker (🔴), 10 High (🟠), and 8 Medium (🟡) issues across `background.chrome.js`, `native/host.js`, `core/`, `popup/`, `downloads/`, `manifest.json`, and `context-guard.js` to ensure production stability, security compliance, data integrity, and Chrome Web Store (CWS) submission readiness.

**Architecture:** 
1. Fix concurrency & queue state machine in Background Service Worker (`queued` state vs `downloading`, mutex queue for history storage, proper disconnect filtering).
2. Harden security boundary (`onMessageExternal` origin validation, manifest `externally_connectable` tightening, cross-origin cookie stripping in DASH mux, sanitized `openFile` execution, narrowed `web_accessible_resources`).
3. Guarantee data integrity in Native Host (strict block verification, content-range validation, atomic `.part` rename, fast shutdown).
4. Eliminate UI glitches (300s sync parity in popup, in-place DOM updates in downloads manager instead of destructive 400ms wipes).
5. Clean packaging (remove orphan root popup files, create CWS package builder excluding native binaries/logs/docs).

**Tech Stack:** JavaScript (ES6+), Chrome Extension Manifest V3 (Service Worker, declarativeNetRequest, storage.local), Node.js (Native Messaging Host, child_process, fs, http/https agents).

**Spec:** User issue report verified against codebase at commit HEAD.

## Global Constraints
- Manifest V3 compatibility (minimum_chrome_version: 116 for sidePanel).
- Zero data corruption on network stutter or retry exhaustion.
- No blocking disk writes or CPU starvation of foreground video players.
- Strict isolation of native downloads from browser-managed downloads.
- Clean CWS package footprint: no `.exe` or user logs in the extension zip bundle.

## Review Focus
1. Queue processing with multiple queued native jobs when the active job finishes.
2. Cross-origin media fetching without leaking authentication cookies.
3. Resilient history storage updates without dropped records under concurrent writes.
4. Clean cancellation/purging that never resurrects deleted items on late progress events.
5. In-place UI card updates that do not destroy user dropdown menus or open modal states.

---

### Task 1: Fix Native Download Queue Deadlock (🔴 Blocker 1)

**Files:**
- Modify: `background.chrome.js:1113-1123, 1260-1325`
- Test: `tests/test_native_queue_deadlock_fix.js`

**Interfaces:**
- `activeDownloads.set(fakeId, task)`: Queued tasks must have `state: 'queued'`, not `'downloading'`.
- `processNextQueuedNativeDownload()`: Checks `t.state === 'downloading'`, properly ignores `'queued'` tasks, and transitions next task to `'downloading'`.

- [ ] **Step 1: Write failing test verifying queued tasks do not block `processNextQueuedNativeDownload`**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_native_queue_deadlock_fix.js`
- [ ] **Step 3: Update `background.chrome.js`**
  - In `startNativeDownload`, when `hasNativeJob` is true and queuing: set `task.state = 'queued'`.
  - In `processNextQueuedNativeDownload`: update state of popped task to `'downloading'` before calling `startNativeDownload`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_native_queue_deadlock_fix.js`

---

### Task 2: Harden `onMessageExternal` & Validate Sender Origin (🔴 Blocker 2)

**Files:**
- Modify: `background.chrome.js:2067-2105`
- Modify: `manifest.json:26-28`
- Test: `tests/test_external_message_security.js`

**Interfaces:**
- `chrome.runtime.onMessageExternal.addListener((req, sender, sendResponse) => ...)`: Must validate `sender && sender.origin` against an explicit whitelist, reject unauthorized origins, and remove dangerous actions (`reloadExtension` from external callers).

- [ ] **Step 1: Write test verifying unauthorized external origins are rejected**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_external_message_security.js`
- [ ] **Step 3: Update `manifest.json` and `background.chrome.js`**
  - Remove `http://localhost/*` from `externally_connectable` in `manifest.json`.
  - In `background.chrome.js`: validate `sender && sender.origin` matches trusted domains, reject unauthenticated `reloadExtension` and untrusted `downloadNative` requests.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_external_message_security.js`

---

### Task 3: Packaging & CWS Release Cleanliness (🔴 Blocker 3)

**Files:**
- Delete: `popup.html` (root orphan)
- Delete: `popup.js` (root orphan)
- Create: `scripts/package_release.js`
- Test: `tests/test_package_release_cleanliness.js`

- [ ] **Step 1: Write test verifying orphan root files are absent and release script excludes binaries/logs**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_package_release_cleanliness.js`
- [ ] **Step 3: Remove root orphan files & create release packager**
  - Delete root `popup.html` and `popup.js`.
  - Create `scripts/package_release.js` that archives only valid extension files into a zip, strictly excluding `native/bin/`, `*.log`, `tests/`, `docs/`, `.git*`, `.superpowers/`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_package_release_cleanliness.js`

---

### Task 4: Fix SW Cold-Start Overwriting Active Downloads (🟠 High 1)

**Files:**
- Modify: `background.chrome.js:345-375`
- Test: `tests/test_sw_cold_start_active_downloads.js`

- [ ] **Step 1: Write test verifying active browser downloads are not unconditionally marked as error on SW restart**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_sw_cold_start_active_downloads.js`
- [ ] **Step 3: Update `background.chrome.js` cold-start logic**
  - Query `chrome.downloads.search({ state: 'in_progress' })` before marking browser downloads as interrupted, or only mark tasks that are older than threshold and not tracked by Chrome downloads API.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_sw_cold_start_active_downloads.js`

---

### Task 5: Mutex Queue for `updateDownloadHistory` & Stop Resurrecting Deleted Items (🟠 High 2)

**Files:**
- Modify: `background.chrome.js:399-435, 1845-1880`
- Test: `tests/test_download_history_mutex_and_purge.js`

- [ ] **Step 1: Write test verifying concurrent history writes are queued and purged task IDs are never recreated via late progress**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_download_history_mutex_and_purge.js`
- [ ] **Step 3: Implement Promise/Queue serialization for `updateDownloadHistory`**
  - If `purgedTaskIds.has(String(record.id))`, abort immediately.
  - If `idx < 0` and `record.state === 'progress'` or only partial update without complete metadata, do not blindly `history.unshift()`.
  - Chain `chrome.storage.local.get` and `.set` via an execution queue.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_download_history_mutex_and_purge.js`

---

### Task 6: Filter `isBrowserDownload` on Native Host Disconnect (🟠 High 3)

**Files:**
- Modify: `background.chrome.js:1065-1095`
- Test: `tests/test_native_disconnect_browser_isolation.js`

- [ ] **Step 1: Write test simulating native disconnect while a browser download is active**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_native_disconnect_browser_isolation.js`
- [ ] **Step 3: Update `onDisconnect` in `background.chrome.js`**
  - Only iterate and fail tasks where `!task.isBrowserDownload && !task.chromeId`.
  - Do NOT call `activeDownloads.clear()`; only delete native tasks.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_native_disconnect_browser_isolation.js`

---

### Task 7: Fix Incomplete Block Write Silent Data Corruption in Host (🟠 High 4)

**Files:**
- Modify: `native/host.js:670-705`
- Test: `tests/test_host_block_integrity.js`

- [ ] **Step 1: Write test verifying exhausted retry on short body triggers download error instead of fake 100% completion**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_host_block_integrity.js`
- [ ] **Step 3: Update `native/host.js`**
  - If `currentWritePos <= block.end` and `retryCount >= 4`: reject with error `Incomplete block ${block.blockIdx} after max retries`.
  - In `checkDone`: verify `fs.statSync(outPath).size === totalSize` before resolving.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_host_block_integrity.js`

---

### Task 8: Prevent Cookie Leakage in DASH/Ffmpeg Mux Path (🟠 High 5)

**Files:**
- Modify: `native/host.js:1120-1145`
- Test: `tests/test_mux_cookie_leak_prevention.js`

- [ ] **Step 1: Write test verifying cross-origin video/audio streams in `startFfmpegMux` do not inherit page cookies**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_mux_cookie_leak_prevention.js`
- [ ] **Step 3: Apply same-origin validation to cookie headers in `startFfmpegMux`**
  - Check `targetUrl` hostname against `referer` / `pageUrl` hostname before injecting `req.cookie`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_mux_cookie_leak_prevention.js`

---

### Task 9: Robust Host Error Handling & Fast Disconnect Shutdown (🟠 High 6 & 7)

**Files:**
- Modify: `native/host.js:75-95, 145-165`
- Test: `tests/test_host_lifecycle_and_errors.js`

- [ ] **Step 1: Write test verifying `unhandledRejection` handler exists and disconnect grace is reduced to 5 seconds**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_host_lifecycle_and_errors.js`
- [ ] **Step 3: Update `native/host.js`**
  - Add `process.on('unhandledRejection', (reason) => { ... })` sending error message if writable.
  - Change 30-minute disconnect timeout (1800000ms) to 5 seconds (5000ms).
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_host_lifecycle_and_errors.js`

---

### Task 10: Cap Universal Media Core Probing & Wire Cleanup (🟠 High 8 & 9)

**Files:**
- Modify: `background.chrome.js:2255-2275`
- Modify: `core/network_observer.js:475-515`
- Test: `tests/test_core_probe_capping.js`

- [ ] **Step 1: Write test verifying probe calls are rate-limited and filtered**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_core_probe_capping.js`
- [ ] **Step 3: Update `background.chrome.js` and `core/network_observer.js`**
  - Rate-limit probing to at most 1 active probe per second per tab.
  - Filter out non-media URLs before invoking `handleHeadersReceived`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_core_probe_capping.js`

---

### Task 11: Fix UI 12s False Error & 400ms Re-render Wipe (🟠 High 10)

**Files:**
- Modify: `popup/popup.js:233-262`
- Modify: `downloads/downloads.js:1285-1315`
- Test: `tests/test_ui_rerender_and_sync.js`

- [ ] **Step 1: Write test verifying popup timeout matches 300s and downloads manager avoids full DOM clearing on progress storage events**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_ui_rerender_and_sync.js`
- [ ] **Step 3: Update `popup/popup.js` and `downloads/downloads.js`**
  - In `popup/popup.js`: change `12000` to `300000`.
  - In `downloads/downloads.js`: in `storage.onChanged`, update existing card DOM nodes in-place instead of calling destructive `loadDownloads()`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_ui_rerender_and_sync.js`

---

### Task 12: Fix Browser Fallback `task.options` Dead Code (🟡 Medium 1)

**Files:**
- Modify: `background.chrome.js:1492-1503`
- Test: `tests/test_fallback_task_params.js`

- [ ] **Step 1: Write test verifying fallback triggers properly when native download errors on progressive stream**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_fallback_task_params.js`
- [ ] **Step 3: Update `background.chrome.js`**
  - Change `task.options` to `task.params || task.options`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_fallback_task_params.js`

---

### Task 13: Fix `browseFolder` Async Channel Closure (🟡 Medium 2)

**Files:**
- Modify: `background.chrome.js:1708-1727`
- Test: `tests/test_browse_folder_async_channel.js`

- [ ] **Step 1: Write test verifying `browseFolder` message handler returns true and holds channel open for async response**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_browse_folder_async_channel.js`
- [ ] **Step 3: Update `background.chrome.js`**
  - Remove synchronous `sendResponse({ success: true, pending: true })` and `return false`.
  - Return `true` so the port response can be delivered back asynchronously via `sendResponse`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_browse_folder_async_channel.js`

---

### Task 14: Fix `fakeIdCounter` Collisions on SW Restart (🟡 Medium 3)

**Files:**
- Modify: `background.chrome.js:335-345`
- Test: `tests/test_fake_id_counter_seed.js`

- [ ] **Step 1: Write test verifying `fakeIdCounter` seeds from maximum existing ID in history**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_fake_id_counter_seed.js`
- [ ] **Step 3: Update `background.chrome.js`**
  - On SW start, inspect `downloadHistory` and initialize `fakeIdCounter = Math.max(900000, maxExistingNumericId)`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_fake_id_counter_seed.js`

---

### Task 15: Fix `openFile` Result Safety & Remove Bogus `google.com` Blacklist (🟡 Medium 4 & 5)

**Files:**
- Modify: `native/host.js:355-375, 2212-2225`
- Test: `tests/test_host_openfile_and_google_urls.js`

- [ ] **Step 1: Write test verifying `openFile` returns `success: false` if file doesn't exist, sanitizes executable launching, and allows Google Drive/Photos URLs**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_host_openfile_and_google_urls.js`
- [ ] **Step 3: Update `native/host.js`**
  - Return `success: false` when falling back to directory open in `openFile`.
  - Prevent launching executable files (`.exe`, `.bat`, `.cmd`, `.ps1`) via `openFile`.
  - Remove indiscriminate `targetUrl.includes('google.com')` block.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_host_openfile_and_google_urls.js`

---

### Task 16: Fix Popup Deduplication Collision by Filename (🟡 Medium 6)

**Files:**
- Modify: `popup/popup.js:305-320`
- Test: `tests/test_popup_dedupe_fix.js`

- [ ] **Step 1: Write test verifying two downloads with different IDs but same filename `video.mp4` are not merged**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_popup_dedupe_fix.js`
- [ ] **Step 3: Update `popup/popup.js`**
  - Include unique task ID or URL hash in deduplication key: `String(it.id || it.chromeId || it.url || baseName)`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_popup_dedupe_fix.js`

---

### Task 17: Harden `manifest.json` & Sanitize `context-guard.js` CSP Interception (🟡 Medium 7 & 8)

**Files:**
- Modify: `manifest.json:36, 60-64`
- Modify: `context-guard.js:200-210`
- Test: `tests/test_manifest_and_csp_sanitization.js`

- [ ] **Step 1: Write test verifying manifest minimum Chrome version is 116, web_accessible_resources does not leak internal UI, and context-guard does not block host page CSP reporting**
- [ ] **Step 2: Run test to confirm failure**
  Run: `node tests/test_manifest_and_csp_sanitization.js`
- [ ] **Step 3: Update `manifest.json` and `context-guard.js`**
  - Change `minimum_chrome_version` to `"116"`.
  - Restrict `web_accessible_resources` to only needed images/css, removing `downloads/*` and `popup/*`.
  - In `context-guard.js`: remove `event.stopPropagation()` on `securitypolicyviolation`.
- [ ] **Step 4: Run test to confirm it passes**
  Run: `node tests/test_manifest_and_csp_sanitization.js`

---

### Task 18: Full Regression & Integration Verification

- [ ] **Step 1: Run all existing 36 test suites**
  Run: `powershell -Command "Get-ChildItem -Path tests -Filter 'test_*.js' | ForEach-Object { node $_.FullName }"`
- [ ] **Step 2: Verify zero failures across all test suites**
