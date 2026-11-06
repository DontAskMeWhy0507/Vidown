// Module 0 - Savior DOM utilities, array operations, download logging, and link decryption helper
export default function(t, e, r) {
  "use strict";
  r.r(e), function(t2) {
    r.d(e, "query", (function() {
      return h;
    })), r.d(e, "queryAll", (function() {
      return p;
    })), r.d(e, "findParent", (function() {
      return v;
    })), r.d(e, "nearestParent", (function() {
      return m;
    })), r.d(e, "getNodePropOrEmptyString", (function() {
      return y;
    })), r.d(e, "stripTagsExcept", (function() {
      return g;
    })), r.d(e, "toArray", (function() {
      return b;
    })), r.d(e, "unique", (function() {
      return w;
    })), r.d(e, "arrayBufferToBase64", (function() {
      return A;
    })), r.d(e, "base64ToArrayBuffer", (function() {
      return _;
    })), r.d(e, "isMatches", (function() {
      return E;
    })), r.d(e, "getYoutubeInfo", (function() {
      return S;
    })), r.d(e, "getYoutubeDashMPDInfo", (function() {
      return O;
    })), r.d(e, "send", (function() {
      return x;
    })), r.d(e, "get", (function() {
      return k;
    })), r.d(e, "_getSize", (function() {
      return M;
    })), r.d(e, "getSize", (function() {
      return T;
    })), r.d(e, "logDownloadError", (function() {
      return I;
    })), r.d(e, "beautifyFileSize", (function() {
      return j;
    })), r.d(e, "detectMediaTypeAndExt", (function() {
      return C;
    })), r.d(e, "getFileNameFromContentDisposition", (function() {
      return B;
    })), r.d(e, "getMediaType", (function() {
      return U;
    })), r.d(e, "getProp", (function() {
      return N;
    })), r.d(e, "call", (function() {
      return D;
    })), r.d(e, "defined", (function() {
      return R;
    })), r.d(e, "debounce", (function() {
      return L;
    })), r.d(e, "flatten", (function() {
      return q;
    })), r.d(e, "generateId", (function() {
      return G;
    })), r.d(e, "sendMessageDirect", (function() {
      return Q;
    })), r.d(e, "sendMessage", (function() {
      return z;
    })), r.d(e, "sendRequest", (function() {
      return H;
    })), r.d(e, "isSpecialUrls", (function() {
      return V;
    })), r.d(e, "getFilenameFromTitleOfDownload", (function() {
      return $;
    })), r.d(e, "getVideoId", (function() {
      return Y;
    })), r.d(e, "isValidData", (function() {
      return W;
    })), r.d(e, "getBestFitResolution", (function() {
      return X;
    })), r.d(e, "createMP3Resources", (function() {
      return K;
    })), r.d(e, "MIN_IMAGE_TOTAL_PIXEL", (function() {
      return Z;
    })), r.d(e, "createImageInfo", (function() {
      return tt;
    })), r.d(e, "getVideoPoster", (function() {
      return et;
    })), r.d(e, "splitMediaByWidgetID", (function() {
      return nt;
    })), r.d(e, "splitMediaByTitle", (function() {
      return it;
    })), r.d(e, "i18n", (function() {
      return ot;
    })), r.d(e, "isSameMedia", (function() {
      return at;
    })), r.d(e, "isTikTok", (function() {
      return st;
    })), r.d(e, "cleanSymbols", (function() {
      return ut;
    })), r.d(e, "fetchWithTimeout", (function() {
      return ct;
    })), r.d(e, "sleep", (function() {
      return lt;
    })), r.d(e, "beDefinedOr", (function() {
      return ft;
    })), r.d(e, "mergeArray", (function() {
      return dt;
    })), r.d(e, "Storage", (function() {
      return ht;
    })), r.d(e, "nextTick", (function() {
      return pt;
    })), r.d(e, "jwtDecode", (function() {
      return vt;
    })), r.d(e, "formatDomain", (function() {
      return mt;
    })), r.d(e, "paddZero", (function() {
      return yt;
    })), r.d(e, "transformVersionToNumber", (function() {
      return gt;
    })), r.d(e, "getDateNumber", (function() {
      return bt;
    })), r.d(e, "useDebounce", (function() {
      return wt;
    })), r.d(e, "checkSameDate", (function() {
      return At;
    })), r.d(e, "checkDateInRow", (function() {
      return _t;
    })), r.d(e, "checkIsDarkMode", (function() {
      return Et;
    })), r.d(e, "devLog", (function() {
      return St;
    })), r.d(e, "parseLinkPhimmoiChillee", (function() {
      return Ot;
    })), r.d(e, "extractFirstJsonObject", (function() {
      return xt;
    })), r.d(e, "youtubeAdsblockedRules", (function() {
      return kt;
    })), r.d(e, "getPageLanguage", (function() {
      return Mt;
    })), r.d(e, "getCookies", (function() {
      return Tt;
    })), r.d(e, "getYTCookieAuth", (function() {
      return It;
    })), r.d(e, "fetchStatus", (function() {
      return Bt;
    }));
    var n = r(1), i = r(11), o = r(5), a = r(3), s = r(16), u = r.n(s), c = r(24);
    function l() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var t3, e2, r2 = "function" == typeof Symbol ? Symbol : {}, n2 = r2.iterator || "@@iterator", i2 = r2.toStringTag || "@@toStringTag";
      function o2(r3, n3, i3, o3) {
        var u3 = n3 && n3.prototype instanceof s2 ? n3 : s2, c3 = Object.create(u3.prototype);
        return f(c3, "_invoke", (function(r4, n4, i4) {
          var o4, s3, u4, c4 = 0, l2 = i4 || [], f2 = false, d3 = { p: 0, n: 0, v: t3, a: h3, f: h3.bind(t3, 4), d: function(e3, r5) {
            return o4 = e3, s3 = 0, u4 = t3, d3.n = r5, a2;
          } };
          function h3(r5, n5) {
            for (s3 = r5, u4 = n5, e2 = 0; !f2 && c4 && !i5 && e2 < l2.length; e2++) {
              var i5, o5 = l2[e2], h4 = d3.p, p3 = o5[2];
              r5 > 3 ? (i5 = p3 === n5) && (u4 = o5[(s3 = o5[4]) ? 5 : (s3 = 3, 3)], o5[4] = o5[5] = t3) : o5[0] <= h4 && ((i5 = r5 < 2 && h4 < o5[1]) ? (s3 = 0, d3.v = n5, d3.n = o5[1]) : h4 < p3 && (i5 = r5 < 3 || o5[0] > n5 || n5 > p3) && (o5[4] = r5, o5[5] = n5, d3.n = p3, s3 = 0));
            }
            if (i5 || r5 > 1) return a2;
            throw f2 = true, n5;
          }
          return function(i5, l3, p3) {
            if (c4 > 1) throw TypeError("Generator is already running");
            for (f2 && 1 === l3 && h3(l3, p3), s3 = l3, u4 = p3; (e2 = s3 < 2 ? t3 : u4) || !f2; ) {
              o4 || (s3 ? s3 < 3 ? (s3 > 1 && (d3.n = -1), h3(s3, u4)) : d3.n = u4 : d3.v = u4);
              try {
                if (c4 = 2, o4) {
                  if (s3 || (i5 = "next"), e2 = o4[i5]) {
                    if (!(e2 = e2.call(o4, u4))) throw TypeError("iterator result is not an object");
                    if (!e2.done) return e2;
                    u4 = e2.value, s3 < 2 && (s3 = 0);
                  } else 1 === s3 && (e2 = o4.return) && e2.call(o4), s3 < 2 && (u4 = TypeError("The iterator does not provide a '" + i5 + "' method"), s3 = 1);
                  o4 = t3;
                } else if ((e2 = (f2 = d3.n < 0) ? u4 : r4.call(n4, d3)) !== a2) break;
              } catch (e3) {
                o4 = t3, s3 = 1, u4 = e3;
              } finally {
                c4 = 1;
              }
            }
            return { value: e2, done: f2 };
          };
        })(r3, i3, o3), true), c3;
      }
      var a2 = {};
      function s2() {
      }
      function u2() {
      }
      function c2() {
      }
      e2 = Object.getPrototypeOf;
      var d2 = [][n2] ? e2(e2([][n2]())) : (f(e2 = {}, n2, (function() {
        return this;
      })), e2), h2 = c2.prototype = s2.prototype = Object.create(d2);
      function p2(t4) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t4, c2) : (t4.__proto__ = c2, f(t4, i2, "GeneratorFunction")), t4.prototype = Object.create(h2), t4;
      }
      return u2.prototype = c2, f(h2, "constructor", c2), f(c2, "constructor", u2), u2.displayName = "GeneratorFunction", f(c2, i2, "GeneratorFunction"), f(h2), f(h2, i2, "Generator"), f(h2, n2, (function() {
        return this;
      })), f(h2, "toString", (function() {
        return "[object Generator]";
      })), (l = function() {
        return { w: o2, m: p2 };
      })();
    }
    function f(t3, e2, r2, n2) {
      var i2 = Object.defineProperty;
      try {
        i2({}, "", {});
      } catch (t4) {
        i2 = 0;
      }
      (f = function(t4, e3, r3, n3) {
        function o2(e4, r4) {
          f(t4, e4, (function(t5) {
            return this._invoke(e4, r4, t5);
          }));
        }
        e3 ? i2 ? i2(t4, e3, { value: r3, enumerable: !n3, configurable: !n3, writable: !n3 }) : t4[e3] = r3 : (o2("next", 0), o2("throw", 1), o2("return", 2));
      })(t3, e2, r2, n2);
    }
    var d = function(t3, e2, r2, n2) {
      return new (r2 || (r2 = Promise))((function(i2, o2) {
        function a2(t4) {
          try {
            u2(n2.next(t4));
          } catch (t5) {
            o2(t5);
          }
        }
        function s2(t4) {
          try {
            u2(n2.throw(t4));
          } catch (t5) {
            o2(t5);
          }
        }
        function u2(t4) {
          var e3;
          t4.done ? i2(t4.value) : (e3 = t4.value, e3 instanceof r2 ? e3 : new r2((function(t5) {
            t5(e3);
          }))).then(a2, s2);
        }
        u2((n2 = n2.apply(t3, e2 || [])).next());
      }));
    };
    function h(t3, e2) {
      return (e2 = e2 || document).querySelector(t3);
    }
    function p(t3, e2) {
      var r2, n2;
      return b(null !== (n2 = null === (r2 = (e2 = e2 || document).querySelectorAll) || void 0 === r2 ? void 0 : r2.call(e2, t3)) && void 0 !== n2 ? n2 : []);
    }
    function v(t3, e2) {
      for (; null !== t3 && t3.classList && !t3.classList.contains(e2); ) t3 = t3.parentNode;
      return t3;
    }
    function m(t3, e2) {
      for (var r2, n2 = null === (r2 = document.body.parentNode) || void 0 === r2 ? void 0 : r2.parentNode, i2 = t3; null != i2 && i2 != n2 && !i2.matches(e2); ) i2 = i2.parentElement;
      return n2 == i2 ? null : i2;
    }
    function y(t3, e2) {
      return t3 && t3[e2] || "";
    }
    function g(t3) {
      return t3.replace(/<(?!\/?(?:b|em))[^>]+>/g, "");
    }
    function b(t3) {
      return Array.prototype.slice.call(t3);
    }
    function w(t3) {
      return Array.from(new Set(t3));
    }
    function A(t3) {
      for (var e2 = new Uint8Array(t3), r2 = "", n2 = 0; n2 < e2.byteLength; n2++) r2 += String.fromCharCode(e2[n2]);
      return btoa(r2);
    }
    function _(t3) {
      for (var e2 = atob(t3), r2 = new Uint8Array(e2.length), n2 = 0; n2 < e2.length; n2++) r2[n2] = e2.charCodeAt(n2);
      return r2.buffer;
    }
    function E(t3, e2) {
      var r2, n2, i2;
      if (Array.isArray(t3)) {
        for (r2 = 0; r2 < t3.length; ++r2) if (E(t3[r2], e2)) return true;
        return false;
      }
      for (r2 = 0, n2 = (e2 = Array.isArray(e2) ? e2 : [e2]).length; r2 < n2; ++r2) if ("string" == typeof (i2 = e2[r2]) && -1 !== t3.indexOf(i2) || i2 instanceof RegExp && t3.match(i2)) return true;
      return false;
    }
    function S(t3) {
      return d(this, void 0, void 0, l().m((function e2() {
        return l().w((function(e3) {
          for (; ; ) switch (e3.n) {
            case 0:
              return e3.a(2, new Promise((e4) => {
                var onInfo = (r2) => {
                  if (r2 && r2.data && r2.data.url === t3) {
                    EE.off("youtube_get_info_result", onInfo);
                    e4(r2.data);
                  }
                };
                EE.on("youtube_get_info_result", onInfo);
                EE.emit("message.background.send", { type: "youtube_get_info", data: { method: "GET", url: t3 } });
              }));
          }
        }), e2);
      })));
    }
    function O(t3) {
      return d(this, void 0, void 0, l().m((function e2() {
        return l().w((function(e3) {
          for (; ; ) switch (e3.n) {
            case 0:
              return e3.a(2, new Promise((e4) => {
                var onMpd = (t4) => {
                  var r2, n2;
                  if (t4 && "resolve" === (null === (r2 = t4.data) || void 0 === r2 ? void 0 : r2.success)) {
                    EE.off("youtube_set_mpd_info", onMpd);
                    e4(null === (n2 = t4.data) || void 0 === n2 ? void 0 : n2.response);
                  }
                };
                EE.on("youtube_set_mpd_info", onMpd);
                EE.emit("message.background.send", { type: "youtube_get_mpd_info", data: { url: t3, method: "GET" } });
              }));
          }
        }), e2);
      })));
    }
    function x(e2, r2, i2, o2) {
      var a2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "FormData";
      function u2(t3) {
        return [/www\.facebook\.com\/video\/tahoe\/async\/\d+\/\?originalmediaid=\d.+&payloadtype=primary/, /vnecdn\.net/, /vnecdn\.net\/vnexpress\/video\/.+master.m3u8$/, /.smamuhh1metro/, /gpt[0-9]+\.phimmoi\.net/, /vtvgiaitri\.vn/, /hydra/, /www\.facebook\.com\/api\/graphql/, /www.facebook.com\/video\/tahoe\/async/, /www\.nhaccuatui\.com\/flash\/xml\?key3/, /content-aapm1\.uplynk\.com/, /master2-eu\.playerx\.stream/, /i\.instagram\.com\/api\/v1\/media/, /s\d+\.imacdn\.com/, /ok\d+-\d+\.vkuser\.net/, /vd\d+\.mycdn\.me/, /cdn\d*\.javhd\..+\/stream\/.+\.m3u8/, /search-api.artlist.io\/v2\/graphql/i, /embed[0-9]+\.streamc\.xyz/, /b-cdn\.net\/.+\.m3u8/, /https:\/\/sf16-sg.tiktokcdn.top\/ad-site-i18n-sg/, /googleapiscdn\.com/, /https:\/\/vkvideo\.ru/, /monfansubvn\./, /phncdn\.com\/hls\/.+\.m3u8/].some((e3) => t3.match(e3));
      }
      if (t2.IS_CONTENT_SCRIPT && !u2(r2)) {
        var c2 = "background_request." + G();
        return new Promise((t3, e3) => {
          var onRequestResult = (r3) => {
            var n2 = r3.data;
            if (n2 && n2.id === c2) {
              EE.off("background_request_result", onRequestResult);
              "resolve" === n2.success ? t3(n2.response) : e3(n2.response);
            }
          };
          EE.on("background_request_result", onRequestResult);
          EE.emit("message.background.send", { type: n.b.FETCH, data: { id: c2, method: e2, url: r2, params: i2, headers: o2, includeCredentials: a2, paramType: s2 } });
        });
      }
      var l2 = null, f2 = new Headers();
      if ("object" == typeof o2) for (var d2 in o2) location.href.includes("nhaccuatui.com/video/") && "X-Savior-Replace-Cookie" == d2 || f2.append(d2, o2[d2]);
      "object" == typeof i2 && ("FormData" === s2 ? (l2 = Object.keys(i2).map((t3) => t3 + "=" + i2[t3]).join("&"),
        location.host.includes("facebook") && (l2 = Object.keys(i2).map((t3) => `${t3}=${encodeURIComponent(i2[t3])}`).join("&"))) : l2 = JSON.stringify(i2)), "POST" === e2 && ("FormData" === s2 ? f2.append("Content-type",
        "application/x-www-form-urlencoded") : f2.append("Content-type", "application/json"));
      var h2 = { method: e2, headers: f2, cache: "reload", body: l2 || void 0 };
      return a2 && (h2.credentials = "include"), fetch(r2, h2).then((t3) => t3.text().then((e3) => ({ status: t3.status, statusText: t3.statusText, ok: t3.ok, redirected: t3.redirected, url: t3.url, type: t3.type, bodyUsed: t3.bodyUsed, body: t3.body, headers: t3.headers, responseText: e3 })));
    }
    function k(t3, e2) {
      return x("GET", t3, {}, e2);
    }
    function M(t3) {
      var e2, r2 = new XMLHttpRequest();
      return t3 = (function(t4) {
        var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "http";
        if ("//" === t4.slice(0, 2)) return e3 + ":" + t4;
        return t4;
      })(t3), new Promise((n2, i2) => {
        function o2(t4) {
          t4 ? n2(t4) : i2(t4), r2.abort(), clearTimeout(e2), e2 = void 0;
        }
        r2.open("GET", t3), r2.onreadystatechange = function() {
          if (!(this.readyState < 2)) {
            var t4 = null;
            try {
              t4 = +(this.getResponseHeader("Content-Length") || ""), Number.isNaN(t4) && (t4 = null);
            } catch (t5) {
            }
            null === t4 && 200 !== this.status || (200 !== this.status && (t4 = null), o2(t4));
          }
        }, r2.send(null), e2 = setTimeout(o2, 1e4);
      });
    }
    function T(t3) {
      return new Promise((e2) => {
        var r2 = G(), n2 = t3 + "_size";
        var timeoutTimer = null;
        function cleanup() {
          if (timeoutTimer) {
            clearTimeout(timeoutTimer);
            timeoutTimer = null;
          }
          EE.off("media-provider.cache.hit", i2);
          EE.off("media-provider.cache.miss", i2);
        }
        function i2(i3, o2) {
          if (i3 == r2) {
            cleanup();
            o2 ? e2(o2) : M(t3).then((t4) => {
              e2(t4), EE.emit("media-provider.cache.put", G(), n2, t4);
            }).catch(() => {
              I({ url: JSON.stringify(t3), referrer: document.referrer || location.host || JSON.stringify(t3), error: "Error: Cannot get media size or media url is wrong" }), e2(null), EE.emit("media-provider.cache.put", G(), n2, null);
            });
          }
        }
        timeoutTimer = setTimeout(() => {
          cleanup();
          e2(null);
        }, 10000);
        EE.on("media-provider.cache.hit", i2);
        EE.on("media-provider.cache.miss", i2);
        EE.emit("media-provider.cache.get", r2, n2);
      });
    }
    function I(t3) {
      o.a.log("recordCustomData", [{ key: "savior_download_error", value: JSON.stringify(t3) }]);
    }
    function j(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = ["B", "KB", "MB", "GB", "TB", "PB"], n2 = -1 !== window.navigator.appVersion.indexOf("Win") ? 1024 : 1e3;
      if (!t3) return "";
      var i2, o2 = n2;
      for (i2 = 0; i2 < r2.length && t3 >= o2; ++i2) t3 /= o2;
      var a2 = r2[i2], s2 = Math.round(10 * t3) / 10;
      return e2 && a2 && "kb" === a2.toLowerCase() && (s2 = s2.toFixed(0)), s2 + r2[i2];
    }
    function C(t3) {
      var e2, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o2 = ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/x-mpegurl", "audio/mpegurl"];
      if (-1 !== o2.indexOf(r2)) return t3.type = "video", t3.ext = "m3u8", t3;
      var s2 = ["application/dash+xml"];
      if (-1 !== s2.indexOf(r2)) return t3.type = "video", t3.ext = "mpd", t3;
      var u2 = U(r2, t3.exts || []);
      if (u2 && n.k[u2]) {
        t3.type = u2;
        var c2 = r2.match(/mp4|webm/g);
        t3.exts && 0 !== t3.exts.length || !c2 || !c2[0] || (t3.ext = c2[0]);
      }
      var l2 = Object(a.d)(r2), f2 = l2.ext;
      if (t3.ext || (t3.ext = f2), V(t3.url) && (t3.ext = "m3u8", t3.exts = ["m3u8"]), "application/octet-stream" == r2) {
        var d2 = (null === (e2 = B(i2)) || void 0 === e2 ? void 0 : e2.split(".")) || [];
        if (d2 && d2.length) {
          var h2 = d2.shift(), p2 = d2;
          h2 && (t3.filename = h2), p2 && p2.length && (t3.exts = p2, f2 = p2[p2.length - 1], t3.ext = f2, "mp4" == f2 && (t3.type = "video"));
        }
      }
      return "mp4" == f2 && (t3.ext = "mp4"), t3;
    }
    function B(t3) {
      var e2;
      return null === (e2 = t3.match(/filename=["']([^"']+)["']/i)) || void 0 === e2 ? void 0 : e2[1];
    }
    function U(t3, e2) {
      var r2;
      for (var i2 in n.k) {
        if (r2 = n.k[i2], t3 && t3.match(r2.rgxp)) return i2;
        if (Array.isArray(e2) && P(e2, r2.extensions) || -1 !== r2.extensions.indexOf(e2)) return i2;
      }
      return null;
    }
    function P(t3, e2) {
      for (var r2 = t3.concat(e2), n2 = {}, i2 = 0; i2 < r2.length; ++i2) {
        var o2 = r2[i2];
        if (n2[o2]) return o2;
        n2[o2] = true;
      }
      return null;
    }
    function N(t3, e2) {
      return (function t4(e3, r2) {
        var n2 = r2.shift();
        return !n2 || "object" != typeof e3 && "function" != typeof e3 || null === e3 ? null : 0 === r2.length ? e3[n2] : t4(e3[n2], r2);
      })(t3, e2.split("."));
    }
    function D(t3, e2) {
      if (t3 && !(t3.length <= 0)) for (var r2 = [].slice.call(arguments, 2), n2 = 0; n2 < t3.length; n2++) t3[n2].apply(e2, r2);
    }
    function R(t3) {
      return void 0 !== t3;
    }
    function L(t3, e2, r2) {
      var n2, i2 = false;
      function o2() {
        if (!i2) {
          var o3 = this, a2 = arguments;
          n2 ? clearTimeout(n2) : r2 && t3.apply(o3, a2), n2 = setTimeout(s2, e2 || 100);
        }
        function s2() {
          r2 || t3.apply(o3, a2), n2 = void 0;
        }
      }
      return o2.destroy = () => {
        clearTimeout(n2), i2 = true;
      }, o2;
    }
    function q(t3, e2) {
      var r2, n2 = Object.prototype.toString, i2 = [], o2 = e2 && t3 || t3.slice();
      if (!t3.length) return i2;
      r2 = o2.pop();
      do {
        "[object Array]" === n2.call(r2) ? o2.push.apply(o2, r2.filter((t4) => !!t4)) : i2.push(r2);
      } while (o2.length && void 0 !== (r2 = o2.pop()));
      return i2.reverse(), i2;
    }
    var F = 0;
    function G() {
      return F++;
    }
    function Q(t3) {
      return new Promise((e2) => {
        var r2 = t3.type + "_" + G();
        var onMsgResult = (t4) => {
          if (t4 && t4.id === r2) {
            EE.off("utils.send_message_result", onMsgResult);
            e2(t4.data);
          }
        };
        t3.id = r2;
        EE.on("utils.send_message_result", onMsgResult);
        chrome.runtime.sendMessage(t3);
      });
    }
    function z(t3) {
      return new Promise((e2) => {
        var r2 = t3.type + "_" + G();
        var onMsgResult = (t4) => {
          if (t4 && t4.id === r2) {
            EE.off("utils.send_message_result", onMsgResult);
            e2(t4.data);
          }
        };
        t3.id = r2;
        EE.on("utils.send_message_result", onMsgResult);
        EE.emit("message.background.send", t3);
      });
    }
    function H(t3) {
      return z({ type: n.b.SEND_REQUEST, request: t3 });
    }
    function V(t3) {
      if (t3 && "object" != typeof t3 && !t3.includes("data:")) {
        return [/(http|https):\/\/[\s\S]*(streamasia\.|\.bongngo\.|\.manga123\.net)[\s\S]*\/playlist\/|stream\.vltv\.xyz\/m3u8\/|apix\.gooqlevideo\.com\/player|khophim18\.net\/m3u8|iamplayer\.xyz\/stream.*\/Manifest/g, /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi, /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi, /vdrm\.vtvgiaitri\.vn\/stream/, /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi, /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/, /^\/sequence\/(play|full)\/([a-z0-9]+)/i, /\/video\/(\d+)\/config(\?|$)/i, /key[0-9]=[0-9a-f]{32}/i, /^\/(api|get)_video_info/, /\.mp4.+?\.ts\?nimblesessionid=/, /meo\.saku\.net\/player/, /get\.gooqlevideo\.com\/player/, /streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i, /discordapp\.com\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/, /vidsugar\.com\/.+api\.json/i, /\-hls.*\.cuoiia\.top\/(cdn|media|hls)/, /vkvd\d*\.mycdn\.me/, /vk[a-z0-9\-]+\.vkuser\.net/i, /v\.douyu\.com\/api\/stream\/getStreamUrl/, /api\-.+\.(play|plhq)[\s\S]*\.(xyz|net|site|click|cfd|com)\/api\/.+(playiframe|getblob).+/, /ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i, /ssplay\.net\/[a-z0-9]{2,4}\/[a-z\d]+\.html/i, /\.helurl\.com\/uploads\/.+filename/i, /((smutr\.com)|(cdnka\.net))\/remote_control\.php?.+&file=.+\.(mp4|m3u8)/i, /\.video-delivery\.net/i, /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i, /.+\.play[\s\S]*(xyz|net)\/(m3u8|hls)/i, /.+\.plhqtv[\s\S]*(xyz|net)\/(type1rdv3)/i, /v[0-9]*\.sanstream\.xyz\/video\/.*\/master.html\?.*/i, /stream\.shorthotp\.site\/video\/.*\/master.html/i, /cdn.+\/segment.+\/?token.+/i, /helvid\.([a-z0-9]+)\/hash.php\?.+/i, /southeastasia1-mediap.svc.ms\/.+\/videomanifest/i, /cdn\.animevui\.[a-z]+\/file/i, /\.xyz\/cdn\/hls\/.+\/master\.txt/i, /hls\.streamcdn\.[a-z]+\/m3u8\//i, /\.streamc\.xyz\/(.*hash\.php|(get|[a-z]{1,2})[a-z0-9]*\.php)\?hash=/i, /\.streamc\.xyz\/getPlaylist\.php+/i, /intl-api.iq.com.+\/cache\-video\.iq\.com\/dash\?.+/i, /api\.bilibili\.com\/.+\/wbi\/playurl/i, /cdn\/hls\/[a-z0-9\-_]+\/master\.txt/i, /stream12345\.online\/video\/[a-z0-9\-_]+\/master\.html/i, /content\.vdcdn\.top\/stream\/master\.php/i, /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i, /https:\/\/hls\.fasthls\.top\/media\/.+/i, /eporner\.com\/xhr\/video\/.+\?hash\=.+/i, /phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i, /video\.twimg\.com\/.+video\/(\d+)(\/pu)?\/pl\/[a-z0-9\-_]+\.m3u8/i, /syntheticvideo\..+\/sources\?videoId/i, /goplayer\.xyz\/video\/[a-z0-9\-_]+\/(master|playlist)\./i, /m3u8\.cloustream\.net/i, /x\.mimix\.cc\/watch\/.+/i, /toptop\.fasthls\.top\/hls\/.+/i, /play\.cloudfrela\.com\/stream\/.+/i, /m3u8\-play\-\d+\.(playstreamz\.site|playsex3x\.xyz)\/m3u8\/.+/i, /animixplay\-n.+\/count-data\.js\?.+/i, /hlsmovie\.com\/video\/.+\/master\.html.+/i, /pl\.vlogphim\.net\/m3u8.+/i, /graph\.nhaccuatui\.com\/api\/v1\/playlist/i, /graph\.nhaccuatui\.com\/api\/v1\/song/i, /graph\.nhaccuatui\.com\/api\/v2\/search\/artist\/detail/i, /hlstream\.com\/video\/.+\/master\.html.+/i, /macky\.xtremestream\.xyz\/player\/index\.php\?data\=.+/i, /helvid\.[a-z0-9]+\/play\/token_hash\?.+/i, /hlstream\.com\/video\/.+\/master\.html.+/i, /nhaccuatui\.com\/api(\/v\d+)?(\/playlist\/detail|\/song\/detail|\/video\/detail|\/app\/home\/index|\/song\/feed|\/radio\/musiclist|\/search\/artist\/song)/i, /apis\.naver\.com\/.*\/vod\/play.*\?key\=.*/i, /qooglevideo\.com\/manifest-s1\/02938\.vl/, /pl-ali\.youku\.com\/playlist\/m3u8/, /hs-vod2\.nimo\.tv/, /vevocloud\.com\/play\/index/, /scontent-sin([\d\-]+)\.xx\.fbcdn\.net/, /scontent\.fhan.*\.fbcdn\.net/, /scontent-sin([\d\-]+)-xx\.fbcdn\.cloud\/.+\.m3u8\/stream-plain\?/, /vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist.json/, /^https:\/\/abyssplayer\.com\/[\w-]+$/i, /online\.tiengtrung\.vn\/api\/play\.php/i, /cdn\.donghua3d/, /audinifer.*\/stream\/.+\.m3u8/i, /tiktok\.phimhdc\.com\/edgeplayer\.html/, /data-vod-node\.onflixcdn\.com\/\?.*url=/i, /chophim\.\w+\/static\/image\/\w+/].some((e2) => e2.test(t3));
      }
    }
    function $(t3) {
      var e2 = t3.title || t3.filename || document.title;
      "subtitles" == t3.type && (e2 = e2 + " (" + (t3.i18n_quality || t3.quality) + ")");
      var r2 = "." + t3.ext;
      return e2 = (e2 = (null == e2 ? void 0 : e2.replace(/\s+/g, " ").replace(/[/\\:*?"<>|\u200c\u200d]/g, "-")) + r2).match(/[*~]/gi) ? "_" + e2.replace(/[*~]/gi, ".") : e2;
    }
    function Y(t3) {
      var e2;
      if (!t3) return null;
      for (var r2, n2 = [/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([\w\-]+)/i, /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i,
        /https?:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/, /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/, /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/, /youtube.*.com\/embed\/([a-z0-9\-_]+)/i,
        /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/], i2 = 0; i2 < n2.length; ++i2) if (r2 = t3.match(n2[i2])) return r2[1];
      if (t3.match(/youtube\.com\/embed\/videoseries/i) && (null === (e2 = document.querySelector('link[rel="canonical"]')) || void 0 === e2 ? void 0 : e2.href)) return Y(t3);
      return null;
    }
    function W(t3) {
      if (i.a.M3U8 && Object(n.B)(t3.ext)) return true;
      var e2 = t3.type;
      if (!e2) return false;
      var r2 = n.k[e2], o2 = r2 && r2.extensions;
      return r2 && -1 !== o2.indexOf(t3.ext);
    }
    function X(t3) {
      for (var e2 = 0, r2 = n.q.length; e2 < r2 && n.q[e2] >= t3; ) e2++;
      return n.q[e2 - 1];
    }
    function K(t3) {
      var e2 = t3.filter((function(t4) {
        return "video" === t4.type && !(!i.a.DOWNLOAD.M3U8_AUDIO && ["m3u", "m3u8"].includes(t4.ext)) && ("object" == typeof t4.url && t4.url.audioUrl || "string" == typeof t4.url);
      })), r2 = [{ bitrate: "128kbps", name: "Medium", qualityValue: 100, itag: "140" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "22" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "37" }, { bitrate: "192kbps",
        name: "High", qualityValue: 200, itag: "38" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "45" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "46" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "84" },
        { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "85" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "101" }, { bitrate: "192kbps", name: "High", qualityValue: 200, itag: "102" }, { bitrate: "192kbps", name: "High",
        qualityValue: 200, itag: "172" }], n2 = "www.youtube.com" === location.host ? r2 : [r2[0]], o2 = [];
      return e2.length ? (it(e2).forEach((function(t4) {
        var e3 = t4.media, i2 = n2.map((function(t5) {
          var n3 = (function(t6, e4) {
            e4 = e4.toLowerCase();
            var r3 = [...t6], n4 = t6.filter((function(t7) {
              return "mp4" === t7.ext;
            }));
            n4.length && (r3 = n4);
            var i4 = r3.filter((function(t7) {
              return t7.quality && "full hd" === t7.quality.toLowerCase();
            })), o4 = r3.filter((function(t7) {
              return t7.quality && "hd" === t7.quality.toLowerCase();
            })), a3 = r3.filter((function(t7) {
              return t7.quality && ["normal", "medium", "standard"].includes(t7.quality.toLowerCase());
            }));
            switch (e4) {
              case "high":
                i4.length ? r3 = i4 : o4.length ? r3 = o4 : a3.length && (r3 = a3);
                break;
              case "medium":
              default:
                a3.length ? r3 = a3 : o4.length ? r3 = o4 : i4.length && (r3 = i4);
            }
            var s2 = r3.filter((function(t7) {
              return "object" == typeof t7.url && t7.url.audioUrl;
            }));
            s2.length && (r3 = s2);
            return r3[0];
          })(e3, t5.name), i3 = Object.assign({}, n3);
          if (i3.useConverter = true, "object" == typeof i3.url && (i3.url = i3.url.audioUrl, delete i3.useConverter), ["m3u8", "m3u"].includes(i3.ext) && (i3._hls = true, delete i3._isDashMPD), i3.ext = "mp3", i3.soundOnly = true, i3.quality = t5.name,
            i3.resolution = t5.bitrate, i3.type = "audio", i3.sortValues = { qualityValue: t5.qualityValue }, "www.youtube.com" === location.host) {
            var o3 = new URLSearchParams(i3.url).get("itag"), a2 = r2.find((t6) => t6.itag === o3) || r2[0];
            i3.resolution !== a2.bitrate && i3.quality !== a2.name && (i3.resolution = "0kbps");
          }
          return i3;
        }));
        i2 = i2.reduce((t5, e4) => (t5.some((t6) => parseInt(t6.resolution) >= parseInt(e4.resolution)) || (t5 = []).push(e4), t5), []), o2 = o2.concat(i2);
      })), o2) : o2;
    }
    var J, Z = 2e4;
    function tt(t3) {
      return d(this, void 0, void 0, l().m((function e2() {
        var r2, n2, i2, o2, a2, s2, u2, c2, f2, d2;
        return l().w((function(e3) {
          for (; ; ) switch (e3.p = e3.n) {
            case 0:
              return e3.p = 0, e3.n = 1, fetch(t3);
            case 1:
              if ((r2 = e3.v).ok) {
                e3.n = 2;
                break;
              }
              return e3.a(2, null);
            case 2:
              return n2 = r2.headers, i2 = n2.get("content-type"), e3.n = 3, r2.blob();
            case 3:
              return o2 = e3.v, e3.n = 4, createImageBitmap(o2);
            case 4:
              if (a2 = e3.v, !((s2 = a2.width * a2.height) < Z)) {
                e3.n = 5;
                break;
              }
              return a2.close(), e3.a(2, null);
            case 5:
              return u2 = new URL(t3), c2 = u2.pathname, f2 = c2.split(".").pop(), d2 = { url: t3, width: a2.width, height: a2.height, totalPixel: s2, sizeKiloBytes: Number((o2.size / 1e3).toFixed(1)), extension: (null == i2 ? void 0 : i2.split("/").pop()) || f2 || "" }, a2.close(), e3.a(2, d2);
            case 6:
              return e3.p = 6, e3.v, e3.a(2, null);
          }
        }), e2, null, [[0, 6]]);
      })));
    }
    function et(t3) {
      if (!(t3 && t3 instanceof HTMLVideoElement)) return null;
      var e2 = t3.poster || t3.getAttribute("poster");
      return e2 && "" !== e2.trim() ? e2 : null;
    }
    function rt(t3) {
      if (!t3) return null;
      var e2 = t3.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/);
      return e2 ? `https://img.youtube.com/vi/${e2[1]}/maxresdefault.jpg` : null;
    }
    function nt(t3) {
      var e2 = [];
      return t3.forEach((t4) => {
        var r2 = "video" == t4.type;
        t4.title || (t4.title = t4.filename);
        var n2 = t4.widgetID, i2 = t4.title || t4.filename, o2 = e2.find((t5) => t5.widgetID === n2);
        o2 ? (r2 && (t4.thumbnail ? o2.videoThumbnail = t4.thumbnail : o2.videoThumbnail = rt(t4.referrer || ""), o2.hasVideo = true), o2.media.push(t4)) : e2.push({ media: [t4], title: i2, hasVideo: !!r2, videoThumbnail: r2 ? t4.thumbnail || rt(t4.referrer || "") : null, widgetID: t4.widgetID });
      }), e2;
    }
    function it(t3) {
      var e2 = [];
      return t3.forEach((t4) => {
        var r2 = "video" == t4.type;
        t4.title || (t4.title = t4.filename);
        var n2 = t4.title || t4.filename, i2 = e2.find((t5) => t5.title === n2 || t5.filename === n2);
        i2 ? (r2 && (t4.thumbnail ? i2.videoThumbnail = t4.thumbnail : i2.videoThumbnail = rt(t4.referrer || ""), i2.hasVideo = true), i2.media.push(t4)) : e2.push({ media: [t4], title: n2, hasVideo: !!r2, videoThumbnail: r2 ? t4.thumbnail || rt(t4.referrer || "") : null });
      }), e2;
    }
    try {
      J = chrome.i18n.getMessage || (() => "");
    } catch (t3) {
      J = () => "";
    }
    var ot = J, at = (t3, e2) => t3.type === e2.type && (t3.id === e2.id && ("string" != typeof t3.url && "string" != typeof e2.url ? t3.url.videoUrl == e2.url.videoUrl : t3.url === e2.url)), st = (e2) => {
      var r2;
      return (e2 = null !== (r2 = null != e2 ? e2 : t2.tab_url) && void 0 !== r2 ? r2 : window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/);
    },
      ut = (t3) => t3 ? t3.replaceAll(/[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g,
      "").replaceAll(/\s+/g, " ") : t3, ct = (t3, e2, r2) => {
      var n2 = e2.timeout;
      return delete e2.timeout, n2 ? (r2 = null != r2 ? r2 : new AbortController(), setTimeout(() => r2.abort(), n2), fetch(t3, Object.assign({ signal: r2.signal }, e2))) : fetch(t3, e2);
    }, lt = (t3) => new Promise((e2) => setTimeout(e2, t3));
    function ft(t3) {
      return function() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3;
        return e2;
      };
    }
    function dt(t3, e2, r2) {
      return e2.forEach((e3) => {
        ("function" == typeof r2 && r2(e3, t3) || t3.includes(e3)) && t3.push(e3);
      }), t3;
    }
    class ht {
      static get(t3) {
        return new Promise((e2) => {
          chrome.storage.local.get(t3, (t4) => {
            e2(t4);
          });
        });
      }
    }
    function pt(t3) {
      "function" == typeof requestAnimationFrame ? requestAnimationFrame(t3) : setTimeout(t3, 20);
    }
    function vt(t3) {
      var e2 = t3.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), r2 = decodeURIComponent(window.atob(e2).split("").map((function(t4) {
        return "%" + ("00" + t4.charCodeAt(0).toString(16)).slice(-2);
      })).join(""));
      return JSON.parse(r2);
    }
    function mt(t3) {
      return t3.trim().replace("www.", "").replace(/^https?:\/\//i, "");
    }
    function yt(t3) {
      try {
        return t3 <= 9 ? "0" + t3 : "" + t3;
      } catch (t4) {
        return "00";
      }
    }
    function gt(t3) {
      var e2 = t3.split(".");
      return Number(e2.map((t4) => yt(Number(t4))).join(""));
    }
    function bt(t3) {
      var e2 = t3.getFullYear(), r2 = t3.getMonth(), n2 = t3.getDate();
      return parseInt(`${e2}${yt(r2)}${yt(n2)}`);
    }
    function wt(t3) {
      var e2, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
      return function(n2) {
        clearTimeout(e2), e2 = setTimeout(() => {
          t3(n2);
        }, r2);
      };
    }
    function At(t3) {
      var e2 = new Date(t3), r2 = new Date(Date.now());
      return e2.getDate() == r2.getDate() && e2.getMonth() == r2.getMonth() && e2.getFullYear() == r2.getFullYear();
    }
    function _t(t3) {
      var e2 = At(t3), r2 = (new Date(Date.now()).setHours(0, 0, 0, 0) - new Date(t3).setHours(0, 0, 0, 0)) / 86400 / 1e3 == 1;
      return !e2 && r2;
    }
    function Et() {
      var t3, e2;
      return !!(null === (e2 = null === (t3 = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === t3 ? void 0 : t3.call(window, "(prefers-color-scheme: dark)")) || void 0 === e2 ? void 0 : e2.matches);
    }
    function St() {
      0;
    }
    function Ot(t3) {
      var e2 = u.a.enc.Hex.parse(t3).toString(u.a.enc.Base64);
      return u.a.AES.decrypt(e2, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ").toString(u.a.enc.Utf8);
    }
    function xt(t3) {
      var e2 = t3.indexOf("{");
      if (-1 === e2) return null;
      for (var r2 = 0, n2 = e2; n2 < t3.length; n2++) if ("{" === t3[n2] && r2++, "}" === t3[n2] && r2--, 0 === r2) {
        var i2 = t3.slice(e2, n2 + 1);
        try {
          return JSON.parse(i2);
        } catch (t4) {
          return null;
        }
      }
    }
    var kt = [{ regex: /g\.doubleclick\.net/i, type: "xmlhttprequest", initiators: ["youtube.com", "music.youtube.com"] }, { regex: /youtube\.com\/pagead\//i, type: "xmlhttprequest", initiators: ["youtube.com", "music.youtube.com"] }, { regex: /google\..+\/pagead\/lvz\?/i, type: "image", initiators: ["youtube.com", "music.youtube.com"] }], Mt = () => new Promise((t3) => {
      chrome.i18n.detectLanguage(document.body.innerText.substring(0, 1e3), (function(e2) {
        e2.isReliable && t3(e2.languages[0]), t3(null);
      }));
    }), Tt = (t3) => t3.split(";").map((t4) => t4.trim().split(/=(.+)/)).reduce((t4, e2) => (t4[e2[0]] = e2[1], t4), {});
    function It() {
      return d(this, void 0, void 0, l().m((function t3() {
        var e2, r2, i2, o2, a2;
        return l().w((function(t4) {
          for (; ; ) switch (t4.n) {
            case 0:
              return e2 = ["SAPISID", "__Secure-3PAPISID", "__Secure-1PAPISID"], r2 = ["SAPISIDHASH", "SAPISID1PHASH", "SAPISID3PHASH"], t4.n = 1, z({ type: n.b.GET_COOKIES, cookies: e2 });
            case 1:
              if (i2 = t4.v, o2 = c.a.ssId, !i2) {
                t4.n = 2;
                break;
              }
              return a2 = r2.map((t5, r3) => jt(t5, i2[e2[r3]], "https://www.youtube.com", { u: o2 })), t4.a(2, Promise.all(a2).then((t5) => t5.join(" ")));
            case 2:
              return t4.a(2, null);
          }
        }), t3);
      })));
    }
    function jt(t3, e2, r2, n2) {
      return d(this, void 0, void 0, l().m((function i2() {
        var o2, a2, s2, u2;
        return l().w((function(i3) {
          for (; ; ) switch (i3.n) {
            case 0:
              return o2 = Math.round(Date.now() / 1e3), a2 = [], n2 && a2.push(Object.values(n2).join(":")), a2.push(o2, e2, r2), i3.n = 1, Ct(a2.join(" "));
            case 1:
              return s2 = i3.v, u2 = [o2, s2], n2 && u2.push(...Object.keys(n2)), i3.a(2, `${t3} ${u2.join("_")}`);
          }
        }), i2);
      })));
    }
    function Ct(t3) {
      return d(this, void 0, void 0, l().m((function e2() {
        var r2, n2, i2, o2, a2;
        return l().w((function(e3) {
          for (; ; ) switch (e3.n) {
            case 0:
              return r2 = new TextEncoder(), n2 = r2.encode(t3), e3.n = 1, crypto.subtle.digest("SHA-1", n2);
            case 1:
              return i2 = e3.v, o2 = Array.from(new Uint8Array(i2)), a2 = o2.map((t4) => t4.toString(16).padStart(2, "0")).join(""), e3.a(2, a2);
          }
        }), e2);
      })));
    }
    function Bt(t3) {
      return d(this, void 0, void 0, l().m((function e2() {
        var r2;
        return l().w((function(e3) {
          for (; ; ) switch (e3.n) {
            case 0:
              return e3.n = 1, z({ type: n.b.CHECK_URL, data: { url: t3 } });
            case 1:
              if (r2 = e3.v) {
                e3.n = 2;
                break;
              }
              return e3.a(2, null);
            case 2:
              return e3.a(2, r2.status);
          }
        }), e2);
      })));
    }
  }.call(this, r(13));
}
