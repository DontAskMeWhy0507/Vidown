/**
 * Instagram Video Detail Extractor (Main World)
 * Traverses React Fiber internals to extract video manifest, dashInfo, and HD/SD sources from Instagram posts, Reels, and Stories.
 * Features automatic stale-stamp invalidation and reactive re-extraction for SPA story navigation.
 */

function getReactFiberSuffix(element) {
  let suffix = '';
  const keys = Object.keys(element);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].indexOf('__reactFiber') !== -1) {
      suffix = keys[i].split('__reactFiber')[1];
      break;
    }
  }
  return suffix;
}

function extractInstagramVideoDetails(videoElement) {
  try {
    const fiberSuffix = getReactFiberSuffix(videoElement);
    const propsKey = '__reactProps' + fiberSuffix;
    const fiberKey = '__reactFiber' + fiberSuffix;

    // Explore tab
    if (location.href.match(/instagram\.com\/explore/i)) {
      return videoElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.[propsKey]?.children?.[0]?.props;
    }

    // Stories route handling
    if (location.href.match(/instagram\.com\/stories/i)) {
      // 1. Walk React props tree
      let current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const p = current?.[propsKey];
        if (p?.item || p?.story || p?.media) {
          const item = p.item || p.story || p.media;
          if (item.video_versions || item.dashInfo || item.video_dash_manifest) {
            return item;
          }
        }
        current = current.parentElement;
      }

      // 2. Walk React Fiber node tree (covers blob/MSE served stories where props are attached to parent fiber)
      let fiber = videoElement?.[fiberKey];
      let depth = 0;
      while (fiber && depth < 25) {
        const m = fiber.memoizedProps;
        if (m?.item || m?.media || m?.story || m?.dashInfo) {
          const item = m.item || m.media || m.story;
          if (item?.video_versions || item?.dashInfo || item?.video_dash_manifest) {
            return item;
          }
          if (m.dashInfo) return m.dashInfo;
        }
        fiber = fiber.return;
        depth++;
      }

      // 3. Inspect child <source> elements (when video.currentSrc is a blob)
      const sources = videoElement.querySelectorAll('source');
      for (let i = 0; i < sources.length; i++) {
        const sUrl = sources[i].src || '';
        if (sUrl && !sUrl.startsWith('blob:') && (sUrl.includes('cdninstagram.com') || sUrl.includes('.mp4') || sUrl.startsWith('http'))) {
          const match = location.pathname.match(/\/stories\/([^\/]+)(?:\/(\d+))?/i);
          const username = match ? match[1] : '';
          const storyId = match && match[2] ? match[2] : '';
          return {
            hdSrc: sUrl,
            sdSrc: sUrl,
            videoSrc: sUrl,
            videoUrl: sUrl,
            videoFBID: storyId || username || 'instagram_story',
            caption: username ? `Instagram Story - ${username}` : 'Instagram Story'
          };
        }
      }

      // 4. Direct fallback for Stories: HTML5 video currentSrc or src
      const directUrl = videoElement.currentSrc || videoElement.src || '';
      if (directUrl && (directUrl.includes('cdninstagram.com') || directUrl.includes('.mp4') || directUrl.startsWith('http'))) {
        const match = location.pathname.match(/\/stories\/([^\/]+)(?:\/(\d+))?/i);
        const username = match ? match[1] : '';
        const storyId = match && match[2] ? match[2] : '';
        return {
          hdSrc: directUrl,
          sdSrc: directUrl,
          videoSrc: directUrl,
          videoUrl: directUrl,
          videoFBID: storyId || username || 'instagram_story',
          caption: username ? `Instagram Story - ${username}` : 'Instagram Story'
        };
      }
    }

    // Standard feed & Reels
    const unclassedDiv = videoElement.closest('div:not([class])');
    const unclassedProps = unclassedDiv?.[propsKey];
    const ancestorProps = videoElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.[propsKey];

    let details = unclassedProps?.children?.[0]?.props?.post ||
      unclassedProps?.children?.props?.dashInfo ||
      ancestorProps?.children?.props?.dashInfo;

    if (!details) {
      let current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const props = current?.[propsKey]?.children?.props;
        if (props?.manifest) {
          return props;
        }
        current = current.parentElement;
      }

      current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const props = current?.[propsKey]?.children?.props;
        if (props?.hdSrc || props?.sdSrc) {
          return props;
        }
        current = current.parentElement;
      }
    }

    // Fallback: direct video element currentSrc
    if (!details) {
      const src = videoElement.currentSrc || videoElement.src;
      if (src && (src.includes('cdninstagram.com') || src.includes('.mp4'))) {
        return {
          hdSrc: src,
          sdSrc: src,
          videoSrc: src,
          caption: document.title || 'Instagram Video'
        };
      }
    }

    return details || null;
  } catch {
    return null;
  }
}

/**
 * Updates a single video element with fresh video details.
 * Invalids stale stamps whenever video source, pathname, or story changes.
 */
function updateVideo(video) {
  try {
    const currentSrc = video.currentSrc || video.src || '';
    const currentPath = location.pathname;

    // If source or story pathname changed, immediately invalidate stale stamp
    // (covers both source change and slide navigation where blob URL might be reused)
    const srcChanged = video._saviorLastSrc && video._saviorLastSrc !== currentSrc;
    const pathChanged = video._saviorLastPath && video._saviorLastPath !== currentPath;

    if (srcChanged || pathChanged) {
      video.removeAttribute('savior-video-detail');
    }
    video._saviorLastSrc = currentSrc;
    video._saviorLastPath = currentPath;

    const details = extractInstagramVideoDetails(video);
    if (details) {
      video.setAttribute('savior-video-detail', JSON.stringify(details));
    } else if (!currentSrc) {
      video.removeAttribute('savior-video-detail');
    }
  } catch {}
}

function reExtractAll() {
  const videos = document.querySelectorAll('video');
  if (videos) {
    Array.from(videos).filter(Boolean).forEach(updateVideo);
  }
}

// 1. Initial extraction
reExtractAll();

// 2. DOM MutationObserver to catch dynamic story containers and replaced video tags
try {
  const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    for (const m of mutations) {
      if (m.type === 'childList' && (m.addedNodes.length > 0 || m.removedNodes.length > 0)) {
        shouldUpdate = true;
        break;
      }
      if (m.type === 'attributes' && (m.attributeName === 'src' || m.attributeName === 'class')) {
        shouldUpdate = true;
        break;
      }
    }
    if (shouldUpdate) reExtractAll();
  });

  const attachObserver = () => {
    const target = document.body || document.documentElement;
    if (target) {
      observer.observe(target, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'class'] });
    }
  };

  attachObserver();
  if (!document.body) {
    document.addEventListener('DOMContentLoaded', () => {
      attachObserver();
      reExtractAll();
    });
  }
} catch {}

// 3. Media playback and metadata events
['play', 'playing', 'loadeddata', 'loadedmetadata', 'timeupdate'].forEach((evt) => {
  document.addEventListener(evt, (e) => {
    if (e.target && e.target.tagName === 'VIDEO') {
      updateVideo(e.target);
    }
  }, { capture: true, passive: true });
});

// 4. SPA Navigation hook for Instagram Stories transitions
try {
  const notifyNavigation = () => {
    setTimeout(reExtractAll, 150);
    setTimeout(reExtractAll, 600);
    setTimeout(reExtractAll, 1200);
  };

  window.addEventListener('popstate', notifyNavigation);

  const origPushState = history.pushState;
  if (origPushState) {
    history.pushState = function () {
      const res = origPushState.apply(this, arguments);
      notifyNavigation();
      return res;
    };
  }

  const origReplaceState = history.replaceState;
  if (origReplaceState) {
    history.replaceState = function () {
      const res = origReplaceState.apply(this, arguments);
      notifyNavigation();
      return res;
    };
  }
} catch {}
