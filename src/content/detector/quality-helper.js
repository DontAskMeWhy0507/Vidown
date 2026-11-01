// Module 9 [detector] - Savior Media Stream Quality Selection and Ranking
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "a", () => QualityManager);

  var cryptoUtils = require(0);
  var mediaConstants = require(1);

  class QualityManager {
    constructor() {
    this.QUALITY_TYPES={};
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_ULTRAHD] = {
        quality:QualityManager.QL_HIGH,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["3072p"].i18n_label),
        qualityIndex:8,
        size:3072,
        videoTitle:"Super HD"
      };
    this.QUALITY_TYPES["4K"]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_ULTRAHD];
    this.QUALITY_TYPES["4K UHD"]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_ULTRAHD];
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_ULTRAHD] = {
        quality:QualityManager.QL_HIGH,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["2160p"].i18n_label),
        qualityIndex:7,
        size:2160,
        videoTitle:"Ultra HD"
      };
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_ULTRAHD] = {
        quality:QualityManager.QL_HIGH,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["1440p"].i18n_label),
        qualityIndex:6,
        size:1440,
        videoTitle:"Quad HD"
      };
    this.QUALITY_TYPES["Quad HD"]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_ULTRAHD];
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_FULLHD] = {
        quality:QualityManager.QL_HIGH,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["1080p"].i18n_label),
        qualityIndex:5,
        size:1080,
        videoTitle:"Full HD",
        audioTitle:"High",
        vimeoQuality:"1080p",
        zingTag:["1080p",
        "label1080"],
        dailymotionQuality:"1080p",
        clipvnQuality:"5"
      };
    this.QUALITY_TYPES[QualityManager.QL_HIGH]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_FULLHD];
    this.QUALITY_TYPES[QualityManager.QL_HIGHEST]=Object.assign({},this.QUALITY_TYPES[QualityManager.QL_VIDEO_FULLHD]);
    this.QUALITY_TYPES[QualityManager.QL_HIGHEST].qualityIndex+=.01;
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_HD] = {
        quality:QualityManager.QL_STANDARD,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["720p"].i18n_label),
        qualityIndex:4,
        size:720,
        videoTitle:"HD",
        audioTitle:"High",
        zingTag:["720p",
        "label720"],
        vimeoQuality:"720p",
        dailymotionQuality:["hd",
        "720p"],
        facebookQuality:["hd_src",
        "hd_src_no_ratelimit"],
        JWQuality:"highquality",
        clipvnQuality:"4"
      };
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_STANDARD] = {
        quality:QualityManager.QL_STANDARD,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["480p"].i18n_label),
        qualityIndex:3,
        size:480,
        altSizes:[540],
        videoTitle:"Standard",
        audioTitle:"Standard",
        zingTag:["480p"],
        dailymotionQuality:"480p",
        vimeoQuality:"480p",
        facebookQuality:["sd_src",
        "sd_src_no_ratelimit"],
        JWQuality:"location",
        clipvnQuality:"3"
      };
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_MEDIUM] = {
        quality:QualityManager.QL_STANDARD,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["360p"].i18n_label),
        qualityIndex:2,
        size:360,
        videoTitle:"Medium",
        audioTitle:"Medium",
        vimeoQuality:"360p",
        dailymotionQuality:"380p",
        zingTag:["source",
        "360p"],
        JWQuality:"lowquality",
        clipvnQuality:"2"
      };
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_SMALL] = {
        quality:QualityManager.QL_LOW,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["270p"].i18n_label),
        qualityIndex:1,
        size:240,
        altSizes:[270],
        videoTitle:"Small",
        audioTitle:"Low",
        dailymotionQuality:"240p",
        vimeoQuality:"270p",
        zingTag:["f",
        "f240"],
        clipvnQuality:"1"
      };
    this.QUALITY_TYPES[QualityManager.QL_LOW]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_SMALL];
    this.QUALITY_TYPES[QualityManager.QL_VIDEO_MOBILE] = {
        quality:QualityManager.QL_LOW,
        i18n_quality:cryptoUtils.i18n(mediaConstants.r["144p"].i18n_label),
        qualityIndex:0,
        size:144,
        altSizes:[180],
        videoTitle:"Mobile",
        audioTitle:"Low",
        dailymotionQuality:"144p",
        vimeoQuality:"",
        clipvnQuality:"0"
      };
    this.PREFERRED_QUALITY_INDEX={};
    this.PREFERRED_QUALITY_INDEX[QualityManager.QL_HIGH]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_FULLHD].qualityIndex;
    this.PREFERRED_QUALITY_INDEX[QualityManager.QL_STANDARD]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_STANDARD].qualityIndex;
    this.PREFERRED_QUALITY_INDEX[QualityManager.QL_MEDIUM]=this.PREFERRED_QUALITY_INDEX[QualityManager.QL_STANDARD];
    this.PREFERRED_QUALITY_INDEX[QualityManager.QL_LOW]=this.QUALITY_TYPES[QualityManager.QL_VIDEO_SMALL].qualityIndex;
    this.DEFAULT_QUALITY_LEVEL=QualityManager.QL_HIGH;
    this.QUALITY_LEVELS=[QualityManager.QL_HIGH,QualityManager.QL_STANDARD,QualityManager.QL_LOW];
    this.VIDEO_QUALITY_LEVELS=[QualityManager.QL_VIDEO_ULTRAHD,QualityManager.QL_VIDEO_FULLHD,QualityManager.QL_VIDEO_HD,QualityManager.QL_VIDEO_STANDARD,QualityManager.QL_VIDEO_MEDIUM,QualityManager.QL_VIDEO_SMALL,QualityManager.QL_VIDEO_MOBILE];
    this.NEW_VIDEO_QUALITY_LEVELS = [
        QualityManager.QL_VIDEO_8K,
        QualityManager.QL_VIDEO_ULTRAHD,
        QualityManager.QL_VIDEO_QHD,
        QualityManager.QL_VIDEO_FULLHD,
        QualityManager.QL_VIDEO_HD,
        QualityManager.QL_VIDEO_STANDARD,
        QualityManager.QL_VIDEO_MEDIUM,
        QualityManager.QL_VIDEO_SMALL,
        QualityManager.QL_VIDEO_MOBILE
      ];
    this.AUDIO_QUALITY_LEVELS=[QualityManager.QL_AUDIO_LOSSLESS,QualityManager.QL_AUDIO_320,QualityManager.QL_AUDIO_128];
    this.DEFAULT_QUALITY_TYPE=QualityManager.QL_VIDEO_STANDARD;
    }

    normalizePreferenceLevel(preferenceLevel) {
      if (!preferenceLevel) return this.DEFAULT_QUALITY_LEVEL;
      return preferenceLevel === QualityManager.QL_MEDIUM ? QualityManager.QL_STANDARD : preferenceLevel;
    }

    getResolutionHeight(mediaItem) {
      var parsedHeight = parseInt(String(mediaItem.resolution || "").replace(/[^\d]/g, ""), 10);
      if (!Number.isNaN(parsedHeight) && parsedHeight > 0) return parsedHeight;
      return this._getTypeByQualityType(mediaItem.quality || "").size || 0;
    }

    getPreferenceGroupByHeight(pixelHeight) {
      if (pixelHeight >= QualityManager.PREFERENCE_HIGH_MIN) return QualityManager.QL_HIGH;
      if (pixelHeight >= QualityManager.PREFERENCE_STANDARD_MIN) return QualityManager.QL_STANDARD;
      return QualityManager.QL_LOW;
    }

    chooseAutomaticDownload(mediaList, preferredQuality) {
      var normalizedPref = this.normalizePreferenceLevel(preferredQuality);
      var filteredMedia = mediaList.filter(item => item.type === "video" || item.type === "no_watermark_video");
      if (!filteredMedia.length) filteredMedia = mediaList;

      var grouped = {
        [QualityManager.QL_HIGH]: [],
        [QualityManager.QL_STANDARD]: [],
        [QualityManager.QL_LOW]: []
      };

      for (var mediaItem of filteredMedia) {
        var resHeight = this.getResolutionHeight(mediaItem);
        var groupKey = this.getPreferenceGroupByHeight(resHeight);
        grouped[groupKey].push(mediaItem);
      }

      var candidates;
      var matchedGroup = grouped[normalizedPref];
      if (matchedGroup && matchedGroup.length) {
        candidates = matchedGroup;
      } else if (normalizedPref === QualityManager.QL_HIGH) {
        candidates = grouped[QualityManager.QL_STANDARD].length ? grouped[QualityManager.QL_STANDARD] : grouped[QualityManager.QL_LOW];
      } else if (normalizedPref === QualityManager.QL_STANDARD) {
        candidates = grouped[QualityManager.QL_HIGH].length ? grouped[QualityManager.QL_HIGH] : grouped[QualityManager.QL_LOW];
      } else {
        candidates = grouped[QualityManager.QL_STANDARD].length ? grouped[QualityManager.QL_STANDARD] : grouped[QualityManager.QL_HIGH];
      }

      return (candidates || []).sort((itemA, itemB) => this.getResolutionHeight(itemB) - this.getResolutionHeight(itemA))[0];
    }

    getFacebookQuality(qualityTag) {
      var videoType = this._getVideoQuality("facebookQuality", qualityTag);
      return videoType ? videoType.videoTitle : void 0;
    }

    getDailymotionQuality(qualityTag) {
      var videoType = this._getVideoQuality("dailymotionQuality", qualityTag);
      return videoType ? videoType.videoTitle : void 0;
    }

    getZingVideoQuality(qualityTag) {
      var videoType = this._getVideoQuality("zingTag", qualityTag);
      return videoType ? videoType.videoTitle : void 0;
    }

    getZingAudioQuality(qualityTag) {
      var videoType = this._getVideoQuality("zingTag", qualityTag);
      return videoType ? videoType.audioTitle : void 0;
    }

    getVimeoQuality(qualityTag) {
      var videoType = this._getVideoQuality("vimeoQuality", qualityTag);
      return videoType ? videoType.videoTitle : void 0;
    }

    getClipvnQuality(qualityTag) {
      var videoType = this._getVideoQuality("clipvnQuality", qualityTag);
      return videoType ? videoType.videoTitle : void 0;
    }

    getJWQuality(qualityTag) {
      var videoType = this._getVideoQuality("JWQuality", qualityTag);
      return videoType ? videoType.videoTitle : void 0;
    }

    getQualityBySize(targetSize) {
      var videoType = this._getVideoQuality("size", targetSize);
      return videoType ? videoType.videoTitle : void 0;
    }

    getSizeByQuality(qualityKey) {
      return (this.QUALITY_TYPES[qualityKey] || {}).size || 0;
    }

    getI18nOfQuality(qualityKey) {
      var videoType = this.QUALITY_TYPES[qualityKey];
      return videoType ? videoType.i18n_quality : void 0;
    }

    _getVideoQuality(propName, targetValue, allowFallback) {
      for (var key in this.QUALITY_TYPES) {
        var mappedProp = this.QUALITY_TYPES[key][propName];
        if (!Array.isArray(mappedProp)) mappedProp = [mappedProp];
        if (mappedProp.includes(targetValue)) return this.QUALITY_TYPES[key];
      }
      return allowFallback ? null : this.QUALITY_TYPES[this.DEFAULT_QUALITY_LEVEL];
    }

    _getTypeByQualityType(qualityType) {
      for (var key in this.QUALITY_TYPES) {
        var item = this.QUALITY_TYPES[key];
        if (qualityType === key || qualityType === item.videoTitle || qualityType === item.audioTitle) {
          return item;
        }
      }
      return this.QUALITY_TYPES[this.DEFAULT_QUALITY_LEVEL];
    }

    _calculateWeight(mediaItem, preferredLevel) {
      var typeConfig = mediaConstants.k[mediaItem.type];
      var extWeights = (typeConfig && typeConfig.extensions_weight) || [];
      var extIndex = extWeights.indexOf(mediaItem.ext);
      var qualityIndex = this._getTypeByQualityType(mediaItem.quality || "").qualityIndex;
      return extIndex / extWeights.length + Math.abs(qualityIndex - preferredLevel);
    }

    getQualityLevelByType(qualityType) {
      return Object.keys(this.QUALITY_TYPES).indexOf(this._getTypeByQualityType(qualityType).videoTitle);
    }

    getAudioQualityIndex(qualityName) {
      return this.AUDIO_QUALITY_LEVELS.concat().reverse().indexOf(qualityName);
    }

    getVideoQualityIndex(qualityName) {
      return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(qualityName);
    }

    getUpdatedVideoQualityIndex(qualityLabel) {
      var specialMap = {
        "HD HDR": QualityManager.QL_VIDEO_HD,
        "Full HD HDR": QualityManager.QL_VIDEO_FULLHD,
        "Quad HD": QualityManager.QL_VIDEO_QHD,
        "Quad HD HDR": QualityManager.QL_VIDEO_QHD,
        "4K UHD": QualityManager.QL_VIDEO_ULTRAHD,
        "4K UHD HDR": QualityManager.QL_VIDEO_ULTRAHD,
        "8K UHD": QualityManager.QL_VIDEO_8K,
        "8K UHD HDR": QualityManager.QL_VIDEO_8K
      };
      var mappedName = specialMap[qualityLabel] || qualityLabel;
      return this.getVideoQualityIndex(mappedName);
    }

    getOneClickQualityIndex(preferenceLevel) {
      return this.QUALITY_LEVELS.concat().reverse().indexOf(this.normalizePreferenceLevel(preferenceLevel));
    }

    getAutoQualitySettingMetricValue(preferenceLevel) {
      var normalizedPref = this.normalizePreferenceLevel(preferenceLevel);
      if (normalizedPref === QualityManager.QL_HIGH) return 8;
      if (normalizedPref === QualityManager.QL_STANDARD) return 9;
      if (normalizedPref === QualityManager.QL_LOW) return 10;
      return 8;
    }

    getDownloadSidepanelQualityMetricValue(mediaItem) {
      if (mediaItem.type === "audio" || mediaItem.type === "audio_channel") {
        var audioLabel = (mediaItem.quality || mediaItem.resolution || "").toLowerCase();
        if (audioLabel.includes("lossless") || audioLabel.includes("flac")) return 22;
        if (audioLabel.includes("320")) return 21;
        return 20;
      }
      var videoHeight = this.getResolutionHeight(mediaItem);
      if (videoHeight >= 4320) return 18;
      if (videoHeight >= 2160) return 17;
      if (videoHeight >= 1440) return 16;
      if (videoHeight >= 1080) return 15;
      if (videoHeight >= 720) return 14;
      if (videoHeight >= 480) return 13;
      if (videoHeight >= 360) return 12;
      if (videoHeight >= 240) return 11;
      return 10;
    }

    getQualityLevelByQualityType(qualityType) {
      var qualityName = this._getTypeByQualityType(qualityType).quality;
      return this.normalizePreferenceLevel(qualityName);
    }

    getQualityIndexByVideoTitleQuality(titleQuality) {
      if (this.QUALITY_TYPES[titleQuality] !== undefined) {
        return this.QUALITY_TYPES[titleQuality].qualityIndex;
      }
      return this.getOneClickQualityIndex(titleQuality);
    }

    getQualityNameByResolution(resolutionString) {
      var parsedInt = parseInt(resolutionString, 10);
      var qualityList = Object.values(this.QUALITY_TYPES);
      var exactMatch = qualityList.find(qualityItem => qualityItem.size === parsedInt || (qualityItem.altSizes && qualityItem.altSizes.includes(parsedInt)));
      if (exactMatch) return exactMatch.videoTitle;
      var fallbackMatch = qualityList.find(qualityItem => qualityItem.size < parsedInt);
      return fallbackMatch ? fallbackMatch.videoTitle : this.QUALITY_TYPES[this.DEFAULT_QUALITY_LEVEL].videoTitle;
    }

    getQualityExtFromDowload(mediaItem) {
      return (mediaItem.ext || "") + "/" + (mediaItem.quality || "") + "/" + (mediaItem.resolution || "");
    }

    chooseBestDownload(mediaList, preferredQuality, lastQualityString) {
      var count = mediaList.length;
      if (lastQualityString) {
        var hasMultipleSegments = lastQualityString.split("/").filter(Boolean).length > 2;
        for (var index = 0; index < count; ++index) {
          var candidate = mediaList[index];
          var candidateQuality = this.getQualityExtFromDowload(candidate);
          if (candidateQuality === lastQualityString) return candidate;
          if (hasMultipleSegments) {
            var prefix = lastQualityString.replace(/(.+)\/.+/, "$1");
            if (candidateQuality.startsWith(prefix)) return candidate;
          }
        }
      }
      return this.chooseAutomaticDownload(mediaList, preferredQuality);
    }
  }

  QualityManager.QL_HIGHEST="Highest";
  QualityManager.QL_HIGH="High";
  QualityManager.QL_MEDIUM="Medium";
  QualityManager.QL_STANDARD="Standard";
  QualityManager.QL_LOW="Low";
  QualityManager.QL_VIDEO_8K="8K UHD";
  QualityManager.QL_VIDEO_ULTRAHD="Ultra HD";
  QualityManager.QL_VIDEO_QHD="QHD";
  QualityManager.QL_VIDEO_FULLHD="Full HD";
  QualityManager.QL_VIDEO_HD="HD";
  QualityManager.QL_VIDEO_STANDARD="Standard";
  QualityManager.QL_VIDEO_MEDIUM="Medium";
  QualityManager.QL_VIDEO_SMALL="Small";
  QualityManager.QL_VIDEO_MOBILE="Mobile";
  QualityManager.QL_AUDIO_128="128kbps";
  QualityManager.QL_AUDIO_320="320kbps";
  QualityManager.QL_AUDIO_LOSSLESS="lossless";
  QualityManager.PREFERENCE_HIGH_MIN=1080;
  QualityManager.PREFERENCE_STANDARD_MIN=360;

  exports.b = new QualityManager();
}
