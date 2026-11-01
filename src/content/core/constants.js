/**
 * Vidown Core Constants
 * Reconstructed from module-1 (detector constants)
 */

export const MEDIA_TYPES = {
  audio: {
    title: 'Audio',
    rgxp: /audio/i,
    extensions: ['mp3', 'flac', 'm4a', 'wma', 'ogg', 'wav', 'aif', 'mid', 'opus'],
    extensions_weight: ['mp3', 'flac', 'm4a', 'wma', 'ogg', 'wav', 'aif', 'mid', 'opus'],
    ctype2extension: {
      midi: 'mid',
      mp4: 'm4a',
      m4a: 'm4a',
      mpeg: 'mp3',
      mpeg3: 'mp3',
      wav: 'wav',
      aiff: 'aif',
      opus: 'opus'
    }
  },
  video: {
    title: 'Video',
    rgxp: /video/i,
    extensions: ['mp4', 'mpeg4', 'mpg', 'mpeg', 'm4v', 'avi', 'divx', 'mov', 'wmv', 'movie', 'asf', 'webm', 'flv', '3gp', 'm3u8', 'm3u', 'ogv', 'mpd'],
    extensions_weight: ['mp4', 'mpeg4', 'mpg', 'mpeg', 'm4v', 'avi', 'divx', 'mov', 'wmv', 'movie', 'asf', 'webm', 'flv', 'm3u8', 'm3u', '3gp'],
    ctype2extension: {
      mpeg: 'mp4',
      mp4: 'mp4',
      m4v: 'mp4',
      '3gpp': '3gp',
      flv: 'flv',
      quicktime: 'mov',
      msvideo: 'avi',
      'ms-wmv': 'wmv',
      'ms-asf': 'asf'
    }
  },
  no_watermark_video: {
    title: 'No watermark video',
    rgxp: /no watermark video/i,
    extensions: ['mp4', 'mpeg4', 'mpg', 'mpeg', 'm4v', 'avi', 'divx', 'mov', 'wmv', 'movie', 'asf', 'webm', 'flv', '3gp', 'm3u8', 'm3u', 'ogv', 'mpd'],
    extensions_weight: ['mp4', 'mpeg4', 'mpg', 'mpeg', 'm4v', 'avi', 'divx', 'mov', 'wmv', 'movie', 'asf', 'webm', 'flv', 'm3u8', 'm3u', '3gp'],
    ctype2extension: {
      mpeg: 'mp4',
      mp4: 'mp4',
      m4v: 'mp4',
      '3gpp': '3gp',
      flv: 'flv',
      quicktime: 'mov',
      msvideo: 'avi',
      'ms-wmv': 'wmv',
      'ms-asf': 'asf'
    }
  },
  subtitles: {
    title: 'Subtitles',
    rgxp: /subtitles/i,
    extensions: ['yt_srt', 'srt', 'vtt'],
    extensions_weight: ['yt_srt', 'srt', 'vtt']
  },
  audio_channel: {
    title: 'Audio channel',
    rgxp: /audio channel/i,
    extensions: ['mp3', 'flac', 'm4a', 'wma', 'ogg', 'wav', 'aif', 'mid', 'opus'],
    extensions_weight: ['mp3', 'flac', 'm4a', 'wma', 'ogg', 'wav', 'aif', 'mid', 'opus'],
    ctype2extension: {
      midi: 'mid',
      mp4: 'm4a',
      m4a: 'm4a',
      mpeg: 'mp3',
      mpeg3: 'mp3',
      wav: 'wav',
      aiff: 'aif',
      opus: 'opus'
    }
  },
  image: {
    title: 'Image',
    rgxp: /image/i,
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'bmp', 'tif', 'tiff', 'heic', 'heif', 'raw', 'ico', 'cur', 'svg'],
    extensions_weight: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'bmp', 'tif', 'tiff', 'heic', 'heif', 'raw', 'ico', 'cur', 'svg'],
    ctype2extension: {}
  }
};

export const QUALITY_MAP = {
  '4320p': { i18n_label: 'quality_8k_uhd', label: '8K UHD', value: 1600 },
  '4320p60 HDR': { i18n_label: 'quality_8k_uhd_hdr', label: '8K UHD HDR', value: 1500 },
  '3072p': { i18n_label: 'quality_4k_qfhd', label: '4K QFHD', value: 1400 },
  '3072p60 HDR': { i18n_label: 'quality_4k_qfhd_hdr', label: '4K QFHD HDR', value: 1300 },
  '2160p': { i18n_label: 'quality_4k_uhd', label: '4K UHD', value: 1200 },
  '2160p60 HDR': { i18n_label: 'quality_4k_uhd_hdr', label: '4K UHD HDR', value: 1199 },
  '2048p': { i18n_label: 'quality_qhd', label: 'Quad HD', value: 1100 },
  '2048p60 HDR': { i18n_label: 'quality_qhd_hdr', label: 'Quad HD HDR', value: 1099 },
  '1440p': { i18n_label: 'quality_qhd', label: 'Quad HD', value: 1000 },
  '1440p60 HDR': { i18n_label: 'quality_qhd_hdr', label: 'Quad HD HDR', value: 900 },
  '1080p': { i18n_label: 'quality_fhd', label: 'Full HD', value: 800 },
  '1080p60 HDR': { i18n_label: 'quality_fhd_hdr', label: 'Full HD HDR', value: 700 },
  '720p': { i18n_label: 'quality_hd', label: 'HD', value: 600 },
  '720p60 HDR': { i18n_label: 'quality_hd_hdr', label: 'HD HDR', value: 599 },
  '540p': { i18n_label: 'quality_standard', label: 'Standard', value: 500 },
  '480p': { i18n_label: 'quality_standard', label: 'Standard', value: 500 },
  '360p': { i18n_label: 'quality_medium', label: 'Medium', value: 400 },
  '320p': { i18n_label: 'quality_medium', label: 'Medium', value: 400 },
  '270p': { i18n_label: 'quality_small', label: 'Small', value: 300 },
  '240p': { i18n_label: 'quality_small', label: 'Small', value: 200 },
  '144p': { i18n_label: 'quality_mobile', label: 'Mobile', value: 100 }
};

export const RESOLUTIONS = [4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270, 240, 144];

export function isHlsOrZip(ext) {
  return !!ext && ['m3u8', 'm3u', 'hls', 'zip'].includes(ext);
}

export const ACTION_TYPES = {
  FETCH: 'background_request',
  DOWNLOAD: 'download',
  PLAY: 'play_video',
  YOUTUBE: {
    GET_INFO: 'youtube_get_info',
    GET_MPD: 'youtube_get_mpd_info'
  },
  SEND_REQUEST: 'send_request',
  GET_COOKIES: 'get_cookies',
  CHECK_URL: 'check_url'
};

// CommonJS compatibility for Node.js test runners
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MEDIA_TYPES,
    QUALITY_MAP,
    RESOLUTIONS,
    isHlsOrZip,
    ACTION_TYPES
  };
}
