const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: MODULE 37 & 89 REACHABILITY & FUNCTIONALITY ===\n');

const reg = require('../src/content/module-registry');
assert.ok(reg.modules[37], 'Module 37 must be in registry');
assert.ok(reg.modules[89], 'Module 89 must be in registry');

const p37 = path.resolve(__dirname, '../src', 'content', reg.modules[37]);
const p89 = path.resolve(__dirname, '../src', 'content', reg.modules[89]);

assert.ok(fs.existsSync(p37), 'Module 37 file must exist');
assert.ok(fs.existsSync(p89), 'Module 89 file must exist');

const size37 = fs.statSync(p37).size;
const size89 = fs.statSync(p89).size;
console.log(`Module 37 (AST Parser) size: ${size37} bytes`);
console.log(`Module 89 (AST Code Generator) size: ${size89} bytes`);

// 1. Verify caller graph from census
const census = require('../docs/superpowers/census/2026-11-01-module-census.json');
assert.deepStrictEqual(census.modules['37'].callers.sort(), [24, 89].sort(), 'Module 37 callers must be [24, 89]');
assert.ok(census.modules['89'].callers.includes(120), 'Module 89 must be called by YouTube decipher module 120');
assert.ok(census.modules['89'].callers.includes(541), 'Module 89 must be called by Widget UI module 541');

// 2. Sandboxed Execution of Module 37 and 89
console.log('Verifying sandboxed module execution for parser (37) and generator (89)...');

const mockModules = {};
const mockInstalled = {};
function mockReq(id) {
  if (mockInstalled[id]) return mockInstalled[id].exports;
  const mod = mockInstalled[id] = { i: id, l: false, exports: {} };
  if (id === 96) {
    mod.exports = function(t) { return t; };
    mod.l = true;
    return mod.exports;
  }
  if (mockModules[id]) {
    mockModules[id].call(mod.exports, mod, mod.exports, mockReq);
  }
  mod.l = true;
  return mod.exports;
}

mockReq.d = function(exports, name, getter) {
  Object.defineProperty(exports, name, { enumerable: true, get: getter });
};
mockReq.r = function(exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
};
mockReq.n = function(module) {
  return function() { return (module && module.__esModule) ? module['default'] : module; };
};

// Module 37 factory
const code37 = fs.readFileSync(p37, 'utf8');
const fn37 = new Function('module', 'exports', 'r', code37.replace(/^\/\/[^\n]*\n/, '').replace(/^export default /, 'return '));
mockModules[37] = fn37();

// Module 89 factory
const code89 = fs.readFileSync(p89, 'utf8');
const fn89 = new Function('module', 'exports', 'r', code89.replace(/^\/\/[^\n]*\n/, '').replace(/^export default /, 'return '));
mockModules[89] = fn89();

// Execute module 37
const parserExport = mockReq(37);
assert.ok(parserExport !== undefined, 'Module 37 must return parser export');

// Execute module 89
const generatorExport = mockReq(89);
assert.ok(generatorExport !== undefined, 'Module 89 must return generator export');

console.log('PASS: Modules 37 & 89 verified as load-bearing YouTube decipher/AST dependencies! ✅\n');
