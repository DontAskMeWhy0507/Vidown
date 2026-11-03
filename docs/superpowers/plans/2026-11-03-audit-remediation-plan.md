# Kế hoạch sửa lỗi sau audit Vidown ngày 3 tháng 11 năm 2026

Phạm vi tài liệu này là backlog lỗi độ tin cậy. Theo mục tiêu người dùng đã làm rõ, kế hoạch chính hiện là [Kế hoạch làm Vidown mượt nhẹ và dễ hiểu](2026-11-03-smooth-lightweight-readable-code-plan.md), ưu tiên giảm việc runtime, bỏ phần thừa và làm rõ source nghiệp vụ.

Mục tiêu là xử lý 10 vấn đề đã xác nhận trong audit, ưu tiên bảo vệ file người dùng, hủy đúng tác vụ, bảo vệ cookie và bảo đảm file tải xuống có dữ liệu đầy đủ. Sau mỗi nhóm thay đổi phải có test hành vi tái hiện lỗi cũ và chứng minh hành vi mới.

Trạng thái: kế hoạch triển khai. Các checkbox chưa được đánh dấu hoàn tất. Việc tạo tài liệu này không bao gồm triển khai bản sửa hoặc phát hành extension.

## Phạm vi và hiện trạng

Audit trên working tree hiện tại ghi nhận 4 vấn đề P1 và 6 vấn đề P2. Working tree có cả thay đổi staged, unstaged và file mới; phải giữ nguyên các thay đổi của người dùng trong quá trình thực hiện.

| Mã audit | Mức độ | Vấn đề | Công việc xử lý |
| --- | --- | --- | --- |
| A01 | P1 | Tải trùng tên ghi đè file cũ và hủy tải xóa file cũ | T02 |
| A02 | P1 | Hủy tác vụ đang chờ làm dừng tác vụ đang chạy | T03 |
| A03 | P1 | Redirect chuyển tiếp cookie sang host khác | T04 |
| A04 | P1 | Downloader chấp nhận dữ liệu sai Content-Range | T05 |
| A05 | P2 | Relay chấp nhận file có khoảng trống dữ liệu | T06 |
| A06 | P2 | Tên file relay thoát khỏi thư mục đích | T02 |
| A07 | P2 | Request hoặc response body treo giữ tác vụ vô thời hạn | T07 |
| A08 | P2 | Token còn nguyên trong log sau khi redact | T08 |
| A09 | P2 | Packager nhận file ngoài phạm vi runtime | T09 |
| A10 | P2 | Hai suite test không tự thoát | T01 |

Kết quả nền của audit: 1.061 file JavaScript parse thành công; ba bundle chính khớp source khi dựng trong bộ nhớ. Trong 77 suite, 74 suite chạy và thoát bình thường, hai suite hoàn tất assertion nhưng còn interval, một suite native pass khi mock thao tác mở ứng dụng hệ điều hành. Đây chưa phải kết quả kiểm thử trực tiếp trên mọi website hoặc macOS.

## Nguyên tắc triển khai

- Sửa source dưới `src/` đối với các bundle được sinh tự động; tái tạo bundle bằng build script. `background.chrome.js`, `native/host.js`, popup và downloads manager hiện là các điểm sửa trực tiếp theo cấu trúc repo.
- Mỗi lỗi có test hành vi thất bại trên phiên bản cũ trước khi sửa. Kiểm tra chuỗi source chỉ bổ trợ cho các hợp đồng đóng gói hoặc manifest.
- Test dùng thư mục tạm riêng, HTTP server loopback và timer có thể dọn sạch. Mock thao tác mở ứng dụng; không mở Explorer hoặc trình phát trong test tự động.
- Không cập nhật fixture hash hoặc hạ assertion chỉ để làm test xanh. Chỉ cập nhật snapshot sau khi xác nhận thay đổi hành vi có chủ đích.
- Giữ tương thích Chrome tối thiểu 116. Không đổi tên extension, quyền truy cập, chiến lược extractor hoặc trải nghiệm chọn chất lượng trong đợt sửa này nếu không có yêu cầu cụ thể từ bản sửa.
- Native helper và extension phải được kiểm thử như một cặp phiên bản. Khi thay hợp đồng message, phát hiện helper cũ và trả lỗi nâng cấp rõ ràng trước khi bắt đầu job có hợp đồng mới.

## Thứ tự và phụ thuộc

| Đợt | Công việc | Điều kiện để đi tiếp |
| --- | --- | --- |
| 1 | T01 sửa test runner và tạo harness dùng chung | Test thoát ổn định, lỗi có stdout và stderr |
| 2 | T02 bảo vệ đường dẫn và vòng đời file | File cũ bất biến khi tải lỗi, hủy hoặc trùng tên |
| 3 | T03 cô lập tác vụ và lệnh hủy | Hủy B không ảnh hưởng A; message cũ không tác động job mới |
| 4 | T04 cookie, T05 Range, T06 relay, T07 timeout | Không rò cookie và không hoàn tất file sai hoặc thiếu dữ liệu |
| 5 | T08 log và T09 đóng gói | Không lộ token, ZIP chỉ chứa file được phép |
| 6 | T10 tích hợp và kiểm thử phát hành | Đạt toàn bộ tiêu chí nghiệm thu cuối tài liệu |

T05 và T06 dùng vòng đời file của T02. T07 dùng cơ chế hủy theo tác vụ của T03. T08 có thể làm sớm ngay sau T01; T09 có thể làm độc lập nhưng phải hoàn tất trước T10. Đây là thứ tự phụ thuộc kỹ thuật, không yêu cầu triển khai bằng nhiều agent.

## T01 Ổn định test runner và tạo môi trường tái hiện

**File liên quan:** `package.json`, `.github/workflows/ci.yml`, `tests/test_native_queue_deadlock_fix.js`, `tests/test_settings_splitbrain_and_popup_opened_fix.js`, `tests/test_host_integrity_and_security.js`, `tests/helpers/`.

- [ ] Thống kê timer, listener, native port giả và HTTP server mà mỗi suite tạo ra.
- [ ] Thêm teardown thật cho hai suite đang treo: clear interval và timeout, đóng port giả và xóa listener trong `finally`. Không dùng `process.exit()` để che tài nguyên còn mở.
- [ ] Tách mock thao tác mở ứng dụng khỏi native test để suite chạy độc lập trên CI và máy phát triển.
- [ ] Tạo helper cho thư mục tạm, HTTP server và Chrome runtime giả. Helper phải hỗ trợ nhiều listener và mô phỏng đúng vòng đời native port.
- [ ] Dùng một runner chung cho local và CI, với `execFile` hoặc tương đương, timeout mỗi suite và timeout tổng. Giá trị khởi đầu đề xuất: 30 giây mỗi suite; cấu hình riêng cho integration test thực sự cần lâu hơn.
- [ ] In tên suite, thời gian chạy, exit code hoặc signal, stdout và stderr khi thất bại. Hết timeout phải dừng child process, thu hồi tài nguyên và trả exit code thất bại.
- [ ] Xác minh test cố tình treo bị runner chặn, trong khi suite còn lại vẫn được ghi nhận kết quả. Fixture treo chỉ được gọi từ test runner test, không được tự phát hiện như một suite thông thường.
- [ ] Chạy lại toàn bộ suite bằng runner mới và lưu kết quả nền trước khi sửa runtime.

**Nghiệm thu:** hai suite tự thoát với timer chuẩn; không cần wrapper `unref()`; native suite không mở ứng dụng thật; local và CI dùng cùng một lệnh kiểm thử.

## T02 Bảo vệ đường dẫn và vòng đời file

**File liên quan:** `native/host.js`, có thể thêm `native/lib/output-files.js`; kiểm tra luồng mở file trong `background.chrome.js`, `downloads/downloads.js`, `popup/popup.js` khi tên file cuối thay đổi.

**Điểm hiện tại:** `startStreamRelayJob`, `partPathFor`, `finalizePartFile`, `cleanupPartialFiles`, nhánh cancel của `startMultiThreadDownload`, các nhánh lỗi FFmpeg.

- [ ] Đưa đường dẫn vào một đối tượng job, gồm `taskId`, `outputDir`, `requestedFilename`, `partPath`, `outputPath` và trạng thái publish. Mọi nhánh dọn dẹp sử dụng đối tượng này.
- [ ] Xác thực tên file tại native boundary trước khi ghi: chỉ nhận basename; từ chối separator, `..`, absolute path, drive path, UNC path, NUL, ký tự điều khiển và Windows alternate data stream. Kiểm tra tên thiết bị Windows, dấu chấm hoặc khoảng trắng cuối tên và giới hạn độ dài.
- [ ] Kiểm tra đường dẫn sau resolve nằm dưới thư mục đích đã chuẩn hóa. Thư mục đích là lựa chọn của người dùng; không tự ép mọi lượt tải về thư mục Downloads mặc định.
- [ ] Tạo staging file riêng cho từng job bằng chế độ tạo độc quyền. Hai job cùng tiêu đề không dùng chung một `.part`.
- [ ] Giữ file staging cùng filesystem với đích. Thiết kế publish không thay thế file đã tồn tại: thử hard link từ staging đã đóng sang tên cuối, đổi sang tên có hậu tố khi gặp `EEXIST`, rồi mới bỏ staging. Kiểm chứng cách này trên filesystem hỗ trợ của Windows và macOS.
- [ ] Nếu filesystem không hỗ trợ cơ chế publish đã chọn, trả lỗi rõ ràng và giữ staging để xử lý; không fallback sang `rename` có thể ghi đè hoặc copy dở dang vào tên được coi là hoàn tất.
- [ ] Hủy, retry và lỗi chỉ xóa staging thuộc job. Bỏ việc xóa `outPath` dựa trên tên dự kiến hoặc kích thước của file có sẵn.
- [ ] Áp dụng cùng quy tắc cho relay, tải đơn luồng, tải đa luồng và FFmpeg mux hoặc chuyển đổi. Giữ khai báo format FFmpeg khi tên staging không kết thúc bằng `.mp4` hoặc `.mp3`.
- [ ] Trả tên và đường dẫn cuối thực tế qua message complete; lưu vào lịch sử và ưu tiên đường dẫn đó khi mở file.

**Test bắt buộc:** file cũ trùng tên giữ nguyên hash sau cancel, lỗi mạng, lỗi mux và tải thành công; hai job trùng tên có staging riêng; `../escaped.mp4`, separator Windows và UNC bị từ chối; Unicode tiếng Việt và emoji hoạt động; lỗi quyền ghi không để lại file giả hoàn tất; cancel lặp lại không xóa file đã publish.

**Nghiệm thu:** không thay đổi byte nào của file tồn tại trước job; file cuối chỉ xuất hiện khi tải và kiểm tra hoàn tất; đường dẫn ghi mới nằm trong thư mục được chọn.

## T03 Hủy đúng tác vụ và chặn message đến muộn

**File liên quan:** `background.chrome.js`, `native/host.js`, các suite queue, cancel, remove và stream relay.

- [ ] Chuẩn hóa vòng đời `queued → downloading → completed`, cùng các nhánh `canceled` và `error`; thao tác sau trạng thái kết thúc phải idempotent.
- [ ] Khi hủy hoặc xóa job queued, chỉ loại job đó khỏi queue và cập nhật lịch sử. Không gửi lệnh cancel xuống host.
- [ ] Khi hủy job đang chạy, gửi `taskId`; host chỉ hủy job có ID trùng với job hiện tại. Lệnh cho job cũ phải được bỏ qua hoặc trả kết quả không còn active.
- [ ] Gắn `taskId` vào progress, error, complete, cancelled, streamReady và streamAck có liên quan tới job. Cập nhật cả nhánh native tải file và FFmpeg.
- [ ] Lọc message theo `taskId` trước khi thay active state hoặc lịch sử. Tách pong và kết quả thao tác thư mục khỏi message tiến trình tải.
- [ ] Chặn việc callback hoặc close event của job A thay trạng thái job B sau khi queue đã chuyển tiếp.
- [ ] Chỉ chuyển job tiếp theo một lần sau khi job hiện tại kết thúc hoặc xác nhận hủy; bảo đảm queue không chạy đồng thời hai native job.
- [ ] Kiểm tra `cancelDownload`, `removeDownload`, `clearHistory`, `chrome.downloads.cancel` và relay dùng cùng quy tắc. Hủy các engine phụ chỉ khi có cùng danh tính tác vụ, không chỉ vì URL giống nhau.
- [ ] Thêm capability handshake cho hợp đồng cancel mới và xử lý helper cũ theo nguyên tắc tương thích đã nêu.

**Test bắt buộc:** A đang chạy, B và C queued; hủy B thì A giữ kết nối và C vẫn chờ; xóa B cho kết quả tương tự; hủy A thì C chạy đúng một lần; cancel A đến muộn không hủy C; late complete/error của A không đổi C; double click hủy không gây lỗi; browser download độc lập không bị hủy theo native task.

**Nghiệm thu:** chỉ job được chỉ định bị hủy; queue không deadlock; trạng thái UI và lịch sử khớp với job thực tế.

## T04 Ràng buộc cookie theo URL và redirect

**File liên quan:** `background.chrome.js` ở `getCookieHeader` và `postDownload`; `native/host.js` ở probe, tải đơn luồng, tải block và các nhánh FFmpeg.

- [ ] Bỏ cách gộp cookie của trang nguồn và media URL thành một chuỗi dùng chung. Chọn cookie áp dụng cho từng URL; giữ metadata cần thiết nếu native phải tự quyết định khi redirect.
- [ ] Xác định cookie theo domain, hostOnly, path, secure, thời hạn và ngữ cảnh cookie store hoặc partition khi API có thông tin tương ứng. Không suy ra quyền gửi cookie chỉ từ việc hai hostname có chung một phần chuỗi.
- [ ] Tạo một chính sách redirect dùng chung cho probe, single stream và từng block: chỉ cho HTTP hoặc HTTPS, giới hạn số bước, xử lý URL tương đối và kiểm tra lại headers ở mỗi bước.
- [ ] Khi đổi origin, bỏ Authorization và các header xác thực tùy chỉnh; chọn lại Cookie theo URL đích. Không mang nguyên Cookie của nguồn sang host mới. HTTPS xuống HTTP phải bỏ cookie secure và thông tin xác thực.
- [ ] Nếu không có metadata đủ để chọn lại cookie, bỏ cookie khi đổi host. Trường hợp cần đăng nhập phải trả lỗi xác thực hoặc sử dụng đường tải qua Chrome phù hợp.
- [ ] Kiểm soát redirect trong FFmpeg: không truyền chuỗi cookie tổng hợp vào client tự follow redirect khi không thể bảo đảm scope. Với nguồn cần session, ưu tiên tải dữ liệu có kiểm soát trước khi mux local hoặc dùng relay Chrome đã được kiểm thử.
- [ ] Không ghi cookie hoặc metadata xác thực vào downloadHistory, console hay file log.

**Test bắt buộc:** cùng host đúng path; khác host; subdomain với cookie hostOnly; cookie domain; redirect tương đối; redirect loop; redirect sang protocol không hỗ trợ; HTTPS xuống HTTP; video và audio khác host; hai cookie cùng tên nhưng khác domain hoặc path. Server đích phải ghi nhận header thực nhận để assertion có ý nghĩa.

**Nghiệm thu:** server ngoài scope không nhận cookie hoặc header xác thực của nguồn; nguồn tải riêng tư được kiểm tra lại bằng session hợp lệ.

## T05 Xác thực từng response Range

**File liên quan:** `native/host.js` ở `probeHttpRange` và `downloadFileMultiThread`; `background.chrome.js` ở worker Range của relay.

- [ ] Parse Content-Range bằng parser chặt, kiểm tra số nguyên an toàn, `start <= end < total` và tổng khớp kích thước đã chọn.
- [ ] Với block request, yêu cầu 206 và Content-Range trùng start/end/total mong đợi. Không chấp nhận 200 rồi ghi vào offset của block.
- [ ] Kiểm tra số byte nhận đúng bằng độ dài block; từ chối cả thiếu lẫn thừa trước khi ghi ra staging.
- [ ] Nếu server bỏ hỗ trợ Range, hủy toàn bộ worker và staging của lượt chia block trước khi bắt đầu lại bằng single stream. Không trộn dữ liệu của hai chế độ.
- [ ] Giữ phiên bản tài nguyên ổn định bằng ETag hoặc Last-Modified khi server hỗ trợ; nếu tài nguyên thay đổi giữa các block, hủy hoặc bắt đầu lại toàn bộ.
- [ ] Kiểm tra `bytesWritten` và xử lý short write; không giả định một lần gọi `fs.write` ghi hết buffer.
- [ ] Chỉ cộng tiến độ đã xác nhận một lần cho mỗi block thành công; retry không cộng lặp byte.
- [ ] Áp dụng quy tắc tương đương cho Range fetch qua Chrome để relay không nhận dữ liệu sai từ upstream.

**Test bắt buộc:** mọi request đều nhận lại block đầu; Content-Range sai start, end hoặc total; 200 ở block sau; 416; response ngắn hoặc dài; response bị cắt; ETag đổi giữa lượt tải; block hoàn tất sai thứ tự; retry sau lỗi không làm sai dữ liệu.

**Nghiệm thu:** file thành công có hash bằng payload nguồn; mọi response sai bị từ chối hoặc tải lại bằng chế độ hợp lệ, không được báo hoàn thành.

## T06 Kiểm tra vùng dữ liệu relay và tính nhất quán chunk

**File liên quan:** `native/host.js` ở `handleStreamChunk` và `finishStreamJob`; `background.chrome.js` ở `pumpBody`, window ACK và streamEnd.

- [ ] Khai báo tổng kích thước kỳ vọng từ lúc bắt đầu job khi đã biết. Không cho chunk sau tùy ý thay đổi tổng.
- [ ] Kiểm tra taskId, seq, base64, offset là số nguyên an toàn và giới hạn kích thước từng chunk. Kiểm tra `offset + length` không vượt vùng cho phép.
- [ ] Theo dõi coverage bằng các khoảng byte đã ghi; gộp khoảng liền nhau để giới hạn metadata. Không tạo bitmap một phần tử cho mỗi byte.
- [ ] Đặt quy tắc rõ cho chunk lặp: ACK lại chunk đã xác nhận mà không tăng tiến độ; từ chối chunk cùng danh tính nhưng dữ liệu hoặc offset khác. Từ chối overlap không hợp lệ.
- [ ] Chỉ ACK khi đã ghi đủ chunk; xử lý short write và lỗi disk trước khi tăng số byte xác nhận.
- [ ] Với tổng đã biết, streamEnd chỉ publish khi coverage chính xác từ 0 đến total, không có gap và không còn write chờ.
- [ ] Với stream chưa biết tổng, yêu cầu dữ liệu tuần tự liên tục; streamEnd cung cấp tổng cuối và phải khớp byte đã xác nhận.
- [ ] Dọn coverage và listener sau success, cancel, error và disconnect. Giới hạn metadata cùng số chunk chưa ACK để tránh tăng RAM không kiểm soát.

**Test bắt buộc:** một byte ở offset 9 của file 10 byte phải thất bại; thiếu block giữa; chunk trùng; chunk chồng lấn; out of order hợp lệ; offset âm, thập phân hoặc quá lớn; disk full; streamEnd sớm; chunk của job cũ; payload rỗng theo chính sách loại media.

**Nghiệm thu:** không thể hoàn tất file sparse chỉ nhờ kích thước trên disk; hash file relay khớp dữ liệu nguồn.

## T07 Timeout và hủy bao phủ toàn bộ thời gian tải

**File liên quan:** `native/host.js` ở probe, fetchHttpResource, single stream, multi-thread và FFmpeg; `background.chrome.js` ở fetchWithTimeout và pumpBody.

- [ ] Phân biệt timeout chờ kết nối hoặc headers với timeout không nhận thêm dữ liệu. Không đặt deadline cố định quá ngắn cho toàn bộ video dài.
- [ ] Dùng giá trị cấu hình ban đầu: 15 giây chờ headers, 30 giây không có thêm dữ liệu, tối đa 5 redirect và số retry có giới hạn. Tinh chỉnh bằng test và smoke test mạng chậm.
- [ ] Giữ abort controller, timer và listener của request cho tới khi đọc hết hoặc hủy body. Abort phải đánh thức cả `reader.read()` đang chờ.
- [ ] Liên kết một bộ điều khiển hủy của job với probe, worker, body reader và request tải playlist hoặc key. Hủy trong lúc probe cũng phải có tác dụng.
- [ ] Với HTTP response bị cắt, xử lý aborted, error và close chưa hoàn tất để Promise luôn resolve hoặc reject; không để job treo.
- [ ] Cancel không retry và không tự bật fallback tải lại. Timeout có retry giới hạn; retry hết phải kết thúc job và giải phóng queue.
- [ ] Bảo đảm timer, socket, reader và listener được thu hồi trong mọi nhánh. Mỗi job chỉ phát một sự kiện kết thúc.
- [ ] Áp dụng giới hạn kích thước phù hợp cho playlist, key và tài nguyên đang đọc toàn bộ vào RAM; quy định lỗi nếu vượt giới hạn.

**Test bắt buộc:** server không gửi headers; gửi headers rồi giữ body; body dừng giữa chừng; cancel khi reader đang chờ; cancel trong probe; disconnect native; server trả dữ liệu chậm nhưng liên tục; retry hết; queue chuyển sang job kế tiếp sau timeout.

**Nghiệm thu:** job treo được kết thúc trong timeout đã cấu hình; cancel hoàn tất trong tối đa 2 giây ở test loopback; không có retry hoặc worker còn chạy sau cancel.

## T08 Che thông tin xác thực trước khi ghi log

**File liên quan:** `native/host.js` ở sanitizeForLog, logHost, startDownload và log FFmpeg; rà soát console logging trong background.

- [ ] Tạo một đường ghi log có sanitizer tại biên để các call site mới không bỏ quên bước che thông tin.
- [ ] Che giá trị Cookie, Set-Cookie, Authorization, URL username/password và các tham số token, signature, sig, auth, key cùng biến thể phổ biến của URL ký.
- [ ] Với URL, parse rồi thay giá trị tham số trước khi serialize; với text hoặc stderr khó parse, dùng fallback bảo thủ. Không dùng replacement giữ cả giá trị bí mật như hiện tại.
- [ ] Bỏ hoặc sanitize log startDownload, native request, probe URL và command hoặc stderr FFmpeg. Không ghi nguyên object chứa cookie.
- [ ] Giữ taskId, mã lỗi, hostname và thông tin đủ để debug. Giới hạn độ dài log và giữ cơ chế rotation.

**Test bắt buộc:** dùng secret sentinel qua mọi điểm ghi log; đọc file log thực và assert không còn sentinel. Bao gồm query URL encode, header khác hoa thường, object lồng nhau, URL không parse được và stderr có URL ký. Assert mã lỗi và taskId vẫn có mặt.

**Nghiệm thu:** không có secret sentinel trong stdout, stderr hoặc log file của test.

## T09 Đóng gói từ danh sách runtime được phép

**File liên quan:** `scripts/package_release.js`, `tests/test_package_release_cleanliness.js`, `.github/workflows/ci.yml`, tài liệu build nếu giao diện lệnh thay đổi.

- [ ] Chuyển từ quét toàn repo rồi loại trừ sang inventory được phép: manifest, các bundle runtime gốc, context-guard, downloads-nav, popup, downloads, css, images, locales và inject; giữ LICENSE và NOTICE theo chính sách phân phối của repo.
- [ ] Quy định extension file hợp lệ cho từng thư mục; từ chối file ẩn, log, source map dev và symlink hoặc junction dẫn ra ngoài root.
- [ ] Kiểm tra các tài nguyên được manifest, HTML và runtime sử dụng đều có trong inventory, gồm đường dẫn inject động.
- [ ] Tách hàm collect và validate để test trên cây thư mục tạm. Import packager trong test không được tự tạo hoặc ghi đè ZIP thật.
- [ ] Thêm fixture `.env`, audit_bundle.txt, file backup và file lạ trong thư mục runtime; chúng không được xuất hiện trong ZIP. Không đọc hoặc đưa giá trị secret thật vào test output.
- [ ] Tạo ZIP vào tên staging, kiểm tra inventory, manifest và version rồi mới công bố artifact. Thất bại phải giữ bản ZIP hợp lệ trước đó.
- [ ] Quy định rõ artifact chính và trường hợp file đích đang bị khóa. Không để CI báo thành công với một tên ZIP trong khi người dùng lấy nhầm bản cũ ở tên khác.
- [ ] Kiểm tra giới hạn ZIP hiện có trong repo là 1.15 MB và báo số byte thực tế. Nếu bản sửa vượt giới hạn, trình bày nguyên nhân và phương án giảm; không tự nâng trần hoặc bỏ runtime cần thiết.
- [ ] Bảo đảm test đóng gói không thay đổi dist của người dùng, kể cả khi assertion thất bại.

**Nghiệm thu:** ZIP có đúng inventory đã khai báo, không có `.env`, audit bundle hoặc native binary; tài nguyên runtime đầy đủ; packaging test không làm bẩn working tree.

## T10 Tích hợp và kiểm thử phát hành

**Điều kiện bắt đầu:** T01 đến T09 đạt nghiệm thu. Không coi việc assertion pass trong VM là bằng chứng website thật hoạt động.

- [ ] Chạy các suite mới theo từng subsystem trước, rồi chạy toàn bộ bằng runner chung.
- [ ] Build trên checkout hoặc bản sao làm việc dành cho kiểm chứng để không ghi đè các thay đổi chưa commit của người dùng. Chạy build đầy đủ, kiểm tra các bundle được tái sinh và inventory ZIP.
- [ ] Chạy lại test sau build vì runtime thực tế là các file sinh ra. Đối chiếu inject source và output.
- [ ] Chạy CI trên matrix Node hiện hành 18, 20, 22; thêm Windows native integration và macOS native integration với mock OS launcher để kiểm tra khác biệt đường dẫn, file và hủy job.
- [ ] Kiểm chứng publish file trên NTFS và APFS; nếu không có máy hoặc filesystem tương ứng, ghi rõ gate còn thiếu và không đánh dấu đã đạt.
- [ ] Thực hiện smoke test trên Chrome với extension và helper cùng bản: progressive MP4, HLS, DASH video/audio riêng, relay qua Chrome, MP3, tên tiếng Việt, thư mục tùy chọn và tải trùng tên.
- [ ] Kiểm tra UI: popup và downloads manager cập nhật đúng queued, downloading, canceled, error, completed; mở đúng file có hậu tố mới; xóa lịch sử không làm job khác dừng.
- [ ] Thử queue A/B/C, hủy B, hủy A, retry, đóng tab nguồn, reload extension, restart browser và native disconnect. Không để item queued mắc kẹt mà UI không thể hủy hoặc retry.
- [ ] Kiểm tra nguồn cần session bằng tài khoản test khi có sẵn; dùng dữ liệu giả cho bài kiểm tra cookie tự động. Không ghi cookie thật vào evidence.
- [ ] Tạo release candidate và ghi version extension, version/capability helper, commit hoặc diff đã kiểm thử, kết quả test, kích thước cùng hash artifact và các gate chưa chạy.

**Lệnh dự kiến sau khi có runner chung:**

```text
npm test
npm run build
npm test
```

Lệnh build và package ở bước nghiệm thu chạy trong checkout kiểm chứng. Các test chuyên biệt mới được runner tự phát hiện theo quy ước hiện hành `test_*.js`.

## Tiêu chí hoàn tất

- [ ] A01 đến A10 có test hành vi và thay đổi tương ứng, không chỉ assertion tìm chuỗi source.
- [ ] File cũ giữ nguyên hash qua tải trùng tên, cancel, timeout và lỗi FFmpeg.
- [ ] Hủy hoặc xóa job queued không tạo lệnh hủy job đang chạy.
- [ ] Redirect ngoài scope không nhận thông tin xác thực của nguồn.
- [ ] File tải thành công từ native và relay khớp hash payload chuẩn; file sai Range hoặc thiếu vùng dữ liệu không được publish.
- [ ] Path traversal và các tên file không hợp lệ bị từ chối tại native boundary.
- [ ] Timeout, cancel và disconnect thu hồi tài nguyên; queue có thể tiếp tục.
- [ ] Không có secret sentinel trong log hoặc artifact.
- [ ] Toàn bộ suite tự thoát, runner không hết timeout, CI xanh trên các môi trường đã khai báo.
- [ ] Build tái tạo được runtime và ZIP đúng inventory; smoke test bắt buộc đã có kết quả.

## Chia thay đổi để review và hoàn tác

Đề xuất chia thành sáu nhóm commit: test infrastructure; filesystem safety; task identity và cancel; HTTP cùng relay integrity; log cùng packaging; integration và tài liệu. Ghi kết quả test vào mô tả từng nhóm. Không commit thay đổi của người dùng vào các nhóm sửa lỗi một cách tự động.

Nếu bản sửa có regression, dừng tạo job mới ở đường tải bị ảnh hưởng, giữ file hoàn tất và file người dùng, rồi chọn bản sửa tiếp hoặc revert nhóm thay đổi liên quan. Không hoàn tác bằng cách bật lại ghi đè file, chuyển cookie sang host khác hoặc bỏ kiểm tra toàn vẹn. Các thay đổi hợp đồng native phải được hoàn tác hoặc nâng cấp đồng bộ với extension.

## Công việc kiến trúc tiếp theo

Sau khi 10 lỗi đã có test bảo vệ, xem xét gom các thao tác ghi downloadHistory về một nơi trong background. Popup và manager gửi intent thay vì tự read-modify-write cùng key; startup reconciliation cũng đi qua cùng hàng đợi. Cần test hai cửa sổ manager cùng xóa, progress đến đồng thời và service worker khởi động lại. Đây là việc tiếp theo từ rủi ro nhiều nơi ghi lịch sử, chưa được tính là một lỗi mới đã tái hiện trong 10 mục trên.

Tiếp đó mới tách các module output files, HTTP transfer, native protocol và task queue khỏi các file lớn, giữ nguyên interface đã có test. Không thực hiện một lần viết lại toàn bộ extractor hoặc native host trong đợt xử lý lỗi này.

## Ước lượng công sức

| Nhóm | Công sức dự kiến |
| --- | --- |
| T01 test runner và harness | 0.5 đến 1 ngày |
| T02 bảo vệ file và đường dẫn | 1 đến 1.5 ngày |
| T03 task identity và cancel | 0.5 đến 1 ngày |
| T04 đến T07 cookie, Range, relay và timeout | 2 đến 3 ngày |
| T08 và T09 log và packaging | 0.5 đến 1 ngày |
| T10 integration và smoke test | 1 đến 1.5 ngày |

Tổng dự kiến 5.5 đến 9 ngày công của một kỹ sư, phụ thuộc khả năng truy cập môi trường Windows, macOS và nguồn cần session. Đây là ước lượng lập kế hoạch; ưu tiên giữ nguyên các tiêu chí bảo vệ dữ liệu và kiểm chứng hành vi.
