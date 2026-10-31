/**
 * Universal Video Downloader - Evidence-Based Network Observer
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 3 Hardened)
 * Orchestrates header-only observation, evidence-based causal segment linking,
 * and registration into UniversalMediaRegistry without hallucinating playlist URLs.
 * 
 * Strict Architectural Rules:
 * 1. Operates purely on headers and URLs provided by chrome.webRequest.onHeadersReceived.
 * 2. Static assets (images, css, fonts, js) are completely dropped with zero Registry overhead.
 * 3. Distinguishes ManifestEvent vs SegmentEvent vs DirectMediaEvent.
 * 4. Causal Linking is strictly EVIDENCE-BASED:
 *    - Never guesses parent manifests based on initiator/origin alone.
 *    - Requires exact segment URL match against parsed manifest segments or explicit stream identity.
 *    - Preserves ambiguous segments as unlinked.
 * 5. Ambiguous streams trigger stream-capped range probe if permitted, otherwise transition to UNRESOLVED.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    const MediaTypes = require('./media_types');
    const Probe = require('./magic_probe');
    const Registry = require('./media_registry');
    const ManifestParser = require('./manifest_parse');
    module.exports = factory(MediaTypes, Probe, Registry, ManifestParser);
  } else {
    root.UniversalNetworkObserver = factory(
      root.UniversalMediaTypes,
      root.UniversalMagicProbe,
      root.UniversalMediaRegistry,
      root.UniversalManifestParser
    );
  }
})(typeof self !== 'undefined' ? self : this, function (MediaTypes, Probe, Registry, ManifestParser) {
  'use strict';

  const { MediaState, UnresolvedReason, ProtocolType, TrackType } = MediaTypes || {
    MediaState: { DETECTED: 'detected', RESOLVING: 'resolving', READY: 'ready', DOWNLOADING: 'downloading', COMPLETED: 'completed', ERROR: 'error', UNRESOLVED: 'unresolved' },
    UnresolvedReason: { AMBIGUOUS_OCTET_STREAM: 'ambiguous_octet_stream' },
    ProtocolType: { DIRECT: 'direct', HLS: 'hls', DASH: 'dash', BLOB: 'blob', UNKNOWN: 'unknown' },
    TrackType: { VIDEO: 'video', AUDIO: 'audio', MUXED: 'muxed', UNKNOWN: 'unknown' }
  };

  const NetworkEventType = Object.freeze({
    MANIFEST: 'manifest',
    SEGMENT: 'segment',
    DIRECT_MEDIA: 'direct_media',
    STATIC_ASSET: 'static_asset',
    AMBIGUOUS_STREAM: 'ambiguous_stream',
    IGNORED: 'ignored'
  });

  // Static MIME prefixes/types that must be rejected immediately
  const STATIC_MIME_PREFIXES = [
    'image/',
    'text/css',
    'text/javascript',
    'application/javascript',
    'application/x-javascript',
    'text/html',
    'font/',
    'application/font',
    'application/x-font'
  ];

  // Static file extensions in pathname
  const STATIC_EXTENSIONS = new Set([
    'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico', 'avif', 'bmp',
    'css', 'js', 'mjs', 'map', 'json',
    'woff', 'woff2', 'ttf', 'eot', 'otf',
    'html', 'htm', 'xml', 'txt', 'pdf'
  ]);

  // HLS Manifest MIME types
  const HLS_MIME_TYPES = new Set([
    'application/vnd.apple.mpegurl',
    'application/x-mpegurl',
    'audio/x-mpegurl',
    'video/x-mpegurl'
  ]);

  // DASH Manifest MIME types
  const DASH_MIME_TYPES = new Set([
    'application/dash+xml',
    'video/vnd.mpeg.dash.mpd'
  ]);

  // Direct media MIME prefixes and exact types
  const DIRECT_VIDEO_MIMES = new Set([
    'video/mp4', 'video/webm', 'video/ogg', 'video/quicktime',
    'video/x-matroska', 'video/x-flv', 'video/3gpp'
  ]);

  const DIRECT_AUDIO_MIMES = new Set([
    'audio/mp4', 'audio/mpeg', 'audio/webm', 'audio/ogg',
    'audio/aac', 'audio/wav', 'audio/flac', 'audio/m4a'
  ]);

  /**
   * Helper: extract header value case-insensitively from Chrome webRequest headers array
   */
  function extractHeader(headers, name) {
    if (!Array.isArray(headers)) return null;
    const lowerName = name.toLowerCase();
    for (const h of headers) {
      if (h && typeof h.name === 'string' && h.name.toLowerCase() === lowerName) {
        return (h.value || '').trim();
      }
    }
    return null;
  }

  /**
   * Extract file extension from URL pathname
   */
  function getPathExtension(urlStr) {
    try {
      const parsed = new URL(urlStr);
      const pathname = parsed.pathname;
      const lastSlash = pathname.lastIndexOf('/');
      const filename = lastSlash !== -1 ? pathname.slice(lastSlash + 1) : pathname;
      const dot = filename.lastIndexOf('.');
      if (dot !== -1 && dot < filename.length - 1) {
        return filename.slice(dot + 1).toLowerCase();
      }
    } catch (_) {}
    return '';
  }

  /**
   * Classify an HTTP response based on URL and responseHeaders
   */
  function classifyResponse(details) {
    if (!details || typeof details.url !== 'string') {
      return {
        eventType: NetworkEventType.IGNORED,
        protocol: ProtocolType.UNKNOWN,
        mimeType: 'unknown',
        trackType: TrackType.UNKNOWN,
        contentLength: null,
        contentRange: null,
        isRangeSupported: false,
        isLiveStream: false
      };
    }

    const url = details.url;
    const headers = details.responseHeaders || [];
    const statusCode = details.statusCode || 200;

    const rawContentType = extractHeader(headers, 'Content-Type') || '';
    const contentType = rawContentType.split(';')[0].trim().toLowerCase();
    const contentLengthStr = extractHeader(headers, 'Content-Length');
    const contentLength = contentLengthStr ? parseInt(contentLengthStr, 10) : null;
    const contentRange = extractHeader(headers, 'Content-Range');
    const acceptRanges = extractHeader(headers, 'Accept-Ranges');
    const isRangeSupported = (acceptRanges && acceptRanges.toLowerCase() === 'bytes') || Boolean(contentRange) || statusCode === 206;

    const ext = getPathExtension(url);

    // 1. FAST BYPASS: Static Assets (Images, CSS, Fonts, HTML, JS)
    for (const prefix of STATIC_MIME_PREFIXES) {
      if (contentType.startsWith(prefix)) {
        return {
          eventType: NetworkEventType.STATIC_ASSET,
          protocol: ProtocolType.UNKNOWN,
          mimeType: contentType,
          trackType: TrackType.UNKNOWN,
          contentLength,
          contentRange,
          isRangeSupported,
          isLiveStream: false
        };
      }
    }

    if (STATIC_EXTENSIONS.has(ext) && !contentType.startsWith('video/') && !contentType.startsWith('audio/')) {
      return {
        eventType: NetworkEventType.STATIC_ASSET,
        protocol: ProtocolType.UNKNOWN,
        mimeType: contentType || 'static/file',
        trackType: TrackType.UNKNOWN,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    // 2. MANIFEST DETECTION (HLS Master/Media or DASH MPD)
    if (HLS_MIME_TYPES.has(contentType) || ext === 'm3u8' || url.includes('.m3u8?') || url.includes('/playlist.m3u8')) {
      return {
        eventType: NetworkEventType.MANIFEST,
        protocol: ProtocolType.HLS,
        mimeType: contentType || 'application/vnd.apple.mpegurl',
        trackType: TrackType.MUXED,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    if (DASH_MIME_TYPES.has(contentType) || ext === 'mpd' || url.includes('.mpd?') || url.includes('/manifest.mpd')) {
      return {
        eventType: NetworkEventType.MANIFEST,
        protocol: ProtocolType.DASH,
        mimeType: contentType || 'application/dash+xml',
        trackType: TrackType.MUXED,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    // 3. SEGMENT DETECTION (HLS / DASH media segments)
    const isSegmentExt = ext === 'ts' || ext === 'm4s' || ext === 'mp4s';
    const isSegmentUrlPattern = url.includes('/segment') || url.includes('/seg-') || url.includes('-seg-') ||
                                url.includes('/chunk-') || url.includes('/bytestream/') || url.includes('bytestream=1') ||
                                url.includes('/frag-') || url.includes('/range/');

    if (isSegmentExt || (isSegmentUrlPattern && (contentRange || statusCode === 206 || (contentLength && contentLength < 3000000)))) {
      const isAudio = contentType.startsWith('audio/') || url.includes('/audio/') || url.includes('track=audio');
      return {
        eventType: NetworkEventType.SEGMENT,
        protocol: ext === 'ts' ? ProtocolType.HLS : (ext === 'm4s' ? ProtocolType.DASH : ProtocolType.UNKNOWN),
        mimeType: contentType || (ext === 'ts' ? 'video/mp2t' : 'video/iso.segment'),
        trackType: isAudio ? TrackType.AUDIO : TrackType.VIDEO,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    // 4. DIRECT MEDIA DETECTION (Complete MP4, WebM, MP3, AAC, FLAC)
    if (DIRECT_VIDEO_MIMES.has(contentType) || ext === 'mp4' || ext === 'webm' || ext === 'mkv') {
      return {
        eventType: NetworkEventType.DIRECT_MEDIA,
        protocol: ProtocolType.DIRECT,
        mimeType: contentType || (ext === 'webm' ? 'video/webm' : 'video/mp4'),
        trackType: TrackType.VIDEO,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    if (DIRECT_AUDIO_MIMES.has(contentType) || ext === 'mp3' || ext === 'm4a' || ext === 'aac' || ext === 'flac') {
      return {
        eventType: NetworkEventType.DIRECT_MEDIA,
        protocol: ProtocolType.DIRECT,
        mimeType: contentType || (ext === 'mp3' ? 'audio/mpeg' : 'audio/mp4'),
        trackType: TrackType.AUDIO,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    // 5. AMBIGUOUS STREAM (application/octet-stream, binary/octet-stream)
    if (contentType === 'application/octet-stream' || contentType === 'binary/octet-stream') {
      return {
        eventType: NetworkEventType.AMBIGUOUS_STREAM,
        protocol: ProtocolType.UNKNOWN,
        mimeType: contentType,
        trackType: TrackType.UNKNOWN,
        contentLength,
        contentRange,
        isRangeSupported,
        isLiveStream: false
      };
    }

    // Default: Ignored non-media request
    return {
      eventType: NetworkEventType.IGNORED,
      protocol: ProtocolType.UNKNOWN,
      mimeType: contentType || 'unknown',
      trackType: TrackType.UNKNOWN,
      contentLength,
      contentRange,
      isRangeSupported,
      isLiveStream: false
    };
  }

  // Manifest Sessions: tabId -> Map<manifestUrl, { url, protocol, mimeType, detectedAt, initiator, segments: Set<string> }>
  const _manifestSessions = new Map();

  function getTabManifests(tabId) {
    if (!_manifestSessions.has(tabId)) {
      _manifestSessions.set(tabId, new Map());
    }
    return _manifestSessions.get(tabId);
  }

  function clearTab(tabId) {
    _manifestSessions.delete(tabId);
  }

  /**
   * Register a parsed manifest with its explicit segment URLs
   */
  function registerManifestWithSegments(tabId, manifestUrl, manifestContentOrSegments, details = {}) {
    const tabManifests = getTabManifests(tabId);

    let segmentSet = new Set();
    if (manifestContentOrSegments instanceof Set) {
      segmentSet = manifestContentOrSegments;
    } else if (Array.isArray(manifestContentOrSegments)) {
      segmentSet = new Set(manifestContentOrSegments);
    } else if (typeof manifestContentOrSegments === 'string') {
      const extractFn = (ManifestParser && ManifestParser.extractManifestSegments) || null;
      if (extractFn) {
        segmentSet = extractFn(manifestContentOrSegments, manifestUrl);
      }
    }

    const manifestRecord = {
      url: manifestUrl,
      protocol: details.protocol || ProtocolType.HLS,
      mimeType: details.mimeType || 'application/vnd.apple.mpegurl',
      detectedAt: Date.now(),
      initiator: details.initiator || '',
      segments: segmentSet
    };

    tabManifests.set(manifestUrl, manifestRecord);
    return manifestRecord;
  }

  /**
   * Evidence-based causal linking:
   * Requires exact match in parsed manifest segments or explicit stream identity.
   * NEVER assumes parent relationship based merely on CDN origin or initiator!
   */
  function findCausalManifest(tabId, segmentUrl) {
    const tabManifests = _manifestSessions.get(tabId);
    if (!tabManifests || tabManifests.size === 0) return null;

    const segmentCanonical = segmentUrl.split('?')[0];

    for (const manifest of tabManifests.values()) {
      if (manifest.segments && manifest.segments.size > 0) {
        // Exact segment match
        if (manifest.segments.has(segmentUrl) || manifest.segments.has(segmentCanonical)) {
          return manifest;
        }

        // Check if any registered segment matches the canonical path
        for (const seg of manifest.segments) {
          if (seg.split('?')[0] === segmentCanonical) {
            return manifest;
          }
        }
      }
    }

    // No exact evidence found -> Return null to preserve as unlinked!
    return null;
  }

  /**
   * Handle onHeadersReceived event from Chrome WebRequest or test mock
   */
  async function handleHeadersReceived(details, options = {}) {
    if (!details || typeof details.url !== 'string') {
      return { handled: false, reason: 'invalid_details' };
    }

    const tabId = typeof details.tabId === 'number' ? details.tabId : -1;
    if (tabId < 0) {
      return { handled: false, reason: 'non_tab_request' };
    }

    const classification = classifyResponse(details);

    // 1. Static Assets & Ignored Requests -> Drop immediately with 0 Registry overhead
    if (classification.eventType === NetworkEventType.STATIC_ASSET || classification.eventType === NetworkEventType.IGNORED) {
      return {
        handled: false,
        reason: 'static_or_ignored',
        eventType: classification.eventType,
        mimeType: classification.mimeType
      };
    }

    const defaultMediaInstanceId = details.mediaInstanceId || `net_tab${tabId}_auto`;

    // 2. Direct Media Event (MP4, WebM, MP3)
    if (classification.eventType === NetworkEventType.DIRECT_MEDIA) {
      let record = null;
      if (Registry && typeof Registry.registerMedia === 'function') {
        record = Registry.registerMedia(tabId, {
          mediaInstanceId: defaultMediaInstanceId,
          requestUrl: details.url,
          trackType: classification.trackType,
          protocol: classification.protocol,
          mimeType: classification.mimeType,
          sizeBytes: classification.contentLength,
          state: MediaState.READY,
          headers: details.initiator ? { Referer: details.initiator } : {}
        });
      }

      return {
        handled: true,
        eventType: NetworkEventType.DIRECT_MEDIA,
        record
      };
    }

    // 3. Manifest Event (HLS .m3u8, DASH .mpd)
    if (classification.eventType === NetworkEventType.MANIFEST) {
      let segments = new Set();
      if (details.manifestContent && ManifestParser && typeof ManifestParser.extractManifestSegments === 'function') {
        segments = ManifestParser.extractManifestSegments(details.manifestContent, details.url);
      }
      
      const tabManifests = getTabManifests(tabId);
      tabManifests.set(details.url, {
        url: details.url,
        protocol: classification.protocol,
        mimeType: classification.mimeType,
        detectedAt: Date.now(),
        initiator: details.initiator || '',
        segments
      });

      let record = null;
      if (Registry && typeof Registry.registerMedia === 'function') {
        record = Registry.registerMedia(tabId, {
          mediaInstanceId: defaultMediaInstanceId,
          requestUrl: details.url,
          trackType: TrackType.MUXED,
          protocol: classification.protocol,
          mimeType: classification.mimeType,
          state: MediaState.RESOLVING,
          headers: details.initiator ? { Referer: details.initiator } : {}
        });
      }

      return {
        handled: true,
        eventType: NetworkEventType.MANIFEST,
        record
      };
    }

    // 4. Segment Event (.ts, .m4s, bytestream chunks)
    if (classification.eventType === NetworkEventType.SEGMENT) {
      // Evidence-based check: Requires exact match in parsed manifest
      const linkedManifest = findCausalManifest(tabId, details.url);

      if (linkedManifest) {
        return {
          handled: true,
          eventType: NetworkEventType.SEGMENT,
          causallyLinked: true,
          linkedManifestUrl: linkedManifest.url,
          protocol: linkedManifest.protocol
        };
      }

      // Ambiguous segment: preserve as unlinked without guessing
      return {
        handled: true,
        eventType: NetworkEventType.SEGMENT,
        causallyLinked: false,
        linkedManifestUrl: null,
        note: 'Ambiguous segment preserved as unlinked without explicit manifest inclusion.'
      };
    }

    // 5. Ambiguous Stream (application/octet-stream)
    if (classification.eventType === NetworkEventType.AMBIGUOUS_STREAM) {
      if (options.enableProbe && Probe && typeof Probe.probeStreamCappedBytes === 'function') {
        const probeResult = await Probe.probeStreamCappedBytes(details.url, {
          referer: details.initiator || '',
          fetchFn: options.fetchFn,
          permissionChecker: options.permissionChecker
        });

        if (probeResult.success) {
          let record = null;
          if (Registry && typeof Registry.registerMedia === 'function') {
            record = Registry.registerMedia(tabId, {
              mediaInstanceId: defaultMediaInstanceId,
              requestUrl: details.url,
              trackType: probeResult.trackType,
              protocol: probeResult.protocol,
              mimeType: probeResult.mimeType,
              state: MediaState.READY,
              headers: details.initiator ? { Referer: details.initiator } : {}
            });
          }

          return {
            handled: true,
            eventType: NetworkEventType.DIRECT_MEDIA,
            probed: true,
            record
          };
        }
      }

      let record = null;
      if (Registry && typeof Registry.registerMedia === 'function') {
        record = Registry.registerMedia(tabId, {
          mediaInstanceId: defaultMediaInstanceId,
          requestUrl: details.url,
          trackType: TrackType.UNKNOWN,
          protocol: ProtocolType.UNKNOWN,
          mimeType: classification.mimeType,
          state: MediaState.UNRESOLVED,
          unresolvedReason: UnresolvedReason.AMBIGUOUS_OCTET_STREAM,
          headers: details.initiator ? { Referer: details.initiator } : {}
        });
      }

      return {
        handled: true,
        eventType: NetworkEventType.AMBIGUOUS_STREAM,
        record
      };
    }

    return {
      handled: false,
      reason: 'unclassified_event'
    };
  }

  return {
    NetworkEventType,
    extractHeader,
    getPathExtension,
    classifyResponse,
    getTabManifests,
    clearTab,
    registerManifestWithSegments,
    findCausalManifest,
    handleHeadersReceived
  };
});
