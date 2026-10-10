# Savior Downloads Manager - Design Specification

**Date:** 2026-10-10  
**Target:** Savior Extension (`f:\downloadcodex\2.4.65_0`)  
**Design Reference:** `F:\VideoDownloader\downloads\`

## 1. Overview & Goals

Create a full-featured, dedicated **Downloads Manager** page (`downloads/downloads.html`) for the Savior extension, providing users with a desktop-grade download management experience similar to Cốc Cốc and Google Chrome's built-in download pages.

The Downloads Manager integrates with Savior's Native Messaging Host (`com.savior.helper`) and `background.chrome.js` to track downloads in real time, launch downloaded media directly, browse containing folders in Windows Explorer, search and filter download history, and switch download directories.

## 2. Architecture & Data Flow

```
┌────────────────────────────────────────────────────────┐
│               Savior UI Entrypoints                    │
│   • Popup (popup.html)      • Sidepanel (sidepanel.html)│
│       └───────────┬───────────────┘                    │
│                   │ Click "Quản lý tải xuống"          │
│                   ▼                                    │
│   ┌──────────────────────────────────────────────┐     │
│   │   Downloads Manager (downloads/downloads.html)│     │
│   │   • Search & Date-Grouped History List       │     │
│   │   • Real-Time Progress, Speed & Status       │     │
│   │   • Open File, Show in Folder, Change Folder │     │
│   └──────────────────────┬───────────────────────┘     │
│                          │                             │
│       IPC / Storage Sync │                             │
│                          ▼                             │
│   ┌──────────────────────────────────────────────┐     │
│   │   background.chrome.js (Service Worker)      │     │
│   │   • downloadHistory persistence in storage   │     │
│   │   • Throttled progress broadcaster           │     │
│   │   • Coordinates with Native Messaging Host   │     │
│   └──────────────────────┬───────────────────────┘     │
│                          │                             │
│       Native Messaging   │ Stdio                       │
│                          ▼                             │
│   ┌──────────────────────────────────────────────┐     │
│   │   com.savior.helper (native/host.js)         │     │
│   │   • openFile, showInFolder, openFolder       │     │
│   │   • browseFolder (System FolderDialog)       │     │
│   │   • FFmpeg & Multi-thread Range Downloads    │     │
│   └──────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────┘
```

## 3. Detailed Component Specifications

### 3.1. Downloads Manager Page (`downloads/downloads.html`, `downloads.css`, `downloads.js`)

1. **Header Navigation Bar**:
   - Title: `Tệp đã tải xuống`
   - Real-time search box: Filters items instantaneously by filename, URL, or domain. Includes clear search `✕` button.
   - Action Buttons:
     - `Mở thư mục`: Opens system Downloads folder (or custom directory) in Windows Explorer via `openFolder`.
     - `Xoá lịch sử`: Clears all download records from `chrome.storage.local` with confirmation.

2. **Folder Settings Bar**:
   - Displays active storage directory path (defaults to user's Windows Downloads directory).
   - `Đổi thư mục...`: Triggers `browseFolder` message to `com.savior.helper`, popping up Windows native `FolderBrowserDialog` and saving selected path to `customDownloadDir`.

3. **Date-Grouped Downloads List**:
   - Items are automatically categorized by chronological sections:
     - `Hôm nay` (Today)
     - `Hôm qua` (Yesterday)
     - Exact date (`DD/MM/YYYY`)
   - Each Download Item Card includes:
     - Icon representing media type (Video / Audio).
     - Title / Filename (clicking it invokes `openFile`).
     - Source Website / Origin URL.
     - State Badge:
       - **Đang tải (In-Progress)**: Displays real-time progress bar, speed (e.g., `4.2 MB/s`), percentage, and downloaded size.
       - **Hoàn thành (Complete)**: Displays final size, completion timestamp, green checkmark.
       - **Đã hủy / Lỗi (Interrupted)**: Displays clear Vietnamese error description (e.g. timeout, 403, disk error).
     - Interactive Actions:
       - `Mở`: Launches the file using Windows default player (`openFile`).
       - `Hiển thị trong thư mục`: Highlights the file in Explorer (`showInFolder`).
       - `Sao chép liên kết tải`: Copies the original media URL to clipboard.
       - `Xoá khỏi danh sách`: Removes record from storage (`chrome.storage.local`).

4. **Empty State & Zero-Search State**:
   - Clean illustration and guidance when no downloads exist or when search query yields no matches.

### 3.2. Background Integration (`background.chrome.js`)

1. **History Persistence**:
   - Standardized `downloadHistory` schema stored in `chrome.storage.local`:
     ```typescript
     interface DownloadRecord {
       id: number;
       title: string;
       filename: string;
       url: string;
       state: 'in_progress' | 'complete' | 'interrupted';
       percent?: string;
       speed?: string;
       size?: string;
       totalBytes?: number;
       downloadedBytes?: number;
       startTime: number;
       endTime?: number;
       outputPath?: string;
       error?: string;
     }
     ```
2. **Progress Updates**:
   - Updates `downloadHistory` periodically (throttled at 400ms intervals) so storage writes are lightweight and responsive.
3. **Message Handlers**:
   - Responds to `getDownloads`, `openFile`, `showInFolder`, `openFolder`, `browseFolder`, `clearHistory`, `removeDownload`.

### 3.3. Entrypoints in Popup and Sidepanel

1. **Popup Header (`popup.html` & `popup.js`)**:
   - Add a download manager icon button in the header bar next to settings.
   - Clicking opens `chrome-extension://<id>/downloads/downloads.html` in a new tab.
2. **Sidepanel Header (`sidepanel.html` & `sidepanel.js`)**:
   - Add a matching download manager button in the top tab bar.
   - Clicking opens `chrome-extension://<id>/downloads/downloads.html`.

## 4. UI/UX & Theme Design

- Follows the responsive Chromium Material layout adapted from `F:\VideoDownloader\downloads\downloads.css`.
- Fully supports automatic dark/light mode based on user system preference (`@media (prefers-color-scheme: dark)`).
- Clean fonts, high contrast accessibility, smooth transitions, and tooltips.

## 5. Verification Plan

1. Load unpacked extension in Google Chrome.
2. Click the new "Quản lý tải xuống" icon in Savior's popup -> opens `downloads.html`.
3. Start downloading a video on YouTube or a test website:
   - Check that the download appears immediately in `downloads.html` under "Hôm nay".
   - Check that speed and percentage update in real time.
   - When download completes, check status switches to complete.
4. Click "Mở" -> file plays in Windows media player.
5. Click "Hiển thị trong thư mục" -> file is selected in Explorer.
6. Test search bar -> items filter instantly.
7. Test "Đổi thư mục..." -> Windows folder dialog opens and updates folder path.
8. Test "Xoá lịch sử" -> removes history and shows empty state.
