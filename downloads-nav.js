/**
 * downloads-nav.js
 * Handles navigation to the Downloads Manager page from popup and sidepanel.
 */
(function () {
  // Inject hover and positioning styles
  const style = document.createElement('style');
  style.textContent = `
    #btn-open-downloads-manager {
      position: absolute;
      top: 14px;
      right: 48px;
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      padding: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: background-color 0.15s ease, transform 0.1s ease;
      z-index: 100;
    }
    #btn-open-downloads-manager:hover {
      background-color: rgba(128, 128, 128, 0.25);
    }
    #btn-open-downloads-manager:active {
      transform: scale(0.95);
    }
    #btn-sidepanel-downloads {
      position: absolute;
      top: 8px;
      right: 74px;
      background: none;
      border: none;
      cursor: pointer;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: inherit;
      transition: background-color 0.15s ease, transform 0.1s ease;
      z-index: 100;
    }
    #btn-sidepanel-downloads:hover {
      background-color: rgba(128, 128, 128, 0.25);
    }
    #btn-sidepanel-downloads:active {
      transform: scale(0.95);
    }
  `;
  document.head.appendChild(style);

  // Delegated click handler
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#btn-open-downloads-manager, #btn-sidepanel-downloads');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();

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
  }, true);
})();
