/**
 * src/content/widget/widget-ui.js
 * Renders the floating action bar and dropdown menu inside the ShadowRoot.
 */

function renderWidgetUI(shadowRoot, mediaList = [], doc = document) {
  if (!shadowRoot) return { widgetContainer: null };

  const container = doc.createElement('div');
  container.className = 'savior-widget-container';
  container.setAttribute('style', 'position: absolute; right: 12px; top: 12px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 13px; z-index: 100;');

  const mainBtn = doc.createElement('div');
  mainBtn.className = 'savior-btn-main savior-download-btn';
  mainBtn.innerHTML = `
    <span class="savior-icon-download">📥</span>
    <span class="savior-btn-label">Tải xuống</span>
    <span class="savior-btn-arrow">▾</span>
  `;
  container.appendChild(mainBtn);

  const dropdown = doc.createElement('div');
  dropdown.className = 'savior-dropdown-menu';
  dropdown.setAttribute('style', 'display: none; background: #fff; color: #333; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 6px; margin-top: 4px; overflow: hidden;');

  for (const item of mediaList) {
    const row = doc.createElement('div');
    row.className = 'savior-dropdown-item';
    const label = `${item.quality || item.resolution || 'Video'} (${(item.ext || 'mp4').toUpperCase()})`;
    row.innerHTML = `<span class="savior-item-title">${label}</span>`;
    row.setAttribute('data-id', item.id || '');
    dropdown.appendChild(row);
  }

  container.appendChild(dropdown);
  shadowRoot.appendChild(container);

  return {
    widgetContainer: container,
    mainBtn,
    dropdown,
    mediaList
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderWidgetUI };
}
