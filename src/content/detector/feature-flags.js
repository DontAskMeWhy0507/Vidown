// Module 11 [detector] - Savior Feature Flags and Browser Capability Detector
export default function(module, exports, require) {
  "use strict";

  (function(globalContext) {
    var mediaConstants = require(1);

    function parseVersionSegments(versionString) {
      return versionString.split(".").map(part => parseInt(part, 10));
    }

    function compareBrowserVersion(currentVersion, versionExpression) {
      if (!currentVersion) return false;
      var tokens = versionExpression.split(" ");
      if (tokens.length !== 2) return false;

      var threshold = -1;
      switch (tokens[0]) {
        case ">":
          threshold = 1;
          break;
        case ">=":
          threshold = 0;
          break;
      }

      var targetVersion = parseVersionSegments(tokens[1]);
      var diff = currentVersion[0] - targetVersion[0];
      if (diff !== 0) return diff >= threshold;
      diff = currentVersion[1] - targetVersion[1];
      if (diff !== 0) return diff >= threshold;
      diff = currentVersion[2] - targetVersion[2];
      if (diff !== 0) return diff >= threshold;
      diff = currentVersion[3] - targetVersion[3];
      return diff >= threshold;
    }

    var detectFeatureFlags = function(userAgent) {
      var chromeMatch = userAgent.match(/Chrome\/([\d.]+)/);
      var chromeVersion = chromeMatch && chromeMatch[1] ? parseVersionSegments(chromeMatch[1]) : null;
      var satisfies = compareBrowserVersion.bind(null, chromeVersion);

      return {
        YT: {
          mp4: true,
          m4a: true,
          webm: satisfies(">= 39.0.2171.103"),
          weba: satisfies(">= 39.0.2171.103")
        },
        M3U8: satisfies("> 62.4.3202.180"),
        SOUND_ONLY: satisfies("> 55.4.2883.114") || (Boolean(chromeVersion) && chromeVersion[0] === 50 && satisfies("> 50.3.2661.150")),
        SUBTITLES: satisfies("> 55.4.2883.114") || (Boolean(chromeVersion) && chromeVersion[0] === 50 && satisfies("> 50.3.2661.150")),
        PLAY_NOW_BOTTOM_TOOLTIP: satisfies("> 55.4.2883.126"),
        IS_ADS_PIP_PARAMS: satisfies("> 60.4.3112.120"),
        MEDIA_WEB_REQUEST: satisfies(">= 58.4.3029.118"),
        SERP_ADD_STRUCTURES: satisfies(">= 62.4.3202.176"),
        SERP_ADD_INNER_STRUCTURES: satisfies(">= 64.4.3282.200"),
        MOBILE_TRANSFER_PANEL: true,
        CUSTOM_METRICS_JSON: satisfies(">= 64.4.3282.236"),
        DASH_DOWNLOAD: satisfies(">= 72.0.3626.130"),
        WEB_REQUEST_EXTRA_HEADERS: satisfies(">= 72.0.0.0"),
        NATIVE_PIP: satisfies(">= 74.0.0.0"),
        DOWNLOAD: {
          EXTRA_DATAS: satisfies(">= 103.0.0.0"),
          M3U8_AUDIO: satisfies(">= 109.0.0.0")
        },
        CHATGPT: satisfies(">= 110.0.0.0"),
        DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: satisfies(">= 117.0.0.0"),
        DO_NOT_FAST_FORWARD_YOUTUBE_ADS: satisfies(">= " + mediaConstants.e),
        SRT_V3_SUPPORT: satisfies(">= 121.0.0.0"),
        ADGUARD_SWITCHER: satisfies(">= 140.0.0.0"),
        PREFETCH_SUPPORT: satisfies(">= 110.0.0.0"),
        NEW_MEDIA_DOWNLOAD: satisfies(">= 151.0.0.0")
      };
    };

    var featureFlags = detectFeatureFlags(globalContext.navigator.userAgent);
    exports.a = featureFlags;
  }).call(this, require(13));
}
