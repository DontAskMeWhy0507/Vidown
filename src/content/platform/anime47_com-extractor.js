// Module 190 - Savior Anime47_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  const dep_dom_utils = requireFn(0);
  const dep_dash_parser = requireFn(28);
  const dep_media_constants = requireFn(1);
  const dep_media_sniffer = requireFn(6);

  const YOUTUBE_EMBED_REGEX = /youtube\.com\/embed\//i;

  const anime47Extractor = {
    getDomains: () => ["anime47."],
    parse: {
      sources: [
        {
          checkSource: item => YOUTUBE_EMBED_REGEX.test(item.url),
          parse: item => {
            const media = item.media;
            const videoId = dep_dom_utils.getVideoId(media.url);
            return videoId ? dep_dash_parser.a.parse(videoId) : [];
          }
        },
        {
          checkSource: item => /cdn\.animevui\.[a-z]+\/file/i.test(item.url),
          parse: item => {
            const media = item.media;
            const response = item.response;
            media.useTrueRelativeUrl = true;
            return dep_media_sniffer.e(response, media);
          }
        }
      ]
    },
    urls: [
      {
        checkUrl: param => {
          const url = param.url;
          return param.node.tagName === "IFRAME" && (!url || url === "");
        },
        getUrl: async () => {
          const response = await dep_dom_utils.sendMessage({
            type: dep_media_constants.b.GET_URL
          });
          return response ? response.url : undefined;
        },
        mediaObjectChange: param => {
          const mediaObj = param.mediaObject;
          const domNode = param.node;
          mediaObj.ext = "mp4";
          mediaObj.exts = ["mp4"];
          mediaObj.cacheUrl = domNode.src;
          return "video";
        }
      },
      {
        checkUrl: param => {
          const url = param.url;
          return /(player\.zphimmoi\.com\/api\/play\/)[a-zA-Z0-9_.-]+/g.test(url);
        },
        getUrl: param => {
          const url = param.url;
          const match = url.match(/(player\.zphimmoi\.com\/api\/play\/)[a-zA-Z0-9_.-]+/g);
          const parts = match ? match[0].split("/") : undefined;
          if (parts && parts.length > 0) {
            return "https://player.zphimmoi.com/api/m3u8/" + parts[parts.length - 1] + "/master.m3u8";
          }
        }
      }
    ],
    default: {
      mediaObjectChange: param => {
        const mediaObj = param.mediaObject;
        if (!mediaObj.referer) {
          mediaObj.referer = location.href;
        }
        return mediaObj.type;
      }
    }
  };

  exportsObj.default = anime47Extractor;
};
