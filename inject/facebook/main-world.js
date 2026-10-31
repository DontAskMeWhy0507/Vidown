/**
 * Facebook Video Metadata Extractor (Main World)
 * Traverses React Fiber internals to extract Facebook video FBID, DASH manifest URL,
 * and video details (HD/SD sources and DASH info).
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

function extractFacebookVideoIds(videoElement) {
  const fiberSuffix = getReactFiberSuffix(videoElement);
  const propsKey = '__reactProps' + fiberSuffix;

  let manifestUrl = videoElement.parentElement?.[propsKey]?.children?.props?.manifestUrl;
  let videoFBID = videoElement.parentElement?.[propsKey]?.children?.props?.videoFBID;

  if (!manifestUrl) {
    let current = videoElement;
    while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
      if (current?.[propsKey]?.children?.props?.videoFBID) {
        videoFBID = current[propsKey].children.props.videoFBID;
        break;
      }
      if (current?.[propsKey]?.children?.props?.manifestUrl) {
        manifestUrl = current[propsKey].children.props.manifestUrl;
        break;
      }
      current = current.parentElement;
    }
  }

  if (videoFBID) {
    videoElement.setAttribute('savior-vid', videoFBID);
  }
  if (manifestUrl) {
    videoElement.setAttribute('savior-manifest-url', manifestUrl);
  }
}

function extractFacebookVideoDetails(videoElement) {
  try {
    const fiberSuffix = getReactFiberSuffix(videoElement);
    const parent = videoElement.parentElement;
    const parentProps = parent?.['__reactProps' + fiberSuffix];

    let details = parentProps?.children?.[0]?.props?.post ||
      parentProps?.children?.props?.dashInfo ||
      videoElement.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps' + fiberSuffix]?.children?.props?.dashInfo;

    if (!details) {
      let current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const props = current?.['__reactProps' + fiberSuffix]?.children?.props;
        if (props?.manifestUrl) {
          return props;
        }
        current = current.parentElement;
      }

      current = videoElement;
      while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
        const props = current?.['__reactProps' + fiberSuffix]?.children?.props;
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
for (let i = 0; i < videos.length; i++) {
  const video = videos[i];
  extractFacebookVideoIds(video);
  try {
    const details = extractFacebookVideoDetails(video);
    if (details) {
      video.setAttribute('savior-video-detail', JSON.stringify(details));
    }
  } catch {
    // Ignore extraction errors
  }
}
