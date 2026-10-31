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

  // Sensitive SPA players with strict React Virtual DOM ownership and gesture controls
  // Mutating their player DOM containers causes React reconciliation invariant crashes (e.g. IG stories)
  // or forced layout reflows (e.g. TikTok video lag). All detection on these sites is handled
  // cleanly in the background via chrome.webRequest.
  function isSensitiveSite() {
    const host = (window.location && window.location.hostname) ? window.location.hostname.toLowerCase() : '';
    return (
      host.includes('instagram.com') ||
      host.includes('tiktok.com') ||
      host.includes('youtube.com') ||
      host.includes('facebook.com') ||
      host.includes('fb.com') ||
      host.includes('twitter.com') ||
      host.includes('x.com') ||
      host.includes('netflix.com')
    );
  }

  // 1. Inject runtime_hook.js into the Main World at document start (only on non-sensitive sites)
  function injectMainWorldHook() {
    if (isSensitiveSite()) return;
    try {
      const script = document.createElement('script');
      script.src = chrome.runtime.getURL('core/runtime_hook.js');
      script.onload = function () {
        this.remove();
      };
      (document.head || document.documentElement).appendChild(script);
    } catch (e) {
      // Main world injection might be restricted in some strict CSP frames
    }
  }

  injectMainWorldHook();

  // 2. Listen for verified media events from core/runtime_hook.js via window.postMessage
  window.addEventListener('message', (event) => {
    // Only accept messages from same origin and with verified Vidown signature
    if (event.source !== window || !event.data || event.data.source !== 'VIDOWN_HOOK') {
      return;
    }

    const payload = event.data.payload;
    if (!payload || !payload.requestUrl) return;

    // Relay verified media candidate to service_worker.js
    chrome.runtime.sendMessage({
      action: 'registerMediaItem',
      media: {
        mediaInstanceId: payload.mediaInstanceId || 'video_' + Date.now(),
        requestUrl: payload.requestUrl,
        pageUrl: window.location.href,
        title: document.title || 'Video',
        protocol: payload.protocol || 'DIRECT',
        variants: payload.variants || []
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

  // 4. Attach sleek, floating download pill to player container (only on standard sites)
  function attachFloatingPill(video) {
    if (isSensitiveSite()) return; // Never tamper with sensitive SPA player DOM!

    // Avoid double attaching
    if (video.parentElement && video.parentElement.querySelector('.vidown-floating-pill')) {
      return;
    }

    const container = video.parentElement;
    if (!container) return;

    // Zero forced reflow: avoid synchronous style computation
    if (!container.style.position) {
      container.style.position = 'relative';
    }

    const pill = document.createElement('div');
    pill.className = 'vidown-floating-pill';
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
      if (src) {
        chrome.runtime.sendMessage({
          action: 'startDownload',
          url: src,
          title: document.title || 'video',
          pageUrl: window.location.href
        }).catch(() => {});
      } else {
        // Open popup or download manager
        chrome.runtime.sendMessage({ action: 'openDownloadManager' }).catch(() => {});
      }
    });

    container.appendChild(pill);
  }

  // Initial scan
  document.querySelectorAll('video').forEach(processVideoElement);

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
