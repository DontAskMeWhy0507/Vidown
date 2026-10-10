/**
 * Savior - Chrome Service Worker Shim & Native Messaging Bridge
 * Polyfills Cốc Cốc browser APIs and routes downloads through FFmpeg Native Messaging Host.
 */

// ==========================================
// 1. Cốc Cốc Browser API Polyfills & Stubs
// ==========================================

// Stub chrome.coccocPrivate
if (!chrome.coccocPrivate) {
  chrome.coccocPrivate = {
    getFeatureState(name, callback) {
      if (typeof callback === 'function') callback({ enabled: false });
    },
    actOnFeature(name, action) {}
  };
}

// Stub chrome.coccoc
if (!chrome.coccoc) {
  chrome.coccoc = {
    onGetTranscript: {
      addListener() {},
      removeListener() {},
      hasListener() { return false; }
    },
    sendRequest(req, cb) { if (cb) cb({ success: false }); },
    sendYtVideoTranscript(id, text) {},
    setAsDefaultBrowser() {},
    shouldBlockAdsOnYoutubeBySavior(url, cb) { if (cb) cb(false); }
  };
}

// Stub chrome.eyeoFilteringPrivate (AdBlock Plus in Cốc Cốc)
if (!chrome.eyeoFilteringPrivate) {
  chrome.eyeoFilteringPrivate = {
    addTabBlockedCount(tabId, count) {},
    getAllowedDomains(type, callback) {
      if (typeof callback === 'function') callback([]);
    },
    getCustomFilters(type, callback) {
      if (typeof callback === 'function') callback('');
    },
    onCoccocAllowedDomainsChanged: {
      addListener() {},
      removeListener() {},
      hasListener() { return false; }
    }
  };
}

// Stub chrome.metricsPrivate (Cốc Cốc internal telemetry)
if (!chrome.metricsPrivate) {
  chrome.metricsPrivate = {
    MetricTypeType: { HISTOGRAM_LINEAR: 0 },
    recordCustomData() {},
    recordEnumerationValue() {},
    recordLongTime() {},
    recordValue() {},
    recordSmallCount() {}
  };
}

// Stub chrome.pageAction for MV3 compatibility
if (!chrome.pageAction) {
  chrome.pageAction = {
    show(tabId) { if (chrome.action) chrome.action.enable(tabId); },
    hide(tabId) { if (chrome.action) chrome.action.disable(tabId); }
  };
}

// ==========================================
// 2. Native Messaging Host Integration
// ==========================================

const NATIVE_HOST = 'com.savior.helper';
let nativeHelperAvailable = false;
let activeNativePort = null;
let heartbeatInterval = null;

let fakeIdCounter = 900000;
const activeDownloads = new Map();

// Hook chrome.downloads.onChanged listeners so we can synthesize events for native downloads
const _onChangedListeners = new Set();
const _origOnChangedAddListener = chrome.downloads.onChanged.addListener.bind(chrome.downloads.onChanged);
chrome.downloads.onChanged.addListener = function(listener) {
  _onChangedListeners.add(listener);
  _origOnChangedAddListener(listener);
};

function dispatchDownloadChanged(changeInfo) {
  for (const listener of _onChangedListeners) {
    try {
      listener(changeInfo);
    } catch (e) {
      console.warn('[Savior] Error in onChanged listener:', e);
    }
  }
}

// Probe native helper availability on startup
function probeNativeHelper() {
  try {
    chrome.runtime.sendNativeMessage(NATIVE_HOST, { action: 'ping' }, (response) => {
      if (chrome.runtime.lastError) {
        nativeHelperAvailable = false;
        console.log('[Savior] Native helper not detected:', chrome.runtime.lastError.message);
      } else if (response && response.status === 'ok') {
        nativeHelperAvailable = true;
        console.log('[Savior] Native helper connected successfully! Version:', response.version);
      }
    });
  } catch (e) {
    nativeHelperAvailable = false;
  }
}
probeNativeHelper();

function getOrCreateNativePort() {
  if (activeNativePort) return activeNativePort;
  try {
    activeNativePort = chrome.runtime.connectNative(NATIVE_HOST);
    activeNativePort.onDisconnect.addListener(() => {
      console.log('[Savior] Native host disconnected');
      activeNativePort = null;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }
    });

    if (!heartbeatInterval) {
      heartbeatInterval = setInterval(() => {
        try {
          if (activeNativePort) activeNativePort.postMessage({ action: 'ping' });
          chrome.runtime.getPlatformInfo(() => {});
        } catch (e) {
          clearInterval(heartbeatInterval);
          heartbeatInterval = null;
        }
      }, 15000);
    }

    return activeNativePort;
  } catch (e) {
    console.error('[Savior] Failed to connect to native host:', e);
    return null;
  }
}

function startNativeDownload(downloadParams, callback) {
  const port = getOrCreateNativePort();
  if (!port) {
    console.warn('[Savior] Native port unavailable');
    return false;
  }

  const fakeId = ++fakeIdCounter;
  const safeFilename = (downloadParams.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
  const task = {
    id: fakeId,
    params: downloadParams,
    filename: safeFilename,
    complete: false
  };
  activeDownloads.set(fakeId, task);

  const messageHandler = (msg) => {
    if (!msg) return;

    if (msg.action === 'progress') {
      if (msg.percent && chrome.action && chrome.action.setBadgeText) {
        chrome.action.setBadgeText({ text: msg.percent });
      }
    } else if (msg.action === 'complete') {
      task.complete = true;
      port.onMessage.removeListener(messageHandler);
      if (chrome.action && chrome.action.setBadgeText) {
        chrome.action.setBadgeText({ text: '✓' });
        setTimeout(() => {
          chrome.action.setBadgeText({ text: '' });
        }, 4000);
      }
      dispatchDownloadChanged({
        id: fakeId,
        state: { current: 'complete', previous: 'in_progress' },
        filename: { current: msg.outputFile || safeFilename }
      });
    } else if (msg.action === 'error') {
      port.onMessage.removeListener(messageHandler);
      if (chrome.action && chrome.action.setBadgeText) {
        chrome.action.setBadgeText({ text: '!' });
        setTimeout(() => {
          chrome.action.setBadgeText({ text: '' });
        }, 4000);
      }
      dispatchDownloadChanged({
        id: fakeId,
        error: { current: msg.error || 'SERVER_BAD_CONTENT' },
        state: { current: 'interrupted' }
      });
    }
  };

  port.onMessage.addListener(messageHandler);

  port.postMessage({
    action: 'download',
    url: downloadParams.url || '',
    videoUrl: downloadParams.videoUrl || downloadParams.url || '',
    audioUrl: downloadParams.audioUrl || '',
    title: safeFilename.replace(/\.[^.]+$/, ''),
    filename: safeFilename,
    referer: downloadParams.referrer || '',
    quality: downloadParams.convertToMp3 || downloadParams.soundOnly ? 'audio' : 'best',
    soundOnly: Boolean(downloadParams.soundOnly),
    cookie: downloadParams.cookie || ''
  });

  if (typeof callback === 'function') {
    callback(fakeId);
  }
  return true;
}

// ==========================================
// 3. Download API Polyfills & Interception
// ==========================================

// Polyfill chrome.downloads.combineStreams (YouTube 1080p+, Facebook DASH)
chrome.downloads.combineStreams = function(options, callback) {
  console.log('[Savior] combineStreams invoked:', options);
  const ok = startNativeDownload(options, callback);
  if (!ok) {
    const cleanOpts = {
      url: options.videoUrl || options.url,
      filename: options.filename || 'video.mp4',
      saveAs: false
    };
    _origDownload(cleanOpts, callback);
  }
};

if (!chrome.mediaDownload) {
  chrome.mediaDownload = {
    combineStreams: chrome.downloads.combineStreams
  };
} else if (!chrome.mediaDownload.combineStreams) {
  chrome.mediaDownload.combineStreams = chrome.downloads.combineStreams;
}

// Intercept chrome.downloads.download
const _origDownload = chrome.downloads.download.bind(chrome.downloads);

chrome.downloads.download = function(options, callback) {
  console.log('[Savior] chrome.downloads.download invoked:', options);

  const isConversionStream = Boolean(
    options.convertToMp4 ||
    options.convertToMp3 ||
    options.streamsNumber === -42 ||
    options.streamsNumber === -43 ||
    options.soundOnly ||
    (options.url && (options.url.includes('.m3u8') || options.url.includes('kingcdn.xyz') || options.url.includes('buiduyanh.online')))
  );

  // Route to native host when required or available
  if (isConversionStream || nativeHelperAvailable) {
    const started = startNativeDownload(options, callback);
    if (started) return;
  }

  // Standard Chrome download fallback: clean Cốc Cốc proprietary options
  const cleanOptions = { ...options };
  delete cleanOptions.convertToMp4;
  delete cleanOptions.convertToMp3;
  delete cleanOptions.streamsNumber;
  delete cleanOptions.soundOnly;
  delete cleanOptions.soundQuality;
  delete cleanOptions.playList;
  delete cleanOptions.videoUrl;
  delete cleanOptions.audioUrl;
  delete cleanOptions.cookie;

  return _origDownload(cleanOptions, callback);
};

// Polyfill chrome.downloads.play
chrome.downloads.play = function(downloadId) {
  console.log('[Savior] chrome.downloads.play invoked for id:', downloadId);
  const task = activeDownloads.get(downloadId);
  const port = getOrCreateNativePort();
  if (port) {
    if (task && task.filename) {
      port.postMessage({ action: 'openFile', filename: task.filename });
    } else {
      chrome.downloads.search({ id: downloadId }, (results) => {
        if (results && results[0] && results[0].filename) {
          port.postMessage({ action: 'openFile', path: results[0].filename });
        }
      });
    }
  } else {
    chrome.downloads.open(downloadId);
  }
};

// Intercept cancel
const _origCancel = chrome.downloads.cancel.bind(chrome.downloads);
chrome.downloads.cancel = function(downloadId, callback) {
  if (activeDownloads.has(downloadId)) {
    activeDownloads.delete(downloadId);
    const port = getOrCreateNativePort();
    if (port) port.postMessage({ action: 'cancel' });
    if (typeof callback === 'function') callback();
    return;
  }
  return _origCancel(downloadId, callback);
};

// Intercept erase
const _origErase = chrome.downloads.erase.bind(chrome.downloads);
chrome.downloads.erase = function(query, callback) {
  if (query && query.id && activeDownloads.has(query.id)) {
    activeDownloads.delete(query.id);
    if (typeof callback === 'function') callback([query.id]);
    return;
  }
  return _origErase(query, callback);
};

// ==========================================
// 4. Load Core Background Script
// ==========================================
importScripts("background.js");
