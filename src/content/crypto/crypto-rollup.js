/**
 * Vidown CryptoJS Rollup
 * Wraps consolidated CryptoJS engine with AES, Hex, Utf8, and Base64 codecs
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let cryptoInstance = null;

function loadCryptoJS() {
  if (cryptoInstance) return cryptoInstance;

  const reg = require('../module-registry');
  const installed = {};

  function req(id) {
    if (installed[id]) return installed[id].exports;
    const mod = installed[id] = { i: id, l: false, exports: {} };
    const relPath = reg.modules[id];
    if (!relPath) throw new Error(`Missing module ${id} in module-registry`);
    
    const fullPath = path.resolve(__dirname, '..', relPath);
    const code = fs.readFileSync(fullPath, 'utf8')
      .replace(/^\/\/[^\n]*\n/, '')
      .replace(/^export default /, 'return ');
      
    const fn = new Function('module', 'exports', 'r', code);
    req.d = (e, k, v) => Object.defineProperty(e, k, { enumerable: true, get: v });
    req.r = (e) => Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
    req.n = (m) => () => (m && m.__esModule ? m.default : m);
    
    fn().call(mod.exports, mod, mod.exports, req);
    mod.l = true;
    return mod.exports;
  }

  cryptoInstance = req(16);
  return cryptoInstance;
}

const instance = loadCryptoJS();

export default instance;
export const AES = instance.AES;
export const enc = instance.enc;
export const lib = instance.lib;

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = instance;
  module.exports.default = instance;
  module.exports.AES = instance.AES;
  module.exports.enc = instance.enc;
  module.exports.lib = instance.lib;
}
