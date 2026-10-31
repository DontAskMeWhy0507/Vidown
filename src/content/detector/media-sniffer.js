/**
 * src/content/detector/media-sniffer.js
 * Derives audio resources and deduplicates media streams.
 */

function createMP3Resources(mediaList) {
  if (!Array.isArray(mediaList)) return [];
  const videos = mediaList.filter(item => item && (item.type === 'video' || !item.type) && item.url);
  if (videos.length === 0) return [];

  const audioOptions = [
    { bitrate: '128kbps', name: 'Medium', qualityValue: 100 },
    { bitrate: '192kbps', name: 'High', qualityValue: 200 }
  ];

  const results = [];
  for (const opt of audioOptions) {
    const base = videos[0];
    const derived = {
      ...base,
      id: `${base.id || 'media'}_mp3_${opt.name.toLowerCase()}`,
      type: 'audio',
      ext: 'mp3',
      soundOnly: true,
      quality: opt.name,
      resolution: opt.bitrate,
      sortValues: { qualityValue: opt.qualityValue }
    };
    results.push(derived);
  }
  return results;
}

function dedupeMedia(mediaList) {
  if (!Array.isArray(mediaList)) return [];
  const seenUrls = new Set();
  const deduped = [];

  for (const item of mediaList) {
    if (!item) continue;
    const urlKey = typeof item.url === 'string' ? item.url : (item.url && item.url.videoUrl) || JSON.stringify(item.url || item.id);
    if (!seenUrls.has(urlKey)) {
      seenUrls.add(urlKey);
      deduped.push(item);
    }
  }
  return deduped;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createMP3Resources, dedupeMedia };
}
