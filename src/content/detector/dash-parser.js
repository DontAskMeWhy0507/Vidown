// Module 28 [detector] - Savior DASH Manifest Parser and YouTube Stream Handler
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "b", () => parseDashStream);

  var cryptoUtils = require(0);
  var featureFlags = require(11);
  var urlUtils = require(3);
  var xmlParser = require(44);
  var qualityHelper = require(9);
  var mediaConstants = require(1);
  var astParser = require(89);
  var formatDefinitions = require(90);

  function checkDashSupport(targetMap) {
    if (!(targetMap instanceof Map && targetMap.size !== 0 && featureFlags.a.DASH_DOWNLOAD)) {
      return Promise.resolve(null);
    }
    var firstEntry = targetMap.entries().next().value;
    var videoId = firstEntry ? firstEntry[0] : void 0;
    var mediaItem = firstEntry ? firstEntry[1] : void 0;

    return new Promise((resolve, reject) => {
      Object(cryptoUtils.getYoutubeDashMPDInfo)(videoId).then(mpdXml => {
        if (!mpdXml) {
          reject(mpdXml);
          return;
        }
        resolve(parseMpdPeriod(mediaItem, mpdXml));
      });
    });
  }

  function parseMpdPeriod(baseItem, xmlContent) {
    var parsedXml = Object(xmlParser.parse)(xmlContent, {
      attributeNamePrefix: "",
      attrNodeName: "@",
      textNodeName: "#text",
      ignoreAttributes: false,
      cdataTagName: "__cdata"
    });
    try {
      var adaptationSet = parsedXml.MPD.Period.AdaptationSet;
      if (location.host.includes("videojs.github.io")) {
        var videoSet = adaptationSet.find(set => set["@"].contentType.includes("video"));
        var audioSet = adaptationSet.find(set => set["@"].contentType.includes("audio"));
        return {
          ext: "mp4",
          resolution: videoSet["@"].height + "p",
          _dash_video_id: videoSet["@"].id,
          url: {
            videoUrl: videoSet.Representation.BaseURL,
            audioUrl: audioSet.Representation.BaseURL
          }
        };
      }
      var videoKey = Object.keys(adaptationSet).find(keyName => adaptationSet[keyName]["@"].mimeType.includes("video"));
      return adaptationSet[videoKey].Representation.map(repItem => {
        var mergedItem = Object.assign({}, baseItem, {
          resolution: repItem["@"].height + "p",
          _dash_video_id: repItem["@"].id
        });
        var resultDescriptor = JSON.parse(JSON.stringify(mergedItem));
        if (resultDescriptor.resolution) {
          resultDescriptor.quality = qualityHelper.b.getQualityBySize(parseInt(resultDescriptor.resolution, 10));
        }
        if (resultDescriptor.i18n_quality && resultDescriptor.quality && resultDescriptor.i18n_quality !== resultDescriptor.quality) {
          resultDescriptor.i18n_quality = resultDescriptor.quality;
        }
        return resultDescriptor;
      });
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  function regeneratorCore() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    (regeneratorCore = function() {
      return { w: wrapFn, m: markFn };
    })();
  }
  function wrapFn(stepFn) { return stepFn; }
  function markFn(genFn) { return genFn; }

  var asyncRunner = function(thisArg, extraArg1, extraArg2, generator) {
    return new (extraArg2 || (extraArg2 = Promise))(function(resolve, reject) {
      function step(result) {
        try {
          advance(generator.next(result));
        } catch (err) {
          reject(err);
        }
      }
      function fail(err) {
        try {
          advance(generator.throw(err));
        } catch (err2) {
          reject(err2);
        }
      }
      function advance(stepResult) {
        var val;
        if (stepResult.done) {
          resolve(stepResult.value);
        } else {
          val = stepResult.value;
          (val instanceof extraArg2 ? val : new extraArg2(function(res) { res(val); })).then(step, fail);
        }
      }
      advance((generator = generator.apply(thisArg, extraArg1 || [])).next());
    });
  };

  var FPS_WEIGHT_MAP = { 30: 0, 50: 25, 60: 50 };
  var YOUTUBE_FEATURE_FLAGS = featureFlags.a.YT;
  var AUDIO_CONTAINER_MAP = { webm: "weba", mp4: "mp4" };
  var IGNORED_CONTAINERS = ["m4a"];
  var videoMetadataCache = {};

  function fetchAndProcessMetadata(targetUrl, options) {
    var videoId = Object(cryptoUtils.getVideoId)(targetUrl) || targetUrl;
    return new Promise((resolve, reject) => {
      var fetchPromise = location.hostname.match(/(www\.)?youtube\.com/i)
        ? astParser.a.getMetadata(videoId, options)
        : Object(cryptoUtils.sendMessage)({ type: mediaConstants.b.GET_URL, params: { frameUrl: targetUrl } }).then(res => res ? res.data : void 0);

      fetchPromise
        .catch(() => Object(cryptoUtils.getYoutubeInfo)(targetUrl))
        .then(metadata => {
          videoMetadataCache[videoId] = metadata;
          if (metadata.formats[0].ext === "m3u8") {
            resolve(metadata.formats);
            return;
          }
          processHtml5PlayerFormats(resolve, metadata);
        })
        .catch(err => reject(err));
    });
  }

  function processHtml5PlayerFormats(resolveFn, metadata) {
    var playerStreamingData, adaptiveFormats;
    if (!metadata) {
      console.log("Youtube config invalid");
      resolveFn([]);
      return;
    }
    if (!metadata.formats.length && (adaptiveFormats = metadata.playerResponse && metadata.playerResponse.streamingData && metadata.playerResponse.streamingData.adaptiveFormats) && adaptiveFormats.length) {
      metadata.formats = metadata.playerResponse.streamingData.adaptiveFormats;
    }

    var moviePlayerElem = document.querySelector("#movie_player");
    metadata.html5player = metadata.html5player || (moviePlayerElem ? moviePlayerElem.getAttribute("data-version") : "") || "";

    if (metadata.html5player && !metadata.formats[0].url) {
      fetch("https://www.youtube.com/" + metadata.html5player)
        .then(response => response.text())
        .then(playerScriptText => {
          var decipherFunction = null;
          try {
            var cipherRegex = /([a-zA-Z0-9_$]+)=function\([a-z]\)\{a=a\.split\(""\);([\s\S]+?)\.join\(""\)\}/;
            var matchResult = playerScriptText.match(cipherRegex);
            if (matchResult) {
              var body = matchResult[2];
              var calls = body.split(";").map(s => s.trim()).filter(Boolean);
              if (calls.length) {
                var firstCall = calls[0];
                var objMatch = firstCall.match(/([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\(/);
                if (objMatch) {
                  var objName = objMatch[1];
                  var helperRegex = new RegExp("(?:var\\s+)?(" + objName.replace(/[$]/g, "\\$") + ")=\\{([\\s\\S]+?)\\};");
                  var helperMatch = playerScriptText.match(helperRegex);
                  if (helperMatch) {
                    var helperBody = helperMatch[2];
                    var methodDefs = helperBody.split("},").map(m => m.trim());
                    var opMap = {};
                    methodDefs.forEach(def => {
                      var mNameMatch = def.match(/([a-zA-Z0-9_$]+):function/);
                      if (!mNameMatch) return;
                      var mName = mNameMatch[1];
                      if (def.includes("reverse")) {
                        opMap[mName] = "reverse";
                      } else if (def.includes("splice") || def.includes("slice")) {
                        opMap[mName] = "splice";
                      } else {
                        opMap[mName] = "swap";
                      }
                    });

                    decipherFunction = function(cipherStr) {
                      if (!cipherStr || typeof cipherStr !== "string") return cipherStr;
                      var a = cipherStr.split("");
                      for (var i = 0; i < calls.length; i++) {
                        var cMatch = calls[i].match(/([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\(a(?:,\s*(\d+))?\)/);
                        if (!cMatch) continue;
                        var fn = cMatch[2];
                        var arg = cMatch[3] ? parseInt(cMatch[3], 10) : 0;
                        var op = opMap[fn];
                        if (op === "reverse") {
                          a.reverse();
                        } else if (op === "splice") {
                          a.splice(0, arg);
                        } else if (op === "swap") {
                          var tmp = a[0];
                          a[0] = a[arg % a.length];
                          a[arg % a.length] = tmp;
                        }
                      }
                      return a.join("");
                    };
                  }
                }
              }
            }
          } catch (e) {
            decipherFunction = null;
          }
          extractFormatsFromConfig(resolveFn, metadata, decipherFunction);
        })
        .catch(() => {
          extractFormatsFromConfig(resolveFn, metadata);
        });
      return;
    }
    extractFormatsFromConfig(resolveFn, metadata);
  }

  function parseDashStream(targetUrl) {
    return asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
      var videoId, cachedItem;
      return regeneratorCore().w(function iteratorStep(stepState) {
        for (;;) switch (stepState.p = stepState.n) {
          case 0:
            videoId = Object(cryptoUtils.getVideoId)(targetUrl) || targetUrl;
            cachedItem = videoMetadataCache[videoId];
            if (!cachedItem) {
              stepState.n = 1;
              break;
            }
            return stepState.a(2, cachedItem);
          case 1:
            stepState.p = 1;
            stepState.n = 2;
            return fetchAndProcessMetadata(targetUrl);
          case 2:
            stepState.n = 4;
            break;
          case 3:
            stepState.p = 3;
            return stepState.a(2, void 0);
          case 4:
            return stepState.a(2, videoMetadataCache[videoId]);
        }
      }, generatorFn, null, [[1, 3]]);
    }));
  }

  function extractFormatsFromConfig(resolveFn, metadata, decipherFn) {
    var videoDetailsTitle, audioBuckets = {}, videoList = [], dashMap = new Map(), subtitleMap = null;

    if (featureFlags.a.SUBTITLES) {
      subtitleMap = extractSubtitles(metadata, ["en", "vi", "ko", "ja", "fr", "ru", "de", "zh-Hans"]);
    }

    if (!metadata.title) {
      videoDetailsTitle = metadata.videoDetails ? metadata.videoDetails.title : void 0;
      metadata.title = videoDetailsTitle || document.title;
    }

    var processedFormats = metadata.formats.map(formatItem => {
      if (formatItem.isDashMPD && dashMap.has(formatItem.url)) return null;

      var qualityLabel = formatItem.qualityLabel || formatItem.resolution || "";
      var baseResolution = qualityLabel.includes("HDR") ? qualityLabel : qualityLabel.replace(/([0-9]{3,5}p).*/, "$1");
      var cleanResolution = qualityLabel.replace(/([0-9]{3,5}p\d{0,3}).*/, "$1");
      var fpsKey = (formatItem.fps && FPS_WEIGHT_MAP[formatItem.fps.toString()] ? formatItem.fps : 30).toString();

      if (baseResolution && mediaConstants.r[baseResolution]) {
        formatItem.quality = mediaConstants.r[baseResolution].label;
      }
      var qualityScore = mediaConstants.r[baseResolution] ? mediaConstants.r[baseResolution].value : 0;
      qualityScore += FPS_WEIGHT_MAP[fpsKey] || 0;

      if (!formatItem.url && formatItem.signatureCipher) {
        var cipherSig = formatItem.signatureCipher.split("&")[0].split("=")[1];
        if (cipherSig) {
          var decryptedSig = decipherFn ? decipherFn(decodeURIComponent(cipherSig)) : void 0;
          var urlMatch = formatItem.signatureCipher.match(/url=[\s\S]+/g);
          var matchedUrl = urlMatch ? urlMatch[0].split("=")[1] : "";
          formatItem.url = decodeURIComponent(matchedUrl) + "&sig=" + decryptedSig;
        }
      }

      if (!formatItem.container) {
        var parsedMime = Object(urlUtils.d)(formatItem.mimeType);
        formatItem.container = (parsedMime ? parsedMime.ext : void 0) || "mp4";
      }

      var i18nLabel;
      try {
        var qualDef = mediaConstants.r[baseResolution];
        i18nLabel = formatItem.i18n_quality || Object(cryptoUtils.i18n)(qualDef ? qualDef.i18n_label : void 0) || formatItem.quality;
      } catch (err) {
        i18nLabel = formatItem.quality;
      }

      var mediaItem = {
        ext: formatItem.container,
        filename: metadata.title,
        title: metadata.title,
        quality: formatItem.quality,
        i18n_quality: i18nLabel,
        url: formatItem.url,
        type: Object(cryptoUtils.getMediaType)(formatItem.type || formatItem.mimeType || "", formatItem.container),
        resolution: cleanResolution,
        referrer: formatItem.referrer || (metadata.videoDetails ? metadata.videoDetails.video_url : metadata.video_url) || location.href,
        sortValues: { qualityValue: parseInt(qualityScore.toString(), 10) },
        hasAudio: Boolean(formatItem.audioQuality),
        audioQuality: formatItem.audioQuality
      };

      if (mediaItem.type === "audio" && formatItem.audioTrack) {
        mediaItem.quality = formatItem.audioTrack.displayName;
        mediaItem.i18n_quality = formatItem.audioTrack.displayName;
        var itagInfo = formatDefinitions.c[formatItem.itag];
        if (itagInfo && itagInfo.audioBitrate) {
          mediaItem.resolution = itagInfo.audioBitrate + "kbps";
        }
        if (mediaItem.ext === "mp4") {
          mediaItem.ext = "mp3";
        }
      }

      if (formatItem.isDashMPD) {
        mediaItem._isDashMPD = formatItem.isDashMPD;
        dashMap.set(formatItem.url, mediaItem);
        return null;
      }

      var parsedUrlObj = Object(urlUtils.f)(formatItem.url);
      if (parsedUrlObj.host) {
        mediaItem.altUrl = Object(urlUtils.b)(parsedUrlObj);
      }

      if (!formatItem.audioBitrate && formatItem.audioQuality) {
        formatItem.audioBitrate = formatItem.bitrate;
      }

      if (!formatItem.encoding && formatItem.audioQuality && formatItem.audioBitrate) {
        if (!audioBuckets[formatItem.container]) {
          audioBuckets[formatItem.container] = [];
        }
        audioBuckets[formatItem.container].push(formatItem);
      }

      if (!formatItem.audioEncoding && !formatItem.isDashMPD && mediaItem.type !== "audio") {
        videoList.push(mediaItem);
      }

      return mediaItem;
    }).filter(Boolean);

    videoList.forEach(videoItem => {
      var mappedExt = AUDIO_CONTAINER_MAP[videoItem.ext];
      var candidateAudios = [...(audioBuckets[mappedExt] || []), ...(audioBuckets.mp3 || [])];
      var originalAudios = candidateAudios.filter(audioItem => {
        var track = audioItem.audioTrack;
        return track && track.displayName && track.displayName.includes("original");
      });

      var selectedAudio = originalAudios.find(audioItem => {
        var resNumMatch = /\d+/.exec(videoItem.resolution || "");
        var resNumber = Number(resNumMatch ? resNumMatch[0] : 0);
        return resNumber >= 480
          ? audioItem.audioQuality && audioItem.audioQuality.toLowerCase().includes("medium")
          : audioItem.audioQuality && audioItem.audioQuality.toLowerCase().includes("low");
      }) || originalAudios[0] || candidateAudios[0];

      if (!selectedAudio || !YOUTUBE_FEATURE_FLAGS[mappedExt]) {
        videoItem.url = "";
        videoItem.quality = "";
        return;
      }

      var videoStreamUrl = videoItem.url;
      videoItem.url = {
        videoUrl: String(videoStreamUrl),
        audioUrl: selectedAudio.url
      };
    });

    var subtitleItems = [];
    if (subtitleMap) {
      subtitleItems = Object.keys(subtitleMap).map(langKey => {
        var subUrl = subtitleMap[langKey];
        if (subUrl) {
          var subParsed = Object(urlUtils.f)(subUrl);
          subParsed.ext = "yt_srt";
          subParsed.i18n_ext = "srt";
          subParsed.filename = metadata.title;
          subParsed.title = metadata.title;
          subParsed.quality = langKey;
          subParsed.type = "subtitles";
          subParsed.isSubtitles = true;
          return subParsed;
        }
      }).filter(Boolean);
      processedFormats = processedFormats.concat(subtitleItems);
    }

    processedFormats = processedFormats
      .filter(item => Boolean(item && item.url) && !IGNORED_CONTAINERS.includes(item.ext || ""))
      .filter(item => {
        if (typeof item.url !== "object" || !item.url.audioUrl || !item.url.videoUrl) return true;
        return !processedFormats.some(other =>
          other !== item &&
          typeof other.url === "string" &&
          other.ext === item.ext &&
          other.quality === item.quality &&
          other.type === item.type &&
          other.resolution === item.resolution
        );
      });

    var dedupeSet = new Set();
    processedFormats = processedFormats
      .sort(item => item.ext === "mp4" ? -1 : 1)
      .filter(item => {
        var key = item.quality + "_" + item.resolution + "_" + item.ext;
        if (item.quality && item.quality.toLowerCase().includes("tiny")) return false;
        if (dedupeSet.has(key)) return false;
        dedupeSet.add(key);
        return true;
      });

    checkDashSupport(dashMap).then(dashResults => {
      if (dashResults && dashResults.length) {
        dashResults.forEach(item => {
          if (item.resolution) {
            item.sortValues = item.sortValues || {};
            var qDef = mediaConstants.r[item.resolution];
            item.sortValues.qualityValue = qDef ? qDef.value : null;
          }
        });
        processedFormats = dashResults;
        if (!processedFormats.some(item => (item ? item.ext : void 0) === "yt_srt")) {
          processedFormats = processedFormats.concat(subtitleItems);
        }
      }
      resolveFn(processedFormats);
    }).catch(err => {
      console.warn(err);
      resolveFn(processedFormats);
    });
  }

  function extractSubtitles(metadata, preferredLangs) {
    var playerResponse = metadata.player_response;
    if (!playerResponse) return null;
    var parsedResponse;
    try {
      parsedResponse = typeof playerResponse === "object" && playerResponse.captions ? playerResponse : JSON.parse(playerResponse);
    } catch (err) {
      return null;
    }
    var captionTracks;
    try {
      captionTracks = parsedResponse.captions.playerCaptionsTracklistRenderer.captionTracks;
    } catch (err) {
      return null;
    }
    if (!captionTracks || !captionTracks.length) return null;

    var matchedTracks = captionTracks.filter(track => preferredLangs.includes(track.languageCode));
    var resultMap = {};
    var languageList = [];

    matchedTracks.forEach(track => {
      var langCode = track.languageCode;
      var langLabel = Object(cryptoUtils.i18n)("subtitles_lang_" + langCode.replace(/-/g, "_")) || langCode.toUpperCase();
      var trackUrl;
      try {
        trackUrl = new URL(track.baseUrl);
      } catch (err) {
        trackUrl = new URL("https://www.youtube.com" + track.baseUrl);
      }
      if (!featureFlags.a.SRT_V3_SUPPORT && trackUrl.searchParams.get("fmt") === "srv3") {
        trackUrl.searchParams.delete("fmt");
      }
      track.baseUrl = trackUrl.href;
      if (track.vssId !== "a." + langCode) {
        resultMap[langLabel] = trackUrl.href;
        languageList.push(langCode);
      }
    });

    if (matchedTracks.length > 0) {
      ["en", "vi"].forEach(targetLang => {
        if (!languageList.includes(targetLang)) {
          var fallbackLabel = Object(cryptoUtils.i18n)("subtitles_lang_" + targetLang);
          var translationUrl = matchedTracks[0].baseUrl + "&tlang=" + targetLang;
          resultMap[fallbackLabel] = translationUrl;
        }
      });
    }

    return resultMap;
  }

  var dashRetryTimeout = null;
  var dashRetryCount = 1;

  function fetchDashUrl(targetUrl) {
    return asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
      var sendResult;
      return regeneratorCore().w(function iteratorStep(stepState) {
        for (;;) switch (stepState.n) {
          case 0:
            stepState.n = 1;
            return Object(cryptoUtils.sendMessage)({ type: mediaConstants.b.GET_URL, params: { url: targetUrl } });
          case 1:
            sendResult = stepState.v;
            if (sendResult) {
              stepState.n = 4;
              break;
            }
            if (dashRetryCount === 5) {
              stepState.n = 2;
              break;
            }
            dashRetryTimeout = setTimeout(() => {
              dashRetryCount++;
              EE.emit("widget.updateMedia");
            }, 1000);
            return stepState.a(2, []);
          case 2:
            clearTimeout(dashRetryTimeout);
            return stepState.a(2, []);
          case 3:
            stepState.n = 5;
            break;
          case 4:
            clearTimeout(dashRetryTimeout);
            return stepState.a(2, sendResult.url);
          case 5:
            return stepState.a(2);
        }
      }, generatorFn);
    }));
  }

  exports.a = {
    parse: (targetUrl, options) =>
      asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
        var formatList, fastVideoList, fastResolutionList, audioList, mappedItems, bestAudio, parseErr;
        return regeneratorCore().w(function iteratorStep(stepState) {
          for (;;) switch (stepState.p = stepState.n) {
            case 0:
              stepState.p = 0;
              stepState.n = 1;
              return fetchAndProcessMetadata(targetUrl, options);
            case 1:
              formatList = stepState.v;
              if (formatList[0].ext === "m3u8") {
                return stepState.a(2, formatList);
              }
              fastVideoList = [];
              fastResolutionList = [];
              audioList = [];

              mappedItems = formatList.map(item => {
                if (typeof item.url === "object" && item.url.videoUrl.includes("ratebypass=yes")) {
                  if (item.sortValues && item.sortValues.qualityValue) {
                    item.oldResolution = item.resolution;
                    item.resolution = item.resolution + " ";
                    item.sortValues.qualityValue++;
                    fastResolutionList.push(item.resolution);
                    item.fast = true;
                    fastVideoList.push(item);
                  }
                  if (item.audioQuality) {
                    item.url = item.url.videoUrl;
                    try {
                      var audioQualMap = {
                        AUDIO_QUALITY_LOW: { resolution: "128kbps", quality: "medium", i18n_quality: Object(cryptoUtils.i18n)("ql_medium") },
                        AUDIO_QUALITY_MEDIUM: { resolution: "128kbps", quality: "medium", i18n_quality: Object(cryptoUtils.i18n)("ql_medium") },
                        AUDIO_QUALITY_HIGH: { resolution: "256kbps", quality: "high", i18n_quality: Object(cryptoUtils.i18n)("ql_high") }
                      };
                      var chosenAudio = audioQualMap[item.audioQuality];
                      var audioClone = Object.assign({}, item, {
                        ext: "mp3",
                        exts: ["mp3"],
                        type: "audio",
                        soundOnly: true,
                        ignoreSize: true,
                        quality: chosenAudio.quality,
                        i18n_quality: chosenAudio.i18n_quality,
                        resolution: "",
                        fast: true
                      });
                      if (audioClone.sortValues && audioClone.sortValues.qualityValue) {
                        audioClone.sortValues.qualityValue++;
                      }
                      audioList.push(audioClone);
                    } catch (err) {}
                  }
                } else {
                  item.fast = false;
                }
                if (item) {
                  item.useDoubleDownloadTrick = true;
                }
                return item;
              });

              fastVideoList.push(...mappedItems);
              if (audioList.length) {
                bestAudio = audioList[0];
                if (audioList.length > 1) {
                  for (var aIdx = 1; aIdx < audioList.length; aIdx++) {
                    var currentRes = parseInt(audioList[aIdx].oldResolution || audioList[aIdx].resolution, 10);
                    var bestRes = parseInt(bestAudio.oldResolution || bestAudio.resolution, 10);
                    if (currentRes < bestRes) {
                      bestAudio = audioList[aIdx];
                    }
                  }
                }
                if (bestAudio) {
                  bestAudio.useDoubleDownloadTrick = true;
                }
                fastVideoList.push(bestAudio);
              }
              return stepState.a(2, fastVideoList);
            case 2:
              stepState.p = 2;
              parseErr = stepState.v;
              console.warn(parseErr);
              return stepState.a(2, []);
          }
        }, generatorFn, null, [[0, 2]]);
      })),

    urls: [
      {
        checkUrl: checkContext => {
          var targetUrl = checkContext.url;
          var domNode = checkContext.node;
          return /youtube\.com\/embed\/\?autoplay.+/i.test(targetUrl) && domNode.tagName === "IFRAME";
        },
        getUrl: queryContext => {
          var targetUrl = queryContext.url;
          return asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
            return regeneratorCore().w(function iteratorStep(stepState) {
              for (;;) switch (stepState.n) {
                case 0:
                  return stepState.a(2, fetchDashUrl(targetUrl));
              }
            }, generatorFn);
          }));
        },
        mediaObjectChange: changeContext => {
          var mediaObject = changeContext.mediaObject;
          if (/youtube\.com\/watch\?v\=.+/i.test(mediaObject.url)) {
            mediaObject.ext = "mp4";
            mediaObject.exts = ["mp4"];
            return "video";
          }
        }
      }
    ]
  };
}
