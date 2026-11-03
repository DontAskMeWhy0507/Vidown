// Module 281 - Savior Motphimtv_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  const dep_dom_utils = requireFn(0);
  const dep_format_resolver = requireFn(14);
  const dep_network_monitor = requireFn(20);
  const dep_media_constants = requireFn(1);
  const dep_media_sniffer = requireFn(6);
  const dep_stream_cipher_helper = requireFn(31);
  const dep_extractor_url_merger = requireFn(23);

  const playlistCache = {};

  async function fetchServerM3u8(url, cacheMap) {
    if (cacheMap[url]) {
      return cacheMap[url];
    }
    const res = await dep_dom_utils.sendMessage({
      type: dep_media_constants.b.GET_URL
    });
    if (res && res.url) {
      const matched = res.url.find(item => item.url && item.url.includes(".m3u8"));
      if (matched) {
        cacheMap[url] = matched.url;
        return matched.url;
      }
    }
    return cacheMap[url];
  }

  const motphimExtractor = {
    getDomains: () => [
      "motphimtv",
      "motphimm.com",
      "cphimmoi.com",
      "vuviphim.co",
      "motphimtw.com",
      "subnhanhs.com",
      "subnhanhss.net",
      "motchill.",
      "motphim.",
      "motphimtvv.",
      "motchjll.",
      "motphims1",
      "phimthuyetminh.top",
      "cobephim",
      "phim.nguonc.",
      "tramphim."
    ],
    siteMatcher: domain => /motchill[a-z0-9]*|gogophim[a-z0-9]*./i.test(domain),
    parse: {
      sources: [
        ...(dep_network_monitor.a.parse?.sources || []),
        {
          checkSource: param => param.url.includes("s6.kkphimplayer6.com"),
          parse: async param => {
            const media = param.media;
            const response = param.response;
            const sniffed = await dep_media_sniffer.e(response, media);
            if (sniffed && sniffed[0]) {
              sniffed[0].play_list = sniffed[0].play_list?.split("#EXT-X-DISCONTINUITY")
                .filter(part => !(part.match(/^\s*#ext-x-key:method=none/i) || part.length < 100))
                .join("\n");
            }
            return sniffed;
          }
        },
        {
          checkSource: param => {
            const url = param.url;
            return url.includes("https://hls.streamvda.top") || /\/\/embed\d*\.streamc\.xyz/i.test(url);
          },
          parse: async param => {
            const media = param.media;
            const res = await dep_dom_utils.sendMessage({
              type: dep_media_constants.b.GET_URL,
              params: {
                url: media.url
              }
            });
            const result = Object.assign({}, media);
            result.play_list = res.url;
            result.ext = "m3u8";
            result.exts = ["m3u8"];
            if (result.fixName) {
              result.filename = result.fixName;
            }
            if (result.filename && result.filename.length < 10) {
              result.filename = document.title;
            }
            return [result];
          }
        },
        {
          checkSource: param => {
            return /(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i.test(param.url);
          },
          parse: param => {
            const media = param.media;
            const response = param.response;
            try {
              if (media.ext === "m3u8") {
                if (response.match(/<\?xml/i)) {
                  const urlObj = new URL(media.url);
                  return dep_format_resolver.b(response, media.filename, urlObj.origin);
                }
                if (response.match(/#extm3u/i)) {
                  return dep_media_sniffer.e(response, media);
                }
              }
              return [media];
            } catch (err) {
              console.warn(err);
              return [media];
            }
          }
        },
        {
          checkSource: param => /vidsugar\.com\/.+api\.json/i.test(param.url),
          parse: param => {
            const media = param.media;
            const response = param.response;
            try {
              const parsed = JSON.parse(response);
              parsed.proxy = atob(parsed.proxy);
              parsed.cdn = atob(parsed.cdn);
              const lines = [
                "#EXTM3U",
                "#EXT-X-VERSION:" + parsed.version,
                "#EXT-X-TARGETDURATION:" + parsed.targetDuration,
                "#EXT-X-MEDIA-SEQUENCE:0"
              ];
              parsed.chunks.forEach((chunkDuration, index) => {
                lines.push(`#EXTINF:${chunkDuration},`);
                lines.push(parsed.proxy + encodeURIComponent(`${parsed.cdn}/${index}.html`));
              });
              lines.push("#EXT-X-ENDLIST");
              const mediaCopy = media;
              mediaCopy.play_list = lines.join("\n");
              mediaCopy.url = mediaCopy.url.replace("api.json", "chunklist.m3u8");
              mediaCopy.filename = document.title;
              return [mediaCopy];
            } catch (err) {
              return [];
            }
          }
        },
        {
          checkSource: param => /vidsugar\.com\/.+chunklist\.m3u8/i.test(param.url),
          parse: param => {
            const media = param.media;
            const response = param.response;
            try {
              const lines = response.split("\n").map(line => {
                if (line.includes("url=")) {
                  return line.split("url=")[1].replaceAll("%2F", "/").replaceAll("%3A", ":");
                }
                return line;
              });
              const mediaCopy = media;
              mediaCopy.play_list = lines.join("\n");
              mediaCopy.filename = document.title;
              return [mediaCopy];
            } catch (err) {
              return [];
            }
          }
        }
      ]
    },
    urls: [
      ...(dep_network_monitor.a.urls || []),
      {
        checkUrl: param => param.url.includes("ads-vast"),
        getUrl: () => []
      },
      {
        checkUrl: param => param.url.includes("stream.hlstream"),
        getUrl: param => param.url + "/master.html?cdn=false",
        mediaObjectChange: param => {
          const media = param.mediaObject;
          media.ext = "m3u8";
          media.exts = ["m3u8"];
        }
      },
      {
        checkUrl: param => Boolean(param.url.match(/haivan\.[a-zA-Z]+\/player/)),
        getUrl: async param => {
          const url = param.url;
          const iframeNode = param.node;
          await dep_dom_utils.sleep(1000);
          try {
            if (!iframeNode.contentDocument?.querySelectorAll(".list-server li").length) {
              if (iframeNode.contentWindow) {
                iframeNode.contentWindow.onload = () => {
                  setTimeout(() => {
                    EE.emit("widget.updateMedia");
                  }, 1000);
                };
              } else {
                setTimeout(() => {
                  EE.emit("widget.updateMedia");
                }, 1000);
              }
              return;
            }
            return await fetchServerM3u8(url, playlistCache);
          } catch (err) {
            return await fetchServerM3u8(url, playlistCache);
          }
        },
        mediaObjectChange: param => {
          param.mediaObject.referrer = param.node.src;
        }
      },
      {
        checkUrl: param => param.url.includes("vuviphims.net"),
        getUrl: async param => {
          const url = param.url;
          if (playlistCache[url]) {
            return playlistCache[url];
          }
          const res = await dep_dom_utils.sendMessage({
            type: dep_media_constants.b.GET_URL
          });
          if (res && res.url) {
            playlistCache[url] = res.url;
            return res.url;
          }
          return playlistCache[url];
        },
        mediaObjectChange: param => {
          delete param.mediaObject.referrer;
          param.mediaObject.skipReferrer = true;
          return "video";
        }
      },
      {
        checkUrl: param => param.url.includes("t4vstream.xyz/"),
        getUrl: param => param.url,
        mediaObjectChange: param => {
          const media = param.mediaObject;
          media.ext = "mp4";
          media.exts = ["mp4"];
          media.referrer = location.href;
          return "video";
        }
      }
    ],
    idsProcess(param) {
      const defaultIds = param.defaultIds;
      const item = param.id;
      const index = param.index;
      if (/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)/i.test(item.url)) {
        const match = item.url.match(/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i);
        const ctVal = Number(match ? match[2] : "0");
        if (ctVal !== 6) {
          defaultIds.splice(index, 1);
        }
      }
      if (item.ext === "m3u8") {
        item.skipUrlToCombineHls = true;
      }
    }
  };

  exportsObj.default = dep_extractor_url_merger.a(
    dep_stream_cipher_helper.a,
    ["parse", "urls"]
  )(motphimExtractor);
};
