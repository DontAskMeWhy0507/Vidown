/**
 * Vidown Service Worker (Manifest V3)
 * 
 * 100% Clean, unminified, modular background controller for Vidown.
 * Manages media detection, stream relay, native helper communication,
 * and download lifecycle tracking.
 */

// Load clean core modules into worker scope
try {
  importScripts(
    'core/media_types.js',
    'core/media_registry.js',
    'core/magic_probe.js',
    'core/manifest_parse.js',
    'core/network_observer.js',
    'core/extractors/instagram.js',
    'core/extractors/youtube.js',
    'core/extractors/douyin.js',
    'core/extractors/twitter.js',
    'core/extractors/linkedin.js',
    'core/extractors/index.js'
  );
} catch (e) {
  console.error('[Vidown ServiceWorker] Failed to importScripts:', e);
}

const MediaTypes = self.UniversalMediaTypes;
const MediaRegistry = self.UniversalMediaRegistry;
const ManifestParser = self.UniversalManifestParser;
const MagicProbe = self.UniversalMagicProbe;
const NetworkObserver = self.UniversalNetworkObserver;

// ==========================================
// 1. DeclarativeNetRequest Anti-403 Protection Rules
// ==========================================
function setupAnti403Rules() {
  if (!chrome.declarativeNetRequest || !chrome.declarativeNetRequest.updateSessionRules) return;
  try {
    chrome.declarativeNetRequest.updateSessionRules({
      removeRuleIds: [1001, 1002, 1003, 1004, 1005, 1006],
      addRules: [
        {
          id: 1001,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.facebook.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.facebook.com' }
            ]
          },
          condition: {
            urlFilter: '*fbcdn.net/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1002,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.instagram.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.instagram.com' }
            ]
          },
          condition: {
            urlFilter: '*cdninstagram.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1004,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*tiktokcdn.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1005,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*byteoversea.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1006,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*ibytedtos.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        }
      ]
    }).catch(() => {});
  } catch (_) {}
}

setupAnti403Rules();
if (typeof chrome !== 'undefined' && chrome.runtime) {
  if (chrome.runtime.onStartup) chrome.runtime.onStartup.addListener(setupAnti403Rules);
  if (chrome.runtime.onInstalled) chrome.runtime.onInstalled.addListener(setupAnti403Rules);
}

// ==========================================
// 2. Browser API Polyfills & Stubs for Clean Backwards Compatibility
// ==========================================
if (!chrome.coccocPrivate) {
  chrome.coccocPrivate = {
    getFeatureState(name, cb) { if (typeof cb === 'function') cb({ enabled: false }); },
    actOnFeature(name, action) {}
  };
}
if (!chrome.coccoc) {
  chrome.coccoc = {
    onGetTranscript: { addListener() {}, removeListener() {}, hasListener() { return false; } },
    sendRequest(req, cb) { if (cb) cb({ success: false }); },
    sendYtVideoTranscript(id, text) {},
    setAsDefaultBrowser() {},
    shouldBlockAdsOnYoutubeBySavior(url, cb) { if (cb) cb(false); }
  };
}
if (!chrome.eyeoFilteringPrivate) {
  chrome.eyeoFilteringPrivate = {
    addTabBlockedCount() {},
    getAllowedDomains(type, cb) { if (typeof cb === 'function') cb([]); },
    getCustomFilters(type, cb) { if (typeof cb === 'function') cb(''); },
    onCoccocAllowedDomainsChanged: { addListener() {}, removeListener() {}, hasListener() { return false; } }
  };
}
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
if (!chrome.pageAction) {
  chrome.pageAction = {
    show(tabId) { if (chrome.action) chrome.action.enable(tabId); },
    hide(tabId) { if (chrome.action) chrome.action.disable(tabId); }
  };
}

// ==========================================
// 3. State Management & Native Port Connection
// ==========================================
let nativePort = null;
let nativePortActive = false;
let fakeIdCounter = 1000;
const activeDownloads = new Map(); // id -> Task
const purgedTaskIds = new Set();

function uint8ToBase64(u8) {
  let binary = '';
  const STEP = 0x8000;
  for (let i = 0; i < u8.length; i += STEP) {
    binary += String.fromCharCode.apply(null, u8.subarray(i, i + STEP));
  }
  return btoa(binary);
}

function formatRelayBytes(bytes) {
  const b = Number(bytes) || 0;
  if (b >= 1024 * 1024 * 1024) return (b / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
  if (b >= 1024 * 1024) return (b / (1024 * 1024)).toFixed(1) + ' MB';
  if (b >= 1024) return (b / 1024).toFixed(1) + ' KB';
  return b + ' B';
}

function hasActiveTaskForUrl(url) {
  if (!url) return false;
  for (const t of activeDownloads.values()) {
    if (t.url === url || t.videoUrl === url) return true;
  }
  return false;
}

function pruneDownloadHistoryEntry(entryId) {
  if (entryId === undefined || entryId === null) return;
  const strId = String(entryId);
  try {
    chrome.storage.local.get(['downloadHistory'], (result) => {
      const history = Array.isArray(result && result.downloadHistory) ? result.downloadHistory : [];
      const next = history.filter(h => String(h.id) !== strId);
      if (next.length !== history.length) {
        purgedTaskIds.add(strId);
        chrome.storage.local.set({ downloadHistory: next }, () => {});
      }
    });
  } catch (_) {}
}

function cancelSiblingsByUrl(urls) {
  if (!urls || urls.size === 0) return;
  let nativeHit = false;
  for (const [k, t] of Array.from(activeDownloads.entries())) {
    if (!t) continue;
    const shares = [t.url, t.videoUrl, t.audioUrl].some(u => urls.has(String(u || '')));
    if (!shares) continue;
    activeDownloads.delete(k);
    if (t.abortController) {
      try { t.abortController.abort(); } catch (_) {}
    }
    if (t.isBrowserDownload) {
      try { chrome.downloads.cancel(k); } catch (_) {}
    } else {
      nativeHit = true;
    }
  }
  if (nativeHit) {
    const port = getOrCreateNativePort();
    if (port) port.postMessage({ action: 'cancel' });
  }
  if (activeDownloads.size === 0) setActionBadge('');
}

function isSessionProtectedStream(opts) {
  if (!opts) return false;
  const u = String(opts.url || opts.videoUrl || '');
  return (
    u.includes('tiktokcdn.com') ||
    u.includes('byteoversea.com') ||
    u.includes('ibytedtos.com') ||
    u.includes('fbcdn.net') ||
    u.includes('cdninstagram.com')
  );
}

function setActionBadge(text, color = '#2563EB') {
  if (typeof chrome.action === 'undefined') return;
  try {
    chrome.action.setBadgeText({ text: String(text || '') });
    if (color) chrome.action.setBadgeBackgroundColor({ color: color });
  } catch (_) {}
}

async function updateDownloadHistory(entry) {
  if (!entry || !entry.id) return;
  try {
    const data = await chrome.storage.local.get(['downloadHistory']);
    let history = Array.isArray(data.downloadHistory) ? data.downloadHistory : [];
    const idx = history.findIndex(h => String(h.id) === String(entry.id));
    if (idx !== -1) {
      history[idx] = { ...history[idx], ...entry };
    } else {
      history.unshift({ ...entry });
    }
    if (history.length > 200) history = history.slice(0, 200);
    await chrome.storage.local.set({ downloadHistory: history });
  } catch (_) {}
}

function broadcastTaskEvent(msg) {
  chrome.runtime.sendMessage(msg).catch(() => {});
}

function connectNativeHost() {
  try {
    nativePort = chrome.runtime.connectNative('com.savior.helper');
    nativePortActive = true;

    nativePort.onMessage.addListener(handleNativeMessage);

    nativePort.onDisconnect.addListener(() => {
      nativePortActive = false;
      nativePort = null;
      const err = chrome.runtime.lastError ? chrome.runtime.lastError.message : 'Disconnected';
      console.log('[Vidown ServiceWorker] Native port disconnected:', err);
    });
  } catch (err) {
    console.warn('[Vidown ServiceWorker] Native host connection unavailable:', err);
    nativePortActive = false;
    nativePort = null;
  }
}

function getOrCreateNativePort() {
  if (!nativePortActive || !nativePort) {
    connectNativeHost();
  }
  return nativePort;
}

function sendToNativeHost(message) {
  const port = getOrCreateNativePort();
  if (port) {
    try {
      port.postMessage(message);
      return true;
    } catch (e) {
      console.warn('[Vidown ServiceWorker] Failed to send to native host:', e);
      return false;
    }
  }
  return false;
}

function handleNativeMessage(msg) {
  if (!msg || !msg.action) return;

  const taskId = msg.taskId !== undefined ? msg.taskId : msg.downloadId;

  if (msg.action === 'progress') {
    if (taskId && activeDownloads.has(taskId)) {
      const task = activeDownloads.get(taskId);
      task.percent = msg.percent || task.percent;
      task.speed = msg.speed || task.speed;
      task.size = msg.size || task.size;
    }
    if (msg.percent && msg.percent.includes('%')) {
      setActionBadge(msg.percent, '#10b981');
    }
    updateDownloadHistory({
      id: taskId,
      percent: msg.percent || '',
      speed: msg.speed || '',
      size: msg.size || ''
    });
    broadcastTaskEvent({ action: 'nativeProgress', taskId: taskId, ...msg });
  } else if (msg.action === 'complete') {
    if (taskId) activeDownloads.delete(taskId);
    updateDownloadHistory({
      id: taskId,
      state: 'completed',
      percent: '100%',
      speed: 'Hoàn thành',
      endTime: Date.now(),
      outputFile: msg.outputFile
    });
    setActionBadge('✓', '#10b981');
    setTimeout(() => { if (activeDownloads.size === 0) setActionBadge(''); }, 3000);
    broadcastTaskEvent({ action: 'nativeComplete', taskId: taskId, ...msg });
  } else if (msg.action === 'cancelled') {
    if (taskId) activeDownloads.delete(taskId);
    updateDownloadHistory({
      id: taskId,
      state: 'canceled',
      speed: 'Đã hủy'
    });
    if (activeDownloads.size === 0) setActionBadge('');
    broadcastTaskEvent({ action: 'nativeCanceled', taskId: taskId, ...msg });
  } else if (msg.action === 'error') {
    if (taskId) activeDownloads.delete(taskId);
    updateDownloadHistory({
      id: taskId,
      state: 'error',
      error: msg.error || 'Lỗi không xác định',
      speed: ''
    });
    setActionBadge('!', '#ef4444');
    broadcastTaskEvent({ action: 'nativeError', taskId: taskId, ...msg });
  }

  // General event broadcast
  chrome.runtime.sendMessage({
    type: 'VIDOWN_NATIVE_EVENT',
    ...msg
  }).catch(() => {});
}

// ==========================================
// 4. Stream Relay Engine (Chrome Fetch -> Native Write)
// ==========================================
function startStreamRelayDownload(downloadParams, callback) {
  const port = getOrCreateNativePort();
  if (!port) return false;

  const targetUrl = downloadParams.videoUrl || downloadParams.url || '';
  if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) return false;

  // Playlists are excluded from relay (FFmpeg handles playlists)
  if (/\.m3u8(\?|$)|\.mpd(\?|$)|format=m3u8|type=m3u8/i.test(targetUrl)) return false;

  if (downloadParams.taskId === undefined && hasActiveTaskForUrl(targetUrl)) return false;

  const fakeId = downloadParams.taskId || ++fakeIdCounter;
  const options = downloadParams;
  const opts = downloadParams;
  opts.taskId = fakeId;
  if (options.taskId !== undefined && String(options.taskId) !== String(fakeId)) {
    pruneDownloadHistoryEntry(options.taskId);
  }
  const safeFilename = (downloadParams.filename || (downloadParams.title ? `${downloadParams.title}.mp4` : 'video.mp4')).replace(/[<>:"/\\|?*]/g, '_');
  const mediaType = (downloadParams.convertToMp3 || downloadParams.soundOnly) ? 'audio' : 'video';
  const resolvedPageUrl = downloadParams.pageUrl || downloadParams.referer || '';

  const task = {
    id: fakeId,
    title: safeFilename.replace(/\.[^.]+$/, ''),
    filename: safeFilename,
    url: targetUrl,
    videoUrl: targetUrl,
    audioUrl: downloadParams.audioUrl || '',
    referer: downloadParams.referer || resolvedPageUrl,
    pageUrl: resolvedPageUrl,
    outputDir: downloadParams.outputDir || '',
    quality: downloadParams.quality || 'best',
    soundOnly: false,
    type: mediaType,
    params: downloadParams,
    state: 'downloading',
    percent: '1%',
    speed: 'Đang kết nối qua Chrome...',
    size: '0 B',
    startTime: Date.now(),
    complete: false,
    isStreamRelay: true,
    _inFlight: 0
  };

  activeDownloads.set(fakeId, task);
  updateDownloadHistory({
    id: fakeId,
    title: task.title,
    filename: safeFilename,
    url: targetUrl,
    videoUrl: targetUrl,
    audioUrl: task.audioUrl,
    referer: task.referer,
    pageUrl: resolvedPageUrl,
    outputDir: task.outputDir,
    quality: task.quality,
    soundOnly: false,
    type: mediaType,
    state: 'downloading',
    percent: '1%',
    speed: task.speed,
    size: '0 B',
    startTime: task.startTime
  });
  setActionBadge('1%', '#10b981');

  const abortCtrl = new AbortController();
  task.abortController = abortCtrl;
  let lastStorageUpdate = 0;

  const messageHandler = (msg) => {
    if (!msg) return;
    if (msg.taskId !== undefined && String(msg.taskId) !== String(fakeId)) return;

    if (msg.action === 'streamAck') {
      task._inFlight = Math.max(0, task._inFlight - 1);
      if (task._windowResolve) {
        try { task._windowResolve(); } catch (_) {}
      }
      return;
    }
  };

  port.onMessage.addListener(messageHandler);

  port.postMessage({
    action: 'streamDownload',
    taskId: fakeId,
    url: targetUrl,
    filename: safeFilename,
    title: task.title,
    referer: task.referer,
    pageUrl: resolvedPageUrl,
    outputDir: task.outputDir
  });

  (async () => {
    const BATCH = 512 * 1024;
    const WINDOW = 6;
    const WORKERS = 6;
    const MIN_SPLIT_SIZE = 3 * 1024 * 1024;
    let seq = 0;
    let bytesRelayed = 0;
    let total = 0;
    let lastProgressSent = 0;

    const sendProgress = () => {
      const now = Date.now();
      if (now - lastProgressSent < 250) return;
      lastProgressSent = now;
      const pct = total > 0 ? Math.min(99, Math.floor((bytesRelayed / total) * 100)) + '%' : '';
      updateDownloadHistory({
        id: fakeId,
        percent: pct,
        speed: 'Đang tải qua Chrome...',
        size: total > 0 ? `${formatRelayBytes(bytesRelayed)} / ${formatRelayBytes(total)}` : formatRelayBytes(bytesRelayed)
      });
    };

    const awaitWindowSlot = async () => {
      while (task._inFlight >= WINDOW && !abortCtrl.signal.aborted) {
        await new Promise(res => {
          task._windowResolve = res;
          setTimeout(res, 250);
        });
        task._windowResolve = null;
      }
    };

    const pumpBody = async (body, fileOffset) => {
      const reader = body.getReader();
      let batch = new Uint8Array(BATCH);
      let batchLen = 0;
      let pos = fileOffset;

      const flush = () => {
        if (batchLen === 0) return;
        seq++;
        task._inFlight++;
        port.postMessage({
          action: 'streamChunk',
          taskId: fakeId,
          seq,
          offset: pos,
          data: uint8ToBase64(batch.subarray(0, batchLen)),
          total
        });
        bytesRelayed += batchLen;
        pos += batchLen;
        batchLen = 0;
      };

      for (;;) {
        if (abortCtrl.signal.aborted) return;
        if (task._inFlight >= WINDOW) {
          await awaitWindowSlot();
          continue;
        }
        const { done, value } = await reader.read();
        if (done) {
          flush();
          return;
        }
        if (!value || !value.length) continue;
        let o = 0;
        while (o < value.length) {
          const copy = Math.min(BATCH - batchLen, value.length - o);
          batch.set(value.subarray(o, o + copy), batchLen);
          batchLen += copy;
          o += copy;
          if (batchLen >= BATCH) flush();
        }
        sendProgress();
      }
    };

    try {
      const headers = {};
      if (task.referer) headers['Referer'] = task.referer;

      let rangeCapable = false;
      let probeOk = false;
      const probe = await fetch(targetUrl, {
        credentials: 'include',
        headers: { ...headers, Range: 'bytes=0-0' },
        signal: abortCtrl.signal
      });

      if (probe.ok) {
        const ptype = String(probe.headers.get('content-type') || '').toLowerCase();
        if (ptype.includes('text/html')) throw new Error('STREAM_HTML_RESPONSE');
        const contentRange = probe.headers.get('content-range');
        if (contentRange && /\/(\d+)$/.test(contentRange)) {
          total = parseInt(contentRange.match(/\/(\d+)$/)[1], 10) || 0;
        }
        rangeCapable = probe.status === 206 && total > 0;
        probeOk = true;
      }
      try { if (probe.body) await probe.body.cancel(); } catch (_) {}
      if (!probeOk) throw new Error('HTTP ' + probe.status);

      if (rangeCapable && total >= MIN_SPLIT_SIZE) {
        // Multi-threaded 6 Range workers
        const slice = Math.ceil(total / WORKERS);
        const jobs = [];
        for (let w = 0; w < WORKERS; w++) {
          const start = w * slice;
          if (start >= total) break;
          const end = Math.min(total - 1, start + slice - 1);
          jobs.push((async () => {
            const r = await fetch(targetUrl, {
              credentials: 'include',
              headers: { ...headers, Range: `bytes=${start}-${end}` },
              signal: abortCtrl.signal
            });
            if (!r.ok && r.status !== 206) throw new Error('HTTP ' + r.status);
            await pumpBody(r.body, start);
          })());
        }
        await Promise.all(jobs);
        port.postMessage({ action: 'streamEnd', taskId: fakeId, total });
        return;
      }

      // Single stream fallback
      const resp = await fetch(targetUrl, { credentials: 'include', headers, signal: abortCtrl.signal });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const ctype = String(resp.headers.get('content-type') || '').toLowerCase();
      if (ctype.includes('text/html')) throw new Error('STREAM_HTML_RESPONSE');
      total = Number(resp.headers.get('content-length')) || total;
      await pumpBody(resp.body, 0);
      port.postMessage({ action: 'streamEnd', taskId: fakeId, total });
    } catch (err) {
      if (abortCtrl.signal.aborted) return;
      try { port.postMessage({ action: 'streamAbort', taskId: fakeId }); } catch (_) {}
      port.onMessage.removeListener(messageHandler);
      if (activeDownloads.has(fakeId)) {
        activeDownloads.delete(fakeId);
        updateDownloadHistory({ id: fakeId, state: 'error', error: String(err.message || err), speed: '' });
        setActionBadge('!', '#ef4444');
      }
    }
  })();

  if (typeof callback === 'function') callback(fakeId);
  return true;
}

// ==========================================
// 5. Monitor Browser Downloads
// ==========================================
if (typeof chrome.downloads !== 'undefined' && chrome.downloads.onChanged) {
  chrome.downloads.onChanged.addListener((delta) => {
    if (!delta || !delta.id) return;
    const task = activeDownloads.get(delta.id) || activeDownloads.get(String(delta.id));
    if (!task) return;

    if (delta.state) {
      if (delta.state.current === 'complete') {
        task.state = 'completed';
        task.percent = '100%';
        activeDownloads.delete(delta.id);
        updateDownloadHistory({ id: delta.id, state: 'completed', percent: '100%', speed: 'Hoàn thành' });
        if (activeDownloads.size === 0) setActionBadge('');
      } else if (delta.state.current === 'interrupted') {
        task.state = 'error';
        activeDownloads.delete(delta.id);
        updateDownloadHistory({ id: delta.id, state: 'error', error: delta.error?.current || 'Interrupted' });
        if (activeDownloads.size === 0) setActionBadge('');
      }
    }
  });
}

// ==========================================
// 6. Tab & Badge Listeners
// ==========================================
function updateTabBadge(tabId) {
  if (!tabId || typeof chrome.action === 'undefined') return;
  try {
    const list = MediaRegistry ? MediaRegistry.getTabMedia(tabId) : [];
    const count = list.length;
    chrome.action.setBadgeText({
      text: count > 0 ? String(count) : '',
      tabId: tabId
    });
    chrome.action.setBadgeBackgroundColor({
      color: '#2563EB',
      tabId: tabId
    });
  } catch (_) {}
}

if (typeof chrome.tabs !== 'undefined') {
  chrome.tabs.onActivated.addListener((activeInfo) => {
    updateTabBadge(activeInfo.tabId);
  });

  chrome.tabs.onRemoved.addListener((tabId) => {
    if (MediaRegistry) {
      MediaRegistry.clearTab(tabId);
    }
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'loading' && changeInfo.url) {
      if (MediaRegistry) {
        MediaRegistry.clearTab(tabId);
      }
      updateTabBadge(tabId);
    }
  });
}

// ==========================================
// 7. IPC Dispatcher: Extension Communication Router
// ==========================================
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!request) return false;
  const action = request.action || request.type;
  if (!action) return false;

  const senderTabId = sender && sender.tab ? sender.tab.id : null;

  switch (action) {
    case 'getMediaForCurrentTab': {
      const targetTabId = request.tabId || senderTabId;
      if (targetTabId && MediaRegistry) {
        const mediaList = MediaRegistry.getTabMedia(targetTabId);
        sendResponse({ success: true, media: mediaList });
      } else {
        sendResponse({ success: true, media: [] });
      }
      return true;
    }

    case 'registerMediaItem': {
      const tabId = request.tabId || senderTabId;
      if (tabId && MediaRegistry && request.media) {
        const record = MediaRegistry.registerMedia(tabId, request.media);
        updateTabBadge(tabId);
        sendResponse({ success: true, record });
      } else {
        sendResponse({ success: false });
      }
      return true;
    }

    case 'openDownloadsPage':
    case 'openDownloadManager': {
      if (typeof chrome.tabs !== 'undefined' && chrome.tabs.create) {
        chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') });
      }
      sendResponse({ success: true });
      return true;
    }

    case 'getDownloadStatus': {
      sendResponse({ success: true, downloads: Array.from(activeDownloads.values()) });
      return true;
    }

    case 'popupOpened': {
      sendResponse({ success: true });
      return true;
    }

    case 'download':
    case 'downloadNative':
    case 'startDownload': {
      const url = request.url || request.videoUrl || '';
      const isPlaylist = /\.m3u8(\?|$)|\.mpd(\?|$)/i.test(url);
      const taskId = request.taskId || ('task_' + Date.now());

      const downloadPayload = {
        action: 'download',
        taskId: taskId,
        url: url,
        videoUrl: request.videoUrl || url,
        audioUrl: request.audioUrl,
        title: request.title || 'video',
        quality: request.quality || '1080p',
        referer: request.referer || request.pageUrl || '',
        pageUrl: request.pageUrl || '',
        cookie: request.cookie || ''
      };

      // 1. Try Native Host (FFmpeg / yt-dlp)
      const opts = downloadPayload;
      const req = request;
      const nativeSent = sendToNativeHost(downloadPayload);
      if (nativeSent) {
        activeDownloads.set(taskId, {
          id: taskId,
          title: downloadPayload.title,
          filename: `${downloadPayload.title}.mp4`,
          url: url,
          state: 'downloading',
          percent: '1%',
          speed: 'Đang kết nối Native Helper...',
          startTime: Date.now()
        });
        sendResponse({ success: true, native: true, taskId: taskId });
        return true;
      }

      // 2. Fallback chain: native → relay → browser download (no retry loop)
      if (isSessionProtectedStream(opts)) {
        const relayStarted = !opts._relayFailed && startStreamRelayDownload(opts);
        if (relayStarted) {
          opts._relayFailed = true;
          sendResponse({ success: true, relay: true, taskId: opts.taskId });
          return true;
        }
      } else if (!opts._relayFailed && startStreamRelayDownload(opts)) {
        opts._relayFailed = true;
        sendResponse({ success: true, relay: true, taskId: opts.taskId });
        return true;
      } else if (!req._relayFailed && startStreamRelayDownload(req)) {
        req._relayFailed = true;
        sendResponse({ success: true, relay: true, taskId: req.taskId });
        return true;
      }

      // 3. Fallback to Browser Download Engine (chrome.downloads)
      // STRICT SAFETY: Never save an HLS/DASH playlist (.m3u8/.mpd) as an .mp4 file!
      if (isPlaylist) {
        sendResponse({
          success: false,
          error: 'Luồng video HLS (.m3u8) cần Vidown Native Helper (FFmpeg) để xử lý. Vui lòng cài đặt helper trong thư mục native/install.bat'
        });
        return true;
      }

      if (typeof chrome.downloads !== 'undefined' && url) {
        chrome.downloads.download({
          url: url,
          filename: `${request.title || 'video'}.mp4`,
          saveAs: false
        }, (chromeDownloadId) => {
          if (chrome.runtime.lastError || !chromeDownloadId) {
            sendResponse({ success: false, error: chrome.runtime.lastError?.message || 'Download failed' });
          } else {
            activeDownloads.set(chromeDownloadId, {
              id: chromeDownloadId,
              title: request.title || 'video',
              filename: `${request.title || 'video'}.mp4`,
              url: url,
              state: 'downloading',
              percent: '1%',
              speed: 'Trình duyệt đang tải...',
              isBrowserDownload: true,
              startTime: Date.now()
            });
            sendResponse({ success: true, fallback: true, downloadId: chromeDownloadId });
          }
        });
        return true;
      }

      sendResponse({ success: false, error: 'Không thể khởi động tiến trình tải' });
      return true;
    }

    case 'cancelDownload':
    case 'removeDownload': {
      const id = request.downloadId || request.taskId;
      if (id) {
        const task = activeDownloads.get(id);
        const siblingUrls = new Set();
        if (task) {
          if (task.url) siblingUrls.add(task.url);
          if (task.videoUrl) siblingUrls.add(task.videoUrl);
          if (task.audioUrl) siblingUrls.add(task.audioUrl);
          if (task.abortController) {
            try { task.abortController.abort(); } catch (_) {}
          }
          if (task.isStreamRelay && nativePort) {
            try { nativePort.postMessage({ action: 'streamAbort', taskId: id }); } catch (_) {}
          }
          activeDownloads.delete(id);
        }
        cancelSiblingsByUrl(siblingUrls);
        for (const [k, t] of Array.from(activeDownloads.entries())) {
          if (t && t.abortController) {
            try { t.abortController.abort(); } catch (_) {}
          }
        }
        sendToNativeHost({ action: 'cancel', downloadId: id, taskId: id });
        updateDownloadHistory({ id: id, state: 'canceled', speed: 'Đã hủy' });
        broadcastTaskEvent({ action: 'nativeCanceled', taskId: id });
        if (activeDownloads.size === 0) setActionBadge('');
      }
      sendResponse({ success: true });
      return true;
    }

    case 'openFile': {
      sendToNativeHost({ action: 'openFile', filePath: request.filePath });
      sendResponse({ success: true });
      return true;
    }

    case 'showInFolder':
    case 'openFolder': {
      sendToNativeHost({ action: 'openFolder', filePath: request.filePath || request.targetPath || '' });
      sendResponse({ success: true });
      return true;
    }

    case 'openDownloadsFolder': {
      sendToNativeHost({ action: 'openFolder', filePath: '' });
      sendResponse({ success: true });
      return true;
    }

    case 'browseFolder': {
      sendToNativeHost({ action: 'browseFolder' });
      sendResponse({ success: true });
      return true;
    }

    case 'clearHistory': {
      activeDownloads.clear();
      setActionBadge('');
      sendResponse({ success: true });
      return true;
    }

    case 'openSourcePage': {
      if (request.url && typeof chrome.tabs !== 'undefined' && chrome.tabs.create) {
        chrome.tabs.create({ url: request.url });
      }
      sendResponse({ success: true });
      return true;
    }

    case 'ping': {
      sendResponse({ status: 'ok', version: '2.4.66', engine: 'Vidown Clean Core' });
      return true;
    }

    default:
      return false;
  }
});

// ==========================================
// 8. Network Observer on WebRequest
// ==========================================
if (typeof chrome.webRequest !== 'undefined' && NetworkObserver && typeof NetworkObserver.handleHeadersReceived === 'function') {
  try {
    chrome.webRequest.onHeadersReceived.addListener(
      (details) => {
        if (!details || details.tabId < 0) return;
        try {
          const res = NetworkObserver.handleHeadersReceived(details);
          if (res && res.handled && res.record) {
            updateTabBadge(details.tabId);
          }
        } catch (_) {}
      },
      { urls: ['<all_urls>'] },
      ['responseHeaders', 'extraHeaders']
    );
  } catch (err) {
    try {
      chrome.webRequest.onHeadersReceived.addListener(
        (details) => {
          if (!details || details.tabId < 0) return;
          try {
            const res = NetworkObserver.handleHeadersReceived(details);
            if (res && res.handled && res.record) {
              updateTabBadge(details.tabId);
            }
          } catch (_) {}
        },
        { urls: ['<all_urls>'] },
        ['responseHeaders']
      );
    } catch (_) {}
  }
}

// Initial connection attempt to native helper
connectNativeHost();
