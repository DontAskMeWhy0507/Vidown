// Savior Content Script - Modular Open-Source Architecture
// Generated from transparent modular source in src/content/

// --- SECTION 1: CSS PREFETCHER & INVALIDATOR GUARD ---
var _saviorCssCache = {};
var _saviorCssCallbacks = {};

function _saviorCssContextAlive() {
  try {
    return typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id && chrome.runtime.getURL;
  } catch (e) {
    return false;
  }
}

function _applySaviorCss(target, css, cssPath) {
  if (!target || typeof target.appendChild !== 'function' || !css) return;
  try {
    if (typeof target.querySelectorAll === 'function') {
      var existing = target.querySelectorAll('style[data-savior-css]');
      for (var i = 0; i < existing.length; i++) {
        if (existing[i].getAttribute('data-savior-css') === cssPath) return;
      }
    }
    var sEl = document.createElement('style');
    sEl.setAttribute('data-savior-css', cssPath);
    sEl.textContent = css;
    target.appendChild(sEl);
  } catch (_) {}
}

function _saviorCssFallbackLink(target, cssPath) {
  try {
    if (!_saviorCssContextAlive()) return;
    if (!target || typeof target.appendChild !== 'function') return;
    // On external web pages (e.g. YouTube), Chrome security blocks cross-origin extension <link> tags:
    // "Unsafe attempt to load URL chrome-extension://... Domains, protocols and ports must match".
    // Only internal extension frames may safely use <link>. Web pages always use inline <style>.
    if (typeof location !== 'undefined' && location.protocol !== 'chrome-extension:') {
      return;
    }
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = chrome.runtime.getURL(cssPath);
    target.appendChild(l);
  } catch (e) {}
}

function _injectSaviorCss(target, cssPath) {
  if (!cssPath) return;
  if (target && typeof target.appendChild !== 'function') return;

  if (_saviorCssCache[cssPath]) {
    if (target) _applySaviorCss(target, _saviorCssCache[cssPath], cssPath);
    return;
  }

  if (!_saviorCssCallbacks[cssPath]) {
    _saviorCssCallbacks[cssPath] = [];
    if (_saviorCssContextAlive()) {
      try {
        var _reqMsg = chrome.runtime.sendMessage({ action: 'getContentCss', path: cssPath }, function(res) {
          if (chrome.runtime.lastError) return;
          if (res && res.css) {
            _saviorCssCache[cssPath] = res.css;
            var cbs = _saviorCssCallbacks[cssPath] || [];
            delete _saviorCssCallbacks[cssPath];
            for (var i = 0; i < cbs.length; i++) {
              try { cbs[i](res.css); } catch (_) {}
            }
          }
        });
        if (_reqMsg && typeof _reqMsg.catch === 'function') { _reqMsg.catch(function() {}); }
      } catch (err) {}
    }
  }

  if (target) {
    _saviorCssCallbacks[cssPath].push(function(css) {
      _applySaviorCss(target, css, cssPath);
    });
  }
}

// Pre-fetch css/content-script.css on script startup so it is already in RAM
// before any video detection or widget mount occurs.
try {
  if (_saviorCssContextAlive()) {
    _injectSaviorCss(null, 'css/content-script.css');
  }
} catch (_) {}

if (typeof window !== 'undefined') {
  window._injectSaviorCss = _injectSaviorCss;
  window._saviorCssCache = _saviorCssCache;
}

// --- SECTION 2: WEBPACK RUNTIME BOOTSTRAP ---
import slots from '../slots.js';

(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    if (!modules[moduleId]) {
      throw new Error('Module ' + moduleId + ' not found in registry');
    }

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }

  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;

  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  __webpack_require__.t = function(value, mode) {
    if (1 & mode) value = __webpack_require__(value);
    if (8 & mode) return value;
    if (4 & mode && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (2 & mode && typeof value !== 'string') {
      for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    }
    return ns;
  };

  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function() { return module['default']; } : function() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  __webpack_require__.p = './';

  // Boot entry module 543
  return __webpack_require__(__webpack_require__.s = 543);
})(slots);
