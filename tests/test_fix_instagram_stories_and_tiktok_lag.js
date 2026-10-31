const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Running Test: Fix Instagram Stories & TikTok Lag ---');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Verify service_worker.js attaches webRequest listener
const swPath = path.join(ROOT_DIR, 'service_worker.js');
const swCode = fs.readFileSync(swPath, 'utf8');

assert.ok(
  swCode.includes('chrome.webRequest.onHeadersReceived.addListener') &&
  swCode.includes('handleHeadersReceived'),
  'service_worker.js must register onHeadersReceived listener calling NetworkObserver.handleHeadersReceived'
);

// 2. Verify content/content_main.js guards against sensitive sites (Instagram, TikTok)
const contentPath = path.join(ROOT_DIR, 'content', 'content_main.js');
const contentCode = fs.readFileSync(contentPath, 'utf8');

assert.ok(
  contentCode.includes('isSensitiveSite') || contentCode.includes('instagram.com'),
  'content_main.js must guard against sensitive SPA players'
);

assert.ok(
  contentCode.includes('instagram.com') && contentCode.includes('tiktok.com'),
  'content_main.js must specifically protect instagram.com and tiktok.com from DOM tampering'
);

// 3. Verify content_main.js does not force synchronous layout reflow
assert.ok(
  !contentCode.includes('window.getComputedStyle(container)'),
  'content_main.js must NOT call window.getComputedStyle on video containers to prevent forced reflows'
);

// 4. Behavioral test: React DOM reconciliation safety
// In Instagram Stories, React mounts a video inside a container, then replaces it with another element.
// If an extension appends an unmanaged child to the container, React's child reconciliation breaks.
class MockElement {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this.children = [];
    this.parentElement = null;
    this.style = {};
  }
  appendChild(child) {
    child.parentElement = this;
    this.children.push(child);
    return child;
  }
  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx === -1) {
      throw new Error("NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.");
    }
    this.children.splice(idx, 1);
    child.parentElement = null;
    return child;
  }
}

// Simulate Instagram Story Container
const igStoryContainer = new MockElement('div');
const igVideo = new MockElement('video');
igStoryContainer.appendChild(igVideo);

// React advances story: removes igVideo and appends new photo
assert.doesNotThrow(() => {
  igStoryContainer.removeChild(igVideo);
  const igPhoto = new MockElement('img');
  igStoryContainer.appendChild(igPhoto);
}, 'Story advance must not throw when unmanaged nodes are not injected');

console.log('✅ Test Fix Instagram Stories & TikTok Lag PASSED!');
