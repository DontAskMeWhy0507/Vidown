/**
 * downloads-nav.js
 * Handles navigation to the Downloads Manager page from popup, sidepanel, and on-page Savior bar.
 */
(function () {
  const isExtensionPage = typeof location !== 'undefined' && location.protocol === 'chrome-extension:';

  // Only inject navigation button styles on extension internal pages (popup)
  if (isExtensionPage && document.head) {
    const style = document.createElement('style');
    style.textContent = `
      #btn-open-downloads-manager {
        position: absolute;
        top: 14px;
        right: 48px;
        background: none;
        border: none;
        cursor: pointer;
        color: inherit;
        padding: 4px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: background-color 0.15s ease, transform 0.1s ease;
        z-index: 100;
      }
      #btn-open-downloads-manager:hover {
        background-color: rgba(128, 128, 128, 0.25);
      }
      #btn-open-downloads-manager:active {
        transform: scale(0.95);
      }
    `;
    document.head.appendChild(style);
  }

  function openDownloadsPage() {
    const downloadsUrl = chrome.runtime.getURL('downloads/downloads.html');
    if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
      chrome.tabs.create({ url: downloadsUrl });
    } else if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      try {
        chrome.runtime.sendMessage({ action: 'openDownloadsPage' }, () => {
          if (chrome.runtime.lastError) {
            window.open(downloadsUrl, '_blank');
          }
        });
      } catch (_) {
        window.open(downloadsUrl, '_blank');
      }
    } else {
      window.open(downloadsUrl, '_blank');
    }
  }

  // Delegated click handler
  document.addEventListener('click', function (e) {
    if (!isExtensionPage) {
      // The Savior widget renders inside a shadow DOM host (<savior-host>), so a
      // document-level listener sees a retargeted event target and closest()
      // can never reach the button. Walk the composed path instead: the ⋮
      // (#other-feature) button in the Savior bar opens the Downloads Manager.
      let saviorFeature = null;
      let inSaviorWidget = false;
      const path = (typeof e.composedPath === 'function') ? e.composedPath() : [];
      for (const node of path) {
        if (!node || typeof node !== 'object') continue;
        if (node.id === 'other-feature') saviorFeature = node;
        if ((node.classList && node.classList.contains && node.classList.contains('savior-widget')) ||
            (node.tagName && String(node.tagName).toLowerCase() === 'savior-host')) {
          inSaviorWidget = true;
        }
      }
      // Fallback for non-shadow widgets rendered directly in the page.
      if (!saviorFeature && e.target && e.target.closest) {
        const candidate = e.target.closest('#other-feature');
        if (candidate) {
          saviorFeature = candidate;
          inSaviorWidget = !!candidate.closest('.savior-widget, savior-host, [id*="savior"], [class*="savior"]');
        }
      }
      if (saviorFeature && inSaviorWidget) {
        e.preventDefault();
        e.stopPropagation();
        openDownloadsPage();
      }
      return;
    }

    const btn = e.target.closest('#btn-open-downloads-manager, #other-feature');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      openDownloadsPage();
    }
  }, true);

  // ==========================================
  // Performance API Stream Sniffer (Ported from Universal VideoDownloader)
  // Detects HLS (.m3u8), DASH (.mpd), and media streams even when hidden behind blob: or nested iframes.
  // Each resource entry is inspected exactly once (cursor + Set dedup) so a busy
  // page costs O(new entries), not a full rescan per resource event.
  // ==========================================
  if (!isExtensionPage && typeof window !== 'undefined' && window.performance && window.performance.getEntriesByType) {
    const reportedUrls = new Set();
    const reportedStreamKeys = new Set();
    let scanCursor = 0;

    // Default buffer caps at 250 entries; heavy pages exhaust it in seconds and
    // media loaded afterwards becomes invisible. Raise it and recycle on full.
    try { performance.setResourceTimingBufferSize(1000); } catch (_) {}
    if (typeof performance.onresourcetimingbufferfull !== 'undefined') {
      performance.addEventListener('resourcetimingbufferfull', () => {
        try { performance.clearResourceTimings(); } catch (_) {}
        scanCursor = 0;
      });
    }

    function inspectEntry(entry) {
      const u = entry && entry.name;
      if (!u || typeof u !== 'string' || reportedUrls.has(u)) return;

      const lower = u.toLowerCase();
      // Segments, static assets, fonts, and keys must NEVER be reported as stream playlists
      if (/\.(ts|m4s|otf|ttf|woff2?|jpe?g|png|webp|svg|gif|ico|css|js|key)(\?|$)/i.test(lower) || /_\d{3,6}\.ts/i.test(lower)) return;
      if (entry.initiatorType === 'img' || entry.initiatorType === 'image' || entry.initiatorType === 'css') return;

      // Filter out known ad networks, trackers, and telemetry
      if (
        lower.includes('doubleclick') ||
        lower.includes('googleads') ||
        lower.includes('adservice') ||
        lower.includes('/ad/') ||
        lower.includes('/ads/') ||
        lower.includes('adnxs') ||
        lower.includes('prebid') ||
        lower.includes('analytics') ||
        lower.includes('telemetry')
      ) {
        return;
      }

      const isM3u8 = lower.includes('.m3u8') || lower.includes('mime=application/x-mpegurl') || lower.includes('application/vnd.apple.mpegurl');
      const isMpd = lower.includes('.mpd') || lower.includes('mime=application/dash+xml');
      const isMedia = lower.includes('.mp4') ||
        lower.includes('.webm') ||
        lower.includes('.m4v') ||
        lower.includes('mime_type=video_mp4') ||
        lower.includes('mime_type=video%2fmp4') ||
        lower.includes('mime=video') ||
        lower.includes('/video/tos/');
      const isAudio = !isMedia && (lower.includes('.mp3') || lower.includes('.m4a') || lower.includes('.aac') || lower.includes('mime=audio'));

      if (isM3u8 || isMpd || isMedia || isAudio) {
        let streamKey = u;
        try {
          const parsed = new URL(u);
          parsed.searchParams.delete('range');
          parsed.searchParams.delete('bytestart');
          parsed.searchParams.delete('byteend');
          parsed.searchParams.delete('subrange');
          parsed.searchParams.delete('sq');
          parsed.searchParams.delete('rn');
          streamKey = parsed.origin + parsed.pathname;
        } catch (_) {
          streamKey = u.split('?')[0];
        }

        // Deduplicate streaming chunk ranges so playback is never interrupted by floods
        if (reportedStreamKeys.has(streamKey)) return;
        reportedStreamKeys.add(streamKey);
        reportedUrls.add(u);

        const format = isM3u8 ? 'M3U8' : (isMpd ? 'MPD' : (lower.includes('.webm') ? 'WEBM' : (isAudio ? 'MP3' : 'MP4')));
        const ext = isM3u8 ? 'm3u8' : (isMpd ? 'mpd' : (lower.includes('.webm') ? 'webm' : (isAudio ? 'mp3' : 'mp4')));
        const type = isAudio ? 'audio' : 'video';
        let title = (document.title || 'Video').trim();
        try {
          const og = document.querySelector('meta[property="og:title"], meta[name="twitter:title"]');
          if (og && og.content) title = og.content.trim();
        } catch (_) {}

        let urlObj;
        try {
          urlObj = new URL(u);
        } catch (_) {
          urlObj = { protocol: 'https:', host: location.host, pathname: '/' };
        }

        const mediaItem = {
          url: u,
          protocol: urlObj.protocol || 'https:',
          host: urlObj.host || location.host,
          pathname: urlObj.pathname || '/',
          filename: title,
          title: title,
          ext: ext,
          exts: [ext],
          type: type,
          isPlaylist: isM3u8 || isMpd
        };

        // Cache on window for instant pickup by content-script.js
        if (typeof window !== 'undefined') {
          window.__saviorSniffedMedia = window.__saviorSniffedMedia || [];
          if (!window.__saviorSniffedMedia.some(m => m && m.url === u)) {
            window.__saviorSniffedMedia.push(mediaItem);
          }
          // Instantaneous emission to content-script.js's EventEmitter (~0ms)
          if (window.EE && typeof window.EE.emit === 'function') {
            try {
              window.EE.emit('widget.request_matched', [mediaItem]);
            } catch (_) {}
          }
        }

        if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
          chrome.runtime.sendMessage({
            action: 'mediaDetected',
            type: 'MEDIA_DETECTED',
            url: u,
            format: format,
            isPlaylist: isM3u8 || isMpd,
            pageUrl: window.location.href,
            title: title,
            mediaItem: mediaItem
          }).catch(() => {});
        }
      }
    }

    function scanBufferedEntries() {
      try {
        const entries = performance.getEntriesByType('resource');
        for (; scanCursor < entries.length; scanCursor++) {
          inspectEntry(entries[scanCursor]);
        }
      } catch (_) {}
    }

    // Scan immediately — by document_idle the media requests of an autoplay
    // video are often already in the buffer, so detection starts at ~0ms
    // instead of waiting for the first delayed pass. The later passes catch
    // lazy-loaded players, and the observer covers everything new.
    scanBufferedEntries();
    if (document.readyState !== 'complete') {
      window.addEventListener('load', () => scanBufferedEntries(), { once: true });
    }
    setTimeout(scanBufferedEntries, 1500);
    setTimeout(scanBufferedEntries, 4000);

    if (typeof PerformanceObserver !== 'undefined') {
      try {
        const observer = new PerformanceObserver((list) => {
          try {
            const fresh = list.getEntries();
            for (let i = 0; i < fresh.length; i++) inspectEntry(fresh[i]);
          } catch (_) {}
        });
        observer.observe({ entryTypes: ['resource'] });
      } catch (_) {}
    }
  }
})();
