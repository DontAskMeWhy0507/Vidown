/**
 * stream-sniffer.js
 * 
 * High-performance early stream sniffer running at document_start.
 * Detects HLS (.m3u8), DASH (.mpd), and direct media streams instantly (~0ms)
 * as network requests begin, without waiting for DOMContentLoaded or document_idle.
 */
(function() {
  const isExtensionPage = typeof location !== 'undefined' && location.protocol === 'chrome-extension:';
  if (isExtensionPage) return;

  if (typeof window !== 'undefined' && window.performance && window.performance.getEntriesByType) {
    if (window.__saviorStreamSnifferActive) return;
    window.__saviorStreamSnifferActive = true;

    const reportedUrls = new Set();
    const reportedStreamKeys = new Set();
    let scanCursor = 0;

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
        window.__saviorSniffedMedia = window.__saviorSniffedMedia || [];
        if (!window.__saviorSniffedMedia.some(m => m && m.url === u)) {
          window.__saviorSniffedMedia.push(mediaItem);
        }
        // Instantaneous emission to content-script.js's EventEmitter (~0ms) if already loaded
        if (window.EE && typeof window.EE.emit === 'function') {
          try {
            window.EE.emit('widget.request_matched', [mediaItem]);
          } catch (_) {}
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

    function scanDomMedia() {
      try {
        const mediaNodes = document.querySelectorAll('video, audio, source');
        for (let i = 0; i < mediaNodes.length; i++) {
          const node = mediaNodes[i];
          const src = node.currentSrc || node.src || (typeof node.getAttribute === 'function' ? node.getAttribute('src') : null);
          if (src && typeof src === 'string' && !src.startsWith('blob:') && !src.startsWith('data:')) {
            inspectEntry({ name: src });
          }
        }
      } catch (_) {}
    }

    scanBufferedEntries();
    scanDomMedia();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        scanBufferedEntries();
        scanDomMedia();
      }, { once: true });
    }
    if (document.readyState !== 'complete') {
      window.addEventListener('load', () => {
        scanBufferedEntries();
        scanDomMedia();
      }, { once: true });
    }
    setTimeout(() => { scanBufferedEntries(); scanDomMedia(); }, 1000);
    setTimeout(() => { scanBufferedEntries(); scanDomMedia(); }, 2500);
    setTimeout(() => { scanBufferedEntries(); scanDomMedia(); }, 5000);

    try {
      ['loadedmetadata', 'canplay', 'play'].forEach((evt) => {
        document.addEventListener(evt, scanDomMedia, true);
      });
      document.addEventListener('mouseover', (e) => {
        if (e.target && (e.target.nodeName === 'VIDEO' || e.target.nodeName === 'AUDIO' || (e.target.querySelector && e.target.querySelector('video, audio')))) {
          scanDomMedia();
        }
      }, { passive: true });
    } catch (_) {}

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
