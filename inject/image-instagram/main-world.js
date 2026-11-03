(() => {
/**
 * Instagram Image PK Extractor (Main World)
 * Traverses React Fiber internals to extract media PK (primary key) and carousel parent ID for high-res photos.
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

function findMediaPk(element) {
  try {
    const fiberSuffix = getReactFiberSuffix(element);
    const ancestors = [];
    let current = element;
    while (current && current.parentElement && current.parentElement.tagName !== 'BODY' && current.parentElement.tagName !== 'HTML') {
      ancestors.push(current);
      current = current.parentElement;
    }

    function searchProps(node) {
      if (!node) return null;
      try {
        const pk = node?.mediaFragmentKey?.pk || node?.media?.pk || node?.media?.carouselParentId;
        if (pk) return pk;

        if (Array.isArray(node.children)) {
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (typeof child === 'object') {
              const res = searchProps(child);
              if (res) return res;
            }
          }
        }
        if (typeof node.children === 'object') {
          const res = searchProps(node.children);
          if (res) return res;
        }
        if (node.props) {
          const res = searchProps(node.props);
          if (res) return res;
        }
      } catch {
        return null;
      }
      return null;
    }

    for (let i = 0; i < ancestors.length; i++) {
      const pk = searchProps(ancestors[i]?.['__reactProps' + fiberSuffix]);
      if (pk) return pk;
    }
    return null;
  } catch {
    return null;
  }
}

const scannedImages = document.querySelectorAll('[savior-scanned-img]:not([image-instagram-pk])');
if (scannedImages) {
  Array.from(scannedImages).filter(Boolean).forEach((img) => {
    const pk = findMediaPk(img);
    img.setAttribute('image-instagram-pk', pk || '');
  });
}
})();
