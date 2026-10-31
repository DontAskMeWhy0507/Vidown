/**
 * src/shared/url-utils.js
 * Pure URL parser, filename derivation, and filesystem sanitization.
 */

function parseUrl(urlStr) {
  if (!urlStr || typeof urlStr !== 'string') {
    return { url: '', pathname: '', filename: 'video', ext: 'mp4' };
  }
  try {
    const parsed = new URL(urlStr, 'https://localhost');
    const pathname = parsed.pathname || '';
    const lastSegment = pathname.split('/').filter(Boolean).pop() || 'video';
    const parts = lastSegment.split('.');
    let ext = '';
    let filename = lastSegment;
    if (parts.length > 1) {
      ext = parts.pop().toLowerCase();
      filename = parts.join('.');
    }
    return {
      url: urlStr,
      origin: parsed.origin,
      pathname,
      filename: decodeURIComponent(filename),
      ext: ext || 'mp4'
    };
  } catch (_) {
    return { url: urlStr, pathname: '', filename: 'video', ext: 'mp4' };
  }
}

function sanitizeFilename(name) {
  if (!name || typeof name !== 'string') return 'video';
  // Remove Windows invalid filename characters: < > : " / \ | ? *
  let clean = name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '-');
  // Trim spaces and periods from ends
  clean = clean.replace(/^[. ]+|[. ]+$/g, '').trim();
  return clean || 'video';
}

function getExtFromMime(mime) {
  if (!mime || typeof mime !== 'string') return '';
  const lower = mime.toLowerCase();
  if (lower.includes('application/x-mpegurl') || lower.includes('application/vnd.apple.mpegurl')) {
    return 'm3u8';
  }
  if (lower.includes('application/dash+xml')) {
    return 'mpd';
  }
  if (lower.includes('video/mp4')) return 'mp4';
  if (lower.includes('video/webm')) return 'webm';
  if (lower.includes('audio/mp4') || lower.includes('audio/m4a')) return 'm4a';
  if (lower.includes('audio/mpeg')) return 'mp3';
  if (lower.includes('audio/ogg')) return 'ogg';
  if (lower.includes('audio/wav')) return 'wav';
  return '';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { parseUrl, sanitizeFilename, getExtFromMime };
}
