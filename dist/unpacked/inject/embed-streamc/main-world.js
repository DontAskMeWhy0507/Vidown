(() => {
/**
 * Embed StreamC Video Hash Metadata Stamping Extractor (Main World)
 * Reads window.videoHash and stamps savior-video-detail on the active video element.
 */
const videoElement = document.querySelector("video");
if (videoElement && window.videoHash) {
  videoElement.setAttribute("savior-video-detail", window.videoHash);
}
})();
