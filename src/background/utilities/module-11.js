// Module 11 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (e) {
    var n = r(1);
    function o(e) {
      return e.split(".").map(e => parseInt(e));
    }
    function i(e, t) {
      if (!e) {
        return false;
      }
      var r = t.split(" ");
      if (r.length !== 2) {
        return false;
      }
      var n = -1;
      switch (r[0]) {
        case ">":
          n = 1;
          break;
        case ">=":
          n = 0;
      }
      var i;
      var a;
      var s;
      var c = o(r[1]);
      a = c;
      return ((s = (i = e)[0] - a[0]) !== 0 || (s = i[1] - a[1]) != 0 || (s = i[2] - a[2]) != 0 ? s : s = i[3] - a[3]) >= n;
    }
    var a = function (e) {
      var t = e.match(/Chrome\/([\d.]+)/);
      if (t && t[1]) {
        t = o(t[1]);
      }
      var r = i.bind(null, t);
      return {
        YT: {
          mp4: true,
          m4a: true,
          webm: r(">= 39.0.2171.103"),
          weba: r(">= 39.0.2171.103")
        },
        M3U8: r("> 62.4.3202.180"),
        SOUND_ONLY: r("> 55.4.2883.114") || !!t && t[0] === 50 && r("> 50.3.2661.150"),
        SUBTITLES: r("> 55.4.2883.114") || !!t && t[0] === 50 && r("> 50.3.2661.150"),
        PLAY_NOW_BOTTOM_TOOLTIP: r("> 55.4.2883.126"),
        IS_ADS_PIP_PARAMS: r("> 60.4.3112.120"),
        MEDIA_WEB_REQUEST: r(">= 58.4.3029.118"),
        SERP_ADD_STRUCTURES: r(">= 62.4.3202.176"),
        SERP_ADD_INNER_STRUCTURES: r(">= 64.4.3282.200"),
        MOBILE_TRANSFER_PANEL: true,
        CUSTOM_METRICS_JSON: r(">= 64.4.3282.236"),
        DASH_DOWNLOAD: r(">= 72.0.3626.130"),
        WEB_REQUEST_EXTRA_HEADERS: r(">= 72.0.0.0"),
        NATIVE_PIP: r(">= 74.0.0.0"),
        DOWNLOAD: {
          EXTRA_DATAS: r(">= 103.0.0.0"),
          M3U8_AUDIO: r(">= 109.0.0.0")
        },
        CHATGPT: r(">= 110.0.0.0"),
        DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: r(">= 117.0.0.0"),
        DO_NOT_FAST_FORWARD_YOUTUBE_ADS: r(">= " + n.e),
        SRT_V3_SUPPORT: r(">= 121.0.0.0"),
        ADGUARD_SWITCHER: r(">= 140.0.0.0"),
        PREFETCH_SUPPORT: r(">= 110.0.0.0"),
        NEW_MEDIA_DOWNLOAD: r(">= 151.0.0.0")
      };
    }(e.navigator.userAgent);
    t.a = a;
  }).call(this, r(13));
};
