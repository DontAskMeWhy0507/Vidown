// Module 543 [detector] - Savior Content Script Entry Point Bootstrap
export default function(module, exports, require) {
  "use strict";

  require.r(exports);

  (function(globalContext) {
    require(97);
    var urlMatcher = require(33);
    var settingsManager = require(7);
    var platformInit = require(541);
    var domScanner = require(176);
    var iframeDataFetcher = require(527);

    urlMatcher.a.shouldDisableSavior(location.href).then((isDisabled) => {
      if (!isDisabled) {
        try {
          platformInit.b();
          domScanner.a();

          var batchTimer;
          var bufferedMatches = [];
          var isMainFrameInitialized = false;

          var queueMatchedRequests = (matchPayload) => {
            if (matchPayload.result) {
              if (Array.isArray(matchPayload.result)) {
                bufferedMatches.push(...matchPayload.result);
              } else {
                bufferedMatches.push(matchPayload.result);
              }
              if (!batchTimer) {
                batchTimer = setTimeout(() => {
                  EE.emit("widget.request_matched", bufferedMatches);
                  bufferedMatches = [];
                  batchTimer = undefined;
                }, 200);
              }
            }
          };

          async function sendRuntimeMessage(messagePayload) {
            try {
              await chrome.runtime.sendMessage(messagePayload);
            } catch (runtimeError) {
              console.log("Caught", runtimeError);
            }
          }

          chrome.runtime.onMessage.addListener((incomingMessage, senderInfo, sendResponseCallback) => {
            var messageWithCallback = Object.assign({}, incomingMessage);
            messageWithCallback.cb = sendResponseCallback;
            EE.emit("message.received", messageWithCallback);
            if (incomingMessage && incomingMessage.type === "get_inner_data") {
              setTimeout(() => {
                try {
                  sendResponseCallback({ data: null, error: "timeout" });
                } catch (timeoutError) {}
              }, 5000);
              return true;
            }
            return false;
          });

          EE.on("message.background.send", sendRuntimeMessage);
          EE.on("message.popup.send", sendRuntimeMessage);

          EE.on("message.received", async (receivedEvent) => {
            var eventType = receivedEvent.type;
            switch (eventType) {
              case "get_transcript":
                EE.emit("get_transcript", receivedEvent);
                break;
              case "promote_serp_result":
                EE.emit("promote_serp_result", receivedEvent);
                break;
              case "get_promote_serp_result":
                EE.emit("get_promote_serp_result", receivedEvent);
                break;
              case "init_main_frame":
                initMainFrame();
                break;
              case "request.matched":
                queueMatchedRequests(receivedEvent);
                break;
              case "request.fb":
                EE.emit("widget.fbUpdate");
                break;
              case "yserp_metrics":
                EE.emit("SERP.yserp_log", receivedEvent);
                break;
              case "onboard_track_result":
                EE.emit("onboarding-popup.onboard_track_result", receivedEvent.data);
                break;
              case "open_onboarding":
                EE.emit("onboarding-popup.show_popup", receivedEvent);
                break;
              case "youtube_get_info":
                EE.emit("youtube_get_info_result", receivedEvent);
                break;
              case "youtube_set_mpd_info":
                EE.emit("youtube_set_mpd_info", receivedEvent);
                break;
              case "background_request_result":
                EE.emit("background_request_result", receivedEvent);
                break;
              case "get_inner_data": {
                var innerResponse = { type: "return_inner_data", id: receivedEvent.id };
                innerResponse.data = await iframeDataFetcher.a.getUrl(
                  receivedEvent.url,
                  receivedEvent.config,
                  receivedEvent.frameUrl
                );
                receivedEvent.cb(innerResponse);
                break;
              }
              case "return_inner_data":
                EE.emit("utils.send_message_result", receivedEvent.data);
                break;
              case "popup.downloads.get":
                EE.emit("widget.downloads.get", receivedEvent);
                break;
              case "popup.downloads.resolveQuality":
                EE.emit("widget.downloads.resolveQuality", receivedEvent);
                break;
              case "widget_playnow":
                EE.emit("widget.show_playnow", receivedEvent);
                break;
              case "download_canceled":
                EE.emit("widget.download_canceled", receivedEvent);
                break;
              case "download.result":
                EE.emit("download_list.download_result", receivedEvent.data);
                break;
              case "download_error":
                EE.emit("download_list.download_result", receivedEvent.params);
                break;
              case "cache.background.hit":
                EE.emit(
                  "media-provider.cache.hit",
                  receivedEvent.data.id,
                  receivedEvent.data.result
                );
                break;
              case "cache.background.miss":
                EE.emit("media-provider.cache.miss", receivedEvent.data.id);
                break;
              case "inner_pip":
                EE.emit("inner_pip", receivedEvent);
                break;
              case "get_vid_time_in_frame":
                EE.emit("get_vid_time_in_frame", receivedEvent);
                break;
              case "media_enough_time":
                EE.emit("mediaEnoughTime");
                break;
              case "inner_pip_event_fired":
                EE.emit("pip.on_state_change", receivedEvent.data);
                break;
              case "preferred-quality-level.changed":
                EE.emit("preferred-quality-level.changed");
                break;
              case "save_adguard_into_localstorage": {
                var currentAdguard = JSON.parse(localStorage.getItem("adguardInfo") || "{}");
                localStorage.setItem(
                  "adguardInfo",
                  JSON.stringify(Object.assign(Object.assign({}, currentAdguard), receivedEvent.data))
                );
                break;
              }
              case "ping":
                EE.emit("message.background.send", { type: "pong" });
                break;
            }
          });

          var initMainFrame = () => {
            if (!isMainFrameInitialized) {
              isMainFrameInitialized = true;
              if (
                typeof window !== "undefined" &&
                window.__saviorSniffedMedia &&
                window.__saviorSniffedMedia.length
              ) {
                EE.emit("widget.request_matched", window.__saviorSniffedMedia);
              }
              EE.emit("message.background.send", { type: "get_matched_requests" });
              EE.on("dom-scanner.node-changed", (addedElements, removedElements) => {
                EE.emit("widget.node-changed", addedElements, removedElements);
              });
              EE.on("media-provider.cache.get", (cacheId, cacheKey) => {
                var cacheQuery = {
                  type: "cache.background",
                  data: {
                    id: cacheId,
                    method: "get",
                    params: { key: cacheKey }
                  }
                };
                EE.emit("message.background.send", cacheQuery);
              });
              EE.on("media-provider.cache.put", (cacheId, cacheKey, cacheValue) => {
                var cacheSave = {
                  type: "cache.background",
                  data: {
                    id: cacheId,
                    method: "put",
                    params: { key: cacheKey, value: cacheValue }
                  }
                };
                EE.emit("message.background.send", cacheSave);
              });
              EE.on("download", (downloadPayload) => {
                EE.emit("message.background.send", {
                  type: "download",
                  data: downloadPayload
                });
              });
              EE.on("widget.downloads.get.success", (downloadResult) => {
                var downloadsList = downloadResult.downloads;
                var currentUrl = downloadResult.href;
                EE.emit("message.popup.send", {
                  type: "contentscript.downloads.get.success",
                  data: { downloads: downloadsList, href: currentUrl }
                });
              });
              EE.on("widget.downloads.resolveQuality.success", (resolvedResult) => {
                EE.emit("message.popup.send", {
                  type: "contentscript.downloads.resolveQuality.success",
                  data: resolvedResult
                });
              });
              settingsManager.a.addOptionChangedListener("preferred_quality_level", () => {
                EE.emit("preferred-quality-level.changed");
              });
              EE.emit("widget.load");
              EE.emit("dom-scanner.load");
              EE.on("onboarding-popup.get_shadow_dom", () => {
                EE.emit("widget.get_shadow_dom");
              });
              EE.on("widget.shadow_dom_result", (shadowResult) => {
                EE.emit("onboarding-popup.shadow_dom_result", shadowResult);
              });
              EE.emit("onboarding-popup.init");
              EE.emit("should_promote_serp");
            }
          };

          settingsManager.a.load().then(() => {
            try {
              if (window === window.top) {
                initMainFrame();
              }
            } catch (topFrameCheckError) {}
            EE.emit("message.background.send", { type: "frame_type" });
          });

          var previousLocationHref = document.location.href;
          (window || globalContext).onload = function() {
            var bodyElement = document.querySelector("body");
            new MutationObserver(() => {
              if (previousLocationHref !== document.location.href) {
                EE.emit("location.href.changed", {
                  old: previousLocationHref,
                  new: location.href
                });
                previousLocationHref = document.location.href;
              }
            }).observe(bodyElement, { childList: true, subtree: true });
          };
        } catch (bootstrapError) {
          console.log("Caught", bootstrapError);
        }
      }
    });
  }).call(this, require(13));
};
