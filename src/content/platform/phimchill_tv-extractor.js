// Module 307 - Savior Phimchill_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  const dep_quality_helper = requireFn(9);
  const dep_dom_utils = requireFn(0);
  const dep_media_constants = requireFn(1);
  const dep_module_44 = requireFn(44);
  const dep_url_utils = requireFn(3);
  const dep_extractor_url_merger = requireFn(23);
  const dep_token_hash_util = requireFn(45);
  const dep_stream_cipher_helper = requireFn(31);

  const dashCacheMap = {};
  const opstreamCacheMap = {};

  const phimchillExtractor = {
    getDomains: () => ["phimchill.tv", "phimmoichill.", "iphimchillzz.net", "phimmoiyyy."],
    parse: {
      sources: [
        ...dep_stream_cipher_helper.a.parse.sources,
        ...dep_token_hash_util.a.parse.sources,
        {
          checkSource: param => {
            return Boolean(param.cacheUrl?.match(/blob:https:\/\/(phimchill\.tv|phimmoichill.*\.|iphimchillzz\.net)/));
          },
          parse: async param => {
            const media = param.media;
            const response = param.response;
            try {
              let parsedData;
              if (response.includes("<!DOCTYPE html>")) {
                const res = await fetch(String(media.url));
                parsedData = await res.json();
              } else {
                parsedData = JSON.parse(response);
              }
              const resolutions = Object.keys(parsedData);
              return resolutions.map(resKey => {
                const segments = parsedData[resKey].segments;
                const mediaCopy = Object.assign({}, media);
                const playlistLines = [
                  "#EXTM3U",
                  "#EXT-X-VERSION:3",
                  "#EXT-X-TARGETDURATION:" + parsedData.tgdr,
                  "#EXT-X-PLAYLIST-TYPE:VOD"
                ];
                for (let i = 0; i < segments.length; i++) {
                  if (i === 0) {
                    mediaCopy.url = segments[i].link;
                  }
                  playlistLines.push("#EXTINF:" + segments[i].du);
                  playlistLines.push(segments[i].link);
                }
                playlistLines.push("#EXT-X-ENDLIST");
                mediaCopy.resolution = resKey;
                mediaCopy.quality = dep_media_constants.r[mediaCopy.resolution]?.label;
                mediaCopy.play_list = playlistLines.join("\n");
                return mediaCopy;
              });
            } catch (err) {
              console.log(err);
              return [];
            }
          }
        },
        {
          checkSource: param => {
            return Boolean(param.url?.match(/[a-z\-\d]+\.(vkuser\.net)|(mycdn\.me)\/.*&type=1/));
          },
          parse: async param => {
            const media = param.media;
            const response = param.response;
            if (Array.isArray(response)) {
              return response;
            }
            const mediaCopy = media;
            try {
              mediaCopy._isDashMPD = true;
              if (!mediaCopy.quality) {
                mediaCopy.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE;
              }
              if (typeof mediaCopy.size === "number") {
                mediaCopy.size = dep_dom_utils.beautifyFileSize(mediaCopy.size);
              }
              if (response) {
                if (response.match(/:mpeg:DASH/i)) {
                  mediaCopy.play_list = response;
                }
                return [mediaCopy];
              }
              const parsedUrl = new URL(mediaCopy.url);
              parsedUrl.searchParams.set("ct", "6");
              mediaCopy.url = parsedUrl.href;
              if (!dashCacheMap[parsedUrl.href]) {
                const res = await dep_dom_utils.sendMessage({
                  type: dep_media_constants.b.GET_URL,
                  params: {
                    method: "get",
                    url: parsedUrl.href
                  }
                });
                dashCacheMap[parsedUrl.href] = res.url || res;
              }
              let videoAdaptationSet;
              const parsedMpd = dep_module_44.parse(dashCacheMap[parsedUrl.href], {
                attributeNamePrefix: "",
                attrNodeName: "@",
                textNodeName: "#text",
                ignoreAttributes: false,
                cdataTagName: "__cdata"
              });
              parsedMpd.MPD.Period.AdaptationSet.forEach(adaptSet => {
                adaptSet.Representation?.forEach(rep => {
                  if (rep["@"]?.mimeType?.includes("video")) {
                    videoAdaptationSet = adaptSet;
                  }
                });
              });
              return videoAdaptationSet?.Representation.map(rep => {
                const resMedia = Object.assign({}, mediaCopy);
                resMedia.resolution = rep["@"].height + "p";
                resMedia.quality = dep_media_constants.r[resMedia.resolution]?.label || dep_quality_helper.b.DEFAULT_QUALITY_TYPE;
                resMedia._dash_video_id = rep["@"].id;
                mediaCopy.play_list = dashCacheMap[parsedUrl.href];
                return resMedia;
              });
            } catch (err) {
              console.log(err);
              return [mediaCopy];
            }
          }
        }
      ]
    },
    urls: [
      ...dep_stream_cipher_helper.a.urls,
      {
        checkUrl: param => {
          return Boolean(param.url.match(/blob:https:\/\/(phimchill\.tv|phimmoichill.*\..+|iphimchillzz\.net)\//));
        },
        getUrl: async param => {
          const domNode = param.node;
          const defaultIds = param.ids;
          const iniRegex = /iniPlayers\("(.*?)"/;
          const scriptTags = Array.from(document.querySelectorAll("script"));
          const matchedScript = scriptTags.find(s => s.innerText && s.innerText.match(iniRegex));
          if (matchedScript) {
            const match = iniRegex.exec(matchedScript.innerText);
            const token = match ? match[1] : undefined;
            return "https://sotrim.topphimmoi.org/manifest/" + token;
          }
          const videoPlayerLink = domNode.closest(".VideoPlayer")?.parentElement?.querySelector("ul>li>a") ||
                                  document.querySelector(".VideoPlayer ul>li.on>a");
          if (!videoPlayerLink) {
            return defaultIds;
          }
          const dataType = videoPlayerLink.getAttribute("data-type");
          if (!["mp4", "m3u8", "mpd"].includes(dataType)) {
            return;
          }
          const mediaItem = dep_url_utils.f(videoPlayerLink.getAttribute("data-link"));
          mediaItem.type = "video";
          mediaItem.ext = dataType || "m3u8";
          return [mediaItem];
        },
        mediaObjectChange: param => {
          const mediaObj = param.mediaObject;
          const domNode = param.node;
          if (domNode.src.match(/blob:https:\/\/(phimchill\.tv|phimmoichill.*\..+|iphimchillzz\.net)/)) {
            mediaObj.ext = "m3u8";
            mediaObj.exts = ["m3u8"];
            mediaObj.cacheUrl = domNode.src;
            const titleElem = document.querySelector('h1[itemprop="name"]');
            mediaObj.filename = titleElem?.textContent || mediaObj.filename;
            return "video";
          }
        }
      },
      {
        checkUrl: param => /\.opstream\d*\.com\/share\//i.test(param.url),
        getUrl: async param => {
          const url = param.url;
          if (!opstreamCacheMap[url]) {
            const res = await dep_dom_utils.sendMessage({
              type: dep_media_constants.b.GET_URL
            });
            if (res && res.url) {
              opstreamCacheMap[url] = res.url;
            }
          }
          return opstreamCacheMap[url];
        }
      },
      {
        checkUrl: param => /\/tvc\?id=/i.test(param.url),
        getUrl: dep_token_hash_util.a.urls[0].getUrl
      }
    ],
    idsProcess: param => {
      const defaultIds = param.defaultIds;
      const idItem = param.id;
      const index = param.index;
      if (idItem.url.match(/[a-z\-\d]+\.(vkuser\.net)|(mycdn\.me)/)) {
        const parsedUrl = new URL(idItem.url);
        if (parsedUrl.searchParams.get("type") !== "1") {
          defaultIds.splice(index, 1);
        } else {
          parsedUrl.searchParams.set("ct", "6");
          idItem.url = parsedUrl.href;
        }
      }
    }
  };

  exportsObj.default = dep_extractor_url_merger.a(
    dep_token_hash_util.a,
    ["urls", "processRequestIds"]
  )(phimchillExtractor);
};
