const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Test Task 5: Assemble Content Script Entry Point & DOM Scanner
console.log('--- Testing Content Script Assembly & DOM Scanner ---');

const { initDomScanner } = require('../src/content/detector/dom-scanner.js');

// 1. Verify initDomScanner with video element detection
const mockElements = [];
const mockDoc = {
  querySelectorAll(sel) {
    if (sel === 'video, audio') return mockElements;
    return [];
  },
  body: {
    appendChild() {}
  }
};

const videoEl = {
  tagName: 'VIDEO',
  src: 'https://example.com/test_movie.mp4',
  currentSrc: 'https://example.com/test_movie.mp4',
  getBoundingClientRect() { return { top: 100, left: 100, width: 640, height: 360 }; },
  parentElement: { appendChild() {} }
};
mockElements.push(videoEl);

let detectedMedia = null;
const scanner = initDomScanner((item) => {
  detectedMedia = item;
}, mockDoc);

assert.ok(scanner, 'initDomScanner must return scanner controller');
assert.ok(detectedMedia, 'DOM scanner must detect the initial video element');
assert.strictEqual(detectedMedia.url, 'https://example.com/test_movie.mp4', 'Detected media URL must match video src');
console.log('✓ Test 1 Passed: initDomScanner reliably scans DOM video elements.');

// 2. Verify static content of src/content/index.js
const entryPath = path.join(__dirname, '..', 'src', 'content', 'index.js');
assert.ok(fs.existsSync(entryPath), 'src/content/index.js must exist');
const entryCode = fs.readFileSync(entryPath, 'utf8');

assert.ok(!entryCode.includes('eval('), 'Content script must NOT contain eval()');
assert.ok(entryCode.includes('_applySaviorCss'), 'Content script must include CSS prefetcher/injector');
assert.ok(entryCode.includes('initDomScanner'), 'Content script must initialize DOM scanner');
console.log('✓ Test 2 Passed: src/content/index.js conforms to safety & initialization specs.');

console.log('\nALL CONTENT SCRIPT ASSEMBLY TESTS PASSED! 🎉');
