// Module 164 [widget] - Savior Download List Component
export default function(module, exports, require) {
  "use strict";

  (function(globalWindow, setImmediateHelper) {
    var Mustache = require(39);
    var mustacheRenderer = require.n(Mustache);
    var settings = require(7);
    var utils = require(0);
    var quality = require(9);
    var mediaConstants = require(1);
    var domUtils = require(12);
    var createAsyncQueue = require(123);
    var logger = require(5);
    var clickaway = require(82);
    var formatParser = require(6);
    var urlUtils = require(3);

    function getRegeneratorRuntime() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
      function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return y(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(y(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,y(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,y(f,"constructor",c),y(c,"constructor",u),u.displayName="GeneratorFunction",y(c,i,"GeneratorFunction"),y(f),y(f,i,"Generator"),y(f,n,(function(){return this})),y(f,"toString",(function(){return"[object Generator]"})),(getRegeneratorRuntime=function(){return{w:o,m:d}})();
    }

    var asyncHelper = function(thisArg, args, PromiseCtor, generatorFunc) {
      return new (PromiseCtor || Promise)((resolve, reject) => {
        function step(res) { try { advance(generatorFunc.next(res)); } catch (e) { reject(e); } }
        function throwStep(err) { try { advance(generatorFunc.throw(err)); } catch (e) { reject(e); } }
        function advance(stepRes) {
          if (stepRes.done) return resolve(stepRes.value);
          Promise.resolve(stepRes.value).then(step, throwStep);
        }
        advance((generatorFunc = generatorFunc.apply(thisArg, args || [])).next());
      });
    };

    class SaviorDownloadList {
      constructor(eventEmitter, downloads, isPopUp, autoDownload, downloadImmediate, tabUrl) {
        this.EE = eventEmitter;
        this.$el = domUtils.a("div", "savior-download-list");
        this.isPopUp = isPopUp;
        this._download = this._download.bind(this);
        this._checkFileSize = this._checkFileSize.bind(this);
        this._sizeQueue = createAsyncQueue.a(this._checkFileSize, 3);
        this.initState(downloads, isPopUp, autoDownload, downloadImmediate, tabUrl);
        this.render();
        this._eventListener();
      }

      initState(downloads, isPopUp, autoDownload, downloadImmediate, tabUrl) {
        var renderDownloads = this._processQualitiesForRender(downloads, tabUrl || location.href);
        var preferredLevel = settings.a.get("preferred_quality_level");
        var lastQualityMap = settings.a.get("prefer_last_quality") && settings.a.get("last_quality_list");

        var downloadScopes = renderDownloads.map((group, index) => {
          var showSelectBox = (0 === index) && !isPopUp && !autoDownload && downloadImmediate;
          var flatMediaList = group.media.flatMap(item => item.media);
          var bestDownload = quality.b.chooseBestDownload(
            flatMediaList,
            preferredLevel,
            (lastQualityMap == null ? void 0 : lastQualityMap[group.title || "noname"]) || ""
          );

          if (autoDownload && 0 === index) {
            bestDownload.downloadClicked = true;
            this._download(bestDownload, index);
          }

          var targetQualityExt = quality.b.getQualityExtFromDowload(bestDownload);
          var selectedIndex = Math.max(
            0,
            flatMediaList.map(item => quality.b.getQualityExtFromDowload(item)).indexOf(targetQualityExt)
          );

          return {
            scopeDownloads: flatMediaList,
            index: selectedIndex,
            isSelectBoxShow: showSelectBox
          };
        });

        this.state = {
          renderDownloads: renderDownloads,
          downloadScopes: downloadScopes
        };
      }

      _eventListener() {
        var self = this;
        EE.on("widget.show_playnow", event => {
          var params = event.params;
          var scopeMedia = self.state.renderDownloads[params.scopeIndex]?.media || [];
          for (var group of scopeMedia) {
            var matched = group.media.find(m => utils.isSameMedia(m, params));
            if (matched) {
              matched.state = params.state;
              matched.playable = params.playable;
              delete matched.downloadClicked;
              matched.playId = params.playId;
              break;
            }
          }
          self.setState();
        });

        EE.on("widget.download_canceled", event => {
          var params = event.params;
          var scopeMedia = self.state.renderDownloads[params.scopeIndex]?.media || [];
          for (var group of scopeMedia) {
            var matched = group.media.find(m => utils.isSameMedia(m, params));
            if (matched) {
              delete matched.error;
              delete matched.succeed;
              delete matched.playable;
              delete matched.state;
              delete matched.downloadClicked;
              break;
            }
          }
          self.setState();
        });

        EE.on("download_list.download_result", event => {
          var scopeMedia = self.state.renderDownloads[event.scopeIndex]?.media || [];
          for (var group of scopeMedia) {
            var matched = group.media.find(m => m.id === event.id && m.url === event.url);
            if (!matched) break;
            matched.succeed = event.succeed;
            matched.error = event.error;
            break;
          }
          self.setState();
        });

        EE.on("preferred-quality-level.changed", () => {
          var preferredLevel = settings.a.get("preferred_quality_level");
          var remembered = settings.a.get("prefer_last_quality") && settings.a.get("preferred_quality:" + preferredLevel);

          self.state.downloadScopes.forEach(scope => {
            var current = scope.scopeDownloads[scope.index];
            var currentLevel = quality.b.getQualityLevelByQualityType(current.quality);
            if (preferredLevel !== currentLevel) {
              var best = quality.b.chooseBestDownload(scope.scopeDownloads, preferredLevel, remembered);
              var bestExt = quality.b.getQualityExtFromDowload(best);
              scope.index = Math.max(
                0,
                scope.scopeDownloads.map(m => quality.b.getQualityExtFromDowload(m)).indexOf(bestExt)
              );
            }
          });
          self.setState();
        });

        this.EE.emit("download-list.videos-count", this.state.downloadScopes?.length);
        if ((this.state.downloadScopes?.[0]?.scopeDownloads?.length || 0) > 0) {
          this.EE.emit("download-list.first-scope", this.state.downloadScopes[0]);
        }
      }

      setState(partialState) {
        this.state = Object.assign(Object.assign({}, this.state), partialState);
        this.render();
      }

      _processQualitiesForRender(mediaInput, currentHref) {
        function findAudioUrl(videoList, audioList) {
          var audioUrl = videoList?.[0]?.url?.audioUrl;
          return audioList?.find(a => a.url === audioUrl);
        }

        var list = Array.isArray(mediaInput.media) ? mediaInput.media : mediaInput;
        list.forEach(item => {
          var mediaType = mediaInput.type || item.type;
          item.quality = item.quality || quality.b.DEFAULT_QUALITY_TYPE;
          if (!item.i18n_quality) {
            item.i18n_quality = quality.b.getI18nOfQuality(item.quality);
          }
          var allowedExtensions = mediaConstants.k[mediaType]?.extensions || [];
          var maxExtIndex = allowedExtensions.length - 1;
          var extIndex = allowedExtensions.indexOf(item.ext);
          var effectiveIndex = extIndex !== -1 ? extIndex : maxExtIndex;
          var extRank = maxExtIndex - effectiveIndex;

          item.sortValues = item.sortValues || {};
          if (!item.sortValues.qualityValue) {
            item.sortValues.qualityValue = 100 * (quality.b.getQualityIndexByVideoTitleQuality(item.quality) || 1);
          }
          item.sortValues.extensionValue = extRank;
          item.sortValues.totalValue = item.sortValues.qualityValue + item.sortValues.extensionValue;
        });

        list = list.sort((a, b) => {
          try {
            if (a.sortValues.totalValue === b.sortValues.totalValue && a.resolution && b.resolution) {
              var digitRegex = /[0-9]+/i;
              var aIsSource = ["source", "hdr"].includes(a.resolution?.toLowerCase());
              var aRes = Number(a.resolution.match(digitRegex)?.[0] || 0);
              var bRes = Number(b.resolution.match(digitRegex)?.[0] || 0);
              return (aIsSource || aRes > bRes) ? -1 : 1;
            }
            return a.sortValues.totalValue > b.sortValues.totalValue ? -1 : 1;
          } catch (err) {
            return 0;
          }
        });

        return utils.splitMediaByTitle(list).map(group => {
          var seenIds = new Set();
          var clonedGroup = Object.assign({}, group);
          var videoExts = [...mediaConstants.k.video.extensions];
          if (settings.a.get("show_3gp_ext")) {
            videoExts = videoExts.sort((x, y) => x === "3gp" ? -1 : y === "3gp" ? 1 : 0);
          }
          clonedGroup.title = group.title;
          clonedGroup.media = group.media.filter(mediaItem => {
            var mediaKey = mediaItem.resolution !== undefined
              ? `${mediaItem.type}_${mediaItem.quality}_${mediaItem.resolution}_${mediaItem.ext}`
              : `${mediaItem.type}_${mediaItem.quality}_${mediaItem.ext}`;

            var isDuplicateOrWorse = group.media.some(other => {
              if (other.quality !== mediaItem.quality) return false;
              if (other === mediaItem) return false;
              if (other.type !== mediaItem.type) return false;
              var isBetterExt = videoExts.indexOf(other.ext) < videoExts.indexOf(mediaItem.ext);
              var isBetterRes = (!mediaItem.resolution && !!other.resolution) ||
                (parseInt(other.resolution || "undefined") > parseInt(mediaItem.resolution || "undefined"));
              var isSameRes = other.resolution === mediaItem.resolution && other.resolution && mediaItem.resolution;
              return (isBetterExt && isSameRes) || isBetterRes;
            });

            if (!seenIds.has(mediaKey) && !isDuplicateOrWorse) {
              seenIds.add(mediaKey);
              mediaItem.id = mediaKey.replace(/\s/g, "_");
              return true;
            }
            return false;
          });
          return clonedGroup;
        }).map(group => {
          var groupedByType = [];
          group.media.forEach(mediaItem => {
            var type = mediaItem.type;
            var existingTypeBucket = groupedByType.find(bucket => bucket.type === type);
            if (existingTypeBucket) {
              existingTypeBucket.media.push(mediaItem);
            } else {
              groupedByType.push({
                media: [mediaItem],
                i18n_type: utils.i18n("media_fields_type_" + type),
                i18n_downloading_media: utils.i18n("widget_downloading_media"),
                type_icon: mediaConstants.k[type]?.icon || "",
                type: type,
                is_image: "image" === type
              });
            }
          });

          groupedByType = groupedByType.sort((a, b) =>
            mediaConstants.s.indexOf(a.type) < mediaConstants.s.indexOf(b.type) ? -1 : 1
          );

          var audioBucket = groupedByType.find(b => "audio" === b.type);
          var filteredAudio = audioBucket?.media.filter(m => !m.quality?.toLowerCase().includes("medium"));

          var audioChannelObj = void 0;
          if (/youtube\.com/.test(currentHref) && filteredAudio?.length && filteredAudio.length > 1) {
            var videoBucket = groupedByType.find(b => "video" === b.type);
            var videoMedia = videoBucket?.media;
            if (Array.isArray(videoMedia)) {
              for (var idx = videoMedia.length - 1; idx >= 0; idx--) {
                if ("video" === videoMedia[idx].type && "string" == typeof videoMedia[idx].url) {
                  videoMedia.splice(idx, 1);
                }
              }
            }

            var selectedAudio = findAudioUrl(videoBucket?.media, filteredAudio) || filteredAudio[0];
            audioChannelObj = {
              media: filteredAudio,
              i18n_type: utils.i18n("media_fields_type_audio_channel"),
              i18n_downloading_media: utils.i18n("widget_downloading_media"),
              type_icon: mediaConstants.k.audio_channel?.icon || "",
              type: "audio_channel",
              selected_audio: selectedAudio
            };

            if (audioChannelObj.selected_audio && audioBucket) {
              audioBucket.media = [audioChannelObj.selected_audio];
            }
          }

          return Object.assign(Object.assign({}, group), {
            media: groupedByType,
            audio_channel: audioChannelObj
          });
        });
      }

      _download(downloadItem, scopeIndex) {
        return asyncHelper(this, void 0, void 0, getRegeneratorRuntime().m(function genFunc() {
          var defaultRes, payload, subtitleText, playlistItems, allResponses, combinedPlaylist, subtitleData, errorReason;
          return getRegeneratorRuntime().w(function(ctx) {
            for (;;) {
              switch (ctx.p = ctx.n) {
                case 0:
                  logger.a.log("Download", logger.a.DOWNLOAD_BUTTON);
                  defaultRes = 128;
                  if (downloadItem) {
                    ctx.n = 1;
                    break;
                  }
                  return ctx.a(2);
                case 1:
                  payload = {
                    id: downloadItem.id,
                    url: downloadItem.url,
                    filename: utils.getFilenameFromTitleOfDownload(downloadItem),
                    referrer: downloadItem.referrer,
                    hls: downloadItem._hls,
                    dashMPD: downloadItem._isDashMPD,
                    scopeIndex: scopeIndex,
                    extraData: downloadItem.extraData,
                    useDoubleDownloadTrick: downloadItem.useDoubleDownloadTrick,
                    type: downloadItem.type,
                    removeOrigin: downloadItem.removeOrigin,
                    secFetchModeCors: downloadItem.secFetchModeCors
                  };
                  if ("string" == typeof downloadItem.url && downloadItem.url.includes("cdnx.stream") && !downloadItem.referrer) {
                    downloadItem.referrer = "https://cdnx.stream";
                  } else if ("string" == typeof downloadItem.url && downloadItem.url.includes("anicdn.stream") && !downloadItem.referrer) {
                    downloadItem.referrer = "https://gogoplay1.com/";
                  } else if (!downloadItem.skipReferrer) {
                    payload.referrer = downloadItem.referrer || globalWindow.savior_referrer;
                  }
                  payload.skipReferrer = downloadItem.skipReferrer;
                  if (downloadItem.skipConvert) payload.skipConvert = downloadItem.skipConvert;
                  if (payload.referrer && payload.referrer.includes("bilutv.org/") && payload.url.includes("zadn.vn/")) {
                    delete payload.referrer;
                  }
                  if (downloadItem.play_list) payload.play_list = downloadItem.play_list;
                  if (downloadItem.soundOnly !== undefined) {
                    payload.soundOnly = downloadItem.soundOnly;
                    payload.resolution = downloadItem.resolution || defaultRes;
                  }
                  if (downloadItem.quality !== undefined) payload.quality = downloadItem.quality;
                  if (payload.soundOnly !== undefined && payload.soundOnly) {
                    logger.a.log("Download", logger.a.DOWNLOAD_SOUND_ONLY);
                  }
                  if (payload.filename && payload.filename.match(/\.yt_srt$/i)) {
                    logger.a.log("Download", logger.a.DOWNLOAD_SUBTITLES);
                  }
                  if ("subtitles" !== payload.type || ("m3u8" !== defaultRes.ext && !payload.hls)) {
                    ctx.n = 8;
                    break;
                  }
                  ctx.p = 2;
                  ctx.n = 3;
                  return fetch(payload.url).then(res => res.text());
                case 3:
                  subtitleText = ctx.v;
                  playlistItems = formatParser.d(subtitleText, payload.url);
                  if (1 !== playlistItems.length) {
                    ctx.n = 4;
                    break;
                  }
                  payload.url = playlistItems[0].uri;
                  downloadItem.url = playlistItems[0].uri;
                  downloadItem._hls = false;
                  var parsedUri = urlUtils.f(playlistItems[0].uri);
                  downloadItem.ext = parsedUri.ext;
                  downloadItem.exts = parsedUri.exts;
                  payload.filename = utils.getFilenameFromTitleOfDownload(downloadItem);
                  ctx.n = 6;
                  break;
                case 4:
                  ctx.n = 5;
                  return Promise.allSettled(playlistItems.map(item => fetch(item.uri).then(r => r.text())));
                case 5:
                  allResponses = ctx.v;
                  combinedPlaylist = allResponses.map(r => r.value).join("\n");
                  payload.play_list = combinedPlaylist;
                  subtitleData = Object.assign(Object.assign({}, downloadItem), {
                    ext: "vtt",
                    exts: ["vtt"],
                    url: "data:text/plain;charset=utf-8," + encodeURIComponent(combinedPlaylist)
                  });
                  downloadItem.ext = subtitleData.ext;
                  downloadItem.exts = subtitleData.exts;
                  downloadItem._hls = false;
                  downloadItem.url = subtitleData.url;
                  payload.filename = utils.getFilenameFromTitleOfDownload(subtitleData);
                  payload.ext = subtitleData.ext;
                  payload.url = subtitleData.url;
                case 6:
                  payload.hls = false;
                  ctx.n = 8;
                  break;
                case 7:
                  ctx.p = 7;
                  errorReason = ctx.v;
                  utils.devLog(errorReason);
                case 8:
                  if (downloadItem._isDashMPD && downloadItem._dash_video_id !== undefined) {
                    payload.dashMPD = downloadItem._isDashMPD;
                    payload.dashVideoId = downloadItem._dash_video_id;
                  }
                  if (downloadItem._hls && downloadItem.dashVideoId) {
                    payload.hls = downloadItem._hls;
                    payload.dashVideoId = "" + downloadItem.dashVideoId;
                  }
                  if (downloadItem.hlsKeyMem) {
                    payload.hlsKeyMem = downloadItem.hlsKeyMem;
                  }
                  EE.emit("download", { method: "download", params: payload });
                case 9:
                  return ctx.a(2);
              }
            }
          });
        }));
      }

      render() {
        var templateContext = this.isPopUp ? {
          is_single: false,
          i18n_download: utils.i18n("popup_download"),
          i18n_wait: utils.i18n("popup_download_starting"),
          i18n_one_click: utils.i18n("popup_one_click"),
          i18n_preferred_quality: utils.i18n("popup_preferred_quality"),
          i18n_no_media_found: utils.i18n("popup_no_media_found"),
          i18n_popup_title: utils.i18n("popup_title"),
          i18n_download_failed: utils.i18n("popup_download_failed"),
          i18n_sound_only: utils.i18n("popup_sound_only"),
          i18n_play_now: utils.i18n("play_now_play_now"),
          i18n_audio_channel_label: utils.i18n("popup_audio_channel_label"),
          has_pip: false,
          downloads: this.state.renderDownloads
        } : {
          i18n_check_label: utils.i18n("popup_check_label"),
          i18n_check_all: utils.i18n("popup_check_all"),
          i18n_check_none: utils.i18n("popup_check_none"),
          i18n_download_selected: utils.i18n("popup_download_selected"),
          i18n_download: utils.i18n("popup_download"),
          i18n_wait: utils.i18n("popup_download_starting"),
          i18n_one_click: utils.i18n("popup_one_click"),
          i18n_downloading_media: utils.i18n("widget_downloading_media"),
          i18n_preferred_quality: utils.i18n("popup_preferred_quality"),
          i18n_no_media_found: utils.i18n("popup_no_media_found"),
          i18n_no_media_found_widget: utils.i18n("widget_no_media_found"),
          i18n_download_failed: utils.i18n("popup_download_failed"),
          i18n_pip_button: utils.i18n("popup_pip_button"),
          i18n_sound_only: utils.i18n("popup_sound_only"),
          i18n_play_now: utils.i18n("play_now_play_now"),
          i18n_audio_channel_label: utils.i18n("popup_audio_channel_label"),
          downloads: this.state.renderDownloads
        };

        var listTemplate = utils.query("#list-template")?.textContent || settings.a.get("template-list") || "";
        this.$el.innerHTML = mustacheRenderer.a.render(
          listTemplate,
          templateContext,
          { media_template: settings.a.get(this.isPopUp ? "template-media-popup" : "template-media") }
        );

        utils.queryAll(".j-media-scope", this.$el).forEach((scopeEl, scopeIdx) => {
          var scopeState = this.state.downloadScopes[scopeIdx];
          var renderState = this.state.renderDownloads[scopeIdx];

          var videoSelect = utils.query(".select.video", scopeEl);
          videoSelect?.addEventListener("click", () => {
            var currentOpen = scopeState.isSelectBoxShow;
            for (var i = 0; i < (this.state.downloadScopes?.length || 0); i++) {
              this.state.downloadScopes[i].isSelectBoxShow = false;
            }
            scopeState.isSelectBoxShow = !currentOpen;
            this.setState();
          });

          var audioChannelBtn = utils.query(".select.audio-channel", scopeEl);
          var audioChannelBox = utils.query(".select.audio-channel ~ .audio-channel-selector-box", scopeEl);
          audioChannelBtn?.addEventListener("click", () => {
            if (audioChannelBox?.hasAttribute("hidden")) {
              logger.a.log(mediaConstants.v, logger.a.YOUTUBE_AUDIO_CHANNEL_POPUP_SHOW);
              audioChannelBox?.removeAttribute("hidden");
              setImmediateHelper(() => {
                clickaway.a.registerClickaway("audio-channel", [audioChannelBtn], () => {
                  audioChannelBox?.setAttribute("hidden", "");
                  clickaway.a.unregisterClickaway("audio-channel");
                });
              });
            } else {
              audioChannelBox?.setAttribute("hidden", "");
            }
          });

          var relativeBox = audioChannelBox?.querySelector(".quality-selector-box-relative");
          var channelOptions = Array.from(relativeBox?.children || []);
          channelOptions.forEach(optEl => {
            var optId = optEl.getAttribute("data-id");
            var channelMedia = renderState.audio_channel?.media.find(m => m.id === optId);
            if (this.state.renderDownloads[0]?.audio_channel?.selected_audio?.id === optId) {
              optEl.classList.add("checked");
            }

            optEl.addEventListener("click", () => {
              logger.a.log(mediaConstants.v, logger.a.YOUTUBE_AUDIO_CHANNEL_POPUP_CHANGE);
              if (channelMedia) {
                var videoGroup = renderState.media.find(m => "video" === m.type);
                videoGroup?.media.forEach(vm => {
                  if ("object" == typeof vm.url) {
                    vm.url.audioUrl = String(channelMedia.url);
                  }
                });

                var audioGroup = renderState.media.find(m => "audio" === m.type);
                if (audioGroup) {
                  var firstAudio = audioGroup.media[0];
                  var foundIndex = scopeState.scopeDownloads.findIndex(m => m.id === firstAudio.id);
                  if (foundIndex >= 0) {
                    scopeState.scopeDownloads[foundIndex] = channelMedia;
                  }
                  audioGroup.media = [channelMedia];
                }

                if (renderState.audio_channel) {
                  renderState.audio_channel.selected_audio = channelMedia;
                }
                this.setState();
              }
              audioChannelBox?.setAttribute("hidden", "");
            });
          });

          var qualityLabels = utils.queryAll(".quality-label", scopeEl);
          qualityLabels?.forEach((labelEl, labelIdx) => {
            if (labelIdx === scopeState.index) {
              labelEl.classList.add("selected");
            }

            labelEl.addEventListener("click", () => {
              scopeState.isSelectBoxShow = false;
              scopeState.index = labelIdx;
              var selectedDownload = scopeState.scopeDownloads[scopeState.index];

              if (settings.a.get("prefer_last_quality")) {
                var qualityLevel = quality.b.getQualityLevelByQualityType(selectedDownload.quality);
                var qualityVal = labelEl.getAttribute("data-quality-value");
                settings.a.set("preferred_quality_level", qualityLevel);
                var lastList = settings.a.get("last_quality_list") || {};
                lastList[renderState.title || "noname"] = qualityVal;
                settings.a.set("last_quality_list", lastList);
                EE.emit("preferred-quality-level.changed", { qualityValue: qualityVal, qualityLevel: qualityLevel });
                logger.a.log("VideoQualityChanged", quality.b.getVideoQualityIndex(selectedDownload.quality));
                return;
              }

              this.setState();
              logger.a.log("VideoQualityChanged", quality.b.getVideoQualityIndex(selectedDownload.quality));
            });
          });

          var qualityBox = utils.query(".quality-selector-box", scopeEl);
          var footerEl = utils.query("#quality-level-selection") || utils.query("#footer");
          if (scopeState.isSelectBoxShow) {
            qualityBox?.removeAttribute("hidden");
            setImmediateHelper(() => {
              clickaway.a.registerClickaway("quality", [qualityBox, footerEl], () => {
                scopeState.isSelectBoxShow = false;
                qualityBox?.setAttribute("hidden", "");
                clickaway.a.unregisterClickaway("quality");
              });
            });
          } else {
            qualityBox?.setAttribute("hidden", "");
            clickaway.a.unregisterClickaway("quality");
          }

          var qualityOptions = utils.queryAll(".j-quality-option[data-quality]", scopeEl);
          qualityOptions?.forEach(opt => opt.setAttribute("hidden", ""));
          qualityOptions?.[scopeState.index]?.removeAttribute("hidden");

          var downloadBtns = utils.queryAll(".j-quality-download", scopeEl);
          downloadBtns?.forEach(btn => btn.setAttribute("hidden", ""));
          downloadBtns?.[scopeState.index]?.removeAttribute("hidden");

          downloadBtns?.forEach((btnEl, btnIdx) => {
            var downloadObj = scopeState.scopeDownloads[btnIdx];
            if (!downloadObj.playable && (downloadObj.succeed || downloadObj.error)) {
              btnEl.classList.remove("btn-progress");
              btnEl.classList.add("j-disabled", "btn-started");
              if (downloadObj.error) {
                btnEl.innerHTML = 'Err<span class="md-hide">or</span>';
              }
            }

            if (downloadObj.state && !downloadObj.playable) {
              btnEl.classList.add("j-disabled");
              btnEl.setAttribute("disabled", "true");
              return;
            }

            btnEl.addEventListener("click", () => {
              if (downloadObj.playable) {
                var tooltip = btnEl.closest(".body")?.querySelector(".tooltip-box");
                if (tooltip) {
                  tooltip.classList.remove("tooltip-shown");
                  settings.a.set("hide_play_now_tooltip", true);
                }
                this._play(downloadObj);
                logger.a.log("PlayNow", logger.a.PLAY_NOW_SHOWN);
                return;
              }

              downloadObj.state = "downloading";
              btnEl.classList.add("j-disabled", "btn-progress");
              btnEl.setAttribute("disabled", "true");
              this._download(downloadObj, scopeIdx);
            });

            if (downloadObj.downloadClicked) {
              btnEl.setAttribute("disabled", "true");
            }
          });

          for (var scopeI = 0; scopeI < this.state.downloadScopes.length; ++scopeI) {
            this._sizeQueue.push({ scopeIndex: scopeI, index: this.state.downloadScopes[scopeI].index });
          }
        });

        if (this.isPopUp) {
          utils.query("#popup-closer", this.$el)?.addEventListener("click", () => {
            logger.a.log("OpenSettings", logger.a.OPEN_SETTING_POPUP);
            EE.emit("message.background.send", { type: mediaConstants.b.OPEN_SETTINGS });
          });
        }
      }

      _checkFileSize(task, doneCallback) {
        var scopeIndex = task.scopeIndex;
        var mediaIndex = task.index;
        var downloadObj = this.state.downloadScopes[scopeIndex].scopeDownloads[mediaIndex];
        var scopeElements = utils.queryAll(".j-media-scope", this.$el);
        var sizeEl = utils.query("#size_" + downloadObj.id, scopeElements[scopeIndex]);

        if (!downloadObj || downloadObj.size || "" === downloadObj.size) {
          sizeEl?.classList.add("done");
          if ("function" == typeof doneCallback) doneCallback();
          return;
        }

        if (downloadObj._hls || downloadObj._isDashMPD || mediaConstants.B(downloadObj.ext) || downloadObj.ignoreSize) {
          var formattedSize = utils.beautifyFileSize();
          if (sizeEl) sizeEl.textContent = "" + formattedSize;
          downloadObj.size = formattedSize;
          sizeEl?.classList.add("done");
          if ("function" == typeof doneCallback) doneCallback();
          return;
        }

        logger.a.log("Download", logger.a.DOWNLOAD_REQUEST_SIZE);
        sizeEl?.classList.add("size-loading");

        this._getUrlSize(downloadObj.url).then(resolvedSize => {
          if ("function" == typeof doneCallback) doneCallback();
          if (sizeEl) {
            sizeEl.classList.add("done");
            sizeEl.classList.remove("size-loading");
            if (null !== resolvedSize) {
              var beautified = utils.beautifyFileSize(resolvedSize);
              sizeEl.textContent = "" + beautified;
              downloadObj.size = beautified;
              this._setSizeText(sizeEl, beautified);
              if (0 === resolvedSize) {
                logger.a.log("Download", logger.a.DOWNLOAD_REQUEST_SIZE_FAILED);
              }
            }
          }
        }).catch(() => {
          if ("function" == typeof doneCallback) doneCallback();
          if (sizeEl) {
            sizeEl.classList.add("done");
            sizeEl.textContent = "(Error)";
          }
          var mediaBtn = utils.query("#media_" + downloadObj.id, this.$el);
          mediaBtn?.setAttribute("disabled", "disabled");
          this._setSizeText(sizeEl, "(Error)");
        });
      }

      _setSizeText(element, text) {
        var wrapper = utils.findParent(element, "select-wrapper");
        if (wrapper) {
          var checkedSizeEl = wrapper.querySelector(".j-quality.selected .j-checked-size");
          if (checkedSizeEl) {
            checkedSizeEl.innerText = text;
          }
        }
      }

      _getUrlSize(url) {
        return new Promise((resolve, reject) => {
          var sizePromises = [];
          function pushSize(u) {
            if (u) sizePromises.push(utils.getSize(u));
          }

          if (typeof url === "object") {
            [url.audioUrl, url.videoUrl].forEach(pushSize);
          } else {
            pushSize(url);
          }

          if (sizePromises.length === 0) {
            return reject(null);
          }

          Promise.all(sizePromises).then(results => {
            var flattened = utils.flatten(results);
            var total = flattened.reduce((sum, n) => sum + n, 0);
            resolve(total);
          }).catch(() => reject(null));
        });
      }

      _play(downloadObj) {
        logger.a.log("PlayNow", logger.a.PLAY_NOW_WIDGET_CLICKED);
        EE.emit("message.background.send", { type: "play_video", id: downloadObj.playId });
      }
    }

    exports.a = SaviorDownloadList;
  }).call(this, require(13), require(78).setImmediate);
};
