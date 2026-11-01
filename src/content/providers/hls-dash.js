/**
 * Vidown Generic HLS / DASH Media Extractor
 * Handles .m3u8, .mpd and generic HTML5 video streams
 */

const HlsDashExtractor = {
  name: 'hls_dash',
  
  match(url) {
    if (!url) return false;
    return /\.(m3u8|mpd)(\?.*)?$/i.test(url);
  },
  
  extract(videoElement, context = {}) {
    if (!videoElement) return null;
    
    const src = videoElement.src || videoElement.getAttribute?.('src') || '';
    const isM3u8 = /\.m3u8(\?.*)?$/i.test(src);
    const isMpd = /\.mpd(\?.*)?$/i.test(src);
    
    return {
      type: 'video',
      ext: isM3u8 ? 'm3u8' : (isMpd ? 'mpd' : 'mp4'),
      url: src,
      title: typeof document !== 'undefined' ? document.title : 'Stream Video',
      platform: 'hls_dash',
      sourceElement: videoElement
    };
  }
};

HlsDashExtractor.default = HlsDashExtractor;
export default HlsDashExtractor;

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HlsDashExtractor;
  module.exports.default = HlsDashExtractor;
}
