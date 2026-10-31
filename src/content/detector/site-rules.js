/**
 * src/content/detector/site-rules.js
 * Video site rules, stream manifest matchers, and platform ID extractors.
 */

const SPECIAL_STREAM_PATTERNS = [
  // HLS / DASH manifest patterns
  /\.m3u8(\?.*)?$/i,
  /\.mpd(\?.*)?$/i,
  /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi,
  /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi,
  /vdrm\.vtvgiaitri\.vn\/stream/i,
  /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi,
  /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/i,
  /graph\.nhaccuatui\.com\/api\/v1\/(playlist|song)/i,
  /nhaccuatui\.com\/api(\/v\d+)?\/(playlist|song|video)/i,
  /cdn\.animevui\.[a-z]+\/file/i,
  /intl-api\.iq\.com.+\/cache-video\.iq\.com\/dash\?.+/i,
  /api\.bilibili\.com\/.+\/wbi\/playurl/i,
  /video\.twimg\.com\/.+video\/(\d+)(\/pu)?\/pl\/[a-z0-9\-_]+\.m3u8/i,
  /scontent.*\.fbcdn\.(net|cloud)\/.+\.m3u8/i,
  /vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist\.json/i,
  /tiktokcdn\.com/i,
  /stream12345\.online\/video\/[a-z0-9\-_]+\/master\.html/i,
  /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i
];

function isSpecialUrls(url) {
  if (!url || typeof url !== 'string' || url.startsWith('data:')) return false;
  return SPECIAL_STREAM_PATTERNS.some(regex => regex.test(url));
}

const YOUTUBE_REGEXES = [
  /^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([\w\-]+)/i,
  /^https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/shorts\/([^#&?]+)/i,
  /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/i,
  /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/i
];

function extractVideoId(url) {
  if (!url || typeof url !== 'string') return null;
  for (const regex of YOUTUBE_REGEXES) {
    const match = url.match(regex);
    if (match && match[1]) return match[1];
  }
  return null;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { isSpecialUrls, extractVideoId, SPECIAL_STREAM_PATTERNS };
}
