# Unreachable Modules Keep/Drop Ledger (493 Modules)

Date: 2026-11-01  
Audit Reference: Task #rgrcla  

## 1. Summary

- **Total Shipped Modules in Registry:** 649  
- **Active Reachable Modules (Entry 543 Graph):** 156 (KEEP)  
- **Unreachable Modules:** 493 (CANDIDATE DROP - RETAINED UNMODIFIED)  
- **Policy:** **ZERO DELETIONS**. All 493 modules remain in src/content/ to preserve historical integrity until explicit owner approval.

### Category Breakdown

| Directory | Module Count | Description |
| :--- | :--- | :--- |
| platform/ | 246 | Legacy site extractors (e.g. defunct 2014-2018 Vietnamese media/music sites) |
| detector/ | 196 | Unreferenced media detector & parser routines |
| endor/ | 31 | Unreferenced third-party / legacy shims |
| crypto/ | 16 | Unreferenced cryptographic / math curve routines |
| providers/ | 4 | Unreferenced media provider wrappers |
| **Total** | **493** | **Full unreachable set** |

## 2. Complete Per-Module Ledger

| Module ID | Path | Category | Size (Bytes) | Status | Reason |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 20 | detector/module-20.js | detector | 8738 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 23 | platform/module-23.js | platform | 1192 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 31 | crypto/module-31.js | crypto | 6176 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 45 | crypto/module-45.js | crypto | 12813 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 81 | detector/module-81.js | detector | 878 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 94 | detector/module-94.js | detector | 3508 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 96 | platform/module-96.js | platform | 342 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 113 | detector/module-113.js | detector | 4039 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 114 | crypto/module-114.js | crypto | 2074 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 115 | platform/module-115.js | platform | 96 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 116 | platform/module-116.js | platform | 214 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 117 | platform/module-117.js | platform | 1081 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 119 | detector/module-119.js | detector | 13883 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 120 | detector/module-120.js | detector | 9347 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 121 | platform/module-121.js | platform | 126 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 122 | platform/module-122.js | platform | 2886 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 126 | vendor/elliptic/module-126.js | vendor | 43355 B | candidate_drop | Unreferenced vendored library or shim |
| 127 | detector/module-127.js | detector | 10522 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 128 | detector/module-128.js | detector | 8320 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 129 | platform/module-129.js | platform | 141 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 130 | platform/module-130.js | platform | 1409 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 133 | crypto/module-133.js | crypto | 6280 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 136 | platform/module-136.js | platform | 163 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 137 | platform/module-137.js | platform | 110 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 139 | platform/module-139.js | platform | 634 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 140 | platform/module-140.js | platform | 8614 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 141 | platform/module-141.js | platform | 232 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 142 | platform/module-142.js | platform | 111 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 143 | platform/module-143.js | platform | 1259 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 144 | platform/module-144.js | platform | 1007 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 145 | platform/module-145.js | platform | 1259 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 147 | detector/module-147.js | detector | 3836 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 149 | detector/module-149.js | detector | 568 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 150 | platform/module-150.js | platform | 402 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 151 | platform/module-151.js | platform | 236 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 152 | platform/module-152.js | platform | 93 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 153 | platform/module-153.js | platform | 144 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 154 | platform/module-154.js | platform | 122 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 155 | platform/module-155.js | platform | 207 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 156 | platform/module-156.js | platform | 1441 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 157 | platform/module-157.js | platform | 174 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 158 | platform/module-158.js | platform | 181 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 161 | crypto/module-161.js | crypto | 77687 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 162 | detector/module-162.js | detector | 25638 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 163 | crypto/module-163.js | crypto | 27230 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 165 | platform/module-165.js | platform | 1210 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 166 | platform/module-166.js | platform | 98 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 167 | platform/module-167.js | platform | 918 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 168 | platform/module-168.js | platform | 298 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 169 | platform/module-169.js | platform | 141 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 170 | crypto/module-170.js | crypto | 2924 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 171 | platform/module-171.js | platform | 600 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 172 | platform/module-172.js | platform | 4723 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 173 | platform/module-173.js | platform | 2182 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 181 | detector/module-181.js | detector | 3407 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 182 | detector/module-182.js | detector | 5042 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 183 | detector/module-183.js | detector | 549 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 184 | detector/module-184.js | detector | 4378 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 185 | detector/module-185.js | detector | 716 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 186 | platform/module-186.js | platform | 178 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 187 | detector/module-187.js | detector | 5165 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 188 | detector/module-188.js | detector | 5211 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 189 | detector/module-189.js | detector | 3503 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 190 | detector/module-190.js | detector | 3854 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 198 | detector/module-198.js | detector | 5147 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 199 | detector/module-199.js | detector | 1000 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 200 | detector/module-200.js | detector | 4718 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 201 | detector/module-201.js | detector | 7469 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 202 | detector/module-202.js | detector | 3633 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 203 | detector/module-203.js | detector | 631 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 204 | platform/module-204.js | platform | 427 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 205 | platform/module-205.js | platform | 412 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 206 | detector/module-206.js | detector | 2337 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 207 | detector/module-207.js | detector | 2169 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 208 | vendor/module-208.js | vendor | 3161 B | candidate_drop | Unreferenced vendored library or shim |
| 209 | platform/module-209.js | platform | 724 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 210 | detector/module-210.js | detector | 628 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 211 | detector/module-211.js | detector | 498 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 212 | detector/module-212.js | detector | 6898 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 213 | detector/module-213.js | detector | 572 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 214 | detector/module-214.js | detector | 9641 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 215 | detector/module-215.js | detector | 3490 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 216 | detector/module-216.js | detector | 4292 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 217 | detector/module-217.js | detector | 8545 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 218 | detector/module-218.js | detector | 3388 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 219 | detector/module-219.js | detector | 690 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 220 | detector/module-220.js | detector | 3130 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 221 | detector/module-221.js | detector | 345 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 222 | detector/module-222.js | detector | 370 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 223 | detector/module-223.js | detector | 342 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 224 | detector/module-224.js | detector | 4522 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 225 | detector/module-225.js | detector | 6203 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 226 | vendor/module-226.js | vendor | 3188 B | candidate_drop | Unreferenced vendored library or shim |
| 227 | detector/module-227.js | detector | 259 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 228 | detector/module-228.js | detector | 3677 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 229 | detector/module-229.js | detector | 3586 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 230 | detector/module-230.js | detector | 8454 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 231 | detector/module-231.js | detector | 2576 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 232 | detector/module-232.js | detector | 19978 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 233 | detector/module-233.js | detector | 1292 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 234 | detector/module-234.js | detector | 1143 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 235 | detector/module-235.js | detector | 3193 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 236 | detector/module-236.js | detector | 3343 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 237 | platform/module-237.js | platform | 229 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 238 | detector/module-238.js | detector | 421 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 239 | detector/module-239.js | detector | 480 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 240 | detector/module-240.js | detector | 310 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 241 | detector/module-241.js | detector | 3202 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 242 | crypto/module-242.js | crypto | 11366 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 243 | detector/module-243.js | detector | 7792 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 244 | detector/module-244.js | detector | 3238 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 245 | detector/module-245.js | detector | 5707 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 246 | platform/module-246.js | platform | 161 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 247 | detector/module-247.js | detector | 777 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 248 | detector/module-248.js | detector | 3401 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 249 | detector/module-249.js | detector | 986 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 250 | platform/module-250.js | platform | 362 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 251 | detector/module-251.js | detector | 3051 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 252 | detector/module-252.js | detector | 3367 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 253 | platform/module-253.js | platform | 323 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 254 | detector/module-254.js | detector | 11560 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 255 | detector/module-255.js | detector | 5153 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 256 | detector/module-256.js | detector | 268 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 257 | detector/module-257.js | detector | 199 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 258 | detector/module-258.js | detector | 4142 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 259 | vendor/module-259.js | vendor | 2966 B | candidate_drop | Unreferenced vendored library or shim |
| 260 | detector/module-260.js | detector | 3667 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 261 | detector/module-261.js | detector | 3162 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 262 | detector/module-262.js | detector | 5744 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 263 | detector/module-263.js | detector | 3725 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 264 | detector/module-264.js | detector | 3912 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 265 | detector/module-265.js | detector | 276 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 266 | detector/module-266.js | detector | 3884 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 267 | platform/module-267.js | platform | 282 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 268 | platform/module-268.js | platform | 217 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 269 | detector/module-269.js | detector | 7161 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 270 | vendor/module-270.js | vendor | 3156 B | candidate_drop | Unreferenced vendored library or shim |
| 271 | platform/module-271.js | platform | 487 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 272 | detector/module-272.js | detector | 1036 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 273 | detector/module-273.js | detector | 3606 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 274 | detector/module-274.js | detector | 769 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 275 | detector/module-275.js | detector | 617 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 276 | platform/module-276.js | platform | 420 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 277 | vendor/module-277.js | vendor | 3495 B | candidate_drop | Unreferenced vendored library or shim |
| 278 | detector/module-278.js | detector | 835 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 279 | platform/module-279.js | platform | 509 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 280 | detector/module-280.js | detector | 3358 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 281 | detector/module-281.js | detector | 7670 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 282 | detector/module-282.js | detector | 315 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 283 | detector/module-283.js | detector | 559 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 284 | vendor/module-284.js | vendor | 3952 B | candidate_drop | Unreferenced vendored library or shim |
| 285 | detector/module-285.js | detector | 594 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 286 | detector/module-286.js | detector | 4103 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 287 | detector/module-287.js | detector | 322 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 288 | vendor/module-288.js | vendor | 2951 B | candidate_drop | Unreferenced vendored library or shim |
| 289 | detector/module-289.js | detector | 278 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 290 | detector/module-290.js | detector | 640 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 291 | detector/module-291.js | detector | 3572 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 292 | detector/module-292.js | detector | 684 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 293 | detector/module-293.js | detector | 6395 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 294 | detector/module-294.js | detector | 7248 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 295 | detector/module-295.js | detector | 8096 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 296 | detector/module-296.js | detector | 4891 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 297 | detector/module-297.js | detector | 2415 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 298 | detector/module-298.js | detector | 4842 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 299 | platform/module-299.js | platform | 567 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 300 | detector/module-300.js | detector | 5884 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 301 | detector/module-301.js | detector | 866 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 302 | detector/module-302.js | detector | 3374 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 303 | platform/module-303.js | platform | 210 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 304 | detector/module-304.js | detector | 1319 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 305 | detector/module-305.js | detector | 354 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 306 | detector/module-306.js | detector | 927 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 307 | detector/module-307.js | detector | 7264 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 308 | platform/module-308.js | platform | 492 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 309 | detector/module-309.js | detector | 4059 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 310 | detector/module-310.js | detector | 3391 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 311 | detector/module-311.js | detector | 7325 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 312 | platform/module-312.js | platform | 372 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 313 | detector/module-313.js | detector | 3593 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 314 | platform/module-314.js | platform | 1710 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 315 | detector/module-315.js | detector | 828 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 316 | detector/module-316.js | detector | 3785 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 317 | detector/module-317.js | detector | 3738 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 318 | detector/module-318.js | detector | 5462 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 319 | detector/module-319.js | detector | 5683 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 320 | detector/module-320.js | detector | 610 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 321 | platform/module-321.js | platform | 548 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 322 | platform/module-322.js | platform | 320 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 323 | detector/module-323.js | detector | 1696 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 324 | detector/module-324.js | detector | 529 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 325 | platform/module-325.js | platform | 525 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 326 | detector/module-326.js | detector | 444 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 327 | detector/module-327.js | detector | 392 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 328 | detector/module-328.js | detector | 3059 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 329 | detector/module-329.js | detector | 3887 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 330 | detector/module-330.js | detector | 6428 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 331 | detector/module-331.js | detector | 3310 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 332 | platform/module-332.js | platform | 310 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 333 | detector/module-333.js | detector | 3870 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 334 | detector/module-334.js | detector | 5118 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 335 | detector/module-335.js | detector | 3196 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 336 | detector/module-336.js | detector | 594 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 337 | platform/module-337.js | platform | 336 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 338 | detector/module-338.js | detector | 3791 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 339 | detector/module-339.js | detector | 3921 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 340 | detector/module-340.js | detector | 3151 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 341 | platform/module-341.js | platform | 330 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 342 | detector/module-342.js | detector | 3236 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 343 | detector/module-343.js | detector | 3590 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 344 | platform/module-344.js | platform | 302 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 345 | detector/module-345.js | detector | 3158 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 346 | detector/module-346.js | detector | 267 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 347 | detector/module-347.js | detector | 9372 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 348 | detector/module-348.js | detector | 214 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 349 | detector/module-349.js | detector | 318 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 350 | vendor/module-350.js | vendor | 3122 B | candidate_drop | Unreferenced vendored library or shim |
| 351 | detector/module-351.js | detector | 5986 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 352 | platform/module-352.js | platform | 926 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 353 | platform/module-353.js | platform | 511 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 354 | vendor/module-354.js | vendor | 2986 B | candidate_drop | Unreferenced vendored library or shim |
| 355 | vendor/module-355.js | vendor | 3640 B | candidate_drop | Unreferenced vendored library or shim |
| 356 | platform/module-356.js | platform | 312 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 357 | platform/module-357.js | platform | 231 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 358 | detector/module-358.js | detector | 5787 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 359 | detector/module-359.js | detector | 5519 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 360 | platform/module-360.js | platform | 177 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 361 | detector/module-361.js | detector | 1532 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 362 | detector/module-362.js | detector | 4964 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 363 | platform/module-363.js | platform | 183 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 364 | detector/module-364.js | detector | 10852 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 365 | detector/module-365.js | detector | 1437 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 366 | detector/module-366.js | detector | 3221 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 367 | platform/module-367.js | platform | 256 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 368 | providers/module-368.js | providers | 342 B | candidate_drop | Orphaned media provider adapter |
| 369 | detector/module-369.js | detector | 3614 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 370 | detector/module-370.js | detector | 1650 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 371 | detector/module-371.js | detector | 3400 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 372 | detector/module-372.js | detector | 257 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 373 | detector/module-373.js | detector | 332 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 374 | detector/module-374.js | detector | 2689 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 375 | detector/module-375.js | detector | 437 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 376 | detector/module-376.js | detector | 3175 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 377 | platform/module-377.js | platform | 870 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 378 | detector/module-378.js | detector | 4653 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 379 | platform/module-379.js | platform | 283 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 380 | detector/module-380.js | detector | 3597 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 381 | detector/module-381.js | detector | 3585 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 382 | detector/module-382.js | detector | 3680 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 383 | detector/module-383.js | detector | 323 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 384 | detector/module-384.js | detector | 373 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 385 | detector/module-385.js | detector | 732 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 386 | platform/module-386.js | platform | 240 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 387 | detector/module-387.js | detector | 12968 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 388 | detector/module-388.js | detector | 363 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 389 | providers/module-389.js | providers | 269 B | candidate_drop | Orphaned media provider adapter |
| 390 | detector/module-390.js | detector | 3270 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 391 | platform/module-391.js | platform | 285 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 392 | platform/module-392.js | platform | 247 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 393 | detector/module-393.js | detector | 4417 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 394 | vendor/module-394.js | vendor | 4561 B | candidate_drop | Unreferenced vendored library or shim |
| 395 | detector/module-395.js | detector | 648 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 396 | detector/module-396.js | detector | 351 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 397 | detector/module-397.js | detector | 3815 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 398 | detector/module-398.js | detector | 3424 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 399 | detector/module-399.js | detector | 503 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 400 | detector/module-400.js | detector | 2193 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 401 | detector/module-401.js | detector | 190 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 402 | detector/module-402.js | detector | 6502 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 403 | detector/module-403.js | detector | 5422 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 405 | platform/module-405.js | platform | 2800 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 406 | platform/module-406.js | platform | 92 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 407 | platform/module-407.js | platform | 96 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 408 | platform/module-408.js | platform | 97 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 409 | platform/module-409.js | platform | 101 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 410 | platform/module-410.js | platform | 95 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 411 | platform/module-411.js | platform | 95 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 412 | platform/module-412.js | platform | 97 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 413 | platform/module-413.js | platform | 95 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 414 | platform/module-414.js | platform | 95 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 415 | platform/module-415.js | platform | 95 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 416 | platform/module-416.js | platform | 97 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 417 | platform/module-417.js | platform | 142 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 418 | platform/module-418.js | platform | 125 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 419 | platform/module-419.js | platform | 118 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 420 | platform/module-420.js | platform | 272 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 421 | platform/module-421.js | platform | 407 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 422 | platform/module-422.js | platform | 985 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 423 | platform/module-423.js | platform | 138 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 424 | platform/module-424.js | platform | 171 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 425 | platform/module-425.js | platform | 773 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 426 | platform/module-426.js | platform | 359 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 427 | platform/module-427.js | platform | 1983 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 428 | platform/module-428.js | platform | 330 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 429 | platform/module-429.js | platform | 217 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 430 | platform/module-430.js | platform | 944 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 431 | platform/module-431.js | platform | 773 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 432 | platform/module-432.js | platform | 770 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 433 | vendor/elliptic/module-433.js | vendor | 44364 B | candidate_drop | Unreferenced vendored library or shim |
| 434 | platform/module-434.js | platform | 196 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 435 | platform/module-435.js | platform | 5099 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 436 | platform/module-436.js | platform | 277 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 437 | vendor/elliptic/module-437.js | vendor | 103 B | candidate_drop | Unreferenced vendored library or shim |
| 442 | detector/module-442.js | detector | 39574 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 443 | vendor/elliptic/module-443.js | vendor | 43949 B | candidate_drop | Unreferenced vendored library or shim |
| 444 | detector/module-444.js | detector | 6579 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 445 | vendor/module-445.js | vendor | 4323 B | candidate_drop | Unreferenced vendored library or shim |
| 446 | detector/module-446.js | detector | 9368 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 447 | vendor/module-447.js | vendor | 3812 B | candidate_drop | Unreferenced vendored library or shim |
| 448 | detector/module-448.js | detector | 4739 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 449 | crypto/module-449.js | crypto | 9295 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 451 | platform/module-451.js | platform | 1769 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 462 | platform/module-462.js | platform | 10592 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 463 | platform/module-463.js | platform | 87 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 464 | platform/module-464.js | platform | 1154 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 465 | platform/module-465.js | platform | 7087 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 466 | platform/module-466.js | platform | 2049 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 467 | platform/module-467.js | platform | 2170 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 468 | platform/module-468.js | platform | 4441 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 469 | platform/module-469.js | platform | 888 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 470 | platform/module-470.js | platform | 126 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 471 | platform/module-471.js | platform | 2358 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 472 | platform/module-472.js | platform | 112 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 473 | platform/module-473.js | platform | 392 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 474 | platform/module-474.js | platform | 297 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 475 | platform/module-475.js | platform | 1539 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 476 | platform/module-476.js | platform | 391 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 477 | platform/module-477.js | platform | 3272 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 478 | platform/module-478.js | platform | 1681 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 479 | platform/module-479.js | platform | 547 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 480 | platform/module-480.js | platform | 182 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 481 | crypto/module-481.js | crypto | 2163 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 482 | crypto/module-482.js | crypto | 2000 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 483 | crypto/module-483.js | crypto | 419 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 484 | platform/module-484.js | platform | 1023 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 485 | vendor/elliptic/module-485.js | vendor | 103 B | candidate_drop | Unreferenced vendored library or shim |
| 486 | platform/module-486.js | platform | 1296 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 487 | platform/module-487.js | platform | 10592 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 488 | platform/module-488.js | platform | 87 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 489 | platform/module-489.js | platform | 1154 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 490 | platform/module-490.js | platform | 7087 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 491 | platform/module-491.js | platform | 2049 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 492 | platform/module-492.js | platform | 655 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 493 | platform/module-493.js | platform | 144 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 494 | platform/module-494.js | platform | 523 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 495 | platform/module-495.js | platform | 1891 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 496 | platform/module-496.js | platform | 4456 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 497 | platform/module-497.js | platform | 1848 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 498 | platform/module-498.js | platform | 195 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 499 | platform/module-499.js | platform | 3963 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 500 | platform/module-500.js | platform | 4392 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 501 | platform/module-501.js | platform | 231 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 502 | platform/module-502.js | platform | 301 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 503 | platform/module-503.js | platform | 132 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 504 | platform/module-504.js | platform | 205 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 565 | providers/module-565.js | providers | 2979 B | candidate_drop | Orphaned media provider adapter |
| 566 | providers/module-566.js | providers | 3701 B | candidate_drop | Orphaned media provider adapter |
| 567 | vendor/module-567.js | vendor | 3275 B | candidate_drop | Unreferenced vendored library or shim |
| 568 | detector/module-568.js | detector | 3385 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 569 | detector/module-569.js | detector | 3289 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 570 | vendor/module-570.js | vendor | 3457 B | candidate_drop | Unreferenced vendored library or shim |
| 571 | vendor/module-571.js | vendor | 3291 B | candidate_drop | Unreferenced vendored library or shim |
| 572 | platform/module-572.js | platform | 1347 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 573 | platform/module-573.js | platform | 406 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 574 | platform/module-574.js | platform | 146 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 575 | platform/module-575.js | platform | 225 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 576 | platform/module-576.js | platform | 125 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 577 | platform/module-577.js | platform | 1037 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 578 | platform/module-578.js | platform | 666 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 579 | platform/module-579.js | platform | 1402 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 580 | platform/module-580.js | platform | 277 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 581 | platform/module-581.js | platform | 265 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 582 | platform/module-582.js | platform | 266 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 583 | platform/module-583.js | platform | 546 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 584 | platform/module-584.js | platform | 1352 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 585 | platform/module-585.js | platform | 247 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 586 | platform/module-586.js | platform | 153 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 587 | platform/module-587.js | platform | 144 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 588 | platform/module-588.js | platform | 175 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 589 | platform/module-589.js | platform | 146 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 590 | platform/module-590.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 591 | platform/module-591.js | platform | 1238 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 592 | platform/module-592.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 593 | platform/module-593.js | platform | 276 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 594 | platform/module-594.js | platform | 1093 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 595 | platform/module-595.js | platform | 1127 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 596 | platform/module-596.js | platform | 650 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 597 | platform/module-597.js | platform | 836 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 598 | platform/module-598.js | platform | 585 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 599 | platform/module-599.js | platform | 93 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 600 | platform/module-600.js | platform | 1504 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 601 | platform/module-601.js | platform | 1018 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 602 | platform/module-602.js | platform | 746 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 603 | platform/module-603.js | platform | 146 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 604 | platform/module-604.js | platform | 850 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 605 | platform/module-605.js | platform | 819 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 606 | crypto/module-606.js | crypto | 1716 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 607 | platform/module-607.js | platform | 172 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 608 | platform/module-608.js | platform | 259 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 609 | platform/module-609.js | platform | 501 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 610 | platform/module-610.js | platform | 303 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 611 | platform/module-611.js | platform | 465 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 612 | platform/module-612.js | platform | 351 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 613 | platform/module-613.js | platform | 1097 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 614 | crypto/module-614.js | crypto | 1917 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 615 | platform/module-615.js | platform | 239 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 616 | platform/module-616.js | platform | 588 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 617 | platform/module-617.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 618 | vendor/elliptic/module-618.js | vendor | 103 B | candidate_drop | Unreferenced vendored library or shim |
| 619 | platform/module-619.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 620 | platform/module-620.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 621 | platform/module-621.js | platform | 7061 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 622 | platform/module-622.js | platform | 2039 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 623 | platform/module-623.js | platform | 1331 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 624 | platform/module-624.js | platform | 175 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 625 | platform/module-625.js | platform | 146 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 626 | platform/module-626.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 627 | platform/module-627.js | platform | 1238 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 628 | platform/module-628.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 629 | platform/module-629.js | platform | 276 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 630 | platform/module-630.js | platform | 2316 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 631 | platform/module-631.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 632 | platform/module-632.js | platform | 1203 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 633 | platform/module-633.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 634 | platform/module-634.js | platform | 12623 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 635 | platform/module-635.js | platform | 2608 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 636 | platform/module-636.js | platform | 6174 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 637 | platform/module-637.js | platform | 154 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 638 | platform/module-638.js | platform | 972 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 639 | platform/module-639.js | platform | 467 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 640 | platform/module-640.js | platform | 558 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 641 | platform/module-641.js | platform | 2003 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 642 | platform/module-642.js | platform | 777 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 643 | vendor/elliptic/module-643.js | vendor | 26200 B | candidate_drop | Unreferenced vendored library or shim |
| 644 | platform/module-644.js | platform | 3755 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 645 | platform/module-645.js | platform | 1792 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 646 | platform/module-646.js | platform | 1755 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 647 | platform/module-647.js | platform | 1753 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 648 | platform/module-648.js | platform | 1851 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 649 | platform/module-649.js | platform | 1380 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 650 | platform/module-650.js | platform | 993 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 651 | platform/module-651.js | platform | 2309 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 652 | vendor/elliptic/module-652.js | vendor | 103 B | candidate_drop | Unreferenced vendored library or shim |
| 653 | platform/module-653.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 654 | platform/module-654.js | platform | 922 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 655 | platform/module-655.js | platform | 2366 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 656 | platform/module-656.js | platform | 1584 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 657 | detector/module-657.js | detector | 8982 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 658 | detector/module-658.js | detector | 554 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 659 | platform/module-659.js | platform | 92 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 660 | platform/module-660.js | platform | 633 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 661 | platform/module-661.js | platform | 92 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 662 | platform/module-662.js | platform | 372 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 663 | platform/module-663.js | platform | 1691 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 664 | platform/module-664.js | platform | 556 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 665 | crypto/module-665.js | crypto | 741 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 666 | platform/module-666.js | platform | 1427 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 667 | platform/module-667.js | platform | 1689 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 668 | vendor/elliptic/module-668.js | vendor | 103 B | candidate_drop | Unreferenced vendored library or shim |
| 669 | platform/module-669.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 670 | platform/module-670.js | platform | 231 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 671 | platform/module-671.js | platform | 1034 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 672 | platform/module-672.js | platform | 57 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 673 | platform/module-673.js | platform | 1256 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 674 | platform/module-674.js | platform | 1672 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 675 | detector/module-675.js | detector | 3708 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 676 | platform/module-676.js | platform | 304 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 677 | vendor/module-677.js | vendor | 3222 B | candidate_drop | Unreferenced vendored library or shim |
| 678 | detector/module-678.js | detector | 3732 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 679 | vendor/module-679.js | vendor | 3021 B | candidate_drop | Unreferenced vendored library or shim |
| 680 | detector/module-680.js | detector | 3487 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 681 | platform/module-681.js | platform | 572 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 682 | platform/module-682.js | platform | 898 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 683 | vendor/module-683.js | vendor | 3465 B | candidate_drop | Unreferenced vendored library or shim |
| 684 | detector/module-684.js | detector | 3403 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 685 | platform/module-685.js | platform | 1459 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 686 | vendor/module-686.js | vendor | 3205 B | candidate_drop | Unreferenced vendored library or shim |
| 687 | detector/module-687.js | detector | 4570 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 688 | platform/module-688.js | platform | 371 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 689 | platform/module-689.js | platform | 1888 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 690 | detector/module-690.js | detector | 3330 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 691 | detector/module-691.js | detector | 373 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 692 | detector/module-692.js | detector | 3328 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 693 | vendor/module-693.js | vendor | 3395 B | candidate_drop | Unreferenced vendored library or shim |
| 694 | detector/module-694.js | detector | 3397 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 695 | vendor/module-695.js | vendor | 3321 B | candidate_drop | Unreferenced vendored library or shim |
| 696 | detector/module-696.js | detector | 2997 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 697 | platform/module-697.js | platform | 593 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 698 | platform/module-698.js | platform | 373 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
| 699 | detector/module-699.js | detector | 419 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 700 | detector/module-700.js | detector | 4075 B | candidate_drop | Orphaned media detector / parser helper unreferenced in entry graph |
| 741 | crypto/module-741.js | crypto | 26971 B | candidate_drop | Unused cryptographic / hashing routine uncalled by active workflow |
| 742 | platform/module-742.js | platform | 8340 B | candidate_drop | Legacy site detector / scraper unreferenced in entry graph |
