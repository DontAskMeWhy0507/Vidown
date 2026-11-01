// Module 450 [detector] - Savior Video Player Host Mapping
export default function(module, exports, require) {
  "use strict";

  class PlayerHostMapping {
    constructor() {
      this.hostMapping = {
        "24h.com.vn": ".media-player",
        "phimmoi.net": ".media-player",
        "clipvuivn.com": "#video-js",
        "kenhvideo.com": ".jwplayer",
        "chimsedinang.com": "#clh-vid-video",
        "phimnhanh.net": "#player",
        "eva.vn": ".viewVideoPlay .video-js",
        "cnet.com": ".videoPlayer",
        "tv.tuoitre.vn": ".VCSortableInPreviewMode"
      };
    }

    hasSpecialSupport() {
      return Object.keys(this.hostMapping).some(targetHost => window.location.host.includes(targetHost));
    }

    getNode(customHost) {
      var currentHost = (customHost || window.location.host).replace("www.", "");
      var selector = this.hostMapping[currentHost];
      return selector ? document.querySelector(selector) : null;
    }
  }

  exports.a = new PlayerHostMapping();
}
