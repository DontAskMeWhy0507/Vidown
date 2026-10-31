/**
 * src/content/widget/widget-events.js
 * Manages user interactions: dropdown toggles, hover states, and download dispatching.
 */

function bindWidgetEvents(rendered, onDownload) {
  const { widgetContainer, mainBtn, dropdown, mediaList } = rendered || {};
  let isOpen = false;

  function toggleDropdown(show) {
    isOpen = typeof show === 'boolean' ? show : !isOpen;
    if (dropdown && dropdown.style) {
      dropdown.style.display = isOpen ? 'block' : 'none';
    }
  }

  function triggerDownload(item) {
    if (typeof onDownload === 'function') {
      onDownload(item);
    }
    toggleDropdown(false);
  }

  if (mainBtn && typeof mainBtn.addEventListener === 'function') {
    mainBtn.addEventListener('click', (e) => {
      if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
      if (!isOpen && mediaList && mediaList.length > 0) {
        // Toggle dropdown on arrow click or if multiple options exist
        toggleDropdown(true);
      } else if (mediaList && mediaList[0]) {
        triggerDownload(mediaList[0]);
      }
    });
  }

  if (dropdown && typeof dropdown.addEventListener === 'function') {
    dropdown.addEventListener('click', (e) => {
      if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
      const target = e.target;
      const itemEl = target && target.closest ? target.closest('.savior-dropdown-item') : target;
      if (itemEl) {
        const id = itemEl.getAttribute ? itemEl.getAttribute('data-id') : null;
        const found = (mediaList || []).find(m => m.id === id) || (mediaList && mediaList[0]);
        if (found) triggerDownload(found);
      }
    });
  }

  return {
    toggleDropdown,
    triggerDownload
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { bindWidgetEvents };
}
