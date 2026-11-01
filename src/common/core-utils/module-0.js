// Module 0 [core-utils] - Savior Common Utility Subsystem
export default function (e, t, n) {
    "use strict";

    n.r(t);
    (function (e) {
      n.d(t, "query", function () {
        return p;
      });
      n.d(t, "queryAll", function () {
        return h;
      });
      n.d(t, "findParent", function () {
        return g;
      });
      n.d(t, "nearestParent", function () {
        return m;
      });
      n.d(t, "getNodePropOrEmptyString", function () {
        return v;
      });
      n.d(t, "stripTagsExcept", function () {
        return y;
      });
      n.d(t, "toArray", function () {
        return k;
      });
      n.d(t, "unique", function () {
        return b;
      });
      n.d(t, "arrayBufferToBase64", function () {
        return _;
      });
      n.d(t, "base64ToArrayBuffer", function () {
        return T;
      });
      n.d(t, "isMatches", function () {
        return S;
      });
      n.d(t, "getYoutubeInfo", function () {
        return x;
      });
      n.d(t, "getYoutubeDashMPDInfo", function () {
        return w;
      });
      n.d(t, "send", function () {
        return E;
      });
      n.d(t, "get", function () {
        return A;
      });
      n.d(t, "_getSize", function () {
        return C;
      });
      n.d(t, "getSize", function () {
        return O;
      });
      n.d(t, "logDownloadError", function () {
        return I;
      });
      n.d(t, "beautifyFileSize", function () {
        return N;
      });
      n.d(t, "detectMediaTypeAndExt", function () {
        return D;
      });
      n.d(t, "getFileNameFromContentDisposition", function () {
        return R;
      });
      n.d(t, "getMediaType", function () {
        return L;
      });
      n.d(t, "getProp", function () {
        return B;
      });
      n.d(t, "call", function () {
        return U;
      });
      n.d(t, "defined", function () {
        return M;
      });
      n.d(t, "debounce", function () {
        return V;
      });
      n.d(t, "flatten", function () {
        return H;
      });
      n.d(t, "generateId", function () {
        return F;
      });
      n.d(t, "sendMessageDirect", function () {
        return z;
      });
      n.d(t, "sendMessage", function () {
        return G;
      });
      n.d(t, "sendRequest", function () {
        return W;
      });
      n.d(t, "isSpecialUrls", function () {
        return q;
      });
      n.d(t, "getFilenameFromTitleOfDownload", function () {
        return Y;
      });
      n.d(t, "getVideoId", function () {
        return K;
      });
      n.d(t, "isValidData", function () {
        return X;
      });
      n.d(t, "getBestFitResolution", function () {
        return $;
      });
      n.d(t, "createMP3Resources", function () {
        return J;
      });
      n.d(t, "MIN_IMAGE_TOTAL_PIXEL", function () {
        return Z;
      });
      n.d(t, "createImageInfo", function () {
        return ee;
      });
      n.d(t, "getVideoPoster", function () {
        return te;
      });
      n.d(t, "splitMediaByWidgetID", function () {
        return re;
      });
      n.d(t, "splitMediaByTitle", function () {
        return oe;
      });
      n.d(t, "i18n", function () {
        return ie;
      });
      n.d(t, "isSameMedia", function () {
        return ae;
      });
      n.d(t, "isTikTok", function () {
        return se;
      });
      n.d(t, "cleanSymbols", function () {
        return ce;
      });
      n.d(t, "fetchWithTimeout", function () {
        return le;
      });
      n.d(t, "sleep", function () {
        return ue;
      });
      n.d(t, "beDefinedOr", function () {
        return de;
      });
      n.d(t, "mergeArray", function () {
        return fe;
      });
      n.d(t, "Storage", function () {
        return pe;
      });
      n.d(t, "nextTick", function () {
        return he;
      });
      n.d(t, "jwtDecode", function () {
        return ge;
      });
      n.d(t, "formatDomain", function () {
        return me;
      });
      n.d(t, "paddZero", function () {
        return ve;
      });
      n.d(t, "transformVersionToNumber", function () {
        return ye;
      });
      n.d(t, "getDateNumber", function () {
        return ke;
      });
      n.d(t, "useDebounce", function () {
        return be;
      });
      n.d(t, "checkSameDate", function () {
        return _e;
      });
      n.d(t, "checkDateInRow", function () {
        return Te;
      });
      n.d(t, "checkIsDarkMode", function () {
        return Se;
      });
      n.d(t, "devLog", function () {
        return xe;
      });
      n.d(t, "parseLinkPhimmoiChillee", function () {
        return we;
      });
      n.d(t, "extractFirstJsonObject", function () {
        return Ee;
      });
      n.d(t, "youtubeAdsblockedRules", function () {
        return Ae;
      });
      n.d(t, "getPageLanguage", function () {
        return Ce;
      });
      n.d(t, "getCookies", function () {
        return Oe;
      });
      n.d(t, "getYTCookieAuth", function () {
        return Ie;
      });
      n.d(t, "fetchStatus", function () {
        return Re;
      });
      var r = n(1);
      var o = n(11);
      var i = n(5);
      var a = n(3);
      var s = n(16);
      var c = n.n(s);
      var l = n(24);
      function u() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
        var e;
        var t;
        var n = typeof Symbol == "function" ? Symbol : {};
        var r = n.iterator || "@@iterator";
        var o = n.toStringTag || "@@toStringTag";
        function i(n, r, o, i) {
          var c = r && r.prototype instanceof s ? r : s;
          var l = Object.create(c.prototype);
          d(l, "_invoke", function (n, r, o) {
            var i;
            var s;
            var c;
            var l = 0;
            var u = o || [];
            var d = false;
            var f = {
              p: 0,
              n: 0,
              v: e,
              a: p,
              f: p.bind(e, 4),
              d: function (t, n) {
                i = t;
                s = 0;
                c = e;
                f.n = n;
                return a;
              }
            };
            function p(n, r) {
              s = n;
              c = r;
              t = 0;
              for (; !d && l && !o && t < u.length; t++) {
                var o;
                var i = u[t];
                var p = f.p;
                var h = i[2];
                if (n > 3) {
                  if (o = h === r) {
                    c = i[(s = i[4]) ? 5 : (s = 3, 3)];
                    i[4] = i[5] = e;
                  }
                } else if (i[0] <= p) {
                  if (o = n < 2 && p < i[1]) {
                    s = 0;
                    f.v = r;
                    f.n = i[1];
                  } else if (p < h && (o = n < 3 || i[0] > r || r > h)) {
                    i[4] = n;
                    i[5] = r;
                    f.n = h;
                    s = 0;
                  }
                }
              }
              if (o || n > 1) {
                return a;
              }
              d = true;
              throw r;
            }
            return function (o, u, h) {
              if (l > 1) {
                throw TypeError("Generator is already running");
              }
              if (d && u === 1) {
                p(u, h);
              }
              s = u;
              c = h;
              while ((t = s < 2 ? e : c) || !d) {
                if (!i) {
                  if (s) {
                    if (s < 3) {
                      if (s > 1) {
                        f.n = -1;
                      }
                      p(s, c);
                    } else {
                      f.n = c;
                    }
                  } else {
                    f.v = c;
                  }
                }
                try {
                  l = 2;
                  if (i) {
                    if (!s) {
                      o = "next";
                    }
                    if (t = i[o]) {
                      if (!(t = t.call(i, c))) {
                        throw TypeError("iterator result is not an object");
                      }
                      if (!t.done) {
                        return t;
                      }
                      c = t.value;
                      if (s < 2) {
                        s = 0;
                      }
                    } else {
                      if (s === 1 && (t = i.return)) {
                        t.call(i);
                      }
                      if (s < 2) {
                        c = TypeError("The iterator does not provide a '" + o + "' method");
                        s = 1;
                      }
                    }
                    i = e;
                  } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== a) {
                    break;
                  }
                } catch (t) {
                  i = e;
                  s = 1;
                  c = t;
                } finally {
                  l = 1;
                }
              }
              return {
                value: t,
                done: d
              };
            };
          }(n, o, i), true);
          return l;
        }
        var a = {};
        function s() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var f = [][r] ? t(t([][r]())) : (d(t = {}, r, function () {
          return this;
        }), t);
        var p = l.prototype = s.prototype = Object.create(f);
        function h(e) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, l);
          } else {
            e.__proto__ = l;
            d(e, o, "GeneratorFunction");
          }
          e.prototype = Object.create(p);
          return e;
        }
        c.prototype = l;
        d(p, "constructor", l);
        d(l, "constructor", c);
        c.displayName = "GeneratorFunction";
        d(l, o, "GeneratorFunction");
        d(p);
        d(p, o, "Generator");
        d(p, r, function () {
          return this;
        });
        d(p, "toString", function () {
          return "[object Generator]";
        });
        return (u = function () {
          return {
            w: i,
            m: h
          };
        })();
      }
      function d(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (d = function (e, t, n, r) {
          function i(t, n) {
            d(e, t, function (e) {
              return this._invoke(t, n, e);
            });
          }
          if (t) {
            if (o) {
              o(e, t, {
                value: n,
                enumerable: !r,
                configurable: !r,
                writable: !r
              });
            } else {
              e[t] = n;
            }
          } else {
            i("next", 0);
            i("throw", 1);
            i("return", 2);
          }
        })(e, t, n, r);
      }
      function f(e, t, n, r) {
        return new (n ||= Promise)(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              (t = e.value, t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(a, s);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function p(e, t) {
        return (t = t || document).querySelector(e);
      }
      function h(e, t) {
        var n;
        return k(((n = (t = t || document).querySelectorAll) === null || n === undefined ? undefined : n.call(t, e)) ?? []);
      }
      function g(e, t) {
        while (e !== null && e.classList && !e.classList.contains(t)) {
          e = e.parentNode;
        }
        return e;
      }
      function m(e, t) {
        for (var r = document.body.parentNode?.parentNode, o = e; o != null && o != r && !o.matches(t);) {
          o = o.parentElement;
        }
        if (r == o) {
          return null;
        } else {
          return o;
        }
      }
      function v(e, t) {
        return e && e[t] || "";
      }
      function y(e) {
        return e.replace(/<(?!\/?(?:b|em))[^>]+>/g, "");
      }
      function k(e) {
        return Array.prototype.slice.call(e);
      }
      function b(e) {
        return Array.from(new Set(e));
      }
      function _(e) {
        for (var t = new Uint8Array(e), n = "", r = 0; r < t.byteLength; r++) {
          n += String.fromCharCode(t[r]);
        }
        return btoa(n);
      }
      function T(e) {
        for (var t = atob(e), n = new Uint8Array(t.length), r = 0; r < t.length; r++) {
          n[r] = t.charCodeAt(r);
        }
        return n.buffer;
      }
      function S(e, t) {
        var n;
        var r;
        var o;
        if (Array.isArray(e)) {
          for (n = 0; n < e.length; ++n) {
            if (S(e[n], t)) {
              return true;
            }
          }
          return false;
        }
        n = 0;
        r = (t = Array.isArray(t) ? t : [t]).length;
        for (; n < r; ++n) {
          if (typeof (o = t[n]) == "string" && e.indexOf(o) !== -1 || o instanceof RegExp && e.match(o)) {
            return true;
          }
        }
        return false;
      }
      function x(e) {
        return f(this, undefined, undefined, u().m(function t() {
          return u().w(function (t) {
            while (true) {
              switch (t.n) {
                case 0:
                  return t.a(2, new Promise(t => {
                    EE.emit("message.background.send", {
                      type: "youtube_get_info",
                      data: {
                        method: "GET",
                        url: e
                      }
                    });
                    EE.on("youtube_get_info_result", n => {
                      if (n.data.url === e) {
                        t(n.data);
                      }
                    });
                  }));
              }
            }
          }, t);
        }));
      }
      function w(e) {
        return f(this, undefined, undefined, u().m(function t() {
          return u().w(function (t) {
            while (true) {
              switch (t.n) {
                case 0:
                  return t.a(2, new Promise(t => {
                    EE.emit("message.background.send", {
                      type: "youtube_get_mpd_info",
                      data: {
                        url: e,
                        method: "GET"
                      }
                    });
                    EE.on("youtube_set_mpd_info", e => {
                      if (e && e.data?.success === "resolve") {
                        t(e.data?.response);
                      }
                    });
                  }));
              }
            }
          }, t);
        }));
      }
      function E(t, n, o, i, a = false, s = "FormData") {
        function c(e) {
          return [/www\.facebook\.com\/video\/tahoe\/async\/\d+\/\?originalmediaid=\d.+&payloadtype=primary/, /vnecdn\.net/, /vnecdn\.net\/vnexpress\/video\/.+master.m3u8$/, /.smamuhh1metro/, /gpt[0-9]+\.phimmoi\.net/, /vtvgiaitri\.vn/, /hydra/, /www\.facebook\.com\/api\/graphql/, /www.facebook.com\/video\/tahoe\/async/, /www\.nhaccuatui\.com\/flash\/xml\?key3/, /content-aapm1\.uplynk\.com/, /master2-eu\.playerx\.stream/, /i\.instagram\.com\/api\/v1\/media/, /s\d+\.imacdn\.com/, /ok\d+-\d+\.vkuser\.net/, /vd\d+\.mycdn\.me/, /cdn\d*\.javhd\..+\/stream\/.+\.m3u8/, /search-api.artlist.io\/v2\/graphql/i, /embed[0-9]+\.streamc\.xyz/, /b-cdn\.net\/.+\.m3u8/, /https:\/\/sf16-sg.tiktokcdn.top\/ad-site-i18n-sg/, /googleapiscdn\.com/, /https:\/\/vkvideo\.ru/, /monfansubvn\./, /phncdn\.com\/hls\/.+\.m3u8/].some(t => e.match(t));
        }
        if (e.IS_CONTENT_SCRIPT && !c(n)) {
          var l = "background_request." + F();
          EE.emit("message.background.send", {
            type: r.b.FETCH,
            data: {
              id: l,
              method: t,
              url: n,
              params: o,
              headers: i,
              includeCredentials: a,
              paramType: s
            }
          });
          return new Promise((e, t) => {
            EE.on("background_request_result", n => {
              var r = n.data;
              if (r.id === l) {
                if (r.success === "resolve") {
                  e(r.response);
                } else {
                  t(r.response);
                }
              }
            });
          });
        }
        var u = null;
        var d = new Headers();
        if (typeof i == "object") {
          for (var f in i) {
            if (!location.href.includes("nhaccuatui.com/video/") || f != "X-Savior-Replace-Cookie") {
              d.append(f, i[f]);
            }
          }
        }
        if (typeof o == "object") {
          if (s === "FormData") {
            u = Object.keys(o).map(e => e + "=" + o[e]).join("&");
            if (location.host.includes("facebook")) {
              u = Object.keys(o).map(e => `${e}=${encodeURIComponent(o[e])}`).join("&");
            }
          } else {
            u = JSON.stringify(o);
          }
        }
        if (t === "POST") {
          if (s === "FormData") {
            d.append("Content-type", "application/x-www-form-urlencoded");
          } else {
            d.append("Content-type", "application/json");
          }
        }
        var p = {
          method: t,
          headers: d,
          cache: "reload",
          body: u || undefined
        };
        if (a) {
          p.credentials = "include";
        }
        return fetch(n, p).then(e => e.text().then(t => ({
          status: e.status,
          statusText: e.statusText,
          ok: e.ok,
          redirected: e.redirected,
          url: e.url,
          type: e.type,
          bodyUsed: e.bodyUsed,
          body: e.body,
          headers: e.headers,
          responseText: t
        })));
      }
      function A(e, t) {
        return E("GET", e, {}, t);
      }
      function C(e) {
        var t;
        var n = new XMLHttpRequest();
        e = function (e, t = "http") {
          if (e.slice(0, 2) === "//") {
            return t + ":" + e;
          }
          return e;
        }(e);
        return new Promise((r, o) => {
          function i(e) {
            if (e) {
              r(e);
            } else {
              o(e);
            }
            n.abort();
            clearTimeout(t);
            t = undefined;
          }
          n.open("GET", e);
          n.onreadystatechange = function () {
            if (!(this.readyState < 2)) {
              var e = null;
              try {
                e = +(this.getResponseHeader("Content-Length") || "");
                if (Number.isNaN(e)) {
                  e = null;
                }
              } catch (e) {}
              if (e !== null || this.status === 200) {
                if (this.status !== 200) {
                  e = null;
                }
                i(e);
              }
            }
          };
          n.send(null);
          t = setTimeout(i, 10000);
        });
      }
      function O(e) {
        return new Promise(t => {
          var n = F();
          var r = e + "_size";
          function o(o, i) {
            if (o == n) {
              if (i) {
                t(i);
              } else {
                C(e).then(e => {
                  t(e);
                  EE.emit("media-provider.cache.put", F(), r, e);
                }).catch(() => {
                  I({
                    url: JSON.stringify(e),
                    referrer: document.referrer || location.host || JSON.stringify(e),
                    error: "Error: Cannot get media size or media url is wrong"
                  });
                  t(null);
                  EE.emit("media-provider.cache.put", F(), r, null);
                });
              }
            }
          }
          EE.emit("media-provider.cache.get", n, r);
          EE.on("media-provider.cache.hit", o);
          EE.on("media-provider.cache.miss", o);
        });
      }
      function I(e) {
        i.a.log("recordCustomData", [{
          key: "savior_download_error",
          value: JSON.stringify(e)
        }]);
      }
      function N(e, t = false) {
        var n = ["B", "KB", "MB", "GB", "TB", "PB"];
        var r = window.navigator.appVersion.indexOf("Win") !== -1 ? 1024 : 1000;
        if (!e) {
          return "";
        }
        var o;
        var i = r;
        for (o = 0; o < n.length && e >= i; ++o) {
          e /= i;
        }
        var a = n[o];
        var s = Math.round(e * 10) / 10;
        if (t && a && a.toLowerCase() === "kb") {
          s = s.toFixed(0);
        }
        return s + n[o];
      }
      function D(e) {
        var t;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var i = ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/x-mpegurl", "audio/mpegurl"];
        if (i.indexOf(n) !== -1) {
          e.type = "video";
          e.ext = "m3u8";
          return e;
        }
        var s = ["application/dash+xml"];
        if (s.indexOf(n) !== -1) {
          e.type = "video";
          e.ext = "mpd";
          return e;
        }
        var c = L(n, e.exts || []);
        if (c && r.k[c]) {
          e.type = c;
          var l = n.match(/mp4|webm/g);
          if ((!e.exts || e.exts.length === 0) && !!l && !!l[0]) {
            e.ext = l[0];
          }
        }
        var u = Object(a.d)(n);
        var d = u.ext;
        e.ext ||= d;
        if (q(e.url)) {
          e.ext = "m3u8";
          e.exts = ["m3u8"];
        }
        if (n == "application/octet-stream") {
          var f = ((t = R(o)) === null || t === undefined ? undefined : t.split(".")) || [];
          if (f && f.length) {
            var p = f.shift();
            var h = f;
            if (p) {
              e.filename = p;
            }
            if (h && h.length) {
              e.exts = h;
              d = h[h.length - 1];
              e.ext = d;
              if (d == "mp4") {
                e.type = "video";
              }
            }
          }
        }
        if (d == "mp4") {
          e.ext = "mp4";
        }
        return e;
      }
      function R(e) {
        return e.match(/filename=["']([^"']+)["']/i)?.[1];
      }
      function L(e, t) {
        var n;
        for (var o in r.k) {
          n = r.k[o];
          if (e && e.match(n.rgxp)) {
            return o;
          }
          if (Array.isArray(t) && P(t, n.extensions) || n.extensions.indexOf(t) !== -1) {
            return o;
          }
        }
        return null;
      }
      function P(e, t) {
        for (var n = e.concat(t), r = {}, o = 0; o < n.length; ++o) {
          var i = n[o];
          if (r[i]) {
            return i;
          }
          r[i] = true;
        }
        return null;
      }
      function B(e, t) {
        return function e(t, n) {
          var r = n.shift();
          if (!r || typeof t != "object" && typeof t != "function" || t === null) {
            return null;
          } else if (n.length === 0) {
            return t[r];
          } else {
            return e(t[r], n);
          }
        }(e, t.split("."));
      }
      function U(e, t) {
        if (e && !(e.length <= 0)) {
          var n = [].slice.call(arguments, 2);
          for (var r = 0; r < e.length; r++) {
            e[r].apply(t, n);
          }
        }
      }
      function M(e) {
        return e !== undefined;
      }
      function V(e, t, n) {
        var r;
        var o = false;
        function i() {
          if (!o) {
            var i = this;
            var a = arguments;
            if (r) {
              clearTimeout(r);
            } else if (n) {
              e.apply(i, a);
            }
            r = setTimeout(s, t || 100);
          }
          function s() {
            if (!n) {
              e.apply(i, a);
            }
            r = undefined;
          }
        }
        i.destroy = () => {
          clearTimeout(r);
          o = true;
        };
        return i;
      }
      function H(e, t) {
        var n;
        var r = Object.prototype.toString;
        var o = [];
        var i = t && e || e.slice();
        if (!e.length) {
          return o;
        }
        n = i.pop();
        do {
          if (r.call(n) === "[object Array]") {
            i.push.apply(i, n.filter(e => !!e));
          } else {
            o.push(n);
          }
        } while (i.length && (n = i.pop()) !== undefined);
        o.reverse();
        return o;
      }
      var j = 0;
      function F() {
        return j++;
      }
      function z(e) {
        return new Promise(t => {
          var n = e.type + "_" + F();
          e.id = n;
          chrome.runtime.sendMessage(e);
          EE.on("utils.send_message_result", e => {
            if (e.id === n) {
              t(e.data);
            }
          });
        });
      }
      function G(e) {
        return new Promise(t => {
          var n = e.type + "_" + F();
          e.id = n;
          EE.emit("message.background.send", e);
          EE.on("utils.send_message_result", e => {
            if (e.id === n) {
              t(e.data);
            }
          });
        });
      }
      function W(e) {
        return G({
          type: r.b.SEND_REQUEST,
          request: e
        });
      }
      function q(e) {
        if (e && typeof e != "object" && !e.includes("data:")) {
          return [/(http|https):\/\/[\s\S]*(streamasia\.|\.bongngo\.|\.manga123\.net)[\s\S]*\/playlist\/|stream\.vltv\.xyz\/m3u8\/|apix\.gooqlevideo\.com\/player|khophim18\.net\/m3u8|iamplayer\.xyz\/stream.*\/Manifest/g, /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi, /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi, /vdrm\.vtvgiaitri\.vn\/stream/, /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi, /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/, /^\/sequence\/(play|full)\/([a-z0-9]+)/i, /\/video\/(\d+)\/config(\?|$)/i, /key[0-9]=[0-9a-f]{32}/i, /^\/(api|get)_video_info/, /\.mp4.+?\.ts\?nimblesessionid=/, /meo\.saku\.net\/player/, /get\.gooqlevideo\.com\/player/, /streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i, /discordapp\.com\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/, /vidsugar\.com\/.+api\.json/i, /\-hls.*\.cuoiia\.top\/(cdn|media|hls)/, /vkvd\d*\.mycdn\.me/, /vk[a-z0-9\-]+\.vkuser\.net/i, /v\.douyu\.com\/api\/stream\/getStreamUrl/, /api\-.+\.(play|plhq)[\s\S]*\.(xyz|net|site|click|cfd|com)\/api\/.+(playiframe|getblob).+/, /ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i, /ssplay\.net\/[a-z0-9]{2,4}\/[a-z\d]+\.html/i, /\.helurl\.com\/uploads\/.+filename/i, /((smutr\.com)|(cdnka\.net))\/remote_control\.php?.+&file=.+\.(mp4|m3u8)/i, /\.video-delivery\.net/i, /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i, /.+\.play[\s\S]*(xyz|net)\/(m3u8|hls)/i, /.+\.plhqtv[\s\S]*(xyz|net)\/(type1rdv3)/i, /v[0-9]*\.sanstream\.xyz\/video\/.*\/master.html\?.*/i, /stream\.shorthotp\.site\/video\/.*\/master.html/i, /cdn.+\/segment.+\/?token.+/i, /helvid\.([a-z0-9]+)\/hash.php\?.+/i, /southeastasia1-mediap.svc.ms\/.+\/videomanifest/i, /cdn\.animevui\.[a-z]+\/file/i, /\.xyz\/cdn\/hls\/.+\/master\.txt/i, /hls\.streamcdn\.[a-z]+\/m3u8\//i, /\.streamc\.xyz\/(.*hash\.php|(get|[a-z]{1,2})[a-z0-9]*\.php)\?hash=/i, /\.streamc\.xyz\/getPlaylist\.php+/i, /intl-api.iq.com.+\/cache\-video\.iq\.com\/dash\?.+/i, /api\.bilibili\.com\/.+\/wbi\/playurl/i, /cdn\/hls\/[a-z0-9\-_]+\/master\.txt/i, /stream12345\.online\/video\/[a-z0-9\-_]+\/master\.html/i, /content\.vdcdn\.top\/stream\/master\.php/i, /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i, /https:\/\/hls\.fasthls\.top\/media\/.+/i, /eporner\.com\/xhr\/video\/.+\?hash\=.+/i, /phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i, /video\.twimg\.com\/.+video\/(\d+)(\/pu)?\/pl\/[a-z0-9\-_]+\.m3u8/i, /syntheticvideo\..+\/sources\?videoId/i, /goplayer\.xyz\/video\/[a-z0-9\-_]+\/(master|playlist)\./i, /m3u8\.cloustream\.net/i, /x\.mimix\.cc\/watch\/.+/i, /toptop\.fasthls\.top\/hls\/.+/i, /play\.cloudfrela\.com\/stream\/.+/i, /m3u8\-play\-\d+\.(playstreamz\.site|playsex3x\.xyz)\/m3u8\/.+/i, /animixplay\-n.+\/count-data\.js\?.+/i, /hlsmovie\.com\/video\/.+\/master\.html.+/i, /pl\.vlogphim\.net\/m3u8.+/i, /graph\.nhaccuatui\.com\/api\/v1\/playlist/i, /graph\.nhaccuatui\.com\/api\/v1\/song/i, /graph\.nhaccuatui\.com\/api\/v2\/search\/artist\/detail/i, /hlstream\.com\/video\/.+\/master\.html.+/i, /macky\.xtremestream\.xyz\/player\/index\.php\?data\=.+/i, /helvid\.[a-z0-9]+\/play\/token_hash\?.+/i, /hlstream\.com\/video\/.+\/master\.html.+/i, /nhaccuatui\.com\/api(\/v\d+)?(\/playlist\/detail|\/song\/detail|\/video\/detail|\/app\/home\/index|\/song\/feed|\/radio\/musiclist|\/search\/artist\/song)/i, /apis\.naver\.com\/.*\/vod\/play.*\?key\=.*/i, /qooglevideo\.com\/manifest-s1\/02938\.vl/, /pl-ali\.youku\.com\/playlist\/m3u8/, /hs-vod2\.nimo\.tv/, /vevocloud\.com\/play\/index/, /scontent-sin([\d\-]+)\.xx\.fbcdn\.net/, /scontent\.fhan.*\.fbcdn\.net/, /scontent-sin([\d\-]+)-xx\.fbcdn\.cloud\/.+\.m3u8\/stream-plain\?/, /vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist.json/, /^https:\/\/abyssplayer\.com\/[\w-]+$/i, /online\.tiengtrung\.vn\/api\/play\.php/i, /cdn\.donghua3d/, /audinifer.*\/stream\/.+\.m3u8/i, /tiktok\.phimhdc\.com\/edgeplayer\.html/, /data-vod-node\.onflixcdn\.com\/\?.*url=/i, /chophim\.\w+\/static\/image\/\w+/].some(t => t.test(e));
        }
      }
      function Y(e) {
        var t = e.title || e.filename || document.title;
        if (e.type == "subtitles") {
          t = t + " (" + (e.i18n_quality || e.quality) + ")";
        }
        var n = "." + e.ext;
        return t = (t = (t == null ? undefined : t.replace(/\s+/g, " ").replace(/[/\\:*?"<>|\u200c\u200d]/g, "-")) + n).match(/[*~]/gi) ? "_" + t.replace(/[*~]/gi, ".") : t;
      }
      function K(e) {
        if (!e) {
          return null;
        }
        var n;
        for (var r = [/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([\w\-]+)/i, /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/, /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/, /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/, /youtube.*.com\/embed\/([a-z0-9\-_]+)/i, /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/], o = 0; o < r.length; ++o) {
          if (n = e.match(r[o])) {
            return n[1];
          }
        }
        if (e.match(/youtube\.com\/embed\/videoseries/i) && document.querySelector("link[rel=\"canonical\"]")?.href) {
          return K(e);
        }
        return null;
      }
      function X(e) {
        if (o.a.M3U8 && Object(r.B)(e.ext)) {
          return true;
        }
        var t = e.type;
        if (!t) {
          return false;
        }
        var n = r.k[t];
        var i = n && n.extensions;
        return n && i.indexOf(e.ext) !== -1;
      }
      function $(e) {
        for (var t = 0, n = r.q.length; t < n && r.q[t] >= e;) {
          t++;
        }
        return r.q[t - 1];
      }
      function J(e) {
        var t = e.filter(function (e) {
          return e.type === "video" && (!!o.a.DOWNLOAD.M3U8_AUDIO || !["m3u", "m3u8"].includes(e.ext)) && (typeof e.url == "object" && e.url.audioUrl || typeof e.url == "string");
        });
        var n = [{
          bitrate: "128kbps",
          name: "Medium",
          qualityValue: 100,
          itag: "140"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "22"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "37"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "38"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "45"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "46"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "84"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "85"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "101"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "102"
        }, {
          bitrate: "192kbps",
          name: "High",
          qualityValue: 200,
          itag: "172"
        }];
        var r = location.host === "www.youtube.com" ? n : [n[0]];
        var i = [];
        if (t.length) {
          oe(t).forEach(function (e) {
            var t = e.media;
            var o = r.map(function (e) {
              var r = function (e, t) {
                t = t.toLowerCase();
                var n = [...e];
                var r = e.filter(function (e) {
                  return e.ext === "mp4";
                });
                if (r.length) {
                  n = r;
                }
                var o = n.filter(function (e) {
                  return e.quality && e.quality.toLowerCase() === "full hd";
                });
                var i = n.filter(function (e) {
                  return e.quality && e.quality.toLowerCase() === "hd";
                });
                var a = n.filter(function (e) {
                  return e.quality && ["normal", "medium", "standard"].includes(e.quality.toLowerCase());
                });
                switch (t) {
                  case "high":
                    if (o.length) {
                      n = o;
                    } else if (i.length) {
                      n = i;
                    } else if (a.length) {
                      n = a;
                    }
                    break;
                  case "medium":
                  default:
                    if (a.length) {
                      n = a;
                    } else if (i.length) {
                      n = i;
                    } else if (o.length) {
                      n = o;
                    }
                }
                var s = n.filter(function (e) {
                  return typeof e.url == "object" && e.url.audioUrl;
                });
                if (s.length) {
                  n = s;
                }
                return n[0];
              }(t, e.name);
              var o = Object.assign({}, r);
              o.useConverter = true;
              if (typeof o.url == "object") {
                o.url = o.url.audioUrl;
                delete o.useConverter;
              }
              if (["m3u8", "m3u"].includes(o.ext)) {
                o._hls = true;
                delete o._isDashMPD;
              }
              o.ext = "mp3";
              o.soundOnly = true;
              o.quality = e.name;
              o.resolution = e.bitrate;
              o.type = "audio";
              o.sortValues = {
                qualityValue: e.qualityValue
              };
              if (location.host === "www.youtube.com") {
                var i = new URLSearchParams(o.url).get("itag");
                var a = n.find(e => e.itag === i) || n[0];
                if (o.resolution !== a.bitrate && o.quality !== a.name) {
                  o.resolution = "0kbps";
                }
              }
              return o;
            });
            o = o.reduce((e, t) => {
              if (!e.some(e => parseInt(e.resolution) >= parseInt(t.resolution))) {
                (e = []).push(t);
              }
              return e;
            }, []);
            i = i.concat(o);
          });
          return i;
        } else {
          return i;
        }
      }
      var Q;
      var Z = 20000;
      function ee(e) {
        return f(this, undefined, undefined, u().m(function t() {
          var n;
          var r;
          var o;
          var i;
          var a;
          var s;
          var c;
          var l;
          var d;
          var f;
          return u().w(function (t) {
            while (true) {
              switch (t.p = t.n) {
                case 0:
                  t.p = 0;
                  t.n = 1;
                  return fetch(e);
                case 1:
                  if ((n = t.v).ok) {
                    t.n = 2;
                    break;
                  }
                  return t.a(2, null);
                case 2:
                  r = n.headers;
                  o = r.get("content-type");
                  t.n = 3;
                  return n.blob();
                case 3:
                  i = t.v;
                  t.n = 4;
                  return createImageBitmap(i);
                case 4:
                  a = t.v;
                  if (!((s = a.width * a.height) < Z)) {
                    t.n = 5;
                    break;
                  }
                  a.close();
                  return t.a(2, null);
                case 5:
                  c = new URL(e);
                  l = c.pathname;
                  d = l.split(".").pop();
                  f = {
                    url: e,
                    width: a.width,
                    height: a.height,
                    totalPixel: s,
                    sizeKiloBytes: Number((i.size / 1000).toFixed(1)),
                    extension: (o == null ? undefined : o.split("/").pop()) || d || ""
                  };
                  a.close();
                  return t.a(2, f);
                case 6:
                  t.p = 6;
                  t.v;
                  return t.a(2, null);
              }
            }
          }, t, null, [[0, 6]]);
        }));
      }
      function te(e) {
        if (!e || !(e instanceof HTMLVideoElement)) {
          return null;
        }
        var t = e.poster || e.getAttribute("poster");
        if (t && t.trim() !== "") {
          return t;
        } else {
          return null;
        }
      }
      function ne(e) {
        if (!e) {
          return null;
        }
        var t = e.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/);
        if (t) {
          return `https://img.youtube.com/vi/${t[1]}/maxresdefault.jpg`;
        } else {
          return null;
        }
      }
      function re(e) {
        var t = [];
        e.forEach(e => {
          var n = e.type == "video";
          e.title ||= e.filename;
          var r = e.widgetID;
          var o = e.title || e.filename;
          var i = t.find(e => e.widgetID === r);
          if (i) {
            if (n) {
              if (e.thumbnail) {
                i.videoThumbnail = e.thumbnail;
              } else {
                i.videoThumbnail = ne(e.referrer || "");
              }
              i.hasVideo = true;
            }
            i.media.push(e);
          } else {
            t.push({
              media: [e],
              title: o,
              hasVideo: !!n,
              videoThumbnail: n ? e.thumbnail || ne(e.referrer || "") : null,
              widgetID: e.widgetID
            });
          }
        });
        return t;
      }
      function oe(e) {
        var t = [];
        e.forEach(e => {
          var n = e.type == "video";
          e.title ||= e.filename;
          var r = e.title || e.filename;
          var o = t.find(e => e.title === r || e.filename === r);
          if (o) {
            if (n) {
              if (e.thumbnail) {
                o.videoThumbnail = e.thumbnail;
              } else {
                o.videoThumbnail = ne(e.referrer || "");
              }
              o.hasVideo = true;
            }
            o.media.push(e);
          } else {
            t.push({
              media: [e],
              title: r,
              hasVideo: !!n,
              videoThumbnail: n ? e.thumbnail || ne(e.referrer || "") : null
            });
          }
        });
        return t;
      }
      try {
        Q = chrome.i18n.getMessage || (() => "");
      } catch (e) {
        Q = () => "";
      }
      var ie = Q;
      var ae = (e, t) => e.type === t.type && e.id === t.id && (typeof e.url != "string" && typeof t.url != "string" ? e.url.videoUrl == t.url.videoUrl : e.url === t.url);
      var se = t => {
        return (t = t ?? e.tab_url ?? window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/);
      };
      var ce = e => e ? e.replaceAll(/[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g, "").replaceAll(/\s+/g, " ") : e;
      var le = (e, t, n) => {
        var r = t.timeout;
        delete t.timeout;
        if (r) {
          n = n ?? new AbortController();
          setTimeout(() => n.abort(), r);
          return fetch(e, Object.assign({
            signal: n.signal
          }, t));
        } else {
          return fetch(e, t);
        }
      };
      var ue = e => new Promise(t => setTimeout(t, e));
      function de(e) {
        return function (t = e) {
          return t;
        };
      }
      function fe(e, t, n) {
        t.forEach(t => {
          if (typeof n == "function" && n(t, e) || e.includes(t)) {
            e.push(t);
          }
        });
        return e;
      }
      class pe {
        static get(e) {
          return new Promise(t => {
            chrome.storage.local.get(e, e => {
              t(e);
            });
          });
        }
      }
      function he(e) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(e);
        } else {
          setTimeout(e, 20);
        }
      }
      function ge(e) {
        var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        var n = decodeURIComponent(window.atob(t).split("").map(function (e) {
          return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(n);
      }
      function me(e) {
        return e.trim().replace("www.", "").replace(/^https?:\/\//i, "");
      }
      function ve(e) {
        try {
          if (e <= 9) {
            return "0" + e;
          } else {
            return "" + e;
          }
        } catch (e) {
          return "00";
        }
      }
      function ye(e) {
        var t = e.split(".");
        return Number(t.map(e => ve(Number(e))).join(""));
      }
      function ke(e) {
        var t = e.getFullYear();
        var n = e.getMonth();
        var r = e.getDate();
        return parseInt(`${t}${ve(n)}${ve(r)}`);
      }
      function be(e) {
        var t;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
        return function (r) {
          clearTimeout(t);
          t = setTimeout(() => {
            e(r);
          }, n);
        };
      }
      function _e(e) {
        var t = new Date(e);
        var n = new Date(Date.now());
        return t.getDate() == n.getDate() && t.getMonth() == n.getMonth() && t.getFullYear() == n.getFullYear();
      }
      function Te(e) {
        var t = _e(e);
        var n = (new Date(Date.now()).setHours(0, 0, 0, 0) - new Date(e).setHours(0, 0, 0, 0)) / 86400 / 1000 == 1;
        return !t && n;
      }
      function Se() {
        var e;
        return !!((e = window?.matchMedia) === null || e === undefined ? undefined : e.call(window, "(prefers-color-scheme: dark)"))?.matches;
      }
      function xe() {
        0;
      }
      function we(e) {
        var t = c.a.enc.Hex.parse(e).toString(c.a.enc.Base64);
        return c.a.AES.decrypt(t, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ").toString(c.a.enc.Utf8);
      }
      function Ee(e) {
        var t = e.indexOf("{");
        if (t === -1) {
          return null;
        }
        var n = 0;
        for (var r = t; r < e.length; r++) {
          if (e[r] === "{") {
            n++;
          }
          if (e[r] === "}") {
            n--;
          }
          if (n === 0) {
            var o = e.slice(t, r + 1);
            try {
              return JSON.parse(o);
            } catch (e) {
              return null;
            }
          }
        }
      }
      var Ae = [{
        regex: /g\.doubleclick\.net/i,
        type: "xmlhttprequest",
        initiators: ["youtube.com", "music.youtube.com"]
      }, {
        regex: /youtube\.com\/pagead\//i,
        type: "xmlhttprequest",
        initiators: ["youtube.com", "music.youtube.com"]
      }, {
        regex: /google\..+\/pagead\/lvz\?/i,
        type: "image",
        initiators: ["youtube.com", "music.youtube.com"]
      }];
      var Ce = () => new Promise(e => {
        chrome.i18n.detectLanguage(document.body.innerText.substring(0, 1000), function (t) {
          if (t.isReliable) {
            e(t.languages[0]);
          }
          e(null);
        });
      });
      var Oe = e => e.split(";").map(e => e.trim().split(/=(.+)/)).reduce((e, t) => {
        e[t[0]] = t[1];
        return e;
      }, {});
      function Ie() {
        return f(this, undefined, undefined, u().m(function e() {
          var t;
          var n;
          var o;
          var i;
          var a;
          return u().w(function (e) {
            while (true) {
              switch (e.n) {
                case 0:
                  t = ["SAPISID", "__Secure-3PAPISID", "__Secure-1PAPISID"];
                  n = ["SAPISIDHASH", "SAPISID1PHASH", "SAPISID3PHASH"];
                  e.n = 1;
                  return G({
                    type: r.b.GET_COOKIES,
                    cookies: t
                  });
                case 1:
                  o = e.v;
                  i = l.a.ssId;
                  if (!o) {
                    e.n = 2;
                    break;
                  }
                  a = n.map((e, n) => Ne(e, o[t[n]], "https://www.youtube.com", {
                    u: i
                  }));
                  return e.a(2, Promise.all(a).then(e => e.join(" ")));
                case 2:
                  return e.a(2, null);
              }
            }
          }, e);
        }));
      }
      function Ne(e, t, n, r) {
        return f(this, undefined, undefined, u().m(function o() {
          var i;
          var a;
          var s;
          var c;
          return u().w(function (o) {
            while (true) {
              switch (o.n) {
                case 0:
                  i = Math.round(Date.now() / 1000);
                  a = [];
                  if (r) {
                    a.push(Object.values(r).join(":"));
                  }
                  a.push(i, t, n);
                  o.n = 1;
                  return De(a.join(" "));
                case 1:
                  s = o.v;
                  c = [i, s];
                  if (r) {
                    c.push(...Object.keys(r));
                  }
                  return o.a(2, `${e} ${c.join("_")}`);
              }
            }
          }, o);
        }));
      }
      function De(e) {
        return f(this, undefined, undefined, u().m(function t() {
          var n;
          var r;
          var o;
          var i;
          var a;
          return u().w(function (t) {
            while (true) {
              switch (t.n) {
                case 0:
                  n = new TextEncoder();
                  r = n.encode(e);
                  t.n = 1;
                  return crypto.subtle.digest("SHA-1", r);
                case 1:
                  o = t.v;
                  i = Array.from(new Uint8Array(o));
                  a = i.map(e => e.toString(16).padStart(2, "0")).join("");
                  return t.a(2, a);
              }
            }
          }, t);
        }));
      }
      function Re(e) {
        return f(this, undefined, undefined, u().m(function t() {
          var n;
          return u().w(function (t) {
            while (true) {
              switch (t.n) {
                case 0:
                  t.n = 1;
                  return G({
                    type: r.b.CHECK_URL,
                    data: {
                      url: e
                    }
                  });
                case 1:
                  if (n = t.v) {
                    t.n = 2;
                    break;
                  }
                  return t.a(2, null);
                case 2:
                  return t.a(2, n.status);
              }
            }
          }, t);
        }));
      }
    }).call(this, n(13));
  };
