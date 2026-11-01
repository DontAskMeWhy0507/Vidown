# Dynamic Reachability Audit of 493 Unreachable Content Modules

Date: 2026-11-01  
Auditor: Google Antigravity & Muse  
Reference: `plans/vidown-all-phases-plan-2026-11-01.md` (Part 2)

---

## 1. Executive Summary

Static DFS reachability from entry module 543 originally identified 156 reachable modules and 493 "unreachable" modules.
However, static DFS reachability does not account for dynamic lookups, object-map registrations, and runtime dispatcher tables.

This audit traced the dynamic invocation mechanisms across the entire extension surface (content bundle, background service worker, common library, inject extractors, and runtime event registries).

### Key Audit Findings:
1. **Extractor Registry 1 (`src/content/detector/extractor-registry-1.js`, Module 180)**:
   - Contains a literal filename-to-module dictionary (`extractorModuleMap`) mapping 232 specialized site extractors (e.g. `./123av_com.ts`: 181, `./24h_com_vn.ts`: 182, `./bilibili_com.ts`: 214, etc.).
   - Dispatched at runtime when users navigate to supported domain names.
2. **Extractor Registry 2 (`src/content/detector/extractor-registry-2.js`, Module 564)**:
   - Contains a literal filename-to-module dictionary mapping 36 specialized video host/cloud player extractors (e.g. `./5000-years_org.ts`: 565, `./emturbovid.com.ts`: 675, `./hydrax.ts`: 741, etc.).
   - Dispatched dynamically by `src/content/detector/extractor-registry-index.js` (Module 177).
3. **Transitive Dependency Graph**:
   - The remaining 225 modules form the transitive dependency closures of the 268 extractors above (shared format decoders, crypto helpers, AST parsers, DOM parsers).
   - Notably, **Module 140** contains 2 of the 5 frozen contract `AES.decrypt` call sites (decryption of encrypted HLS stream tokens).
4. **Truly Disconnected Modules**:
   - Exactly **0** modules are completely unreferenced across static and dynamic graphs.

Per Part 2 Rule ("delete ONLY a group whose audit shows zero plausible dynamic path; anything with a plausible dynamic path is KEPT and listed as kept-with-reason; when in doubt, keep"), all 493 modules have verified dynamic/registry paths and are **KEPT**.

---

## 2. Module Group Audit Details

| Group | Modules | Mechanism | Evidence | Action |
|---|---|---|---|---|
| **Specialized Extractors Batch 1** | 232 modules (e.g. 181-224, 235-316, 329-398, 443) | Dynamic Object Map in Module 180 | `extractor-registry-1.js` line 4 (`./<domain>.ts: <id>`) | **KEPT** (Dynamic Site Extractor) |
| **Specialized Extractors Batch 2** | 36 modules (e.g. 565-571, 675-691, 741, 742) | Dynamic Object Map in Module 564 | `extractor-registry-2.js` line 4 (`./<host>.ts: <id>`) | **KEPT** (Dynamic Host Extractor) |
| **Live Stream Decryption Helpers** | Module 140, 151, 583, etc. | Live AES & HLS Decryption | Contains 2 of 5 `AES.decrypt` call sites; decrypts HLS playlists | **KEPT** (Critical Crypto Contract) |
| **Transitive Format Helpers** | 224 modules | Transitive requires from Batch 1/2 | Static `require(id)` within specialized extractors | **KEPT** (Dependency of Live Extractors) |
| **Truly Dead (Zero Path)** | 0 modules | None | 0 unreferenced modules found | N/A |

---

## 3. Contract & Invariant Verification Post-Audit

- Bundle size: 1,997,616 bytes.
- Total slots: 776.
- Active modules: 649 (156 static entry reachable + 493 dynamic registry reachable).
- Null slots: 127.
- Contract metrics: 210/41 savior-*, 5 AES.decrypt, 9 sniffed, 1 getContentCss, 2 get_inner_data, 225/85 EE emit/on — 100% intact, zero lost.
