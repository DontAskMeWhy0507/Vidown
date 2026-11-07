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
    } catch {
      // Ignore serialization errors
    }
  }
}

// 1. Scan direct <video> tags and extract Aweme bitrate props
const videos = document.querySelectorAll('video');
for (let i = 0; i < videos.length; i++) {
  const video = videos[i];
  if (!video.hasAttribute('data-aweme-video')) {
    const bitrateProps = findReactBitrateProps(video);
    if (bitrateProps) {
      setAwemeVideoData(video, bitrateProps);
    }
  }
}

// 2. Scan TikTok video anchor links and extract item/video details
const links = Array.from(document.querySelectorAll('a[href]')).filter((a) =>
  /tiktok\.com\/@.+\/video.+/i.test(a.href)
);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (!link.hasAttribute('data-aweme-video')) {
    const result = findAwemeItemByVideoId(link);
    if (result) {
      const kind = result.kind;
      const props = result.props;
      let videoInfo = null;

      if (kind === 'item' || props?.item?.video?.bitrateInfo?.length) {
        const item = props.item || {};
        const video = item.video || {};
        if (video.bitrateInfo?.length) {
          videoInfo = {
            bitrateInfo: video.bitrateInfo,
            url: video.playAddr || '',
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
        if (bitrates?.length) {
          videoInfo = {
            bitrateInfo: bitrates,
            url: vi.playAddr || props.playUrl || '',
            downloadAddr: vi.downloadAddr,
            ratio: vi.ratio || vi.definition,
            desc: props.desc,
            id: props.id || vi.id,
            cover: vi.cover || props.cover || ''
          };
        }
      }

      if (videoInfo) {
        setAwemeVideoData(link, videoInfo);
        const childVideo = link.querySelector('video');
        if (childVideo && !childVideo.hasAttribute('data-aweme-video')) {
          setAwemeVideoData(childVideo, videoInfo);
        }
      }
    }
  }
}

})();
