/**
 * core/extractors/douyin.js
 * 
 * Clean, zero-eval extractor for Douyin videos.
 * Extracts video URLs from Router / Render data.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DouyinExtractor = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function isDouyinUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return /(?:douyin\.com|iesdouyin\.com)\//i.test(url);
  }

  function extractVideoId(url) {
    if (!url || typeof url !== 'string') return null;
    const m = url.match(/\/video\/(\d+)/) || url.match(/\/modal\/(\d+)/);
    return m ? m[1] : null;
  }

  function extractPlayAddrFromData(data) {
    if (!data) return null;
    try {
      // Traverse possible Douyin schema paths
      const aweme = data.aweme || data.itemInfo?.itemStruct || data;
      const video = aweme.video;
      if (video) {
        if (video.play_addr && Array.isArray(video.play_addr.url_list) && video.play_addr.url_list.length > 0) {
          // url_list contains direct cdn addresses; replace playwm with play for no-watermark
          const rawUrl = video.play_addr.url_list[0];
          return rawUrl.replace('playwm', 'play');
        }
        if (Array.isArray(video.bit_rate) && video.bit_rate.length > 0) {
          const br = video.bit_rate[0];
          if (br.play_addr && Array.isArray(br.play_addr.url_list) && br.play_addr.url_list.length > 0) {
            return br.play_addr.url_list[0].replace('playwm', 'play');
          }
        }
      }
    } catch (_) {}
    return null;
  }

  return {
    isDouyinUrl,
    extractVideoId,
    extractPlayAddrFromData
  };
});
