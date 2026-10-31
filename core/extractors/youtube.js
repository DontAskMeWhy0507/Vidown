/**
 * core/extractors/youtube.js
 * 
 * Clean, zero-eval extractor for YouTube streams.
 * Extracts adaptive formats (1080p, 1440p, 4K video + separate audio)
 * and progressive streams from ytInitialPlayerResponse.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.YouTubeExtractor = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function isYouTubeUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return /(?:youtube\.com\/(?:watch|shorts|embed|v)|youtu\.be\/)/i.test(url);
  }

  function extractVideoId(url) {
    if (!url || typeof url !== 'string') return null;
    const m = url.match(/(?:v=|youtu\.be\/|\/shorts\/|\/embed\/|\/v\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : null;
  }

  function parseStreamingData(streamingData, videoDetails = {}) {
    if (!streamingData) return null;

    const formats = Array.isArray(streamingData.formats) ? streamingData.formats : [];
    const adaptive = Array.isArray(streamingData.adaptiveFormats) ? streamingData.adaptiveFormats : [];

    const videoStreams = [];
    const audioStreams = [];

    // Separate video and audio in adaptive formats
    for (const f of adaptive) {
      if (!f.url) continue;
      const mime = String(f.mimeType || '').toLowerCase();
      if (mime.startsWith('video/')) {
        videoStreams.push({
          itag: f.itag,
          url: f.url,
          quality: f.qualityLabel || `${f.height}p` || 'HD',
          height: f.height || 0,
          fps: f.fps || 30,
          bitrate: f.bitrate || 0,
          mimeType: f.mimeType
        });
      } else if (mime.startsWith('audio/')) {
        audioStreams.push({
          itag: f.itag,
          url: f.url,
          quality: `${Math.round((f.bitrate || 128000) / 1000)}kbps`,
          bitrate: f.bitrate || 0,
          audioChannels: f.audioChannels || 2,
          mimeType: f.mimeType
        });
      }
    }

    // Sort video by resolution descending, audio by bitrate descending
    videoStreams.sort((a, b) => b.height - a.height);
    audioStreams.sort((a, b) => b.bitrate - a.bitrate);

    const progressiveStreams = [];
    for (const f of formats) {
      if (!f.url) continue;
      progressiveStreams.push({
        itag: f.itag,
        url: f.url,
        quality: f.qualityLabel || `${f.height}p` || 'SD',
        height: f.height || 0,
        fps: f.fps || 30,
        mimeType: f.mimeType
      });
    }

    const title = (videoDetails.title || 'YouTube_Video').replace(/[<>:"/\\|?*]/g, '_');
    const bestAudio = audioStreams[0] ? audioStreams[0].url : null;

    return {
      title,
      videoId: videoDetails.videoId || '',
      author: videoDetails.author || '',
      lengthSeconds: videoDetails.lengthSeconds || 0,
      progressiveStreams,
      adaptiveVideoStreams: videoStreams,
      adaptiveAudioStreams: audioStreams,
      bestVideoUrl: videoStreams[0] ? videoStreams[0].url : (progressiveStreams[0] ? progressiveStreams[0].url : null),
      bestAudioUrl: bestAudio,
      isMuxRequired: Boolean(videoStreams.length > 0 && bestAudio)
    };
  }

  return {
    isYouTubeUrl,
    extractVideoId,
    parseStreamingData
  };
});
