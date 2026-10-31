/**
 * src/content/widget/host-element.js
 * Creates the isolated <savior-host> element with an open ShadowRoot.
 */

function createHostElement(doc = document) {
  const host = doc.createElement('savior-host');
  host.setAttribute('style', 'all: unset; position: absolute; top: 0; left: 0; z-index: 99999999999999; display: block !important; overflow: unset;');
  host.style.position = 'absolute';
  host.style.top = '0';
  host.style.left = '0';
  host.style.zIndex = '99999999999999';
  host.style.display = 'block';

  if (typeof host.attachShadow === 'function') {
    host.attachShadow({ mode: 'open' });
  }

  return host;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createHostElement };
}
