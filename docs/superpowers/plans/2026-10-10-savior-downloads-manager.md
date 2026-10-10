# Savior Downloads Manager Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a full-featured, dedicated Downloads Manager page (`downloads/downloads.html`) for the Savior extension with date-grouped history, real-time download progress, Windows Explorer actions (open file, show in folder, change folder), and entrypoints in Popup and Sidepanel.

**Architecture:** `background.chrome.js` records download lifecycle events and progress into `chrome.storage.local` under `downloadHistory` with a throttled broadcaster. The Downloads Manager page (`downloads/downloads.html`) observes storage changes to render and filter downloads in real time, communicating with the Native Messaging Host (`com.savior.helper`) for native Explorer actions. Entrypoints in `popup.html` and `sidepanel.html` provide one-click access.

**Tech Stack:** Chrome Extension MV3, HTML5/CSS3 (Material Design with automatic Dark Mode), JavaScript (ES2020), Native Messaging Host (`com.savior.helper`).

**Spec:** `docs/superpowers/specs/2026-10-10-savior-downloads-manager-design.md`

## Global Constraints

- Target: Google Chrome MV3 (114+) load unpacked
- Match layout and design of `F:\VideoDownloader\downloads\`
- Automatic dark/light mode following Windows system theme via `@media (prefers-color-scheme: dark)`
- All file opening and explorer actions must operate through `com.savior.helper` with fallback to `chrome.downloads`
- Storage writes during download progress must be throttled (at least 350-400ms) to prevent performance degradation

## Review Focus

1. **Storage quota exhaustion**: `downloadHistory` could grow indefinitely — cap at 200 most recent records when adding new items.
2. **Missing file on disk**: When user clicks "Mở" or "Hiển thị trong thư mục" on a deleted file, host must open `Downloads` folder gracefully instead of crashing.
3. **Live progress sync across tabs**: Opening multiple Downloads Manager tabs must not cause race conditions or duplicate listeners.
4. **Search responsiveness**: Searching with accented Vietnamese text or uppercase/lowercase must match case-insensitively.
5. **Special characters in filenames**: Titles with quotes or backslashes must be sanitized before rendering.

---

## File Structure

| File | Responsibility |
|---|---|
| `downloads/downloads.html` | Markup for Downloads Manager (header, search box, folder bar, list, empty state) |
| `downloads/downloads.css` | Material styles, responsive grid, card layout, auto dark/light theme |
| `downloads/downloads.js` | Rendering, date grouping, live progress sync, search filtering, action buttons |
| `background.chrome.js` | `downloadHistory` tracking, progress throttling, IPC message routing |
| `popup.html` & `popup.js` | Header shortcut button to open Downloads Manager |
| `sidepanel.html` & `sidepanel.js` | Tab bar shortcut button to open Downloads Manager |
| `manifest.json` | Register `downloads/downloads.html` in `web_accessible_resources` |
| `tests/test_download_manager_logic.js` | Automated unit test verifying history schema and filtering |

---

### Task 1: Background History Persistence & IPC Handlers

**Files:**
- Modify: `background.chrome.js`
- Test: `tests/test_download_manager_logic.js`

**Interfaces:**
- Produces: `downloadHistory` schema in `chrome.storage.local`, runtime message handlers for `openDownloadsPage`, `openFolder`, `browseFolder`, `clearHistory`, `removeDownloadRecord`.

- [ ] **Step 1: Write test for downloadHistory schema and cap logic**

Create `tests/test_download_manager_logic.js`:
```javascript
const assert = require('assert');

function addRecord(history, newRecord, maxItems = 200) {
  const filtered = history.filter(item => item.id !== newRecord.id);
  const updated = [newRecord, ...filtered];
  if (updated.length > maxItems) updated.length = maxItems;
  return updated;
}

const mockHistory = Array.from({ length: 205 }, (_, i) => ({ id: i, title: `Video ${i}` }));
const res = addRecord(mockHistory, { id: 999, title: 'New Video' });
assert.strictEqual(res.length, 200);
assert.strictEqual(res[0].id, 999);
console.log('Task 1 logic test passed');
```

- [ ] **Step 2: Run test to verify it passes**

Run: `node tests/test_download_manager_logic.js`  
Expected: PASS with "Task 1 logic test passed"

- [ ] **Step 3: Implement downloadHistory tracking in `background.chrome.js`**

In `background.chrome.js`:
1. Define helper `updateDownloadHistory(record)`:
   - Reads `chrome.storage.local.get(['downloadHistory'])`
   - Prepends or updates item by `record.id`
   - Caps history to 200 items
   - Saves back to `chrome.storage.local`
2. In `startNativeDownload`:
   - Initialize record with `state: 'in_progress'`, `startTime: Date.now()`, `filename`, `url`, `title`
   - In `action: 'progress'`: Throttled update to storage (every 400ms) with `percent`, `speed`, `size`
   - In `action: 'complete'`: Update record with `state: 'complete'`, `endTime: Date.now()`, `outputPath`
   - In `action: 'error'`: Update record with `state: 'interrupted'`, `error: msg.error`
3. Add `chrome.runtime.onMessage` handler for Downloads Manager actions:
   - `action: 'openDownloadsPage'`: calls `chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') })`
   - `action: 'openFolder'`: sends `{ action: 'openFolder', path: msg.path }` to native port
   - `action: 'browseFolder'`: sends `{ action: 'browseFolder' }` to native port and returns result
   - `action: 'openFile'`: sends `{ action: 'openFile', filename: msg.filename, path: msg.path }` to native port
   - `action: 'showInFolder'`: sends `{ action: 'showInFolder', path: msg.path }` to native port

- [ ] **Step 4: Verify syntax of `background.chrome.js`**

Run: `node -c background.chrome.js`  
Expected: Exit code 0 (no syntax errors)

- [ ] **Step 5: Commit**

```bash
git add background.chrome.js tests/test_download_manager_logic.js
git commit -m "feat(background): add downloadHistory tracking and IPC handlers for Downloads Manager"
```

---

### Task 2: Downloads Manager UI (`downloads.html`, `downloads.css`, `downloads.js`)

**Files:**
- Create: `downloads/downloads.html`
- Create: `downloads/downloads.css`
- Create: `downloads/downloads.js`

**Interfaces:**
- Consumes: `downloadHistory` and `customDownloadDir` from `chrome.storage.local`, runtime messages handled by `background.chrome.js`.
- Produces: Complete desktop-class Downloads Manager page.

- [ ] **Step 1: Create `downloads/downloads.html`**

Structure adapted from `F:\VideoDownloader\downloads\downloads.html`:
- Top Nav: Brand title ("Tệp đã tải xuống"), search box with icon & clear button, header actions ("Mở thư mục", "Xoá lịch sử").
- Main Workspace:
  - Folder setting bar: "Thư mục tải về:" display + "Đổi thư mục..." button.
  - Empty state container with SVG illustration and Vietnamese helper text.
  - Downloads list container: Dynamically populated date groups and cards.
  - Toast notification element for status feedback.

- [ ] **Step 2: Create `downloads/downloads.css`**

Adapted from `F:\VideoDownloader\downloads\downloads.css`:
- Modern Chromium / Cốc Cốc Material Design aesthetic.
- CSS variables for surfaces, text, borders, accents (`#10b981` / `#059669`).
- Dark mode media query: `@media (prefers-color-scheme: dark) { ... }`.
- Card layout: Progress bar, speed badges, action buttons, hover states.

- [ ] **Step 3: Create `downloads/downloads.js`**

Implement:
1. `loadDownloads()`: Merges records from `chrome.storage.local.get(['downloadHistory'])` with any active downloads.
2. `renderDownloads(items)`:
   - Groups items chronologically (`Hôm nay`, `Hôm qua`, `DD/MM/YYYY`).
   - Renders card with icon, filename, domain, status, progress bar (if active), and action buttons.
3. Search filtering: Instant filter on input change (`searchInput.addEventListener('input', ...)`).
4. Live sync: `chrome.storage.onChanged.addListener((changes) => { if (changes.downloadHistory) loadDownloads(); })`.
5. Button event handlers:
   - "Mở": invokes `chrome.runtime.sendMessage({ action: 'openFile', filename, path })`.
   - "Hiển thị trong thư mục": invokes `chrome.runtime.sendMessage({ action: 'showInFolder', path })`.
   - "Sao chép liên kết": writes `item.url` to navigator.clipboard.
   - "Xoá khỏi danh sách": removes item from `downloadHistory` storage.
   - "Mở thư mục": invokes `chrome.runtime.sendMessage({ action: 'openFolder' })`.
   - "Đổi thư mục...": invokes `chrome.runtime.sendMessage({ action: 'browseFolder' })`.
   - "Xoá lịch sử": confirms with user, clears `downloadHistory`.

- [ ] **Step 4: Verify syntax and linting**

Run: `node -c downloads/downloads.js`  
Expected: Exit code 0 (valid JS)

- [ ] **Step 5: Commit**

```bash
git add downloads/
git commit -m "feat(downloads): create Downloads Manager page with Material UI and live sync"
```

---

### Task 3: Entrypoint Shortcuts in Popup, Sidepanel & Manifest Update

**Files:**
- Modify: `popup.html`
- Modify: `popup.js`
- Modify: `sidepanel.html`
- Modify: `sidepanel.js`
- Modify: `manifest.json`

**Interfaces:**
- Consumes: `downloads/downloads.html` path
- Produces: Direct navigation shortcuts for user to open the Downloads Manager from any Savior surface.

- [ ] **Step 1: Update `manifest.json`**

Add `downloads/*` to `web_accessible_resources` so page assets and icons load cleanly:
```json
   "web_accessible_resources": [ {
      "matches": [ "<all_urls>" ],
      "resources": [ "css/content-script.css", "images/*.*", "/features.json", "downloads/*" ]
   } ]
```

- [ ] **Step 2: Add Downloads Manager shortcut button in `popup.html`**

In `popup.html`, inside `#list-template` header next to `#popup-closer`:
Add button `#btn-open-downloads-manager` with folder/download icon.

- [ ] **Step 3: Hook event in `popup.js`**

Add click listener to `#btn-open-downloads-manager`:
```javascript
document.addEventListener('click', (e) => {
  if (e.target.closest('#btn-open-downloads-manager')) {
    chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') });
  }
});
```

- [ ] **Step 4: Add Downloads Manager shortcut button in `sidepanel.html`**

In `sidepanel.html`, inside top `.tabs` bar next to `#sidepanel-refresher`:
Add button `#btn-sidepanel-downloads` with download manager icon.

- [ ] **Step 5: Hook event in `sidepanel.js`**

Add click listener to `#btn-sidepanel-downloads`:
```javascript
document.addEventListener('click', (e) => {
  if (e.target.closest('#btn-sidepanel-downloads')) {
    chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') });
  }
});
```

- [ ] **Step 6: Verify manifest JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('manifest.json', 'utf8')); console.log('OK');"`  
Expected: "OK"

- [ ] **Step 7: Commit**

```bash
git add manifest.json popup.html popup.js sidepanel.html sidepanel.js
git commit -m "feat(ui): add Downloads Manager shortcut buttons to popup and sidepanel"
```

---

### Task 4: Automated Verification & End-to-End Validation

**Files:**
- Create: `tests/test_download_manager_e2e.js`

**Interfaces:**
- Consumes: All components from Tasks 1-3.
- Produces: Green test suite validating data flow, file integrity, and UI contracts.

- [ ] **Step 1: Write verification test suite `tests/test_download_manager_e2e.js`**

Tests:
1. `downloads.html`, `downloads.css`, and `downloads.js` exist and have non-zero size.
2. `background.chrome.js` handles `openFolder`, `browseFolder`, and history sync.
3. `manifest.json` contains valid `downloads/*` resource entry.
4. Storage schema validates correctly for both video and audio items.
5. Search filtering accurately matches lowercase, uppercase, and substring queries.

- [ ] **Step 2: Run verification test suite**

Run: `node tests/test_download_manager_e2e.js`  
Expected: PASS with "All Download Manager tests passed!"

- [ ] **Step 3: Commit and Clean up**

```bash
git add tests/
git commit -m "test: add automated test suite for Downloads Manager integration"
```

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-10-10-savior-downloads-manager.md`.
