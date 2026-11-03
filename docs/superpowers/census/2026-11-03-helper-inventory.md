# Báo cáo phân loại 196 Helper Platform (Giai đoạn 1 & 3)

Ngày phân tích: 03/11/2026.
Phạm vi: 196 file `helper-*.js` trong `src/content/platform/`.
Công cụ: AST Parser (Acorn 8.19) phân tích toàn bộ cây gọi phụ thuộc `requireFn(ID)`.

## 1. Tổng quan phân loại

| Nhóm | Số lượng | Mô tả & Hướng xử lý |
| --- | --- | --- |
| `empty-stub` | 12 | Hàm rỗng `function() {}`, không trả về giá trị hoặc tác dụng phụ |
| `builtin-alias` | 7 | Alias của standard JavaScript built-ins (`TypeError`, `Object`, `Reflect`) |
| `vendor-crypto` | 46 | Thuật toán băm/mã hóa (crypto-js, hash, digest, hmac) |
| `vendor-binary` | 31 | Xử lý mảng byte, nhị phân (`Buffer`, `Uint8Array`) |
| `vendor-async` | 0 | Các module sinh mã async/regenerator |
| `business-helper` | 100 | Tiện ích bóc tách URL, query selector, chuỗi, HTML extractor |

## 2. Nhóm Empty Stubs (12 modules)
Các module này chỉ chứa hàm rỗng, có thể chuẩn hóa hoặc gom:
- **Module 590** (`platform/helper-590.js`, 89 B): 1 callers [462]
- **Module 592** (`platform/helper-592.js`, 89 B): 1 callers [591]
- **Module 617** (`platform/helper-617.js`, 89 B): 0 callers []
- **Module 619** (`platform/helper-619.js`, 89 B): 0 callers []
- **Module 620** (`platform/helper-620.js`, 89 B): 1 callers [430]
- **Module 626** (`platform/helper-626.js`, 89 B): 1 callers [487]
- **Module 628** (`platform/helper-628.js`, 89 B): 1 callers [627]
- **Module 631** (`platform/helper-631.js`, 89 B): 1 callers [433]
- **Module 633** (`platform/helper-633.js`, 89 B): 1 callers [126]
- **Module 653** (`platform/helper-653.js`, 89 B): 0 callers []
- **Module 669** (`platform/helper-669.js`, 89 B): 0 callers []
- **Module 672** (`platform/helper-672.js`, 89 B): 0 callers []

## 3. Nhóm Built-in Aliases (7 modules)
- **Module 115** (`platform/helper-115.js`, 149 B): Xuất `TypeError` — 5 callers [140, 141, 575, 583, 584]
- **Module 121** (`platform/helper-121.js`, 220 B): Xuất `Function` — 5 callers [140, 141, 169, 424, 586]
- **Module 137** (`platform/helper-137.js`, 163 B): Xuất `Function` — 3 callers [140, 141, 169]
- **Module 142** (`platform/helper-142.js`, 164 B): Xuất `Function` — 3 callers [140, 169, 586]
- **Module 152** (`platform/helper-152.js`, 146 B): Xuất `Object` — 2 callers [140, 154]
- **Module 153** (`platform/helper-153.js`, 205 B): Xuất `Reflect.getPrototypeOf` — 2 callers [140, 168]
- **Module 419** (`platform/helper-419.js`, 171 B): Xuất `Object` — 1 callers [129]

## 4. Danh sách đầy đủ 196 Helper Modules

| ID | File | Dung lượng | Nhóm | Chi tiết | Callers | Dependencies |
|:---|:---|:---|:---|:---|:---|:---|
| 96 | `platform/helper-96.js` | 547 B | `business-helper` | - | 4 | 0 |
| 115 | `platform/helper-115.js` | 149 B | `builtin-alias` | TypeError | 5 | 0 |
| 116 | `platform/helper-116.js` | 386 B | `business-helper` | - | 12 | 0 |
| 117 | `platform/helper-117.js` | 2342 B | `business-helper` | - | 12 | 3 |
| 121 | `platform/helper-121.js` | 220 B | `builtin-alias` | Function | 5 | 1 |
| 122 | `platform/helper-122.js` | 6954 B | `business-helper` | - | 10 | 2 |
| 129 | `platform/helper-129.js` | 304 B | `business-helper` | - | 5 | 1 |
| 130 | `platform/helper-130.js` | 2258 B | `vendor-crypto` | Crypto/Hash utility | 8 | 5 |
| 136 | `platform/helper-136.js` | 292 B | `business-helper` | - | 4 | 0 |
| 137 | `platform/helper-137.js` | 163 B | `builtin-alias` | Function | 3 | 0 |
| 139 | `platform/helper-139.js` | 994 B | `vendor-crypto` | Crypto/Hash utility | 6 | 3 |
| 141 | `platform/helper-141.js` | 490 B | `business-helper` | - | 3 | 4 |
| 142 | `platform/helper-142.js` | 164 B | `builtin-alias` | Function | 3 | 0 |
| 143 | `platform/helper-143.js` | 2030 B | `business-helper` | - | 4 | 5 |
| 144 | `platform/helper-144.js` | 1707 B | `vendor-crypto` | Crypto/Hash utility | 6 | 2 |
| 145 | `platform/helper-145.js` | 2030 B | `business-helper` | - | 4 | 5 |
| 150 | `platform/helper-150.js` | 822 B | `vendor-crypto` | Crypto/Hash utility | 5 | 5 |
| 151 | `platform/helper-151.js` | 533 B | `business-helper` | - | 2 | 2 |
| 152 | `platform/helper-152.js` | 146 B | `builtin-alias` | Object | 2 | 0 |
| 153 | `platform/helper-153.js` | 205 B | `builtin-alias` | Reflect.getPrototypeOf | 2 | 0 |
| 154 | `platform/helper-154.js` | 216 B | `business-helper` | - | 2 | 1 |
| 155 | `platform/helper-155.js` | 418 B | `vendor-binary` | Buffer/Binary utility | 5 | 1 |
| 156 | `platform/helper-156.js` | 2391 B | `vendor-crypto` | Crypto/Hash utility | 5 | 2 |
| 157 | `platform/helper-157.js` | 332 B | `business-helper` | - | 5 | 6 |
| 158 | `platform/helper-158.js` | 305 B | `vendor-binary` | Buffer/Binary utility | 3 | 3 |
| 165 | `platform/helper-165.js` | 1984 B | `vendor-binary` | Buffer/Binary utility | 4 | 3 |
| 166 | `platform/helper-166.js` | 151 B | `business-helper` | - | 2 | 0 |
| 167 | `platform/helper-167.js` | 1235 B | `business-helper` | - | 2 | 0 |
| 168 | `platform/helper-168.js` | 622 B | `business-helper` | - | 2 | 3 |
| 169 | `platform/helper-169.js` | 353 B | `business-helper` | - | 2 | 4 |
| 171 | `platform/helper-171.js` | 1230 B | `vendor-crypto` | Crypto/Hash utility | 4 | 2 |
| 172 | `platform/helper-172.js` | 8805 B | `business-helper` | - | 4 | 2 |
| 173 | `platform/helper-173.js` | 3495 B | `vendor-crypto` | Crypto/Hash utility | 4 | 6 |
| 405 | `platform/helper-405.js` | 5502 B | `vendor-crypto` | Crypto/Hash utility | 3 | 3 |
| 406 | `platform/helper-406.js` | 145 B | `business-helper` | - | 1 | 0 |
| 407 | `platform/helper-407.js` | 149 B | `business-helper` | - | 1 | 0 |
| 408 | `platform/helper-408.js` | 150 B | `business-helper` | - | 1 | 0 |
| 409 | `platform/helper-409.js` | 154 B | `business-helper` | - | 1 | 0 |
| 410 | `platform/helper-410.js` | 148 B | `business-helper` | - | 1 | 0 |
| 411 | `platform/helper-411.js` | 148 B | `business-helper` | - | 1 | 0 |
| 412 | `platform/helper-412.js` | 150 B | `business-helper` | - | 1 | 0 |
| 413 | `platform/helper-413.js` | 148 B | `business-helper` | - | 1 | 0 |
| 414 | `platform/helper-414.js` | 148 B | `business-helper` | - | 1 | 0 |
| 415 | `platform/helper-415.js` | 148 B | `business-helper` | - | 1 | 0 |
| 416 | `platform/helper-416.js` | 150 B | `business-helper` | - | 1 | 0 |
| 417 | `platform/helper-417.js` | 289 B | `business-helper` | - | 1 | 1 |
| 418 | `platform/helper-418.js` | 209 B | `business-helper` | - | 1 | 0 |
| 419 | `platform/helper-419.js` | 171 B | `builtin-alias` | Object | 1 | 0 |
| 420 | `platform/helper-420.js` | 409 B | `business-helper` | - | 1 | 1 |
| 421 | `platform/helper-421.js` | 747 B | `business-helper` | - | 1 | 2 |
| 422 | `platform/helper-422.js` | 1812 B | `business-helper` | - | 1 | 0 |
| 423 | `platform/helper-423.js` | 199 B | `business-helper` | - | 1 | 0 |
| 424 | `platform/helper-424.js` | 290 B | `business-helper` | - | 1 | 1 |
| 425 | `platform/helper-425.js` | 1403 B | `vendor-binary` | Buffer/Binary utility | 3 | 1 |
| 426 | `platform/helper-426.js` | 609 B | `vendor-crypto` | Crypto/Hash utility | 3 | 6 |
| 427 | `platform/helper-427.js` | 3099 B | `vendor-binary` | Buffer/Binary utility | 3 | 1 |
| 428 | `platform/helper-428.js` | 708 B | `vendor-crypto` | Crypto/Hash utility | 3 | 3 |
| 429 | `platform/helper-429.js` | 549 B | `business-helper` | - | 3 | 8 |
| 430 | `platform/helper-430.js` | 1466 B | `vendor-crypto` | Crypto/Hash utility | 3 | 1 |
| 431 | `platform/helper-431.js` | 1403 B | `vendor-binary` | Buffer/Binary utility | 3 | 1 |
| 432 | `platform/helper-432.js` | 1466 B | `vendor-binary` | Buffer/Binary utility | 3 | 3 |
| 434 | `platform/helper-434.js` | 367 B | `business-helper` | - | 3 | 7 |
| 435 | `platform/helper-435.js` | 6121 B | `vendor-crypto` | Crypto/Hash utility | 3 | 4 |
| 436 | `platform/helper-436.js` | 487 B | `vendor-crypto` | Crypto/Hash utility | 3 | 5 |
| 462 | `platform/helper-462.js` | 19007 B | `vendor-binary` | Buffer/Binary utility | 2 | 14 |
| 463 | `platform/helper-463.js` | 150 B | `business-helper` | - | 2 | 1 |
| 464 | `platform/helper-464.js` | 1674 B | `business-helper` | - | 2 | 1 |
| 465 | `platform/helper-465.js` | 12686 B | `vendor-binary` | Buffer/Binary utility | 2 | 11 |
| 466 | `platform/helper-466.js` | 3152 B | `business-helper` | - | 2 | 3 |
| 467 | `platform/helper-467.js` | 3624 B | `vendor-crypto` | Crypto/Hash utility | 2 | 3 |
| 468 | `platform/helper-468.js` | 7591 B | `vendor-crypto` | Crypto/Hash utility | 2 | 3 |
| 469 | `platform/helper-469.js` | 1811 B | `vendor-crypto` | Crypto/Hash utility | 2 | 7 |
| 470 | `platform/helper-470.js` | 240 B | `vendor-crypto` | Crypto/Hash utility | 2 | 1 |
| 471 | `platform/helper-471.js` | 2394 B | `vendor-crypto` | Crypto/Hash utility | 2 | 0 |
| 472 | `platform/helper-472.js` | 194 B | `business-helper` | - | 2 | 2 |
| 473 | `platform/helper-473.js` | 593 B | `business-helper` | - | 2 | 0 |
| 474 | `platform/helper-474.js` | 485 B | `business-helper` | - | 2 | 2 |
| 475 | `platform/helper-475.js` | 3117 B | `vendor-crypto` | Crypto/Hash utility | 2 | 7 |
| 476 | `platform/helper-476.js` | 642 B | `vendor-binary` | Buffer/Binary utility | 2 | 2 |
| 477 | `platform/helper-477.js` | 6645 B | `business-helper` | - | 2 | 0 |
| 478 | `platform/helper-478.js` | 3677 B | `business-helper` | - | 2 | 4 |
| 479 | `platform/helper-479.js` | 1048 B | `vendor-binary` | Buffer/Binary utility | 1 | 3 |
| 480 | `platform/helper-480.js` | 342 B | `business-helper` | - | 2 | 0 |
| 484 | `platform/helper-484.js` | 2212 B | `business-helper` | - | 2 | 3 |
| 486 | `platform/helper-486.js` | 2555 B | `business-helper` | - | 2 | 2 |
| 487 | `platform/helper-487.js` | 19007 B | `vendor-binary` | Buffer/Binary utility | 2 | 14 |
| 488 | `platform/helper-488.js` | 150 B | `business-helper` | - | 2 | 1 |
| 489 | `platform/helper-489.js` | 1674 B | `business-helper` | - | 2 | 1 |
| 490 | `platform/helper-490.js` | 12686 B | `vendor-binary` | Buffer/Binary utility | 2 | 11 |
| 491 | `platform/helper-491.js` | 3152 B | `business-helper` | - | 2 | 3 |
| 492 | `platform/helper-492.js` | 1340 B | `business-helper` | - | 2 | 0 |
| 493 | `platform/helper-493.js` | 267 B | `business-helper` | - | 2 | 4 |
| 494 | `platform/helper-494.js` | 1268 B | `business-helper` | - | 2 | 1 |
| 495 | `platform/helper-495.js` | 3190 B | `vendor-crypto` | Crypto/Hash utility | 2 | 4 |
| 496 | `platform/helper-496.js` | 8480 B | `vendor-crypto` | Crypto/Hash utility | 2 | 3 |
| 497 | `platform/helper-497.js` | 2921 B | `vendor-binary` | Buffer/Binary utility | 1 | 3 |
| 498 | `platform/helper-498.js` | 406 B | `business-helper` | - | 2 | 1 |
| 499 | `platform/helper-499.js` | 7229 B | `vendor-binary` | Buffer/Binary utility | 2 | 2 |
| 500 | `platform/helper-500.js` | 7296 B | `vendor-binary` | Buffer/Binary utility | 2 | 3 |
| 501 | `platform/helper-501.js` | 267 B | `business-helper` | - | 2 | 0 |
| 502 | `platform/helper-502.js` | 583 B | `vendor-crypto` | Crypto/Hash utility | 2 | 2 |
| 503 | `platform/helper-503.js` | 268 B | `business-helper` | - | 2 | 0 |
| 504 | `platform/helper-504.js` | 376 B | `vendor-binary` | Buffer/Binary utility | 2 | 2 |
| 572 | `platform/helper-572.js` | 2207 B | `vendor-crypto` | Crypto/Hash utility | 1 | 4 |
| 573 | `platform/helper-573.js` | 642 B | `vendor-binary` | Buffer/Binary utility | 1 | 2 |
| 574 | `platform/helper-574.js` | 237 B | `business-helper` | - | 1 | 0 |
| 575 | `platform/helper-575.js` | 412 B | `business-helper` | - | 1 | 3 |
| 576 | `platform/helper-576.js` | 239 B | `business-helper` | - | 1 | 1 |
| 577 | `platform/helper-577.js` | 2381 B | `business-helper` | - | 1 | 8 |
| 578 | `platform/helper-578.js` | 1463 B | `business-helper` | - | 1 | 1 |
| 579 | `platform/helper-579.js` | 2336 B | `business-helper` | - | 1 | 0 |
| 580 | `platform/helper-580.js` | 522 B | `business-helper` | - | 1 | 2 |
| 581 | `platform/helper-581.js` | 333 B | `vendor-binary` | Buffer/Binary utility | 1 | 0 |
| 582 | `platform/helper-582.js` | 604 B | `business-helper` | - | 1 | 4 |
| 583 | `platform/helper-583.js` | 1123 B | `business-helper` | - | 1 | 5 |
| 584 | `platform/helper-584.js` | 2063 B | `business-helper` | - | 1 | 4 |
| 585 | `platform/helper-585.js` | 447 B | `business-helper` | - | 1 | 1 |
| 586 | `platform/helper-586.js` | 334 B | `business-helper` | - | 1 | 3 |
| 587 | `platform/helper-587.js` | 247 B | `business-helper` | - | 1 | 1 |
| 588 | `platform/helper-588.js` | 366 B | `business-helper` | - | 1 | 5 |
| 589 | `platform/helper-589.js` | 237 B | `business-helper` | - | 1 | 0 |
| 590 | `platform/helper-590.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 591 | `platform/helper-591.js` | 2046 B | `vendor-binary` | Buffer/Binary utility | 1 | 2 |
| 592 | `platform/helper-592.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 593 | `platform/helper-593.js` | 528 B | `business-helper` | - | 1 | 3 |
| 594 | `platform/helper-594.js` | 2119 B | `vendor-crypto` | Crypto/Hash utility | 1 | 3 |
| 595 | `platform/helper-595.js` | 2194 B | `vendor-crypto` | Crypto/Hash utility | 1 | 3 |
| 596 | `platform/helper-596.js` | 1009 B | `vendor-crypto` | Crypto/Hash utility | 1 | 4 |
| 597 | `platform/helper-597.js` | 1295 B | `vendor-crypto` | Crypto/Hash utility | 1 | 4 |
| 598 | `platform/helper-598.js` | 1098 B | `vendor-crypto` | Crypto/Hash utility | 1 | 3 |
| 599 | `platform/helper-599.js` | 154 B | `business-helper` | - | 1 | 1 |
| 600 | `platform/helper-600.js` | 2934 B | `vendor-crypto` | Crypto/Hash utility | 1 | 6 |
| 601 | `platform/helper-601.js` | 2278 B | `business-helper` | - | 1 | 5 |
| 602 | `platform/helper-602.js` | 1427 B | `vendor-binary` | Buffer/Binary utility | 1 | 4 |
| 603 | `platform/helper-603.js` | 291 B | `business-helper` | - | 1 | 5 |
| 604 | `platform/helper-604.js` | 1691 B | `business-helper` | - | 1 | 2 |
| 605 | `platform/helper-605.js` | 1611 B | `business-helper` | - | 1 | 4 |
| 607 | `platform/helper-607.js` | 302 B | `business-helper` | - | 1 | 0 |
| 608 | `platform/helper-608.js` | 535 B | `business-helper` | - | 1 | 1 |
| 609 | `platform/helper-609.js` | 1021 B | `vendor-binary` | Buffer/Binary utility | 1 | 2 |
| 610 | `platform/helper-610.js` | 622 B | `vendor-binary` | Buffer/Binary utility | 1 | 1 |
| 611 | `platform/helper-611.js` | 1052 B | `vendor-binary` | Buffer/Binary utility | 1 | 1 |
| 612 | `platform/helper-612.js` | 665 B | `vendor-binary` | Buffer/Binary utility | 1 | 2 |
| 613 | `platform/helper-613.js` | 1865 B | `vendor-crypto` | Crypto/Hash utility | 1 | 1 |
| 615 | `platform/helper-615.js` | 449 B | `business-helper` | - | 1 | 0 |
| 616 | `platform/helper-616.js` | 1267 B | `vendor-binary` | Buffer/Binary utility | 1 | 4 |
| 617 | `platform/helper-617.js` | 89 B | `empty-stub` | Empty function stub | 0 | 0 |
| 619 | `platform/helper-619.js` | 89 B | `empty-stub` | Empty function stub | 0 | 0 |
| 620 | `platform/helper-620.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 621 | `platform/helper-621.js` | 7097 B | `business-helper` | - | 1 | 0 |
| 622 | `platform/helper-622.js` | 3709 B | `vendor-binary` | Buffer/Binary utility | 1 | 5 |
| 623 | `platform/helper-623.js` | 2545 B | `vendor-crypto` | Crypto/Hash utility | 1 | 7 |
| 624 | `platform/helper-624.js` | 366 B | `business-helper` | - | 1 | 5 |
| 625 | `platform/helper-625.js` | 237 B | `business-helper` | - | 1 | 0 |
| 626 | `platform/helper-626.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 627 | `platform/helper-627.js` | 2046 B | `vendor-binary` | Buffer/Binary utility | 1 | 2 |
| 628 | `platform/helper-628.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 629 | `platform/helper-629.js` | 528 B | `business-helper` | - | 1 | 3 |
| 630 | `platform/helper-630.js` | 4743 B | `vendor-crypto` | Crypto/Hash utility | 1 | 7 |
| 631 | `platform/helper-631.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 633 | `platform/helper-633.js` | 89 B | `empty-stub` | Empty function stub | 1 | 0 |
| 634 | `platform/helper-634.js` | 20980 B | `business-helper` | - | 1 | 4 |
| 635 | `platform/helper-635.js` | 4111 B | `business-helper` | - | 1 | 4 |
| 636 | `platform/helper-636.js` | 9812 B | `business-helper` | - | 1 | 4 |
| 637 | `platform/helper-637.js` | 299 B | `vendor-crypto` | Crypto/Hash utility | 1 | 5 |
| 638 | `platform/helper-638.js` | 1895 B | `vendor-crypto` | Crypto/Hash utility | 1 | 3 |
| 639 | `platform/helper-639.js` | 763 B | `vendor-crypto` | Crypto/Hash utility | 1 | 2 |
| 640 | `platform/helper-640.js` | 864 B | `vendor-crypto` | Crypto/Hash utility | 1 | 2 |
| 641 | `platform/helper-641.js` | 3736 B | `vendor-crypto` | Crypto/Hash utility | 1 | 2 |
| 642 | `platform/helper-642.js` | 1319 B | `vendor-crypto` | Crypto/Hash utility | 1 | 2 |
| 644 | `platform/helper-644.js` | 6741 B | `vendor-crypto` | Crypto/Hash utility | 1 | 7 |
| 645 | `platform/helper-645.js` | 2912 B | `vendor-crypto` | Crypto/Hash utility | 1 | 3 |
| 646 | `platform/helper-646.js` | 2788 B | `business-helper` | - | 1 | 2 |
| 647 | `platform/helper-647.js` | 3422 B | `business-helper` | - | 1 | 2 |
| 648 | `platform/helper-648.js` | 3163 B | `vendor-crypto` | Crypto/Hash utility | 1 | 5 |
| 649 | `platform/helper-649.js` | 2195 B | `vendor-crypto` | Crypto/Hash utility | 1 | 1 |
| 650 | `platform/helper-650.js` | 1583 B | `business-helper` | - | 1 | 2 |
| 651 | `platform/helper-651.js` | 2994 B | `business-helper` | - | 1 | 2 |
| 653 | `platform/helper-653.js` | 89 B | `empty-stub` | Empty function stub | 0 | 0 |
| 654 | `platform/helper-654.js` | 1594 B | `business-helper` | - | 1 | 3 |
| 655 | `platform/helper-655.js` | 2624 B | `business-helper` | - | 1 | 0 |
| 656 | `platform/helper-656.js` | 2576 B | `vendor-crypto` | Crypto/Hash utility | 1 | 1 |
| 659 | `platform/helper-659.js` | 184 B | `business-helper` | - | 1 | 2 |
| 660 | `platform/helper-660.js` | 1169 B | `vendor-binary` | Buffer/Binary utility | 1 | 3 |
| 661 | `platform/helper-661.js` | 184 B | `business-helper` | - | 1 | 2 |
| 662 | `platform/helper-662.js` | 711 B | `business-helper` | - | 1 | 2 |
| 663 | `platform/helper-663.js` | 2260 B | `business-helper` | - | 1 | 1 |
| 664 | `platform/helper-664.js` | 592 B | `business-helper` | - | 1 | 0 |
| 666 | `platform/helper-666.js` | 2751 B | `vendor-binary` | Buffer/Binary utility | 1 | 5 |
| 667 | `platform/helper-667.js` | 2886 B | `vendor-binary` | Buffer/Binary utility | 1 | 3 |
| 669 | `platform/helper-669.js` | 89 B | `empty-stub` | Empty function stub | 0 | 0 |
| 670 | `platform/helper-670.js` | 435 B | `business-helper` | - | 1 | 2 |
| 671 | `platform/helper-671.js` | 2416 B | `vendor-crypto` | Crypto/Hash utility | 1 | 9 |
| 672 | `platform/helper-672.js` | 89 B | `empty-stub` | Empty function stub | 0 | 0 |
| 673 | `platform/helper-673.js` | 2686 B | `vendor-crypto` | Crypto/Hash utility | 1 | 8 |
| 674 | `platform/helper-674.js` | 3071 B | `vendor-crypto` | Crypto/Hash utility | 1 | 4 |
