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
  while (current && current.parentElement && current.parentElement.tagName !== 'ARTICLE' && current.parentElement.tagName !== 'HTML') {
    const children = current[propsKey]?.children || [];
    if (Array.isArray(children)) {
      const match = children.find((c) => c?.props?.bitrateInfo);
      if (match) {
        return match.props;
      }
    }
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

function findTikTokContainer(element) {
  if (!element) return null;
  return element.closest(
    '[data-e2e="feed-item"], [data-e2e="feed-video"], [data-e2e="user-post-item"], ' +
    '[data-e2e="explore-item"], [data-e2e="recommend-list-item-container"], ' +
    '[class*="DivItemContainer"], [class*="DivVideoFeed"], article'
  ) || element.parentElement?.parentElement?.parentElement;
}

function extractVideoInfoFromFiberProps(props, targetId) {
  if (!props) return null;
  const item = props.item || props.itemStruct || props.itemInfo?.itemStruct || props.aweme || props;
  const video = item.video || item.videoInfo || (props.bitrateInfo ? props : null);
  if (!video) return null;
  const bitrates = video.bitrateInfo || video.bitrates || [];
  const playUrl = video.playAddr || video.playApi || video.downloadAddr || (Array.isArray(video.playAddr?.urlList) ? video.playAddr.urlList[0] : '') || '';
  if (!bitrates.length && !playUrl) return null;
  return {
    bitrateInfo: bitrates,
    url: playUrl,
    downloadAddr: video.downloadAddr || playUrl,
    ratio: video.ratio || video.definition || '720p',
    desc: item.desc || props.desc || '',
    id: String(item.id || video.id || targetId || ''),
    cover: video.cover || video.originCover || ''
  };
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
        if (memoized?.item?.id && String(memoized.item.id) === String(targetId) && memoized.item.video?.bitrateInfo?.length) {
          return { kind: 'item', props: memoized };
        }
        if (memoized?.id && String(memoized.id) === String(targetId) && (memoized.bitrateInfo?.length || memoized.videoInfo?.bitrateInfo?.length)) {
          return { kind: 'flat', props: memoized };
        }
        if (memoized?.itemStruct?.id && String(memoized.itemStruct.id) === String(targetId)) {
          return { kind: 'item', props: { item: memoized.itemStruct } };
        }
        return searchFiberTree(node.child, targetId, currentDepth + 1) || searchFiberTree(node.sibling, targetId, currentDepth + 1);
      })(current[fiberKey], videoId, 0);

      if (found) return found;
    }
    current = current.parentElement;
  }
  return null;
}

function setAwemeVideoData(element, data) {
  if (element && data) {
    try {
      element.setAttribute('data-aweme-video', JSON.stringify(data));
      if (data.id) {
        element.setAttribute('data-aweme-id', String(data.id));
      }
    } catch {
      // Ignore serialization errors
    }
  }
}

window.__tiktokVideoMap = window.__tiktokVideoMap || {};

// 1. Scan TikTok video anchor links and extract item/video details
const links = Array.from(document.querySelectorAll('a[href]')).filter((a) =>
  /\/video\/\d+/i.test(a.href) || /tiktok\.com\/@.+\/video.+/i.test(a.href)
);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const videoId = extractTikTokVideoId(link.href) || extractTikTokVideoId(link.getAttribute('href'));
  const result = findAwemeItemByVideoId(link);
  if (result) {
    const kind = result.kind;
    const props = result.props;
    let videoInfo = null;

    if (kind === 'item' || props?.item?.video?.bitrateInfo?.length) {
      const item = props.item || {};
      const video = item.video || {};
      if (video.bitrateInfo?.length || video.playAddr) {
        videoInfo = {
          bitrateInfo: video.bitrateInfo || [],
          url: video.playAddr || '',
          downloadAddr: video.downloadAddr,
          ratio: video.ratio || video.definition || '720p',
          desc: item.desc || '',
          id: String(item.id || video.id || videoId || ''),
          cover: video.cover || video.originCover || ''
        };
      }
    } else {
      const vi = props.videoInfo || {};
      const bitrates = vi.bitrateInfo || props.bitrateInfo;
      if (bitrates?.length || vi.playAddr || props.playUrl) {
        videoInfo = {
          bitrateInfo: bitrates || [],
          url: vi.playAddr || props.playUrl || '',
          downloadAddr: vi.downloadAddr,
          ratio: vi.ratio || vi.definition || '720p',
          desc: props.desc || '',
          id: String(props.id || vi.id || videoId || ''),
          cover: vi.cover || props.cover || ''
        };
      }
    }

    if (videoInfo) {
      if (videoInfo.id) {
        window.__tiktokVideoMap[videoInfo.id] = videoInfo;
      }
      setAwemeVideoData(link, videoInfo);

      const container = findTikTokContainer(link);
      if (container) {
        setAwemeVideoData(container, videoInfo);
        const relatedVideos = container.querySelectorAll('video');
        for (let j = 0; j < relatedVideos.length; j++) {
          setAwemeVideoData(relatedVideos[j], videoInfo);
        }
      }
    }
  }
}

// 2. Scan direct <video> tags and ensure each is mapped to its specific video info
const videos = document.querySelectorAll('video');
for (let i = 0; i < videos.length; i++) {
  const video = videos[i];
  if (!video.hasAttribute('data-aweme-video')) {
    // Check if parent container has an anchor
    const container = findTikTokContainer(video);
    const containerAnchor = container?.querySelector('a[href*="/video/"]');
    if (containerAnchor) {
      const vidId = extractTikTokVideoId(containerAnchor.href) || extractTikTokVideoId(containerAnchor.getAttribute('href'));
      if (vidId && window.__tiktokVideoMap[vidId]) {
        setAwemeVideoData(video, window.__tiktokVideoMap[vidId]);
        continue;
      }
      const res = findAwemeItemByVideoId(containerAnchor);
      if (res) {
        const info = extractVideoInfoFromFiberProps(res.props, vidId);
        if (info) {
          if (info.id) window.__tiktokVideoMap[info.id] = info;
          setAwemeVideoData(video, info);
          setAwemeVideoData(containerAnchor, info);
          if (container) setAwemeVideoData(container, info);
          continue;
        }
      }
    }

    const bitrateProps = findReactBitrateProps(video);
    if (bitrateProps) {
      setAwemeVideoData(video, bitrateProps);
    }
  }
}

})();
