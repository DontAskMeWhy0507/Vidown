(() => {
/**
 * LinkedIn Video Manifest Extractor (Main World)
 * Inspects parent element's videojs/player instance for HLS manifest URL.
 */

const videos = document.querySelectorAll('video');
if (videos) {
  Array.from(videos).filter(Boolean).forEach((video) => {
    try {
      const player = video.parentElement?.player;
      const manifestUrl = player?.lastSource_?.player;
      if (manifestUrl) {
        video.setAttribute('savior-manifest-url', manifestUrl);
      }
    } catch {
      // Ignore errors when traversing host DOM
    }
  });
}
})();
