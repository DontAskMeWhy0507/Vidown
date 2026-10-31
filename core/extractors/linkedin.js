/**
 * core/extractors/linkedin.js
 * 
 * Clean, zero-eval extractor for LinkedIn video posts.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.LinkedInExtractor = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function isLinkedInUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return /(?:linkedin\.com)\//i.test(url);
  }

  function extractActivityId(url) {
    if (!url || typeof url !== 'string') return null;
    const m = url.match(/urn:li:activity:(\d+)/i) || url.match(/\/posts\/([^\/\?]+)/i);
    return m ? m[1] : null;
  }

  function extractVideoUrlFromDom(container) {
    if (!container) return null;
    try {
      const video = container.querySelector ? container.querySelector('video') : null;
      if (video) {
        if (video.src && !video.src.startsWith('blob:')) return video.src;
        if (video.currentSrc && !video.currentSrc.startsWith('blob:')) return video.currentSrc;
        const source = video.querySelector('source');
        if (source && source.src) return source.src;
      }
    } catch (_) {}
    return null;
  }

  return {
    isLinkedInUrl,
    extractActivityId,
    extractVideoUrlFromDom
  };
});
