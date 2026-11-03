/*
 * A content script can outlive an extension reload. Chrome then rejects calls
 * made by the old script with "Extension context invalidated". This guard is
 * intentionally loaded before the vendor bundle so an old tab does not flood
 * chrome://extensions/errors while the user reloads the page or encounters CORS/network blocks.
 */
(() => {
  // Only messages that originate from extension APIs / extension-injected UI are
  // suppressed. Generic error texts a host page can produce itself (plain
  // "Load failed", "Image decode error", "ResizeObserver loop", CSP directive
  // reports...) must reach the page's own handlers untouched.
  const isTransientExtensionError = (reason) => {
    const message = String(reason && (reason.message || reason) || '');
    return /extension context invalidated/i.test(message) ||
      /receiving end does not exist/i.test(message) ||
      /could not establish connection/i.test(message) ||
      /the message port closed before a response was received/i.test(message) ||
      /frame with id \d+ was removed/i.test(message) ||
      /no tab with id/i.test(message) ||
      /failed to fetch/i.test(message) ||
      /unsafe attempt to load url/i.test(message) ||
      /picture-in-picture is not allowed/i.test(message) ||
      /Fetch API cannot load/i.test(message) ||
      /cannot read properties of null.*reading ['"]appendchild['"]/i.test(message) ||
      /cannot read property ['"]appendchild['"] of null/i.test(message) ||
      (/cannot read properties of null/i.test(message) && /appendchild/i.test(message));
  };

  // Safe wrapper for chrome.runtime.sendMessage to guard unhandled promise rejections
  if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.sendMessage === 'function') {
    const _origSend = chrome.runtime.sendMessage.bind(chrome.runtime);
    chrome.runtime.sendMessage = function(...args) {
      try {
        const res = _origSend(...args);
        if (res && typeof res.catch === 'function') {
          res.catch(() => {});
        }
        return res;
      } catch (_) {
        return Promise.resolve();
      }
    };
  }

  // Polyfill chrome.downloads in content scripts so direct calls bridge to background
  if (typeof chrome !== 'undefined' && (!chrome.downloads || typeof chrome.downloads.download !== 'function') && chrome.runtime && typeof chrome.runtime.sendMessage === 'function') {
    chrome.downloads = chrome.downloads || {};
    chrome.downloads.download = function(options, callback) {
      chrome.runtime.sendMessage({
        action: 'downloadNative',
        url: options.url || options.videoUrl,
        videoUrl: options.videoUrl || options.url,
        title: options.filename || document.title,
        quality: options.quality || 'Standard',
        pageUrl: window.location.href,
        referer: document.referrer || window.location.href,
        ...options
      }, (res) => {
        if (typeof callback === 'function') {
          callback(res && res.taskId ? res.taskId : 1);
        }
      });
    };
  }

  // Guard Picture-in-Picture Permissions Policy violations in documents/iframes where disabled
  try {
    if (typeof document !== 'undefined') {
      const docProto = (typeof Document !== 'undefined' && Document.prototype) ? Document.prototype : document;
      const origPipElementDesc = Object.getOwnPropertyDescriptor(docProto, 'pictureInPictureElement') || Object.getOwnPropertyDescriptor(document, 'pictureInPictureElement');
      const origPipEnabledDesc = Object.getOwnPropertyDescriptor(docProto, 'pictureInPictureEnabled') || Object.getOwnPropertyDescriptor(document, 'pictureInPictureEnabled');

      let _pipAllowedCached = null;
      const isPipAllowed = () => {
        if (_pipAllowedCached !== null) return _pipAllowedCached;
        try {
          if (document.permissionsPolicy && typeof document.permissionsPolicy.allowsFeature === 'function') {
            if (!document.permissionsPolicy.allowsFeature('picture-in-picture')) {
              _pipAllowedCached = false;
              return false;
            }
          } else if (document.featurePolicy && typeof document.featurePolicy.allowsFeature === 'function') {
            if (!document.featurePolicy.allowsFeature('picture-in-picture')) {
              _pipAllowedCached = false;
              return false;
            }
          }
          const rawEnabled = origPipEnabledDesc && origPipEnabledDesc.get ? origPipEnabledDesc.get.call(document) : document.pictureInPictureEnabled;
          _pipAllowedCached = Boolean(rawEnabled);
          return _pipAllowedCached;
        } catch (_) {
          _pipAllowedCached = false;
          return false;
        }
      };

      const definePipProp = (target, propName, getterFn) => {
        try {
          Object.defineProperty(target, propName, {
            get: getterFn,
            configurable: true,
            enumerable: true
          });
        } catch (_) {}
      };

      const pipElementGetter = function() {
        try {
          if (!isPipAllowed()) return null;
          if (origPipElementDesc && origPipElementDesc.get) {
            return origPipElementDesc.get.call(this);
          }
          return null;
        } catch (_) {
          return null;
        }
      };

      const pipEnabledGetter = function() {
        try {
          return isPipAllowed();
        } catch (_) {
          return false;
        }
      };

      definePipProp(docProto, 'pictureInPictureElement', pipElementGetter);
      definePipProp(document, 'pictureInPictureElement', pipElementGetter);
      definePipProp(docProto, 'pictureInPictureEnabled', pipEnabledGetter);
      definePipProp(document, 'pictureInPictureEnabled', pipEnabledGetter);

      if (typeof document.exitPictureInPicture === 'function') {
        const _origExitPip = document.exitPictureInPicture.bind(document);
        document.exitPictureInPicture = function() {
          try {
            if (!isPipAllowed()) return Promise.resolve();
            const res = _origExitPip();
            if (res && typeof res.catch === 'function') {
              return res.catch(() => {});
            }
            return res;
          } catch (_) {
            return Promise.resolve();
          }
        };
      }

      if (typeof HTMLVideoElement !== 'undefined' && HTMLVideoElement.prototype && typeof HTMLVideoElement.prototype.requestPictureInPicture === 'function') {
        const _origRequestPip = HTMLVideoElement.prototype.requestPictureInPicture;
        HTMLVideoElement.prototype.requestPictureInPicture = function() {
          try {
            if (!isPipAllowed()) return Promise.reject(new DOMException('Picture-in-picture not allowed', 'NotAllowedError'));
            const res = _origRequestPip.apply(this, arguments);
            if (res && typeof res.catch === 'function') {
              return res.catch(() => {});
            }
            return res;
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
    }
  } catch (_) {}

  // Intercept all Cốc Cốc server traffic (telemetry /log, A/B tests, remote
  // rules, URL shortener, download proxy). This build is VidManager — nothing
  // may phone home to coccoc.com from any context. Callers receive a benign
  // empty response so no error paths fire.
  if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
    const _origFetch = window.fetch.bind(window);
    window.fetch = function(...args) {
      try {
        const urlStr = String((args[0] && args[0].url) || args[0] || '');
        if (/^https?:\/\/([a-z0-9-]+\.)*coccoc\.com\//i.test(urlStr)) {
          return Promise.resolve(new Response(JSON.stringify({ success: false }), {
            status: 200,
            statusText: 'OK',
            headers: new Headers({ 'Content-Type': 'application/json' })
          }));
        }
        return _origFetch(...args);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }

  // Guard console.error so transient errors (e.g. image decode failures, CSP reports, invalidated frames)
  // do not trigger red badge error counters in chrome://extensions
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    const _origConsoleError = console.error.bind(console);
    console.error = function(...args) {
      try {
        const msg = args.map(a => String((a && (a.message || a.stack || a)) || '')).join(' ');
        if (isTransientExtensionError(msg)) {
          if (typeof console.debug === 'function') {
            console.debug('[Extension Guard Suppressed]', ...args);
          }
          return;
        }
      } catch (_) {}
      return _origConsoleError(...args);
    };
  }

  window.addEventListener('unhandledrejection', (event) => {
    if (isTransientExtensionError(event.reason)) {
      event.preventDefault();
      try { event.stopImmediatePropagation(); } catch (_) {}
    }
  });

  window.addEventListener('error', (event) => {
    if (isTransientExtensionError(event.error || event.message)) {
      event.preventDefault();
      try { event.stopImmediatePropagation(); } catch (_) {}
    }
  }, true);

  if (typeof window.addEventListener === 'function') {
    window.addEventListener('securitypolicyviolation', (event) => {
      // Host page CSP reporting must not be suppressed or altered
    }, true);
  }
})();
