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

  function regeneratorDefine(obj, key, val, enumerableFlag) {
    var defineProp = Object.defineProperty;
    try {
      defineProp({}, "", {});
    } catch (_) {
      defineProp = 0;
    }
    regeneratorDefine = function(target, prop, value, nonEnum) {
      function bindMethod(methodName, methodCode) {
        regeneratorDefine(target, methodName, function(arg) {
          return this._invoke(methodName, methodCode, arg);
        });
      }
      if (prop) {
        if (defineProp) {
          defineProp(target, prop, {
            value: value,
            enumerable: !nonEnum,
            configurable: !nonEnum,
            writable: !nonEnum
          });
        } else {
          target[prop] = value;
        }
      } else {
        bindMethod("next", 0);
        bindMethod("throw", 1);
        bindMethod("return", 2);
      }
    };
    regeneratorDefine(obj, key, val, enumerableFlag);
  }

  function c() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var s = n && n.prototype instanceof c ? n : c, l = Object.create(s.prototype);
      return regeneratorDefine(l, "_invoke", function(r, n, i) {
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
    var d = [][n] ? e(e([][n]())) : (regeneratorDefine(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = c.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, regeneratorDefine(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, regeneratorDefine(h, "constructor", f), regeneratorDefine(f, "constructor", l), l.displayName = "GeneratorFunction",
      regeneratorDefine(f, i, "GeneratorFunction"), regeneratorDefine(h), regeneratorDefine(h, i, "Generator"), regeneratorDefine(h, n, (function() { return this; })),
      regeneratorDefine(h, "toString", (function() { return "[object Generator]"; })),
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

  var awemeParsedCache = new WeakMap();
  function parseAwemeVideoAttribute(videoElement) {
    if (!videoElement) return null;
    var raw = videoElement.getAttribute && videoElement.getAttribute("data-aweme-video");
    var cached = awemeParsedCache.get(videoElement);
    if (cached && cached.raw === raw) return cached.data;
    if (!videoElement.hasAttribute || !videoElement.hasAttribute("data-aweme-video")) return null;
    try {
      var data = JSON.parse(videoElement.getAttribute("data-aweme-video"));
      awemeParsedCache.set(videoElement, { raw: raw, data: data });
      return data;
    } catch (parseErr) {
      return null;
    }
  }

  function getAwemeVideoData(videoElement, findAnchorFn) {
    var expectedId = getTikTokItemId(videoElement);
    var accept = data => data && (!expectedId || !data.id || String(data.id) === String(expectedId)) ? data : null;
    var awemeData = accept(parseAwemeVideoAttribute(videoElement));
    if (awemeData) return awemeData;
    if (findAnchorFn) {
      var candidate = findAnchorFn(videoElement);
      if (candidate && candidate !== videoElement && candidate !== document.querySelector("video")) {
        awemeData = accept(parseAwemeVideoAttribute(candidate));
        if (awemeData) return awemeData;
      }
    }
    var anchor = getTikTokAnchorElement(videoElement);
    if (anchor && anchor !== videoElement) {
      awemeData = accept(parseAwemeVideoAttribute(anchor));
      if (awemeData) return awemeData;
    }
    var root = findTikTokItemRoot(videoElement);
    if (root && root !== videoElement && (!root.querySelectorAll || root.querySelectorAll("video").length <= 1)) {
      awemeData = accept(parseAwemeVideoAttribute(root));
      if (awemeData) return awemeData;
    }
    return null;
  }

  async function parseTikTokMediaItems(bitrates, videoTitle, audioBitrates) {
    const resultList = [];
    for (const item of bitrates || []) {
      const playUrl = getTikTokPlaybackUrl(item?.playAddr || item?.PlayAddr);
      if (!playUrl) continue;
      const mediaFormat = urlUtils.f(playUrl);
      mediaFormat.filename = videoTitle;
      mediaFormat.ext = 'mp4';mediaFormat.exts = ['mp4'];mediaFormat.type = 'video';
      mediaFormat.resolution = item.gearName || item.GearName || item.qualityType || 'default';
      const quality = mediaConstants.r[mediaFormat.resolution];
      mediaFormat.quality = quality?.label || mediaFormat.resolution;
      if (quality?.i18n_label) mediaFormat.i18n_quality = cryptoUtils.i18n(quality.i18n_label);
      resultList.push(mediaFormat);
    }
    return resultList;
  }

  function w() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var s = n && n.prototype instanceof c ? n : c, l = Object.create(s.prototype);
      return regeneratorDefine(l, "_invoke", function(r, n, i) {
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
    var d = [][n] ? e(e([][n]())) : (regeneratorDefine(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = c.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, regeneratorDefine(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, regeneratorDefine(h, "constructor", f), regeneratorDefine(f, "constructor", l), l.displayName = "GeneratorFunction",
      regeneratorDefine(f, i, "GeneratorFunction"), regeneratorDefine(h), regeneratorDefine(h, i, "Generator"), regeneratorDefine(h, n, (function() { return this; })),
      regeneratorDefine(h, "toString", (function() { return "[object Generator]"; })),
      (w=function(){return{w:o,m:p}})()}



  var asyncRunner2 = l;
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
    var scope = rootElement !== void 0 ? rootElement : (typeof document !== "undefined" ? document : null);
    var anchorList = scope && scope.querySelectorAll ? Array.from(scope.querySelectorAll('a[href*="/video/"]')) : [];
    return anchorList.filter(isTikTokAnchorLink);
  }

  function getTikTokAnchorElement(videoElement) {
    if (!videoElement) return null;
    var expected = extractXgPlayerId(videoElement);
    var parentAnchor = videoElement.closest?.('a[href*="/video/"]');
    if (parentAnchor && isTikTokAnchorLink(parentAnchor) && (!expected || getTikTokVideoIdFromUrl(parentAnchor.href) === expected)) return parentAnchor;
    var curr = videoElement.parentElement;
    for (var i = 0; i < 8 && curr && curr !== document.body; i++) {
      var links = findTikTokVideoLinks(curr);
      var exact = expected && links.find(link => getTikTokVideoIdFromUrl(link.href) === expected);
      if (exact) return exact;
      if (curr.querySelectorAll('video').length > 1) break;
      var ids = new Set(links.map(link => getTikTokVideoIdFromUrl(link.href)));
      if (ids.size === 1 && (!expected || ids.has(expected))) return links[0];
      curr = curr.parentElement;
    }
    return null;
  }

  function findTikTokMainVideo(element) {
    if (element && "VIDEO" === element.tagName) return element;
    var rootItem = findTikTokItemRoot(element);
    var videoInRoot = rootItem ? rootItem.querySelector("video") : null;
    if (videoInRoot) return videoInRoot;
    if (element && element.querySelector) {
      var childVid = element.querySelector("video");
      if (childVid) return childVid;
    }
    if (typeof document !== "undefined") {
      var playing = Array.from(document.querySelectorAll("video")).find(function(v) {
        return !v.paused && !v.ended && v.readyState > 2;
      });
      if (playing) return playing;
      return document.querySelector("video");
    }
    return null;
  }

  function isStandaloneTikTokVideo(videoElement) {
    return Boolean(videoElement && (videoElement.matches(".xgplayer video") || videoElement.closest('[data-e2e="browse-video"]')));
  }

  function findTikTokItemRoot(videoElement) {
    if (!videoElement) return null;
    var container = videoElement.closest?.(
      '[data-e2e="feed-item"], [data-e2e="recommend-list-item-container"], [data-e2e="user-post-item"], [data-e2e="explore-item"], [data-e2e="browse-video"], [class*="ItemContainer"], [class*="VideoContainer"], [class*="PlayerContainer"], article'
    );
    if (container && container.querySelectorAll('video').length <= 1) return container;
    var curr = videoElement.parentElement;
    for (var i = 0; i < 8 && curr && curr !== document.body; i++) {
      if (curr.querySelectorAll('video').length > 1) break;
      if (curr.querySelector && curr.querySelector('a[href*="/video/"]') && curr.querySelectorAll('video').length <= 1) {
        return curr;
      }
      curr = curr.parentElement;
    }
    return videoElement.parentElement || null;
  }

  function getTikTokItemId(element) {
    if (!element) return null;
    var playerId = extractXgPlayerId(element);
    if (playerId) return playerId;
    var link = getTikTokAnchorElement(element);
    if (link) {
      var href = link.href || link.getAttribute?.("href");
      var id = getTikTokVideoIdFromUrl(href);
      if (id) return id;
    }
    var container = findTikTokItemRoot(element);
    if (container) {
      var dataE2e = container.getAttribute?.("data-e2e-vid") || container.getAttribute?.("data-e2e");
      if (dataE2e && /\d+/.test(dataE2e)) return dataE2e.match(/\d+/)[0];
    }
    if (element.getAttribute) return element.getAttribute('data-video-id') || element.getAttribute('data-aweme-id') || null;
    return null;
  }

  function cleanTikTokTitle(rawTitle) {
    if (!rawTitle) return "";
    try {
      var str = typeof rawTitle === "string" ? rawTitle : (rawTitle.innerText || rawTitle.textContent || "");
      var withoutTags = str.replace(/#\S+/gi, "").replace(/\s+/g, " ").trim();
      if (withoutTags.length > 0) return withoutTags;
      var tagsAsWords = str.replace(/#/g, "").replace(/\s+/g, " ").trim();
      if (tagsAsWords.length > 0) return tagsAsWords;
      return str.replace(/\s+/g, " ").trim();
    } catch (err) {
      return String(rawTitle).trim();
    }
  }

  function getTikTokVideoTitle(videoElement) {
    if (!videoElement) return "";
    var extracted = cleanTikTokTitle(extractTikTokVideoPostTitle(videoElement));
    if (extracted && extracted !== "TikTok - Make Your Day" && extracted !== "TikTok") {
      return extracted;
    }
    var postItem = videoElement.closest ? videoElement.closest('div[data-e2e$="user-post-item"]')?.parentElement : null;
    var postTitle = postItem ? Array.from(postItem.querySelectorAll("a")).find(function(anchor) {
      return Boolean(anchor.title);
    })?.title : "";
    if (postTitle && cleanTikTokTitle(postTitle)) {
      return cleanTikTokTitle(postTitle);
    }
    var root = findTikTokItemRoot(videoElement);
    var posterAlt = root?.querySelector?.("img")?.alt;
    if (posterAlt && cleanTikTokTitle(posterAlt)) {
      return cleanTikTokTitle(posterAlt);
    }
    return "";
  }

  function sanitizeVideoTitle(titleCandidate) {
    if (!titleCandidate) return "";
    if (typeof titleCandidate === "object" && titleCandidate.nodeType) {
      return getTikTokVideoTitle(titleCandidate) || cleanTikTokTitle(titleCandidate);
    }
    return cleanTikTokTitle(titleCandidate);
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

  async function formatBitratesOrPlayAddr(videoData, videoTitle) {
    if (videoData.bitrateInfo?.length) {
      const formats = await parseTikTokMediaItems(videoData.bitrateInfo,videoTitle || document.title);
      if (formats.length) return formats;
    }
    const url = getTikTokPlaybackUrl(videoData.url || videoData.playAddr || videoData.PlayAddr);
    if (!url) return [];
    const media = urlUtils.f(url);
    Object.assign(media,{filename:videoTitle,ext:'mp4',exts:['mp4'],type:'video'});
    if (videoData.ratio) {
      media.resolution = videoData.ratio;
      media.quality = mediaConstants.r[media.resolution]?.label;
    }
    return [media];
  }

  function getTikTokPlaybackUrl(value) {
    if (typeof value === 'string') return /^https?:\/\//i.test(value) ? value : '';
    if (Array.isArray(value)) return value.map(getTikTokPlaybackUrl).find(Boolean) || '';
    return value && typeof value === 'object' ? getTikTokPlaybackUrl(value.urlList || value.UrlList || value.url_list || value.url || value.src) : '';
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

  function findMatchingSniffedMedia(targetNode, targetId) {
    if (typeof window === "undefined" || !window.__saviorSniffedMedia || !window.__saviorSniffedMedia.length) {
      return null;
    }
    var list = window.__saviorSniffedMedia;
    var vid = targetId || getTikTokItemId(targetNode);
    if (vid) {
      for (var i = list.length - 1; i >= 0; i--) {
        var m = list[i];
        if (m && m.url && (String(m.contentId || m.id || "") === String(vid) || (() => { try { return new URL(m.url).searchParams.get("__vid") === String(vid); } catch (_) { return false; } })())) {
          return m;
        }
      }
    }
    var direct = targetNode && (targetNode.currentSrc || targetNode.src);
    return direct && /^https?:/.test(direct) ? list.find(m => m && m.url === direct) || null : null;
  }

  function resolveTikTokVideoFromNode(videoNode) {
    return asyncRunner2(this, void 0, void 0, w().m(function resolveGenerator() {
      var itemRoot, previewTitle, awemeData, resolvedTitle, parsedBitrates, currentVid, scrapedData;
      return w().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            itemRoot = findTikTokItemRoot(videoNode);
            if (itemRoot || isTikTokExplorePage() || isTikTokUserPage() || /^(www\.)?tiktok\.com$/i.test(location.host)) {
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
            currentVid = getTikTokItemId(videoNode) || getCurrentTikTokVideoId();
            if (currentVid) {
              step.n = 5;
              return scrapeUniversalDataById(currentVid, resolvedTitle || document.title);
            }
            step.n = 6;
            break;
          case 5:
            scrapedData = step.v;
            if (scrapedData && scrapedData.length) {
              return step.a(2, scrapedData);
            }
            step.n = 6;
            break;
          case 6:
            var directVideo = videoNode && "VIDEO" === videoNode.tagName ? videoNode : (itemRoot ? itemRoot.querySelector("video") : null);
            var directSrc = directVideo ? (directVideo.currentSrc || directVideo.src) : null;
            if (directSrc && typeof directSrc === "string" && directSrc.startsWith("http")) {
              return step.a(2, [{
                url: directSrc,
                ext: "mp4",
                quality: "HD",
                resolution: (directVideo.videoWidth && directVideo.videoHeight) ? (directVideo.videoWidth + "x" + directVideo.videoHeight) : "720p",
                type: "video",
                title: resolvedTitle || document.title,
                id: currentVid || ("tt_" + Date.now())
              }]);
            }
            if (typeof window !== "undefined" && window.__saviorSniffedMedia && window.__saviorSniffedMedia.length) {
              var matched = findMatchingSniffedMedia(videoNode, currentVid);
              if (matched) {
                var single = Object.assign({}, matched, {
                  title: resolvedTitle || document.title,
                  filename: resolvedTitle || document.title,
                  id: currentVid || matched.id || ("tt_" + Date.now())
                });
                return step.a(2, [single]);
              }
            }
            return step.a(2, []);
        }
      }, resolveGenerator);
    }));
  }

  var lazyBulkDownloadProvider = {
    isActive: () => isTikTokExplorePage() || isTikTokUserPage() || /^(www\.)?tiktok\.com$/i.test(location.host),
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
                return step.a(2, []);
              }
              step.n = 4;
              break;
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

  function V() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var s = n && n.prototype instanceof c ? n : c, l = Object.create(s.prototype);
      return regeneratorDefine(l, "_invoke", function(r, n, i) {
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
    var d = [][n] ? e(e([][n]())) : (regeneratorDefine(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = c.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, regeneratorDefine(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, regeneratorDefine(h, "constructor", f), regeneratorDefine(f, "constructor", l), l.displayName = "GeneratorFunction",
      regeneratorDefine(f, i, "GeneratorFunction"), regeneratorDefine(h), regeneratorDefine(h, i, "Generator"), regeneratorDefine(h, n, (function() { return this; })),
      regeneratorDefine(h, "toString", (function() { return "[object Generator]"; })),
      (V=function(){return{w:o,m:p}})()}



  var asyncRunner3 = l;

  function extractTikTokVideoPostTitle(videoElement) {
    if (!videoElement) return null;
    for (
      var currentElem = videoElement;
      currentElem != null && (currentElem.querySelectorAll ? currentElem.querySelectorAll("video").length < 2 : true);
    ) {
      var descElem = currentElem.querySelector ? currentElem.querySelector('div[data-e2e$="video-desc"]') : null;
      if (descElem?.innerText || descElem?.textContent) return (descElem.innerText || descElem.textContent).trim();
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
      var apiUrl, responseData, itemStruct, playAddr;
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
            itemStruct = step.v?.itemInfo?.itemStruct;
            playAddr = itemStruct?.video?.playAddr;
            return step.a(2, {
              url: playAddr,
              desc: itemStruct?.desc,
              bitrateInfo: itemStruct?.video?.bitrateInfo,
              ratio: itemStruct?.video?.ratio || itemStruct?.video?.definition
            });
          case 4:
            step.p = 4;
            return step.a(2);
        }
      }, fetchItemGenerator, null, [[0, 4]]);
    }));
  };

  var extractXgPlayerId = function(nodeElement) {
    var current = nodeElement;
    for (var depth = 0; current && current !== document.body && depth < 8; depth++,current = current.parentElement) {
      var id = (current.id || '').match(/^xgwrapper-.*?-(\d{18,20})$/)?.[1];
      if (id) return id;
      if (current.tagName === 'ARTICLE' || current.querySelectorAll?.('video').length > 1) break;
    }
    return null;
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
            const mapKey = "douyin-" + videoId;
            if (!douyinInFlightInjectMap.hasOwnProperty(mapKey)) {
              douyinInFlightInjectMap[mapKey] = Promise.race([
                cryptoUtils.sendMessage({ type: mediaConstants.b.SCRIPTING.INJECT, file: "douyin" }),
                cryptoUtils.sleep(1000)
              ]).finally(() => {
                delete douyinInFlightInjectMap[mapKey];
              });
            }
            step.n = 2;
            return douyinInFlightInjectMap[mapKey];
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
      var vidParam = parsedUrl.searchParams.get("__vid") || parsedUrl.searchParams.get("_vid") || parsedUrl.searchParams.get("vid");
      var videoId = vidParam ? (vidParam.match(/-(\d+)$/i)?.[1] || vidParam.match(/(\d{15,})/)?.[1]) : null;
      if (!videoId) {
        var directMatch = requestItem.url.match(/\/video\/(\d{15,})/i) || requestItem.url.match(/[?&]item_id=(\d{15,})/i);
        videoId = directMatch?.[1] || null;
      }
      if (videoId && !douyinResolvedCache[videoId]) {
        douyinResolvedCache[videoId] = requestItem;
      }
      var pageVidMatch = location.pathname.match(/\/video\/(\d+)/i);
      if (pageVidMatch && pageVidMatch[1] && !douyinResolvedCache[pageVidMatch[1]]) {
        douyinResolvedCache[pageVidMatch[1]] = requestItem;
      }
      if (typeof window !== "undefined") {
        window.__saviorSniffedMedia = window.__saviorSniffedMedia || [];
        if (!window.__saviorSniffedMedia.some(function(m) { return m && m.url === requestItem.url; })) {
          window.__saviorSniffedMedia.push(requestItem);
        }
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
                  try { sigiState = JSON.parse(rawSigiState); } catch (_) { sigiState = null; }
                }
                matchedItemModule = targetMedia.originVideoId ? sigiState?.ItemModule?.[targetMedia.originVideoId] :
                  sigiState?.ItemModule?.[sigiState?.ItemList?.f?.list?.[0] || sigiState?.ItemList?.foryou?.list?.[0] || sigiState?.ItemList?.video?.list?.[0]];
                if (matchedItemModule && matchedItemModule.video && matchedItemModule.video.playAddr) {
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
                if (!renderJson || typeof renderJson !== "object") {
                  step.n = 4;
                  break;
                }
                matchedKey = Object.keys(renderJson).find(function(keyName) {
                  var resObj = renderJson[keyName]?.playRes || renderJson[keyName];
                  return resObj?.awemeData?.aweme?.detail;
                });
                if (!matchedKey || !renderJson[matchedKey]) {
                  step.n = 4;
                  break;
                }
                firstDisplay = (renderJson[matchedKey].playRes || renderJson[matchedKey])?.firstDisplayData;
                if (!firstDisplay || !Array.isArray(firstDisplay.videoPlayInfo)) {
                  step.n = 4;
                  break;
                }
                videoFormat = firstDisplay.videoFormat || "mp4";
                videoTitleClean = firstDisplay.videoCurrentPeriod + " - " + firstDisplay.videoTitle;
                playInfoList = firstDisplay.videoPlayInfo.map(function(playItem) {
                  var mediaNode = urlUtils.f(playItem.main);
                  var def = playItem.definition;
                  var qualLabel = mediaConstants.r[def]?.label || mediaConstants.r[playItem.height + "p"]?.label || mediaConstants.r["480p"]?.label;
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
                if (!targetMedia.filename || !targetMedia.filename.length || targetMedia.filename === "TikTok - Make Your Day" || targetMedia.filename === "TikTok") {
                  targetMedia.filename = (targetMedia.originVideoId ? ("tiktok_" + targetMedia.originVideoId) : (document.title && document.title !== "TikTok - Make Your Day" && document.title !== "TikTok" ? document.title : "tiktok_video"));
                }
                var cleanEmojiFilename = targetMedia.filename.replace(/\p{Extended_Pictographic}/gu, "").trim();
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
                  videoTitle = getTikTokVideoTitle(videoNode) || postItemTitle || document.title;
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
                  singlePlayMedia = urlUtils.f(getTikTokPlaybackUrl(videoMeta.playAddr || videoMeta.PlayAddr));
                  singlePlayMedia.type = 'video';singlePlayMedia.ext = 'mp4';singlePlayMedia.exts = ['mp4'];
                  singlePlayMedia.resolution = videoMeta.ratio || videoMeta.definition;
                  singlePlayMedia.quality = mediaConstants.r[singlePlayMedia.resolution]?.label;
                  singlePlayMedia.filename = videoTitle;
                  return step.a(2, [singlePlayMedia]);
                case 7:
                  step.p = 7;
                  step.v;
                  mainVideoNode = videoNode;
                  if (videoNode.hasAttribute("data-aweme-video") || getTikTokAnchorElement(videoNode)?.hasAttribute("data-aweme-video")) {
                    step.n = 8;
                    break;
                  }
                  step.n = 8;
                  return injectTikTokMainWorldScript();
                case 8:
                  step.p = 8;
                  awemeData = getAwemeVideoData(videoNode, getTikTokAnchorElement);
                  if (!awemeData) {
                    step.n = 11;
                    break;
                  }
                  videoTitle = cleanTikTokTitle(awemeData.desc) || getTikTokVideoTitle(videoNode) || postItemTitle || document.title;
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
                  singleAwemeMedia = urlUtils.f(getTikTokPlaybackUrl(awemeData.url));
                  singleAwemeMedia.type = 'video';singleAwemeMedia.ext = 'mp4';singleAwemeMedia.exts = ['mp4'];
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
                    var targetVidId13 = getTikTokItemId(videoNode);
                    var sniffed = findMatchingSniffedMedia(videoNode, xgPlayerId) || window.__saviorSniffedMedia.slice().reverse().find(function(m) {
                      if (!m || !m.url) return false;
                      if (targetVidId13 && (m.url.includes(targetVidId13) || m.feedVideoId === targetVidId13)) return true;
                      return m.url.includes("/video/tos/") || m.url.includes("mime_type=video_mp4") || m.url.includes("tiktokcdn");
                    }) || window.__saviorSniffedMedia[window.__saviorSniffedMedia.length - 1];
                    if (sniffed && sniffed.url) {
                      var fallbackMedia = urlUtils.f(sniffed.url);
                      fallbackMedia.filename = getTikTokVideoTitle(videoNode) || sanitizeVideoTitle(findTikTokItemRoot(videoNode)) || (targetVidId13 ? ("tiktok_" + targetVidId13) : document.title);
                      fallbackMedia.ext = "mp4";
                      fallbackMedia.exts = ["mp4"];
                      fallbackMedia.type = "video";
                      return step.a(2, [fallbackMedia]);
                    }
                  }
                  return step.a(2, []);
                case 14:
                  var isBogusTargetUrl = !targetUrl || targetUrl.startsWith("blob:") || targetUrl === location.href || targetUrl === "https://www.tiktok.com/" || targetUrl === "https://www.tiktok.com";
                  if (isBogusTargetUrl) {
                    var resolvedVid = xgPlayerId || getTikTokItemId(videoNode);
                    if (resolvedVid && douyinItemApiCache[resolvedVid]?.url) {
                      var cachedApiMedia = urlUtils.f(douyinItemApiCache[resolvedVid].url);
                      cachedApiMedia.filename = getTikTokVideoTitle(videoNode) || cleanTikTokTitle(douyinItemApiCache[resolvedVid]?.desc) || ("tiktok_" + resolvedVid);
                      cachedApiMedia.ext = "mp4";
                      cachedApiMedia.exts = ["mp4"];
                      cachedApiMedia.type = "video";
                      return step.a(2, [cachedApiMedia]);
                    }
                    if (resolvedVid && douyinResolvedCache[resolvedVid]?.url) {
                      var cachedMedia = urlUtils.f(douyinResolvedCache[resolvedVid].url);
                      cachedMedia.filename = getTikTokVideoTitle(videoNode) || ("tiktok_" + resolvedVid);
                      cachedMedia.ext = "mp4";
                      cachedMedia.exts = ["mp4"];
                      cachedMedia.type = "video";
                      return step.a(2, [cachedMedia]);
                    }
                    if (typeof window !== "undefined" && window.__saviorSniffedMedia && window.__saviorSniffedMedia.length) {
                      var targetVidId14 = getTikTokItemId(videoNode);
                      var sMedia = findMatchingSniffedMedia(videoNode, resolvedVid) || window.__saviorSniffedMedia.slice().reverse().find(function(m) {
                        if (!m || !m.url) return false;
                        if (targetVidId14 && (m.url.includes(targetVidId14) || m.feedVideoId === targetVidId14)) return true;
                        return m.url.includes("/video/tos/") || m.url.includes("mime_type=video_mp4") || m.url.includes("tiktokcdn");
                      }) || window.__saviorSniffedMedia[window.__saviorSniffedMedia.length - 1];
                      if (sMedia && sMedia.url) {
                        var fb = urlUtils.f(sMedia.url);
                        fb.filename = getTikTokVideoTitle(videoNode) || sanitizeVideoTitle(findTikTokItemRoot(videoNode)) || (targetVidId14 ? ("tiktok_" + targetVidId14) : document.title);
                        fb.ext = "mp4";
                        fb.exts = ["mp4"];
                        fb.type = "video";
                        return step.a(2, [fb]);
                      }
                    }
                  }
                  return step.a(2, targetUrl);
              }
            }, tiktokUrlResolver, null, [[8, 12], [3, 7]]);
          }));
        },
        mediaObjectChange: function(changeItem) {
          var mediaObj = changeItem.mediaObject;
          var videoNode = changeItem.node;
          return asyncRunner3(void 0, void 0, void 0, V().m(function tiktokMediaChangeGenerator() {
            var postItemContainer, postTitle, videoTitle, anchorElem, videoIdMatch, videoId, currentUrl, fetchedDetail;
            return V().w(function(step) {
              for (;;) switch (step.n) {
                case 0:
                  postItemContainer = videoNode.closest('div[data-e2e$="user-post-item"]')?.parentElement;
                  postTitle = Array.from(postItemContainer ? postItemContainer.querySelectorAll("a") : []).find(function(anchor) {
                    return Boolean(anchor.title);
                  })?.title;
                  videoTitle = getTikTokVideoTitle(videoNode) || postTitle;
                  if (videoTitle && videoTitle !== "TikTok - Make Your Day" && videoTitle !== "TikTok") {
                    mediaObj.filename = videoTitle;
                  }
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
                    var cachedApi = douyinItemApiCache[videoId];
                    mediaObj.url = (cachedApi && typeof cachedApi.url === "string") ? cachedApi.url : (typeof cachedApi === "string" ? cachedApi : "");
                    if (cachedApi.desc && (!mediaObj.filename || mediaObj.filename === "TikTok - Make Your Day" || mediaObj.filename === "TikTok")) {
                      mediaObj.filename = cleanTikTokTitle(cachedApi.desc);
                    }
                    step.n = 4;
                    break;
                  }
                  if (douyinResolvedCache[videoId]) {
                    mediaObj.url = douyinResolvedCache[videoId].url;
                    step.n = 4;
                    break;
                  }
                  step.n = 3;
                  return fetchTikTokItemDetail(videoId);
                case 3:
                  fetchedDetail = step.v;
                  if (fetchedDetail) {
                    douyinItemApiCache[videoId] = fetchedDetail;
                    mediaObj.url = (fetchedDetail && typeof fetchedDetail.url === "string") ? fetchedDetail.url : (typeof fetchedDetail === "string" ? fetchedDetail : "");
                    if (fetchedDetail.desc && (!mediaObj.filename || mediaObj.filename === "TikTok - Make Your Day" || mediaObj.filename === "TikTok")) {
                      mediaObj.filename = cleanTikTokTitle(fetchedDetail.desc);
                    }
                  }
                case 4:
                  var isBogusTarget = !mediaObj.url ||
                    mediaObj.url.startsWith("blob:") ||
                    mediaObj.url === location.href ||
                    mediaObj.url === "https://www.tiktok.com/" ||
                    mediaObj.url === "https://www.tiktok.com" ||
                    (mediaObj.url.includes("tiktok.com/") && !mediaObj.url.includes("/video/tos/"));
                  if (isBogusTarget) {
                    if (videoId && douyinResolvedCache[videoId]) {
                      mediaObj.url = douyinResolvedCache[videoId].url;
                    } else if (videoId && douyinItemApiCache[videoId]?.url) {
                      mediaObj.url = douyinItemApiCache[videoId].url;
                    } else if (typeof window !== "undefined" && window.__saviorSniffedMedia?.length) {
                      var sniffed = findMatchingSniffedMedia(videoNode, videoId);
                      if (sniffed?.url) {
                        mediaObj.url = sniffed.url;
                      }
                    }
                  }
                  if (!mediaObj.filename || mediaObj.filename === document.title || mediaObj.filename === "TikTok - Make Your Day" || mediaObj.filename === "TikTok") {
                    var finalTitle = getTikTokVideoTitle(videoNode) ||
                      cleanTikTokTitle(douyinItemApiCache[videoId]?.desc) ||
                      (videoId ? ("tiktok_" + videoId) : "tiktok_video");
                    mediaObj.filename = finalTitle;
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
                  mediaObj.filename = detailTitle || postTitle || extractDouyinPageTitle(videoElement) || document.title;
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
