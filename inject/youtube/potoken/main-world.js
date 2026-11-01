/**
 * YouTube Proof-of-Origin Token (PoToken) Extractor (Main World)
 * Obtains websafe PoToken string using page context mint function and stamps
 * the token into the DOM body attribute for Savior content script consumption.
 */
(async () => {
  const videoId = document.body.getAttribute("savior-video-id");
  if (videoId) {
    if (typeof window.mintAsWebsafeString === "function") {
      const poToken = await window.mintAsWebsafeString(videoId);
      document.body.setAttribute("savior-po-token", poToken);
    }
  }
})();
