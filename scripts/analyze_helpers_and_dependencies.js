/**
 * scripts/analyze_helpers_and_dependencies.js
 * 
 * AST-driven dependency & helper analyzer for Giai đoạn 1 & 3 of the
 * Readable Source & Debugging Plan.
 * 
 * Uses Acorn AST traversal to accurately trace all numeric require calls
 * across all active modules in src/content/, classifying the 196 helper-* files.
 */
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'src', 'content');
const reg = require(path.join(CONTENT_DIR, 'module-registry.js'));

console.log('=== ANALYZING MODULE DEPENDENCIES & 196 HELPERS (AST-BASED) ===\n');

// 1. AST-based require extractor
function extractNumericRequires(code) {
  const requires = new Set();
  let ast;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowReturnOutsideFunction: true
    });
  } catch (e) {
    // Fallback regex if acorn fails on unusual syntax
    const matches = code.matchAll(/(?:require|requireFn|r|__webpack_require__)\s*\(\s*(\d+)\s*\)/g);
    for (const m of matches) requires.add(parseInt(m[1], 10));
    return Array.from(requires);
  }

  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (
      node.type === 'CallExpression' &&
      (node.callee.name === 'require' ||
       node.callee.name === 'requireFn' ||
       node.callee.name === 'r' ||
       node.callee.name === '__webpack_require__') &&
      node.arguments.length === 1 &&
      node.arguments[0].type === 'Literal' &&
      typeof node.arguments[0].value === 'number'
    ) {
      requires.add(node.arguments[0].value);
    }
    for (const key of Object.keys(node)) {
      if (key === 'parent') continue;
      const child = node[key];
      if (Array.isArray(child)) {
        for (const item of child) walk(item);
      } else if (child && typeof child === 'object' && child.type) {
        walk(child);
      }
    }
  }

  walk(ast);
  return Array.from(requires);
}

// 2. Build dependency graph across all registered modules
const graph = {}; // id -> { outgoing: Set, incoming: Set, path: string, size: number }
for (const [idStr, relPath] of Object.entries(reg.modules)) {
  const id = parseInt(idStr, 10);
  const fullPath = path.join(CONTENT_DIR, relPath);
  let size = 0;
  let code = '';
  if (fs.existsSync(fullPath)) {
    code = fs.readFileSync(fullPath, 'utf8');
    size = Buffer.byteLength(code, 'utf8');
  }
  graph[id] = {
    id,
    relPath,
    fullPath,
    size,
    outgoing: new Set(),
    incoming: new Set(),
    code
  };
}

for (const mod of Object.values(graph)) {
  if (!mod.code) continue;
  const deps = extractNumericRequires(mod.code);
  for (const depId of deps) {
    mod.outgoing.add(depId);
    if (graph[depId]) {
      graph[depId].incoming.add(mod.id);
    }
  }
}

// Read dynamic registries: module 180 and 564
function extractRegistryEntries(modId) {
  const mod = graph[modId];
  if (!mod || !mod.code) return [];
  const matches = [...mod.code.matchAll(/"\.\/[^"]+":\s*(\d+)/g)];
  return matches.map(m => parseInt(m[1], 10));
}

const reg1Entries = extractRegistryEntries(180);
const reg2Entries = extractRegistryEntries(564);
const dynamicRoots = new Set([...reg1Entries, ...reg2Entries]);

console.log(`Registry 1 (mod 180): ${reg1Entries.length} entries`);
console.log(`Registry 2 (mod 564): ${reg2Entries.length} entries`);
console.log(`Dynamic entries total: ${dynamicRoots.size}`);

// 3. Classify the 196 helper-* modules
const helperModules = [];
for (const mod of Object.values(graph)) {
  if (mod.relPath.startsWith('platform/helper-')) {
    const raw = mod.code.trim();
    let category = 'business-helper';
    let detail = '';

    // Check empty stubs
    if (
      /export default function\s*\([^)]*\)\s*\{\s*\};?$/.test(raw) ||
      /function\s*\([^)]*\)\s*\{\s*\};?$/.test(raw) ||
      raw.length < 100 && raw.includes('function') && raw.endsWith('{};')
    ) {
      category = 'empty-stub';
      detail = 'Empty function stub';
    } else if (raw.includes('moduleObj.exports = TypeError') || raw.includes('exportsObj.default = TypeError')) {
      category = 'builtin-alias';
      detail = 'TypeError';
    } else if (raw.includes('moduleObj.exports = Object') || raw.includes('exportsObj.default = Object')) {
      category = 'builtin-alias';
      detail = 'Object';
    } else if (raw.includes('moduleObj.exports = String') || raw.includes('exportsObj.default = String')) {
      category = 'builtin-alias';
      detail = 'String';
    } else if (raw.includes('moduleObj.exports = Promise') || raw.includes('exportsObj.default = Promise')) {
      category = 'builtin-alias';
      detail = 'Promise';
    } else if (raw.includes('moduleObj.exports = Function') || raw.includes('exportsObj.default = Function')) {
      category = 'builtin-alias';
      detail = 'Function';
    } else if (raw.includes('Reflect.getPrototypeOf')) {
      category = 'builtin-alias';
      detail = 'Reflect.getPrototypeOf';
    } else if (raw.includes('crypto') || raw.includes('hash') || raw.includes('sha') || raw.includes('digest')) {
      category = 'vendor-crypto';
      detail = 'Crypto/Hash utility';
    } else if (raw.includes('Buffer') || raw.includes('Uint8Array')) {
      category = 'vendor-binary';
      detail = 'Buffer/Binary utility';
    } else if (raw.includes('regenerator-runtime') || raw.includes('regeneratorRuntime')) {
      category = 'vendor-async';
      detail = 'Async state machine / regenerator';
    }

    helperModules.push({
      id: mod.id,
      relPath: mod.relPath,
      size: mod.size,
      category,
      detail,
      incomingCount: mod.incoming.size,
      incomingCallers: Array.from(mod.incoming),
      outgoingCount: mod.outgoing.size,
      outgoingDeps: Array.from(mod.outgoing),
      isDynamicDirect: dynamicRoots.has(mod.id)
    });
  }
}

helperModules.sort((a, b) => a.id - b.id);
console.log(`\nClassified ${helperModules.length} helper modules.`);

const categoryCounts = {};
for (const h of helperModules) {
  categoryCounts[h.category] = (categoryCounts[h.category] || 0) + 1;
}
console.log('Category breakdown:', categoryCounts);

const zeroCallers = helperModules.filter(h => h.incomingCount === 0 && !h.isDynamicDirect);
console.log(`Helpers with 0 incoming callers: ${zeroCallers.length}`);

// 4. Save JSON inventory
const outDir = path.join(ROOT_DIR, 'docs', 'superpowers', 'census');
fs.mkdirSync(outDir, { recursive: true });
const jsonPath = path.join(outDir, '2026-11-03-helper-inventory.json');
fs.writeFileSync(jsonPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  totalHelpers: helperModules.length,
  categoryCounts,
  zeroCallerCount: zeroCallers.length,
  helpers: helperModules
}, null, 2), 'utf8');
console.log(`\n✓ Saved JSON inventory to ${jsonPath}`);

// 5. Save Markdown report
const mdPath = path.join(outDir, '2026-11-03-helper-inventory.md');
let md = `# Báo cáo phân loại 196 Helper Platform (Giai đoạn 1 & 3)

Ngày phân tích: 03/11/2026.
Phạm vi: 196 file \`helper-*.js\` trong \`src/content/platform/\`.
Công cụ: AST Parser (Acorn 8.19) phân tích toàn bộ cây gọi phụ thuộc \`requireFn(ID)\`.

## 1. Tổng quan phân loại

| Nhóm | Số lượng | Mô tả & Hướng xử lý |
| --- | --- | --- |
| \`empty-stub\` | ${categoryCounts['empty-stub'] || 0} | Hàm rỗng \`function() {}\`, không trả về giá trị hoặc tác dụng phụ |
| \`builtin-alias\` | ${categoryCounts['builtin-alias'] || 0} | Alias của standard JavaScript built-ins (\`TypeError\`, \`Object\`, \`Reflect\`) |
| \`vendor-crypto\` | ${categoryCounts['vendor-crypto'] || 0} | Thuật toán băm/mã hóa (crypto-js, hash, digest, hmac) |
| \`vendor-binary\` | ${categoryCounts['vendor-binary'] || 0} | Xử lý mảng byte, nhị phân (\`Buffer\`, \`Uint8Array\`) |
| \`vendor-async\` | ${categoryCounts['vendor-async'] || 0} | Các module sinh mã async/regenerator |
| \`business-helper\` | ${categoryCounts['business-helper'] || 0} | Tiện ích bóc tách URL, query selector, chuỗi, HTML extractor |

## 2. Nhóm Empty Stubs (${categoryCounts['empty-stub'] || 0} modules)
Các module này chỉ chứa hàm rỗng, có thể chuẩn hóa hoặc gom:
`;

for (const h of helperModules.filter(x => x.category === 'empty-stub')) {
  md += `- **Module ${h.id}** (\`${h.relPath}\`, ${h.size} B): ${h.incomingCount} callers [${h.incomingCallers.join(', ')}]\n`;
}

md += `\n## 3. Nhóm Built-in Aliases (${categoryCounts['builtin-alias'] || 0} modules)\n`;
for (const h of helperModules.filter(x => x.category === 'builtin-alias')) {
  md += `- **Module ${h.id}** (\`${h.relPath}\`, ${h.size} B): Xuất \`${h.detail}\` — ${h.incomingCount} callers [${h.incomingCallers.join(', ')}]\n`;
}

md += `\n## 4. Danh sách đầy đủ 196 Helper Modules\n\n`;
md += `| ID | File | Dung lượng | Nhóm | Chi tiết | Callers | Dependencies |\n`;
md += `|:---|:---|:---|:---|:---|:---|:---|\n`;
for (const h of helperModules) {
  md += `| ${h.id} | \`${h.relPath}\` | ${h.size} B | \`${h.category}\` | ${h.detail || '-'} | ${h.incomingCount} | ${h.outgoingCount} |\n`;
}

fs.writeFileSync(mdPath, md, 'utf8');
console.log(`✓ Saved Markdown report to ${mdPath}\n`);
