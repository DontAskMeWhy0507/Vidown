/**
 * Vidown Media Attribute Stamper
 * Handles reading and stamping companion attributes (savior-vid, savior-video-detail)
 */

export function stampMediaAttributes(element, payload = {}) {
  if (!element || !element.setAttribute) return;
  
  if (payload.vid) {
    element.setAttribute('savior-vid', String(payload.vid));
  }
  
  if (payload.detail) {
    const detailStr = typeof payload.detail === 'string' 
      ? payload.detail 
      : JSON.stringify(payload.detail);
    element.setAttribute('savior-video-detail', detailStr);
  }
}

export function readMediaAttributes(element) {
  if (!element || !element.getAttribute) return {};
  
  const vid = element.getAttribute('savior-vid');
  const detailStr = element.getAttribute('savior-video-detail');
  
  let detail = null;
  if (detailStr) {
    try {
      detail = JSON.parse(detailStr);
    } catch {
      detail = detailStr;
    }
  }
  
  return {
    vid,
    detail
  };
}

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    stampMediaAttributes,
    readMediaAttributes
  };
}
