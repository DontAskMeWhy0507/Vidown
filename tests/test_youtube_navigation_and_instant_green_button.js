const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== TEST SUITE: YOUTUBE NAVIGATION & INSTANT GREEN MEDIA BUTTON ===\n');

const ytPath = path.resolve(__dirname, '../src/content/platform/youtube.js');
const ytSource = fs.readFileSync(ytPath, 'utf8');

const domHelperPath = path.resolve(__dirname, '../src/content/detector/dom-helper.js');
const domHelperSource = fs.readFileSync(domHelperPath, 'utf8');

const widgetMgrPath = path.resolve(__dirname, '../src/content/widget/widget-manager.js');
const widgetMgrSource = fs.readFileSync(widgetMgrPath, 'utf8');

// Test 1: YouTube extractor must emit widget.forceUpdate on URL change
console.log('[Test 1] Verifying youtube.js emits widget.forceUpdate on URL change...');
assert.ok(
  ytSource.includes('lastTrackedUrl != location.href') &&
  ytSource.includes('EE.emit("widget.forceUpdate")'),
  'youtube.js must emit widget.forceUpdate when lastTrackedUrl != location.href so SPA navigation updates the button'
);
console.log('✓ Test 1: youtube.js emits widget.forceUpdate on navigation!\n');

// Test 2: dom-helper.js checkCustomPlayerAttributes must recognize youtube.com for video tags, but reject iframes
console.log('[Test 2] Verifying dom-helper.js checkCustomPlayerAttributes scopes youtube.com to video tags only...');
assert.ok(
  domHelperSource.includes('tag === "video"') &&
  domHelperSource.includes('location.host.includes("youtube.com")'),
  'checkCustomPlayerAttributes must validate youtube.com video tags'
);
assert.ok(
  domHelperSource.includes('if (location.host.includes("youtube.com")) return false;'),
  'checkCustomPlayerAttributes must reject non-video tags (like iframes) on youtube.com'
);
console.log('✓ Test 2: checkCustomPlayerAttributes properly scopes youtube.com to video tags!\n');

// Test 3: youtube.js isValidVideoNode must reject non-video tags
console.log('[Test 3] Verifying youtube.js isValidVideoNode rejects non-video tags...');
assert.ok(
  ytSource.includes('node.tagName.toLowerCase() !== "video"') ||
  ytSource.includes('node.tagName.toLowerCase() === "video"'),
  'youtube.js isValidVideoNode must ensure node is a video tag to prevent iframes from hijacking widgets'
);
console.log('✓ Test 3: youtube.js isValidVideoNode rejects non-video tags!\n');

// Test 4: widget-manager.js onForceUpdate must not wipe innerHTML
console.log('[Test 4] Verifying SaviorVideoWidget.onForceUpdate does not wipe innerHTML...');
assert.ok(
  !widgetMgrSource.includes('this.$el.innerHTML = "", el = enrichMediaMeta'),
  'onForceUpdate must not wipe innerHTML as that destroys widget DOM and resets to hidden'
);
assert.ok(
  widgetMgrSource.includes('null === (ev = this.getComponent("download")) || void 0 === ev || ev.setState({ mediaObjects: el'),
  'onForceUpdate must update mediaObjects on download component directly'
);
console.log('✓ Test 4: onForceUpdate updates mediaObjects without destroying DOM!\n');

// Test 5: WidgetContainer.bindListener must listen for mousemove on video node
console.log('[Test 5] Verifying WidgetContainer.bindListener listens for mousemove...');
assert.ok(
  widgetMgrSource.includes('this.parent.$node.addEventListener("mousemove", this.onFocused'),
  'WidgetContainer must listen for mousemove so floating bar appears even if mouse was already inside player'
);
console.log('✓ Test 5: WidgetContainer listens for mousemove!\n');

// Test 6: SaviorVideoWidget.firstPaint must not lock button to disabled on video pages
console.log('[Test 6] Verifying SaviorVideoWidget.firstPaint does not force disabled (no_downloads: false)...');
assert.ok(
  widgetMgrSource.includes('no_downloads: false') || !widgetMgrSource.includes('no_downloads: true'),
  'SaviorVideoWidget.firstPaint must not hardcode no_downloads: true so button is not falsely gray on load'
);
console.log('✓ Test 6: SaviorVideoWidget does not force disabled on firstPaint!\n');

// Test 7: SaviorVideoWidget must render synchronously without hanging on GET_ABTEST
console.log('[Test 7] Verifying SaviorVideoWidget renders synchronously without GET_ABTEST Promise bottleneck...');
assert.ok(
  !widgetMgrSource.includes('testName: "skipVideo"'),
  'SaviorVideoWidget must not wait on GET_ABTEST for dead skipVideo feature'
);
assert.ok(
  widgetMgrSource.includes('this.isSkipVideoEnabled = false, this.render(), super._bindListener(this.$node)'),
  'SaviorVideoWidget must render and bind listeners immediately in constructor'
);
console.log('✓ Test 7: SaviorVideoWidget initializes and renders synchronously!\n');

// Test 8: WidgetContainer.updatePosition must cleanly position floating bar above video player
console.log('[Test 8] Verifying WidgetContainer.updatePosition positions above player...');
assert.ok(
  widgetMgrSource.includes('var aboveTop = videoTop - widgetH - 4') ||
  widgetMgrSource.includes('v = aboveTop < 0 ? videoTop : aboveTop'),
  'updatePosition must place widget cleanly above player instead of inside video'
);
console.log('✓ Test 8: WidgetContainer positions floating bar cleanly above player!\n');

// Test 9: dom-scanner.js must not block on GET_ABTEST
console.log('[Test 9] Verifying dom-scanner.js does not hang on GET_ABTEST...');
const scannerPath = path.resolve(__dirname, '../src/content/detector/dom-scanner.js');
const scannerSource = fs.readFileSync(scannerPath, 'utf8');
assert.ok(
  !scannerSource.includes('type: mediaConstants.b.GET_ABTEST'),
  'dom-scanner.js must not send GET_ABTEST for image detection'
);
console.log('✓ Test 9: dom-scanner.js operates without hanging on dead A/B testing IPC!\n');

console.log('================================================================');
console.log('ALL YOUTUBE NAVIGATION & INSTANT GREEN BUTTON TESTS PASSED! 🎉');
console.log('================================================================\n');
