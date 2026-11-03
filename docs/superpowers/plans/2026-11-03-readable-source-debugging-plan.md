# Kế hoạch chuyển source Vidown thành mã dễ đọc và dễ debug

Ngày lập: 03/11/2026. Baseline source: commit `c4873ec`.

Mục tiêu là giúp người phát triển lần theo được luồng phát hiện media, chọn nguồn và tải file bằng tên file, hàm và dependency có nghĩa. Khi đặt breakpoint, DevTools phải dừng đúng file nguồn; khi gặp lỗi, có thể xác định đầu vào, kết quả và nơi phát sinh lỗi mà không phải giải mã module ID.

Đây là kế hoạch riêng để triển khai chi tiết Giai đoạn 5 của [kế hoạch làm Vidown mượt nhẹ và dễ hiểu](2026-11-03-smooth-lightweight-readable-code-plan.md), kèm các bước sửa build và kiểm thử cần thiết. Các mục dưới đây đều chưa triển khai. Việc tăng tốc runtime và sửa engine tải tiếp tục theo kế hoạch chính; mỗi đợt chuyển source giữ nguyên hành vi sản phẩm hiện tại.

## 1 Hiện trạng và cách đo

| Vấn đề | Baseline | Ý nghĩa khi debug |
| --- | --- | --- |
| Helper mang tên số | 196 file `helper-*.js` trong `src/content/platform/`, đều nằm trong content registry | Tên file chưa cho biết chức năng hoặc nguồn gốc thư viện |
| Tên biến còn dấu vết minify | 75.768 lần xuất hiện tên khớp `\b(?:var\|param)_[A-Za-z_$][\w$]*\b` trong 383 file thuộc `platform` | Phải đọc ngược từng phép gán để hiểu dữ liệu |
| Extractor còn khó đọc | 212 file hậu tố `-extractor.js`; 209 file chứa tên dạng trên | Chuyển đổi phải bao phủ nhiều nhánh website |
| Dependency qua ID số | 1.959 lời gọi trực tiếp trong ba registry: content 1.407, background 445, common 107 | Đường gọi phụ thuộc bảng ánh xạ bên ngoài |
| Async đã biên dịch | 175 file dưới `src` chứa chuỗi `regenerator-runtime`; gồm 100 file `-extractor.js` | Luồng chờ, lỗi và kết thúc bị chia thành các nhánh state machine |
| Sourcemap content | Build dev hiện tạo hai map có nguồn `<stdin>` | Chưa dẫn về từng file gốc trong `src` |
| Export rút gọn | Còn các truy cập như `dep_format_resolver.b(...)`, `dep_media_sniffer.e(...)` | Đặt tên dependency chưa đủ để hiểu lời gọi |
| Tên file và nội dung lệch nhau | `base64-decoder.js` chứa cả BSON; `user-preference-sync.js` chứa nhiều template HTML | Người sửa dễ tìm nhầm vị trí và nhầm ranh giới vendor |

75.768 là số lần khớp văn bản, gồm khai báo và sử dụng, không phải số biến riêng biệt. 383 là số file trong `platform` có tên dạng này, không phải số extractor. Phép đếm numeric loader nhận diện tham số loader và phạm vi biến của factory, chưa tính các cạnh qua bảng ánh xạ động. Số file chứa `regenerator-runtime` là dấu hiệu source đã biên dịch, không chứng minh tất cả đều là nghiệp vụ đang chạy.

Bằng chứng chính nằm ở `scripts/build_content_script.js`, ba `module-registry.js`, `src/content/detector/content-entry.js`, các extractor và `background.chrome.js`. Các số đo phục vụ theo dõi tiến độ; nghiệm thu dựa trên luồng thực thi và hành vi.

## 2 Phạm vi và tiêu chuẩn source

Phạm vi gồm code nghiệp vụ trong `src/content`, `src/background`, phần `src/common` còn consumer, các script inject liên quan và biên tương thích ở `background.chrome.js`. Build, registry, test và template được sửa khi cần cho việc chuyển đổi. Native helper, thiết kế UI và tính năng mới nằm ngoài đợt này, trừ chỉnh sửa tối thiểu để giữ hợp đồng hiện có.

- Dùng tên theo hành vi và dữ liệu thực: `extractMediaTitle`, `playlistUrl`, `requestContext`. Chỉ đặt tên sau khi hiểu vai trò và tác dụng phụ.
- Module nghiệp vụ xuất trực tiếp hàm hoặc đối tượng có tên và import bằng đường dẫn. Wrapper `export default function(moduleObj, exportsObj, requireFn)` được coi là legacy cho tới khi bỏ được factory và loader bên trong.
- Dùng `async/await` cho luồng promise và iterator tự nhiên khi logic thực sự cần generator. Giữ ngữ nghĩa exception, `finally`, hủy, cache và thứ tự tác dụng phụ.
- Giữ source nghiệp vụ có định dạng dễ đọc; release bundle được phép minify. Chỉnh source và build thay vì sửa trực tiếp JavaScript đã sinh.
- Vendor có tên, nguồn gốc, phiên bản nếu xác định được và license. Phần chưa xác định được nguồn gốc được ghi rõ để tiếp tục kiểm chứng.
- Giữ các thư mục hiện có khi phù hợp. Chỉ tách file khi làm rõ trách nhiệm hoặc giảm phụ thuộc; tránh tạo framework, event bus hay wrapper riêng cho từng hàm.
- Mỗi cụm chuyển đổi thay thế đường chạy cũ tương ứng. Tránh giữ hai bản nghiệp vụ cùng hoạt động hoặc dựng cây `content-next` không được production sử dụng.

## 3 Giai đoạn 1 Làm rõ dependency và kiểm thử hiện có

**Phạm vi:** ba registry, `scripts/trace_reachability.js`, `scripts/test_runner.js`, `package.json` và các suite liên quan đến cụm sắp chuyển.

- [ ] Lập một bảng inventory duy nhất gồm module ID, file hiện tại, chức năng, consumer, môi trường chạy, tác dụng phụ khi khởi tạo, phân loại nghiệp vụ/vendor/alias/chưa rõ và trạng thái chuyển đổi. Bắt đầu từ entry và 196 helper.
- [ ] Phân tích dependency theo AST, nhận diện tham số loader thật, biến bị che khuất và các registry động 180/564. Ghi riêng cạnh chưa resolve và chu trình phụ thuộc. Runtime trace chỉ bổ sung bằng chứng; chưa thấy chạy không đủ để xóa.
- [ ] Vẽ đường gọi entry → nhận diện trang → chọn extractor → chuẩn hóa media → widget → gửi lệnh → route tải. Ghi hàm, file và hợp đồng ở mỗi bước, gồm các global/event thực sự tham gia.
- [ ] Phân loại test đang chạy, test bỏ qua, test kiểm tra source và test hành vi. Hai suite milestone 3 đang bỏ qua khi thiếu `src/experimental/content-next` phải được ghi nhận đúng; chuyển các hợp đồng còn hữu ích sang production source.
- [ ] Đưa `npm test` qua runner có timeout và log lỗi rõ nếu vẫn đang dùng lệnh inline. Sửa cách báo kết quả để suite bỏ qua không được tính là bằng chứng đã kiểm thử luồng đó.
- [ ] Với cụm sắp chuyển, bổ sung fixture/harness hành vi còn thiếu. Giữ kết quả kỳ vọng độc lập với implementation; dùng bản cũ để đối chiếu thêm khi phù hợp.

**Đầu ra:** inventory, bản đồ đường gọi và baseline test gắn commit. Ghi lỗi có sẵn để phân biệt với regression mới.

**Nghiệm thu:** giải thích được dependency và tác dụng phụ của cụm đầu tiên; biết suite nào bảo vệ hành vi đó. Các kết luận module thừa từ báo cáo cũ chưa đủ bằng chứng được đưa về trạng thái cần kiểm chứng.

## 4 Giai đoạn 2 Sửa build và sourcemap trước khi chuyển diện rộng

**Phạm vi:** `scripts/build_content_script.js`, `build_background.js`, `build_common.js`, entry liên quan và packaging.

- [ ] Cho build đọc module từ đường dẫn file thật bằng esbuild. Phần factory legacy dùng cầu nối tại biên build/runtime cần thiết để giữ loader hiện tại; module đã chuyển đổi đi qua import trực tiếp.
- [ ] Trong giai đoạn chuyển tiếp, nếu còn biến đổi hoặc ghép source, phải ghép cả sourcemap theo từng bước. Chỉ thêm `sourcefile` cho toàn bộ chuỗi ghép chưa đáp ứng yêu cầu map về nhiều file gốc.
- [ ] Tạo một sourcemap hợp lệ cho mỗi artifact cuối. Giữ đúng đường dẫn, dòng và cột sau khi thêm bootstrap, CSS prefetcher hoặc mã tương thích; giữ `sourcesContent` cho bản dev khi cần.
- [ ] Giữ thứ tự khởi tạo, module cache, các export dạng getter và chu trình đang có. Kiểm tra việc đọc DOM, đăng ký listener và thiết lập global tại thời điểm import để tránh thay đổi hành vi khi chuyển factory sang ESM.
- [ ] Giữ tương thích Chrome 116 và các môi trường hiện có: content isolated world, inject main world và service worker. Phần dùng chung source vẫn có instance riêng theo môi trường.
- [ ] Xác định một quy trình build dev và một quy trình release có thể lặp lại. Packaging luôn dùng output release mới; bản release không mang inline sourcemap hoặc đường dẫn tuyệt đối của máy phát triển.

**Kiểm chứng:** kiểm tra tự động cấu trúc map và một số ánh xạ dòng/cột đã biết; mở Chrome DevTools đặt breakpoint thật ở entry, detector, một extractor và background handler. Kiểm tra cả exception từ promise và script inject bị ảnh hưởng.

**Nghiệm thu:** breakpoint dừng đúng file và vị trí trong `src`; call stack đưa về source tương ứng. Test hành vi của artifact dev và release cùng đạt. Build không tự khởi tạo thêm module hoặc bỏ tác dụng phụ cần thiết.

## 5 Giai đoạn 3 Phân loại helper và xác định vendor

**Phạm vi:** 196 helper trong content platform, các file vendor bị đặt sai chỗ và bản sao có liên quan ở background/common.

- [ ] Phân loại từng helper thành alias built-in, shim/polyfill, thư viện bên thứ ba, nghiệp vụ hoặc chưa rõ. Ví dụ cần xác nhận: 115 xuất `TypeError`, 407 xuất `EvalError`, 408 xuất `RangeError`; 116 cung cấp assertion.
- [ ] Với alias đơn giản, chuyển caller đã hiểu sang built-in hoặc module có tên phù hợp. Chỉ bỏ file và registry entry khi toàn bộ consumer, kể cả bảng động, đã được xử lý.
- [ ] Với vendor, xác định package và phiên bản bằng nội dung, license và API. Đưa về nhóm vendor có tên; phần chưa xác định được giữ nội dung cùng thông tin đã biết.
- [ ] Kiểm tra `base64-decoder.js`, parser, Buffer và crypto trước khi đặt lại tên. Không áp dụng đổi tên nghiệp vụ hàng loạt lên mã thư viện.
- [ ] Khi dùng lại package chuẩn hoặc gộp bản sao, đối chiếu API, kiểu dữ liệu, mutation, lỗi, đặc tính môi trường và thứ tự khởi tạo. Tránh đồng thời nâng phiên bản thư viện trong một đợt đổi tên/di chuyển.
- [ ] Ghi mapping ID/tên cũ sang chức năng và vị trí mới trong inventory. Xóa alias tương thích khi consumer cuối cùng đã chuyển.

**Nghiệm thu:** cả 196 helper có phân loại, consumer và hướng xử lý. Phần vendor còn giữ có nguồn gốc hoặc trạng thái xác minh cụ thể. Số helper giảm phải đi kèm thay đổi consumer hợp lệ và kiểm chứng hành vi.

## 6 Giai đoạn 4 Chuyển các luồng nghiệp vụ cốt lõi

**Thứ tự:** entry và message → chuẩn hóa media và route tải → DOM detection → widget. Mỗi cụm chỉ chuyển sau khi Giai đoạn 1 và 2 đáp ứng hợp đồng liên quan; việc xác minh vendor có thể tiếp tục ở các phần độc lập.

- [ ] Chuyển entry sang hàm khởi tạo có tên; làm rõ phần nào chạy một lần, phần nào chạy theo trang/frame và phần nào cần cleanup.
- [ ] Đổi export rút gọn `a/b/e` thành tên chức năng và sửa các caller cùng cụm. Nếu caller legacy còn dùng, ánh xạ tên cũ tại một biên tương thích có consumer và điều kiện xóa rõ ràng.
- [ ] Thay numeric loader trong cụm bằng import/export có tên. Kiểm tra default/named export, live binding, chu trình, module instance và thời điểm khởi tạo trước khi bỏ factory.
- [ ] Đặt tên biến/hàm dựa vào input, output và tác dụng phụ. Với đoạn chưa hiểu, giữ trong danh sách cần xử lý thay vì gán một tên suy đoán rồi đánh dấu hoàn thành.
- [ ] Khôi phục luồng promise và generator; kiểm tra `this`, `arguments`, giá trị trả về, rejection, `catch/finally`, hủy và trạng thái cache.
- [ ] Làm rõ đường qua các API đang bị patch trong `background.chrome.js`. Caller đã chuyển dùng hàm nghiệp vụ có tên; patch còn cần cho legacy được tập trung tại biên tương thích và giữ thứ tự đăng ký hiện tại.
- [ ] Tách template HTML/CSS đang nhúng thành nguồn riêng khi cần để đọc và sửa. Giữ nguyên escaping, ID, selector, placeholder và tài nguyên được đóng gói.

**Nghiệm thu cho từng cụm:** production dùng implementation mới; người đọc lần theo được từ entry đến tác dụng phụ bằng tên; không còn numeric loader, export rút gọn hoặc state machine sinh tự động trong phần nghiệp vụ đã chuyển. Consumer legacy còn lại được ghi cụ thể.

## 7 Giai đoạn 5 Chuyển extractor theo nhóm có kiểm chứng

**Đợt mẫu:** Kenh14 → Animehay → nhóm Mọt phim. Kenh14 tạo mẫu nhỏ cho DOM và URL; Animehay kiểm tra async, cache và đổi server; nhóm Mọt phim kiểm tra nhiều matcher và parser dùng chung. Sau đợt mẫu, xếp nhóm còn lại theo mức sử dụng, độ phụ thuộc và rủi ro.

- [ ] Với từng extractor, ghi matcher/domain, đầu vào, media trả về, dependency, cache và sự kiện phát ra. Giữ các domain alias và thứ tự ưu tiên đang có.
- [ ] Tạo fixture phù hợp trước khi chuyển logic phức tạp. Dùng dữ liệu tái lập được, không lưu cookie/token cá nhân hoặc link media ký ngắn hạn làm điều kiện duy nhất để test chạy.
- [ ] Chuyển dependency cùng cụm hoặc qua biên tương thích đã định nghĩa; tránh thêm wrapper một hàm cho mỗi extractor chỉ để che numeric ID.
- [ ] Đặt tên hàm theo hành vi thực như lấy tiêu đề, lấy playlist, phân tích response và cập nhật media. Chỉ tách helper dùng chung khi đã xác nhận cùng hợp đồng.
- [ ] Thay generator đã biên dịch bằng async tự nhiên; giữ xử lý khi thiếu DOM, response rỗng, lỗi mạng, đổi video/server, iframe và fallback.
- [ ] Chuyển registry động sang bảng có tên rõ ràng nối với module mới. Bảo toàn matcher, thứ tự lựa chọn và thời điểm khởi tạo; thay đổi eager/lazy loading được đo và thực hiện riêng theo kế hoạch hiệu năng.
- [ ] Sau mỗi nhóm, cập nhật inventory và bỏ implementation cũ khi hết caller. Với site không truy cập được, giữ trạng thái kiểm chứng thực tế riêng với kết quả fixture.

**Nghiệm thu:** từng extractor được đánh dấu hoàn thành có source đọc được, fixture bảo vệ hợp đồng và kết quả smoke test theo phạm vi thay đổi. Không giảm danh sách website hỗ trợ để đạt mục tiêu số lượng.

## 8 Kiểm thử và bằng chứng nghiệm thu

| Phạm vi thay đổi | Bằng chứng bắt buộc |
| --- | --- |
| Build và sourcemap | Dev/release cùng hành vi; map đúng file/dòng/cột; breakpoint và exception thật trong Chrome; không lỗi context/CSP mới |
| Loader và export | Cùng kết quả xuất, module instance, thứ tự tác dụng phụ và xử lý chu trình; kiểm tra getter/live binding khi có |
| Async và generator | Thành công, rejection, lỗi được bắt hoặc truyền tiếp, cleanup/finally, hủy khi có, cache và trạng thái khi gọi lại |
| Kenh14 | Lấy tiêu đề, các nhánh MP4/HLS/blob đang hỗ trợ, fallback khi thiếu node hoặc `vid` |
| Animehay | Response parser, cache, đổi server/video, cập nhật widget, response rỗng và lỗi request |
| Nhóm Mọt phim | Matcher/domain alias, thu thập request, parser dùng chung và URL fallback của từng extractor được sửa |
| Message và route tải | Payload/response, một thao tác tạo một job, tiến trình, hủy, retry, hoàn thành và mở đúng file |
| Template và tài nguyên | HTML/render giữ ID, selector, escaping, locale; artifact release chứa đủ tài nguyên được tham chiếu |

Tận dụng `tests/test_golden_behavior.js`, fixture và các suite hành vi liên quan đang có. Chỉ thêm test khi bảo vệ hợp đồng hoặc rủi ro thực; đổi tên/định dạng đơn thuần dùng lại regression suite phù hợp. So sánh implementation cũ và mới là bằng chứng bổ sung, không thay thế kết quả kỳ vọng độc lập.

Với `test_unpacked_module_integrity.js` và các test khóa hash, raw byte hoặc số slot: giữ giá trị bảo vệ nội dung legacy chưa đụng tới. Khi chuyển một cụm, thay assertion nội bộ tương ứng bằng kiểm tra hành vi và tính đầy đủ của artifact. Không tự cập nhật hàng loạt hash để làm test xanh, và không xóa kiểm tra khi chưa có bảo vệ thay thế phù hợp.

Mỗi đợt ghi commit, phạm vi, lệnh đã chạy, test pass/fail/skip và kết quả Chrome. Chạy suite liên quan sau từng cụm; chạy toàn bộ bộ test và các hành trình chính trên release build trước nghiệm thu cuối. Lỗi có sẵn được ghi riêng; mọi regression mới phải được xử lý trước khi nhận đợt chuyển đổi.

## 9 Thứ tự chia đợt và khả năng hoàn tác

| Đợt thay đổi | Kết quả có thể review | Điều kiện đi tiếp |
| --- | --- | --- |
| 1 | Inventory, graph, hợp đồng và baseline test | Xác định được đường chạy cụm đầu và test thực sự bảo vệ nó |
| 2 | Build có sourcemap theo file thật | Breakpoint đúng source; dev/release giữ hành vi |
| 3 | Phân loại helper, xử lý nhóm alias nhỏ đã rõ | Consumer được cập nhật; kiểm chứng module cache và built-in |
| 4 | Entry, message và export có tên | Production đi qua code mới; hợp đồng message còn nguyên |
| 5 | Chuẩn hóa media, route tải, detector và widget theo cụm | Luồng người dùng và cleanup không phát sinh regression |
| 6 | Ba nhóm extractor mẫu | Fixture và Chrome xác nhận mẫu chuyển đổi áp dụng được |
| 7 | Các extractor và vendor còn lại theo inventory | Mỗi nhóm có bằng chứng tương ứng và phạm vi legacy giảm rõ |
| 8 | Bỏ cầu nối hết consumer, dọn build/test và tài liệu | Build release, toàn bộ suite và smoke test cuối đạt |

Mỗi đợt có thể chia thành nhiều commit nhỏ theo cụm dependency. Tách di chuyển/đổi tên cơ học khỏi thay đổi logic khi điều đó giúp review. Lưu baseline bằng Git và fixture phù hợp; khi có regression, hoàn tác cả source, registry và build của cụm liên quan. Tránh giữ một implementation dự phòng cùng chạy hoặc thêm feature flag lâu dài cho đợt dọn này.

## 10 Điều kiện hoàn thành

- [ ] Code nghiệp vụ còn sử dụng trong phạm vi kế hoạch đã có file, hàm và biến theo vai trò; đã kiểm tra cả tên một ký tự và các tiền tố máy móc ngoài `var_*`/`param_*`.
- [ ] Phần nghiệp vụ đã chuyển không chứa numeric loader, factory legacy, export rút gọn hoặc state machine sinh tự động. Ngoại lệ thuộc vendor/legacy có consumer, lý do giữ và trạng thái cụ thể.
- [ ] Cả 196 helper đã được xử lý hoặc phân loại vendor/legacy có bằng chứng; mọi extractor còn thuộc phạm vi hỗ trợ có trạng thái rõ trong inventory.
- [ ] Sourcemap dev dẫn đúng file nguồn và vị trí thực thi của các luồng cần debug; release packaging không lấy nhầm output dev.
- [ ] Patch API còn cần thiết có một vị trí tương thích rõ; đường gọi nghiệp vụ đã chuyển có thể lần theo trực tiếp.
- [ ] Test của production source thực sự chạy; báo cáo tách pass, fail và skip. Các kiểm tra cấu trúc cũ đã được thay thế phù hợp cho phần chuyển đổi.
- [ ] Smoke test xác nhận phát hiện, chọn chất lượng/âm thanh, tải, hủy, retry và mở file; không mất website hoặc phát sinh lỗi mới do chuyển source.
- [ ] Người phát triển có thể debug một luồng Kenh14 hoặc Animehay từ entry đến kết quả media bằng tên source và hàm có nghĩa, không cần tra numeric registry ở từng bước.

Hoàn thành toàn bộ kế hoạch đòi hỏi inventory không còn mục nghiệp vụ chưa xử lý trong phạm vi đã định. Nếu dừng sau các luồng cốt lõi, ghi rõ đợt đã hoàn thành và phần còn lại. Tỷ lệ giảm tên biến hoặc số helper được dùng để theo dõi công việc, không thay thế các điều kiện trên.
