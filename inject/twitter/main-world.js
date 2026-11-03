(() => {
/**
 * Twitter / X Video Metadata Extractor (Main World)
 * Traverses React Fiber internals to extract video contentId and stream sources.
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

function extractTwitterVideoMetadata(videoElement) {
  let current = videoElement;
  let source = null;
  let fiberSuffix = '';

  while (current && current.nodeName !== 'ARTICLE' && current.nodeName !== 'BODY') {
    fiberSuffix = fiberSuffix || getReactFiberSuffix(current);
    const props = current['__reactProps' + fiberSuffix]?.children?.props?.source;
    if (props) {
      source = props;
      break;
    }
    current = current.parentElement;
  }

  if (source) {
    videoElement.setAttribute('savior-twitter-vid', source.contentId);
    videoElement.setAttribute('savior-twitter-source', JSON.stringify(source));
  }
}

const videos = document.querySelectorAll('video');
for (let i = 0; i < videos.length; i++) {
  extractTwitterVideoMetadata(videos[i]);
}
})();
