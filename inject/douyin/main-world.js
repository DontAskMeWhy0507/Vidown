(() => {
/**
 * Douyin Video Metadata Extractor (Main World)
 * Traverses React Fiber internals to extract Aweme video info from Douyin player components.
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

function findAwemeInfo(videoElement) {
  let suffix = getReactFiberSuffix(videoElement);
  let propsKey = '__reactProps' + suffix;
  let current = videoElement;

  while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
    const props = current[propsKey];
    if (props?.children?.props?.children?.[0]?.props?.awemeInfo) {
      return props.children.props.children[0].props.awemeInfo;
    }
    if (props?.children?.[0]?.props?.children?.[0]?.props?.awemeInfo) {
      return props.children[0].props.children[0].props.awemeInfo;
    }
    if (props?.children?.[0]?.props?.children?.props?.awemeInfo) {
      return props.children[0].props.children.props.awemeInfo;
    }
    if (props?.children?.[1]?.props?.awemeInfo) {
      return props.children[1].props.awemeInfo;
    }
    if (props?.children?.props?.children?.[0]?.[0]?.props?.awemeInfo) {
      return props.children.props.children[0][0].props.awemeInfo;
    }

    current = current.parentElement;
    if (!suffix && current) {
      suffix = getReactFiberSuffix(current);
      propsKey = '__reactProps' + suffix;
    }
  }
  return null;
}

const targetVideos = document.querySelectorAll('video[data-target]');
for (let i = 0; i < targetVideos.length; i++) {
  const video = targetVideos[i];
  const awemeInfo = findAwemeInfo(video);
  if (awemeInfo) {
    const container = video.parentElement || video;
    container.setAttribute('data-aweme-info', JSON.stringify(awemeInfo));
  }
}
})();
