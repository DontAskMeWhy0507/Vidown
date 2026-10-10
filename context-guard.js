/*
 * A content script can outlive an extension reload.  Chrome then rejects calls
 * made by the old script with "Extension context invalidated".  This guard is
 * intentionally loaded before the vendor bundle so an old tab does not flood
 * chrome://extensions/errors while the user reloads the page.
 */
(() => {
  const isTransientExtensionError = (reason) => {
    const message = String(reason && (reason.message || reason) || '');
    return /extension context invalidated/i.test(message);
  };

  window.addEventListener('unhandledrejection', (event) => {
    if (isTransientExtensionError(event.reason)) {
      event.preventDefault();
    }
  });

  window.addEventListener('error', (event) => {
    if (isTransientExtensionError(event.error || event.message)) {
      event.preventDefault();
    }
  }, true);
})();
