/**
 * Facebook Stories Video Extractor (Main World)
 * Detects the currently active Story video and extracts direct HD/SD MP4 URLs or DASH manifests from React Fiber internals.
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

function findActiveStoryVideo() {
  const videos = document.querySelectorAll('video');
  let activeVideo = null;
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].offsetHeight !== 0) {
      activeVideo = videos[i];
    }
  }
  return activeVideo;
}

function extractStoryUrl(videoElement) {
  try {
    const fiberSuffix = getReactFiberSuffix(videoElement);
    const propsKey = '__reactProps' + fiberSuffix;
    const fiberKey = '__reactFiber' + fiberSuffix;

    const ancestorProps = videoElement?.parentElement?.parentElement?.parentElement?.parentElement?.[propsKey];
    const implementations = ancestorProps?.children?.[0]?.props?.children?.props?.implementations;
    const implData = implementations?.[1]?.data;

    return implData?.hdSrc ||
      implData?.sdSrc ||
      videoElement?.parentElement?.[propsKey]?.children?.props?.manifestUrl ||
      videoElement[fiberKey]?.return?.stateNode?.props?.videoData?.$1?.hd_src ||
      videoElement[fiberKey]?.return?.stateNode?.props?.videoData?.$1?.sd_src ||
      '';
  } catch {
    return '';
  }
}

function extractStoryVideoDetails(videoElement) {
  try {
    const fiberSuffix = getReactFiberSuffix(videoElement);
    const parentProps = videoElement.parentElement?.['__reactProps' + fiberSuffix];
    const ancestorProps = videoElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps' + fiberSuffix];

    let details = parentProps?.children?.[0]?.props?.post ||
      parentProps?.children?.props?.dashInfo ||
      ancestorProps?.children?.props?.dashInfo;

    if (!details) {
      let current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const props = current?.['__reactProps' + fiberSuffix]?.children?.props;
        if (props?.manifestUrl) return props;
        current = current.parentElement;
      }

      current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const props = current?.['__reactProps' + fiberSuffix]?.children?.props;
        if (props?.hdSrc || props?.sdSrc) return props;
        current = current.parentElement;
      }
    }

    return details || null;
  } catch {
    return null;
  }
}

const activeVideo = findActiveStoryVideo();
if (activeVideo) {
  const storyUrl = extractStoryUrl(activeVideo);
  try {
    const details = extractStoryVideoDetails(activeVideo);
    if (details) {
      activeVideo.setAttribute('savior-video-detail', JSON.stringify(details));
    }
  } catch {
    // Ignore detail extraction errors
  }
  document.head.setAttribute('savior-story-url', storyUrl || '');
}
