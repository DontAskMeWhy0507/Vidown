// Module 120 [platform] - Savior YouTube Content Media Extractor and DOM Resolver
export default function(module, exports, require) {
  "use strict";

  require.r(exports);
  require.d(exports, "YOUTUBE_VIDEO_URL", function() { return YOUTUBE_VIDEO_URL; });
  require.d(exports, "YOUTUBE_VIDEO_URL_RX", function() { return YOUTUBE_VIDEO_URL_RX; });

  var cryptoUtils = require(0);
  var mediaConstants = (require(3), require(1));
  require(9);
  require(14);

  function normalizeVideoOrEmbedNode(node) {
    if (!function(target) { return !(!target); }(node) || !node) return null;
    if (-1 !== ["PARAM", "SOURCE"].indexOf(node.tagName)) {
      node = node.parentElement;
    }
    if ("OBJECT" === (null == node ? void 0 : node.tagName)) {
      var embeds = node.querySelectorAll("embed");
      if (embeds && 1 === embeds.length) {
        node = embeds[0];
      }
    }
    return node;
  }

  var youtubeFormats = require(28);
  var domHelper = require(12);
  var sharedStorage = require(7);
  var astHelper = require(89);

  function regeneratorRuntime() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var u = n && n.prototype instanceof s ? n : s, c = Object.create(u.prototype);
      return defineProperty(c, "_invoke", function(r, n, i) {
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
      }(r, i, o), !0), c;
    }
    var a = {};
    function s() {}
    function u() {}
    function c() {}
    e = Object.getPrototypeOf;
    var d = [][n] ? e(e([][n]())) : (defineProperty(e = {}, n, (function() { return this; })), e);
    var h = c.prototype = s.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, defineProperty(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return u.prototype = c, defineProperty(h, "constructor", c), defineProperty(c, "constructor", u), u.displayName = "GeneratorFunction",
      defineProperty(c, i, "GeneratorFunction"), defineProperty(h), defineProperty(h, i, "Generator"), defineProperty(h, n, (function() { return this; })),
      defineProperty(h, "toString", (function() { return "[object Generator]"; })),
      (regeneratorRuntime=function(){return{w:o,m:p}})()}

  function defineProperty(target, key, value, desc) {
    var defProp = Object.defineProperty;
    try {
      defProp({}, "", {});
    } catch (e) {
      defProp = 0;
    }
    (defineProperty = function(target, key, value, desc) {
      function setProp(methodName, actionCode) {
        defineProperty(target, methodName, function(arg) {
          return this._invoke(methodName, actionCode, arg);
        });
      }
      if (key) {
        if (defProp) {
          defProp(target, key, { value: value, enumerable: !desc, configurable: !desc, writable: !desc });
        } else {
          target[key] = value;
        }
      } else {
        setProp("next", 0);
        setProp("throw", 1);
        setProp("return", 2);
      }
    })(target, key, value, desc);
  }

  function asyncGeneratorRunner(thisArg, args, PromiseCtor, generator) {
    return new (PromiseCtor || (PromiseCtor = Promise))(function(resolve, reject) {
      function step(val) {
        try {
          resume(generator.next(val));
        } catch (err) {
          reject(err);
        }
      }
      function stepThrow(err) {
        try {
          resume(generator.throw(err));
        } catch (e) {
          reject(e);
        }
      }
      function resume(stepResult) {
        var val;
        if (stepResult.done) {
          resolve(stepResult.value);
        } else {
          val = stepResult.value;
          (val instanceof PromiseCtor ? val : new PromiseCtor(function(res) { res(val); })).then(step, stepThrow);
        }
      }
      resume((generator = generator.apply(thisArg, args || [])).next());
    });
  }

  var currentProtocol = "https:" === location.protocol.toLowerCase() ? "https:" : "http:";
  var lastTrackedUrl = "";
  var isRefreshScheduled = false;
  var lastPipShortsSrc = "";
  var YOUTUBE_VIDEO_URL = `${currentProtocol}//${astHelper.a.YOUTUBE_API_DOMAIN}/watch?v=`;
  var YOUTUBE_VIDEO_URL_RX = /(www\.)?youtube\.com\/watch\?v=/i;

  function isLiveStream() {
    if (location.pathname.startsWith("/shorts/")) return false;
    // Fast DOM markers without forced layout reflow
    if (document.querySelector('meta[itemprop="isLiveBroadcast"][content="true"]')) return true;
    if (document.querySelector('ytd-watch-flexy[is-live]')) return true;
    var viewerCountEl = Object(cryptoUtils.query)(".viewer-count.ytg-watch-footer");
    if (viewerCountEl) return true;
    var liveBadgeEl = Object(cryptoUtils.query)(".ytp-chrome-bottom .ytp-live-badge");
    if (liveBadgeEl) {
      if (liveBadgeEl.offsetParent !== null && !liveBadgeEl.classList.contains("ytp-live-badge-hidden") && !liveBadgeEl.hasAttribute("disabled") && liveBadgeEl.style.display !== "none") {
        return true;
      }
    }
    try {
      var scripts = document.querySelectorAll("script");
      for (var i = 0; i < scripts.length; i++) {
        var text = scripts[i].textContent;
        if (text && text.length > 50 && text.includes("ytInitialPlayerResponse") && text.includes('"isLiveBroadcast":true')) {
          if (!text.includes('"endDate":') || text.includes('"isLive":true')) {
            return true;
          }
        }
      }
    } catch (_) {}
    return false;
  }

  var youtubeProvider = {
    getDomains: function() {
      return ["youtube.com", "windybui.com"];
    },
    shouldNotCacheParsedMedia: function() {
      return true;
    },
    siteMatcher: function(targetNode, url) {
      return Boolean(null == url ? void 0 : url.match(/youtube.com\/embed\/([a-z0-9\-_]+)/i));
    },
    isMiniPlayerNode: function(node) {
      var playerEl;
      if (location.href.includes("youtube.com") && node.closest("ytd-miniplayer-player-container")) {
        return true;
      }
      if (location.href.includes("music.youtube.com") && node.closest("ytmusic-player")) {
        playerEl = node.closest("ytmusic-player");
        return !(null == playerEl ? void 0 : playerEl.hasAttribute("player-page-open"));
      }
      return false;
    },
    isValidVideoNode: function(node) {
      if (!node || !node.tagName || node.tagName.toLowerCase() !== "video") {
        return false;
      }
      var channelPlayerRenderer, watchAnchor;
      if (node.getAttribute("data-no-fullscreen") && "string" != typeof node.getAttribute("loop") && !location.href.includes("youtube.com/shorts/")) {
        return false;
      }
      if (location.pathname.startsWith("/channel")) {
        channelPlayerRenderer = node.closest("ytd-channel-video-player-renderer");
        watchAnchor = null == channelPlayerRenderer ? void 0 : channelPlayerRenderer.querySelector('a[href^="/watch"]');
        return !(!(null == watchAnchor ? void 0 : watchAnchor.href));
      }
      return Object(domHelper.i)(node) && Object(domHelper.n)(node);
    },
    getCustomParent: function(node) {
      return node.closest("#player-container") || node.closest("#player, ytd-player");
    },
    forceUpdate: function() {
      var activePipEl;
      if (location.href.match(/(www\.)?youtube\.com\/shorts\//i)) {
        var videoEl = document.querySelector("video[src]");
        var currentSrc = null == videoEl ? void 0 : videoEl.src;
        if (!document.pictureInPictureElement) {
          lastPipShortsSrc = "";
        }
        if (currentSrc) {
          if (!lastPipShortsSrc) {
            lastPipShortsSrc = currentSrc;
            return;
          }
          activePipEl = document.pictureInPictureElement;
          var pipSrc = null == activePipEl ? void 0 : activePipEl.src;
          if (pipSrc && pipSrc != lastPipShortsSrc) {
            document.exitPictureInPicture();
            lastPipShortsSrc = "";
          }
        }
      }
      if (lastTrackedUrl != location.href) {
        lastTrackedUrl = location.href;
        if (lastTrackedUrl.match(YOUTUBE_VIDEO_URL_RX)) {
          var currentCount = sharedStorage.a.get(mediaConstants.A) || 0;
          sharedStorage.a.set(mediaConstants.A, currentCount + 1);
        }
        EE.emit("widget.forceUpdate");
      }
      if (location.href.match(/(www\.)?youtube\.com\/shorts\//i) && !isRefreshScheduled) {
        isRefreshScheduled = true;
        setTimeout(function() {
          EE.emit("dom-scanner.refresh");
        }, 500);
      } else {
        isRefreshScheduled = false;
      }
    },
    parse: {
      sources: [],
      default: function(info) {
        var media = info.media;
        return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
          var videoId, poTokenResponse;
          return regeneratorRuntime().w(function(ctx) {
            for (;;) {
              switch (ctx.n) {
                case 0:
                  videoId = Object(cryptoUtils.getVideoId)(String(media.url));
                  document.body.setAttribute("savior-video-id", videoId || "");
                  ctx.n = 1;
                  return Object(cryptoUtils.sendMessage)({
                    type: mediaConstants.b.SCRIPTING.INJECT,
                    file: "youtube/potoken"
                  });
                case 1:
                  poTokenResponse = ctx.v;
                  document.body.removeAttribute("savior-video-id");
                  return ctx.a(2, youtubeFormats.a.parse(media.url, poTokenResponse));
              }
            }
          }, gen);
        }));
      }
    },
    urls: [
      {
        checkUrl: function(info) {
          return info.url.includes("?list=");
        },
        getUrl: function(info) {
          var url = info.url;
          return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
            var response, responseText, listVideoId;
            return regeneratorRuntime().w(function(ctx) {
              for (;;) {
                switch (ctx.n) {
                  case 0:
                    ctx.n = 1;
                    return Object(cryptoUtils.send)("GET", url);
                  case 1:
                    response = ctx.v;
                    responseText = response.responseText;
                    listVideoId = astHelper.a.getVideoIdFromYoutubeList(responseText);
                    if (listVideoId) {
                      ctx.n = 2;
                      break;
                    }
                    return ctx.a(2, []);
                  case 2:
                    return ctx.a(2, YOUTUBE_VIDEO_URL + listVideoId);
                }
              }
            }, gen);
          }));
        },
        mediaObjectChange: function(info) {
          var node = info.node;
          var mediaObject = info.mediaObject;
          if (!isLiveStream()) {
            mediaObject.cacheUrl = node.src;
            mediaObject.ext = "mp4";
            mediaObject.exts = ["mp4"];
            return "video";
          }
          mediaObject.type = null;
        }
      },
      {
        checkUrl: function(info) {
          var url = info.url;
          var node = info.node;
          return (url.startsWith("blob:") && /youtube\.com\/(channel\/|@[a-z0-9\-_\.]+)/i.test(location.href)) ||
            Boolean(node.closest("ytd-channel-video-player-renderer"));
        },
        getUrl: function(info) {
          var channelRenderer = info.node.closest("ytd-channel-video-player-renderer");
          var endpointAnchor = null == channelRenderer ? void 0 : channelRenderer.querySelector("a.yt-simple-endpoint");
          return null == endpointAnchor ? void 0 : endpointAnchor.href;
        },
        mediaObjectChange: function(info) {
          var mediaObject = info.mediaObject;
          var node = info.node;
          if (!isLiveStream()) {
            mediaObject.ext = "mp4";
            mediaObject.exts = ["mp4"];
            mediaObject.cacheUrl = node.src;
            return "video";
          }
          mediaObject.type = null;
        }
      },
      ...youtubeFormats.a.urls
    ],
    default: {
      getUrl: function(info) {
        var url = info.url;
        return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
          var playerContainer, matchedVideoId, fallbackContainer, flashEmbeds,
              normalizedEmbed, titleAnchor, titleLink, playabilityErrorEl,
              titleLinkInPlayer, playerContainerNode;
          return regeneratorRuntime().w(function(ctx) {
            for (;;) {
              switch (ctx.n) {
                case 0:
                  if (!isLiveStream()) {
                    ctx.n = 1;
                    break;
                  }
                  return ctx.a(2, []);
                case 1:
                  if (!location.href.match(/(www\.)?youtube\.com\/shorts\//i)) {
                    ctx.n = 2;
                    break;
                  }
                  return ctx.n = 2, Object(cryptoUtils.sendMessage)({
                    type: mediaConstants.b.CHECK_URL_CHANGED,
                    originalUrl: location.href
                  });
                case 2:
                  if (Object(cryptoUtils.query)("#player-unavailable:not(.hid)")) {
                    ctx.n = 3;
                    break;
                  }
                  matchedVideoId = Object(cryptoUtils.getVideoId)(location.href);
                  if (!matchedVideoId) {
                    fallbackContainer = Object(cryptoUtils.query)(".html5-video-player:not(.unstarted-mode)") ||
                                        Object(cryptoUtils.query)("#player, #movie_player, #movie_player-html5, #movie_player-flash");
                    flashEmbeds = Object(cryptoUtils.queryAll)('embed[type="application/x-shockwave-flash"]', fallbackContainer || void 0);
                    if (1 === flashEmbeds.length) {
                      normalizedEmbed = normalizeVideoOrEmbedNode(flashEmbeds[0]);
                      titleAnchor = null == normalizedEmbed ? void 0 : normalizedEmbed.querySelector("a.ytp-title-link");
                      titleLink = titleAnchor ? titleAnchor.href : null;
                      if (titleLink) {
                        matchedVideoId = Object(cryptoUtils.getVideoId)(titleLink);
                      }
                    }
                  }
                  if (!matchedVideoId) {
                    ctx.n = 3;
                    break;
                  }
                  return ctx.a(2, YOUTUBE_VIDEO_URL + matchedVideoId);
                case 3:
                  playerContainer = Object(cryptoUtils.query)("#c4-player, .html5-video-player:not(.unstarted-mode)");
                  playabilityErrorEl = Object(cryptoUtils.query)("yt-playability-error-supported-renderers");
                  if (!playerContainer) {
                    ctx.n = 5;
                    break;
                  }
                  titleLinkInPlayer = Object(cryptoUtils.query)(".ytp-title-link", playerContainer);
                  playerContainerNode = playerContainer;
                  if (!playabilityErrorEl ||
                      (null == playerContainerNode.node ? void 0 : playerContainerNode.node.offsetWidth) !== playabilityErrorEl.offsetWidth ||
                      (null == playerContainerNode.node ? void 0 : playerContainerNode.node.offsetHeight) !== playabilityErrorEl.offsetHeight) {
                    ctx.n = 4;
                    break;
                  }
                  return ctx.a(2);
                case 4:
                  if (!titleLinkInPlayer) {
                    ctx.n = 5;
                    break;
                  }
                  return ctx.a(2, titleLinkInPlayer.href);
                case 5:
                  matchedVideoId = Object(cryptoUtils.getVideoId)(url);
                  if (matchedVideoId) {
                    ctx.n = 6;
                    break;
                  }
                  return ctx.a(2);
                case 6:
                  return ctx.a(2, YOUTUBE_VIDEO_URL + matchedVideoId);
              }
            }
          }, gen);
        }));
      },
      mediaObjectChange: function(info) {
        var mediaObject = info.mediaObject;
        var node = info.node;
        if (!isLiveStream()) {
          mediaObject.ext = "mp4";
          mediaObject.exts = ["mp4"];
          mediaObject.cacheUrl = node.src;
          return "video";
        }
        mediaObject.type = null;
      }
    },
    idsProcess: function(info) {
      var urlMatch = null == info.id ? void 0 : info.id.url;
      var defaultIds = info.defaultIds;
      var index = info.index;
      if ((null == urlMatch ? void 0 : urlMatch.match(/\/search\/audio\/[\s\-_+]+\.mp3/i)) ||
          isLiveStream()) {
        defaultIds.splice(index, 1);
      }
    },
    toggleLight: {
      turnOff: {
        parentUpdate: function(info, state) {
          if (location.href.includes("/shorts")) {
            var backdrop = state.$backdrop;
            backdrop.remove();
            var shortsInner = document.querySelector("#shorts-inner-container");
            var innerParent = null == shortsInner ? void 0 : shortsInner.parentElement;
            if (innerParent) {
              innerParent.classList.add("--savior-overlay-z-index-top");
              shortsInner.classList.add("--savior-overlay-position-relative", "--savior-overlay-z-index-top");
              backdrop.style.top = "0px";
              backdrop.style.left = "0px";
              innerParent.prepend(backdrop);
            }
          }
        },
        updated: function(info, state) {
          if (location.href.includes("/shorts")) {
            var backdropClone = state.$backdrop.cloneNode();
            var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            backdropClone.style.backgroundColor = isDark ? "#000" : "#1a1a1a";
            var targetNode = state.parent.$node;
            var nodeParent = null == targetNode ? void 0 : targetNode.parentElement;
            if (nodeParent) {
              nodeParent.classList.add("--savior-overlay-z-index-top");
              targetNode.classList.add("--savior-overlay-position-relative", "--savior-overlay-z-index-top");
              backdropClone.style.top = "0px";
              backdropClone.style.left = "0px";
              nodeParent.prepend(backdropClone);
            }
            backdropClone.addEventListener("click", function() {
              state.parent.updateSharedState({ viewedWidgetId: null, isLightOffGlobal: false });
              state.setState({ isLightOff: false });
              state.handleLightOnOff(false);
            });
          }
        }
      }
    }
  };

  exports.default = youtubeProvider;
};
