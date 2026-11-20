(() => {
/**
 * TikTok Video Data Extractor (Main World)
 * Traverses React Fiber internals to extract video bitrates, download addresses,
 * and high-resolution playback URLs from Aweme video components.
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

function findReactBitrateProps(element) {
  const expected = getDomVideoId(element) || extractTikTokVideoId(findAnchorForVideo(element)?.href);
  let suffix = ((el) => {
    while (el && el.nodeName !== 'BODY') {
      const s = getReactFiberSuffix(el);
      if (s) return s;
      el = el.parentElement;
    }
    return null;
  })(element);

  let propsKey = '__reactProps' + suffix;
  let current = element;
  while (current && current !== document.body && current.nodeName !== 'HTML') {
    const children = current[propsKey]?.children || [];
    if (Array.isArray(children)) {
      const matches = children.map(c=>c?.props).filter(p=>p && (p.bitrateInfo || p.videoInfo?.bitrateInfo || p.item?.video) &&
        (expected ? String(p.id || p.itemId || p.videoId || p.item?.id || p.videoInfo?.id) === expected : current.querySelectorAll('video').length <= 1));
      if (matches.length === 1) {
        return formatAwemeItem({kind:matches[0].item?'item':'flat',props:matches[0]});
      }
    }
    if (current.tagName === 'ARTICLE' || current.querySelectorAll('video').length > 1) break;
    current = current.parentElement;
    if (!suffix && current) {
      suffix = getReactFiberSuffix(current);
      propsKey = '__reactProps' + suffix;
    }
  }
  return null;
}

function extractTikTokVideoId(urlOrHref) {
  return (String(urlOrHref || '').match(/\/video\/(\d+)/) || [])[1] || null;
}

function getDomVideoId(element) {
  for (let current=element,depth=0; current && current!==document.body && depth<8; current=current.parentElement,depth++) {
    const id=(current.id || '').match(/^xgwrapper-.*?-(\d{18,20})$/)?.[1];
    if(id)return id;
    if(current.tagName==='ARTICLE' || current.querySelectorAll('video').length>1)break;
  }
  return null;
}

function findAwemeItemByVideoId(anchorElement) {
  const videoId = extractTikTokVideoId(anchorElement.href) || extractTikTokVideoId(anchorElement.getAttribute('href'));
  if (!videoId) return null;

  let current = anchorElement;
  for (let depth = 0; depth < 12 && current; depth++) {
    const fiberKey = Object.keys(current).find((k) => k.indexOf('__reactFiber') !== -1);
    if (fiberKey) {
      const found = (function searchFiberTree(node, targetId, currentDepth) {
        if (!node || currentDepth > 50) return null;
        const memoized = node.memoizedProps || node.pendingProps;
        if (memoized?.item?.id && String(memoized.item.id) === String(targetId) && (memoized.item.video?.bitrateInfo?.length || memoized.item.video?.playAddr || memoized.item.video?.PlayAddr)) {
          return { kind: 'item', props: memoized };
        }
        if (memoized?.id && String(memoized.id) === String(targetId) && (memoized.bitrateInfo?.length || memoized.videoInfo?.bitrateInfo?.length || memoized.videoInfo?.playAddr || memoized.playUrl)) {
          return { kind: 'flat', props: memoized };
        }
        return searchFiberTree(node.child, targetId, currentDepth + 1) || searchFiberTree(node.sibling, targetId, currentDepth + 1);
      })(current[fiberKey], videoId, 0);

      if (found) return found;
    }
    current = current.parentElement;
  }
  return null;
}

function formatAwemeItem(result) {
  if (!result) return null;
  const kind = result.kind;
  const props = result.props;
  if (kind === 'item' || props?.item?.video?.bitrateInfo?.length) {
    const item = props.item || {};
    const video = item.video || {};
    if (video.bitrateInfo?.length || video.playAddr || video.PlayAddr) {
      return {
        bitrateInfo: video.bitrateInfo,
        url: video.playAddr || video.PlayAddr || '',
        downloadAddr: video.downloadAddr,
        ratio: video.ratio || video.definition,
        desc: item.desc,
        id: item.id || video.id,
        cover: video.cover || video.originCover || ''
      };
    }
  } else {
    const vi = props.videoInfo || {};
    const bitrates = vi.bitrateInfo || props.bitrateInfo;
    if (bitrates?.length || vi.playAddr || vi.PlayAddr || props.playUrl || props.url) {
      return {
        bitrateInfo: bitrates,
        url: vi.playAddr || vi.PlayAddr || props.playUrl || props.url || '',
        downloadAddr: vi.downloadAddr,
        ratio: vi.ratio || vi.definition,
        desc: props.desc,
        id: props.id || vi.id,
        cover: vi.cover || props.cover || ''
      };
    }
  }
  return null;
}

function setAwemeVideoData(element, data) {
  if (element && data) {
    try {
      element.setAttribute('data-aweme-video', JSON.stringify(data));
      if (data.id) {
        element.setAttribute('data-video-id', String(data.id));
        element.setAttribute('data-aweme-id', String(data.id));
      }
    } catch {
      // Ignore serialization errors
    }
  }
}

function findFeedContainer(element) {
  if (!element) return null;
  const selector = '[data-e2e="feed-item"], [data-e2e="recommend-list-item-container"], [data-e2e="explore-item"], [data-e2e="user-post-item"], [data-e2e="browse-video"], [class*="ItemContainer"], [class*="VideoContainer"], [class*="PlayerContainer"], article';
  const closestContainer = element.closest ? element.closest(selector) : null;
  if (closestContainer && closestContainer.querySelectorAll('video').length <= 1) return closestContainer;

  let parent = element.parentElement;
  for (let i = 0; i < 8 && parent && parent !== document.body; i++) {
    if (parent.querySelectorAll('video').length > 1) break;
    if (parent.querySelector && parent.querySelector('a[href*="/video/"]') && parent.querySelectorAll('video').length <= 1) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return element.parentElement || null;
}

function findVideoForAnchor(link) {
  const container = findFeedContainer(link);
  if (container) {
    const vids = container.querySelectorAll('video');
    if (vids.length === 1) return vids[0];
    if (vids.length > 1) {
      for (let i = 0; i < vids.length; i++) {
        if (vids[i].closest('a') === link || link.contains(vids[i])) return vids[i];
      }
      return null; // Ambiguous containers must never stamp the first unrelated video.
    }
  }
  let parent = link.parentElement;
  for (let i = 0; i < 8 && parent && parent !== document.body; i++) {
    const vids = parent.querySelectorAll('video');
    if (vids.length === 1) return vids[0];
    parent = parent.parentElement;
  }
  return null;
}

function findAnchorForVideo(video) {
  const expected = getDomVideoId(video);
  const directAnchor = video.closest ? video.closest('a[href*="/video/"]') : null;
  if (directAnchor && (!expected || extractTikTokVideoId(directAnchor.href) === expected)) return directAnchor;
  let parent = video.parentElement;
  for (let i = 0; i < 8 && parent && parent !== document.body; i++) {
    const links = Array.from(parent.querySelectorAll('a[href*="/video/"]'));
    const exact = expected && links.find(link=>extractTikTokVideoId(link.href)===expected);
    if(exact)return exact;
    if(parent.querySelectorAll('video').length>1)break;
    const ids=new Set(links.map(link=>extractTikTokVideoId(link.href)));
    if(ids.size===1 && (!expected || ids.has(expected)))return links[0];
    parent = parent.parentElement;
  }
  return null;
}

const videoSources = new WeakMap();
function scanVideos() {
  const videos = document.querySelectorAll('video');
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const expected = getDomVideoId(video) || extractTikTokVideoId(findAnchorForVideo(video)?.href);
    const source = [video.currentSrc || video.src || '',video.poster || '',expected || ''].join('|');
    if (videoSources.has(video) && videoSources.get(video) !== source) {
      video.removeAttribute('data-aweme-video');
      video.removeAttribute('data-video-id');
      video.removeAttribute('data-aweme-id');
    }
    videoSources.set(video, source);
    if (expected && video.hasAttribute('data-aweme-video')) {
      try { if (String(JSON.parse(video.getAttribute('data-aweme-video')).id || '') !== expected) video.removeAttribute('data-aweme-video'); }
      catch (_) { video.removeAttribute('data-aweme-video'); }
    }
    if (!video.hasAttribute('data-aweme-video')) {
      const bitrateProps = findReactBitrateProps(video);
      if (bitrateProps) {
        setAwemeVideoData(video, bitrateProps);
        continue;
      }
      const anchor = findAnchorForVideo(video);
      if (anchor) {
        const result = findAwemeItemByVideoId(anchor);
        if (result) {
          const videoInfo = formatAwemeItem(result);
          if (videoInfo) {
            setAwemeVideoData(video, videoInfo);
            setAwemeVideoData(anchor, videoInfo);
          }
        }
      }
    }
  }
}

function scanLinks() {
  const links = Array.from(document.querySelectorAll('a[href]')).filter((a) =>
    /tiktok\.com\/@.+\/video.+/i.test(a.href)
  );

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const result = findAwemeItemByVideoId(link);
    if (result) {
      const videoInfo = formatAwemeItem(result);
      if (videoInfo) {
        setAwemeVideoData(link, videoInfo);
        const video = findVideoForAnchor(link);
        if (video) {
          setAwemeVideoData(video, videoInfo);
        }
        const container = findFeedContainer(link);
        if (container && (!container.querySelectorAll || container.querySelectorAll('video').length <= 1)) {
          setAwemeVideoData(container, videoInfo);
        }
      }
    }
  }
}

function scanAllTikTokMedia() {
  scanVideos();
  scanLinks();
}

scanAllTikTokMedia();

if (typeof window !== 'undefined' && !window.__saviorTikTokObserverActive) {
  window.__saviorTikTokObserverActive = true;
  let debounceTimer = null;
  const observer = new MutationObserver(() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(scanAllTikTokMedia, 200);
  });
  if (document.body || document.documentElement) {
    observer.observe(document.body || document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'href', 'poster'] });
  }
  window.addEventListener('scroll', () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(scanAllTikTokMedia, 250);
  }, { passive: true });
}

})();
