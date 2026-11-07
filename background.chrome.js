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
      removeRuleIds: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008].concat([1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025]),
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
            initiatorDomains: ['facebook.com'],
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1011,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.instagram.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.instagram.com' }
            ]
          },
          condition: {
            urlFilter: '*fbcdn.net/*',
            initiatorDomains: ['instagram.com'],
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1012,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*tiktokcdn-us.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1013,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*tiktokcdn-eu.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1014,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.douyin.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.douyin.com' }
            ]
          },
          condition: {
            urlFilter: '*douyinvod.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1015,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.douyin.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.douyin.com' }
            ]
          },
          condition: {
            urlFilter: '*zjcdn.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1016,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.douyin.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.douyin.com' }
            ]
          },
          condition: {
            urlFilter: '*bytevd.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1017,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.bilibili.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.bilibili.com' }
            ]
          },
          condition: {
            urlFilter: '*bilivideo.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1018,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.bilibili.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.bilibili.com' }
            ]
          },
          condition: {
            urlFilter: '*hdslb.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1019,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://x.com/' },
              { header: 'Origin', operation: 'set', value: 'https://x.com' }
            ]
          },
          condition: {
            urlFilter: '*twimg.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1020,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.xiaohongshu.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.xiaohongshu.com' }
            ]
          },
          condition: {
            urlFilter: '*xhscdn.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1021,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://weibo.com/' },
              { header: 'Origin', operation: 'set', value: 'https://weibo.com' }
            ]
          },
          condition: {
            urlFilter: '*weibocdn.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1022,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://vimeo.com/' },
              { header: 'Origin', operation: 'set', value: 'https://vimeo.com' }
            ]
          },
          condition: {
            urlFilter: '*vimeocdn.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1023,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://vimeo.com/' },
              { header: 'Origin', operation: 'set', value: 'https://vimeo.com' }
            ]
          },
          condition: {
            urlFilter: '*vod-progressive.akamaized.net/*',
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
        },
        {
          id: 1024,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*tiktok.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        },
        {
          id: 1025,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Referer', operation: 'set', value: 'https://www.tiktok.com/' },
              { header: 'Origin', operation: 'set', value: 'https://www.tiktok.com' }
            ]
          },
          condition: {
            urlFilter: '*tiktokv.com/*',
            resourceTypes: ['xmlhttprequest', 'media', 'other']
          }
        }
      ]
    }).catch(() => {});
  } catch (_) {}
}

setupAnti403Rules();

var DEFAULT_TEMPLATES = {
  "template-widget": "<div class=\"widget-attach hidden\">\n    <div class=\"btn-control relative\" id=\"hide-widget\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M4.80001 13.9905L4.00964 13.2001L8.20964 9.00013L4.00964 4.80013L4.80001 4.00977L9.00001 8.20977L13.2 4.00977L13.9904 4.80013L9.79038 9.00013L13.9904 13.2001L13.2 13.9905L9.00001 9.7905L4.80001 13.9905Z\" fill=\"currentColor\"/>\n        </svg>\n        <div class=\"tooltip\" position=\"down\">{{i18n_close_tooltip}}</div>\n    </div>\n\n    <div id=\"download-btn\" class=\"btn-control relative\" {{#no_downloads}}disabled{{/no_downloads}}>\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"9.99992\" cy=\"9.99992\" r=\"9.16667\" fill=\"#4FBA69\"/>\n            <path d=\"M10 15.8372L5.27246 11.1097L6.14263 10.2187L9.37502 13.4511V4.1626H10.625V13.4511L13.8574 10.2315L14.7275 11.1097L10 15.8372Z\" fill=\"currentColor\"/>\n        </svg>\n        <div class=\"tooltip\" position=\"down\">{{i18n_download_tooltip}}</div>\n\n        <dropdown-box class=\"download-box\" hidden>\n            <dropdown-box-header class=\"mobile-content-box-header\">\n                <savior-image data-src=\"images/logo_cc.svg\"></savior-image>\n                <h2>{{i18n_download_box_header_title}}</h2>\n                <button class=\"dropdown-box-closer\" id=\"mobile-transfer-closer\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M5.33327 15.5448L4.45508 14.6667L9.12174 9.99999L4.45508 5.33333L5.33327 4.45514L9.99993 9.12181L14.6666 4.45514L15.5448 5.33333L10.8781 9.99999L15.5448 14.6667L14.6666 15.5448L9.99993 10.8782L5.33327 15.5448Z\" fill=\"currentColor\"/>\n                    </svg>\n                </button>\n            </dropdown-box-header>\n            <dropdown-box-body id=\"downloads\" data-panel=\"loading\">\n                <panel value=\"loading\">\n                    <savior-row class=\"download-box-content-box\">\n                        <svg width=\"20\" height=\"20\" class=\"loading-3-dots\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n                        <span>{{i18n_downloading_media}}</span>\n                    </savior-row>\n                </panel>\n\n                <panel value=\"media\" id=\"downloads-media\"></panel>\n\n                <panel value=\"no-media\">\n                    <savior-row class=\"download-box-content-box\">\n                        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M10.0001 5.83332C9.77907 5.83332 9.56711 5.92112 9.41083 6.0774C9.25455 6.23368 9.16675 6.44564 9.16675 6.66666V9.99999C9.16675 10.221 9.25455 10.433 9.41083 10.5892C9.56711 10.7455 9.77907 10.8333 10.0001 10.8333C10.2211 10.8333 10.4331 10.7455 10.5893 10.5892C10.7456 10.433 10.8334 10.221 10.8334 9.99999V6.66666C10.8334 6.44564 10.7456 6.23368 10.5893 6.0774C10.4331 5.92112 10.2211 5.83332 10.0001 5.83332ZM10.7668 13.0167C10.7485 12.9636 10.7233 12.9131 10.6918 12.8667L10.5918 12.7417C10.4746 12.626 10.3258 12.5477 10.1641 12.5166C10.0024 12.4854 9.83518 12.5028 9.68342 12.5667C9.58243 12.6089 9.48942 12.668 9.40842 12.7417C9.33118 12.8195 9.27008 12.9119 9.22861 13.0134C9.18714 13.1149 9.16612 13.2237 9.16675 13.3333C9.16807 13.4422 9.19072 13.5498 9.23342 13.65C9.27084 13.7534 9.33056 13.8473 9.40832 13.9251C9.48609 14.0029 9.58001 14.0626 9.68342 14.1C9.78317 14.1441 9.89103 14.1669 10.0001 14.1669C10.1091 14.1669 10.217 14.1441 10.3168 14.1C10.4202 14.0626 10.5141 14.0029 10.5918 13.9251C10.6696 13.8473 10.7293 13.7534 10.7668 13.65C10.8095 13.5498 10.8321 13.4422 10.8334 13.3333C10.8375 13.2778 10.8375 13.2221 10.8334 13.1667C10.8191 13.1135 10.7966 13.0629 10.7668 13.0167ZM10.0001 1.66666C8.35191 1.66666 6.74074 2.1554 5.37033 3.07108C3.99992 3.98675 2.93182 5.28824 2.30109 6.81096C1.67036 8.33368 1.50533 10.0092 1.82687 11.6257C2.14842 13.2423 2.94209 14.7271 4.10753 15.8925C5.27297 17.058 6.75782 17.8517 8.37433 18.1732C9.99084 18.4947 11.6664 18.3297 13.1891 17.699C14.7118 17.0683 16.0133 16.0002 16.929 14.6297C17.8447 13.2593 18.3334 11.6482 18.3334 9.99999C18.3334 8.90564 18.1179 7.82201 17.6991 6.81096C17.2803 5.79991 16.6665 4.88125 15.8926 4.10743C15.1188 3.33361 14.2002 2.71978 13.1891 2.30099C12.1781 1.8822 11.0944 1.66666 10.0001 1.66666ZM10.0001 16.6667C8.68154 16.6667 7.39261 16.2757 6.29628 15.5431C5.19996 14.8106 4.34547 13.7694 3.84089 12.5512C3.3363 11.333 3.20428 9.99259 3.46152 8.69939C3.71875 7.40618 4.35369 6.2183 5.28604 5.28594C6.21839 4.35359 7.40628 3.71866 8.69948 3.46142C9.99269 3.20419 11.3331 3.33621 12.5513 3.84079C13.7695 4.34538 14.8107 5.19986 15.5432 6.29619C16.2758 7.39252 16.6668 8.68145 16.6668 9.99999C16.6668 11.7681 15.9644 13.4638 14.7141 14.714C13.4639 15.9643 11.7682 16.6667 10.0001 16.6667Z\" fill=\"currentColor\"/>\n                        </svg>\n                        <span>{{i18n_no_media_found_widget}}</span>\n                    </savior-row>\n                </panel>\n            </dropdown-box-body>\n        </dropdown-box>\n    </div>\n\n    {{#has_pip}}\n        <div id=\"open-pip\" class=\"btn-control\" data-svg-control=\"off\">\n            <svg data-value=\"off\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8335 2.91667H2.50016C2.27004 2.91667 2.0835 3.10322 2.0835 3.33334V13.3333C2.0835 13.5635 2.27004 13.75 2.50016 13.75H4.16683V15H2.50016C1.57969 15 0.833496 14.2538 0.833496 13.3333V3.33334C0.833496 2.41286 1.57969 1.66667 2.50016 1.66667H15.8335C16.754 1.66667 17.5002 2.41286 17.5002 3.33334V5.83334H16.2502V3.33334C16.2502 3.10322 16.0636 2.91667 15.8335 2.91667ZM5.8335 8.70371C5.8335 8.03892 6.37618 7.50001 7.04562 7.50001H17.9547C18.6241 7.50001 19.1668 8.03892 19.1668 8.70371V17.1296C19.1668 17.7944 18.6241 18.3333 17.9547 18.3333H7.04562C6.37618 18.3333 5.8335 17.7944 5.8335 17.1296V8.70371ZM9.55736 15.3027C9.45237 15.4077 9.52673 15.5872 9.67521 15.5872L14.9469 15.5872L14.9469 10.3156C14.9469 10.1671 14.7673 10.0928 14.6623 10.1978L12.8191 12.041L10.8806 10.1025C10.8155 10.0374 10.71 10.0374 10.6449 10.1025L9.46207 11.2853C9.39698 11.3503 9.39698 11.4559 9.46207 11.521L11.4006 13.4595L9.55736 15.3027Z\" fill=\"currentColor\"/>\n            </svg>\n            <svg data-value=\"on\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8335 2.91666H2.50016C2.27004 2.91666 2.0835 3.1032 2.0835 3.33332V13.3333C2.0835 13.5634 2.27004 13.75 2.50016 13.75H8.3335V15H2.50016C1.57969 15 0.833496 14.2538 0.833496 13.3333V3.33332C0.833496 2.41285 1.57969 1.66666 2.50016 1.66666H15.8335C16.754 1.66666 17.5002 2.41285 17.5002 3.33332V9.99999H16.2502V3.33332C16.2502 3.1032 16.0636 2.91666 15.8335 2.91666ZM10.0002 15.8334V14.1667V12.5C10.0002 12.0398 10.3733 11.6667 10.8335 11.6667H15.8335H17.5002H18.3335C18.7937 11.6667 19.1668 12.0398 19.1668 12.5V18.3334C19.1668 18.7936 18.7937 19.1667 18.3335 19.1667H10.8335C10.3733 19.1667 10.0002 18.7936 10.0002 18.3334V15.8334ZM9.20216 5.39112C9.30715 5.28612 9.23279 5.1066 9.08431 5.1066H4.27354V9.91737C4.27354 10.0659 4.45306 10.1402 4.55806 10.0352L6.22847 8.36481L7.99997 10.1363C8.06505 10.2014 8.17058 10.2014 8.23567 10.1363L9.30325 9.06873C9.36834 9.00364 9.36834 8.89811 9.30325 8.83303L7.53175 7.06152L9.20216 5.39112Z\" fill=\"currentColor\"/>\n            </svg>\n            <div class=\"tooltip\" position=\"down\">{{i18n_pip_button}}</div>\n        </div>\n    {{/has_pip}}\n\n    {{^has_skip_video}}\n        <div id=\"switch-light\" class=\"btn-control\" data-svg-control=\"off\">\n            <svg data-value=\"off\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.0002 19.1667C9.60383 19.1667 9.2534 19.0669 8.94887 18.8675C8.64436 18.668 8.43132 18.4063 8.30976 18.0823H8.02485C7.62093 18.0823 7.27304 17.9429 6.98119 17.6643C6.68932 17.3856 6.54338 17.0535 6.54338 16.6679V13.4646C5.54687 12.8879 4.76276 11.2815 4.19105 10.3119C3.61935 9.34236 3.3335 8.3045 3.3335 7.19834C3.3335 5.42365 3.9799 3.91914 5.27271 2.68481C6.56554 1.4505 8.14136 0.833344 10.0002 0.833344C11.859 0.833344 13.4348 1.4505 14.7276 2.68481C16.0204 3.91914 16.6668 5.42365 16.6668 7.19834C16.6668 8.32385 16.381 9.36655 15.8093 10.3264C15.2376 11.2863 14.4535 12.8879 13.4569 13.4646V16.6679C13.4569 17.0535 13.311 17.3856 13.0191 17.6643C12.7273 17.9429 12.3794 18.0823 11.9755 18.0823H11.6906C11.569 18.4063 11.356 18.668 11.0515 18.8675C10.7469 19.0669 10.3965 19.1667 10.0002 19.1667ZM8.02485 16.6679H11.9755V16.6667H8.02485V16.6679ZM8.02485 16.6667H11.9755V13.9252H8.02485V16.6667ZM7.82731 12.5108H9.41137V8.93194L7.29551 6.91182L8.12361 6.12119L10.0002 7.91283L11.8767 6.12119L12.7048 6.91182L10.589 8.93194V12.5108H12.173C13.0619 12.1021 13.7862 10.6677 14.3459 9.87401C14.9055 9.08034 15.1854 8.18845 15.1854 7.19834C15.1854 5.81532 14.6833 4.64447 13.6792 3.68579C12.6751 2.72711 11.4487 2.24777 10.0002 2.24777C8.5516 2.24777 7.32526 2.72711 6.32114 3.68579C5.31702 4.64447 4.81496 5.81532 4.81496 7.19834C4.81496 8.18845 5.09479 9.08034 5.65447 9.87401C6.21414 10.6677 6.93842 12.1021 7.82731 12.5108Z\" fill=\"currentColor\"/>\n            </svg>\n            <svg data-value=\"on\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.0002 19.1667C9.60383 19.1667 9.2534 19.0669 8.94887 18.8675C8.64436 18.668 8.43132 18.4063 8.30976 18.0823H8.02485C7.62093 18.0823 7.27304 17.9429 6.98119 17.6643C6.68932 17.3856 6.54338 17.0535 6.54338 16.6679V13.4646C5.54687 12.8879 4.76276 11.2815 4.19105 10.3119C3.61935 9.34236 3.3335 8.3045 3.3335 7.19834C3.3335 5.42365 3.9799 3.91914 5.27271 2.68481C6.56554 1.4505 8.14136 0.833344 10.0002 0.833344C11.859 0.833344 13.4348 1.4505 14.7276 2.68481C16.0204 3.91914 16.6668 5.42365 16.6668 7.19834C16.6668 8.32385 16.381 9.36655 15.8093 10.3264C15.2376 11.2863 14.4535 12.8879 13.4569 13.4646V16.6679C13.4569 17.0535 13.311 17.3856 13.0191 17.6643C12.7273 17.9429 12.3794 18.0823 11.9755 18.0823H11.6906C11.569 18.4063 11.356 18.668 11.0515 18.8675C10.7469 19.0669 10.3965 19.1667 10.0002 19.1667ZM8.02485 16.6679H11.9755V16.6667H8.02485V16.6679ZM8.02485 16.6667H11.9755V13.9252H8.02485V16.6667ZM10.589 12.5108V8.93194L12.7048 6.91182L11.8767 6.12119L10.0002 7.91283L8.12361 6.12119L7.29551 6.91182L9.41137 8.93194V12.5108H10.589Z\" fill=\"currentColor\"/>\n            </svg>\n            <div class=\"tooltip\" position=\"down\">{{i18n_switch}}</div>\n        </div>\n    {{/has_skip_video}}\n\n    {{#has_skip_video}}\n        <div id=\"skip-video\" class=\"btn-control\">\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M7.4707 9L1.5 12.9805V5.01953L7.4707 9ZM14.5527 9L8.58203 12.9805V5.01953L14.5527 9ZM16.125 5.01953V12.9805H15V5.01953H16.125Z\" fill=\"currentColor\"/>\n            </svg>\n            <div class=\"tooltip\" position=\"down\">\n                <div>{{skip_video_title}}</div>\n                <div class='description'>{{skip_video_description}}</div>\n            </div>\n            <div class='red-dot top-right'></div>\n        </div>\n    {{/has_skip_video}}\n\n    {{#has_client_chooser}}\n        <select style=\"width: 0; height: 0; display: none\"></select>\n        <select id=\"youtube-client-chooser\" class=\"btn-control relative\" value=\"{{current_youtube_client}}\">\n            {{#youtube_clients}}\n                <option value=\"{{.}}\">{{.}}</option>\n            {{/youtube_clients}}\n        </select>\n        <select style=\"width: 0; height: 0; display: none\"></select>\n    {{/has_client_chooser}}\n\n    <div id=\"other-feature\" class=\"btn-control relative last-of-type\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M9.99998 16.0576C9.65624 16.0576 9.36198 15.9353 9.11719 15.6905C8.8724 15.4457 8.75 15.1514 8.75 14.8077C8.75 14.4639 8.8724 14.1697 9.11719 13.9249C9.36198 13.6801 9.65624 13.5577 9.99998 13.5577C10.3437 13.5577 10.638 13.6801 10.8828 13.9249C11.1276 14.1697 11.25 14.4639 11.25 14.8077C11.25 15.1514 11.1276 15.4457 10.8828 15.6905C10.638 15.9353 10.3437 16.0576 9.99998 16.0576ZM9.99998 11.25C9.65624 11.25 9.36198 11.1276 9.11719 10.8828C8.8724 10.638 8.75 10.3437 8.75 10C8.75 9.65626 8.8724 9.362 9.11719 9.11721C9.36198 8.87241 9.65624 8.75002 9.99998 8.75002C10.3437 8.75002 10.638 8.87241 10.8828 9.11721C11.1276 9.362 11.25 9.65626 11.25 10C11.25 10.3437 11.1276 10.638 10.8828 10.8828C10.638 11.1276 10.3437 11.25 9.99998 11.25ZM9.99998 6.44229C9.65624 6.44229 9.36198 6.31989 9.11719 6.0751C8.8724 5.83032 8.75 5.53606 8.75 5.19231C8.75 4.84857 8.8724 4.55431 9.11719 4.30952C9.36198 4.06474 9.65624 3.94235 9.99998 3.94235C10.3437 3.94235 10.638 4.06474 10.8828 4.30952C11.1276 4.55431 11.25 4.84857 11.25 5.19231C11.25 5.53606 11.1276 5.83032 10.8828 6.0751C10.638 6.31989 10.3437 6.44229 9.99998 6.44229Z\" fill=\"currentColor\"/>\n        </svg>\n        <div class=\"tooltip\" position=\"down\">{{i18n_other_feature}}</div>\n        {{! <div id=\"expansion\" hidden=\"true\">\n\n        </div> }}\n        <dropdown-box id=\"expansion\" class=\"expansion-box\" hidden>\n            {{#has_skip_video}}\n                <dropdown-item id=\"switch-light\" data-svg-control=\"off\">\n                    <svg data-value=\"off\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10.0002 19.1667C9.60383 19.1667 9.2534 19.0669 8.94887 18.8675C8.64436 18.668 8.43132 18.4063 8.30976 18.0823H8.02485C7.62093 18.0823 7.27304 17.9429 6.98119 17.6643C6.68932 17.3856 6.54338 17.0535 6.54338 16.6679V13.4646C5.54687 12.8879 4.76276 11.2815 4.19105 10.3119C3.61935 9.34236 3.3335 8.3045 3.3335 7.19834C3.3335 5.42365 3.9799 3.91914 5.27271 2.68481C6.56554 1.4505 8.14136 0.833344 10.0002 0.833344C11.859 0.833344 13.4348 1.4505 14.7276 2.68481C16.0204 3.91914 16.6668 5.42365 16.6668 7.19834C16.6668 8.32385 16.381 9.36655 15.8093 10.3264C15.2376 11.2863 14.4535 12.8879 13.4569 13.4646V16.6679C13.4569 17.0535 13.311 17.3856 13.0191 17.6643C12.7273 17.9429 12.3794 18.0823 11.9755 18.0823H11.6906C11.569 18.4063 11.356 18.668 11.0515 18.8675C10.7469 19.0669 10.3965 19.1667 10.0002 19.1667ZM8.02485 16.6679H11.9755V16.6667H8.02485V16.6679ZM8.02485 16.6667H11.9755V13.9252H8.02485V16.6667ZM7.82731 12.5108H9.41137V8.93194L7.29551 6.91182L8.12361 6.12119L10.0002 7.91283L11.8767 6.12119L12.7048 6.91182L10.589 8.93194V12.5108H12.173C13.0619 12.1021 13.7862 10.6677 14.3459 9.87401C14.9055 9.08034 15.1854 8.18845 15.1854 7.19834C15.1854 5.81532 14.6833 4.64447 13.6792 3.68579C12.6751 2.72711 11.4487 2.24777 10.0002 2.24777C8.5516 2.24777 7.32526 2.72711 6.32114 3.68579C5.31702 4.64447 4.81496 5.81532 4.81496 7.19834C4.81496 8.18845 5.09479 9.08034 5.65447 9.87401C6.21414 10.6677 6.93842 12.1021 7.82731 12.5108Z\" fill=\"currentColor\"/>\n                    </svg>\n                    <svg data-value=\"on\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10.0002 19.1667C9.60383 19.1667 9.2534 19.0669 8.94887 18.8675C8.64436 18.668 8.43132 18.4063 8.30976 18.0823H8.02485C7.62093 18.0823 7.27304 17.9429 6.98119 17.6643C6.68932 17.3856 6.54338 17.0535 6.54338 16.6679V13.4646C5.54687 12.8879 4.76276 11.2815 4.19105 10.3119C3.61935 9.34236 3.3335 8.3045 3.3335 7.19834C3.3335 5.42365 3.9799 3.91914 5.27271 2.68481C6.56554 1.4505 8.14136 0.833344 10.0002 0.833344C11.859 0.833344 13.4348 1.4505 14.7276 2.68481C16.0204 3.91914 16.6668 5.42365 16.6668 7.19834C16.6668 8.32385 16.381 9.36655 15.8093 10.3264C15.2376 11.2863 14.4535 12.8879 13.4569 13.4646V16.6679C13.4569 17.0535 13.311 17.3856 13.0191 17.6643C12.7273 17.9429 12.3794 18.0823 11.9755 18.0823H11.6906C11.569 18.4063 11.356 18.668 11.0515 18.8675C10.7469 19.0669 10.3965 19.1667 10.0002 19.1667ZM8.02485 16.6679H11.9755V16.6667H8.02485V16.6679ZM8.02485 16.6667H11.9755V13.9252H8.02485V16.6667ZM10.589 12.5108V8.93194L12.7048 6.91182L11.8767 6.12119L10.0002 7.91283L8.12361 6.12119L7.29551 6.91182L9.41137 8.93194V12.5108H10.589Z\" fill=\"currentColor\"/>\n                    </svg>\n                    <span>{{i18n_switch}}</span>\n                </dropdown-item>\n            {{/has_skip_video}}\n\n            <dropdown-item id=\"open-mobile\" {{^has_mobile}}hidden=\"true\"{{/has_mobile}} {{#no_downloads}}hidden=\"true\"{{/no_downloads}}>\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M14.331 18.75C14.7519 18.75 15.1082 18.6041 15.3999 18.3125C15.6916 18.0208 15.8374 17.6645 15.8374 17.2435V2.75642C15.8374 2.33547 15.6916 1.97917 15.3999 1.6875C15.1082 1.39583 14.7519 1.25 14.331 1.25H8.72203V2.49998H14.331C14.3951 2.49998 14.4539 2.52669 14.5073 2.5801C14.5607 2.63353 14.5874 2.69231 14.5874 2.75642V3.54167H8.72203V4.79162H14.5874V15.2083H6.25409V13.5417H5.00411V17.2435C5.00411 17.6645 5.14994 18.0208 5.44161 18.3125C5.73328 18.6041 6.08958 18.75 6.51053 18.75H14.331ZM14.5874 16.4583V17.2435C14.5874 17.3077 14.5607 17.3664 14.5073 17.4199C14.4539 17.4733 14.3951 17.5 14.331 17.5H6.51053C6.44642 17.5 6.38764 17.4733 6.33421 17.4199C6.2808 17.3664 6.25409 17.3077 6.25409 17.2435V16.4583H14.5874ZM5.42076 11.3701L9.29894 7.49196L8.42076 6.61379L6.04574 8.98879V2.70833H4.79578V8.98879L2.42076 6.61379L1.54257 7.49196L5.42076 11.3701Z\" fill=\"#45474A\"/>\n                </svg>\n\n                <span>{{i18n_mobile_button}}</span>\n            </dropdown-item>\n            <dropdown-item id=\"hide-on-site\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.1444 10.8109L12.2085 9.875C12.3335 9.18481 12.1366 8.56436 11.6179 8.01362C11.0992 7.46287 10.4627 7.24999 9.70848 7.37499L8.7726 6.43912C8.96063 6.35472 9.15347 6.29142 9.35112 6.24922C9.54876 6.20702 9.7651 6.18591 10.0001 6.18591C10.9456 6.18591 11.7483 6.51577 12.408 7.1755C13.0677 7.83522 13.3976 8.63783 13.3976 9.58333C13.3976 9.81837 13.3765 10.0374 13.3342 10.2404C13.2921 10.4434 13.2288 10.6335 13.1444 10.8109ZM15.795 13.4038L14.8751 12.5417C15.4029 12.1389 15.8717 11.6979 16.2814 11.2187C16.6911 10.7396 17.0418 10.1944 17.3335 9.58333C16.639 8.18055 15.6425 7.06597 14.3439 6.23958C13.0453 5.41319 11.5974 4.99999 10.0001 4.99999C9.59737 4.99999 9.20153 5.02777 8.81264 5.08333C8.42375 5.13888 8.04181 5.22222 7.66681 5.33333L6.69568 4.3622C7.22239 4.1528 7.76032 3.99842 8.30946 3.89906C8.85859 3.7997 9.42216 3.75002 10.0001 3.75002C11.9531 3.75002 13.7143 4.28847 15.2838 5.36539C16.8532 6.44232 17.998 7.8483 18.7181 9.58333C18.4093 10.328 18.0105 11.023 17.5217 11.6682C17.033 12.3135 16.4574 12.8921 15.795 13.4038ZM16.4681 18.2243L13.0963 14.8782C12.669 15.0363 12.1954 15.1656 11.6756 15.266C11.1559 15.3664 10.5974 15.4166 10.0001 15.4166C8.04182 15.4166 6.28062 14.8782 4.71652 13.8013C3.15242 12.7243 2.00766 11.3184 1.28223 9.58333C1.58992 8.84722 1.98736 8.16052 2.47454 7.52322C2.96172 6.88595 3.49805 6.33333 4.08352 5.86539L1.77581 3.53206L2.65402 2.65387L17.3463 17.3461L16.4681 18.2243ZM4.96171 6.74356C4.52154 7.09399 4.09339 7.5152 3.67725 8.0072C3.26111 8.49919 2.9243 9.02456 2.66681 9.58333C3.36125 10.9861 4.35778 12.1007 5.65639 12.9271C6.955 13.7535 8.40292 14.1667 10.0001 14.1667C10.3794 14.1667 10.7571 14.1346 11.1332 14.0705C11.5093 14.0064 11.8282 13.9402 12.0899 13.8718L11.0354 12.7916C10.8933 12.8493 10.7288 12.8953 10.5418 12.9295C10.3549 12.9636 10.1743 12.9807 10.0001 12.9807C9.05464 12.9807 8.25203 12.6509 7.59231 11.9912C6.93259 11.3314 6.60273 10.5288 6.60273 9.58333C6.60273 9.41452 6.61982 9.23797 6.65402 9.05368C6.68821 8.86938 6.73415 8.70084 6.79183 8.54806L4.96171 6.74356Z\" fill=\"#45474A\"/>\n                </svg>\n\n                <span>{{i18n_hide_panel_on_site}}</span>\n            </dropdown-item>\n            <dropdown-item id=\"open-settings\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M8.07696 17.9167L7.75965 15.3782C7.53636 15.3034 7.30746 15.1987 7.07294 15.0641C6.83843 14.9295 6.62876 14.7852 6.44392 14.6314L4.09296 15.625L2.16992 12.2917L4.20357 10.7548C4.18433 10.6309 4.17071 10.5064 4.16269 10.3814C4.15468 10.2564 4.15067 10.132 4.15067 10.008C4.15067 9.88944 4.15468 9.76898 4.16269 9.64665C4.17071 9.52431 4.18433 9.3905 4.20357 9.24521L2.16992 7.70835L4.09296 4.39108L6.4359 5.37667C6.63676 5.21747 6.85124 5.0719 7.07934 4.93996C7.30745 4.808 7.53155 4.70196 7.75163 4.62183L8.07696 2.08337H11.923L12.2404 4.62985C12.4904 4.72066 12.7166 4.82669 12.9191 4.94796C13.1215 5.06922 13.3259 5.21212 13.532 5.37667L15.907 4.39108L17.8301 7.70835L15.7644 9.26923C15.7943 9.40385 15.8106 9.52966 15.8133 9.64665C15.8159 9.76363 15.8173 9.88142 15.8173 10C15.8173 10.1133 15.8146 10.2284 15.8093 10.3454C15.8039 10.4624 15.7847 10.5962 15.7516 10.7468L17.8013 12.2917L15.8782 15.625L13.532 14.6234C13.3259 14.7879 13.1154 14.9335 12.9006 15.0601C12.6859 15.1867 12.4658 15.2901 12.2404 15.3702L11.923 17.9167H8.07696ZM10.0096 12.5C10.703 12.5 11.293 12.2567 11.7796 11.77C12.2663 11.2834 12.5096 10.6934 12.5096 10C12.5096 9.30666 12.2663 8.71665 11.7796 8.23C11.293 7.74336 10.703 7.50004 10.0096 7.50004C9.30771 7.50004 8.71557 7.74336 8.23319 8.23C7.75083 8.71665 7.50965 9.30666 7.50965 10C7.50965 10.6934 7.75083 11.2834 8.23319 11.77C8.71557 12.2567 9.30771 12.5 10.0096 12.5ZM10.0096 11.25C9.66239 11.25 9.36725 11.1285 9.12419 10.8854C8.88114 10.6424 8.75961 10.3472 8.75961 10C8.75961 9.6528 8.88114 9.35766 9.12419 9.1146C9.36725 8.87155 9.66239 8.75002 10.0096 8.75002C10.3568 8.75002 10.652 8.87155 10.895 9.1146C11.1381 9.35766 11.2596 9.6528 11.2596 10C11.2596 10.3472 11.1381 10.6424 10.895 10.8854C10.652 11.1285 10.3568 11.25 10.0096 11.25ZM9.16667 16.6667H10.8045L11.1042 14.4343C11.5294 14.3232 11.918 14.1653 12.27 13.9608C12.6221 13.7562 12.9615 13.4931 13.2885 13.1715L15.359 14.0417L16.1795 12.625L14.3718 11.2628C14.4412 11.047 14.4885 10.8355 14.5136 10.6282C14.5387 10.421 14.5513 10.2116 14.5513 10C14.5513 9.78315 14.5387 9.57374 14.5136 9.37181C14.4885 9.1699 14.4412 8.9637 14.3718 8.75323L16.1955 7.37502L15.375 5.95835L13.2804 6.84137C13.0016 6.54329 12.6675 6.27994 12.278 6.05131C11.8886 5.82267 11.4947 5.66081 11.0962 5.56573L10.8333 3.33335H9.17948L8.90386 5.55771C8.47864 5.65814 8.08601 5.81199 7.72596 6.01925C7.36592 6.22651 7.02244 6.49361 6.69553 6.82054L4.62501 5.95835L3.80448 7.37502L5.60417 8.71637C5.53473 8.91401 5.48612 9.11967 5.45834 9.33335C5.43056 9.54703 5.41667 9.77193 5.41667 10.008C5.41667 10.2249 5.43056 10.4375 5.45834 10.6459C5.48612 10.8542 5.53205 11.0598 5.59615 11.2628L3.80448 12.625L4.62501 14.0417L6.68751 13.1667C7.00374 13.4915 7.34188 13.7575 7.70192 13.9648C8.06196 14.172 8.45994 14.3312 8.89584 14.4423L9.16667 16.6667Z\" fill=\"#45474A\"/>\n                </svg>\n\n                <span>{{i18n_go_to_settings}}</span>\n\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M4.42316 17.0836C4.00222 17.0836 3.64591 16.9378 3.35425 16.6461C3.06258 16.3545 2.91675 15.9981 2.91675 15.5772V4.42341C2.91675 4.00246 3.06258 3.64616 3.35425 3.35449C3.64591 3.06283 4.00222 2.91699 4.42316 2.91699H9.67952V4.16697H4.42316C4.35905 4.16697 4.30028 4.19368 4.24685 4.2471C4.19344 4.30053 4.16673 4.3593 4.16673 4.42341V15.5772C4.16673 15.6413 4.19344 15.7001 4.24685 15.7535C4.30028 15.8069 4.35905 15.8336 4.42316 15.8336H15.577C15.6411 15.8336 15.6998 15.8069 15.7533 15.7535C15.8067 15.7001 15.8334 15.6413 15.8334 15.5772V10.3208H17.0834V15.5772C17.0834 15.9981 16.9375 16.3545 16.6459 16.6461C16.3542 16.9378 15.9979 17.0836 15.577 17.0836H4.42316ZM8.09942 12.7791L7.22123 11.901L14.9552 4.16697H11.6667V2.91699H17.0834V8.33364H15.8334V5.04516L8.09942 12.7791Z\" fill=\"#1A1C1E\"/>\n                </svg>\n            </dropdown-item>\n        </dropdown-box>\n    </div>\n\n    <div id=\"onboard-nmp\" hidden=\"true\"></div>\n\n</div>",
  "template-sound-only-tour": "<div class=\"tour-container\">\n    <div class=\"pointer\"></div>\n    <div class=\"dialog-content\">\n        <h2>{{i18n_title}}</h2>\n        <div class=\"dialog-description\">\n            <p>{{{i18n_description}}}</p>\n        </div>\n        <button class=\"try-now\">{{i18n_lets_try_btn}}</button>\n    </div>\n</div>",
  "template-list": "<ul class=\"downloads-list\">\n    {{#downloads}}\n        {{>media_template}}\n    {{/downloads}}\n</ul>",
  "template-media": "<panel value=\"media\" class=\"media-download-panel quality-selector-box\">\r\n    {{#audio_channel}}\r\n        <div class=\"audio-channel-box\">\r\n            <div class=\"audio-channel-label\">\r\n                {{{type_icon}}}\r\n                <strong>{{i18n_type}}</strong>\r\n            </div>\r\n            <div class=\"audio-channel\">\r\n                <div class=\"audio-selected j-audio-drawer-toggle\" title=\"Selected audio\">\r\n                    <strong class=\"media-name audio\">{{selected_audio.i18n_quality}}</strong>\r\n                    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M6.70255 11.7692L6 11.0667L9.06667 7.99999L6 4.93332L6.70255 4.23077L10.4718 7.99999L6.70255 11.7692Z\" fill=\"currentColor\"/>\r\n                    </svg>\r\n                </div>\r\n                <div class=\"audio-drawer-wrapper\" hidden>\r\n                    <div class=\"audio-drawer\" data-open=\"false\" hidden>\r\n                        <div class=\"audio-drawer-header\">\r\n                            <div class=\"audio-drawer-header-back-button\">\r\n                                <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M13.9999 20.3461L7.65381 14L13.9999 7.65387L14.8909 8.53206L10.048 13.375H20.3461V14.625H10.048L14.8909 19.4679L13.9999 20.3461Z\" fill=\"currentColor\"/>\r\n                                </svg>\r\n                            </div>\r\n                            <span>{{i18n_select_audio_channel_title}}</span>\r\n                            <button class=\"dropdown-box-closer j-audio-drawer-closer\" id=\"mobile-transfer-closer\">\r\n                                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M5.33327 15.5448L4.45508 14.6667L9.12174 9.99999L4.45508 5.33333L5.33327 4.45514L9.99993 9.12181L14.6666 4.45514L15.5448 5.33333L10.8781 9.99999L15.5448 14.6667L14.6666 15.5448L9.99993 10.8782L5.33327 15.5448Z\" fill=\"currentColor\"/>\r\n                                </svg>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"audio-list\">\r\n                            {{#media}}\r\n                                <div class=\"audio-item\" data-id=\"{{id}}\" title=\"{{quality}}\" data-quality-value=\"{{ext}}/{{quality}}\" class=\"j-audio-item\">\r\n                                    {{i18n_quality}}\r\n                                </div>\r\n                            {{/media}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    {{/audio_channel}}\r\n    {{#media_list}}\r\n        <div class=\"extension-box\">\r\n            <div class=\"extensions-label\">\r\n                {{{type_icon}}}\r\n                <strong>{{i18n_type}}</strong>\r\n            </div>\r\n            {{#media}}\r\n                <div id=\"media_{{id}}\" data-id=\"{{id}}\" title=\"{{quality}}\" title=\"{{i18n_quality}}\" data-quality-value=\"{{ext}}/{{quality}}/{{resolution}}\" class=\"quality-label j-quality {{#fast}}is-fast{{/fast}} {{#useConverter}}use-converter{{/useConverter}}\">\r\n                    {{#is_image}}\r\n                        <div class=\"media-image-container\">\r\n                            <img class=\"media-image-preview\" height=\"20\" width=\"20\" src=\"{{url}}\"/>\r\n                        </div>\r\n                    {{/is_image}}\r\n                    <strong class=\"media-name {{type}}\">\r\n                        {{#i18n_quality}}\r\n                            {{i18n_quality}}\r\n                        {{/i18n_quality}}\r\n                        {{^i18n_quality}}\r\n                            {{quality}}\r\n                        {{/i18n_quality}}\r\n                    </strong>\r\n                    <p class=\"media-sub-wrap {{#resolution}}with-resolution{{/resolution}}\">\r\n                        {{#resolution}}\r\n                            <span class=\"media-sub-info info-resolution\">\r\n                                {{resolution}}\r\n                            </span>\r\n                        {{/resolution}}\r\n                        <span class=\"media-sub-info info-ext\">\r\n                            .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\r\n                        </span>\r\n                    </p>\r\n                </div>\r\n                {{#extraImages}}\r\n                    <div id=\"media_{{id}}_extra_img\" class=\"quality-label extra-images\">\r\n                        <div class=\"media-image-container\">\r\n                            <img class=\"media-image-preview\" height=\"20\" width=\"20\" src=\"{{firstImage}}\"/>\r\n                            <img class=\"media-image-preview under\" height=\"20\" width=\"20\" src=\"{{secondImage}}\"/>\r\n                        </div>\r\n                        <strong class=\"media-name {{type}}\">\r\n                            {{label}}\r\n                        </strong>\r\n                        <p class=\"media-sub-wrap {{#resolution}}with-resolution{{/resolution}}\">\r\n                            {{#resolution}}\r\n                                <span class=\"media-sub-info info-resolution\">\r\n                                    {{resolution}}\r\n                                </span>\r\n                            {{/resolution}}\r\n                            <span class=\"media-sub-info info-ext\">\r\n                                .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\r\n                            </span>\r\n                        </p>\r\n                    </div>\r\n                {{/extraImages}}\r\n            {{/media}}\r\n        </div>\r\n    {{/media_list}}\r\n</panel>",
  "template-media-popup": "<div class=\"j-media-scope media-scope\" title=\"{{title}}\">\n    <span class=\"filename\" title=\"{{title}}\">{{title}}</span>\n    \n    {{#audio_channel}}\n        <div class=\"select-wrapper\">\n            <span class=\"select audio-channel\">\n                <span class=\"j-quality-option quality-option\">\n                    <span class=\"selected-type\">{{i18n_audio_channel_label}}</span>\n                    <span class=\"quality-option-ext-quality media-name audio\">\n                        {{selected_audio.i18n_quality}}\n                    </span>\n                </span>\n            </span>\n\n            <!-- Pseudo Select -->\n            <div class=\"audio-channel-selector-box j-quality-selector\" hidden>\n                <div class=\"quality-selector-box-relative\">\n                    {{#media}}\n                        <div class=\"audio-item\" data-id=\"{{id}}\" title=\"{{quality}}\" data-quality-value=\"{{ext}}/{{quality}}\" class=\"j-audio-item\">\n                            {{i18n_quality}}\n                         </div>\n                    {{/media}}\n                </div>\n            </div>\n        </div>\n    {{/audio_channel}}\n\n    <div class=\"select-wrapper\">\n        <span class=\"select video\">\n            <span class=\"j-quality-option quality-option\" data-item=\"loading\" hidden>\n                <svg width=\"20\" height=\"20\" class=\"loading-3-dots\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n                {{i18n_downloading_media}}\n            </span>\n            {{#media}}\n                {{#media}}\n                    <span class=\"j-quality-option quality-option\" data-quality=\"{{ext}}/{{quality}}/{{resolution}}\" hidden>\n                        <span class=\"selected-type\">{{i18n_type}}</span>\n                        <span class=\"quality-option-ext-quality\">\n                            {{#i18n_quality}}\n                                {{i18n_quality}}\n                            {{/i18n_quality}}\n                            {{^i18n_quality}}\n                                {{#quality}}{{quality}}{{/quality}}\n                            {{/i18n_quality}}\n                        </span>\n                        <span class=\"file-size{{#size}} done{{/size}}\" id=\"size_{{id}}\">{{size}}</span>\n                    </span>\n                {{/media}}\n            {{/media}}\n        </span>\n\n        <!-- Pseudo Select -->\n        <div class=\"quality-selector-box j-quality-selector\" hidden>\n            <div class=\"quality-selector-box-relative\">\n                {{#media}}\n                    <div class=\"extension-box\">\n                        <div class=\"extensions-label\">\n                            {{{type_icon}}}\n                            <strong>{{i18n_type}}</strong>\n                        </div>\n                        {{#media}}\n                            <div data-id=\"{{id}}\" data-quality-value=\"{{ext}}/{{quality}}/{{resolution}}\" class=\"quality-label j-quality {{#fast}}is-fast{{/fast}} {{#useConverter}}use-converter{{/useConverter}}\">\n                                <strong class=\"media-name {{type}}\">\n                                    {{#i18n_quality}}\n                                        {{i18n_quality}}\n                                    {{/i18n_quality}}\n                                    {{^i18n_quality}}\n                                        {{quality}}\n                                    {{/i18n_quality}}\n                                </strong>\n\n                                <p class=\"media-sub-wrap\">\n                                    <span class=\"media-sub-info info-ext\">\n                                        .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\n                                    </span>\n\n                                    <span class=\"media-sub-info info-size popup j-checked-size\">\n                                        {{size}}\n                                    </span>\n\n                                    <span class=\"media-sub-info info-resolution\">\n                                        {{resolution}}\n                                    </span>\n                                </p>\n                            </div>\n                        {{/media}}\n                    </div>\n                {{/media}}\n            </div>\n        </div>\n    </div>\n\n    {{#media}}\n        {{#media}}\n            <a title=\"{{title}}\" class=\"{{#playable}}play-now-btn{{/playable}} {{^playable}}download-btn{{/playable}} {{#hide}}visible{{/hide}} j-quality-download\"\n               data-quality=\"{{ext}}/{{quality}}/{{resolution}}\"\n               data-id=\"{{id}}\"\n               data-url=\"{{url}}\"\n               id=\"media_{{id}}\"\n               >\n                {{#playable}}\n                    <svg class=\"play-now-play-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M6.41171 3.33325C6.11775 3.33325 5.8294 3.41274 5.57765 3.5631C5.30283 3.71914 5.07527 3.94559 4.91883 4.21882C4.76207 4.4926 4.68255 4.80317 4.68855 5.1179L4.68855 14.8903C4.68255 15.205 4.76207 15.5156 4.91883 15.7894C5.07647 16.0647 5.30632 16.2925 5.58397 16.4487C5.82843 16.5871 6.1042 16.662 6.38566 16.6665L6.38836 16.6665C6.69761 16.6698 7.00127 16.585 7.26337 16.4223L15.4943 11.5337L15.5027 11.5285C15.7634 11.367 15.9785 11.1424 16.1276 10.8757C16.2767 10.609 16.3549 10.3091 16.3549 10.0041C16.3549 9.69915 16.2767 9.39921 16.1276 9.13251C15.9785 8.86582 15.7635 8.64109 15.5027 8.4796L7.25313 3.56752L7.25148 3.56652C6.99838 3.41395 6.70789 3.33325 6.41171 3.33325Z\" fill=\"white\"/>\n                    </svg>\n                {{/playable}}\n            </a>\n        {{/media}}\n    {{/media}}\n</div>",
  "template-media-sidepanel": "\n<div class=\"j-media-scope media-scope\" title=\"{{title}}\">\n        <span class=\"filename\" title=\"{{title}}\">\n            <label class=\"filename-content\">\n                <input type=\"checkbox\" />\n                <span> {{title}} </span>\n            </label>\n        </span>\n        <span class=\"content-holder\">\n            {{#hasVideo}}\n                {{#videoThumbnail}}\n                    <img class=\"banner video-banner\" src=\"{{videoThumbnail}}\" />\n                {{/videoThumbnail}}\n                {{^videoThumbnail}}\n                    <picture>\n                        <source srcset=\"images/PlaceholderVideoDark.png\" media=\"(prefers-color-scheme: dark)\">\n                        <img class=\"banner video-banner\" src=\"images/PlaceholderVideo.png\" />\n                    </picture>\n                {{/videoThumbnail}}\n            {{/hasVideo}}\n            {{^hasVideo}}\n                <picture>\n                    <source srcset=\"images/PlaceholderAudioDark.png\" media=\"(prefers-color-scheme: dark)\">\n                    <img class=\"banner audio-banner\" src=\"images/PlaceholderAudio.png\" />\n                </picture>\n            {{/hasVideo}}\n            <span class=\"options-holder\">\n                {{#audio_channel}}\n                    <div class=\"select-wrapper\">\n                        <span class=\"select audio-channel\">\n                            <span class=\"j-quality-option quality-option\">\n                                <span class=\"selected-type\">{{i18n_audio_channel_label}}</span>\n                                <span class=\"quality-option-ext-quality media-name audio\">\n                                    {{selected_audio.i18n_quality}}\n                                </span>\n                            </span>\n                        </span>\n\n                        <!-- Pseudo Select -->\n                        <div class=\"audio-channel-selector-box j-quality-selector\" hidden>\n                            <div class=\"quality-selector-box-relative\">\n                                {{#media}}\n                                    <div class=\"audio-item\" data-id=\"{{id}}\" title=\"{{quality}}\" data-quality-value=\"{{ext}}/{{quality}}\" class=\"j-audio-item\">\n                                        {{i18n_quality}}\n                                    </div>\n                                {{/media}}\n                            </div>\n                        </div>\n                    </div>\n                {{/audio_channel}}\n\n                <div class=\"select-wrapper\">\n                    <span class=\"select video\">\n                        <span class=\"j-quality-option quality-option\" data-item=\"auto\" hidden>\n                            <span class=\"quality-option-ext-quality\"></span>\n                        </span>\n                        <span class=\"j-quality-option quality-option\" data-item=\"loading\" hidden>\n                            <span class=\"quality-select-skeleton\"></span>\n                        </span>\n                        {{#media}}\n                            {{#media}}\n                                <span class=\"j-quality-option quality-option\" data-quality=\"{{ext}}/{{quality}}/{{resolution}}\" hidden>\n                                    <span class=\"quality-option-ext-quality\">\n                                        {{#i18n_quality}}\n                                            {{i18n_quality}}\n                                        {{/i18n_quality}}\n                                        {{^i18n_quality}}\n                                            {{#quality}}{{quality}}{{/quality}}\n                                        {{/i18n_quality}}\n                                    </span>\n                                    <span class=\"file-size{{#size}} done{{/size}}\" id=\"size_{{id}}\">{{size}}</span>\n                                </span>\n                            {{/media}}\n                        {{/media}}\n                    </span>\n\n                    <!-- Pseudo Select -->\n                    <div class=\"quality-selector-box j-quality-selector\" hidden>\n                        <div class=\"quality-selector-box-relative\">\n                            <div class=\"quality-selector-status\" data-status=\"loading\" hidden>\n                                <div class=\"quality-selector-qualities-header\">\n                                    <savior-image data-src=\"images/logo_cc.svg\"></savior-image>\n                                    <h3>{{i18n_download_box_header_title}}</h3>\n                                    <button class=\"quality-selector-qualities-close-button\">\n                                        <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                            <path d=\"M9.33339 19.5448L8.4552 18.6666L13.1219 13.9999L8.4552 9.33327L9.33339 8.45508L14.0001 13.1217L18.6667 8.45508L19.5449 9.33327L14.8782 13.9999L19.5449 18.6666L18.6667 19.5448L14.0001 14.8781L9.33339 19.5448Z\" fill=\"currentColor\"/>\n                                        </svg>\n                                    </button>\n                                </div>\n                                <div class=\"quality-selector-status-content\">\n                                    <span class=\"loading-3-dots quality-selector-status-icon\"></span>\n                                    <span class=\"quality-selector-status-text\"></span>\n                                </div>\n                            </div>\n                            <div class=\"quality-selector-status\" data-status=\"error\" hidden>\n                                <div class=\"quality-selector-qualities-header\">\n                                    <savior-image data-src=\"images/logo_cc.svg\"></savior-image>\n                                    <h3>{{i18n_download_box_header_title}}</h3>\n                                    <button class=\"quality-selector-qualities-close-button\">\n                                        <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                            <path d=\"M9.33339 19.5448L8.4552 18.6666L13.1219 13.9999L8.4552 9.33327L9.33339 8.45508L14.0001 13.1217L18.6667 8.45508L19.5449 9.33327L14.8782 13.9999L19.5449 18.6666L18.6667 19.5448L14.0001 14.8781L9.33339 19.5448Z\" fill=\"currentColor\"/>\n                                        </svg>\n                                    </button>\n                                </div>\n                                <div class=\"quality-selector-status-content\">\n                                    <img src=\"/images/ic-report-circle.svg\" alt=\"ic-not-found\" class=\"notfound-icon\" />\n                                    <span class=\"quality-selector-status-text\"></span>\n                                </div>\n                            </div>\n                            <div class=\"quality-selector-qualities\">\n                                <div class=\"quality-selector-qualities-header\">\n                                    <savior-image data-src=\"images/logo_cc.svg\"></savior-image>\n                                    <h3>{{i18n_download_box_header_title}}</h3>\n                                    <button class=\"quality-selector-qualities-close-button\">\n                                        <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                            <path d=\"M9.33339 19.5448L8.4552 18.6666L13.1219 13.9999L8.4552 9.33327L9.33339 8.45508L14.0001 13.1217L18.6667 8.45508L19.5449 9.33327L14.8782 13.9999L19.5449 18.6666L18.6667 19.5448L14.0001 14.8781L9.33339 19.5448Z\" fill=\"currentColor\"/>\n                                        </svg>\n                                    </button>\n                                </div>\n                                {{#media}}\n                                    <div class=\"extension-box\">\n                                        <div class=\"extensions-label\">\n                                            {{{type_icon}}}\n                                            <strong>{{i18n_type}}</strong>\n                                        </div>\n                                        {{#media}}\n                                            <div data-id=\"{{id}}\" data-quality-value=\"{{ext}}/{{quality}}/{{resolution}}\" class=\"quality-label j-quality {{#fast}}is-fast{{/fast}} {{#useConverter}}use-converter{{/useConverter}}\">\n                                                <strong class=\"media-name {{type}}\">\n                                                    {{#i18n_quality}}\n                                                        {{i18n_quality}}\n                                                    {{/i18n_quality}}\n                                                    {{^i18n_quality}}\n                                                        {{quality}}\n                                                    {{/i18n_quality}}\n                                                </strong>\n\n                                                <p class=\"media-sub-wrap {{#resolution}}with-resolution{{/resolution}}\">\n                                                    {{#resolution}}\n                                                        <span class=\"media-sub-info info-resolution\">\n                                                            {{resolution}}\n                                                        </span>\n                                                    {{/resolution}}\n                                                    <span class=\"media-sub-info info-ext\">\n                                                        .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\n                                                    </span>\n                                                </p>\n                                            </div>\n                                        {{/media}}\n                                    </div>\n                                {{/media}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                {{#media}}\n                    {{#media}}\n                        <a title=\"{{title}}\" class=\"{{#playable}}play-now-btn{{/playable}} {{^playable}}download-btn{{/playable}} {{#hide}}visible{{/hide}} j-quality-download\"\n                        data-quality=\"{{ext}}/{{quality}}/{{resolution}}\"\n                        data-id=\"{{id}}\"\n                        data-url=\"{{url}}\"\n                        id=\"media_{{id}}\"\n                        >\n                            <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M5.25645 16.2499C4.8355 16.2499 4.4792 16.1041 4.18753 15.8124C3.89586 15.5207 3.75003 15.1644 3.75003 14.7435V12.4999H5.00001V14.7435C5.00001 14.8076 5.02672 14.8664 5.08013 14.9198C5.13356 14.9732 5.19234 14.9999 5.25645 14.9999H14.7436C14.8077 14.9999 14.8665 14.9732 14.9199 14.9198C14.9733 14.8664 15 14.8076 15 14.7435V12.4999H16.25V14.7435C16.25 15.1644 16.1042 15.5207 15.8125 15.8124C15.5208 16.1041 15.1645 16.2499 14.7436 16.2499H5.25645ZM10 13.0127L6.44236 9.45507L7.32055 8.55125L9.37503 10.6057V3.60571H10.625V10.6057L12.6795 8.55125L13.5577 9.45507L10 13.0127Z\" fill=\"#25AF50\"/>\n                            </svg>\n                            <span>\n                                {{#hasVideo}}\n                                    {{i18n_download_video}}\n                                {{/hasVideo}}\n\n                                {{^hasVideo}}\n                                    {{i18n_download_audio}}\n                                {{/hasVideo}}\n                            </span>\n                        </a>\n                    {{/media}}\n                {{/media}}\n            </span>\n        </span>\n</div>\n",
  "template-media-sidepanel-image": "<div class=\"j-media-scope media-scope\" title=\"{{url}}\" data-title=\"{{url}}\" data-filename=\"{{filename}}\" data-totalpixel=\"{{totalPixel}}\">\n        <span class=\"filename\">\n            <label  class=\"filename-content\">\n                <input type=\"checkbox\" />\n                <span> {{url}} </span>\n            </label>\n        </span>\n        <span class=\"content-holder\">\n            <img class=\"image-media-display\" src=\"{{url}}\" crossorigin=\"anonymous\" />\n            <span class=\"options-holder\">\n                <div class=\"details\">\n                    {{width}}x{{height}} • {{sizeKiloBytes}}KB • {{extension}}\n                </div>\n                <a title=\"{{title}}\" class=\"download-btn {{#hide}}visible{{/hide}} j-image-download\"\n                data-url=\"{{url}}\"\n                >       \n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M5.25645 16.2499C4.8355 16.2499 4.4792 16.1041 4.18753 15.8124C3.89586 15.5207 3.75003 15.1644 3.75003 14.7435V12.4999H5.00001V14.7435C5.00001 14.8076 5.02672 14.8664 5.08013 14.9198C5.13356 14.9732 5.19234 14.9999 5.25645 14.9999H14.7436C14.8077 14.9999 14.8665 14.9732 14.9199 14.9198C14.9733 14.8664 15 14.8076 15 14.7435V12.4999H16.25V14.7435C16.25 15.1644 16.1042 15.5207 15.8125 15.8124C15.5208 16.1041 15.1645 16.2499 14.7436 16.2499H5.25645ZM10 13.0127L6.44236 9.45507L7.32055 8.55125L9.37503 10.6057V3.60571H10.625V10.6057L12.6795 8.55125L13.5577 9.45507L10 13.0127Z\" fill=\"#25AF50\"/>\n                    </svg>\n                    {{i18n_download_image}}\n                </a>                \n            </span>\n        </span>\n</div>",
  "template-onboard-popup": "{{#sidebar_onboard_title}}\n    <div class='popup-header'>\n        {{^no_logo}}<div class='logo'></div>{{/no_logo}}\n        <div class='title'>{{sidebar_onboard_title}}</div>\n        {{#close_button}}\n            <div class='close_button'>\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n        {{/close_button}}\n    </div>\n{{/sidebar_onboard_title}}\n{{#img_class}}\n    <div class='feature-img {{#has_sep}}has_sep{{/has_sep}} {{#img_no_padding}}img_no_padding{{/img_no_padding}}'>\n        <picture>\n            {{#img_sources}}\n                <source srcset='{{srcset}}' media=\"{{mediaQuery}}\" />\n            {{/img_sources}}\n            <img src='{{img_class}}'/>\n            {{#img_central_qr}}\n                <img class='central-qr' src='{{img_central_qr}}'/>\n            {{/img_central_qr}}\n        </picture>\n        {{#button_icon_selector_show}}\n            <div class='control'>\n                <div class='icon messenger {{#messenger_active}}active{{/messenger_active}}'></div>\n                <div class='icon zalo {{#zalo_active}}active{{/zalo_active}}'></div>\n                <div class='icon tele {{#tele_active}}active{{/tele_active}}'></div>\n                <div class='icon skype {{#skype_active}}active{{/skype_active}}'></div>\n            </div>\n        {{/button_icon_selector_show}}\n    </div>\n{{/img_class}}\n<div class ='big-desc'no_header>\n    {{i18n_big_desc_text}}\n</div>\n<div class='desc {{#i18n_big_desc_text}} has-big-desc {{/i18n_big_desc_text}} {{^sidebar_onboard_title}}no_header{{/sidebar_onboard_title}}'>\n    {{{i18n_desc_text}}}\n</div>\n<div class='bottom-control {{^sidebar_onboard_title}}no_header{{/sidebar_onboard_title}} {{^img_class}}no_img{{/img_class}} {{#has_sep}}has_sep{{/has_sep}}'>\n    {{#pass_text}}\n        <button class='cancel-btn'>\n            {{pass_text}}\n        </button>\n    {{/pass_text}}\n    {{#i18n_try_now}}\n        <button class='onboarding-btn'>\n            {{#button_icon}}\n                <div class='icon {{button_icon}}'></div>\n            {{/button_icon}}\n            <span>{{i18n_try_now}}</span>\n        </button>\n    {{/i18n_try_now}}\n</div>",
  "template-onboard-popup-horizontal": "<div class=\"onboard-popup-body-horizontal\">\n    {{#img_class}}\n        <div class='feature-img'>\n            <picture>\n                {{#img_sources}}\n                    <source srcset='{{srcset}}' media=\"{{mediaQuery}}\" />\n                {{/img_sources}}\n                <img src='{{img_class}}'/>\n                {{#img_central_qr}}\n                    <img class='central-qr' src='{{img_central_qr}}'/>\n                {{/img_central_qr}}\n            </picture>\n            {{#button_icon_selector_show}}\n                <div class='control'>\n                    <div class='icon messenger {{#messenger_active}}active{{/messenger_active}}'></div>\n                    <div class='icon zalo {{#zalo_active}}active{{/zalo_active}}'></div>\n                    <div class='icon tele {{#tele_active}}active{{/tele_active}}'></div>\n                    <div class='icon skype {{#skype_active}}active{{/skype_active}}'></div>\n                </div>\n            {{/button_icon_selector_show}}\n        </div>\n    {{/img_class}}\n    {{#feature_video_url}}\n        <video class=\"feature-video\" height='180' width=\"auto\" autoplay muted loop>\n            <source src=\"https://cdn.coccoc.com/static/videos/browser/onboarding-en-to-vi.mp4\" type=\"video/mp4\">\n            Your browser does not support HTML video.\n        </video>\n    {{/feature_video_url}}\n    <div class=\"onboard-popup-body-horizontal-content\">\n        <div class='desc {{^img_class}}{{^feature_video_url}}no_header{{/feature_video_url}}{{/img_class}}'>\n            {{#feature_video_url}}\n                <div class='title'>\n                    {{{sidebar_onboard_title}}}\n                </div>\n            {{/feature_video_url}}\n            {{{i18n_desc_text}}}\n        </div>\n        <div class='bottom-control {{^img_class}}{{^feature_video_url}}no_header{{/feature_video_url}}{{/img_class}} {{#feature_video_url}}video{{/feature_video_url}}'>\n            {{#pass_text}}\n                <button class='cancel-btn'>\n                    <span>{{pass_text}}</span>\n                </button>\n            {{/pass_text}}\n            {{#i18n_try_now}}\n                <button class='onboarding-btn'>\n                    {{#button_icon}}\n                        <div class='icon {{button_icon}}'></div>\n                    {{/button_icon}}\n                    <span>{{i18n_try_now}}</span>\n                </button>\n            {{/i18n_try_now}}\n        </div>\n    </div>\n</div>",
  "template-tooltip-play-now-bottom": "<div class=\"tooltip-box tooltip-box-bottom\" hidden>\n    <div class=\"tooltip tleft\">\n        {{{i18n_play_text}}}\n        <form action=\"\" class=\"not-show\">\n            <input type=\"checkbox\" name=\"vehicle\" value=\"\" id=\"play-now-not-show-check-bottom\">\n            <label for=\"play-now-not-show-check-bottom\">{{i18n_play_not_show}}</label>\n        </form>\n        <span class=\"closebtn\" id=\"close-play-now-tooltip-bottom\">\n            <svg width=\"16\" height=\"16\" focusable=\"false\" role=\"img\" viewBox=\"0 0 320 512\">\n                <path fill=\"currentColor\" d=\"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z\" />\n            </svg>\n        </span>\n    </div>\n</div>",
  "template-mobile-transfer-panel": "<dropdown-box class=\"transfer-to-mobile hidden\">\n    <div class=\"mobile-content-box\">\n\n        <dropdown-box-header class=\"mobile-content-box-header\">\n            <savior-image data-src=\"images/logo_cc.svg\"></savior-image>\n            <h2>{{i18n_mobile_header_title}}</h2>\n            <button class=\"dropdown-box-closer\" id=\"mobile-transfer-closer\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M5.33327 15.5448L4.45508 14.6667L9.12174 9.99999L4.45508 5.33333L5.33327 4.45514L9.99993 9.12181L14.6666 4.45514L15.5448 5.33333L10.8781 9.99999L15.5448 14.6667L14.6666 15.5448L9.99993 10.8782L5.33327 15.5448Z\" fill=\"currentColor\"/>\n                </svg>\n            </button>\n        </dropdown-box-header>\n\n        <savior-row class=\"mobile-content-body\">\n            <instruction class=\"\">\n                <div class=\"mobile-instruction-text\">{{i18n_mobile_instruction_1}}</div>\n                <div class=\"mobile-instruction-image\">\n                    <picture>\n                        <source srcset=\"\" media=\"(prefers-color-scheme: dark)\" id=\"mobile-instruction-image-dark\">\n                        <img src=\"\" alt=\"Instruction\" id=\"mobile-instruction-image\">\n                    </picture>\n                </div>\n\n            </instruction>\n\n            <instruction class=\"\">\n                <div class=\"mobile-instruction-text\">{{i18n_mobile_instruction_2}}</div>\n                <savior-row class=\"mobile-instruction-body\">\n                    <div class=\"mobile-switch-box\">\n                        <div class=\"switch\">\n                            <savior-row class=\"switch-field\">\n                                <input type=\"radio\" id=\"switch-video\" name=\"send-type\" value=\"video\" checked />\n                                <label for=\"switch-video\">\n                                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path d=\"M4.54791 19.5C4.04278 19.5 3.61521 19.325 3.26521 18.975C2.91523 18.625 2.74023 18.1974 2.74023 17.6922V6.3077C2.74023 5.80257 2.91523 5.375 3.26521 5.025C3.61521 4.675 4.04278 4.5 4.54791 4.5H15.9325C16.4376 4.5 16.8652 4.675 17.2152 5.025C17.5652 5.375 17.7402 5.80257 17.7402 6.3077V10.8846L21.2593 7.36543V16.6345L17.7402 13.1153V17.6922C17.7402 18.1974 17.5652 18.625 17.2152 18.975C16.8652 19.325 16.4376 19.5 15.9325 19.5H4.54791ZM4.54791 18H15.9325C16.0222 18 16.096 17.9711 16.1536 17.9134C16.2113 17.8557 16.2402 17.782 16.2402 17.6922V6.3077C16.2402 6.21795 16.2113 6.14423 16.1536 6.08652C16.096 6.02882 16.0222 5.99997 15.9325 5.99997H4.54791C4.45816 5.99997 4.38443 6.02882 4.32673 6.08652C4.26903 6.14423 4.24018 6.21795 4.24018 6.3077V17.6922C4.24018 17.782 4.26903 17.8557 4.32673 17.9134C4.38443 17.9711 4.45816 18 4.54791 18Z\" fill=\"currentColor\"/>\n                                    </svg>\n                                    <span>{{i18n_mobile_video}}</span>\n                                </label>\n                                <input type=\"radio\" id=\"switch-audio\" name=\"send-type\" value=\"audio\" />\n                                <label for=\"switch-audio\">\n                                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.01641 19.3757C4.70182 20.0611 5.52577 20.4038 6.48826 20.4038C7.45074 20.4038 8.27469 20.0611 8.96011 19.3757C9.64551 18.6903 9.98821 17.8663 9.98821 16.9038V6.86537H19.5123V14.0885C19.2315 13.8603 18.9238 13.6891 18.5892 13.575C18.2546 13.4609 17.8956 13.4039 17.5123 13.4039C16.5498 13.4039 15.7259 13.7466 15.0405 14.432C14.355 15.1174 14.0123 15.9413 14.0123 16.9038C14.0123 17.8663 14.355 18.6903 15.0405 19.3757C15.7259 20.0611 16.5498 20.4038 17.5123 20.4038C18.4748 20.4038 19.2987 20.0611 19.9842 19.3757C20.6696 18.6903 21.0123 17.8663 21.0123 16.9038V6.86537V3.59619H20.0121H19.5123H8.48826V14.0885C8.20749 13.8603 7.8998 13.6891 7.56518 13.575C7.23056 13.4609 6.87159 13.4039 6.48826 13.4039C5.52577 13.4039 4.70182 13.7466 4.01641 14.432C3.33099 15.1174 2.98828 15.9413 2.98828 16.9038C2.98828 17.8663 3.33099 18.6903 4.01641 19.3757Z\" fill=\"currentColor\"/>\n                                    </svg>\n                                    <span>{{i18n_mobile_audio}}</span>\n                                </label>\n                            </savior-row>\n\n                        </div>\n                    </div>\n                    <savior-row class=\"mobile-qrcode mobile-default-row-gap\">\n                        <div class=\"qrcode loading\"></div>\n                    </savior-row>\n                </savior-row>\n            </instruction>\n        </savior-row>\n\n        <savior-row class=\"mobile-footer mobile-default-row-gap\">\n            <div class=\"footer-text\">{{i18n_mobile_panel_footer}}</div>\n            <savior-row class=\"download-web-stores\">\n                <figure class=\"store google-play\" id=\"google-play\"></figure>\n                <figure class=\"store app-store\" id=\"app-store\"></figure>\n            </savior-row>\n        </savior-row>\n    </div>\n</dropdown-box>\n",
  "template-promote-serp": "<div class=\"promote-serp-block\">\n    <div id=\"close\">&times;</div>\n    <p>{{i18n_desc}}</p>\n\n    <div class=\"btn-block\">\n        <button class=\"btn green\" id=\"check\">{{i18n_btn_check}}</button>\n        <button class=\"btn\" id=\"settings\">{{i18n_btn_settings}}</button>\n    </div>\n</div>",
  "template-onboard-new-panel": "<dropdown-box id=\"onboard-nmp\" hidden=\"true\">\n    <dropdown-box-body>\n        <div class=\"info\">\n            <h2 data-text=\"header\">{{i18n_onboard_header}}</h2>\n            <p class=\"\" data-text=\"desc\">{{i18n_onboard_desc}}</p>\n        </div>\n        <savior-row class=\"onboard-nmp-footer\">\n            <step-indicator id=\"onboard-nmp-indicator\" steps=\"3\" current=\"1\" controls></step-indicator>\n            <savior-row>\n                <button class=\"btn-chip\" id=\"onboard-nmp-abort\" >\n                    <span>{{i18n_abort}}</span>\n                </button>\n                <button class=\"btn-chip btn-primary\" id=\"onboard-nmp-next\" >\n                    <span>{{i18n_next}}</span>\n                </button>\n                <button class=\"btn-chip btn-primary\" id=\"onboard-nmp-complete\" >\n                    <span>{{i18n_complete}}</span>\n                </button>\n            </savior-row>\n        </savior-row>\n    </dropdown-box-body>\n</dropdown-box>",
  "template-onboard-youtube-anti-adblocker": "<dropdown-box id=\"onboard-yaa\" hidden=\"true\">\n    <dropdown-box-body>\n        <div class=\"info\">\n            <h2 data-text=\"header\">\n                {{i18n_onboard_header}}\n                <button id=\"onboard-yaa-close\" title=\"{{i18n_close}}\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M5.33339 15.5448L4.4552 14.6667L9.12187 9.99999L4.4552 5.33333L5.33339 4.45514L10.0001 9.12181L14.6667 4.45514L15.5449 5.33333L10.8782 9.99999L15.5449 14.6667L14.6667 15.5448L10.0001 10.8782L5.33339 15.5448Z\" fill=\"currentColor\"/>\n                    </svg>\n                </button>\n            </h2>\n            <p class=\"\" data-text=\"desc\">{{{i18n_onboard_desc}}}</p>\n        </div>\n        <savior-row class=\"onboard-yaa-footer\">\n            <img src=\"{{image_source}}\" alt=\"Youtube anti-adblocker guide\" />\n        </savior-row>\n    </dropdown-box-body>\n</dropdown-box>",
};

function setupDefaultTemplates() {
  if (typeof chrome === 'undefined' || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(['template-widget'], (res) => {
    if (!res || !res['template-widget']) {
      chrome.storage.local.set(DEFAULT_TEMPLATES, () => {});
    }
  });
}
setupDefaultTemplates();
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onStartup) {
  chrome.runtime.onStartup.addListener(setupDefaultTemplates);
}
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onInstalled) {
  chrome.runtime.onInstalled.addListener(setupDefaultTemplates);
}
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
    function checkItemState(item) {
      return new Promise((resolve) => {
        if (!item || (item.state !== 'downloading' && item.state !== 'in_progress' && item.state !== 'queued')) {
          return resolve(item);
        }
        if (item.chromeId && chrome.downloads && typeof chrome.downloads.search === 'function') {
          try {
            chrome.downloads.search({ id: Number(item.chromeId) }, (results) => {
              if (chrome.runtime && chrome.runtime.lastError) {
                return resolve(item.isBrowserDownload ? item : { ...item, state: 'error', error: 'Interrupted', errorMessage: 'Interrupted when browser closed', speed: '' });
              }
              const d = results && results[0];
              if (d && d.state === 'in_progress') {
                return resolve(item); // Still in progress in browser!
              } else if (d && d.state === 'complete') {
                return resolve({ ...item, state: 'completed', percent: '100%', speed: 'Completed' });
              } else if (item.isBrowserDownload && !d) {
                return resolve({ ...item, state: 'error', error: 'Interrupted', errorMessage: 'Interrupted when browser closed', speed: '' });
              }
              return resolve({ ...item, state: 'error', error: 'Interrupted', errorMessage: 'Interrupted when browser closed', speed: '' });
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
          error: 'Interrupted',
          errorMessage: 'Interrupted when browser closed',
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
  const rawUrlObj = (options.url && typeof options.url === 'object' && !Array.isArray(options.url)) ? options.url : null;
  const videoUrl = options.videoUrl || (rawUrlObj && rawUrlObj.videoUrl) || '';
  const audioUrl = options.audioUrl || (rawUrlObj && rawUrlObj.audioUrl) || '';
  const url = String(videoUrl || (typeof options.url === 'string' ? options.url : '') || '').toLowerCase();
  if (options.convertToMp3 || options.convertToMp4 || options.soundOnly || options.streamsNumber === -42 || options.streamsNumber === -43) {
    return true;
  }
  if (videoUrl && audioUrl && videoUrl !== audioUrl) {
    return true;
  }
  if (options.play_list || options.playList || options.hls || options.isHls || options.isConversionStream) {
    return true;
  }
  if (
    url.includes('.m3u8') ||
    url.includes('/hls/') ||
    url.includes('format=m3u8') ||
    url.includes('type=m3u8') ||
    url.includes('playlist') ||
    url.includes('.mpd') ||
    url.includes('/dash/')
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
    speed: 'Downloading (Browser)...',
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
    speed: 'Downloading (Browser)...',
    size: '0 B',
    startTime: task.startTime
  });

  setActionBadge('1%', '#10b981');
  broadcastTaskEvent({
    action: 'nativeProgress',
    taskId: historyId,
    percent: '1%',
    speed: 'Downloading (Browser)...',
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
  if (!u || typeof u !== 'string' || /^https:\/\/(www\.)?google\.com\/?$/i.test(u)) return false;
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
  if (requiresNativeHelper(options)) {
    console.warn('[Savior] startBrowserDownload cannot process playlist, combined stream, or conversion without native helper:', targetUrl);
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
    const errorText = String(error && (error.message || error) || 'VidManager could not start download');
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
        const reason = error || chrome.runtime.lastError || 'VidManager did not return a download ID';
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
        finish(null, 'VidManager did not respond to download request within 10 seconds');
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
        task.speed = 'Completed';
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
          speed: 'Completed',
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
          speed: (err === 'USER_CANCELED') ? 'Canceled' : 'Interrupted'
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
let nativeProbeFinish = null;

function probeNativeHelper() {
  if (nativeProbePromise) return nativeProbePromise;
  nativeProbePromise = new Promise((resolve) => {
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      if (nativeProbeFinish === finish) nativeProbeFinish = null;
      nativeProbeSettled = true;
      nativeHelperAvailable = ok;
      if (!ok) console.log('[Savior] Native helper not detected.');
      resolve(ok);
    };
    nativeProbeFinish = finish;
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
  if (nativeProbeSettled) return nativeHelperAvailable;
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
      if (typeof nativeProbeFinish === 'function') {
        const fn = nativeProbeFinish;
        nativeProbeFinish = null;
        fn(false);
      }
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
            speed: 'Connection lost'
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
    const started = startNativeDownload(next.params, next.callback);
    if (!started) {
      console.warn('[Savior] Queued native download failed to start:', next.params);
      if (task) {
        task.state = 'error';
        task.error = 'START_FAILED';
        activeDownloads.delete(task.id);
        updateDownloadHistory({
          id: task.id,
          state: 'error',
          error: 'START_FAILED',
          errorMessage: 'Failed to start download.'
        });
      }
      setTimeout(processNextQueuedNativeDownload, 50);
    }
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

  // Step 2: Prioritize explicit video streams (MP4 / WebM / TOS CDN / video mime)
  const videoStream = list.slice().reverse().find(s => {
    if (!s || !s.url) return false;
    const lu = s.url.toLowerCase();
    const isVid = s.format === 'MP4' || s.format === 'WEBM' || s.type === 'video' ||
      lu.includes('/video/tos/') || lu.includes('mime_type=video') || lu.includes('.mp4') || lu.includes('.webm') ||
      lu.includes('tiktokcdn') || lu.includes('byteoversea') || lu.includes('tiktok.com');
    const isChunk = /\.(otf|ttf|woff2?|jpe?g|png|webp|svg|gif|key|ts|m4s|css|js)(\?|$)/i.test(lu);
    return isVid && !isChunk;
  });
  if (videoStream) return videoStream.url;

  // Step 3: Fallback to direct media file, excluding chunks
  const direct = list.slice().reverse().find(s => {
    if (!s || !s.url) return false;
    const lu = s.url.toLowerCase();
    return !/\.(otf|ttf|woff2?|jpe?g|png|webp|svg|gif|key|ts|m4s|css|js)(\?|$)/i.test(lu);
  });
  return direct ? direct.url : null;
}

function isBogusStreamUrl(url, pageUrl) {
  const options = arguments[2];
  if (options && (options.play_list || options.playList)) return false;
  if (url && typeof url === 'object' && !Array.isArray(url)) {
    if (url.play_list || url.playList) return false;
    url = url.videoUrl || url.url || '';
  }
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
    clean === 'https://www.google.com' ||
    clean === 'https://www.google.com/' ||
    clean.includes('blob:a.a')
  ) {
    return true;
  }
  // Static assets and non-media extensions (exclude fonts, scripts, stylesheets, raw images)
  if (/\.(otf|ttf|woff2?|jpe?g|png|webp|svg|gif|css|js)(\?|$)/i.test(clean)) {
    return true;
  }
  try {
    const parsed = new URL(url);
    const pathname = parsed.pathname.toLowerCase();
    // Bare origins, root, or index paths are webpages, not streams
    if (!pathname || (pathname === '/' && !parsed.search) || pathname === '/index.html' || pathname === '/index.php') {
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
    const hasMediaExt = /\.(mp4|m3u8|mpd|webm|mkv|mov|ts|m4s|mp3|m4a|aac|flac|wav|ogg|vtt|srt)(\?|$)/i.test(clean);
    const hasMediaMime = /mime(_type)?=(video|audio)|format=(m3u8|mpd|mp4)|type=(m3u8|mpd|mp4)|amplify_video|videoplayback|media_type=video/i.test(clean);
    const hasStreamSignature = hasMediaExt || hasMediaMime ||
      clean.includes('/m3u8/') || clean.includes('/hls/') || clean.includes('/video/tos/') ||
      clean.includes('tiktokcdn.com') || clean.includes('byteoversea.com') || clean.includes('ibytedtos.com') ||
      clean.includes('tiktokcdn-us.com') || clean.includes('tiktokcdn-eu.com') ||
      clean.includes('douyinvod.com') || clean.includes('zjcdn.com') || clean.includes('bytevd.com') || clean.includes('bytedance.net') ||
      clean.includes('googlevideo.com') || clean.includes('fbcdn.net') || clean.includes('cdninstagram.com') ||
      clean.includes('bilivideo.com') || clean.includes('hdslb.com') || clean.includes('biliapi.net') ||
      clean.includes('xhscdn.com') || clean.includes('weibocdn.com') || clean.includes('vimeocdn.com') ||
      clean.includes('vod-progressive.akamaized.net') || clean.includes('dmcdn.net') ||
      clean.includes('vkusercontents.com') || clean.includes('mycdn.me') || clean.includes('sndcdn.com') ||
      clean.includes('zadn.vn') || clean.includes('zmdcdn.me') || clean.includes('nixcdn.com') ||
      clean.includes('fptplay.net') || clean.includes('vieon.vn') || clean.includes('twimg.com');
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

  return targetUrl;
}

function startNativeDownload(downloadParams, callback) {
  const normalizeStreamField = (v) => {
    if (!v) return '';
    if (typeof v === 'string') return v;
    if (Array.isArray(v)) return v.find(u => typeof u === 'string' && u) || '';
    return (typeof v === 'object') ? (v.videoUrl || v.url || '') : '';
  };
  if (downloadParams.url && typeof downloadParams.url === 'object' && !Array.isArray(downloadParams.url) && !downloadParams.audioUrl && downloadParams.url.audioUrl) {
    downloadParams.audioUrl = downloadParams.url.audioUrl;
  }
  downloadParams.url = normalizeStreamField(downloadParams.url);
  downloadParams.videoUrl = normalizeStreamField(downloadParams.videoUrl);
  if (Array.isArray(downloadParams.audioUrl)) {
    downloadParams.audioUrl = downloadParams.audioUrl.find(u => typeof u === 'string' && u) || '';
  } else if (downloadParams.audioUrl && typeof downloadParams.audioUrl === 'object') {
    downloadParams.audioUrl = downloadParams.audioUrl.audioUrl || downloadParams.audioUrl.url || '';
  }

  if (nativeProbeSettled && !nativeHelperAvailable) {
    console.warn('[Savior] Native helper unavailable (probe failed); checking if native host required');
    const needsNative = requiresNativeHelper(downloadParams);
    if (needsNative) {
      const fakeId = downloadParams.taskId || ++fakeIdCounter;
      updateDownloadHistory({
        id: fakeId,
        title: downloadParams.title || downloadParams.filename || 'video',
        filename: downloadParams.filename || 'video.mp4',
        url: downloadParams.videoUrl || downloadParams.url || '',
        state: 'error',
        error: 'NATIVE_HOST_REQUIRED',
        errorMessage: 'VidManager Native Helper is required to download HLS/DASH streams and mux high-definition video.',
        startTime: Date.now(),
        endTime: Date.now()
      });
      if (typeof callback === 'function') callback(null);
    }
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
  const hasPlayList = Boolean(downloadParams.play_list || downloadParams.playList);
  if (!hasPlayList) {
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
  } else {
    if (!targetUrl) {
      targetUrl = 'https://www.google.com';
      downloadParams.url = targetUrl;
      downloadParams.videoUrl = targetUrl;
    }
    downloadParams.isConversionStream = true;
    downloadParams.hls = true;
  }

  // The Cốc Cốc bundle fires a "pre-resolution" download request with empty
  // URLs (just the quality label) ~100ms before the real one arrives. Starting
  // a native task for it produced a ghost history card stuck at 1% plus a
  // pointless browser-fallback roundtrip. Nothing to download = no task.
  if (!targetUrl || isBogusStreamUrl(targetUrl, effectivePage, downloadParams)) {
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
  const isGenericFeedTitle = (str) => {
    if (!str || typeof str !== 'string') return true;
    const lower = str.trim().toLowerCase();
    return lower === 'tiktok - make your day' || lower === 'tiktok' || lower === 'facebook' ||
      lower === 'x' || lower === 'twitter' || lower === 'instagram' || lower === 'youtube' ||
      lower === 'video' || lower === 'videos' || lower === 'watch' || lower === 'untitled' ||
      lower === 'null' || lower === 'undefined';
  };
  const isFeedPageUrl = (u) => {
    try {
      const p = new URL(u).pathname.toLowerCase();
      return p === '/' || p === '' || p === '/feed' || p === '/foryou' || p === '/following' ||
        p === '/explore' || p === '/reels' || p === '/watch' || p === '/home';
    } catch (_) { return false; }
  };

  for (const [dupId, t] of activeDownloads.entries()) {
    if (downloadParams.taskId && String(t.id) === String(downloadParams.taskId)) continue;
    const tAudio = t.audioUrl || (t.params && t.params.audioUrl) || '';
    const tVideo = t.url || '';
    const samePageAndTitle = Boolean(
      effectivePage && t.pageUrl && effectivePage === t.pageUrl &&
      t.title && downloadParams.title && t.title.toLowerCase() === downloadParams.title.toLowerCase() &&
      !isGenericFeedTitle(downloadParams.title) && !isFeedPageUrl(effectivePage) &&
      (!targetUrl || !tVideo || targetUrl === tVideo)
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
        speed: 'Queued...',
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
        speed: 'Queued...',
        size: '0 B',
        startTime: task.startTime
      });

      broadcastTaskEvent({
        action: 'nativeProgress',
        taskId: fakeId,
        percent: '0%',
        speed: 'Queued...',
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
    speed: 'Starting connection...',
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
    speed: 'Starting connection...',
    size: '0 B',
    startTime: task.startTime
  });

  setActionBadge('1%', '#10b981');
  broadcastTaskEvent({
    action: 'nativeProgress',
    taskId: fakeId,
    percent: '1%',
    speed: 'Starting connection...',
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
        speed: 'Completed',
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
          speed: 'Canceled',
          error: 'User canceled'
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
      play_list: downloadParams.play_list || downloadParams.playList || '',
      title: safeFilename.replace(/\.[^.]+$/, ''),
      filename: safeFilename,
      referer: downloadParams.referrer || resolvedPageUrl,
      pageUrl: resolvedPageUrl,
      quality: downloadParams.convertToMp3 || downloadParams.soundOnly ? 'audio' : (downloadParams.quality || 'best'),
      soundOnly: Boolean(downloadParams.soundOnly),
      convertToMp3: Boolean(downloadParams.convertToMp3 || downloadParams.soundOnly),
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
    speed: 'Connecting via Chrome...',
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
        id: fakeId, state: 'completed', percent: '100%', speed: 'Completed', endTime: Date.now(),
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
        updateDownloadHistory({ id: fakeId, state: 'canceled', speed: 'Canceled', error: 'User canceled' });
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
      let fallbackStarted = false;
      if (isSessionProtectedStream(opts) && !opts._relayFailed && !isBogusStreamUrl(opts.url || opts.videoUrl, opts.pageUrl)) {
        opts._relayFailed = true;
        opts.taskId = fakeId;
        fallbackStarted = startCocCocSessionDownload(opts);
      } else if (!opts._relayFailed && !isBogusStreamUrl(opts.url || opts.videoUrl, opts.pageUrl)) {
        opts._relayFailed = true;
        opts.taskId = fakeId;
        fallbackStarted = startBrowserDownload(opts);
      }
      if (!fallbackStarted) {
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
      updateDownloadHistory({ id: fakeId, percent: pct, speed: 'Downloading via Chrome...', size: total > 0 ? `${formatRelayBytes(bytesRelayed)} / ${formatRelayBytes(total)}` : formatRelayBytes(bytesRelayed) });
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
      const isTikTokOrDouyin = /tiktok|douyin|byteoversea|ibytedtos|bytevd|zjcdn/i.test(targetUrl) || /tiktok\.com|douyin\.com/i.test(resolvedPageUrl);
      const isCdnStream = !isTikTokOrDouyin && false;
      const fetchCreds = isCdnStream ? 'omit' : 'include'; // Uses credentials: 'include' for same-origin and TikTok/Douyin session streams

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
          try {
            return await fetch(url, { ...opts, signal: ctrl.signal });
          } catch (fetchErr) {
            if (opts.credentials !== 'omit' && !ctrl.signal.aborted) {
              console.warn('[Savior] Fetch failed with credentials, retrying with credentials: omit:', fetchErr && fetchErr.message);
              return await fetch(url, { ...opts, credentials: 'omit', signal: ctrl.signal });
            }
            throw fetchErr;
          }
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
        let fallbackToSingle = false;
        try {
          // Multi-threaded: WORKERS parallel Range fetches, each pumping into
          // its own slice of the file. One abort signal kills them all on Cancel.
          const slice = Math.ceil(total / WORKERS);
          const splitAbortCtrl = new AbortController();
          const onParentAbort = () => splitAbortCtrl.abort(abortCtrl.signal.reason);
          abortCtrl.signal.addEventListener('abort', onParentAbort, { once: true });

          const jobs = [];
          for (let w = 0; w < WORKERS; w++) {
            const start = w * slice;
            if (start >= total) break;
            const end = Math.min(total - 1, start + slice - 1);
            jobs.push((async () => {
              const r = await fetchWithTimeout(targetUrl, { credentials: fetchCreds, headers: { ...headers, Range: `bytes=${start}-${end}` }, signal: splitAbortCtrl.signal }, 25000);
              if (r.status === 200) {
                splitAbortCtrl.abort(new Error('RANGE_UNSUPPORTED_STATUS_200'));
                throw new Error('RANGE_UNSUPPORTED_STATUS_200');
              }
              if (!r.ok || r.status !== 206) throw new Error('HTTP ' + r.status);
              await pumpBody(r.body, start);
            })());
          }
          await Promise.all(jobs);
          port.postMessage({ action: 'streamEnd', taskId: fakeId });
          return;
        } catch (splitErr) {
          if (abortCtrl.signal.aborted) return;
          if (splitErr && (splitErr.message === 'RANGE_UNSUPPORTED_STATUS_200' || splitErr.name === 'RANGE_UNSUPPORTED_STATUS_200')) {
            console.log('[Savior] Range request returned 200 OK; falling back to single stream');
            bytesRelayed = 0;
            fallbackToSingle = true;
          } else {
            throw splitErr;
          }
        }
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
        let fallbackStarted = false;
        if (isSessionProtectedStream(opts) && !opts._relayFailed && !isBogusStreamUrl(opts.url || opts.videoUrl, opts.pageUrl)) {
          opts._relayFailed = true;
          opts.taskId = fakeId;
          fallbackStarted = startCocCocSessionDownload(opts);
        }
        if (!fallbackStarted) {
          const userErr = err && err.message === 'CONNECT_TIMEOUT'
            ? 'Download stream connection timed out. Please retry after playing video.'
            : (err && err.message === 'STREAM_HTML_RESPONSE'
                ? 'Link is not a valid video stream. Please play the video for VidManager to detect stream.'
                : String(err && (err.message || err) || 'Connection error'));
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

      const rawUrl = (params.url && typeof params.url === 'object' ? params.url.videoUrl : params.url) || params.videoUrl || '';
      if (isUrlRecentlyRequested(rawUrl)) {
        console.log('[Savior] Duplicate download action suppressed in-flight:', rawUrl);
        sendResponse({ success: true, duplicate: true });
        return false;
      }

      const urlObj = (params.url && typeof params.url === 'object' && !Array.isArray(params.url)) ? params.url : null;
      const opts = {
        url: rawUrl,
        videoUrl: (urlObj ? urlObj.videoUrl : params.videoUrl) || rawUrl,
        audioUrl: (urlObj && urlObj.audioUrl) || params.audioUrl || '',
        play_list: params.play_list || params.playList || (req.data && (req.data.play_list || req.data.playList)) || '',
        filename: safeFilename,
        title: baseTitle,
        referrer: params.referrer || (sender && sender.tab && sender.tab.url) || '',
        pageUrl: (sender && sender.tab && sender.tab.url) || params.referrer || '',
        quality: params.quality || 'best',
        soundOnly: isAudio,
        tabId: (sender && sender.tab && sender.tab.id) || undefined
      };
      let started = false;
      if (isSessionProtectedStream(opts) && nativeHelperAvailable && !opts._relayFailed && !opts.audioUrl && !opts.convertToMp3 && !opts.soundOnly && !opts.play_list) {
        started = startStreamRelayDownload(opts);
      }
      if (!started && nativeHelperAvailable) {
        started = startNativeDownload(opts);
      }
      if (!started) {
        if (!nativeHelperAvailable && requiresNativeHelper(opts)) {
          const fakeId = ++fakeIdCounter;
          updateDownloadHistory({
            id: fakeId,
            title: baseTitle,
            filename: safeFilename,
            url: opts.videoUrl || opts.url || '',
            state: 'error',
            error: 'NATIVE_HOST_REQUIRED',
            errorMessage: 'VidManager Native Helper is required to download HLS/DASH streams and mux high-definition video.',
            startTime: Date.now(),
            endTime: Date.now()
          });
          sendResponse({ success: false, error: 'NATIVE_HOST_REQUIRED' });
          return false;
        }
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
          updateDownloadHistory({ id: targetId, state: 'canceled', error: 'User canceled', speed: 'Canceled' });
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
      // pressing Cancel must never leave half the video still downloading.
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
        updateDownloadHistory({ id: targetId, state: 'canceled', error: 'User canceled', speed: 'Canceled' });
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

    case 'requestDefaultTemplates': {
      sendResponse({ templates: DEFAULT_TEMPLATES });
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
        sendResponse({ success: false, error: 'No valid source page to refresh stream' });
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
      // Return false without invoking sendResponse so subsequent listeners
      // (such as service-worker-entry.js) can handle other message types asynchronously.
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

      const safeExternalReq = {
        action: req.action,
        url: targetUrl,
        videoUrl: req.videoUrl,
        audioUrl: req.audioUrl,
        title: req.title,
        filename: req.filename,
        quality: req.quality,
        ext: req.ext,
        pageUrl: sender && sender.url ? sender.url : ''
      };
      req = safeExternalReq;

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
    if (options.url && typeof options.url === 'object' && !Array.isArray(options.url)) {
      if (!options.videoUrl && options.url.videoUrl) options.videoUrl = options.url.videoUrl;
      if (!options.audioUrl && options.url.audioUrl) options.audioUrl = options.url.audioUrl;
      options.url = options.videoUrl || options.url.url || '';
    }
    if (!options.play_list && options.playList) {
      options.play_list = options.playList;
    }
    const hasPlaylist = Boolean(options.play_list);
    const rawReqUrl = options.videoUrl || options.url || '';
    const effectivePage = (options.pageUrl && !options.pageUrl.startsWith('chrome-extension:') && !options.pageUrl.startsWith('about:'))
      ? options.pageUrl
      : (options.referrer && !options.referrer.startsWith('chrome-extension:')
          ? options.referrer
          : currentActiveTabUrl);
    if (!hasPlaylist) {
      const realStream = resolveRealStreamForDownload(rawReqUrl, effectivePage, options.tabId);
      if (realStream && realStream !== rawReqUrl) {
        console.log(`[Savior] Intercepted chrome.downloads.download: swapped placeholder "${rawReqUrl}" with "${realStream}"`);
        options.url = realStream;
        options.videoUrl = realStream;
        options.isConversionStream = true;
      }
    } else {
      if (!options.url && !options.videoUrl) {
        options.url = 'https://www.google.com';
        options.videoUrl = 'https://www.google.com';
      }
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
        options.filename && t.filename && options.filename.toLowerCase() === t.filename.toLowerCase() &&
        !isGenericFeedTitle(options.filename) && !isFeedPageUrl(effPage) &&
        (!reqUrl || !t.url || reqUrl === t.url)
      );
      if ((!options || !options.play_list) && (t.url === reqUrl || tAudio === reqUrl || (t.params && (t.params.videoUrl === reqUrl || t.params.url === reqUrl)) || samePageAndTitle)) {
        console.log('[Savior] Duplicate/trick download call ignored for active task:', id);
        if (typeof callback === 'function') callback(id);
        return;
      }
    }
  }

  // Reject bogus webpage targets upfront so they never hang at 1% or save HTML
  if (!reqUrl || isBogusStreamUrl(reqUrl, effPage, options)) {
    console.warn('[Savior] chrome.downloads.download rejected bogus media target:', reqUrl);
    const taskId = options.taskId || `bogus_${Date.now()}`;
    const errText = 'Video stream not found. Please play the video for VidManager to detect stream.';
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
  if (isSessionProtectedStream(options) && nativeHelperAvailable && !options._relayFailed && !options.audioUrl && !options.convertToMp3 && !options.soundOnly && !options.play_list) {
    const relayStarted = startStreamRelayDownload(options, callback);
    if (relayStarted) return;
  }

  // 2. Prefer Native Helper whenever available so all downloads save directly to disk
  // without any Chrome Save As prompt, with real-time speed, progress, and automatic audio track muxing
  if (nativeHelperAvailable) {
    const started = startNativeDownload(options, callback);
    if (started) return;
  } else if (requiresNativeHelper(options)) {
    console.warn('[Savior] Native helper required but unavailable for:', options.videoUrl || options.url);
    const fakeId = options.taskId || ++fakeIdCounter;
    const baseTitle = (options.title || options.filename || 'video')
      .replace(/\.[a-zA-Z0-9]+$/, '')
      .replace(/[<>:"/\\|?*]/g, '_')
      .trim();
    const isAudio = Boolean(options.convertToMp3 || options.soundOnly);
    const ext = isAudio ? 'mp3' : (options.ext || 'mp4');
    const safeFilename = `${baseTitle}.${ext}`;
    updateDownloadHistory({
      id: fakeId,
      title: baseTitle,
      filename: safeFilename,
      url: options.videoUrl || options.url || '',
      state: 'error',
      error: 'NATIVE_HOST_REQUIRED',
      errorMessage: 'VidManager Native Helper is required to download HLS/DASH streams and mux high-definition video.',
      startTime: Date.now(),
      endTime: Date.now()
    });
    if (typeof callback === 'function') callback(null);
    return;
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
  const strId = String(downloadId || '');
  const qIdx = nativeDownloadQueue.findIndex(q => q.params && (String(q.params.taskId) === strId || String(q.params.id) === strId));
  if (qIdx !== -1) {
    nativeDownloadQueue.splice(qIdx, 1);
    activeDownloads.delete(downloadId);
    updateDownloadHistory({ id: downloadId, state: 'canceled', speed: 'Canceled' });
    if (typeof callback === 'function') callback();
    return;
  }
  if (activeDownloads.has(downloadId)) {
    const t = activeDownloads.get(downloadId);
    activeDownloads.delete(downloadId);
    if (t && t.isBrowserDownload) {
      return _origCancel(downloadId, callback);
    }
    const port = getOrCreateNativePort();
    if (port) port.postMessage({ action: 'cancel', taskId: downloadId });
    updateDownloadHistory({ id: downloadId, state: 'canceled', speed: 'Canceled' });
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
