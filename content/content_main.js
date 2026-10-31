/**
 * Vidown Clean Content Script
 * 
 * 100% Unminified, clean, lightweight DOM observer and media player integration.
 * Replaces the monolithic 2.43 MB legacy Savior content-script.js.
 */

(function () {
  'use strict';

  // Prevent multiple injections
  if (window.__VIDOWN_CONTENT_INITIALIZED__) return;
  window.__VIDOWN_CONTENT_INITIALIZED__ = true;

  // VidManager Global CSS Prefetch & Inline Injector
  window._saviorCssCache = window._saviorCssCache || {};
  window._injectSaviorCss = function _injectSaviorCss(target, cssPath) {
    if (!target) return;
    if (window._saviorCssCache[cssPath]) {
      const s = document.createElement('style');
      s.textContent = window._saviorCssCache[cssPath];
      target.appendChild(s);
      return;
    }
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) ? chrome.runtime.getURL(cssPath || 'content/content.css') : '';
    target.appendChild(l);
  };

  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((t, sender, sendResponse) => {
      if (t && t.type === "get_inner_data") {
        sendResponse({ success: true, url: window.location.href });
        return true;
      }
      return false;
    });
  }

  // Options & dynamic toggles
  let options = {
    on_page_buttons: true,
    image_download_enabled: true
  };

  function getOption(key) {
    if (key === 'on_page_buttons') {
      return options.on_page_buttons !== undefined ? options.on_page_buttons : options.onPageButtonsEnabled;
    }
    return options[key];
  }

  function sanitizeResourcePath(p) {
    return (p || '').replace(/^\/+/, '');
  }

  function toggleWidgetVisibility(visible) {
    const widgets = document.querySelectorAll('.vidown-floating-pill, .savior-widget, savior-widget');
    widgets.forEach(w => {
      w.style.display = visible ? '' : 'none';
    });
  }

  const TIKTOK_SELECTORS = [
    '[data-e2e="feed-video"]',
    '[data-e2e="recommend-list-item-container"]'
  ];

  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['on_page_buttons', 'image_download_enabled'], (res) => {
      if (res) {
        if (typeof res.on_page_buttons !== 'undefined') options.on_page_buttons = res.on_page_buttons;
        if (typeof res.image_download_enabled !== 'undefined') options.image_download_enabled = res.image_download_enabled;
      }
    });

    if (chrome.storage.onChanged) {
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'local' || area === 'sync') {
          if (changes.image_download_enabled || changes.imageDownloadEnabled) {
            const change = changes.image_download_enabled || changes.imageDownloadEnabled;
            options.image_download_enabled = Boolean(change.newValue);
          }
          if (changes.on_page_buttons) {
            options.on_page_buttons = Boolean(changes.on_page_buttons.newValue);
          }
        }
      });
    }
  }

  // Sensitive SPA players with strict React Virtual DOM ownership and gesture controls
  // Mutating their player DOM containers causes React reconciliation invariant crashes (e.g. IG stories)
  // or forced layout reflows (e.g. TikTok video lag).
  function isSensitiveSite() {
    const host = (window.location && window.location.hostname) ? window.location.hostname.toLowerCase() : '';
    return host.includes('instagram.com') || host.includes('tiktok.com');
  }

  // 1. Fallback hook injector if not injected via manifest world: MAIN
  function injectMainWorldHook() {
    try {
      if (document.querySelector('script[src*="runtime_hook.js"]')) return;
      const script = document.createElement('script');
      script.src = chrome.runtime.getURL('core/runtime_hook.js');
      script.onload = function () {
        this.remove();
      };
      (document.head || document.documentElement).appendChild(script);
    } catch (_) {}
  }

  // Inject fallback if running in context without manifest MAIN world
  injectMainWorldHook();

  // 2. The Bridge: Listen for DOM CustomEvent from core/runtime_hook.js
  document.addEventListener('UVD_RUNTIME_STREAM', (event) => {
    const detail = event.detail;
    if (!detail || !detail.streamUrl) return;

    chrome.runtime.sendMessage({
      action: 'registerMediaItem',
      media: {
        mediaInstanceId: 'stream_' + Math.random().toString(36).substr(2, 6),
        requestUrl: detail.streamUrl,
        pageUrl: detail.pageUrl || window.location.href,
        title: detail.title || document.title || 'Video',
        protocol: detail.detectedType === 'MANIFEST_HLS' ? 'HLS' : (detail.detectedType === 'MANIFEST_DASH' ? 'DASH' : 'DIRECT'),
        initiator: detail.initiatorType || 'runtime_hook'
      }
    }).catch(() => {});
  });

  // 3. Listen for postMessage from core/runtime_hook.js
  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data || event.data.source !== 'VIDOWN_HOOK') {
      return;
    }

    const payload = event.data.payload;
    if (!payload || (!payload.requestUrl && !payload.streamUrl)) return;
    const streamUrl = payload.requestUrl || payload.streamUrl;

    chrome.runtime.sendMessage({
      action: 'registerMediaItem',
      media: {
        mediaInstanceId: payload.mediaInstanceId || 'stream_' + Math.random().toString(36).substr(2, 6),
        requestUrl: streamUrl,
        pageUrl: window.location.href,
        title: payload.title || document.title || 'Video',
        protocol: payload.detectedType === 'MANIFEST_HLS' ? 'HLS' : (payload.detectedType === 'MANIFEST_DASH' ? 'DASH' : 'DIRECT'),
        initiator: payload.initiatorType || 'post_message'
      }
    }).catch(() => {});
  });

  // 3. Scan DOM for HTML5 <video> elements with zero layout thrashing
  const boundVideos = new WeakSet();

  function processVideoElement(video) {
    if (!video || boundVideos.has(video)) return;
    boundVideos.add(video);

    function reportVideoSource() {
      const src = video.currentSrc || video.src;
      if (src && !src.startsWith('blob:') && !src.startsWith('data:')) {
        chrome.runtime.sendMessage({
          action: 'registerMediaItem',
          media: {
            mediaInstanceId: 'video_el_' + Math.random().toString(36).substr(2, 6),
            requestUrl: src,
            pageUrl: window.location.href,
            title: document.title || 'Video',
            protocol: src.includes('.m3u8') ? 'HLS' : (src.includes('.mpd') ? 'DASH' : 'DIRECT')
          }
        }).catch(() => {});
      }
    }

    video.addEventListener('loadedmetadata', reportVideoSource, { passive: true });
    video.addEventListener('play', reportVideoSource, { passive: true });
    if (video.currentSrc || video.src) {
      reportVideoSource();
    }

    attachFloatingPill(video);
  }

  // Find visible player container while protecting fragile SPA DOM nodes
  function findVideoContainer(video) {
    if (!video) return null;
    const host = (window.location && window.location.hostname) ? window.location.hostname.toLowerCase() : '';

    if (host.includes('youtube.com')) {
      return video.closest('#movie_player, .html5-video-player, ytd-player, #player') || video.parentElement;
    }
    if (host.includes('tiktok.com')) {
      return video.closest('[data-e2e="feed-video"], .xgplayer, [class*="DivBasicPlayerWrapper"], [class*="DivVideoFeed"]') || video.parentElement;
    }
    if (host.includes('facebook.com') || host.includes('fb.com')) {
      return video.closest('[data-pagelet*="Video"], [role="article"], .x1y1aw1k') || video.parentElement;
    }
    if (host.includes('instagram.com')) {
      if (window.location.pathname.startsWith('/stories/')) {
        return video.closest('section, [role="dialog"], ._aatg, ._aatk') || document.body;
      }
      return video.closest('article, [role="presentation"]') || video.parentElement;
    }

    return video.closest('.video-js, .jwplayer, .plyr, [class*="player"]') || video.parentElement;
  }

  // 4. Attach sleek, floating download pill to player container
  function attachFloatingPill(video) {
    if (!options.on_page_buttons) return;

    const container = findVideoContainer(video);
    if (!container) return;

    // Avoid double attaching on the container
    if (container.querySelector && container.querySelector('.vidown-floating-pill')) {
      return;
    }

    // Zero forced reflow: avoid synchronous style computation
    if (!container.style.position && container !== document.body) {
      container.style.position = 'relative';
    }

    const pill = document.createElement('div');
    pill.className = 'vidown-floating-pill';
    pill.setAttribute('title', 'Tải video với Vidown');
    pill.innerHTML = `
      <svg class="vidown-pill-icon" viewBox="0 0 24 24">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
      <span>Tải video</span>
    `;

    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const src = video.currentSrc || video.src;
      if (src && !src.startsWith('blob:') && !src.startsWith('data:')) {
        chrome.runtime.sendMessage({
          action: 'startDownload',
          url: src,
          title: document.title || 'video',
          pageUrl: window.location.href
        }).catch(() => {});
        return;
      }

      // Stream / blob video (YouTube, TikTok, Facebook, HLS, DASH)
      chrome.runtime.sendMessage({
        action: 'getMediaForCurrentTab'
      }, (response) => {
        if (response && response.success && response.media && response.media.length > 0) {
          const bestMedia = response.media[0];
          chrome.runtime.sendMessage({
            action: 'startDownload',
            url: bestMedia.requestUrl || bestMedia.canonicalUrl,
            title: bestMedia.title || document.title || 'video',
            quality: bestMedia.quality || 'highest',
            pageUrl: window.location.href
          }).catch(() => {});
        } else {
          chrome.runtime.sendMessage({ action: 'openDownloadManager' }).catch(() => {});
        }
      });
    });

    container.appendChild(pill);
  }

  // Initial scan
  document.querySelectorAll('video').forEach(processVideoElement);

  // Consume any pre-sniffed media from downloads-nav.js
  if (Array.isArray(window.__saviorSniffedMedia)) {
    window.__saviorSniffedMedia.forEach(item => {
      if (item && item.url) {
        chrome.runtime.sendMessage({
          action: 'registerMediaItem',
          media: {
            mediaInstanceId: 'sniffed_' + Math.random().toString(36).substr(2, 6),
            requestUrl: item.url,
            pageUrl: window.location.href,
            title: item.title || document.title || 'Video',
            protocol: item.isPlaylist ? (item.ext === 'mpd' ? 'DASH' : 'HLS') : 'DIRECT',
            initiator: 'downloads_nav'
          }
        }).catch(() => {});
      }
    });
  }

  // Lightweight observer: ONLY filters on src, data-src, hidden.
  // Explicitly excludes style and class to guarantee zero forced reflows!
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'childList') {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.tagName === 'VIDEO') {
              processVideoElement(node);
            } else if (node.querySelectorAll) {
              node.querySelectorAll('video').forEach(processVideoElement);
            }
          }
        });
      } else if (m.type === 'attributes' && m.target.tagName === 'VIDEO') {
        processVideoElement(m.target);
      }
    }
  });

  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src', 'data-src', 'hidden']
  });

})();
