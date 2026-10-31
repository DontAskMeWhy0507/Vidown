/**
 * Vidown Service Worker (Manifest V3)
 * 
 * 100% Clean, unminified, modular background controller for Vidown.
 * Replaces the legacy minified Savior bundles (background.js & common.js).
 */

// Load clean core modules into worker scope
try {
  importScripts(
    'core/media_types.js',
    'core/media_registry.js',
    'core/magic_probe.js',
    'core/manifest_parse.js',
    'core/network_observer.js'
  );
} catch (e) {
  console.error('[Vidown ServiceWorker] Failed to importScripts:', e);
}

const MediaTypes = self.UniversalMediaTypes;
const MediaRegistry = self.UniversalMediaRegistry;
const ManifestParser = self.UniversalManifestParser;
const MagicProbe = self.UniversalMagicProbe;
const NetworkObserver = self.UniversalNetworkObserver;

// Native helper port connection
let nativePort = null;
let nativePortActive = false;
let activeDownloads = new Map(); // downloadId -> { recordId, url, filename }

function connectNativeHost() {
  try {
    nativePort = chrome.runtime.connectNative('com.savior.helper');
    nativePortActive = true;

    nativePort.onMessage.addListener((msg) => {
      handleNativeMessage(msg);
    });

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

function sendToNativeHost(message) {
  if (!nativePortActive || !nativePort) {
    connectNativeHost();
  }
  if (nativePortActive && nativePort) {
    try {
      nativePort.postMessage(message);
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

  // Broadcast progress, complete, error to active popup and download manager tabs
  chrome.runtime.sendMessage({
    type: 'VIDOWN_NATIVE_EVENT',
    ...msg
  }).catch(() => {});
}

// Badge update helper
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

// Listen to tab events to maintain SSOT registry
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

// IPC Dispatcher: Handles messages from content scripts, popup, and download manager
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!request || !request.action) return false;

  const senderTabId = sender && sender.tab ? sender.tab.id : null;

  switch (request.action) {
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

    case 'startDownload': {
      const downloadPayload = {
        action: 'download',
        url: request.url,
        videoUrl: request.videoUrl || request.url,
        audioUrl: request.audioUrl,
        title: request.title || 'video',
        quality: request.quality || '1080p',
        referer: request.referer || request.pageUrl || '',
        pageUrl: request.pageUrl || '',
        cookie: request.cookie || ''
      };

      const nativeSent = sendToNativeHost(downloadPayload);
      if (!nativeSent) {
        // Fallback to browser downloads API if native host not running
        if (typeof chrome.downloads !== 'undefined' && request.url) {
          chrome.downloads.download({
            url: request.url,
            filename: `${request.title || 'video'}.mp4`,
            saveAs: false
          }, (downloadId) => {
            sendResponse({ success: true, fallback: true, downloadId });
          });
          return true;
        }
      }
      sendResponse({ success: true, native: nativeSent });
      return true;
    }

    case 'cancelDownload': {
      sendToNativeHost({ action: 'cancel', downloadId: request.downloadId });
      sendResponse({ success: true });
      return true;
    }

    case 'openFile': {
      sendToNativeHost({ action: 'openFile', filePath: request.filePath });
      sendResponse({ success: true });
      return true;
    }

    case 'openFolder': {
      sendToNativeHost({ action: 'openFolder', filePath: request.filePath });
      sendResponse({ success: true });
      return true;
    }

    case 'ping': {
      sendResponse({ status: 'ok', version: '2.4.65', engine: 'Vidown Clean Core' });
      return true;
    }

    default:
      return false;
  }
});

// Initialize network observer if chrome.webRequest is available
if (typeof chrome.webRequest !== 'undefined' && NetworkObserver && typeof NetworkObserver.init === 'function') {
  NetworkObserver.init({
    onMediaDetected: (tabId, mediaCandidate) => {
      if (MediaRegistry) {
        MediaRegistry.registerMedia(tabId, mediaCandidate);
        updateTabBadge(tabId);
      }
    }
  });
}

// Initial connection attempt to native helper
connectNativeHost();
