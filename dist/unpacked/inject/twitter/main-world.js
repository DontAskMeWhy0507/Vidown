(() => {
/**
 * Twitter / X Video Metadata Extractor (Main World)
 * Traverses React Fiber internals to extract video contentId and stream sources.
 */

function getReactKeys(element) {
  let fiberKey = '';
  let propsKey = '';
  const keys = Object.keys(element);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].startsWith('__reactFiber$')) fiberKey = keys[i];
    else if (keys[i].startsWith('__reactProps$')) propsKey = keys[i];
  }
  return { fiberKey, propsKey };
}

function findSourceInTree(obj, depth = 0) {
  if (!obj || depth > 5) return null;
  if (obj.source && (obj.source.contentId || obj.source.videoInfo || obj.source.variants)) {
    return obj.source;
  }
  if (obj.videoInfo || (obj.variants && Array.isArray(obj.variants))) {
    return obj;
  }
  if (obj.children) {
    if (Array.isArray(obj.children)) {
      for (const child of obj.children) {
        const found = findSourceInTree(child?.props || child, depth + 1);
        if (found) return found;
      }
    } else {
      const found = findSourceInTree(obj.children.props || obj.children, depth + 1);
      if (found) return found;
    }
  }
  return null;
}

function extractTwitterVideoMetadata(videoElement) {
  let current = videoElement;
  let source = null;

  while (current && current.nodeName !== 'BODY' && current.nodeName !== 'HTML') {
    const { fiberKey, propsKey } = getReactKeys(current);
    if (propsKey && current[propsKey]) {
      source = findSourceInTree(current[propsKey]);
      if (source) break;
    }
    if (fiberKey && current[fiberKey]) {
      const fiber = current[fiberKey];
      source = findSourceInTree(fiber.memoizedProps) || findSourceInTree(fiber.return?.memoizedProps);
      if (source) break;
    }
    if (current.nodeName === 'ARTICLE') break;
    current = current.parentElement;
  }

  if (source) {
    const contentId = source.contentId || source.id_str || source.id || (source.videoInfo?.id);
    if (contentId) {
      videoElement.setAttribute('savior-twitter-vid', contentId);
    }
    videoElement.setAttribute('savior-twitter-source', JSON.stringify(source));
  }
}

const videos = document.querySelectorAll('video');
for (let i = 0; i < videos.length; i++) {
  extractTwitterVideoMetadata(videos[i]);
}
})();
