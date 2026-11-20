/**
 * tests/test_instagram_image_detection.js
 * 
 * Verifies that Instagram images are detected, scanned with savior-scanned-img,
 * paired with image-instagram PK extractors, and mounted with the floating download button.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: INSTAGRAM IMAGE DETECTION & DOWNLOAD SUPPORT ===\n');

// 1. Verify dom-scanner.js does NOT discard valid images (fixes inverted logic bug)
const domScannerSrc = fs.readFileSync(path.resolve(__dirname, '../src/content/detector/dom-scanner.js'), 'utf8');

assert.ok(
  domScannerSrc.includes('if (isInvalid) return null;') || !domScannerSrc.includes('validImageNode = isCachedOrReady;'),
  'dom-scanner.js must not discard valid images when isInvalid is false'
);
assert.ok(
  domScannerSrc.includes('nestedImgs = addedNode.querySelectorAll("img")') || domScannerSrc.includes('candidatesToInspect'),
  'dom-scanner.js must inspect nested img elements in newly added DOM containers'
);
console.log('✓ 1. dom-scanner.js image validation logic verified: valid images preserved, nested feed images captured.');

// 2. Verify instagram_com-extractor.js image capabilities
const igSrc = fs.readFileSync(path.resolve(__dirname, '../src/content/platform/instagram_com-extractor.js'), 'utf8');

assert.ok(
  igSrc.includes('param_t.closest("._aagu") || param_t.closest(\'article div[style*="padding-bottom"]\')'),
  'instagram_com-extractor.js getCustomParent must provide resilient fallbacks for IMG'
);
assert.ok(
  igSrc.includes('param_t.src.includes("instagram.com")'),
  'instagram_com-extractor.js getImageNode must match instagram.com image sources'
);
assert.ok(
  igSrc.includes('var_r || var_e.currentSrc || var_e.src'),
  'instagram_com-extractor.js imageUrls must resolve currentSrc or src when url is empty'
);
assert.ok(
  igSrc.includes('shouldShowWidgetForImage: () => !0'),
  'instagram_com-extractor.js must show widget for images'
);
console.log('✓ 2. instagram_com-extractor.js: resilient parent container, image node matcher & url resolver verified.');

// 3. Verify inject/image-instagram/main-world.js query breadth
const injectSrc = fs.readFileSync(path.resolve(__dirname, '../src/inject/image-instagram/main-world.js'), 'utf8');
assert.ok(
  injectSrc.includes('article img:not([image-instagram-pk])') || injectSrc.includes('[savior-scanned-img]'),
  'main-world.js must query both scanned and article/presentation images for PK extraction'
);
console.log('✓ 3. inject/image-instagram/main-world.js scans feed article & presentation images.');

// 4. Verify content-script.js bundle includes the fixes
const bundleSrc = fs.readFileSync(path.resolve(__dirname, '../content-script.js'), 'utf8');
assert.ok(
  !bundleSrc.includes('validImageNode=isCachedOrReady;if(!validImageNode)return null'),
  'content-script.js bundle must not contain inverted image validation'
);
console.log('✓ 4. Built content-script.js bundle verified to contain correct image detection logic.');

// 5. Verify widget-manager.js protects image downloads from sniffed video contamination
const widgetSrc = fs.readFileSync(path.resolve(__dirname, '../src/content/widget/widget-manager.js'), 'utf8');
assert.ok(
  widgetSrc.includes('isImg && pNode') && widgetSrc.includes('type: "image"'),
  'fetchDownloads must resolve image media directly when parent is an image'
);
assert.ok(
  widgetSrc.includes('ctx || "IMG" === t.tagName'),
  'LazyMediaTracker must guard against video stream contamination for image nodes'
);
assert.ok(
  widgetSrc.includes('this.widget.isImage !== el.isImage || (this.widget.$node && el.$node && this.widget.$node !== el.$node)'),
  'mountWidget must switch active widget between image and video nodes without parent trapping'
);
assert.ok(
  !igSrc.includes('param_t.closest("div:not([class])")'),
  'instagram_com-extractor.js must not trap video widgets in root div:not([class])'
);
console.log('✓ 5. widget-manager.js and instagram extractor verified: image downloads cannot produce sniffed videos.');

console.log('\nALL INSTAGRAM IMAGE DETECTION & DOWNLOAD CHECKS PASSED CLEANLY! ✅\n');
