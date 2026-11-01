/**
 * Vidown YouTube Media Extractor
 * Handles YouTube watch, shorts, music, and embed URL extraction
 */

const YOUTUBE_URL_PATTERNS = [
  /^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([\w\-]+)/i,
  /^https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/i,
  /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/i,
  /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/i,
  /youtube.*\.com\/embed\/([a-z0-9\-_]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/i
];

const YouTubeExtractor = {
  name: 'youtube',
  
  match(url) {
    if (!url) return false;
    return /^https?:\/\/(?:[a-zA-Z0-9_-]+\.)?(?:youtube\.com|youtu\.be)/i.test(url);
  },
  
  getVideoId(url) {
    if (!url) return null;
    for (const pattern of YOUTUBE_URL_PATTERNS) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1].split('&')[0].split('?')[0];
      }
    }
    return null;
  },
  
  extract(videoElement, context = {}) {
    const url = context.url || (typeof window !== 'undefined' ? window.location.href : '');
    const videoId = this.getVideoId(url);
    const title = typeof document !== 'undefined' ? document.title.replace(' - YouTube', '') : 'YouTube Video';
    
    return {
      type: 'video',
      videoId,
      title,
      url,
      platform: 'youtube',
      sourceElement: videoElement
    };
  }
};

YouTubeExtractor.default = YouTubeExtractor;
export default YouTubeExtractor;

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = YouTubeExtractor;
  module.exports.default = YouTubeExtractor;
}
