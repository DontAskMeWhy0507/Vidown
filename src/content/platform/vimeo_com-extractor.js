// Module 119 - Savior Vimeo_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  const dep_dom_utils = requireFn(0);
  const dep_media_constants = requireFn(1);
  const dep_url_utils = requireFn(3);
  const dep_media_sniffer = requireFn(6);
  const dep_url_filter = requireFn(81);
  const dep_dom_helper = requireFn(12);
  const dep_overlay_styles = requireFn(138);
  const overlayStyles = requireFn.n(dep_overlay_styles);

  function buildHlsPlaylist(baseUrl, segments, maxDuration, options) {
    const version = options?.version || 3;
    const targetDuration = options?.targetDuration || 11;
    const mediaSequence = options?.mediaSequence || 1;
    const playlistType = options?.playlistType || "VOD";
    const lines = [
      "#EXTM3U",
      `#EXT-X-VERSION:${version}`,
      `#EXT-X-TARGETDURATION:${targetDuration}`,
      `#EXT-X-MEDIA-SEQUENCE:${mediaSequence}`,
      `#EXT-X-PLAYLIST-TYPE:${playlistType}`
    ];
    const inf = `#EXTINF: ${maxDuration || 5}`;
    for (const seg of segments) {
      lines.push(inf);
      lines.push(baseUrl + seg);
    }
    return lines.join("\n");
  }

  async function parseVimeoConfig(config, defaultMedia) {
    const progressiveFiles = dep_dom_utils.getProp(config, "request.files.progressive");
    if (progressiveFiles && progressiveFiles.length > 0) {
      const results = [];
      progressiveFiles.forEach(file => {
        let qualityLabel;
        try {
          qualityLabel = config.i18n_quality || dep_dom_utils.i18n(dep_media_constants.r[file.quality]?.i18n_label);
        } catch (err) {
          console.log(err);
        }
        results.push({
          type: "video",
          title: config.video?.title,
          filename: config.video?.title,
          ext: "mp4",
          url: file.url,
          resolution: file.quality,
          quality: qualityLabel,
          i18n_quality: qualityLabel
        });
      });
      return results;
    }
    const filteredUrl = dep_url_filter.a(config);
    if (!filteredUrl) {
      throw new Error();
    }
    if (Array.isArray(filteredUrl)) {
      return filteredUrl;
    }
    const mediaInfo = Object.assign(Object.assign({}, defaultMedia), dep_url_utils.f(filteredUrl));
    try {
      const responseText = await fetch(filteredUrl).then(res => res.text());
      return dep_media_sniffer.e(responseText, mediaInfo);
    } catch (err) {
      console.warn("Caught", err);
      if (!mediaInfo.exts) {
        mediaInfo.exts = [mediaInfo.ext];
      }
      mediaInfo.type = "video";
      mediaInfo.filename = document.title;
      return [mediaInfo];
    }
  }

  let injectedStyleElement = null;
  const requestedConfigUrls = [];
  let configUrlCache = {};
  let activeConfigUrl = null;
  const videoConfigMap = {};
  const clipIdMap = {};
  const pendingConfigPromises = {};
  const VIMEO_POSTER_REGEX = /\/\/.+\.vimeocdn.com\/video\/([0-9]+)/i;

  const vimeoExtractor = {
    siteMatcher: () => /^vimeo.com/.test(location.href),
    getCustomParent: node => node.closest(".player_area"),
    toggleLight: {
      turnOff: {
        updated(param, state) {
          const parent = state.parent.$parent;
          if (parent?.nodeName === "IFRAME" && parent.contentDocument) {
            const backdrop = state.$backdrop.cloneNode();
            const styleElem = dep_dom_helper.a("style");
            injectedStyleElement = styleElem;
            styleElem.innerHTML = overlayStyles.a;
            parent.contentDocument.head?.appendChild(styleElem);
            const innerIframe = parent.contentDocument.querySelector("iframe");
            const iframeParent = innerIframe?.parentElement;
            if (iframeParent) {
              iframeParent.classList.add("--savior-overlay-z-index-top");
              innerIframe.classList.add("--savior-overlay-position-relative", "--savior-overlay-z-index-top");
              backdrop.style.top = "0px";
              backdrop.style.left = "0px";
              iframeParent.prepend(backdrop);
            }
          }
          const node = state.parent.$node;
          const assetWrapper = node.closest(".asset-wrapper, .hero-zoom-scale-wrapper");
          if (assetWrapper) {
            assetWrapper.classList.add("--savior-overlay-z-index-top");
            assetWrapper.classList.remove("--savior-overlay-z-index-reset");
          }
          if (node.closest("ul>section")) {
            let currentParent = state.parent.$parent;
            if (currentParent === state.parent.$node) {
              currentParent = currentParent.parentElement;
            }
            while (
              currentParent &&
              (currentParent.nodeName !== "UL" || !currentParent.querySelector("&>section")) &&
              currentParent.nodeName !== "BODY"
            ) {
              currentParent.classList?.remove("--savior-overlay-z-index-reset");
              currentParent.classList?.add("--savior-overlay-z-index-top");
              currentParent = currentParent.parentElement;
            }
          }
        }
      },
      turnOn: {
        updated(param, state) {
          const parent = state.parent.$parent;
          if (parent?.nodeName === "IFRAME" && parent.contentDocument) {
            parent.contentDocument.querySelector(".--savior-backdrop")?.remove();
            injectedStyleElement?.remove();
          }
        }
      }
    },
    parse: {
      sources: [
        {
          checkSource: param => Boolean(param.url.match(/vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist.json/)),
          parse: param => {
            const media = param.media;
            const response = param.response;
            try {
              const playlistJson = JSON.parse(response);
              const baseUrl = dep_url_utils.a(new URL(media.url), playlistJson.base_url);
              const audioStreams = [];
              for (const audio of (playlistJson.audio || [])) {
                const segUrls = [audio.index_segment, ...audio.segments.map(s => s.url)];
                audioStreams.push({
                  resolution: audio.bitrate,
                  playlist: buildHlsPlaylist(baseUrl, segUrls, audio.max_segment_duration)
                });
              }
              const videoStreams = [];
              for (const video of (playlistJson.video || [])) {
                const segUrls = [video.index_segment, ...video.segments.map(s => s.url)];
                videoStreams.push({
                  resolution: video.height,
                  playlist: buildHlsPlaylist(baseUrl, segUrls, video.max_segment_duration),
                  url: baseUrl + video.index_segment
                });
              }
              const bitrates = audioStreams.map(a => a.resolution);
              const minBitrate = Math.min(...bitrates);
              const maxBitrate = Math.max(...bitrates);
              const lowestAudio = audioStreams.find(a => a.resolution === minBitrate);
              const highestAudio = audioStreams.find(a => a.resolution === maxBitrate);

              return videoStreams.map(vStream => {
                const mediaResult = dep_url_utils.f(vStream.url);
                mediaResult.url = {
                  videoUrl: "https://www.google.com",
                  audioUrl: "https://www.google.com"
                };
                mediaResult.resolution = vStream.resolution + "p";
                mediaResult.quality = dep_dom_utils.i18n(dep_media_constants.r[mediaResult.resolution]?.i18n_label);
                mediaResult.ext = "m3u8";
                mediaResult.exts = ["m3u8"];
                mediaResult.type = "video";
                mediaResult.filename = media.filename;
                mediaResult.extraData = [
                  {
                    name: "video_playlist",
                    value: vStream.playlist
                  },
                  {
                    name: "audio_playlist",
                    value: (vStream.resolution > 540 ? highestAudio?.playlist : lowestAudio?.playlist) || ""
                  }
                ];
                return mediaResult;
              });
            } catch (err) {
              return [];
            }
          }
        }
      ],
      default: async param => {
        const media = param.media;
        const response = param.response;
        try {
          const configJson = JSON.parse(response);
          return await parseVimeoConfig({ config: configJson }, media);
        } catch (e) {
          if (media.ext === "mp4") {
            return [media];
          }
          if (response?.includes("#EXTM3U")) {
            return dep_media_sniffer.e(response, media);
          }
          const mediaUrl = media.url;
          if (videoConfigMap[mediaUrl]) {
            return await parseVimeoConfig(videoConfigMap[mediaUrl]);
          }
          return [];
        }
      }
    },
    urls: [
      {
        checkUrl: () => activeConfigUrl != null,
        getUrl: async () => {
          if (activeConfigUrl == null) {
            return [];
          }
          const configUrl = activeConfigUrl;
          const res = await dep_dom_utils.send("GET", configUrl);
          const parsed = JSON.parse(res.responseText);
          configUrlCache[configUrl] = dep_url_filter.a({ config: parsed });
          return configUrlCache[configUrl];
        }
      },
      {
        checkUrl: param => param.node.nodeName === "VIDEO" && param.url.includes(".mp4"),
        getUrl: param => param.url,
        mediaObjectChange: param => {
          if (param.node.autoplay) {
            param.mediaObject.filename = "Hero banner video";
            param.mediaObject.noAudio = true;
          }
        }
      }
    ],
    default: {
      getUrl: async param => {
        const url = param.url;
        const node = param.node;
        const articleAnchor = node.closest("article")?.querySelector("a") ||
                              node.closest("article[draggable]")?.querySelector("a");
        let targetUrl = (articleAnchor && articleAnchor.href) || location.href;
        if (!url) {
          return;
        }
        if (url.includes("player.vimeo.com")) {
          targetUrl = url;
        }
        let clipId = dep_url_filter.b(targetUrl || location.href);
        if (node.closest("[data-clip-id]") && !clipId) {
          clipId = node.closest("[data-clip-id]")?.getAttribute("data-clip-id") || null;
        }
        const posterUrl = node.getAttribute("poster") ||
                          node.closest("article")?.querySelector("img")?.src ||
                          node.closest("article[draggable]")?.querySelector("img")?.src;
        const posterMatch = posterUrl?.match(VIMEO_POSTER_REGEX);
        const posterClipId = posterMatch?.[1];
        if (posterClipId) {
          if (clipId) {
            clipIdMap[posterClipId] = clipId;
          } else {
            clipId = clipIdMap[posterClipId];
          }
        }
        const loadConfigUrl = `https://vimeo.com/${clipId}?action=load_config`;
        if (configUrlCache[loadConfigUrl] && clipId != null) {
          return configUrlCache[loadConfigUrl];
        }
        try {
          if (!pendingConfigPromises[loadConfigUrl]) {
            requestedConfigUrls.push(loadConfigUrl);
            pendingConfigPromises[loadConfigUrl] = fetch(loadConfigUrl, {
              headers: { "X-Requested-With": "XMLHttpRequest" }
            }).then(r => r.json());
          }
          const configRes = await pendingConfigPromises[loadConfigUrl];
          const playerConfigUrl = configRes.player.config_url;
          configUrlCache[url] = playerConfigUrl;
          configUrlCache[loadConfigUrl] = playerConfigUrl;
          return playerConfigUrl;
        } catch (err) {
          dep_dom_utils.devLog(err);
          let parentTargetUrl;
          if (node instanceof HTMLIFrameElement) {
            parentTargetUrl = node.src;
          }
          const msgRes = await dep_dom_utils.sendMessage({
            type: dep_media_constants.b.GET_URL,
            params: {
              parentTargetUrl: parentTargetUrl || undefined
            }
          });
          if (msgRes && msgRes.config) {
            requestedConfigUrls.push(url);
            configUrlCache[url] = dep_url_filter.a(msgRes);
            configUrlCache[loadConfigUrl] = dep_url_filter.a(msgRes);
            videoConfigMap[url] = msgRes.config;
            return configUrlCache[loadConfigUrl];
          }
          const playerVideoUrl = "https://player.vimeo.com/video/" + clipId;
          const getRes = await dep_dom_utils.send("GET", playerVideoUrl);
          const doc = new DOMParser().parseFromString(getRes.responseText, "text/html");
          const configRegexes = [/config *= *({.*?});/i, /config *= *({.*})/i];
          const scriptTexts = Array.from(doc.querySelectorAll("script"))
            .filter(s => s && s.innerText)
            .map(s => s.innerText);
          for (const reg of configRegexes) {
            const matchedScript = scriptTexts.find(text => text.match(reg));
            if (matchedScript) {
              const execRes = reg.exec(matchedScript);
              const parsedConfig = JSON.parse(execRes?.[1] || "{}");
              configUrlCache[url] = dep_url_filter.a({ config: parsedConfig });
              configUrlCache[playerVideoUrl] = dep_url_filter.a({ config: parsedConfig });
              videoConfigMap[url] = parsedConfig;
              return configUrlCache[playerVideoUrl];
            }
          }
        }
      },
      mediaObjectChange: param => {
        const mediaObj = param.mediaObject;
        const domNode = param.node;
        const title = domNode.closest("[data-clip-id]")?.closest(".data")?.querySelector(".details .title")?.innerText?.trim() ||
                      domNode.closest("article:has(img[srcset])")?.querySelector("img[srcset]")?.alt ||
                      domNode.closest("article[draggable]")?.querySelector("img")?.alt ||
                      domNode.closest(".asset-card-container")?.querySelector("h3")?.innerText?.trim();
        if (title) {
          mediaObj.fixName = title;
          mediaObj.filename = title;
        }
        if (configUrlCache[domNode.src]) {
          mediaObj.ext = "m3u8";
          mediaObj.exts = ["m3u8"];
          mediaObj.type = "video";
          return "video";
        }
      }
    },
    idsProcess(param) {
      if (new URL(param.id.url).searchParams.has("range")) {
        param.defaultIds.splice(param.index, 1);
      }
    },
    processRequestIds: param => {
      if (param.url.includes("config")) {
        activeConfigUrl = param.url;
        EE.emit("widget.forceUpdate");
      }
      if (param.url.includes("playlist.json")) {
        configUrlCache = {};
        return param, true;
      }
    }
  };

  exportsObj.default = vimeoExtractor;
};
