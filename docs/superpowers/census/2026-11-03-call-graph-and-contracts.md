# Bản đồ Đường gọi và Hợp đồng Thực thi (Call Graph & Execution Contracts)

Ngày lập: 03/11/2026.
Tài liệu thuộc Giai đoạn 1 của [Kế hoạch source dễ đọc dễ debug](../plans/2026-11-03-readable-source-debugging-plan.md).

---

## 1. Bản đồ luồng dữ liệu tổng thể (End-to-End Pipeline)

```
[Mạng / Performance API]
         │ (Resource Timing .m3u8, .mpd)
         ▼
[stream-sniffer.js (document_start)]
         │
         ├──> window.__saviorSniffedMedia
         │
         └──> chrome.runtime.sendMessage({ action: "mediaDetected" }) ──> [Background Service Worker]
                                                                                  │
                                                                           (Cập nhật Icon / Badge)

[Trang Web HTML / DOM]
         │
         ▼
[content-script.js (document_idle)]
         │
         ├──> 1. content-entry.js (Module 543)
         │       ├──> urlMatcher.shouldDisableSavior(location.href)
         │       ├──> widgetManager.init() (Module 541)
         │       └──> domScanner.init() (Module 176)
         │
         ├──> 2. dom-scanner.js (Module 176)
         │       ├──> providerRegistry.getSiteData(location.host) (Modules 180 / 564)
         │       │       └──> [Site Extractor: youtube, tiktok, facebook, kenh14...]
         │       ├──> MutationObserver (Lọc node.nodeType === 1)
         │       └──> requestAnimationFrame Throttle
         │
         ├──> 3. Widget Manager & LazyMediaTracker (Module 541)
         │       ├──> EE.on("widget.request_matched") (Leading-edge 0ms emit)
         │       ├──> LazyMediaTracker.processRequest() (Chuẩn hóa URLs, Resolutions, Headers)
         │       └──> Render Widget vào Shadow DOM (<savior-host>)
         │
         └──> 4. Người dùng bấm Tải xuống (User Action)
                 │
                 ▼
         chrome.runtime.sendMessage({ action: "startDownload", url, title, ... })
                 │
                 ▼
[Background Service Worker (background.chrome.js)]
         │
         ├──> Kiểm tra Queue & Task ID
         ├──> Bóc tách Cookie & Scoped Origin Headers (Tránh rò rỉ cookie cross-origin)
         └──> Gửi lệnh qua Native Messaging Port
                 │
                 ▼
[Native Helper Engine (native/host.js)]
         │
         ├──> Multi-threaded HTTP Range Downloader (HTTP 206)
         ├──> HLS / DASH Segment Fetcher & Muxer (ffmpeg)
         ├──> Ghi file tạm (.vidown.part) & Kiểm tra Coverage (validateRelayCoverage)
         └──> Đổi tên nguyên tử (Atomic Publish) sang file đích an toàn trong ~/Downloads
```

---

## 2. Chi tiết hợp đồng từng chặng (Stage Contracts)

### Chặng 1: Entry Point Bootstrap
* **Tệp:** `src/content/detector/content-entry.js` (Module 543)
* **Khởi chạy:** Chạy trong isolated world của tab khi `document_idle`.
* **Phụ thuộc cốt lõi:**
  * `Module 97` (`core/event-bus-init.js`): Khởi tạo bus toàn cục `window.EE` (EventEmitter).
  * `Module 33` (`detector/url-matcher.js`): Kiểm tra danh sách blacklist URL để vô hiệu hóa nếu trang thuộc diện cấm.
  * `Module 7` (`widget/settings-manager.js`): Quản lý cài đặt cấu hình in-memory.
  * `Module 541` (`widget/widget-manager.js`): Quản lý vòng đời và DOM của nút tải.
  * `Module 176` (`detector/dom-scanner.js`): Trình quét cây DOM trang để tìm thẻ media.
* **Hợp đồng phát hiện sớm:**
  Ngay khi `content-entry.js` khởi chạy, nó kiểm tra `window.__saviorSniffedMedia` do `stream-sniffer.js` ghi lại từ `document_start`. Nếu có media, phát ngay `EE.emit("widget.request_matched", window.__saviorSniffedMedia)`.

---

### Chặng 2: DOM Scanner & Extractor Registry
* **Tệp:** `src/content/detector/dom-scanner.js` (Module 176)
* **Đăng ký Extractor:**
  * `Module 180` (`platform/extractor-registry-1.js`): 231 extractors tĩnh.
  * `Module 564` (`platform/extractor-registry-2.js`): 37 extractors động/nâng cao.
* **Hợp đồng hiệu năng (120fps Scroll Invariant):**
  * `handleDomChanged`: Bỏ qua mọi record không chứa phần tử HTML (`nodeType !== 1`), bỏ qua `characterData`.
  * Gom các record hợp lệ vào một khung hình duy nhất bằng `requestAnimationFrame`.
  * Khi cờ `image_download_enabled === false`, `runImageDetection()` và `imageHandler()` trả về ngay lập tức, tốn 0% CPU.

---

### Chặng 3: Chuẩn hóa Media & Giao diện Widget
* **Tệp:** `src/content/widget/widget-manager.js` (Module 541)
* **Hợp đồng nhận diện luồng:**
  * Lắng nghe `widget.request_matched` với payload mảng hoặc đơn lẻ.
  * `LazyMediaTracker.processRequest()`: Khử trùng lặp theo URL/Format, sắp xếp độ phân giải giảm dần (1080p, 720p, 480p, 360p).
  * Widget render bên trong Shadow DOM `<savior-host>` để CSS trang mẹ không làm vỡ giao diện tải.

---

### Chặng 4: Điều phối Tải & Native Host
* **Tệp:** `background.chrome.js` & `native/host.js`
* **Hợp đồng an toàn (Đã qua Audit A01-A10):**
  * `taskId` độc lập cho từng tiến trình; lệnh hủy tác vụ chờ không làm ảnh hưởng tác vụ đang chạy.
  * Tách biệt cookie theo host; khi redirect sang bên thứ ba, cookie nhạy cảm bị loại bỏ.
  * Dữ liệu tải được ghi vào file tạm `.vidown.part` và chỉ rename sang file thật khi `validateRelayCoverage` xác nhận 100% byte dữ liệu không có khoảng trống (sparse data).
