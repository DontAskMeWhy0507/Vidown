/**
 * Vidown Facebook Media Extractor
 * Handles Reels, Watch, and Stories on facebook.com
 */

import { readMediaAttributes } from '../detector/attribute-stamper.js';

const FacebookExtractor = {
  name: 'facebook',
  
  match(url) {
    if (!url) return false;
    return /^https?:\/\/(www\.)?(facebook|fb)\.com/i.test(url);
  },
  
  getCompanionInjectorScript() {
    return 'facebook/messenger-audio';
  },
  
  extract(videoElement, context = {}) {
    if (!videoElement) return null;
    
    const attrs = readMediaAttributes(videoElement);
    const detail = attrs.detail || {};
    
    return {
      type: 'video',
      ext: 'mp4',
      vid: attrs.vid || detail.vid || null,
      title: detail.title || (typeof document !== 'undefined' ? document.title : 'Facebook Video'),
      url: detail.url || videoElement.src || videoElement.getAttribute?.('src') || '',
      platform: 'facebook',
      sourceElement: videoElement
    };
  }
};

FacebookExtractor.default = FacebookExtractor;
export default FacebookExtractor;

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FacebookExtractor;
  module.exports.default = FacebookExtractor;
}
