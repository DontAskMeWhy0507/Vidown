/**
 * core/extractors/twitter.js
 * 
 * Clean, zero-eval extractor for X (Twitter) videos.
 * Extracts video variants and highest bitrate MP4 from tweet payloads.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TwitterExtractor = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function isTwitterUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return /(?:twitter\.com|x\.com)\//i.test(url);
  }

  function extractStatusId(url) {
    if (!url || typeof url !== 'string') return null;
    const m = url.match(/\/status(?:es)?\/(\d+)/i);
    return m ? m[1] : null;
  }

  function extractBestVideoVariant(variants) {
    if (!Array.isArray(variants) || variants.length === 0) return null;

    // Filter MP4 streams with bitrate
    const mp4s = variants.filter(v => v && v.content_type === 'video/mp4' && typeof v.bitrate === 'number');
    if (mp4s.length > 0) {
      mp4s.sort((a, b) => b.bitrate - a.bitrate);
      return mp4s[0].url;
    }

    // Fallback to any video variant
    const anyMp4 = variants.find(v => v && v.url && v.url.includes('.mp4'));
    if (anyMp4) return anyMp4.url;

    // HLS variant fallback
    const hls = variants.find(v => v && v.url && v.url.includes('.m3u8'));
    return hls ? hls.url : null;
  }

  return {
    isTwitterUrl,
    extractStatusId,
    extractBestVideoVariant
  };
});
