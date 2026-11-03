// Module 182 - Savior 24h.com.vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";

  requireFn.r(exportsObj);

  var urlUtils = requireFn(3);
  var storedMediaMap = {};

  function extract24hTitle(mediaObject, element) {
    if (element.closest(".viewVideoPlay")) {
      var playTitle = element.closest(".viewVideoPlay")?.parentElement?.nextElementSibling?.textContent;
      if (playTitle) {
        if (playTitle.length > 100) {
          playTitle = playTitle.slice(0, 100);
        }
        mediaObject.filename = playTitle;
        mediaObject.fixName = playTitle;
        return playTitle;
      }
    }

    var ttttContainer = element.closest(".tttt-set, [data-tttt-set]");
    var title = ttttContainer?.querySelector(".livetit_wrap, .inner>p")?.innerText?.replace(/\n/g, "")?.trim();

    if (!title) {
      title = element.closest("article")?.querySelector("header h1")?.innerText?.replace(/\n/g, "")?.trim();
    }

    if (title) {
      if (title.length > 100) {
        title = title.slice(0, 100);
      }
      mediaObject.filename = title;
      mediaObject.fixName = title;
    }
    return title;
  }

  function isIgnored24hUrl(req) {
    return Boolean(req.pathname?.startsWith("/upload/html/") || req.url.includes("googleapis.com"));
  }

  var voiceLabels = {
    nu_bac: "Nữ miền bắc",
    nu_nam: "Nữ miền nam",
    nam_bac: "Nam miền bắc",
    nam_nam: "Nam miền nam"
  };

  var extractor24h = {
    getCustomParent: (node) => node.closest(".v-24h-media-player"),
    getDomains: () => ["24h.com.vn"],
    idsProcess(ctx) {
      var defaultIds = ctx.defaultIds;
      var item = ctx.id;
      var index = ctx.index;
      if (isIgnored24hUrl(item)) {
        defaultIds.splice(index, 1);
      } else {
        storedMediaMap[item.filename] = item;
      }
    },
    urls: [
      {
        checkUrl: (ctx) => {
          var url = ctx.url;
          var node = ctx.node;
          return (url.startsWith("blob:") || url.startsWith("data:")) && node.nodeName === "VIDEO";
        },
        getUrl: (ctx) => {
          var posterAttr = document.querySelector("[poster]")?.getAttribute("poster");
          if (posterAttr) {
            return posterAttr.replace("images", "videoclip").replace(/\.(img|jpg|png)/, ".m3u8");
          }
          var fallbackItem = urlUtils.f("https://google.com");
          fallbackItem.play_list = ctx.url;
          fallbackItem.type = "video";
          fallbackItem.ext = "m3u8";
          fallbackItem.exts = ["m3u8"];
          return [fallbackItem];
        },
        mediaObjectChange: (ctx) => {
          extract24hTitle(ctx.mediaObject, ctx.node);
        }
      },
      {
        checkUrl: (ctx) => {
          var node = ctx.node;
          var url = ctx.url;
          return ["AUDIO", "SOURCE"].includes(node.nodeName) && !url.startsWith("data:");
        },
        getUrl: (ctx) => {
          var rawUrl = ctx.url;
          var playerContainer = ctx.node.closest(".auNewsPlayer, .audioNews, .auContrn");
          var activeVoiceId = playerContainer?.querySelector(".auVoiceMenu")?.querySelector("li.active, li.act")?.getAttribute("data-id") || "nu_bac";
          var articleTitle = (document.title + " - Đọc").trim();
          var voiceIds = Array.from(document.querySelectorAll(".auVoiceMenu li")).map((el) => el.getAttribute("data-id")).filter(Boolean);

          if (voiceIds.length) {
            var baseAudio = urlUtils.f(rawUrl);
            baseAudio.filename = articleTitle;
            baseAudio.fixName = articleTitle;

            return voiceIds.map((voiceId) => {
              var audioItem = Object.assign({}, baseAudio, {
                type: "audio",
                quality: voiceLabels[voiceId]
              });
              audioItem.url = audioItem.url.replace(/(---(nu|nam)_(bac|nam))?\.mp3/i, `---${voiceId}.mp3`);
              return audioItem;
            });
          }

          return /---(nu|nam)_(bac|nam)\.mp3/i.test(rawUrl)
            ? rawUrl
            : rawUrl.replace(/(---(nu|nam)_(bac|nam))?\.mp3/i, `---${activeVoiceId}.mp3`);
        },
        mediaObjectChange: (ctx) => {
          extract24hTitle(ctx.mediaObject, ctx.node);
        }
      },
      {
        checkUrl: (ctx) => Boolean(new URLSearchParams(ctx.url).get("file")),
        getUrl: (ctx) => new URLSearchParams(ctx.url).get("file")
      },
      {
        checkUrl: (ctx) => {
          var url = ctx.url;
          var node = ctx.node;
          var poster = node.getAttribute("poster");
          var parentPoster = node.parentElement?.getAttribute("poster");
          return Boolean(Object.entries(storedMediaMap).find(([key]) => {
            return url.includes(key) || (poster && poster.includes(key)) || (parentPoster && parentPoster.includes(key));
          }));
        },
        getUrl: (ctx) => {
          var url = ctx.url;
          var node = ctx.node;
          var poster = node.getAttribute("poster");
          var parentPoster = node.parentElement?.getAttribute("poster");
          var match = Object.entries(storedMediaMap).find(([key]) => {
            return url.includes(key) || (poster && poster.includes(key)) || (parentPoster && parentPoster.includes(key));
          });
          return match ? match[1].url : undefined;
        },
        mediaObjectChange: (ctx) => {
          var mediaObject = ctx.mediaObject;
          extract24hTitle(mediaObject, ctx.node);
          if (["m3u8", "mp4"].includes(mediaObject.ext)) {
            return "video";
          }
        }
      }
    ],
    default: {
      getUrl: (ctx) => ctx.url,
      mediaObjectChange: (ctx) => {
        var mediaObject = ctx.mediaObject;
        extract24hTitle(mediaObject, ctx.node);
        if (["m3u8", "mp4"].includes(mediaObject.ext) && !mediaObject.type) {
          mediaObject.type = "video";
        }
        return /---(nu|nam)_(bac|nam)\.mp3/i.test(mediaObject.url) ? mediaObject.type : (mediaObject.type = null, "live");
      }
    },
    processRequestIds: (req) => {
      if (!isIgnored24hUrl(req)) {
        storedMediaMap[req.filename] = req;
        if (["m3u8", "mp4"].includes(req.ext)) {
          EE.emit("widget.forceUpdate");
          return true;
        }
      }
      return undefined;
    }
  };

  exportsObj.default = extractor24h;
};
