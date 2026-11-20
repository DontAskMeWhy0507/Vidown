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

function findSourceInTree(obj, depth = 0, expectedId = null) {
  if (!obj || depth > 5) return null;
  if (Array.isArray(obj)) {
    const candidates=obj.filter(m=>m && (m.video_info || m.videoInfo));
    if(expectedId) return candidates.find(m=>String(m.id_str || m.id || m.contentId)===String(expectedId)) || null;
    return candidates.length===1?candidates[0]:null;
  }
  if (obj.video_info) return !expectedId || String(obj.id_str || obj.id || obj.contentId)===String(expectedId)?obj:null;
  for(const key of ['tweet','legacy','extended_entities','entities','media']){
    if(obj[key]){const found=findSourceInTree(obj[key],depth+1,expectedId);if(found)return found;}
  }
  if (obj.source && (obj.source.contentId || obj.source.videoInfo || obj.source.variants)) {
    if(expectedId && obj.source.contentId && String(obj.source.contentId)!==String(expectedId)) return null;
    return obj.source;
  }
  if (obj.videoInfo || (obj.variants && Array.isArray(obj.variants))) {
    const id=obj.id_str || obj.id || obj.contentId;
    if(expectedId && id && String(id)!==String(expectedId))return null;
    return obj;
  }
  if (obj.children) {
    if (Array.isArray(obj.children)) {
      const matches=[];
      for (const child of obj.children) {
        const found = findSourceInTree(child?.props || child, depth + 1, expectedId);
        if (found && !matches.includes(found)) matches.push(found);
      }
      return matches.length===1?matches[0]:null;
    } else {
      const found = findSourceInTree(obj.children.props || obj.children, depth + 1, expectedId);
      if (found) return found;
    }
  }
  return null;
}

function extractTwitterVideoMetadata(videoElement) {
  videoElement.removeAttribute('savior-twitter-source');
  videoElement.removeAttribute('savior-twitter-vid');
  const expectedId=((videoElement.poster || '').match(/video[^/]*\/(\d+)/)||[])[1];
  let current = videoElement;
  let source = null;

  while (current && current.nodeName !== 'BODY' && current.nodeName !== 'HTML') {
    const { fiberKey, propsKey } = getReactKeys(current);
    if (propsKey && current[propsKey]) {
      source = findSourceInTree(current[propsKey],0,expectedId);
      if (source) break;
    }
    if (fiberKey && current[fiberKey]) {
      const fiber = current[fiberKey];
      source = findSourceInTree(fiber.memoizedProps,0,expectedId) || findSourceInTree(fiber.return?.memoizedProps,0,expectedId);
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

function scan() {
const videos = document.querySelectorAll('video');
for (let i = 0; i < videos.length; i++) {
  extractTwitterVideoMetadata(videos[i]);
}
}
scan();
if(!window.__saviorTwitterObserver){
  window.__saviorTwitterObserver=true;
  let timer;
  const observer=new MutationObserver(()=>{clearTimeout(timer);timer=setTimeout(scan,150);});
  observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src','poster']});
  document.addEventListener('loadedmetadata',e=>{if(e.target.tagName==='VIDEO')extractTwitterVideoMetadata(e.target);},true);
}
})();
