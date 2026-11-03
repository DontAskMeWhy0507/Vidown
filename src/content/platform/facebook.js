// Module 232 [platform] - Savior Facebook Content Media Extractor and DOM Resolver
export default function(module, exports, require) {
  "use strict";

  require.r(exports);

  var cryptoUtils = require(0);
  var mediaConstants = require(1);
  var urlUtils = require(3);
  var domHelper = require(12);
  var dashParser = require(14);

  function regeneratorRuntime() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t, e, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function o(r, n, i, o) {
      var u = n && n.prototype instanceof s ? n : s, l = Object.create(u.prototype);
      return defineProperty(l, "_invoke", function(r, n, i) {
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
    function s() {}
    function l() {}
    function f() {}
    e = Object.getPrototypeOf;
    var d = [][n] ? e(e([][n]())) : (defineProperty(e = {}, n, (function() { return this; })), e);
    var h = f.prototype = s.prototype = Object.create(d);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, defineProperty(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = f, defineProperty(h, "constructor", f), defineProperty(f, "constructor", l), l.displayName = "GeneratorFunction",
      defineProperty(f, i, "GeneratorFunction"), defineProperty(h), defineProperty(h, i, "Generator"), defineProperty(h, n, (function() { return this; })),
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

  function slicedToArray(arr, lengthLimit) {
    return (
      (function(arr) {
        if (Array.isArray(arr)) return arr;
      })(arr) ||
      (function(arr, lengthLimit) {
        var iter = null == arr ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) || arr["@@iterator"];
        if (null != iter) {
          var step, nextFn, result = [], isDone = true, hasErr = false, err;
          try {
            if (nextFn = (iter = iter.call(arr)).next, 0 === lengthLimit) {
              if (Object(iter) !== iter) return;
              isDone = false;
            } else {
              for (; !(isDone = (step = nextFn.call(iter)).done) && (result.push(step.value), result.length !== lengthLimit); isDone = true);
            }
          } catch (e) {
            hasErr = true;
            err = e;
          } finally {
            try {
              if (!isDone && null != iter.return) {
                var retVal = iter.return();
                if (Object(retVal) !== retVal) return;
              }
            } finally {
              if (hasErr) throw err;
            }
          }
          return result;
        }
      })(arr, lengthLimit) ||
      (function(arr, lengthLimit) {
        if (arr) {
          if (typeof arr === "string") return arrayLikeToArray(arr, lengthLimit);
          var typeStr = {}.toString.call(arr).slice(8, -1);
          if ("Object" === typeStr && arr.constructor) typeStr = arr.constructor.name;
          if ("Map" === typeStr || "Set" === typeStr) return Array.from(arr);
          if ("Arguments" === typeStr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(typeStr)) {
            return arrayLikeToArray(arr, lengthLimit);
          }
        }
      })(arr, lengthLimit) ||
      (function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }

  function arrayLikeToArray(sourceArray, lengthLimit) {
    if (null == lengthLimit || lengthLimit > sourceArray.length) lengthLimit = sourceArray.length;
    for (var i = 0, newArr = Array(lengthLimit); i < lengthLimit; i++) newArr[i] = sourceArray[i];
    return newArr;
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

  var messengerAudioMap = new Map();

  if (/facebook\.com/.test(location.href)) {
    setTimeout(function() {
      Object(cryptoUtils.sendMessage)({
        type: mediaConstants.b.SCRIPTING.INJECT,
        file: "facebook/messenger-audio"
      });
      window.addEventListener("message", function(event) {
        if (!event || event.origin !== window.location.origin) return;
        if (event.data && "facebook-messenger-audio" === event.data.type) {
          messengerAudioMap.set(event.data.url, event.data);
        }
        if (event.data && "facebook-messenger-audio-revoked" === event.data.type) {
          messengerAudioMap.delete(event.data.url);
        }
      });
    });
  }

  var PERMALINK_URL_MIN_QUALITY_REGEX = /permalink_url(\*"):(.*?)(\*"),(\*")*min_quality_preference(.*?:)/g;
  var PERMALINK_URL_SHAKA_REGEX = /permalink_url(\*"):(.*?)(\*"),(\*")*video_player_shaka_performance_logger_init/g;
  var DASH_MANIFEST_REGEX = /dash_manifest(\*")*:(\*")(.*?)(\*"),(.*?:)/;
  var PLAYABLE_URL_REGEX = /playable_url(\*"):(\*")(.*?)(\*"),(\*")/;
  var storyVideoUrlBuffer = "";
  var storyAudioUrlBuffer = "";
  var storiesMediaCache = new Map();

  var buildTahoeAsyncUrl = function(videoId) {
    return `${location.origin}/video/tahoe/async/${videoId}/?chain=true&isvideo=true&payloadtype=primary`;
  };

  function parseDashManifestOrPlayableUrl(snippets, mediaInfo) {
    if (0 === snippets.length) return [];
    var snippet = snippets[0];
    if (snippets.length > 1) {
      snippet = snippets[0];
    }
    var manifestMatch = DASH_MANIFEST_REGEX.exec(snippet);
    if (manifestMatch) {
      var parsedItems = Object(dashParser.d)(manifestMatch[3], mediaInfo.filename?.trim?.());
      parsedItems.forEach(function(item) {
        if ("webm" === item.ext) {
          item.ext = "mp4";
        }
      });
      return parsedItems;
    }
    var playableMatch = PLAYABLE_URL_REGEX.exec(snippet);
    if (!playableMatch) return [];
    var decodedUrl = playableMatch[3].replace(/\\\//g, "/").replace(/&amp;/g, "&");
    var mediaItem = Object(urlUtils.f)(decodedUrl);
    mediaItem.filename = mediaInfo.filename?.trim?.();
    mediaItem.type = "video";
    if ("webm" === mediaItem.ext) {
      mediaItem.ext = "mp4";
    }
    return [mediaItem];
  }

  function isWatchLivePermalink() {
    if (!location.pathname.startsWith("/watch/live")) return true;
    var currentUrl = new URL(location.href);
    var refParam = currentUrl.searchParams.get("ref");
    return !(!currentUrl.searchParams.get("v") || "watch_permalink" !== refParam);
  }

  function isLiveStreamVideo(targetNode) {
    var closestContainer = targetNode.closest(".xal61yo");
    var visualCompletionEl = closestContainer?.querySelector?.('[data-visualcompletion="ignore"]');
    var autoSpan = visualCompletionEl?.querySelector?.('span[dir="auto"]');
    if (autoSpan && !autoSpan.closest('a[role="link"]')) {
      return true;
    }
    var videoPlayerEl = targetNode.closest('[data-visualcompletion="ignore"]')?.querySelector?.('[aria-label="Video player"]');
    var indicatorSpan = videoPlayerEl?.querySelector?.('i~div span[dir="auto"]');
    if (!indicatorSpan) {
      var rootEl = targetNode || document;
      indicatorSpan = rootEl?.querySelector?.('div[role="main"] div[data-visualcompletion="ignore"] i~div span[dir="auto"]');
    }
    if (indicatorSpan) {
      var bgMatch = window.getComputedStyle(indicatorSpan.parentElement).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (bgMatch && bgMatch.length > 2) {
        var rgbParts = slicedToArray(bgMatch, 4);
        var red = rgbParts[1];
        var green = rgbParts[2];
        var blue = rgbParts[3];
        if (parseInt(red) >= 200 && parseInt(blue) < 80 && parseInt(green) < 80) {
          return true;
        }
      }
    }
    return false;
  }

  var findFacebookArticleRoot = function(node) {
    var container = node.closest('div[role="article"], div[data-virtualized="false"]') ||
                    node.closest("div._6x84") ||
                    node.closest('[data-pagelet="WatchPermalinkVideo"]') ||
                    node.closest("div[aria-posinset]");
    var parentHelper = Object(domHelper.d)(node);
    return container || (container = parentHelper.parentElement), container;
  };

  var extractFacebookPostTitle = function(container, defaultTitle = document.title) {
    var previewMessages = container?.querySelectorAll?.('[data-ad-comet-preview="message"]');
    var previewEl = ((previewMessages?.[0]?.innerText?.length) || 0) > 0
      ? previewMessages?.[0]
      : container?.querySelectorAll?.('[data-ad-comet-preview="message"]')?.[1];
    var dirSpans = container?.querySelectorAll?.('span[dir="auto"]') || [];
    var titleEl = previewEl;
    if (!container?.matches?.('[data-virtualized="false"]')) {
      titleEl = container?.querySelector?.('span[dir="auto"]>span') || titleEl;
    }
    var linkSpan = container?.closest?.("li")?.querySelector?.('span a[href][role="link"] span');
    if (!titleEl) {
      if (linkSpan) {
        var linkText = linkSpan.innerText?.trim?.();
        if (linkText && linkText.length) return linkText;
      }
      titleEl = location.pathname.startsWith("/watch/live") && isWatchLivePermalink()
        ? dirSpans[0]
        : dirSpans.length > 2
          ? dirSpans[2]
          : dirSpans[dirSpans.length - 1];
    }
    return titleEl ? (getNodeTextContent(titleEl) || titleEl.innerText?.trim?.()) : defaultTitle;
  };

  var getNodeTextContent = function(node) {
    var childNodes = node?.childNodes || [];
    var result = "";
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i].nodeType === 3 && childNodes[i].textContent) {
        result += childNodes[i].textContent;
      }
    }
    return result?.trim?.();
  };

  var lastTrackedUrl = location.href;

  var facebookProvider = {
    getDomains: function() {
      return ["facebook.com"];
    },
    addNode: function() {
      return ["[aria-valuenow]", "video"];
    },
    getImageNode: function(node) {
      if (location.href.includes("stories") && node.hasAttribute("draggable")) {
        return node;
      }
    },
    isMiniPlayerNode: function(node) {
      return node.matches('[data-scope="messages_table"]:has([aria-valuenow])');
    },
    isValidVideoNode: function(node) {
      return "VIDEO" == node.nodeName || Object(domHelper.m)(node);
    },
    getCustomParent: function(node) {
      return node.hasAttribute("savior-scanned-img") && !node.closest('a[href*="reel"]')
        ? node.closest('[role="link"]')
        : null;
    },
    shouldWidgetAttachToParentNode: function(node) {
      return !!node.hasAttribute("savior-scanned-img");
    },
    shouldShowWidgetForImage: function() {
      return true;
    },
    parse: {
      sources: [
        {
          checkSource: function(info) {
            return "image" === info.type;
          },
          parse: function(info) {
            var media = info.media;
            return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
              return regeneratorRuntime().w(function(ctx) {
                for (;;) {
                  switch (ctx.n) {
                    case 0:
                      return ctx.a(2, [media]);
                  }
                }
              }, gen);
            }));
          }
        },
        {
          checkSource: function(info) {
            return /[a-z0-9\-_]\.mpd/i.test(info.url);
          },
          parse: function(info) {
            var media = info.media;
            var response = info.response;
            return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
              var err;
              return regeneratorRuntime().w(function(ctx) {
                for (;;) {
                  switch (ctx.p = ctx.n) {
                    case 0:
                      media.filename = media.fixName || media.filename;
                      ctx.p = 1;
                      if (response) {
                        ctx.n = 3;
                        break;
                      }
                      ctx.n = 2;
                      return fetch(media.url).then(function(res) {
                        return res.text();
                      });
                    case 2:
                      response = ctx.v;
                    case 3:
                      if (!Array.isArray(response)) {
                        ctx.n = 4;
                        break;
                      }
                      return ctx.a(2, response);
                    case 4:
                      return ctx.a(2, Object(dashParser.d)(response, media.filename));
                    case 5:
                      ctx.p = 5;
                      err = ctx.v;
                      console.warn(err);
                      return ctx.a(2, []);
                  }
                }
              }, gen, null, [[1, 5]]);
            }));
          }
        },
        {
          checkSource: function(info) {
            return /\/video\/tahoe\/async\/\d+\/\?chain=true&isvideo=true&payloadtype=primary/.test(info.url);
          },
          parse: function(info) {
            var media = info.media;
            return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
              var docHtml, dtsgToken, pkgCohort, clientRev, postUrl, response, rawText, jsonText, parsedJson, instances, videoConfigs, dashManifest;
              return regeneratorRuntime().w(function(ctx) {
                for (;;) {
                  switch (ctx.n) {
                    case 0:
                      docHtml = document.documentElement.innerHTML;
                      dtsgToken = docHtml.match(/"DTSGInitialData"\s*,\s*\[\]\s*,\s*\{\s*"token"\s*:\s*"([^"]+)"/)?.[1];
                      if (dtsgToken) {
                        ctx.n = 1;
                        break;
                      }
                      console.error("fb_dtsg not found. Open a logged-in Facebook tab first.");
                      return ctx.a(2, []);
                    case 1:
                      pkgCohort = docHtml.match(/pkg_cohort["']\s*:\s*["'](.+?)["']/)?.[1] ?? "PHASED:DEFAULT";
                      clientRev = docHtml.match(/client_revision["']\s*:\s*(\d+),/)?.[1] ?? "3944515";
                      postUrl = String(media.url);
                      ctx.n = 2;
                      return fetch(postUrl, {
                        method: "POST",
                        credentials: "include",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({
                          __a: "1",
                          __pc: pkgCohort,
                          __rev: clientRev,
                          fb_dtsg: dtsgToken
                        })
                      });
                    case 2:
                      response = ctx.v;
                      ctx.n = 3;
                      return response.text();
                    case 3:
                      rawText = ctx.v;
                      jsonText = rawText.replace(/^for\s*\(\s*;\s*;\s*\)\s*;/, "");
                      parsedJson = JSON.parse(jsonText);
                      instances = parsedJson?.jsmods?.instances ?? [];
                      videoConfigs = instances.filter(function(item) {
                        return "VideoConfig" === item?.[1]?.[0];
                      }).map(function(item) {
                        return item[2][0];
                      }).filter(function(item) {
                        return item?.video_id;
                      });
                      dashManifest = videoConfigs.flatMap(function(item) {
                        return item.videoData;
                      }).find(function(item) {
                        return item?.video_id && postUrl.includes(item.video_id);
                      })?.dash_manifest;
                      return ctx.a(2, Object(dashParser.d)(dashManifest, media.filename));
                  }
                }
              }, gen);
            }));
          }
        },
        {
          checkSource: function(info) {
            return "blob" == info.altUrl;
          },
          parse: function(info) {
            return [info.media];
          }
        },
        {
          checkSource: function(info) {
            return "audio" == info.type;
          },
          parse: function(info) {
            var media = info.media;
            media.ext = "mp3";
            return [media];
          }
        },
        {
          checkSource: function(info) {
            return String(info.url).includes("/stories");
          },
          parse: function(info) {
            var media = info.media;
            return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
              var params, videoId, storyId, cUser, token, response, responseText, parsedResponse, fallbackMedia;
              return regeneratorRuntime().w(function(ctx) {
                for (;;) {
                  switch (ctx.p = ctx.n) {
                    case 0:
                      params = media.params;
                      videoId = params.videoId;
                      storyId = params.storyId;
                      cUser = document.cookie.match(/c_user.*?(?=;)/g)?.[0]?.split("=")[1];
                      token = document.documentElement.innerHTML.match(/"token":".*?(?=")/g)?.[0]?.split('"')[3];
                      ctx.n = 1;
                      return fetch("https://www.facebook.com/api/graphql/", {
                        headers: {
                          accept: "*/*",
                          "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                          "content-type": "application/x-www-form-urlencoded",
                          priority: "u=1, i",
                          "sec-ch-prefers-color-scheme": "dark",
                          "sec-ch-ua": '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
                          "sec-ch-ua-full-version-list": '"Not(A:Brand";v="99.0.0.0", "Google Chrome";v="133.0.6943.127", "Chromium";v="133.0.6943.127"',
                          "sec-ch-ua-mobile": "?0",
                          "sec-ch-ua-model": '"',
                          "sec-ch-ua-platform": '"macOS"',
                          "sec-ch-ua-platform-version": '"15.3.1"',
                          "sec-fetch-dest": "empty",
                          "sec-fetch-mode": "cors",
                          "sec-fetch-site": "same-origin",
                          "x-asbd-id": "359341",
                          "x-fb-friendly-name": "useMWEncryptedBackupsFetchBackupIdsV2Query"
                        },
                        referrerPolicy: "strict-origin-when-cross-origin",
                        body: "av=" + cUser + "&__aaid=0&__user=" + cUser + "&__a=1&__req=t&__hs=20150.HYP%3Acomet_pkg.2.1...1&dpr=2" +
                          "&__ccg=EXCELLENT&__rev=1020527715&__s=gbg29a%3Anyn9da%3A1yufv6&__hsi=7477437896286354466" +
                          "&__dyn=7xeXzWK1ixt0mUyEqxemh0noeEb8nwgUao4u5QdwSwAyUco2qwJyE24wJwpUe8hwaG1sw9u0LVEtwMw6ywMwto886C11wBz81s8hwGxu782" +
                          "lwv89kbxS1Fwc61awkovwRwlE-U2exi4UaEW2G1jwUBwJK14xm3y11xfxmu3W3iU8o4Wm7-2K0-obUG2-azqwaW1jg2cwMwhEkxebwHwKG4UrwFg2f" +
                          "wxyo6J0qo4e16wWzUfHDzUiBG2OUqwjVqwLwHwea1ww" +
                          "&__csr=gin4gDbslkJjOgJ4cItf8xApnbiTsAYnknvNfeRtnbR44uRq9b-HayZ8z-g_qbiSpAGQCKBRq9h4m8K--jVmiFYOmbKV5GmjLG9yZGaVaKFU" +
                          "HBFSJkEgRKhG8hEC9zEGaooz8hySiaG4oPBGUO-rwBF1eiAry-7F8GUGczpoOq3h2Elwwxmm6pogyFogCxidwQGqUmzVoHG2Cq5898nx614y9FUjzu" +
                          "2S1bwWDixW5EdpUozUSawvoixHy9Ey3q14K19wAxGhx26Ey6ElyF8vCwUzovwVxDAx-0a8wtofo7O2G0RUjwgU1486q0mu1ECwtF4ZkQbCo33wm9E4" +
                          "hwHw6jw920A86qumayoc8a-2W0X82axfCoOh4Wx6u542C1qxG0I8SRK8x-3S0P828y5Cw4uxa03nS1Tw7qw1T-00D0804ui0Lolw5iy80Wi0pvg3hx" +
                          "u1fg5a5o2yw9h1W2Ceg7S0bqwjo2iw2UA1cwb-0zo0D-O02mU1ZU08o-06RFYw1wo084o0orw1wu09kw1Aq5d03oU0B20uaawvmEiw" +
                          "&__comet_req=15&fb_dtsg=" + token + "&jazoest=25225&lsd=tgJITN515HhMD_0peTHNxB&__spin_r=1020527715&__spin_b=trunk&__spin_t=1740976678" +
                          "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=StoriesViewerBucketPrefetcherMultiBucketsQuery" +
                          "&variables=%7B%22bucketIDs%22%3A%5B%22" + videoId +
                          "%22%5D%2C%22scale%22%3A2%2C%22blur%22%3A20%2C%22shouldEnableArmadilloStoryReply%22%3Atrue%2C%22shouldEnableLiveInStories%22%3Atrue" +
                          "%2C%22feedbackSource%22%3A65%2C%22useDefaultActor%22%3Afalse%2C%22feedLocation%22%3A%22COMET_MEDIA_VIEWER%22" +
                          "%2C%22focusCommentID%22%3Anull%2C%22shouldDeferLoad%22%3Afalse%2C%22isStoriesArchive%22%3Afalse" +
                          "%2C%22__relay_internal__pv__IsWorkUserrelayprovider%22%3Afalse%7D" +
                          "&server_timestamps=true&doc_id=9340191609394579",
                        method: "POST",
                        mode: "cors",
                        credentials: "include"
                      });
                    case 1:
                      response = ctx.v;
                      ctx.p = 2;
                      ctx.n = 3;
                      return response.text();
                    case 3:
                      responseText = ctx.v;
                      parsedResponse = JSON.parse(responseText.split("\n")[0]);
                      parsedResponse?.data?.nodes?.forEach(function(nodeItem) {
                        nodeItem.unified_stories.edges.forEach(function(edgeItem) {
                          var mediaList = [];
                          edgeItem.node.attachments.forEach(function(att) {
                            att.media.videoDeliveryResponseFragment?.videoDeliveryResponseResult?.dash_manifests?.forEach(function(dm) {
                              var parsedManifest = Object(dashParser.d)(dm.manifest_xml);
                              parsedManifest.forEach(function(item) {
                                item.filename = `${nodeItem.owner.name}'s ${(new Date).toLocaleDateString().replace(/\//g, "-")} story`;
                              });
                              mediaList.push(...parsedManifest);
                            });
                          });
                          storiesMediaCache.set(`${nodeItem.id}-${edgeItem.node.id}`, mediaList);
                        });
                      });
                      ctx.n = 5;
                      break;
                    case 4:
                      ctx.p = 4;
                      ctx.v;
                      fallbackMedia = Object(urlUtils.f)(storyVideoUrlBuffer);
                      fallbackMedia.url = { videoUrl: storyVideoUrlBuffer, audioUrl: storyAudioUrlBuffer };
                      fallbackMedia.ext = "mp4";
                      fallbackMedia.exts = ["mp4"];
                      fallbackMedia.type = "video";
                      fallbackMedia.filename = document.title;
                      return ctx.a(2, [fallbackMedia]);
                    case 5:
                      return ctx.a(2, storiesMediaCache.get(`${videoId}-${storyId}`) || []);
                  }
                }
              }, gen, null, [[2, 4]]);
            }));
          }
        }
      ],
      default: function(info) {
        var media = info.media;
        var response = info.response;
        var target = media;
        if ("object" == typeof target.url) return [target];
        if (/(https:\/\/video\..+\.mp4\?)|(scontent(.+)\.fbcdn.net\/)|(video.+\.fbcdn\.net)/.test(target.url)) {
          target.type = "video";
          target.ext = "mp4";
          return [target];
        }
        if ("story" == target.facebookType && target.url.includes(".mp4")) return [target];
        if (!response) return [];
        if (!response || target.loggedOut) {
          var scripts = [...document.querySelectorAll("script")].filter(function(script) {
            return script.innerText && script.innerText.includes("dash_manifest") && script.innerText.includes(target.identifier || "undefined");
          });
          return 0 == scripts.length ? [] : parseDashManifestOrPlayableUrl([scripts[0].innerText], target);
        }
        var matches = response.match(PERMALINK_URL_MIN_QUALITY_REGEX);
        if (!matches) {
          matches = response.match(PERMALINK_URL_SHAKA_REGEX);
        }
        return matches ? parseDashManifestOrPlayableUrl(matches.filter(function(m) {
          return m.includes(target.identifier);
        }), target) : [];
      }
    },
    urls: [
      {
        checkUrl: function(info) {
          return "img" === info.node.tagName.toLowerCase();
        },
        getUrl: function(info) {
          var node = info.node;
          var url = info.url;
          return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
            var imgMedia;
            return regeneratorRuntime().w(function(ctx) {
              for (;;) {
                switch (ctx.n) {
                  case 0:
                    ctx.n = 1;
                    return Object(urlUtils.g)({ url: url, node: node });
                  case 1:
                    imgMedia = ctx.v;
                    return ctx.a(2, [imgMedia]);
                }
              }
            }, gen);
          }));
        }
      },
      {
        checkUrl: function(info) {
          return info.node.matches("[aria-valuenow]");
        },
        getUrl: function() {
          return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
            var audioList;
            return regeneratorRuntime().w(function(ctx) {
              for (;;) {
                switch (ctx.n) {
                  case 0:
                    audioList = Array.from(messengerAudioMap.values()).map(function(item) {
                      var mediaObj = Object(urlUtils.f)(item.url);
                      var parts = slicedToArray(item.contentType.split("/"), 2);
                      var mainType = parts[0];
                      var subType = parts[1];
                      mediaObj.type = mainType;
                      mediaObj.ext = subType;
                      mediaObj.filename = `Facebook Messenger Audio - ${item.contentDuration} - ${item.contentLength}`;
                      mediaObj.size = item.contentLength;
                      return mediaObj;
                    });
                    return ctx.a(2, audioList);
                }
              }
            }, gen);
          }));
        }
      },
      {
        checkUrl: function() {
          return location.href.includes("/reel");
        },
        getUrl: function() {
          return "https://www.facebook.com/api/graphql/";
        },
        mediaObjectChange: function(info) {
          var mediaObject = info.mediaObject;
          var node = info.node;
          return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
            var videoIdContainer, videoId, spanDir;
            return regeneratorRuntime().w(function(ctx) {
              for (;;) {
                switch (ctx.n) {
                  case 0:
                    ctx.n = 1;
                    return Object(cryptoUtils.sleep)(500);
                  case 1:
                    videoIdContainer = node.closest("[data-video-id]");
                    videoId = videoIdContainer?.getAttribute("data-video-id");
                    spanDir = node.closest("[data-visualcompletion]")?.querySelector('span[dir="auto"]');
                    mediaObject.filename = spanDir ? (getNodeTextContent(spanDir) || spanDir.innerText.trim()) : document.title;
                    if (videoId) {
                      mediaObject.url = buildTahoeAsyncUrl(videoId);
                    }
                    mediaObject.ext = "m3u8";
                    mediaObject.exts = ["m3u8"];
                    return ctx.a(2, "video");
                }
              }
            }, gen);
          }));
        }
      },
      {
        checkUrl: function(info) {
          return !(!info.node.closest('a[href*="reel"]'));
        },
        getUrl: function(info) {
          var reelAnchor = info.node.closest('a[href*="reel"]');
          var reelId = reelAnchor?.getAttribute("href")?.match(/\/reel\/(\w+)\//)?.[1];
          if (!reelId) return [];
          var media = Object(urlUtils.f)(buildTahoeAsyncUrl(reelId));
          media.filename = reelAnchor?.getAttribute("aria-label") || document.title;
          media.ext = "m3u8";
          media.exts = ["m3u8"];
          media.type = "video";
          return [media];
        }
      },
      {
        checkUrl: function() {
          return location.href.includes("/stories");
        },
        getUrl: function(info) {
          var node = info.node;
          return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
            var storyId, videoId, cachedMedia, storyMedia;
            return regeneratorRuntime().w(function(ctx) {
              for (;;) {
                switch (ctx.n) {
                  case 0:
                    storyId = node.closest("[data-id]")?.getAttribute("data-id");
                    var activeDialogNavDiv = Array.from(node.closest("#viewer_dialog")?.querySelectorAll('[role="navigation"] div[id]') || []).find(function(el) {
                      return "rgba(0, 0, 0, 0)" !== getComputedStyle(el).backgroundColor;
                    });
                    videoId = activeDialogNavDiv?.id || location.href.match(/\/stories\/(\d+)\//)?.[1];
                    if (storyId && videoId) {
                      ctx.n = 1;
                      break;
                    }
                    return ctx.a(2);
                  case 1:
                    cachedMedia = storiesMediaCache.get(`${videoId}-${storyId}`);
                    if (!cachedMedia) {
                      ctx.n = 2;
                      break;
                    }
                    return ctx.a(2, cachedMedia);
                  case 2:
                    storyMedia = Object(urlUtils.f)(`https://www.facebook.com/stories/${videoId}/${storyId}`);
                    storyMedia.params = { videoId: videoId, storyId: storyId };
                    storyMedia.type = "video";
                    storyMedia.ext = "mp4";
                    storyMedia.exts = ["mp4"];
                    storyMedia.facebookType = "story";
                    return ctx.a(2, [storyMedia]);
                }
              }
            }, gen);
          }));
        }
      },
      {
        checkUrl: function(info) {
          var url = info.url;
          return "VIDEO" == info.node.nodeName && /scontent(.+)\.fbcdn.net\//i.test(url);
        },
        getUrl: function(info) {
          return info.url;
        }
      },
      {
        checkUrl: function(info) {
          var url = info.url;
          return !document.getElementById("chatsidebarsheet") && (url.includes("blob:") || url.includes("blob://") || !url);
        },
        getUrl: function() {
          return "https://www.facebook.com/api/graphql/";
        },
        mediaObjectChange: function(info) {
          var mediaObject = info.mediaObject;
          var node = info.node;
          return asyncGeneratorRunner(void 0, void 0, void 0, regeneratorRuntime().m(function gen() {
            var parentEl, articleRoot, watchRegex, videoLinks, anchorClosest, targetLink, match, videoId, liveIndicators,
                dashScript, videoIdMatch, savedUrlResp;
            return regeneratorRuntime().w(function(ctx) {
              for (;;) {
                switch (ctx.n) {
                  case 0:
                    if (node) {
                      ctx.n = 1;
                      break;
                    }
                    return ctx.a(2);
                  case 1:
                    ctx.n = 2;
                    return Object(cryptoUtils.sleep)(500);
                  case 2:
                    parentEl = Object(domHelper.d)(node);
                    articleRoot = findFacebookArticleRoot(node);
                    if (!location.pathname.startsWith("/watch") || !isLiveStreamVideo(node)) {
                      ctx.n = 3;
                      break;
                    }
                    mediaObject.type = "livestream";
                    return ctx.a(2, "livestream");
                  case 3:
                    if (!parentEl) {
                      ctx.n = 6;
                      break;
                    }
                    watchRegex = /facebook\.com\/watch(\/)*\?.*?(&)*v=(\d+)/;
                    videoLinks = [...(articleRoot?.querySelectorAll("a") || [])].filter(function(a) {
                      return a.href.includes("/videos/") || watchRegex.test(a.href);
                    });
                    anchorClosest = parentEl.closest("a");
                    if (!(videoLinks.length > 0 || anchorClosest)) {
                      ctx.n = 5;
                      break;
                    }
                    liveIndicators = [...(articleRoot?.querySelectorAll('div[data-visualcompletion="ignore"] i~div span[dir="auto"]') || [])].filter(function(el) {
                      return el.innerText.toLowerCase().includes("live") || el.innerText.includes("TRỰC TIẾP");
                    });
                    if (!liveIndicators[0]) {
                      ctx.n = 4;
                      break;
                    }
                    return ctx.a(2);
                  case 4:
                    targetLink = videoLinks[0] || anchorClosest;
                    match = watchRegex.exec(targetLink.href);
                    if (match) {
                      videoId = match[3];
                      mediaObject.identifier = videoId;
                    } else {
                      match = /facebook\.com(\/[^?]+)(\/)*\?/.exec(targetLink.href);
                      if (match) {
                        var pathParts = match[1].split("/");
                        mediaObject.identifier = pathParts.pop() || pathParts.pop();
                      }
                    }
                  case 5:
                    if (watchRegex.test(location.href) && !mediaObject.identifier) {
                      var locMatch = watchRegex.exec(location.href);
                      mediaObject.identifier = locMatch?.[3];
                    }
                    if (!(!location.href.includes("/watch/") || watchRegex.test(location.href) || mediaObject.identifier)) {
                      dashScript = [...document.querySelectorAll("script")].filter(function(s) {
                        return s.innerText.includes("dash_manifest");
                      })[0];
                      if (dashScript) {
                        videoIdMatch = /("|')*video_id("|')*\s*:\s*(.+?)[}\]\s,]/.exec(dashScript.innerText);
                        if (videoIdMatch) {
                          mediaObject.identifier = videoIdMatch[3];
                        }
                      }
                    }
                  case 6:
                    if (!mediaObject.identifier) {
                      var videoIdEl = node.closest("[data-video-id]");
                      if (videoIdEl) {
                        var vid = videoIdEl.getAttribute("data-video-id");
                        mediaObject.identifier = vid || void 0;
                      }
                      if (!mediaObject.identifier) {
                        mediaObject.identifier = node.getAttribute("savior-vid") || void 0;
                      }
                    }
                    var profileLink = articleRoot?.querySelector('div[data-ad-rendering-role="profile_name"] a');
                    if (!profileLink || mediaObject.identifier) {
                      ctx.n = 9;
                      break;
                    }
                    return ctx.n = 7, Object(cryptoUtils.sendMessage)({
                      type: mediaConstants.b.GET_FB_SAVED_URL,
                      params: { name: profileLink.pathname + profileLink.search.split("&")[0] }
                    });
                  case 7:
                    savedUrlResp = ctx.v;
                    if (savedUrlResp) {
                      ctx.n = 8;
                      break;
                    }
                    return ctx.a(2);
                  case 8:
                    var savedParts = savedUrlResp.url.split("/");
                    mediaObject.identifier = savedParts.pop() || savedParts.pop();
                  case 9:
                    mediaObject.url = buildTahoeAsyncUrl(mediaObject.identifier);
                    mediaObject.filename = extractFacebookPostTitle(articleRoot);
                    mediaObject.ext = "m3u8";
                    mediaObject.exts = ["m3u8"];
                    return ctx.a(2, "video");
                }
              }
            }, gen);
          }));
        }
      }
    ],
    forceUpdate: function() {
      if (location.href !== lastTrackedUrl) {
        if (location.href.match("facebook.com/reel") && document.pictureInPictureElement) {
          document.exitPictureInPicture();
        }
        EE.emit("widget.forceUpdate");
        lastTrackedUrl = location.href;
      }
    },
    idsProcess: function(info) {
      var defaultIds = info.defaultIds;
      var idObj = info.id;
      var index = info.index;
      if (idObj.url.match(/live-dash\/.*(\.m4v|audio)/i)) {
        defaultIds.splice(index, 1);
      }
    },
    processRequestIds: function(info) {
      if (location.href.match(/\/watch\/live/i)) {
        return true;
      }
      if (location.href.includes("/stories") && "mp4" == info.ext) {
        var rawUrl = info.url;
        var paramsToDelete = ["bytestart", "byteend"];
        var parsedUrl = new URL(rawUrl);
        paramsToDelete.forEach(function(param) {
          parsedUrl.searchParams.delete(param);
        });
        var cleanUrl = parsedUrl.toString();
        if (cleanUrl != storyAudioUrlBuffer && cleanUrl != storyAudioUrlBuffer) {
          if (cleanUrl.includes("/m3")) {
            storyVideoUrlBuffer = cleanUrl;
          } else {
            storyAudioUrlBuffer = cleanUrl;
          }
        }
      }
      return false;
    }
  };

  exports.default = facebookProvider;
};
