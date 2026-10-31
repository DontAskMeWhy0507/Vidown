/**
 * Universal Video Downloader - Isolated-World Security Gate
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 5)
 * Defends the extension against untrusted, adversarial, or malformed events
 * originated from the Main-World page context.
 * 
 * Zero-Trust Defense Pipeline:
 * 1. Plain Object & Prototype Validation: rejects non-plain objects, getters, accessors,
 *    and prototype pollution vectors (__proto__, constructor, prototype).
 * 2. Strict Payload Size Cap: rejects payloads exceeding 2048 bytes (2 KB).
 * 3. Strict Whitelist of allowed properties and primitive types.
 * 4. URL Scheme Whitelisting: requires http: or https:, rejecting javascript:, data:, file:, etc.
 * 5. Anti-DoS Rate Limiter: strictly caps throughput to max 20 events per second.
 * 6. Isolated Advisory Contract: outputs frozen records marked as isAdvisoryHint: true,
 *    never executable as commands or directly injected into the DOM.
 * 7. Trusted Types compliant: zero DOM string injection APIs.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.UniversalSecurityGate = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const EVENT_NAME = 'UVD_RUNTIME_STREAM';
  const MAX_PAYLOAD_SIZE_BYTES = 2048; // 2 KB hard cap
  const MAX_EVENTS_PER_SECOND = 20;   // Anti-DoS rate limit
  const ALLOWED_PROTOCOLS = new Set(['http:', 'https:']);
  const ALLOWED_FIELDS = new Set(['streamUrl', 'mimeType', 'detectedType', 'initiatorType', 'timestamp']);
  const ALLOWED_DETECTED_TYPES = new Set([
    'MANIFEST_HLS',
    'MANIFEST_DASH',
    'DIRECT_MEDIA',
    'SEGMENT',
    'MSE_SOURCE_BUFFER',
    'UNKNOWN'
  ]);

  // Rate Limiting sliding window state
  let _rateLimitWindowStart = 0;
  let _rateLimitCount = 0;

  /**
   * Check if current event exceeds the rate limit (20 events / 1000ms)
   */
  function isRateLimited(now = Date.now(), maxLimit = MAX_EVENTS_PER_SECOND) {
    if (now - _rateLimitWindowStart >= 1000) {
      _rateLimitWindowStart = now;
      _rateLimitCount = 1;
      return false;
    }

    if (_rateLimitCount >= maxLimit) {
      return true;
    }

    _rateLimitCount++;
    return false;
  }

  /**
   * Reset rate limiter state (useful for unit testing)
   */
  function resetRateLimiter() {
    _rateLimitWindowStart = 0;
    _rateLimitCount = 0;
  }

  /**
   * Validate and sanitize an incoming raw event detail from the Main World
   */
  function validateAndSanitizeEvent(rawDetail, options = {}) {
    const maxSizeBytes = options.maxPayloadSizeBytes || MAX_PAYLOAD_SIZE_BYTES;

    // STEP 1: Plain Object & Prototype Validation
    if (!rawDetail || typeof rawDetail !== 'object' || Array.isArray(rawDetail)) {
      return { valid: false, reason: 'NOT_A_PLAIN_OBJECT' };
    }

    // Prototype check: must inherit directly from Object.prototype or null
    const proto = Object.getPrototypeOf(rawDetail);
    if (proto !== Object.prototype && proto !== null) {
      return { valid: false, reason: 'INVALID_PROTOTYPE' };
    }

    // Inspect own properties for pollution vectors & accessor descriptors
    const ownKeys = Object.getOwnPropertyNames(rawDetail);
    for (let i = 0; i < ownKeys.length; i++) {
      const key = ownKeys[i];

      // Anti-pollution: forbid dangerous keys
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return { valid: false, reason: 'PROTOTYPE_POLLUTION_DETECTED' };
      }

      // Check for getters / setters that could execute arbitrary code when accessed
      const descriptor = Object.getOwnPropertyDescriptor(rawDetail, key);
      if (descriptor && (descriptor.get || descriptor.set)) {
        return { valid: false, reason: 'ACCESSOR_DESCRIPTOR_REJECTED' };
      }
    }

    // STEP 2: Strict Payload Size Cap
    let serialized = '';
    try {
      serialized = JSON.stringify(rawDetail);
    } catch (_) {
      return { valid: false, reason: 'SERIALIZATION_FAILED' };
    }

    if (!serialized || serialized.length > maxSizeBytes) {
      return { valid: false, reason: 'PAYLOAD_SIZE_EXCEEDED' };
    }

    // STEP 3: Whitelist Allowed Fields
    for (let i = 0; i < ownKeys.length; i++) {
      const key = ownKeys[i];
      if (!ALLOWED_FIELDS.has(key)) {
        return { valid: false, reason: `UNAUTHORIZED_FIELD_${key}` };
      }
    }

    // Extract primitive values safely
    const rawUrl = typeof rawDetail.streamUrl === 'string' ? rawDetail.streamUrl.trim() : '';
    const rawMime = typeof rawDetail.mimeType === 'string' ? rawDetail.mimeType.trim() : '';
    const rawDetectedType = typeof rawDetail.detectedType === 'string' ? rawDetail.detectedType.trim() : 'UNKNOWN';
    const rawInitiator = typeof rawDetail.initiatorType === 'string' ? rawDetail.initiatorType.trim() : 'unknown';
    const rawTimestamp = Number.isFinite(rawDetail.timestamp) ? Number(rawDetail.timestamp) : Date.now();

    // Validate detectedType against enum
    if (!ALLOWED_DETECTED_TYPES.has(rawDetectedType)) {
      return { valid: false, reason: 'INVALID_DETECTED_TYPE' };
    }

    // STEP 4: URL Scheme & Character Whitelisting
    let validUrl = '';
    if (rawUrl.length > 0) {
      let parsed = null;
      try {
        parsed = new URL(rawUrl);
      } catch (_) {
        return { valid: false, reason: 'MALFORMED_URL' };
      }

      // Must be http: or https:
      if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
        return { valid: false, reason: `INVALID_URL_SCHEME_${parsed.protocol}` };
      }

      // Reject dangerous shell / control characters
      if (/[\x00-\x1F\x7F<>"';`|\\]/.test(rawUrl)) {
        return { valid: false, reason: 'DANGEROUS_CHARACTERS_IN_URL' };
      }

      validUrl = parsed.href;
    } else {
      if (rawDetectedType !== 'MSE_SOURCE_BUFFER') {
        return { valid: false, reason: 'EMPTY_STREAM_URL_NOT_ALLOWED' };
      }
    }

    // Validate MIME type characters
    let validMime = '';
    if (rawMime.length > 0) {
      if (rawMime.length > 256) {
        return { valid: false, reason: 'MIME_TYPE_TOO_LONG' };
      }
      if (/[\x00-\x1F\x7F<>`\\]/.test(rawMime) || rawMime.toLowerCase().includes('javascript')) {
        return { valid: false, reason: 'DANGEROUS_MIME_TYPE' };
      }
      validMime = rawMime;
    }

    // STEP 5: Construct Clean, Frozen Advisory Record
    const sanitizedRecord = Object.freeze({
      streamUrl: validUrl,
      mimeType: validMime,
      detectedType: rawDetectedType,
      initiatorType: rawInitiator,
      timestamp: rawTimestamp,
      isAdvisoryHint: true
    });

    return {
      valid: true,
      sanitized: sanitizedRecord
    };
  }

  /**
   * Attach Zero-Trust Security Gate Listener to window / document
   */
  function attachSecurityGateListener(targetWindowOrDoc, onValidStreamHint, options = {}) {
    if (!targetWindowOrDoc || typeof onValidStreamHint !== 'function') {
      return () => {};
    }

    const eventTarget = targetWindowOrDoc.document || targetWindowOrDoc;
    if (typeof eventTarget.addEventListener !== 'function') {
      return () => {};
    }

    function handleEvent(event) {
      try {
        if (!event || !event.detail) return;

        // Anti-DoS Rate Limiter check
        if (isRateLimited()) {
          if (options.onRateLimitExceeded) {
            options.onRateLimitExceeded();
          }
          return;
        }

        // Validate event through pipeline
        const result = validateAndSanitizeEvent(event.detail, options);
        if (!result.valid) {
          if (options.onValidationError) {
            options.onValidationError(result.reason);
          }
          return;
        }

        // Safe advisory pass-through to isolated world consumer
        onValidStreamHint(result.sanitized);
      } catch (_) {}
    }

    eventTarget.addEventListener(EVENT_NAME, handleEvent, true);

    return function detach() {
      if (typeof eventTarget.removeEventListener === 'function') {
        eventTarget.removeEventListener(EVENT_NAME, handleEvent, true);
      }
    };
  }

  // Auto-connect in Isolated World content script environment
  if (typeof window !== 'undefined' && !window.__uvd_test_mode && typeof window.addEventListener === 'function') {
    attachSecurityGateListener(window, function (sanitizedHint) {
      try {
        if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.sendMessage === 'function') {
          chrome.runtime.sendMessage({
            action: 'SAVIOR_RUNTIME_STREAM_HINT',
            streamHint: sanitizedHint
          }).catch(() => {});
        }
      } catch (_) {}
    });
  }

  return {
    EVENT_NAME,
    MAX_PAYLOAD_SIZE_BYTES,
    MAX_EVENTS_PER_SECOND,
    isRateLimited,
    resetRateLimiter,
    validateAndSanitizeEvent,
    attachSecurityGateListener
  };
});
