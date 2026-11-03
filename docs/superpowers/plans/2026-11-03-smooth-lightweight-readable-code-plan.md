# Kế hoạch làm Vidown mượt nhẹ và dễ hiểu

Mục tiêu chính là giảm công việc extension làm trên mỗi trang, bỏ phần không phục vụ tính năng hiện tại và giúp người đọc lần theo được luồng phát hiện media đến tải file. Ưu tiên thay đổi nhỏ có bằng chứng; chỉ thêm cấu trúc khi nó thay thế được nhiều đường xử lý hoặc trạng thái đang trùng nhau.

Đây là kế hoạch chính theo mục tiêu đã được người dùng làm rõ. Tài liệu `2026-11-03-audit-remediation-plan.md` là backlog lỗi độ tin cậy đi kèm; sửa lỗi có nguy cơ mất dữ liệu trong lúc chỉnh đúng luồng liên quan. Không dùng backlog đó làm lý do xây thêm một tầng kiến trúc lớn.

## Kết quả rà soát theo mục tiêu mới

| Vấn đề | Bằng chứng hiện tại | Hướng xử lý |
| --- | --- | --- |
| Nạp bundle không làm việc hữu ích | `common.js` 501.588 byte; entry 736 là hàm rỗng. Instrument trong bộ nhớ cho thấy chỉ module 736 chạy, không tạo global khác. Golden fixture và background messaging vẫn pass khi bỏ thực thi bundle này trong bộ nhớ | Ưu tiên loại khỏi runtime sau khi kiểm tra các consumer còn lại |
| Khởi tạo extractor hàng loạt | `core/site-data.js` gọi mọi entry của registry 180; `detector/extractor-registry-index.js` gọi mọi entry registry 564 trước khi chọn theo trang | Tách metadata nhận diện khỏi khởi tạo extractor để chỉ khởi tạo phần cần cho trang |
| Source được chia nhỏ nhưng vẫn khó đọc | 196 file `helper-*` trong content registry; nhiều biến `var_e`, `param_t`; 175 file dưới src chứa dấu vết regenerator-runtime | Khôi phục tên theo hành vi và async tự nhiên trong code nghiệp vụ đang dùng |
| Ranh giới vendor và nghiệp vụ chưa rõ | `crypto/base64-decoder.js` dài khoảng 3.560 dòng; `utilities/user-preference-sync.js` khoảng 67 KB trong 24 dòng; widget manager khoảng 2.308 dòng | Xác định chức năng thật, đổi tên hoặc phân loại lại; tách trách nhiệm có bằng chứng |
| Đồng bộ UI chồng chéo | Manager nghe storage, nghe runtime và poll 800 ms. Popup còn poll 1 giây và reload thêm ở mốc 80/300 ms sau complete | Một snapshot để mở UI, một đường cập nhật khi đang mở, lưu trữ chỉ phục vụ bền vững |
| Hành vi thật bị che bởi API wrapper | Background thay thế sendMessage, tabs.sendMessage, downloads.download, cancel và listener API; context guard còn sửa fetch và console | Tập trung wrapper tại một biên tương thích; caller mới gọi hàm nghiệp vụ có tên |
| Bằng chứng code thừa chưa đáng tin | trace_reachability chỉ nhận một số tên hàm require, rồi gọi toàn bộ phần còn lại là static core. Tổng số được cộng lại luôn bằng tổng registry | Làm lại graph theo AST và runtime; không xóa hàng trăm module theo báo cáo cũ |
| Chưa có số đo đủ để khẳng định độ mượt | Kích thước ZIP và số test không phản ánh CPU, frame drop, thời gian khởi tạo hoặc tăng RAM khi dùng lâu | Đo các luồng thật trước và sau tối ưu |

Các phép đếm trên là số đo của source trong lần rà soát này. Việc không thực thi common trong test chưa thay thế smoke test Chrome thật. Các vòng polling và eager extractor đã được xác nhận trong code; mức tác động CPU cần đo trước khi kết luận về mức cải thiện.

## Trải nghiệm người dùng phải đạt

Tốc độ chỉ có ích khi người dùng luôn hiểu ứng dụng đang làm gì và thao tác thành công. Mỗi thay đổi trong kế hoạch phải được kiểm tra theo hành trình sau, trên extension và native helper thật khi đến bước nghiệm thu:

| Hành trình | Hành vi người dùng cần thấy | Cách kiểm tra |
| --- | --- | --- |
| Mở trang có video | Nút tải xuất hiện đúng video, không nhấp nháy, không làm trang giật hoặc che nút quan trọng | Quay màn hình và trace từ lúc navigation đến khi nút sẵn sàng; thử trang có iframe và feed đổi video |
| Bấm tải | Có phản hồi ngay; chỉ xuất hiện một tác vụ dù bấm nhanh nhiều lần | Bấm hai lần liên tiếp, quan sát popup và manager, đối chiếu số job ở background và host |
| Chọn chất lượng hoặc âm thanh | Tên, định dạng và lựa chọn hiển thị khớp file cuối; không tự đổi chất lượng khi fallback | Tải MP4, MP3, DASH có âm thanh riêng và HLS; mở hoặc kiểm tra file thực |
| Theo dõi tải | Trạng thái đi từ chờ đến đang tải rồi hoàn thành hoặc lỗi; phần trăm không lùi, thẻ không biến mất hoặc đổi sang tác vụ khác | Mở popup và manager đồng thời; tải file lớn, mạng chậm, đổi tab và đóng mở lại UI |
| Hủy và thử lại | Hủy đúng tác vụ, có phản hồi rõ; thử lại tạo một lượt mới, file cũ còn nguyên | A đang tải, B đang chờ; hủy B, rồi hủy A và thử lại; kiểm tra file cùng tên |
| Gặp lỗi | UI nói được nguyên nhân có thể xử lý: kết nối, quyền ghi, helper thiếu, link hết hạn hoặc file đã mất; nút Thử lại hoặc mở trang nguồn dẫn tới hành động phù hợp | Mô phỏng từng lỗi, quan sát thông báo và thử thao tác phục hồi thật |
| Hoàn thành và mở file | Chỉ báo thành công sau khi file đã có và hợp lệ; bấm Mở file hoặc Mở thư mục tới đúng tệp | So khớp file, vị trí lưu, tên có hậu tố khi trùng và trạng thái sau khi khởi động lại browser |
| Trang không có media hoặc đang xem video | Extension gần như đứng yên khi idle; phát video, scroll và thao tác trên trang không bị chậm đi | So sánh Chrome profile trước sau trên cùng trang và máy, kể cả trang có nhiều iframe |

Tiêu chí chặn phát hành: mất hoặc ghi đè file cũ, tải sai hoặc thiếu dữ liệu nhưng báo thành công, hủy nhầm, mất phản hồi sau click, trạng thái UI mâu thuẫn, video phát giật rõ do extension, hoặc một luồng media cốt lõi không còn phát hiện được. Không đánh dấu đạt chỉ vì bộ test source hoặc VM pass.

## Tiêu chuẩn của bản sửa

- Giữ các luồng media hiện tại: phát hiện, chọn chất lượng, tải, hủy, retry và mở file. Không giảm hỗ trợ website một cách âm thầm để có số đo đẹp.
- Người đọc phải đi được từ entry đến nơi xử lý mà không cần giải mã numeric module ID, đoán tên biến hoặc lần theo nhiều lớp patch API trong code nghiệp vụ đã chuyển đổi.
- Có một nơi quyết định route tải, một chủ sở hữu trạng thái tác vụ và một nơi ghi lịch sử tải.
- Không thêm framework, event bus mới, DI container, plugin framework hoặc abstraction một lớp bọc một hàm cho đợt dọn này.
- Source nghiệp vụ dễ đọc; bundle release được phép minify. Vendor giữ nguồn gốc và phiên bản rõ ràng, không đổi tên máy móc để giả thành code nghiệp vụ.
- Test xác nhận hành vi, không đóng băng số lượng chuỗi, số tên biến hoặc cấu trúc code cũ. Mỗi test phải giải thích được hành vi nào nó bảo vệ.

## Giai đoạn 1 Đo đường chạy và sửa bằng chứng

**Phạm vi:** manifest, entry, build scripts, census và một số harness kiểm thử hiện có.

- [ ] Ghi lại baseline cùng phiên bản Chrome, máy, build và settings cho mỗi lần đo.
- [ ] Ghi thời gian từ click đến phản hồi đầu tiên, từ click đến job xuất hiện, từ mở trang đến nút tải sẵn sàng. Lấy ít nhất 30 mẫu cho các thao tác ngắn để p95 có ý nghĩa; ghi cả trường hợp chậm nhất.
- [ ] Ghi video màn hình các hành trình chính, đánh dấu thời điểm nhấp nháy, nút xám, phần trăm lùi, card thay vị trí, thông báo khó hiểu hoặc thao tác buộc người dùng làm lại.
- [ ] Vẽ luồng ngắn: trang → phát hiện media → chuẩn hóa item → route tải → tiến trình → UI → lưu lịch sử. Ghi rõ hàm hoặc file sở hữu mỗi bước.
- [ ] Đo số module thực thi và thời gian init trên trang không có media, một video MP4, HLS, YouTube và feed SPA. Phân biệt module có trong bundle, có thể tới qua graph và thực sự chạy trên trang.
- [ ] Thay logic census suy diễn bằng phân tích AST theo tham số require thật, xử lý registry động và ghi rõ các cạnh chưa resolve. Đối chiếu một số trace runtime; chưa thấy chạy không đồng nghĩa code chết.
- [ ] Sửa hai suite còn timer để baseline test tự kết thúc và lỗi xuất ra đủ thông tin.

**Đầu ra:** một bảng số đo trước thay đổi, một bản đồ đường chạy và danh sách module gồm giữ, bỏ được, cần xác minh. Không thêm dashboard hoặc hệ thống telemetry production.

## Giai đoạn 2 Bỏ phần nạp thừa đã chứng minh

**Ưu tiên đầu:** `common.js`, `src/common/entry/common-entry.js`, manifest, build và test liên quan.

- [ ] Tìm mọi nơi nạp hoặc phụ thuộc common. Kiểm tra global, resource path, script tag, build và native packaging ngoài content script.
- [ ] Chạy behavior suite và Chrome smoke test khi bỏ common. Giữ kiểm tra các global cần cho content bằng tác dụng thật, thay test chỉ bắt common đứng trước content.
- [ ] Nếu xác nhận không có consumer, bỏ nạp common khỏi manifest và artifact phát hành, dọn build script, source và tài liệu chỉ dành cho bundle vô tác dụng này. Git lưu lịch sử; không giữ bản sao chết trong release.
- [ ] Kiểm tra tiếp module rỗng, alias trùng, script build không còn dùng và feature legacy không phục vụ UI hiện tại. Chỉ bỏ theo bằng chứng consumer và regression test.
- [ ] Rà các luồng onboarding, SERP, A/B testing, shortener và remote rules kế thừa. Với phần không còn thuộc sản phẩm, bỏ cả caller, handler, template, settings và test chỉ bảo vệ nó; không chỉ chặn fetch rồi giữ nguyên cả nhánh.

**Nghiệm thu:** common được loại bỏ chỉ sau kiểm chứng. Riêng hai bundle common và content đang khai báo trong mỗi frame, bỏ common giảm 501.588 byte source nạp, khoảng 17,6% tổng của hai bundle. Đây không phải cam kết CPU giảm 17,6%. Mọi phần bỏ thêm có consumer audit và kết quả test kèm theo.

## Giai đoạn 3 Giảm việc trên trang và khởi tạo đúng lúc

**Phạm vi:** site-data, extractor registries, dom-scanner, dom-helper, widget và downloads-nav.

- [ ] Tách bảng hostname hoặc matcher nhỏ khỏi module thực thi extractor. Hostname xác định trực tiếp được chọn trước; matcher phức tạp giữ thứ tự ưu tiên hiện có và chỉ khởi tạo trong nhóm ứng viên phù hợp.
- [ ] Phân biệt hai mục tiêu: chỉ khởi tạo extractor cần dùng và giảm số byte bundle nạp. Làm bước thứ nhất trước; chỉ tách bundle theo site hoặc theo nhu cầu nếu số đo chứng minh cần và cơ chế Chrome thực tế hỗ trợ.
- [ ] Giữ đường generic cho media phổ thông và iframe liên miền. Không bỏ `all_frames` trên toàn extension khi chưa kiểm tra player nhúng.
- [ ] Rà observer để chỉ xử lý subtree hoặc thuộc tính có liên quan, gộp node trùng trong một đợt, tách đọc layout khỏi ghi style và bỏ callback khi widget hoặc trang đã bị hủy.
- [ ] Thay giới hạn mutation dựa trên bỏ cả batch bằng cơ chế gộp node và xử lý có giới hạn thời gian. Khi backlog lớn, có bước đối soát mục tiêu để không bỏ sót video mới.
- [ ] Detection ảnh chỉ hoạt động khi tính năng thực sự bật; bỏ phụ thuộc A/B test legacy nếu đã có setting sản phẩm thay thế. Không gọi decode hàng loạt ảnh không phục vụ chức năng đang bật.
- [ ] Đặt vòng đời và giới hạn cho cache, danh sách media và dedupe trên feed dài; reset theo SPA navigation và giải phóng node rời DOM.
- [ ] Tránh phát cùng một media qua nhiều đường DOM, performance, runtime rồi render lặp; chuẩn hóa và dedupe ở một nơi có ownership rõ.

**Nghiệm thu:** trang không có media không khởi tạo hàng loạt extractor không liên quan; tắt detection ảnh thì không chạy scan/decode của tính năng đó; scroll feed và đổi route không tăng mãi số node giữ lại hoặc listener. Đo độ trễ phát hiện để tránh tối ưu bằng cách làm UI xuất hiện chậm.

## Giai đoạn 4 Làm rõ luồng tải và đồng bộ UI

**Phạm vi:** background.chrome, background entry/downloads, native host, popup và downloads manager.

- [ ] Tạo một hàm chọn engine tải có tên và đầu vào rõ. Browser, native và relay là các nhánh có điều kiện cụ thể; fallback có lý do và không khởi động đồng thời hai lượt tải cho một job.
- [ ] Tập trung task state và queue ở background; popup và manager gửi lệnh người dùng thay vì cùng sửa lịch sử. Tránh tạo thêm state machine framework.
- [ ] Background gửi snapshot khi UI mở và delta cho tiến trình sau đó. Ghi terminal state xong mới thông báo hoàn tất; thêm revision hoặc cơ chế chống dữ liệu cũ chỉ khi cần cho ordering.
- [ ] Hiển thị trạng thái chờ ngay khi nhận click, rồi cập nhật khi job thực sự được nhận; thất bại phải đổi sang trạng thái lỗi rõ, không để nút xám hoặc spinner chạy vô hạn.
- [ ] Chuẩn hóa thông báo lỗi thành nguyên nhân và hành động tiếp theo. Với URL hết hạn, hướng tới trang nguồn để lấy link mới; với helper thiếu, chỉ dẫn cài hoặc dùng fallback phù hợp; với lỗi quyền ghi, cho chọn thư mục khác.
- [ ] Gộp progress và giảm tần suất ghi toàn bộ history. Lưu terminal state ngay; progress hiển thị đi qua bộ nhớ và event có giới hạn tần suất.
- [ ] Bỏ poll 800 ms, poll 1 giây và reload 80/300 ms khi đường snapshot/delta đã đủ. Chỉ giữ reconciliation có điều kiện khi reconnect hoặc mở lại UI, có lý do rõ.
- [ ] Cập nhật card thay đổi thay vì dựng lại toàn danh sách; giữ menu đang mở, focus, scroll và selection.
- [ ] Thu hẹp API monkey patch còn cần cho bundle legacy vào một adapter; code đã chuyển đổi gọi trực tiếp hàm tải hoặc gửi message có tên. Dọn wrapper khi không còn caller.
- [ ] Trong cùng các thay đổi, sửa lỗi hủy queued, bảo vệ file cũ và kiểm tra dữ liệu tải từ backlog độ tin cậy; tránh thêm các tầng xử lý chồng lên engine cũ.

**Nghiệm thu:** một thao tác tải sinh một job; hủy queued không ảnh hưởng job khác; popup và manager khớp trạng thái; không còn timer polling tiến trình thường trực; tiến trình cập nhật không đóng menu hoặc làm giật danh sách.

## Giai đoạn 5 Chuyển code nghiệp vụ thành source dễ đọc

**Ưu tiên theo đường chạy:** entry và message → route tải/queue → DOM detection → widget → extractor thông dụng. Không đổi tên toàn repo một lượt.

- [ ] Với mỗi module đang dùng, đọc hành vi, xác định input/output và tác dụng phụ; đặt tên file, hàm, biến theo đúng chức năng. Đổi `var_e` thành `response` chỉ khi nó thật sự là response; không dùng rename tự động để thay việc hiểu logic.
- [ ] Chuyển generator state machine về async/await hoặc iterator tự nhiên khi đã có test hành vi tương đương; kiểm tra lại cancel, finally và xử lý exception.
- [ ] Thay numeric require bằng import có tên trong các phần đã hiểu, nối build qua các entry rõ ràng. Di chuyển từng cụm có phụ thuộc nhỏ; phần legacy còn lại được khoanh vùng và không bị mô tả là đã hoàn tất.
- [ ] Phân loại parser, crypto, Buffer và shim về vendor có nguồn gốc. Dùng chung source nếu trùng thật; không cố chia sẻ cùng một instance giữa service worker và content world vì chúng có vòng đời khác nhau.
- [ ] Chia widget và native host theo trách nhiệm đã rõ, như nhận diện node, đặt vị trí widget, danh sách chất lượng, ghi file và HTTP transfer. Chỉ tách khi giảm coupling hoặc làm ownership rõ hơn.
- [ ] Dọn template, CSS, locale và setting của tính năng đã bỏ; kiểm tra resource references để tránh asset mồ côi trong ZIP.
- [ ] Đổi tests đóng băng raw byte, số chuỗi và biến nội bộ sang test hợp đồng hoặc hành vi tương ứng. Giữ giới hạn kích thước như công cụ phát hiện regression, không làm lý do giữ code khó hiểu.

**Nghiệm thu:** các luồng cốt lõi đã chuyển đổi có tên theo nghiệp vụ, import có nghĩa, không còn state machine sinh tự động trong business logic. Mỗi phần legacy hoặc vendor còn giữ có lý do và đường gọi rõ. Không đo thành công chỉ bằng số file tách ra hay số biến một chữ bị thay tên.

## Giai đoạn 6 Đối chiếu độ mượt và phát hành

Mỗi kịch bản chạy ít nhất ba lượt trên cùng máy, settings và bản Chrome; so sánh median và p95 khi số mẫu đủ. Ghi thời gian khởi tạo extension, thời gian phát hiện media, main-thread time quy cho extension, long task, dropped frames của video, heap hoặc node giữ lại, số storage write, số message và kích thước runtime. Số liệu trước sau phải cùng cách đo.

Mốc nghiệm thu đề xuất: các thao tác ngắn có ít nhất 30 mẫu; p95 từ click đến phản hồi nhìn thấy không quá 150 ms trên máy đo; phản hồi mạng chậm phải có trạng thái chờ trong 300 ms. P95 thời gian hiện nút tải và dropped frames không được xấu đi quá 10% so với baseline ở cùng kịch bản. Mục tiêu giảm CPU hoặc dung lượng được ghi riêng sau khi có baseline; không đổi một lỗi dễ nhận thấy của người dùng lấy số byte nhỏ hơn.

| Kịch bản | Điều cần xác nhận |
| --- | --- |
| Trang tin không có media và trang có nhiều iframe | Công việc khi idle thấp, common không còn nạp, không init extractor hàng loạt |
| MP4, HLS, DASH và player iframe | Phát hiện và chọn chất lượng đúng, không tăng thời gian chờ UI |
| YouTube đang phát trong lúc tải | Thay đổi không làm tăng giật hình hoặc main-thread work của extension |
| TikTok hoặc Facebook feed cuộn và đổi route nhiều lần | Listener, cache và node giữ lại không tăng theo số route vô hạn |
| Popup và manager có nhiều mục lịch sử | Progress cập nhật đúng card, giữ focus/menu/scroll, không poll hoặc render cả danh sách lặp |
| Native tải, hủy queued, retry, helper mất kết nối | Job rõ danh tính, queue tiếp tục, file cũ còn nguyên |

- [ ] Chạy behavior suites, build từ source và test lại các bundle sinh ra.
- [ ] Kiểm tra ZIP chỉ chứa runtime và asset cần thiết; không đóng gói audit bundle hoặc file máy phát triển.
- [ ] Ghi bảng trước sau cho mỗi tối ưu; thay đổi làm code phức tạp hơn mà không cải thiện đo được phải được giản lược hoặc bỏ.
- [ ] Chạy toàn bộ hành trình trong bảng trải nghiệm, gồm click liên tiếp, mạng chậm hoặc ngắt, mở hai UI, đổi tab và khởi động lại browser. Ghi kết quả pass hoặc fail cùng video/trace cho lỗi nhìn thấy.
- [ ] Ghi phần chưa kiểm chứng thật trên website hoặc hệ điều hành; không đổi test pass thành tuyên bố đã mượt trên mọi môi trường.

## Cách chia thay đổi

Thực hiện theo các nhóm nhỏ: bằng chứng và baseline; bỏ common cùng phần chết đã chứng minh; giảm eager init và observer work; thống nhất state/UI; chuyển source nghiệp vụ; kiểm chứng cuối. Mỗi nhóm nêu phần bỏ được, hành vi giữ lại và số đo liên quan.

Giữ các bản sửa ngăn mất file và hủy nhầm khi chúng được kiểm chứng; không revert về hành vi mất dữ liệu để lấy code ngắn hơn. Không tạo lịch hoàn tất cố định trước khi có baseline cho phần runtime và phạm vi legacy thực sự phải chuyển đổi.
