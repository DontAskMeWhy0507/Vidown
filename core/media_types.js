/**
 * Universal Media Types & Constants
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 2)
 * Defines canonical data contracts, state machine rules, distinguishing query keys,
 * sensitive parameter redaction, signed URL expiration, and deterministic identity hashing.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.UniversalMediaTypes = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /**
   * Media Lifecycle States (State Machine)
   */
  const MediaState = Object.freeze({
    DETECTED: 'detected',
    RESOLVING: 'resolving',
    READY: 'ready',
    DOWNLOADING: 'downloading',
    COMPLETED: 'completed',
    ERROR: 'error',
    UNRESOLVED: 'unresolved'
  });

  /**
   * Unresolved Reason Codes
   * Documented boundaries: system stops at 'unresolved' when cannot fulfill
   */
  const UnresolvedReason = Object.freeze({
    UNSUPPORTED_DRM: 'UNSUPPORTED_DRM',
    UNRESOLVED_BUFFER: 'UNRESOLVED_BUFFER',
    REQUIRES_ADAPTER: 'REQUIRES_ADAPTER',
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',
    UNRESOLVED_NO_PERMISSION: 'UNRESOLVED_NO_PERMISSION',
    UNRESOLVED_NETWORK_ERROR: 'UNRESOLVED_NETWORK_ERROR',
    UNRESOLVED_UNKNOWN: 'UNRESOLVED_UNKNOWN'
  });

  /**
   * Media Track Types
   */
  const TrackType = Object.freeze({
    VIDEO: 'video',
    AUDIO: 'audio',
    MUXED: 'muxed',
    UNKNOWN: 'unknown'
  });

  /**
   * Streaming Protocols
   */
  const ProtocolType = Object.freeze({
    DIRECT: 'direct',
    HLS: 'hls',
    DASH: 'dash',
    BLOB: 'blob',
    UNKNOWN: 'unknown'
  });

  /**
   * Distinguishing query parameters preserved during resource identity calculation.
   * Ensures distinct tracks, itags, and video IDs are NOT accidentally merged.
   */
  const DISTINGUISHING_KEYS = Object.freeze(new Set([
    'id', 'v', 'video_id', 'media_id', 'item_id',
    'itag', 'format', 'quality', 'resolution', 'rendition',
    'track', 'track_id', 'stream_id', 'lang', 'segment_prefix'
  ]));

  /**
   * Sensitive query parameters that MUST be redacted from logs and errors.
   */
  const SENSITIVE_QUERY_PARAMS = Object.freeze(new Set([
    'token', 'sig', 'signature', 'key', 'auth', 'pass', 'password',
    'session', 'secret', 'credential', 'access_token', 'hash'
  ]));

  /**
   * URL parameter names used by CDNs for token expiration timestamps.
   */
  const EXPIRATION_PARAM_KEYS = Object.freeze(new Set([
    'expire', 'expires', 'exp', 'validuntil'
  ]));

  /**
   * Valid State Transitions Table
   */
  const VALID_STATE_TRANSITIONS = Object.freeze({
    [MediaState.DETECTED]: Object.freeze(new Set([
      MediaState.RESOLVING,
      MediaState.READY,
      MediaState.UNRESOLVED,
      MediaState.ERROR,
      MediaState.DETECTED
    ])),
    [MediaState.RESOLVING]: Object.freeze(new Set([
      MediaState.READY,
      MediaState.UNRESOLVED,
      MediaState.ERROR,
      MediaState.RESOLVING
    ])),
    [MediaState.READY]: Object.freeze(new Set([
      MediaState.DOWNLOADING,
      MediaState.RESOLVING,
      MediaState.READY,
      MediaState.ERROR,
      MediaState.UNRESOLVED // e.g. token expired while sitting in ready state
    ])),
    [MediaState.DOWNLOADING]: Object.freeze(new Set([
      MediaState.COMPLETED,
      MediaState.ERROR,
      MediaState.READY,
      MediaState.DOWNLOADING
    ])),
    [MediaState.COMPLETED]: Object.freeze(new Set([
      MediaState.DOWNLOADING,
      MediaState.READY,
      MediaState.COMPLETED
    ])),
    [MediaState.ERROR]: Object.freeze(new Set([
      MediaState.RESOLVING,
      MediaState.READY,
      MediaState.DOWNLOADING,
      MediaState.ERROR
    ])),
    [MediaState.UNRESOLVED]: Object.freeze(new Set([
      MediaState.RESOLVING,
      MediaState.READY,
      MediaState.ERROR,
      MediaState.UNRESOLVED
    ]))
  });

  /**
   * Check if a state transition is permitted by the state machine
   */
  function isValidStateTransition(fromState, toState) {
    const allowed = VALID_STATE_TRANSITIONS[fromState];
    return Boolean(allowed && allowed.has(toState));
  }

  /**
   * Pure JS SHA-256 (synchronous, portable, bitwise-exact on both Node.js and Chromium Service Worker)
   */
  function pureJsSha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let i, j;
    let result = '';

    const words = [];
    const asciiBitLength = ascii.length * 8;

    let hash = pureJsSha256.h = pureJsSha256.h || [];
    const k = pureJsSha256.k = pureJsSha256.k || [];
    let primeCounter = k.length;

    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }

    ascii += '\x80';
    while ((ascii.length % 64) - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) {
      j = ascii.charCodeAt(i);
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words.length] = ((asciiBitLength / maxWord) | 0);
    words[words.length] = (asciiBitLength | 0);

    for (j = 0; j < words.length;) {
      const w = words.slice(j, j += 16);
      const oldHash = hash.slice(0);

      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        const w15 = w[i - 15], w2 = w[i - 2];
        const a = hash[0], e = hash[4];
        const temp1 = hash[7]
          + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
          + ((e & hash[5]) ^ ((~e) & hash[6]))
          + k[i]
          + (w[i] = (i < 16) ? w[i] : (
              w[i - 16]
              + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
              + w[i - 7]
              + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
            ) | 0
          );
        const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
          + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }

      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j >= 0; j--) {
        const b = (hash[i] >> (8 * j)) & 255;
        result += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }

  /**
   * Fast SHA-256 router: uses Node.js crypto if present, else pureJsSha256
   */
  function fastSha256(str) {
    if (typeof require === 'function') {
      try {
        const crypto = require('crypto');
        if (crypto && typeof crypto.createHash === 'function') {
          return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
        }
      } catch (_) {}
    }
    const utf8Str = unescape(encodeURIComponent(str));
    return pureJsSha256(utf8Str);
  }

  /**
   * Redact sensitive query tokens (sig, token, auth, etc.) for safe console logging
   */
  function sanitizeUrlForLogging(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return '';
    try {
      const parsed = new URL(rawUrl);
      for (const [key] of parsed.searchParams.entries()) {
        if (SENSITIVE_QUERY_PARAMS.has(key.toLowerCase())) {
          parsed.searchParams.set(key, '[REDACTED]');
        }
      }
      return decodeURI(parsed.toString());
    } catch (_) {
      return '[INVALID_URL]';
    }
  }

  /**
   * Extract expiration timestamp (ms) from signed URL if available
   */
  function getUrlExpirationTimestamp(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return null;
    try {
      const parsed = new URL(rawUrl);
      for (const [key, val] of parsed.searchParams.entries()) {
        if (EXPIRATION_PARAM_KEYS.has(key.toLowerCase())) {
          const num = parseInt(val, 10);
          if (!isNaN(num) && num > 0) {
            // If in seconds (standard Unix epoch ~10 digits), convert to ms
            return num < 10000000000 ? num * 1000 : num;
          }
        }
      }
    } catch (_) {}
    return null;
  }

  /**
   * Check if signed URL is expired
   */
  function isUrlExpired(rawUrl, clockSkewMs = 0) {
    const exp = getUrlExpirationTimestamp(rawUrl);
    if (!exp) return false;
    return Date.now() >= (exp - clockSkewMs);
  }

  /**
   * Compute resourceIdentity:
   * Hashes canonical URL (origin + pathname) + preserved distinguishing query params + trackType.
   * Strips ephemeral transient tokens (sig, token, expires).
   */
  function computeResourceIdentity(rawUrl, trackType = TrackType.VIDEO) {
    try {
      const parsed = new URL(rawUrl);
      const origin = parsed.origin.toLowerCase();
      const pathname = parsed.pathname;

      const preservedParams = new URLSearchParams();
      for (const [key, val] of parsed.searchParams.entries()) {
        const lowerKey = key.toLowerCase();
        if (DISTINGUISHING_KEYS.has(lowerKey)) {
          preservedParams.set(lowerKey, val);
        }
      }
      preservedParams.sort();

      const canonicalIdentityString = `${origin}${pathname}?${preservedParams.toString()}#${trackType}`;
      return fastSha256(canonicalIdentityString);
    } catch (_) {
      return fastSha256(`${rawUrl}#${trackType}`);
    }
  }

  /**
   * Factory function to instantiate and validate a UniversalMediaRecord
   */
  function createMediaRecord(input) {
    if (!input || typeof input !== 'object') {
      throw new TypeError('createMediaRecord: input must be an object');
    }
    if (!input.mediaInstanceId || typeof input.mediaInstanceId !== 'string') {
      throw new TypeError('createMediaRecord: mediaInstanceId is required and must be a string');
    }
    if (typeof input.tabId !== 'number' || isNaN(input.tabId)) {
      throw new TypeError('createMediaRecord: tabId is required and must be a number');
    }
    const requestUrl = input.requestUrl || input.url || input.originalUrl || input.canonicalUrl;
    if (!requestUrl || typeof requestUrl !== 'string') {
      throw new TypeError('createMediaRecord: requestUrl is required and must be a string');
    }

    const trackType = Object.values(TrackType).includes(input.trackType) ? input.trackType : TrackType.UNKNOWN;
    const protocol = Object.values(ProtocolType).includes(input.protocol) ? input.protocol : ProtocolType.UNKNOWN;
    const state = Object.values(MediaState).includes(input.state) ? input.state : MediaState.DETECTED;

    const resourceIdentity = input.resourceIdentity || computeResourceIdentity(requestUrl, trackType);

    const now = Date.now();
    const detectedAt = typeof input.detectedAt === 'number' ? input.detectedAt : now;
    const updatedAt = typeof input.updatedAt === 'number' ? input.updatedAt : now;

    const recordId = input.id || `${input.mediaInstanceId}_${trackType}_${resourceIdentity.slice(0, 12)}`;
    const expiresAt = typeof input.expiresAt === 'number' ? input.expiresAt : getUrlExpirationTimestamp(requestUrl);

    return {
      id: recordId,
      recordId,
      mediaInstanceId: input.mediaInstanceId,
      resourceIdentity,
      requestUrl,
      sanitizedLogUrl: sanitizeUrlForLogging(requestUrl),
      expiresAt,
      tabId: input.tabId,
      frameId: typeof input.frameId === 'number' ? input.frameId : 0,
      trackType,
      protocol,
      mimeType: typeof input.mimeType === 'string' ? input.mimeType : 'application/octet-stream',
      quality: typeof input.quality === 'string' ? input.quality : null,
      bitrate: typeof input.bitrate === 'number' ? input.bitrate : null,
      sizeBytes: typeof input.sizeBytes === 'number' ? input.sizeBytes : null,
      state,
      unresolvedReason: input.unresolvedReason || null,
      title: typeof input.title === 'string' ? input.title : null,
      thumbnailUrl: typeof input.thumbnailUrl === 'string' ? input.thumbnailUrl : null,
      headers: input.headers && typeof input.headers === 'object' ? { ...input.headers } : {},
      variants: Array.isArray(input.variants) ? [...input.variants] : [],
      resolutionDetails: input.resolutionDetails && typeof input.resolutionDetails === 'object' ? { ...input.resolutionDetails } : null,
      detectedAt,
      updatedAt
    };
  }

  return {
    MediaState,
    UnresolvedReason,
    TrackType,
    ProtocolType,
    DISTINGUISHING_KEYS,
    SENSITIVE_QUERY_PARAMS,
    EXPIRATION_PARAM_KEYS,
    isValidStateTransition,
    canTransition: isValidStateTransition,
    fastSha256,
    pureJsSha256,
    sanitizeUrlForLogging,
    getUrlExpirationTimestamp,
    isUrlExpired,
    computeResourceIdentity,
    createMediaRecord
  };
});
