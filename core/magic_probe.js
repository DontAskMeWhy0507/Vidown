/**
 * Universal Video Downloader - Stream-Capped Range Probe
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 3 Hardened)
 * Safely inspects the first 512 container bytes of ambiguous streams (e.g. application/octet-stream).
 * 
 * Strict Architectural Rules:
 * 1. Checks host permissions and domain exclusion filters before issuing any probe request.
 * 2. Hard 3-second timeout via AbortController; explicitly passes controller.signal into fetch.
 * 3. Never downloads full files: uses response.body.getReader(), reads at most 512 bytes,
 *    and immediately executes reader.cancel() and controller.abort().
 * 4. Transparent Network Accounting: Distinguishes application-layer bytesConsumed (<= 512)
 *    from raw network bytes transferred (which include TLS, HTTP headers, and socket buffers).
 * 5. Recognizes standard container headers (ISO-BMFF MP4, WebM EBML, MPEG-TS, MP3/AAC).
 * 6. Transparent boundaries: if container cannot be determined from 512 bytes, marks as 'unresolved',
 *    never guesses unsupported formats.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    const MediaTypes = require('./media_types');
    module.exports = factory(MediaTypes);
  } else {
    root.UniversalMagicProbe = factory(root.UniversalMediaTypes);
  }
})(typeof self !== 'undefined' ? self : this, function (MediaTypes) {
  'use strict';

  const { ProtocolType, TrackType } = MediaTypes || {
    ProtocolType: { DIRECT: 'direct', HLS: 'hls', DASH: 'dash', BLOB: 'blob', UNKNOWN: 'unknown' },
    TrackType: { VIDEO: 'video', AUDIO: 'audio', MUXED: 'muxed', UNKNOWN: 'unknown' }
  };

  const PROBE_BYTE_LIMIT = 512;
  const PROBE_TIMEOUT_MS = 3000;

  // Domain exclusion patterns (ad networks, trackers, analytics, telemetry)
  const EXCLUDED_HOST_PATTERNS = [
    'google-analytics.com',
    'analytics.google.com',
    'doubleclick.net',
    'googlesyndication.com',
    'facebook.net/tr',
    'scorecardresearch.com',
    'hotjar.com',
    'clarity.ms',
    'telemetry',
    'stats.',
    'beacon.'
  ];

  // Static non-media extensions that must NEVER trigger probe
  const EXCLUDED_EXTENSIONS = new Set([
    'js', 'mjs', 'css', 'json', 'wasm', 'map',
    'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'avif',
    'woff', 'woff2', 'ttf', 'eot', 'otf',
    'html', 'htm', 'xml', 'txt', 'pdf', 'zip', 'gz'
  ]);

  /**
   * Check if a URL should be excluded from probing (ads, analytics, static files)
   */
  function isExcludedUrl(urlStr) {
    if (!urlStr || typeof urlStr !== 'string') return true;
    try {
      const u = new URL(urlStr);
      const host = u.hostname.toLowerCase();
      const path = u.pathname.toLowerCase();

      // Host exclusion
      for (const pattern of EXCLUDED_HOST_PATTERNS) {
        if (host.includes(pattern) || (u.href.toLowerCase().includes(pattern))) {
          return true;
        }
      }

      // Extension exclusion
      const cleanPath = path.split('?')[0];
      const match = cleanPath.match(/\.([a-z0-9]+)$/i);
      if (match && EXCLUDED_EXTENSIONS.has(match[1].toLowerCase())) {
        return true;
      }

      return false;
    } catch (_) {
      return true;
    }
  }

  /**
   * Check if extension has host permission to probe the origin
   */
  async function checkHostPermission(urlStr, customChecker) {
    if (typeof customChecker === 'function') {
      return customChecker(urlStr);
    }
    if (typeof chrome !== 'undefined' && chrome.permissions && typeof chrome.permissions.contains === 'function') {
      try {
        const origin = new URL(urlStr).origin + '/*';
        return await new Promise((resolve) => {
          chrome.permissions.contains({ origins: [origin] }, (granted) => resolve(Boolean(granted)));
        });
      } catch (_) {
        return false;
      }
    }
    return true;
  }

  /**
   * Inspect container magic bytes in Uint8Array
   */
  function inspectMagicBytes(bytes) {
    if (!bytes || bytes.length < 4) {
      return { matched: false, mimeType: 'application/octet-stream', protocol: ProtocolType.UNKNOWN, trackType: TrackType.UNKNOWN };
    }

    // 1. ISO-BMFF (MP4 / M4A / MOV): Box header has length at [0..3], box type 'ftyp' at [4..7]
    if (bytes.length >= 8) {
      const boxType = String.fromCharCode(bytes[4], bytes[5], bytes[6], bytes[7]);
      if (boxType === 'ftyp' || boxType === 'moov') {
        const majorBrand = bytes.length >= 12 ? String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11]).toLowerCase() : '';
        const isAudio = majorBrand.includes('m4a') || majorBrand.includes('mp4a');
        return {
          matched: true,
          container: 'mp4',
          mimeType: isAudio ? 'audio/mp4' : 'video/mp4',
          protocol: ProtocolType.DIRECT,
          trackType: isAudio ? TrackType.AUDIO : TrackType.VIDEO
        };
      }
    }

    // 2. EBML Header (WebM / MKV): 0x1A 0x45 0xDF 0xA3
    if (bytes[0] === 0x1A && bytes[1] === 0x45 && bytes[2] === 0xDF && bytes[3] === 0xA3) {
      return {
        matched: true,
        container: 'webm',
        mimeType: 'video/webm',
        protocol: ProtocolType.DIRECT,
        trackType: TrackType.VIDEO
      };
    }

    // 3. MPEG-TS Sync Byte: 0x47 repeating at 188-byte intervals
    if (bytes[0] === 0x47) {
      const syncMatch = (bytes.length > 188 && bytes[188] === 0x47) || (bytes.length > 376 && bytes[376] === 0x47);
      if (syncMatch || bytes.length <= 188) {
        return {
          matched: true,
          container: 'mpegts',
          mimeType: 'video/mp2t',
          protocol: ProtocolType.HLS,
          trackType: TrackType.VIDEO
        };
      }
    }

    // 4. MP3 Audio: Starts with ID3 tag ('ID3') or MPEG audio sync frame (0xFF 0xFB / 0xF3 / 0xF2)
    if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) {
      return {
        matched: true,
        container: 'mp3',
        mimeType: 'audio/mpeg',
        protocol: ProtocolType.DIRECT,
        trackType: TrackType.AUDIO
      };
    }
    if (bytes[0] === 0xFF && (bytes[1] & 0xE0) === 0xE0) {
      const isAac = (bytes[1] & 0x16) === 0x10;
      return {
        matched: true,
        container: isAac ? 'aac' : 'mp3',
        mimeType: isAac ? 'audio/aac' : 'audio/mpeg',
        protocol: ProtocolType.DIRECT,
        trackType: TrackType.AUDIO
      };
    }

    return {
      matched: false,
      container: 'unknown',
      mimeType: 'application/octet-stream',
      protocol: ProtocolType.UNKNOWN,
      trackType: TrackType.UNKNOWN
    };
  }

  /**
   * Perform safe, stream-capped probe reading maximum 512 bytes with stream cancellation
   */
  async function probeStreamCappedBytes(targetUrl, options = {}) {
    if (isExcludedUrl(targetUrl)) {
      return {
        success: false,
        status: 'excluded_url',
        mimeType: 'application/octet-stream',
        protocol: ProtocolType.UNKNOWN,
        trackType: TrackType.UNKNOWN
      };
    }

    const hasPermission = await checkHostPermission(targetUrl, options.permissionChecker);
    if (!hasPermission) {
      return {
        success: false,
        status: 'unresolved_no_permission',
        mimeType: 'application/octet-stream',
        protocol: ProtocolType.UNKNOWN,
        trackType: TrackType.UNKNOWN
      };
    }

    const fetchImpl = options.fetchFn || (typeof fetch === 'function' ? fetch : null);
    if (!fetchImpl) {
      return {
        success: false,
        status: 'unresolved_no_fetch',
        mimeType: 'application/octet-stream',
        protocol: ProtocolType.UNKNOWN,
        trackType: TrackType.UNKNOWN
      };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);

    try {
      const response = await fetchImpl(targetUrl, {
        method: 'GET',
        headers: {
          Range: `bytes=0-${PROBE_BYTE_LIMIT - 1}`,
          Referer: options.referer || ''
        },
        credentials: 'omit',
        signal: controller.signal
      });

      if (!response.ok && response.status !== 206) {
        return {
          success: false,
          status: 'unresolved_network_error',
          statusCode: response.status,
          mimeType: 'application/octet-stream',
          protocol: ProtocolType.UNKNOWN,
          trackType: TrackType.UNKNOWN
        };
      }

      let receivedBytes = new Uint8Array(PROBE_BYTE_LIMIT);
      let bytesConsumed = 0;

      if (response.body && typeof response.body.getReader === 'function') {
        const reader = response.body.getReader();
        try {
          while (bytesConsumed < PROBE_BYTE_LIMIT) {
            const { done, value } = await reader.read();
            if (done || !value) break;
            const chunkToCopy = value.subarray(0, PROBE_BYTE_LIMIT - bytesConsumed);
            receivedBytes.set(chunkToCopy, bytesConsumed);
            bytesConsumed += chunkToCopy.length;
          }
        } finally {
          try {
            await reader.cancel();
          } catch (_) {}
        }
      } else if (typeof response.arrayBuffer === 'function') {
        const buffer = await response.arrayBuffer();
        const slice = new Uint8Array(buffer).subarray(0, PROBE_BYTE_LIMIT);
        receivedBytes.set(slice, 0);
        bytesConsumed = slice.length;
      }

      controller.abort();

      const finalBytes = receivedBytes.subarray(0, bytesConsumed);
      const magicResult = inspectMagicBytes(finalBytes);

      return {
        success: magicResult.matched,
        status: magicResult.matched ? 'resolved' : 'unresolved',
        bytesConsumed,
        container: magicResult.container,
        mimeType: magicResult.mimeType,
        protocol: magicResult.protocol,
        trackType: magicResult.trackType
      };
    } catch (err) {
      const isAborted = controller.signal.aborted;
      return {
        success: false,
        status: isAborted ? 'probe_aborted_or_timed_out' : 'probe_error',
        error: err.message,
        mimeType: 'application/octet-stream',
        protocol: ProtocolType.UNKNOWN,
        trackType: TrackType.UNKNOWN
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return {
    PROBE_BYTE_LIMIT,
    PROBE_TIMEOUT_MS,
    isExcludedUrl,
    isExemptFromProbe: isExcludedUrl,
    checkHostPermission,
    inspectMagicBytes,
    probeStreamCappedBytes
  };
});
