/**
 * Universal Media Registry (SSOT)
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 2)
 * Central in-memory registry for all media candidates across browser tabs.
 * 
 * Key Responsibilities:
 * 1. Single Source of Truth (SSOT) separating:
 *    - resourceIdentity: Content hash independent of video element
 *    - mediaInstanceId: Physical DOM <video> element identity
 *    - recordId: Association key connecting physical video element to resource (${mediaInstanceId}_${trackType}_${hash})
 * 2. Strict State Machine transitions (DETECTED -> RESOLVING -> READY -> DOWNLOADING -> COMPLETED / ERROR / UNRESOLVED)
 * 3. Safe deduplication & token refresh without creating redundant records
 * 4. Virtualized Feed Recycling (loadstart/emptied cleanup)
 * 5. Expired signed URL detection & transition to TOKEN_EXPIRED
 * 6. FIFO Cap of 30 items per tab
 * 7. MV3 Persistence: Trailing debounced sync (500ms) to chrome.storage.session & hydration on boot
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    const MediaTypes = require('./media_types');
    module.exports = factory(MediaTypes);
  } else {
    root.UniversalMediaRegistry = factory(root.UniversalMediaTypes);
  }
})(typeof self !== 'undefined' ? self : this, function (MediaTypes) {
  'use strict';

  if (!MediaTypes) {
    throw new Error('UniversalMediaRegistry requires UniversalMediaTypes module');
  }

  const {
    MediaState,
    UnresolvedReason,
    isValidStateTransition,
    createMediaRecord,
    computeResourceIdentity,
    sanitizeUrlForLogging,
    isUrlExpired,
    getUrlExpirationTimestamp
  } = MediaTypes;

  const MAX_RECORDS_PER_TAB = 30;
  const STORAGE_KEY_PREFIX = 'uvd_tab_registry_';
  const DEBOUNCE_DELAY_MS = 500;

  // In-memory registry: tabId (number) -> Map<recordId, UniversalMediaRecord>
  const _tabRegistry = new Map();

  // Active sync debounce timers: tabId -> timerId
  const _syncTimers = new Map();

  // Storage backend abstraction (defaults to chrome.storage.session in extension environment)
  let _storageBackend = (function detectDefaultStorage() {
    if (typeof chrome !== 'undefined' && chrome && chrome.storage && chrome.storage.session) {
      return chrome.storage.session;
    }
    return null;
  })();

  function setStorageBackend(backend) {
    _storageBackend = backend;
  }

  function getStorageBackend() {
    if (_storageBackend) return _storageBackend;
    if (typeof chrome !== 'undefined' && chrome && chrome.storage && chrome.storage.session) {
      return chrome.storage.session;
    }
    return null;
  }

  function getTabMap(tabId) {
    if (!_tabRegistry.has(tabId)) {
      _tabRegistry.set(tabId, new Map());
    }
    return _tabRegistry.get(tabId);
  }

  function scheduleDebouncedSync(tabId, delayMs = DEBOUNCE_DELAY_MS) {
    const backend = getStorageBackend();
    if (!backend) return;

    if (_syncTimers.has(tabId)) {
      clearTimeout(_syncTimers.get(tabId));
    }

    const timerId = setTimeout(async () => {
      _syncTimers.delete(tabId);
      try {
        await flushStorageSync(tabId);
      } catch (err) {
        console.warn(`[UniversalMediaRegistry] Debounced sync failed for tab ${tabId}:`, err);
      }
    }, delayMs);

    _syncTimers.set(tabId, timerId);
  }

  async function flushStorageSync(tabId) {
    const backend = getStorageBackend();
    if (!backend) return;

    if (_syncTimers.has(tabId)) {
      clearTimeout(_syncTimers.get(tabId));
      _syncTimers.delete(tabId);
    }

    const tabMap = _tabRegistry.get(tabId);
    const key = STORAGE_KEY_PREFIX + tabId;

    if (!tabMap || tabMap.size === 0) {
      if (typeof backend.remove === 'function') {
        return new Promise((resolve) => {
          backend.remove(key, () => resolve());
        });
      }
      return;
    }

    const serializedRecords = Array.from(tabMap.values()).map(r => ({ ...r }));

    if (typeof backend.set === 'function') {
      return new Promise((resolve, reject) => {
        backend.set({ [key]: serializedRecords }, () => {
          if (typeof chrome !== 'undefined' && chrome.runtime?.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
  }

  async function hydrateTabRegistry(tabId) {
    const backend = getStorageBackend();
    if (!backend || typeof backend.get !== 'function') {
      return [];
    }

    const key = STORAGE_KEY_PREFIX + tabId;
    return new Promise((resolve) => {
      backend.get([key], (result) => {
        if (!result || !Array.isArray(result[key])) {
          return resolve([]);
        }

        const tabMap = getTabMap(tabId);
        for (const item of result[key]) {
          try {
            const record = createMediaRecord(item);
            tabMap.set(record.id, record);
          } catch (e) {
            console.warn(`[UniversalMediaRegistry] Failed to hydrate item in tab ${tabId}:`, e);
          }
        }
        resolve(Array.from(tabMap.values()));
      });
    });
  }

  function registerMedia(tabId, candidateInput) {
    if (typeof tabId !== 'number' || isNaN(tabId)) {
      throw new TypeError('registerMedia: tabId must be a valid number');
    }
    if (!candidateInput || typeof candidateInput !== 'object') {
      return null;
    }

    let candidate;
    try {
      candidate = createMediaRecord({
        ...candidateInput,
        requestUrl: candidateInput.requestUrl || candidateInput.url || candidateInput.originalUrl || candidateInput.canonicalUrl,
        tabId
      });
    } catch (err) {
      console.warn('[UniversalMediaRegistry] Skipped invalid media candidate:', err.message);
      return null;
    }

    const tabMap = getTabMap(tabId);

    let existingRecord = tabMap.get(candidate.id);

    if (!existingRecord) {
      for (const rec of tabMap.values()) {
        if (rec.mediaInstanceId === candidate.mediaInstanceId &&
            rec.resourceIdentity === candidate.resourceIdentity &&
            rec.trackType === candidate.trackType) {
          existingRecord = rec;
          break;
        }
      }
    }

    if (existingRecord) {
      if (candidate.requestUrl && candidate.requestUrl !== existingRecord.requestUrl) {
        existingRecord.requestUrl = candidate.requestUrl;
        existingRecord.sanitizedLogUrl = sanitizeUrlForLogging(candidate.requestUrl);
        existingRecord.expiresAt = candidate.expiresAt || getUrlExpirationTimestamp(candidate.requestUrl);
      }

      if (candidate.sizeBytes && candidate.sizeBytes > (existingRecord.sizeBytes || 0)) {
        existingRecord.sizeBytes = candidate.sizeBytes;
      }
      if (candidate.quality && !existingRecord.quality) {
        existingRecord.quality = candidate.quality;
      }
      if (candidate.bitrate && !existingRecord.bitrate) {
        existingRecord.bitrate = candidate.bitrate;
      }
      if (candidate.mimeType && candidate.mimeType !== 'application/octet-stream') {
        existingRecord.mimeType = candidate.mimeType;
      }
      if (candidate.title && !existingRecord.title) {
        existingRecord.title = candidate.title;
      }
      if (candidate.thumbnailUrl && !existingRecord.thumbnailUrl) {
        existingRecord.thumbnailUrl = candidate.thumbnailUrl;
      }
      if (candidate.headers && Object.keys(candidate.headers).length > 0) {
        existingRecord.headers = { ...existingRecord.headers, ...candidate.headers };
      }
      if (candidate.resolutionDetails) {
        existingRecord.resolutionDetails = { ...existingRecord.resolutionDetails, ...candidate.resolutionDetails };
      }

      existingRecord.updatedAt = Date.now();
      scheduleDebouncedSync(tabId);
      return existingRecord;
    }

    tabMap.set(candidate.id, candidate);

    while (tabMap.size > MAX_RECORDS_PER_TAB) {
      const oldestKey = tabMap.keys().next().value;
      tabMap.delete(oldestKey);
    }

    scheduleDebouncedSync(tabId);
    return candidate;
  }

  function transitionMediaState(tabId, recordId, nextState, details = {}) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap || !tabMap.has(recordId)) {
      return { success: false, error: `Record not found: ${recordId}` };
    }

    const record = tabMap.get(recordId);

    if (!isValidStateTransition(record.state, nextState)) {
      return {
        success: false,
        error: `Invalid state transition from '${record.state}' to '${nextState}' for record ${recordId}`
      };
    }

    record.state = nextState;
    record.updatedAt = Date.now();

    if (details.unresolvedReason) {
      record.unresolvedReason = details.unresolvedReason;
    }
    if (details.resolutionDetails) {
      record.resolutionDetails = { ...record.resolutionDetails, ...details.resolutionDetails };
    }
    if (details.quality) {
      record.quality = details.quality;
    }
    if (details.sizeBytes) {
      record.sizeBytes = details.sizeBytes;
    }
    if (details.variants) {
      record.variants = details.variants;
    }
    if (details.audioTracks) {
      record.audioTracks = details.audioTracks;
    }

    scheduleDebouncedSync(tabId);
    return { success: true, record };
  }

  function cleanExpiredRecords(tabId, clockSkewMs = 0) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap) return 0;

    let expiredCount = 0;
    const now = Date.now();

    for (const record of tabMap.values()) {
      if (record.expiresAt && (now >= record.expiresAt - clockSkewMs)) {
        if (record.state !== MediaState.DOWNLOADING && record.state !== MediaState.COMPLETED) {
          record.state = MediaState.UNRESOLVED;
          record.unresolvedReason = UnresolvedReason.TOKEN_EXPIRED;
          record.updatedAt = now;
          expiredCount++;
        }
      }
    }

    if (expiredCount > 0) {
      scheduleDebouncedSync(tabId);
    }
    return expiredCount;
  }

  function getMedia(tabId, recordId) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap || !tabMap.has(recordId)) return null;
    return { ...tabMap.get(recordId) };
  }

  function getTabMedia(tabId) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap) return [];
    return Array.from(tabMap.values()).map(r => ({ ...r }));
  }

  function getMediaByInstanceId(tabId, mediaInstanceId) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap) return [];
    const matched = [];
    for (const record of tabMap.values()) {
      if (record.mediaInstanceId === mediaInstanceId) {
        matched.push({ ...record });
      }
    }
    return matched;
  }

  function getMediaByResourceIdentity(tabId, resourceIdentity) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap) return [];
    const matched = [];
    for (const record of tabMap.values()) {
      if (record.resourceIdentity === resourceIdentity) {
        matched.push({ ...record });
      }
    }
    return matched;
  }

  function removeMedia(tabId, recordId) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap) return false;
    const deleted = tabMap.delete(recordId);
    if (deleted) {
      scheduleDebouncedSync(tabId);
    }
    return deleted;
  }

  function recycleMediaInstance(tabId, mediaInstanceId) {
    const tabMap = _tabRegistry.get(tabId);
    if (!tabMap) return 0;

    let removedCount = 0;
    for (const [key, record] of tabMap.entries()) {
      if (record.mediaInstanceId === mediaInstanceId) {
        tabMap.delete(key);
        removedCount++;
      }
    }

    if (removedCount > 0) {
      scheduleDebouncedSync(tabId);
    }
    return removedCount;
  }

  async function clearTab(tabId) {
    if (_syncTimers.has(tabId)) {
      clearTimeout(_syncTimers.get(tabId));
      _syncTimers.delete(tabId);
    }

    _tabRegistry.delete(tabId);

    if (_storageBackend && typeof _storageBackend.remove === 'function') {
      const key = STORAGE_KEY_PREFIX + tabId;
      return new Promise((resolve) => {
        _storageBackend.remove(key, () => resolve());
      });
    }
  }

  function resetAll() {
    for (const timerId of _syncTimers.values()) {
      clearTimeout(timerId);
    }
    _syncTimers.clear();
    _tabRegistry.clear();
  }

  return {
    MAX_RECORDS_PER_TAB,
    STORAGE_KEY_PREFIX,
    setStorageBackend,
    getStorageBackend,
    registerMedia,
    transitionMediaState,
    cleanExpiredRecords,
    getMedia,
    getTabMedia,
    getMediaByInstanceId,
    getMediaByResourceIdentity,
    removeMedia,
    recycleMediaInstance,
    clearTab,
    flushStorageSync,
    hydrateTabRegistry,
    scheduleDebouncedSync,
    resetAll,
    clearAll: resetAll
  };
});
