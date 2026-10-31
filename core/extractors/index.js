/**
 * core/extractors/index.js
 * 
 * Clean Core Platform Extractors Registry
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(
      require('./instagram'),
      require('./youtube'),
      require('./douyin'),
      require('./twitter'),
      require('./linkedin')
    );
  } else {
    root.UniversalExtractors = factory(
      root.InstagramExtractor,
      root.YouTubeExtractor,
      root.DouyinExtractor,
      root.TwitterExtractor,
      root.LinkedInExtractor
    );
  }
})(typeof self !== 'undefined' ? self : this, function (
  InstagramExtractor,
  YouTubeExtractor,
  DouyinExtractor,
  TwitterExtractor,
  LinkedInExtractor
) {
  'use strict';

  return {
    instagram: InstagramExtractor,
    youtube: YouTubeExtractor,
    douyin: DouyinExtractor,
    twitter: TwitterExtractor,
    linkedin: LinkedInExtractor
  };
});
