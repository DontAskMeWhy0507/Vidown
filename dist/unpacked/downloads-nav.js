/**
 * downloads-nav.js
 * Handles navigation to the Downloads Manager page from popup, sidepanel, and on-page Savior bar.
 */
(function () {
  const isExtensionPage = typeof location !== 'undefined' && location.protocol === 'chrome-extension:';

  function openDownloadsPage() {
    const downloadsUrl = chrome.runtime.getURL('downloads/downloads.html');
    if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
      chrome.tabs.create({ url: downloadsUrl });
    } else if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      try {
        chrome.runtime.sendMessage({ action: 'openDownloadsPage' }, () => {
          if (chrome.runtime.lastError) {
            window.open(downloadsUrl, '_blank');
          }
        });
      } catch (_) {
        window.open(downloadsUrl, '_blank');
      }
    } else {
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

    const btn = e.target.closest('#btn-open-downloads-manager');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      openDownloadsPage();
    }
  }, true);
})();
