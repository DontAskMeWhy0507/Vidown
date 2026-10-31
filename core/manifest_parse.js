/**
 * Universal Manifest Parser & Resolver
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 6)
 * Extracts explicit segment URLs, quality variants, audio tracks, and DRM flags
 * from HLS (M3U8) and DASH (MPD) manifests.
 * 
 * Strict Architectural Rules:
 * 1. Resolves all relative segment URIs into absolute canonical URLs against manifest base URL.
 * 2. Provides deterministic Set of segment URLs for exact causal correlation.
 * 3. Never guesses, interpolates, or fabricates missing segments, resolutions, or file sizes.
 * 4. Transparently identifies unsupported DRM protection (Widevine, PlayReady, Sample-AES).
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.UniversalManifestParser = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function resolveUrl(relativeOrAbsolute, baseUrl) {
    if (!relativeOrAbsolute) return '';
    try {
      return new URL(relativeOrAbsolute.trim(), baseUrl).href;
    } catch (_) {
      return relativeOrAbsolute.trim();
    }
  }

  function parseHlsAttributes(attrString) {
    const attrs = {};
    if (!attrString) return attrs;

    const regex = /([A-Z0-9_-]+)=(?:"([^"]*)"|([^,]*))/g;
    let m;
    while ((m = regex.exec(attrString)) !== null) {
      const key = m[1];
      const val = m[2] !== undefined ? m[2] : m[3];
      attrs[key] = val;
    }
    return attrs;
  }

  function parseM3u8(content, baseUrl) {
    if (typeof content !== 'string') {
      return { isMaster: false, variants: [], audioTracks: [], segments: new Set(), encryption: null };
    }

    const lines = content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const variants = [];
    const audioTracks = [];
    const segments = new Set();
    let isMaster = false;
    let encryption = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('#EXT-X-STREAM-INF:')) {
        isMaster = true;
        const attrStr = line.slice('#EXT-X-STREAM-INF:'.length);
        const attrs = parseHlsAttributes(attrStr);

        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1];
          if (!nextLine.startsWith('#')) {
            const variantUrl = resolveUrl(nextLine, baseUrl);
            let width = undefined;
            let height = undefined;
            if (attrs.RESOLUTION) {
              const resParts = attrs.RESOLUTION.split('x');
              if (resParts.length === 2) {
                width = parseInt(resParts[0], 10) || undefined;
                height = parseInt(resParts[1], 10) || undefined;
              }
            }

            const variantObj = {
              url: variantUrl,
              bandwidth: attrs.BANDWIDTH ? parseInt(attrs.BANDWIDTH, 10) : undefined,
              resolution: attrs.RESOLUTION || undefined,
              width,
              height,
              codecs: attrs.CODECS || undefined,
              audioGroupId: attrs.AUDIO || undefined,
              frameRate: attrs['FRAME-RATE'] ? parseFloat(attrs['FRAME-RATE']) : undefined
            };

            variantObj.toString = function () { return this.url; };
            variants.push(variantObj);
          }
        }
      }

      if (line.startsWith('#EXT-X-MEDIA:') && line.includes('TYPE=AUDIO')) {
        isMaster = true;
        const attrStr = line.slice('#EXT-X-MEDIA:'.length);
        const attrs = parseHlsAttributes(attrStr);

        const track = {
          groupId: attrs['GROUP-ID'] || undefined,
          name: attrs.NAME || undefined,
          language: attrs.LANGUAGE || undefined,
          isDefault: attrs.DEFAULT === 'YES',
          url: attrs.URI ? resolveUrl(attrs.URI, baseUrl) : undefined
        };
        audioTracks.push(track);
      }

      if (line.startsWith('#EXTINF:')) {
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1];
          if (!nextLine.startsWith('#')) {
            segments.add(resolveUrl(nextLine, baseUrl));
          }
        }
      }

      if (line.startsWith('#EXT-X-MAP:')) {
        const attrStr = line.slice('#EXT-X-MAP:'.length);
        const attrs = parseHlsAttributes(attrStr);
        if (attrs.URI) {
          segments.add(resolveUrl(attrs.URI, baseUrl));
        }
      }

      if (line.startsWith('#EXT-X-KEY:')) {
        const attrStr = line.slice('#EXT-X-KEY:'.length);
        const attrs = parseHlsAttributes(attrStr);
        const method = (attrs.METHOD || '').toUpperCase();

        const isDrm = method === 'SAMPLE-AES' || method === 'SAMPLE-AES-CTR' || method === 'SAMPLE-AES-CENC';
        encryption = {
          method,
          isDrm,
          keyUri: attrs.URI ? resolveUrl(attrs.URI, baseUrl) : undefined,
          iv: attrs.IV || undefined
        };
      }
    }

    return {
      isMaster,
      variants,
      audioTracks,
      segments,
      encryption
    };
  }

  function parseXmlAttributes(attrString) {
    const attrs = {};
    if (!attrString) return attrs;
    const regex = /([a-zA-Z0-9_-]+)=["']([^"']*)["']/g;
    let m;
    while ((m = regex.exec(attrString)) !== null) {
      attrs[m[1]] = m[2];
    }
    return attrs;
  }

  function parseMpd(content, baseUrl) {
    if (typeof content !== 'string') {
      return { isMaster: true, representations: [], audioTracks: [], segments: new Set(), isDrm: false };
    }

    const segments = new Set();
    const representations = [];
    const audioTracks = [];

    const isDrm = (
      content.includes('edef8ba9-79d6-4ace-a3c8-27dcd51d21ed') ||
      content.includes('9a04f079-9840-4286-ab92-e65be0885f95') ||
      content.includes('urn:uuid:edef8ba9') ||
      content.includes('urn:uuid:9a04f079')
    );

    let manifestBaseUrl = baseUrl;
    const baseMatch = content.match(/<BaseURL[^>]*>([^<]+)<\/BaseURL>/i);
    if (baseMatch && baseMatch[1]) {
      manifestBaseUrl = resolveUrl(baseMatch[1].trim(), baseUrl);
    }

    const adaptRegex = /<AdaptationSet\s+([^>]*)>([\s\S]*?)<\/AdaptationSet>/gi;
    let adaptMatch;
    let hasAdaptSets = false;

    while ((adaptMatch = adaptRegex.exec(content)) !== null) {
      hasAdaptSets = true;
      const adaptAttrs = parseXmlAttributes(adaptMatch[1]);
      const adaptContent = adaptMatch[2];
      const isAudioAdapt = (
        (adaptAttrs.contentType && adaptAttrs.contentType.toLowerCase() === 'audio') ||
        (adaptAttrs.mimeType && adaptAttrs.mimeType.toLowerCase().startsWith('audio'))
      );

      const repRegex = /<Representation\s+([^>]+)>/gi;
      let repMatch;
      while ((repMatch = repRegex.exec(adaptContent)) !== null) {
        const repAttrs = parseXmlAttributes(repMatch[1]);
        const repObj = {
          id: repAttrs.id || undefined,
          bandwidth: repAttrs.bandwidth ? parseInt(repAttrs.bandwidth, 10) : undefined,
          width: repAttrs.width ? parseInt(repAttrs.width, 10) : undefined,
          height: repAttrs.height ? parseInt(repAttrs.height, 10) : undefined,
          codecs: repAttrs.codecs || adaptAttrs.codecs || undefined,
          mimeType: repAttrs.mimeType || adaptAttrs.mimeType || (isAudioAdapt ? 'audio/mp4' : 'video/mp4')
        };

        const isAudioRep = isAudioAdapt || (
          (repObj.mimeType && repObj.mimeType.startsWith('audio')) ||
          (repObj.codecs && (repObj.codecs.startsWith('mp4a') || repObj.codecs.startsWith('opus') || repObj.codecs.startsWith('vorbis')))
        );

        if (isAudioRep) {
          audioTracks.push(repObj);
        } else {
          representations.push(repObj);
        }
      }
    }

    if (!hasAdaptSets) {
      const repRegex = /<Representation\s+([^>]+)>/gi;
      let repMatch;
      while ((repMatch = repRegex.exec(content)) !== null) {
        const repAttrs = parseXmlAttributes(repMatch[1]);
        const repObj = {
          id: repAttrs.id || undefined,
          bandwidth: repAttrs.bandwidth ? parseInt(repAttrs.bandwidth, 10) : undefined,
          width: repAttrs.width ? parseInt(repAttrs.width, 10) : undefined,
          height: repAttrs.height ? parseInt(repAttrs.height, 10) : undefined,
          codecs: repAttrs.codecs || undefined,
          mimeType: repAttrs.mimeType || undefined
        };

        const isAudioRep = (
          (repObj.mimeType && repObj.mimeType.startsWith('audio')) ||
          (repObj.codecs && (repObj.codecs.startsWith('mp4a') || repObj.codecs.startsWith('opus') || repObj.codecs.startsWith('vorbis')))
        );

        if (isAudioRep) {
          audioTracks.push(repObj);
        } else {
          representations.push(repObj);
        }
      }
    }

    const segUrlRegex = /<SegmentURL[^>]*media=["']([^"']+)["']/g;
    let m;
    while ((m = segUrlRegex.exec(content)) !== null) {
      if (m[1]) {
        segments.add(resolveUrl(m[1], manifestBaseUrl));
      }
    }

    const initRegex = /<Initialization[^>]*sourceURL=["']([^"']+)["']/g;
    while ((m = initRegex.exec(content)) !== null) {
      if (m[1]) {
        segments.add(resolveUrl(m[1], manifestBaseUrl));
      }
    }
    const baseUrlRegex = /<BaseURL[^>]*>([^<]+)<\/BaseURL>/gi;
    while ((m = baseUrlRegex.exec(content)) !== null) {
      if (m[1] && m[1].trim()) {
        segments.add(resolveUrl(m[1].trim(), manifestBaseUrl));
      }
    }

    return {
      isMaster: true,
      representations,
      audioTracks,
      segments,
      isDrm,
      drmProtected: isDrm
    };
  }

  function extractManifestSegments(content, manifestUrl) {
    if (!content || typeof content !== 'string') {
      return new Set();
    }

    if (content.includes('#EXTM3U')) {
      const parsed = parseM3u8(content, manifestUrl);
      return parsed.segments;
    }

    if (content.includes('<MPD')) {
      const parsed = parseMpd(content, manifestUrl);
      return parsed.segments;
    }

    return new Set();
  }

  function resolveManifest(content, manifestUrl) {
    if (!content || typeof content !== 'string') {
      return { status: 'unresolved', reason: 'EMPTY_OR_INVALID_CONTENT' };
    }

    if (content.includes('#EXTM3U')) {
      const parsed = parseM3u8(content, manifestUrl);

      if (parsed.encryption && parsed.encryption.isDrm) {
        return {
          status: 'unsupported',
          protocol: 'HLS',
          reason: 'UNSUPPORTED_DRM',
          message: 'Video được bảo vệ bản quyền mã hóa (DRM)',
          isDrm: true,
          encryption: parsed.encryption
        };
      }

      return {
        status: 'resolved',
        protocol: 'HLS',
        isMaster: parsed.isMaster,
        variants: parsed.variants,
        audioTracks: parsed.audioTracks,
        segmentsCount: parsed.segments.size,
        segments: parsed.segments,
        encryption: parsed.encryption
      };
    }

    if (content.includes('<MPD')) {
      const parsed = parseMpd(content, manifestUrl);

      if (parsed.isDrm) {
        return {
          status: 'unsupported',
          protocol: 'DASH',
          reason: 'UNSUPPORTED_DRM',
          message: 'Video được bảo vệ bản quyền mã hóa (DRM)',
          isDrm: true
        };
      }

      return {
        status: 'resolved',
        protocol: 'DASH',
        isMaster: true,
        variants: parsed.representations,
        audioTracks: parsed.audioTracks,
        segmentsCount: parsed.segments.size,
        segments: parsed.segments
      };
    }

    return {
      status: 'unresolved',
      reason: 'UNKNOWN_MANIFEST_FORMAT'
    };
  }

  return {
    resolveUrl,
    parseHlsAttributes,
    parseM3u8,
    parseMpd,
    extractManifestSegments,
    resolveManifest
  };
});
