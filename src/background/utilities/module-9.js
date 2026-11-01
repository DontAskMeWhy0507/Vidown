// Module 9 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  r.d(t, "a", function () {
    return s;
  });
  var n = r(0);
  var o = r(1);
  function i(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return a(e, t);
          }
          var r = {}.toString.call(e).slice(8, -1);
          if (r === "Object" && e.constructor) {
            r = e.constructor.name;
          }
          if (r === "Map" || r === "Set") {
            return Array.from(e);
          } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
            return a(e, t);
          } else {
            return undefined;
          }
        }
      }(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
              };
            }
          },
          e: function (e) {
            throw e;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var i;
    var s = true;
    var c = false;
    return {
      s: function () {
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        s = e.done;
        return e;
      },
      e: function (e) {
        c = true;
        i = e;
      },
      f: function () {
        try {
          if (!s && r.return != null) {
            r.return();
          }
        } finally {
          if (c) {
            throw i;
          }
        }
      }
    };
  }
  function a(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  class s {
    constructor() {
      this.QUALITY_TYPES = {};
      this.QUALITY_TYPES[s.QL_VIDEO_ULTRAHD] = {
        quality: s.QL_HIGH,
        i18n_quality: Object(n.i18n)(o.r["3072p"].i18n_label),
        qualityIndex: 8,
        size: 3072,
        videoTitle: "Super HD"
      };
      this.QUALITY_TYPES["4K"] = this.QUALITY_TYPES[s.QL_VIDEO_ULTRAHD];
      this.QUALITY_TYPES["4K UHD"] = this.QUALITY_TYPES[s.QL_VIDEO_ULTRAHD];
      this.QUALITY_TYPES[s.QL_VIDEO_ULTRAHD] = {
        quality: s.QL_HIGH,
        i18n_quality: Object(n.i18n)(o.r["2160p"].i18n_label),
        qualityIndex: 7,
        size: 2160,
        videoTitle: "Ultra HD"
      };
      this.QUALITY_TYPES[s.QL_VIDEO_ULTRAHD] = {
        quality: s.QL_HIGH,
        i18n_quality: Object(n.i18n)(o.r["1440p"].i18n_label),
        qualityIndex: 6,
        size: 1440,
        videoTitle: "Quad HD"
      };
      this.QUALITY_TYPES["Quad HD"] = this.QUALITY_TYPES[s.QL_VIDEO_ULTRAHD];
      this.QUALITY_TYPES[s.QL_VIDEO_FULLHD] = {
        quality: s.QL_HIGH,
        i18n_quality: Object(n.i18n)(o.r["1080p"].i18n_label),
        qualityIndex: 5,
        size: 1080,
        videoTitle: "Full HD",
        audioTitle: "High",
        vimeoQuality: "1080p",
        zingTag: ["1080p", "label1080"],
        dailymotionQuality: "1080p",
        clipvnQuality: "5"
      };
      this.QUALITY_TYPES[s.QL_HIGH] = this.QUALITY_TYPES[s.QL_VIDEO_FULLHD];
      this.QUALITY_TYPES[s.QL_HIGHEST] = Object.assign({}, this.QUALITY_TYPES[s.QL_VIDEO_FULLHD]);
      this.QUALITY_TYPES[s.QL_HIGHEST].qualityIndex += 0.01;
      this.QUALITY_TYPES[s.QL_VIDEO_HD] = {
        quality: s.QL_STANDARD,
        i18n_quality: Object(n.i18n)(o.r["720p"].i18n_label),
        qualityIndex: 4,
        size: 720,
        videoTitle: "HD",
        audioTitle: "High",
        zingTag: ["720p", "label720"],
        vimeoQuality: "720p",
        dailymotionQuality: ["hd", "720p"],
        facebookQuality: ["hd_src", "hd_src_no_ratelimit"],
        JWQuality: "highquality",
        clipvnQuality: "4"
      };
      this.QUALITY_TYPES[s.QL_VIDEO_STANDARD] = {
        quality: s.QL_STANDARD,
        i18n_quality: Object(n.i18n)(o.r["480p"].i18n_label),
        qualityIndex: 3,
        size: 480,
        altSizes: [540],
        videoTitle: "Standard",
        audioTitle: "Standard",
        zingTag: ["480p"],
        dailymotionQuality: "480p",
        vimeoQuality: "480p",
        facebookQuality: ["sd_src", "sd_src_no_ratelimit"],
        JWQuality: "location",
        clipvnQuality: "3"
      };
      this.QUALITY_TYPES[s.QL_VIDEO_MEDIUM] = {
        quality: s.QL_STANDARD,
        i18n_quality: Object(n.i18n)(o.r["360p"].i18n_label),
        qualityIndex: 2,
        size: 360,
        videoTitle: "Medium",
        audioTitle: "Medium",
        vimeoQuality: "360p",
        dailymotionQuality: "380p",
        zingTag: ["source", "360p"],
        JWQuality: "lowquality",
        clipvnQuality: "2"
      };
      this.QUALITY_TYPES[s.QL_VIDEO_SMALL] = {
        quality: s.QL_LOW,
        i18n_quality: Object(n.i18n)(o.r["270p"].i18n_label),
        qualityIndex: 1,
        size: 240,
        altSizes: [270],
        videoTitle: "Small",
        audioTitle: "Low",
        dailymotionQuality: "240p",
        vimeoQuality: "270p",
        zingTag: ["f", "f240"],
        clipvnQuality: "1"
      };
      this.QUALITY_TYPES[s.QL_LOW] = this.QUALITY_TYPES[s.QL_VIDEO_SMALL];
      this.QUALITY_TYPES[s.QL_VIDEO_MOBILE] = {
        quality: s.QL_LOW,
        i18n_quality: Object(n.i18n)(o.r["144p"].i18n_label),
        qualityIndex: 0,
        size: 144,
        altSizes: [180],
        videoTitle: "Mobile",
        audioTitle: "Low",
        dailymotionQuality: "144p",
        vimeoQuality: "",
        clipvnQuality: "0"
      };
      this.PREFERRED_QUALITY_INDEX = {};
      this.PREFERRED_QUALITY_INDEX[s.QL_HIGH] = this.QUALITY_TYPES[s.QL_VIDEO_FULLHD].qualityIndex;
      this.PREFERRED_QUALITY_INDEX[s.QL_STANDARD] = this.QUALITY_TYPES[s.QL_VIDEO_STANDARD].qualityIndex;
      this.PREFERRED_QUALITY_INDEX[s.QL_MEDIUM] = this.PREFERRED_QUALITY_INDEX[s.QL_STANDARD];
      this.PREFERRED_QUALITY_INDEX[s.QL_LOW] = this.QUALITY_TYPES[s.QL_VIDEO_SMALL].qualityIndex;
      this.DEFAULT_QUALITY_LEVEL = s.QL_HIGH;
      this.QUALITY_LEVELS = [s.QL_HIGH, s.QL_STANDARD, s.QL_LOW];
      this.VIDEO_QUALITY_LEVELS = [s.QL_VIDEO_ULTRAHD, s.QL_VIDEO_FULLHD, s.QL_VIDEO_HD, s.QL_VIDEO_STANDARD, s.QL_VIDEO_MEDIUM, s.QL_VIDEO_SMALL, s.QL_VIDEO_MOBILE];
      this.NEW_VIDEO_QUALITY_LEVELS = [s.QL_VIDEO_8K, s.QL_VIDEO_ULTRAHD, s.QL_VIDEO_QHD, s.QL_VIDEO_FULLHD, s.QL_VIDEO_HD, s.QL_VIDEO_STANDARD, s.QL_VIDEO_MEDIUM, s.QL_VIDEO_SMALL, s.QL_VIDEO_MOBILE];
      this.AUDIO_QUALITY_LEVELS = [s.QL_AUDIO_LOSSLESS, s.QL_AUDIO_320, s.QL_AUDIO_128];
      this.DEFAULT_QUALITY_TYPE = s.QL_VIDEO_STANDARD;
    }
    normalizePreferenceLevel(e) {
      if (e) {
        if (e === s.QL_MEDIUM) {
          return s.QL_STANDARD;
        } else {
          return e;
        }
      } else {
        return this.DEFAULT_QUALITY_LEVEL;
      }
    }
    getResolutionHeight(e) {
      var t = parseInt(String(e.resolution || "").replace(/[^\d]/g, ""), 10);
      if (!Number.isNaN(t) && t > 0) {
        return t;
      } else {
        return this._getTypeByQualityType(e.quality || "").size || 0;
      }
    }
    getPreferenceGroupByHeight(e) {
      if (e >= s.PREFERENCE_HIGH_MIN) {
        return s.QL_HIGH;
      } else if (e >= s.PREFERENCE_STANDARD_MIN) {
        return s.QL_STANDARD;
      } else {
        return s.QL_LOW;
      }
    }
    chooseAutomaticDownload(e, t) {
      var n = this.normalizePreferenceLevel(t);
      var o = e.filter(e => e.type === "video" || e.type === "no_watermark_video");
      if (!o.length) {
        o = e;
      }
      var a;
      var c = {
        [s.QL_HIGH]: [],
        [s.QL_STANDARD]: [],
        [s.QL_LOW]: []
      };
      var u = i(o);
      try {
        for (u.s(); !(a = u.n()).done;) {
          var l = a.value;
          var d = this.getResolutionHeight(l);
          c[this.getPreferenceGroupByHeight(d)].push(l);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
      for (var p = 0, f = Object.keys(c); p < f.length; p++) {
        c[f[p]].sort((e, t) => this.getResolutionHeight(t) - this.getResolutionHeight(e));
      }
      var h;
      var m = {
        [s.QL_HIGH]: [s.QL_HIGH, s.QL_STANDARD, s.QL_LOW],
        [s.QL_STANDARD]: [s.QL_STANDARD, s.QL_HIGH, s.QL_LOW],
        [s.QL_LOW]: [s.QL_LOW, s.QL_STANDARD, s.QL_HIGH]
      };
      var g = i(m[n] || m[s.QL_HIGH]);
      try {
        for (g.s(); !(h = g.n()).done;) {
          var v = h.value;
          if (c[v]?.length) {
            return c[v][0];
          }
        }
      } catch (e) {
        g.e(e);
      } finally {
        g.f();
      }
      return o[0];
    }
    getFacebookQuality(e) {
      return this._getVideoQuality("facebookQuality", e)?.videoTitle;
    }
    getDailymotionQuality(e) {
      return this._getVideoQuality("dailymotionQuality", e)?.videoTitle;
    }
    getZingVideoQuality(e) {
      return this._getVideoQuality("zingTag", e)?.videoTitle;
    }
    getZingAudioQuality(e) {
      return this._getVideoQuality("zingTag", e)?.audioTitle;
    }
    getVimeoQuality(e) {
      return this._getVideoQuality("vimeoQuality", e)?.videoTitle;
    }
    getClipvnQuality(e) {
      return this._getVideoQuality("clipvnQuality", e)?.videoTitle;
    }
    getJWQuality(e) {
      return this._getVideoQuality("JWQuality", e)?.videoTitle;
    }
    getQualityBySize(e) {
      return this._getVideoQuality("size", e)?.videoTitle;
    }
    getSizeByQuality(e) {
      return (this.QUALITY_TYPES[e] || {}).size || 0;
    }
    getI18nOfQuality(e) {
      return this.QUALITY_TYPES[e]?.i18n_quality;
    }
    _getVideoQuality(e, t, r) {
      for (var n in this.QUALITY_TYPES) {
        var o = this.QUALITY_TYPES[n][e];
        if (!Array.isArray(o)) {
          o = [o];
        }
        if (o.indexOf(t) !== -1) {
          return this.QUALITY_TYPES[n];
        }
      }
      if (r) {
        return null;
      } else {
        return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE];
      }
    }
    _getTypeByQualityType(e) {
      for (var t in this.QUALITY_TYPES) {
        if (e === t || e === this.QUALITY_TYPES[t].videoTitle || e === this.QUALITY_TYPES[t].audioTitle) {
          return this.QUALITY_TYPES[t];
        }
      }
      return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE];
    }
    _calculateWeight(e, t) {
      var n = o.k[e.type]?.extensions_weight || [];
      var i = n.indexOf(e.ext);
      var a = this._getTypeByQualityType(e.quality || "").qualityIndex;
      return i / n.length + Math.abs(t - a) / 7;
    }
    getQualityLevelByType(e) {
      return Object.keys(this.QUALITY_TYPES).indexOf(this._getTypeByQualityType(e).videoTitle);
    }
    getAudioQualityIndex(e) {
      return this.AUDIO_QUALITY_LEVELS.concat().reverse().indexOf(e);
    }
    getVideoQualityIndex(e) {
      return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(e);
    }
    getUpdatedVideoQualityIndex(e) {
      var t = {
        "HD HDR": s.QL_VIDEO_HD,
        "Full HD HDR": s.QL_VIDEO_FULLHD,
        "Quad HD": s.QL_VIDEO_QHD,
        "Quad HD HDR": s.QL_VIDEO_QHD,
        "4K UHD": s.QL_VIDEO_ULTRAHD,
        "4K UHD HDR": s.QL_VIDEO_ULTRAHD,
        "8K UHD": s.QL_VIDEO_8K,
        "8K UHD HDR": s.QL_VIDEO_8K
      };
      if (t[e]) {
        e = t[e];
      }
      return this.NEW_VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(e);
    }
    getOneClickQualityIndex(e) {
      return this.QUALITY_LEVELS.concat().reverse().indexOf(this.normalizePreferenceLevel(e));
    }
    getAutoQualitySettingMetricValue(e) {
      var t = this.normalizePreferenceLevel(e);
      if (t === s.QL_HIGH) {
        return 8;
      } else if (t === s.QL_STANDARD) {
        return 9;
      } else if (t === s.QL_LOW) {
        return 10;
      } else {
        return 8;
      }
    }
    getDownloadSidepanelQualityMetricValue(e) {
      if (e.type === "audio" || e.type === "audio_channel") {
        var t = (e.quality || e.resolution || "").toLowerCase();
        if (t.includes("lossless") || t.includes("flac")) {
          return 22;
        } else if (t.includes("320")) {
          return 21;
        } else {
          return 20;
        }
      }
      var r = this.getResolutionHeight(e);
      if (r >= 4320) {
        return 18;
      } else if (r >= 2160) {
        return 17;
      } else if (r >= 1440) {
        return 16;
      } else if (r >= 1080) {
        return 15;
      } else if (r >= 720) {
        return 14;
      } else if (r >= 480) {
        return 13;
      } else if (r >= 360) {
        return 12;
      } else if (r >= 240) {
        return 11;
      } else {
        return 10;
      }
    }
    getQualityLevelByQualityType(e) {
      var t = this._getTypeByQualityType(e).quality;
      return this.normalizePreferenceLevel(t);
    }
    getQualityIndexByVideoTitleQuality(e) {
      if (this.QUALITY_TYPES[e] !== undefined) {
        return this.QUALITY_TYPES[e].qualityIndex;
      } else {
        return this.getOneClickQualityIndex(e);
      }
    }
    getQualityNameByResolution(e) {
      var t = parseInt(e);
      var r = Object.values(this.QUALITY_TYPES);
      var n = r.find(e => e.size === t || e.altSizes && e.altSizes.includes(t));
      if (n) {
        return n.videoTitle;
      }
      var o = r.find(e => e.size < t);
      if (o) {
        return o.videoTitle;
      } else {
        return null;
      }
    }
    getQualityExtFromDowload(e) {
      return (e.ext || "") + "/" + (e.quality || "") + "/" + (e.resolution || "");
    }
    chooseBestDownload(e, t, r) {
      var n = e.length;
      if (r) {
        var o = r.split("/").filter(e => e).length > 2;
        for (var i = 0; i < n; ++i) {
          var a = e[i];
          var s = this.getQualityExtFromDowload(a);
          if (s === r) {
            return a;
          }
          if (o) {
            var c = r.replace(/(.+)\/.+/, "$1");
            if (s.replace(/(.+)\/.+/, "$1") === c) {
              return a;
            }
          }
        }
      }
      t = this.normalizePreferenceLevel(t || this.DEFAULT_QUALITY_LEVEL);
      var u = e.filter(e => e.type === "video" || e.type === "no_watermark_video");
      if (!u || !u.length) {
        u = e;
      }
      n = u.length;
      var l = this.PREFERRED_QUALITY_INDEX[t];
      var d = 1000;
      var p = -1;
      for (var f = 0; f < n; ++f) {
        var h = u[f];
        var m = this._calculateWeight(h, l);
        if (d > m) {
          d = m;
          p = f;
        }
      }
      return u[t.toLocaleLowerCase() === r ? 0 : p];
    }
  }
  s.QL_HIGHEST = "Highest";
  s.QL_HIGH = "High";
  s.QL_MEDIUM = "Medium";
  s.QL_STANDARD = "Standard";
  s.QL_LOW = "Low";
  s.QL_VIDEO_8K = "8K UHD";
  s.QL_VIDEO_ULTRAHD = "Ultra HD";
  s.QL_VIDEO_QHD = "QHD";
  s.QL_VIDEO_FULLHD = "Full HD";
  s.QL_VIDEO_HD = "HD";
  s.QL_VIDEO_STANDARD = "Standard";
  s.QL_VIDEO_MEDIUM = "Medium";
  s.QL_VIDEO_SMALL = "Small";
  s.QL_VIDEO_MOBILE = "Mobile";
  s.QL_AUDIO_128 = "128kbps";
  s.QL_AUDIO_320 = "320kbps";
  s.QL_AUDIO_LOSSLESS = "lossless";
  s.PREFERENCE_HIGH_MIN = 1080;
  s.PREFERENCE_STANDARD_MIN = 360;
  t.b = new s();
};
