/**
 * Vidown TikTok Media Extractor
 * Handles video detection on tiktok.com
 */

const TikTokExtractor = {
  name: 'tiktok',
  
  match(url) {
    if (!url) return false;
    return /^https?:\/\/(www\.)?tiktok\.com/i.test(url);
  },
  
  extract(videoElement, context = {}) {
    if (!videoElement) return null;
    
    const src = videoElement.src || videoElement.getAttribute?.('src') || '';
    const title = typeof document !== 'undefined' ? document.title : 'TikTok Video';
    
    return {
      type: 'video',
      ext: 'mp4',
      url: src,
      title,
      platform: 'tiktok',
      sourceElement: videoElement
    };
  }
};

TikTokExtractor.default = TikTokExtractor;
export default TikTokExtractor;

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TikTokExtractor;
  module.exports.default = TikTokExtractor;
}
