/**
 * Universal Video Downloader - Main-World Runtime Media Hook
 * 
 * Part of Universal Media Detection Core v1.0.3 (Stage 5)
 * Injected into the MAIN world (world: "MAIN", run_at: "document_start") to intercept
 * media stream requests at the browser API runtime layer.
 * 
 * Intercepts:
 * 1. window.fetch (captures media URLs, manifests, segments)
 * 2. XMLHttpRequest.prototype.open (captures XHR-based media streams)
 * 3. MediaSource.prototype.addSourceBuffer (captures MSE container MIME types & codecs)
 * 
 * Strict Zero-Trust & Isolation Rules:
 * 1. MAIN World executes in the untrusted website context; NO chrome.* extension APIs are accessible or used.
 * 2. Transparent Pass-Through: NEVER modifies requests, responses, or throws errors.
 *    Original native browser behavior is preserved 100%.
 * 3. Communication: Dispatches DOM CustomEvent ('UVD_RUNTIME_STREAM') with a minimal,
 *    flat plain object payload containing only primitive strings and numbers.
 * 4. Trusted Types compliant: zero DOM string injection APIs.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.UniversalRuntimeHook = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const EVENT_NAME = 'UVD_RUNTIME_STREAM';

  let _isHooked = false;
  let _originalFetch = null;
  let _originalXhrOpen = null;
  let _originalAddSourceBuffer = null;

  /**
   * Classify stream URL or MIME type into standard media detection category
   * 
   * @param {string} urlString
   * @param {string} mimeType
   * @returns {string} 'MANIFEST_HLS' | 'MANIFEST_DASH' | 'DIRECT_MEDIA' | 'SEGMENT' | 'MSE_SOURCE_BUFFER' | 'UNKNOWN'
   */
  function classifyRuntimeStream(urlString, mimeType) {
    const url = String(urlString || '').toLowerCase();
    const mime = String(mimeType || '').toLowerCase();

    // MIME type checks
    if (mime.includes('application/x-mpegurl') || mime.includes('application/vnd.apple.mpegurl')) {
      return 'MANIFEST_HLS';
    }
    if (mime.includes('application/dash+xml')) {
      return 'MANIFEST_DASH';
    }
    if (mime.startsWith('video/') || mime.startsWith('audio/')) {
      return 'DIRECT_MEDIA';
    }

    // URL path & pattern checks
    const cleanUrl = url.split('?')[0];

    if (cleanUrl.endsWith('.m3u8')) {
      return 'MANIFEST_HLS';
    }
    if (cleanUrl.endsWith('.mpd')) {
      return 'MANIFEST_DASH';
    }
    if (cleanUrl.endsWith('.ts')) {
      return 'SEGMENT';
    }
    if (cleanUrl.endsWith('.m4s')) {
      return 'SEGMENT';
    }
    if (
      cleanUrl.endsWith('.mp4') ||
      cleanUrl.endsWith('.webm') ||
      cleanUrl.endsWith('.m4v') ||
      cleanUrl.endsWith('.mov') ||
      cleanUrl.endsWith('.flv') ||
      cleanUrl.endsWith('.mkv')
    ) {
      return 'DIRECT_MEDIA';
    }

    // Stream keyword patterns
    if (url.includes('.m3u8?') || url.includes('/hls/') || url.includes('master.m3u8') || url.includes('playlist.m3u8')) {
      return 'MANIFEST_HLS';
    }
    if (url.includes('.mpd?') || url.includes('/dash/')) {
      return 'MANIFEST_DASH';
    }
    if (url.includes('videoplayback') || url.includes('/bytestream/') || url.includes('&range=') || url.includes('?range=')) {
      return 'SEGMENT';
    }

    return 'UNKNOWN';
  }

  /**
   * Check if a URL looks like a media resource worthy of advisory event notification
   */
  function isMediaCandidateUrl(urlString) {
    if (!urlString || typeof urlString !== 'string') return false;
    const lower = urlString.toLowerCase();

    // Reject static non-media assets immediately
    const clean = lower.split('?')[0];
    if (
      clean.endsWith('.jpg') || clean.endsWith('.jpeg') || clean.endsWith('.png') ||
      clean.endsWith('.webp') || clean.endsWith('.gif') || clean.endsWith('.svg') ||
      clean.endsWith('.ico') || clean.endsWith('.css') || clean.endsWith('.js') ||
      clean.endsWith('.woff') || clean.endsWith('.woff2') || clean.endsWith('.ttf')
    ) {
      return false;
    }

    // Match media markers
    return (
      lower.includes('.m3u8') ||
      lower.includes('.mpd') ||
      lower.includes('.mp4') ||
      lower.includes('.webm') ||
      lower.includes('.m4s') ||
      lower.includes('.ts') ||
      lower.includes('videoplayback') ||
      lower.includes('/bytestream/') ||
      lower.includes('/video/') ||
      lower.includes('&range=') ||
      lower.includes('?range=')
    );
  }

  /**
   * Safely dispatch custom event to Isolated World without throwing
   */
  function dispatchStreamEvent(targetWindow, detail) {
    try {
      if (!targetWindow || !targetWindow.document) return;

      const CustomEventCtor = targetWindow.CustomEvent || (typeof CustomEvent !== 'undefined' ? CustomEvent : null);
      if (!CustomEventCtor) return;

      // Construct flat primitive payload
      const payload = {
        streamUrl: typeof detail.streamUrl === 'string' ? detail.streamUrl : '',
        mimeType: typeof detail.mimeType === 'string' ? detail.mimeType : '',
        detectedType: typeof detail.detectedType === 'string' ? detail.detectedType : 'UNKNOWN',
        initiatorType: typeof detail.initiatorType === 'string' ? detail.initiatorType : 'unknown',
        timestamp: Date.now()
      };

      const event = new CustomEventCtor(EVENT_NAME, {
        detail: payload,
        bubbles: true,
        cancelable: false
      });

      const dispatchTarget = targetWindow.document || targetWindow;
      if (typeof dispatchTarget.dispatchEvent === 'function') {
        dispatchTarget.dispatchEvent(event);
      }

      // Relay via window.postMessage for cross-world and isolated context bridge
      try {
        if (typeof targetWindow.postMessage === 'function') {
          targetWindow.postMessage({
            source: 'VIDOWN_HOOK',
            payload: {
              requestUrl: payload.streamUrl,
              streamUrl: payload.streamUrl,
              mimeType: payload.mimeType,
              detectedType: payload.detectedType,
              initiatorType: payload.initiatorType,
              title: payload.title,
              timestamp: payload.timestamp
            }
          }, '*');
        }
      } catch (_) {}
    } catch (_) {
      // Zero disruption: ignore any dispatch error in untrusted host page
    }
  }

  function isRestrictedContext(win) {
    try {
      const host = (win.location && win.location.hostname) ? win.location.hostname.toLowerCase() : '';
      if (
        host.includes('challenges.cloudflare.com') ||
        host.includes('recaptcha') ||
        host.includes('hcaptcha') ||
        host.includes('doubleclick')
      ) {
        return true;
      }
    } catch (_) {}
    return false;
  }

  /**
   * Initialize Runtime Media Hooks on window / global object
   */
  function initRuntimeHooks(targetWindow = (typeof window !== 'undefined' ? window : null)) {
    if (!targetWindow || _isHooked || isRestrictedContext(targetWindow)) return;

    // 1. Hook window.fetch
    if (typeof targetWindow.fetch === 'function') {
      _originalFetch = targetWindow.fetch;
      targetWindow.fetch = function (input, init) {
        try {
          let url = '';
          if (typeof input === 'string') {
            url = input;
          } else if (input && typeof input.url === 'string') {
            url = input.url;
          } else if (input && typeof input.href === 'string') {
            url = input.href;
          }

          if (isMediaCandidateUrl(url)) {
            const detected = classifyRuntimeStream(url, '');
            dispatchStreamEvent(targetWindow, {
              streamUrl: url,
              mimeType: '',
              detectedType: detected,
              initiatorType: 'fetch'
            });
          }
        } catch (_) {}

        return _originalFetch.apply(this, arguments);
      };
    }

    // 2. Hook XMLHttpRequest.prototype.open
    if (targetWindow.XMLHttpRequest && targetWindow.XMLHttpRequest.prototype) {
      _originalXhrOpen = targetWindow.XMLHttpRequest.prototype.open;
      targetWindow.XMLHttpRequest.prototype.open = function (method, url) {
        try {
          const urlStr = typeof url === 'string' ? url : (url && url.href ? url.href : String(url || ''));
          if (isMediaCandidateUrl(urlStr)) {
            const detected = classifyRuntimeStream(urlStr, '');
            dispatchStreamEvent(targetWindow, {
              streamUrl: urlStr,
              mimeType: '',
              detectedType: detected,
              initiatorType: 'xhr'
            });
          }
        } catch (_) {}

        return _originalXhrOpen.apply(this, arguments);
      };
    }

    // 3. Hook MediaSource.prototype.addSourceBuffer
    if (targetWindow.MediaSource && targetWindow.MediaSource.prototype) {
      _originalAddSourceBuffer = targetWindow.MediaSource.prototype.addSourceBuffer;
      targetWindow.MediaSource.prototype.addSourceBuffer = function (mimeType) {
        try {
          const mimeStr = String(mimeType || '');
          dispatchStreamEvent(targetWindow, {
            streamUrl: '',
            mimeType: mimeStr,
            detectedType: 'MSE_SOURCE_BUFFER',
            initiatorType: 'mse'
          });
        } catch (_) {}

        return _originalAddSourceBuffer.apply(this, arguments);
      };
    }

    // 4. Periodic & Event-driven DOM Fiber Probe
    if (typeof targetWindow.addEventListener === 'function') {
      targetWindow.addEventListener('play', () => probePageMediaContext(targetWindow), { capture: true, passive: true });
      targetWindow.addEventListener('playing', () => probePageMediaContext(targetWindow), { capture: true, passive: true });
      if (targetWindow.document && targetWindow.document.readyState === 'loading') {
        targetWindow.addEventListener('DOMContentLoaded', () => probePageMediaContext(targetWindow), { passive: true });
      } else {
        probePageMediaContext(targetWindow);
      }
    }

    _isHooked = true;
  }

  function getReactFiberKey(el) {
    if (!el || typeof el !== 'object') return '';
    try {
      const keys = Object.keys(el);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].indexOf('__reactFiber') !== -1) {
          return keys[i].split('__reactFiber')[1];
        }
      }
    } catch (_) {}
    return '';
  }

  function probeFacebookReactMedia(video, win) {
    if (!video) return null;
    const fiberKey = getReactFiberKey(video);
    const propsKey = '__reactProps' + fiberKey;

    let manifestUrl = '';
    let videoFBID = '';
    let hdSrc = '';
    let sdSrc = '';

    try {
      const p4 = video.parentElement?.parentElement?.parentElement?.parentElement;
      const storyProps = p4?.[propsKey]?.children?.[0]?.props?.children?.props?.implementations?.[1]?.data
                      || p4?.[propsKey]?.children?.props?.children?.props?.implementations?.[1]?.data;
      if (storyProps && (storyProps.hdSrc || storyProps.sdSrc)) {
        hdSrc = storyProps.hdSrc || '';
        sdSrc = storyProps.sdSrc || '';
      }
      if (!hdSrc && !sdSrc) {
        const vData = video['__reactFiber' + fiberKey]?.return?.stateNode?.props?.videoData?.$1;
        if (vData && (vData.hd_src || vData.sd_src)) {
          hdSrc = vData.hd_src || '';
          sdSrc = vData.sd_src || '';
        }
      }
    } catch (_) {}

    let curr = video;
    for (let depth = 0; depth < 12 && curr && curr.parentElement && curr.parentElement.tagName !== 'BODY'; depth++) {
      try {
        const pObj = curr[propsKey]?.children?.props || (Array.isArray(curr[propsKey]?.children) ? curr[propsKey]?.children[0]?.props : null);
        if (pObj) {
          if (!videoFBID && pObj.videoFBID) videoFBID = String(pObj.videoFBID);
          if (!manifestUrl && pObj.manifestUrl) manifestUrl = pObj.manifestUrl;
          if (!hdSrc && pObj.hdSrc) hdSrc = pObj.hdSrc;
          if (!sdSrc && pObj.sdSrc) sdSrc = pObj.sdSrc;
          if (pObj.dashInfo && !manifestUrl && pObj.dashInfo.manifestUrl) manifestUrl = pObj.dashInfo.manifestUrl;
        }
      } catch (_) {}
      curr = curr.parentElement;
    }

    const bestStream = hdSrc || sdSrc || manifestUrl;
    if (bestStream) {
      const detail = { hdSrc, sdSrc, manifestUrl, videoFBID };
      try {
        video.setAttribute('data-fb-stream', JSON.stringify(detail));
      } catch (_) {}

      dispatchStreamEvent(win, {
        streamUrl: bestStream,
        mimeType: manifestUrl ? 'application/x-mpegurl' : 'video/mp4',
        detectedType: manifestUrl ? 'MANIFEST_HLS' : 'DIRECT_MEDIA',
        initiatorType: 'facebook_fiber'
      });
      return detail;
    }
    return null;
  }

  function probeTikTokReactMedia(video, win) {
    if (!video) return null;
    const fiberKey = getReactFiberKey(video);
    const propsKey = '__reactProps' + fiberKey;

    let bitrateInfo = null;
    let playAddr = '';
    let downloadAddr = '';
    let desc = '';

    let curr = video;
    for (let depth = 0; depth < 10 && curr && curr.parentElement && curr.parentElement.tagName !== 'BODY'; depth++) {
      try {
        const children = curr[propsKey]?.children;
        if (Array.isArray(children)) {
          const found = children.find(c => c?.props?.bitrateInfo);
          if (found && found.props) {
            bitrateInfo = found.props.bitrateInfo;
            playAddr = found.props.playAddr || '';
            downloadAddr = found.props.downloadAddr || '';
            desc = found.props.desc || '';
            break;
          }
        }
      } catch (_) {}
      curr = curr.parentElement;
    }

    if (!bitrateInfo) {
      try {
        const fiber = video['__reactFiber' + fiberKey];
        let node = fiber;
        for (let d = 0; d < 15 && node; d++) {
          const props = node.memoizedProps || node.pendingProps;
          if (props?.item?.video?.bitrateInfo?.length) {
            const v = props.item.video;
            bitrateInfo = v.bitrateInfo;
            playAddr = v.playAddr || '';
            downloadAddr = v.downloadAddr || '';
            desc = props.item.desc || '';
            break;
          }
          node = node.return || node.child;
        }
      } catch (_) {}
    }

    if (downloadAddr || playAddr || (bitrateInfo && bitrateInfo.length > 0)) {
      const data = { bitrateInfo, playAddr, downloadAddr, desc };
      try {
        video.setAttribute('data-aweme-video', JSON.stringify(data));
      } catch (_) {}

      const streamUrl = downloadAddr || playAddr || (bitrateInfo && bitrateInfo[0]?.playAddr ? bitrateInfo[0].playAddr : '');
      if (streamUrl) {
        dispatchStreamEvent(win, {
          streamUrl: streamUrl,
          mimeType: 'video/mp4',
          detectedType: 'DIRECT_MEDIA',
          initiatorType: 'tiktok_fiber'
        });
      }
      return data;
    }
    return null;
  }

  function probeInstagramMedia(video, win) {
    if (!video) return null;
    const fiberKey = getReactFiberKey(video);
    const propsKey = '__reactProps' + fiberKey;

    let streamUrl = video.currentSrc || video.src || '';
    let title = '';

    const path = win.location ? win.location.pathname : '';
    if (path.includes('/stories/')) {
      const match = path.match(/\/stories\/([^\/]+)(?:\/(\d+))?/);
      const user = match ? match[1] : 'user';
      const id = match && match[2] ? match[2] : Date.now();
      title = `Instagram_Story_${user}_${id}`;
    } else {
      const match = path.match(/\/(reel|p)\/([^\/]+)/);
      title = match ? `Instagram_${match[1]}_${match[2]}` : (win.document?.title || 'Instagram_Video');
    }

    try {
      let curr = video;
      for (let depth = 0; depth < 10 && curr; depth++) {
        const pObj = curr[propsKey];
        if (pObj) {
          const vList = pObj.video_versions || pObj.item?.video_versions || pObj.children?.props?.video_versions;
          if (Array.isArray(vList) && vList.length > 0 && vList[0].url) {
            streamUrl = vList[0].url;
            break;
          }
        }
        curr = curr.parentElement;
      }
    } catch (_) {}

    if (streamUrl && (streamUrl.includes('cdninstagram.com') || streamUrl.includes('fbcdn.net') || !streamUrl.startsWith('blob:'))) {
      dispatchStreamEvent(win, {
        streamUrl: streamUrl,
        mimeType: 'video/mp4',
        detectedType: 'DIRECT_MEDIA',
        initiatorType: path.includes('/stories/') ? 'instagram_story' : 'instagram_fiber',
        title: title,
        pageUrl: win.location ? win.location.href : ''
      });
      return { streamUrl, title };
    }
    return null;
  }

  function probePageMediaContext(targetWindow = (typeof window !== 'undefined' ? window : null)) {
    if (!targetWindow || !targetWindow.document) return;
    try {
      const href = targetWindow.location ? targetWindow.location.href : '';
      const videos = targetWindow.document.querySelectorAll ? targetWindow.document.querySelectorAll('video') : [];
      for (let i = 0; i < videos.length; i++) {
        const v = videos[i];
        if (href.includes('facebook.com') || href.includes('fb.com')) {
          probeFacebookReactMedia(v, targetWindow);
        } else if (href.includes('tiktok.com')) {
          probeTikTokReactMedia(v, targetWindow);
        } else if (href.includes('instagram.com')) {
          probeInstagramMedia(v, targetWindow);
        }
      }
    } catch (_) {}
  }

  /**
   * Teardown and restore native browser APIs
   */
  function teardownRuntimeHooks(targetWindow = (typeof window !== 'undefined' ? window : null)) {
    if (!targetWindow || !_isHooked) return;

    if (_originalFetch && targetWindow.fetch) {
      targetWindow.fetch = _originalFetch;
      _originalFetch = null;
    }

    if (_originalXhrOpen && targetWindow.XMLHttpRequest && targetWindow.XMLHttpRequest.prototype) {
      targetWindow.XMLHttpRequest.prototype.open = _originalXhrOpen;
      _originalXhrOpen = null;
    }

    if (_originalAddSourceBuffer && targetWindow.MediaSource && targetWindow.MediaSource.prototype) {
      targetWindow.MediaSource.prototype.addSourceBuffer = _originalAddSourceBuffer;
      _originalAddSourceBuffer = null;
    }

    _isHooked = false;
  }

  // Auto-initialize in browser if not running in test harness
  if (typeof window !== 'undefined' && !window.__uvd_test_mode && typeof window.addEventListener === 'function') {
    initRuntimeHooks(window);
  }

  return {
    EVENT_NAME,
    classifyRuntimeStream,
    isMediaCandidateUrl,
    initRuntimeHooks,
    teardownRuntimeHooks,
    probePageMediaContext,
    probeFacebookReactMedia,
    probeTikTokReactMedia,
    probeInstagramMedia,
    isHooked: () => _isHooked
  };
});
