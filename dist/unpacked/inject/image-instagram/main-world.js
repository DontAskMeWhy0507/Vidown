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

    function searchProps(node, depth = 0) {
      if (!node || depth > 3) return null;
      try {
        const pk = node?.mediaFragmentKey?.pk || node?.media?.pk || node?.media?.carouselParentId;
        if (pk) return pk;

        if (Array.isArray(node.children)) {
          const limit = Math.min(node.children.length, 10);
          for (let i = 0; i < limit; i++) {
            const child = node.children[i];
            if (typeof child === 'object' && child !== null) {
              const res = searchProps(child, depth + 1);
              if (res) return res;
            }
          }
        }
        if (typeof node.children === 'object' && node.children !== null) {
          const res = searchProps(node.children, depth + 1);
          if (res) return res;
        }
        if (node.props) {
          const res = searchProps(node.props, depth + 1);
          if (res) return res;
        }
      } catch {
        return null;
      }
      return null;
    }

    const maxAncestors = Math.min(ancestors.length, 8);
    for (let i = 0; i < maxAncestors; i++) {
      const pk = searchProps(ancestors[i]?.['__reactProps' + fiberSuffix], 0);
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
