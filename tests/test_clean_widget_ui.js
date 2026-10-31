const assert = require('assert');

// Test Task 4: Clean Floating Widget Renderer (Shadow DOM UI)
console.log('--- Testing Clean Floating Widget Renderer ---');

const { createHostElement } = require('../src/content/widget/host-element.js');
const { renderWidgetUI } = require('../src/content/widget/widget-ui.js');
const { bindWidgetEvents } = require('../src/content/widget/widget-events.js');

// Mock DOM Environment for Node.js test
function createMockDoc() {
  return {
    createElement(tag) {
      const el = {
        tagName: tag.toUpperCase(),
        style: {},
        className: '',
        children: [],
        attributes: {},
        innerHTML: '',
        addEventListener(evt, fn) {
          this._handlers = this._handlers || {};
          this._handlers[evt] = this._handlers[evt] || [];
          this._handlers[evt].push(fn);
        },
        dispatchEvent(evt) {
          const handlers = (this._handlers && this._handlers[evt]) || [];
          handlers.forEach(h => h(evt));
        },
        setAttribute(k, v) { this.attributes[k] = v; },
        getAttribute(k) { return this.attributes[k]; },
        appendChild(child) { this.children.push(child); return child; },
        querySelector(selector) {
          return this.children.find(c => c.className && c.className.includes(selector.replace('.', ''))) || null;
        },
        querySelectorAll(selector) {
          return this.children.filter(c => c.className && c.className.includes(selector.replace('.', '')));
        },
        attachShadow(opts) {
          const shadow = createMockDoc().createElement('SHADOW_ROOT');
          shadow.mode = opts.mode;
          this.shadowRoot = shadow;
          return shadow;
        }
      };
      return el;
    }
  };
}

const mockDoc = createMockDoc();

// 1. Verify createHostElement
const host = createHostElement(mockDoc);
assert.strictEqual(host.tagName, 'SAVIOR-HOST', 'Host element must be <savior-host>');
assert.ok(host.shadowRoot, 'Host element must create shadowRoot');
assert.strictEqual(host.shadowRoot.mode, 'open', 'ShadowRoot mode must be open');
assert.strictEqual(host.style.position, 'absolute', 'Host position must be absolute');
console.log('✓ Test 1 Passed: createHostElement returns <savior-host> with open Shadow DOM.');

// 2. Verify renderWidgetUI
const mediaList = [
  { id: '1', quality: '1080p', resolution: 'Full HD', ext: 'mp4', url: 'https://cdn.com/1080.mp4' },
  { id: '2', quality: '720p', resolution: 'HD', ext: 'mp4', url: 'https://cdn.com/720.mp4' },
  { id: '3', quality: 'Medium', resolution: '128kbps', ext: 'mp3', type: 'audio', url: 'https://cdn.com/audio.mp3' }
];

const rendered = renderWidgetUI(host.shadowRoot, mediaList, mockDoc);
assert.ok(rendered.widgetContainer, 'renderWidgetUI must return widgetContainer');
assert.ok(host.shadowRoot.children.length > 0, 'ShadowRoot must contain rendered widget');
console.log('✓ Test 2 Passed: renderWidgetUI injects widget structure into Shadow DOM.');

// 3. Verify bindWidgetEvents
let triggeredDownload = null;
const eventBindings = bindWidgetEvents(rendered, (item) => {
  triggeredDownload = item;
});

assert.ok(eventBindings.triggerDownload, 'bindWidgetEvents must expose triggerDownload helper');
eventBindings.triggerDownload(mediaList[0]);
assert.deepStrictEqual(triggeredDownload, mediaList[0], 'triggerDownload must dispatch selected item');
console.log('✓ Test 3 Passed: bindWidgetEvents successfully binds and dispatches actions.');

console.log('\nALL CLEAN WIDGET UI TESTS PASSED! 🎉');
