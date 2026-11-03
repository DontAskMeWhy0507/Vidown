// Module 198 - Savior Animehay Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";

  requireFn.r(exportsObj);

  var mediaSniffer = requireFn(6);
  var domUtils = requireFn(0);
  var mediaConstants = requireFn(1);

  var currentServerName = document.querySelector("#list_sv .bg-green, #list_sv .active")?.getAttribute("name");
  var updateCounter = 0;
  var resolvedUrlCache = {};
  var activeTokMedia = null;
  var activeSsplayMedia = null;

  async function resolveAnimehayUrl(url) {
    if (resolvedUrlCache[url]) {
      return resolvedUrlCache[url];
    }
    try {
      var response = await domUtils.sendMessage({
        type: mediaConstants.b.GET_URL,
        params: { url: url }
      });
      var resolved = response?.url;
      resolvedUrlCache[url] = resolved;
      return resolved;
    } catch (_) {
      return null;
    }
  }

  var animehayExtractor = {
    getDomains: () => ["animehay."],
    forceUpdate() {
      var activeServer = document.querySelector("#list_sv .bg-green, #list_sv .active")?.getAttribute("name");
      if (activeServer !== currentServerName) {
        currentServerName = activeServer;
        EE.emit("widget.forceUpdate");
        updateCounter++;
      }
    },
    parse: {
      sources: [
        {
          checkSource: (ctx) => ctx.url.includes("ssplay."),
          parse: async (ctx) => {
            var media = ctx.media;
            var response = ctx.response;
            if (activeSsplayMedia) {
              media.url = activeSsplayMedia.url;
            }
            return mediaSniffer.e(response, media);
          }
        },
        {
          checkSource: (ctx) => /(playlist|master)\.(m3u8|txt)/i.test(ctx.url),
          parse: async (ctx) => {
            var media = ctx.media;
            var response = ctx.response;
            var parsedList = await mediaSniffer.e(response, media);
            var resolvedPlaylists = await Promise.all(
              parsedList.map(async (item) => {
                if (typeof item.url === "object" && item.url) {
                  var [videoUrl, audioUrl] = await Promise.all([
                    resolveAnimehayUrl(item.url.videoUrl),
                    resolveAnimehayUrl(item.url.audioUrl)
                  ]);
                  return { videoUrl, audioUrl };
                }
                if ([media.url, "https://google.com"].includes(item.url)) {
                  return response;
                }
                return resolveAnimehayUrl(item.url);
              })
            );
            return parsedList.map((item, idx) => {
              if (typeof item.url === "string") {
                item.ext = "m3u8";
                item.play_list = resolvedPlaylists[idx] || resolvedUrlCache[item.url] || item.play_list;
              }
              if (item.type === "audio") {
                item.ext = "mp3";
                item.exts = ["m3u8"];
                item.soundOnly = true;
                item.resolution = "128kbps";
                item.quality = mediaConstants.r["480p"].label;
                item._hls = true;
              }
              return item;
            });
          }
        }
      ]
    },
    urls: [
      {
        checkUrl: (ctx) => ctx.url.includes("ssplay."),
        getUrl: (ctx) => activeSsplayMedia ? ctx.url : [],
        mediaObjectChange: (ctx) => {
          var mediaObject = ctx.mediaObject;
          mediaObject.ext = "m3u8";
          mediaObject.exts = ["m3u8"];
          mediaObject.cacheUrl = ctx.node.src;
          return "video";
        }
      }
    ],
    default: {
      getUrl: (ctx) => {
        var ids = ctx.ids;
        if (activeTokMedia) return activeTokMedia.url;
        if (updateCounter > -1 && ids && ids[updateCounter]) {
          try {
            return ids[updateCounter].url;
          } catch (_) {
            return [];
          }
        }
        return ids && ids.length ? ids[ids.length - 1].url : ctx.url;
      },
      mediaObjectChange(ctx) {
        var mediaObject = ctx.mediaObject;
        var isPlaylist = (mediaObject.filename && /(playlist|master)\.(txt|m3u8)/.test(mediaObject.filename)) ||
          (mediaObject.url && /(playlist|master)\.(txt|m3u8)/.test(mediaObject.url));
        if (isPlaylist) {
          mediaObject.ext = "m3u8";
          mediaObject.exts = ["m3u8"];
          return "video";
        }
        return mediaObject.type;
      }
    },
    processRequestIds: (req) => {
      if (currentServerName === "TOK" && req.url.includes(".m3u8")) {
        activeTokMedia = req;
        return true;
      }
      if (req.url.includes("ssplay.")) {
        activeSsplayMedia = req;
        return true;
      }
      return undefined;
    }
  };

  exportsObj.default = animehayExtractor;
};
