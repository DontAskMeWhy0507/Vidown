// Module 176 [detector] - Savior DOM Scanner and Mutation Observer
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "b", () => getVideoTimeInFrame);
  require.d(exports, "a", () => initDomScanner);

  var utils = require(0);
  var providerRegistry = require(92);
  var domHelper = require(12);
  var metricsLogger = require(5);
  var mediaConstants = require(1);
  var layoutConstants = require(21);
  var settingsManager = require(7);

  async function logFastForwardStatus(eventType, offMessage, onMessage) {
    const isFastForward = await utils.sendMessage({ type: mediaConstants.b.GET_FASTFORWARD_ENABLED });
    metricsLogger.a.log(eventType, isFastForward ? onMessage : offMessage);
  }

  async function getAdblockStatus() {
    const adblockStatus = await utils.sendMessage({ type: mediaConstants.b.GET_ADBLOCK_STATUS });
    if (adblockStatus?.isAdblockTurnedOff) {
      return "none";
    }
    const storageData = await chrome.storage.local.get("adguardInfo");
    const adguardInfo = storageData.adguardInfo || {};
    const isAutoOff = adblockStatus?.isAdblockAutoOff || adblockStatus;
    if (!isAutoOff) {
      return "adblock";
    }
    if (isAutoOff && !adguardInfo.isAdguardEnabled) {
      return "adguard";
    }
    return "none";
  }

  async function logAdblockStatus(eventType, normalMessage, adguardMessage, disableAdguard, isWall) {
    const adblockStatus = await utils.sendMessage({ type: mediaConstants.b.GET_ADBLOCK_STATUS });
    if (adblockStatus?.isAdblockTurnedOff) {
      metricsLogger.a.log(
        eventType,
        isWall ? metricsLogger.a.YOUTUBE_ERROR_WALL_BY_SAVIOR : metricsLogger.a.YOUTUBE_ERROR_POPUP_BY_SAVIOR
      );
      return;
    }
    const storageData = await chrome.storage.local.get("adguardInfo");
    const adguardInfo = storageData.adguardInfo || {};
    const isAutoOff = adblockStatus?.isAdblockAutoOff || adblockStatus;
    if (!isAutoOff || adguardInfo.isAdguardEnabled) {
      metricsLogger.a.log(
        eventType,
        isWall ? metricsLogger.a.YOUTUBE_ERROR_WALL_BY_SAVIOR : metricsLogger.a.YOUTUBE_ERROR_POPUP_BY_SAVIOR
      );
      return;
    }
    metricsLogger.a.log(eventType, isAutoOff && adguardInfo.isAdguardEnabled ? adguardMessage : normalMessage);
    if (disableAdguard) {
      chrome.storage.local.set({
        adguardInfo: Object.assign(Object.assign({}, adguardInfo), { isAdguardEnabled: false })
      }).then(() => {
        metricsLogger.a.log(mediaConstants.t, metricsLogger.a.YOUTUBE_ADGUARD_OFF);
        location.reload();
      });
    }
  }

  function getVideoTimeInFrame(rootElement, targetElement) {
    var container = rootElement || document;
    try {
      var videoElement = container.querySelector("video");
      if (targetElement) {
        videoElement = targetElement instanceof HTMLVideoElement ? targetElement : null;
      }
      if (!videoElement) throw new Error();
      if (videoElement.paused) {
        videoElement.addEventListener("playing", () => {
          setTimeout(() => {
            utils.sendMessage({ type: mediaConstants.b.EVENTENOUGHTIME });
          }, 10000);
        }, { once: true });
      } else {
        setTimeout(() => {
          utils.sendMessage({ type: mediaConstants.b.EVENTENOUGHTIME });
        }, 10000);
      }
    } catch (ignoreError) {
      var iframeElement = container.querySelector("iframe");
      if (targetElement) {
        iframeElement = targetElement instanceof HTMLIFrameElement ? targetElement : null;
      }
      if (!iframeElement) return;
      utils.sendMessage({
        type: mediaConstants.b.GETVIDTIME,
        params: { url: iframeElement?.src }
      });
    }
  }

  function initDomScanner() {
    var MutationObserverClass = window.MutationObserver || window.WebKitMutationObserver;
    var defaultMediaTags = ["video", "iframe", "audio", "embed", "object"];
    var dynamicMediaTags = [];

    var scannerInstance = {
      siteData: null,
      _observer: null,
      _imageObserver: null,
      mediaTags: [...defaultMediaTags],
      currentHref: "",
      timeoutAdsBlock: null,
      youtubeAdsContainerClasses:
        (settingsManager.a.get("ADLIST_CUSTOM_RULE").youtube_logic || {})[mediaConstants.u] ||
        layoutConstants.i.join(","),
      youtubeSkipBtnClasses:
        (settingsManager.a.get("ADLIST_CUSTOM_RULE").youtube_logic || {})[mediaConstants.y] ||
        layoutConstants.j.join(","),
      downloadImageAbTest: null,

      load() {
        this.siteData = providerRegistry.getSiteData(location.host);
        var additionalNodes = (this.siteData?.addNode?.call(this.siteData)) || [];
        this.mediaTags.push(...additionalNodes);
        dynamicMediaTags.push(...additionalNodes);
        var initialMediaNodes = utils.queryAll(this.mediaTags.join(", "));
        this._observer = new MutationObserverClass(this.handleDomChanged.bind(this));
        this._observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributeFilter: ["src", "data-src", "hidden", "opened"]
        });
        var customElements = this.siteData?.getCustomElement?.call(this.siteData) ?? [];
        initialMediaNodes.push(...customElements);
        if (initialMediaNodes.length) {
          this.nodeChangedNotifier(initialMediaNodes);
        }
        this.runImageDetection();
        if (this.siteData?.onDomScannerInit) {
          this.siteData.onDomScannerInit(this);
        }
      },

      async runImageDetection() {
        if (settingsManager.a.get("image_download_enabled") === false || settingsManager.a.get("imageDownloadEnabled") === false) {
          return;
        }
        if (!this.downloadImageAbTest) {
          this.downloadImageAbTest = utils.sendMessage({
            type: mediaConstants.b.GET_ABTEST,
            testName: "downloadImageAllSites"
          });
        }
        var testResult = await this.downloadImageAbTest;
        if (!testResult.groupName && !this.siteData?.getImageNode) {
          return;
        }
        await utils.sleep(500);
        var imageElements = Array.from(document.querySelectorAll("img"));
        var processedImages = await Promise.all(
          imageElements.map(async (imageElement) => {
            var candidateNode =
              (this.siteData?.getImageNode?.call(this.siteData, imageElement)) ||
              (domHelper.l(imageElement) ? imageElement : null);
            var validImageNode = candidateNode;
            if (!validImageNode) return null;
            var isCachedOrReady = domHelper.g(candidateNode);
            if (!isCachedOrReady) {
              isCachedOrReady = await domHelper.k(candidateNode);
            }
            validImageNode = isCachedOrReady;
            if (!validImageNode) return null;
            if (candidateNode) {
              candidateNode.setAttribute("savior-scanned-img", location.href);
            }
            return candidateNode;
          })
        );
        var validImages = processedImages.filter(Boolean);
        if (validImages.length) {
          EE.emit("dom-scanner.node-changed", validImages, []);
        }
      },

      _hasPossibleImageMutations(mutationRecords) {
        for (var i = 0; i < mutationRecords.length; i++) {
          var rec = mutationRecords[i];
          if (rec.type === "attributes") {
            var attr = rec.attributeName;
            if (attr === "src" || attr === "data-src" || attr === "srcset") return true;
          } else {
            var target = rec.target;
            if (target && target.tagName === "IMG") return true;
            for (var a = 0; a < rec.addedNodes.length; a++) {
              var an = rec.addedNodes[a];
              if (an.nodeType === 1 && (an.tagName === "IMG" || an.firstElementChild)) return true;
            }
            for (var r = 0; r < rec.removedNodes.length; r++) {
              var rn = rec.removedNodes[r];
              if (rn.nodeType === 1 && (rn.tagName === "IMG" || rn.firstElementChild)) return true;
            }
          }
        }
        return false;
      },

      async imageHandler(mutationRecords) {
        if (settingsManager.a.get("image_download_enabled") === false || settingsManager.a.get("imageDownloadEnabled") === false) {
          return;
        }
        if (!this._hasPossibleImageMutations(mutationRecords)) {
          return;
        }
        if (!this.downloadImageAbTest) {
          this.downloadImageAbTest = utils.sendMessage({
            type: mediaConstants.b.GET_ABTEST,
            testName: "downloadImageAllSites"
          });
        }
        var testResult = await this.downloadImageAbTest;
        if (!testResult.groupName && !this.siteData?.getImageNode) {
          return;
        }
        var addedImages = [];
        var removedImages = [];
        var inspectImageNode = async (domNode) => {
          var candidate =
            (this.siteData?.getImageNode?.call(this.siteData, domNode)) ||
            (domHelper.l(domNode) ? domNode : null);
          var valid = candidate;
          if (!valid) return null;
          var isCached = domHelper.g(candidate);
          if (!isCached) {
            isCached = await domHelper.k(candidate);
          }
          valid = isCached;
          if (!valid) return null;
          return candidate;
        };

        for (var recordIndex = 0; recordIndex < mutationRecords.length; recordIndex++) {
          var record = mutationRecords[recordIndex];
          var inspectedTarget = await inspectImageNode(record.target);
          if (inspectedTarget) {
            if (inspectedTarget.hasAttribute("savior-scanned-img")) {
              removedImages.push(inspectedTarget);
              addedImages.push(inspectedTarget);
            } else {
              inspectedTarget.setAttribute("savior-scanned-img", location.href);
              addedImages.push(inspectedTarget);
            }
          } else {
            record.removedNodes.forEach((removedNode) => {
              if (removedNode instanceof HTMLElement) {
                var matchedImages = removedNode.matches("[savior-scanned-img]")
                  ? [removedNode]
                  : [...removedNode.querySelectorAll("[savior-scanned-img]")];
                removedImages.push(...matchedImages);
              }
            });
            for (var addedIndex = 0; addedIndex < record.addedNodes.length; addedIndex++) {
              var addedNode = record.addedNodes[addedIndex];
              var inspectedAdded = await inspectImageNode(addedNode);
              if (inspectedAdded) {
                inspectedAdded.setAttribute("savior-scanned-img", location.href);
                addedImages.push(inspectedAdded);
              }
            }
          }
        }

        if (addedImages.length || removedImages.length) {
          EE.emit("dom-scanner.node-changed", addedImages, removedImages);
        }
      },

      _hasPossibleMediaMutations(records) {
        if (!records || !records.length) return false;
        var mediaTags = this.mediaTags;
        for (var i = 0; i < records.length; i++) {
          var rec = records[i];
          if (rec.type === "attributes") {
            var tag = rec.target?.tagName ? rec.target.tagName.toLowerCase() : "";
            if (mediaTags.includes(tag) || tag === "video" || tag === "audio" || tag === "source") {
              return true;
            }
          } else if (rec.type === "childList") {
            for (var a = 0; a < rec.addedNodes.length; a++) {
              var an = rec.addedNodes[a];
              if (an.nodeType === 1) {
                var atag = an.tagName.toLowerCase();
                if (mediaTags.includes(atag) || atag === "video" || atag === "audio" || atag === "source") {
                  return true;
                }
                if (an.firstElementChild && (an.querySelector("video, audio, embed, object") || (this.siteData?.isValidVideoNode && this.siteData.isValidVideoNode(an)))) {
                  return true;
                }
              }
            }
            for (var r = 0; r < rec.removedNodes.length; r++) {
              var rn = rec.removedNodes[r];
              if (rn.nodeType === 1) {
                var rtag = rn.tagName.toLowerCase();
                if (mediaTags.includes(rtag) || rtag === "video" || rtag === "audio" || rtag === "source") {
                  return true;
                }
                if (rn.firstElementChild && rn.querySelector("video, audio, embed, object")) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      },

      videoHandler(mutationRecords) {
        var hasMutations = this._hasPossibleMediaMutations(mutationRecords);
        var addedMedia = [];
        var removedMedia = [];

        var now = Date.now();
        if (!this._lastForceUpdate || now - this._lastForceUpdate > 300) {
          this._lastForceUpdate = now;
          this.siteData?.forceUpdate?.call(this.siteData);
        }

        if (this.siteData?.getCustomElement) {
          var customElements = this.siteData.getCustomElement();
          if (customElements && customElements.length) {
            addedMedia.push(...customElements);
          }
        }

        if (!hasMutations && !addedMedia.length) {
          return;
        }

        var mediaSelector = this._mediaSelector || (this._mediaSelector = this.mediaTags.join(", "));

        mutationRecords.forEach((record) => {
          var targetElement = record.target;
          var targetTag = targetElement.tagName ? targetElement.tagName.toLowerCase() : "";
          if (
            record.type === "attributes" &&
            record.attributeName === "src" &&
            this.mediaTags.includes(targetTag)
          ) {
            removedMedia.push(targetElement);
            addedMedia.push(targetElement);
          } else {
            record.removedNodes.forEach((nodeItem) => {
              if (nodeItem.nodeType !== 1) return;
              var nodeTag = nodeItem.tagName ? nodeItem.tagName.toLowerCase() : "";
              if (nodeTag && this.mediaTags.indexOf(nodeTag) !== -1) {
                removedMedia.push(nodeItem);
              } else {
                if (
                  targetTag === "video" &&
                  !removedMedia.includes(targetElement) &&
                  nodeTag === "source"
                ) {
                  removedMedia.push(targetElement);
                }
                if (nodeItem.firstElementChild) {
                  var nestedMedia = utils.queryAll(mediaSelector, nodeItem);
                  removedMedia.push(...nestedMedia);
                }
              }
            });
            record.addedNodes.forEach((nodeItem) => {
              if (nodeItem.nodeType !== 1) return;
              var nodeTag = nodeItem.tagName ? nodeItem.tagName.toLowerCase() : "";
              if (nodeTag && this.mediaTags.indexOf(nodeTag) !== -1) {
                addedMedia.push(nodeItem);
              } else {
                if (
                  targetTag === "video" &&
                  !addedMedia.includes(targetElement) &&
                  nodeTag === "source"
                ) {
                  addedMedia.push(targetElement);
                }
                if (nodeItem.firstElementChild) {
                  var nestedMedia = utils.queryAll(mediaSelector, nodeItem);
                  addedMedia.push(...nestedMedia);
                }
              }
            });
          }
        });

        if (addedMedia.length || removedMedia.length) {
          this.nodeChangedNotifier(addedMedia, removedMedia);
        }
      },

      logYoutubeAds() {},
      checkAdBlockError() {
        return Promise.resolve();
      },

      handleDomChanged(mutationRecords) {
        if (!mutationRecords || !mutationRecords.length) return;
        var relevantRecords = [];
        for (var i = 0; i < mutationRecords.length; i++) {
          var rec = mutationRecords[i];
          if (rec.type === "characterData") continue;
          if (rec.type === "attributes") {
            if (!rec.target || rec.target.nodeType !== 1) continue;
            relevantRecords.push(rec);
          } else if (rec.type === "childList") {
            var hasElementNode = false;
            for (var a = 0; a < rec.addedNodes.length; a++) {
              if (rec.addedNodes[a].nodeType === 1) { hasElementNode = true; break; }
            }
            if (!hasElementNode) {
              for (var r = 0; r < rec.removedNodes.length; r++) {
                if (rec.removedNodes[r].nodeType === 1) { hasElementNode = true; break; }
              }
            }
            if (hasElementNode) {
              relevantRecords.push(rec);
            }
          }
        }
        if (!relevantRecords.length) return;

        if (!this._pendingMutations) {
          this._pendingMutations = [];
        }
        if (this._pendingMutations.length < 500) {
          this._pendingMutations.push(...relevantRecords);
        }
        if (this._domThrottleTimer) return;

        var scheduleFrame = (typeof requestAnimationFrame === "function")
          ? requestAnimationFrame
          : (fn) => setTimeout(fn, 16);

        this._domThrottleTimer = scheduleFrame(() => {
          this._domThrottleTimer = null;
          var records = this._pendingMutations;
          this._pendingMutations = null;
          if (records && records.length) {
            this.videoHandler(records);
            this.imageHandler(records);
          }
        });
      },

      nodeChangedNotifier(addedNodes = [], removedNodes = []) {
        var filteredAdded = addedNodes.filter((elementNode) => {
          if (dynamicMediaTags.some((tagSelector) => elementNode.matches(tagSelector))) {
            return true;
          }
          if (domHelper.f(elementNode)) {
            return false;
          }
          return this.siteData?.isValidVideoNode
            ? this.siteData.isValidVideoNode(elementNode)
            : domHelper.m(elementNode);
        });
        EE.emit("dom-scanner.node-changed", filteredAdded, removedNodes);
      },

      destroy() {
        clearTimeout(this.timeoutAdsBlock);
        if (this._observer) {
          this._observer.disconnect();
          this._observer = null;
        }
        if (this._imageObserver) {
          this._imageObserver.disconnect();
          this._imageObserver = null;
        }
        this.mediaTags = [...defaultMediaTags];
        dynamicMediaTags.length = 0;
      }
    };

    EE.on("dom-scanner.load", () => scannerInstance.load());
    EE.on("dom-scanner.refresh", () => {
      scannerInstance.destroy();
      scannerInstance.load();
    });
    EE.on("dom-scanner.destroy", () => scannerInstance.destroy());
  }

  EE.on("get_vid_time_in_frame", () => {
    getVideoTimeInFrame();
  });
};
