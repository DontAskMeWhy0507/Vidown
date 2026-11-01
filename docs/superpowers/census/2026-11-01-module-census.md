# Scope-Aware Module Census of content-script.js

- Date: 2026-11-01
- Bundle size: 2404440 bytes
- Total Webpack slots: 776
- Real function modules: 649
- Holes (null slots): 127
- Entry point module: 543
- Reachable modules: 156
- Unreachable modules: 493
- bn.js duplicate copies: 6 (126, 437, 485, 618, 652, 668), saving potential: 216530 bytes
- Modules containing regenerator-runtime: 164

---

## 1. Critical Modules Analysis

### Module 37 (AST Parser)
- Size: 119308 bytes
- Identified callers: [24, 89]
- Description: Bundled JavaScript parser used for analyzing obfuscated media tokens and inline scripts.

### Module 89 (AST Code Generator & Deobfuscator)
- Size: 45516 bytes
- Identified callers: [28, 120, 541, 700]
- Description: Generates executable code and decodes player algorithms (e.g. YouTube n-sig / cipher solver).

---

## 2. Literal-Absent Attributes Trace

The following 4 DOM attributes are referenced in system architecture documents but absent as static string literals in content-script.js:
- `savior-m3u8`: dynamically attached by media detector/network listeners.
- `savior-decoded-content`: attached by main-world extractors.
- `savior-story-url`: populated dynamically in Instagram stories handler.
- `savior-po-token`: injected by YouTube bot-guard / po-token resolver.

---

## 3. Top 20 Largest Modules

| Module ID | Size (Bytes) | Reachable | Regenerator | bn.js Copy | Direct Callers Count |
|:---|:---|:---|:---|:---|:---|
| 37 | 119308 | Yes | No | No | 2 |
| 541 | 110571 | Yes | Yes | No | 1 |
| 161 | 77663 | No | No | No | 1 |
| 89 | 45516 | Yes | Yes | No | 4 |
| 433 | 44315 | No | No | No | 3 |
| 443 | 43900 | No | Yes | No | 0 |
| 126 | 43306 | No | No | Yes | 9 |
| 437 | 43306 | No | No | Yes | 3 |
| 485 | 43306 | No | No | Yes | 2 |
| 618 | 43306 | No | No | Yes | 1 |
| 652 | 43306 | No | No | Yes | 1 |
| 668 | 43306 | No | No | Yes | 1 |
| 24 | 40290 | Yes | Yes | No | 2 |
| 442 | 39532 | No | Yes | No | 0 |
| 6 | 39279 | Yes | Yes | No | 80 |
| 0 | 27593 | Yes | Yes | No | 117 |
| 163 | 27190 | No | No | No | 1 |
| 741 | 26931 | No | Yes | No | 0 |
| 643 | 26151 | No | No | No | 1 |
| 162 | 25596 | No | No | No | 1 |
