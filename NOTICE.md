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
   - Location: `src/content/crypto/` (Module 16 and related cipher/word array modules 4, 8, 17, 18, 19, 26, 34, 40, 41, 51-75)
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

6. **Cốc Cốc Savior Media Downloader Core**
   - Location: `src/content/platform/`, `src/content/detector/`, `src/content/widget/`
   - Original Author: Cốc Cốc Company Limited
   - Upstream License: Proprietary
