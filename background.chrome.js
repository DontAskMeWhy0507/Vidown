/**
 * Savior - Chrome Service Worker Shim & Native Messaging Bridge
 * Polyfills Cốc Cốc browser APIs, routes downloads through FFmpeg Native Messaging Host,
 * and manages real-time download history for the Downloads Manager.
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
// 2. Native Messaging Host Integration & History
// ==========================================

const NATIVE_HOST = 'com.savior.helper';
let nativeHelperAvailable = false;
let activeNativePort = null;
let heartbeatInterval = null;

let fakeIdCounter = 900000;
const activeDownloads = new Map();
let configuredDownloadDir = '';

// The native host receives an absolute output directory while Chrome downloads do not.
// Keep the user's choice in memory so every new native task gets it consistently.
try {
  chrome.storage.local.get(['customDownloadDir'], (result) => {
    configuredDownloadDir = result && result.customDownloadDir || '';
  });
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.customDownloadDir) {
      configuredDownloadDir = changes.customDownloadDir.newValue || '';
    }
  });
} catch (_) {}

// Bind original Chrome download primitives early
const _origDownload = (chrome.downloads && chrome.downloads.download) ? chrome.downloads.download.bind(chrome.downloads) : () => {};
const _origCancel = (chrome.downloads && chrome.downloads.cancel) ? chrome.downloads.cancel.bind(chrome.downloads) : () => {};

let currentActiveTabUrl = '';
try {
  if (chrome.tabs && chrome.tabs.onActivated) {
    chrome.tabs.onActivated.addListener((activeInfo) => {
      chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (!chrome.runtime.lastError && tab && tab.url) {
          currentActiveTabUrl = tab.url;
        }
      });
    });
  }
  if (chrome.tabs && chrome.tabs.onUpdated) {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (tab && tab.active && tab.url) {
        currentActiveTabUrl = tab.url;
      }
    });
  }
} catch (_) {}

// Helper to update persistent download history in chrome.storage.local
function updateDownloadHistory(record) {
  try {
    chrome.storage.local.get(['downloadHistory'], (result) => {
      const history = Array.isArray(result.downloadHistory) ? result.downloadHistory : [];
      const idx = history.findIndex(item => item.id === record.id);
      if (idx >= 0) {
        history[idx] = { ...history[idx], ...record };
      } else {
        history.unshift(record);
      }
      if (history.length > 200) history.length = 200;
      chrome.storage.local.set({ downloadHistory: history });
    });
  } catch (e) {
    console.warn('[Savior] updateDownloadHistory error:', e);
  }
}

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let idx = 0;
  while (size >= 1024 && idx < units.length - 1) {
    size /= 1024;
    idx++;
  }
  return `${size.toFixed(1)} ${units[idx]}`;
}

function formatSpeed(bytesPerSec) {
  if (!bytesPerSec || bytesPerSec <= 0) return '0 KB/s';
  if (bytesPerSec >= 1024 * 1024) {
    return `${(bytesPerSec / (1024 * 1024)).toFixed(1)} MB/s`;
  }
  return `${Math.round(bytesPerSec / 1024)} KB/s`;
}

function requiresNativeHelper(options) {
  if (!options) return false;
  const url = options.videoUrl || options.url || '';
  if (options.convertToMp3 || options.convertToMp4 || options.soundOnly || options.streamsNumber === -42 || options.streamsNumber === -43) {
    return true;
  }
  if (options.videoUrl && options.audioUrl && options.videoUrl !== options.audioUrl) {
    return true;
  }
  if (url.includes('.m3u8') || url.includes('kingcdn.xyz') || url.includes('buiduyanh.online')) {
    return true;
  }
  if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('googlevideo.com')) {
    return true;
  }
  return false;
}

function isSessionProtectedStream(options) {
  if (!options) return false;
  const url = options.videoUrl || options.url || '';
  const page = options.pageUrl || options.referrer || '';
  return (
    url.includes('tiktok.com') ||
    url.includes('tiktokcdn.com') ||
    url.includes('byteoversea.com') ||
    url.includes('ibytedtos.com') ||
    url.includes('douyin.com') ||
    url.includes('iesdouyin.com') ||
    page.includes('tiktok.com') ||
    page.includes('douyin.com')
  );
}

// Native downloads are not made by the browser renderer, so they do not
// automatically inherit the user's logged-in cookies.  Collect only cookies
// that Chrome would expose for the source/media URLs and keep them in memory
// for this one download request (never in downloadHistory).
function getCookieHeader(urls, callback) {
  const uniqueUrls = [...new Set((urls || []).filter(url => typeof url === 'string' && /^https?:\/\//i.test(url)))];
  if (!uniqueUrls.length || !chrome.cookies || !chrome.cookies.getAll) {
    callback('');
    return;
  }

  const byName = new Map();
  let pending = uniqueUrls.length;
  const done = () => {
    pending -= 1;
    if (pending === 0) {
      callback([...byName.values()].map(cookie => `${cookie.name}=${cookie.value}`).join('; '));
    }
  };

  uniqueUrls.forEach(url => {
    try {
      chrome.cookies.getAll({ url }, (cookies) => {
        if (!chrome.runtime.lastError) {
          (cookies || []).forEach(cookie => byName.set(`${cookie.domain}|${cookie.path}|${cookie.name}`, cookie));
        }
        done();
      });
    } catch (_) {
      done();
    }
  });
}

function trackBrowserDownload(chromeId, options, filename, url) {
  if (!chromeId) return;
  const safeFilename = filename || (options.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
  const mediaType = (options.convertToMp3 || options.soundOnly) ? 'audio' : 'video';
  const targetUrl = url || options.videoUrl || options.url || '';
  const historyId = options.taskId || chromeId;
  const task = {
    id: historyId,
    chromeId: chromeId,
    isBrowserDownload: true,
    title: safeFilename.replace(/\.[^.]+$/, ''),
    filename: safeFilename,
    url: targetUrl,
    type: mediaType,
    params: options,
    state: 'downloading',
    percent: '1%',
    speed: 'Đang tải (Trình duyệt)...',
    size: '0 B',
    bytesReceived: 0,
    totalBytes: 0,
    lastBytes: 0,
    lastTime: Date.now(),
    startTime: Date.now(),
    complete: false
  };
  activeDownloads.set(chromeId, task);

  updateDownloadHistory({
    id: historyId,
    chromeId: chromeId,
    title: task.title,
    filename: safeFilename,
    url: targetUrl,
    type: mediaType,
    state: 'downloading',
    percent: '1%',
    speed: 'Đang tải (Trình duyệt)...',
    size: '0 B',
    startTime: task.startTime
  });

  setActionBadge('1%', '#10b981');
  broadcastTaskEvent({
    action: 'nativeProgress',
    taskId: historyId,
    percent: '1%',
    speed: 'Đang tải (Trình duyệt)...',
    size: '0 B'
  });
}

function startBrowserDownload(options, callback) {
  const targetUrl = options.videoUrl || options.url;
  if (!targetUrl) {
    if (typeof callback === 'function') callback(null);
    return false;
  }

  for (const [id, t] of activeDownloads.entries()) {
    if (t.url === targetUrl && (t.state === 'in_progress' || t.state === 'downloading')) {
      console.log('[Savior] Download already active for this URL, returning task:', id);
      if (typeof callback === 'function') callback(id);
      return true;
    }
  }

  const safeFilename = (options.filename || 'video.mp4')
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, ' ')
    .trim();

  const chromeOptions = {
    url: targetUrl,
    filename: safeFilename,
    conflictAction: options.conflictAction || 'uniquify',
    saveAs: false
  };

  const ref = options.referrer || options.pageUrl || currentActiveTabUrl;
  if (ref && !targetUrl.includes('googlevideo.com')) {
    chromeOptions.headers = [{ name: 'Referer', value: ref }];
  }

  try {
    _origDownload(chromeOptions, (chromeId) => {
      if (chrome.runtime.lastError) {
        console.warn('[Savior] _origDownload with headers failed:', chrome.runtime.lastError.message);
        if (chromeOptions.headers) {
          delete chromeOptions.headers;
          _origDownload(chromeOptions, (retryId) => {
            if (chrome.runtime.lastError) {
              console.error('[Savior] Bare _origDownload also failed:', chrome.runtime.lastError.message);
              if (typeof callback === 'function') callback(null);
            } else {
              trackBrowserDownload(retryId, options, safeFilename, targetUrl);
              if (typeof callback === 'function') callback(retryId);
            }
          });
          return;
        }
        if (typeof callback === 'function') callback(null);
        return;
      }
      trackBrowserDownload(chromeId, options, safeFilename, targetUrl);
      if (typeof callback === 'function') callback(chromeId);
    });
    return true;
  } catch (err) {
    console.error('[Savior] Exception in startBrowserDownload:', err);
    if (typeof callback === 'function') callback(null);
    return false;
  }
}

// Keep session-protected streams on Cốc Cốc's own download API.  The original
// extension calls this API directly; its downloader has access to the active
// browser session, unlike a native process or a reconstructed HTTP request.
function startCocCocSessionDownload(options, callback) {
  const targetUrl = options && (options.videoUrl || options.url);
  if (!targetUrl) {
    if (typeof callback === 'function') callback(null);
    return false;
  }

  const safeFilename = (options.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
  const nativeOptions = {
    ...options,
    url: options.url || targetUrl,
    filename: safeFilename,
    conflictAction: options.conflictAction || 'uniquify',
    saveAs: false
  };

  const reportStartError = (error) => {
    const taskId = options.taskId || `start_error_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const errorText = String(error && (error.message || error) || 'Cốc Cốc không thể bắt đầu tải tệp');
    updateDownloadHistory({
      id: taskId,
      title: safeFilename.replace(/\.[^.]+$/, ''),
      filename: safeFilename,
      url: targetUrl,
      videoUrl: options.videoUrl || targetUrl,
      referer: options.referrer || options.pageUrl || '',
      pageUrl: options.pageUrl || options.referrer || '',
      type: options.soundOnly ? 'audio' : 'video',
      state: 'error',
      error: errorText,
      startTime: Date.now()
    });
    broadcastTaskEvent({ action: 'nativeError', taskId, error: errorText });
  };

  try {
    let finished = false;
    const finish = (chromeId, error) => {
      if (finished) return;
      finished = true;
      if (error || chrome.runtime.lastError || !chromeId) {
        const reason = error || chrome.runtime.lastError || 'Cốc Cốc không trả về mã tải xuống';
        console.warn('[Savior] Cốc Cốc session download failed:', reason && (reason.message || reason));
        reportStartError(reason);
        if (typeof callback === 'function') callback(null);
        return;
      }
      trackBrowserDownload(chromeId, options, safeFilename, targetUrl);
      if (typeof callback === 'function') callback(chromeId);
    };
    const result = _origDownload(nativeOptions, (chromeId) => {
      finish(chromeId, null);
    });
    if (result && typeof result.then === 'function') {
      result.then((chromeId) => finish(chromeId, null)).catch(error => finish(null, error));
    }
    setTimeout(() => {
      finish(null, 'Cốc Cốc không phản hồi yêu cầu tải trong 10 giây');
    }, 10000);
    return true;
  } catch (err) {
    console.warn('[Savior] Cốc Cốc session download exception:', err);
    reportStartError(err);
    if (typeof callback === 'function') callback(null);
    return false;
  }
}

// Hook chrome.downloads.onChanged listeners so we can synthesize events for native downloads
// AND monitor native Chrome downloads for real-time manager and badge updates
const _onChangedListeners = new Set();
const _origOnChangedAddListener = (chrome.downloads && chrome.downloads.onChanged && chrome.downloads.onChanged.addListener)
  ? chrome.downloads.onChanged.addListener.bind(chrome.downloads.onChanged)
  : () => {};

chrome.downloads.onChanged.addListener = function(listener) {
  _onChangedListeners.add(listener);
  _origOnChangedAddListener(listener);
};

// Monitor browser downloads in activeDownloads
try {
  _origOnChangedAddListener((delta) => {
    if (!delta || !delta.id) return;
    const task = activeDownloads.get(delta.id);
    if (!task || !task.isBrowserDownload) return;

    const now = Date.now();
    let updated = false;

    if (delta.bytesReceived && typeof delta.bytesReceived.current === 'number') {
      const received = delta.bytesReceived.current;
      task.bytesReceived = received;

      const timeDiff = (now - (task.lastTime || task.startTime)) / 1000;
      if (timeDiff >= 0.4) {
        const bytesDiff = received - (task.lastBytes || 0);
        const speedBps = bytesDiff / timeDiff;
        task.speed = formatSpeed(speedBps);
        task.lastBytes = received;
        task.lastTime = now;
        updated = true;
      }
    }

    if (delta.totalBytes && typeof delta.totalBytes.current === 'number') {
      task.totalBytes = delta.totalBytes.current;
      if (task.totalBytes > 0) {
        task.size = formatBytes(task.totalBytes);
        const pct = Math.min(99, Math.round((task.bytesReceived / task.totalBytes) * 100));
        task.percent = `${pct}%`;
        setActionBadge(`${pct}%`, '#10b981');
        updated = true;
      }
    }

    if (delta.filename && delta.filename.current) {
      task.filename = delta.filename.current.split(/[\\/]/).pop();
      task.outputPath = delta.filename.current;
    }

    if (delta.state) {
      const st = delta.state.current;
      if (st === 'complete') {
        task.state = 'completed';
        task.complete = true;
        task.percent = '100%';
        task.speed = 'Hoàn thành';
        activeDownloads.delete(delta.id);

        setActionBadge('✓', '#10b981');
        setTimeout(() => {
          if (activeDownloads.size === 0) setActionBadge('');
        }, 4000);

        updateDownloadHistory({
          id: task.id,
          chromeId: delta.id,
          state: 'completed',
          percent: '100%',
          speed: 'Hoàn thành',
          endTime: now,
          outputPath: task.outputPath || task.filename,
          outputFile: task.outputPath || task.filename
        });

        broadcastTaskEvent({
          action: 'nativeComplete',
          taskId: task.id,
          outputFile: task.outputPath || task.filename
        });
        return;
      } else if (st === 'interrupted') {
        const err = delta.error ? delta.error.current : 'INTERRUPTED';
        task.state = (err === 'USER_CANCELED') ? 'canceled' : 'error';
        activeDownloads.delete(delta.id);

        if (activeDownloads.size === 0) setActionBadge('');

        updateDownloadHistory({
          id: task.id,
          chromeId: delta.id,
          state: task.state,
          error: err,
          speed: (err === 'USER_CANCELED') ? 'Đã hủy' : 'Gián đoạn'
        });

        broadcastTaskEvent({
          action: (err === 'USER_CANCELED') ? 'nativeCanceled' : 'nativeError',
          taskId: task.id,
          error: err
        });
        return;
      }
    }

    if (updated) {
      updateDownloadHistory({
        id: task.id,
        percent: task.percent,
        speed: task.speed,
        size: task.size
      });
      broadcastTaskEvent({
        action: 'nativeProgress',
        taskId: task.id,
        percent: task.percent,
        speed: task.speed,
        size: task.size
      });
    }
  });
} catch (_) {}

function dispatchDownloadChanged(changeInfo) {
  for (const listener of _onChangedListeners) {
    try {
      listener(changeInfo);
    } catch (e) {
      console.warn('[Savior] Error in onChanged listener:', e);
    }
  }
}

function setActionBadge(text, color = '#10b981') {
  try {
    if (chrome.action && chrome.action.setBadgeText) {
      chrome.action.setBadgeText({ text: text || '' });
      if (text && chrome.action.setBadgeBackgroundColor) {
        chrome.action.setBadgeBackgroundColor({ color });
      }
    }
  } catch (_) {}
}

function broadcastTaskEvent(payload) {
  try {
    chrome.runtime.sendMessage(payload).catch(() => {});
  } catch (_) {}
}

// Open the Savior Downloads Manager tab, or focus it if already open.
// ponytail: query all tabs safely and focus existing or create new.
function openOrFocusDownloadsManager() {
  try {
    const targetUrl = chrome.runtime.getURL('downloads/downloads.html');
    chrome.tabs.query({}, (tabs) => {
      const existing = (tabs || []).find(t => t.url && (t.url === targetUrl || t.url.includes('downloads/downloads.html')));
      if (existing && existing.id) {
        chrome.tabs.update(existing.id, { active: true });
        if (existing.windowId && chrome.windows && chrome.windows.update) {
          try { chrome.windows.update(existing.windowId, { focused: true }); } catch (_) {}
        }
      } else {
        chrome.tabs.create({ url: targetUrl });
      }
    });
  } catch (_) {
    try {
      chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') });
    } catch (__) {}
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
      const errorMsg = chrome.runtime.lastError ? chrome.runtime.lastError.message : 'Native host disconnected';
      console.warn('[Savior] Native host disconnected:', errorMsg);
      activeNativePort = null;
      nativeHelperAvailable = false;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }

      for (const [id, task] of activeDownloads.entries()) {
        task.state = 'error';
        updateDownloadHistory({
          id: id,
          state: 'error',
          error: errorMsg.includes('not found') ? 'NATIVE_HELPER_NOT_FOUND' : errorMsg,
          speed: 'Mất kết nối'
        });
        dispatchDownloadChanged({
          id: id,
          error: { current: 'SERVER_BAD_CONTENT' },
          state: { current: 'interrupted' }
        });
        try {
          chrome.runtime.sendMessage({
            action: 'nativeError',
            taskId: id,
            error: errorMsg
          }).catch(() => {});
        } catch (e) {}
      }
      activeDownloads.clear();
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

const nativeDownloadQueue = [];

function processNextQueuedNativeDownload() {
  if (nativeDownloadQueue.length === 0) return;
  const hasNativeJob = Array.from(activeDownloads.values()).some(t => !t.isBrowserDownload && t.state === 'downloading');
  if (hasNativeJob) return;

  const next = nativeDownloadQueue.shift();
  if (next) {
    console.log('[Savior] Starting queued native download:', next.params);
    startNativeDownload(next.params, next.callback);
  }
}

function startNativeDownload(downloadParams, callback) {
  if (!nativeHelperAvailable) {
    console.warn('[Savior] Native helper not available, bypassing native download');
    return false;
  }
  const port = getOrCreateNativePort();
  if (!port) {
    console.warn('[Savior] Native port unavailable');
    return false;
  }

  const targetUrl = downloadParams.videoUrl || downloadParams.url || '';

  // native/host.js is intentionally a single-job host.
  // If a native job is already running, queue DASH muxing and MP3 conversion tasks
  // so they are not forced into browser download which lacks ffmpeg and would lose audio!
  const hasNativeJob = Array.from(activeDownloads.values()).some(t => !t.isBrowserDownload && t.state === 'downloading');
  if (hasNativeJob) {
    if (requiresNativeHelper(downloadParams)) {
      console.log('[Savior] Native helper busy; queueing DASH/conversion task for execution after current job finishes.');
      const fakeId = downloadParams.taskId || ++fakeIdCounter;
      const safeFilename = (downloadParams.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
      const mediaType = (downloadParams.convertToMp3 || downloadParams.soundOnly) ? 'audio' : 'video';

      const task = {
        id: fakeId,
        title: safeFilename.replace(/\.[^.]+$/, ''),
        filename: safeFilename,
        url: targetUrl,
        videoUrl: downloadParams.videoUrl || targetUrl,
        audioUrl: downloadParams.audioUrl || '',
        referer: downloadParams.referrer || downloadParams.pageUrl || '',
        pageUrl: downloadParams.pageUrl || downloadParams.referrer || '',
        outputDir: downloadParams.outputDir || configuredDownloadDir || '',
        quality: downloadParams.quality || 'best',
        soundOnly: Boolean(downloadParams.convertToMp3 || downloadParams.soundOnly),
        type: mediaType,
        params: downloadParams,
        state: 'downloading',
        percent: '0%',
        speed: 'Đang xếp hàng chờ...',
        size: '0 B',
        startTime: Date.now(),
        complete: false
      };
      activeDownloads.set(fakeId, task);

      updateDownloadHistory({
        id: fakeId,
        title: task.title,
        filename: safeFilename,
        url: targetUrl,
        videoUrl: task.videoUrl,
        audioUrl: task.audioUrl,
        referer: task.referer,
        pageUrl: task.pageUrl,
        outputDir: task.outputDir,
        quality: task.quality,
        soundOnly: task.soundOnly,
        type: mediaType,
        state: 'downloading',
        percent: '0%',
        speed: 'Đang xếp hàng chờ...',
        size: '0 B',
        startTime: task.startTime
      });

      broadcastTaskEvent({
        action: 'nativeProgress',
        taskId: fakeId,
        percent: '0%',
        speed: 'Đang xếp hàng chờ...',
        size: '0 B'
      });

      nativeDownloadQueue.push({
        params: { ...downloadParams, taskId: fakeId },
        callback
      });
      if (typeof callback === 'function') callback(fakeId);
      return true;
    }
    console.warn('[Savior] Native download already in progress; using browser fallback for the next progressive task.');
    return false;
  }

  // Deduplicate: if an active download already exists for this URL, return existing task
  for (const [id, t] of activeDownloads.entries()) {
    if (t.url === targetUrl && (t.state === 'in_progress' || t.state === 'downloading')) {
      console.log('[Savior] Download already active for this URL, returning task:', id);
      if (typeof callback === 'function') callback(id);
      return true;
    }
  }

  const fakeId = downloadParams.taskId || ++fakeIdCounter;
  const safeFilename = (downloadParams.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
  const mediaType = (downloadParams.convertToMp3 || downloadParams.soundOnly) ? 'audio' : 'video';

  const task = {
    id: fakeId,
    title: safeFilename.replace(/\.[^.]+$/, ''),
    filename: safeFilename,
    url: targetUrl,
    videoUrl: downloadParams.videoUrl || targetUrl,
    audioUrl: downloadParams.audioUrl || '',
    referer: downloadParams.referrer || downloadParams.pageUrl || '',
    pageUrl: downloadParams.pageUrl || downloadParams.referrer || '',
    outputDir: downloadParams.outputDir || configuredDownloadDir || '',
    quality: downloadParams.quality || 'best',
    soundOnly: Boolean(downloadParams.convertToMp3 || downloadParams.soundOnly),
    type: mediaType,
    params: downloadParams,
    state: 'downloading',
    percent: '1%',
    speed: 'Bắt đầu kết nối...',
    size: '0 B',
    startTime: Date.now(),
    complete: false
  };
  activeDownloads.set(fakeId, task);

  // Initial record entry in persistent storage
  updateDownloadHistory({
    id: fakeId,
    title: task.title,
    filename: safeFilename,
    url: targetUrl,
    videoUrl: task.videoUrl,
    audioUrl: task.audioUrl,
    referer: task.referer,
    pageUrl: task.pageUrl,
    outputDir: task.outputDir,
    quality: task.quality,
    soundOnly: task.soundOnly,
    type: mediaType,
    state: 'downloading',
    percent: '1%',
    speed: 'Bắt đầu kết nối...',
    size: '0 B',
    startTime: task.startTime
  });

  setActionBadge('1%', '#10b981');
  broadcastTaskEvent({
    action: 'nativeProgress',
    taskId: fakeId,
    percent: '1%',
    speed: 'Bắt đầu kết nối...',
    size: '0 B'
  });

  let lastStorageUpdate = 0;

  const messageHandler = (msg) => {
    if (!msg) return;

    if (msg.action === 'progress') {
      const displayPct = (msg.percent && msg.percent.includes('%')) ? msg.percent : '';
      if (displayPct) {
        setActionBadge(displayPct, '#10b981');
      } else if (msg.speed) {
        setActionBadge('...', '#10b981');
      }

      const now = Date.now();
      if (now - lastStorageUpdate > 400) {
        lastStorageUpdate = now;
        updateDownloadHistory({
          id: fakeId,
          percent: msg.percent || '',
          speed: msg.speed || '',
          size: msg.size || ''
        });
      }
      broadcastTaskEvent({
        action: 'nativeProgress',
        taskId: fakeId,
        percent: msg.percent || '',
        speed: msg.speed || '',
        size: msg.size || ''
      });
    } else if (msg.action === 'complete') {
      task.complete = true;
      task.state = 'completed';
      activeDownloads.delete(fakeId);
      port.onMessage.removeListener(messageHandler);

      updateDownloadHistory({
        id: fakeId,
        state: 'completed',
        percent: '100%',
        speed: 'Hoàn thành',
        endTime: Date.now(),
          outputPath: msg.downloadsDir && msg.outputFile ? `${msg.downloadsDir}\\${msg.outputFile}` : (msg.outputFile || safeFilename),
        outputFile: msg.outputFile || safeFilename
      });

      setActionBadge('✓', '#10b981');
      setTimeout(() => {
        if (activeDownloads.size === 0) setActionBadge('');
      }, 4000);

      dispatchDownloadChanged({
        id: fakeId,
        state: { current: 'complete', previous: 'in_progress' },
        filename: { current: msg.outputFile || safeFilename }
      });
      broadcastTaskEvent({
        action: 'nativeComplete',
        taskId: fakeId,
        outputFile: msg.outputFile || safeFilename
      });
      setTimeout(processNextQueuedNativeDownload, 200);
    } else if (msg.action === 'error') {
      task.state = 'error';
      activeDownloads.delete(fakeId);
      port.onMessage.removeListener(messageHandler);

      updateDownloadHistory({
        id: fakeId,
        state: 'error',
        error: msg.error || 'SERVER_BAD_CONTENT'
      });

      setActionBadge('!', '#ef4444');
      setTimeout(() => {
        if (activeDownloads.size === 0) setActionBadge('');
      }, 4000);

      dispatchDownloadChanged({
        id: fakeId,
        error: { current: msg.error || 'SERVER_BAD_CONTENT' },
        state: { current: 'interrupted' }
      });
      broadcastTaskEvent({
        action: 'nativeError',
        taskId: fakeId,
        error: msg.error || 'SERVER_BAD_CONTENT'
      });
      setTimeout(processNextQueuedNativeDownload, 200);
    }
  };

  port.onMessage.addListener(messageHandler);

  // Send download request to native host. A private/friends-only stream needs
  // the same authenticated session as the tab that discovered it.
  const resolvedPageUrl = downloadParams.pageUrl || downloadParams.referrer || currentActiveTabUrl || '';
  const postDownload = (sessionCookie) => {
    port.postMessage({
      action: 'download',
      url: downloadParams.url || '',
      videoUrl: downloadParams.videoUrl || downloadParams.url || '',
      audioUrl: downloadParams.audioUrl || '',
      title: safeFilename.replace(/\.[^.]+$/, ''),
      filename: safeFilename,
      referer: downloadParams.referrer || resolvedPageUrl,
      pageUrl: resolvedPageUrl,
      quality: downloadParams.convertToMp3 || downloadParams.soundOnly ? 'audio' : (downloadParams.quality || 'best'),
      soundOnly: Boolean(downloadParams.soundOnly),
      cookie: downloadParams.cookie || sessionCookie || '',
      outputDir: downloadParams.outputDir || configuredDownloadDir || '',
      taskId: fakeId
    });
  };
  getCookieHeader([resolvedPageUrl, targetUrl], postDownload);

  if (typeof callback === 'function') {
    callback(fakeId);
  }
  return true;
}

// ==========================================
// 3. Downloads Manager IPC Message Routing
// ==========================================

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (!req || !req.action) return false;

  switch (req.action) {
    case 'openDownloadsManager':
    case 'openDownloadsPage': {
      chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') });
      sendResponse({ success: true });
      return false;
    }

    case 'openDownloadsFolder':
    case 'openFolder': {
      const port = getOrCreateNativePort();
      if (port) {
        port.postMessage({ action: 'openFolder', path: req.path });
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false, error: 'Native helper not available' });
      }
      return false;
    }

    case 'cancelDownload': {
      const targetId = req.taskId || req.id;
      const qIdx = nativeDownloadQueue.findIndex(q => q.params && (q.params.taskId === targetId || q.params.id === targetId));
      if (qIdx !== -1) {
        nativeDownloadQueue.splice(qIdx, 1);
      }
      if (targetId && activeDownloads.has(targetId)) {
        const t = activeDownloads.get(targetId);
        activeDownloads.delete(targetId);
        if (t && t.isBrowserDownload) {
          try { _origCancel(targetId); } catch (_) {}
        } else {
          const port = getOrCreateNativePort();
          if (port) port.postMessage({ action: 'cancel' });
          setTimeout(processNextQueuedNativeDownload, 200);
        }
        updateDownloadHistory({ id: targetId, state: 'canceled', error: 'Người dùng đã hủy' });
      }
      sendResponse({ success: true });
      return false;
    }

    case 'getDownloadStatus': {
      const activeList = Array.from(activeDownloads.values());
      sendResponse({
        success: true,
        activeDownloads: activeList,
        activeTaskIds: activeList.map(t => t.id)
      });
      return false;
    }

    case 'browseFolder': {
      const port = getOrCreateNativePort();
      if (port) {
        let responded = false;
        const handler = (msg) => {
          if (msg && msg.action === 'browseFolderResult') {
            port.onMessage.removeListener(handler);
            if (!responded) {
              responded = true;
              if (msg.path) {
                chrome.storage.local.set({ customDownloadDir: msg.path });
              }
              try { sendResponse({ path: msg.path }); } catch (e) {}
            }
          }
        };
        port.onMessage.addListener(handler);
        port.postMessage({ action: 'browseFolder' });
        // Guarantee sendResponse is always called before channel closes
        setTimeout(() => {
          if (!responded) {
            responded = true;
            port.onMessage.removeListener(handler);
            try { sendResponse({ path: '' }); } catch (e) {}
          }
        }, 15000);
        return true;
      } else {
        sendResponse({ error: 'Native helper not available' });
        return false;
      }
    }

    case 'openFile': {
      const port = getOrCreateNativePort();
      if (port) {
        let responded = false;
        const handler = (msg) => {
          if (!msg || msg.action !== 'openFileResult' || responded) return;
          responded = true;
          port.onMessage.removeListener(handler);
          sendResponse({ success: Boolean(msg.success), error: msg.error || '' });
        };
        port.onMessage.addListener(handler);
        port.postMessage({ action: 'openFile', filename: req.filename, path: req.path });
        setTimeout(() => {
          if (!responded) {
            responded = true;
            port.onMessage.removeListener(handler);
            sendResponse({ success: false, error: 'Không nhận được phản hồi khi mở tệp' });
          }
        }, 10000);
        return true;
      } else {
        sendResponse({ success: false });
      }
      return false;
    }

    case 'showInFolder': {
      if (req.chromeId && chrome.downloads && chrome.downloads.show) {
        try {
          chrome.downloads.show(req.chromeId);
          sendResponse({ success: true });
          return false;
        } catch (_) {}
      }
      const port = getOrCreateNativePort();
      if (port) {
        port.postMessage({ action: 'showInFolder', path: req.path });
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false });
      }
      return false;
    }

    case 'clearHistory': {
      chrome.storage.local.set({ downloadHistory: [] });
      sendResponse({ success: true });
      return false;
    }

    case 'removeDownload': {
      chrome.storage.local.get(['downloadHistory'], (res) => {
        const history = Array.isArray(res.downloadHistory) ? res.downloadHistory : [];
        const updated = history.filter(item => item.id !== req.id);
        chrome.storage.local.set({ downloadHistory: updated });
      });
      sendResponse({ success: true });
      return false;
    }

    case 'downloadNative': {
      const opts = {
        url: req.url,
        videoUrl: req.videoUrl,
        audioUrl: req.audioUrl,
        filename: req.title ? `${req.title}.mp4` : 'video.mp4',
        referrer: req.referer || req.pageUrl,
        pageUrl: req.pageUrl,
        taskId: req.taskId,
        outputDir: req.outputDir || configuredDownloadDir || '',
        quality: req.quality || 'best',
        soundOnly: Boolean(req.soundOnly || req.quality === 'audio')
      };
      // Match the original Cốc Cốc extension for session-protected streams.
      // Its browser downloader keeps the authenticated session attached.
      const started = isSessionProtectedStream(opts)
        ? startCocCocSessionDownload(opts)
        : startNativeDownload(opts);
      if (!started) startBrowserDownload(opts);
      sendResponse({ success: true });
      return false;
    }

    case 'openSourcePage': {
      if (typeof req.url === 'string' && /^https?:\/\//i.test(req.url)) {
        chrome.tabs.create({ url: req.url });
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false, error: 'Không có trang nguồn hợp lệ để lấy lại luồng' });
      }
      return false;
    }

    case 'ping': {
      sendResponse({ status: 'ok', version: '2.4.65' });
      return false;
    }

    default:
      return false;
  }
});

// Listener for external web pages (e.g. YouTube externally_connectable)
if (chrome.runtime.onMessageExternal) {
  chrome.runtime.onMessageExternal.addListener((req, sender, sendResponse) => {
    if (!req) return false;
    if (req.action === 'ping' || req.type === 'ping') {
      sendResponse({ status: 'ok', version: '2.4.65' });
      return false;
    }
    sendResponse({ success: true });
    return false;
  });
}

// ==========================================
// 4. Download API Polyfills & Interception
// ==========================================

// Polyfill chrome.downloads.combineStreams (YouTube 1080p+, Facebook DASH)
chrome.downloads.combineStreams = function(options, callback) {
  console.log('[Savior] combineStreams invoked:', options);
  if (options && !options.referrer && currentActiveTabUrl) {
    options.referrer = currentActiveTabUrl;
  }
  if (options && !options.pageUrl && currentActiveTabUrl) {
    options.pageUrl = currentActiveTabUrl;
  }
  const ok = startNativeDownload(options, callback);
  if (!ok) {
    startBrowserDownload(options, callback);
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
chrome.downloads.download = function(options, callback) {
  console.log('[Savior] chrome.downloads.download invoked:', options);
  if (options && !options.referrer && currentActiveTabUrl) {
    options.referrer = currentActiveTabUrl;
  }
  if (options && !options.pageUrl && currentActiveTabUrl) {
    options.pageUrl = currentActiveTabUrl;
  }

  // Ignore trick or duplicate download calls if already active
  const reqUrl = options ? (options.videoUrl || options.url) : '';
  if (reqUrl) {
    for (const [id, t] of activeDownloads.entries()) {
      if (t.url === reqUrl || (t.params && (t.params.videoUrl === reqUrl || t.params.url === reqUrl))) {
        console.log('[Savior] Duplicate/trick download call ignored for active task:', id);
        if (typeof callback === 'function') callback(id);
        return;
      }
    }
  }

  // Do not replace Cốc Cốc's session-aware downloader for TikTok/Douyin.
  // It is the path used by the original extension for private/login-required
  // videos and preserves the browser's authenticated context.
  if (isSessionProtectedStream(options)) {
    return startCocCocSessionDownload(options, callback);
  }

  // 1. Prefer Native Helper whenever available so all downloads save directly to disk
  // without any Chrome Save As prompt, with real-time speed, progress, and automatic audio track muxing
  if (nativeHelperAvailable) {
    const started = startNativeDownload(options, callback);
    if (started) return;
  }

  // 2. Fallback: Standard Chrome download engine
  startBrowserDownload(options, callback);
};

// Polyfill chrome.downloads.play
chrome.downloads.play = function(downloadId) {
  console.log('[Savior] chrome.downloads.play invoked for id:', downloadId);
  const task = activeDownloads.get(downloadId);
  const port = getOrCreateNativePort();
  if (port) {
    if (task && (task.filename || task.outputPath || task.outputFile)) {
      port.postMessage({ action: 'openFile', filename: task.filename || task.outputPath || task.outputFile });
    } else {
      chrome.storage.local.get(['downloadHistory'], (res) => {
        const hist = res.downloadHistory || [];
        const found = hist.find(h => h.id === downloadId || h.chromeId === downloadId);
        if (found && (found.outputFile || found.outputPath || found.filename)) {
          port.postMessage({ action: 'openFile', path: found.outputFile || found.outputPath || found.filename });
        } else {
          chrome.downloads.search({ id: downloadId }, (results) => {
            if (results && results[0] && results[0].filename) {
              port.postMessage({ action: 'openFile', path: results[0].filename });
            }
          });
        }
      });
    }
  } else {
    chrome.downloads.open(downloadId);
  }
};

// Intercept cancel
chrome.downloads.cancel = function(downloadId, callback) {
  if (activeDownloads.has(downloadId)) {
    const t = activeDownloads.get(downloadId);
    activeDownloads.delete(downloadId);
    if (t && t.isBrowserDownload) {
      return _origCancel(downloadId, callback);
    }
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
// 5. Load Core Background Script
// ==========================================
importScripts("background.js");
