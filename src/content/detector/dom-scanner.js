/**
 * src/content/detector/dom-scanner.js
 * Scans DOM elements and observes mutations to detect video/audio media sources.
 */

const { parseUrl } = require('../../shared/url-utils.js');

function extractMediaFromElement(el) {
  if (!el) return null;
  const src = el.src || el.currentSrc || el.getAttribute('src');
  if (!src || src.startsWith('blob:about:') || src.startsWith('data:')) return null;

  const parsed = parseUrl(src);
  return {
    id: `media_${Math.random().toString(36).substring(2, 9)}`,
    element: el,
    url: src,
    type: el.tagName === 'AUDIO' ? 'audio' : 'video',
    ext: parsed.ext || 'mp4',
    title: (typeof document !== 'undefined' ? document.title : '') || parsed.filename,
    filename: parsed.filename
  };
}

function initDomScanner(onMediaFound, doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc) return { scan: () => {}, stop: () => {} };

  function scanExisting() {
    try {
      const elements = doc.querySelectorAll ? doc.querySelectorAll('video, audio') : [];
      for (const el of elements) {
        const item = extractMediaFromElement(el);
        if (item && typeof onMediaFound === 'function') {
          onMediaFound(item);
        }
      }
    } catch (_) {}
  }

  scanExisting();

  let observer = null;
  if (typeof MutationObserver !== 'undefined' && doc.body) {
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes || []) {
          if (node.nodeType !== 1) continue;
          if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
            const item = extractMediaFromElement(node);
            if (item && typeof onMediaFound === 'function') onMediaFound(item);
          } else if (node.querySelectorAll) {
            const nested = node.querySelectorAll('video, audio');
            for (const n of nested) {
              const item = extractMediaFromElement(n);
              if (item && typeof onMediaFound === 'function') onMediaFound(item);
            }
          }
        }
      }
    });

    try {
      observer.observe(doc.body, { childList: true, subtree: true });
    } catch (_) {}
  }

  return {
    scan: scanExisting,
    stop: () => {
      if (observer) observer.disconnect();
    }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initDomScanner, extractMediaFromElement };
}
