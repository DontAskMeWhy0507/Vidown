/**
 * src/content/index.js
 * Clean modular entry point for Vidown Content Script.
 * Assembles DOM scanner, network/media sniffer, event bus, and floating widget UI.
 * Zero eval-execution, 100% Manifest V3 CSP compliant.
 */

const { eventBus } = require('./events/bus.js');
const { matchSiteRules } = require('./detector/site-rules.js');
const { initMediaSniffer } = require('./detector/media-sniffer.js');
const { initDomScanner } = require('./detector/dom-scanner.js');
const { createHostElement } = require('./widget/host-element.js');
const { createWidgetUI } = require('./widget/widget-ui.js');
const { bindWidgetEvents } = require('./widget/widget-events.js');

// --- CSS Prefetcher & Inline Injector ---
const _saviorCssCache = {};
const _saviorCssCallbacks = {};

function _saviorCssContextAlive() {
  try {
    return typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id && chrome.runtime.getURL;
  } catch (_) {
    return false;
  }
}

function _applySaviorCss(target, css, cssPath) {
  if (!target || typeof target.appendChild !== 'function' || !css) {
    return;
  }
  try {
    if (typeof target.querySelectorAll === 'function') {
      const existing = target.querySelectorAll('style[data-savior-css]');
      for (let i = 0; i < existing.length; i++) {
        if (existing[i].getAttribute('data-savior-css') === cssPath) {
          return;
        }
      }
    }
    const sEl = (target.ownerDocument || document).createElement('style');
    sEl.setAttribute('data-savior-css', cssPath);
    sEl.textContent = css;
    target.appendChild(sEl);
  } catch (_) {}
}

function _saviorCssFallbackLink(target, cssPath) {
  try {
    if (!_saviorCssContextAlive()) return;
    if (!target || typeof target.appendChild !== 'function') return;
    if (typeof location !== 'undefined' && location.protocol !== 'chrome-extension:') return;

    const l = (target.ownerDocument || document).createElement('link');
    l.rel = 'stylesheet';
    l.href = chrome.runtime.getURL(cssPath);
    target.appendChild(l);
  } catch (_) {}
}

function _injectSaviorCss(target, cssPath) {
  if (!cssPath) return;
  if (_saviorCssCache[cssPath]) {
    if (target) {
      _applySaviorCss(target, _saviorCssCache[cssPath], cssPath);
    }
    return;
  }

  if (!_saviorCssCallbacks[cssPath]) {
    _saviorCssCallbacks[cssPath] = [];
    if (_saviorCssContextAlive()) {
      try {
        const _reqMsg = chrome.runtime.sendMessage({
          action: 'getContentCss',
          path: cssPath
        }, (res) => {
          if (chrome.runtime.lastError) return;
          if (res && res.css) {
            _saviorCssCache[cssPath] = res.css;
            const cbs = _saviorCssCallbacks[cssPath] || [];
            delete _saviorCssCallbacks[cssPath];
            for (let i = 0; i < cbs.length; i++) {
              try { cbs[i](res.css); } catch (_) {}
            }
          }
        });
        if (_reqMsg && typeof _reqMsg.catch === 'function') {
          _reqMsg.catch(() => {});
        }
      } catch (_) {}
    }
  }

  if (target) {
    _saviorCssCallbacks[cssPath].push((css) => {
      _applySaviorCss(target, css, cssPath);
    });
  }
}

// Prefetch default styles
_injectSaviorCss(null, 'css/content-script.css');

// --- Widget Attachment & Management ---
const attachedWidgets = new WeakMap();

function attachWidgetToMedia(mediaItem) {
  if (!mediaItem || !mediaItem.element) return null;
  const videoEl = mediaItem.element;

  if (attachedWidgets.has(videoEl)) {
    return attachedWidgets.get(videoEl);
  }

  const doc = videoEl.ownerDocument || (typeof document !== 'undefined' ? document : null);
  if (!doc) return null;

  const host = createHostElement(doc);
  const shadow = host.shadowRoot || host;

  // Inject content stylesheet into Shadow DOM
  _injectSaviorCss(shadow, 'css/content-script.css');

  // Create UI
  const widgetUI = createWidgetUI([mediaItem], doc);
  shadow.appendChild(widgetUI);

  // Bind events
  bindWidgetEvents(widgetUI, {
    onDownload: (item) => {
      eventBus.emit('download:request', item);
      if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
          action: 'downloadMedia',
          media: item
        });
      }
    }
  });

  // Position and attach host near the video element
  const parent = videoEl.parentElement || doc.body;
  if (parent) {
    try {
      if (window.getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
      }
    } catch (_) {}
    parent.appendChild(host);
  }

  attachedWidgets.set(videoEl, host);
  return host;
}

// --- Content Script Initialization ---
function initContentScript(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc) return;

  // 1. Initialize DOM Scanner for video/audio elements
  const scanner = initDomScanner((mediaItem) => {
    eventBus.emit('media:detected', mediaItem);
    attachWidgetToMedia(mediaItem);
  }, doc);

  // 2. Initialize Media/Network Sniffer
  const sniffer = initMediaSniffer((mediaItem) => {
    eventBus.emit('media:detected', mediaItem);
  }, typeof window !== 'undefined' ? window : null);

  // 3. Listen for chrome.runtime messages
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === 'ping') {
        sendResponse({ status: 'ok', url: location.href });
      } else if (message.action === 'rescan') {
        scanner.scan();
        sendResponse({ status: 'scanned' });
      }
    });
  }

  return { scanner, sniffer };
}

// Auto-run if running in browser context
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initContentScript());
  } else {
    initContentScript();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initContentScript,
    attachWidgetToMedia,
    _applySaviorCss,
    _injectSaviorCss,
    _saviorCssCache
  };
}
