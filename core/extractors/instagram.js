/**
 * core/extractors/instagram.js
 * 
 * Clean, zero-eval extractor for Instagram Posts, Reels, and Stories.
 * Manifest V3 compliant.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.InstagramExtractor = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function isInstagramUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return /(?:https?:\/\/)?(?:www\.)?instagram\.com\//i.test(url);
  }

  function parseInstagramContext(url) {
    const u = String(url || '');
    const clean = u.split('?')[0];

    // Story match: /stories/:username/:storyId/
    const storyMatch = clean.match(/\/stories\/([^\/]+)(?:\/(\d+))?/i);
    if (storyMatch) {
      return {
        type: 'story',
        username: storyMatch[1],
        storyId: storyMatch[2] || '',
        title: `Instagram_Story_${storyMatch[1]}_${storyMatch[2] || Date.now()}`
      };
    }

    // Reel match: /reel/:code/
    const reelMatch = clean.match(/\/reel\/([^\/]+)/i);
    if (reelMatch) {
      return {
        type: 'reel',
        code: reelMatch[1],
        title: `Instagram_Reel_${reelMatch[1]}`
      };
    }

    // Post match: /p/:code/
    const postMatch = clean.match(/\/p\/([^\/]+)/i);
    if (postMatch) {
      return {
        type: 'post',
        code: postMatch[1],
        title: `Instagram_Post_${postMatch[1]}`
      };
    }

    return {
      type: 'generic',
      title: 'Instagram_Video'
    };
  }

  function extractFromReactProps(props) {
    if (!props) return null;
    try {
      const vList = props.video_versions || props.item?.video_versions || props.children?.props?.video_versions;
      if (Array.isArray(vList) && vList.length > 0) {
        // Return highest resolution stream
        const sorted = [...vList].sort((a, b) => (b.width * b.height) - (a.width * a.height));
        return sorted[0].url || null;
      }
    } catch (_) {}
    return null;
  }

  return {
    isInstagramUrl,
    parseInstagramContext,
    extractFromReactProps
  };
});
