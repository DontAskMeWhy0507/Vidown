// Module 11 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    "use strict";

    (function (e) {
      var r = n(1);
      function o(e) {
        return e.split(".").map(e => parseInt(e));
      }
      function i(e, t) {
        if (!e) {
          return false;
        }
        var n = t.split(" ");
        if (n.length !== 2) {
          return false;
        }
        var r = -1;
        switch (n[0]) {
          case ">":
            r = 1;
            break;
          case ">=":
            r = 0;
        }
        var i;
        var a;
        var s;
        var c = o(n[1]);
        a = c;
        return ((s = (i = e)[0] - a[0]) !== 0 || (s = i[1] - a[1]) != 0 || (s = i[2] - a[2]) != 0 ? s : s = i[3] - a[3]) >= r;
      }
      var a = function (e) {
        var t = e.match(/Chrome\/([\d.]+)/);
        if (t && t[1]) {
          t = o(t[1]);
        }
        var n = i.bind(null, t);
        return {
          YT: {
            mp4: true,
            m4a: true,
            webm: n(">= 39.0.2171.103"),
            weba: n(">= 39.0.2171.103")
          },
          M3U8: n("> 62.4.3202.180"),
          SOUND_ONLY: n("> 55.4.2883.114") || !!t && t[0] === 50 && n("> 50.3.2661.150"),
          SUBTITLES: n("> 55.4.2883.114") || !!t && t[0] === 50 && n("> 50.3.2661.150"),
          PLAY_NOW_BOTTOM_TOOLTIP: n("> 55.4.2883.126"),
          IS_ADS_PIP_PARAMS: n("> 60.4.3112.120"),
          MEDIA_WEB_REQUEST: n(">= 58.4.3029.118"),
          SERP_ADD_STRUCTURES: n(">= 62.4.3202.176"),
          SERP_ADD_INNER_STRUCTURES: n(">= 64.4.3282.200"),
          MOBILE_TRANSFER_PANEL: true,
          CUSTOM_METRICS_JSON: n(">= 64.4.3282.236"),
          DASH_DOWNLOAD: n(">= 72.0.3626.130"),
          WEB_REQUEST_EXTRA_HEADERS: n(">= 72.0.0.0"),
          NATIVE_PIP: n(">= 74.0.0.0"),
          DOWNLOAD: {
            EXTRA_DATAS: n(">= 103.0.0.0"),
            M3U8_AUDIO: n(">= 109.0.0.0")
          },
          CHATGPT: n(">= 110.0.0.0"),
          DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: n(">= 117.0.0.0"),
          DO_NOT_FAST_FORWARD_YOUTUBE_ADS: n(">= " + r.e),
          SRT_V3_SUPPORT: n(">= 121.0.0.0"),
          ADGUARD_SWITCHER: n(">= 140.0.0.0"),
          PREFETCH_SUPPORT: n(">= 110.0.0.0"),
          NEW_MEDIA_DOWNLOAD: n(">= 151.0.0.0")
        };
      }(e.navigator.userAgent);
      t.a = a;
    }).call(this, n(13));
  };
