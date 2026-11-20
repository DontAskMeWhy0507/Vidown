/**
 * downloads-nav.js
 * Handles navigation to the Downloads Manager page from popup, sidepanel, and on-page Savior bar.
 */
(function () {
  const isExtensionPage = typeof location !== 'undefined' && location.protocol === 'chrome-extension:';

  function openDownloadsPage() {
    let downloadsUrl = '';
    try {
      if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.getURL === 'function') {
        downloadsUrl = chrome.runtime.getURL('downloads/downloads.html');
      }
    } catch (_) {
      return;
    }
    if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create && downloadsUrl) {
      chrome.tabs.create({ url: downloadsUrl });
    } else if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      try {
        chrome.runtime.sendMessage({ action: 'openDownloadsPage' }, () => {
          if (chrome.runtime && chrome.runtime.lastError && isExtensionPage && downloadsUrl) {
            window.open(downloadsUrl, '_blank');
          }
        });
      } catch (_) {
        if (isExtensionPage && downloadsUrl) window.open(downloadsUrl, '_blank');
      }
    } else if (isExtensionPage && downloadsUrl) {
      window.open(downloadsUrl, '_blank');
    }
  }

  // Delegated click handler
  document.addEventListener('click', function (e) {
    if (!isExtensionPage) {
      // The Savior widget renders inside a shadow DOM host (<savior-host>), so a
      // document-level listener sees a retargeted event target and closest()
      // can never reach the button. Walk the composed path instead:
      // #open-settings inside the #expansion menu opens the Downloads Manager.
      // (Do not intercept #other-feature so clicking ⋮ toggles the menu).
      let saviorFeature = null;
      let inSaviorWidget = false;
      const path = (typeof e.composedPath === 'function') ? e.composedPath() : [];
      for (const node of path) {
        if (!node || typeof node !== 'object') continue;
        if (node.id === 'open-settings') saviorFeature = node;
        if ((node.classList && node.classList.contains && node.classList.contains('savior-widget')) ||
            (node.tagName && String(node.tagName).toLowerCase() === 'savior-host')) {
          inSaviorWidget = true;
        }
      }
      // Fallback for non-shadow widgets rendered directly in the page.
      if (!saviorFeature && e.target && e.target.closest) {
        const candidate = e.target.closest('#open-settings');
        if (candidate) {
          saviorFeature = candidate;
          inSaviorWidget = !!candidate.closest('.savior-widget, savior-host, [id*="savior"], [class*="savior"]');
        }
      }
      if (saviorFeature && inSaviorWidget) {
        e.preventDefault();
        e.stopPropagation();
        openDownloadsPage();
      }
      return;
    }

    const btn = (e.target && typeof e.target.closest === 'function') ? e.target.closest('#btn-open-downloads-manager') : null;
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      openDownloadsPage();
    }
  }, true);
})();
