# Vidown Notice & Third-Party Attributions

## Origin Notice

Vidown was rebuilt on top of decompiled components of the Cốc Cốc Savior browser extension (originally developed by Cốc Cốc Company Limited).

The MIT License covering this project applies to the original structural modifications, deduplications, test harnesses, refactorings, and documentation created for this repository. It does **not** alter, claim, or relicense underlying proprietary rights or third-party copyrights belonging to original authors or Cốc Cốc Company Limited.

---

## Third-Party Vendored Components

This project vendors or incorporates code from the following third-party open-source libraries:

1. **bn.js / elliptic**
   - Location: `src/content/vendor/elliptic/` (Module 126 and deduplicated alias stubs 437, 485, 618, 652, 668)
   - Original Authors: Fedor Indutny and contributors
   - Upstream License: MIT License

2. **regenerator-runtime**
   - Location: `src/content/vendor/regenerator-core.js`
   - Original Authors: Facebook, Inc. / Babel team
   - Upstream License: MIT License

3. **CryptoJS**
   - Location: `src/content/vendor/cryptojs/` (Modules 4, 8, 16, 17, 18, 19, 26, 34, 35, 40, 41, 51-75)
   - Original Author: Jeff Mott and CryptoJS contributors
   - Upstream License: MIT License / New BSD License

4. **Acorn (JavaScript AST Parser)**
   - Location: `src/content/vendor/parser/module-37.js`
   - Original Authors: Marijn Haverbeke and Acorn contributors
   - Upstream License: MIT License

5. **AST Code Generator / Deobfuscator**
   - Location: `src/content/vendor/parser/module-89.js`
   - Original Purpose: JavaScript AST generation for YouTube player deciphering
   - Upstream License: unknown (likely Babel Generator or Astring derivative)

6. **node-qrcode**
   - Location: `src/content/vendor/qrcode/` (Modules 134, 135, 404, 458, 459, 460, 461, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563)
   - Original Authors: Ryan Day and node-qrcode contributors
   - Upstream License: MIT License

7. **readable-stream & stream dependencies**
   - Location: `src/content/vendor/stream/` (Modules 42, 46, 47, 48, 49, 76, 83, 84, 85, 86, 87, 98, 99, 100, 101, 102, 104, 107, 108, 109, 110, 111, 112)
   - Original Authors: Node.js contributors, Feross Aboukhadijeh (ieee754), T. Jameson Little (base64-js)
   - Upstream License: MIT License / BSD-3-Clause

8. **fast-xml-parser**
   - Location: `src/content/vendor/fast-xml-parser/` (Modules 44, 88, 125, 191, 192, 193, 194, 195, 196, 197)
   - Original Author: Amit Gupta and fast-xml-parser contributors
   - Upstream License: MIT License

9. **mustache.js**
   - Location: `src/content/vendor/mustache/module-39.js`
   - Original Authors: The mustache.js community
   - Upstream License: MIT License

10. **eventemitter3**
    - Location: `src/content/vendor/eventemitter3/module-79.js`
    - Original Authors: Arnout Kazemier and EventEmitter3 contributors
    - Upstream License: MIT License

11. **buffer & safe-buffer**
    - Location: `src/content/vendor/buffer/` (Modules 25, 27)
    - Original Authors: Feross Aboukhadijeh and contributors
    - Upstream License: MIT License

12. **Runtime Polyfills & Environment Shims**
    - Location: `src/content/vendor/shims/` (Modules 13, 15, 29, 30, 32, 36, 50, 103, 105, 106, 148, 743, 759, 775)
    - Original Authors: Isaac Z. Schlueter (inherits), Julian Gruber (isarray), Webpack team
    - Upstream License: MIT License / ISC License

13. **Cốc Cốc Savior Media Downloader Core**
    - Location: `src/content/core/`, `src/content/platform/`, `src/content/detector/`, `src/content/widget/`
    - Original Author: Cốc Cốc Company Limited
    - Upstream License: Proprietary
