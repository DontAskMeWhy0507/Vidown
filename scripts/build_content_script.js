/**
 * scripts/build_content_script.js
 * 
 * Production Build Pipeline: Module Slot Assembly + esbuild.transformSync Minification
 * 
 * Pipeline mechanism:
 * 1. Reads the hand-written CSS prefetcher header from src/content/entry/index.js (Section 1).
 * 2. Assembles the 776-slot module array (649 extracted modules from src/content/ + 127 null holes)
 *    mapped via src/content/module-registry.js.
 * 3. Wraps the module array into the classic Webpack IIFE bootstrap (entry module 543).
 * 4. Minifies the complete assembled bundle using esbuild.transformSync (target: 'chrome116',
 *    minifyWhitespace: true, minifySyntax: true, legalComments: 'none') into root content-script.js.
 */

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const zlib = require('zlib');

console.log('=== BUILDING CONTENT SCRIPT PIPELINE ===\n');

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'src', 'content');
const registry = require(path.join(CONTENT_DIR, 'module-registry.js'));

// 1. Read prefetcher header
const entryPath = path.join(CONTENT_DIR, 'entry', 'index.js');
const entrySource = fs.readFileSync(entryPath, 'utf8');
const section2Idx = entrySource.indexOf('// --- SECTION 2:');
if (section2Idx === -1) {
  throw new Error('Could not locate SECTION 2 marker in entry/index.js');
}
const prefetcherCode = entrySource.slice(0, section2Idx).trim();

// 2. Read each module
const slotCodes = [];
for (let i = 0; i < 776; i++) {
  if (!registry.modules[i]) {
    slotCodes.push('null');
  } else {
    const p = path.join(CONTENT_DIR, registry.modules[i]);
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/^export default\s+/m, '').replace(/^module\.exports\s*=\s*/m, '').trim();
    if (c.endsWith(';')) c = c.slice(0, -1);
    slotCodes.push(c);
  }
}

const arrayCode = '[' + slotCodes.join(',') + ']';

// 3. Webpack bootstrap
const bootstrap = `!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=543)}(${arrayCode});`;

// 4. Transform / Minify using esbuild
const unminified = prefetcherCode + '\n\n' + bootstrap;

// Minify with esbuild preserving per-module variable identities
const minResult = esbuild.transformSync(unminified, {
  target: 'chrome116',
  minifyWhitespace: true,
  minifySyntax: true,
  minifyIdentifiers: false,
  legalComments: 'none'
});

const finalCode = minResult.code;
const outPath = path.join(ROOT_DIR, 'content-script.js');
fs.writeFileSync(outPath, finalCode, 'utf8');

const deflatedSize = zlib.deflateRawSync(Buffer.from(finalCode), { level: 9 }).length;
console.log(`Generated content-script.js: ${finalCode.length} bytes raw, ${deflatedSize} bytes deflated.`);
console.log('✓ Build completed successfully!\n');
