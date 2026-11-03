// Module 225 - Savior Dantri_com_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);

  const videoIdToStreamUrl = {};
  const streamUrlToTitle = {};
  const detectedPlaylists = new Set();
  const posterToStreamMap = new Map();

  const dantriExtractor = {
    getDomains: () => ["dantri.com.vn"],
    processRequestIds(requestItem) {
      const url = requestItem.url;
      if (url.includes("playlist.m3u8")) {
        detectedPlaylists.add(url);
      }
      if (url.includes(".m3u8")) {
        const m3u8Match = url.match(/.+-(\d+)\/(playlist|master|index)\.m3u8/i);
        const m3u8Id = m3u8Match?.[1];
        if (m3u8Id) {
          videoIdToStreamUrl[m3u8Id] = url;
        }
        return true;
      }
      const genericMatch = url.match(/(\d+)\/[a-z_\-\d]+\./i);
      const genericId = genericMatch?.[1];
      if (genericId) {
        videoIdToStreamUrl[genericId] = url;
      }
      return true;
    },
    urls: [
      {
        checkUrl: () => location.pathname.startsWith("/short-video"),
        getUrl: param => {
          const domNode = param.node;
          const defaultIds = param.ids;
          const container = domNode.closest(".vplayer-container") || domNode.parentElement;
          const posterElem = container?.querySelector(".vjs-poster");
          if (posterElem) {
            const bgMatch = getComputedStyle(posterElem).backgroundImage.match(/\/(short-video\/.+)\/[a-z0-9\-_]+\./i);
            const shortVideoPath = bgMatch?.[1];
            if (shortVideoPath) {
              return `https://vcdn.dantri.com.vn/vod/${shortVideoPath}/playlist.m3u8`;
            }
          }
          return defaultIds;
        },
        mediaObjectChange: param => {
          const mediaObj = param.mediaObject;
          const title = param.node.closest(".vplayer-container")?.parentElement?.querySelector("img[alt]")?.alt?.trim();
          if (title) {
            mediaObj.filename = title;
            mediaObj.fixName = title;
          }
          return mediaObj.type;
        }
      },
      {
        checkUrl: param => param.node.nodeName === "VIDEO",
        getUrl: param => {
          const domNode = param.node;
          const videoWrapper = domNode.closest("div[data-video-id]");
          const dataSrc = videoWrapper?.getAttribute("data-src");
          const videoIdMatch = dataSrc?.match(/.+-(\d+)(\.mp4|\/(.+\.m3u8)|(\.mkv)|(\.mov))/i);
          const videoId = videoIdMatch?.[1];
          if (videoId && videoIdToStreamUrl[videoId]) {
            const streamUrl = videoIdToStreamUrl[videoId];
            const captionElem = videoWrapper.parentElement?.querySelector("figcaption p");
            const captionText = captionElem?.innerText;
            if (captionText) {
              streamUrlToTitle[streamUrl] = captionText;
            }
            return streamUrl;
          }
          const posterMatch = domNode.closest(".video-js")?.querySelector(".vjs-poster img")?.src?.match(/\/([^/]+)\/[^/]+$/);
          const posterId = posterMatch?.[1];
          if (posterId) {
            if (posterToStreamMap.get(posterId)) {
              return posterToStreamMap.get(posterId);
            }
            if (detectedPlaylists.size) {
              const matchedUrl = Array.from(detectedPlaylists).find(item => item.includes(posterId));
              if (matchedUrl) {
                posterToStreamMap.set(posterId, matchedUrl);
                detectedPlaylists.delete(matchedUrl);
                return posterToStreamMap.get(posterId);
              }
            }
          }
          return [];
        },
        mediaObjectChange(param) {
          const mediaObj = param.mediaObject;
          const domNode = param.node;
          const figcaptionText = domNode.closest("figure.video")?.querySelector("figcaption")?.innerText;
          const title = figcaptionText || streamUrlToTitle[mediaObj.url] || mediaObj.filename;
          mediaObj.filename = title;
          mediaObj.fixName = title;
          return mediaObj.type;
        }
      },
      {
        checkUrl: param => Boolean(new URL(param.url).searchParams.get("file")),
        getUrl: param => {
          const fileParam = new URL(param.url).searchParams.get("file");
          return fileParam || [];
        },
        mediaObjectChange(param) {
          const mediaObj = param.mediaObject;
          const title = document.querySelector('article h1[data-slot="title"]')?.textContent || document.title;
          mediaObj.filename = title;
          mediaObj.fixName = title;
          return "video";
        }
      }
    ],
    default: {
      getUrl: param => {
        const articleId = param.node.closest("[data-article-id]")?.getAttribute("data-article-id");
        return articleId ? videoIdToStreamUrl[articleId] : param.url;
      },
      mediaObjectChange: param => {
        const mediaObj = param.mediaObject;
        const domNode = param.node;
        const title = domNode.closest("[data-article-id]")?.nextElementSibling?.innerText?.trim() || document.title;
        mediaObj.filename = title;
        return mediaObj.type;
      }
    },
    addNode: () => ["#article-audio"],
    getCustomElement: () => Array.from(document.querySelectorAll("#article-audio"))
  };

  exportsObj.default = dantriExtractor;
};
