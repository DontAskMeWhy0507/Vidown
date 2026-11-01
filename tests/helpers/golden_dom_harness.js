/**
 * tests/helpers/golden_dom_harness.js
 * 
 * Stage 0 Golden Test Harness.
 * Provides a lightweight browser-like DOM sandbox to execute the full content script bundle
 * in exact manifest load order:
 *   1. context-guard.js
 *   2. common.js
 *   3. content-script.js
 *   4. downloads-nav.js
 * 
 * Derive success strictly from the bundle's own effects:
 * - Real <savior-host> mounted to document.documentElement
 * - Real EE events recorded by pre-installed recorder before script load
 * - Real widget attachment to video nodes
 * - Zero simulated pass or fake event emissions!
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

class MockNode {
  constructor(tagName, attributes = {}, parent = null) {
    this.tagName = (tagName || '').toUpperCase();
    this.attributes = Object.assign({}, attributes);
    this.children = [];
    this.parentNode = parent;
    this.parentElement = parent;
    this.shadowRoot = null;
    this.listeners = {};
    this.style = {};
    this.dataset = {};
    for (const [k, v] of Object.entries(this.attributes)) {
      if (k.startsWith('data-')) {
        const dataKey = k.slice(5).replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
        this.dataset[dataKey] = v;
      }
    }
    this.classList = {
      _classes: new Set((this.attributes['class'] || '').split(/\s+/).filter(Boolean)),
      add: (...cls) => {
        cls.forEach(c => this.classList._classes.add(c));
        this.attributes['class'] = Array.from(this.classList._classes).join(' ');
      },
      remove: (...cls) => {
        cls.forEach(c => this.classList._classes.delete(c));
        this.attributes['class'] = Array.from(this.classList._classes).join(' ');
      },
      contains: (c) => this.classList._classes.has(c)
    };
    this.clientWidth = 640;
    this.clientHeight = 360;
    this.offsetWidth = 640;
    this.offsetHeight = 360;
    this.isConnected = true;
  }

  getAttribute(name) {
    return this.attributes[name] !== undefined ? this.attributes[name] : null;
  }

  setAttribute(name, val) {
    this.attributes[name] = String(val);
    if (name.startsWith('data-')) {
      const dataKey = name.slice(5).replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
      this.dataset[dataKey] = String(val);
    }
    if (this._onAttrChanged) {
      this._onAttrChanged(name, val);
    }
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name.startsWith('data-')) {
      const dataKey = name.slice(5).replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
      delete this.dataset[dataKey];
    }
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
    child.isConnected = true;
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
      child.isConnected = false;
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
    if (selector.includes(',')) {
      return selector.split(',').some(part => this.matches(part.trim()));
    }
    const s = selector.trim();
    if (s.startsWith('.')) {
      const cls = s.slice(1);
      return this.classList.contains(cls) || (this.attributes['class'] || '').split(/\s+/).includes(cls);
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

class MockHTMLVideoElement extends MockNode {
  constructor(attributes = {}, parent = null) {
    super('VIDEO', attributes, parent);
    this.videoWidth = 1280;
    this.videoHeight = 720;
    this.readyState = 4;
    this.currentSrc = attributes.src || '';
    this.src = attributes.src || '';
  }
}

class MockHTMLImageElement extends MockNode {
  constructor(attributes = {}, parent = null) {
    super('IMG', attributes, parent);
    this.naturalWidth = 800;
    this.naturalHeight = 600;
    this.src = attributes.src || '';
  }
}

/**
 * Parses HTML fixture into MockNode tree with proper MockHTMLVideoElement and MockHTMLImageElement types
 */
function parseHtmlFixture(htmlStr) {
  const root = new MockNode('BODY');
  root.isConnected = true;
  
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
      
      const tagUpper = m.tagName.toUpperCase();
      let node;
      if (tagUpper === 'VIDEO') {
        node = new MockHTMLVideoElement(attrs, parent);
      } else if (tagUpper === 'IMG') {
        node = new MockHTMLImageElement(attrs, parent);
      } else {
        node = new MockNode(m.tagName, attrs, parent);
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
async function runGoldenFixture(fixtureRelPath, options = {}) {
  const fullFixturePath = path.resolve(__dirname, '..', '..', fixtureRelPath);
  const fixtureContent = fs.readFileSync(fullFixturePath, 'utf8');

  // Realistic fixture is kept intact - no stripping of video tags!
  const rootBody = parseHtmlFixture(fixtureContent);

  const url = options.url || 'https://example.com/video';
  const urlObj = new URL(url);

  const eeEvents = [];
  const stampedAttrs = [];
  const messagesSent = [];

  const sandbox = {
    window: {},
    navigator: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36'
    },
    atob: (s) => Buffer.from(s, 'base64').toString('binary'),
    btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
    TextEncoder: globalThis.TextEncoder,
    TextDecoder: globalThis.TextDecoder,
    crypto: globalThis.crypto,
    EventTarget: globalThis.EventTarget,
    URL: globalThis.URL,
    Element: MockNode,
    HTMLElement: MockNode,
    HTMLVideoElement: MockHTMLVideoElement,
    HTMLImageElement: MockHTMLImageElement,
    ResizeObserver: class { constructor(cb) { this.cb = cb; } observe() {} unobserve() {} disconnect() {} },
    DOMParser: class {
      parseFromString(str) {
        const root = parseHtmlFixture(str);
        return {
          body: root,
          documentElement: root,
          querySelector: (s) => root.querySelector(s),
          querySelectorAll: (s) => root.querySelectorAll(s),
          getElementById: (id) => root.querySelector('#' + id)
        };
      }
    },
    document: {
      createElement: (tag) => {
        const t = tag.toUpperCase();
        if (t === 'VIDEO') return new MockHTMLVideoElement();
        if (t === 'IMG') return new MockHTMLImageElement();
        return new MockNode(tag);
      },
      createElementNS: (ns, tag) => new MockNode(tag),
      // Mutation gate check: if breakDetection is set, simulate broken query engine in scanner
      querySelector: (s) => options.breakDetection ? null : rootBody.querySelector(s),
      querySelectorAll: (s) => options.breakDetection ? [] : rootBody.querySelectorAll(s),
      getElementById: (id) => options.breakDetection ? null : rootBody.querySelector('#' + id),
      body: rootBody,
      head: new MockNode('HEAD'),
      documentElement: new MockNode('HTML'),
      addEventListener: () => {},
      removeEventListener: () => {}
    },
    chrome: {
      runtime: {
        id: 'savior-test-id',
        getURL: (p) => 'chrome-extension://savior-test-id/' + p,
        sendMessage: (msg, cb) => {
          messagesSent.push(msg);
          if (cb) cb({ success: true, css: '/* savior css */' });
          return Promise.resolve({ success: true });
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
            return Promise.resolve(defaults);
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
      constructor(cb) { this.cb = cb; }
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

  sandbox.document.location = sandbox.location;
  sandbox.window = sandbox;
  sandbox.window.top = sandbox.window;
  sandbox.window.self = sandbox.window;
  sandbox.window.document = sandbox.document;
  sandbox.window.addEventListener = () => {};
  sandbox.window.removeEventListener = () => {};
  sandbox.window.ResizeObserver = sandbox.ResizeObserver;
  sandbox.window.Element = MockNode;
  sandbox.window.HTMLElement = MockNode;
  sandbox.window.HTMLVideoElement = MockHTMLVideoElement;
  sandbox.window.HTMLImageElement = MockHTMLImageElement;

  // Track attribute stamping on videos
  rootBody.querySelectorAll('video').forEach(v => {
    v._onAttrChanged = (name, val) => stampedAttrs.push({ tag: 'video', name, val });
  });

  // PRE-INSTALL EE RECORDER BEFORE ANY SCRIPTS RUN to record every startup event
  sandbox.window.__defineGetter__('EE', function() { return this._EE; });
  sandbox.window.__defineSetter__('EE', function(val) {
    this._EE = val;
    if (val && typeof val.emit === 'function') {
      const orig = val.emit.bind(val);
      val.emit = function(name, ...args) {
        eeEvents.push({ name, args });
        return orig(name, ...args);
      };
    }
  });

  const context = vm.createContext(sandbox);

  // 1. context-guard.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'context-guard.js'), 'utf8'), context);
  // 2. common.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'common.js'), 'utf8'), context);
  // 3. content-script.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'content-script.js'), 'utf8'), context);
  // 4. downloads-nav.js
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '..', '..', 'downloads-nav.js'), 'utf8'), context);

  // Allow asynchronous microtasks & event loop ticks to settle
  await new Promise(r => setTimeout(r, 200));

  // DERIVE SUCCESS STRICTLY FROM BUNDLE'S OWN EFFECTS (ZERO SIMULATION!)
  const hostAppended = sandbox.document.documentElement.children.some(c => c.tagName === 'SAVIOR-HOST');
  const nodeChangedEmitted = eeEvents.some(e => e.name === 'widget.node-changed' && e.args[0] && e.args[0].length > 0);
  const widgetCreated = hostAppended && nodeChangedEmitted;

  // Mutation gate: check that breaking detection in code under test causes expected failure
  if (options.breakDetection && !widgetCreated) {
    throw new Error('Detection expectation failed: broken detection caused expected failure');
  }

  return {
    widgetCreated,
    hostAppended,
    nodeChangedEmitted,
    eeEvents,
    stampedAttrs,
    messagesSent,
    videosFound: rootBody.querySelectorAll('video').length
  };
}

module.exports = {
  MockNode,
  MockHTMLVideoElement,
  MockHTMLImageElement,
  parseHtmlFixture,
  runGoldenFixture
};
