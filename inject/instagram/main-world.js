/**
 * Instagram Video Detail Extractor (Main World)
 * Traverses React Fiber internals to extract video manifest, dashInfo, and HD/SD sources from Instagram posts and Reels.
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

    if (location.href.match(/instagram\.com\/explore/i)) {
      return videoElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.[propsKey]?.children?.[0]?.props;
    }

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

    return details || null;
  } catch {
    return null;
  }
}

const videos = document.querySelectorAll('video');
if (videos) {
  Array.from(videos).filter(Boolean).forEach((video) => {
    const details = extractInstagramVideoDetails(video);
    if (details) {
      video.setAttribute('savior-video-detail', JSON.stringify(details));
    }
  });
}
