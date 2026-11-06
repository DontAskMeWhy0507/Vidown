// Module 442 [platform] - Savior TikTok and Douyin Content Media Extractor and DOM Resolver
export default function(module, exports, require) {
  "use strict";

  require.r(exports);

  var cryptoUtils = require(0);
  var urlUtils = require(3);
  var mediaConstants = require(1);
  var domHelper = require(12);

  function createForOfIteratorHelper(iterable, allowArrayLike) {
    var iteratorSymbol = typeof Symbol !== "undefined" && iterable[Symbol.iterator] || iterable["@@iterator"];
    if (!iteratorSymbol) {
      if (Array.isArray(iterable) || (iteratorSymbol = unsupportedIterableToArray(iterable)) || (allowArrayLike && iterable && typeof iterable.length === "number")) {
        if (iteratorSymbol) iterable = iteratorSymbol;
        var iteratorIndex = 0;
        var emptyFn = function() {};
        return {
          s: emptyFn,
          n: function() {
            return iteratorIndex >= iterable.length ? { done: true } : { done: false, value: iterable[iteratorIndex++] };
          },
          e: function(iterationError) { throw iterationError; },
          f: emptyFn
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var iterationErrorState, isDone = true, hasError = false;
    return {
      s: function() { iteratorSymbol = iteratorSymbol.call(iterable); },
      n: function() {
        var stepResult = iteratorSymbol.next();
        return isDone = stepResult.done, stepResult;
      },
      e: function(iterationError) { hasError = true, iterationErrorState = iterationError; },
      f: function() {
        try {
          if (!isDone && iteratorSymbol.return != null) iteratorSymbol.return();
        } finally {
          if (hasError) throw iterationErrorState;
        }
      }
    };
  }

  function unsupportedIterableToArray(arrayLike, maxLen) {
    if (!arrayLike) return;
    if (typeof arrayLike === "string") return arrayLikeToArray(arrayLike, maxLen);
    var targetType = Object.prototype.toString.call(arrayLike).slice(8, -1);
    if (targetType === "Object" && arrayLike.constructor) targetType = arrayLike.constructor.name;
    if (targetType === "Map" || targetType === "Set") return Array.from(arrayLike);
    if (targetType === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(targetType)) {
      return arrayLikeToArray(arrayLike, maxLen);
    }
  }

  function arrayLikeToArray(sourceArray, lengthLimit) {
    if (lengthLimit == null || lengthLimit > sourceArray.length) lengthLimit = sourceArray.length;
    for (var index = 0, newArray = new Array(lengthLimit); index < lengthLimit; index++) newArray[index] = sourceArray[index];
    return newArray;
  }

  function c() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var s = n && n.prototype instanceof c ? n : c, l = Object.create(s.prototype);
      return l(l, "_invoke", function(r, n, i) {
        var o, s, u, c = 0, l = i || [], f = !1, d = {
          p: 0,
          n: 0,
          v: t,
          a: h,
          f: h.bind(t, 4),
          d: function(e, r) {
            return o = e, s = 0, u = t, d.n = r, a;
          }
        };
        function h(r, n) {
          for (s = r, u = n, e = 0; !f && c && !i && e < l.length; e++) {
            var i, o = l[e], h = d.p, p = o[2];
            r > 3 ? (i = p === n) && (u = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) :
              o[0] <= h && ((i = r < 2 && h < o[1]) ? (s = 0, d.v = n, d.n = o[1]) :
              h < p && (i = r < 3 || o[0] > n || n > p) && (o[4] = r, o[5] = n, d.n = p, s = 0));
          }
          if (i || r > 1) return a;
          throw f = !0, n;
        }
        return function(i, l, p) {
          if (c > 1) throw TypeError("Generator is already running");
          for (f && 1 === l && h(l, p), s = l, u = p; (e = s < 2 ? t : u) || !f;) {
            o || (s ? s < 3 ? (s > 1 && (d.n = -1), h(s, u)) : d.n = u : d.v = u);
            try {
              if (c = 2, o) {
                if (s || (i = "next"), e = o[i]) {
                  if (!(e = e.call(o, u))) throw TypeError("iterator result is not an object");
                  if (!e.done) return e;
                  u = e.value, s < 2 && (s = 0);
                } else 1 === s && (e = o.return) && e.call(o), s < 2 && (u = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                o = t;
              } else if ((e = (f = d.n < 0) ? u : r.call(n, d)) !== a) break;
            } catch (e) {
              o = t, s = 1, u = e;
            } finally {
              c = 1;
            }
          }
          return { value: e, done: f };
        };
      }(r, i, o), !0), l;
    }
    var a = {};
    function c() {}
    function l() {}
    function f() {}
    e = Object.getPrototypeOf;
    var d = [][n] ? e(e([][n]())) : (l(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = c.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, l(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, l(h, "constructor", f), l(f, "constructor", l), l.displayName = "GeneratorFunction",
      l(f, i, "GeneratorFunction"), l(h), l(h, i, "Generator"), l(h, n, (function() { return this; })),
      l(h, "toString", (function() { return "[object Generator]"; })),
      (c=function(){return{w:o,m:p}})()}

  function l(context, args, extra, generatorFn) {
    return new Promise(function(resolve, reject) {
      var gen = generatorFn.apply(context, args || []);
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(function(val) {
            step("next", val);
          }, function(err) {
            step("throw", err);
          });
        }
      }
      step("next");
    });
  }

  var asyncRunner1 = l;
  var inFlightInjectMap = {};
  var rejectedUrls = {};
  var videoUrlPatterns = [
    /https:\/\/.*\.tiktokcdn\.com\/.*\/video\/tos\/.*/i,
    /https:\/\/.*\.tiktokcdn-us\.com\/.*\/video\/tos\/.*/i
  ];

  function isKnownVideoPattern(urlCandidate) {
    return videoUrlPatterns.some(function(pattern) {
      return pattern.test(urlCandidate);
    });
  }

  function injectTikTokMainWorldScript() {
    return Promise.race([
      cryptoUtils.sendMessage({
        type: mediaConstants.b.SCRIPTING.INJECT,
        file: "tiktok"
      }),
      cryptoUtils.sleep(800)
    ]);
  }

  function parseAwemeVideoAttribute(videoElement) {
    if (!videoElement?.hasAttribute?.("data-aweme-video")) return null;
    try {
      return JSON.parse(videoElement.getAttribute("data-aweme-video"));
    } catch (parseErr) {
      return null;
    } finally {
      videoElement.removeAttribute("data-aweme-video");
    }
  }

  function getAwemeVideoData(videoElement, findMainVideoFn) {
    var awemeData = parseAwemeVideoAttribute(videoElement);
    if (!awemeData && findMainVideoFn) {
      var mainVideo = findMainVideoFn(videoElement);
      if (mainVideo) {
        awemeData = parseAwemeVideoAttribute(mainVideo);
      }
    }
    return awemeData;
  }

  function parseTikTokMediaItems(bitrates, videoTitle, audioBitrates) {
    return asyncRunner1(void 0, void 0, void 0, c().m(function parseMediaGenerator() {
      var resultList, iterator, item, playUrl, mediaFormat, qualityLabel, i18nLabel;
      return c().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            resultList = [];
            iterator = createForOfIteratorHelper(bitrates);
          case 1:
            if ((item = iterator.n()).done) {
              step.n = 5;
              break;
            }
            playUrl = item.value?.playAddr?.urlList?.[0] || item.value?.playAddr?.UrlList?.[0];
            if (!playUrl) {
              step.n = 4;
              break;
            }
            mediaFormat = urlUtils.f(playUrl);
            mediaFormat.filename = videoTitle;
            mediaFormat.ext = "mp4";
            mediaFormat.exts = ["mp4"];
            mediaFormat.type = "video";
            mediaFormat.resolution = item.value?.gearName || item.value?.qualityType || "default";
            qualityLabel = mediaConstants.r[mediaFormat.resolution]?.label || mediaFormat.resolution;
            mediaFormat.quality = qualityLabel;
            try {
              i18nLabel = mediaConstants.r[mediaFormat.resolution]?.i18n_label;
              if (i18nLabel) mediaFormat.i18n_quality = cryptoUtils.i18n(i18nLabel);
            } catch (i18nErr) {}
            resultList.push(mediaFormat);
          case 4:
            step.n = 1;
            break;
          case 5:
            return step.a(2, resultList);
        }
      }, parseMediaGenerator);
    }));
  }

  function w() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var s = n && n.prototype instanceof c ? n : c, l = Object.create(s.prototype);
      return A(l, "_invoke", function(r, n, i) {
        var o, s, u, c = 0, l = i || [], f = !1, d = {
          p: 0,
          n: 0,
          v: t,
          a: h,
          f: h.bind(t, 4),
          d: function(e, r) {
            return o = e, s = 0, u = t, d.n = r, a;
          }
        };
        function h(r, n) {
          for (s = r, u = n, e = 0; !f && c && !i && e < l.length; e++) {
            var i, o = l[e], h = d.p, p = o[2];
            r > 3 ? (i = p === n) && (u = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) :
              o[0] <= h && ((i = r < 2 && h < o[1]) ? (s = 0, d.v = n, d.n = o[1]) :
              h < p && (i = r < 3 || o[0] > n || n > p) && (o[4] = r, o[5] = n, d.n = p, s = 0));
          }
          if (i || r > 1) return a;
          throw f = !0, n;
        }
        return function(i, l, p) {
          if (c > 1) throw TypeError("Generator is already running");
          for (f && 1 === l && h(l, p), s = l, u = p; (e = s < 2 ? t : u) || !f;) {
            o || (s ? s < 3 ? (s > 1 && (d.n = -1), h(s, u)) : d.n = u : d.v = u);
            try {
              if (c = 2, o) {
                if (s || (i = "next"), e = o[i]) {
                  if (!(e = e.call(o, u))) throw TypeError("iterator result is not an object");
                  if (!e.done) return e;
                  u = e.value, s < 2 && (s = 0);
                } else 1 === s && (e = o.return) && e.call(o), s < 2 && (u = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                o = t;
              } else if ((e = (f = d.n < 0) ? u : r.call(n, d)) !== a) break;
            } catch (e) {
              o = t, s = 1, u = e;
            } finally {
              c = 1;
            }
          }
          return { value: e, done: f };
        };
      }(r, i, o), !0), l;
    }
    var a = {};
    function c() {}
    function l() {}
    function f() {}
    e = Object.getPrototypeOf;
    var d = [][n] ? e(e([][n]())) : (A(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = c.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, A(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, A(h, "constructor", f), A(f, "constructor", l), l.displayName = "GeneratorFunction",
      A(f, i, "GeneratorFunction"), A(h), A(h, i, "Generator"), A(h, n, (function() { return this; })),
      A(h, "toString", (function() { return "[object Generator]"; })),
      (w=function(){return{w:o,m:p}})()}

  function A(context, args, extra, generatorFn) {
    return new Promise(function(resolve, reject) {
      var gen = generatorFn.apply(context, args || []);
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(function(val) {
            step("next", val);
          }, function(err) {
            step("throw", err);
          });
        }
      }
      step("next");
    });
  }

  var asyncRunner2 = A;
  var TIKTOK_VIDEO_URL_REGEX = /\/video\/(\d+)/i;
  var TIKTOK_VIDEO_PATH_REGEX = /\/@([\w.-]+)\/video\/(\d+)/i;

  function isTikTokExplorePage() {
    return location.pathname.includes("/explore");
  }

  function isTikTokUserPage() {
    return /\/@[\w.-]+$/.test(location.pathname);
  }

  function getTikTokVideoIdFromUrl(targetHref) {
    if (!targetHref) return null;
    var match = targetHref.match(TIKTOK_VIDEO_URL_REGEX);
    return match ? match[1] : null;
  }

  var getCurrentTikTokVideoId = () => getTikTokVideoIdFromUrl(location.href);

  function isTikTokAnchorLink(anchorElement) {
    return Boolean(anchorElement && anchorElement.href && TIKTOK_VIDEO_URL_REGEX.test(anchorElement.href));
  }

  function findTikTokVideoLinks(rootElement) {
    var anchorList = rootElement ? Array.from(rootElement.querySelectorAll('a[href*="/video/"]')) : [];
    return anchorList.filter(isTikTokAnchorLink);
  }

  function getTikTokAnchorElement(videoElement) {
    var parentAnchor = videoElement?.closest('a[href*="/video/"]');
    if (parentAnchor) return parentAnchor;
    var container = videoElement?.closest('[data-e2e="user-post-item"], [data-e2e="feed-item"], [data-e2e="explore-item"]');
    if (container) {
      var links = findTikTokVideoLinks(container);
      if (links.length > 0) return links[0];
    }
    return null;
  }

  function findTikTokMainVideo(element) {
    var rootItem = findTikTokItemRoot(element);
    return rootItem ? rootItem.querySelector("video") : document.querySelector("video");
  }

  function isStandaloneTikTokVideo(videoElement) {
    return Boolean(videoElement && (videoElement.matches(".xgplayer video") || videoElement.closest('[data-e2e="browse-video"]')));
  }

  function findTikTokItemRoot(videoElement) {
    return videoElement?.closest('[data-e2e="feed-item"]') ||
      videoElement?.closest('[data-e2e="user-post-item"]') ||
      videoElement?.closest('[data-e2e="explore-item"]') ||
      videoElement?.closest('[data-e2e="browse-video"]') ||
      videoElement?.parentElement;
  }

  function getTikTokItemId(element) {
    var container = findTikTokItemRoot(element);
    if (!container) return null;
    var dataE2e = container.getAttribute("data-e2e-vid") || container.getAttribute("data-e2e");
    if (dataE2e && /\d+/.test(dataE2e)) return dataE2e.match(/\d+/)[0];
    var link = getTikTokAnchorElement(element);
    return link ? getTikTokVideoIdFromUrl(link.href) : null;
  }

  function sanitizeVideoTitle(titleCandidate) {
    if (!titleCandidate) return "";
    var cleanTitle = typeof titleCandidate === "string" ? titleCandidate : titleCandidate.innerText || titleCandidate.textContent || "";
    return cleanTitle.replace(/\s+/g, " ").trim();
  }

  function getTikTokPostItemTitle(videoElement) {
    var postItemContainer = videoElement?.closest('div[data-e2e$="user-post-item"]');
    var parentContainer = postItemContainer?.parentElement;
    var titleAnchor = parentContainer ? Array.from(parentContainer.querySelectorAll("a")).find(function(anchor) {
      return Boolean(anchor.title);
    }) : null;
    return titleAnchor?.title || "";
  }

  function findCoverImage(element, fallbackCover) {
    var imgSrc = (element?.currentSrc) || (element?.src) || "";
    return imgSrc && !/^data:image\/gif/i.test(imgSrc) ? imgSrc : fallbackCover || void 0;
  }

  function scrapeCurrentVideoFromDoc() {
    var videoId = getCurrentTikTokVideoId();
    if (!videoId) return null;
    var descElem = document.querySelector(
      '[data-e2e$="browse-video-desc"], [data-e2e$="video-desc"], [data-e2e="browse-video-desc"]'
    );
    var ogMeta = document.querySelector('meta[property="og:title"]');
    var ogTitle = ogMeta?.getAttribute("content") || "";
    var videoTitle = sanitizeVideoTitle(descElem?.innerText || ogTitle) || document.title;
    var mainVideo = findTikTokMainVideo();
    var parentElem = mainVideo?.parentElement;
    var thumbnail;
    for (var i = 0; i < 8 && parentElem && !thumbnail; i++) {
      thumbnail = findCoverImage(parentElem.querySelector("img[src], img[srcset]"));
      parentElem = parentElem.parentElement;
    }
    var s = mainVideo?.src, streamUrl = (s && /^https?:\/\//i.test(s) && !s.includes("tiktok.com/")) ? s : "";
    return {
      id: videoId,
      url: streamUrl,
      type: "video",
      ext: "mp4",
      exts: ["mp4"],
      title: videoTitle,
      thumbnail: thumbnail
    };
  }

  function scrapeTikTokAnchorPreviewMeta(element) {
    if (isStandaloneTikTokVideo(element)) return scrapeCurrentVideoFromDoc();
    var anchor = getTikTokAnchorElement(element);
    if (!anchor) return null;
    var anchorImg = anchor.querySelector("img");
    var rawText = (anchor.title || anchorImg?.getAttribute("alt") || anchorImg?.alt || anchor.textContent || "")
      .split(/created by/i)[0] || "";
    var cleanTitle = rawText.trim().replace(/\s+/g, " ") || document.title;
    var hrefMatch = anchor.href?.match(TIKTOK_VIDEO_URL_REGEX)?.[1] ||
      anchor.getAttribute("href")?.match(TIKTOK_VIDEO_URL_REGEX)?.[1];
    if (!hrefMatch && !anchor.href) return null;
    var awemeCover;
    try {
      var rawAweme = anchor.getAttribute("data-aweme-video");
      if (rawAweme) {
        awemeCover = JSON.parse(rawAweme)?.cover || void 0;
      }
    } catch (ignoreErr) {}
    var cover = findCoverImage(anchorImg, awemeCover);
    return cover || cleanTitle ? {
      id: hrefMatch || anchor.href,
      url: anchor.href,
      type: "video",
      ext: "mp4",
      exts: ["mp4"],
      title: cleanTitle,
      thumbnail: cover
    } : null;
  }

  function formatBitratesOrPlayAddr(videoData, videoTitle) {
    return asyncRunner2(this, void 0, void 0, w().m(function bitrateGenerator() {
      var parsedList, singleMedia;
      return w().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            if (!videoData.bitrateInfo?.length) {
              step.n = 2;
              break;
            }
            step.n = 1;
            return parseTikTokMediaItems(videoData.bitrateInfo, videoTitle || document.title);
          case 1:
            parsedList = step.v;
            if (!parsedList.length) {
              step.n = 2;
              break;
            }
            return step.a(2, parsedList);
          case 2:
            if (!videoData.url) {
              step.n = 3;
              break;
            }
            singleMedia = urlUtils.f(videoData.url);
            singleMedia.filename = videoTitle;
            if (videoData.ratio) {
              singleMedia.resolution = videoData.ratio;
              singleMedia.quality = mediaConstants.r[singleMedia.resolution]?.label;
            }
            singleMedia.ext = "mp4";
            singleMedia.exts = ["mp4"];
            singleMedia.type = "video";
            return step.a(2, [singleMedia]);
          case 3:
            return step.a(2, []);
        }
      }, bitrateGenerator);
    }));
  }

  function scrapeUniversalDataById(videoId, videoTitle) {
    return asyncRunner2(this, void 0, void 0, w().m(function universalGenerator() {
      var rawText, parsedData, itemStruct, videoObj, resolvedTitle;
      return w().w(function(step) {
        for (;;) switch (step.p = step.n) {
          case 0:
            step.p = 0;
            rawText = document.querySelector("#__UNIVERSAL_DATA_FOR_REHYDRATION__")?.textContent?.trim();
            if (rawText) {
              step.n = 1;
              break;
            }
            return step.a(2, []);
          case 1:
            parsedData = JSON.parse(rawText)?.__DEFAULT_SCOPE__?.["webapp.video-detail"]?.itemInfo?.itemStruct;
            if (parsedData && String(parsedData.id) === String(videoId)) {
              step.n = 2;
              break;
            }
            return step.a(2, []);
          case 2:
            videoObj = parsedData.video;
            if (videoObj) {
              step.n = 3;
              break;
            }
            return step.a(2, []);
          case 3:
            resolvedTitle = sanitizeVideoTitle(parsedData.desc) || videoTitle || document.title;
            return step.a(2, formatBitratesOrPlayAddr({
              bitrateInfo: videoObj.bitrateInfo,
              url: videoObj.playAddr || "",
              desc: parsedData.desc,
              ratio: videoObj.ratio || videoObj.definition,
              cover: videoObj.cover || videoObj.originCover || "",
              id: parsedData.id
            }, resolvedTitle));
          case 4:
            step.p = 4;
            return step.a(2, []);
        }
      }, universalGenerator, null, [[0, 4]]);
    }));
  }

  function resolveTikTokVideoFromNode(videoNode) {
    return asyncRunner2(this, void 0, void 0, w().m(function resolveGenerator() {
      var itemRoot, previewTitle, awemeData, resolvedTitle, parsedBitrates, currentVid;
      return w().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            itemRoot = findTikTokItemRoot(videoNode);
            if (itemRoot || isTikTokExplorePage() || isTikTokUserPage()) {
              step.n = 1;
              break;
            }
            return step.a(2, []);
          case 1:
            previewTitle = scrapeTikTokAnchorPreviewMeta(itemRoot || videoNode)?.title;
            if (videoNode.hasAttribute("data-aweme-video") || itemRoot?.hasAttribute("data-aweme-video")) {
              step.n = 2;
              break;
            }
            step.n = 2;
            return injectTikTokMainWorldScript();
          case 2:
            awemeData = getAwemeVideoData(videoNode, findTikTokItemRoot);
            resolvedTitle = previewTitle || sanitizeVideoTitle(awemeData?.desc) ||
              getTikTokPostItemTitle(videoNode) || document.title;
            if (!awemeData) {
              step.n = 4;
              break;
            }
            step.n = 3;
            return formatBitratesOrPlayAddr(awemeData, resolvedTitle || document.title);
          case 3:
            parsedBitrates = step.v;
            if (!parsedBitrates.length) {
              step.n = 4;
              break;
            }
            return step.a(2, parsedBitrates);
          case 4:
            currentVid = getTikTokItemId(videoNode);
            if (!currentVid || currentVid !== getCurrentTikTokVideoId()) {
              step.n = 5;
              break;
            }
            return step.a(2, scrapeUniversalDataById(currentVid, resolvedTitle || document.title));
          case 5:
            return step.a(2, []);
        }
      }, resolveGenerator);
    }));
  }

  var lazyBulkDownloadProvider = {
    isActive: () => isTikTokExplorePage() || isTikTokUserPage(),
    collectPendingItems: () => {
      var seenIds = new Set();
      var items = [];
      var addItem = (item, explicitId) => {
        if (item) {
          var idStr = explicitId || String(item.id);
          if (idStr && !seenIds.has(idStr)) {
            seenIds.add(idStr);
            items.push(Object.assign(Object.assign({}, item), { id: idStr }));
          }
        }
      };
      if (isTikTokUserPage()) {
        addItem(scrapeCurrentVideoFromDoc(), getCurrentTikTokVideoId());
      }
      findTikTokVideoLinks().forEach((anchorElem, idx) => {
        var preview = scrapeTikTokAnchorPreviewMeta(anchorElem);
        addItem(preview, getTikTokItemId(anchorElem) || String(preview?.id || "video-" + idx));
      });
      return items;
    },
    findItemRoot: node => findTikTokItemRoot(node),
    getItemIdFromNode: node => getTikTokItemId(node),
    getPreviewFromNode: node => scrapeTikTokAnchorPreviewMeta(node),
    resolveItemById: videoId => function(id) {
      return asyncRunner2(this, void 0, void 0, w().m(function resolveByIdGenerator() {
        var mainVid, parsedMedia, anchorElem;
        return w().w(function(step) {
          for (;;) switch (step.n) {
            case 0:
              if (id !== getCurrentTikTokVideoId()) {
                step.n = 3;
                break;
              }
              mainVid = findTikTokMainVideo();
              if (!mainVid) {
                step.n = 2;
                break;
              }
              step.n = 1;
              return resolveTikTokVideoFromNode(mainVid);
            case 1:
              parsedMedia = step.v;
              if (!parsedMedia.length) {
                step.n = 2;
                break;
              }
              return step.a(2, parsedMedia);
            case 2:
              return step.a(2, scrapeUniversalDataById(id, scrapeCurrentVideoFromDoc()?.title || document.title));
            case 3:
              anchorElem = findTikTokVideoLinks().find(a => getTikTokItemId(a) === id);
              if (!anchorElem) {
                step.n = 4;
                break;
              }
              return step.a(2, []);
            case 4:
              return step.a(2, resolveTikTokVideoFromNode(anchorElem));
          }
        }, resolveByIdGenerator);
      }));
    }(videoId),
    resolveItemFromNode: node => resolveTikTokVideoFromNode(node)
  };

  function createDouyinForOfIteratorHelper(iterable, allowArrayLike) {
    return createForOfIteratorHelper(iterable, allowArrayLike);
  }

  function unsupportedDouyinIterableToArray(arrayLike, maxLen) {
    return unsupportedIterableToArray(arrayLike, maxLen);
  }

  function V() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var s = n && n.prototype instanceof c ? n : c, l = Object.create(s.prototype);
      return $(l, "_invoke", function(r, n, i) {
        var o, s, u, c = 0, l = i || [], f = !1, d = {
          p: 0,
          n: 0,
          v: t,
          a: h,
          f: h.bind(t, 4),
          d: function(e, r) {
            return o = e, s = 0, u = t, d.n = r, a;
          }
        };
        function h(r, n) {
          for (s = r, u = n, e = 0; !f && c && !i && e < l.length; e++) {
            var i, o = l[e], h = d.p, p = o[2];
            r > 3 ? (i = p === n) && (u = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) :
              o[0] <= h && ((i = r < 2 && h < o[1]) ? (s = 0, d.v = n, d.n = o[1]) :
              h < p && (i = r < 3 || o[0] > n || n > p) && (o[4] = r, o[5] = n, d.n = p, s = 0));
          }
          if (i || r > 1) return a;
          throw f = !0, n;
        }
        return function(i, l, p) {
          if (c > 1) throw TypeError("Generator is already running");
          for (f && 1 === l && h(l, p), s = l, u = p; (e = s < 2 ? t : u) || !f;) {
            o || (s ? s < 3 ? (s > 1 && (d.n = -1), h(s, u)) : d.n = u : d.v = u);
            try {
              if (c = 2, o) {
                if (s || (i = "next"), e = o[i]) {
                  if (!(e = e.call(o, u))) throw TypeError("iterator result is not an object");
                  if (!e.done) return e;
                  u = e.value, s < 2 && (s = 0);
                } else 1 === s && (e = o.return) && e.call(o), s < 2 && (u = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                o = t;
              } else if ((e = (f = d.n < 0) ? u : r.call(n, d)) !== a) break;
            } catch (e) {
              o = t, s = 1, u = e;
            } finally {
              c = 1;
            }
          }
          return { value: e, done: f };
        };
      }(r, i, o), !0), l;
    }
    var a = {};
    function c() {}
    function l() {}
    function f() {}
    e = Object.getPrototypeOf;
    var d = [][n] ? e(e([][n]())) : ($(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = c.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, $(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, $(h, "constructor", f), $(f, "constructor", l), l.displayName = "GeneratorFunction",
      $(f, i, "GeneratorFunction"), $(h), $(h, i, "Generator"), $(h, n, (function() { return this; })),
      $(h, "toString", (function() { return "[object Generator]"; })),
      (V=function(){return{w:o,m:p}})()}

  function $(context, args, extra, generatorFn) {
    return new Promise(function(resolve, reject) {
      var gen = generatorFn.apply(context, args || []);
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(function(val) {
            step("next", val);
          }, function(err) {
            step("throw", err);
          });
        }
      }
      step("next");
    });
  }

  var asyncRunner3 = $;

  function extractTikTokVideoPostTitle(videoElement) {
    for (
      var currentElem = videoElement;
      currentElem != null && cryptoUtils.queryAll("video", currentElem).length < 2;
    ) {
      var descElem = cryptoUtils.query('div[data-e2e$="video-desc"]', currentElem);
      if (descElem?.innerText) return descElem.innerText;
      currentElem = currentElem.parentNode;
    }
    var playerWrapper = videoElement?.closest?.(
      'div[class*="DivVideoPlayerContainer"], div[class*="DivPlayerContainer"], div[class*="DivContainer"]'
    );
    var imgAlt = playerWrapper?.querySelector?.("img")?.alt;
    if (typeof imgAlt === "string") return imgAlt;
    var browserMode = videoElement?.closest?.('div[class*="DivBrowserModeContainer"]');
    var mainDesc = browserMode?.querySelector?.('div[class*="DivMainContent"] div[class*="DivWrapper"]')?.innerText;
    if (mainDesc) return mainDesc;
    var playerContainer = videoElement?.closest?.('div[class*="DivPlayerContainer"]');
    var videoInfoDesc = playerContainer?.querySelector?.(
      'div[class*="DivVideoInfoContainer"] div[class*="DivWrapper"]'
    )?.innerText;
    if (videoInfoDesc) return videoInfoDesc;
    var linkMatch = (videoElement?.closest?.('a[class*="AVideoContainer"]') || location).href.match(
      /((?<=@).+)\/video\/(\d+)/
    );
    return linkMatch?.[1] && linkMatch?.[2] ? `${linkMatch[1]}_${linkMatch[2]}` : null;
  }

  function sanitizeDouyinTitle(rawTitle) {
    if (!rawTitle) return "";
    try {
      return rawTitle.replace(/#\S+/gi, "").replace(/\s+/g, " ").trim();
    } catch (err) {
      return rawTitle;
    }
  }

  function extractDouyinPageTitle(element) {
    var feedItem = element?.closest?.('[data-e2e="feed-item"]');
    var videoInfo = feedItem?.querySelector?.('[data-e2e="video-info"]');
    var nickname = videoInfo?.querySelector?.('[data-e2e="feed-video-nickname"]')?.innerText?.trim();
    var videoDesc = videoInfo?.querySelector?.('[data-e2e="video-desc"]')?.innerText?.trim();
    if (videoDesc && videoDesc.length) return videoDesc;
    if (nickname && nickname.length) return nickname;
    var rightContainerH1 = element?.closest?.("#douyin-right-container")?.querySelector?.("h1")?.innerText?.trim();
    return rightContainerH1 || null;
  }

  function parseDouyinAwemeInfoAttribute(element) {
    try {
      var awemeContainer = element.closest("[data-aweme-info]");
      if (!awemeContainer) throw new Error("NO_VIDEO_INFO");
      var awemeData = JSON.parse(awemeContainer.getAttribute("data-aweme-info") || "null");
      if (!awemeData?.video) throw new Error("NO_VIDEO_PROP");
      awemeContainer.removeAttribute("data-aweme-info");
      var videoRatio = awemeData.video?.ratio;
      var videoDesc = awemeData.desc;
      var videoObj = awemeData.video;
      var playApi = videoObj.playApi;
      var playAddr = videoObj.playAddr;
      var videoModel = videoObj.videoModel;
      var bitRateList = videoObj.bitRateList;
      var bitRateAudioList = videoObj.bitRateAudioList;
      var resolvedTitle = videoDesc || extractDouyinPageTitle(element) || document.title;
      if (videoModel) {
        var dynamicVideo = videoModel.dynamicVideo;
        if (dynamicVideo) {
          var audioList = dynamicVideo.dynamic_audio_list;
          var videoList = dynamicVideo.dynamic_video_list;
          if (videoList?.length) {
            return videoList.map(function(item) {
              var formattedItem = urlUtils.f(item.main_url);
              if (audioList?.[0]?.main_url) {
                formattedItem.url = {
                  audioUrl: audioList[0].main_url,
                  videoUrl: item.main_url
                };
              }
              var resolution = item.definition || item.video_meta?.definition;
              formattedItem.resolution = resolution;
              formattedItem.quality = mediaConstants.r[resolution]?.label;
              formattedItem.i18n_quality = cryptoUtils.i18n(mediaConstants.r[resolution]?.i18n_label);
              formattedItem.type = "video";
              formattedItem.ext = "mp4";
              formattedItem.exts = ["mp4"];
              formattedItem.filename = resolvedTitle || formattedItem.filename;
              return formattedItem;
            });
          }
        }
      }
      if (bitRateList) {
        var parsedList = bitRateList.map(function(bitrateItem) {
          var matchedAudio = bitRateAudioList?.find(function(audio) {
            return audio.fileId === bitrateItem.audioFileId;
          });
          var audioSrc = matchedAudio?.urlList?.[0]?.src;
          var videoPlaySrc = bitrateItem.playApi || bitrateItem.playAddr?.[0]?.src;
          var mediaTarget = audioSrc ? {
            audioUrl: audioSrc,
            videoUrl: videoPlaySrc
          } : videoPlaySrc;
          var formattedMedia = urlUtils.f(mediaTarget);
          formattedMedia.filename = resolvedTitle;
          formattedMedia.type = "video";
          formattedMedia.ext = bitrateItem.format;
          formattedMedia.exts = ["mp4"];
          var gearMatch = bitrateItem.gearName?.match(/\d{3,4}/)?.[0];
          if (gearMatch) {
            formattedMedia.resolution = gearMatch + "p";
            formattedMedia.quality = mediaConstants.r[formattedMedia.resolution]?.label;
          }
          formattedMedia.type = "video";
          return formattedMedia;
        });
        if (parsedList?.length) return parsedList;
      }
      return playApi ?
        [formatDouyinStreamMediaItem(playApi, videoRatio, element)] :
        playAddr ?
          playAddr.map(function(addr) { return formatDouyinStreamMediaItem(addr.src, videoRatio, element); }) :
          [];
    } catch (parseErr) {
      return [];
    }
  }

  function formatDouyinStreamMediaItem(streamUrl, definitionLabel, contextElement) {
    var rawUrl = streamUrl.startsWith("//") ? "https:" + streamUrl : streamUrl;
    var mediaItem = urlUtils.f(rawUrl);
    mediaItem.type = "video";
    mediaItem.resolution = definitionLabel;
    mediaItem.quality = mediaConstants.r[definitionLabel]?.label;
    mediaItem.i18n_quality = cryptoUtils.i18n(mediaConstants.r[definitionLabel]?.i18n_label);
    mediaItem.filename = extractDouyinPageTitle(contextElement) || document.title || mediaItem.filename;
    if (!mediaItem.ext?.length) {
      mediaItem.ext = "mp4";
      mediaItem.exts = ["mp4"];
    }
    return mediaItem;
  }

  var douyinVideoUrl = null;
  var douyinAudioUrl = null;
  var lastPlayingVideoSrc = null;
  var activePipVideoElement = null;
  var cachedColumnListBgColor = null;
  var douyinVideoTitleCache = {};
  var douyinItemApiCache = {};
  var douyinInFlightInjectMap = {};
  var photoVideoImageCache = new WeakMap();

  var isDouyinLiveSliderCard = function(videoNode) {
    if (!videoNode) return false;
    var sliderCard = videoNode.closest("#slider-card");
    return Boolean(sliderCard && sliderCard.querySelector('a[data-e2e="live-slider"]'));
  };

  var fetchTikTokItemDetail = function(itemId) {
    return asyncRunner3(void 0, void 0, void 0, V().m(function fetchItemGenerator() {
      var apiUrl, responseData, playAddr;
      return V().w(function(step) {
        for (;;) switch (step.p = step.n) {
          case 0:
            step.p = 0;
            if (itemId) {
              step.n = 1;
              break;
            }
            return step.a(2);
          case 1:
            step.n = 2;
            return fetch("https://www.tiktok.com/api/item/detail/?itemId=" + itemId);
          case 2:
            responseData = step.v;
            step.n = 3;
            return responseData.json();
          case 3:
            playAddr = step.v?.itemInfo?.itemStruct?.video?.playAddr;
            return step.a(2, playAddr);
          case 4:
            step.p = 4;
            return step.a(2);
        }
      }, fetchItemGenerator, null, [[0, 4]]);
    }));
  };

  var extractXgPlayerId = function(nodeElement) {
    var xgWrapper = nodeElement?.closest?.('.xgplayer-container, [id^="xgwrapper"]');
    return xgWrapper?.id?.split("-")?.at(-1);
  };

  var douyinResolvedCache = {};
  var douyinParsedMediaCache = {};

  var resolveDouyinMediaFromVideoNode = function(videoElement) {
    return asyncRunner3(void 0, void 0, void 0, V().m(function douyinVideoResolver() {
      var e2eVid, classVidList, matchedClass, videoId, cachedParsed, parsedAwemeList, cachedResolved;
      return V().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            e2eVid = videoElement.closest("[data-e2e-vid]")?.getAttribute("data-e2e-vid");
            classVidList = Array.from(videoElement.closest(".basePlayerContainer")?.classList || []);
            matchedClass = classVidList.find(function(cls) { return /video_\d+/.test(cls); });
            videoId = e2eVid || matchedClass?.split("_")?.[1] || "";
            cachedParsed = douyinParsedMediaCache[videoId];
            if (!cachedParsed?.length) {
              step.n = 1;
              break;
            }
            return step.a(2, cachedParsed);
          case 1:
            videoElement.setAttribute("data-target", "");
            if (!douyinInFlightInjectMap.hasOwnProperty("douyin-" + videoId)) {
              douyinInFlightInjectMap["douyin-" + videoId] = Promise.race([
                cryptoUtils.sendMessage({ type: mediaConstants.b.SCRIPTING.INJECT, file: "douyin" }),
                cryptoUtils.sleep(1000)
              ]);
            }
            step.n = 2;
            return douyinInFlightInjectMap["douyin-" + videoId];
          case 2:
            delete douyinInFlightInjectMap["douyin-" + videoId];
            videoElement.removeAttribute("data-target");
            parsedAwemeList = parseDouyinAwemeInfoAttribute(videoElement);
            if (!parsedAwemeList.length) {
              step.n = 3;
              break;
            }
            douyinParsedMediaCache[videoId] = parsedAwemeList;
            return step.a(2, parsedAwemeList);
          case 3:
            cachedResolved = douyinResolvedCache[videoId];
            if (!cachedResolved) {
              step.n = 4;
              break;
            }
            return step.a(2, cachedResolved.url);
          case 4:
            if (!douyinAudioUrl || !douyinVideoUrl) {
              step.n = 5;
              break;
            }
            return step.a(2, { videoUrl: douyinVideoUrl, audioUrl: douyinAudioUrl });
          case 5:
            return step.a(2, []);
        }
      }, douyinVideoResolver);
    }));
  };

  var tiktokDouyinProvider = {
    lazyBulkDownload: lazyBulkDownloadProvider,
    getDomains: function() {
      return ["tiktok.com", "douyin.com"];
    },
    getCustomParent: function(element) {
      if (location.href.includes("/live")) {
        var liveParent = element.closest('[data-e2e="live-room-content"]') || element.closest(".xgplayer")?.parentElement?.parentElement;
        if (liveParent) return liveParent;
      }
      return element.matches("[savior-scanned-img]") ? null :
        element.closest('[data-e2e="feed-item"]') ||
        element.closest('[data-e2e="feed-video"]') ||
        element.closest(".basePlayerContainer") ||
        element.closest(".parent-route-container.route-scroll-container") ||
        element.closest('[data-e2e="explore-item"]') ||
        element.closest('[class*="-AVideoContainer"]') ||
        element.closest('[class*="-DivLiveContentContainer"]')?.querySelector('[class*="-DivFeedCard"]') ||
        element.closest('.xgplayer, [role="video-container"]') ||
        element.closest('[data-e2e="recommend-list-item-container"], [data-e2e="user-post-item"], [data-e2e="browse-video"], [class*="DivBasicPlayerWrapper"], [class*="DivVideoWrapper"], [class*="DivPlayerContainer"], [class*="DivContainer"], [class*="VideoContainer"]') ||
        element.parentElement;
    },
    getImageNode: function(element) {
      var photoContainer = element?.closest?.('div[class*="DivPhotoVideoContainer"]') || null;
      if (photoContainer) {
        var activeImg = photoContainer.querySelector(".swiper-slide-duplicate-active>img");
        if (activeImg?.src && photoVideoImageCache.get(photoContainer) !== activeImg.src) {
          photoVideoImageCache.set(photoContainer, activeImg.src);
          EE.emit("widget.forceUpdate");
        }
      }
      return photoContainer;
    },
    shouldShowWidgetForImage: function() {
      return true;
    },
    shouldWidgetAttachToParentNode: function(element, widgetRect) {
      return Boolean(widgetRect && widgetRect.top <= 10);
    },
    processRequestIds: location.host.match(/(www.)?douyin.com/i) ? function(requestItem) {
      if (!requestItem.ext) return false;
      var targetUrl = requestItem.url;
      var vidMatch = targetUrl.match(/vid=(\d+)/i);
      var videoId = vidMatch?.[1];
      if (videoId && !douyinResolvedCache[videoId]) {
        douyinResolvedCache[videoId] = requestItem;
      }
      if (targetUrl.includes("/media-video-hvc1/")) {
        douyinVideoUrl = targetUrl;
      } else if (targetUrl.includes("/media-audio-und-mp4a/")) {
        douyinAudioUrl = targetUrl;
      }
      return true;
    } : function(requestItem) {
      var parsedUrl;
      try {
        parsedUrl = new URL(requestItem.url);
      } catch (_) {
        return false;
      }
      var videoId = parsedUrl.pathname.match(/\/video\/tos\/.*\/(\w+)/i)?.[1];
      if (videoId && !douyinResolvedCache[videoId]) {
        douyinResolvedCache[videoId] = requestItem;
      }
      var pageVidMatch = location.pathname.match(/\/video\/(\d+)/i);
      if (pageVidMatch && pageVidMatch[1] && !douyinResolvedCache[pageVidMatch[1]]) {
        douyinResolvedCache[pageVidMatch[1]] = requestItem;
      }
      return true;
    },
    isValidVideoNode: element => {
      var parentEl1, parentEl2;
      return Boolean("VIDEO" === element.nodeName || "VIDEO" === element.tagName ||
        window.location.host.match(/^(www\.)?(tiktok|douyin)\.com$/i) ||
        null !== (parentEl1 = element.parentElement) && void 0 !== parentEl1 && parentEl1.matches(".xgplayer") ||
        null !== (parentEl2 = element.parentElement) && void 0 !== parentEl2 && parentEl2.id && element.parentElement.id.match(/^xgwrapper/) ||
        element.matches("xg-video-container") ||
        element.closest("xg-video-container"));
    },
    forceUpdate: function() {
      var mainVideo = document.querySelector("video");
      var currentSrc = mainVideo?.src || mainVideo?.querySelector("source")?.src;
      if (currentSrc && lastPlayingVideoSrc !== currentSrc) {
        lastPlayingVideoSrc = currentSrc;
        douyinAudioUrl = null;
        douyinVideoUrl = null;
      }
      if (document.pictureInPictureElement && (!activePipVideoElement || activePipVideoElement?.paused)) {
        var activeVideo = Array.from(document.querySelectorAll("video")).find(function(vid) {
          return !vid.paused && !vid.ended && vid.readyState > 2;
        });
        if (activeVideo && activeVideo !== activePipVideoElement) {
          activePipVideoElement = activeVideo;
          var activeSrc = activeVideo.src || activeVideo.querySelector("source")?.src;
          var pipSrc = document.pictureInPictureElement?.src || document.pictureInPictureElement.querySelector("source")?.src;
          if (pipSrc && pipSrc !== activeSrc) {
            document.exitPictureInPicture();
          }
        }
      }
    },
    parse: {
      sources: [
        {
          checkSource: function(sourceItem) {
            return "image" === sourceItem.type;
          },
          parse: function(context) {
            var mediaItem = context.media;
            return asyncRunner3(void 0, void 0, void 0, V().m(function imageParseGenerator() {
              return V().w(function(step) {
                for (;;) switch (step.n) {
                  case 0:
                    return step.a(2, [mediaItem]);
                }
              }, imageParseGenerator);
            }));
          }
        }
      ],
      default: function(parseContext) {
        var mediaObj = parseContext.media;
        var rawResponse = parseContext.response;
        return asyncRunner3(void 0, void 0, void 0, V().m(function defaultParseGenerator() {
          var targetMedia, htmlParser, parsedDoc, rawSigiState, sigiJsonStr, sigiState, matchedItemModule;
          var singleParsedMedia, sigiVideoMeta, renderDataText, renderJson, matchedKey, firstDisplay, videoFormat;
          var videoTitleClean, playInfoList, targetEntry;
          return V().w(function(step) {
            for (;;) switch (step.n) {
              case 0:
                if (!Array.isArray(rawResponse)) {
                  step.n = 1;
                  break;
                }
                return step.a(2, rawResponse);
              case 1:
                if ("object" != typeof mediaObj.url) {
                  step.n = 2;
                  break;
                }
                return step.a(2, [mediaObj]);
              case 2:
                targetMedia = mediaObj;
                if (targetMedia.url?.startsWith("blob:")) {
                  targetMedia.ext = "";
                  targetMedia.exts = [];
                }
                if ("mp4" == targetMedia.ext) {
                  step.n = 4;
                  break;
                }
                htmlParser = new DOMParser();
                parsedDoc = htmlParser.parseFromString(rawResponse, "text/html");
                if (!rawResponse) parsedDoc = document;
                rawSigiState = cryptoUtils.query("#sigi-persisted-data, #SIGI_STATE", parsedDoc)?.innerText;
                if (!rawSigiState) {
                  step.n = 3;
                  break;
                }
                sigiJsonStr = rawSigiState.slice(rawSigiState.indexOf("{"), rawSigiState.indexOf("};") + 1);
                try {
                  sigiState = JSON.parse(sigiJsonStr);
                } catch (parseErr) {
                  sigiState = JSON.parse(rawSigiState);
                }
                matchedItemModule = targetMedia.originVideoId ? sigiState?.ItemModule?.[targetMedia.originVideoId] :
                  sigiState?.ItemModule?.[sigiState?.ItemList?.f?.list?.[0] || sigiState?.ItemList?.foryou?.list?.[0] || sigiState?.ItemList?.video?.list?.[0]];
                if (matchedItemModule) {
                  singleParsedMedia = urlUtils.f(matchedItemModule.video.playAddr);
                  singleParsedMedia.filename = matchedItemModule.desc;
                  singleParsedMedia.ext = "mp4";
                  singleParsedMedia.exts = ["mp4"];
                  singleParsedMedia.type = "video";
                  singleParsedMedia.resolution = matchedItemModule.video.ratio;
                  singleParsedMedia.quality = mediaConstants.r[matchedItemModule.video.ratio]?.label;
                  try {
                    singleParsedMedia.i18n_quality = cryptoUtils.i18n(mediaConstants.r[matchedItemModule.video.ratio]?.i18n_label);
                  } catch (i18nErr) {}
                  targetMedia = Object.assign(Object.assign({}, targetMedia), singleParsedMedia);
                } else if (targetMedia.originVideoId) {
                  targetMedia = Object.assign(Object.assign({}, targetMedia), douyinResolvedCache[targetMedia.originVideoId]);
                }
                step.n = 4;
                break;
              case 3:
                renderDataText = cryptoUtils.query("#RENDER_DATA", document)?.innerText || "";
                try {
                  renderJson = JSON.parse(decodeURIComponent(renderDataText));
                } catch (decodeErr) {
                  renderJson = null;
                }
                matchedKey = Object.keys(renderJson || {}).find(function(keyName) {
                  var resObj = renderJson[keyName]?.playRes || renderJson[keyName];
                  return resObj?.awemeData?.aweme?.detail;
                });
                firstDisplay = (renderJson[matchedKey].playRes || renderJson[matchedKey]).firstDisplayData;
                videoFormat = firstDisplay.videoFormat;
                videoTitleClean = firstDisplay.videoCurrentPeriod + " - " + firstDisplay.videoTitle;
                playInfoList = firstDisplay.videoPlayInfo.map(function(playItem) {
                  var mediaNode = urlUtils.f(playItem.main);
                  var def = playItem.definition;
                  var qualLabel = mediaConstants.r[def]?.label || mediaConstants.r[playItem.height + "p"]?.label || mediaConstants.r["480p"].label;
                  return Object.assign(Object.assign({}, mediaNode), {
                    ext: videoFormat,
                    exts: [videoFormat],
                    filename: videoTitleClean,
                    type: "video",
                    resolution: def,
                    quality: qualLabel
                  });
                });
                return step.a(2, playInfoList);
              case 4:
                if (targetMedia.filename?.includes?.("_media_")) {
                  targetMedia.filename = douyinVideoTitleCache[targetMedia.url] || targetMedia.filename;
                }
                if (!targetMedia.filename || !targetMedia.filename.length) {
                  targetMedia.filename = document.title;
                }
                var cleanEmojiFilename = targetMedia.filename.replace(
                  new RegExp([
                    "(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u23CF\\u23E9-\\u23F3\\u",
                    "23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614\\u2615\\u2618\\u2",
                    "61D\\u2620\\u2622\\u2623\\u2626\\u262A\\u262E\\u262F\\u2638-\\u263A\\u2640\\u2642\\u2648-\\u2653\\u265F\\u2660\\u266",
                    "3\\u2665\\u2666\\u2668\\u267B\\u267E\\u267F\\u2692-\\u2697\\u2699\\u269B\\u269C\\u26A0\\u26A1\\u26A7\\u26AA\\u26AB\\u",
                    "26B0\\u26B1\\u26BD\\u26BE\\u26C4\\u26C5\\u26C8\\u26CE\\u26CF\\u26D1\\u26D3\\u26D4\\u26E9\\u26EA\\u26F0-\\u26F5\\u26F",
                    "7-\\u26FA\\u26FD\\u2702\\u2705\\u2708-\\u270D\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\",
                    "u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763\\u2764\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u",
                    "2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC04\\uDC2C-\\uDC2F\\uDC94-\\uDC9F\\uDCAF\\",
                    "uDCB0\\uDCC0\\uDCCF\\uDCD0\\uDCF6-\\uDCFF\\uDD70\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAF-\\uDDFF\\uDE01-\\",
                    "uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDE5F\\uDE66-\\uDF21\\uDF24-\\uDF93\\uDF96\\uDF97\\uDF99",
                    "-\\uDF9B\\uDF9E-\\uDFF0\\uDFF3-\\uDFF5\\uDFF8-\\uDFFF]|\\uD83D[\\uDC00-\\uDCFD]|\\uD83C[\\uDFF7-\\uDFFA]|\\uD83D[\\",
                    "uDCFF-\\uDD3D\\uDD49-\\uDD4E\\uDD50-\\uDD67\\uDD6F\\uDD70\\uDD73-\\uDD7A\\uDD87\\uDD8A-\\uDD8D\\uDD90\\uDD95\\uDD96",
                    "\\uDDA4\\uDDA5\\uDDA8\\uDDB1\\uDDB2\\uDDBC\\uDDC2-\\uDDC4\\uDDD1-\\uDDD3\\uDDDC-\\uDDDE\\uDDE1\\uDDE3\\uDDE8\\uDDEF\\",
                    "uDDF3\\uDDFA-\\uDE4F\\uDE80-\\uDEC5\\uDECB-\\uDED2\\uDED5-\\uDEE5\\uDEE9\\uDEEB-\\uDEF0\\uDEF3-\\uDEFF\\uDFDC-\\uDF",
                    "F0]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE\\uDCAF\\uDCBC-\\uDCBF\\uDCC2-\\uDCC",
                    "F\\uDCD9-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDDFF\\uDE58-\\uDE5F\\uDE6E-\\uDEFF]|\\uD83F[\\uDC00-\\uDFF",
                    "D])"
                  ].join(""), "g"),
                  ""
                );
                if (0 === cleanEmojiFilename.length) {
                  targetMedia.filename = document.title;
                }
                if (!targetMedia.originVideoId) {
                  var matchedApiEntry = Object.entries(douyinItemApiCache).find(function(entry) {
                    return entry[1] === targetMedia.url;
                  });
                  var matchedResolvedEntry = Object.entries(douyinResolvedCache).find(function(entry) {
                    return entry[1].url === targetMedia.url;
                  });
                  targetMedia.originVideoId = matchedApiEntry?.[0] || matchedResolvedEntry?.[0];
                }
                if (!targetMedia.originVideoId) {
                  step.n = 5;
                  break;
                }
                var mediaList = [];
                if (targetMedia.ext) mediaList.push(targetMedia);
                if (!mediaList.length) {
                  step.n = 5;
                  break;
                }
                return step.a(2, mediaList);
              case 5:
                return step.a(2, [targetMedia]);
            }
          }, defaultParseGenerator);
        }));
      }
    },
    onBehaviorBined: function(bindContext) {
      var parentElement, nodeElement;
      if ((parentElement = bindContext?.parent?.$parent)?.matches?.(":hover") ||
          (nodeElement = bindContext?.parent?.$node)?.matches?.(":hover")) {
        bindContext.onFocused();
      }
    },
    imageUrls: [
      {
        checkUrl: function(item) {
          return domHelper.l(item.node.querySelector(".swiper-slide-duplicate-active>img"));
        },
        getUrl: function(item) {
          var nodeElement = item.node;
          return asyncRunner3(void 0, void 0, void 0, V().m(function imageListGenerator() {
            var activeImg, allImgs, imgSet, mediaResult, urlList;
            return V().w(function(step) {
              for (;;) switch (step.n) {
                case 0:
                  activeImg = nodeElement.querySelector(".swiper-slide-duplicate-active>img");
                  if (activeImg) {
                    step.n = 1;
                    break;
                  }
                  return step.a(2, []);
                case 1:
                  allImgs = nodeElement.querySelectorAll(".swiper-slide>img");
                  imgSet = new Set();
                  allImgs.forEach(function(img) {
                    imgSet.add(img.src);
                  });
                  step.n = 2;
                  return urlUtils.g({ url: activeImg.src, node: activeImg });
                case 2:
                  mediaResult = step.v;
                  if (imgSet.size >= 2) {
                    urlList = Array.from(imgSet);
                    mediaResult.extraImages = {
                      urls: urlList,
                      firstImage: urlList[0],
                      secondImage: urlList[1],
                      label: cryptoUtils.i18n("download_all_images", [String(urlList.length)]),
                      numberOfImages: urlList.length
                    };
                  }
                  return step.a(2, [mediaResult]);
              }
            }, imageListGenerator);
          }));
        }
      },
      {
        checkUrl: function(item) {
          return Boolean(getTikTokAnchorElement(item.node));
        },
        getUrl: function(item) {
          var meta = scrapeTikTokAnchorPreviewMeta(item.node);
          return (meta && meta.url && meta.url !== location.href && !meta.url.startsWith("blob:")) ? [{
            id: meta.id,
            url: meta.url,
            type: meta.type || "video",
            ext: meta.ext || "mp4",
            exts: meta.exts || ["mp4"],
            filename: meta.title,
            title: meta.title,
            thumbnail: meta.thumbnail
          }] : [];
        }
      }
    ],
    urls: [
      {
        checkUrl: function(item) {
          return Boolean(item.node.closest('[data-e2e="live-player"]')) || isDouyinLiveSliderCard(item.node);
        },
        getUrl: function() {
          return [];
        }
      },
      {
        checkUrl: function(item) {
          return Boolean(item.node.src?.match(/live\.douyin\.com/i)) || isDouyinLiveSliderCard(item.node);
        },
        getUrl: function() {
          return [];
        }
      },
      {
        checkUrl: function(item) {
          return "IFRAME" === item.node.tagName && (Boolean(item.node.hidden) || "none" === item.node.style.display || /captcha/i.test(item.url));
        },
        getUrl: function() {
          return [];
        }
      },
      {
        checkUrl: function(item) {
          return item.url.includes("douyin.com") && item.url.startsWith("blob");
        },
        getUrl: function(item) {
          return resolveDouyinMediaFromVideoNode(item.node);
        },
        mediaObjectChange: function(changeItem) {
          var mediaObj = changeItem.mediaObject;
          var videoNode = changeItem.node;
          var vidAttr = videoNode.closest("[data-e2e-vid]")?.getAttribute("data-e2e-vid");
          var vidClass = Array.from(videoNode.closest(".basePlayerContainer")?.classList || []).find(function(cls) {
            return /video_\d+/.test(cls);
          });
          var resolvedKey = vidAttr || vidClass?.split("_")?.[1] || "";
          var cachedMedia = douyinResolvedCache[resolvedKey];
          mediaObj.ext = cachedMedia?.ext || "mp4";
          mediaObj.filename = extractDouyinPageTitle(videoNode) || mediaObj.filename;
          mediaObj.fixName = mediaObj.filename;
          if (!mediaObj.exts?.length) mediaObj.exts = [mediaObj.ext];
          return "video";
        }
      },
      {
        checkUrl: function(item) {
          return Boolean(item.node.querySelector('source[src*="douyin"]'));
        },
        getUrl: function(item) {
          return resolveDouyinMediaFromVideoNode(item.node);
        }
      },
      {
        checkUrl: () => /^(www\.)?tiktok\.com$/i.test(location.host),
        getUrl: function(urlItem) {
          var targetUrl = urlItem.url;
          var videoNode = urlItem.node;
          return asyncRunner3(void 0, void 0, void 0, V().m(function tiktokUrlResolver() {
            var xgPlayerId, anchorItem, postItemTitle, universalScope, videoDetailStruct;
            var videoTitle, videoMeta, parsedBitrates, singlePlayMedia, mainVideoNode, awemeData, awemeBitrates, singleAwemeMedia;
            return V().w(function(step) {
              for (;;) switch (step.p = step.n) {
                case 0:
                  step.n = 1;
                  return cryptoUtils.sleep(1000);
                case 1:
                  xgPlayerId = extractXgPlayerId(videoNode);
                  if (videoNode.isConnected) {
                    step.n = 2;
                    break;
                  }
                  return step.a(2, []);
                case 2:
                  anchorItem = videoNode.closest('div[data-e2e$="user-post-item"]')?.parentElement;
                  postItemTitle = Array.from(anchorItem ? anchorItem.querySelectorAll("a") : []).find(function(anchor) {
                    return Boolean(anchor.title);
                  })?.title;
                  step.p = 3;
                  try {
                    universalScope = JSON.parse(document.querySelector("#__UNIVERSAL_DATA_FOR_REHYDRATION__")?.innerText?.trim() || "{}")?.__DEFAULT_SCOPE__;
                  } catch (rehydrateErr) {
                    universalScope = null;
                  }
                  videoDetailStruct = universalScope?.["webapp.video-detail"]?.itemInfo?.itemStruct || {};
                  videoTitle = sanitizeVideoTitle(findTikTokItemRoot(videoNode)) || postItemTitle || document.title;
                  videoMeta = videoDetailStruct.video;
                  if ((extractXgPlayerId(videoNode) || location.pathname.match(/\/video\/(\d+)/i)?.[1]) == videoMeta?.id) {
                    step.n = 4;
                    break;
                  }
                  throw new Error("Not this one");
                case 4:
                  if (!videoMeta?.bitrateInfo?.length) {
                    step.n = 6;
                    break;
                  }
                  step.n = 5;
                  return parseTikTokMediaItems(videoMeta.bitrateInfo, videoTitle, videoMeta.bitrateAudioInfo || []);
                case 5:
                  parsedBitrates = step.v;
                  if (parsedBitrates?.length) return step.a(2, parsedBitrates);
                case 6:
                  singlePlayMedia = urlUtils.f(videoMeta.playAddr);
                  singlePlayMedia.resolution = videoMeta.ratio || videoMeta.definition;
                  singlePlayMedia.quality = mediaConstants.r[singlePlayMedia.resolution]?.label;
                  singlePlayMedia.filename = videoTitle;
                  return step.a(2, [singlePlayMedia]);
                case 7:
                  step.p = 7;
                  step.v;
                  mainVideoNode = findTikTokMainVideo(videoNode);
                  if (videoNode.hasAttribute("data-aweme-video") || mainVideoNode?.hasAttribute("data-aweme-video")) {
                    step.n = 8;
                    break;
                  }
                  step.n = 8;
                  return injectTikTokMainWorldScript();
                case 8:
                  step.p = 8;
                  awemeData = getAwemeVideoData(videoNode, findTikTokMainVideo);
                  if (!awemeData) {
                    step.n = 11;
                    break;
                  }
                  videoTitle = sanitizeVideoTitle(awemeData.desc) || sanitizeVideoTitle(findTikTokItemRoot(videoNode)) || postItemTitle || document.title;
                  if (!awemeData.bitrateInfo?.length) {
                    step.n = 10;
                    break;
                  }
                  step.n = 9;
                  return parseTikTokMediaItems(awemeData.bitrateInfo, videoTitle);
                case 9:
                  awemeBitrates = step.v;
                  if (awemeBitrates?.length) return step.a(2, awemeBitrates);
                case 10:
                  singleAwemeMedia = urlUtils.f(awemeData.url);
                  singleAwemeMedia.filename = videoTitle;
                  return step.a(2, [singleAwemeMedia]);
                case 11:
                  step.n = 13;
                  break;
                case 12:
                  step.p = 12;
                  step.v;
                case 13:
                  if (xgPlayerId) {
                    step.n = 14;
                    break;
                  }
                  if (typeof window !== "undefined" && window.__saviorSniffedMedia && window.__saviorSniffedMedia.length) {
                    var sniffed = window.__saviorSniffedMedia.find(function(m) {
                      return m && m.url && (m.url.includes("/video/tos/") || m.url.includes("mime_type=video_mp4"));
                    }) || window.__saviorSniffedMedia[window.__saviorSniffedMedia.length - 1];
                    if (sniffed && sniffed.url) {
                      var fallbackMedia = urlUtils.f(sniffed.url);
                      fallbackMedia.filename = sanitizeVideoTitle(findTikTokItemRoot(videoNode)) || document.title;
                      fallbackMedia.ext = "mp4";
                      fallbackMedia.exts = ["mp4"];
                      fallbackMedia.type = "video";
                      return step.a(2, [fallbackMedia]);
                    }
                  }
                  return step.a(2, []);
                case 14:
                  return step.a(2, targetUrl);
              }
            }, tiktokUrlResolver, null, [[8, 12], [3, 7]]);
          }));
        },
        mediaObjectChange: function(changeItem) {
          var mediaObj = changeItem.mediaObject;
          var videoNode = changeItem.node;
          return asyncRunner3(void 0, void 0, void 0, V().m(function tiktokMediaChangeGenerator() {
            var postItemContainer, postTitle, anchorElem, videoIdMatch, videoId, currentUrl, fetchedDetail;
            return V().w(function(step) {
              for (;;) switch (step.n) {
                case 0:
                  postItemContainer = videoNode.closest('div[data-e2e$="user-post-item"]')?.parentElement;
                  postTitle = Array.from(postItemContainer ? postItemContainer.querySelectorAll("a") : []).find(function(anchor) {
                    return Boolean(anchor.title);
                  })?.title;
                  mediaObj.filename = sanitizeVideoTitle(findTikTokItemRoot(videoNode)) || postTitle || mediaObj.filename;
                  anchorElem = getTikTokAnchorElement(videoNode);
                  videoIdMatch = (anchorElem?.href || videoNode.closest('a[href*="/video/"]')?.getAttribute("href") || "").match(/\/video\/(\d+)/);
                  videoId = extractXgPlayerId(videoNode) || videoIdMatch?.[1];
                  if (!videoId) {
                    step.n = 4;
                    break;
                  }
                  mediaObj.originVideoId = videoId;
                  currentUrl = mediaObj.url;
                  if (currentUrl && !currentUrl.match(/^blob:.*/) && currentUrl !== location.href) {
                    step.n = 4;
                    break;
                  }
                  if (douyinItemApiCache[videoId]) {
                    mediaObj.url = douyinItemApiCache[videoId];
                    step.n = 4;
                    break;
                  }
                  if (douyinResolvedCache[videoId]) {
                    mediaObj.url = douyinResolvedCache[videoId].url;
                    step.n = 4;
                    break;
                  }
                  if (anchorElem) {
                    step.n = 4;
                    break;
                  }
                  step.n = 3;
                  return fetchTikTokItemDetail(videoId);
                case 3:
                  fetchedDetail = step.v;
                  if (fetchedDetail) {
                    douyinItemApiCache[videoId] = fetchedDetail;
                    mediaObj.url = fetchedDetail;
                  }
                case 4:
                  if (mediaObj.url?.startsWith("blob:")) {
                    if (douyinResolvedCache[videoId]) {
                      mediaObj.url = douyinResolvedCache[videoId].url;
                    } else if (typeof window !== "undefined" && window.__saviorSniffedMedia?.length) {
                      var sniffed = window.__saviorSniffedMedia.find(function(m) {
                        return m && m.url && (m.url.includes("/video/tos/") || m.url.includes("mime_type=video_mp4"));
                      }) || window.__saviorSniffedMedia[window.__saviorSniffedMedia.length - 1];
                      if (sniffed?.url) {
                        mediaObj.url = sniffed.url;
                      }
                    }
                  }
                  mediaObj.ext = mediaObj.ext || "mp4";
                  mediaObj.exts = mediaObj.exts || ["mp4"];
                  mediaObj.type = "video";
                  return step.a(2, "video");
              }
            }, tiktokMediaChangeGenerator);
          }));
        }
      }
    ],
    default: {
      mediaObjectChange: function(changeContext) {
        var mediaObj = changeContext.mediaObject;
        var videoElement = changeContext.node;
        return asyncRunner3(void 0, void 0, void 0, V().m(function douyinDefaultChangeGenerator() {
          var postTitle, douyinTitle, containerNode, detailTitle;
          return V().w(function(step) {
            for (;;) switch (step.n) {
              case 0:
                postTitle = getTikTokPostItemTitle(videoElement);
                mediaObj.filename = sanitizeDouyinTitle(extractDouyinPageTitle(videoElement)) || postTitle || mediaObj.filename;
                if (window.location.host.includes("douyin.com")) {
                  containerNode = videoElement.closest(".xg-video-container");
                  detailTitle = containerNode?.parentElement?.querySelector(".video-info-detail .title span")?.innerText ||
                    containerNode?.closest(".player-fullscreen-show-interaction")?.parentElement?.nextSibling?.innerText?.replace("\n", "-");
                  mediaObj.filename = detailTitle || postTitle || extractDouyinVideoNickname(videoElement) || document.title;
                  douyinVideoTitleCache[mediaObj.url] = mediaObj.filename;
                }
                if (mediaObj.url?.includes?.("sites/standalone/helpcenter_pc")) {
                  return step.a(2, "live");
                }
                mediaObj.ext = "mp4";
                mediaObj.exts = ["mp4"];
                return step.a(2, "video");
            }
          }, douyinDefaultChangeGenerator);
        }));
      }
    },
    idsProcess: function(processContext) {
      var defaultIds = processContext.defaultIds;
      var itemIdentifier = processContext.id;
      var itemIndex = processContext.index;
      if (typeof itemIdentifier.size === "number" && itemIdentifier.size < 131072) {
        defaultIds.splice(itemIndex, 1);
      }
    },
    toggleLight: {
      turnOff: {
        parentUpdate: function(backdropElement, widgetContext) {
          if (location.host.match(/(www\.)?tiktok\.com/i) && !location.href.includes("/explore")) {
            var backdrop = widgetContext.$backdrop;
            backdrop.remove();
            var targetAnchor = document.querySelector("#column-list-container") ||
              document.querySelector('[role="dialog"]')?.firstElementChild?.children[1] ||
              document.querySelector(".relative")?.nextElementSibling ||
              document.querySelector('[data-e2e="live-content-container"]')?.firstElementChild;
            var parentElem = targetAnchor?.parentElement;
            if (parentElem) {
              parentElem.parentElement?.classList.remove("--savior-overlay-z-index-reset");
              parentElem.classList.add("--savior-overlay-z-index-top");
              targetAnchor?.classList.add("--savior-overlay-position-relative", "--savior-overlay-z-index-top");
              backdrop.style.top = "0px";
              backdrop.style.left = "0px";
              parentElem.prepend(backdrop);
            }
          }
        },
        updated: location.host.match(/(www\.)?douyin\.com/i) ? void 0 : function() {
          var columnListElem = document.querySelector("#column-list-container");
          if (columnListElem && window.getComputedStyle(columnListElem).backgroundColor !== "rgb(0, 0, 0)") {
            cachedColumnListBgColor = document.querySelector("#column-list-container").style.backgroundColor;
            document.querySelector("#column-list-container").style.backgroundColor = "#1a1a1a";
          }
          document.querySelector("#app")?.classList.add("--savior-overlay-z-index-reset");
          document.querySelectorAll('html, body, #app, [class*="-DivLiveContent"]').forEach(function(elem) {
            elem.classList.add("--savior-overlay-overflow-hidden");
          });
        }
      },
      turnOn: {
        updated: function() {
          var columnListElem = document.querySelector("#column-list-container");
          if (columnListElem && window.getComputedStyle(columnListElem).backgroundColor !== "rgb(0, 0, 0)") {
            document.querySelector("#column-list-container").style.backgroundColor = cachedColumnListBgColor;
          }
        }
      }
    },
    shouldDisablePip: function(videoNode, parentElement) {
      return Boolean(videoNode.closest('[data-e2e="recommend-card"], [data-e2e="explore-item"]'));
    },
    onFocused: location.host.match(/(www\.)?douyin\.com/i) ? function(widgetInstance) {
      setTimeout(function() {
        widgetInstance.updatePosition();
      }, 100);
    } : void 0
  };

  exports.default = tiktokDouyinProvider;
};
