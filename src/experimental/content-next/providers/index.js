/**
 * Vidown Provider Registry & Dispatcher
 */

import TikTokExtractor from './tiktok.js';
import FacebookExtractor from './facebook.js';
import YouTubeExtractor from './youtube.js';
import HlsDashExtractor from './hls-dash.js';

const registeredProviders = [
  TikTokExtractor,
  FacebookExtractor,
  YouTubeExtractor,
  HlsDashExtractor
];

export function registerProvider(provider) {
  registeredProviders.unshift(provider);
}

export function getProviderForUrl(url) {
  if (!url) return null;
  for (const provider of registeredProviders) {
    if (provider.match && provider.match(url)) {
      return provider;
    }
  }
  return null;
}

export function getAllProviders() {
  return [...registeredProviders];
}

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    registerProvider,
    getProviderForUrl,
    getAllProviders,
    TikTokExtractor,
    FacebookExtractor,
    YouTubeExtractor,
    HlsDashExtractor
  };
}
