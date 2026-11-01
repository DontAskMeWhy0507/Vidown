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
    return asyncRunner1(void 0, void 0, void 0, c().m(function injectGenerator() {
      return c().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            if (!inFlightInjectMap["tiktok_inject"]) {
              step.n = 1;
              break;
            }
            return step.a(2);
          case 1:
            inFlightInjectMap["tiktok_inject"] = true;
            step.n = 2;
            return domHelper.h({
              type: "run_isolated_script",
              data: {
                target: "inject/tiktok/index.js",
                codeUrl: "inject/tiktok/main-world.js"
              }
            });
          case 2:
            return step.a(2);
        }
      }, injectGenerator);
    }));
  }

  function parseAwemeVideoAttribute(videoElement) {
    var rawAwemeAttr = videoElement?.getAttribute("data-aweme-video");
    if (!rawAwemeAttr) return null;
    try {
      return JSON.parse(rawAwemeAttr);
    } catch (parseErr) {
      return null;
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
            mediaFormat = domHelper.f(playUrl);
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

  function extractValidMediaUrl(mediaStruct) {
    if (!mediaStruct) return null;
    var urlList = mediaStruct.urlList || mediaStruct.UrlList || [];
    return urlList.find(function(urlStr) {
      return isKnownVideoPattern(urlStr);
    }) || urlList[0] || null;
  }

  function scrapeTikTokCurrentVideoMeta(videoElement) {
    var rootElem = findTikTokItemRoot(videoElement);
    var titleElem = rootElem?.querySelector('[data-e2e="video-desc"], [data-e2e="browse-video-desc"]');
    var videoTitle = sanitizeVideoTitle(titleElem) || document.title;
    var videoId = getTikTokItemId(videoElement);
    return {
      id: videoId,
      title: videoTitle,
      url: location.href,
      type: "video",
      ext: "mp4",
      exts: ["mp4"]
    };
  }

  function scrapeTikTokAnchorPreviewMeta(videoElement) {
    var anchor = getTikTokAnchorElement(videoElement);
    if (!anchor) return null;
    var videoId = getTikTokVideoIdFromUrl(anchor.href);
    var videoTitle = sanitizeVideoTitle(anchor.title || anchor.innerText) || document.title;
    return {
      id: videoId,
      url: anchor.href,
      title: videoTitle,
      type: "video",
      ext: "mp4",
      exts: ["mp4"],
      thumbnail: anchor.querySelector("img")?.src || null
    };
  }

  function scrapeTikTokUniversalData() {
    var rehydrationElement = document.querySelector("#__UNIVERSAL_DATA_FOR_REHYDRATION__");
    if (!rehydrationElement?.innerText) return null;
    try {
      var parsedData = JSON.parse(rehydrationElement.innerText.trim());
      return parsedData?.__DEFAULT_SCOPE__ || null;
    } catch (parseErr) {
      return null;
    }
  }

  function resolveTikTokVideoFromNode(videoNode) {
    var xgId = extractXgPlayerId(videoNode);
    if (xgId && douyinItemApiCache[xgId]) {
      return douyinItemApiCache[xgId];
    }
    var anchor = getTikTokAnchorElement(videoNode);
    var urlId = anchor ? getTikTokVideoIdFromUrl(anchor.href) : null;
    if (urlId && douyinItemApiCache[urlId]) {
      return douyinItemApiCache[urlId];
    }
    return videoNode.src || null;
  }

  var lazyBulkDownloadProvider = {
    shouldShowButton: function(domContext) {
      return Boolean(location.host.match(/(www.)?tiktok.com/i) && isTikTokExplorePage());
    },
    getCustomButtonParent: function() {
      return document.querySelector('[data-e2e="explore-item-list"]') || document.querySelector("#main-content-explore_page");
    },
    getMediaList: function() {
      var cards = Array.from(document.querySelectorAll('[data-e2e="explore-item"]'));
      var mediaList = [];
      cards.forEach(function(card) {
        var anchor = card.querySelector('a[href*="/video/"]');
        if (anchor) {
          var vid = getTikTokVideoIdFromUrl(anchor.href);
          var img = card.querySelector("img");
          mediaList.push({
            id: vid,
            url: anchor.href,
            title: sanitizeVideoTitle(card.innerText) || vid,
            thumbnail: img?.src || null,
            ext: "mp4",
            exts: ["mp4"],
            type: "video"
          });
        }
      });
      return mediaList;
    }
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

  function extractDouyinPageTitle(element) {
    var titleElem = document.querySelector('[data-e2e$="browse-video-desc"], [data-e2e$="video-desc"], [data-e2e="browse-video-desc"]');
    if (titleElem?.innerText) return titleElem.innerText;
    var container = element?.closest?.(".xg-video-container");
    var detailSpan = container?.parentElement?.querySelector(".video-info-detail .title span");
    if (detailSpan?.innerText) return detailSpan.innerText;
    var interactionElem = container?.closest?.(".player-fullscreen-show-interaction");
    var nextText = interactionElem?.parentElement?.nextSibling?.innerText;
    if (nextText) return nextText.replace("\n", "-");
    return document.title;
  }

  function sanitizeDouyinTitle(rawTitle) {
    if (!rawTitle) return "";
    return rawTitle.replace(/\s+/g, " ").trim();
  }

  function extractDouyinVideoNickname(element) {
    var authorElem = document.querySelector('[data-e2e="video-author-uniqueid"], [data-e2e="user-info"] a');
    return authorElem?.innerText?.trim() || "";
  }

  function parseDouyinAwemeInfoAttribute(element) {
    var rawAwemeInfo = element?.getAttribute("data-aweme-info");
    if (!rawAwemeInfo) return null;
    try {
      return JSON.parse(rawAwemeInfo);
    } catch (parseErr) {
      return null;
    }
  }

  function formatDouyinStreamMediaItem(streamUrl, definitionLabel, videoTitle) {
    var mediaItem = domHelper.f(streamUrl);
    mediaItem.filename = videoTitle || document.title;
    mediaItem.ext = "mp4";
    mediaItem.exts = ["mp4"];
    mediaItem.type = "video";
    mediaItem.resolution = definitionLabel;
    mediaItem.quality = mediaConstants.r[definitionLabel]?.label || definitionLabel;
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
    return Boolean(videoNode?.closest?.('[data-e2e="live-room-card"], [class*="-DivLiveCard"]'));
  };

  var fetchTikTokItemDetail = function(itemId) {
    return asyncRunner3(void 0, void 0, void 0, V().m(function fetchItemGenerator() {
      var apiUrl, responseData, playAddr;
      return V().w(function(step) {
        for (;;) switch (step.n) {
          case 0:
            if (!itemId) return step.a(2, null);
            if (douyinItemApiCache[itemId]) return step.a(2, douyinItemApiCache[itemId]);
            apiUrl = "https://www.tiktok.com/api/item/detail/?itemId=" + itemId;
            step.n = 1;
            return cryptoUtils.fetchJson(apiUrl);
          case 1:
            responseData = step.v;
            playAddr = responseData?.itemInfo?.itemStruct?.video?.playAddr;
            if (playAddr) {
              douyinItemApiCache[itemId] = playAddr;
              return step.a(2, playAddr);
            }
            return step.a(2, null);
        }
      }, fetchItemGenerator);
    }));
  };

  var extractXgPlayerId = function(nodeElement) {
    var xgWrapper = nodeElement?.closest?.('[id^="xgwrapper"]');
    if (xgWrapper?.id) {
      var match = xgWrapper.id.match(/^xgwrapper\d+-(\d+)/);
      if (match) return match[1];
    }
    var playerContainer = nodeElement?.closest?.(".basePlayerContainer");
    if (playerContainer) {
      var vidClass = Array.from(playerContainer.classList).find(function(cls) {
        return /video_\d+/.test(cls);
      });
      if (vidClass) return vidClass.split("_")[1];
    }
    return null;
  };

  var douyinRequestMap = {};
  var douyinResolvedCache = {};

  var resolveDouyinMediaFromVideoNode = function(videoElement) {
    var xgId = extractXgPlayerId(videoElement);
    if (xgId && douyinResolvedCache[xgId]) {
      return [douyinResolvedCache[xgId]];
    }
    var awemeInfo = parseDouyinAwemeInfoAttribute(videoElement);
    if (awemeInfo?.video?.play_addr?.url_list?.[0]) {
      var playUrl = awemeInfo.video.play_addr.url_list[0];
      var mediaObj = domHelper.f(playUrl);
      mediaObj.filename = sanitizeDouyinTitle(extractDouyinPageTitle(videoElement));
      mediaObj.ext = "mp4";
      mediaObj.exts = ["mp4"];
      mediaObj.type = "video";
      return [mediaObj];
    }
    return [];
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
      var parsedUrl = new URL(requestItem.url);
      var videoId = parsedUrl.pathname.match(/\/video\/tos\/.*\/(\w+)/i)?.[1];
      if (videoId && !douyinResolvedCache[videoId]) {
        douyinResolvedCache[videoId] = requestItem;
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
                  singleParsedMedia = domHelper.f(matchedItemModule.video.playAddr);
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
                  var mediaNode = domHelper.f(playItem.main);
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
                  return domHelper.g({ url: activeImg.src, node: activeImg });
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
          return meta ? [{
            id: meta.id,
            url: meta.url || location.href,
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
                  singlePlayMedia = domHelper.f(videoMeta.playAddr);
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
                  singleAwemeMedia = domHelper.f(awemeData.url);
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
                  if (!mediaObj.url?.startsWith("blob:")) {
                    mediaObj.ext = "mp4";
                    mediaObj.exts = ["mp4"];
                  }
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
