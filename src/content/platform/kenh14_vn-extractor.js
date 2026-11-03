// Module 263 - Savior Kenh14.vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";

  function extractVideoTitle(videoElement) {
    var container = videoElement.closest('[type="VideoStream"][data-vid]');
    var captionParagraph = container?.querySelector(".VideoCMS_Caption p");
    var title = captionParagraph?.innerText;

    if (!container) {
      container = videoElement;
    }

    var titleExtractors = [
      () => container?.closest(".k14-videoUpdate-wrapper")?.querySelector(".videoUpdate-right .info-content a")?.innerText?.trim(),
      () => container?.closest(".featured-video-wrapper")?.querySelector(".video-info_title")?.innerText?.trim(),
      () => container?.closest(".video-item, [data-newsid]")?.querySelector(".video-title, .video-info h3>a")?.innerText?.trim(),
      () => videoElement.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box')?.querySelector(".mutex-video-item.nowPlaying a")?.innerText?.trim(),
      () => videoElement.closest('[data-marked-zoneid="k14_video_detail_topvideo"], .vdbw-left')?.querySelector("h1, .vdbw-title")?.innerText?.trim(),
      () => videoElement.getAttribute("alt") || undefined,
      () => container?.previousElementSibling?.innerText?.trim()
    ];

    for (var i = 0; !title && i < titleExtractors.length; i++) {
      title = titleExtractors[i]();
    }
    return title;
  }

  function toMasterHlsUrl(url) {
    try {
      var urlObj = new URL(url);
      if (urlObj.pathname.startsWith("/.hls/")) {
        return url;
      }
      urlObj.pathname = "/.hls" + urlObj.pathname;
      return urlObj.href;
    } catch (_) {
      return url;
    }
  }

  requireFn.r(exportsObj);

  var kenh14Extractor = {
    getDomains: () => ["kenh14.vn"],
    isMiniPlayerNode: (node) => node.matches(".video-slide-thumb a video"),
    urls: [
      {
        checkUrl: (ctx) => ctx.url.includes("streamfile.aspx"),
        mediaObjectChange: (ctx) => {
          var mediaObject = ctx.mediaObject;
          mediaObject.ext = "mp4";
          var titleEl = document.getElementById("titlePlaying");
          mediaObject.filename = titleEl ? titleEl.innerText : undefined;
          return "video";
        }
      },
      {
        checkUrl: (ctx) => {
          var node = ctx.node;
          return Boolean(node.closest('[type="VideoStream"][data-vid]'));
        },
        getUrl: (ctx) => {
          var container = ctx.node.closest('[type="VideoStream"][data-vid]');
          var vid = container ? container.getAttribute("data-vid") : undefined;
          if (vid) {
            if (vid.startsWith("kenh14/")) {
              vid = vid.replace("kenh14/", "kenh14cdn.com/");
            }
            return toMasterHlsUrl(`https://${vid}.master.m3u8`);
          }
        },
        mediaObjectChange: (ctx) => {
          var mediaObject = ctx.mediaObject;
          var title = extractVideoTitle(ctx.node);
          mediaObject.fixName = title || mediaObject.filename;
          return "video";
        }
      },
      {
        checkUrl: (ctx) => {
          return ctx.node.nodeName === "VIDEO" && /(kenh14cdn\.com\/.+\.mp4)/i.test(ctx.url);
        },
        getUrl: (ctx) => {
          var match = ctx.url.match(/(kenh14cdn\.com\/.+\.mp4)/i);
          return match ? toMasterHlsUrl(`https://${match[1]}.master.m3u8`) : ctx.url;
        },
        mediaObjectChange: (ctx) => {
          var mediaObject = ctx.mediaObject;
          var title = extractVideoTitle(ctx.node);
          if (mediaObject.url.includes(".gif.mp4")) {
            mediaObject.noAudio = true;
          }
          mediaObject.fixName = title || mediaObject.filename;
          return "video";
        }
      },
      {
        checkUrl: (ctx) => {
          return /^blob:/i.test(ctx.url) && ctx.node.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box') != null;
        },
        getUrl: (ctx) => {
          var nowPlayingLink = ctx.node.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box')?.querySelector(".mutex-video-item.nowPlaying a")?.href;
          if (nowPlayingLink) {
            var vidParam = new URL(nowPlayingLink).searchParams.get("vid");
            return vidParam ? toMasterHlsUrl(`https://kenh14cdn.com/${vidParam}.master.m3u8`) : nowPlayingLink;
          }
        },
        mediaObjectChange: (ctx) => {
          var mediaObject = ctx.mediaObject;
          var title = extractVideoTitle(ctx.node);
          if (title) {
            mediaObject.filename = title;
            mediaObject.fixName = title;
          }
          return "video";
        }
      }
    ],
    default: {
      mediaObjectChange(ctx) {
        var mediaObject = ctx.mediaObject;
        var title = extractVideoTitle(ctx.node);
        if (title) {
          mediaObject.filename = title;
          mediaObject.fixName = title;
        }
      }
    },
    toggleLight: {
      turnOff: {
        updated() {
          var videoItems = document.querySelectorAll("li.video-item");
          if (videoItems.length) {
            videoItems.forEach((item) => {
              item.setAttribute("style", "opacity: unset");
            });
          }
        }
      }
    }
  };

  exportsObj.default = kenh14Extractor;
};
