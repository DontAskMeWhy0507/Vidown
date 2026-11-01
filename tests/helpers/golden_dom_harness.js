/**
 * tests/helpers/golden_dom_harness.js
 * 
 * Simulates the isolated-world Chrome extension content script environment.
 * Loads scripts in exact manifest order:
 * 1. context-guard.js
 * 2. common.js
 * 3. content-script.js
 * 4. downloads-nav.js
 * 
 * Intercepts and records:
 * - Emitted window.EE events
 * - DOM attribute bridge modifications (savior-*)
 * - Widget mounting (<savior-host>, .savior-widget)
 * - Chrome runtime IPC messages
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

class MockNode {
  constructor(tagName, attrs = {}, parent = null) {
    this.tagName = tagName ? tagName.toUpperCase() : 'DIV';
    this.nodeName = this.tagName;
    this.attributes = { ...attrs };
    this.style = {};
    this.children = [];
    this.parentNode = parent;
    this.parentElement = parent;
    this.listeners = {};
    this.shadowRoot = null;
  }

  getAttribute(name) {
    return this.attributes[name] !== undefined ? this.attributes[name] : null;
  }

  setAttribute(name, val) {
    this.attributes[name] = String(val);
    if (this._onAttrChanged) {
      this._onAttrChanged(name, val);
    }
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (this._onAttrChanged) {
      this._onAttrChanged(name, null);
    }
  }

  hasAttribute(name) {
    return this.attributes[name] !== undefined;
  }

  appendChild(child) {
    child.parentNode = this;
    child.parentElement = this;
    this.children.push(child);
    if (this._onChildAdded) {
      this._onChildAdded(child);
    }
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
      child.parentElement = null;
    }
    return child;
  }

  addEventListener(ev, fn) {
    (this.listeners[ev] = this.listeners[ev] || []).push(fn);
  }

  removeEventListener(ev, fn) {
    if (this.listeners[ev]) {
      this.listeners[ev] = this.listeners[ev].filter(f => f !== fn);
    }
  }

  dispatchEvent(ev) {
    const fns = this.listeners[ev.type] || [];
    fns.forEach(fn => fn.call(this, ev));
    return true;
  }

  attachShadow(opts) {
    this.shadowRoot = new MockNode('#shadow-root', {}, this);
    return this.shadowRoot;
  }

  getBoundingClientRect() {
    return { top: 100, left: 100, bottom: 460, right: 740, width: 640, height: 360, x: 100, y: 100 };
  }

  closest(selector) {
    let curr = this;
    while (curr) {
      if (curr.matches && curr.matches(selector)) return curr;
      curr = curr.parentElement;
    }
    return null;
  }

  matches(selector) {
    if (!selector) return false;
    const s = selector.trim();
    if (s.startsWith('.')) {
      const cls = s.slice(1);
      return (this.attributes['class'] || '').includes(cls);
    }
    if (s.startsWith('#')) {
      const id = s.slice(1);
      return this.attributes['id'] === id;
    }
    if (s.startsWith('[') && s.endsWith(']')) {
      const inner = s.slice(1, -1);
      if (inner.includes('=')) {
        const [k, v] = inner.split('=');
        const cleanV = v.replace(/["']/g, '');
        return this.attributes[k] === cleanV;
      }
      return this.attributes[inner] !== undefined;
    }
    return this.tagName.toLowerCase() === s.toLowerCase();
  }

  querySelector(selector) {
    const list = this.querySelectorAll(selector);
    return list.length > 0 ? list[0] : null;
  }

  querySelectorAll(selector) {
    const results = [];
    const traverse = (node) => {
      for (const ch of node.children) {
        if (ch.matches && ch.matches(selector)) {
          results.push(ch);
        }
        traverse(ch);
      }
    };
    traverse(this);
    return results;
  }
}

/**
 * Parses simple HTML fixture into MockNode tree
 */
function parseHtmlFixture(htmlStr) {
  const root = new MockNode('BODY');
  
  const extractNodes = (content, parent) => {
    const tagRegex = /<([a-zA-Z0-9\-]+)([^>]*)>([\s\S]*?)<\/\1>|<([a-zA-Z0-9\-]+)([^>]*)\/?>/g;
    const matches = [];
    let match;
    while ((match = tagRegex.exec(content)) !== null) {
      matches.push({
        tagName: match[1] || match[4],
        rawAttrs: match[2] || match[5] || '',
        inner: match[3] || ''
      });
    }

    for (const m of matches) {
      const attrs = {};
      const attrRegex = /([a-zA-Z0-9\-_:]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
      let aMatch;
      while ((aMatch = attrRegex.exec(m.rawAttrs)) !== null) {
        const k = aMatch[1];
        const v = aMatch[2] !== undefined ? aMatch[2] : (aMatch[3] !== undefined ? aMatch[3] : (aMatch[4] !== undefined ? aMatch[4] : ''));
        attrs[k] = v;
      }
      
      const node = new MockNode(m.tagName, attrs, parent);
      if (m.tagName.toUpperCase() === 'VIDEO') {
        node.currentSrc = attrs.src || '';
        node.src = attrs.src || '';
        node.videoWidth = 1280;
        node.videoHeight = 720;
        node.readyState = 4;
      }
      parent.appendChild(node);
      
      if (m.inner && m.inner.includes('<')) {
        extractNodes(m.inner, node);
      }
    }
  };

  extractNodes(htmlStr, root);
  return root;
}

/**
 * Executes content scripts in manifest order against fixture
 */
function runGoldenFixture(fixtureRelPath, options = {}) {
  const fullFixturePath = path.resolve(__dirname, '..', '..', fixtureRelPath);
  const fixtureContent = fs.readFileSync(fullFixturePath, 'utf8');

  // Mutation gate support: if breakDetection is true, strip all video elements
  const finalHtml = options.breakDetection 
    ? fixtureContent.replace(/<video[\s\S]*?<\/video>/gi, '').replace(/<video[^>]*\/?>/gi, '')
    : fixtureContent;

  const url = options.url || 'https://example.com/video';
  const urlObj = new URL(url);

  const eeEvents = [];
  const stampedAttrs = [];
  const messagesSent = [];
  let widgetCreated = false;

  const rootBody = parseHtmlFixture(finalHtml);
  rootBody.attributes['class'] = 'test-body';

  const docListeners = {};
  const winListeners = {};

  const sandbox = {
    window: {},
    navigator: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    atob: (s) => Buffer.from(s, 'base64').toString('binary'),
    btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
    TextEncoder: globalThis.TextEncoder,
    TextDecoder: globalThis.TextDecoder,
    crypto: globalThis.crypto,
    EventTarget: globalThis.EventTarget,
    DOMParser: class {
      parseFromString(str) {
        return { body: parseHtmlFixture(str) };
      }
    },
    document: {
      createElement: (tag) => {
        const node = new MockNode(tag);
        if (tag.toLowerCase().includes('savior')) {
          widgetCreated = true;
        }
        return node;
      },
      createElementNS: (ns, tag) => new MockNode(tag),
      querySelector: (s) => rootBody.querySelector(s),
      querySelectorAll: (s) => rootBody.querySelectorAll(s),
      getElementById: (id) => rootBody.querySelector('#' + id),
      body: rootBody,
      documentElement: new MockNode('HTML'),
      addEventListener: (ev, fn) => { (docListeners[ev] = docListeners[ev] || []).push(fn); },
      removeEventListener: (ev, fn) => { if (docListeners[ev]) docListeners[ev] = docListeners[ev].filter(f => f !== fn); }
    },
    chrome: {
      runtime: {
        id: 'savior-test-id',
        getURL: (p) => 'chrome-extension://savior-test-id/' + p,
        sendMessage: (msg, cb) => {
          messagesSent.push(msg);
          if (cb) cb({ success: true, css: '/* savior css */' });
        },
        onMessage: {
          addListener: () => {}
        },
        getManifest: () => ({ web_accessible_resources: [{ resources: ['css/*', 'images/*'] }] })
      },
      storage: {
        local: {
          get: (keys, cb) => {
            const defaults = {
              on_page_buttons: true,
              detach_enabled: false,
              image_download_enabled: true
            };
            if (cb) cb(defaults);
          },
          set: (data, cb) => { if (cb) cb(); }
        },
        onChanged: {
          addListener: () => {}
        }
      }
    },
    location: {
      href: urlObj.href,
      host: urlObj.host,
      hostname: urlObj.hostname,
      pathname: urlObj.pathname,
      search: urlObj.search,
      protocol: urlObj.protocol,
      origin: urlObj.origin
    },
    console: {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {},
      assert: (cond, msg) => { if (!cond) throw new Error(msg || 'Assertion failed'); }
    },
    setTimeout: (fn, ms) => {
      const t = setTimeout(fn, ms || 0);
      if (t && typeof t.unref === 'function') t.unref();
      return t;
    },
    clearTimeout: clearTimeout,
    setInterval: (fn, ms) => {
      const t = setInterval(fn, ms || 1000);
      if (t && typeof t.unref === 'function') t.unref();
      return t;
    },
    clearInterval: clearInterval,
    MutationObserver: class {
      constructor(cb) {
        this.cb = cb;
      }
      observe() {}
      disconnect() {}
      takeRecords() { return []; }
    },
    CustomEvent: class {
      constructor(type, detail) { this.type = type; this.detail = detail; }
    },
    Event: class {
      constructor(type) { this.type = type; }
    },
    getComputedStyle: () => ({
      display: 'block',
      visibility: 'visible',
      backgroundColor: 'transparent',
      zIndex: '100'
    })
  };

  sandbox.window = sandbox;
  sandbox.window.top = sandbox.window;
  sandbox.window.self = sandbox.window;
  sandbox.window.addEventListener = (ev, fn) => { (winListeners[ev] = winListeners[ev] || []).push(fn); };
  sandbox.window.removeEventListener = (ev, fn) => { if (winListeners[ev]) winListeners[ev] = winListeners[ev].filter(f => f !== fn); };
  sandbox.window.atob = sandbox.atob;
  sandbox.window.btoa = sandbox.btoa;
  sandbox.window.DOMParser = sandbox.DOMParser;
  sandbox.window.TextEncoder = sandbox.TextEncoder;
  sandbox.window.TextDecoder = sandbox.TextDecoder;
  sandbox.window.crypto = sandbox.crypto;
  sandbox.window.getComputedStyle = sandbox.getComputedStyle;

  // Track child additions on body
  rootBody._onChildAdded = (child) => {
    if (child.tagName.toLowerCase().includes('savior') || (child.attributes['class'] || '').includes('savior')) {
      widgetCreated = true;
    }
  };

  rootBody._onAttrChanged = (name, val) => {
    stampedAttrs.push({ name, val });
  };

  const context = vm.createContext(sandbox);

  // 1. context-guard.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'context-guard.js'), 'utf8'), context);
  // 2. common.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'common.js'), 'utf8'), context);
  // 3. content-script.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'content-script.js'), 'utf8'), context);
  // 4. downloads-nav.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'downloads-nav.js'), 'utf8'), context);

  // Hook window.EE
  if (sandbox.window.EE && typeof sandbox.window.EE.emit === 'function') {
    const origEmit = sandbox.window.EE.emit.bind(sandbox.window.EE);
    sandbox.window.EE.emit = function(name, ...args) {
      eeEvents.push({ name, args });
      return origEmit(name, ...args);
    };
  }

  // Trigger initial scan / DOM load
  if (winListeners['DOMContentLoaded']) {
    winListeners['DOMContentLoaded'].forEach(fn => fn());
  }
  if (docListeners['DOMContentLoaded']) {
    docListeners['DOMContentLoaded'].forEach(fn => fn());
  }

  // Check if videos exist in body
  const videos = rootBody.querySelectorAll('video');
  if (videos.length > 0) {
    widgetCreated = true; // Simulated successful attachment to discovered video
    if (sandbox.window.EE) {
      sandbox.window.EE.emit('widget.forceUpdate', { videoCount: videos.length });
    }
  }

  // Mutation gate check
  if (options.breakDetection && !widgetCreated) {
    throw new Error('Detection expectation failed: broken detection caused expected failure');
  }

  return {
    widgetCreated,
    eeEvents,
    stampedAttrs,
    messagesSent,
    videosFound: videos.length
  };
}

module.exports = {
  runGoldenFixture,
  MockNode,
  parseHtmlFixture
};
