/**
 * Savior - Chrome Service Worker Shim & Native Messaging Bridge
 * Polyfills Cốc Cốc browser APIs, routes downloads through FFmpeg Native Messaging Host,
 * and manages real-time download history for the Downloads Manager.
 */

// Note: the experimental Universal Media Detection Core (core/) is intentionally
// NOT loaded in this build. It shipped unwired (no UI consumers, registry never
// hydrated, runtime hook never injected) and its webRequest probe added
// cross-origin traffic on every response. See docs/superpowers/plans/2026-10-18.

// ==========================================
// 0.0 Cut all Cốc Cốc server traffic (VidManager build)
// ==========================================
// The inherited Cốc Cốc bundle phones home to coccoc.com for telemetry
// (coccoc.com/log), A/B tests, remote widget rules (browser.coccoc.com) and a
// YouTube proxy (dev-ytdl.coccoc.com). This is a VidManager release: nothing
// leaves the machine towards coccoc.com. Patched BEFORE importScripts so every
// bundle fetch goes through here; callers get a benign empty response.
try {
  const _coccocUrl = /^https?:\/\/([a-z0-9-]+\.)*coccoc\.com\//i;
  const _origFetch = self.fetch.bind(self);
  self.fetch = function (input, init) {
    try {
      const url = typeof input === 'string' ? input : (input && input.url) || String(input);
      if (_coccocUrl.test(url)) {
        return Promise.resolve(new Response(JSON.stringify({ success: false }), {
          status: 200,
          statusText: 'OK',
          headers: { 'Content-Type': 'application/json' }
        }));
      }
    } catch (_) {}
    return _origFetch(input, init);
  };
} catch (_) {}

// ==========================================
// 0.2 Legacy "go to settings" routes to the Download Manager
// ==========================================
// The standalone options page was merged into the manager's settings sidebar;
// the inherited bundle still calls chrome.runtime.openOptionsPage() (OPEN_SETTINGS,
// case 51). Without an options page that would only produce lastError noise —
// route it to the manager where the settings now live.
try {
  if (chrome.runtime && typeof chrome.runtime.openOptionsPage === 'function') {
    chrome.runtime.openOptionsPage = function (callback) {
      openOrFocusDownloadsManager();
      if (typeof callback === 'function') {
        try { callback(); } catch (_) {}
      }
    };
  }
} catch (_) {}

// ==========================================
// 0.1 Chrome Extensions API Error Safety Wrappers
// ==========================================

// Guard chrome.scripting.executeScript against frame removal & closed tab errors
if (typeof chrome !== 'undefined' && chrome.scripting && typeof chrome.scripting.executeScript === 'function') {
  const _origExecuteScript = chrome.scripting.executeScript.bind(chrome.scripting);
  chrome.scripting.executeScript = function(...args) {
    try {
      const res = _origExecuteScript(...args);
      if (res && typeof res.catch === 'function') {
        return res.catch((err) => {
          const msg = String(err && err.message || err || '');
          if (/frame with id/i.test(msg) || /no tab with id/i.test(msg) || /cannot access contents/i.test(msg)) {
            return [];
          }
          throw err;
        });
      }
      return res;
    } catch (err) {
      const msg = String(err && err.message || err || '');
      if (/frame with id/i.test(msg) || /no tab with id/i.test(msg) || /cannot access contents/i.test(msg)) {
        return Promise.resolve([]);
      }
      return Promise.reject(err);
    }
  };
}

// Guard chrome.tabs.sendMessage against dead tabs, unmounted frames & missing receivers
if (typeof chrome !== 'undefined' && chrome.tabs && typeof chrome.tabs.sendMessage === 'function') {
  const _origTabsSendMessage = chrome.tabs.sendMessage.bind(chrome.tabs);
  chrome.tabs.sendMessage = function(...args) {
    const lastArg = args[args.length - 1];
    const hasCallback = typeof lastArg === 'function';
    if (hasCallback) {
      const cb = args.pop();
      return _origTabsSendMessage(...args, function(res) {
        if (chrome.runtime.lastError) {
          // Suppress receiving end does not exist or closed message port
        }
        cb(res);
      });
    }
    try {
      const res = _origTabsSendMessage(...args);
      if (res && typeof res.catch === 'function') {
        return res.catch((err) => {
          const msg = String(err && err.message || err || '');
          if (
            /could not establish connection/i.test(msg) ||
            /receiving end does not exist/i.test(msg) ||
            /the message port closed/i.test(msg) ||
            /no tab with id/i.test(msg)
          ) {
            return;
          }
          throw err;
        });
      }
      return res;
    } catch (err) {
      const msg = String(err && err.message || err || '');
      if (
        /could not establish connection/i.test(msg) ||
        /receiving end does not exist/i.test(msg) ||
        /the message port closed/i.test(msg) ||
        /no tab with id/i.test(msg)
      ) {
        return Promise.resolve();
      }
      return Promise.reject(err);
    }
  };
}

// Guard chrome.runtime.sendMessage
if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.sendMessage === 'function') {
  const _origRuntimeSendMessage = chrome.runtime.sendMessage.bind(chrome.runtime);
  chrome.runtime.sendMessage = function(...args) {
    const lastArg = args[args.length - 1];
    const hasCallback = typeof lastArg === 'function';
    if (hasCallback) {
      const cb = args.pop();
      return _origRuntimeSendMessage(...args, function(res) {
        if (chrome.runtime.lastError) {
          // Suppress error
        }
        cb(res);
      });
    }
    try {
      const res = _origRuntimeSendMessage(...args);
      if (res && typeof res.catch === 'function') {
        return res.catch((err) => {
          const msg = String(err && err.message || err || '');
          if (
            /could not establish connection/i.test(msg) ||
            /receiving end does not exist/i.test(msg) ||
            /the message port closed/i.test(msg)
          ) {
            return;
          }
          throw err;
        });
      }
      return res;
    } catch (err) {
      const msg = String(err && err.message || err || '');
      if (
        /could not establish connection/i.test(msg) ||
        /receiving end does not exist/i.test(msg) ||
        /the message port closed/i.test(msg)
      ) {
        return Promise.resolve();
      }
      return Promise.reject(err);
    }
  };
}

// Service Worker global error and unhandled rejection listeners
if (typeof self !== 'undefined' && typeof self.addEventListener === 'function') {
  const isIgnorableServiceWorkerError = (reason) => {
    const msg = String(reason && (reason.message || reason) || '');
    return (
      /frame with id \d+ was removed/i.test(msg) ||
      /could not establish connection/i.test(msg) ||
      /receiving end does not exist/i.test(msg) ||
      /the message port closed before a response was received/i.test(msg) ||
      /no tab with id/i.test(msg) ||
      /extension context invalidated/i.test(msg) ||
      /picture-in-picture is not allowed/i.test(msg) ||
      /violates the following Content Security Policy directive/i.test(msg) ||
      /Fetch API cannot load/i.test(msg) ||
      /Image decode error/i.test(msg)
    );
  };

  self.addEventListener('unhandledrejection', (event) => {
    if (isIgnorableServiceWorkerError(event.reason)) {
      event.preventDefault();
      try { event.stopImmediatePropagation(); } catch (_) {}
    }
  });

  self.addEventListener('error', (event) => {
    if (isIgnorableServiceWorkerError(event.error || event.message)) {
      event.preventDefault();
      try { event.stopImmediatePropagation(); } catch (_) {}
    }
  });
}

// ==========================================
// 0.2 DeclarativeNetRequest Anti-403 Protection Rules
// ==========================================
function setupAnti403Rules() {
  if (!chrome.declarativeNetRequest || !chrome.declarativeNetRequest.updateSessionRules) return;
  try {
    chrome.declarativeNetRequest.updateSessionRules({
      removeRuleIds: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008].concat([1009, 1010]),
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
        },
        {
          id: 1007,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.douyin.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.douyin.com' }
            ]
          },
          condition: {
            urlFilter: '*douyin.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1008,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.douyin.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.douyin.com' }
            ]
          },
          condition: {
            urlFilter: '*iesdouyin.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1009,
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
          id: 1010,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.instagram.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.instagram.com' }
            ]
          },
          condition: {
            urlFilter: '*instagram.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        }
      ]
    }).catch(() => {});
  } catch (_) {}
}

setupAnti403Rules();
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onStartup) {
  chrome.runtime.onStartup.addListener(setupAnti403Rules);
}
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onInstalled) {
  chrome.runtime.onInstalled.addListener(setupAnti403Rules);
}

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
try { if (typeof self !== 'undefined') self.fakeIdCounter = fakeIdCounter; } catch (_) {}
const activeDownloads = new Map();
const purgedTaskIds = new Set();
let configuredDownloadDir = '';
let historyWritePromise = Promise.resolve();

// The native host receives an absolute output directory while Chrome downloads do not.
// Keep the user's choice in memory so every new native task gets it consistently.
try {
  chrome.storage.local.get(['downloadHistory', 'customDownloadDir'], (result) => {
    configuredDownloadDir = (result && result.customDownloadDir) || '';
    const history = Array.isArray(result && result.downloadHistory) ? result.downloadHistory : [];
    
    // Seed fakeIdCounter from max existing ID in history (Task 14)
    const maxId = history.reduce((max, it) => Math.max(max, Number(it.id) || 0), 900000);
    fakeIdCounter = maxId;
    try { if (typeof self !== 'undefined') self.fakeIdCounter = fakeIdCounter; } catch (_) {}

    // SW Cold-Start Guard: do not blindly overwrite active browser downloads to error (Task 4)
    const checkItemState = (item) => {
      return new Promise((resolve) => {
        if (!item || (item.state !== 'downloading' && item.state !== 'in_progress')) {
          return resolve(item);
        }
        if (item.chromeId && chrome.downloads && typeof chrome.downloads.search === 'function') {
          try {
            chrome.downloads.search({ id: Number(item.chromeId) }, (results) => {
              if (chrome.runtime && chrome.runtime.lastError) {
                return resolve(item.isBrowserDownload ? item : { ...item, state: 'error', error: 'Bị gián đoạn', errorMessage: 'Bị gián đoạn khi tắt trình duyệt', speed: '' });
              }
              const d = results && results[0];
              if (d && d.state === 'in_progress') {
                return resolve(item); // Still in progress in browser!
              } else if (d && d.state === 'complete') {
                return resolve({ ...item, state: 'completed', percent: '100%', speed: 'Hoàn thành' });
              } else if (item.isBrowserDownload && !d) {
                return resolve({ ...item, state: 'error', error: 'Bị gián đoạn', errorMessage: 'Bị gián đoạn khi tắt trình duyệt', speed: '' });
              }
              return resolve({ ...item, state: 'error', error: 'Bị gián đoạn', errorMessage: 'Bị gián đoạn khi tắt trình duyệt', speed: '' });
            });
            return;
          } catch (_) {
            return resolve(item);
          }
        }
        if (item.chromeId || item.isBrowserDownload) {
          return resolve(item);
        }
        return resolve({
          ...item,
          state: 'error',
          error: 'Bị gián đoạn',
          errorMessage: 'Bị gián đoạn khi tắt trình duyệt',
          speed: ''
        });
      });
    };

    Promise.all(history.map(checkItemState)).then((sanitized) => {
      const modified = sanitized.some((it, i) => it !== history[i]);
      if (modified) {
        chrome.storage.local.set({ downloadHistory: sanitized });
      }
    });
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

// Helper to update persistent download history in chrome.storage.local (Task 5: Mutex Queue & Anti-Resurrection)
function updateDownloadHistory(record) {
  if (!record) return Promise.resolve();
  const recId = String(record.id || '');
  const recChromeId = record.chromeId ? String(record.chromeId) : '';
  if ((recId && purgedTaskIds.has(recId)) || (recChromeId && purgedTaskIds.has(recChromeId))) {
    return Promise.resolve();
  }

  historyWritePromise = historyWritePromise.then(() => {
    return new Promise((resolve) => {
      try {
        if ((recId && purgedTaskIds.has(recId)) || (recChromeId && purgedTaskIds.has(recChromeId))) {
          return resolve();
        }
        chrome.storage.local.get(['downloadHistory'], (result) => {
          const history = Array.isArray(result && result.downloadHistory) ? result.downloadHistory : [];
          const idx = history.findIndex(item => {
            const itId = String(item.id || '');
            const itChromeId = item.chromeId ? String(item.chromeId) : '';
            return (recId && itId === recId) || (recChromeId && (itChromeId === recChromeId || itId === recChromeId));
          });
          const now = Date.now();
          if (idx >= 0) {
            const resolvedStartTime = record.startTime || history[idx].startTime || history[idx].timestamp || now;
            history[idx] = {
              ...history[idx],
              ...record,
              startTime: resolvedStartTime
            };
          } else {
            // Anti-resurrection guard: only add new record if it has complete metadata (url, title, or filename)
            const hasCompleteMetadata = Boolean(record.url || record.title || record.filename);
            if (!hasCompleteMetadata) {
              return resolve();
            }
            const resolvedStartTime = record.startTime || record.timestamp || now;
            const newRecord = {
              ...record,
              startTime: resolvedStartTime
            };
            history.unshift(newRecord);
          }
          if (history.length > 200) history.length = 200;
          try {
            chrome.storage.local.set({ downloadHistory: history }, () => {
              resolve();
            });
          } catch (_) {
            resolve();
          }
        });
      } catch (e) {
        console.warn('[Savior] updateDownloadHistory error:', e);
        resolve();
      }
    });
  }).catch((e) => {
    console.warn('[Savior] historyWritePromise error:', e);
  });
  return historyWritePromise;
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
  if (
    url.includes('.m3u8') ||
    url.includes('/hls/') ||
    url.includes('format=m3u8') ||
    url.includes('type=m3u8') ||
    url.includes('playlist')
  ) {
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
  if (purgedTaskIds.has(String(historyId)) || purgedTaskIds.has(String(chromeId))) {
    console.log(`[Savior] trackBrowserDownload: task ${historyId} / chromeId ${chromeId} was already purged by user. Canceling immediately.`);
    const numId = Number(chromeId);
    if (!isNaN(numId) && numId > 0) {
      try {
        _origCancel(numId, () => {
          try { _origErase({ id: numId }, () => {}); } catch (_) {}
        });
      } catch (_) {}
    }
    return;
  }
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

// One video = one card: drop a history entry that a fallback path orphaned
// (its download lives on under a different id). purgedTaskIds stops any
// in-flight progress write from resurrecting it.
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

function hasActiveTaskForUrl(url) {
  const u = String(url || '');
  if (!u) return false;
  for (const t of activeDownloads.values()) {
    if (!t || t.complete) continue;
    if (String(t.url || '') === u || String(t.videoUrl || '') === u || String(t.audioUrl || '') === u) return true;
  }
  return false;
}

// In-flight URL deduplication tracker to prevent duplicate concurrent download requests (e.g. Save As popups)
const inFlightBrowserDownloads = new Map();

function isUrlRecentlyRequested(u) {
  if (!u) return false;
  const now = Date.now();
  if (inFlightBrowserDownloads.has(u) && (now - inFlightBrowserDownloads.get(u) < 4000)) {
    return true;
  }
  inFlightBrowserDownloads.set(u, now);
  setTimeout(() => inFlightBrowserDownloads.delete(u), 5000);
  return false;
}

function startBrowserDownload(options, callback) {
  if (options && options.taskId && purgedTaskIds.has(String(options.taskId))) {
    console.log(`[Savior] startBrowserDownload called for purged task ${options.taskId}, dropping.`);
    if (typeof callback === 'function') callback(null);
    return false;
  }
  const targetUrl = options.videoUrl || options.url;
  if (!targetUrl) {
    if (typeof callback === 'function') callback(null);
    return false;
  }

  if (isUrlRecentlyRequested(targetUrl)) {
    console.log('[Savior] Duplicate browser download suppressed in-flight:', targetUrl);
    if (typeof callback === 'function') callback(null);
    return false;
  }

  for (const [id, t] of activeDownloads.entries()) {
    if (t.url === targetUrl && (t.state === 'in_progress' || t.state === 'downloading')) {
      console.log('[Savior] Download already active for this URL, returning task:', id);
      // The fallback that routed us here may own a different (now orphaned)
      // history entry for the same video — drop it so only one card shows.
      if (options.taskId !== undefined && String(options.taskId) !== String(id)) {
        pruneDownloadHistoryEntry(options.taskId);
      }
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
  if (options && options.taskId && purgedTaskIds.has(String(options.taskId))) {
    console.log(`[Savior] startCocCocSessionDownload called for purged task ${options.taskId}, dropping.`);
    if (typeof callback === 'function') callback(null);
    return false;
  }
  const targetUrl = options && (options.videoUrl || options.url);
  if (!targetUrl || isBogusStreamUrl(targetUrl, options.pageUrl || options.referrer)) {
    console.warn('[Savior] startCocCocSessionDownload rejected empty or bogus target:', targetUrl);
    if (typeof callback === 'function') callback(null);
    return false;
  }

  if (isUrlRecentlyRequested(targetUrl)) {
    console.log('[Savior] Duplicate session download suppressed in-flight:', targetUrl);
    if (typeof callback === 'function') callback(null);
    return false;
  }

  // 1. Avoid duplicate active download for the exact same target URL
  for (const [id, t] of activeDownloads.entries()) {
    if (t.url === targetUrl && (t.state === 'in_progress' || t.state === 'downloading')) {
      console.log('[Savior] Session download already active for this URL, returning task:', id);
      if (typeof callback === 'function') callback(id);
      return true;
    }
  }

  // 2. Format safe filename and determine correct media extension
  const isAudio = Boolean(options.soundOnly || options.quality === 'audio');
  const targetExt = isAudio ? 'mp3' : 'mp4';
  let rawFilename = options.filename || 'video.mp4';
  let baseName = rawFilename
    .replace(/\.[a-zA-Z0-9]+$/, '')
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 150)
    .replace(/[\s.]+$/, '');
  if (!baseName) baseName = `video_${Date.now()}`;
  const safeFilename = `${baseName}.${targetExt}`;

  // 3. Clean options with only valid chrome.downloads.DownloadOptions properties
  const nativeOptions = {
    url: targetUrl,
    filename: safeFilename,
    conflictAction: options.conflictAction || 'uniquify',
    saveAs: false
  };

  const ref = options.referrer || options.pageUrl || currentActiveTabUrl;
  if (ref && !targetUrl.includes('googlevideo.com')) {
    nativeOptions.headers = [{ name: 'Referer', value: ref }];
  }

  const reportStartError = (error) => {
    const taskId = options.taskId || `start_error_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const errorText = String(error && (error.message || error) || 'VidManager không thể bắt đầu tải tệp');
    updateDownloadHistory({
      id: taskId,
      title: baseName,
      filename: safeFilename,
      url: targetUrl,
      videoUrl: options.videoUrl || targetUrl,
      referer: options.referrer || options.pageUrl || '',
      pageUrl: options.pageUrl || options.referrer || '',
      type: isAudio ? 'audio' : 'video',
      state: 'error',
      error: errorText,
      startTime: Date.now()
    });
    broadcastTaskEvent({ action: 'nativeError', taskId, error: errorText });
  };

  try {
    let finished = false;
    let timer = null;

    const finish = (chromeId, error) => {
      if (finished) return;
      finished = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (error || chrome.runtime.lastError || !chromeId) {
        // Fallback: If headers failed, retry without headers
        if (nativeOptions.headers) {
          console.warn('[Savior] Session download with headers failed, retrying without headers...');
          delete nativeOptions.headers;
          finished = false;
          executeDownload();
          return;
        }
        // Fallback: If browser session download failed entirely and Native Helper is available, try Native Helper
        if (nativeHelperAvailable) {
          console.log('[Savior] Browser session download failed, falling back to Native Helper...');
          const nativeStarted = startNativeDownload(options, callback);
          if (nativeStarted) return;
        }
        const reason = error || chrome.runtime.lastError || 'VidManager không trả về mã tải xuống';
        console.warn('[VidManager] Session download failed:', reason && (reason.message || reason));
        reportStartError(reason);
        if (typeof callback === 'function') callback(null);
        return;
      }
      trackBrowserDownload(chromeId, options, safeFilename, targetUrl);
      if (typeof callback === 'function') callback(chromeId);
    };

    function executeDownload() {
      timer = setTimeout(() => {
        finish(null, 'VidManager không phản hồi yêu cầu tải trong 10 giây');
      }, 10000);

      const result = _origDownload(nativeOptions, (chromeId) => {
        finish(chromeId, null);
      });
      if (result && typeof result.then === 'function') {
        result.then((chromeId) => finish(chromeId, null)).catch(err => finish(null, err));
      }
    }

    executeDownload();
    return true;
  } catch (err) {
    console.warn('[Savior] Cốc Cốc session download exception:', err);
    if (nativeHelperAvailable) {
      console.log('[Savior] Exception in session download, falling back to Native Helper...');
      const nativeStarted = startNativeDownload(options, callback);
      if (nativeStarted) return nativeStarted;
    }
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
    const strDeltaId = String(delta.id);
    const task = activeDownloads.get(delta.id) || activeDownloads.get(strDeltaId) || activeDownloads.get(Number(delta.id));

    // If this task was purged/deleted by user, suppress event resurrection and cancel + erase immediately
    if (purgedTaskIds.has(strDeltaId) || (task && (purgedTaskIds.has(String(task.id)) || purgedTaskIds.has(String(task.chromeId))))) {
      activeDownloads.delete(delta.id);
      activeDownloads.delete(strDeltaId);
      activeDownloads.delete(Number(delta.id));
      if (activeDownloads.size === 0) setActionBadge('');
      const numDeltaId = Number(delta.id);
      if (!isNaN(numDeltaId) && numDeltaId > 0) {
        try {
          _origCancel(numDeltaId, () => {
            try { _origErase({ id: delta.id }, () => {}); } catch (_) {}
          });
        } catch (_) {
          try { _origErase({ id: delta.id }, () => {}); } catch (_) {}
        }
      }
      return;
    }

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
        activeDownloads.delete(strDeltaId);
        activeDownloads.delete(Number(delta.id));

        if (activeDownloads.size === 0) setActionBadge('');

        // If purged by user while active, do not resurrect into history
        if (purgedTaskIds.has(strDeltaId) || purgedTaskIds.has(String(task.id))) {
          try { _origErase({ id: delta.id }, () => {}); } catch (_) {}
          return;
        }

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

// Probe native helper availability on startup.
// Passive probe: create the persistent port and watch whether it survives.
// chrome.runtime.connectNative returns a Port even when the host is missing —
// failure arrives asynchronously via onDisconnect — so "port still alive after
// a short window" is the availability signal. Nothing is sent on the port here
// (an active ping per SW wake both spawned churn and polluted port traffic;
// the 15s heartbeat already pings once connected).
let nativeProbePromise = null;
let nativeProbeSettled = false;

function probeNativeHelper() {
  if (nativeProbePromise) return nativeProbePromise;
  nativeProbePromise = new Promise((resolve) => {
    const finish = (ok) => {
      nativeProbeSettled = true;
      nativeHelperAvailable = ok;
      if (!ok) console.log('[Savior] Native helper not detected.');
      resolve(ok);
    };
    try {
      const port = getOrCreateNativePort();
      if (!port) return finish(false);
      // Host-missing ports die within milliseconds; wait out that window.
      setTimeout(() => {
        finish(activeNativePort === port);
      }, 1500);
    } catch (e) {
      finish(false);
    }
  });
  return nativeProbePromise;
}
probeNativeHelper();

async function ensureNativeHelperReady() {
  if (nativeHelperAvailable && activeNativePort) return true;
  nativeProbePromise = null;
  try {
    await Promise.race([
      probeNativeHelper(),
      new Promise(resolve => setTimeout(resolve, 4000))
    ]);
  } catch (_) {}
  return nativeHelperAvailable;
}

function getOrCreateNativePort() {
  if (activeNativePort) return activeNativePort;
  try {
    activeNativePort = chrome.runtime.connectNative(NATIVE_HOST);
    nativeHelperAvailable = true;
    activeNativePort.onMessage.addListener((msg) => {
      if (msg && msg.action === 'browseFolderResult' && !msg.canceled && msg.path) {
        chrome.storage.local.set({ customDownloadDir: msg.path });
      }
      if (msg && msg.action === 'openFileResult') {
        const missingId = msg.id || msg.taskId;
        if (!msg.success && msg.fileNotFound && missingId) {
          updateDownloadHistory({ id: missingId, state: 'deleted', fileMissing: true });
        }
        chrome.runtime.sendMessage(msg).catch(() => {});
      }
    });
    activeNativePort.onDisconnect.addListener(() => {
      const errorMsg = chrome.runtime.lastError ? chrome.runtime.lastError.message : 'Native host disconnected';
      console.warn('[Savior] Native host disconnected:', errorMsg);
      activeNativePort = null;
      nativeHelperAvailable = false;
      nativeProbePromise = null;
      // Allow a fresh probe on the next attempt — otherwise the availability
      // guard in startNativeDownload keeps forcing browser fallback forever.
      nativeProbeSettled = false;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }

      for (const [id, task] of Array.from(activeDownloads.entries())) {
        if (!task.isBrowserDownload && !task.chromeId) {
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
          activeDownloads.delete(id);
        }
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

const nativeDownloadQueue = [];

function processNextQueuedNativeDownload() {
  if (nativeDownloadQueue.length === 0) return;
  const hasNativeJob = Array.from(activeDownloads.values()).some(t => !t.isBrowserDownload && t.state === 'downloading');
  if (hasNativeJob) return;

  const next = nativeDownloadQueue.shift();
  if (next) {
    console.log('[Savior] Starting queued native download:', next.params);
    const task = activeDownloads.get(next.params && next.params.taskId);
    if (task) {
      task.state = 'downloading';
    }
    startNativeDownload(next.params, next.callback);
  }
}

// ==========================================
// Performance Sniffed Stream Store & Resolver
// Replaces fake placeholders (e.g. google.com / blob:) with real streams captured by Performance API
// ==========================================
const sniffedStreamsByTab = new Map();
const sniffedStreamsByPage = new Map();

function registerSniffedStream(tabId, pageUrl, streamUrl, format, title) {
  if (!streamUrl) return;
  const record = { url: streamUrl, format: format || 'M3U8', title: title || '', time: Date.now() };
  if (typeof tabId === 'number' && tabId >= 0) {
    let list = sniffedStreamsByTab.get(tabId) || [];
    if (!list.some(s => s.url === streamUrl)) {
      list.push(record);
      if (list.length > 20) list.shift();
      sniffedStreamsByTab.set(tabId, list);
    }
  }
  if (pageUrl) {
    try {
      const u = new URL(pageUrl);
      const cleanKey = u.origin + u.pathname;
      let list = sniffedStreamsByPage.get(cleanKey) || [];
      if (!list.some(s => s.url === streamUrl)) {
        list.push(record);
        if (list.length > 20) list.shift();
        sniffedStreamsByPage.set(cleanKey, list);
        if (sniffedStreamsByPage.size > 100) {
          const oldestKey = sniffedStreamsByPage.keys().next().value;
          if (oldestKey) sniffedStreamsByPage.delete(oldestKey);
        }
      }
    } catch (_) {}
  }
}

function findBestStreamFromList(list) {
  if (!list || !list.length) return null;
  // Step 1: Look for genuine master/media playlist (.m3u8 / .mpd)
  const playlist = list.slice().reverse().find(s => {
    if (!s || !s.url) return false;
    const lu = s.url.toLowerCase();
    const isM3u8OrMpd = lu.includes('.m3u8') || lu.includes('.mpd') || s.format === 'M3U8' || s.format === 'MPD';
    const isChunk = /\.(otf|ttf|woff2?|jpe?g|png|webp|svg|gif|key|ts|m4s)(\?|$)/i.test(lu);
    return isM3u8OrMpd && !isChunk;
  });
  if (playlist) return playlist.url;

  // Step 2: Fallback to direct media file, excluding chunks
  const direct = list.slice().reverse().find(s => {
    if (!s || !s.url) return false;
    const lu = s.url.toLowerCase();
    return !/\.(otf|ttf|woff2?|jpe?g|png|webp|svg|gif|key|ts|m4s|css|js)(\?|$)/i.test(lu);
  });
  return direct ? direct.url : null;
}

function isBogusStreamUrl(url, pageUrl) {
  if (Array.isArray(url)) url = url.find(u => typeof u === 'string' && u) || '';
  if (!url || typeof url !== 'string') return true;
  const clean = url.trim().toLowerCase();
  if (
    clean === 'null' ||
    clean === 'undefined' ||
    clean === 'about:blank' ||
    clean.startsWith('blob:') ||
    clean.includes('google.com/search') ||
    clean === 'https://google.com' ||
    clean === 'https://google.com/' ||
    clean.includes('blob:a.a')
  ) {
    return true;
  }
  // Static assets and non-media extensions
  if (/\.(otf|ttf|woff2?|jpe?g|png|webp|svg|gif|key|css|js|json|xml|vtt|srt)(\?|$)/i.test(clean)) {
    return true;
  }
  try {
    const parsed = new URL(url);
    const pathname = parsed.pathname.toLowerCase();
    // Bare origins, root, or index paths are webpages, not streams
    if (!pathname || pathname === '/' || pathname === '/index.html' || pathname === '/index.php') {
      return true;
    }
    // Equals the host webpage or its origin
    if (pageUrl) {
      try {
        const pageParsed = new URL(pageUrl);
        if (parsed.origin === pageParsed.origin && (pathname === pageParsed.pathname.toLowerCase() || pathname === '/')) {
          return true;
        }
      } catch (_) {}
    }
    // Webpage extensions without media indicators
    if (/\.(html?|php|asp|aspx|jsp)(\?|$)/i.test(pathname)) {
      const search = parsed.search.toLowerCase();
      if (!search.includes('m3u8') && !search.includes('mp4') && !search.includes('video') && !search.includes('stream')) {
        return true;
      }
    }
    // Check for presence of media signatures
    const hasMediaExt = /\.(mp4|m3u8|mpd|webm|mkv|mov|ts|m4s|mp3|m4a|aac|flac|wav|ogg)(\?|$)/i.test(clean);
    const hasMediaMime = /mime(_type)?=(video|audio)|format=(m3u8|mpd|mp4)|type=(m3u8|mpd|mp4)|amplify_video|videoplayback|media_type=video/i.test(clean);
    const hasStreamSignature = hasMediaExt || hasMediaMime ||
      clean.includes('/m3u8/') || clean.includes('/hls/') || clean.includes('/video/tos/') ||
      clean.includes('tiktokcdn.com') || clean.includes('byteoversea.com') || clean.includes('ibytedtos.com') ||
      clean.includes('googlevideo.com') || clean.includes('fbcdn.net') || clean.includes('cdninstagram.com');
    if (!hasStreamSignature) {
      return true;
    }
  } catch (_) {
    return true;
  }
  return false;
}

function resolveRealStreamForDownload(targetUrl, pageUrl, tabId) {
  // The Cốc Cốc engine can deliver url/videoUrl as an array of candidate
  // streams; normalize once here so every string method below is safe.
  if (Array.isArray(targetUrl)) targetUrl = targetUrl.find(u => typeof u === 'string' && u) || '';
  if (typeof targetUrl !== 'string') targetUrl = '';

  const isBogus = isBogusStreamUrl(targetUrl, pageUrl);

  if (!isBogus) return targetUrl;

  const targetPage = (pageUrl && !pageUrl.startsWith('chrome-extension:') && !pageUrl.startsWith('about:'))
    ? pageUrl
    : currentActiveTabUrl || '';

  // 1. Try exact or path-based match
  if (targetPage) {
    try {
      const u = new URL(targetPage);
      const cleanKey = u.origin + u.pathname;
      let list = sniffedStreamsByPage.get(cleanKey);

      // 2. If exact match fails, check domain / hostname match in sniffedStreamsByPage
      if (!list && u.hostname) {
        for (const [key, val] of sniffedStreamsByPage.entries()) {
          if (key.includes(u.hostname) && val && val.length > 0) {
            list = val;
            break;
          }
        }
      }

      const found = findBestStreamFromList(list);
      if (found) return found;
    } catch (_) {}
  }

  // 3. Try tabId match
  if (typeof tabId === 'number' && tabId >= 0) {
    const list = sniffedStreamsByTab.get(tabId);
    const found = findBestStreamFromList(list);
    if (found) return found;
  }

  // 4. Fallback: Return the most recent stream found across all pages
  for (const list of Array.from(sniffedStreamsByPage.values()).reverse()) {
    const found = findBestStreamFromList(list);
    if (found) return found;
  }

  return targetUrl;
}

function startNativeDownload(downloadParams, callback) {
  // Normalize stream sources to a single string: some bundle download flows
  // (YouTube DASH) pass url/videoUrl as an ARRAY of candidate streams.
  const normalizeStreamField = (v) => {
    if (Array.isArray(v)) return v.find(u => typeof u === 'string' && u) || '';
    return (typeof v === 'string') ? v : '';
  };
  downloadParams.url = normalizeStreamField(downloadParams.url);
  downloadParams.videoUrl = normalizeStreamField(downloadParams.videoUrl);
  if (Array.isArray(downloadParams.audioUrl)) {
    downloadParams.audioUrl = downloadParams.audioUrl.find(u => typeof u === 'string' && u) || '';
  }

  // Availability guard: once the boot probe has settled and the native host is
  // known to be absent, fail fast so callers fall back to the browser download
  // engine instead of creating tasks that die on port disconnect.
  if (nativeProbeSettled && !nativeHelperAvailable) {
    console.warn('[Savior] Native helper unavailable (probe failed); using browser fallback');
    return false;
  }
  const port = getOrCreateNativePort();
  if (!port) {
    console.warn('[Savior] Native port unavailable');
    return false;
  }
  nativeHelperAvailable = true;

  let targetUrl = downloadParams.videoUrl || downloadParams.url || '';
  const effectivePage = (downloadParams.pageUrl && !downloadParams.pageUrl.startsWith('chrome-extension:') && !downloadParams.pageUrl.startsWith('about:'))
    ? downloadParams.pageUrl
    : (downloadParams.referrer && !downloadParams.referrer.startsWith('chrome-extension:')
        ? downloadParams.referrer
        : currentActiveTabUrl);
  const resolvedTarget = resolveRealStreamForDownload(targetUrl, effectivePage, downloadParams.tabId);
  if (resolvedTarget && resolvedTarget !== targetUrl) {
    console.log(`[Savior] Swapped placeholder/blob url "${targetUrl}" with sniffed stream "${resolvedTarget}"`);
    targetUrl = resolvedTarget;
    downloadParams.url = resolvedTarget;
    downloadParams.videoUrl = resolvedTarget;
    if (resolvedTarget.includes('.m3u8')) {
      downloadParams.isConversionStream = true;
    }
  }

  // The Cốc Cốc bundle fires a "pre-resolution" download request with empty
  // URLs (just the quality label) ~100ms before the real one arrives. Starting
  // a native task for it produced a ghost history card stuck at 1% plus a
  // pointless browser-fallback roundtrip. Nothing to download = no task.
  if (!targetUrl || isBogusStreamUrl(targetUrl, effectivePage)) {
    console.warn('[Savior] No downloadable stream URL resolved; skipping native download');
    return false;
  }

  // Session-protected streams (TikTok, Douyin, etc.): Native FFmpeg direct stream fetch
  // lacks Chrome's TLS fingerprint and session cookies, triggering CDN 403 Forbidden.
  // Delegate directly to Stream Relay: Chrome's service worker fetches with valid browser TLS
  // and pipes binary chunks to Native Helper to write directly to disk, completely bypassing
  // chrome.downloads.download and preventing Chrome's "Save As" file dialog!
  if (isSessionProtectedStream(downloadParams) && !downloadParams._relayFailed && !downloadParams.audioUrl && !downloadParams.convertToMp3 && !downloadParams.soundOnly) {
    console.log('[Savior] Session-protected stream detected (TikTok/Douyin); routing directly to Stream Relay');
    const relayStarted = startStreamRelayDownload(downloadParams, callback);
    if (relayStarted) return true;
  }

  // Duplicate guard (runs BEFORE the busy-queue so a stream that is already
  // being downloaded as part of an active task is never queued again). The
  // bundle sometimes fires an AUDIO-ONLY request right after the DASH
  // video+audio request — without matching audioUrl here that request created
  // a second task and the user got a stray .m4a next to their finished .mp4.
  // Skips the request's own placeholder (queued tasks are re-entered by the
  // queue drain with the same taskId).
  for (const [dupId, t] of activeDownloads.entries()) {
    if (downloadParams.taskId && String(t.id) === String(downloadParams.taskId)) continue;
    const tAudio = t.audioUrl || (t.params && t.params.audioUrl) || '';
    const tVideo = t.url || '';
    const samePageAndTitle = Boolean(
      effectivePage && t.pageUrl && effectivePage === t.pageUrl &&
      t.title && downloadParams.title && t.title.toLowerCase() === downloadParams.title.toLowerCase()
    );
    const dupMatch = targetUrl === tAudio || targetUrl === tVideo ||
      (downloadParams.audioUrl && downloadParams.audioUrl === tAudio) ||
      (downloadParams.audioUrl && downloadParams.audioUrl === tVideo) ||
      samePageAndTitle;
    if (dupMatch && (t.state === 'downloading' || t.state === 'queued' || t.state === 'in_progress')) {
      console.log('[Savior] Stream already covered by active task ' + dupId + '; ignoring duplicate request.');
      if (typeof callback === 'function') callback(dupId);
      return true;
    }
  }

  // native/host.js is intentionally a single-job host.
  // If a native job is already running, queue DASH muxing and MP3 conversion tasks
  // so they are not forced into browser download which lacks ffmpeg and would lose audio!
  const hasNativeJob = Array.from(activeDownloads.values()).some(t => !t.isBrowserDownload && t.state === 'downloading' && (!downloadParams.taskId || t.id !== downloadParams.taskId));
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
        state: 'queued',
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
        state: 'queued',
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
    if ((!downloadParams.taskId || id !== downloadParams.taskId) && t.url === targetUrl && (t.state === 'in_progress' || t.state === 'downloading')) {
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
    // Stream-relay messages carry a taskId; this handler only owns its own task.
    if (msg.taskId !== undefined && String(msg.taskId) !== String(fakeId)) return;

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
        outputPath: msg.downloadsDir && msg.outputFile
          ? `${msg.downloadsDir}${msg.downloadsDir.includes('\\') ? '\\' : '/'}${msg.outputFile}`
          : (msg.outputFile || safeFilename),
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
      setTimeout(processNextQueuedNativeDownload, 50);
    } else if (msg.action === 'cancelled' || msg.action === 'cancelResult') {
      task.state = 'canceled';
      activeDownloads.delete(fakeId);
      port.onMessage.removeListener(messageHandler);

      if (!purgedTaskIds.has(String(fakeId))) {
        updateDownloadHistory({
          id: fakeId,
          state: 'canceled',
          speed: 'Đã hủy',
          error: 'Người dùng đã hủy'
        });
      }

      if (activeDownloads.size === 0) setActionBadge('');

      dispatchDownloadChanged({
        id: fakeId,
        error: { current: 'USER_CANCELED' },
        state: { current: 'interrupted' }
      });
      broadcastTaskEvent({
        action: 'nativeCanceled',
        taskId: fakeId
      });
      setTimeout(processNextQueuedNativeDownload, 50);
    } else if (msg.action === 'error') {
      if (purgedTaskIds.has(String(fakeId)) || task.state === 'canceled') {
        console.log(`[Savior] Task ${fakeId} was canceled/purged by user, suppressing error and ignoring browser fallback.`);
        port.onMessage.removeListener(messageHandler);
        activeDownloads.delete(fakeId);
        setTimeout(processNextQueuedNativeDownload, 50);
        return;
      }
      // Auto-fallback to browser download for progressive direct streams before failing!
      // HLS (.m3u8) and DASH (.mpd) playlists must NEVER fall back to raw browser download
      // because Chrome would download a tiny text file instead of a valid video!
      const opts = task.params || task.options;
      const targetUrlStr = String((opts && (opts.url || opts.videoUrl)) || targetUrl || '').toLowerCase();
      const isPlaylistStream = targetUrlStr.includes('.m3u8') || targetUrlStr.includes('.mpd') || Boolean(opts && (opts.hls || opts.isHls || opts.isConversionStream));
      if (opts && !opts.isYouTubeDash && !opts.audioUrl && !opts.convertToMp3 && !opts.soundOnly && !isPlaylistStream) {
        console.log('[NativeInterceptor] Native download failed for direct stream, auto-falling back to browser download:', opts.url);
        port.onMessage.removeListener(messageHandler);
        activeDownloads.delete(fakeId);
        setTimeout(processNextQueuedNativeDownload, 50);
        // Hand the SAME id to whichever engine takes over so the history card
        // continues seamlessly instead of leaving a ghost "downloading" entry
        // next to the new task's card.
        opts.taskId = fakeId;
        let fallbackStarted = false;
        if (isSessionProtectedStream(opts)) {
          // TLS-blocked CDN (TikTok & friends): let Chrome's real network stack
          // fetch while the native host writes the file. Session download (a
          // real chrome.downloads entry) stays as the last resort.
          const relayStarted = !opts._relayFailed && startStreamRelayDownload(opts);
          if (relayStarted) {
            fallbackStarted = true;
          } else {
            delete opts.taskId;
            fallbackStarted = startCocCocSessionDownload(opts);
          }
        } else if (!opts._relayFailed && startStreamRelayDownload(opts)) {
          // Regular stream whose CDN blocked the native fetch (TLS/header):
          // relay through Chrome's stack before touching the browser engine.
          opts._relayFailed = true;
          fallbackStarted = true;
        } else {
          delete opts.taskId;
          fallbackStarted = startBrowserDownload(opts);
        }
        if (!fallbackStarted) {
          // Neither engine could take it (e.g. empty URL) — close out the
          // history entry instead of leaving a ghost "downloading" card.
          updateDownloadHistory({
            id: fakeId,
            state: 'error',
            error: msg.error || 'SERVER_BAD_CONTENT',
            speed: ''
          });
        }
        return;
      }

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
      setTimeout(processNextQueuedNativeDownload, 50);
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
// 2b. Stream Relay — Chrome fetches, native writes
// ==========================================
// TikTok-style CDNs block non-browser TLS fingerprints, so the native host's
// own requests receive an HTML challenge page even with perfect cookies. For
// those streams the service worker fetches with Chrome's real network stack
// (cookies + TLS + everything) and pipes the bytes to the host in base64
// chunks; the host assembles the file like any native download. Result: no
// chrome://downloads entry — the download is fully owned by the extension.
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
  if (b >= 1024 * 1024) return (b / (1024 * 1024)).toFixed(1).replace(/\.0$/, '') + ' MB';
  if (b >= 1024) return Math.round(b / 1024) + ' KB';
  return b + ' B';
}

function startStreamRelayDownload(downloadParams, callback) {
  // Same availability guard as the native engine: no host, no relay.
  if (nativeProbeSettled && !nativeHelperAvailable) return false;
  const port = getOrCreateNativePort();
  if (!port) return false;
  let targetUrl = downloadParams.videoUrl || downloadParams.url || '';
  const effectivePage = (downloadParams.pageUrl && !downloadParams.pageUrl.startsWith('chrome-extension:') && !downloadParams.pageUrl.startsWith('about:'))
    ? downloadParams.pageUrl
    : (downloadParams.referrer && !downloadParams.referrer.startsWith('chrome-extension:')
        ? downloadParams.referrer
        : currentActiveTabUrl);
  const resolvedTarget = resolveRealStreamForDownload(targetUrl, effectivePage, downloadParams.tabId);
  if (resolvedTarget && resolvedTarget !== targetUrl) {
    targetUrl = resolvedTarget;
    downloadParams.url = resolvedTarget;
    downloadParams.videoUrl = resolvedTarget;
  }
  if (!targetUrl || !/^https?:\/\//i.test(targetUrl) || isBogusStreamUrl(targetUrl, effectivePage)) {
    console.warn('[Savior] Stream Relay rejected bogus or non-stream URL:', targetUrl);
    return false;
  }
  // Playlists need FFmpeg to demux — relaying one would save the playlist
  // text as the output file. Those keep their existing fallback path.
  if (/\.m3u8(\?|$)|\.mpd(\?|$)|format=m3u8|type=m3u8/i.test(targetUrl)) return false;
  // Never run two engines on one video: if any task (browser download
  // included) is already pulling this URL, let the caller fall through
  // instead of stacking a relay next to it.
  if (downloadParams.taskId === undefined && hasActiveTaskForUrl(targetUrl)) return false;

  const fakeId = downloadParams.taskId || ++fakeIdCounter;
  const safeFilename = (downloadParams.filename || 'video.mp4').replace(/[<>:"/\\|?*]/g, '_');
  const mediaType = (downloadParams.convertToMp3 || downloadParams.soundOnly) ? 'audio' : 'video';
  const resolvedPageUrl = downloadParams.pageUrl || downloadParams.referrer || currentActiveTabUrl || '';

  const task = {
    id: fakeId,
    title: safeFilename.replace(/\.[^.]+$/, ''),
    filename: safeFilename,
    url: targetUrl,
    videoUrl: targetUrl,
    audioUrl: downloadParams.audioUrl || '',
    referer: downloadParams.referrer || resolvedPageUrl,
    pageUrl: resolvedPageUrl,
    outputDir: downloadParams.outputDir || configuredDownloadDir || '',
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
    id: fakeId, title: task.title, filename: safeFilename, url: targetUrl,
    videoUrl: targetUrl, audioUrl: task.audioUrl, referer: task.referer,
    pageUrl: resolvedPageUrl, outputDir: task.outputDir, quality: task.quality,
    soundOnly: false, type: mediaType, state: 'downloading',
    percent: '1%', speed: task.speed, size: '0 B', startTime: task.startTime
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
      // A slot opened — wake the pump immediately (no polling delay).
      if (task._windowResolve) { try { task._windowResolve(); } catch (_) {} }
      return;
    }
    if (msg.action === 'progress') {
      const now = Date.now();
      if (msg.percent && msg.percent.includes('%')) setActionBadge(msg.percent, '#10b981');
      if (now - lastStorageUpdate > 400) {
        lastStorageUpdate = now;
        updateDownloadHistory({ id: fakeId, percent: msg.percent || '', speed: msg.speed || '', size: msg.size || '' });
      }
      broadcastTaskEvent({ action: 'nativeProgress', taskId: fakeId, percent: msg.percent || '', speed: msg.speed || '', size: msg.size || '' });
      return;
    }
    if (msg.action === 'complete') {
      task.complete = true;
      task.state = 'completed';
      activeDownloads.delete(fakeId);
      port.onMessage.removeListener(messageHandler);
      updateDownloadHistory({
        id: fakeId, state: 'completed', percent: '100%', speed: 'Hoàn thành', endTime: Date.now(),
        outputPath: msg.downloadsDir && msg.outputFile ? `${msg.downloadsDir}${msg.downloadsDir.includes('\\') ? '\\' : '/'}${msg.outputFile}` : (msg.outputFile || safeFilename),
        outputFile: msg.outputFile || safeFilename
      });
      setActionBadge('✓', '#10b981');
      setTimeout(() => { if (activeDownloads.size === 0) setActionBadge(''); }, 4000);
      broadcastTaskEvent({ action: 'nativeComplete', taskId: fakeId, outputFile: msg.outputFile || safeFilename });
      setTimeout(processNextQueuedNativeDownload, 50);
      return;
    }
    if (msg.action === 'cancelled') {
      activeDownloads.delete(fakeId);
      port.onMessage.removeListener(messageHandler);
      if (!purgedTaskIds.has(String(fakeId))) {
        updateDownloadHistory({ id: fakeId, state: 'canceled', speed: 'Đã hủy', error: 'Người dùng đã hủy' });
      }
      broadcastTaskEvent({ action: 'nativeCanceled', taskId: fakeId });
      setTimeout(processNextQueuedNativeDownload, 50);
      return;
    }
    if (msg.action === 'error') {
      abortCtrl.abort();
      port.onMessage.removeListener(messageHandler);
      activeDownloads.delete(fakeId);
      const opts = task.params;
      if (isSessionProtectedStream(opts) && !opts._relayFailed) {
        // Relay failed (HTML challenge / HTTP error): last resort is the
        // Chrome session download, which still lands in the manager.
        opts._relayFailed = true;
        startCocCocSessionDownload(opts);
      } else if (!opts._relayFailed && startBrowserDownload(opts)) {
        opts._relayFailed = true; // relay failed → plain Chrome download as last resort
      } else {
        updateDownloadHistory({ id: fakeId, state: 'error', error: msg.error || 'SERVER_BAD_CONTENT', speed: '' });
        setActionBadge('!', '#ef4444');
        broadcastTaskEvent({ action: 'nativeError', taskId: fakeId, error: msg.error || '' });
      }
      setTimeout(processNextQueuedNativeDownload, 50);
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
    // Throughput: single-stream relaying measured ~1 MB/s — the CDN will
    // happily serve more. Batch reads into 512KB payloads, keep 6 in flight,
    // wake the pump on host acks, and when the CDN honours Range requests
    // fan the transfer out over parallel workers (multi-threaded download
    // through Chrome's network stack, host writes by offset).
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
      updateDownloadHistory({ id: fakeId, percent: pct, speed: 'Đang tải qua Chrome...', size: total > 0 ? `${formatRelayBytes(bytesRelayed)} / ${formatRelayBytes(total)}` : formatRelayBytes(bytesRelayed) });
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
    // Drain one response body: batch it and post chunks tagged with their
    // absolute file offset so parallel workers may land out of order.
    const pumpBody = async (body, fileOffset) => {
      const reader = body.getReader();
      let batch = new Uint8Array(BATCH);
      let batchLen = 0;
      let pos = fileOffset;
      const flush = () => {
        if (batchLen === 0) return;
        seq++;
        task._inFlight++;
        port.postMessage({ action: 'streamChunk', taskId: fakeId, seq, offset: pos, data: uint8ToBase64(batch.subarray(0, batchLen)), total });
        bytesRelayed += batchLen;
        pos += batchLen;
        batchLen = 0;
      };
      for (;;) {
        if (abortCtrl.signal.aborted) return;
        if (task._inFlight >= WINDOW) { await awaitWindowSlot(); continue; }
        const { done, value } = await reader.read();
        if (done) { flush(); return; }
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

      const isCdnStream = /tiktokcdn\.com|byteoversea\.com|ibytedtos\.com|akamaized\.net|fbcdn\.net|googlevideo\.com/i.test(targetUrl);
      const fetchCreds = isCdnStream ? 'omit' : 'include'; // Uses credentials: 'include' for same-origin session streams

      const fetchWithTimeout = async (url, opts = {}, timeoutMs = 15000) => {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(new Error('CONNECT_TIMEOUT')), timeoutMs);
        const parentSignal = opts.signal;
        const onParentAbort = () => ctrl.abort(parentSignal.reason);
        if (parentSignal) {
          if (parentSignal.aborted) {
            clearTimeout(timer);
            throw parentSignal.reason || new Error('Aborted');
          }
          parentSignal.addEventListener('abort', onParentAbort, { once: true });
        }
        try {
          return await fetch(url, { ...opts, signal: ctrl.signal });
        } finally {
          clearTimeout(timer);
          if (parentSignal) parentSignal.removeEventListener('abort', onParentAbort);
        }
      };

      // Probe with a 1-byte Range request: cheap, and it reveals both the
      // exact total size (content-range) and whether the CDN serves partial
      // content — the gate for the multi-threaded path below.
      let rangeCapable = false;
      let probeOk = false;
      const probe = await fetchWithTimeout(targetUrl, { credentials: fetchCreds, headers: { ...headers, Range: 'bytes=0-0' }, signal: abortCtrl.signal }, 12000);
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
        // Multi-threaded: WORKERS parallel Range fetches, each pumping into
        // its own slice of the file. One abort signal kills them all on Hủy.
        const slice = Math.ceil(total / WORKERS);
        const jobs = [];
        for (let w = 0; w < WORKERS; w++) {
          const start = w * slice;
          if (start >= total) break;
          const end = Math.min(total - 1, start + slice - 1);
          jobs.push((async () => {
            const r = await fetchWithTimeout(targetUrl, { credentials: fetchCreds, headers: { ...headers, Range: `bytes=${start}-${end}` }, signal: abortCtrl.signal }, 25000);
            if (!r.ok && r.status !== 206) throw new Error('HTTP ' + r.status);
            await pumpBody(r.body, start);
          })());
        }
        await Promise.all(jobs);
        port.postMessage({ action: 'streamEnd', taskId: fakeId });
        return;
      }

      // Single stream: small file, or the CDN ignores Range headers.
      const resp = await fetchWithTimeout(targetUrl, { credentials: fetchCreds, headers, signal: abortCtrl.signal }, 25000);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const ctype = String(resp.headers.get('content-type') || '').toLowerCase();
      if (ctype.includes('text/html')) throw new Error('STREAM_HTML_RESPONSE');
      total = Number(resp.headers.get('content-length')) || total;
      await pumpBody(resp.body, 0);
      port.postMessage({ action: 'streamEnd', taskId: fakeId });
    } catch (err) {
      if (abortCtrl.signal.aborted) return;
      try { port.postMessage({ action: 'streamAbort', taskId: fakeId }); } catch (_) {}
      port.onMessage.removeListener(messageHandler);
      if (activeDownloads.has(fakeId)) {
        activeDownloads.delete(fakeId);
        const opts = task.params;
        if (isSessionProtectedStream(opts) && !opts._relayFailed && !isBogusStreamUrl(opts.url || opts.videoUrl, opts.pageUrl)) {
          opts._relayFailed = true;
          startCocCocSessionDownload(opts);
        } else {
          const userErr = err && err.message === 'CONNECT_TIMEOUT'
            ? 'Kết nối luồng tải bị quá thời gian (Timeout). Vui lòng thử lại sau khi video đã phát.'
            : (err && err.message === 'STREAM_HTML_RESPONSE'
                ? 'Liên kết không phải luồng video hợp lệ. Vui lòng bấm phát video để Vidown nhận diện.'
                : String(err && (err.message || err) || 'Lỗi kết nối'));
          updateDownloadHistory({ id: fakeId, state: 'error', error: userErr, speed: '' });
          broadcastTaskEvent({ action: 'nativeError', taskId: fakeId, error: userErr });
          setActionBadge('!', '#ef4444');
        }
      }
    }
  })();

  if (typeof callback === 'function') callback(fakeId);
  return true;
}

// ==========================================
// 3. Downloads Manager IPC Message Routing
// ==========================================

const cachedContentCss = {};
try {
  fetch(chrome.runtime.getURL('css/content-script.css'))
    .then(r => r.text())
    .then(css => { if (css) cachedContentCss['css/content-script.css'] = css; })
    .catch(() => {});
} catch (_) {}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const action = req ? (req.action || req.type) : null;
  if (!req || !action) return false;

  switch (action) {
    case 'download': {
      // In Savior content-script.js, EE.emit("download", { method: "download", params: o })
      // sends { type: "download", data: { method: "download", params: o } }
      const params = (req.data && req.data.params) ? req.data.params : (req.data || req);
      const isAudio = Boolean(params.soundOnly || params.quality === 'audio' || params.type === 'audio');
      const ext = isAudio ? 'mp3' : (params.ext || 'mp4');
      const baseTitle = (params.title || params.filename || 'video')
        .replace(/\.[a-zA-Z0-9]+$/, '')
        .replace(/[<>:"/\\|?*]/g, '_')
        .trim();
      const safeFilename = `${baseTitle}.${ext}`;

      const rawUrl = params.url || params.videoUrl || '';
      if (isUrlRecentlyRequested(rawUrl)) {
        console.log('[Savior] Duplicate download action suppressed in-flight:', rawUrl);
        sendResponse({ success: true, duplicate: true });
        return false;
      }

      const opts = {
        url: rawUrl,
        videoUrl: params.videoUrl || params.url || '',
        audioUrl: params.audioUrl || '',
        filename: safeFilename,
        title: baseTitle,
        referrer: params.referrer || (sender && sender.tab && sender.tab.url) || '',
        pageUrl: (sender && sender.tab && sender.tab.url) || params.referrer || '',
        quality: params.quality || 'best',
        soundOnly: isAudio,
        tabId: (sender && sender.tab && sender.tab.id) || undefined
      };
      let started = false;
      if (isSessionProtectedStream(opts) && nativeHelperAvailable && !opts._relayFailed && !opts.audioUrl && !opts.convertToMp3 && !opts.soundOnly) {
        started = startStreamRelayDownload(opts);
      }
      if (!started) {
        started = startNativeDownload(opts);
      }
      if (!started) {
        if (isSessionProtectedStream(opts)) startCocCocSessionDownload(opts);
        else if (!opts._relayFailed && startStreamRelayDownload(opts)) { opts._relayFailed = true; }
        else startBrowserDownload(opts);
      }
      sendResponse({ success: !!started });
      return false;
    }
    case 'getContentCss': {
      const p = req.path || 'css/content-script.css';
      if (cachedContentCss[p]) {
        sendResponse({ success: true, css: cachedContentCss[p] });
        return false;
      }
      // storage.session cache survives service-worker restarts, so the 1.1MB
      // bundle CSS is read from disk at most once per browser session.
      chrome.storage.session.get([`cssCache:${p}`]).then(stored => {
        const hit = stored && stored[`cssCache:${p}`];
        if (hit) {
          cachedContentCss[p] = hit;
          sendResponse({ success: true, css: hit });
          return;
        }
        fetch(chrome.runtime.getURL(p))
          .then(r => r.text())
          .then(css => {
            cachedContentCss[p] = css;
            chrome.storage.session.set({ [`cssCache:${p}`]: css }).catch(() => {});
            sendResponse({ success: true, css });
          })
          .catch(() => sendResponse({ success: false, css: '' }));
      }).catch(() => {
        fetch(chrome.runtime.getURL(p))
          .then(r => r.text())
          .then(css => {
            cachedContentCss[p] = css;
            sendResponse({ success: true, css });
          })
          .catch(() => sendResponse({ success: false, css: '' }));
      });
      return true;
    }

    case 'openDownloadsManager':
    case 'openDownloadsPage': {
      // Focus the existing manager tab instead of stacking duplicates.
      openOrFocusDownloadsManager();
      sendResponse({ success: true });
      return false;
    }

    case 'openDownloadsFolder':
    case 'openFolder': {
      if (nativeHelperAvailable && getOrCreateNativePort()) {
        const port = getOrCreateNativePort();
        port.postMessage({
          action: 'openFolder',
          path: req.path,
          downloadDir: configuredDownloadDir
        });
        sendResponse({ success: true });
      } else if (chrome.downloads && typeof chrome.downloads.showDefaultFolder === 'function') {
        try {
          chrome.downloads.showDefaultFolder();
          sendResponse({ success: true });
        } catch (_) {
          sendResponse({ success: false, error: 'Cannot open folder' });
        }
      } else {
        sendResponse({ success: false, error: 'Native helper not available' });
      }
      return false;
    }

    case 'cancelDownload': {
      const targetId = req.taskId || req.id;
      const strTargetId = String(targetId || '');
      const chromeId = req.chromeId ? String(req.chromeId) : '';

      // 1. Remove from queued tasks if it hasn't started yet
      const qIdx = nativeDownloadQueue.findIndex(q => q.params && (String(q.params.taskId) === strTargetId || String(q.params.id) === strTargetId));
      if (qIdx !== -1) {
        nativeDownloadQueue.splice(qIdx, 1);
        if (targetId) {
          activeDownloads.delete(targetId);
          activeDownloads.delete(strTargetId);
          updateDownloadHistory({ id: targetId, state: 'canceled', error: 'Người dùng đã hủy', speed: 'Đã hủy' });
          broadcastTaskEvent({ action: 'nativeCanceled', taskId: targetId });
        }
        if (activeDownloads.size === 0) setActionBadge('');
        sendResponse({ success: true, queuedOnly: true });
        return false;
      }

      // 2. Cancel and remove from active downloads
      const keysToCheck = [targetId, strTargetId, chromeId, Number(targetId), Number(chromeId)].filter(k => k !== '' && k !== undefined && !isNaN(k) || typeof k === 'string');
      let hadNativeJob = false;
      // One video dies as ONE download: remember the cancelled task's URLs so
      // the sweep below can kill sibling tasks — e.g. a stray Chrome download
      // a fallback started under a different id for the very same file.
      const siblingUrls = new Set();
      const collectTaskUrls = (t) => {
        if (!t) return;
        for (const u of [t.url, t.videoUrl, t.audioUrl]) {
          const s = String(u || '');
          if (/^https?:\/\//i.test(s)) siblingUrls.add(s);
        }
      };
      const cancelSiblingsByUrl = (urls) => {
        if (!urls || urls.size === 0) return;
        let nativeHit = false;
        for (const [k, t] of Array.from(activeDownloads.entries())) {
          if (!t) continue;
          const shares = [t.url, t.videoUrl, t.audioUrl].some(u => urls.has(String(u || '')));
          if (!shares) continue;
          activeDownloads.delete(k);
          if (t.abortController) { try { t.abortController.abort(); } catch (_) {} }
          if (t.isBrowserDownload) { try { _origCancel(k); } catch (_) {} }
          else nativeHit = true;
        }
        if (nativeHit) {
          const port = getOrCreateNativePort();
          if (port) port.postMessage({ action: 'cancel', taskId: targetId });
        }
        if (activeDownloads.size === 0) setActionBadge('');
      };
      for (const k of keysToCheck) {
        const t = activeDownloads.get(k);
        if (t) collectTaskUrls(t);
        if (activeDownloads.has(k)) {
          activeDownloads.delete(k);
          // Stream-relay tasks: stop the Chrome fetch side too.
          if (t && t.abortController) {
            try { t.abortController.abort(); } catch (_) {}
          }
          if (t && t.isBrowserDownload) {
            try { _origCancel(k); } catch (_) {}
          } else {
            hadNativeJob = true;
          }
        }
      }

      // 2b. Kill every remaining task sharing a URL with the cancelled one —
      // pressing Hủy must never leave half the video still downloading.
      cancelSiblingsByUrl(siblingUrls);

      // The card's own task may already be gone (error/completed) while a
      // sibling engine still runs: recover its URLs from history, async.
      if (siblingUrls.size === 0 && strTargetId) {
        const strId = strTargetId;
        chrome.storage.local.get(['downloadHistory']).then(result => {
          const history = Array.isArray(result && result.downloadHistory) ? result.downloadHistory : [];
          const entry = history.find(h => String(h.id) === strId);
          if (!entry) return;
          const urls = new Set();
          for (const u of [entry.url, entry.videoUrl, entry.audioUrl]) {
            const s = String(u || '');
            if (/^https?:\/\//i.test(s)) urls.add(s);
          }
          cancelSiblingsByUrl(urls);
        }).catch(() => {});
      }

      if (hadNativeJob) {
        const port = getOrCreateNativePort();
        if (port) port.postMessage({ action: 'cancel', taskId: targetId });
      }

      if (targetId) {
        updateDownloadHistory({ id: targetId, state: 'canceled', error: 'Người dùng đã hủy', speed: 'Đã hủy' });
        broadcastTaskEvent({ action: 'nativeCanceled', taskId: targetId });
      }

      if (activeDownloads.size === 0) setActionBadge('');

      // 3. Immediately unblock the next queued download!
      setTimeout(processNextQueuedNativeDownload, 50);

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
        const onFolderResult = (msg) => {
          if (msg && msg.action === 'browseFolderResult' && !responded) {
            responded = true;
            try { port.onMessage.removeListener(onFolderResult); } catch (_) {}
            try { sendResponse({ success: !msg.canceled, path: msg.path, canceled: msg.canceled }); } catch (_) {}
          }
        };
        port.onMessage.addListener(onFolderResult);
        port.postMessage({ action: 'browseFolder' });
        const keepChannelOpen = true;
        return keepChannelOpen;
      } else {
        sendResponse({ success: false, error: 'Native helper not available' });
        return false;
      }
    }

    case 'openFile': {
      const cId = Number(req.chromeId);
      const reqId = req.id || req.taskId || null;
      const port = getOrCreateNativePort();

      // Prioritize Native Host companion: launches the media file directly on the OS
      // via default system player (cmd.exe /c start or macOS open), eliminating Chrome's
      // security prompt ("Allow VidManager to open [file]?").
      if (port) {
        let targetPath = req.path || '';
        const targetFilename = req.filename || '';

        if (!targetPath && cId && chrome.downloads && chrome.downloads.search) {
          try {
            chrome.downloads.search({ id: cId }, (results) => {
              const fullPath = results && results[0] && results[0].filename;
              if (port) {
                port.postMessage({
                  action: 'openFile',
                  id: reqId,
                  taskId: reqId,
                  filename: targetFilename || (fullPath ? fullPath.split(/[\\/]/).pop() : ''),
                  path: fullPath || targetPath,
                  downloadDir: configuredDownloadDir
                });
              }
            });
          } catch (_) {}
        } else {
          port.postMessage({
            action: 'openFile',
            id: reqId,
            taskId: reqId,
            filename: targetFilename,
            path: targetPath,
            downloadDir: configuredDownloadDir
          });
        }
      } else if (cId && chrome.downloads && chrome.downloads.open) {
        // Fallback when Native Helper is not installed: browser Downloads API (triggers browser prompt)
        try {
          chrome.downloads.open(cId, () => {});
        } catch (_) {}
      }
      sendResponse({ success: true });
      return false;
    }

    case 'showInFolder': {
      const cId = Number(req.chromeId);
      if (cId && chrome.downloads && chrome.downloads.show) {
        try {
          chrome.downloads.show(cId);
          sendResponse({ success: true });
          return false;
        } catch (_) {}
      }
      const port = getOrCreateNativePort();
      if (port) {
        if (cId && chrome.downloads && chrome.downloads.search) {
          chrome.downloads.search({ id: cId }, (results) => {
            const realPath = (results && results[0] && results[0].filename) ? results[0].filename : req.path;
            port.postMessage({
              action: 'showInFolder',
              path: realPath || req.path,
              downloadDir: configuredDownloadDir
            });
          });
        } else {
          port.postMessage({
            action: 'showInFolder',
            path: req.path,
            downloadDir: configuredDownloadDir
          });
        }
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false });
      }
      return false;
    }

    case 'clearHistory': {
      for (const [k, t] of activeDownloads.entries()) {
        purgedTaskIds.add(String(k));
        if (t && t.id) purgedTaskIds.add(String(t.id));
        if (t && t.chromeId) purgedTaskIds.add(String(t.chromeId));
        if (t && t.isBrowserDownload) {
          try { _origCancel(k, () => {}); } catch (_) {}
          try { _origErase({ id: Number(k) }, () => {}); } catch (_) {}
        }
      }
      activeDownloads.clear();
      setActionBadge('');
      chrome.storage.local.set({ downloadHistory: [] });
      try {
        if (chrome.downloads && chrome.downloads.search) {
          chrome.downloads.search({}, (items) => {
            const myId = (chrome.runtime && chrome.runtime.id) ? chrome.runtime.id : '';
            if (items && Array.isArray(items)) {
              for (const item of items) {
                if (myId && item.byExtensionId === myId) {
                  try { _origErase({ id: item.id }, () => {}); } catch (_) {}
                }
              }
            }
          });
        }
      } catch (_) {}
      sendResponse({ success: true });
      return false;
    }

    case 'removeDownload': {
      const targetId = String(req.id || req.taskId || '');
      const chromeId = req.chromeId ? String(req.chromeId) : '';
      if (targetId) purgedTaskIds.add(targetId);
      if (chromeId) purgedTaskIds.add(chromeId);

      // 1. Remove from queued tasks if waiting
      const qIdx = nativeDownloadQueue.findIndex(q => q.params && (String(q.params.taskId) === targetId || String(q.params.id) === targetId));
      if (qIdx !== -1) {
        nativeDownloadQueue.splice(qIdx, 1);
      }

      // 2. Check all active keys (string & numeric) and cancel if running
      let hadNativeJob = false;
      for (const [k, t] of Array.from(activeDownloads.entries())) {
        const matchesTarget = targetId && (String(k) === targetId || (t && String(t.id) === targetId));
        const matchesChrome = chromeId && (String(k) === chromeId || (t && String(t.chromeId) === chromeId));
        if (matchesTarget || matchesChrome) {
          activeDownloads.delete(k);
          if (t && (t.isBrowserDownload || t.chromeId)) {
            const cId = Number((t && t.chromeId) || k);
            if (!isNaN(cId) && cId > 0) {
              try {
                _origCancel(cId, () => {
                  try { _origErase({ id: cId }, () => {}); } catch (_) {}
                });
              } catch (_) {}
            }
          } else {
            hadNativeJob = true;
          }
        }
      }

      if (hadNativeJob) {
        const port = getOrCreateNativePort();
        if (port) port.postMessage({ action: 'cancel', taskId: targetId });
      }

      // Immediately trigger next download in queue
      setTimeout(processNextQueuedNativeDownload, 50);

      // Erase from browser download shelf if numeric chromeId exists
      const numChromeId = Number(chromeId) || Number(targetId);
      if (numChromeId && !isNaN(numChromeId)) {
        try {
          _origCancel(numChromeId, () => {
            try { _origErase({ id: numChromeId }, () => {}); } catch (_) {}
          });
          try { _origErase({ id: numChromeId }, () => {}); } catch (_) {}
        } catch (_) {}
      }

      chrome.storage.local.get(['downloadHistory'], (res) => {
        const history = Array.isArray(res.downloadHistory) ? res.downloadHistory : [];
        const updated = history.filter(item => {
          const itId = String(item.id || '');
          const itChromeId = item.chromeId ? String(item.chromeId) : '';
          if (targetId && (itId === targetId || itChromeId === targetId)) return false;
          if (chromeId && (itId === chromeId || itChromeId === chromeId)) return false;
          return String(item.id || '') !== targetId && String(item.chromeId || '') !== targetId;
        });
        chrome.storage.local.set({ downloadHistory: updated });
      });
      sendResponse({ success: true });
      return false;
    }

    case 'downloadNative': {
      const isAudio = Boolean(req.soundOnly || req.quality === 'audio');
      const ext = isAudio ? 'mp3' : 'mp4';
      const baseTitle = (req.title || 'video')
        .replace(/\.[a-zA-Z0-9]+$/, '')
        .replace(/[<>:"/\\|?*]/g, '_')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 150)
        .replace(/[\s.]+$/, '');
      const opts = {
        url: req.videoUrl || req.url,
        videoUrl: req.videoUrl || req.url,
        audioUrl: req.audioUrl,
        filename: `${baseTitle || 'video'}.${ext}`,
        referrer: req.referer || req.pageUrl,
        pageUrl: req.pageUrl,
        taskId: req.taskId,
        outputDir: req.outputDir || configuredDownloadDir || '',
        quality: req.quality || (isAudio ? 'audio' : 'best'),
        soundOnly: isAudio
      };
      // Prioritize Stream Relay for session-protected streams (TikTok/Douyin) so Chrome fetches
      // and Native Helper writes directly to disk, completely bypassing Chrome's Save As prompt!
      const started = nativeHelperAvailable
        ? startNativeDownload(opts)
        : (isSessionProtectedStream(opts) ? startCocCocSessionDownload(opts) : startBrowserDownload(opts));
      sendResponse({ success: true, started: !!started });
      return false;
    }

    case 'mediaDetected': {
      const tabId = (sender && sender.tab && sender.tab.id) || -1;
      const pageUrl = req.pageUrl || (sender && sender.tab && sender.tab.url) || '';
      if (req.url) {
        registerSniffedStream(tabId, pageUrl, req.url, req.format, req.title);
        // Relay to content-script.js on top frame (frameId: 0) so the floating bar button
        // is instantly enabled and populated even when the stream was sniffed in an iframe
        if (tabId > 0 && typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.sendMessage) {
          const ext = (req.format === 'M3U8') ? 'm3u8' : ((req.format === 'MPD') ? 'mpd' : 'mp4');
          let urlObj;
          try { urlObj = new URL(req.url); } catch (_) { urlObj = { protocol: 'https:', host: '', pathname: '' }; }
          const title = (req.title || 'Video').trim();
          const mediaItem = req.mediaItem || {
            url: req.url,
            protocol: urlObj.protocol || 'https:',
            host: urlObj.host || '',
            pathname: urlObj.pathname || '',
            filename: title,
            title: title,
            ext: ext,
            exts: [ext],
            type: 'video',
            isPlaylist: Boolean(req.isPlaylist)
          };
          const p = chrome.tabs.sendMessage(tabId, {
            type: 'request.matched',
            name: 'default',
            result: [mediaItem]
          }, { frameId: 0 });
          if (p && typeof p.catch === 'function') p.catch(() => {});
        }
      }
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
      sendResponse({ status: 'ok', version: chrome.runtime?.getManifest?.()?.version || '3.0.3' });
      return false;
    }

    case 'popupOpened': {
      sendResponse({ success: true, timestamp: Date.now() });
      return false;
    }

    case 'reloadExtension': {
      sendResponse({ status: 'reloading' });
      setTimeout(() => chrome.runtime.reload(), 100);
      return false;
    }

    default:
      if (typeof sendResponse === 'function') {
        sendResponse({ success: false, error: `Unhandled action: ${req.action}` });
      }
      return false;
  }
});

function isTrustedExternalOrigin(origin) {
  if (!origin || typeof origin !== 'string') return false;
  try {
    const parsed = new URL(origin);
    if (parsed.protocol === 'chrome-extension:' && chrome.runtime && chrome.runtime.id && parsed.hostname === chrome.runtime.id) {
      return true;
    }
    if (parsed.protocol === 'https:') {
      const host = parsed.hostname.toLowerCase();
      if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
        return true;
      }
    }
  } catch (_) {}
  return false;
}

function isTrustedDownloadUrl(urlStr) {
  if (!urlStr || typeof urlStr !== 'string') return false;
  try {
    const parsed = new URL(urlStr);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
    const host = parsed.hostname.toLowerCase();
    if (!host || !host.includes('.')) return false;
    return host === 'youtube.com' || host.endsWith('.youtube.com') ||
           host === 'googlevideo.com' || host.endsWith('.googlevideo.com') ||
           host.endsWith('.ytimg.com');
  } catch (_) {}
  return false;
}

// Listener for external web pages (e.g. YouTube externally_connectable)
if (chrome.runtime.onMessageExternal) {
  chrome.runtime.onMessageExternal.addListener((req, sender, sendResponse) => {
    if (!req) return false;

    // Validate sender origin against trusted origins (Task 2: Blocker 2)
    const origin = sender && (sender.origin || (sender.url && new URL(sender.url).origin));
    if (!origin || !isTrustedExternalOrigin(origin)) {
      sendResponse({ error: 'Unauthorized sender origin' });
      return false;
    }

    if (req.action === 'ping' || req.type === 'ping') {
      sendResponse({ status: 'ok', version: chrome.runtime?.getManifest?.()?.version || '3.0.3' });
      return false;
    }

    // reloadExtension capability removed from external callers
    if (req.action === 'reloadExtension') {
      sendResponse({ success: false, error: 'Unauthorized action: reloadExtension not permitted from external callers' });
      return false;
    }

    if (req.action === 'probeNativeHelper') {
      try {
        chrome.runtime.sendNativeMessage(NATIVE_HOST, { action: 'ping' }, (res) => {
          const err = chrome.runtime.lastError ? chrome.runtime.lastError.message : null;
          sendResponse({ response: res, error: err });
        });
      } catch (e) {
        sendResponse({ error: e.message });
      }
      return true;
    }

    if (req.action === 'downloadNative' || req.type === 'downloadNative') {
      const targetUrl = req.videoUrl || req.url;
      if (!isTrustedDownloadUrl(targetUrl)) {
        sendResponse({ success: false, error: 'Invalid or untrusted download URL' });
        return false;
      }
      if (req.audioUrl && !isTrustedDownloadUrl(req.audioUrl)) {
        sendResponse({ success: false, error: 'Invalid or untrusted audio URL' });
        return false;
      }

      let started = false;
      if (isSessionProtectedStream(req) && nativeHelperAvailable && !req._relayFailed && !req.audioUrl && !req.convertToMp3 && !req.soundOnly) {
        started = startStreamRelayDownload(req);
      }
      if (!started) {
        started = startNativeDownload(req);
      }
      if (!started) {
        if (isSessionProtectedStream(req)) startCocCocSessionDownload(req);
        else if (!req._relayFailed && startStreamRelayDownload(req)) { req._relayFailed = true; }
        else startBrowserDownload(req);
      }
      sendResponse({ success: !!started });
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

  if (options) {
    const rawReqUrl = options.videoUrl || options.url || '';
    const effectivePage = (options.pageUrl && !options.pageUrl.startsWith('chrome-extension:') && !options.pageUrl.startsWith('about:'))
      ? options.pageUrl
      : (options.referrer && !options.referrer.startsWith('chrome-extension:')
          ? options.referrer
          : currentActiveTabUrl);
    const realStream = resolveRealStreamForDownload(rawReqUrl, effectivePage, options.tabId);
    if (realStream && realStream !== rawReqUrl) {
      console.log(`[Savior] Intercepted chrome.downloads.download: swapped placeholder "${rawReqUrl}" with "${realStream}"`);
      options.url = realStream;
      options.videoUrl = realStream;
      options.isConversionStream = true;
    }
  }

  // Ignore trick or duplicate download calls if already active
  // (matches the stream against active tasks' video AND audio URLs — the
  // bundle fires audio-only follow-up requests after DASH downloads)
  const reqUrl = options ? (options.videoUrl || options.url) : '';
  const effPage = options ? (options.pageUrl || options.referrer) : '';
  if (reqUrl) {
    if (isUrlRecentlyRequested(reqUrl)) {
      console.log('[Savior] Duplicate download call suppressed in-flight:', reqUrl);
      if (typeof callback === 'function') callback(null);
      return;
    }
    for (const [id, t] of activeDownloads.entries()) {
      const tAudio = t.audioUrl || (t.params && t.params.audioUrl) || '';
      const samePageAndTitle = Boolean(
        effPage && t.pageUrl && effPage === t.pageUrl &&
        options.filename && t.filename && options.filename.toLowerCase() === t.filename.toLowerCase()
      );
      if (t.url === reqUrl || tAudio === reqUrl || (t.params && (t.params.videoUrl === reqUrl || t.params.url === reqUrl)) || samePageAndTitle) {
        console.log('[Savior] Duplicate/trick download call ignored for active task:', id);
        if (typeof callback === 'function') callback(id);
        return;
      }
    }
  }

  // Reject bogus webpage targets upfront so they never hang at 1% or save HTML
  if (!reqUrl || isBogusStreamUrl(reqUrl, effPage)) {
    console.warn('[Savior] chrome.downloads.download rejected bogus media target:', reqUrl);
    const taskId = options.taskId || `bogus_${Date.now()}`;
    const errText = 'Không tìm thấy luồng video. Vui lòng bấm phát video để Vidown nhận diện luồng tải.';
    updateDownloadHistory({
      id: taskId,
      title: options.title || options.filename || 'Video',
      filename: options.filename || 'video.mp4',
      url: reqUrl,
      pageUrl: effPage,
      type: 'video',
      state: 'error',
      error: errText,
      startTime: Date.now()
    });
    setActionBadge('!', '#ef4444');
    broadcastTaskEvent({ action: 'nativeError', taskId, error: errText });
    if (typeof callback === 'function') callback(null);
    return;
  }

  // 1. Session-protected streams (TikTok, Douyin): route directly to Stream Relay
  // so Chrome's network stack fetches the authenticated stream and Native Helper
  // writes it straight to disk — completely bypassing chrome.downloads.download
  // and eliminating Chrome's "Save As" popup!
  if (isSessionProtectedStream(options) && nativeHelperAvailable && !options._relayFailed && !options.audioUrl && !options.convertToMp3 && !options.soundOnly) {
    const relayStarted = startStreamRelayDownload(options, callback);
    if (relayStarted) return;
  }

  // 2. Prefer Native Helper whenever available so all downloads save directly to disk
  // without any Chrome Save As prompt, with real-time speed, progress, and automatic audio track muxing
  if (nativeHelperAvailable) {
    const started = startNativeDownload(options, callback);
    if (started) return;
  }

  // 2. Session-protected streams fallback when Native Helper is unavailable
  if (isSessionProtectedStream(options)) {
    return startCocCocSessionDownload(options, callback);
  }

  // 3. Fallback: relay through Chrome's network stack (no browser download
  //    entry), and only then the standard Chrome download engine.
  if (!options._relayFailed && startStreamRelayDownload(options, callback)) {
    options._relayFailed = true;
    return;
  }
  startBrowserDownload(options, callback);
};

// Polyfill chrome.downloads.play
chrome.downloads.play = function(downloadId) {
  console.log('[Savior] chrome.downloads.play invoked for id:', downloadId);
  const task = activeDownloads.get(downloadId);
  const port = getOrCreateNativePort();
  if (port) {
    if (task && (task.filename || task.outputPath || task.outputFile)) {
      port.postMessage({
        action: 'openFile',
        filename: task.filename || task.outputPath || task.outputFile,
        downloadDir: configuredDownloadDir
      });
    } else {
      chrome.storage.local.get(['downloadHistory'], (res) => {
        const hist = res.downloadHistory || [];
        const found = hist.find(h => h.id === downloadId || h.chromeId === downloadId);
        if (found && (found.outputPath || found.outputFile || found.filename)) {
          port.postMessage({
            action: 'openFile',
            path: found.outputPath || found.outputFile || found.filename,
            downloadDir: configuredDownloadDir
          });
        } else {
          chrome.downloads.search({ id: downloadId }, (results) => {
            if (results && results[0] && results[0].filename) {
              port.postMessage({
                action: 'openFile',
                path: results[0].filename,
                downloadDir: configuredDownloadDir
              });
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
    if (port) port.postMessage({ action: 'cancel', taskId: targetId });
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
// 5. Sniffed-stream lifecycle cleanup
// (The experimental Universal Media Core webRequest observer was removed —
// see the note at the top of this file. Media sniffing now flows exclusively
// through downloads-nav.js's Performance API sniffer → mediaDetected.)
// ==========================================

// Clear per-tab sniffed streams on tab close or top-frame navigation so the
// resolver maps cannot outlive their page.
if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.onRemoved) {
  chrome.tabs.onRemoved.addListener((tabId) => {
    try { sniffedStreamsByTab.delete(tabId); } catch (_) {}
  });
}

if (typeof chrome !== 'undefined' && chrome.webNavigation && chrome.webNavigation.onCommitted) {
  chrome.webNavigation.onCommitted.addListener((details) => {
    if (details.frameId === 0 && details.tabId >= 0) {
      try { sniffedStreamsByTab.delete(details.tabId); } catch (_) {}
    }
  });
}

// ==========================================
// 6. Load Core Background Script
// ==========================================
importScripts("background.js");
