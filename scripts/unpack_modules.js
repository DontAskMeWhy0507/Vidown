const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

console.log('=== UNPACKING CONTENT SCRIPT MODULES ===\n');

const csPath = path.resolve(__dirname, '..', 'content-script.js');
const csCode = fs.readFileSync(csPath, 'utf8');

console.log(`Parsing ${csPath}...`);
const ast = acorn.parse(csCode, { ecmaVersion: 2022 });

// Locate CSS prefetcher (statements 0 to 7)
const cssPrefetcherCode = csCode.slice(ast.body[0].start, ast.body[7].end).trim();

// Locate Webpack statement
const webpackStmt = ast.body.find(stmt => 
  stmt.type === 'ExpressionStatement' &&
  stmt.expression.type === 'UnaryExpression' &&
  stmt.expression.argument.type === 'CallExpression' &&
  stmt.expression.argument.arguments.length > 0 &&
  stmt.expression.argument.arguments[0].type === 'ArrayExpression'
);

if (!webpackStmt) {
  throw new Error('Could not find Webpack array in content-script.js');
}

const moduleArray = webpackStmt.expression.argument.arguments[0];
const totalSlots = moduleArray.elements.length;

const baseDir = path.resolve(__dirname, '..', 'src', 'content');
const dirs = [
  'vendor/elliptic',
  'vendor/parser',
  'vendor',
  'crypto',
  'platform',
  'detector',
  'widget',
  'providers',
  'entry'
];

dirs.forEach(d => fs.mkdirSync(path.join(baseDir, d), { recursive: true }));

const elliptic = new Set([126, 437, 485, 618, 652, 668, 643, 433, 443]);
const parser = new Set([37, 89]);
const crypto = new Set([161, 71, 72, 73, 74, 75, 45, 46, 47, 48, 16, 17, 18]);

const modulesMap = {};
const registrySlotsLines = [];

let unpackedCount = 0;

for (let i = 0; i < totalSlots; i++) {
  const el = moduleArray.elements[i];
  if (!el) {
    registrySlotsLines.push('  null');
    continue;
  }

  unpackedCount++;
  const modCode = csCode.slice(el.start, el.end).trim();
  let category = 'platform';

  if (elliptic.has(i)) {
    category = 'vendor/elliptic';
  } else if (parser.has(i)) {
    category = 'vendor/parser';
  } else if (crypto.has(i) || modCode.includes('AES') || modCode.includes('CryptoJS') || modCode.includes('HMAC')) {
    category = 'crypto';
  } else if (modCode.includes('savior-widget') || modCode.includes('FloatingBar') || modCode.includes('download-button') || modCode.includes('tooltip')) {
    category = 'widget';
  } else if (modCode.includes('video') || modCode.includes('m3u8') || modCode.includes('mp4') || modCode.includes('scanner') || modCode.includes('mutation')) {
    category = 'detector';
  } else if (modCode.includes('youtube') || modCode.includes('tiktok') || modCode.includes('facebook') || modCode.includes('instagram')) {
    category = 'providers';
  } else if (modCode.includes('regenerator-runtime') || modCode.includes('core-js') || modCode.includes('lodash')) {
    category = 'vendor';
  }

  const fileName = `module-${i}.js`;
  const relPath = `${category}/${fileName}`;
  const fullPath = path.join(baseDir, relPath);

  const fileContent = `// Module ${i} [${category}]\nmodule.exports = ${modCode};\n`;
  fs.writeFileSync(fullPath, fileContent, 'utf8');

  modulesMap[i] = relPath;
  registrySlotsLines.push(`  /* ${i} */ require('./${relPath}')`);
}

console.log(`Unpacked ${unpackedCount} modules across ${dirs.length} categories.`);

// Generate src/content/module-registry.js
const registryCode = `// Generated Module Registry for Savior Content Script
module.exports = {
  modules: ${JSON.stringify(modulesMap, null, 2)},
  slots: [
${registrySlotsLines.join(',\n')}
  ]
};
`;

const registryPath = path.join(baseDir, 'module-registry.js');
fs.writeFileSync(registryPath, registryCode, 'utf8');
console.log(`Wrote module registry to ${registryPath}`);

// Generate src/content/entry/index.js
const entryCode = `// Savior Content Script - Modular Open-Source Architecture
// Generated from transparent modular source in src/content/

// --- SECTION 1: CSS PREFETCHER & INVALIDATOR GUARD ---
${cssPrefetcherCode}

// --- SECTION 2: WEBPACK RUNTIME BOOTSTRAP ---
const registry = require('../module-registry');

(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    if (!modules[moduleId]) {
      throw new Error('Module ' + moduleId + ' not found in registry');
    }

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }

  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;

  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  __webpack_require__.t = function(value, mode) {
    if (1 & mode) value = __webpack_require__(value);
    if (8 & mode) return value;
    if (4 & mode && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (2 & mode && typeof value !== 'string') {
      for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    }
    return ns;
  };

  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function() { return module['default']; } : function() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  __webpack_require__.p = './';

  // Boot entry module 543
  return __webpack_require__(__webpack_require__.s = 543);
})(registry.slots);
`;

const entryPath = path.join(baseDir, 'entry', 'index.js');
fs.writeFileSync(entryPath, entryCode, 'utf8');
console.log(`Wrote entry point to ${entryPath}\n`);
console.log('✓ Unpacking complete!');
