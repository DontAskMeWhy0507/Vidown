# Vidown (VidManager v3.1.0) Pre-Release Remediation & Open-Source Debuggability Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve all Critical/High/Medium audit findings across security, download lifecycle, UI/UX (100% English UI, Dark Mode, anti-clipping, non-obstructive widget), runtime performance, and open-source debuggability so Vidown v3.1.0 is ready for public release and community contributions.

**Architecture:** Fix backend security and download state synchronization in `background.chrome.js`, `native/host.js`, and `src/background/**`; standardize `popup/*`, `downloads/*`, and `_locales/*` to 100% English with responsive Flexbox layout and full Dark Mode; eliminate DOM/memory leaks and extractor `TypeError`s in `src/content/**` and `src/inject/**`; and upgrade the `esbuild` pipeline (`scripts/build_*.js`, `scripts/package_release.js`) to emit multi-file indexed sourcemaps for Chrome DevTools while keeping production builds reproducible.

**Tech Stack:** Chrome Extension Manifest V3 (Vanilla JS ES2022, Shadow DOM, CSS Variables), Node.js Native Messaging Host (`native/host.js`, `yt-dlp`, `ffmpeg`), `esbuild`, Node.js built-in `assert` + `vm` + `jsdom` test runner (`scripts/test_runner.js`).

**Spec:** `C:\Users\tuant\.gemini\antigravity\brain\d72fb7f0-e2f8-478f-aa40-a6f07c48b8e3\audit_report.md`

## Global Constraints

- **100% English User Interface:** All HTML, dynamic JS strings, confirmation dialogs, date formatting (`en-US`), badges, and status messages in `popup/*`, `downloads/*`, `background.chrome.js`, `native/host.js`, and `_locales/en/messages.json` MUST be 100% English (`<html lang="en">`).
- **100% Open-Source & Easy to Debug:** `--dev` builds must map individual modules in `src/content/**` and `src/background/**` directly in Chrome DevTools (`sources` array in V3 sourcemap / `//# sourceURL=`), never contaminate release zips, and include clear contributor debugging docs in `README.md` and `CONTRIBUTING.md`.
- **Zero External Telemetry or Proprietary Leaks:** Never contact `*.coccoc.com` (`TransferComp` disabled, Microsoft CDN `@font-face` removed).
- **Build & Integrity Sync:** Any modification to `src/content/**`, `src/background/**`, `src/common/**`, or `src/inject/**` MUST be followed by `npm run build` and `node scripts/sync_module_integrity.js` before running `npm test`.
- **No Unattended GUI Popups in Tests:** Running `npm test` must never spawn real `explorer.exe` windows or write to tracked workspace files.

## Review Focus

1. **Queued native downloads (`state === 'queued'`):** Must render a visible `"Queued..."` card with title and cancel button in both `downloads/downloads.js` and `popup/popup.js`, and transition to retryable `'error'` if the MV3 Service Worker cold-starts while queued.
2. **Filename collision during FFmpeg mux / HLS stream download:** When `video.mp4` already exists and `finalizePartFile(outPath)` renames the new output to `video (1).mp4`, `native/host.js` must report `outputPath` and `size` of `video (1).mp4`, not the pre-existing `video.mp4`.
3. **Widget `⋮` (`#other-feature`) click vs `#hide-on-site`:** Clicking `#other-feature` on a web page must open the `<dropdown-box id="expansion">` menu so the user can click `"Don't show again on <site>"` (`#hide-on-site`), while clicking `#open-settings` inside that menu opens `downloads/downloads.html`.
4. **TikTok & Twitter/X extractor module calls:** `tiktok-douyin.js` must call `urlUtils.f(playUrl)` and `urlUtils.g({ url, node })` (Module 3), and `twitter_com-extractor.js` must call `dep_url_utils.f(streamUrl)` (Module 3), without throwing `TypeError`.
5. **Dev build sourcemaps & test compatibility:** `npm run build:dev` must emit valid per-file sourcemaps pointing to `src/content/<module>.js` and `src/background/<module>.js`, while `npm run package` must rebuild production bundles before zipping.

---

### Task 1: Security Boundary, Privacy & Log Sanitization Hardening

**Files:**
- Modify: `f:\Vidown\native\host.js:14-60, 119-145, 218-224, 480-544, 580-621, 1499-1536, 1841-1886, 1954-2005, 2531-2575`
- Modify: `f:\Vidown\background.chrome.js:2956-2985`
- Modify: `f:\Vidown\src\background\entry\service-worker-entry.js:1483-1495, 1916-1951, 2292-2350, 2570-2603, 2660-2691`
- Modify: `f:\Vidown\src\content\widget\widget-manager.js:1225-1231`
- Modify: `f:\Vidown\tests\test_t08_log_redaction.js:1-60`
- Test: `f:\Vidown\tests\test_security_and_privacy_hardening.js`

**Interfaces:**
- Produces:
  - `sanitizeForLog(str: string): string` exported on `module.exports` in `native/host.js` and automatically applied inside `logHost(msg: string)`.
  - `isAllowedMediaFile(filePath: string): boolean` exported on `module.exports` in `native/host.js` (allowlist: `/\.(mp4|mkv|webm|mov|avi|flv|ts|m4v|3gp|mp3|m4a|aac|wav|flac|ogg|opus|wma|srt|vtt|jpg|jpeg|png|gif|webp|bmp|svg)$/i`).
  - `sanitizeHeaderValue(val: string): string` stripping `/[\r\n\0]+/g` before building FFmpeg `-headers`.

- [ ] **Step 1: Write the failing test `tests/test_security_and_privacy_hardening.js` and update `tests/test_t08_log_redaction.js`**

```js
// tests/test_security_and_privacy_hardening.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const host = require('../native/host.js');

// 1. Exported sanitizeForLog redacts sig, lsig, ip, pot, and home paths
assert.strictEqual(typeof host.sanitizeForLog, 'function');
const rawLog = 'startDownload: {"url":"https://rr1.googlevideo.com/videoplayback?sig=SECRET1&lsig=SECRET2&ip=117.6.63.3&pot=POT_TOK","dir":"C:\\\\Users\\\\tuant\\\\Downloads"}';
const redacted = host.sanitizeForLog(rawLog);
assert.ok(!redacted.includes('SECRET1') && !redacted.includes('SECRET2'));
assert.ok(!redacted.includes('117.6.63.3') && !redacted.includes('POT_TOK'));

// 2. openFile media allowlist blocks .hta, .vbs, .lnk, .scr, .reg, .js
assert.strictEqual(typeof host.isAllowedMediaFile, 'function');
assert.strictEqual(host.isAllowedMediaFile('C:\\Downloads\\video.mp4'), true);
for (const ext of ['.hta', '.vbs', '.lnk', '.scr', '.reg', '.js', '.exe', '.bat']) {
  assert.strictEqual(host.isAllowedMediaFile('C:\\Downloads\\payload' + ext), false, `Must block ${ext}`);
}

// 3. onMessageExternal strips outputDir, cookie, headers, taskId
const bgCode = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
assert.ok(bgCode.includes('const safeExternalReq = {'), 'onMessageExternal must construct allowlisted safeExternalReq');

// 4. TransferComp (s.coccoc.com shortener) is disabled
const widgetCode = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
assert.ok(/TransferComp\.prototype\.shouldEnable\s*=\s*function\s*\(\)\s*\{\s*return\s+false;\s*\}/.test(widgetCode));

console.log('✓ Security & privacy hardening tests passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_security_and_privacy_hardening.js`
Expected: FAIL with `AssertionError [ERR_ASSERTION]: Expected values to be strictly equal: 'undefined' !== 'function'`

- [ ] **Step 3: Implement security, privacy, and log sanitization fixes**

1. In `native/host.js`:
   - Update `sanitizeForLog(str)` (`lines 129-145`) to redact `sig|signature|lsig|s|token|auth|key|hdnea|Policy|Signature|Key-Pair-Id|ip|pot` and replace `process.env.USERPROFILE` / `process.env.HOME` (both `\` and `\\` escaped forms) with `~`. Call `sanitizeForLog` inside `logHost(msg)` (`line 119`).
   - Add `isAllowedMediaFile(filePath)` checking `/\.(mp4|mkv|webm|mov|avi|flv|ts|m4v|3gp|mp3|m4a|aac|wav|flac|ogg|opus|wma|srt|vtt|jpg|jpeg|png|gif|webp|bmp|svg)$/i`, enforce it in `openFile` (`line 526`), and verify `resolvedFile` is inside `resolveTargetDir(msg.outputDir || msg.customDownloadDir)`.
   - In `openPathWithSystem` (`lines 580-621`), guard `if (process.env.VIDOWN_TEST_RUNNER === '1') return callback(null);`, and on Windows when `selectInExplorer` is false, spawn `'explorer.exe', [resolvedFile]` instead of `'cmd.exe', ['/c', 'start', '""', resolvedFile]`.
   - Use `sanitizeFilename` from `./lib/output-files` in `startFfmpegMux` (`line 1501`), `startFfmpegDirectStream` (`line 1843`), and `streamInit` (`line 2483`).
   - Strip `/[\r\n\0]+/g` from `referer` and `req.cookie` when building FFmpeg `headerStr` (`lines 1529-1534`, `1879-1884`).
   - In `startFfmpegDirectStream` (`lines 1954-2003`), validate that rewritten HLS `#EXT-X-KEY`, `#EXT-X-MAP`, and segment URLs have protocol `http:` or `https:` and are not `127.0.0.1` / `localhost` / `169.254.169.254` / `file:`.
   - Export `sanitizeForLog` and `isAllowedMediaFile` in `module.exports` (`line 2569`).
2. In `background.chrome.js:2956-2981` (`onMessageExternal`):
   - Build `const safeExternalReq = { action: req.action, url: targetUrl, videoUrl: req.videoUrl, audioUrl: req.audioUrl, title: req.title, filename: req.filename, quality: req.quality, ext: req.ext, pageUrl: sender && sender.url ? sender.url : '' };` (dropping `outputDir`, `cookie`, `headers`, `taskId`) before calling `startStreamRelayDownload(safeExternalReq)` or `startNativeDownload(safeExternalReq)`.
3. In `src/background/entry/service-worker-entry.js`:
   - At `line 1489` (`get_serp_config`), guard `var var_t = param_e_1 && param_e_1.otherControls ? param_e_1.otherControls.ab_test_data : undefined;`.
   - At `line 2303` (`SCRIPTING.INJECT`), validate `param_n.file` against `/^[a-z0-9_-]+(\/[a-z0-9_-]+)?$/i` and `!param_n.file.includes('..')`.
   - At `line 2660` (`GET_COOKIES`), verify `param_t && param_t.tab && /^https:\/\/([a-z0-9-]+\.)?youtube\.com\//i.test(param_t.tab.url || '')` before reading YouTube cookies.
4. In `src/content/widget/widget-manager.js:1227`:
   - Set `TransferComp.prototype.shouldEnable = function() { return false; };`.
5. Run `npm run build` and `node scripts/sync_module_integrity.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_security_and_privacy_hardening.js && node tests/test_t08_log_redaction.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add native/host.js background.chrome.js src/background/entry/service-worker-entry.js src/content/widget/widget-manager.js background.js content-script.js tests/test_t08_log_redaction.js tests/test_security_and_privacy_hardening.js tests/fixtures/unpacked_module_hashes.json
git commit -m "fix(security): harden native host openFile, external messaging, log redaction, and disable coccoc shortener"
```

---

### Task 2: Download Lifecycle, Cancel Crash, Collision Renaming, Recursive Timer & Template Literal Fixes

**Files:**
- Modify: `f:\Vidown\background.chrome.js:483-507, 3159-3172`
- Modify: `f:\Vidown\native\host.js:1210-1305, 1350-1478, 1589-1815, 1898-2268, 2531-2565`
- Modify: `f:\Vidown\src\background\tabs\tab-media-observer.js:54-70`
- Modify: `f:\Vidown\src\common\core-utils\dom-utils.js:1664-1667, 1832-1834`
- Modify: `f:\Vidown\src\background\messaging\dom-utils.js:1664-1667, 1832-1834`
- Modify: `f:\Vidown\src\common\utilities\url-utils.js:525-527`
- Modify: `f:\Vidown\src\background\utilities\url-utils.js:525-527`
- Modify: `f:\Vidown\tests\test_template_literal_safety.js:58-95`
- Test: `f:\Vidown\tests\test_lifecycle_and_collision_fixes.js`

**Interfaces:**
- Produces:
  - `chrome.downloads.cancel(downloadId, callback)` in `background.chrome.js` sends `{ action: 'cancel', taskId: downloadId }`, removes from `nativeDownloadQueue`, and marks history `'canceled'`.
  - `finalizePartFile(outPath)` return value captured as `publishedPath` in all 5 completion handlers in `native/host.js`, emitting `outputPath: publishedPath`, `outputFile: path.basename(publishedPath)`, and `taskId: req.taskId`.
  - `TabMediaObserver.prototype.cleanFbUrl(tabId, name)` calls `this.removeFbUrl(tabId, name)` after `15000` ms (non-recursive).

- [ ] **Step 1: Write the failing test `tests/test_lifecycle_and_collision_fixes.js`**

```js
// tests/test_lifecycle_and_collision_fixes.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// 1. chrome.downloads.cancel uses downloadId, not undefined targetId
const bgChrome = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');
const cancelBlock = bgChrome.slice(bgChrome.indexOf('chrome.downloads.cancel ='), bgChrome.indexOf('chrome.downloads.erase ='));
assert.ok(!cancelBlock.includes('targetId'), 'chrome.downloads.cancel must not reference undefined targetId');
assert.ok(cancelBlock.includes('taskId: downloadId'), 'chrome.downloads.cancel must pass taskId: downloadId');

// 2. Cold-start checkItemState recovers stuck queued items
const checkStateBlock = bgChrome.slice(bgChrome.indexOf('function checkItemState(item)'), bgChrome.indexOf('Promise.all(history.map(checkItemState))'));
assert.ok(checkStateBlock.includes("item.state !== 'queued'"), 'checkItemState must recover orphaned queued tasks on SW restart');

// 3. TabMediaObserver.cleanFbUrl calls removeFbUrl instead of recursing infinitely
const observerCode = fs.readFileSync(path.join(__dirname, '../src/background/tabs/tab-media-observer.js'), 'utf8');
const cleanFbMatch = observerCode.match(/cleanFbUrl\s*\([^)]*\)\s*\{[\s\S]*?\}/);
assert.ok(cleanFbMatch && cleanFbMatch[0].includes('this.removeFbUrl(') && !cleanFbMatch[0].includes('this.cleanFbUrl('));

// 4. Multi-line template literals in getYTCookieAuth, getDateNumber, and url-utils are single-line
for (const rel of [
  '../src/common/core-utils/dom-utils.js',
  '../src/background/messaging/dom-utils.js',
  '../src/common/utilities/url-utils.js',
  '../src/background/utilities/url-utils.js'
]) {
  const code = fs.readFileSync(path.join(__dirname, rel), 'utf8');
  assert.ok(!/`\$\{param_e_1\}\s*\n/.test(code), `${rel} must not have newline in SAPISIDHASH template`);
  assert.ok(!/parseInt\(`\$\{var_t\}\s*\n/.test(code), `${rel} must not have newline in getDateNumber parseInt`);
  assert.ok(!/filename:\s*`\$\{var_a_1\}\s*\n/.test(code), `${rel} must not have newline in filename template`);
}

// 5. native/host.js captures publishedPath = finalizePartFile(outPath) everywhere
const hostCode = fs.readFileSync(path.join(__dirname, '../native/host.js'), 'utf8');
const bareFinalizeCalls = hostCode.match(/^\s*finalizePartFile\(outPath\);/gm) || [];
assert.strictEqual(bareFinalizeCalls.length, 0, 'All finalizePartFile(outPath) calls must capture the returned publishedPath');

console.log('✓ Lifecycle and collision fixes verified!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_lifecycle_and_collision_fixes.js`
Expected: FAIL on `targetId` in `chrome.downloads.cancel`

- [ ] **Step 3: Implement lifecycle, collision, timer, and template literal fixes**

1. In `background.chrome.js`:
   - At `line 485` (`checkItemState`), update the guard to `if (!item || (item.state !== 'downloading' && item.state !== 'in_progress' && item.state !== 'queued')) return Promise.resolve(item);`.
   - At `lines 3159-3172` (`chrome.downloads.cancel`), change `taskId: targetId` to `taskId: downloadId`, remove any matching entry from `nativeDownloadQueue`, and call `updateDownloadHistory({ id: downloadId, state: 'canceled', speed: 'Canceled' })`.
2. In `native/host.js`:
   - In `startFfmpegMux` (`lines 1735-1748`) and `startFfmpegDirectStream` (`lines 2218-2231`), capture `const publishedPath = finalizePartFile(outPath); const publishedName = path.basename(publishedPath);`, stat `publishedPath`, and send `outputFile: publishedName, outputPath: publishedPath`. In `startMultiThreadDownload` (`line 1274`) and `fallbackToDirectFfmpegMux` (`line 1455`), set `outputFile: path.basename(publishedPath)`.
   - Include `taskId: req.taskId` in all `sendMessage({ action: 'progress' | 'complete' | 'error', taskId: req.taskId, ... })` calls across `startMultiThreadDownload`, `startDownload`, `startFfmpegMux`, and `startFfmpegDirectStream`.
   - At the start of `startFfmpegDirectStream` (`line 1809`), also cancel `activeMultiThreadJob` if active (`if (activeMultiThreadJob && typeof activeMultiThreadJob.cancel === 'function') { activeMultiThreadJob.cancel(); activeMultiThreadJob = null; }`).
3. In `src/background/tabs/tab-media-observer.js:65-70`:
   - Change `this.cleanFbUrl(param_e, param_t);` inside `setTimeout` to `this.removeFbUrl(param_e, param_t);`.
4. In `src/common/core-utils/dom-utils.js` and `src/background/messaging/dom-utils.js`:
   - Collapse `lines 1664-1667` to `return parseInt(`${var_t}${ve(var_n)}${ve(var_r)}`);`.
   - Collapse `lines 1832-1834` to `return param_o.a(2, `${param_e_1} ${var_c_1.join("_")}`);`.
5. In `src/common/utilities/url-utils.js` and `src/background/utilities/url-utils.js`:
   - Collapse `lines 525-527` to `filename: `${var_a_1}.${var_s_1}`,`.
6. Run `npm run build` and `node scripts/sync_module_integrity.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_lifecycle_and_collision_fixes.js && node tests/test_template_literal_safety.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add background.chrome.js native/host.js src/background/tabs/tab-media-observer.js src/common/core-utils/dom-utils.js src/background/messaging/dom-utils.js src/common/utilities/url-utils.js src/background/utilities/url-utils.js background.js common.js tests/test_lifecycle_and_collision_fixes.js
git commit -m "fix(core): fix cancel ReferenceError, file collision path reporting, cleanFbUrl recursion, and multiline templates"
```

---

### Task 3: 100% English UI Standardization, Queued State Rendering, Locale Sync & XSS Escaping

**Files:**
- Modify: `f:\Vidown\popup\popup.html:1-75`
- Modify: `f:\Vidown\popup\popup.js:1-715`
- Modify: `f:\Vidown\downloads\downloads.html:1-189`
- Modify: `f:\Vidown\downloads\downloads.js:1-1620`
- Modify: `f:\Vidown\background.chrome.js:495, 1672, 1693, 1785, 2299, 2515`
- Modify: `f:\Vidown\native\host.js:1210, 1222, 1350, 1589, 1689, 1898, 2517-2526`
- Modify: `f:\Vidown\_locales\en\messages.json`
- Modify: `f:\Vidown\_locales\vi\messages.json`
- Modify: `f:\Vidown\_locales\id\messages.json`
- Modify: `f:\Vidown\tests\test_audit_brand_and_logic_fixes.js`
- Modify: `f:\Vidown\tests\test_cancel_sync_and_single_x_button.js`
- Modify: `f:\Vidown\tests\test_clean_user_flow_and_dead_features.js`
- Modify: `f:\Vidown\tests\test_image_and_video_toggle_settings.js`
- Modify: `f:\Vidown\tests\test_native_queue_deadlock_fix.js`
- Modify: `f:\Vidown\tests\test_qa_all_user_operations_audit.js`
- Modify: `f:\Vidown\tests\test_user_flows_and_edge_cases_audit.js`
- Modify: `f:\Vidown\tests\test_tiktok_and_browser_downloads.js`
- Modify: `f:\Vidown\tests\test_ui_sync_and_dedupe_fix.js`
- Test: `f:\Vidown\tests\test_english_ui_and_queued_state.js`

**Interfaces:**
- Produces:
  - 100% English copy in `popup/popup.html`, `popup/popup.js`, `downloads/downloads.html`, `downloads/downloads.js`, `background.chrome.js`, and `native/host.js`:
    - Cancel button title: `isDownloading ? 'Cancel download' : 'Remove from list'`
    - Cancel confirmation prompt: `confirm('Are you sure you want to cancel this download?')`
    - Date group headings (`getDateGroupHeading`): `'Recent'` (for invalid/missing timestamps), `'Today'`, `'Yesterday'`, or `date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })`
    - Queued status speed/badge: `'Queued...'`
    - Cold-start interrupted error message: `'Interrupted when browser closed'`
    - Browser download initial speed: `'Downloading (Browser)...'`
    - Footer manager button in `popup.html`: `'Open Download Manager'`
    - Image floating button setting label in `downloads.html`: `'Show floating download button on images'`
    - Video floating button description in `downloads.html`: `'Automatically attach VidManager download button on video players (YouTube, Facebook, TikTok...)'`
  - Complete 177-key parity across `_locales/en/messages.json`, `_locales/vi/messages.json`, and `_locales/id/messages.json` (including both `widget_download_tooltip_image_and_vid` and `widget_download_tooltip_image_and_video`).

- [ ] **Step 1: Write the failing test `tests/test_english_ui_and_queued_state.js`**

```js
// tests/test_english_ui_and_queued_state.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const viCharRegex = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđĐ]/;

// 1. Verify zero Vietnamese characters remain in UI HTML/JS and background/host status strings
for (const rel of [
  '../popup/popup.html',
  '../popup/popup.js',
  '../downloads/downloads.html',
  '../downloads/downloads.js'
]) {
  const content = fs.readFileSync(path.join(__dirname, rel), 'utf8');
  const match = content.match(viCharRegex);
  assert.strictEqual(match, null, `${rel} must be 100% English (found "${match ? match[0] : ''}")`);
}

// 2. Verify queued state is handled in both downloads.js and popup.js
const dlJs = fs.readFileSync(path.join(__dirname, '../downloads/downloads.js'), 'utf8');
const popupJs = fs.readFileSync(path.join(__dirname, '../popup/popup.js'), 'utf8');
assert.ok(dlJs.includes("item.state === 'queued'"), 'downloads.js must handle queued state');
assert.ok(popupJs.includes("item.state === 'queued'"), 'popup.js must handle queued state');
assert.ok(popupJs.includes('CSS.escape(String(msg.taskId))'), 'popup.js must escape taskId in querySelector');

// 3. Verify locale parity and widget_download_tooltip_image_and_video key
const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/en/messages.json'), 'utf8'));
const id = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/id/messages.json'), 'utf8'));
assert.ok(en.widget_download_tooltip_image_and_video, 'en messages.json must define widget_download_tooltip_image_and_video');
assert.ok(id.widget_download_tooltip_image_and_video, 'id messages.json must define widget_download_tooltip_image_and_video');
for (const key of Object.keys(en)) {
  assert.ok(id[key], `id messages.json is missing key: ${key}`);
}

console.log('✓ 100% English UI, queued state, and locale parity verified!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_english_ui_and_queued_state.js`
Expected: FAIL because `popup/popup.html` contains Vietnamese characters

- [ ] **Step 3: Translate all UI/status copy to 100% English, fix `queued` state & XSS escaping, and sync locales + tests**

1. Convert `popup/popup.html`, `popup/popup.js`, `downloads/downloads.html`, `downloads/downloads.js`, `background.chrome.js`, and `native/host.js` status messages to 100% English (`<html lang="en">`, `en-US` date formatting, English labels/toasts/errors/dialogs).
2. In `downloads/downloads.js:597` and `popup/popup.js:498`:
   - Set `const isQueued = item.state === 'queued'; const isDownloading = item.state === 'downloading' || item.state === 'in_progress' || isQueued;`.
   - When `isQueued`, display `'Queued...'` in the status badge/stats instead of falling through to blank or `'Completed'`.
3. In `popup/popup.js`:
   - Escape `item.percent`, `item.speed`, and `sizeStr` with `escapeHtml(...)` before interpolating into `card.innerHTML` (`lines 510-555`), use `CSS.escape(String(msg.taskId))` at `line 687`, and classify `['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg']` as `'image'` in `detectMediaType` (`line 383`).
4. In `_locales/en/messages.json`, `_locales/vi/messages.json`, and `_locales/id/messages.json`:
   - Add `"widget_download_tooltip_image_and_video"` alongside `"widget_download_tooltip_image_and_vid"`.
   - Translate any Vietnamese leftovers in `_locales/en/messages.json` to English, translate `pip_failed_to_find` / `pip_please_wait` in `_locales/vi/messages.json`, and populate all missing keys in `_locales/id/messages.json`.
5. Update string assertions in `tests/test_audit_brand_and_logic_fixes.js`, `tests/test_cancel_sync_and_single_x_button.js`, `tests/test_clean_user_flow_and_dead_features.js`, `tests/test_image_and_video_toggle_settings.js`, `tests/test_native_queue_deadlock_fix.js`, `tests/test_qa_all_user_operations_audit.js`, `tests/test_user_flows_and_edge_cases_audit.js`, `tests/test_tiktok_and_browser_downloads.js`, and `tests/test_ui_sync_and_dedupe_fix.js` to match the English strings.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_english_ui_and_queued_state.js && npm test`
Expected: PASS (all suites pass)

- [ ] **Step 5: Commit**

```bash
git add popup/ downloads/ background.chrome.js native/host.js _locales/ tests/
git commit -m "feat(ui): standardize UI to 100% English, fix queued card state, and sync locales"
```

---

### Task 4: Dark Mode, Layout Clipping & Typography Polish

**Files:**
- Modify: `f:\Vidown\downloads\downloads.css:24-103, 150-198, 269-274, 325-357, 442-447, 480-505, 639-665, 720-759, 825-847`
- Modify: `f:\Vidown\downloads\downloads.js:667-679`
- Modify: `f:\Vidown\popup\popup.css:1-40, 350-370`
- Modify: `f:\Vidown\css\content-script.css:6-30, 631-675, 723-754, 1232-1324, 1907-1909, 1955-1960`
- Modify: `f:\Vidown\src\background\storage\settings-manager.js:10`
- Modify: `f:\Vidown\src\background\utilities\user-preference-sync.js:10`
- Test: `f:\Vidown\tests\test_dark_mode_and_layout_polish.js`

**Interfaces:**
- Produces:
  - CSS variable-driven Dark Mode in both `downloads/downloads.css` and `popup/popup.css` with zero hardcoded `#f9fafb` / `#0f172a` overrides on dark surfaces.
  - Non-clipping `.download-box` (`width: 268px`), `.info-resolution, .info-size` (`min-width: 54px; max-width: 68px;`), single `title="{{i18n_quality}}"` attribute in `template-media`, and no external `c.s-microsoft.com` `@font-face` requests.

- [ ] **Step 1: Write the failing test `tests/test_dark_mode_and_layout_polish.js`**

```js
// tests/test_dark_mode_and_layout_polish.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const dlCss = fs.readFileSync(path.join(__dirname, '../downloads/downloads.css'), 'utf8');
const popupCss = fs.readFileSync(path.join(__dirname, '../popup/popup.css'), 'utf8');
const contentCss = fs.readFileSync(path.join(__dirname, '../css/content-script.css'), 'utf8');
const settingsMgr = fs.readFileSync(path.join(__dirname, '../src/background/storage/settings-manager.js'), 'utf8');

// 1. downloads.css uses CSS variables for workspace and titles, and targets real dark mode classes
assert.ok(!/\.workspace\s*\{[^}]*#f9fafb/.test(dlCss), '.workspace must use var(--bg-color), not hardcoded #f9fafb');
assert.ok(!/\.item-title-downloading\s*\{[^}]*#0f172a/.test(dlCss), '.item-title-downloading must use var(--text-primary)');
assert.ok(dlCss.includes('.top-nav'), 'downloads.css dark mode must style .top-nav');

// 2. popup.css supports prefers-color-scheme: dark and wraps .card-meta
assert.ok(popupCss.includes('@media (prefers-color-scheme: dark)'), 'popup.css must support dark mode');
assert.ok(/\.card-meta\s*\{[^}]*flex-wrap:\s*wrap/.test(popupCss), '.card-meta must wrap to prevent overflow');

// 3. content-script.css removes Microsoft CDN @font-face and widens .download-box
assert.ok(!contentCss.includes('c.s-microsoft.com'), 'content-script.css must not load fonts from c.s-microsoft.com');
assert.ok(!settingsMgr.includes('title="{{quality}}" title="{{i18n_quality}}"'), 'template-media must not have duplicate title attribute');

console.log('✓ Dark mode and layout polish verified!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_dark_mode_and_layout_polish.js`
Expected: FAIL on `.workspace` `#f9fafb` in `downloads.css`

- [ ] **Step 3: Implement Dark Mode, layout clipping, and typography fixes**

1. In `downloads/downloads.css`:
   - In `@media (prefers-color-scheme: dark)` (`lines 50-103`), replace `.downloads-header`, `.search-wrapper`, and `.date-group-header` with `.top-nav`, `.search-box-wrap input`, `.date-group-heading`, `.card-menu-dropdown`, `.card-menu-item`, and `#setting-site-input`.
   - Replace hardcoded colors on `.workspace` (`var(--bg-color)`), `.brand-title` (`var(--text-primary)`), `.search-box-wrap input` (`var(--bg-secondary)`, `var(--text-primary)`), `.item-title-downloading` (`var(--text-primary)`), `.item-status-tag` (`var(--text-primary)`), `.empty-state h3` (`var(--text-primary)`), and `.date-group-heading` (`var(--text-primary)`).
   - Set `.card-top-row` (`line 442`) to `flex-wrap: nowrap;`, `.item-title-downloading, .item-title-muted` (`line 499`) to `flex: 1; min-width: 0;`, `.item-downloading-stats` (`line 502`) to `flex-shrink: 0;`, `.error-badge-text` (`line 753`) to `min-width: 0;`, and `.folder-setting-info` (`line 825`) to `flex: 1; min-width: 0;`.
   - In `downloads/downloads.js:669`, set `titleTxt.title = item.title || '';`.
2. In `popup/popup.css`:
   - Add `@media (prefers-color-scheme: dark)` variables and dark surface overrides matching `downloads.css`.
   - Add `flex-wrap: wrap; row-gap: 4px; min-width: 0;` to `.card-meta` (`line 352`) and `white-space: nowrap; max-width: 100%; overflow: hidden; text-overflow: ellipsis;` to `.status-badge` (`line 361`).
3. In `css/content-script.css`:
   - Remove the `@font-face` blocks pointing to `//c.s-microsoft.com/static/fonts/segoe-ui/...` (`lines 6-30`).
   - Change `.download-box` (`line 1907`) from `width: 238px` to `width: 268px`, `.media-name` (`line 1236`) to `min-width: 116px; max-width: 124px;`, and `.info-resolution, .info-size` (`line 1277`) to `min-width: 54px; max-width: 68px; text-align: right;`.
   - Change fixed `height` on `.tour-container` (`line 633`), `.tour-restore-tip` (`line 725`), and `dropdown-box#onboard-nmp` (`line 1957`) to `min-height` with `height: auto;`.
4. In `src/background/storage/settings-manager.js:10` and `src/background/utilities/user-preference-sync.js:10`:
   - Remove `title="{{quality}}"` so only `title="{{i18n_quality}}"` remains on `#media_{{id}}`.
5. Run `npm run build` and `node scripts/sync_module_integrity.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_dark_mode_and_layout_polish.js && npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add downloads/downloads.css downloads/downloads.js popup/popup.css css/content-script.css src/background/storage/settings-manager.js src/background/utilities/user-preference-sync.js background.js tests/test_dark_mode_and_layout_polish.js
git commit -m "fix(ux): fix dark mode on downloads and popup, prevent text clipping, and remove external font CDN"
```

---

### Task 5: On-Page Widget Obstruction, Navigation Hijack & Scroll/PiP Behavior

**Files:**
- Modify: `f:\Vidown\downloads-nav.js:1-267`
- Modify: `f:\Vidown\src\content\widget\dom-constants.js:62-75`
- Modify: `f:\Vidown\src\content\widget\widget-manager.js:762-805, 932-960, 1716-1725, 1997-2023`
- Modify: `f:\Vidown\src\content\widget\download-list.js:352, 620-630`
- Test: `f:\Vidown\tests\test_widget_obstruction_and_nav_fixes.js`

**Interfaces:**
- Produces:
  - `downloads-nav.js` intercepts clicks on `#open-settings` and `#btn-open-downloads-manager` (NOT `#other-feature`), leaving `<dropdown-box id="expansion">` and `#hide-on-site` functional, and contains zero duplicate stream-sniffer code.
  - `PLATFORM_POSITION_RULES` in `src/content/widget/dom-constants.js` includes safe offsets for `youtube.com/shorts`, `tiktok.com`, `douyin.com`, and `instagram.com`.
  - `WidgetContainer` resets `isVertical = false` before evaluating width, hides on `document.pictureInPictureElement === msg`, sets `this.parent.$node.dataset.saviorDismissed = "true"` when `#hide-widget` is clicked, and updates position on passive window scroll.

- [ ] **Step 1: Write the failing test `tests/test_widget_obstruction_and_nav_fixes.js`**

```js
// tests/test_widget_obstruction_and_nav_fixes.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const navCode = fs.readFileSync(path.join(__dirname, '../downloads-nav.js'), 'utf8');
const domConstants = fs.readFileSync(path.join(__dirname, '../src/content/widget/dom-constants.js'), 'utf8');
const widgetMgr = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
const dlList = fs.readFileSync(path.join(__dirname, '../src/content/widget/download-list.js'), 'utf8');

// 1. downloads-nav.js does not hijack #other-feature on web pages and has no duplicate stream-sniffer
assert.ok(!navCode.includes("node.id === 'other-feature'"), 'downloads-nav.js must not hijack #other-feature and block #expansion menu');
assert.ok(navCode.includes("node.id === 'open-settings'"), 'downloads-nav.js must intercept #open-settings to open Downloads Manager');
assert.ok(!navCode.includes('__saviorStreamSnifferActive'), 'downloads-nav.js must not duplicate stream-sniffer.js');

// 2. Platform position rules cover shorts, tiktok, instagram, douyin
assert.ok(domConstants.includes('youtube.com\\/shorts') && domConstants.includes('tiktok.com'), 'PLATFORM_POSITION_RULES must include Shorts and TikTok offsets');

// 3. Widget checks pictureInPictureElement, resets isVertical, and marks dataset.saviorDismissed
assert.ok(widgetMgr.includes('document.pictureInPictureElement'), 'shouldHideWidget must hide when video is in Picture-in-Picture');
assert.ok(widgetMgr.includes('dataset.saviorDismissed'), '#hide-widget must mark video node as dismissed');

// 4. download-list.js fixes defaultRes.ext typo
assert.ok(!dlList.includes('defaultRes.ext'), 'download-list.js must check downloadItem.ext instead of number defaultRes.ext');

console.log('✓ Widget obstruction and navigation fixes verified!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_widget_obstruction_and_nav_fixes.js`
Expected: FAIL because `downloads-nav.js` contains `node.id === 'other-feature'`

- [ ] **Step 3: Implement widget positioning, navigation, Toast safety, and download-list fixes**

1. In `downloads-nav.js`:
   - Change the shadow-DOM click check (`lines 58-97`) to match `node.id === 'open-settings'` (and `#btn-open-downloads-manager` on extension pages) instead of `#other-feature`, so clicking `⋮` (`#other-feature`) opens the `#expansion` dropdown where both `#hide-on-site` and `#open-settings` live.
   - Delete the duplicate stream-sniffer block (`lines 99-266`) and unused `injectDownloadsButton` CSS injection.
2. In `src/content/widget/dom-constants.js:62-75`:
   - Add rules to `PLATFORM_POSITION_RULES` for `^https?:\/\/(www\.)?youtube\.com\/shorts\/` (`{ x: 16, y: 56 }`), `^https?:\/\/(www\.)?tiktok\.com\/` (`{ x: 16, y: 56 }`), `^https?:\/\/(www\.)?douyin\.com\/` (`{ x: 16, y: 56 }`), and `^https?:\/\/(www\.)?instagram\.com\/(reels?|stories)\/` (`{ x: 16, y: 56 }`).
3. In `src/content/widget/widget-manager.js`:
   - In `hideWidgetClicked` (`lines 774-783`), set `if (this.parent && this.parent.$node) this.parent.$node.dataset.saviorDismissed = "true";`.
   - In `shouldHideWidget` (`lines 1997-2023`), check `if (msg.dataset && msg.dataset.saviorDismissed === "true") return true;`, check `if (document.pictureInPictureElement === msg) return true;`, and reset `this.getComponent("behavior").isVertical = false;` before the `y < domConstants.b` check at `line 2005`.
   - In `WidgetContainer.prototype.bind` (`lines 762-772`) and `destroy` (`line 801`), register a passive capture `scroll` listener (throttled via `requestAnimationFrame`) that calls `this.updatePosition()` when the widget is visible, and remove it in `destroy()`.
   - In `ToastNotification` (`line 1721`), escape untrusted text before setting `innerHTML` or use DOM creation for `<toast-message>`.
4. In `src/content/widget/download-list.js`:
   - At `line 352`, replace `"m3u8" !== defaultRes.ext` with `"m3u8" !== downloadItem.ext`.
   - At `lines 625-628`, move the `for (var scopeI = 0; scopeI < this.state.downloadScopes.length; ++scopeI)` loop outside the `.forEach` callback so `_sizeQueue` only enqueues $O(N)$ items instead of $O(N^2)$.
5. Run `npm run build` and `node scripts/sync_module_integrity.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_widget_obstruction_and_nav_fixes.js && npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add downloads-nav.js src/content/widget/dom-constants.js src/content/widget/widget-manager.js src/content/widget/download-list.js content-script.js tests/test_widget_obstruction_and_nav_fixes.js tests/fixtures/unpacked_module_hashes.json
git commit -m "fix(widget): restore #hide-on-site menu, add Shorts/TikTok/Reels offsets, and fix PiP/scroll/download-list bugs"
```

---

### Task 6: Extractor Runtime Regressions, Smoothness & Memory Leak Fixes

**Files:**
- Modify: `f:\Vidown\src\content\platform\tiktok-douyin.js:217, 1195, 1226, 1330, 1474, 1507`
- Modify: `f:\Vidown\src\content\platform\twitter_com-extractor.js:1-15, 298`
- Modify: `f:\Vidown\src\inject\instagram\main-world.js:150-255`
- Modify: `f:\Vidown\src\content\core\dom-utils.js:295-385, 470-490`
- Modify: `f:\Vidown\src\content\widget\download-list.js:90-155`
- Modify: `f:\Vidown\src\content\widget\widget-manager.js:655, 769, 801, 850-908, 1499-1503, 2135, 2155`
- Modify: `f:\Vidown\src\content\widget\settings-manager.js:68`
- Modify: `f:\Vidown\src\content\detector\content-entry.js:57-64, 110-118, 274-277`
- Modify: `f:\Vidown\stream-sniffer.js:183-187`
- Modify: `f:\Vidown\context-guard.js:30-45, 207-220`
- Modify: `f:\Vidown\src\inject\stream_free\index.js:1-16`
- Modify: `f:\Vidown\src\inject\animevietsub\index.js:1-15`
- Test: `f:\Vidown\tests\test_extractor_and_memory_leak_fixes.js`

**Interfaces:**
- Produces:
  - Zero `domHelper.f(playUrl)` / `domHelper.g({ url, node })` calls in `tiktok-douyin.js` (replaced with `urlUtils.f` / `urlUtils.g`), and `Object(dep_url_utils.f)(streamUrl)` in `twitter_com-extractor.js`.
  - Self-removing `EE.off(...)` listeners in `src/content/core/dom-utils.js` and `SaviorDownloadList.prototype.destroy()`.
  - `ResizeObserver.disconnect()` in `WidgetContainer.prototype.destroy()` and `this.widgetDownloadsMap.delete(...)` on widget destruction.
  - Singleton guard `window.__saviorIgMainWorldActive` and debounced mutation handling in `src/inject/instagram/main-world.js`.

- [ ] **Step 1: Write the failing test `tests/test_extractor_and_memory_leak_fixes.js`**

```js
// tests/test_extractor_and_memory_leak_fixes.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const tiktok = fs.readFileSync(path.join(__dirname, '../src/content/platform/tiktok-douyin.js'), 'utf8');
const twitter = fs.readFileSync(path.join(__dirname, '../src/content/platform/twitter_com-extractor.js'), 'utf8');
const igMain = fs.readFileSync(path.join(__dirname, '../src/inject/instagram/main-world.js'), 'utf8');
const domUtils = fs.readFileSync(path.join(__dirname, '../src/content/core/dom-utils.js'), 'utf8');
const widgetMgr = fs.readFileSync(path.join(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
const contextGuard = fs.readFileSync(path.join(__dirname, '../context-guard.js'), 'utf8');

// 1. TikTok and Twitter extractors call urlUtils.f/g (Module 3), not domHelper.f/g or dep_dom_utils.f
assert.ok(!tiktok.includes('domHelper.f(') && !tiktok.includes('domHelper.g('), 'tiktok-douyin.js must use urlUtils.f and urlUtils.g');
assert.ok(!twitter.includes('dep_dom_utils.f('), 'twitter_com-extractor.js must use dep_url_utils.f');

// 2. Instagram main-world script has singleton guard and does not observe class attribute or timeupdate
assert.ok(igMain.includes('__saviorIgMainWorldActive'), 'instagram/main-world.js must have a singleton guard');
assert.ok(!igMain.includes("'timeupdate'"), 'instagram/main-world.js must not re-extract on every timeupdate tick');

// 3. dom-utils.js cleans up EE listeners via EE.off
const eeOffCount = (domUtils.match(/EE\.off\(/g) || []).length;
assert.ok(eeOffCount >= 6, `dom-utils.js must call EE.off for IPC request listeners (found ${eeOffCount})`);

// 4. WidgetContainer disconnects resizeObserver and deletes from widgetDownloadsMap
assert.ok(widgetMgr.includes('this.resizeObserver.disconnect()'), 'WidgetContainer.destroy must disconnect resizeObserver');
assert.ok(widgetMgr.includes('this.widgetDownloadsMap.delete('), 'SaviorWidgetController must delete destroyed widgets from widgetDownloadsMap');

// 5. context-guard.js invokes callback on synchronous sendMessage catch
assert.ok(contextGuard.includes("typeof args[args.length - 1] === 'function'"), 'context-guard.js must invoke callback when sendMessage throws synchronously');

console.log('✓ Extractor regressions, smoothness, and memory leak fixes verified!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_extractor_and_memory_leak_fixes.js`
Expected: FAIL on `domHelper.f(` in `tiktok-douyin.js`

- [ ] **Step 3: Implement extractor fixes, memory leak cleanups, and runtime optimizations**

1. In `src/content/platform/tiktok-douyin.js`:
   - Replace `domHelper.f(...)` at lines `217, 1195, 1226, 1474, 1507` with `urlUtils.f(...)`.
   - Replace `domHelper.g(...)` at line `1330` with `urlUtils.g(...)`.
2. In `src/content/platform/twitter_com-extractor.js`:
   - Import `var dep_url_utils = requireFn(3);` at line 6 and replace `Object(dep_dom_utils.f)(streamUrl)` at line `298` with `Object(dep_url_utils.f)(streamUrl)`.
3. In `src/inject/instagram/main-world.js`:
   - Add singleton guard at top of IIFE: `if (window.__saviorIgMainWorldActive) { if (typeof window.__saviorIgReExtract === 'function') window.__saviorIgReExtract(); return; } window.__saviorIgMainWorldActive = true;`.
   - Remove `'class'` from `attributeFilter` (keep `['src']`), remove `'timeupdate'` from media event listeners, and debounce `reExtractAll` with a 150 ms timer.
4. In `src/content/core/dom-utils.js`:
   - In `getYoutubeInfo` (`line 298`), `getYoutubeDashMPDInfo` (`line 312`), `send` (`line 329`), `getSize` (`line 378`), `sendMessageDirect` (`line 476`), and `sendMessage` (`line 484`), store the listener function reference and call `EE.off(eventName, listenerFn)` inside the `if (res.requestId === requestId)` block (and inside the `setTimeout` fallback in `getSize`).
5. In `src/content/widget/download-list.js:90-152` and `src/content/widget/widget-manager.js:1499-1503`:
   - Save bound listener references in `SaviorDownloadList.prototype._eventListener` and remove them via `EE.off` in `SaviorDownloadList.prototype.destroy`, called from `QualityMenuDropdown.prototype.destroy`.
6. In `src/content/widget/widget-manager.js`:
   - Remove `console.log("WidgetId", this.parent.id)` at `line 655`.
   - In `WidgetContainer.prototype.destroy` (`line 801`), add `if (this.resizeObserver) { this.resizeObserver.disconnect(); this.resizeObserver = null; }`.
   - In `showWidget` (`line 884`), early-return if `!this.$el.hasAttribute("hidden") && this.$el.classList.contains("show")` before creating a Promise/sleep, and throttle `onMouseMove` (`line 852`) to 100 ms.
   - In `SaviorWidgetController` (`lines 2135, 2155`), call `this.widgetDownloadsMap.delete(targetWidget);` when destroying removed widgets.
7. In `src/content/widget/settings-manager.js:68`:
   - Pass `Object.keys(this._defaultSettings)` instead of `null` to `chrome.storage.local.get(...)` so `downloadHistory` is not copied into every frame.
8. In `src/content/detector/content-entry.js`:
   - Clear the 5000 ms fallback timer in `"get_inner_data"` (`lines 57-64`), wrap `"message.received"` (`lines 110-118`) in `try/catch`, and use `window.addEventListener("load", ..., { once: true })` (`line 274`).
9. In `stream-sniffer.js:183-187`:
   - Restrict `mouseover` check to `e.target && (e.target.tagName === 'VIDEO' || e.target.tagName === 'AUDIO')` with a 2000 ms throttle on `scanDomMedia()`.
10. In `context-guard.js:35-42`:
    - When `_origSend` throws synchronously, check `const lastArg = args[args.length - 1]; if (typeof lastArg === 'function') { try { lastArg(undefined); } catch (_) {} }` before returning `Promise.resolve()`.
11. In `src/inject/stream_free/index.js` and `src/inject/animevietsub/index.js`:
    - Add a max retry counter (`let retries = 0; ... if (++retries > 20) clearInterval(t);`).
12. Run `npm run build` and `node scripts/sync_module_integrity.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_extractor_and_memory_leak_fixes.js && npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/content/ src/inject/ inject/ stream-sniffer.js context-guard.js content-script.js tests/test_extractor_and_memory_leak_fixes.js tests/fixtures/unpacked_module_hashes.json
git commit -m "fix(perf): resolve TikTok/Twitter extractor TypeErrors, Instagram observer storm, and EE/ResizeObserver memory leaks"
```

---

### Task 7: Developer Debuggability (Per-Module Sourcemaps), Native Host Installers & Open-Source Release Hygiene

**Files:**
- Modify: `f:\Vidown\scripts\build_content_script.js`
- Modify: `f:\Vidown\scripts\build_background.js`
- Modify: `f:\Vidown\scripts\build_common.js`
- Modify: `f:\Vidown\scripts\package_release.js`
- Modify: `f:\Vidown\scripts\sync_module_integrity.js`
- Modify: `f:\Vidown\tests\test_module_census.js`
- Modify: `f:\Vidown\native\install.bat`
- Modify: `f:\Vidown\native\uninstall.bat`
- Modify: `f:\Vidown\native\install.sh`
- Modify: `f:\Vidown\native\uninstall.sh`
- Modify: `f:\Vidown\.github\workflows\ci.yml`
- Modify: `f:\Vidown\.gitignore`
- Modify: `f:\Vidown\package.json`
- Modify: `f:\Vidown\README.md`
- Modify: `f:\Vidown\CONTRIBUTING.md`
- Create: `f:\Vidown\tests\fixtures\module_census.json` (moved from `docs/superpowers/census/2026-11-01-module-census.json`)
- Test: `f:\Vidown\tests\test_debuggability_and_release_hygiene.js`

**Interfaces:**
- Produces:
  - In `--dev` mode, `scripts/build_content_script.js` and `scripts/build_background.js` emit a single valid inline V3 Indexed Source Map (`version: 3, sections: [...]`) mapping every module slot directly to `src/content/<relPath>` and `src/background/<relPath>` in Chrome DevTools.
  - `scripts/package_release.js` automatically rebuilds production bundles if `--dev` sourcemaps are present, excludes dead `common.js` / `README.md` / `CONTRIBUTING.md` / `types/` from the release zip, and sorts zip entries with a deterministic timestamp.
  - `native/install.bat` auto-compiles `host.cs` via `csc.exe` when `host.exe` is absent and writes the absolute-path manifest to `%LOCALAPPDATA%\SaviorHelper\com.savior.helper.json` without modifying tracked `native/com.savior.helper.json`.
  - `native/install.sh` and `native/uninstall.sh` support both macOS (`Darwin`) and Linux (`~/.config/google-chrome/NativeMessagingHosts` & `~/.config/chromium/NativeMessagingHosts`).

- [ ] **Step 1: Write the failing test `tests/test_debuggability_and_release_hygiene.js`**

```js
// tests/test_debuggability_and_release_hygiene.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');

// 1. Test --dev build produces a single valid V3 sourcemap mapping to real src/ files
execFileSync(process.execPath, [path.join(rootDir, 'scripts/build_background.js'), '--dev']);
const devBg = fs.readFileSync(path.join(rootDir, 'background.js'), 'utf8');
const bgMapMatches = devBg.match(/\/\/# sourceMappingURL=data:application\/json;base64,([A-Za-z0-9+/=]+)/g) || [];
assert.strictEqual(bgMapMatches.length, 1, 'background.js --dev must contain exactly 1 inline sourcemap');
const bgMapJson = JSON.parse(Buffer.from(bgMapMatches[0].split(',')[1], 'base64').toString('utf8'));
assert.strictEqual(bgMapJson.version, 3);
assert.ok(
  (bgMapJson.sources && bgMapJson.sources.some(s => s.includes('src/background/'))) ||
  (bgMapJson.sections && bgMapJson.sections.some(sec => sec.map.sources.some(s => s.includes('src/background/')))),
  'background.js --dev sourcemap must resolve to individual src/background/* files, not <stdin>'
);

// Restore production build immediately
execFileSync(process.execPath, [path.join(rootDir, 'scripts/build_background.js')]);

// 2. Verify .gitignore excludes audit_bundle.txt and docs/superpowers/
const gitignore = fs.readFileSync(path.join(rootDir, '.gitignore'), 'utf8');
assert.ok(gitignore.includes('audit_bundle.txt'), '.gitignore must ignore audit_bundle.txt');

// 3. Verify native/install.bat does not overwrite tracked com.savior.helper.json in-place and compiles host.cs
const installBat = fs.readFileSync(path.join(rootDir, 'native/install.bat'), 'utf8');
assert.ok(installBat.includes('csc.exe'), 'install.bat must auto-compile host.cs if host.exe is missing');
assert.ok(installBat.includes('LOCALAPPDATA'), 'install.bat must write generated manifest to %LOCALAPPDATA%');

// 4. Verify native/install.sh supports Linux
const installSh = fs.readFileSync(path.join(rootDir, 'native/install.sh'), 'utf8');
assert.ok(installSh.includes('.config/google-chrome/NativeMessagingHosts'), 'install.sh must support Linux Chrome path');

console.log('✓ Debuggability sourcemaps and open-source release hygiene verified!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test_debuggability_and_release_hygiene.js`
Expected: FAIL because `background.js --dev` sourcemap only contains `<stdin>`

- [ ] **Step 3: Implement multi-file indexed sourcemaps in `--dev` builds, installer upgrades, and release packaging cleanup**

1. In `scripts/build_content_script.js`, `scripts/build_background.js`, and `scripts/build_common.js`:
   - In `--dev` mode, instead of passing an anonymous concatenated string to `esbuild.transformSync`, assemble the bundle line-by-line while tracking the 0-based starting line of each module `src/<domain>/<relPath>`, and construct a V3 Indexed Source Map (`{ version: 3, file: '<bundle>.js', sections: [...] }`) where each section maps the module's line offset using `esbuild.transformSync(moduleCode, { sourcefile: 'src/<domain>/' + relPath, sourcemap: 'external' }).map`. Append a single `//# sourceMappingURL=data:application/json;base64,...` comment at the end of the bundle.
2. In `scripts/package_release.js`:
   - If `content-script.js` or `background.js` contains `sourceMappingURL=`, automatically run the production build scripts first.
   - Add `common.js`, `README.md`, `CONTRIBUTING.md`, `NOTICE.md`, `audit_bundle.txt`, and `types` to `EXCLUDED_FILES` / `EXCLUDED_DIRS`.
   - Sort `collectFiles()` lexicographically by `relPath` and use a deterministic DOS timestamp (`1980-01-01 00:00:00` or `SOURCE_DATE_EPOCH`) in `dosDateTime()`.
3. In `native/install.bat` & `native/uninstall.bat`:
   - In `install.bat`, if `%DIR%host.exe` does not exist, compile `%DIR%host.cs` using `%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\csc.exe /nologo /target:exe /out:"%DIR%host.exe" "%DIR%host.cs"`.
   - Write the generated `com.savior.helper.json` with the escaped absolute path to `%LOCALAPPDATA%\SaviorHelper\com.savior.helper.json` and register that path in `HKCU\Software\Google\Chrome\NativeMessagingHosts\com.savior.helper` (leaving `native\com.savior.helper.json` untouched).
4. In `native/install.sh` & `native/uninstall.sh`:
   - Detect `uname -s` (`Darwin` vs `Linux`) and install into both Chrome and Chromium `NativeMessagingHosts` directories on Linux (`$HOME/.config/google-chrome/NativeMessagingHosts` and `$HOME/.config/chromium/NativeMessagingHosts`).
5. Repository hygiene & docs:
   - Copy `docs/superpowers/census/2026-11-01-module-census.json` to `tests/fixtures/module_census.json` and update `scripts/sync_module_integrity.js` and `tests/test_module_census.js` to read `tests/fixtures/module_census.json`.
   - Remove `audit_bundle.txt` and `native/host_activity.log` from disk/git (`git rm -f --ignore-unmatch audit_bundle.txt`), and add `audit_bundle.txt` to `.gitignore`.
   - Add `"sync:integrity": "node scripts/sync_module_integrity.js"` and `"license": "MIT"`, `"engines": { "node": ">=18.0.0" }` to `package.json`.
   - Update `.github/workflows/ci.yml` to use `npm ci` and `npm test`.
   - Update `README.md` and `CONTRIBUTING.md` to `v3.1.0` with a dedicated **"Debugging in Chrome DevTools (`npm run build:dev`)"** section and **"Native Companion Setup (Windows / macOS / Linux)"** guide.
6. Run `npm run build` and `node scripts/sync_module_integrity.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test_debuggability_and_release_hygiene.js && npm run build && npm test`
Expected: PASS (all test suites pass and `dist/savior-extension-v3.1.0.zip` is cleanly packaged)

- [ ] **Step 5: Commit**

```bash
git add .gitignore package.json README.md CONTRIBUTING.md .github/workflows/ci.yml scripts/ native/ tests/ dist/
git commit -m "feat(dx): add per-module V3 sourcemaps in dev mode, cross-platform native installers, and release hygiene"
```
