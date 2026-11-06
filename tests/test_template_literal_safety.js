/**
 * tests/test_template_literal_safety.js
 * 
 * Regression Test Suite: Guards against accidental newlines inside JavaScript template literals (`...`)
 * 
 * Context:
 * When code is formatted with line-length limiters, automated tools can insert newlines
 * inside template literals. Because template literals preserve newlines verbatim,
 * paths like `inject/${file}\n  /main-world.js` fail in Chrome with:
 * "Error: Could not load file: 'inject/youtube/potoken /main-world.js'".
 * 
 * This test asserts that:
 * 1. No template literal contains a newline inside URLs, file paths, query parameters,
 *    HTTP headers (Range/Authorization), XML manifest tags, or HLS directives.
 * 2. Critical file injection paths in background scripts evaluate cleanly without whitespace.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: TEMPLATE LITERAL PATH & URL SAFETY ===\n');

const ROOT_DIR = path.resolve(__dirname, '..');

function checkFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  let inTemplate = false;
  let startLine = 0;
  let templateContent = '';
  const violations = [];

  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let c = 0; c < line.length; c++) {
      if (line[c] === '`' && (c === 0 || line[c - 1] !== '\\')) {
        inTemplate = !inTemplate;
        if (inTemplate) {
          startLine = i + 1;
          templateContent = '';
        } else {
          if (templateContent.includes('\n')) {
            const raw = templateContent;
            const trimmed = raw.trim();

            // Exclude genuine multi-line code generation, markdown, CSS
            const isIntentionalCode = 
              trimmed.includes('function(') || 
              trimmed.includes('function ') || 
              trimmed.includes('export default') || 
              trimmed.includes('return ') || 
              trimmed.includes('var ') || 
              trimmed.includes('const ') || 
              trimmed.includes('let ') || 
              trimmed.includes(';\n');

            const isCorruptedCandidate = 
              trimmed.includes('http://') || 
              trimmed.includes('https://') || 
              trimmed.includes('inject/') || 
              trimmed.includes('bytes=') || 
              trimmed.includes('.m3u8') || 
              trimmed.includes('.json') || 
              trimmed.includes('.rd') || 
              trimmed.includes('.vtt') || 
              trimmed.includes('.srt') || 
              trimmed.includes('.jpg') || 
              trimmed.includes('.png') || 
              trimmed.includes('.mp4') || 
              trimmed.includes('action=') || 
              trimmed.includes('tab_url') || 
              trimmed.includes('?key=') || 
              trimmed.includes('?vid=') || 
              trimmed.includes('?blob=') || 
              trimmed.includes('?__gda__=') || 
              trimmed.includes('?hl=') || 
              trimmed.includes('?autoplay=') || 
              trimmed.includes('?title=') || 
              trimmed.includes('client_secret=') || 
              trimmed.includes('client_id=') || 
              trimmed.includes('&token=') || 
              trimmed.includes('Initialization sourceURL=') || 
              trimmed.includes('SegmentURL media=') || 
              trimmed.includes('#EXTINF:') || 
              trimmed.includes('#program-') || 
              trimmed.includes(':URI=') ||
              trimmed.includes('${param_e_1}') ||
              trimmed.includes('${var_a_1}') ||
              trimmed.includes('${var_t}');

            if (isCorruptedCandidate && !isIntentionalCode) {
              violations.push({
                startLine,
                endLine: i + 1,
                content: trimmed
              });
            }
          }
        }
      } else if (inTemplate) {
        templateContent += line[c];
      }
    }
    if (inTemplate) {
      templateContent += '\n';
    }
  }

  return violations;
}

function scanDir(dir) {
  let allViolations = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        allViolations = allViolations.concat(scanDir(full));
      }
    } else if (entry.name.endsWith('.js')) {
      const v = checkFile(full);
      if (v.length > 0) {
        allViolations.push({ file: path.relative(ROOT_DIR, full), violations: v });
      }
    }
  }
  return allViolations;
}

// 1. Scan src/ directory
console.log('1. Scanning src/ directory for corrupted template literals...');
const srcViolations = scanDir(path.join(ROOT_DIR, 'src'));
assert.strictEqual(
  srcViolations.length,
  0,
  `Found ${srcViolations.length} file(s) with corrupted multi-line template literals: ` +
  JSON.stringify(srcViolations, null, 2)
);
console.log('✓ Zero corrupted template literals found across all src/ source files.');

// 2. Specific assertion for YouTube PoToken injection in background.js
console.log('\n2. Verifying YouTube PoToken injection paths in background scripts...');
const bgSource = fs.readFileSync(path.join(ROOT_DIR, 'background.js'), 'utf8');
assert.ok(
  bgSource.includes('inject/${param_n.file}/main-world.js'),
  'background.js must contain clean single-line inject/${param_n.file}/main-world.js path'
);
assert.ok(
  bgSource.includes('inject/${param_n.file}/index.js'),
  'background.js must contain clean single-line inject/${param_n.file}/index.js path'
);
assert.ok(
  !bgSource.includes('inject/${param_n.file}\n'),
  'background.js must NEVER contain newline after inject/${param_n.file}'
);
console.log('✓ Background PoToken script injection paths are clean and single-line.');

// 3. Specific assertion for YouTube thumbnail URLs in common and background
console.log('\n3. Verifying YouTube maxresdefault thumbnail URLs...');
assert.ok(
  !bgSource.includes('img.youtube.com/vi/${var_t[1]}\n'),
  'background.js must not contain newline in YouTube thumbnail URL'
);
const cmSource = fs.readFileSync(path.join(ROOT_DIR, 'common.js'), 'utf8');
assert.ok(
  !cmSource.includes('img.youtube.com/vi/${var_t[1]}\n'),
  'common.js must not contain newline in YouTube thumbnail URL'
);
console.log('✓ Thumbnail URLs are clean and single-line.');

// 4. Verify content script bundles
console.log('\n4. Verifying content-script.js bundle...');
const csSource = fs.readFileSync(path.join(ROOT_DIR, 'content-script.js'), 'utf8');
assert.ok(
  !csSource.includes('vimeo.com/${var_b_1}\n'),
  'content-script.js must not contain newline in Vimeo config URL'
);
assert.ok(
  !csSource.includes('hls.tuoitre.vn/${var_u}\n'),
  'content-script.js must not contain newline in TuoiTre HLS URL'
);
console.log('✓ Content script media platform URLs are clean and single-line.');

console.log('\n======================================================');
console.log('🎉 ALL TEMPLATE LITERAL SAFETY CHECKS PASSED (0 ERRORS)!');
console.log('======================================================\n');
