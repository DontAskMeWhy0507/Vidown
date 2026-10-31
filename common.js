(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var o = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(o.exports, o, o.exports, n);
    o.l = true;
    return o.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, r) {
    if (!n.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: r
      });
    }
  };
  n.r = function (e) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  n.t = function (e, t) {
    if (t & 1) {
      e = n(e);
    }
    if (t & 8) {
      return e;
    }
    if (t & 4 && typeof e == "object" && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    n.r(r);
    Object.defineProperty(r, "default", {
      enumerable: true,
      value: e
    });
    if (t & 2 && typeof e != "string") {
      for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
    }
    return r;
  };
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "./";
  n(n.s = 736);
})({
  0: function (e, t, n) {
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
  },
  1: function (e, t, n) {
    "use strict";

    n.d(t, "k", function () {
      return r;
    });
    n.d(t, "r", function () {
      return o;
    });
    n.d(t, "s", function () {
      return i;
    });
    n.d(t, "B", function () {
      return a;
    });
    n.d(t, "q", function () {
      return s;
    });
    n.d(t, "l", function () {
      return c;
    });
    n.d(t, "p", function () {
      return l;
    });
    n.d(t, "h", function () {
      return u;
    });
    n.d(t, "o", function () {
      return d;
    });
    n.d(t, "c", function () {
      return f;
    });
    n.d(t, "w", function () {
      return p;
    });
    n.d(t, "n", function () {
      return h;
    });
    n.d(t, "u", function () {
      return g;
    });
    n.d(t, "y", function () {
      return m;
    });
    n.d(t, "e", function () {
      return v;
    });
    n.d(t, "g", function () {
      return y;
    });
    n.d(t, "f", function () {
      return k;
    });
    n.d(t, "z", function () {
      return b;
    });
    n.d(t, "i", function () {
      return _;
    });
    n.d(t, "a", function () {
      return T;
    });
    n.d(t, "A", function () {
      return S;
    });
    n.d(t, "x", function () {
      return x;
    });
    n.d(t, "t", function () {
      return w;
    });
    n.d(t, "v", function () {
      return E;
    });
    n.d(t, "b", function () {
      return A;
    });
    n.d(t, "j", function () {
      return C;
    });
    n.d(t, "m", function () {
      return O;
    });
    n.d(t, "d", function () {
      return I;
    });
    var r = {
      audio: {
        title: "Audio",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.34701 16.1464C3.91819 16.7176 4.60481 17.0032 5.40688 17.0032C6.20895 17.0032 6.89558 16.7176 7.46676 16.1464C8.03792 15.5752 8.3235 14.8886 8.3235 14.0865V5.72114H16.2603V11.7404C16.0263 11.5502 15.7699 11.4076 15.491 11.3125C15.2122 11.2174 14.913 11.1699 14.5936 11.1699C13.7915 11.1699 13.1049 11.4555 12.5337 12.0267C11.9625 12.5978 11.6769 13.2845 11.6769 14.0865C11.6769 14.8886 11.9625 15.5752 12.5337 16.1464C13.1049 16.7176 13.7915 17.0032 14.5936 17.0032C15.3957 17.0032 16.0823 16.7176 16.6535 16.1464C17.2246 15.5752 17.5102 14.8886 17.5102 14.0865V5.72114V2.99683H16.6768H16.2603H7.07355V11.7404C6.83957 11.5502 6.58316 11.4076 6.30432 11.3125C6.02547 11.2174 5.72632 11.1699 5.40688 11.1699C4.60481 11.1699 3.91819 11.4555 3.34701 12.0267C2.77582 12.5978 2.49023 13.2845 2.49023 14.0865C2.49023 14.8886 2.77582 15.5752 3.34701 16.1464Z\" fill=\"currentColor\"/>\n</svg>\n",
        rgxp: /audio/i,
        extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        ctype2extension: {
          midi: "mid",
          mp4: "m4a",
          m4a: "m4a",
          mpeg: "mp3",
          mpeg3: "mp3",
          wav: "wav",
          aiff: "aif",
          opus: "opus"
        }
      },
      video: {
        title: "Video",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.79009 16.25C3.36914 16.25 3.01284 16.1041 2.72117 15.8125C2.42952 15.5208 2.28369 15.1645 2.28369 14.7435V5.25642C2.28369 4.83547 2.42952 4.47917 2.72117 4.1875C3.01284 3.89583 3.36914 3.75 3.79009 3.75H13.2772C13.6982 3.75 14.0545 3.89583 14.3461 4.1875C14.6378 4.47917 14.7836 4.83547 14.7836 5.25642V9.07052L17.7163 6.13785V13.8621L14.7836 10.9294V14.7435C14.7836 15.1645 14.6378 15.5208 14.3461 15.8125C14.0545 16.1041 13.6982 16.25 13.2772 16.25H3.79009ZM3.79009 15H13.2772C13.352 15 13.4135 14.9759 13.4615 14.9279C13.5096 14.8798 13.5337 14.8183 13.5337 14.7435V5.25642C13.5337 5.18162 13.5096 5.12019 13.4615 5.0721C13.4135 5.02402 13.352 4.99998 13.2772 4.99998H3.79009C3.7153 4.99998 3.65386 5.02402 3.60577 5.0721C3.55769 5.12019 3.53365 5.18162 3.53365 5.25642V14.7435C3.53365 14.8183 3.55769 14.8798 3.60577 14.9279C3.65386 14.9759 3.7153 15 3.79009 15Z\" fill=\"currentColor\"/>\n</svg>\n",
        rgxp: /video/i,
        extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
        extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
        ctype2extension: {
          mpeg: "mp4",
          mp4: "mp4",
          m4v: "mp4",
          "3gpp": "3gp",
          flv: "flv",
          quicktime: "mov",
          msvideo: "avi",
          "ms-wmv": "wmv",
          "ms-asf": "asf"
        }
      },
      no_watermark_video: {
        title: "No watermark video",
        icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z\" fill=\"currentColor\"/></svg>",
        rgxp: /no watermark video/i,
        extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
        extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
        ctype2extension: {
          mpeg: "mp4",
          mp4: "mp4",
          m4v: "mp4",
          "3gpp": "3gp",
          flv: "flv",
          quicktime: "mov",
          msvideo: "avi",
          "ms-wmv": "wmv",
          "ms-asf": "asf"
        }
      },
      subtitles: {
        title: "Subtitles",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.90869 13.6143V12.3643H11.8253V13.6143H3.90869ZM3.90869 10.2809V9.03096H16.8253V10.2809H3.90869ZM3.90869 6.94759V5.69763H16.8253V6.94759H3.90869Z\" fill=\"currentColor\"/>\n</svg>\n",
        rgxp: /subtitles/i,
        extensions: ["yt_srt", "srt", "vtt"],
        extensions_weight: ["yt_srt", "srt", "vtt"]
      },
      audio_channel: {
        title: "Audio channel",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M7.11517 17.0833H4.42292C4.00198 17.0833 3.64567 16.9375 3.354 16.6458C3.06234 16.3541 2.9165 15.9978 2.9165 15.5769V10C2.9165 9.0171 3.10241 8.09616 3.47421 7.23719C3.846 6.37821 4.35134 5.62928 4.99021 4.9904C5.6291 4.35152 6.37803 3.84619 7.237 3.4744C8.09598 3.10259 9.01691 2.91669 9.99982 2.91669C10.9827 2.91669 11.9037 3.10259 12.7626 3.4744C13.6216 3.84619 14.3705 4.35152 15.0094 4.9904C15.6483 5.62928 16.1536 6.37821 16.5254 7.23719C16.8972 8.09616 17.0831 9.0171 17.0831 10V15.5769C17.0831 15.9978 16.9373 16.3541 16.6456 16.6458C16.354 16.9375 15.9977 17.0833 15.5767 17.0833H12.8845V11.1859H15.8332V10C15.8332 8.375 15.2672 6.99653 14.1352 5.86458C13.0033 4.73264 11.6248 4.16667 9.99982 4.16667C8.37482 4.16667 6.99634 4.73264 5.8644 5.86458C4.73246 6.99653 4.16648 8.375 4.16648 10V11.1859H7.11517V17.0833ZM5.86521 12.4359H4.16648V15.5769C4.16648 15.641 4.19319 15.6998 4.24661 15.7532C4.30004 15.8066 4.35881 15.8333 4.42292 15.8333H5.86521V12.4359ZM14.1344 12.4359V15.8333H15.5767C15.6408 15.8333 15.6996 15.8066 15.753 15.7532C15.8064 15.6998 15.8332 15.641 15.8332 15.5769V12.4359H14.1344Z\" fill=\"currentColor\"/>\r\n</svg>\r\n",
        rgxp: /audio channel/i,
        extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        ctype2extension: {
          midi: "mid",
          mp4: "m4a",
          m4a: "m4a",
          mpeg: "mp3",
          mpeg3: "mp3",
          wav: "wav",
          aiff: "aif",
          opus: "opus"
        }
      },
      image: {
        title: "Image",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.08747 17.0753C3.66653 17.0753 3.31022 16.9295 3.01855 16.6378C2.72689 16.3462 2.58105 15.9898 2.58105 15.5689V4.41511C2.58105 3.99416 2.72689 3.63786 3.01855 3.34619C3.31022 3.05452 3.66653 2.90869 4.08747 2.90869H15.2413C15.6622 2.90869 16.0185 3.05452 16.3102 3.34619C16.6018 3.63786 16.7477 3.99416 16.7477 4.41511V15.5689C16.7477 15.9898 16.6018 16.3462 16.3102 16.6378C16.0185 16.9295 15.6622 17.0753 15.2413 17.0753H4.08747ZM4.08747 15.8253H15.2413C15.3054 15.8253 15.3641 15.7986 15.4176 15.7452C15.471 15.6918 15.4977 15.633 15.4977 15.5689V4.41511C15.4977 4.351 15.471 4.29223 15.4176 4.2388C15.3641 4.18538 15.3054 4.15867 15.2413 4.15867H4.08747C4.02336 4.15867 3.96459 4.18538 3.91116 4.2388C3.85774 4.29223 3.83103 4.351 3.83103 4.41511V15.5689C3.83103 15.633 3.85774 15.6918 3.91116 15.7452C3.96459 15.7986 4.02336 15.8253 4.08747 15.8253ZM5.28941 13.9503H14.1034L11.3631 10.2965L9.02335 13.3414L7.35668 11.21L5.28941 13.9503Z\" fill=\"#AAABAC\"/>\n</svg>\n",
        rgxp: /image/i,
        extensions: ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "tif", "tiff", "heic", "heif", "raw", "ico", "cur", "svg"],
        extensions_weight: ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "tif", "tiff", "heic", "heif", "raw", "ico", "cur", "svg"],
        ctype2extension: {}
      }
    };
    var o = {
      "4320p": {
        i18n_label: "quality_8k_uhd",
        label: "8K UHD",
        value: 1600
      },
      "4320p60 HDR": {
        i18n_label: "quality_8k_uhd_hdr",
        label: "8K UHD HDR",
        value: 1500
      },
      "3072p": {
        i18n_label: "quality_4k_qfhd",
        label: "4K QFHD",
        value: 1400
      },
      "3072p60 HDR": {
        i18n_label: "quality_4k_qfhd_hdr",
        label: "4K QFHD HDR",
        value: 1300
      },
      "2160p": {
        i18n_label: "quality_4k_uhd",
        label: "4K UHD",
        value: 1200
      },
      "2160p60 HDR": {
        i18n_label: "quality_4k_uhd_hdr",
        label: "4K UHD HDR",
        value: 1199
      },
      "2048p": {
        i18n_label: "quality_qhd",
        label: "Quad HD",
        value: 1100
      },
      "2048p60 HDR": {
        i18n_label: "quality_qhd_hdr",
        label: "Quad HD HDR",
        value: 1099
      },
      "1440p": {
        i18n_label: "quality_qhd",
        label: "Quad HD",
        value: 1000
      },
      "1440p60 HDR": {
        i18n_label: "quality_qhd_hdr",
        label: "Quad HD HDR",
        value: 900
      },
      "1080p": {
        i18n_label: "quality_fhd",
        label: "Full HD",
        value: 800
      },
      "1080p60 HDR": {
        i18n_label: "quality_fhd_hdr",
        label: "Full HD HDR",
        value: 700
      },
      "720p": {
        i18n_label: "quality_hd",
        label: "HD",
        value: 600
      },
      "720p60 HDR": {
        i18n_label: "quality_hd_hdr",
        label: "HD HDR",
        value: 599
      },
      "540p": {
        i18n_label: "quality_standard",
        label: "Standard",
        value: 500
      },
      "480p": {
        i18n_label: "quality_standard",
        label: "Standard",
        value: 500
      },
      "360p": {
        i18n_label: "quality_medium",
        label: "Medium",
        value: 400
      },
      "320p": {
        i18n_label: "quality_medium",
        label: "Medium",
        value: 400
      },
      "270p": {
        i18n_label: "quality_small",
        label: "Small",
        value: 300
      },
      "240p": {
        i18n_label: "quality_small",
        label: "Small",
        value: 200
      },
      "144p": {
        i18n_label: "quality_mobile",
        label: "Mobile",
        value: 100
      }
    };
    var i = ["video", "audio", "subtitles"];
    function a(e) {
      return !!e && ["m3u8", "m3u", "hls", "zip"].indexOf(e) !== -1;
    }
    var s = [4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270, 240, 144];
    var c = [/^(.+\.)?nixcdn\.com/im, /^(.+\.)?vcmedia\.vn/i, /^(.+\.)?kenhhd\.tv/i];
    var l = [/coccoc\.com\/sitemap\.xml/i];
    var u = [/m\.naver\.com\/\/?shorts/i];
    var d = "hidePermanent";
    var f = "customControlFromServer";
    var p = "youtubeControls";
    var h = "otherControls";
    var g = "youtubeAdsContainerClasses";
    var m = "youtubeSkipBtnClasses";
    var v = "116.0.0.0";
    var y = 3;
    var k = 1;
    var b = "youtubeTurnOffAdblock";
    var _ = "gserpSelectors";
    var T = "window.isAdguardEnabled = false";
    var S = "ytbViewCount";
    var x = 11;
    var w = "YTAdguardStatus";
    var E = "ytbAudioChannel";
    class A {}
    A.PROMOTE_SERP = {
      _: "promote_serp",
      GET: "get_promote_serp",
      CLOSE: "close_promote_serp"
    };
    A.ONBOARD_TRACK = {
      GET: "get_onboard_track",
      SAVE: "save_onboard_track"
    };
    A.ONBOARD_IMPORTDATA = "get_onboard_importdata";
    A.GET_FEATURE = "get_feature";
    A.DOWNLOAD = "download";
    A.PLAY = "play_video";
    A.SET_FEATURE = "set_feature";
    A.IS_SUPPORTED = "is_supported";
    A.FRAME_TYPE = "frame_type";
    A.FETCH = "background_request";
    A.YOUTUBE = {
      GET_INFO: "youtube_get_info",
      GET_MPD: "youtube_get_mpd_info"
    };
    A.OMNI = {
      ACTIVE: "active_omnibox",
      DEACTIVE: "deactive_omnibox"
    };
    A.METRICS = "metrics";
    A.CACHE = "cache.background";
    A.PIP = {
      REQUEST: "pip",
      INNER: "inner_frame_pip",
      ON: {
        ENTER: "inner_pip_enter",
        LEAVE: "inner_pip_leave"
      }
    };
    A.CONSOLE_LOG = "console.log";
    A.GET_URL = "get_url";
    A.SAVE_URL = "save_url";
    A.GET_MATCHED_REQUESTS = "get_matched_requests";
    A.GET_SERVER_TIME = "get_server_time";
    A.GET_FB_SAVED_URL = "get_fb_saved_url";
    A.OPEN_SEARCH_SETTINGS = "open_search_engines_settings";
    A.SCRIPTING = {
      INJECT: "inject_script",
      NOTIFY: "script_executed",
      EXEC: "execute_script"
    };
    A.OPEN_SETTINGS = "open_settings";
    A.OFFSCREEN = {};
    A.TURN_OFF_ADBLOCK_ON_YOUTUBE = "turn_off_adblock_on_youtube";
    A.TURN_ON_ADBLOCK_ON_YOUTUBE = "turn_on_adblock_on_youtube";
    A.GET_FASTFORWARD_ENABLED = "get_ff_enabled";
    A.GET_ADBLOCK_STATUS = "get_adblock_status";
    A.SET_AS_DEFAULT_BROWSER = "set_cc_as_default_browser";
    A.CORS_FETCH = "cors_fetch";
    A.GET_ADGUARD_INJECTING_STATUS = "get_adguard_injecting_status";
    A.GET_ABTEST = "get_abtest";
    A.CHECK_URL_CHANGED = "check_url_changed";
    A.CHECK_URL = "check_url";
    A.GETVIDTIME = "get_vid_time";
    A.EVENTENOUGHTIME = "event_enough_time";
    A.GET_COOKIES = "get_cookies";
    A.SKIP_VIDEO = "skip_video";
    A.OPEN_SIDEPANEL = "open_sidepanel";
    A.RETURN_TRANSCRIPT = "return_transcript";
    A.SEND_REQUEST = "send_request";
    var C = ["chrome://", "coccoc://"];
    var O = ["coccoc.com/webhp", "about:blank"];
    var I = ["sex", "porn", "vlxx", "vlxy", "vlzz", "69", "18", "xvideo", "hentai", "jav", "cliphot", "xx", "mobiblog", "spank", "quatvn", "phang", "missav", "boyfriendtv", "lon88", "lonkk", "sieukhung", "thiendia", "gaigu", "lenlut", "heovl", "phimheo", "quaylen", "checkerviet", "koanchay", "sieudamtv", "phevkl", "heomup", "hdvietsub", "cuongdam", "phimloz", "chinababe", "phimden", "phim18", "xemsv", "thisvid", "thisav", "xsub", "phimkk", "chich", "phimcapba", "chongtoico", "thanhlau", "hdgay", "vkl", "vl", "phima", "strip", "loz", "xhamster", "banlinh", "quyong", "maulon", "prn", "baocaosu", "tinhduc", "thudam", "ditnhau", "ditme", "jable", "gaimup", "mbbg", "lauxanh", "gaito", "vl", "3xchina", "phimnguoilon", "mat6tube", "jpxnx", "vnshow", "gaigoi", "titday", "7mmtv", "daongon", "londep", "lontv", "thienvadia", "phimtz", "fuck", "phimxes", "phimsec", "xnx", "phang", "3x", "buoito", "hangdep", "kynuviet", "gaikhoehang", "chinaav", "xyz", "sex", "vkl", "xx", "xxx", "jav", "dam", "hentai", "domknig", "18", "phetgai", "porn", "gaidam", "daoxinh", "heo88", "tuoinung", "xyz", "buomtv", "kichdam"];
  },
  11: function (e, t, n) {
    "use strict";

    (function (e) {
      var r = n(1);
      function o(e) {
        return e.split(".").map(e => parseInt(e));
      }
      function i(e, t) {
        if (!e) {
          return false;
        }
        var n = t.split(" ");
        if (n.length !== 2) {
          return false;
        }
        var r = -1;
        switch (n[0]) {
          case ">":
            r = 1;
            break;
          case ">=":
            r = 0;
        }
        var i;
        var a;
        var s;
        var c = o(n[1]);
        a = c;
        return ((s = (i = e)[0] - a[0]) !== 0 || (s = i[1] - a[1]) != 0 || (s = i[2] - a[2]) != 0 ? s : s = i[3] - a[3]) >= r;
      }
      var a = function (e) {
        var t = e.match(/Chrome\/([\d.]+)/);
        if (t && t[1]) {
          t = o(t[1]);
        }
        var n = i.bind(null, t);
        return {
          YT: {
            mp4: true,
            m4a: true,
            webm: n(">= 39.0.2171.103"),
            weba: n(">= 39.0.2171.103")
          },
          M3U8: n("> 62.4.3202.180"),
          SOUND_ONLY: n("> 55.4.2883.114") || !!t && t[0] === 50 && n("> 50.3.2661.150"),
          SUBTITLES: n("> 55.4.2883.114") || !!t && t[0] === 50 && n("> 50.3.2661.150"),
          PLAY_NOW_BOTTOM_TOOLTIP: n("> 55.4.2883.126"),
          IS_ADS_PIP_PARAMS: n("> 60.4.3112.120"),
          MEDIA_WEB_REQUEST: n(">= 58.4.3029.118"),
          SERP_ADD_STRUCTURES: n(">= 62.4.3202.176"),
          SERP_ADD_INNER_STRUCTURES: n(">= 64.4.3282.200"),
          MOBILE_TRANSFER_PANEL: true,
          CUSTOM_METRICS_JSON: n(">= 64.4.3282.236"),
          DASH_DOWNLOAD: n(">= 72.0.3626.130"),
          WEB_REQUEST_EXTRA_HEADERS: n(">= 72.0.0.0"),
          NATIVE_PIP: n(">= 74.0.0.0"),
          DOWNLOAD: {
            EXTRA_DATAS: n(">= 103.0.0.0"),
            M3U8_AUDIO: n(">= 109.0.0.0")
          },
          CHATGPT: n(">= 110.0.0.0"),
          DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: n(">= 117.0.0.0"),
          DO_NOT_FAST_FORWARD_YOUTUBE_ADS: n(">= " + r.e),
          SRT_V3_SUPPORT: n(">= 121.0.0.0"),
          ADGUARD_SWITCHER: n(">= 140.0.0.0"),
          PREFETCH_SUPPORT: n(">= 110.0.0.0"),
          NEW_MEDIA_DOWNLOAD: n(">= 151.0.0.0")
        };
      }(e.navigator.userAgent);
      t.a = a;
    }).call(this, n(13));
  },
  13: function (e, t) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      if (typeof window == "object") {
        n = window;
      }
    }
    e.exports = n;
  },
  16: function (e, t, n) {
    var r;
    r = n(4);
    n(26);
    n(51);
    n(52);
    n(18);
    n(53);
    n(19);
    n(40);
    n(34);
    n(54);
    n(41);
    n(55);
    n(56);
    n(57);
    n(35);
    n(58);
    n(17);
    n(8);
    n(59);
    n(60);
    n(61);
    n(62);
    n(63);
    n(64);
    n(65);
    n(66);
    n(67);
    n(68);
    n(69);
    n(70);
    n(71);
    n(72);
    n(73);
    n(74);
    n(75);
    e.exports = r;
  },
  17: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    u = n(4);
    n(40);
    n(35);
    o = (r = u).lib;
    i = o.Base;
    a = o.WordArray;
    s = r.algo;
    c = s.MD5;
    l = s.EvpKDF = i.extend({
      cfg: i.extend({
        keySize: 4,
        hasher: c,
        iterations: 1
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var n;
        var r = this.cfg;
        var o = r.hasher.create();
        var i = a.create();
        for (var s = i.words, c = r.keySize, l = r.iterations; s.length < c;) {
          if (n) {
            o.update(n);
          }
          n = o.update(e).finalize(t);
          o.reset();
          for (var u = 1; u < l; u++) {
            n = o.finalize(n);
            o.reset();
          }
          i.concat(n);
        }
        i.sigBytes = c * 4;
        return i;
      }
    });
    r.EvpKDF = function (e, t, n) {
      return l.create(n).compute(e, t);
    };
    e.exports = u.EvpKDF;
  },
  18: function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    o = (r = i).lib.WordArray;
    r.enc.Base64 = {
      stringify: function (e) {
        var t = e.words;
        var n = e.sigBytes;
        var r = this._map;
        e.clamp();
        var o = [];
        for (var i = 0; i < n; i += 3) {
          var a = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
          for (var s = 0; s < 4 && i + s * 0.75 < n; s++) {
            o.push(r.charAt(a >>> (3 - s) * 6 & 63));
          }
        }
        var c = r.charAt(64);
        if (c) {
          while (o.length % 4) {
            o.push(c);
          }
        }
        return o.join("");
      },
      parse: function (e) {
        var t = e.length;
        var n = this._map;
        var r = this._reverseMap;
        if (!r) {
          r = this._reverseMap = [];
          for (var i = 0; i < n.length; i++) {
            r[n.charCodeAt(i)] = i;
          }
        }
        var a = n.charAt(64);
        if (a) {
          var s = e.indexOf(a);
          if (s !== -1) {
            t = s;
          }
        }
        return function (e, t, n) {
          var r = [];
          var i = 0;
          for (var a = 0; a < t; a++) {
            if (a % 4) {
              var s = n[e.charCodeAt(a - 1)] << a % 4 * 2;
              var c = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
              var l = s | c;
              r[i >>> 2] |= l << 24 - i % 4 * 8;
              i++;
            }
          }
          return o.create(r, i);
        }(e, t, r);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    e.exports = i.enc.Base64;
  },
  19: function (e, t, n) {
    var r;
    r = n(4);
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.algo;
      var s = [];
      (function () {
        for (var t = 0; t < 64; t++) {
          s[t] = e.abs(e.sin(t + 1)) * 4294967296 | 0;
        }
      })();
      var c = a.MD5 = i.extend({
        _doReset: function () {
          this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function (e, t) {
          for (var n = 0; n < 16; n++) {
            var r = t + n;
            var o = e[r];
            e[r] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
          }
          var i = this._hash.words;
          var a = e[t + 0];
          var c = e[t + 1];
          var p = e[t + 2];
          var h = e[t + 3];
          var g = e[t + 4];
          var m = e[t + 5];
          var v = e[t + 6];
          var y = e[t + 7];
          var k = e[t + 8];
          var b = e[t + 9];
          var _ = e[t + 10];
          var T = e[t + 11];
          var S = e[t + 12];
          var x = e[t + 13];
          var w = e[t + 14];
          var E = e[t + 15];
          var A = i[0];
          var C = i[1];
          var O = i[2];
          var I = i[3];
          A = l(A, C, O, I, a, 7, s[0]);
          I = l(I, A, C, O, c, 12, s[1]);
          O = l(O, I, A, C, p, 17, s[2]);
          C = l(C, O, I, A, h, 22, s[3]);
          A = l(A, C, O, I, g, 7, s[4]);
          I = l(I, A, C, O, m, 12, s[5]);
          O = l(O, I, A, C, v, 17, s[6]);
          C = l(C, O, I, A, y, 22, s[7]);
          A = l(A, C, O, I, k, 7, s[8]);
          I = l(I, A, C, O, b, 12, s[9]);
          O = l(O, I, A, C, _, 17, s[10]);
          C = l(C, O, I, A, T, 22, s[11]);
          A = l(A, C, O, I, S, 7, s[12]);
          I = l(I, A, C, O, x, 12, s[13]);
          O = l(O, I, A, C, w, 17, s[14]);
          A = u(A, C = l(C, O, I, A, E, 22, s[15]), O, I, c, 5, s[16]);
          I = u(I, A, C, O, v, 9, s[17]);
          O = u(O, I, A, C, T, 14, s[18]);
          C = u(C, O, I, A, a, 20, s[19]);
          A = u(A, C, O, I, m, 5, s[20]);
          I = u(I, A, C, O, _, 9, s[21]);
          O = u(O, I, A, C, E, 14, s[22]);
          C = u(C, O, I, A, g, 20, s[23]);
          A = u(A, C, O, I, b, 5, s[24]);
          I = u(I, A, C, O, w, 9, s[25]);
          O = u(O, I, A, C, h, 14, s[26]);
          C = u(C, O, I, A, k, 20, s[27]);
          A = u(A, C, O, I, x, 5, s[28]);
          I = u(I, A, C, O, p, 9, s[29]);
          O = u(O, I, A, C, y, 14, s[30]);
          A = d(A, C = u(C, O, I, A, S, 20, s[31]), O, I, m, 4, s[32]);
          I = d(I, A, C, O, k, 11, s[33]);
          O = d(O, I, A, C, T, 16, s[34]);
          C = d(C, O, I, A, w, 23, s[35]);
          A = d(A, C, O, I, c, 4, s[36]);
          I = d(I, A, C, O, g, 11, s[37]);
          O = d(O, I, A, C, y, 16, s[38]);
          C = d(C, O, I, A, _, 23, s[39]);
          A = d(A, C, O, I, x, 4, s[40]);
          I = d(I, A, C, O, a, 11, s[41]);
          O = d(O, I, A, C, h, 16, s[42]);
          C = d(C, O, I, A, v, 23, s[43]);
          A = d(A, C, O, I, b, 4, s[44]);
          I = d(I, A, C, O, S, 11, s[45]);
          O = d(O, I, A, C, E, 16, s[46]);
          A = f(A, C = d(C, O, I, A, p, 23, s[47]), O, I, a, 6, s[48]);
          I = f(I, A, C, O, y, 10, s[49]);
          O = f(O, I, A, C, w, 15, s[50]);
          C = f(C, O, I, A, m, 21, s[51]);
          A = f(A, C, O, I, S, 6, s[52]);
          I = f(I, A, C, O, h, 10, s[53]);
          O = f(O, I, A, C, _, 15, s[54]);
          C = f(C, O, I, A, c, 21, s[55]);
          A = f(A, C, O, I, k, 6, s[56]);
          I = f(I, A, C, O, E, 10, s[57]);
          O = f(O, I, A, C, v, 15, s[58]);
          C = f(C, O, I, A, x, 21, s[59]);
          A = f(A, C, O, I, g, 6, s[60]);
          I = f(I, A, C, O, T, 10, s[61]);
          O = f(O, I, A, C, p, 15, s[62]);
          C = f(C, O, I, A, b, 21, s[63]);
          i[0] = i[0] + A | 0;
          i[1] = i[1] + C | 0;
          i[2] = i[2] + O | 0;
          i[3] = i[3] + I | 0;
        },
        _doFinalize: function () {
          var t = this._data;
          var n = t.words;
          var r = this._nDataBytes * 8;
          var o = t.sigBytes * 8;
          n[o >>> 5] |= 128 << 24 - o % 32;
          var i = e.floor(r / 4294967296);
          var a = r;
          n[15 + (o + 64 >>> 9 << 4)] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
          n[14 + (o + 64 >>> 9 << 4)] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
          t.sigBytes = (n.length + 1) * 4;
          this._process();
          var s = this._hash;
          var c = s.words;
          for (var l = 0; l < 4; l++) {
            var u = c[l];
            c[l] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & -16711936;
          }
          return s;
        },
        clone: function () {
          var e = i.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        }
      });
      function l(e, t, n, r, o, i, a) {
        var s = e + (t & n | ~t & r) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function u(e, t, n, r, o, i, a) {
        var s = e + (t & r | n & ~r) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function d(e, t, n, r, o, i, a) {
        var s = e + (t ^ n ^ r) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function f(e, t, n, r, o, i, a) {
        var s = e + (n ^ (t | ~r)) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c);
      t.HmacMD5 = i._createHmacHelper(c);
    })(Math);
    e.exports = r.MD5;
  },
  24: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return M;
    });
    n.d(t, "b", function () {
      return H;
    });
    var r = n(0);
    var o = n(1);
    var i = n(37);
    function a(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (e) {
            if (typeof e == "string") {
              return s(e, t);
            }
            var n = {}.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
              n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
              return Array.from(e);
            } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
              return s(e, t);
            } else {
              return undefined;
            }
          }
        }(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i;
      var a = true;
      var c = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          c = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
      };
    }
    function s(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    var c = Symbol("WALK_STOP");
    var l = new Set(["AbortController", "AbortSignal", "Array", "ArrayBuffer", "AsyncContext", "Atomics", "AudioContext", "BigInt", "BigInt64Array", "BigUint64Array", "Blob", "Boolean", "BroadcastChannel", "Buffer", "CanvasRenderingContext2D", "clearImmediate", "clearInterval", "clearTimeout", "confirm", "console", "Crypto", "CustomEvent", "DataView", "Date", "decodeURI", "decodeURIComponent", "document", "Element", "encodeURI", "encodeURIComponent", "Error", "escape", "eval", "Event", "EventTarget", "fetch", "File", "FileReader", "Float32Array", "Float64Array", "FormData", "function", "global", "globalThis", "hasOwnProperty", "Headers", "History", "HTMLElement", "HTMLCollection", "IDBKeyRange", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "IntersectionObserver", "isFinite", "isNaN", "isPrototypeOf", "JSON", "location", "log", "Map", "Math", "MediaRecorder", "MediaSource", "MediaStream", "MemberExpression", "MutationObserver", "NaN", "navigator", "Node", "NodeList", "Number", "Object", "OfflineAudioContext", "parse", "parseFloat", "parseInt", "Performance", "process", "Promise", "prompt", "prototype", "Proxy", "ReadableStream", "Reflect", "RegExp", "requestAnimationFrame", "requestIdleCallback", "Request", "Response", "ResizeObserver", "Screen", "setImmediate", "setInterval", "setTimeout", "SharedArrayBuffer", "SharedWorker", "SourceBuffer", "split", "String", "stringify", "structuredClone", "SubtleCrypto", "Symbol", "TextDecoder", "TextEncoder", "this", "toString", "TransformStream", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URL", "URLSearchParams", "valueOf", "WeakMap", "WeakSet", "WebAssembly", "WebGLRenderingContext", "window", "Worker", "WritableStream", "XMLHttpRequest", "alert", "arguments", "atob", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "queueMicrotask"]);
    function u(e, t) {
      if (e && typeof e == "object") {
        for (var o = [{
            node: e,
            parent: null,
            exit: false
          }], i = [], a = typeof t == "function" ? t : t.enter ?? null, s = typeof t == "function" ? null : t.leave ?? null, l = false; !l && o.length > 0;) {
          var u = o.pop();
          var d = u.node;
          var f = u.parent;
          if (u.exit) {
            i.pop();
            if (s && s(d, f, i) === c) {
              l = true;
            }
          } else if (d && typeof d.type == "string") {
            var p = a ? a(d, f, i) : undefined;
            if (p !== c) {
              if (p !== true) {
                o.push({
                  node: d,
                  parent: f,
                  exit: true
                });
                i.push(d);
                for (var h in d) {
                  if (h !== "loc" && h !== "range" && h !== "start" && h !== "end" && Object.prototype.hasOwnProperty.call(d, h)) {
                    var g = d[h];
                    if (g) {
                      if (Array.isArray(g)) {
                        for (var m = g.length - 1; m >= 0; m--) {
                          var v = g[m];
                          if (v && typeof v.type == "string") {
                            o.push({
                              node: v,
                              parent: d,
                              exit: false
                            });
                          }
                        }
                      } else if (typeof g == "object" && typeof g.type == "string") {
                        o.push({
                          node: g,
                          parent: d,
                          exit: false
                        });
                      }
                    }
                  }
                }
              }
            } else {
              l = true;
            }
          }
        }
      }
    }
    function d(e, t) {
      var n = function (e) {
        if (e) {
          if (Array.isArray(e.range)) {
            return e.range;
          } else if (typeof e.start == "number" && typeof e.end == "number") {
            return [e.start, e.end];
          } else {
            return null;
          }
        } else {
          return null;
        }
      }(e);
      if (n) {
        return t.slice(n[0], n[1]);
      } else {
        return null;
      }
    }
    function f(e, t) {
      if (e.type !== "MemberExpression") {
        return null;
      }
      var n = [];
      for (var r = e; r && r.type === "MemberExpression";) {
        var o = r;
        var i = o.property;
        if (!i) {
          return null;
        }
        if (o.computed) {
          var a = d(i, t);
          if (!a) {
            return null;
          }
          n.unshift(`[${a.trim()}]`);
        } else {
          if (i.type !== "Identifier") {
            return null;
          }
          n.unshift("." + i.name);
        }
        r = o.object;
      }
      var s = null;
      if ((r == null ? undefined : r.type) === "Identifier") {
        s = r.name;
      } else if ((r == null ? undefined : r.type) === "ThisExpression") {
        s = "this";
      }
      if (s) {
        return s + n.join("");
      } else {
        return null;
      }
    }
    function p(e, t) {
      for (var n = e.object; n && n.type === "MemberExpression";) {
        var r = f(n, t);
        if (r) {
          return r;
        }
        n = n.object;
      }
      if ((n == null ? undefined : n.type) === "Identifier") {
        return n.name;
      } else if ((n == null ? undefined : n.type) === "ThisExpression") {
        return "this";
      } else {
        return null;
      }
    }
    function h(e, t, n) {
      if (n.type === "CallExpression" && n.callee.type === "Identifier" && e.declaredVariables.has(n.callee.name)) {
        return g(t, n.callee.name, m(e, n.arguments));
      }
      if (n.type === "VariableDeclarator" && n.init?.type === "FunctionExpression" && n.id.type === "Identifier") {
        return g(t, n.id.name, m(e, n.init.params));
      }
      if (n.type === "NewExpression" && n.callee.type === "MemberExpression" && n.callee.object.type === "Identifier") {
        var o = f(n.callee, e.getSource());
        if (!o) {
          return;
        }
        return g(t, o, m(e, n.arguments), true);
      }
    }
    function g(e, t, n, r = false) {
      return [`  function ${e}(${n.join(", ")}) {`, `    return ${r ? "new " : ""}${t}(${n.join(", ")});`, "  }"].join("\n");
    }
    function m(e, t) {
      var n;
      var r = [];
      var o = a(t);
      try {
        for (o.s(); !(n = o.n()).done;) {
          var i = n.value;
          if (i.type === "Identifier" && e.declaredVariables.has(i.name)) {
            r.push(i.name);
          } else if (i.type !== "Literal" || typeof i.value != "string" && typeof i.value != "number") {
            if (i.type === "UnaryExpression") {
              var s = d(i, e.getSource());
              if (s) {
                r.push(s.trim());
              }
            } else if (i.type === "AssignmentPattern" && i.left.type === "Identifier") {
              r.push(i.left.name);
            } else if (i.type === "Identifier") {
              r.push(i.name);
            } else if (!r.includes("input")) {
              r.push("input");
            }
          } else {
            r.push(JSON.stringify(i.value));
          }
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      return r;
    }
    function v(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (e) {
            if (typeof e == "string") {
              return y(e, t);
            }
            var n = {}.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
              n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
              return Array.from(e);
            } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
              return y(e, t);
            } else {
              return undefined;
            }
          }
        }(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function y(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    class k {
      constructor(e, t = {}) {
        this.dependentsTracker = new Map();
        this.pendingPrototypeAliasBinding = null;
        this.iifeParamName = null;
        this.declaredVariables = new Map();
        this.source = e;
        var n = t.extractions ? Array.isArray(t.extractions) ? t.extractions : [t.extractions] : [];
        this.extractionStates = n.map(e => ({
          config: Object.assign({
            collectDependencies: true,
            stopWhenReady: true
          }, e),
          dependencies: new Set(),
          dependents: new Set(),
          ready: false
        }));
        this.hasExtractions = this.extractionStates.length > 0;
        this.programAst = Object(i.parseScript)(e, {
          ranges: true,
          loc: false,
          module: false
        });
        this.analyzeAst();
      }
      analyzeAst() {
        var n;
        var r;
        var o;
        var i = v(this.programAst.body);
        try {
          for (i.s(); !(o = i.n()).done;) {
            var a = o.value;
            if (a.type === "ExpressionStatement" && a.expression.type === "CallExpression") {
              var s = a.expression;
              if (s.callee.type === "FunctionExpression") {
                var c = s.callee;
                var l = c.params.length > 0 ? c.params[0] : null;
                if (!this.iifeParamName && (l == null ? undefined : l.type) === "Identifier") {
                  this.iifeParamName = l.name;
                }
                if (c.body?.type === "BlockStatement") {
                  r = c.body;
                  break;
                }
              }
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        if (r) {
          var u;
          var d = v(r.body);
          try {
            for (d.s(); !(u = d.n()).done;) {
              var h = u.value;
              switch (h.type) {
                case "ExpressionStatement":
                  var g = h.expression;
                  if (g.type !== "AssignmentExpression") {
                    continue;
                  }
                  var m = g.left;
                  var y = g.right;
                  if (y.type === "MemberExpression" && !y.computed && y.property.type === "Identifier" && y.property.name === "prototype") {
                    var k = f(y, this.source);
                    var b = m.type === "Identifier" ? m.name : f(m, this.source);
                    if (k) {
                      var _ = this.declaredVariables.get(k.replace(".prototype", ""));
                      if (b && _) {
                        var T = new Set();
                        var S = b + ".";
                        this.pendingPrototypeAliasBinding = [S, _];
                        _.prototypeAliases.set(S, T);
                      }
                    }
                  }
                  if (m.type === "Identifier") {
                    var x = this.declaredVariables.get(m.name);
                    if (!x) {
                      continue;
                    }
                    x.node.init = y;
                    if (this.needsDependencyAnalysis(y)) {
                      x.dependencies = this.findDependencies(g.right, m.name);
                    }
                    if (this.onMatch(x.node, x)) {
                      return;
                    }
                  } else if (g.left.type === "MemberExpression") {
                    var w = f(g.left, this.source);
                    var E = this.pendingPrototypeAliasBinding?.[0];
                    if (E && ((w == null ? undefined : w.includes(E)) || w === E.slice(0, -1))) {
                      var A = this.declaredVariables.get(((n = this.pendingPrototypeAliasBinding) === null || n === undefined ? undefined : n[1].name) || "");
                      if (A) {
                        var C = A.prototypeAliases.get(E);
                        var O = {
                          name: w,
                          node: h,
                          dependents: this.dependentsTracker.get(w) || new Set(),
                          predeclared: false,
                          prototypeAliases: new Map(),
                          dependencies: this.findDependencies(y, w)
                        };
                        if (C) {
                          C.add(O);
                        } else {
                          A.prototypeAliases.set(E, new Set([O]));
                        }
                      }
                    } else {
                      this.pendingPrototypeAliasBinding = null;
                    }
                    if (!w || this.declaredVariables.has(w)) {
                      continue;
                    }
                    var I = {
                      name: w,
                      node: h,
                      dependents: this.dependentsTracker.get(w) || new Set(),
                      predeclared: false,
                      prototypeAliases: new Map(),
                      dependencies: this.findDependencies(y, w)
                    };
                    var N = p(g.left, this.source);
                    if (N && N !== w && !N.startsWith("this.")) {
                      I.dependencies.add(N.replace(".prototype", ""));
                    }
                    if (this.dependentsTracker.has(w)) {
                      this.dependentsTracker.delete(w);
                    }
                    this.declaredVariables.set(w, I);
                    if (this.onMatch(h, I)) {
                      return;
                    }
                  }
                  break;
                case "VariableDeclaration":
                  this.pendingPrototypeAliasBinding = null;
                  var D;
                  var R = v(h.declarations);
                  try {
                    for (R.s(); !(D = R.n()).done;) {
                      var L = D.value;
                      if (L.id.type === "Identifier") {
                        var P = {
                          name: L.id.name,
                          node: L,
                          dependents: this.dependentsTracker.get(L.id.name) || new Set(),
                          prototypeAliases: new Map(),
                          dependencies: new Set(),
                          predeclared: false
                        };
                        var B = L.init;
                        if (B || h.kind !== "var") {
                          if (B && this.needsDependencyAnalysis(B)) {
                            P.dependencies = this.findDependencies(B, P.name);
                          }
                        } else {
                          P.predeclared = true;
                        }
                        if (this.dependentsTracker.has(P.name)) {
                          this.dependentsTracker.delete(P.name);
                        }
                        this.declaredVariables.set(P.name, P);
                        if (this.onMatch(L, P)) {
                          return;
                        }
                      }
                    }
                  } catch (e) {
                    R.e(e);
                  } finally {
                    R.f();
                  }
              }
            }
          } catch (e) {
            d.e(e);
          } finally {
            d.f();
          }
        }
      }
      needsDependencyAnalysis(e) {
        if (!e) {
          return false;
        }
        switch (e.type) {
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ArrayExpression":
          case "LogicalExpression":
          case "CallExpression":
          case "NewExpression":
          case "MemberExpression":
          case "BinaryExpression":
          case "ConditionalExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ClassExpression":
          case "Identifier":
            return true;
          default:
            return false;
        }
      }
      onMatch(e, t) {
        if (!this.hasExtractions) {
          return false;
        }
        var n;
        var r = false;
        var o = false;
        var i = v(this.extractionStates);
        try {
          for (i.s(); !(n = i.n()).done;) {
            var a = n.value;
            if (a.node) {
              if (a.node !== e && (this.refreshExtractionState(a), this.shouldStopTraversal())) {
                return true;
              }
            } else {
              if (e.type === "VariableDeclarator" && !e.init) {
                continue;
              }
              if (!(o = a.config.match(e))) {
                continue;
              }
              a.node = e;
              r = true;
              if (t) {
                a.metadata = t;
                a.dependents = t.dependents;
                a.dependencies = t.dependencies;
                if (typeof o != "boolean") {
                  a.matchContext = o;
                }
              }
              this.refreshExtractionState(a);
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return !!r && this.shouldStopTraversal();
      }
      refreshExtractionState(e) {
        if (e.node) {
          if (e.config.collectDependencies !== false) {
            if (e.metadata) {
              e.ready = this.areDependenciesResolved(e.dependencies);
            } else {
              e.ready = false;
            }
          } else {
            e.ready = true;
          }
        } else {
          e.ready = false;
        }
      }
      shouldStopTraversal() {
        if (!this.hasExtractions) {
          return false;
        }
        var e;
        var t = false;
        var n = v(this.extractionStates);
        try {
          for (n.s(); !(e = n.n()).done;) {
            var r = e.value;
            if (r.config.stopWhenReady !== false) {
              t = true;
              if (!r.node) {
                return false;
              }
              if (!r.ready) {
                return false;
              }
            }
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return t;
      }
      areDependenciesResolved(e, t = new Set()) {
        if (!e || e.size === 0) {
          return true;
        }
        var n;
        var r = v(e);
        try {
          for (r.s(); !(n = r.n()).done;) {
            var o = n.value;
            if (o && !l.has(o) && o !== this.iifeParamName && !t.has(o)) {
              var i = this.declaredVariables.get(o);
              if (!i) {
                return false;
              }
              t.add(o);
              if (!this.areDependenciesResolved(i.dependencies, t)) {
                return false;
              }
            }
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        return true;
      }
      findDependencies(e, t) {
        var r = new Set();
        if (!e) {
          return r;
        }
        var o = [{
          names: new Set(),
          type: "block"
        }];
        var i = () => o[o.length - 1];
        var a = e => {
          for (var t = o.length - 1; t >= 0; t--) {
            if (o[t].names.has(e)) {
              return true;
            }
          }
          return false;
        };
        var s = "id" in e && (e == null ? undefined : e.id)?.type === "Identifier" ? e.id.name : undefined;
        var c = (e, t) => {
          if (e) {
            switch (e.type) {
              case "Identifier":
                t.add(e.name);
                break;
              case "ObjectPattern":
                var n;
                var r = v(e.properties);
                try {
                  for (r.s(); !(n = r.n()).done;) {
                    var o = n.value;
                    if (o.type === "RestElement") {
                      c(o.argument, t);
                    } else if (o.type === "Property") {
                      c(o.value, t);
                    }
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                break;
              case "ArrayPattern":
                var i;
                var a = v(e.elements);
                try {
                  for (a.s(); !(i = a.n()).done;) {
                    var s = i.value;
                    if (s) {
                      c(s, t);
                    }
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                break;
              case "RestElement":
                c(e.argument, t);
                break;
              case "AssignmentPattern":
                c(e.left, t);
            }
          }
        };
        u(e, {
          enter: (e, n) => {
            var d;
            switch (e.type) {
              case "FunctionDeclaration":
              case "FunctionExpression":
              case "ArrowFunctionExpression":
                var g = e.type === "FunctionDeclaration";
                var m = "id" in e ? e.id?.name : undefined;
                if (g && m) {
                  i().names.add(m);
                }
                var y = {
                  names: new Set(),
                  type: "function"
                };
                if (e.type === "FunctionExpression" && m) {
                  y.names.add(m);
                }
                ((e, t) => {
                  if (e == null ? undefined : e.params) {
                    var n;
                    var r = v(e.params);
                    try {
                      for (r.s(); !(n = r.n()).done;) {
                        var o = n.value;
                        c(o, t);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  }
                })(e, y.names);
                o.push(y);
                break;
              case "BlockStatement":
                o.push({
                  names: new Set(),
                  type: "block"
                });
                break;
              case "CatchClause":
                var k = new Set();
                if (e.param) {
                  c(e.param, k);
                }
                o.push({
                  names: k,
                  type: "block"
                });
                break;
              case "VariableDeclaration":
                var b;
                var _ = e.kind === "var" && (d = function (e, t) {
                  for (var n = e.length - 1; n >= 0; n--) {
                    var r = e[n];
                    if (t(r, n, e)) {
                      return r;
                    }
                  }
                }(o, e => e.type === "function")) !== null && d !== undefined ? d : i();
                var T = v(e.declarations);
                try {
                  for (T.s(); !(b = T.n()).done;) {
                    var S = b.value;
                    c(S.id, _.names);
                  }
                } catch (e) {
                  T.e(e);
                } finally {
                  T.f();
                }
                break;
              case "ClassDeclaration":
                if (e.id?.name) {
                  i().names.add(e.id.name);
                }
                break;
              case "LabeledStatement":
                if (e.label?.type === "Identifier") {
                  i().names.add(e.label.name);
                }
                break;
              case "Identifier":
                if (e.name === s) {
                  return;
                }
                if ((n == null ? undefined : n.type) === "Property" && n.key === e && !n.computed) {
                  return;
                }
                if ((n == null ? undefined : n.type) === "MethodDefinition" && n.key === e && !n.computed) {
                  return;
                }
                if ((n == null ? undefined : n.type) === "MemberExpression" && n.property === e && !n.computed) {
                  if (n.object.type === "ThisExpression") {
                    return;
                  }
                  var x = f(n, this.source);
                  if (!x) {
                    return;
                  }
                  var w = this.declaredVariables.get(x);
                  if (w) {
                    w.dependents.add(t);
                    r.add(x);
                  } else if (n.object.type === "Identifier") {
                    var E = n.object.name;
                    var A = this.declaredVariables.get(E);
                    if ((A || E === this.iifeParamName) && !a(E) && !l.has(E)) {
                      if (A != null) {
                        A.dependents.add(t);
                      }
                      r.add(x);
                      var C = this.dependentsTracker.get(x);
                      if (C) {
                        C.add(t);
                      } else {
                        this.dependentsTracker.set(x, new Set([t]));
                      }
                    }
                  }
                  return;
                }
                if ((n == null ? undefined : n.type) === "MetaProperty") {
                  return;
                }
                if (a(e.name) || l.has(e.name)) {
                  return;
                }
                r.add(e.name);
                var O = this.declaredVariables.get(e.name);
                if (O) {
                  O.dependents.add(t);
                } else {
                  var I = this.dependentsTracker.get(e.name);
                  if (I) {
                    I.add(t);
                  } else {
                    this.dependentsTracker.set(e.name, new Set([t]));
                  }
                }
                break;
              case "ForStatement":
              case "ForInStatement":
              case "ForOfStatement":
                o.push({
                  names: new Set(),
                  type: "block"
                });
            }
          },
          leave: e => {
            switch (e.type) {
              case "FunctionDeclaration":
              case "FunctionExpression":
              case "ArrowFunctionExpression":
              case "BlockStatement":
              case "CatchClause":
              case "ForStatement":
              case "ForInStatement":
              case "ForOfStatement":
                if (o.length > 1) {
                  o.pop();
                }
            }
          }
        });
        return r;
      }
      getExtractedMatches() {
        return this.extractionStates.filter(e => !!e.node);
      }
      getSource() {
        return this.source;
      }
    }
    function b(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var o;
          var i;
          var a;
          var s = [];
          var c = true;
          var l = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              c = false;
            } else {
              for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
            }
          } catch (e) {
            l = true;
            o = e;
          } finally {
            try {
              if (!c && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (l) {
                throw o;
              }
            }
          }
          return s;
        }
      }(e, t) || T(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = T(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function T(e, t) {
      if (e) {
        if (typeof e == "string") {
          return S(e, t);
        }
        var n = {}.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return S(e, t);
        } else {
          return undefined;
        }
      }
    }
    function S(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    class x {
      constructor(e) {
        this.analyzer = e;
      }
      areSafeArgs(e, t = "strict") {
        return (e ?? []).every(e => !!e && e.type !== "SpreadElement" && this.isSafeInitializer(e, t));
      }
      isSafeInitializer(e) {
        var t;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "strict";
        if (!e) {
          return true;
        }
        switch (e.type) {
          case "ClassExpression":
            return true;
          case "Literal":
            var r = e;
            return typeof r.value == "string" || typeof r.value == "number" || typeof r.value == "boolean" || r.value === null || Boolean(r.regex);
          case "TemplateLiteral":
            return e.expressions.every(e => this.isSafeInitializer(e, n));
          case "ArrayExpression":
            return e.elements.every(e => !e || e.type !== "SpreadElement" && this.isSafeInitializer(e, n));
          case "ObjectExpression":
            return e.properties.every(e => {
              if (e.type !== "Property") {
                return false;
              }
              if (e.computed) {
                return false;
              }
              if (e.kind !== "init") {
                return false;
              }
              var t = e.value;
              return !!t && (t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression" || t.type === "Literal");
            });
          case "CallExpression":
            if (e.callee.type === "Identifier" && l.has(e.callee.name)) {
              return this.areSafeArgs(e.arguments, n);
            }
            if (e.callee.type === "MemberExpression") {
              if (!this.isSafeInitializer(e.callee.object, n)) {
                return false;
              }
              if (n === "strict") {
                var o = e.callee.property.type === "Identifier" ? e.callee.property.name : "";
                if (e.callee.computed || !l.has(o)) {
                  return false;
                }
              }
              return this.areSafeArgs(e.arguments, n);
            }
            return false;
          case "NewExpression":
            if (e.callee.type === "Identifier") {
              if (l.has(e.callee.name)) {
                return this.areSafeArgs(e.arguments, n);
              }
              if (n === "loose") {
                return this.areSafeArgs(e.arguments, n);
              }
            }
            return false;
          case "UnaryExpression":
            return this.isSafeInitializer(e.argument, n);
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "Identifier":
            return true;
          case "MemberExpression":
            if (n === "loose") {
              return (!e.computed || !!this.isSafeInitializer(e.property, n)) && this.isSafeInitializer(e.object, n);
            } else {
              return !e.computed && e.property.type === "Identifier" && e.property.name === "prototype";
            }
          case "LogicalExpression":
          case "BinaryExpression":
            return this.isSafeInitializer(e.left, n) && this.isSafeInitializer(e.right, n);
          case "ConditionalExpression":
            return n === "loose" && this.isSafeInitializer(e.test, n) && this.isSafeInitializer(e.consequent, n) && this.isSafeInitializer(e.alternate, n);
          case "SequenceExpression":
            return n === "loose" && e.expressions.every(e => this.isSafeInitializer(e, n));
          case "AssignmentExpression":
            if (e.left.type !== "MemberExpression" || e.left.computed) {
              if (e.left.type === "Identifier" && this.analyzer.declaredVariables.has(e.left.name)) {
                return this.isSafeInitializer(e.right, n);
              }
            } else {
              var i = e.left.object;
              if (i.type === "Identifier" && ((t = this.analyzer.declaredVariables.get(i.name)) === null || t === undefined ? undefined : t.node.init) !== undefined) {
                return this.isSafeInitializer(e.right, n);
              }
            }
            return false;
          default:
            return false;
        }
      }
      getInitializerFallback(e) {
        switch (e == null ? undefined : e.type) {
          case "ObjectExpression":
          case "NewExpression":
          case "MemberExpression":
          case "LogicalExpression":
            return "{}";
          case "ArrayExpression":
            return "[]";
          default:
            return "undefined";
        }
      }
      renderNode(e, t) {
        var n;
        var r;
        var o;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var a = this.analyzer.getSource();
        var s = this.analyzer.declaredVariables;
        var c = i.disallowSideEffectInitializers;
        var l = typeof c == "object" && c !== null && (n = c.mode) !== null && n !== undefined ? n : "strict";
        var u = Boolean(c);
        var p = e.type === "AssignmentExpression" ? e : e.type === "ExpressionStatement" && e.expression.type === "AssignmentExpression" ? e.expression : null;
        var h = p && p.operator === "=" ? p.right : e.type === "VariableDeclarator" ? e.init : null;
        var g = u && h && !this.isSafeInitializer(h, l);
        var m = this.getInitializerFallback(h);
        var v = m;
        if (!g && h) {
          if (t || h.type !== "Identifier" || s.has(h.name)) {
            var y = p == null ? undefined : p.left;
            if (((h == null ? undefined : h.type) !== "MemberExpression" || !!h.computed || h.property.type !== "Identifier" || h.property.name !== "prototype") && (y == null ? undefined : y.type) === "MemberExpression" && h && u && y.object.type === "Identifier" && h.type !== "FunctionExpression" && h.type !== "ArrowFunctionExpression" && h.type !== "LogicalExpression" && h.type !== "ClassExpression") {
              return `  // Skipped ${f(y, a)} assignment.`;
            }
            v = ((r = d(h, a)) === null || r === undefined ? undefined : r.trim().replace(/;\s*$/, "")) || "undefined // [JsExtractor] Failed to extract initializer source.";
          } else {
            v = m;
          }
        }
        if (!g && !!h && h.type === "SequenceExpression" && !v.startsWith("(")) {
          v = `(${v})`;
        }
        var k = `${e.type === "VariableDeclarator" && e.id.type === "Identifier" ? e.id.name : p && p.left.type === "Identifier" ? p.left.name : (p == null ? undefined : p.type) === "AssignmentExpression" ? (o = f(p.left, a)) === null || o === undefined ? undefined : o.trim() : "unknown"} = ${v};`;
        if (e.type === "VariableDeclarator" && e.init && !t) {
          return "  var " + k;
        } else {
          return "  " + k;
        }
      }
      buildScript(e) {
        var r = this;
        var o = e.maxDepth;
        var i = o === undefined ? Infinity : o;
        var a = e.forceVarPredeclaration;
        var s = a !== undefined && a;
        var c = e.exportRawValues;
        var l = c !== undefined && c;
        var u = e.rawValueOnly;
        var p = u === undefined ? [] : u;
        var g = this.analyzer.getExtractedMatches();
        var m = new Set(g.map(e => {
          return e.metadata?.name || "";
        }));
        var v = [];
        var y = new Set();
        var k = new Map();
        var T = {};
        function S(e) {
          if (e && !e.includes(".")) {
            y.add(e);
          }
        }
        var x;
        function w(t, n = 0, o) {
          if (t && !(n > i)) {
            var a;
            var c = _(t.dependencies);
            try {
              for (c.s(); !(a = c.n()).done;) {
                var l = a.value;
                if (o && o !== l) {
                  if (!m.has(o)) {
                    continue;
                  }
                  o = undefined;
                }
                if (!m.has(l)) {
                  m.add(l);
                  var u = r.analyzer.declaredVariables.get(l);
                  if (u) {
                    var d = s || u.predeclared;
                    if (d) {
                      S(l);
                    }
                    w(u, n + 1, o);
                    v.push(r.renderNode(u.node, d, e));
                    if (u.prototypeAliases.size > 0) {
                      var f;
                      var p = _(u.prototypeAliases);
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          var h;
                          var g = b(f.value, 2);
                          var y = g[1];
                          var k = _(y);
                          try {
                            for (k.s(); !(h = k.n()).done;) {
                              var T = h.value;
                              w(T, n);
                              v.push(r.renderNode(T.node, d, e));
                            }
                          } catch (e) {
                            k.e(e);
                          } finally {
                            k.f();
                          }
                        }
                      } catch (e) {
                        p.e(e);
                      } finally {
                        p.f();
                      }
                    }
                  }
                }
              }
            } catch (e) {
              c.e(e);
            } finally {
              c.f();
            }
          }
        }
        var E = _(g);
        try {
          for (E.s(); !(x = E.n()).done;) {
            var A = x.value;
            var C = A.config.friendlyName;
            var O = C && p.includes(C);
            if (A.metadata) {
              if (!O) {
                v.push(`  //#region --- start [${C || "Unknown"}] ---`);
              }
              var I = (s || A.metadata.predeclared) && !O;
              var N = A.config.onlyProcessMatchContext;
              if (I) {
                S(A.metadata.name);
              }
              if (A.config.collectDependencies && !O) {
                var D = undefined;
                var R = A.matchContext;
                if ((R == null ? undefined : R.type) === "NewExpression" && N) {
                  if (R.callee.type === "Identifier") {
                    D = R.callee.name;
                  } else if (R.callee.type === "MemberExpression") {
                    D = f(R.callee, this.analyzer.getSource()) || undefined;
                  }
                }
                w(A.metadata, undefined, D);
              }
              if (A.matchContext && C && (k.set(C, A.matchContext), l)) {
                var L = A.matchContext;
                var P = this.analyzer.getSource();
                var B = null;
                B = L.type === "Property" ? d(L.value, P) : L.type === "Identifier" ? L.name : d(L, P);
                T[C] = B;
              }
              if (!O) {
                if (!N) {
                  v.push(this.renderNode(A.metadata.node, I, e));
                }
                v.push(`  //#endregion --- end [${C || "Unknown"}] ---\n`);
              }
            }
          }
        } catch (e) {
          E.e(e);
        } finally {
          E.f();
        }
        var U = [];
        U.push("const __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis :");
        U.push("  typeof self !== 'undefined' ? self :");
        U.push("  typeof window !== 'undefined' ? window :");
        U.push("  typeof global !== 'undefined' ? global : {};\n");
        U.push(`const exportedVars = (function(${this.analyzer.iifeParamName}) {`);
        U.push("  const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);");
        U.push("  const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};");
        U.push("  const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n");
        if (y.size > 0) {
          U.push(`  var ${Array.from(y).join(", ")};\n`);
        }
        U.push(v.join("\n"));
        var M;
        var V = [];
        var H = _(k);
        try {
          for (H.s(); !(M = H.n()).done;) {
            var j = b(M.value, 2);
            var F = j[0];
            var z = j[1];
            var G = null;
            if (z.type === "Identifier") {
              var W = this.analyzer.declaredVariables.get(z.name);
              if ((W == null ? undefined : W.node)?.type === "VariableDeclarator" && W.node.init?.type === "FunctionExpression") {
                G = W.node;
              }
            } else if (z.type === "CallExpression" || z.type === "NewExpression" || z.type === "VariableDeclarator") {
              G = z;
            }
            if (G) {
              var q = h(this.analyzer, F, G);
              if (q) {
                U.push(q + "\n");
                V.push(F);
              }
            }
          }
        } catch (e) {
          H.e(e);
        } finally {
          H.f();
        }
        if (l) {
          var Y = JSON.stringify(T, null, "  ".length).split("\n");
          var K = `${Y[0]}\n${Y.slice(1).map(e => "  " + e).join("\n")}`;
          U.push(`  const rawValues = ${K};\n`);
          V.push("rawValues");
        }
        U.push(`  return { ${V.join(", ")} };`);
        U.push("})({});\n");
        return {
          output: U.join("\n"),
          exported: V,
          exportedRawValues: l ? T : undefined
        };
      }
    }
    function w(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = A(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function E(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var o;
          var i;
          var a;
          var s = [];
          var c = true;
          var l = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              c = false;
            } else {
              for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
            }
          } catch (e) {
            l = true;
            o = e;
          } finally {
            try {
              if (!c && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (l) {
                throw o;
              }
            }
          }
          return s;
        }
      }(e, t) || A(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function A(e, t) {
      if (e) {
        if (typeof e == "string") {
          return C(e, t);
        }
        var n = {}.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return C(e, t);
        } else {
          return undefined;
        }
      }
    }
    function C(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    function O(e) {
      if (e.type !== "VariableDeclarator") {
        return false;
      }
      var t = e.init;
      if (!t || t.type !== "FunctionExpression") {
        return false;
      }
      if (t.params.length < 3) {
        return false;
      }
      var n = E(t.params, 3);
      var r = n[0];
      var o = n[1];
      var i = n[2];
      if (r.type !== "Identifier" || o.type !== "AssignmentPattern" || i.type !== "AssignmentPattern") {
        return false;
      }
      var a;
      var s = t.body;
      var c = false;
      var l = false;
      var u = w((s == null ? undefined : s.body) || []);
      try {
        for (u.s(); !(a = u.n()).done;) {
          var d = a.value;
          if (d.type === "ExpressionStatement") {
            var f = d.expression;
            if (f.type === "AssignmentExpression" && f.operator === "=" && f.left.type === "Identifier" && f.left.name === r.name) {
              var p = f.right;
              if (p.type === "NewExpression" && p.callee.type === "MemberExpression") {
                c = true;
              }
            }
            if (f.type === "CallExpression" && f.callee.type === "MemberExpression") {
              var h = f.arguments;
              if (h.length === 2 && h[0].type === "Literal" && h[0].value === "alr" && h[1].type === "Literal" && h[1].value === "yes") {
                l = true;
              }
            }
          }
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
      return !!c && !!l && e;
    }
    function I(e) {
      if (e.type !== "VariableDeclarator" || e.init?.type !== "FunctionExpression") {
        return false;
      }
      var n = e.init.body;
      if (!n) {
        return false;
      }
      var r = null;
      u(n, e => {
        if (e.type === "ObjectExpression") {
          var t;
          var n = w(e.properties);
          try {
            for (n.s(); !(t = n.n()).done;) {
              var o = t.value;
              if (o.type === "Property" && o.key.type === "Identifier" && o.key.name === "signatureTimestamp") {
                r = o;
                return c;
              }
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
      });
      return r || false;
    }
    function N(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var o;
          var i;
          var a;
          var s = [];
          var c = true;
          var l = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              c = false;
            } else {
              for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
            }
          } catch (e) {
            l = true;
            o = e;
          } finally {
            try {
              if (!c && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (l) {
                throw o;
              }
            }
          }
          return s;
        }
      }(e, t) || R(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function D(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = R(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function R(e, t) {
      if (e) {
        if (typeof e == "string") {
          return L(e, t);
        }
        var n = {}.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return L(e, t);
        } else {
          return undefined;
        }
      }
    }
    function L(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    function P() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var n = typeof Symbol == "function" ? Symbol : {};
      var r = n.iterator || "@@iterator";
      var o = n.toStringTag || "@@toStringTag";
      function i(n, r, o, i) {
        var c = r && r.prototype instanceof s ? r : s;
        var l = Object.create(c.prototype);
        B(l, "_invoke", function (n, r, o) {
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
      var u = [][r] ? t(t([][r]())) : (B(t = {}, r, function () {
        return this;
      }), t);
      var d = l.prototype = s.prototype = Object.create(u);
      function f(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, l);
        } else {
          e.__proto__ = l;
          B(e, o, "GeneratorFunction");
        }
        e.prototype = Object.create(d);
        return e;
      }
      c.prototype = l;
      B(d, "constructor", l);
      B(l, "constructor", c);
      c.displayName = "GeneratorFunction";
      B(l, o, "GeneratorFunction");
      B(d);
      B(d, o, "Generator");
      B(d, r, function () {
        return this;
      });
      B(d, "toString", function () {
        return "[object Generator]";
      });
      return (P = function () {
        return {
          w: i,
          m: f
        };
      })();
    }
    function B(e, t, n, r) {
      var o = Object.defineProperty;
      try {
        o({}, "", {});
      } catch (e) {
        o = 0;
      }
      (B = function (e, t, n, r) {
        function i(t, n) {
          B(e, t, function (e) {
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
    function U(e, t, n, r) {
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
    class M {
      static get PLAYER_CONFIG_RX() {
        return /ytInitialPlayerResponse\s*=\s*({.+});(var meta)?/i;
      }
      static get PLAYER_URL_RX() {
        return /(src|href)=['"]([a-z0-9\-_\/\.]*player\/[a-z0-9\-_\/\.]*\/base\.js)['"]/i;
      }
      static get PLAYER_URL_MUSIC_RX() {
        return /"jsUrl":\s*"(.+?\/base.js)"/;
      }
      static get USER_SESSION_ID_RX() {
        return /"USER_SESSION_ID"\s*:\s*"(.+?)"/;
      }
      static get VISITOR_DATA_RX() {
        return /"VISITOR_DATA":\s*"([^"]+)"/i;
      }
      static get INNERTUBE_API_KEY_RX() {
        return /"innertubeApiKey":\s*"([^"]+)"/i;
      }
      static get INNERTUBE_CONTEXT_CLIENT_VERSION_RX() {
        return /"innertubeContextClientVersion":\s*"([^"]+)"/i;
      }
      static get DATASYNC_ID_RX() {
        return /"datasyncId":\s*"([^"]+)"/i;
      }
      static fetchConfigs(e) {
        var s;
        return U(this, undefined, undefined, P().m(function p() {
          var h;
          var g;
          var m;
          var v;
          var y;
          var k;
          var b;
          var _;
          var T;
          var S;
          return P().w(function (p) {
            while (true) {
              switch (p.p = p.n) {
                case 0:
                  if (!(h = `https://${location.hostname}/watch?v=${e}&has_verified=1`).match(/(youtube-nocookie)/i)) {
                    p.n = 2;
                    break;
                  }
                  p.n = 1;
                  return Object(r.sendMessage)({
                    type: o.b.CORS_FETCH,
                    data: {
                      url: `https://www.youtube.com/watch?v=${e}&has_verified=1`,
                      responseType: "text"
                    }
                  });
                case 1:
                  g = p.v.data;
                  p.n = 4;
                  break;
                case 2:
                  p.n = 3;
                  return fetch(h).then(e => e.text()).catch(() => Object(r.send)("GET", h).then(e => e.responseText));
                case 3:
                  g = p.v;
                case 4:
                  this.visitorData = g.match(this.VISITOR_DATA_RX)?.[1];
                  this.apiKey = g.match(this.INNERTUBE_API_KEY_RX)?.[1];
                  this.clientVersion = g.match(this.INNERTUBE_CONTEXT_CLIENT_VERSION_RX)?.[1];
                  this.datasyncId = (s = g.match(this.DATASYNC_ID_RX)?.[1]) === null || s === undefined ? undefined : s.replace(/\|/g, "");
                  if (m = g.match(this.USER_SESSION_ID_RX)) {
                    this.ssId = m[1];
                  }
                  v = g.slice(0, g.indexOf("var meta =") + 1 || undefined).match(this.PLAYER_CONFIG_RX)?.[1] || "";
                  try {
                    if (v) {
                      JSON.parse(v);
                    }
                  } catch (e) {
                    v = v.slice(0, v.indexOf("};<") + 1 || undefined).match(/({.+});?/)?.[1] || "";
                  }
                  p.n = 5;
                  return chrome.storage.local.get(o.w);
                case 5:
                  y = p.v;
                  if (k = y[o.w]?.playerUrl || g.match(this.PLAYER_URL_RX)?.[2] || g.match(this.PLAYER_URL_MUSIC_RX)?.[1]) {
                    this.foundPlayerUrlFromConfig = k;
                  }
                  if (this.playerScript) {
                    p.n = 7;
                    break;
                  }
                  p.n = 6;
                  return fetch(k).then(e => e.text());
                case 6:
                  this.playerScript = p.v;
                case 7:
                  if (!(b = this.parseConfig(v))) {
                    p.n = 8;
                    break;
                  }
                  return p.a(2, b);
                case 8:
                  p.p = 8;
                  _ = new DOMParser();
                  (T = _.parseFromString(g, "text/html")).querySelectorAll("script");
                  S = Array.from(T.querySelectorAll("body script")).map(e => {
                    var t;
                    return ((t = e.innerText) === null || t === undefined ? undefined : t.match(this.PLAYER_CONFIG_RX))?.[1];
                  }).find(e => !!e);
                  return p.a(2, this.parseConfig(S || ""));
                case 9:
                  p.p = 9;
                  p.v;
                  return p.a(2, null);
              }
            }
          }, p, this, [[8, 9]]);
        }));
      }
      static getConfigFromSite() {
        var t = Array.from(document.querySelectorAll("script")).find(e => e.innerText.includes("ytInitialPlayerResponse"))?.innerText || "";
        return this.parseConfig(t);
      }
      static get playerURL() {
        return document.querySelector("link[href*=\"player/\"][href*=\"/base\"], script[src*=\"player/\"][src*=\"/base\"]")?.href || this.foundPlayerUrlFromConfig;
      }
      static get signatureTimestamp() {
        var e = this.playerScript.match(/(signatureTimestamp|sts):(\d+)/);
        if (e == null ? undefined : e[2]) {
          return parseInt(e[2]);
        } else {
          return undefined;
        }
      }
      static parseConfig(e) {
        try {
          return JSON.parse(e);
        } catch (e) {
          Object(r.devLog)(e);
          return null;
        }
      }
      static getNeededMetadataFromConfig(e, t) {
        return U(this, undefined, undefined, P().m(function n() {
          var i;
          var a;
          var s;
          var c;
          var l;
          var u;
          var d;
          var f;
          var p;
          var h;
          var g;
          var m;
          var v;
          return P().w(function (n) {
            while (true) {
              switch (n.p = n.n) {
                case 0:
                  if (e && e.playabilityStatus && e.playabilityStatus.status) {
                    n.n = 1;
                    break;
                  }
                  throw new Error("Invalid playabilityStatus");
                case 1:
                  if (e.playabilityStatus.status !== "LOGIN_REQUIRED") {
                    n.n = 2;
                    break;
                  }
                  throw new Error("LOGIN_REQUIRED");
                case 2:
                  if (e.playabilityStatus.status === "OK") {
                    n.n = 3;
                    break;
                  }
                  throw new Error("API_ERROR");
                case 3:
                  if (e.playabilityStatus.reason !== "This video is unavailable") {
                    n.n = 4;
                    break;
                  }
                  throw new Error("VIDEO_UNAVAILABLE");
                case 4:
                  if (e.videoDetails.shortDescription !== "Video Not Available") {
                    n.n = 5;
                    break;
                  }
                  throw new Error("VIDEO_NOT_AVAILABLE");
                case 5:
                  if (e.streamingData) {
                    n.n = 6;
                    break;
                  }
                  throw new Error("INVALID_STREAMING_DATA");
                case 6:
                  e.streamingData.formats = [...(e.streamingData.adaptiveFormats || []), ...(e.streamingData.formats || [])];
                  if (!((i = e.streamingData.formats.filter(e => e.url)).length / e.streamingData.formats.length > 0.4)) {
                    n.n = 10;
                    break;
                  }
                  n.p = 7;
                  n.n = 8;
                  return H(i);
                case 8:
                  return n.a(2, {
                    formats: e.streamingData.formats,
                    player_response: {
                      captions: e.captions
                    },
                    videoDetails: e.videoDetails
                  });
                case 9:
                  n.p = 9;
                  h = n.v;
                  console.log(h);
                case 10:
                  if (!(e.streamingData.formats.filter(e => !e.url && !e.signatureCipher && !e.cipher).length / e.streamingData.formats.length >= 0.4)) {
                    n.n = 11;
                    break;
                  }
                  throw new Error("MISSING_URL_CIPHER");
                case 11:
                  if (!this.playerURL) {
                    n.n = 28;
                    break;
                  }
                  y = this.playerScript;
                  b = undefined;
                  _ = undefined;
                  b = new k(y, {
                    extractions: [{
                      friendlyName: "nsigFunction",
                      match: O
                    }, {
                      friendlyName: "signatureTimestampVar",
                      match: I,
                      collectDependencies: false
                    }]
                  });
                  if (!(_ = new x(b).buildScript({
                    disallowSideEffectInitializers: true,
                    exportRawValues: true,
                    rawValueOnly: ["signatureTimestampVar"]
                  })).exported.includes("nsigFunction")) {
                    console.warn("Youtube.js", "Failed to extract n/sig decipher function.");
                  }
                  a = _;
                  s = e.videoDetails.videoId;
                  document.body.setAttribute("savior-functions", JSON.stringify(a));
                  document.body.setAttribute("savior-meta-video-id", s);
                  n.p = 12;
                  n.p = 13;
                  document.body.setAttribute("savior-meta-formats-" + s, JSON.stringify(e.streamingData.formats));
                  n.n = 14;
                  return Object(r.sendMessage)({
                    type: o.b.SCRIPTING.INJECT,
                    file: "youtube/youtubejs",
                    videoId: e.videoDetails.videoId
                  });
                case 14:
                  if (!(c = n.v) || !c.length) {
                    l = document.body.getAttribute("savior-decoded-meta-formats");
                    c = JSON.parse(l || "[]");
                  }
                  u = D(c);
                  n.p = 15;
                  u.s();
                case 16:
                  if ((d = u.n()).done) {
                    n.n = 20;
                    break;
                  }
                  f = d.value;
                  n.p = 17;
                  p = new URL(f.url);
                  if (e.cver) {
                    p.searchParams.set("cver", encodeURIComponent(e.cver));
                  }
                  if (t) {
                    p.searchParams.set("pot", t);
                  }
                  f.url = p.href;
                  n.n = 19;
                  break;
                case 18:
                  n.p = 18;
                  g = n.v;
                  console.error(g);
                  return n.a(3, 19);
                case 19:
                  n.n = 16;
                  break;
                case 20:
                  n.n = 22;
                  break;
                case 21:
                  n.p = 21;
                  m = n.v;
                  u.e(m);
                case 22:
                  n.p = 22;
                  u.f();
                  return n.f(22);
                case 23:
                  n.n = 24;
                  return H(c);
                case 24:
                  return n.a(2, {
                    formats: c,
                    player_response: {
                      captions: e.captions
                    },
                    videoDetails: e.videoDetails
                  });
                case 25:
                  n.p = 25;
                  v = n.v;
                  console.error(v);
                case 26:
                  n.p = 26;
                  document.body.removeAttribute("savior-functions");
                  document.body.removeAttribute("savior-meta-video-id");
                  document.body.removeAttribute("savior-meta-formats-" + s);
                  document.body.removeAttribute("savior-decoded-meta-formats");
                  return n.f(26);
                case 27:
                  n.n = 29;
                  break;
                case 28:
                  throw new Error("PLAYER_FILE_NOT_FOUND");
                case 29:
                  return n.a(2);
              }
            }
            var y;
            var b;
            var _;
          }, n, this, [[17, 18], [15, 21, 22, 23], [13, 25], [12,, 26, 27], [7, 9]]);
        }));
      }
      static getMetadataFromVideoID(e, t) {
        return U(this, undefined, undefined, P().m(function n() {
          var r;
          var o;
          return P().w(function (n) {
            while (true) {
              switch (n.p = n.n) {
                case 0:
                  n.n = 1;
                  return this.fetchConfigs(e);
                case 1:
                  if (r = n.v) {
                    n.n = 2;
                    break;
                  }
                  throw new Error("Cannot fetch config");
                case 2:
                  n.p = 2;
                  return n.a(2, this.getNeededMetadataFromConfig(r, t));
                case 3:
                  n.p = 3;
                  o = n.v;
                  console.error(o);
                  throw o;
                case 4:
                  return n.a(2);
              }
            }
          }, n, this, [[2, 3]]);
        }));
      }
    }
    function V(e) {
      return e.height || e.bitrate;
    }
    function H(e) {
      return U(this, undefined, undefined, P().m(function t() {
        var n;
        var o;
        var i;
        var a;
        var s;
        var c;
        var l;
        var u;
        var d;
        return P().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                n = e.filter(e => e.mimeType.includes("video")).reduce((e, t) => V(e) < V(t) ? t : e, e[0]);
                o = e.filter(e => e.mimeType.includes("audio")).reduce((e, t) => V(e) < V(t) ? t : e, e[0]);
                if (n.url && o.url) {
                  t.n = 1;
                  break;
                }
                throw new Error("MISSING_URL_CIPHER");
              case 1:
                i = e => !!e && e >= 200 && e < 300;
                t.n = 2;
                return Promise.all([Object(r.fetchStatus)(n.url), Object(r.fetchStatus)(o.url)]);
              case 2:
                a = t.v;
                s = N(a, 2);
                c = s[0];
                l = s[1];
                if (i(c) && i(l)) {
                  t.n = 5;
                  break;
                }
                t.n = 3;
                return Object(r.sleep)(2000);
              case 3:
                t.n = 4;
                return Promise.all([i(c) ? Promise.resolve(c) : Object(r.fetchStatus)(n.url), i(l) ? Promise.resolve(l) : Object(r.fetchStatus)(o.url)]);
              case 4:
                u = t.v;
                d = N(u, 2);
                c = d[0];
                l = d[1];
              case 5:
                if (i(c) && i(l)) {
                  t.n = 6;
                  break;
                }
                throw new Error("REQUEST_SAMPLE_FAILED");
              case 6:
                return t.a(2);
            }
          }
        }, t);
      }));
    }
    M.playerScript = "";
    M.ssId = "";
    M.visitorData = "";
    M.apiKey = "";
    M.clientVersion = "";
    M.datasyncId = "";
    M.foundPlayerUrlFromConfig = "";
  },
  26: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    c = n(4);
    o = (r = c).lib;
    i = o.Base;
    a = o.WordArray;
    (s = r.x64 = {}).Word = i.extend({
      init: function (e, t) {
        this.high = e;
        this.low = t;
      }
    });
    s.WordArray = i.extend({
      init: function (e, t) {
        e = this.words = e || [];
        this.sigBytes = t ?? e.length * 8;
      },
      toX32: function () {
        var e = this.words;
        for (var t = e.length, n = [], r = 0; r < t; r++) {
          var o = e[r];
          n.push(o.high);
          n.push(o.low);
        }
        return a.create(n, this.sigBytes);
      },
      clone: function () {
        var e = i.clone.call(this);
        var t = e.words = this.words.slice(0);
        for (var n = t.length, r = 0; r < n; r++) {
          t[r] = t[r].clone();
        }
        return e;
      }
    });
    e.exports = c;
  },
  3: function (e, t, n) {
    "use strict";

    n.d(t, "d", function () {
      return d;
    });
    n.d(t, "f", function () {
      return f;
    });
    n.d(t, "e", function () {
      return p;
    });
    n.d(t, "g", function () {
      return g;
    });
    n.d(t, "b", function () {
      return v;
    });
    n.d(t, "h", function () {
      return y;
    });
    n.d(t, "c", function () {
      return k;
    });
    n.d(t, "a", function () {
      return b;
    });
    var r = n(1);
    var o = n(0);
    function i() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var n = typeof Symbol == "function" ? Symbol : {};
      var r = n.iterator || "@@iterator";
      var o = n.toStringTag || "@@toStringTag";
      function s(n, r, o, i) {
        var s = r && r.prototype instanceof l ? r : l;
        var u = Object.create(s.prototype);
        a(u, "_invoke", function (n, r, o) {
          var i;
          var a;
          var s;
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
              a = 0;
              s = e;
              f.n = n;
              return c;
            }
          };
          function p(n, r) {
            a = n;
            s = r;
            t = 0;
            for (; !d && l && !o && t < u.length; t++) {
              var o;
              var i = u[t];
              var p = f.p;
              var h = i[2];
              if (n > 3) {
                if (o = h === r) {
                  s = i[(a = i[4]) ? 5 : (a = 3, 3)];
                  i[4] = i[5] = e;
                }
              } else if (i[0] <= p) {
                if (o = n < 2 && p < i[1]) {
                  a = 0;
                  f.v = r;
                  f.n = i[1];
                } else if (p < h && (o = n < 3 || i[0] > r || r > h)) {
                  i[4] = n;
                  i[5] = r;
                  f.n = h;
                  a = 0;
                }
              }
            }
            if (o || n > 1) {
              return c;
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
            a = u;
            s = h;
            while ((t = a < 2 ? e : s) || !d) {
              if (!i) {
                if (a) {
                  if (a < 3) {
                    if (a > 1) {
                      f.n = -1;
                    }
                    p(a, s);
                  } else {
                    f.n = s;
                  }
                } else {
                  f.v = s;
                }
              }
              try {
                l = 2;
                if (i) {
                  if (!a) {
                    o = "next";
                  }
                  if (t = i[o]) {
                    if (!(t = t.call(i, s))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!t.done) {
                      return t;
                    }
                    s = t.value;
                    if (a < 2) {
                      a = 0;
                    }
                  } else {
                    if (a === 1 && (t = i.return)) {
                      t.call(i);
                    }
                    if (a < 2) {
                      s = TypeError("The iterator does not provide a '" + o + "' method");
                      a = 1;
                    }
                  }
                  i = e;
                } else if ((t = (d = f.n < 0) ? s : n.call(r, f)) !== c) {
                  break;
                }
              } catch (t) {
                i = e;
                a = 1;
                s = t;
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
        return u;
      }
      var c = {};
      function l() {}
      function u() {}
      function d() {}
      t = Object.getPrototypeOf;
      var f = [][r] ? t(t([][r]())) : (a(t = {}, r, function () {
        return this;
      }), t);
      var p = d.prototype = l.prototype = Object.create(f);
      function h(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, d);
        } else {
          e.__proto__ = d;
          a(e, o, "GeneratorFunction");
        }
        e.prototype = Object.create(p);
        return e;
      }
      u.prototype = d;
      a(p, "constructor", d);
      a(d, "constructor", u);
      u.displayName = "GeneratorFunction";
      a(d, o, "GeneratorFunction");
      a(p);
      a(p, o, "Generator");
      a(p, r, function () {
        return this;
      });
      a(p, "toString", function () {
        return "[object Generator]";
      });
      return (i = function () {
        return {
          w: s,
          m: h
        };
      })();
    }
    function a(e, t, n, r) {
      var o = Object.defineProperty;
      try {
        o({}, "", {});
      } catch (e) {
        o = 0;
      }
      (a = function (e, t, n, r) {
        function i(t, n) {
          a(e, t, function (e) {
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
    function s(e, t, n, r) {
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
    var c = /([^/]+)$/i;
    var l = /\.([^/.]*)$/i;
    function u(e) {
      if (e && e.indexOf("data:image") !== 0) {
        return /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/\.?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
      } else {
        return [];
      }
    }
    function d(e) {
      var t = "";
      var n = "";
      try {
        var r = e.split("/");
        t = r[0];
        var o = r[1].split(";")[0];
        n = o;
        switch (o) {
          case "webm":
            n = t == "video" ? "webm" : "weba";
            break;
          case "3gpp":
            n = "3gp";
            break;
          case "3gpp2":
            n = "3g2";
            break;
          case "ogg":
            n = t == "video" ? "ogv" : "oga";
            break;
          case "mpeg":
            n = t == "video" ? "mpeg" : "mp3";
            break;
          case "x-midi":
            n = "midi";
            break;
          case "x-msvideo":
            n = "avi";
            break;
          case "mp2t":
            n = "ts";
        }
        return {
          type: t,
          ext: n
        };
      } catch (e) {
        return {
          type: t,
          ext: n
        };
      }
    }
    function f(e, t) {
      var n = typeof e == "object" ? e.videoUrl : e;
      var r = new URL(n, n.startsWith("http") ? undefined : location.origin);
      var i = (r.pathname.match(c) || [])[1] || "";
      var a = i.split(".").map(e => e.toLowerCase());
      i = decodeURIComponent(i.replace(l, ""));
      a.shift();
      if (a.length === 0 && Object(o.isSpecialUrls)(e)) {
        a = ["m3u8"];
      }
      var s = a[a.length - 1] || "";
      var u = null;
      if (r.href.startsWith("data:")) {
        var f = d(r.href.match(/data:([a-z]+\/[a-z0-9\-_]+);/i)[1]);
        s = f.ext;
        u = f.type;
      }
      var p = {
        url: typeof e == "object" ? e : r.href,
        protocol: r.protocol,
        host: r.host,
        port: r.port,
        pathname: r.pathname,
        filename: i,
        ext: s,
        exts: a,
        hash: r.hash,
        search: r.search,
        type: u
      };
      if (!p.port) {
        delete p.port;
      }
      if (t) {
        var h = {};
        r.search.replace(/^\?/, "").split(/&/).forEach(e => {
          var t = e.split("=");
          h[t[0]] = t[1];
        });
        p.query = h;
      }
      if (s == "flac") {
        p.quality = "Lossless";
        p.resolution = "lossless";
      }
      return p;
    }
    function p(e) {
      var n = typeof e == "object" ? e.videoUrl : e;
      if (n.startsWith("data:")) {
        var o = n.match(/data:([a-z]+)/)[1];
        if (["audio", "video"].includes(o)) {
          return o;
        } else {
          return "";
        }
      }
      var i = u(n)?.[11] || "";
      if (!i) {
        return "";
      }
      var a = new Map();
      var s = ["no_watermark_video"];
      Object.keys(r.k).forEach(e => {
        if (!s.includes(e)) {
          for (var t = r.k[e].extensions, n = 0; n < t.length; n++) {
            a.set(t[n], e);
          }
        }
      });
      if (n.includes("googlevideo.com/videoplayback") && i === "videoplayback" && n.includes("mp4")) {
        i = "video.mp4";
      }
      if (n.includes("videoplayback") && i === "videoplayback" && n.includes("mp4")) {
        i = "video.mp4";
      }
      var c = i.split(".");
      var l = c.length - 1;
      if (l <= 0) {
        return "";
      }
      var d = c[l].toLowerCase();
      return a.get(d);
    }
    function h(e) {
      return s(this, undefined, undefined, i().m(function t() {
        var n;
        var r;
        return i().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                t.n = 1;
                return fetch(e);
              case 1:
                n = t.v;
                t.n = 2;
                return n.blob();
              case 2:
                r = t.v;
                return t.a(2, new Promise((e, t) => {
                  var n = new FileReader();
                  n.onloadend = () => {
                    var t;
                    return e((t = n.result) === null || t === undefined ? undefined : t.toString());
                  };
                  n.onerror = t;
                  n.readAsDataURL(r);
                }));
            }
          }
        }, t);
      }));
    }
    function g(e) {
      var t = e.url;
      var n = e.node;
      return s(this, undefined, undefined, i().m(function e() {
        var r;
        var a;
        var s;
        var u;
        var d;
        return i().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                r = new URL(t.startsWith("blob:") ? t.replace("blob:", "") : t);
                a = n.alt || (r.pathname.match(c) || [])[1] || "";
                a = decodeURIComponent(a.replace(l, "").replace(/%/g, "%25"));
                e.n = 1;
                return m(t);
              case 1:
                s = e.v;
                u = {
                  url: t,
                  protocol: r.protocol,
                  host: r.host,
                  pathname: r.pathname,
                  filename: `${a}.${s}`,
                  ext: s,
                  exts: [s],
                  hash: r.hash,
                  search: r.search,
                  type: "image",
                  i18n_quality: Object(o.i18n)("download_current_image")
                };
                if (!t.includes("blob:")) {
                  e.n = 3;
                  break;
                }
                e.n = 2;
                return h(t);
              case 2:
                if (d = e.v) {
                  u.url = d;
                }
              case 3:
                return e.a(2, u);
            }
          }
        }, e);
      }));
    }
    function m(e) {
      return s(this, undefined, undefined, i().m(function n() {
        var r;
        var o;
        var a;
        return i().w(function (n) {
          while (true) {
            switch (n.n) {
              case 0:
                r = new AbortController();
                n.n = 1;
                return fetch(e, {
                  signal: r.signal
                });
              case 1:
                o = n.v;
                a = o.headers.get("content-type");
                r.abort();
                return n.a(2, (a == null ? undefined : a.split("/"))?.[1]);
            }
          }
        }, n);
      }));
    }
    function v(e) {
      if ((e = Object.create(e)).query) {
        e.search = [];
        for (var t in e.query) {
          if (e.query[t] !== undefined) {
            e.search.push(t + "=" + encodeURIComponent(e.query[t]));
          } else {
            e.search.push(t);
          }
        }
        e.search = "?" + e.search.join("&");
        delete e.query;
      }
      return e.href;
    }
    function y(e) {
      var t = (e = e.replace(/^[#?]{1}/, "")).split("&");
      var n = {};
      t.forEach(e => {
        var t = e.split("=");
        if (Object(o.defined)(t[0]) && Object(o.defined)(t[1])) {
          n[t[0]] = decodeURIComponent(t[1].replace(/\+/g, " "));
        }
      });
      return n;
    }
    var k = (() => {
      var e = ["facebook.com", "youtube.com", "video.vnexpress.net", "mp3.zing.vn", "radio.zing.vn", "tv.zing.vn", "nhaccuatui.com", "video.thethao247.vn", "video.ngoisao.net", "xvideos.com", "phimmoi.net", "clip.vn", "yan.vn", "xem.vn", "pornhub.com", "xhamster.com", "dailymotion.com", "xnxx.com", "hdonline.vn", "phim3s.net", "redtube.com", "phim14.net", "soundcloud.com", "youporn.com", "vimeo.com", "fptplay.net", "haivn.com", "chiasenhac.com", "movies.hdviet.com", "nhac.vui.vn", "nhacso.net", "anime47.com", "tube8.com", "talktv.vn", "chatvl.info", "cohet.tv", "vlxx.tv", "hayhaytv.vn", "xemphimso.com", "vivo.vn", "xemvtv.net", "vkool.net", "chimsedinang.com", "keeng.vn", "vuighe.net", "vetv.vn", "xemphimon.com", "ixxx.com", "biphim.com", "kenhvideo.com", "videogame.vn", "phim.in", "voh.com.vn", "phimsexporn.com", "porn99.net", "news.zing.vn", "me.zing.vn", "twitter.com", "24h.com.vn", "phim.clip.vn", "video.ringring.vn", "v.nhaccuatui.com", "clip.vietnamnet.vn", "afamily.vn", "media.bongdaplus.vn", "bongdaclip.com", "gamek.vn", "phapluattp.vn", "hdviet.com", "haiivl.com", "chatvl.com", "2sao.vn", "videos.vietgiaitri.com", "nhac.vietgiaitri.com", "megafun.vn", "phim.hayhd.vn", "cand.com.vn", "ohay.tv", "phim.megabox.vn", "anhtrang.org", "phim.anhtrang.org", "8bongda.com", "xemphimone.com", "bongda365.com.vn", "phimhd.vn", "dinotube.com", "phimvipvn.net", "animeax.com", "phimdata.com", "phimnhanh.net", "vipphim.net", "phimvon.com", "pubvn.tv", "phim22.com", "phim7.com", "hayxemphim.com", "m-viet.com", "thethaoclip.com", "nhac.hay365.com", "ssphim.com", "phimtructuyenhd.com", "xuongphim.tv", "vino.vn/mp3", "haivl.io", "nhacvang.org", "starmovies.mobi", "clipvuivn.com", "phimporn.com", "123tv.vn", "phimonlinehd.net", "hai24h.net", "jax.vn", "kenhgioitre.net", "chiaseclip.net", "phim.xixam.com", "bilutv.com", "phimbathu.com", "instagram.com", "banhtv.com", "txxx.com", "video.vietnamnet.vn", "video.bongdaplus.vn", "creatives.livejasmin.com", "tv.naver.com", "tv.tuoitre.vn", "icdrama.se", "video.thanhnien.vn", "spankbang.com", "dmm.co.jp", "v.youku.com", "v.qq.com", "daikynguyenvn.com", "thethao247.vn", "e.vnexpress.net", "ione.vnexpress.net", "kenh14.vn", "dantri.com.vn", "baomoi.com", "emdep.vn", "tuoitre.vn", "soha.vn", "video.congan.com.vn", "cafef.vn", "bongda.com.vn", "bongdaso.com", "eva.vn", "danviet.vn", "cliptv.vn", "bbc.co.uk", "edition.cnn.com", "buzzfeed.com", "businessinsider.com", "cnet.com", "dailymail.co.uk", "bilutvx.net", "chill123.gotdns.ch"];
      var t = {};
      for (var n = 0, r = e.length; n < r; ++n) {
        var o = e[n];
        console.assert(!(o in t), "Duplicate \"" + o + "\": " + t[o] + ", " + n);
        t[o] = n + 1;
      }
      return function (e) {
        for (var n = function (e) {
            return u(e)?.[6] || "";
          }(e), r = t[n]; !r && n;) {
          var o = n.indexOf(".") + 1;
          if (o === 0) {
            break;
          }
          n = n.substr(o);
          r = t[n];
        }
        return 100 + (r | 0);
      };
    })();
    function b(e, t, n = false) {
      var r = e || new URL(t);
      if (t.includes("https") || t.includes("//")) {
        if (!t.includes("http")) {
          t = "https:" + t;
        }
        return t.replace(/http:\/\//, "https://");
      }
      if (n && t.startsWith("/")) {
        if (r.origin) {
          return r.origin + t;
        } else {
          return t;
        }
      }
      var o = (r.host + r.pathname).split("/").filter(e => !!e).slice(0, -1);
      var i = t.split("/").filter(e => !!e);
      var a = i.lastIndexOf("..");
      var s = i.slice(0, a + 1);
      var c = i.slice(a + 1);
      if (s.length > 0) {
        o = o.slice(0, -s.length);
      }
      var l = o.indexOf(c[0]);
      if (l == -1) {
        o.push(...c);
      } else {
        l += 1;
        for (var u = 1; u < c.length; ++u) {
          var d = c[u];
          if (!o.includes(d)) {
            if (o[l - 1] === c[u - 1]) {
              o[l] = d;
            } else {
              o.push(d);
            }
          }
          l += 1;
        }
      }
      return r.protocol + "//" + o.join("/");
    }
  },
  34: function (e, t, n) {
    var r;
    r = n(4);
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.algo;
      var s = [];
      var c = [];
      (function () {
        function t(t) {
          for (var n = e.sqrt(t), r = 2; r <= n; r++) {
            if (!(t % r)) {
              return false;
            }
          }
          return true;
        }
        function n(e) {
          return (e - (e | 0)) * 4294967296 | 0;
        }
        var r = 2;
        for (var o = 0; o < 64;) {
          if (t(r)) {
            if (o < 8) {
              s[o] = n(e.pow(r, 0.5));
            }
            c[o] = n(e.pow(r, 1 / 3));
            o++;
          }
          r++;
        }
      })();
      var l = [];
      var u = a.SHA256 = i.extend({
        _doReset: function () {
          this._hash = new o.init(s.slice(0));
        },
        _doProcessBlock: function (e, t) {
          var n = this._hash.words;
          var r = n[0];
          var o = n[1];
          var i = n[2];
          var a = n[3];
          var s = n[4];
          var u = n[5];
          var d = n[6];
          var f = n[7];
          for (var p = 0; p < 64; p++) {
            if (p < 16) {
              l[p] = e[t + p] | 0;
            } else {
              var h = l[p - 15];
              var g = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3;
              var m = l[p - 2];
              var v = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
              l[p] = g + l[p - 7] + v + l[p - 16];
            }
            var y = r & o ^ r & i ^ o & i;
            var k = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22);
            var b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & d) + c[p] + l[p];
            f = d;
            d = u;
            u = s;
            s = a + b | 0;
            a = i;
            i = o;
            o = r;
            r = b + (k + y) | 0;
          }
          n[0] = n[0] + r | 0;
          n[1] = n[1] + o | 0;
          n[2] = n[2] + i | 0;
          n[3] = n[3] + a | 0;
          n[4] = n[4] + s | 0;
          n[5] = n[5] + u | 0;
          n[6] = n[6] + d | 0;
          n[7] = n[7] + f | 0;
        },
        _doFinalize: function () {
          var t = this._data;
          var n = t.words;
          var r = this._nDataBytes * 8;
          var o = t.sigBytes * 8;
          n[o >>> 5] |= 128 << 24 - o % 32;
          n[14 + (o + 64 >>> 9 << 4)] = e.floor(r / 4294967296);
          n[15 + (o + 64 >>> 9 << 4)] = r;
          t.sigBytes = n.length * 4;
          this._process();
          return this._hash;
        },
        clone: function () {
          var e = i.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        }
      });
      t.SHA256 = i._createHelper(u);
      t.HmacSHA256 = i._createHmacHelper(u);
    })(Math);
    e.exports = r.SHA256;
  },
  35: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    r = n(4);
    i = (o = r).lib.Base;
    a = o.enc.Utf8;
    e.exports = void (o.algo.HMAC = i.extend({
      init: function (e, t) {
        e = this._hasher = new e.init();
        if (typeof t == "string") {
          t = a.parse(t);
        }
        var n = e.blockSize;
        var r = n * 4;
        if (t.sigBytes > r) {
          t = e.finalize(t);
        }
        t.clamp();
        var o = this._oKey = t.clone();
        var i = this._iKey = t.clone();
        var s = o.words;
        var c = i.words;
        for (var l = 0; l < n; l++) {
          s[l] ^= 1549556828;
          c[l] ^= 909522486;
        }
        o.sigBytes = i.sigBytes = r;
        this.reset();
      },
      reset: function () {
        var e = this._hasher;
        e.reset();
        e.update(this._iKey);
      },
      update: function (e) {
        this._hasher.update(e);
        return this;
      },
      finalize: function (e) {
        var t = this._hasher;
        var n = t.finalize(e);
        t.reset();
        return t.finalize(this._oKey.clone().concat(n));
      }
    }));
  },
  37: function (e, t, n) {
    const r = ["features", "next", "ranges", "module", "sourceType", "globalReturn"];
    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        if (t) {
          r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, r);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          o(Object(n), true).forEach(function (t) {
            a(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          o(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function a(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (typeof e != "object" || !e) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var r = n.call(e, t || "default");
            if (typeof r != "object") {
              return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (typeof t == "symbol") {
          return t;
        } else {
          return t + "";
        }
      }(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    (function (e) {
      "use strict";

      const t = ((e, t) => {
        const n = new Uint32Array(69632);
        let r = 0;
        let o = 0;
        while (r < 2597) {
          const i = e[r++];
          if (i < 0) {
            o -= i;
          } else {
            let a = e[r++];
            if (i & 2) {
              a = t[a];
            }
            if (i & 1) {
              n.fill(a, o, o += e[r++]);
            } else {
              n[o++] = a;
            }
          }
        }
        return n;
      })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7, 2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311, 3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, 0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351, 2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6, 2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432, 2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2, 31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6, 2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63, 2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435, 2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 0, 4294828000, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0, 1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17, 2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93, 2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2, 98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21, 2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0, 4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0, 2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212, 2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6, 2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0, 2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999, 67043343, 67051519, 2147483648, 4294902000, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901761]);
      const n = e => !!(t[34816 + (e >>> 5)] >>> e & 1);
      const o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 16384, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 16384, 0, 0];
      const s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
      const c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
      function l(e) {
        if (e <= 127) {
          return s[e] > 0;
        } else {
          return n(e);
        }
      }
      function u(e) {
        if (e <= 127) {
          return c[e] > 0;
        } else {
          return (e => !!(t[0 + (e >>> 5)] >>> e & 1))(e) || e === 8204 || e === 8205;
        }
      }
      function d(e) {
        e.column++;
        return e.currentChar = e.source.charCodeAt(++e.index);
      }
      function f(e) {
        const t = e.currentChar;
        if ((t & 64512) != 55296) {
          return 0;
        }
        const n = e.source.charCodeAt(e.index + 1);
        if ((n & 64512) != 56320) {
          return 0;
        } else {
          return 65536 + ((t & 1023) << 10) + (n & 1023);
        }
      }
      function p(e, t) {
        e.currentChar = e.source.charCodeAt(++e.index);
        e.flags |= 1;
        if (!(t & 4)) {
          e.column = 0;
          e.line++;
        }
      }
      function h(e) {
        e.flags |= 1;
        e.currentChar = e.source.charCodeAt(++e.index);
        e.column = 0;
        e.line++;
      }
      function g(e) {
        return e === 160 || e === 65279 || e === 133 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 8201 || e === 65519;
      }
      function m(e) {
        if (e < 65) {
          return e - 48;
        } else {
          return e - 65 + 10 & 15;
        }
      }
      function v(e) {
        switch (e) {
          case 134283266:
            return "NumericLiteral";
          case 134283267:
            return "StringLiteral";
          case 86021:
          case 86022:
            return "BooleanLiteral";
          case 86023:
            return "NullLiteral";
          case 65540:
            return "RegularExpression";
          case 67174408:
          case 67174409:
          case 132:
            return "TemplateLiteral";
          default:
            if (~e & 143360) {
              if (~e & 4096) {
                return "Punctuator";
              } else {
                return "Keyword";
              }
            } else {
              return "Identifier";
            }
        }
      }
      const y = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
      function k(e, t, n, r, o, i) {
        if (r & 2) {
          e.report(0);
        }
        return b(e, t, n, o, i);
      }
      function b(e, t, n, r, i) {
        const {
          index: a
        } = e;
        e.tokenIndex = e.index;
        e.tokenLine = e.line;
        e.tokenColumn = e.column;
        while (e.index < e.end) {
          if (o[e.currentChar] & 8) {
            const n = e.currentChar === 13;
            h(e);
            if (n && e.index < e.end && e.currentChar === 10) {
              e.currentChar = t.charCodeAt(++e.index);
            }
            break;
          }
          if ((e.currentChar ^ 8232) <= 1) {
            h(e);
            break;
          }
          d(e);
          e.tokenIndex = e.index;
          e.tokenLine = e.line;
          e.tokenColumn = e.column;
        }
        if (e.options.onComment) {
          const n = {
            start: {
              line: i.line,
              column: i.column
            },
            end: {
              line: e.tokenLine,
              column: e.tokenColumn
            }
          };
          e.options.onComment(y[r & 255], t.slice(a, e.tokenIndex), i.index, e.tokenIndex, n);
        }
        return n | 1;
      }
      function _(e, t, n) {
        const {
          index: r
        } = e;
        while (e.index < e.end) {
          if (e.currentChar < 43) {
            let i = false;
            while (e.currentChar === 42) {
              if (!i) {
                n &= -5;
                i = true;
              }
              if (d(e) === 47) {
                d(e);
                if (e.options.onComment) {
                  const n = {
                    start: {
                      line: e.tokenLine,
                      column: e.tokenColumn
                    },
                    end: {
                      line: e.line,
                      column: e.column
                    }
                  };
                  e.options.onComment(y[1], t.slice(r, e.index - 2), r - 2, e.index, n);
                }
                e.tokenIndex = e.index;
                e.tokenLine = e.line;
                e.tokenColumn = e.column;
                return n;
              }
            }
            if (i) {
              continue;
            }
            if (o[e.currentChar] & 8) {
              if (e.currentChar === 13) {
                n |= 5;
                h(e);
              } else {
                p(e, n);
                n = n & -5 | 1;
              }
            } else {
              d(e);
            }
          } else if ((e.currentChar ^ 8232) <= 1) {
            n = n & -5 | 1;
            h(e);
          } else {
            n &= -5;
            d(e);
          }
        }
        e.report(18);
      }
      const T = {
        0: "Unexpected token",
        30: "Unexpected token: '%0'",
        1: "Octal escape sequences are not allowed in strict mode",
        2: "Octal escape sequences are not allowed in template strings",
        3: "\\8 and \\9 are not allowed in template strings",
        4: "Private identifier #%0 is not defined",
        5: "Illegal Unicode escape sequence",
        6: "Invalid code point %0",
        7: "Invalid hexadecimal escape sequence",
        9: "Octal literals are not allowed in strict mode",
        8: "Decimal integer literals with a leading zero are forbidden in strict mode",
        10: "Expected number in radix %0",
        153: "Invalid left-hand side assignment to a destructible right-hand side",
        11: "Non-number found after exponent indicator",
        12: "Invalid BigIntLiteral",
        13: "No identifiers allowed directly after numeric literal",
        14: "Escapes \\8 or \\9 are not syntactically valid escapes",
        15: "Escapes \\8 or \\9 are not allowed in strict mode",
        16: "Unterminated string literal",
        17: "Unterminated template literal",
        18: "Multiline comment was not closed properly",
        19: "The identifier contained dynamic unicode escape that was not closed",
        20: "Illegal character '%0'",
        21: "Missing hexadecimal digits",
        22: "Invalid implicit octal",
        23: "Invalid line break in string literal",
        24: "Only unicode escapes are legal in identifier names",
        25: "Expected '%0'",
        26: "Invalid left-hand side in assignment",
        27: "Invalid left-hand side in async arrow",
        28: "Calls to super must be in the \"constructor\" method of a class expression or class declaration that has a superclass",
        29: "Member access on super must be in a method",
        31: "Await expression not allowed in formal parameter",
        32: "Yield expression not allowed in formal parameter",
        95: "Unexpected token: 'escaped keyword'",
        33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
        125: "Async functions can only be declared at the top level or inside a block",
        34: "Unterminated regular expression",
        35: "Unexpected regular expression flag",
        36: "Duplicate regular expression flag '%0'",
        37: "%0 functions must have exactly %1 argument%2",
        38: "Setter function argument must not be a rest parameter",
        39: "%0 declaration must have a name in this context",
        40: "Function name may not contain any reserved words or be eval or arguments in strict mode",
        41: "The rest operator is missing an argument",
        42: "A getter cannot be a generator",
        43: "A setter cannot be a generator",
        44: "A computed property name must be followed by a colon or paren",
        136: "Object literal keys that are strings or numbers must be a method or have a colon",
        46: "Found `* async x(){}` but this should be `async * x(){}`",
        45: "Getters and setters can not be generators",
        47: "'%0' can not be generator method",
        48: "No line break is allowed after '=>'",
        49: "The left-hand side of the arrow can only be destructed through assignment",
        50: "The binding declaration is not destructible",
        51: "Async arrow can not be followed by new expression",
        52: "Classes may not have a static property named 'prototype'",
        53: "Class constructor may not be a %0",
        54: "Duplicate constructor method in class",
        55: "Invalid increment/decrement operand",
        56: "Invalid use of `new` keyword on an increment/decrement expression",
        57: "`=>` is an invalid assignment target",
        58: "Rest element may not have a trailing comma",
        59: "Missing initializer in %0 declaration",
        60: "'for-%0' loop head declarations can not have an initializer",
        61: "Invalid left-hand side in for-%0 loop: Must have a single binding",
        62: "Invalid shorthand property initializer",
        63: "Property name __proto__ appears more than once in object literal",
        64: "Let is disallowed as a lexically bound name",
        65: "Invalid use of '%0' inside new expression",
        66: "Illegal 'use strict' directive in function with non-simple parameter list",
        67: "Identifier \"let\" disallowed as left-hand side expression in strict mode",
        68: "Illegal continue statement",
        69: "Illegal break statement",
        70: "Cannot have `let[...]` as a var name in strict mode",
        71: "Invalid destructuring assignment target",
        72: "Rest parameter may not have a default initializer",
        73: "The rest argument must the be last parameter",
        74: "Invalid rest argument",
        76: "In strict mode code, functions can only be declared at top level or inside a block",
        77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
        78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
        79: "Class declaration can't appear in single-statement context",
        80: "Invalid left-hand side in for-%0",
        81: "Invalid assignment in for-%0",
        82: "for await (... of ...) is only valid in async functions and async generators",
        83: "The first token after the template expression should be a continuation of the template",
        85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
        84: "`let \n [` is a restricted production at the start of a statement",
        86: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
        87: "Catch clause parameter does not support default values",
        88: "Missing catch or finally after try",
        89: "More than one default clause in switch statement",
        90: "Illegal newline after throw",
        91: "Strict mode code may not include a with statement",
        92: "Illegal return statement",
        93: "The left hand side of the for-header binding declaration is not destructible",
        94: "new.target only allowed within functions or static blocks",
        96: "'#' not followed by identifier",
        102: "Invalid keyword",
        101: "Can not use 'let' as a class name",
        100: "'A lexical declaration can't define a 'let' binding",
        99: "Can not use `let` as variable name in strict mode",
        97: "'%0' may not be used as an identifier in this context",
        98: "Await is only valid in async functions",
        103: "The %0 keyword can only be used with the module goal",
        104: "Unicode codepoint must not be greater than 0x10FFFF",
        105: "%0 source must be string",
        106: "Only a identifier or string can be used to indicate alias",
        107: "Only '*' or '{...}' can be imported after default",
        108: "'import defer' must be followed by a namespace import",
        109: "'import source' must be followed by a default import",
        110: "Trailing decorator may be followed by method",
        111: "Decorators can't be used with a constructor",
        112: "Can not use `await` as identifier in module or async func",
        113: "Can not use `await` as identifier in module",
        114: "HTML comments are only allowed with web compatibility (Annex B)",
        115: "The identifier 'let' must not be in expression position in strict mode",
        116: "Cannot assign to `eval` and `arguments` in strict mode",
        117: "The left-hand side of a for-of loop may not start with 'let'",
        118: "Block body arrows can not be immediately invoked without a group",
        119: "Block body arrows can not be immediately accessed without a group",
        120: "Unexpected strict mode reserved word",
        121: "Unexpected eval or arguments in strict mode",
        122: "Decorators must not be followed by a semicolon",
        123: "Calling delete on expression not allowed in strict mode",
        124: "Pattern can not have a tail",
        126: "Can not have a `yield` expression on the left side of a ternary",
        127: "An arrow function can not have a postfix update operator",
        128: "Invalid object literal key character after generator star",
        129: "Private fields can not be deleted",
        131: "Classes may not have a field called constructor",
        130: "Classes may not have a private element named constructor",
        132: "A class field initializer or static block may not contain arguments",
        133: "Generators can only be declared at the top level or inside a block",
        134: "Async methods are a restricted production and cannot have a newline following it",
        135: "Unexpected character after object literal property name",
        137: "Invalid key token",
        138: "Label '%0' has already been declared",
        139: "continue statement must be nested within an iteration statement",
        140: "Undefined label '%0'",
        141: "Trailing comma is disallowed inside import(...) arguments",
        142: "Invalid binding in JSON import",
        143: "import() requires exactly one argument",
        144: "Cannot use new with import(...)",
        145: "... is not allowed in import()",
        146: "Expected '=>'",
        147: "Duplicate binding '%0'",
        148: "Duplicate private identifier #%0",
        149: "Cannot export a duplicate name '%0'",
        152: "Duplicate %0 for-binding",
        150: "Exported binding '%0' needs to refer to a top-level declared variable",
        151: "Unexpected private field",
        155: "Numeric separators are not allowed at the end of numeric literals",
        154: "Only one underscore is allowed as numeric separator",
        156: "JSX value should be either an expression or a quoted JSX text",
        157: "Expected corresponding JSX closing tag for %0",
        158: "Adjacent JSX elements must be wrapped in an enclosing tag",
        159: "JSX attributes must only be assigned a non-empty 'expression'",
        160: "'%0' has already been declared",
        161: "'%0' shadowed a catch clause binding",
        162: "Dot property must be an identifier",
        163: "Encountered invalid input after spread/rest argument",
        164: "Catch without try",
        165: "Finally without try",
        166: "Expected corresponding closing tag for JSX fragment",
        167: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
        168: "Invalid tagged template on optional chain",
        169: "Invalid optional chain from super property",
        170: "Invalid optional chain from new expression",
        171: "Cannot use \"import.meta\" outside a module",
        172: "Leading decorators must be attached to a class declaration",
        173: "An export name cannot include a lone surrogate",
        174: "A string literal cannot be used as an exported binding without `from`",
        175: "Private fields can't be accessed on super",
        176: "The only valid meta property for import is 'import.meta'",
        177: "'import.meta' must not contain escaped characters",
        178: "cannot use \"await\" as identifier inside an async function",
        179: "cannot use \"await\" in static blocks",
        180: "Unexpected token `}`. Did you mean `&rbrace;` or `{'}'}`?",
        181: "Unexpected token `>`. Did you mean `&gt;` or `{'>'}`?"
      };
      class S extends SyntaxError {
        constructor(e, t, n, ...r) {
          const o = T[n].replaceAll(/%(\d+)/g, (e, t) => r[t]);
          super("[" + e.line + ":" + e.column + "-" + t.line + ":" + t.column + "]: " + o);
          a(this, "start", undefined);
          a(this, "end", undefined);
          a(this, "range", undefined);
          a(this, "loc", undefined);
          a(this, "description", undefined);
          this.start = e.index;
          this.end = t.index;
          this.range = [e.index, t.index];
          this.loc = {
            start: {
              line: e.line,
              column: e.column
            },
            end: {
              line: t.line,
              column: t.column
            }
          };
          this.description = o;
        }
      }
      const x = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", "\"", "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "accessor", "from", "of", "using", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"];
      const w = new Map([["this", 86111], ["function", 86104], ["if", 20569], ["return", 20572], ["var", 86088], ["else", 20563], ["for", 20567], ["new", 86107], ["in", 8673330], ["typeof", 16863275], ["while", 20578], ["case", 20556], ["break", 20555], ["try", 20577], ["catch", 20557], ["delete", 16863276], ["throw", 86112], ["switch", 86110], ["continue", 20559], ["default", 20561], ["instanceof", 8411187], ["do", 20562], ["void", 16863277], ["finally", 20566], ["async", 209005], ["await", 209006], ["class", 86094], ["const", 86090], ["constructor", 209007], ["debugger", 20560], ["export", 20564], ["extends", 20565], ["false", 86021], ["from", 209011], ["get", 209008], ["implements", 36964], ["import", 86106], ["interface", 36965], ["let", 241737], ["null", 86023], ["of", 471156], ["using", 209013], ["package", 36966], ["private", 36967], ["protected", 36968], ["public", 36969], ["set", 209009], ["static", 36970], ["super", 86109], ["true", 86022], ["with", 20579], ["yield", 241771], ["enum", 86134], ["eval", 537079927], ["as", 77932], ["arguments", 537079928], ["target", 209030], ["meta", 209031], ["accessor", 209010]]);
      const E = [...w.keys()].map(e => e.length);
      const A = Math.min(...E);
      const C = Math.max(...E);
      function O(e, t, n) {
        while (c[d(e)]);
        e.tokenValue = e.source.slice(e.tokenIndex, e.index);
        if (e.currentChar === 92 || e.currentChar > 126) {
          return N(e, t, 0, n);
        }
        const o = e.index - e.tokenIndex;
        if (o < A || o > C) {
          return 208897;
        } else {
          return w.get(e.tokenValue) ?? 208897;
        }
      }
      function I(e, t) {
        const n = R(e);
        if (!l(n)) {
          e.report(5);
        }
        e.tokenValue = String.fromCodePoint(n);
        return N(e, t, 1, o[n] & 4);
      }
      function N(e, t, n, r) {
        let i = e.index;
        while (e.index < e.end) {
          if (e.currentChar === 92) {
            e.tokenValue += e.source.slice(i, e.index);
            n = 1;
            const t = R(e);
            if (!u(t)) {
              e.report(5);
            }
            r = r && o[t] & 4;
            e.tokenValue += String.fromCodePoint(t);
            i = e.index;
          } else {
            const t = f(e);
            if (t > 0) {
              if (!u(t)) {
                e.report(20, String.fromCodePoint(t));
              }
              e.currentChar = t;
              e.index++;
              e.column++;
            } else if (!u(e.currentChar)) {
              break;
            }
            d(e);
          }
        }
        if (e.index <= e.end) {
          e.tokenValue += e.source.slice(i, e.index);
        }
        const {
          length: a
        } = e.tokenValue;
        if (r && a >= A && a <= C) {
          const r = w.get(e.tokenValue);
          if (r === undefined) {
            return (n ? -2147483648 : 0) | 208897;
          } else if (n) {
            if (r === 209006) {
              if (t & 2050) {
                return -2147483527;
              } else {
                return r | -2147483648;
              }
            } else if (t & 1) {
              if (r === 36970) {
                return -2147483526;
              } else if (~r & 36864) {
                if (~r & 20480) {
                  return -2147274629;
                } else if (t & 262144 && !(t & 8)) {
                  return r | -2147483648;
                } else {
                  return -2147483527;
                }
              } else {
                return -2147483526;
              }
            } else if (!(t & 262144) || t & 8 || ~r & 20480) {
              if (r === 241771) {
                if (t & 262144) {
                  return -2147274629;
                } else if (t & 1024) {
                  return -2147483527;
                } else {
                  return r | -2147483648;
                }
              } else if (r === 209005) {
                return -2147274629;
              } else if (~r & 36864) {
                return -2147483527;
              } else {
                return r | 12288 | -2147483648;
              }
            } else {
              return r | -2147483648;
            }
          } else {
            return r;
          }
        }
        return (n ? -2147483648 : 0) | 208897;
      }
      function D(e) {
        let t = d(e);
        if (t === 92) {
          return 131;
        }
        const n = f(e);
        if (n) {
          t = n;
        }
        if (!l(t)) {
          e.report(96);
        }
        return 131;
      }
      function R(e) {
        if (e.source.charCodeAt(e.index + 1) !== 117) {
          e.report(5);
        }
        e.currentChar = e.source.charCodeAt(e.index += 2);
        e.column += 2;
        return function (e) {
          let t = 0;
          const n = e.currentChar;
          if (n === 123) {
            const n = e.index - 2;
            while (o[d(e)] & 64) {
              t = t << 4 | m(e.currentChar);
              if (t > 1114111) {
                throw new S({
                  index: n,
                  line: e.line,
                  column: e.column
                }, e.currentLocation, 104);
              }
            }
            if (e.currentChar !== 125) {
              throw new S({
                index: n,
                line: e.line,
                column: e.column
              }, e.currentLocation, 7);
            }
            d(e);
            return t;
          }
          if (!(o[n] & 64)) {
            e.report(7);
          }
          const r = e.source.charCodeAt(e.index + 1);
          if (!(o[r] & 64)) {
            e.report(7);
          }
          const i = e.source.charCodeAt(e.index + 2);
          if (!(o[i] & 64)) {
            e.report(7);
          }
          const a = e.source.charCodeAt(e.index + 3);
          if (!(o[a] & 64)) {
            e.report(7);
          }
          t = m(n) << 12 | m(r) << 8 | m(i) << 4 | m(a);
          e.currentChar = e.source.charCodeAt(e.index += 4);
          e.column += 4;
          return t;
        }(e);
      }
      function L(e, t, n) {
        let r = e.currentChar;
        let i = 0;
        let a = 9;
        let s = n & 64 ? 0 : 1;
        let c = 0;
        let u = 0;
        if (n & 64) {
          i = "." + P(e, r);
          r = e.currentChar;
          if (r === 110) {
            e.report(12);
          }
        } else {
          if (r === 48) {
            r = d(e);
            if ((r | 32) == 120) {
              n = 136;
              r = d(e);
              while (o[r] & 4160) {
                if (r !== 95) {
                  u = 1;
                  i = i * 16 + m(r);
                  c++;
                  r = d(e);
                } else {
                  if (!u) {
                    e.report(154);
                  }
                  u = 0;
                  r = d(e);
                }
              }
              if (c === 0 || !u) {
                e.report(c === 0 ? 21 : 155);
              }
            } else if ((r | 32) == 111) {
              n = 132;
              r = d(e);
              while (o[r] & 4128) {
                if (r !== 95) {
                  u = 1;
                  i = i * 8 + (r - 48);
                  c++;
                  r = d(e);
                } else {
                  if (!u) {
                    e.report(154);
                  }
                  u = 0;
                  r = d(e);
                }
              }
              if (c === 0 || !u) {
                e.report(c === 0 ? 0 : 155);
              }
            } else if ((r | 32) == 98) {
              n = 130;
              r = d(e);
              while (o[r] & 4224) {
                if (r !== 95) {
                  u = 1;
                  i = i * 2 + (r - 48);
                  c++;
                  r = d(e);
                } else {
                  if (!u) {
                    e.report(154);
                  }
                  u = 0;
                  r = d(e);
                }
              }
              if (c === 0 || !u) {
                e.report(c === 0 ? 0 : 155);
              }
            } else if (o[r] & 32) {
              if (t & 1) {
                e.report(1);
              }
              n = 1;
              while (o[r] & 16) {
                if (o[r] & 512) {
                  n = 32;
                  s = 0;
                  break;
                }
                i = i * 8 + (r - 48);
                r = d(e);
              }
            } else if (o[r] & 512) {
              if (t & 1) {
                e.report(1);
              }
              e.flags |= 64;
              n = 32;
            } else if (r === 95) {
              e.report(0);
            }
          }
          if (n & 48) {
            if (s) {
              while (a >= 0 && o[r] & 4112) {
                if (r !== 95) {
                  u = 0;
                  i = i * 10 + (r - 48);
                  r = d(e);
                  --a;
                } else {
                  r = d(e);
                  if (r === 95 || n & 32) {
                    throw new S(e.currentLocation, {
                      index: e.index + 1,
                      line: e.line,
                      column: e.column
                    }, 154);
                  }
                  u = 1;
                }
              }
              if (u) {
                throw new S(e.currentLocation, {
                  index: e.index + 1,
                  line: e.line,
                  column: e.column
                }, 155);
              }
              if (a >= 0 && !l(r) && r !== 46) {
                e.tokenValue = i;
                if (e.options.raw) {
                  e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
                }
                return 134283266;
              }
            }
            i += P(e, r);
            r = e.currentChar;
            if (r === 46) {
              if (d(e) === 95) {
                e.report(0);
              }
              n = 64;
              i += "." + P(e, e.currentChar);
              r = e.currentChar;
            }
          }
        }
        const f = e.index;
        let p = 0;
        if (r === 110 && n & 128) {
          p = 1;
          r = d(e);
        } else if ((r | 32) == 101) {
          r = d(e);
          if (o[r] & 256) {
            r = d(e);
          }
          const {
            index: t
          } = e;
          if (!(o[r] & 16)) {
            e.report(11);
          }
          i += e.source.substring(f, t) + P(e, r);
          r = e.currentChar;
        }
        if (e.index < e.end && o[r] & 16 || l(r)) {
          e.report(13);
        }
        if (p) {
          e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
          e.tokenValue = BigInt(e.tokenRaw.slice(0, -1).replaceAll("_", ""));
          return 134283389;
        } else {
          e.tokenValue = n & 15 ? i : n & 32 ? parseFloat(e.source.substring(e.tokenIndex, e.index)) : +i;
          if (e.options.raw) {
            e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
          }
          return 134283266;
        }
      }
      function P(e, t) {
        let n = 0;
        let r = e.index;
        let i = "";
        while (o[t] & 4112) {
          if (t !== 95) {
            n = 0;
            t = d(e);
          } else {
            const {
              index: o
            } = e;
            if ((t = d(e)) === 95) {
              throw new S(e.currentLocation, {
                index: e.index + 1,
                line: e.line,
                column: e.column
              }, 154);
            }
            n = 1;
            i += e.source.substring(r, o);
            r = e.index;
          }
        }
        if (n) {
          throw new S(e.currentLocation, {
            index: e.index + 1,
            line: e.line,
            column: e.column
          }, 155);
        }
        return i + e.source.substring(r, e.index);
      }
      var B;
      var U;
      function M(e) {
        const t = e.index;
        let n = B.Empty;
        e: while (true) {
          const t = e.currentChar;
          d(e);
          if (n & B.Escape) {
            n &= ~B.Escape;
          } else {
            switch (t) {
              case 47:
                if (n) {
                  break;
                }
                break e;
              case 92:
                n |= B.Escape;
                break;
              case 91:
                n |= B.Class;
                break;
              case 93:
                n &= B.Escape;
            }
          }
          if (t === 13 || t === 10 || t === 8232 || t === 8233) {
            e.report(34);
          }
          if (e.index >= e.source.length) {
            return e.report(34);
          }
        }
        const r = e.index - 1;
        let o = U.Empty;
        let i = e.currentChar;
        const {
          index: a
        } = e;
        while (u(i)) {
          switch (i) {
            case 103:
              if (o & U.Global) {
                e.report(36, "g");
              }
              o |= U.Global;
              break;
            case 105:
              if (o & U.IgnoreCase) {
                e.report(36, "i");
              }
              o |= U.IgnoreCase;
              break;
            case 109:
              if (o & U.Multiline) {
                e.report(36, "m");
              }
              o |= U.Multiline;
              break;
            case 117:
              if (o & U.Unicode) {
                e.report(36, "u");
              }
              if (o & U.UnicodeSets) {
                e.report(36, "vu");
              }
              o |= U.Unicode;
              break;
            case 118:
              if (o & U.Unicode) {
                e.report(36, "uv");
              }
              if (o & U.UnicodeSets) {
                e.report(36, "v");
              }
              o |= U.UnicodeSets;
              break;
            case 121:
              if (o & U.Sticky) {
                e.report(36, "y");
              }
              o |= U.Sticky;
              break;
            case 115:
              if (o & U.DotAll) {
                e.report(36, "s");
              }
              o |= U.DotAll;
              break;
            case 100:
              if (o & U.Indices) {
                e.report(36, "d");
              }
              o |= U.Indices;
              break;
            default:
              e.report(35);
          }
          i = d(e);
        }
        const s = e.source.slice(a, e.index);
        const c = e.source.slice(t, r);
        e.tokenRegExp = {
          pattern: c,
          flags: s
        };
        if (e.options.raw) {
          e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
        }
        e.tokenValue = function (e, t, n) {
          try {
            return new RegExp(t, n);
          } catch (t) {
            if (!e.options.validateRegex) {
              return null;
            }
            e.report(34);
          }
        }(e, c, s);
        return 65540;
      }
      function V(e, t, n) {
        const {
          index: r
        } = e;
        let i = "";
        let a = d(e);
        let s = e.index;
        while (!(o[a] & 8)) {
          if (a === n) {
            i += e.source.slice(s, e.index);
            d(e);
            if (e.options.raw) {
              e.tokenRaw = e.source.slice(r, e.index);
            }
            e.tokenValue = i;
            return 134283267;
          }
          if (~a & 8 || a !== 92) {
            if (a === 8232 || a === 8233) {
              e.column = -1;
              e.line++;
            }
          } else {
            i += e.source.slice(s, e.index);
            a = d(e);
            if (a < 127 || a === 8232 || a === 8233) {
              const n = H(e, t, a);
              if (n >= 0) {
                i += String.fromCodePoint(n);
              } else {
                j(e, n, 0);
              }
            } else {
              i += String.fromCodePoint(a);
            }
            s = e.index + 1;
          }
          if (e.index >= e.end) {
            e.report(16);
          }
          a = d(e);
        }
        e.report(16);
      }
      function H(e, t, n, r = 0) {
        switch (n) {
          case 98:
            return 8;
          case 102:
            return 12;
          case 114:
            return 13;
          case 110:
            return 10;
          case 116:
            return 9;
          case 118:
            return 11;
          case 13:
            if (e.index < e.end) {
              const t = e.source.charCodeAt(e.index + 1);
              if (t === 10) {
                e.index = e.index + 1;
                e.currentChar = t;
              }
            }
          case 10:
          case 8232:
          case 8233:
            e.column = -1;
            e.line++;
            return -1;
          case 48:
          case 49:
          case 50:
          case 51:
            {
              let i = n - 48;
              let a = e.index + 1;
              let s = e.column + 1;
              if (a < e.end) {
                const n = e.source.charCodeAt(a);
                if (o[n] & 32) {
                  if (t & 1 || r) {
                    return -2;
                  }
                  e.currentChar = n;
                  i = i << 3 | n - 48;
                  a++;
                  s++;
                  if (a < e.end) {
                    const t = e.source.charCodeAt(a);
                    if (o[t] & 32) {
                      e.currentChar = t;
                      i = i << 3 | t - 48;
                      a++;
                      s++;
                    }
                  }
                  e.flags |= 64;
                } else if (i !== 0 || o[n] & 512) {
                  if (t & 1 || r) {
                    return -2;
                  }
                  e.flags |= 64;
                }
                e.index = a - 1;
                e.column = s - 1;
              }
              return i;
            }
          case 52:
          case 53:
          case 54:
          case 55:
            {
              if (r || t & 1) {
                return -2;
              }
              let i = n - 48;
              const a = e.index + 1;
              const s = e.column + 1;
              if (a < e.end) {
                const t = e.source.charCodeAt(a);
                if (o[t] & 32) {
                  i = i << 3 | t - 48;
                  e.currentChar = t;
                  e.index = a;
                  e.column = s;
                }
              }
              e.flags |= 64;
              return i;
            }
          case 120:
            {
              const t = d(e);
              if (!(o[t] & 64)) {
                return -4;
              }
              const n = m(t);
              const r = d(e);
              if (o[r] & 64) {
                return n << 4 | m(r);
              } else {
                return -4;
              }
            }
          case 117:
            {
              const t = d(e);
              if (e.currentChar === 123) {
                let t = 0;
                let n = 0;
                while (o[d(e)] & 64) {
                  t = t << 4 | m(e.currentChar);
                  if (t > 1114111) {
                    return -5;
                  }
                  n++;
                }
                if (n === 0 || e.currentChar < 1 || e.currentChar !== 125) {
                  return -4;
                } else {
                  return t;
                }
              }
              {
                if (!(o[t] & 64)) {
                  return -4;
                }
                const n = e.source.charCodeAt(e.index + 1);
                if (!(o[n] & 64)) {
                  return -4;
                }
                const r = e.source.charCodeAt(e.index + 2);
                if (!(o[r] & 64)) {
                  return -4;
                }
                const i = e.source.charCodeAt(e.index + 3);
                if (o[i] & 64) {
                  e.index += 3;
                  e.column += 3;
                  e.currentChar = e.source.charCodeAt(e.index);
                  return m(t) << 12 | m(n) << 8 | m(r) << 4 | m(i);
                } else {
                  return -4;
                }
              }
            }
          case 56:
          case 57:
            if (r || t & 1) {
              return -3;
            }
            e.flags |= 4096;
          default:
            return n;
        }
      }
      function j(e, t, n) {
        switch (t) {
          case -1:
            return;
          case -2:
            e.report(n ? 2 : 1);
          case -3:
            e.report(n ? 3 : 14);
          case -4:
            e.report(7);
          case -5:
            e.report(104);
        }
      }
      function F(e, t) {
        const {
          index: n
        } = e;
        let r = 67174409;
        let o = "";
        let i = false;
        let a = d(e);
        while (a !== 96) {
          if (a === 36 && e.source.charCodeAt(e.index + 1) === 123) {
            d(e);
            r = 67174408;
            break;
          }
          if (a === 92) {
            a = d(e);
            if (a === 13) {
              i = true;
            }
            if (a > 126) {
              o += String.fromCodePoint(a);
            } else {
              const {
                index: n,
                line: s,
                column: c
              } = e;
              const l = H(e, t | 1, a, 1);
              if (l >= 0) {
                o += String.fromCodePoint(l);
              } else {
                if (l !== -1 && t & 64) {
                  e.index = n;
                  e.line = s;
                  e.column = c;
                  o = null;
                  a = z(e, a, () => {
                    i = true;
                  });
                  if (a < 0) {
                    r = 67174408;
                  }
                  break;
                }
                j(e, l, 1);
              }
            }
          } else if (e.index < e.end) {
            if (a === 13) {
              i = true;
            }
            if (a === 13 && e.source.charCodeAt(e.index + 1) === 10) {
              e.currentChar = e.source.charCodeAt(++e.index);
            }
            if (a === 13) {
              a = 10;
            }
            if ((a & 83) < 3 && a === 10 || (a ^ 8232) <= 1) {
              e.column = -1;
              e.line++;
            }
            o += String.fromCodePoint(a);
          }
          if (e.index >= e.end) {
            e.report(17);
          }
          a = d(e);
        }
        d(e);
        e.tokenValue = o;
        const s = e.source.slice(n + 1, e.index - (r === 67174409 ? 1 : 2));
        e.tokenRaw = i ? s.replaceAll(/\r\n?/g, "\n") : s;
        return r;
      }
      function z(e, t, n) {
        while (t !== 96) {
          switch (t) {
            case 13:
              n();
              break;
            case 36:
              {
                const n = e.index + 1;
                if (n < e.end && e.source.charCodeAt(n) === 123) {
                  e.index = n;
                  e.column++;
                  return -t;
                }
                break;
              }
            case 10:
            case 8232:
            case 8233:
              e.column = -1;
              e.line++;
          }
          if (e.index >= e.end) {
            e.report(17);
          }
          t = d(e);
        }
        return t;
      }
      function G(e, t) {
        if (e.index >= e.end) {
          e.report(0);
        }
        e.index--;
        e.column--;
        return F(e, t);
      }
      (function (e) {
        e[e.Empty = 0] = "Empty";
        e[e.Escape = 1] = "Escape";
        e[e.Class = 2] = "Class";
      })(B ||= {});
      (function (e) {
        e[e.Empty = 0] = "Empty";
        e[e.IgnoreCase = 1] = "IgnoreCase";
        e[e.Global = 2] = "Global";
        e[e.Multiline = 4] = "Multiline";
        e[e.Unicode = 16] = "Unicode";
        e[e.Sticky = 8] = "Sticky";
        e[e.DotAll = 32] = "DotAll";
        e[e.Indices = 64] = "Indices";
        e[e.UnicodeSets = 128] = "UnicodeSets";
      })(U ||= {});
      const W = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 16842798, 134283267, 131, 208897, 8391477, 8390213, 134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456256, 1077936155, 8390721, 22, 133, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137, 20, 8389959, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8389702, 1074790415, 16842799, 129];
      function q(e, t) {
        e.flags = (e.flags | 1) ^ 1;
        e.startIndex = e.index;
        e.startColumn = e.column;
        e.startLine = e.line;
        e.setToken(Y(e, t, 0));
      }
      function Y(e, t, r) {
        const o = e.index === 0;
        const {
          source: i
        } = e;
        while (e.index < e.end) {
          e.tokenIndex = e.index;
          e.tokenColumn = e.column;
          e.tokenLine = e.line;
          let a = e.currentChar;
          if (a <= 126) {
            const n = W[a];
            switch (n) {
              case 67174411:
              case 16:
              case 2162700:
              case 1074790415:
              case 69271571:
              case 20:
              case 21:
              case 1074790417:
              case 18:
              case 16842799:
              case 133:
              case 129:
                d(e);
                return n;
              case 208897:
                return O(e, t, 0);
              case 4096:
                return O(e, t, 1);
              case 134283266:
                return L(e, t, 144);
              case 134283267:
                return V(e, t, a);
              case 132:
                return F(e, t);
              case 137:
                return I(e, t);
              case 131:
                return D(e);
              case 128:
                d(e);
                break;
              case 130:
                r |= 5;
                h(e);
                break;
              case 136:
                p(e, r);
                r = r & -5 | 1;
                break;
              case 8456256:
                {
                  const n = d(e);
                  if (e.index < e.end) {
                    if (n === 60) {
                      if (e.index < e.end && d(e) === 61) {
                        d(e);
                        return 4194332;
                      } else {
                        return 8390978;
                      }
                    }
                    if (n === 61) {
                      d(e);
                      return 8390718;
                    }
                    if (n === 33) {
                      const n = e.index + 1;
                      if (n + 1 < e.end && i.charCodeAt(n) === 45 && i.charCodeAt(n + 1) == 45) {
                        e.column += 3;
                        e.currentChar = i.charCodeAt(e.index += 3);
                        r = k(e, i, r, t, 2, e.tokenStart);
                        continue;
                      }
                      return 8456256;
                    }
                  }
                  return 8456256;
                }
              case 1077936155:
                {
                  d(e);
                  const t = e.currentChar;
                  if (t === 61) {
                    if (d(e) === 61) {
                      d(e);
                      return 8390458;
                    } else {
                      return 8390460;
                    }
                  } else if (t === 62) {
                    d(e);
                    return 10;
                  } else {
                    return 1077936155;
                  }
                }
              case 16842798:
                if (d(e) !== 61) {
                  return 16842798;
                } else if (d(e) !== 61) {
                  return 8390461;
                } else {
                  d(e);
                  return 8390459;
                }
              case 8391477:
                if (d(e) !== 61) {
                  return 8391477;
                } else {
                  d(e);
                  return 4194340;
                }
              case 8391476:
                {
                  d(e);
                  if (e.index >= e.end) {
                    return 8391476;
                  }
                  const t = e.currentChar;
                  if (t === 61) {
                    d(e);
                    return 4194338;
                  } else if (t !== 42) {
                    return 8391476;
                  } else if (d(e) !== 61) {
                    return 8391735;
                  } else {
                    d(e);
                    return 4194335;
                  }
                }
              case 8389959:
                if (d(e) !== 61) {
                  return 8389959;
                } else {
                  d(e);
                  return 4194341;
                }
              case 25233968:
                {
                  d(e);
                  const t = e.currentChar;
                  if (t === 43) {
                    d(e);
                    return 33619993;
                  } else if (t === 61) {
                    d(e);
                    return 4194336;
                  } else {
                    return 25233968;
                  }
                }
              case 25233969:
                {
                  d(e);
                  const n = e.currentChar;
                  if (n === 45) {
                    d(e);
                    if ((r & 1 || o) && e.currentChar === 62) {
                      if (!e.options.webcompat) {
                        e.report(114);
                      }
                      d(e);
                      r = k(e, i, r, t, 3, e.tokenStart);
                      continue;
                    }
                    return 33619994;
                  }
                  if (n === 61) {
                    d(e);
                    return 4194337;
                  } else {
                    return 25233969;
                  }
                }
              case 8457014:
                d(e);
                if (e.index < e.end) {
                  const n = e.currentChar;
                  if (n === 47) {
                    d(e);
                    r = b(e, i, r, 0, e.tokenStart);
                    continue;
                  }
                  if (n === 42) {
                    d(e);
                    r = _(e, i, r);
                    continue;
                  }
                  if (t & 32) {
                    return M(e);
                  }
                  if (n === 61) {
                    d(e);
                    return 4259875;
                  }
                }
                return 8457014;
              case 67108877:
                {
                  const n = d(e);
                  if (n >= 48 && n <= 57) {
                    return L(e, t, 80);
                  }
                  if (n === 46) {
                    const t = e.index + 1;
                    if (t < e.end && i.charCodeAt(t) === 46) {
                      e.column += 2;
                      e.currentChar = i.charCodeAt(e.index += 2);
                      return 14;
                    }
                  }
                  return 67108877;
                }
              case 8389702:
                {
                  d(e);
                  const t = e.currentChar;
                  if (t === 124) {
                    d(e);
                    if (e.currentChar === 61) {
                      d(e);
                      return 4718632;
                    } else {
                      return 8913465;
                    }
                  } else if (t === 61) {
                    d(e);
                    return 4194342;
                  } else {
                    return 8389702;
                  }
                }
              case 8390721:
                {
                  d(e);
                  if (t & 1048576) {
                    return 8390721;
                  }
                  const n = e.currentChar;
                  if (n === 61) {
                    d(e);
                    return 8390719;
                  }
                  if (n !== 62) {
                    return 8390721;
                  }
                  d(e);
                  if (e.index < e.end) {
                    const t = e.currentChar;
                    if (t === 62) {
                      if (d(e) === 61) {
                        d(e);
                        return 4194334;
                      } else {
                        return 8390980;
                      }
                    }
                    if (t === 61) {
                      d(e);
                      return 4194333;
                    }
                  }
                  return 8390979;
                }
              case 8390213:
                {
                  d(e);
                  const t = e.currentChar;
                  if (t === 38) {
                    d(e);
                    if (e.currentChar === 61) {
                      d(e);
                      return 4718633;
                    } else {
                      return 8913720;
                    }
                  } else if (t === 61) {
                    d(e);
                    return 4194343;
                  } else {
                    return 8390213;
                  }
                }
              case 22:
                {
                  let t = d(e);
                  if (t === 63) {
                    d(e);
                    if (e.currentChar === 61) {
                      d(e);
                      return 4718634;
                    } else {
                      return 276824446;
                    }
                  }
                  if (t === 46) {
                    const n = e.index + 1;
                    if (n < e.end && (t = i.charCodeAt(n), !(t >= 48) || !(t <= 57))) {
                      d(e);
                      return 67108991;
                    }
                  }
                  return 22;
                }
            }
          } else {
            if ((a ^ 8232) <= 1) {
              r = r & -5 | 1;
              h(e);
              continue;
            }
            const o = f(e);
            if (o > 0) {
              a = o;
            }
            if (n(a)) {
              e.tokenValue = "";
              return N(e, t, 0, 0);
            }
            if (g(a)) {
              d(e);
              continue;
            }
            e.report(20, String.fromCodePoint(a));
          }
        }
        return 1048576;
      }
      function K(e, t) {
        var n;
        var r;
        if (!(e.flags & 1) && ~e.getToken() & 1048576) {
          e.report(30, x[e.getToken() & 255]);
        }
        if (!J(e, t, 1074790417) && (n = (r = e.options).onInsertedSemicolon) !== null && n !== undefined) {
          n.call(r, e.startIndex);
        }
      }
      function X(e, t, n, r) {
        if (t - n < 13 && r === "use strict" && (!(~e.getToken() & 1048576) || e.flags & 1)) {
          return 1;
        } else {
          return 0;
        }
      }
      function $(e, t, n) {
        if (e.getToken() !== n) {
          return 0;
        } else {
          q(e, t);
          return 1;
        }
      }
      function J(e, t, n) {
        return e.getToken() === n && (q(e, t), true);
      }
      function Q(e, t, n) {
        if (e.getToken() !== n) {
          e.report(25, x[n & 255]);
        }
        q(e, t);
      }
      function Z(e, t) {
        switch (t.type) {
          case "ArrayExpression":
            {
              t.type = "ArrayPattern";
              const {
                elements: n
              } = t;
              for (let t = 0, r = n.length; t < r; ++t) {
                const r = n[t];
                if (r) {
                  Z(e, r);
                }
              }
              return;
            }
          case "ObjectExpression":
            {
              t.type = "ObjectPattern";
              const {
                properties: n
              } = t;
              for (let t = 0, r = n.length; t < r; ++t) {
                Z(e, n[t]);
              }
              return;
            }
          case "AssignmentExpression":
            t.type = "AssignmentPattern";
            if (t.operator !== "=") {
              e.report(71);
            }
            delete t.operator;
            Z(e, t.left);
            return;
          case "Property":
            Z(e, t.value);
            return;
          case "SpreadElement":
            t.type = "RestElement";
            Z(e, t.argument);
        }
      }
      function ee(e, t, n, r, o) {
        if (t & 1) {
          if (!(~r & 36864)) {
            e.report(120);
          }
          if (!o && !(~r & 537079808)) {
            e.report(121);
          }
        }
        if (!(~r & 20480) || r === -2147483527) {
          e.report(102);
        }
        if (n & 24 && (r & 255) == 73) {
          e.report(100);
        }
        if (t & 2050 && r === 209006) {
          e.report(112);
        }
        if (t & 1025 && r === 241771) {
          e.report(97, "yield");
        }
      }
      function te(e, t, n) {
        if (t & 1) {
          if (!(~n & 36864)) {
            e.report(120);
          }
          if (!(~n & 537079808)) {
            e.report(121);
          }
          if (n === -2147483526) {
            e.report(95);
          }
          if (n === -2147483527) {
            e.report(95);
          }
        }
        if (!(~n & 20480)) {
          e.report(102);
        }
        if (t & 2050 && n === 209006) {
          e.report(112);
        }
        if (t & 1025 && n === 241771) {
          e.report(97, "yield");
        }
      }
      function ne(e, t, n) {
        var r;
        if (n === 209006) {
          if (t & 2050) {
            e.report(112);
          }
          if (!(e.destructible & 128) && ((r = e.firstAwaitLocation) === null || r === undefined)) {
            e.firstAwaitLocation = {
              start: e.tokenStart,
              end: e.currentLocation
            };
          }
          e.destructible |= 128;
        }
        if (n === 241771 && t & 1024) {
          e.report(97, "yield");
        }
        return !(~n & 20480) || !(~n & 36864) || n == -2147483526;
      }
      function re(e, t, n, r) {
        while (t) {
          if (t["$" + n]) {
            if (r) {
              e.report(139);
            }
            return 1;
          }
          if (r && t.loop) {
            r = 0;
          }
          t = t.$;
        }
        return 0;
      }
      function oe(e) {
        switch (e.type) {
          case "JSXIdentifier":
            return e.name;
          case "JSXNamespacedName":
            return e.namespace + ":" + e.name;
          case "JSXMemberExpression":
            return oe(e.object) + "." + oe(e.property);
        }
      }
      function ie(e, t) {
        if (e & 1025) {
          return (!(e & 2) || t !== 209006) && (!(e & 1024) || t !== 241771) && !(~t & 12288);
        } else {
          return !(~t & 12288) || !(~t & 36864);
        }
      }
      function ae(e, t, n) {
        if (!(~n & 537079808)) {
          if (t & 1) {
            e.report(121);
          }
          e.flags |= 512;
        }
        if (!ie(t, n)) {
          e.report(0);
        }
      }
      const se = new Map(Object.entries({
        quot: "\"",
        amp: "&",
        apos: "'",
        lt: "<",
        gt: ">",
        nbsp: "\xA0",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        times: "×",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        divide: "÷",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        ensp: "\u2002",
        emsp: "\u2003",
        thinsp: "\u2009",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        frasl: "⁄",
        euro: "€",
        image: "ℑ",
        weierp: "℘",
        real: "ℜ",
        trade: "™",
        alefsym: "ℵ",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lArr: "⇐",
        uArr: "⇑",
        rArr: "⇒",
        dArr: "⇓",
        hArr: "⇔",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        lang: "〈",
        rang: "〉",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦"
      }));
      function ce(e) {
        return e.replaceAll(/&(?:[\da-zA-Z]+|#x[\da-fA-F]+|#\d+);/g, e => {
          if (e.charAt(1) === "#") {
            const t = e.charAt(2) === "x" ? parseInt(e.slice(3), 16) : parseInt(e.slice(2), 10);
            if (t > 1114111) {
              return e;
            } else {
              return String.fromCodePoint(t);
            }
          }
          return se.get(e.slice(1, -1)) ?? e;
        });
      }
      function le(e, t) {
        e.startIndex = e.tokenIndex = e.index;
        e.startColumn = e.tokenColumn = e.column;
        e.startLine = e.tokenLine = e.line;
        e.setToken(o[e.currentChar] & 8192 ? function (e) {
          const t = e.currentChar;
          let n = d(e);
          const r = e.index;
          while (n !== t) {
            if (e.index >= e.end) {
              e.report(16);
            }
            if (n === 13) {
              if (e.source.charCodeAt(e.index + 1) === 10) {
                d(e);
              }
              e.column = -1;
              e.line++;
            } else if (n === 10 || n === 8232 || n === 8233) {
              e.column = -1;
              e.line++;
            }
            n = d(e);
          }
          if (n !== t) {
            e.report(16);
          }
          e.tokenValue = ce(e.source.slice(r, e.index));
          d(e);
          if (e.options.raw) {
            e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
          }
          return 134283267;
        }(e) : Y(e, t, 0));
        return e.getToken();
      }
      function ue(e) {
        e.startIndex = e.tokenIndex = e.index;
        e.startColumn = e.tokenColumn = e.column;
        e.startLine = e.tokenLine = e.line;
        if (e.index >= e.end) {
          e.setToken(1048576);
          return;
        }
        if (e.currentChar === 60) {
          d(e);
          e.setToken(8456256);
          return;
        }
        if (e.currentChar === 123) {
          d(e);
          e.setToken(2162700);
          return;
        }
        if (e.currentChar === 125) {
          e.report(180);
        }
        if (e.currentChar === 62) {
          e.report(181);
        }
        let t = 0;
        let n = false;
        while (e.index < e.end) {
          const r = e.source.charCodeAt(e.index);
          if (r === 13) {
            t |= 5;
            n = true;
            h(e);
          } else if (r === 10) {
            p(e, t);
            t = t & -5 | 1;
          } else if (r === 8232 || r === 8233) {
            e.flags |= 1;
            e.currentChar = e.source.charCodeAt(++e.index);
            e.column = 0;
            e.line++;
            t = t & -5 | 1;
          } else {
            d(e);
          }
          if (o[e.currentChar] & 16384) {
            break;
          }
        }
        if (e.tokenIndex === e.index) {
          e.report(0);
        }
        const r = e.source.slice(e.tokenIndex, e.index);
        const i = n ? r.replaceAll("\r\n", "\n") : r;
        if (e.options.raw) {
          e.tokenRaw = i;
        }
        e.tokenValue = ce(i);
        e.setToken(138);
      }
      function de(e) {
        if (e.getToken() & 143360) {
          const {
            index: t
          } = e;
          let n = e.currentChar;
          while (o[n] & 32770) {
            n = d(e);
          }
          e.tokenValue += e.source.slice(t, e.index);
          e.setToken(208897, true);
        }
        return e.getToken();
      }
      class fe {
        constructor(e, t) {
          a(this, "parser", undefined);
          a(this, "parent", undefined);
          a(this, "refs", Object.create(null));
          a(this, "privateIdentifiers", new Map());
          this.parser = e;
          this.parent = t;
        }
        addPrivateIdentifier(e, t) {
          const {
            privateIdentifiers: n
          } = this;
          let r = t & 800;
          if (!(r & 768)) {
            r |= 768;
          }
          const o = n.get(e);
          if (this.hasPrivateIdentifier(e) && ((o & 32) != (r & 32) || o & r & 768)) {
            this.parser.report(148, e);
          }
          n.set(e, this.hasPrivateIdentifier(e) ? o | r : r);
        }
        addPrivateIdentifierRef(e) {
          var t;
          var n;
          if ((n = (t = this.refs)[e]) === null || n === undefined) {
            t[e] = [];
          }
          this.refs[e].push(this.parser.tokenStart);
        }
        isPrivateIdentifierDefined(e) {
          var t;
          return this.hasPrivateIdentifier(e) || Boolean((t = this.parent) === null || t === undefined ? undefined : t.isPrivateIdentifierDefined(e));
        }
        validatePrivateIdentifierRefs() {
          for (const e in this.refs) {
            if (!this.isPrivateIdentifierDefined(e)) {
              const {
                index: t,
                line: n,
                column: r
              } = this.refs[e][0];
              throw new S({
                index: t,
                line: n,
                column: r
              }, {
                index: t + e.length,
                line: n,
                column: r + e.length
              }, 4, e);
            }
          }
        }
        hasPrivateIdentifier(e) {
          return this.privateIdentifiers.has(e);
        }
      }
      class pe {
        constructor(e, t = 2, n) {
          a(this, "parser", undefined);
          a(this, "type", undefined);
          a(this, "parent", undefined);
          a(this, "scopeError", undefined);
          a(this, "variableBindings", new Map());
          this.parser = e;
          this.type = t;
          this.parent = n;
        }
        createChildScope(e) {
          return new pe(this.parser, e, this);
        }
        addVarOrBlock(e, t, n, r, o, i) {
          if (n & 4) {
            this.addVarName(e, t, n, r, o);
          } else {
            this.addBlockName(e, t, n, r, o, i);
          }
          if (i & 64) {
            this.parser.declareUnboundVariable(t);
          }
        }
        addVarName(e, t, n, r, o) {
          const {
            parser: i
          } = this;
          let a = this;
          while (a && !(a.type & 128)) {
            const {
              variableBindings: s
            } = a;
            const c = s.get(t);
            if (c && c & 248 && (!i.options.webcompat || e & 1 || (!(n & 128) || !(c & 68)) && (!(c & 128) || !(n & 68)))) {
              throw new S(r, o, 147, t);
            }
            if (a === this && c && c & 1 && n & 1) {
              a.recordScopeError(147, r, o, t);
            }
            if (c && (c & 256 || c & 512 && !i.options.webcompat)) {
              throw new S(r, o, 147, t);
            }
            a.variableBindings.set(t, n);
            a = a.parent;
          }
        }
        hasVariable(e) {
          return this.variableBindings.has(e);
        }
        addBlockName(e, t, n, r, o, i = 0) {
          var a;
          const {
            parser: s
          } = this;
          const c = this.variableBindings.get(t);
          if (c && !(c & 2)) {
            if (n & 1) {
              this.recordScopeError(147, r, o, t);
            } else if (!s.options.webcompat || e & 1 || !(i & 2) || c !== 64 || n !== 64) {
              throw new S(r, o, 147, t);
            }
          }
          if (this.type & 64 && (a = this.parent) !== null && a !== undefined && a.hasVariable(t) && !(this.parent.variableBindings.get(t) & 2)) {
            throw new S(r, o, 147, t);
          }
          if (this.type & 512 && c && !(c & 2) && n & 1) {
            this.recordScopeError(147, r, o, t);
          }
          if (this.type & 32 && this.parent.variableBindings.get(t) & 768) {
            throw new S(r, o, 161, t);
          }
          this.variableBindings.set(t, n);
        }
        recordScopeError(e, t, n, ...r) {
          var o;
          if ((o = this.scopeError) === null || o === undefined) {
            this.scopeError = {
              type: e,
              params: r,
              start: t,
              end: n
            };
          }
        }
        reportScopeError() {
          const {
            scopeError: e
          } = this;
          if (e) {
            throw new S(e.start, e.end, e.type, ...e.params);
          }
        }
      }
      function he(e, t, n, r, o) {
        const i = e.createScope().createChildScope(512);
        i.addBlockName(t, n, 1, r, o);
        return i;
      }
      class ge {
        constructor(e, t = {}) {
          var n;
          var o;
          a(this, "source", undefined);
          a(this, "lastOnToken", null);
          a(this, "options", undefined);
          a(this, "token", 1048576);
          a(this, "flags", 0);
          a(this, "features", 0);
          a(this, "index", 0);
          a(this, "line", 1);
          a(this, "column", 0);
          a(this, "startIndex", 0);
          a(this, "end", 0);
          a(this, "tokenIndex", 0);
          a(this, "startColumn", 0);
          a(this, "tokenColumn", 0);
          a(this, "tokenLine", 1);
          a(this, "startLine", 1);
          a(this, "tokenValue", "");
          a(this, "tokenRaw", "");
          a(this, "tokenRegExp", undefined);
          a(this, "currentChar", 0);
          a(this, "exportedNames", new Set());
          a(this, "exportedBindings", new Set());
          a(this, "assignable", 0);
          a(this, "destructible", 0);
          a(this, "strictReservedRange", null);
          a(this, "firstAwaitLocation", null);
          a(this, "leadingDecorators", {
            decorators: []
          });
          this.source = e;
          this.end = e.length;
          this.currentChar = e.charCodeAt(0);
          this.options = function (e) {
            let t = i({
              validateRegex: true,
              features: 0
            }, e);
            let {
              features: n,
              next: o,
              ranges: a,
              module: s,
              sourceType: c,
              globalReturn: l
            } = t;
            let u = function (e, t) {
              if (e == null) {
                return {};
              }
              var n;
              var r;
              var o = function (e, t) {
                if (e == null) {
                  return {};
                }
                var n = {};
                for (var r in e) {
                  if ({}.hasOwnProperty.call(e, r)) {
                    if (t.indexOf(r) !== -1) {
                      continue;
                    }
                    n[r] = e[r];
                  }
                }
                return n;
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) {
                  n = i[r];
                  if (t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n)) {
                    o[n] = e[n];
                  }
                }
              }
              return o;
            }(t, r);
            if (o) {
              n |= 7;
            }
            a = function (e, t, n, r) {
              if (e) {
                if (e === true) {
                  return {
                    start: true,
                    end: true,
                    range: true
                  };
                } else {
                  return {
                    start: (t = e.start) !== null && t !== undefined && t,
                    end: (n = e.end) !== null && n !== undefined && n,
                    range: (r = e.range) !== null && r !== undefined && r
                  };
                }
              }
            }(a);
            if (s && !c) {
              c = "module";
            }
            if (!!l && (!c || c === "script")) {
              c = "commonjs";
            }
            return i(i({}, u), {}, {
              ranges: a,
              features: n,
              sourceType: c
            });
          }(t);
          this.features = this.options.features;
          if (Array.isArray(this.options.onComment)) {
            this.options.onComment = (n = this.options.onComment, o = this.options, function (e, t, r, i, a) {
              const s = {
                type: e,
                value: t
              };
              const {
                ranges: c
              } = o;
              if (c) {
                if (c.start) {
                  s.start = r;
                }
                if (c.end) {
                  s.end = i;
                }
                if (c.range) {
                  s.range = [r, i];
                }
              }
              if (o.loc) {
                s.loc = a;
              }
              n.push(s);
            });
          }
          if (Array.isArray(this.options.onToken)) {
            this.options.onToken = function (e, t) {
              return function (n, r, o, i) {
                const a = {
                  token: n
                };
                const {
                  ranges: s
                } = t;
                if (s) {
                  if (s.start) {
                    a.start = r;
                  }
                  if (s.end) {
                    a.end = o;
                  }
                  if (s.range) {
                    a.range = [r, o];
                  }
                }
                if (t.loc) {
                  a.loc = i;
                }
                e.push(a);
              };
            }(this.options.onToken, this.options);
          }
        }
        getToken() {
          return this.token;
        }
        setToken(e, t = false) {
          this.token = e;
          const {
            onToken: n
          } = this.options;
          if (n) {
            if (e !== 1048576) {
              const r = {
                start: {
                  line: this.tokenLine,
                  column: this.tokenColumn
                },
                end: {
                  line: this.line,
                  column: this.column
                }
              };
              if (!t && this.lastOnToken) {
                n(...this.lastOnToken);
              }
              this.lastOnToken = [v(e), this.tokenIndex, this.index, r];
            } else if (this.lastOnToken) {
              n(...this.lastOnToken);
              this.lastOnToken = null;
            }
          }
          return e;
        }
        get tokenStart() {
          return {
            index: this.tokenIndex,
            line: this.tokenLine,
            column: this.tokenColumn
          };
        }
        get startPosition() {
          return {
            index: this.startIndex,
            line: this.startLine,
            column: this.startColumn
          };
        }
        get currentLocation() {
          return {
            index: this.index,
            line: this.line,
            column: this.column
          };
        }
        finishNode(e, t, n) {
          const {
            ranges: r
          } = this.options;
          if (r) {
            const o = n ? n.index : this.startIndex;
            if (r.start) {
              e.start = t.index;
            }
            if (r.end) {
              e.end = o;
            }
            if (r.range) {
              e.range = [t.index, o];
            }
          }
          if (this.options.loc) {
            e.loc = {
              start: {
                line: t.line,
                column: t.column
              },
              end: n ? {
                line: n.line,
                column: n.column
              } : {
                line: this.startLine,
                column: this.startColumn
              }
            };
            if (this.options.source) {
              e.loc.source = this.options.source;
            }
          }
          return e;
        }
        addBindingToExports(e) {
          this.exportedBindings.add(e);
        }
        declareUnboundVariable(e) {
          const {
            exportedNames: t
          } = this;
          if (t.has(e)) {
            this.report(149, e);
          }
          t.add(e);
        }
        report(e, ...t) {
          throw new S(this.tokenStart, this.currentLocation, e, ...t);
        }
        createScopeIfLexical(e, t) {
          if (this.options.lexical) {
            return this.createScope(e, t);
          }
        }
        createScope(e, t) {
          return new pe(this, e, t);
        }
        createPrivateScopeIfLexical(e) {
          if (this.options.lexical) {
            return new fe(this, e);
          }
        }
        cloneIdentifier(e) {
          return structuredClone(e);
        }
        cloneStringLiteral(e) {
          return structuredClone(e);
        }
      }
      function me(e, t = {}, n = 0) {
        const r = new ge(e, t);
        if (r.options.sourceType === "module") {
          n |= 3;
        }
        if (r.options.sourceType === "commonjs") {
          n |= 69632;
        }
        if (r.options.impliedStrict) {
          n |= 1;
        }
        (function (e) {
          const {
            source: t
          } = e;
          if (e.currentChar === 35 && t.charCodeAt(e.index + 1) === 33) {
            d(e);
            d(e);
            b(e, t, 0, 4, e.tokenStart);
          }
        })(r);
        const o = r.createScopeIfLexical();
        let i;
        let a = "script";
        if (n & 2) {
          a = "module";
          i = function (e, t, n) {
            q(e, t | 32);
            const r = [];
            while (e.getToken() === 134283267) {
              const {
                tokenStart: n
              } = e;
              const o = e.getToken();
              r.push(we(e, t, lt(e, t), o, n));
            }
            while (e.getToken() !== 1048576) {
              r.push(ve(e, t, n));
            }
            return r;
          }(r, n | 8, o);
          if (o) {
            for (const e of r.exportedBindings) {
              if (!o.hasVariable(e)) {
                r.report(150, e);
              }
            }
          }
        } else {
          i = function (e, t, n) {
            q(e, t | 262176);
            const r = [];
            while (e.getToken() === 134283267) {
              const {
                index: n,
                tokenValue: o,
                tokenStart: i,
                tokenIndex: a
              } = e;
              const s = e.getToken();
              const c = lt(e, t);
              if (X(e, n, a, o)) {
                t |= 1;
                if (e.flags & 64) {
                  throw new S(e.tokenStart, e.currentLocation, 9);
                }
                if (e.flags & 4096) {
                  throw new S(e.tokenStart, e.currentLocation, 15);
                }
              }
              r.push(we(e, t, c, s, i));
            }
            while (e.getToken() !== 1048576) {
              r.push(ye(e, t, n, undefined, {}, 4));
            }
            return r;
          }(r, n | 8, o);
        }
        return r.finishNode({
          type: "Program",
          sourceType: a,
          body: i
        }, {
          index: 0,
          line: 1,
          column: 0
        }, r.currentLocation);
      }
      function ve(e, t, n) {
        let r;
        if (e.getToken() === 133) {
          Object.assign(e.leadingDecorators, {
            start: e.tokenStart,
            decorators: Et(e, t, undefined)
          });
        }
        switch (e.getToken()) {
          case 20564:
            r = function (e, t, n) {
              const r = e.leadingDecorators.decorators.length ? e.leadingDecorators.start : e.tokenStart;
              q(e, t | 32);
              const o = J(e, t | 32, 20561);
              if (e.leadingDecorators.decorators.length && e.getToken() !== 86094) {
                e.report(172);
              }
              const i = [];
              let a = null;
              let s = null;
              let c = [];
              if (o) {
                switch (e.getToken()) {
                  case 86104:
                    a = ut(e, t, n, undefined, 1, 1, 0, e.tokenStart, 4);
                    break;
                  case 133:
                    if (!(e.features & 1)) {
                      e.report(30, "@");
                    }
                  case 86094:
                    a = wt(e, t, n, undefined, 1);
                    break;
                  case 209005:
                    {
                      const {
                        tokenStart: r
                      } = e;
                      a = ct(e, t);
                      const {
                        flags: o
                      } = e;
                      if (!(o & 1)) {
                        if (e.getToken() === 86104) {
                          a = ut(e, t, n, undefined, 1, 1, 1, r, 4);
                        } else if (e.getToken() === 67174411) {
                          a = xt(e, t, undefined, a, 1, 1, o, r);
                          a = Ye(e, t, undefined, a, 0, 0, r);
                          a = je(e, t, undefined, 0, 0, r, a);
                        } else if (e.getToken() & 143360) {
                          n &&= he(e, t, e.tokenValue, e.tokenStart, e.currentLocation);
                          a = ct(e, t);
                          a = _t(e, t, n, undefined, [a], 1, r);
                        }
                      }
                      break;
                    }
                  default:
                    a = Me(e, t, undefined, 1, 0, e.tokenStart);
                    K(e, t | 32);
                }
                if (n) {
                  e.declareUnboundVariable("default");
                }
                return e.finishNode({
                  type: "ExportDefaultDeclaration",
                  declaration: a
                }, r);
              }
              switch (e.getToken()) {
                case 8391476:
                  {
                    q(e, t);
                    let o = null;
                    if (J(e, t, 77932)) {
                      if (n) {
                        e.declareUnboundVariable(e.tokenValue);
                      }
                      o = tt(e, t);
                    }
                    Q(e, t, 209011);
                    if (e.getToken() !== 134283267) {
                      e.report(105, "Export");
                    }
                    s = lt(e, t);
                    const i = {
                      type: "ExportAllDeclaration",
                      source: s,
                      exported: o,
                      attributes: Qe(e, t)
                    };
                    K(e, t | 32);
                    return e.finishNode(i, r);
                  }
                case 2162700:
                  {
                    q(e, t);
                    const r = [];
                    const o = [];
                    let a = 0;
                    while (e.getToken() & 143360 || e.getToken() === 134283267) {
                      const {
                        tokenStart: s,
                        tokenValue: c
                      } = e;
                      const l = tt(e, t);
                      let u;
                      if (l.type === "Literal") {
                        a = 1;
                      }
                      if (e.getToken() === 77932) {
                        q(e, t);
                        if (!(e.getToken() & 143360) && e.getToken() !== 134283267) {
                          e.report(106);
                        }
                        if (n) {
                          r.push(e.tokenValue);
                          o.push(c);
                        }
                        u = tt(e, t);
                      } else {
                        if (n) {
                          r.push(e.tokenValue);
                          o.push(e.tokenValue);
                        }
                        u = l.type === "Literal" ? e.cloneStringLiteral(l) : e.cloneIdentifier(l);
                      }
                      i.push(e.finishNode({
                        type: "ExportSpecifier",
                        local: l,
                        exported: u
                      }, s));
                      if (e.getToken() !== 1074790415) {
                        Q(e, t, 18);
                      }
                    }
                    Q(e, t, 1074790415);
                    if (J(e, t, 209011)) {
                      if (e.getToken() !== 134283267) {
                        e.report(105, "Export");
                      }
                      s = lt(e, t);
                      c = Qe(e, t);
                      if (n) {
                        r.forEach(t => e.declareUnboundVariable(t));
                      }
                    } else {
                      if (a) {
                        e.report(174);
                      }
                      if (n) {
                        r.forEach(t => e.declareUnboundVariable(t));
                        o.forEach(t => e.addBindingToExports(t));
                      }
                    }
                    K(e, t | 32);
                    break;
                  }
                case 133:
                  if (!(e.features & 1)) {
                    e.report(30, "@");
                  }
                case 86094:
                  a = wt(e, t, n, undefined, 2);
                  break;
                case 86104:
                  a = ut(e, t, n, undefined, 1, 2, 0, e.tokenStart, 4);
                  break;
                case 241737:
                  a = Oe(e, t, n, undefined, 8, 64);
                  break;
                case 86090:
                  a = Oe(e, t, n, undefined, 16, 64);
                  break;
                case 86088:
                  a = Ie(e, t, n, undefined, 64);
                  break;
                case 209005:
                  {
                    const {
                      tokenStart: r
                    } = e;
                    q(e, t);
                    if (!(e.flags & 1) && e.getToken() === 86104) {
                      a = ut(e, t, n, undefined, 1, 2, 1, r, 4);
                      break;
                    }
                  }
                default:
                  e.report(30, x[e.getToken() & 255]);
              }
              const l = {
                type: "ExportNamedDeclaration",
                declaration: a,
                specifiers: i,
                source: s,
                attributes: c
              };
              return e.finishNode(l, r);
            }(e, t, n);
            break;
          case 86106:
            if (e.leadingDecorators.decorators.length) {
              e.report(172);
            }
            r = function (e, t, n) {
              const r = e.tokenStart;
              let o;
              q(e, t);
              let a = false;
              let s = null;
              const {
                tokenStart: c
              } = e;
              let l = [];
              if (e.getToken() === 134283267) {
                o = lt(e, t);
              } else {
                if (e.getToken() & 143360) {
                  const r = e.getToken();
                  const {
                    tokenValue: i,
                    tokenStart: u,
                    currentLocation: d
                  } = e;
                  const f = e.features & 2 && !(r & -2147483648) && i == "defer";
                  const p = e.features & 4 && !(r & -2147483648) && i == "source";
                  if (f || p) {
                    const r = ct(e, t);
                    if (i === "defer") {
                      if (e.getToken() === 8391476) {
                        s = "defer";
                        l = [Le(e, t, n)];
                      } else if (e.getToken() === 209011 || e.getToken() === 18) {
                        if (n != null) {
                          n.addBlockName(t, i, 8, u, d);
                        }
                        l = [e.finishNode({
                          type: "ImportDefaultSpecifier",
                          local: r
                        }, c)];
                      } else {
                        e.report(108);
                      }
                    } else if (e.getToken() === 209011) {
                      const f = e.getToken();
                      const p = e.tokenStart;
                      const h = e.currentLocation;
                      const g = ct(e, t);
                      if (e.getToken() === 209011) {
                        ee(e, t, 16, f, 0);
                        if (n != null) {
                          n.addBlockName(t, g.name, 8, p, h);
                        }
                        s = "source";
                        l = [e.finishNode({
                          type: "ImportDefaultSpecifier",
                          local: g
                        }, p)];
                      } else {
                        if (n != null) {
                          n.addBlockName(t, i, 8, u, d);
                        }
                        l = [e.finishNode({
                          type: "ImportDefaultSpecifier",
                          local: r
                        }, c)];
                        if (e.getToken() !== 134283267) {
                          e.report(105, "Import");
                        }
                        o = lt(e, t);
                        a = true;
                      }
                    } else if (e.getToken() & 143360) {
                      s = "source";
                      const r = e.tokenStart;
                      const o = Re(e, t, n);
                      l = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: o
                      }, r)];
                    } else if (e.getToken() === 18) {
                      if (n != null) {
                        n.addBlockName(t, i, 8, u, d);
                      }
                      l = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: r
                      }, c)];
                    } else {
                      e.report(109);
                    }
                  } else {
                    const r = Re(e, t, n);
                    l = [e.finishNode({
                      type: "ImportDefaultSpecifier",
                      local: r
                    }, c)];
                  }
                  if (s === null && !a && J(e, t, 18)) {
                    switch (e.getToken()) {
                      case 8391476:
                        l.push(Le(e, t, n));
                        break;
                      case 2162700:
                        Pe(e, t, n, l);
                        break;
                      default:
                        e.report(107);
                    }
                  }
                } else {
                  switch (e.getToken()) {
                    case 8391476:
                      l = [Le(e, t, n)];
                      break;
                    case 2162700:
                      Pe(e, t, n, l);
                      break;
                    case 67174411:
                      return Ue(e, t, undefined, r);
                    case 67108877:
                      return Be(e, t, r);
                    default:
                      e.report(30, x[e.getToken() & 255]);
                  }
                }
                if (!a) {
                  o = function (e, t) {
                    Q(e, t, 209011);
                    if (e.getToken() !== 134283267) {
                      e.report(105, "Import");
                    }
                    return lt(e, t);
                  }(e, t);
                }
              }
              const u = i({
                type: "ImportDeclaration",
                specifiers: l,
                source: o,
                attributes: Qe(e, t)
              }, e.features & 2 || e.features & 4 ? {
                phase: s
              } : null);
              K(e, t | 32);
              return e.finishNode(u, r);
            }(e, t, n);
            break;
          default:
            r = ye(e, t, n, undefined, {}, 4);
        }
        return r;
      }
      function ye(e, t, n, r, o, i = 2) {
        const a = e.tokenStart;
        if (e.leadingDecorators.decorators.length && e.getToken() !== 86094) {
          e.report(172);
        }
        switch (e.getToken()) {
          case 86104:
            return ut(e, t, n, r, 1, 0, 0, a, i);
          case 133:
            if (!(e.features & 1)) {
              e.report(30, "@");
            }
          case 86094:
            return wt(e, t, n, r, 0);
          case 86090:
            return Oe(e, t, n, r, 16);
          case 241737:
            return function (e, t, n, r, o) {
              const {
                tokenValue: i,
                tokenStart: a,
                currentLocation: s
              } = e;
              const c = e.getToken();
              let l = ct(e, t);
              if (e.getToken() & 2240512 && ~e.getToken() & 20480) {
                const o = Ne(e, t, n, r, 8);
                K(e, t | 32);
                return e.finishNode({
                  type: "VariableDeclaration",
                  kind: "let",
                  declarations: o
                }, a);
              }
              e.assignable = 1;
              if (t & 1) {
                e.report(85);
              }
              if (e.getToken() === 21) {
                return Se(e, t, n, r, {}, i, l, c, 0, a, o);
              }
              if (e.getToken() === 10) {
                let n;
                if (e.options.lexical) {
                  n = he(e, t, i, a, s);
                }
                e.flags = (e.flags | 128) ^ 128;
                l = _t(e, t, n, r, [l], 0, a);
              } else {
                l = Ye(e, t, r, l, 0, 0, a);
                l = je(e, t, r, 0, 0, a, l);
              }
              if (e.getToken() === 18) {
                l = Ve(e, t, r, 0, a, l);
              }
              return Te(e, t, l, a);
            }(e, t, n, r, i);
          case 209013:
            return function (e, t, n, r, o, i) {
              const {
                tokenStart: a,
                tokenValue: s,
                currentLocation: c
              } = e;
              const l = e.getToken();
              const u = ct(e, t);
              if (!(e.flags & 1) && Ce(e.getToken())) {
                if (!!(i & 4) && !!(t & 8) && !(t & 2) && !(t & 4096)) {
                  e.report(30, x[e.getToken() & 255]);
                }
                return Oe(e, t, n, r, 16, i, "using", a, 1);
              }
              e.assignable = 1;
              if (e.getToken() === 10) {
                let n;
                if (e.options.lexical) {
                  n = he(e, t, s, a, c);
                }
                e.flags = (e.flags | 128) ^ 128;
                return Te(e, t, _t(e, t, n, r, [u], 0, a), a);
              }
              return be(e, t, n, r, o, 1, u, l, s, a, i);
            }(e, t, n, r, o, i);
          case 209006:
            if ((t & 2048 || t & 2 && t & 8) && function (e) {
              const {
                index: t,
                source: n
              } = e;
              let r = t;
              while (r < e.end) {
                const t = n.charCodeAt(r);
                if (t === 10 || t === 13 || t === 8232 || t === 8233) {
                  return false;
                }
                if (/\s/u.test(n[r])) {
                  r++;
                } else {
                  if (t !== 47 || n.charCodeAt(r + 1) !== 42) {
                    break;
                  }
                  for (r += 2; r < e.end;) {
                    const e = n.charCodeAt(r);
                    if (e === 10 || e === 13 || e === 8232 || e === 8233) {
                      return false;
                    }
                    if (e === 42 && n.charCodeAt(r + 1) === 47) {
                      r += 2;
                      break;
                    }
                    r++;
                  }
                }
              }
              if (n.slice(r, r + 5) !== "using") {
                return false;
              }
              const o = n.codePointAt(r + 5);
              return o === undefined || o !== 92 && !u(o);
            }(e)) {
              return function (e, t, n, r, o, i) {
                const a = e.tokenStart;
                let s;
                if (t & 524288) {
                  e.report(179);
                }
                q(e, t | 32);
                if (e.flags & 1 || e.getToken() !== 209013) {
                  s = qe(e, t, r, 0, 0, 1);
                } else {
                  const o = e.tokenStart;
                  const c = ct(e, t);
                  if (!(e.flags & 1) && Ce(e.getToken())) {
                    return Oe(e, t, n, r, 16, i, "await using", a, 1);
                  }
                  s = Ye(e, t, r, c, 0, 0, o);
                }
                if (e.getToken() === 8391735) {
                  e.report(33);
                }
                e.assignable = 2;
                const c = e.finishNode({
                  type: "AwaitExpression",
                  argument: s
                }, a);
                return be(e, t, n, r, o, 0, c, 1048576, "", a, i);
              }(e, t, n, r, o, i);
            } else {
              return ke(e, t, n, r, o, 1, i);
            }
          case 20564:
            e.report(103, "export");
          case 86106:
            q(e, t);
            switch (e.getToken()) {
              case 67174411:
                return Ue(e, t, r, a);
              case 67108877:
                return Be(e, t, a);
              default:
                e.report(103, "import");
            }
          case 209005:
            return xe(e, t, n, r, o, 1, i);
          default:
            return ke(e, t, n, r, o, 1, i);
        }
      }
      function ke(e, t, n, r, o, i, a = 0) {
        switch (e.getToken()) {
          case 86088:
            return Ie(e, t, n, r);
          case 20572:
            return function (e, t, n) {
              if (!(t & 4096)) {
                e.report(92);
              }
              const r = e.tokenStart;
              q(e, t | 32);
              const o = e.flags & 1 || e.getToken() & 1048576 ? null : He(e, t, n, 0, 1, e.tokenStart);
              K(e, t | 32);
              return e.finishNode({
                type: "ReturnStatement",
                argument: o
              }, r);
            }(e, t, r);
          case 20569:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t);
              Q(e, t | 32, 67174411);
              e.assignable = 1;
              const a = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              const s = Ee(e, t, n, r, o);
              let c = null;
              if (e.getToken() === 20563) {
                q(e, t | 32);
                c = Ee(e, t, n, r, o);
              }
              return e.finishNode({
                type: "IfStatement",
                test: a,
                consequent: s,
                alternate: c
              }, i);
            }(e, t, n, r, o);
          case 20567:
            return function (e, t, n, r, o, i) {
              const a = e.tokenStart;
              q(e, t);
              const s = ((t & 2048) > 0 || (t & 2) > 0 && (t & 8) > 0) && J(e, t, 209006);
              Q(e, t | 32, 67174411);
              n = (i = n) === null || i === undefined ? undefined : i.createChildScope(1);
              let c;
              let l;
              let u = null;
              let d = null;
              let f = 0;
              let p = null;
              let h = e.getToken() === 86088 || e.getToken() === 241737 || e.getToken() === 86090 || e.getToken() === 209013;
              let g = false;
              const {
                tokenStart: m
              } = e;
              const v = e.getToken();
              if (h) {
                if (v === 241737) {
                  p = ct(e, t);
                  if (e.getToken() & 2240512 && ~e.getToken() & 20480) {
                    p = e.finishNode({
                      type: "VariableDeclaration",
                      kind: "let",
                      declarations: Ne(e, t | 131072, n, r, 8, 32)
                    }, m);
                    e.assignable = 1;
                  } else if (t & 1) {
                    e.report(67);
                  } else {
                    h = false;
                    e.assignable = 1;
                    p = Ye(e, t, r, p, 0, 0, m);
                    if (e.getToken() === 471156) {
                      e.report(117);
                    }
                  }
                } else if (v === 209013) {
                  const o = ct(e, t);
                  if (e.flags & 1 || !Ce(e.getToken())) {
                    h = false;
                    e.assignable = 1;
                    p = Ye(e, t, r, o, 0, 0, m);
                  } else if (e.getToken() === 471156) {
                    const i = e.tokenStart;
                    const a = e.currentLocation;
                    const s = e.getToken();
                    const l = e.tokenValue;
                    const u = ct(e, t);
                    if (e.getToken() !== 1077936155 && e.getToken() !== 8673330 && e.getToken() !== 1074790417 && e.getToken() !== 18) {
                      h = false;
                      g = true;
                      e.assignable = 1;
                      p = o;
                    } else {
                      var y;
                      c = "using";
                      ee(e, t, 16, s, 0);
                      if ((y = n) !== null && y !== undefined) {
                        y.addBlockName(t, l, 16, i, a, 32);
                      }
                      let o = null;
                      if (e.getToken() === 1077936155) {
                        q(e, t | 32);
                        o = Me(e, t | 131072, r, 1, 0, e.tokenStart);
                        if (!(~e.getToken() & 262144)) {
                          throw new S(i, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
                        }
                      } else if (e.getToken() !== 8673330) {
                        e.report(59, c);
                      }
                      const d = [e.finishNode({
                        type: "VariableDeclarator",
                        id: u,
                        init: o
                      }, i)];
                      const f = e.options.lexical ? new Set([l]) : undefined;
                      while (J(e, t | 131072, 18)) {
                        const o = De(e, t | 131072, n, r, 16, 32, c);
                        if (f) {
                          const {
                            name: t
                          } = o.id;
                          if (f.has(t)) {
                            e.report(147, t);
                          }
                          f.add(t);
                        }
                        d.push(o);
                      }
                      if (d.length > 1 && e.getToken() & 262144) {
                        e.report(61, x[e.getToken() & 255]);
                      }
                      p = e.finishNode({
                        type: "VariableDeclaration",
                        kind: c,
                        declarations: d
                      }, m);
                      e.assignable = 1;
                    }
                  } else {
                    c = "using";
                    p = e.finishNode({
                      type: "VariableDeclaration",
                      kind: c,
                      declarations: Ne(e, t | 131072, n, r, 16, 32, c)
                    }, m);
                    e.assignable = 1;
                  }
                } else {
                  q(e, t);
                  p = e.finishNode(v === 86088 ? {
                    type: "VariableDeclaration",
                    kind: "var",
                    declarations: Ne(e, t | 131072, n, r, 4, 32)
                  } : {
                    type: "VariableDeclaration",
                    kind: "const",
                    declarations: Ne(e, t | 131072, n, r, 16, 32)
                  }, m);
                  e.assignable = 1;
                }
              } else if (v === 209006 && (t & 2048 || t & 2 && t & 8)) {
                let o;
                if (t & 524288) {
                  e.report(179);
                }
                q(e, t | 32);
                if (e.flags & 1 || e.getToken() !== 209013) {
                  o = qe(e, t, r, 0, 0, 1);
                } else {
                  const i = e.tokenStart;
                  const a = ct(e, t);
                  if (e.flags & 1 || !Ce(e.getToken())) {
                    o = Ye(e, t, r, a, 0, 0, i);
                  } else {
                    c = "await using";
                    h = true;
                    p = e.finishNode({
                      type: "VariableDeclaration",
                      kind: c,
                      declarations: Ne(e, t | 131072, n, r, 16, 32, c)
                    }, m);
                    e.assignable = 1;
                  }
                }
                if (!h) {
                  if (e.getToken() === 8391735) {
                    e.report(33);
                  }
                  e.assignable = 2;
                  p = e.finishNode({
                    type: "AwaitExpression",
                    argument: o
                  }, m);
                }
              } else if (s && v === 209005) {
                const n = ct(e, t);
                e.assignable = 1;
                p = Ye(e, t | 131072, r, n, 0, 0, m);
              } else if (v === 1074790417) {
                if (s) {
                  e.report(82);
                }
              } else if (~v & 2097152) {
                p = qe(e, t | 131072, r, 1, 0, 1);
              } else {
                const n = e.tokenStart;
                p = v === 2162700 ? mt(e, t, undefined, r, 1, 0, 0, 2, 32) : ft(e, t, undefined, r, 1, 0, 0, 2, 32);
                f = e.destructible;
                if (f & 64) {
                  e.report(63);
                }
                e.assignable = f & 16 ? 2 : 1;
                p = Ye(e, t | 131072, r, p, 0, 0, n);
              }
              if (g || !(~e.getToken() & 262144)) {
                if (g || e.getToken() === 471156) {
                  if (e.assignable & 2) {
                    e.report(80, s ? "await" : "of");
                  }
                  Z(e, p);
                  if (!g) {
                    q(e, t | 32);
                  }
                  l = Me(e, t, r, 1, 0, e.tokenStart);
                  Q(e, t | 32, 16);
                  const i = Ae(e, t, n, r, o);
                  return e.finishNode({
                    type: "ForOfStatement",
                    left: p,
                    right: l,
                    body: i,
                    await: s
                  }, a);
                }
                if (c) {
                  e.report(30, "in");
                }
                if (e.assignable & 2) {
                  e.report(80, "in");
                }
                Z(e, p);
                q(e, t | 32);
                if (s) {
                  e.report(82);
                }
                l = He(e, t, r, 0, 1, e.tokenStart);
                Q(e, t | 32, 16);
                const i = Ae(e, t, n, r, o);
                return e.finishNode({
                  type: "ForInStatement",
                  body: i,
                  left: p,
                  right: l
                }, a);
              }
              if (s) {
                e.report(82);
              }
              if (!h) {
                if (f & 8 && e.getToken() !== 1077936155) {
                  e.report(80, "loop");
                }
                p = je(e, t | 131072, r, 0, 0, m, p);
              }
              if (e.getToken() === 18) {
                p = Ve(e, t, r, 0, m, p);
              }
              Q(e, t | 32, 1074790417);
              if (e.getToken() !== 1074790417) {
                u = He(e, t, r, 0, 1, e.tokenStart);
              }
              Q(e, t | 32, 1074790417);
              if (e.getToken() !== 16) {
                d = He(e, t, r, 0, 1, e.tokenStart);
              }
              Q(e, t | 32, 16);
              const k = Ae(e, t, n, r, o);
              return e.finishNode({
                type: "ForStatement",
                init: p,
                test: u,
                update: d,
                body: k
              }, a);
            }(e, t, n, r, o);
          case 20562:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t | 32);
              const a = Ae(e, t, n, r, o);
              Q(e, t, 20578);
              Q(e, t | 32, 67174411);
              const s = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              J(e, t | 32, 1074790417);
              return e.finishNode({
                type: "DoWhileStatement",
                body: a,
                test: s
              }, i);
            }(e, t, n, r, o);
          case 20578:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t);
              Q(e, t | 32, 67174411);
              const a = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              const s = Ae(e, t, n, r, o);
              return e.finishNode({
                type: "WhileStatement",
                test: a,
                body: s
              }, i);
            }(e, t, n, r, o);
          case 86110:
            return function (e, t, n, r, o, i) {
              const a = e.tokenStart;
              q(e, t);
              Q(e, t | 32, 67174411);
              const s = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t, 16);
              Q(e, t, 2162700);
              const c = [];
              let l = 0;
              for (n = (i = n) === null || i === undefined ? undefined : i.createChildScope(8); e.getToken() !== 1074790415;) {
                const {
                  tokenStart: i
                } = e;
                let a = null;
                const s = [];
                if (J(e, t | 32, 20556)) {
                  a = He(e, t, r, 0, 1, e.tokenStart);
                } else {
                  Q(e, t | 32, 20561);
                  if (l) {
                    e.report(89);
                  }
                  l = 1;
                }
                Q(e, t | 32, 21);
                while (e.getToken() !== 20556 && e.getToken() !== 1074790415 && e.getToken() !== 20561) {
                  const i = ye(e, t | 4, n, r, {
                    $: o
                  });
                  if (i.type === "VariableDeclaration" && (i.kind === "using" || i.kind === "await using")) {
                    e.report(30, i.kind);
                  }
                  s.push(i);
                }
                c.push(e.finishNode({
                  type: "SwitchCase",
                  test: a,
                  consequent: s
                }, i));
              }
              Q(e, t | 32, 1074790415);
              return e.finishNode({
                type: "SwitchStatement",
                discriminant: s,
                cases: c
              }, a);
            }(e, t, n, r, o);
          case 1074790417:
            return function (e, t) {
              const n = e.tokenStart;
              q(e, t | 32);
              return e.finishNode({
                type: "EmptyStatement"
              }, n);
            }(e, t);
          case 2162700:
            return _e(e, t, n == null ? undefined : n.createChildScope(), r, o, e.tokenStart);
          case 86112:
            return function (e, t, n) {
              const r = e.tokenStart;
              q(e, t | 32);
              if (e.flags & 1) {
                e.report(90);
              }
              const o = He(e, t, n, 0, 1, e.tokenStart);
              K(e, t | 32);
              return e.finishNode({
                type: "ThrowStatement",
                argument: o
              }, r);
            }(e, t, r);
          case 20555:
            return function (e, t, n) {
              const r = e.tokenStart;
              q(e, t | 32);
              let o = null;
              if (!(e.flags & 1) && e.getToken() & 143360) {
                const {
                  tokenValue: r
                } = e;
                o = ct(e, t | 32);
                if (!re(e, n, r, 0)) {
                  e.report(140, r);
                }
              } else if (!(t & 132)) {
                e.report(69);
              }
              K(e, t | 32);
              return e.finishNode({
                type: "BreakStatement",
                label: o
              }, r);
            }(e, t, o);
          case 20559:
            return function (e, t, n) {
              if (!(t & 128)) {
                e.report(68);
              }
              const r = e.tokenStart;
              q(e, t);
              let o = null;
              if (!(e.flags & 1) && e.getToken() & 143360) {
                const {
                  tokenValue: r
                } = e;
                o = ct(e, t | 32);
                if (!re(e, n, r, 1)) {
                  e.report(140, r);
                }
              }
              K(e, t | 32);
              return e.finishNode({
                type: "ContinueStatement",
                label: o
              }, r);
            }(e, t, o);
          case 20577:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t | 32);
              const a = _e(e, t, n == null ? undefined : n.createChildScope(16), r, {
                $: o
              });
              const {
                tokenStart: s
              } = e;
              const c = J(e, t | 32, 20557) ? function (e, t, n, r, o, i, a, s) {
                let c = null;
                if (J(e, t, 67174411)) {
                  c = Dt(e, t, n = (a = n) === null || a === undefined ? undefined : a.createChildScope(4), r, ~e.getToken() & 2097152 ? 512 : 256);
                  if (e.getToken() === 18) {
                    e.report(86);
                  } else if (e.getToken() === 1077936155) {
                    e.report(87);
                  }
                  Q(e, t | 32, 16);
                }
                const l = _e(e, t, (s = n) === null || s === undefined ? undefined : s.createChildScope(32), r, {
                  $: o
                });
                return e.finishNode({
                  type: "CatchClause",
                  param: c,
                  body: l
                }, i);
              }(e, t, n, r, o, s) : null;
              let l = null;
              if (e.getToken() === 20566) {
                q(e, t | 32);
                l = _e(e, t, n == null ? undefined : n.createChildScope(4), r, {
                  $: o
                });
              }
              if (!c && !l) {
                e.report(88);
              }
              return e.finishNode({
                type: "TryStatement",
                block: a,
                handler: c,
                finalizer: l
              }, i);
            }(e, t, n, r, o);
          case 20579:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t);
              if (t & 1) {
                e.report(91);
              }
              Q(e, t | 32, 67174411);
              const a = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              const s = ke(e, t, n, r, o, 0, 2);
              return e.finishNode({
                type: "WithStatement",
                object: a,
                body: s
              }, i);
            }(e, t, n, r, o);
          case 20560:
            return function (e, t) {
              const n = e.tokenStart;
              q(e, t | 32);
              K(e, t | 32);
              return e.finishNode({
                type: "DebuggerStatement"
              }, n);
            }(e, t);
          case 209005:
            return xe(e, t, n, r, o, 0, a);
          case 20557:
            e.report(164);
          case 20566:
            e.report(165);
          case 86104:
            e.report(t & 1 ? 76 : e.options.webcompat ? 77 : 78);
          case 86094:
            e.report(79);
          default:
            return function (e, t, n, r, o, i, a) {
              const {
                tokenValue: s,
                tokenStart: c
              } = e;
              const l = e.getToken();
              let u;
              if (l === 241737) {
                u = ct(e, t);
                if (t & 1) {
                  e.report(85);
                }
                if (e.getToken() === 69271571) {
                  e.report(84);
                }
              } else {
                u = Xe(e, t, r, 2, 0, 1, 0, 1, e.tokenStart, 0, 1);
              }
              return be(e, t, n, r, o, i, u, l, s, c, a);
            }(e, t, n, r, o, i, a);
        }
      }
      function be(e, t, n, r, o, i, a, s, c, l, u) {
        if (s & 143360 && e.getToken() === 21) {
          return Se(e, t, n, r, o, c, a, s, i, l, u);
        }
        let d = Ye(e, t, r, a, 0, 0, l);
        d = je(e, t, r, 0, 0, l, d);
        if (e.getToken() === 18) {
          d = Ve(e, t, r, 0, l, d);
        }
        return Te(e, t, d, l);
      }
      function _e(e, t, n, r, o, i = e.tokenStart, a = "BlockStatement") {
        const s = [];
        for (Q(e, t | 32, 2162700); e.getToken() !== 1074790415;) {
          s.push(ye(e, t, n, r, {
            $: o
          }));
        }
        Q(e, t | 32, 1074790415);
        return e.finishNode({
          type: a,
          body: s
        }, i);
      }
      function Te(e, t, n, r) {
        K(e, t | 32);
        return e.finishNode({
          type: "ExpressionStatement",
          expression: n
        }, r);
      }
      function Se(e, t, n, r, o, i, a, s, c, l, u) {
        ee(e, t, 0, s, 1);
        (function (e, t, n) {
          let r = t;
          while (r) {
            if (r["$" + n]) {
              e.report(138, n);
            }
            r = r.$;
          }
          t["$" + n] = 1;
        })(e, o, i);
        q(e, t | 32);
        const d = !c || t & 1 || !e.options.webcompat || e.getToken() !== 86104 ? ke(e, t, n, r, o, c, u) : ut(e, t, n == null ? undefined : n.createChildScope(), r, 0, 0, 0, e.tokenStart, u);
        return e.finishNode({
          type: "LabeledStatement",
          label: a,
          body: d
        }, l);
      }
      function xe(e, t, n, r, o, i, a) {
        const {
          tokenValue: s,
          tokenStart: c
        } = e;
        const l = e.getToken();
        let u = ct(e, t);
        if (e.getToken() === 21) {
          return Se(e, t, n, r, o, s, u, l, 1, c, a);
        }
        const d = e.flags & 1;
        if (!d) {
          if (e.getToken() === 86104) {
            if (!i) {
              e.report(125);
            }
            return ut(e, t, n, r, 1, 0, 1, c, a);
          }
          if (ie(t, e.getToken())) {
            u = St(e, t, r, 1, c);
            if (e.getToken() === 18) {
              u = Ve(e, t, r, 0, c, u);
            }
            return Te(e, t, u, c);
          }
        }
        if (e.getToken() === 67174411) {
          u = xt(e, t, r, u, 1, 1, d, c);
        } else {
          if (e.getToken() === 10) {
            ae(e, t, l);
            if (!(~l & 36864)) {
              e.flags |= 256;
            }
            u = kt(e, t | 2048, r, e.tokenValue, u, 0, 1, 0, c);
          }
          e.assignable = 1;
        }
        u = Ye(e, t, r, u, 0, 0, c);
        u = je(e, t, r, 0, 0, c, u);
        e.assignable = 1;
        if (e.getToken() === 18) {
          u = Ve(e, t, r, 0, c, u);
        }
        return Te(e, t, u, c);
      }
      function we(e, t, n, r, o) {
        const i = e.startIndex;
        if (r !== 1074790417) {
          e.assignable = 2;
          n = Ye(e, t, undefined, n, 0, 0, o);
          if (e.getToken() !== 1074790417) {
            n = je(e, t, undefined, 0, 0, o, n);
            if (e.getToken() === 18) {
              n = Ve(e, t, undefined, 0, o, n);
            }
          }
          K(e, t | 32);
        }
        const a = {
          type: "ExpressionStatement",
          expression: n
        };
        if (n.type === "Literal" && typeof n.value == "string") {
          a.directive = e.source.slice(o.index + 1, i - 1);
        }
        return e.finishNode(a, o);
      }
      function Ee(e, t, n, r, o) {
        const {
          tokenStart: i
        } = e;
        if (t & 1 || !e.options.webcompat || e.getToken() !== 86104) {
          return ke(e, t, n, r, {
            $: o
          }, 0);
        } else {
          return ut(e, t, n == null ? undefined : n.createChildScope(), r, 0, 0, 0, i);
        }
      }
      function Ae(e, t, n, r, o) {
        return ke(e, (t | 131072) ^ 131072 | 128, n, r, {
          loop: 1,
          $: o
        }, 0);
      }
      function Ce(e) {
        return !(~e & 143360) && !!(~e & 20480);
      }
      function Oe(e, t, n, r, o, i = 0, a, s = e.tokenStart, c = 0) {
        const l = s;
        if (!c) {
          q(e, t);
        }
        const u = Ne(e, t, n, r, o, i, a);
        K(e, t | 32);
        return e.finishNode({
          type: "VariableDeclaration",
          kind: a ?? (o & 8 ? "let" : "const"),
          declarations: u
        }, l);
      }
      function Ie(e, t, n, r, o = 0) {
        const i = e.tokenStart;
        q(e, t);
        const a = Ne(e, t, n, r, 4, o);
        K(e, t | 32);
        return e.finishNode({
          type: "VariableDeclaration",
          kind: "var",
          declarations: a
        }, i);
      }
      function Ne(e, t, n, r, o, i = 0, a) {
        let s = 1;
        const c = De(e, t, n, r, o, i, a);
        const l = [c];
        const u = a && e.options.lexical ? new Set([c.id.name]) : undefined;
        while (J(e, t, 18)) {
          s++;
          const c = De(e, t, n, r, o, i, a);
          if (u) {
            const {
              name: t
            } = c.id;
            if (u.has(t)) {
              e.report(147, t);
            }
            u.add(t);
          }
          l.push(c);
        }
        if (s > 1 && i & 32 && e.getToken() & 262144) {
          e.report(61, x[e.getToken() & 255]);
        }
        return l;
      }
      function De(e, t, n, r, o, i, a) {
        const {
          tokenStart: s
        } = e;
        const c = e.getToken();
        let l = null;
        if (!!a && !(~c & 2097152)) {
          e.report(50);
        }
        const u = Dt(e, t, n, r, o, i);
        if (e.getToken() === 1077936155) {
          q(e, t | 32);
          l = Me(e, t, r, 1, 0, e.tokenStart, i);
          if (i & 32 && (e.getToken() === 471156 || e.getToken() === 8673330 && (c & 2097152 || !(o & 4) || t & 1 || !e.options.webcompat))) {
            throw new S(s, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
          }
        } else if ((o & 16 || (c & 2097152) > 0) && ~e.getToken() & 262144) {
          e.report(59, a ?? (o & 16 ? "const" : "destructuring"));
        }
        return e.finishNode({
          type: "VariableDeclarator",
          id: u,
          init: l
        }, s);
      }
      function Re(e, t, n) {
        if (!ie(t, e.getToken())) {
          e.report(120);
        }
        if (!(~e.getToken() & 537079808)) {
          e.report(121);
        }
        if (n != null) {
          n.addBlockName(t, e.tokenValue, 8, e.tokenStart, e.currentLocation);
        }
        return ct(e, t);
      }
      function Le(e, t, n) {
        const {
          tokenStart: r
        } = e;
        q(e, t);
        Q(e, t, 77932);
        if (!(~e.getToken() & 134217728)) {
          throw new S(r, e.currentLocation, 30, x[e.getToken() & 255]);
        }
        return e.finishNode({
          type: "ImportNamespaceSpecifier",
          local: Re(e, t, n)
        }, r);
      }
      function Pe(e, t, n, r) {
        for (q(e, t); e.getToken() & 143360 || e.getToken() === 134283267;) {
          let {
            tokenValue: o,
            tokenStart: i,
            currentLocation: a
          } = e;
          const s = i;
          const c = e.getToken();
          const l = tt(e, t);
          let u;
          if (J(e, t, 77932)) {
            if (~e.getToken() & 134217728 && e.getToken() !== 18) {
              ee(e, t, 16, e.getToken(), 0);
            } else {
              e.report(106);
            }
            o = e.tokenValue;
            i = e.tokenStart;
            a = e.currentLocation;
            u = ct(e, t);
          } else if (l.type === "Identifier") {
            ee(e, t, 16, c, 0);
            u = e.cloneIdentifier(l);
          } else {
            e.report(25, x[108]);
          }
          if (n != null) {
            n.addBlockName(t, o, 8, i, a);
          }
          r.push(e.finishNode({
            type: "ImportSpecifier",
            local: u,
            imported: l
          }, s));
          if (e.getToken() !== 1074790415) {
            Q(e, t, 18);
          }
        }
        Q(e, t, 1074790415);
        return r;
      }
      function Be(e, t, n) {
        let r = $e(e, t, e.finishNode({
          type: "Identifier",
          name: "import"
        }, n), n);
        r = Ye(e, t, undefined, r, 0, 0, n);
        r = je(e, t, undefined, 0, 0, n, r);
        if (e.getToken() === 18) {
          r = Ve(e, t, undefined, 0, n, r);
        }
        return Te(e, t, r, n);
      }
      function Ue(e, t, n, r) {
        let o = Je(e, t, n, 0, r);
        o = Ye(e, t, n, o, 0, 0, r);
        if (e.getToken() === 18) {
          o = Ve(e, t, n, 0, r, o);
        }
        return Te(e, t, o, r);
      }
      function Me(e, t, n, r, o, i, a = 0) {
        let s = Xe(e, t, n, 2, 0, r, o, 1, i, a, t & 131072 ? 0 : 1);
        s = Ye(e, t, n, s, o, 0, i);
        return je(e, t, n, o, 0, i, s);
      }
      function Ve(e, t, n, r, o, i) {
        const a = [i];
        while (J(e, t | 32, 18)) {
          a.push(Me(e, t, n, 1, r, e.tokenStart));
        }
        return e.finishNode({
          type: "SequenceExpression",
          expressions: a
        }, o);
      }
      function He(e, t, n, r, o, i) {
        const a = Me(e, t, n, o, r, i);
        if (e.getToken() === 18) {
          return Ve(e, t, n, r, i, a);
        } else {
          return a;
        }
      }
      function je(e, t, n, r, o, i, a) {
        const s = e.getToken();
        if (!(~s & 4194304)) {
          if (e.assignable & 2) {
            e.report(26);
          }
          if (!(~s & 524288) && e.assignable & 4) {
            e.report(26);
          }
          if (!o && s === 1077936155 && a.type === "ArrayExpression" || a.type === "ObjectExpression") {
            Z(e, a);
          }
          q(e, t | 32);
          const c = Me(e, t, n, 1, r, e.tokenStart);
          e.assignable = 2;
          return e.finishNode(o ? {
            type: "AssignmentPattern",
            left: a,
            right: c
          } : {
            type: "AssignmentExpression",
            left: a,
            operator: x[s & 255],
            right: c
          }, i);
        }
        if (!(~s & 8388608)) {
          a = Ge(e, t, n, r, i, 4, s, a);
        }
        if (J(e, t | 32, 22)) {
          a = ze(e, t, n, a, i);
        }
        return a;
      }
      function Fe(e, t, n, r, o, i, a) {
        const s = e.getToken();
        q(e, t | 32);
        const c = Me(e, t, n, 1, r, e.tokenStart);
        a = e.finishNode(o ? {
          type: "AssignmentPattern",
          left: a,
          right: c
        } : {
          type: "AssignmentExpression",
          left: a,
          operator: x[s & 255],
          right: c
        }, i);
        e.assignable = 2;
        return a;
      }
      function ze(e, t, n, r, o) {
        const i = Me(e, (t | 131072) ^ 131072, n, 1, 0, e.tokenStart);
        Q(e, t | 32, 21);
        e.assignable = 1;
        const a = Me(e, t, n, 1, 0, e.tokenStart);
        e.assignable = 2;
        return e.finishNode({
          type: "ConditionalExpression",
          test: r,
          consequent: i,
          alternate: a
        }, o);
      }
      function Ge(e, t, n, r, o, i, a, s) {
        const c = -((t & 131072) > 0) & 8673330;
        let l;
        let u;
        for (e.assignable = 2; e.getToken() & 8388608 && (l = e.getToken(), u = l & 3840, (l & 524288 && a & 268435456 || a & 524288 && l & 268435456) && e.report(167), !(u + ((l === 8391735) << 8) - ((c === l) << 12) <= i));) {
          q(e, t | 32);
          s = e.finishNode({
            type: l & 524288 || l & 268435456 ? "LogicalExpression" : "BinaryExpression",
            left: s,
            right: Ge(e, t, n, r, e.tokenStart, u, l, qe(e, t, n, 0, r, 1, !(t & 131072) && u < 2048 ? 1 : 0)),
            operator: x[l & 255]
          }, o);
        }
        if (e.getToken() === 1077936155) {
          e.report(26);
        }
        return s;
      }
      function We(e, t, n, r, o, i, a = 0) {
        const {
          tokenStart: s
        } = e;
        e.flags &= -4161;
        Q(e, t | 32, 2162700);
        const c = [];
        if (e.getToken() !== 1074790415) {
          while (e.getToken() === 134283267) {
            const {
              index: n,
              tokenStart: r,
              tokenIndex: o,
              tokenValue: a
            } = e;
            const s = e.getToken();
            const l = lt(e, t);
            if (X(e, n, o, a)) {
              t |= 1;
              if (e.flags & 128) {
                throw new S(r, e.currentLocation, 66);
              }
              if (e.flags & 64) {
                throw new S(r, e.currentLocation, 9);
              }
              if (e.flags & 4096) {
                throw new S(r, e.currentLocation, 15);
              }
              if (i != null) {
                i.reportScopeError();
              }
            }
            c.push(we(e, t, l, s, r));
          }
          if (t & 1 && (o && (~o & 537079808 || e.report(121), ~o & 36864 || e.report(40)), e.flags & 512 && e.report(121), e.flags & 256)) {
            if (e.strictReservedRange) {
              throw new S(e.strictReservedRange[0], e.strictReservedRange[1], 120);
            }
            e.report(120);
          }
        }
        e.flags = (e.flags | 4928) ^ 4928;
        e.destructible = (e.destructible | 256) ^ 256;
        while (e.getToken() !== 1074790415) {
          c.push(ye(e, t, n, r, {}, 4));
        }
        Q(e, a & 24 ? t | 32 : t, 1074790415);
        e.flags &= -4289;
        if (e.getToken() === 1077936155) {
          e.report(26);
        }
        return e.finishNode({
          type: "BlockStatement",
          body: c
        }, s);
      }
      function qe(e, t, n, r, o, i, a = 0) {
        const s = e.tokenStart;
        return Ye(e, t, n, Xe(e, t, n, 2, 0, r, o, i, s, 0, a), o, 0, s);
      }
      function Ye(e, t, n, r, o, i, a) {
        if (~e.getToken() & 33619968 || e.flags & 1) {
          if (!(~e.getToken() & 67108864)) {
            t = (t | 131072) ^ 131072;
            switch (e.getToken()) {
              case 67108877:
                {
                  q(e, (t | 262152) ^ 8);
                  if (t & 16 && e.getToken() === 131 && e.tokenValue === "super") {
                    e.report(175);
                  }
                  e.assignable = ~e.flags & 2048 ? 1 : 2;
                  const o = Ke(e, t | 64, n, 1);
                  r = e.finishNode({
                    type: "MemberExpression",
                    object: r,
                    computed: false,
                    property: o,
                    optional: false
                  }, a);
                  break;
                }
              case 69271571:
                {
                  if (!(~e.flags & 8192)) {
                    e.flags = (e.flags | 8192) ^ 8192;
                    return r;
                  }
                  let i = false;
                  if (!(~e.flags & 2048)) {
                    i = true;
                    e.flags = (e.flags | 2048) ^ 2048;
                  }
                  q(e, t | 32);
                  const {
                    tokenStart: s
                  } = e;
                  const c = He(e, t, n, o, 1, s);
                  Q(e, t, 20);
                  e.assignable = i ? 2 : 1;
                  r = e.finishNode({
                    type: "MemberExpression",
                    object: r,
                    computed: true,
                    property: c,
                    optional: false
                  }, a);
                  if (i) {
                    e.flags |= 2048;
                  }
                  break;
                }
              case 67174411:
                {
                  if (!(~e.flags & 1024)) {
                    e.flags = (e.flags | 1024) ^ 1024;
                    return r;
                  }
                  let i = false;
                  if (!(~e.flags & 2048)) {
                    i = true;
                    e.flags = (e.flags | 2048) ^ 2048;
                  }
                  const s = st(e, t, n, o);
                  if (t & 1 || !e.options.webcompat) {
                    e.assignable = 2;
                  } else {
                    e.assignable = 4;
                  }
                  r = e.finishNode({
                    type: "CallExpression",
                    callee: r,
                    arguments: s,
                    optional: false
                  }, a);
                  if (i) {
                    e.flags |= 2048;
                  }
                  break;
                }
              case 67108991:
                q(e, (t | 262152) ^ 8);
                e.flags |= 2048;
                e.assignable = 2;
                r = function (e, t, n, r, o) {
                  let i;
                  let a = false;
                  if ((e.getToken() === 69271571 || e.getToken() === 67174411) && !(~e.flags & 2048)) {
                    a = true;
                    e.flags = (e.flags | 2048) ^ 2048;
                  }
                  if (e.getToken() === 69271571) {
                    q(e, t | 32);
                    const {
                      tokenStart: a
                    } = e;
                    const s = He(e, t, n, 0, 1, a);
                    Q(e, t, 20);
                    e.assignable = 2;
                    i = e.finishNode({
                      type: "MemberExpression",
                      object: r,
                      computed: true,
                      optional: true,
                      property: s
                    }, o);
                  } else if (e.getToken() === 67174411) {
                    const a = st(e, t, n, 0);
                    if (t & 1 || !e.options.webcompat) {
                      e.assignable = 2;
                    } else {
                      e.assignable = 4;
                    }
                    i = e.finishNode({
                      type: "CallExpression",
                      callee: r,
                      arguments: a,
                      optional: true
                    }, o);
                  } else {
                    const a = Ke(e, t, n, 1);
                    e.assignable = 2;
                    i = e.finishNode({
                      type: "MemberExpression",
                      object: r,
                      computed: false,
                      optional: true,
                      property: a
                    }, o);
                  }
                  if (a) {
                    e.flags |= 2048;
                  }
                  return i;
                }(e, t, n, r, a);
                break;
              default:
                if (!(~e.flags & 2048)) {
                  e.report(168);
                }
                e.assignable = 2;
                r = e.finishNode({
                  type: "TaggedTemplateExpression",
                  tag: r,
                  quasi: e.getToken() === 67174408 ? ot(e, t | 64, n) : rt(e, t)
                }, a);
            }
            r = Ye(e, t, n, r, 0, 1, a);
          }
        } else {
          r = function (e, t, n, r) {
            if (e.assignable & 2) {
              e.report(55);
            }
            const o = e.getToken();
            q(e, t);
            e.assignable = 2;
            return e.finishNode({
              type: "UpdateExpression",
              argument: n,
              operator: x[o & 255],
              prefix: false
            }, r);
          }(e, t, r, a);
        }
        if (i === 0 && !(~e.flags & 2048)) {
          e.flags = (e.flags | 2048) ^ 2048;
          r = e.finishNode({
            type: "ChainExpression",
            expression: r
          }, a);
        }
        return r;
      }
      function Ke(e, t, n, r = 0) {
        if (!(e.getToken() & 143360) && e.getToken() !== -2147483527 && e.getToken() !== -2147483526 && (e.getToken() !== 131 || !r)) {
          e.report(162);
        }
        if (e.getToken() === 131) {
          return It(e, t, n, 0);
        } else {
          return ct(e, t);
        }
      }
      function Xe(e, t, n, r, o, a, s, c, l, u = 0, d = 0) {
        if (!(~e.getToken() & 143360)) {
          switch (e.getToken()) {
            case 209006:
              return function (e, t, n, r, o, i, a) {
                if (o) {
                  if (!(e.destructible & 128) && ((a = e.firstAwaitLocation) === null || a === undefined)) {
                    e.firstAwaitLocation = {
                      start: i,
                      end: e.currentLocation
                    };
                  }
                  e.destructible |= 128;
                }
                if (t & 524288) {
                  e.report(179);
                }
                const s = yt(e, t, n);
                if (s.type === "ArrowFunctionExpression" || !(e.getToken() & 65536)) {
                  if (t & 2048) {
                    throw new S(i, e.startPosition, 178);
                  }
                  if (t & 2) {
                    throw new S(i, e.startPosition, 112);
                  }
                  if (t & 8192 && t & 2048) {
                    throw new S(i, e.startPosition, 112);
                  }
                  return s;
                }
                if (t & 8192) {
                  throw new S(i, e.startPosition, 31);
                }
                if (t & 2048 || t & 2 && t & 8) {
                  if (r) {
                    throw new S(i, e.startPosition, 0);
                  }
                  const o = qe(e, t, n, 0, 0, 1);
                  if (e.getToken() === 8391735) {
                    e.report(33);
                  }
                  e.assignable = 2;
                  return e.finishNode({
                    type: "AwaitExpression",
                    argument: o
                  }, i);
                }
                if (t & 2) {
                  throw new S(i, e.startPosition, 98);
                }
                return s;
              }(e, t, n, o, s, l);
            case 241771:
              return function (e, t, n, r, o, i) {
                if (r) {
                  e.destructible |= 256;
                }
                if (t & 1024) {
                  q(e, t | 32);
                  if (t & 8192) {
                    e.report(32);
                  }
                  if (!o) {
                    e.report(26);
                  }
                  if (e.getToken() === 22) {
                    e.report(126);
                  }
                  let r = null;
                  let a = false;
                  if (e.flags & 1) {
                    if (e.getToken() === 8391476) {
                      e.report(30, x[e.getToken() & 255]);
                    }
                  } else {
                    a = J(e, t | 32, 8391476);
                    if (e.getToken() & 77824 || a) {
                      r = Me(e, t, n, 1, 0, e.tokenStart);
                    }
                  }
                  e.assignable = 2;
                  return e.finishNode({
                    type: "YieldExpression",
                    argument: r,
                    delegate: a
                  }, i);
                }
                if (t & 1) {
                  e.report(97, "yield");
                }
                return yt(e, t, n);
              }(e, t, n, s, a, l);
            case 209005:
              return function (e, t, n, r, o, i, a, s) {
                const c = e.getToken();
                const l = ct(e, t);
                const {
                  flags: u
                } = e;
                if (!(u & 1)) {
                  if (e.getToken() === 86104) {
                    return dt(e, t, n, 1, r, s);
                  }
                  if (ie(t, e.getToken())) {
                    if (!o) {
                      e.report(0);
                    }
                    if (!(~e.getToken() & 36864)) {
                      e.flags |= 256;
                    }
                    return St(e, t, n, i, s);
                  }
                }
                if (a || e.getToken() !== 67174411) {
                  if (e.getToken() === 10) {
                    ae(e, t, c);
                    if (a) {
                      e.report(51);
                    }
                    if (!(~c & 36864)) {
                      e.flags |= 256;
                    }
                    return kt(e, t, n, e.tokenValue, l, a, i, 0, s);
                  } else {
                    e.assignable = 1;
                    return l;
                  }
                } else {
                  return xt(e, t, n, l, i, 1, u, s);
                }
              }(e, t, n, s, c, a, o, l);
          }
          const {
            tokenValue: i
          } = e;
          const d = e.getToken();
          const f = ct(e, t | 64);
          if (e.getToken() === 10) {
            if (!c) {
              e.report(0);
            }
            ae(e, t, d);
            if (!(~d & 36864)) {
              e.flags |= 256;
            }
            return kt(e, t, n, i, f, o, a, 0, l, u);
          } else {
            if (!!(t & 16) && !(t & 32768) && !(t & 8192) && e.tokenValue === "arguments") {
              e.report(132);
            }
            if ((d & 255) == 73) {
              if (t & 1) {
                e.report(115);
              }
              if (r & 24) {
                e.report(100);
              }
            }
            e.assignable = t & 1 && !(~d & 537079808) ? 2 : 1;
            return f;
          }
        }
        if (!(~e.getToken() & 134217728)) {
          return lt(e, t);
        }
        switch (e.getToken()) {
          case 33619993:
          case 33619994:
            return function (e, t, n, r, o, i) {
              if (r) {
                e.report(56);
              }
              if (!o) {
                e.report(0);
              }
              const a = e.getToken();
              q(e, t | 32);
              const s = qe(e, t, n, 0, 0, 1);
              if (e.assignable & 2) {
                e.report(55);
              }
              e.assignable = 2;
              return e.finishNode({
                type: "UpdateExpression",
                argument: s,
                operator: x[a & 255],
                prefix: true
              }, i);
            }(e, t, n, o, c, l);
          case 16863276:
          case 16842798:
          case 16842799:
          case 25233968:
          case 25233969:
          case 16863275:
          case 16863277:
            return function (e, t, n, r, o) {
              if (!r) {
                e.report(0);
              }
              const {
                tokenStart: i
              } = e;
              const a = e.getToken();
              q(e, t | 32);
              const s = qe(e, t, n, 0, o, 1);
              var c;
              if (e.getToken() === 8391735) {
                e.report(33);
              }
              if (t & 1 && a === 16863276) {
                if (s.type === "Identifier") {
                  e.report(123);
                } else if ((c = s).property && c.property.type === "PrivateIdentifier") {
                  e.report(129);
                }
              }
              e.assignable = 2;
              return e.finishNode({
                type: "UnaryExpression",
                operator: x[a & 255],
                argument: s,
                prefix: true
              }, i);
            }(e, t, n, c, s);
          case 86104:
            return dt(e, t, n, 0, s, l);
          case 2162700:
            return function (e, t, n, r, o) {
              const i = mt(e, t, undefined, n, r, o, 0, 2);
              if (e.destructible & 64) {
                e.report(63);
              }
              if (e.destructible & 8) {
                e.report(62);
              }
              return i;
            }(e, t, n, a ? 0 : 1, s);
          case 69271571:
            return function (e, t, n, r, o) {
              const i = ft(e, t, undefined, n, r, o, 0, 2);
              if (e.destructible & 64) {
                e.report(63);
              }
              if (e.destructible & 8) {
                e.report(62);
              }
              return i;
            }(e, t, n, a ? 0 : 1, s);
          case 67174411:
            return function (e, t, n, r, o, i, a, s) {
              e.flags = (e.flags | 128) ^ 128;
              const c = e.tokenStart;
              q(e, t | 262176);
              const l = (s = e.createScopeIfLexical()) === null || s === undefined ? undefined : s.createChildScope(512);
              if (J(e, t = (t | 131072) ^ 131072, 16)) {
                return bt(e, t, l, n, [], r, 0, i, a);
              }
              let u = 0;
              const d = e.destructible & 384;
              e.destructible &= -385;
              const f = e.firstAwaitLocation;
              let p;
              e.firstAwaitLocation = null;
              let h = [];
              let g = 0;
              let m = 0;
              let v = 0;
              const y = e.tokenStart;
              for (e.assignable = 1; e.getToken() !== 16;) {
                const {
                  tokenStart: r,
                  currentLocation: o
                } = e;
                const i = e.getToken();
                if (i & 143360) {
                  if (l != null) {
                    l.addBlockName(t, e.tokenValue, 1, r, o);
                  }
                  if (~i & 537079808) {
                    if (!(~i & 36864)) {
                      v = 1;
                    }
                  } else {
                    m = 1;
                  }
                  p = Xe(e, t, n, 1, 0, 1, 1, 1, r, 0);
                  if (e.getToken() === 16 || e.getToken() === 18) {
                    if (e.assignable & 2) {
                      u |= 16;
                      m = 1;
                    }
                  } else {
                    if (e.getToken() === 1077936155) {
                      m = 1;
                    } else {
                      u |= 16;
                    }
                    p = Ye(e, t, n, p, 1, 0, r);
                    if (e.getToken() !== 16 && e.getToken() !== 18) {
                      p = je(e, t, n, 1, 0, r, p);
                    }
                  }
                } else {
                  if (~i & 2097152) {
                    if (i === 14) {
                      p = ht(e, t, l, n, 16, 1, 0, 1, 0);
                      if (e.destructible & 16) {
                        e.report(74);
                      }
                      m = 1;
                      if (!!g && (e.getToken() === 16 || e.getToken() === 18)) {
                        h.push(p);
                      }
                      u |= 8;
                      break;
                    }
                    u |= 16;
                    p = Me(e, t, n, 1, 1, r);
                    if (!!g && (e.getToken() === 16 || e.getToken() === 18)) {
                      h.push(p);
                    }
                    if (e.getToken() === 18) {
                      if (!g) {
                        g = 1;
                        h = [p];
                      }
                    }
                    if (g) {
                      while (J(e, t | 32, 18)) {
                        h.push(Me(e, t, n, 1, 1, e.tokenStart));
                      }
                      e.assignable = 2;
                      p = e.finishNode({
                        type: "SequenceExpression",
                        expressions: h
                      }, y);
                    }
                    Q(e, t, 16);
                    e.destructible = u | d;
                    if (f) {
                      e.firstAwaitLocation = f;
                    }
                    if (e.options.preserveParens) {
                      return e.finishNode({
                        type: "ParenthesizedExpression",
                        expression: p
                      }, c);
                    } else {
                      return p;
                    }
                  }
                  p = i === 2162700 ? mt(e, t | 262144, l, n, 0, 1, 0, 1) : ft(e, t | 262144, l, n, 0, 1, 0, 1);
                  u |= e.destructible;
                  m = 1;
                  e.assignable = 2;
                  if (e.getToken() !== 16 && e.getToken() !== 18) {
                    if (u & 8) {
                      e.report(124);
                    }
                    p = Ye(e, t, n, p, 0, 0, r);
                    u |= 16;
                    if (e.getToken() !== 16 && e.getToken() !== 18) {
                      p = je(e, t, n, 0, 0, r, p);
                    }
                  }
                }
                if (!!g && (e.getToken() === 16 || e.getToken() === 18)) {
                  h.push(p);
                }
                if (!J(e, t | 32, 18)) {
                  break;
                }
                if (!g) {
                  g = 1;
                  h = [p];
                }
                if (e.getToken() === 16) {
                  u |= 8;
                  break;
                }
              }
              if (g) {
                e.assignable = 2;
                p = e.finishNode({
                  type: "SequenceExpression",
                  expressions: h
                }, y);
              }
              Q(e, t, 16);
              if (u & 16 && u & 8) {
                e.report(153);
              }
              u |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
              if (e.getToken() === 10) {
                if (u & 48) {
                  e.report(49);
                }
                if (t & 2050 && u & 128) {
                  const t = e.firstAwaitLocation;
                  if (t) {
                    throw new S(t.start, t.end, 31);
                  }
                  e.report(31);
                }
                if (t & 1025 && u & 256) {
                  e.report(32);
                }
                if (m) {
                  e.flags |= 128;
                }
                if (v) {
                  e.flags |= 256;
                }
                e.destructible |= d;
                if (f) {
                  e.firstAwaitLocation = f;
                }
                return bt(e, t, l, n, g ? h : [p], r, 0, i, a);
              }
              if (u & 64) {
                e.report(63);
              }
              if (u & 8) {
                e.report(146);
              }
              e.destructible = (e.destructible | 256) ^ 256 | u | d;
              if (f) {
                e.firstAwaitLocation = f;
              }
              if (e.options.preserveParens) {
                return e.finishNode({
                  type: "ParenthesizedExpression",
                  expression: p
                }, c);
              } else {
                return p;
              }
            }(e, t | 64, n, a, 0, l, u);
          case 86021:
          case 86022:
          case 86023:
            return function (e, t) {
              const n = e.tokenStart;
              const r = x[e.getToken() & 255];
              const o = {
                type: "Literal",
                value: e.getToken() === 86023 ? null : r === "true"
              };
              if (e.options.raw) {
                o.raw = r;
              }
              q(e, t);
              e.assignable = 2;
              return e.finishNode(o, n);
            }(e, t);
          case 86111:
            return function (e, t) {
              const {
                tokenStart: n
              } = e;
              q(e, t);
              e.assignable = 2;
              return e.finishNode({
                type: "ThisExpression"
              }, n);
            }(e, t);
          case 65540:
            return function (e, t) {
              const {
                tokenRaw: n,
                tokenRegExp: r,
                tokenValue: o,
                tokenStart: i
              } = e;
              q(e, t);
              e.assignable = 2;
              const a = {
                type: "Literal",
                value: o,
                regex: r
              };
              if (e.options.raw) {
                a.raw = n;
              }
              return e.finishNode(a, i);
            }(e, t);
          case 133:
            if (!(e.features & 1)) {
              e.report(30, "@");
            }
          case 86094:
            return function (e, t, n, r, o) {
              let a = null;
              let s = null;
              const c = Et(e, t, n);
              Q(e, t = (t | 16385) ^ 16384, 86094);
              if (e.getToken() & 4096 && e.getToken() !== 20565) {
                if (ne(e, t, e.getToken())) {
                  e.report(120);
                }
                if (!(~e.getToken() & 537079808)) {
                  e.report(121);
                }
                a = ct(e, t);
              }
              let l = t;
              if (J(e, t | 32, 20565)) {
                s = qe(e, t, n, 0, r, 0);
                l |= 512;
              } else {
                l = (l | 512) ^ 512;
              }
              const u = Ct(e, l, t, undefined, n, 2, r);
              e.assignable = 2;
              return e.finishNode(i({
                type: "ClassExpression",
                id: a,
                superClass: s,
                body: u
              }, e.features & 1 ? {
                decorators: c
              } : null), o);
            }(e, t, n, s, l);
          case 86109:
            return function (e, t) {
              const {
                tokenStart: n
              } = e;
              q(e, t);
              switch (e.getToken()) {
                case 67108991:
                  e.report(169);
                case 67174411:
                  if (!(t & 512)) {
                    e.report(28);
                  }
                  e.assignable = 2;
                  break;
                case 69271571:
                case 67108877:
                  if (!(t & 256)) {
                    e.report(29);
                  }
                  e.assignable = 1;
                  break;
                default:
                  e.report(30, "super");
              }
              return e.finishNode({
                type: "Super"
              }, n);
            }(e, t);
          case 67174409:
            return rt(e, t);
          case 67174408:
            return ot(e, t, n);
          case 86107:
            return function (e, t, n, r) {
              const {
                tokenStart: o
              } = e;
              const i = ct(e, t | 32);
              const {
                tokenStart: a
              } = e;
              if (J(e, t, 67108877)) {
                if (t & 65536 && e.getToken() === 209030) {
                  e.assignable = 2;
                  return function (e, t, n, r) {
                    const o = ct(e, t);
                    return e.finishNode({
                      type: "MetaProperty",
                      meta: n,
                      property: o
                    }, r);
                  }(e, t, i, o);
                }
                e.report(94);
              }
              e.assignable = 2;
              if (!(~e.getToken() & 16842752)) {
                e.report(65, x[e.getToken() & 255]);
              }
              const s = Xe(e, t, n, 2, 1, 0, r, 1, a);
              t = (t | 131072) ^ 131072;
              if (e.getToken() === 67108991) {
                e.report(170);
              }
              const c = function e(t, n, r, o, i, a) {
                const s = t.getToken();
                if (s & 67108864) {
                  if (s === 67108877) {
                    q(t, n | 262144);
                    t.assignable = 1;
                    const i = Ke(t, n, r, 1);
                    return e(t, n, r, t.finishNode({
                      type: "MemberExpression",
                      object: o,
                      computed: false,
                      property: i,
                      optional: false
                    }, a), 0, a);
                  }
                  if (s === 69271571) {
                    q(t, n | 32);
                    const {
                      tokenStart: s
                    } = t;
                    const c = He(t, n, r, i, 1, s);
                    Q(t, n, 20);
                    t.assignable = 1;
                    return e(t, n, r, t.finishNode({
                      type: "MemberExpression",
                      object: o,
                      computed: true,
                      property: c,
                      optional: false
                    }, a), 0, a);
                  }
                  if (s === 67174408 || s === 67174409) {
                    t.assignable = 2;
                    return e(t, n, r, t.finishNode({
                      type: "TaggedTemplateExpression",
                      tag: o,
                      quasi: t.getToken() === 67174408 ? ot(t, n | 64, r) : rt(t, n | 64)
                    }, a), 0, a);
                  }
                }
                return o;
              }(e, t, n, s, r, a);
              e.assignable = 2;
              return e.finishNode({
                type: "NewExpression",
                callee: c,
                arguments: e.getToken() === 67174411 ? st(e, t, n, r) : []
              }, o);
            }(e, t, n, s);
          case 134283389:
            return nt(e, t);
          case 131:
            {
              if (!d) {
                e.report(30, "PrivateField");
              }
              const {
                tokenStart: r
              } = e;
              const o = It(e, t, n, 0);
              if (e.getToken() !== 8673330) {
                throw new S(r, e.startPosition, 151);
              }
              return o;
            }
          case 86106:
            return function (e, t, n, r, o, i) {
              let a = ct(e, t);
              if (e.getToken() === 67108877) {
                return $e(e, t, a, i, n, o, r);
              } else {
                if (r) {
                  e.report(144);
                }
                a = Je(e, t, n, o, i);
                e.assignable = 2;
                return Ye(e, t, n, a, o, 0, i);
              }
            }(e, t, n, o, s, l);
          case 8456256:
            if (e.options.jsx) {
              return Lt(e, t, n, 0, e.tokenStart);
            }
          default:
            if (ie(t, e.getToken())) {
              return yt(e, t, n);
            }
            e.report(30, x[e.getToken() & 255]);
        }
      }
      function $e(e, t, n, r, o, i = 0, a = 0) {
        const s = e.tokenStart;
        const c = e.currentLocation;
        q(e, t);
        const l = e.getToken();
        const u = e.features & 2 && !(l & -2147483648) && e.tokenValue === "defer";
        const d = e.features & 4 && !(l & -2147483648) && e.tokenValue === "source";
        if (u || d) {
          if (a) {
            e.report(144);
          }
          q(e, t);
          const n = Je(e, t, o, i, r, e.tokenValue);
          e.assignable = 2;
          return n;
        }
        if (!(t & 2)) {
          throw new S(s, c, 171);
        }
        if (l !== 209031 && e.tokenValue !== "meta") {
          e.report(176);
        } else if (l & -2147483648) {
          e.report(177);
        }
        e.assignable = 2;
        return e.finishNode({
          type: "MetaProperty",
          meta: n,
          property: ct(e, t)
        }, r);
      }
      function Je(e, t, n, r, o, a = null) {
        Q(e, t | 32, 67174411);
        if (e.getToken() === 14) {
          e.report(145);
        }
        const s = Me(e, t, n, 1, r, e.tokenStart);
        let c = null;
        if (e.getToken() === 18) {
          Q(e, t, 18);
          if (e.getToken() !== 16) {
            c = Me(e, (t | 131072) ^ 131072, n, 1, r, e.tokenStart);
          }
          J(e, t, 18);
        }
        const l = i({
          type: "ImportExpression",
          source: s,
          options: c
        }, e.features & 2 || e.features & 4 ? {
          phase: a
        } : null);
        Q(e, t, 16);
        return e.finishNode(l, o);
      }
      function Qe(e, t) {
        if (!J(e, t, 20579)) {
          return [];
        }
        Q(e, t, 2162700);
        const n = [];
        const r = new Set();
        while (e.getToken() !== 1074790415) {
          const o = e.tokenStart;
          const i = et(e, t);
          Q(e, t, 21);
          const a = Ze(e, t);
          const s = i.type === "Literal" ? i.value : i.name;
          if (r.has(s)) {
            e.report(147, s);
          }
          r.add(s);
          n.push(e.finishNode({
            type: "ImportAttribute",
            key: i,
            value: a
          }, o));
          if (e.getToken() !== 1074790415) {
            Q(e, t, 18);
          }
        }
        Q(e, t, 1074790415);
        return n;
      }
      function Ze(e, t) {
        if (e.getToken() === 134283267) {
          return lt(e, t);
        }
        e.report(30, x[e.getToken() & 255]);
      }
      function et(e, t) {
        if (e.getToken() === 134283267) {
          return lt(e, t);
        } else if (e.getToken() & 143360) {
          return ct(e, t);
        } else {
          e.report(30, x[e.getToken() & 255]);
          return;
        }
      }
      function tt(e, t) {
        if (e.getToken() === 134283267) {
          if (!e.tokenValue.isWellFormed()) {
            e.report(173);
          }
          return lt(e, t);
        } else if (e.getToken() & 143360) {
          return ct(e, t);
        } else {
          e.report(30, x[e.getToken() & 255]);
          return;
        }
      }
      function nt(e, t) {
        const {
          tokenRaw: n,
          tokenValue: r,
          tokenStart: o
        } = e;
        q(e, t);
        e.assignable = 2;
        const i = {
          type: "Literal",
          value: r,
          bigint: String(r)
        };
        if (e.options.raw) {
          i.raw = n;
        }
        return e.finishNode(i, o);
      }
      function rt(e, t) {
        e.assignable = 2;
        const {
          tokenValue: n,
          tokenRaw: r,
          tokenStart: o
        } = e;
        Q(e, t, 67174409);
        const i = [it(e, n, r, o, true)];
        return e.finishNode({
          type: "TemplateLiteral",
          expressions: [],
          quasis: i
        }, o);
      }
      function ot(e, t, n) {
        t = (t | 131072) ^ 131072;
        const {
          tokenValue: r,
          tokenRaw: o,
          tokenStart: i
        } = e;
        Q(e, t & -65 | 32, 67174408);
        const a = [it(e, r, o, i, false)];
        const s = [He(e, t & -65, n, 0, 1, e.tokenStart)];
        for (e.getToken() !== 1074790415 && e.report(83); e.setToken(G(e, t), true) !== 67174409;) {
          const {
            tokenValue: r,
            tokenRaw: o,
            tokenStart: i
          } = e;
          Q(e, t & -65 | 32, 67174408);
          a.push(it(e, r, o, i, false));
          s.push(He(e, t, n, 0, 1, e.tokenStart));
          if (e.getToken() !== 1074790415) {
            e.report(83);
          }
        }
        {
          const {
            tokenValue: n,
            tokenRaw: r,
            tokenStart: o
          } = e;
          Q(e, t, 67174409);
          a.push(it(e, n, r, o, true));
        }
        e.assignable = 2;
        return e.finishNode({
          type: "TemplateLiteral",
          expressions: s,
          quasis: a
        }, i);
      }
      function it(e, t, n, r, o) {
        const i = e.finishNode({
          type: "TemplateElement",
          value: {
            cooked: t,
            raw: n
          },
          tail: o
        }, r);
        const a = o ? 1 : 2;
        const {
          ranges: s
        } = e.options;
        if (s) {
          if (s.start) {
            i.start += 1;
          }
          if (s.end) {
            i.end -= a;
          }
          if (s.range) {
            i.range[0] += 1;
            i.range[1] -= a;
          }
        }
        if (e.options.loc) {
          i.loc.start.column += 1;
          i.loc.end.column -= a;
        }
        return i;
      }
      function at(e, t, n) {
        const r = e.tokenStart;
        Q(e, (t = (t | 131072) ^ 131072) | 32, 14);
        const o = Me(e, t, n, 1, 0, e.tokenStart);
        e.assignable = 1;
        return e.finishNode({
          type: "SpreadElement",
          argument: o
        }, r);
      }
      function st(e, t, n, r) {
        q(e, t | 32);
        const o = [];
        if (e.getToken() === 16) {
          q(e, t | 64);
          return o;
        }
        while (e.getToken() !== 16 && (e.getToken() === 14 ? o.push(at(e, t, n)) : o.push(Me(e, t, n, 1, r, e.tokenStart)), e.getToken() === 18) && (q(e, t | 32), e.getToken() !== 16));
        Q(e, t | 64, 16);
        return o;
      }
      function ct(e, t) {
        const {
          tokenValue: n,
          tokenStart: r
        } = e;
        const o = n === "await" && !(e.getToken() & -2147483648);
        q(e, t | (o ? 32 : 0));
        return e.finishNode({
          type: "Identifier",
          name: n
        }, r);
      }
      function lt(e, t) {
        const {
          tokenValue: n,
          tokenRaw: r,
          tokenStart: o
        } = e;
        if (e.getToken() === 134283389) {
          return nt(e, t);
        }
        const i = {
          type: "Literal",
          value: n
        };
        if (e.options.raw) {
          i.raw = r;
        }
        q(e, t);
        e.assignable = 2;
        return e.finishNode(i, o);
      }
      function ut(e, t, n, r, o, i, a, s, c = 0) {
        var l;
        var u;
        q(e, t | 32);
        const d = o ? $(e, t, 8391476) : 0;
        let f;
        let p = null;
        let h = n ? e.createScope() : undefined;
        if (e.getToken() === 67174411) {
          if (!(i & 1)) {
            e.report(39, "Function");
          }
        } else {
          var g;
          const r = !(c & 4) || t & 8 && t & 2 ? (a ? 1024 : 0) | 64 | (d ? 1024 : 0) : 4;
          te(e, t, e.getToken());
          if (n) {
            n.addVarOrBlock(t, e.tokenValue, r, e.tokenStart, e.currentLocation, c);
            h = (g = h) === null || g === undefined ? undefined : g.createChildScope(128);
            if (i && i & 2) {
              e.declareUnboundVariable(e.tokenValue);
            }
          }
          f = e.getToken();
          if (e.getToken() & 143360) {
            p = ct(e, t);
          } else {
            e.report(30, x[e.getToken() & 255]);
          }
        }
        {
          const e = 28416;
          t = (t | e) ^ e | 65536 | (a ? 2048 : 0) | (d ? 1024 : 0) | (d ? 0 : 262144);
        }
        h = (l = h) === null || l === undefined ? undefined : l.createChildScope(256);
        const m = Tt(e, t & -524289 | 8192, h, r, 0, 1);
        const v = 524428;
        const y = We(e, (t | v) ^ v | 36864, (u = h) === null || u === undefined ? undefined : u.createChildScope(64), r, f, h, 8);
        return e.finishNode({
          type: "FunctionDeclaration",
          id: p,
          params: m,
          body: y,
          async: a === 1,
          generator: d === 1
        }, s);
      }
      function dt(e, t, n, r, o, i) {
        var a;
        var s;
        var c;
        q(e, t | 32);
        const l = $(e, t, 8391476);
        const u = (r ? 2048 : 0) | (l ? 1024 : 0);
        let d;
        let f = null;
        let p = e.createScopeIfLexical();
        const h = 552704;
        if (e.getToken() & 143360) {
          te(e, (t | h) ^ h | u, e.getToken());
          p = (a = p) === null || a === undefined ? undefined : a.createChildScope(128);
          d = e.getToken();
          f = ct(e, t);
        }
        t = (t | h) ^ h | 65536 | u | (l ? 0 : 262144);
        p = (s = p) === null || s === undefined ? undefined : s.createChildScope(256);
        const g = Tt(e, t & -524289 | 8192, p, n, o, 1);
        const m = We(e, t & -131229 | 36864, (c = p) === null || c === undefined ? undefined : c.createChildScope(64), n, d, p);
        e.assignable = 2;
        return e.finishNode({
          type: "FunctionExpression",
          id: f,
          params: g,
          body: m,
          async: r === 1,
          generator: l === 1
        }, i);
      }
      function ft(e, t, n, r, o, i, a, s, c = 0) {
        const {
          tokenStart: l
        } = e;
        q(e, t | 32);
        const u = [];
        let d = 0;
        for (t = (t | 131072) ^ 131072; e.getToken() !== 20;) {
          if (J(e, t | 32, 18)) {
            u.push(null);
          } else {
            let o;
            const {
              tokenStart: l,
              tokenValue: f,
              currentLocation: p
            } = e;
            const h = e.getToken();
            if (h & 143360) {
              o = Xe(e, t, r, s, 0, 1, i, 1, l);
              if (e.getToken() === 1077936155) {
                if (e.assignable & 2) {
                  e.report(26);
                }
                q(e, t | 32);
                if (n != null) {
                  n.addVarOrBlock(t, f, s, l, p, c);
                }
                const u = Me(e, t, r, 1, i, e.tokenStart);
                o = e.finishNode(a ? {
                  type: "AssignmentPattern",
                  left: o,
                  right: u
                } : {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: o,
                  right: u
                }, l);
                d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
              } else if (e.getToken() === 18 || e.getToken() === 20) {
                if (e.assignable & 2) {
                  d |= 16;
                } else if (n != null) {
                  n.addVarOrBlock(t, f, s, l, p, c);
                }
                d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
              } else {
                d |= s & 1 ? 32 : s & 2 ? 0 : 16;
                o = Ye(e, t, r, o, i, 0, l);
                if (e.getToken() !== 18 && e.getToken() !== 20) {
                  if (e.getToken() !== 1077936155) {
                    d |= 16;
                  }
                  o = je(e, t, r, i, a, l, o);
                } else if (e.getToken() !== 1077936155) {
                  d |= e.assignable & 1 ? 32 : 16;
                }
              }
            } else if (h & 2097152) {
              o = e.getToken() === 2162700 ? mt(e, t, n, r, 0, i, a, s, c) : ft(e, t, n, r, 0, i, a, s, c);
              d |= e.destructible;
              e.assignable = e.destructible & 16 ? 2 : 1;
              if (e.getToken() === 18 || e.getToken() === 20) {
                if (e.assignable & 2) {
                  d |= 16;
                }
              } else if (e.destructible & 8) {
                e.report(71);
              } else {
                o = Ye(e, t, r, o, i, 0, l);
                d = e.assignable & 2 ? 16 : 0;
                if (e.getToken() !== 18 && e.getToken() !== 20) {
                  o = je(e, t, r, i, a, l, o);
                } else if (e.getToken() !== 1077936155) {
                  d |= e.assignable & 1 ? 32 : 16;
                }
              }
            } else if (h === 14) {
              o = ht(e, t, n, r, 20, s, 0, i, a, c);
              d |= e.destructible;
              if (e.getToken() !== 18 && e.getToken() !== 20) {
                e.report(30, x[e.getToken() & 255]);
              }
            } else {
              o = qe(e, t, r, 1, 0, 1);
              if (e.getToken() !== 18 && e.getToken() !== 20) {
                o = je(e, t, r, i, a, l, o);
                if (!(s & 3) && h === 67174411) {
                  d |= 16;
                }
              } else if (e.assignable & 2) {
                d |= 16;
              } else if (h === 67174411) {
                d |= e.assignable & 1 && s & 3 ? 32 : 16;
              }
            }
            u.push(o);
            if (!J(e, t | 32, 18)) {
              break;
            }
            if (e.getToken() === 20) {
              break;
            }
          }
        }
        Q(e, t, 20);
        const f = e.finishNode({
          type: a ? "ArrayPattern" : "ArrayExpression",
          elements: u
        }, l);
        if (!o && e.getToken() & 4194304) {
          return pt(e, t, r, d, i, a, l, f);
        } else {
          e.destructible = d;
          return f;
        }
      }
      function pt(e, t, n, r, o, i, a, s) {
        if (e.getToken() !== 1077936155) {
          e.report(26);
        }
        q(e, t | 32);
        if (r & 16) {
          e.report(26);
        }
        if (!i) {
          Z(e, s);
        }
        const {
          tokenStart: c
        } = e;
        const l = Me(e, t, n, 1, o, c);
        e.destructible = (r | 72) ^ 72 | (e.destructible & 128 ? 128 : 0) | (e.destructible & 256 ? 256 : 0);
        return e.finishNode(i ? {
          type: "AssignmentPattern",
          left: s,
          right: l
        } : {
          type: "AssignmentExpression",
          left: s,
          operator: "=",
          right: l
        }, a);
      }
      function ht(e, t, n, r, o, i, a, s, c, l = 0) {
        const {
          tokenStart: u
        } = e;
        q(e, t | 32);
        let d = null;
        let f = 0;
        const {
          tokenValue: p,
          tokenStart: h,
          currentLocation: g
        } = e;
        let m = e.getToken();
        if (m & 143360) {
          e.assignable = 1;
          d = Xe(e, t, r, i, 0, 1, s, 1, h);
          m = e.getToken();
          d = Ye(e, t, r, d, s, 0, h);
          if (e.getToken() !== 18 && e.getToken() !== o) {
            if (e.assignable & 2 && e.getToken() === 1077936155) {
              e.report(71);
            }
            f |= 16;
            d = je(e, t, r, s, c, h, d);
          }
          if (e.assignable & 2) {
            f |= 16;
          } else if (m === o || m === 18) {
            if (n != null) {
              n.addVarOrBlock(t, p, i, h, g, l);
            }
          } else {
            f |= 32;
          }
          f |= e.destructible & 128 ? 128 : 0;
        } else if (m === o) {
          e.report(41);
        } else {
          if (!(m & 2097152)) {
            f |= 32;
            d = qe(e, t, r, 1, s, 1);
            const {
              tokenStart: n
            } = e;
            const i = e.getToken();
            if (i === 1077936155) {
              if (e.assignable & 2) {
                e.report(26);
              }
              d = je(e, t, r, s, c, n, d);
              f |= 16;
            } else {
              if (i === 18) {
                f |= 16;
              } else if (i !== o) {
                d = je(e, t, r, s, c, n, d);
              }
              f |= e.assignable & 1 ? 32 : 16;
            }
            e.destructible = f;
            if (e.getToken() !== o && e.getToken() !== 18) {
              e.report(163);
            }
            return e.finishNode({
              type: c ? "RestElement" : "SpreadElement",
              argument: d
            }, u);
          }
          d = e.getToken() === 2162700 ? mt(e, t, n, r, 1, s, c, i, l) : ft(e, t, n, r, 1, s, c, i, l);
          m = e.getToken();
          if (m !== 1077936155 && m !== o && m !== 18) {
            if (e.destructible & 8) {
              e.report(71);
            }
            d = Ye(e, t, r, d, s, 0, h);
            f |= e.assignable & 1 ? 0 : 16;
            if (~e.getToken() & 4194304) {
              if (!(~e.getToken() & 8388608)) {
                d = Ge(e, t, r, 1, h, 4, m, d);
              }
              if (J(e, t | 32, 22)) {
                d = ze(e, t, r, d, h);
              }
              f |= e.assignable & 1 ? 32 : 16;
            } else {
              if (e.getToken() !== 1077936155) {
                f |= 16;
              }
              d = je(e, t, r, s, c, h, d);
            }
          } else {
            f |= o === 1074790415 && m !== 1077936155 ? 16 : e.destructible;
          }
        }
        if (e.getToken() !== o) {
          if (i & 1) {
            f |= a ? 16 : 32;
          }
          if (J(e, t | 32, 1077936155)) {
            if (f & 16) {
              e.report(26);
            }
            Z(e, d);
            const n = Me(e, t, r, 1, s, e.tokenStart);
            d = e.finishNode(c ? {
              type: "AssignmentPattern",
              left: d,
              right: n
            } : {
              type: "AssignmentExpression",
              left: d,
              operator: "=",
              right: n
            }, h);
            f = 16;
          } else {
            f |= 16;
          }
        }
        e.destructible = f;
        return e.finishNode({
          type: c ? "RestElement" : "SpreadElement",
          argument: d
        }, u);
      }
      function gt(e, t, n, r, o, i) {
        var a;
        const c = (r & 64 ? 0 : 16896) | 11264;
        t = (t | c) ^ c | (r & 8 ? 1024 : 0) | (r & 16 ? 2048 : 0) | (r & 64 ? 16384 : 0) | 98560;
        let l = e.createScopeIfLexical(256);
        const u = function (e, t, n, r, o, i, a) {
          Q(e, t, 67174411);
          const s = [];
          e.flags = (e.flags | 128) ^ 128;
          e.strictReservedRange = null;
          e.firstAwaitLocation = null;
          if (e.getToken() === 16) {
            if (o & 512) {
              e.report(37, "Setter", "one", "");
            }
            q(e, t);
            return s;
          }
          if (o & 256) {
            e.report(37, "Getter", "no", "s");
          }
          if (o & 512 && e.getToken() === 14) {
            e.report(38);
          }
          t = (t | 131072) ^ 131072;
          let c = 0;
          let l = 0;
          while (e.getToken() !== 18) {
            var u;
            let i = null;
            const {
              tokenStart: d
            } = e;
            if (e.getToken() & 143360) {
              if (!(t & 1)) {
                if (!(~e.getToken() & 36864)) {
                  e.flags |= 256;
                  if ((u = e.strictReservedRange) === null || u === undefined) {
                    e.strictReservedRange = [d, e.currentLocation];
                  }
                }
                if (!(~e.getToken() & 537079808)) {
                  e.flags |= 512;
                }
              }
              i = Rt(e, t, n, o | 1);
            } else {
              if (e.getToken() === 2162700) {
                i = mt(e, t, n, r, 1, a, 1, 1);
              } else if (e.getToken() === 69271571) {
                i = ft(e, t, n, r, 1, a, 1, 1);
              } else if (e.getToken() === 14) {
                i = ht(e, t, n, r, 16, 1, 0, a, 1);
              }
              l = 1;
              if (e.destructible & 48) {
                e.report(50);
              }
            }
            if (e.getToken() === 1077936155) {
              q(e, t | 32);
              l = 1;
              const n = Me(e, t, r, 1, 0, e.tokenStart);
              i = e.finishNode({
                type: "AssignmentPattern",
                left: i,
                right: n
              }, d);
            }
            c++;
            s.push(i);
            if (!J(e, t, 18)) {
              break;
            }
            if (e.getToken() === 16) {
              break;
            }
          }
          if (o & 512 && c !== 1) {
            e.report(37, "Setter", "one", "");
          }
          if (n != null) {
            n.reportScopeError();
          }
          if (l) {
            e.flags |= 128;
          }
          Q(e, t, 16);
          return s;
        }(e, t & -524289 | 8192, l, n, r, 0, o);
        l = (a = l) === null || a === undefined ? undefined : a.createChildScope(64);
        const d = We(e, t & -655373 | 36864, l, n, undefined, l?.parent);
        return e.finishNode({
          type: "FunctionExpression",
          params: u,
          body: d,
          async: (r & 16) > 0,
          generator: (r & 8) > 0,
          id: null
        }, i);
      }
      function mt(e, t, n, r, o, i, a, s, c = 0) {
        const {
          tokenStart: l
        } = e;
        q(e, t);
        const u = [];
        let d = 0;
        let f = 0;
        for (t = (t | 131072) ^ 131072; e.getToken() !== 1074790415;) {
          const {
            tokenValue: o,
            tokenStart: l,
            currentLocation: p
          } = e;
          const h = e.getToken();
          if (h === 14) {
            u.push(ht(e, t, n, r, 1074790415, s, 0, i, a, c));
          } else {
            let g;
            let m = 0;
            let v = null;
            if (e.getToken() & 143360 || e.getToken() === -2147483527 || e.getToken() === -2147483526) {
              if (e.getToken() === -2147483526) {
                d |= 16;
              }
              v = ct(e, t);
              if (e.getToken() === 18 || e.getToken() === 1074790415 || e.getToken() === 1077936155) {
                m |= 4;
                if (t & 1 && !(~h & 537079808)) {
                  d |= 16;
                } else {
                  ee(e, t, s, h, 0);
                }
                if (n != null) {
                  n.addVarOrBlock(t, o, s, l, p, c);
                }
                if (J(e, t | 32, 1077936155)) {
                  d |= 8;
                  const n = Me(e, t, r, 1, i, e.tokenStart);
                  d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
                  g = e.finishNode({
                    type: "AssignmentPattern",
                    left: e.cloneIdentifier(v),
                    right: n
                  }, l);
                } else {
                  d |= (h === 209006 ? 128 : 0) | (h === -2147483527 ? 16 : 0);
                  g = e.cloneIdentifier(v);
                }
              } else if (J(e, t | 32, 21)) {
                const {
                  tokenStart: l,
                  currentLocation: u
                } = e;
                if (o === "__proto__") {
                  f++;
                }
                if (e.getToken() & 143360) {
                  const o = e.getToken();
                  const f = e.tokenValue;
                  g = Xe(e, t, r, s, 0, 1, i, 1, l);
                  const p = e.getToken();
                  g = Ye(e, t, r, g, i, 0, l);
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (p === 1077936155 || p === 1074790415 || p === 18) {
                      d |= e.destructible & 128 ? 128 : 0;
                      if (e.assignable & 2) {
                        d |= 16;
                      } else if (!(~o & 143360) && n != null) {
                        n.addVarOrBlock(t, f, s, l, u, c);
                      }
                    } else {
                      d |= e.assignable & 1 ? 32 : 16;
                    }
                  } else if (~e.getToken() & 4194304) {
                    d |= 16;
                    if (!(~e.getToken() & 8388608)) {
                      g = Ge(e, t, r, 1, l, 4, p, g);
                    }
                    if (J(e, t | 32, 22)) {
                      g = ze(e, t, r, g, l);
                    }
                  } else {
                    if (e.assignable & 2) {
                      d |= 16;
                    } else if (p !== 1077936155) {
                      d |= 32;
                    } else if (n != null) {
                      n.addVarOrBlock(t, f, s, l, u, c);
                    }
                    g = je(e, t, r, i, a, l, g);
                  }
                } else if (~e.getToken() & 2097152) {
                  g = qe(e, t, r, 1, i, 1);
                  d |= e.assignable & 1 ? 32 : 16;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 2 ? 16 : 0;
                    if (e.getToken() !== 18 && h !== 1074790415) {
                      if (e.getToken() !== 1077936155) {
                        d |= 16;
                      }
                      g = je(e, t, r, i, a, l, g);
                    }
                  }
                } else {
                  g = e.getToken() === 69271571 ? ft(e, t, n, r, 0, i, a, s, c) : mt(e, t, n, r, 0, i, a, s, c);
                  d = e.destructible;
                  e.assignable = d & 16 ? 2 : 1;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else if (e.destructible & 8) {
                    e.report(71);
                  } else {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 2 ? 16 : 0;
                    if (~e.getToken() & 4194304) {
                      if (!(~e.getToken() & 8388608)) {
                        g = Ge(e, t, r, 1, l, 4, h, g);
                      }
                      if (J(e, t | 32, 22)) {
                        g = ze(e, t, r, g, l);
                      }
                      d |= e.assignable & 1 ? 32 : 16;
                    } else {
                      g = Fe(e, t, r, i, a, l, g);
                    }
                  }
                }
              } else if (e.getToken() === 69271571) {
                d |= 16;
                if (h === 209005) {
                  m |= 16;
                }
                m |= (h === 209008 ? 256 : h === 209009 ? 512 : 1) | 2;
                v = vt(e, t, r, i);
                d |= e.assignable;
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (e.getToken() & 143360) {
                d |= 16;
                if (h === -2147483527) {
                  e.report(95);
                }
                if (h === 209005) {
                  if (e.flags & 1) {
                    e.report(134);
                  }
                  m |= 17;
                } else if (h === 209008) {
                  m |= 256;
                } else if (h === 209009) {
                  m |= 512;
                } else {
                  e.report(0);
                }
                v = ct(e, t);
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (e.getToken() === 67174411) {
                d |= 16;
                m |= 1;
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (e.getToken() === 8391476) {
                d |= 16;
                if (h === 209008) {
                  e.report(42);
                } else if (h === 209009) {
                  e.report(43);
                } else if (h !== 209005) {
                  e.report(30, x[52]);
                }
                q(e, t);
                m |= (h === 209005 ? 16 : 0) | 9;
                if (e.getToken() & 143360) {
                  v = ct(e, t);
                } else if (~e.getToken() & 134217728) {
                  if (e.getToken() === 69271571) {
                    m |= 2;
                    v = vt(e, t, r, i);
                    d |= e.assignable;
                  } else {
                    e.report(30, x[e.getToken() & 255]);
                  }
                } else {
                  v = lt(e, t);
                }
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (~e.getToken() & 134217728) {
                e.report(135);
              } else {
                if (h === 209005) {
                  m |= 16;
                }
                m |= h === 209008 ? 256 : h === 209009 ? 512 : 1;
                d |= 16;
                v = lt(e, t);
                g = gt(e, t, r, m, i, e.tokenStart);
              }
            } else if (~e.getToken() & 134217728) {
              if (e.getToken() === 69271571) {
                v = vt(e, t, r, i);
                d |= e.destructible & 256 ? 256 : 0;
                m |= 2;
                if (e.getToken() === 21) {
                  q(e, t | 32);
                  const {
                    tokenStart: o,
                    tokenValue: l,
                    currentLocation: u
                  } = e;
                  const f = e.getToken();
                  if (e.getToken() & 143360) {
                    g = Xe(e, t, r, s, 0, 1, i, 1, o);
                    const p = e.getToken();
                    g = Ye(e, t, r, g, i, 0, o);
                    if (~e.getToken() & 4194304) {
                      if (e.getToken() === 18 || e.getToken() === 1074790415) {
                        if (p === 1077936155 || p === 1074790415 || p === 18) {
                          if (e.assignable & 2) {
                            d |= 16;
                          } else if (!(~f & 143360) && n != null) {
                            n.addVarOrBlock(t, l, s, o, u, c);
                          }
                        } else {
                          d |= e.assignable & 1 ? 32 : 16;
                        }
                      } else {
                        d |= 16;
                        g = je(e, t, r, i, a, o, g);
                      }
                    } else {
                      d |= e.assignable & 1 ? p === 1077936155 ? 0 : 32 : 16;
                      g = Fe(e, t, r, i, a, o, g);
                    }
                  } else if (~e.getToken() & 2097152) {
                    g = qe(e, t, r, 1, 0, 1);
                    d |= e.assignable & 1 ? 32 : 16;
                    if (e.getToken() === 18 || e.getToken() === 1074790415) {
                      if (e.assignable & 2) {
                        d |= 16;
                      }
                    } else {
                      g = Ye(e, t, r, g, i, 0, o);
                      d = e.assignable & 1 ? 0 : 16;
                      if (e.getToken() !== 18 && e.getToken() !== 1074790415) {
                        if (e.getToken() !== 1077936155) {
                          d |= 16;
                        }
                        g = je(e, t, r, i, a, o, g);
                      }
                    }
                  } else {
                    g = e.getToken() === 69271571 ? ft(e, t, n, r, 0, i, a, s, c) : mt(e, t, n, r, 0, i, a, s, c);
                    d = e.destructible;
                    e.assignable = d & 16 ? 2 : 1;
                    if (e.getToken() === 18 || e.getToken() === 1074790415) {
                      if (e.assignable & 2) {
                        d |= 16;
                      }
                    } else if (d & 8) {
                      e.report(62);
                    } else {
                      g = Ye(e, t, r, g, i, 0, o);
                      d = e.assignable & 2 ? d | 16 : 0;
                      if (~e.getToken() & 4194304) {
                        if (!(~e.getToken() & 8388608)) {
                          g = Ge(e, t, r, 1, o, 4, h, g);
                        }
                        if (J(e, t | 32, 22)) {
                          g = ze(e, t, r, g, o);
                        }
                        d |= e.assignable & 1 ? 32 : 16;
                      } else {
                        if (e.getToken() !== 1077936155) {
                          d |= 16;
                        }
                        g = Fe(e, t, r, i, a, o, g);
                      }
                    }
                  }
                } else if (e.getToken() === 67174411) {
                  m |= 1;
                  g = gt(e, t, r, m, i, e.tokenStart);
                  d = 16;
                } else {
                  e.report(44);
                }
              } else if (h === 8391476) {
                Q(e, t | 32, 8391476);
                m |= 8;
                if (e.getToken() & 143360) {
                  const n = e.getToken();
                  v = ct(e, t);
                  m |= 1;
                  if (e.getToken() !== 67174411) {
                    throw new S(e.tokenStart, e.currentLocation, n === 209005 ? 46 : n === 209008 || e.getToken() === 209009 ? 45 : 47, x[n & 255]);
                  }
                  d |= 16;
                  g = gt(e, t, r, m, i, e.tokenStart);
                } else if (~e.getToken() & 134217728) {
                  if (e.getToken() === 69271571) {
                    d |= 16;
                    m |= 3;
                    v = vt(e, t, r, i);
                    g = gt(e, t, r, m, i, e.tokenStart);
                  } else {
                    e.report(128);
                  }
                } else {
                  d |= 16;
                  v = lt(e, t);
                  m |= 1;
                  g = gt(e, t, r, m, i, e.tokenStart);
                }
              } else {
                e.report(30, x[h & 255]);
              }
            } else {
              v = lt(e, t);
              if (e.getToken() === 21) {
                Q(e, t | 32, 21);
                const {
                  tokenStart: l
                } = e;
                if (o === "__proto__") {
                  f++;
                }
                if (e.getToken() & 143360) {
                  g = Xe(e, t, r, s, 0, 1, i, 1, l);
                  const {
                    tokenValue: o,
                    tokenStart: u,
                    currentLocation: f
                  } = e;
                  const p = e.getToken();
                  g = Ye(e, t, r, g, i, 0, l);
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (p === 1077936155 || p === 1074790415 || p === 18) {
                      if (e.assignable & 2) {
                        d |= 16;
                      } else if (n != null) {
                        n.addVarOrBlock(t, o, s, u, f, c);
                      }
                    } else {
                      d |= e.assignable & 1 ? 32 : 16;
                    }
                  } else if (e.getToken() === 1077936155) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                    g = je(e, t, r, i, a, l, g);
                  } else {
                    d |= 16;
                    g = je(e, t, r, i, a, l, g);
                  }
                } else if (~e.getToken() & 2097152) {
                  g = qe(e, t, r, 1, 0, 1);
                  d |= e.assignable & 1 ? 32 : 16;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 1 ? 0 : 16;
                    if (e.getToken() !== 18 && e.getToken() !== 1074790415) {
                      if (e.getToken() !== 1077936155) {
                        d |= 16;
                      }
                      g = je(e, t, r, i, a, l, g);
                    }
                  }
                } else {
                  g = e.getToken() === 69271571 ? ft(e, t, n, r, 0, i, a, s, c) : mt(e, t, n, r, 0, i, a, s, c);
                  d = e.destructible;
                  e.assignable = d & 16 ? 2 : 1;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else if (~e.destructible & 8) {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 2 ? 16 : 0;
                    if (~e.getToken() & 4194304) {
                      if (!(~e.getToken() & 8388608)) {
                        g = Ge(e, t, r, 1, l, 4, h, g);
                      }
                      if (J(e, t | 32, 22)) {
                        g = ze(e, t, r, g, l);
                      }
                      d |= e.assignable & 1 ? 32 : 16;
                    } else {
                      g = Fe(e, t, r, i, a, l, g);
                    }
                  }
                }
              } else if (e.getToken() === 67174411) {
                m |= 1;
                g = gt(e, t, r, m, i, e.tokenStart);
                d = 16;
              } else {
                e.report(136);
              }
            }
            d |= e.destructible & 128 ? 128 : 0;
            e.destructible = d;
            u.push(e.finishNode({
              type: "Property",
              key: v,
              value: g,
              kind: m & 768 ? m & 512 ? "set" : "get" : "init",
              computed: (m & 2) > 0,
              method: (m & 1) > 0,
              shorthand: (m & 4) > 0
            }, l));
          }
          d |= e.destructible;
          if (e.getToken() !== 18) {
            break;
          }
          q(e, t);
        }
        Q(e, t, 1074790415);
        if (f > 1) {
          d |= 64;
        }
        const p = e.finishNode({
          type: a ? "ObjectPattern" : "ObjectExpression",
          properties: u
        }, l);
        if (!o && e.getToken() & 4194304) {
          return pt(e, t, r, d, i, a, l, p);
        } else {
          e.destructible = d;
          return p;
        }
      }
      function vt(e, t, n, r) {
        q(e, t | 32);
        const o = Me(e, (t | 131072) ^ 131072, n, 1, r, e.tokenStart);
        Q(e, t, 20);
        return o;
      }
      function yt(e, t, n) {
        const {
          tokenValue: r,
          tokenStart: o,
          currentLocation: i
        } = e;
        let a = 0;
        let s = 0;
        if (~e.getToken() & 537079808) {
          if (!(~e.getToken() & 36864)) {
            s = 1;
          }
        } else {
          a = 1;
        }
        const c = ct(e, t);
        e.assignable = 1;
        if (e.getToken() === 10) {
          const l = e.options.lexical ? he(e, t, r, o, i) : undefined;
          if (a) {
            e.flags |= 128;
          }
          if (s) {
            e.flags |= 256;
          }
          return _t(e, t, l, n, [c], 0, o);
        }
        return c;
      }
      function kt(e, t, n, r, o, i, a, s, c, l = 0) {
        if (!a) {
          e.report(57);
        }
        if (i) {
          e.report(51);
        }
        e.flags &= -129;
        return _t(e, t, e.options.lexical ? he(e, t, r, c, e.currentLocation) : undefined, n, [o], s, c, l);
      }
      function bt(e, t, n, r, o, i, a, s, c = 0) {
        if (!i) {
          e.report(57);
        }
        for (let t = 0; t < o.length; ++t) {
          Z(e, o[t]);
        }
        return _t(e, t, n, r, o, a, s, c);
      }
      function _t(e, t, n, r, o, i, a, s = 0) {
        var c;
        if (e.flags & 1) {
          e.report(48);
        }
        Q(e, t | 32, 10);
        const l = 535552;
        t = (t | l) ^ l | (i ? 2048 : 0);
        const u = e.getToken() !== 2162700;
        let d;
        if ((c = n) !== null && c !== undefined) {
          c.reportScopeError();
        }
        if (u) {
          e.flags = (e.flags | 4928) ^ 4928;
          d = Me(e, t, r, 1, 0, e.tokenStart);
        } else {
          var f;
          const o = 131084;
          d = We(e, (t | o) ^ o | 4096, n = (f = n) === null || f === undefined ? undefined : f.createChildScope(64), r, undefined, undefined, 16);
          switch (e.getToken()) {
            case 69271571:
              if (!(e.flags & 1)) {
                e.report(118);
              }
              e.flags |= 8192;
              break;
            case 67108877:
            case 67174409:
            case 22:
              e.report(119);
            case 67174411:
              if (!(e.flags & 1)) {
                e.report(118);
              }
              e.flags |= 1024;
          }
          if (!(~e.getToken() & 8388608) && !(e.flags & 1) && (e.getToken() !== 8673330 || s !== 32)) {
            e.report(30, x[e.getToken() & 255]);
          }
          if (!(~e.getToken() & 33619968)) {
            e.report(127);
          }
        }
        e.assignable = 2;
        return e.finishNode({
          type: "ArrowFunctionExpression",
          params: o,
          body: d,
          async: i === 1,
          expression: u,
          generator: false
        }, a);
      }
      function Tt(e, t, n, r, o, i) {
        Q(e, t, 67174411);
        e.flags = (e.flags | 128) ^ 128;
        e.strictReservedRange = null;
        e.firstAwaitLocation = null;
        const a = [];
        if (J(e, t, 16)) {
          return a;
        }
        t = (t | 131072) ^ 131072;
        let s = 0;
        while (e.getToken() !== 18) {
          var c;
          let l;
          const {
            tokenStart: u
          } = e;
          const d = e.getToken();
          if (d & 143360) {
            if (!(t & 1)) {
              if (!(~d & 36864)) {
                e.flags |= 256;
                if ((c = e.strictReservedRange) === null || c === undefined) {
                  e.strictReservedRange = [u, e.currentLocation];
                }
              }
              if (!(~d & 537079808)) {
                e.flags |= 512;
              }
            }
            l = Rt(e, t, n, i | 1);
          } else {
            if (d === 2162700) {
              l = mt(e, t, n, r, 1, o, 1, i);
            } else if (d === 69271571) {
              l = ft(e, t, n, r, 1, o, 1, i);
            } else if (d === 14) {
              l = ht(e, t, n, r, 16, i, 0, o, 1);
            } else {
              e.report(30, x[d & 255]);
            }
            s = 1;
            if (e.destructible & 48) {
              e.report(50);
            }
          }
          if (e.getToken() === 1077936155) {
            q(e, t | 32);
            s = 1;
            const n = Me(e, t, r, 1, o, e.tokenStart);
            l = e.finishNode({
              type: "AssignmentPattern",
              left: l,
              right: n
            }, u);
          }
          a.push(l);
          if (!J(e, t, 18)) {
            break;
          }
          if (e.getToken() === 16) {
            break;
          }
        }
        if (s) {
          e.flags |= 128;
        }
        if ((s || t & 1) && n != null) {
          n.reportScopeError();
        }
        Q(e, t, 16);
        return a;
      }
      function St(e, t, n, r, o) {
        if (e.getToken() === 209006) {
          e.report(31);
        }
        if (t & 1025 && e.getToken() === 241771) {
          e.report(32);
        }
        ae(e, t, e.getToken());
        if (!(~e.getToken() & 36864)) {
          e.flags |= 256;
        }
        return kt(e, t & -524289 | 2048, n, e.tokenValue, ct(e, t), 0, r, 1, o);
      }
      function xt(e, t, n, r, o, i, a, s) {
        var c;
        q(e, t | 32);
        const l = (c = e.createScopeIfLexical()) === null || c === undefined ? undefined : c.createChildScope(512);
        const u = e.firstAwaitLocation;
        e.firstAwaitLocation = null;
        if (J(e, t = (t | 131072) ^ 131072, 16)) {
          if (e.getToken() === 10) {
            if (a & 1) {
              e.report(48);
            }
            return bt(e, t, l, n, [], o, 1, s);
          } else {
            if (t & 1 || !e.options.webcompat) {
              e.assignable = 2;
            } else {
              e.assignable = 4;
            }
            if (u) {
              e.firstAwaitLocation = u;
            }
            return e.finishNode({
              type: "CallExpression",
              callee: r,
              arguments: [],
              optional: false
            }, s);
          }
        }
        let d;
        let f = 0;
        let p = 0;
        e.destructible = (e.destructible | 384) ^ 384;
        const h = [];
        while (e.getToken() !== 16) {
          const {
            tokenStart: o,
            currentLocation: a
          } = e;
          const c = e.getToken();
          if (c & 143360) {
            if (l != null) {
              l.addBlockName(t, e.tokenValue, i, o, a);
            }
            if (~c & 537079808) {
              if (!(~c & 36864)) {
                e.flags |= 256;
              }
            } else {
              e.flags |= 512;
            }
            d = Xe(e, t, n, i, 0, 1, 1, 1, o);
            if (e.getToken() === 16 || e.getToken() === 18) {
              if (e.assignable & 2) {
                f |= 16;
                p = 1;
              }
            } else {
              if (e.getToken() === 1077936155) {
                p = 1;
              } else {
                f |= 16;
              }
              d = Ye(e, t, n, d, 1, 0, o);
              if (e.getToken() !== 16 && e.getToken() !== 18) {
                d = je(e, t, n, 1, 0, o, d);
              }
            }
          } else if (c & 2097152) {
            d = c === 2162700 ? mt(e, t, l, n, 0, 1, 0, i) : ft(e, t, l, n, 0, 1, 0, i);
            f |= e.destructible;
            p = 1;
            if (e.getToken() !== 16 && e.getToken() !== 18) {
              if (f & 8) {
                e.report(124);
              }
              d = Ye(e, t, n, d, 0, 0, o);
              f |= 16;
              if (!(~e.getToken() & 8388608)) {
                d = Ge(e, t, n, 1, s, 4, c, d);
              }
              if (J(e, t | 32, 22)) {
                d = ze(e, t, n, d, s);
              }
            }
          } else {
            if (c !== 14) {
              d = Me(e, t, n, 1, 0, o);
              f = 0;
              h.push(d);
              while (J(e, t | 32, 18)) {
                h.push(Me(e, t, n, 1, 0, o));
              }
              f |= e.assignable;
              Q(e, t, 16);
              e.destructible = f | 16;
              if (t & 1 || !e.options.webcompat) {
                e.assignable = 2;
              } else {
                e.assignable = 4;
              }
              if (u) {
                e.firstAwaitLocation = u;
              }
              return e.finishNode({
                type: "CallExpression",
                callee: r,
                arguments: h,
                optional: false
              }, s);
            }
            d = ht(e, t, l, n, 16, i, 1, 1, 0);
            f |= (e.getToken() === 16 ? 0 : 16) | e.destructible;
            p = 1;
          }
          h.push(d);
          if (!J(e, t | 32, 18)) {
            break;
          }
        }
        Q(e, t, 16);
        f |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
        if (e.getToken() === 10) {
          if (f & 48) {
            e.report(27);
          }
          if (e.flags & 1 || a & 1) {
            e.report(48);
          }
          if (f & 128) {
            const t = e.firstAwaitLocation;
            if (t) {
              throw new S(t.start, t.end, 31);
            }
            e.report(31);
          }
          if (t & 1025 && f & 256) {
            e.report(32);
          }
          if (p) {
            e.flags |= 128;
          }
          return bt(e, t | 2048, l, n, h, o, 1, s);
        }
        if (f & 64) {
          e.report(63);
        }
        if (f & 8) {
          e.report(62);
        }
        if (t & 1 || !e.options.webcompat) {
          e.assignable = 2;
        } else {
          e.assignable = 4;
        }
        if (u) {
          e.firstAwaitLocation = u;
        }
        return e.finishNode({
          type: "CallExpression",
          callee: r,
          arguments: h,
          optional: false
        }, s);
      }
      function wt(e, t, n, r, o) {
        let a;
        let s;
        if (e.leadingDecorators.decorators.length) {
          a = e.leadingDecorators.start;
          s = [...e.leadingDecorators.decorators];
          e.leadingDecorators.decorators.length = 0;
        } else {
          a = e.tokenStart;
          s = Et(e, t, r);
        }
        Q(e, t = (t | 16385) ^ 16384, 86094);
        let c = null;
        let l = null;
        const {
          tokenValue: u,
          tokenStart: d,
          currentLocation: f
        } = e;
        if (e.getToken() & 4096 && e.getToken() !== 20565) {
          if (ne(e, t, e.getToken())) {
            e.report(120);
          }
          if (!(~e.getToken() & 537079808)) {
            e.report(121);
          }
          if (n) {
            n.addBlockName(t, u, 32, d, f);
            if (o && o & 2) {
              e.declareUnboundVariable(u);
            }
          }
          c = ct(e, t);
        } else if (!(o & 1)) {
          e.report(39, "Class");
        }
        let p = t;
        if (J(e, t | 32, 20565)) {
          l = qe(e, t, r, 0, 0, 0);
          p |= 512;
        } else {
          p = (p | 512) ^ 512;
        }
        const h = Ct(e, p, t, n, r, 2, 0, 8);
        return e.finishNode(i({
          type: "ClassDeclaration",
          id: c,
          superClass: l,
          body: h
        }, e.features & 1 ? {
          decorators: s
        } : null), a);
      }
      function Et(e, t, n) {
        const r = [];
        if (e.features & 1) {
          while (e.getToken() === 133) {
            r.push(At(e, t, n));
          }
        }
        return r;
      }
      function At(e, t, n) {
        const r = e.tokenStart;
        q(e, t | 32);
        const o = e.tokenStart;
        let i;
        if (e.getToken() === 67174411) {
          i = Xe(e, t, n, 2, 0, 1, 0, 1, r);
        } else {
          const r = e.getToken();
          if (~r & 143360 && !ie(t, r) || t & 1 && !(~r & 36864)) {
            e.report(30, x[r & 255]);
          }
          if (r === 209006 && t & 2050) {
            e.report(112);
          }
          if (r === 241771 && t & 1024) {
            e.report(97, "yield");
          }
          let a = ct(e, t | 64);
          while (e.getToken() === 67108877) {
            q(e, (t | 262152) ^ 8);
            const r = Ke(e, t | 64, n, 1);
            a = e.finishNode({
              type: "MemberExpression",
              object: a,
              computed: false,
              property: r,
              optional: false
            }, o);
          }
          i = a;
          if (e.getToken() === 67174411) {
            const r = st(e, t, n, 0);
            i = e.finishNode({
              type: "CallExpression",
              callee: a,
              arguments: r,
              optional: false
            }, o);
          }
        }
        return e.finishNode({
          type: "Decorator",
          expression: i
        }, r);
      }
      function Ct(e, t, n, r, o, i, a, s = 0) {
        const {
          tokenStart: c
        } = e;
        const l = e.createPrivateScopeIfLexical(o);
        Q(e, t | 32, 2162700);
        const u = 655360;
        t = (t | u) ^ u;
        const d = e.flags & 32;
        e.flags = (e.flags | 32) ^ 32;
        const f = [];
        while (e.getToken() !== 1074790415) {
          const o = e.tokenStart;
          const s = Et(e, t, l);
          if (s.length > 0 && e.tokenValue === "constructor") {
            e.report(111);
          }
          if (e.getToken() === 1074790415) {
            e.report(110);
          }
          if (J(e, t, 1074790417)) {
            if (s.length > 0) {
              e.report(122);
            }
          } else {
            f.push(Ot(e, t, r, l, n, i, s, 0, a, s.length > 0 ? o : e.tokenStart));
          }
        }
        Q(e, s & 8 ? t | 32 : t, 1074790415);
        if (l != null) {
          l.validatePrivateIdentifierRefs();
        }
        e.flags = e.flags & -33 | d;
        return e.finishNode({
          type: "ClassBody",
          body: f
        }, c);
      }
      function Ot(e, t, n, r, o, a, s, c, l, u) {
        let d = c ? 32 : 0;
        let f = null;
        const p = e.getToken();
        if (p & 176128 || p === -2147483527) {
          f = ct(e, t);
          switch (p) {
            case 36970:
              if (!c && e.getToken() !== 67174411 && ~e.getToken() & 1048576 && e.getToken() !== 1077936155) {
                return Ot(e, t, n, r, o, a, s, 1, l, u);
              }
              break;
            case 209005:
              if (e.getToken() !== 67174411 && !(e.flags & 1)) {
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                d |= ($(e, t, 8391476) ? 8 : 0) | 16;
              }
              break;
            case 209008:
              if (e.getToken() !== 67174411) {
                if (e.getToken() === 8391476 && e.flags & 1) {
                  return Nt(e, t, r, f, d, s, u);
                }
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                d |= 256;
              }
              break;
            case 209009:
              if (e.getToken() !== 67174411) {
                if (e.getToken() === 8391476 && e.flags & 1) {
                  return Nt(e, t, r, f, d, s, u);
                }
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                d |= 512;
              }
              break;
            case 209010:
              if (e.getToken() !== 67174411 && !(e.flags & 1)) {
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                if (e.features & 1) {
                  d |= 1024;
                }
              }
          }
        } else if (p === 69271571) {
          d |= 2;
          f = vt(e, o, r, l);
        } else if (~p & 134217728) {
          if (p === 8391476) {
            d |= 8;
            q(e, t);
          } else if (e.getToken() === 131) {
            d |= 8192;
            f = It(e, t | 16, r, 768);
          } else if (~e.getToken() & 1073741824) {
            if (c && p === 2162700) {
              return function (e, t, n, r, o, i) {
                return _e(e, t = (t | 5764) ^ 5764 | 592128, n = (i = n) === null || i === undefined ? undefined : i.createChildScope(), r, {}, o, "StaticBlock");
              }(e, t | 16, n, r, u);
            }
            if (p === -2147483526) {
              f = ct(e, t);
              if (e.getToken() !== 67174411) {
                e.report(30, x[e.getToken() & 255]);
              }
            } else {
              e.report(30, x[e.getToken() & 255]);
            }
          } else {
            d |= 128;
          }
        } else {
          f = lt(e, t);
        }
        if (d & 1816) {
          if (e.getToken() & 143360 || e.getToken() === -2147483527 || e.getToken() === -2147483526) {
            f = ct(e, t);
          } else if (~e.getToken() & 134217728) {
            if (e.getToken() === 69271571) {
              d |= 2;
              f = vt(e, t, r, 0);
            } else if (e.getToken() === 131) {
              d |= 8192;
              f = It(e, t, r, d);
            } else {
              e.report(137);
            }
          } else {
            f = lt(e, t);
          }
        }
        if (!(d & 2)) {
          if (e.tokenValue === "constructor") {
            if (~e.getToken() & 1073741824) {
              if (!(d & 32) && e.getToken() === 67174411) {
                if (d & 920) {
                  e.report(53, "accessor");
                } else if (!(t & 512)) {
                  if (e.flags & 32) {
                    e.report(54);
                  } else {
                    e.flags |= 32;
                  }
                }
              }
            } else {
              e.report(131);
            }
            d |= 64;
          } else if (!(d & 8192) && d & 32 && e.tokenValue === "prototype") {
            e.report(52);
          }
        }
        if (d & 1024 || e.getToken() !== 67174411 && !(d & 768)) {
          return Nt(e, t, r, f, d, s, u);
        }
        const h = gt(e, t | 16, r, d, l, e.tokenStart);
        return e.finishNode(i({
          type: "MethodDefinition",
          kind: !(d & 32) && d & 64 ? "constructor" : d & 256 ? "get" : d & 512 ? "set" : "method",
          static: (d & 32) > 0,
          computed: (d & 2) > 0,
          key: f,
          value: h
        }, e.features & 1 ? {
          decorators: s
        } : null), u);
      }
      function It(e, t, n, r) {
        const {
          tokenStart: o
        } = e;
        q(e, t);
        const {
          tokenValue: i
        } = e;
        if (i === "constructor") {
          e.report(130);
        }
        if (e.options.lexical) {
          if (!n) {
            e.report(4, i);
          }
          if (r) {
            n.addPrivateIdentifier(i, r);
          } else {
            n.addPrivateIdentifierRef(i);
          }
        }
        q(e, t);
        return e.finishNode({
          type: "PrivateIdentifier",
          name: i
        }, o);
      }
      function Nt(e, t, n, r, o, a, s) {
        let c = null;
        if (o & 8) {
          e.report(0);
        }
        if (e.getToken() === 1077936155) {
          q(e, t | 32);
          const {
            tokenStart: r
          } = e;
          if (e.getToken() === 537079928) {
            e.report(121);
          }
          const i = (o & 64 ? 0 : 16896) | 11264;
          c = Xe(e, (t = (t | i) ^ i | (o & 8 ? 1024 : 0) | (o & 16 ? 2048 : 0) | (o & 64 ? 16384 : 0) | 65792) | 16, n, 2, 0, 1, 0, 1, r, 0, 1);
          if (!!(~e.getToken() & 1073741824) || !(~e.getToken() & 4194304)) {
            c = Ye(e, t | 16, n, c, 0, 0, r);
            c = je(e, t | 16, n, 0, 0, r, c);
          }
        }
        K(e, t);
        return e.finishNode(i({
          type: o & 1024 ? "AccessorProperty" : "PropertyDefinition",
          key: r,
          value: c,
          static: (o & 32) > 0,
          computed: (o & 2) > 0
        }, e.features & 1 ? {
          decorators: a
        } : null), s);
      }
      function Dt(e, t, n, r, o, i = 0) {
        if (e.getToken() & 143360 || !(t & 1) && e.getToken() === -2147483526) {
          return Rt(e, t, n, o, i);
        }
        if (~e.getToken() & 2097152) {
          e.report(30, x[e.getToken() & 255]);
        }
        const a = e.getToken() === 69271571 ? ft(e, t, n, r, 1, 0, 1, o, i) : mt(e, t, n, r, 1, 0, 1, o, i);
        if (e.destructible & 16) {
          e.report(50);
        }
        if (e.destructible & 32) {
          e.report(50);
        }
        return a;
      }
      function Rt(e, t, n, r, o = 0) {
        const i = e.getToken();
        if (t & 1) {
          if (~i & 537079808) {
            if (!(~i & 36864) || i === -2147483526) {
              e.report(120);
            }
          } else {
            e.report(121);
          }
        }
        if (!(~i & 20480)) {
          e.report(102);
        }
        if (i === 241771) {
          if (t & 1024) {
            e.report(32);
          }
          if (t & 2) {
            e.report(113);
          }
        }
        if ((i & 255) == 73 && r & 24) {
          e.report(100);
        }
        if (i === 209006) {
          if (t & 2048) {
            e.report(178);
          }
          if (t & 2) {
            e.report(112);
          }
        }
        const {
          tokenValue: a,
          tokenStart: s,
          currentLocation: c
        } = e;
        q(e, t);
        if (n != null) {
          n.addVarOrBlock(t, a, r, s, c, o);
        }
        return e.finishNode({
          type: "Identifier",
          name: a
        }, s);
      }
      function Lt(e, t, n, r, o) {
        if (!r) {
          Q(e, t, 8456256);
        }
        if (e.getToken() === 8390721) {
          const i = function (e, t) {
            ue(e);
            return e.finishNode({
              type: "JSXOpeningFragment"
            }, t);
          }(e, o);
          const [a, s] = function (e, t, n, r) {
            const o = [];
            while (true) {
              const i = Bt(e, t, n, r);
              if (i.type === "JSXClosingFragment") {
                return [o, i];
              }
              o.push(i);
            }
          }(e, t, n, r);
          return e.finishNode({
            type: "JSXFragment",
            openingFragment: i,
            children: a,
            closingFragment: s
          }, o);
        }
        if (e.getToken() === 8457014) {
          e.report(30, x[e.getToken() & 255]);
        }
        let i = null;
        let a = [];
        const s = function (e, t, n, r, o) {
          if (~e.getToken() & 143360 && ~e.getToken() & 4096) {
            e.report(0);
          }
          const i = Mt(e, t);
          const a = function (e, t, n) {
            const r = [];
            while (e.getToken() !== 8457014 && e.getToken() !== 8390721 && e.getToken() !== 1048576) {
              r.push(Ht(e, t, n));
            }
            return r;
          }(e, t, n);
          const s = e.getToken() === 8457014;
          if (s) {
            Q(e, t | 1048576, 8457014);
          }
          if (e.getToken() !== 8390721) {
            e.report(25, x[65]);
          }
          if (r || !s) {
            ue(e);
          } else {
            q(e, t);
          }
          return e.finishNode({
            type: "JSXOpeningElement",
            name: i,
            attributes: a,
            selfClosing: s
          }, o);
        }(e, t, n, r, o);
        if (!s.selfClosing) {
          [a, i] = function (e, t, n, r) {
            const o = [];
            while (true) {
              const i = Pt(e, t, n, r);
              if (i.type === "JSXClosingElement") {
                return [o, i];
              }
              o.push(i);
            }
          }(e, t, n, r);
          const o = oe(i.name);
          if (oe(s.name) !== o) {
            e.report(157, o);
          }
        }
        return e.finishNode({
          type: "JSXElement",
          children: a,
          openingElement: s,
          closingElement: i
        }, o);
      }
      function Pt(e, t, n, r) {
        if (e.getToken() === 138) {
          return Ut(e);
        }
        if (e.getToken() === 2162700) {
          return Ft(e, t, n, 1, 0);
        }
        if (e.getToken() === 8456256) {
          const {
            tokenStart: o
          } = e;
          q(e, t);
          if (e.getToken() === 8457014) {
            return function (e, t, n, r) {
              Q(e, t, 8457014);
              const o = Mt(e, t);
              if (e.getToken() !== 8390721) {
                e.report(25, x[65]);
              }
              if (n) {
                ue(e);
              } else {
                q(e, t);
              }
              return e.finishNode({
                type: "JSXClosingElement",
                name: o
              }, r);
            }(e, t, r, o);
          } else {
            return Lt(e, t, n, 1, o);
          }
        }
        e.report(0);
      }
      function Bt(e, t, n, r) {
        if (e.getToken() === 138) {
          return Ut(e);
        }
        if (e.getToken() === 2162700) {
          return Ft(e, t, n, 1, 0);
        }
        if (e.getToken() === 8456256) {
          const {
            tokenStart: o
          } = e;
          q(e, t);
          if (e.getToken() === 8457014) {
            return function (e, t, n, r) {
              Q(e, t, 8457014);
              if (e.getToken() !== 8390721) {
                e.report(25, x[65]);
              }
              if (n) {
                ue(e);
              } else {
                q(e, t);
              }
              return e.finishNode({
                type: "JSXClosingFragment"
              }, r);
            }(e, t, r, o);
          } else {
            return Lt(e, t, n, 1, o);
          }
        }
        e.report(0);
      }
      function Ut(e) {
        const t = e.tokenStart;
        ue(e);
        const n = {
          type: "JSXText",
          value: e.tokenValue
        };
        if (e.options.raw) {
          n.raw = e.tokenRaw;
        }
        return e.finishNode(n, t);
      }
      function Mt(e, t) {
        const {
          tokenStart: n
        } = e;
        de(e);
        let r = zt(e, t);
        if (e.getToken() === 21) {
          return jt(e, t, r, n);
        }
        while (J(e, t, 67108877)) {
          de(e);
          r = Vt(e, t, r, n);
        }
        return r;
      }
      function Vt(e, t, n, r) {
        const o = zt(e, t);
        return e.finishNode({
          type: "JSXMemberExpression",
          object: n,
          property: o
        }, r);
      }
      function Ht(e, t, n) {
        const {
          tokenStart: r
        } = e;
        if (e.getToken() === 2162700) {
          return function (e, t, n) {
            const r = e.tokenStart;
            q(e, t);
            Q(e, t, 14);
            const o = Me(e, t, n, 1, 0, e.tokenStart);
            Q(e, t, 1074790415);
            return e.finishNode({
              type: "JSXSpreadAttribute",
              argument: o
            }, r);
          }(e, t, n);
        }
        de(e);
        let o = null;
        let i = zt(e, t);
        if (e.getToken() === 21) {
          i = jt(e, t, i, r);
        }
        if (e.getToken() === 1077936155) {
          switch (le(e, t)) {
            case 134283267:
              o = lt(e, t);
              break;
            case 8456256:
              o = Lt(e, t, n, 0, e.tokenStart);
              break;
            case 2162700:
              o = Ft(e, t, n, 0, 1);
              break;
            default:
              e.report(156);
          }
        }
        return e.finishNode({
          type: "JSXAttribute",
          value: o,
          name: i
        }, r);
      }
      function jt(e, t, n, r) {
        Q(e, t, 21);
        const o = zt(e, t);
        return e.finishNode({
          type: "JSXNamespacedName",
          namespace: n,
          name: o
        }, r);
      }
      function Ft(e, t, n, r, o) {
        const {
          tokenStart: i
        } = e;
        q(e, t | 32);
        const {
          tokenStart: a
        } = e;
        if (e.getToken() === 14) {
          return function (e, t, n, r) {
            Q(e, t, 14);
            const o = Me(e, t, n, 1, 0, e.tokenStart);
            Q(e, t, 1074790415);
            return e.finishNode({
              type: "JSXSpreadChild",
              expression: o
            }, r);
          }(e, t, n, i);
        }
        let s;
        if (e.getToken() === 1074790415) {
          if (o) {
            e.report(159);
          }
          s = function (e, t) {
            return e.finishNode({
              type: "JSXEmptyExpression"
            }, t, e.tokenStart);
          }(e, {
            index: e.startIndex,
            line: e.startLine,
            column: e.startColumn
          });
        } else {
          s = Me(e, t, n, 1, 0, a);
        }
        if (e.getToken() !== 1074790415) {
          e.report(25, x[15]);
        }
        if (r) {
          ue(e);
        } else {
          q(e, t);
        }
        return e.finishNode({
          type: "JSXExpressionContainer",
          expression: s
        }, i);
      }
      function zt(e, t) {
        const n = e.tokenStart;
        if (!(e.getToken() & 143360)) {
          e.report(30, x[e.getToken() & 255]);
        }
        const {
          tokenValue: r
        } = e;
        q(e, t | 1048576);
        return e.finishNode({
          type: "JSXIdentifier",
          name: r
        }, n);
      }
      const {
        version: Gt
      } = {
        version: "7.3.3"
      };
      e.isParseError = e => e instanceof S;
      e.parse = function (e, t) {
        return me(e, t);
      };
      e.parseModule = function (e, t) {
        return me(e, i(i({}, t), {}, {
          sourceType: "module"
        }));
      };
      e.parseScript = function (e, t) {
        return me(e, i(i({}, t), {}, {
          sourceType: "script"
        }));
      };
      e.version = Gt;
    })(t);
  },
  38: function (e, t, n) {
    "use strict";

    function r() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var n = typeof Symbol == "function" ? Symbol : {};
      var i = n.iterator || "@@iterator";
      var a = n.toStringTag || "@@toStringTag";
      function s(n, r, i, a) {
        var s = r && r.prototype instanceof l ? r : l;
        var u = Object.create(s.prototype);
        o(u, "_invoke", function (n, r, o) {
          var i;
          var a;
          var s;
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
              a = 0;
              s = e;
              f.n = n;
              return c;
            }
          };
          function p(n, r) {
            a = n;
            s = r;
            t = 0;
            for (; !d && l && !o && t < u.length; t++) {
              var o;
              var i = u[t];
              var p = f.p;
              var h = i[2];
              if (n > 3) {
                if (o = h === r) {
                  s = i[(a = i[4]) ? 5 : (a = 3, 3)];
                  i[4] = i[5] = e;
                }
              } else if (i[0] <= p) {
                if (o = n < 2 && p < i[1]) {
                  a = 0;
                  f.v = r;
                  f.n = i[1];
                } else if (p < h && (o = n < 3 || i[0] > r || r > h)) {
                  i[4] = n;
                  i[5] = r;
                  f.n = h;
                  a = 0;
                }
              }
            }
            if (o || n > 1) {
              return c;
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
            a = u;
            s = h;
            while ((t = a < 2 ? e : s) || !d) {
              if (!i) {
                if (a) {
                  if (a < 3) {
                    if (a > 1) {
                      f.n = -1;
                    }
                    p(a, s);
                  } else {
                    f.n = s;
                  }
                } else {
                  f.v = s;
                }
              }
              try {
                l = 2;
                if (i) {
                  if (!a) {
                    o = "next";
                  }
                  if (t = i[o]) {
                    if (!(t = t.call(i, s))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!t.done) {
                      return t;
                    }
                    s = t.value;
                    if (a < 2) {
                      a = 0;
                    }
                  } else {
                    if (a === 1 && (t = i.return)) {
                      t.call(i);
                    }
                    if (a < 2) {
                      s = TypeError("The iterator does not provide a '" + o + "' method");
                      a = 1;
                    }
                  }
                  i = e;
                } else if ((t = (d = f.n < 0) ? s : n.call(r, f)) !== c) {
                  break;
                }
              } catch (t) {
                i = e;
                a = 1;
                s = t;
              } finally {
                l = 1;
              }
            }
            return {
              value: t,
              done: d
            };
          };
        }(n, i, a), true);
        return u;
      }
      var c = {};
      function l() {}
      function u() {}
      function d() {}
      t = Object.getPrototypeOf;
      var f = [][i] ? t(t([][i]())) : (o(t = {}, i, function () {
        return this;
      }), t);
      var p = d.prototype = l.prototype = Object.create(f);
      function h(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, d);
        } else {
          e.__proto__ = d;
          o(e, a, "GeneratorFunction");
        }
        e.prototype = Object.create(p);
        return e;
      }
      u.prototype = d;
      o(p, "constructor", d);
      o(d, "constructor", u);
      u.displayName = "GeneratorFunction";
      o(d, a, "GeneratorFunction");
      o(p);
      o(p, a, "Generator");
      o(p, i, function () {
        return this;
      });
      o(p, "toString", function () {
        return "[object Generator]";
      });
      return (r = function () {
        return {
          w: s,
          m: h
        };
      })();
    }
    function o(e, t, n, r) {
      var i = Object.defineProperty;
      try {
        i({}, "", {});
      } catch (e) {
        i = 0;
      }
      (o = function (e, t, n, r) {
        function a(t, n) {
          o(e, t, function (e) {
            return this._invoke(t, n, e);
          });
        }
        if (t) {
          if (i) {
            i(e, t, {
              value: n,
              enumerable: !r,
              configurable: !r,
              writable: !r
            });
          } else {
            e[t] = n;
          }
        } else {
          a("next", 0);
          a("throw", 1);
          a("return", 2);
        }
      })(e, t, n, r);
    }
    n.d(t, "a", function () {
      return a;
    });
    function i(e, t, n, r) {
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
    function a(e) {
      return i(this, undefined, undefined, r().m(function t() {
        var n;
        return r().w(function (t) {
          while (true) {
            switch (t.p = t.n) {
              case 0:
                t.p = 0;
                t.n = 1;
                return chrome.runtime.sendMessage(e);
              case 1:
                t.n = 3;
                break;
              case 2:
                t.p = 2;
                n = t.v;
                console.log("Caught", n);
              case 3:
                return t.a(2);
            }
          }
        }, t, null, [[0, 2]]);
      }));
    }
  },
  39: function (e, t, n) {
    e.exports = function () {
      "use strict";

      /*!
         * mustache.js - Logic-less {{mustache}} templates with JavaScript
         * http://github.com/janl/mustache.js
         */
      var e = Object.prototype.toString;
      var t = Array.isArray || function (t) {
        return e.call(t) === "[object Array]";
      };
      function n(e) {
        return typeof e == "function";
      }
      function r(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function o(e, t) {
        return e != null && typeof e == "object" && t in e;
      }
      var i = RegExp.prototype.test;
      var a = /\S/;
      function s(e) {
        return !function (e, t) {
          return i.call(e, t);
        }(a, e);
      }
      var c = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      var l = /\s*/;
      var u = /\s+/;
      var d = /\s*=/;
      var f = /\s*\}/;
      var p = /#|\^|\/|>|\{|&|=|!/;
      function h(e) {
        this.string = e;
        this.tail = e;
        this.pos = 0;
      }
      function g(e, t) {
        this.view = e;
        this.cache = {
          ".": this.view
        };
        this.parent = t;
      }
      function m() {
        this.cache = {};
      }
      h.prototype.eos = function () {
        return this.tail === "";
      };
      h.prototype.scan = function (e) {
        var t = this.tail.match(e);
        if (!t || t.index !== 0) {
          return "";
        }
        var n = t[0];
        this.tail = this.tail.substring(n.length);
        this.pos += n.length;
        return n;
      };
      h.prototype.scanUntil = function (e) {
        var t;
        var n = this.tail.search(e);
        switch (n) {
          case -1:
            t = this.tail;
            this.tail = "";
            break;
          case 0:
            t = "";
            break;
          default:
            t = this.tail.substring(0, n);
            this.tail = this.tail.substring(n);
        }
        this.pos += t.length;
        return t;
      };
      g.prototype.push = function (e) {
        return new g(e, this);
      };
      g.prototype.lookup = function (e) {
        var t;
        var r;
        var i;
        var a = this.cache;
        if (a.hasOwnProperty(e)) {
          t = a[e];
        } else {
          var s;
          var c;
          var l;
          for (var u = this, d = false; u;) {
            if (e.indexOf(".") > 0) {
              s = u.view;
              c = e.split(".");
              l = 0;
              while (s != null && l < c.length) {
                if (l === c.length - 1) {
                  d = o(s, c[l]) || (r = s, i = c[l], r != null && typeof r != "object" && r.hasOwnProperty && r.hasOwnProperty(i));
                }
                s = s[c[l++]];
              }
            } else {
              s = u.view[e];
              d = o(u.view, e);
            }
            if (d) {
              t = s;
              break;
            }
            u = u.parent;
          }
          a[e] = t;
        }
        if (n(t)) {
          t = t.call(this.view);
        }
        return t;
      };
      m.prototype.clearCache = function () {
        this.cache = {};
      };
      m.prototype.parse = function (e, n) {
        var o = this.cache;
        var i = e + ":" + (n || v.tags).join(":");
        var a = o[i];
        if (a == null) {
          a = o[i] = function (e, n) {
            if (!e) {
              return [];
            }
            var o;
            var i;
            var a;
            var c = false;
            var g = [];
            var m = [];
            var y = [];
            var k = false;
            var b = false;
            var _ = "";
            var T = 0;
            function S() {
              if (k && !b) {
                while (y.length) {
                  delete m[y.pop()];
                }
              } else {
                y = [];
              }
              k = false;
              b = false;
            }
            function x(e) {
              if (typeof e == "string") {
                e = e.split(u, 2);
              }
              if (!t(e) || e.length !== 2) {
                throw new Error("Invalid tags: " + e);
              }
              o = new RegExp(r(e[0]) + "\\s*");
              i = new RegExp("\\s*" + r(e[1]));
              a = new RegExp("\\s*" + r("}" + e[1]));
            }
            x(n || v.tags);
            var w;
            var E;
            var A;
            var C;
            var O;
            var I;
            for (var N = new h(e); !N.eos();) {
              w = N.pos;
              if (A = N.scanUntil(o)) {
                for (var D = 0, R = A.length; D < R; ++D) {
                  if (s(C = A.charAt(D))) {
                    y.push(m.length);
                    _ += C;
                  } else {
                    b = true;
                    c = true;
                    _ += " ";
                  }
                  m.push(["text", C, w, w + 1]);
                  w += 1;
                  if (C === "\n") {
                    S();
                    _ = "";
                    T = 0;
                    c = false;
                  }
                }
              }
              if (!N.scan(o)) {
                break;
              }
              k = true;
              E = N.scan(p) || "name";
              N.scan(l);
              if (E === "=") {
                A = N.scanUntil(d);
                N.scan(d);
                N.scanUntil(i);
              } else if (E === "{") {
                A = N.scanUntil(a);
                N.scan(f);
                N.scanUntil(i);
                E = "&";
              } else {
                A = N.scanUntil(i);
              }
              if (!N.scan(i)) {
                throw new Error("Unclosed tag at " + N.pos);
              }
              O = E == ">" ? [E, A, w, N.pos, _, T, c] : [E, A, w, N.pos];
              T++;
              m.push(O);
              if (E === "#" || E === "^") {
                g.push(O);
              } else if (E === "/") {
                if (!(I = g.pop())) {
                  throw new Error("Unopened section \"" + A + "\" at " + w);
                }
                if (I[1] !== A) {
                  throw new Error("Unclosed section \"" + I[1] + "\" at " + w);
                }
              } else if (E === "name" || E === "{" || E === "&") {
                b = true;
              } else if (E === "=") {
                x(A);
              }
            }
            S();
            if (I = g.pop()) {
              throw new Error("Unclosed section \"" + I[1] + "\" at " + N.pos);
            }
            return function (e) {
              var t;
              var n = [];
              var r = n;
              var o = [];
              for (var i = 0, a = e.length; i < a; ++i) {
                switch ((t = e[i])[0]) {
                  case "#":
                  case "^":
                    r.push(t);
                    o.push(t);
                    r = t[4] = [];
                    break;
                  case "/":
                    o.pop()[5] = t[2];
                    r = o.length > 0 ? o[o.length - 1][4] : n;
                    break;
                  default:
                    r.push(t);
                }
              }
              return n;
            }(function (e) {
              var t;
              var n;
              var r = [];
              for (var o = 0, i = e.length; o < i; ++o) {
                if (t = e[o]) {
                  if (t[0] === "text" && n && n[0] === "text") {
                    n[1] += t[1];
                    n[3] = t[3];
                  } else {
                    r.push(t);
                    n = t;
                  }
                }
              }
              return r;
            }(m));
          }(e, n);
        }
        return a;
      };
      m.prototype.render = function (e, t, n, r) {
        var o = this.parse(e, r);
        var i = t instanceof g ? t : new g(t, undefined);
        return this.renderTokens(o, i, n, e, r);
      };
      m.prototype.renderTokens = function (e, t, n, r, o) {
        var i;
        var a;
        var s;
        var c = "";
        for (var l = 0, u = e.length; l < u; ++l) {
          s = undefined;
          if ((a = (i = e[l])[0]) === "#") {
            s = this.renderSection(i, t, n, r);
          } else if (a === "^") {
            s = this.renderInverted(i, t, n, r);
          } else if (a === ">") {
            s = this.renderPartial(i, t, n, o);
          } else if (a === "&") {
            s = this.unescapedValue(i, t);
          } else if (a === "name") {
            s = this.escapedValue(i, t);
          } else if (a === "text") {
            s = this.rawValue(i);
          }
          if (s !== undefined) {
            c += s;
          }
        }
        return c;
      };
      m.prototype.renderSection = function (e, r, o, i) {
        var a = this;
        var s = "";
        var c = r.lookup(e[1]);
        if (c) {
          if (t(c)) {
            for (var l = 0, u = c.length; l < u; ++l) {
              s += this.renderTokens(e[4], r.push(c[l]), o, i);
            }
          } else if (typeof c == "object" || typeof c == "string" || typeof c == "number") {
            s += this.renderTokens(e[4], r.push(c), o, i);
          } else if (n(c)) {
            if (typeof i != "string") {
              throw new Error("Cannot use higher-order sections without the original template");
            }
            if ((c = c.call(r.view, i.slice(e[3], e[5]), function (e) {
              return a.render(e, r, o);
            })) != null) {
              s += c;
            }
          } else {
            s += this.renderTokens(e[4], r, o, i);
          }
          return s;
        }
      };
      m.prototype.renderInverted = function (e, n, r, o) {
        var i = n.lookup(e[1]);
        if (!i || t(i) && i.length === 0) {
          return this.renderTokens(e[4], n, r, o);
        }
      };
      m.prototype.indentPartial = function (e, t, n) {
        var r = t.replace(/[^ \t]/g, "");
        for (var o = e.split("\n"), i = 0; i < o.length; i++) {
          if (o[i].length && (i > 0 || !n)) {
            o[i] = r + o[i];
          }
        }
        return o.join("\n");
      };
      m.prototype.renderPartial = function (e, t, r, o) {
        if (r) {
          var i = n(r) ? r(e[1]) : r[e[1]];
          if (i != null) {
            var a = e[6];
            var s = e[5];
            var c = e[4];
            var l = i;
            if (s == 0 && c) {
              l = this.indentPartial(i, c, a);
            }
            return this.renderTokens(this.parse(l, o), t, r, l);
          }
        }
      };
      m.prototype.unescapedValue = function (e, t) {
        var n = t.lookup(e[1]);
        if (n != null) {
          return n;
        }
      };
      m.prototype.escapedValue = function (e, t) {
        var n = t.lookup(e[1]);
        if (n != null) {
          return v.escape(n);
        }
      };
      m.prototype.rawValue = function (e) {
        return e[1];
      };
      var v = {
        name: "mustache.js",
        version: "3.2.1",
        tags: ["{{", "}}"],
        clearCache: undefined,
        escape: undefined,
        parse: undefined,
        render: undefined,
        to_html: undefined,
        Scanner: undefined,
        Context: undefined,
        Writer: undefined
      };
      var y = new m();
      v.clearCache = function () {
        return y.clearCache();
      };
      v.parse = function (e, t) {
        return y.parse(e, t);
      };
      v.render = function (e, n, r, o) {
        if (typeof e != "string") {
          throw new TypeError("Invalid template! Template should be a \"string\" but \"" + (t(i = e) ? "array" : typeof i) + "\" was given as the first argument for mustache#render(template, view, partials)");
        }
        var i;
        return y.render(e, n, r, o);
      };
      v.to_html = function (e, t, r, o) {
        var i = v.render(e, t, r);
        if (!n(o)) {
          return i;
        }
        o(i);
      };
      v.escape = function (e) {
        return String(e).replace(/[&<>"'`=\/]/g, function (e) {
          return c[e];
        });
      };
      v.Scanner = h;
      v.Context = g;
      v.Writer = m;
      return v;
    }();
  },
  4: function (e, t, n) {
    (function (t) {
      var r;
      r = r || function (e, r) {
        var o;
        if (typeof window != "undefined" && window.crypto) {
          o = window.crypto;
        }
        if (typeof self != "undefined" && self.crypto) {
          o = self.crypto;
        }
        if (typeof globalThis != "undefined" && globalThis.crypto) {
          o = globalThis.crypto;
        }
        if (!o && typeof window != "undefined" && window.msCrypto) {
          o = window.msCrypto;
        }
        if (!o && t !== undefined && t.crypto) {
          o = t.crypto;
        }
        if (!o) {
          try {
            o = n(50);
          } catch (e) {}
        }
        function i() {
          if (o) {
            if (typeof o.getRandomValues == "function") {
              try {
                return o.getRandomValues(new Uint32Array(1))[0];
              } catch (e) {}
            }
            if (typeof o.randomBytes == "function") {
              try {
                return o.randomBytes(4).readInt32LE();
              } catch (e) {}
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }
        var a = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            e.prototype = t;
            n = new e();
            e.prototype = null;
            return n;
          };
        }();
        var s = {};
        var c = s.lib = {};
        var l = c.Base = {
          extend: function (e) {
            var t = a(this);
            if (e) {
              t.mixIn(e);
            }
            if (!t.hasOwnProperty("init") || this.init === t.init) {
              t.init = function () {
                t.$super.init.apply(this, arguments);
              };
            }
            t.init.prototype = t;
            t.$super = this;
            return t;
          },
          create: function () {
            var e = this.extend();
            e.init.apply(e, arguments);
            return e;
          },
          init: function () {},
          mixIn: function (e) {
            for (var t in e) {
              if (e.hasOwnProperty(t)) {
                this[t] = e[t];
              }
            }
            if (e.hasOwnProperty("toString")) {
              this.toString = e.toString;
            }
          },
          clone: function () {
            return this.init.prototype.extend(this);
          }
        };
        var u = c.WordArray = l.extend({
          init: function (e, t) {
            e = this.words = e || [];
            this.sigBytes = t ?? e.length * 4;
          },
          toString: function (e) {
            return (e || f).stringify(this);
          },
          concat: function (e) {
            var t = this.words;
            var n = e.words;
            var r = this.sigBytes;
            var o = e.sigBytes;
            this.clamp();
            if (r % 4) {
              for (var i = 0; i < o; i++) {
                var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                t[r + i >>> 2] |= a << 24 - (r + i) % 4 * 8;
              }
            } else {
              for (var s = 0; s < o; s += 4) {
                t[r + s >>> 2] = n[s >>> 2];
              }
            }
            this.sigBytes += o;
            return this;
          },
          clamp: function () {
            var t = this.words;
            var n = this.sigBytes;
            t[n >>> 2] &= -1 << 32 - n % 4 * 8;
            t.length = e.ceil(n / 4);
          },
          clone: function () {
            var e = l.clone.call(this);
            e.words = this.words.slice(0);
            return e;
          },
          random: function (e) {
            var t = [];
            for (var n = 0; n < e; n += 4) {
              t.push(i());
            }
            return new u.init(t, e);
          }
        });
        var d = s.enc = {};
        var f = d.Hex = {
          stringify: function (e) {
            var t = e.words;
            for (var n = e.sigBytes, r = [], o = 0; o < n; o++) {
              var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              r.push((i >>> 4).toString(16));
              r.push((i & 15).toString(16));
            }
            return r.join("");
          },
          parse: function (e) {
            for (var t = e.length, n = [], r = 0; r < t; r += 2) {
              n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
            }
            return new u.init(n, t / 2);
          }
        };
        var p = d.Latin1 = {
          stringify: function (e) {
            var t = e.words;
            for (var n = e.sigBytes, r = [], o = 0; o < n; o++) {
              var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              r.push(String.fromCharCode(i));
            }
            return r.join("");
          },
          parse: function (e) {
            for (var t = e.length, n = [], r = 0; r < t; r++) {
              n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - r % 4 * 8;
            }
            return new u.init(n, t);
          }
        };
        var h = d.Utf8 = {
          stringify: function (e) {
            try {
              return decodeURIComponent(escape(p.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function (e) {
            return p.parse(unescape(encodeURIComponent(e)));
          }
        };
        var g = c.BufferedBlockAlgorithm = l.extend({
          reset: function () {
            this._data = new u.init();
            this._nDataBytes = 0;
          },
          _append: function (e) {
            if (typeof e == "string") {
              e = h.parse(e);
            }
            this._data.concat(e);
            this._nDataBytes += e.sigBytes;
          },
          _process: function (t) {
            var n;
            var r = this._data;
            var o = r.words;
            var i = r.sigBytes;
            var a = this.blockSize;
            var s = i / (a * 4);
            var c = (s = t ? e.ceil(s) : e.max((s | 0) - this._minBufferSize, 0)) * a;
            var l = e.min(c * 4, i);
            if (c) {
              for (var d = 0; d < c; d += a) {
                this._doProcessBlock(o, d);
              }
              n = o.splice(0, c);
              r.sigBytes -= l;
            }
            return new u.init(n, l);
          },
          clone: function () {
            var e = l.clone.call(this);
            e._data = this._data.clone();
            return e;
          },
          _minBufferSize: 0
        });
        c.Hasher = g.extend({
          cfg: l.extend(),
          init: function (e) {
            this.cfg = this.cfg.extend(e);
            this.reset();
          },
          reset: function () {
            g.reset.call(this);
            this._doReset();
          },
          update: function (e) {
            this._append(e);
            this._process();
            return this;
          },
          finalize: function (e) {
            if (e) {
              this._append(e);
            }
            return this._doFinalize();
          },
          blockSize: 16,
          _createHelper: function (e) {
            return function (t, n) {
              return new e.init(n).finalize(t);
            };
          },
          _createHmacHelper: function (e) {
            return function (t, n) {
              return new m.HMAC.init(e, n).finalize(t);
            };
          }
        });
        var m = s.algo = {};
        return s;
      }(Math);
      e.exports = r;
    }).call(this, n(13));
  },
  40: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    u = n(4);
    o = (r = u).lib;
    i = o.WordArray;
    a = o.Hasher;
    s = r.algo;
    c = [];
    l = s.SHA1 = a.extend({
      _doReset: function () {
        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        var n = this._hash.words;
        var r = n[0];
        var o = n[1];
        var i = n[2];
        var a = n[3];
        var s = n[4];
        for (var l = 0; l < 80; l++) {
          if (l < 16) {
            c[l] = e[t + l] | 0;
          } else {
            var u = c[l - 3] ^ c[l - 8] ^ c[l - 14] ^ c[l - 16];
            c[l] = u << 1 | u >>> 31;
          }
          var d = (r << 5 | r >>> 27) + s + c[l];
          d += l < 20 ? 1518500249 + (o & i | ~o & a) : l < 40 ? 1859775393 + (o ^ i ^ a) : l < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514;
          s = a;
          a = i;
          i = o << 30 | o >>> 2;
          o = r;
          r = d;
        }
        n[0] = n[0] + r | 0;
        n[1] = n[1] + o | 0;
        n[2] = n[2] + i | 0;
        n[3] = n[3] + a | 0;
        n[4] = n[4] + s | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var t = e.words;
        var n = this._nDataBytes * 8;
        var r = e.sigBytes * 8;
        t[r >>> 5] |= 128 << 24 - r % 32;
        t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296);
        t[15 + (r + 64 >>> 9 << 4)] = n;
        e.sigBytes = t.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var e = a.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    r.SHA1 = a._createHelper(l);
    r.HmacSHA1 = a._createHmacHelper(l);
    e.exports = u.SHA1;
  },
  41: function (e, t, n) {
    var r;
    r = n(4);
    n(26);
    (function () {
      var e = r;
      var t = e.lib.Hasher;
      var n = e.x64;
      var o = n.Word;
      var i = n.WordArray;
      var a = e.algo;
      function s() {
        return o.create.apply(o, arguments);
      }
      var c = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)];
      var l = [];
      (function () {
        for (var e = 0; e < 80; e++) {
          l[e] = s();
        }
      })();
      var u = a.SHA512 = t.extend({
        _doReset: function () {
          this._hash = new i.init([new o.init(1779033703, 4089235720), new o.init(3144134277, 2227873595), new o.init(1013904242, 4271175723), new o.init(2773480762, 1595750129), new o.init(1359893119, 2917565137), new o.init(2600822924, 725511199), new o.init(528734635, 4215389547), new o.init(1541459225, 327033209)]);
        },
        _doProcessBlock: function (e, t) {
          var n = this._hash.words;
          var r = n[0];
          var o = n[1];
          var i = n[2];
          var a = n[3];
          var s = n[4];
          var u = n[5];
          var d = n[6];
          var f = n[7];
          var p = r.high;
          var h = r.low;
          var g = o.high;
          var m = o.low;
          var v = i.high;
          var y = i.low;
          var k = a.high;
          var b = a.low;
          var _ = s.high;
          var T = s.low;
          var S = u.high;
          var x = u.low;
          var w = d.high;
          var E = d.low;
          var A = f.high;
          var C = f.low;
          var O = p;
          var I = h;
          var N = g;
          var D = m;
          var R = v;
          var L = y;
          var P = k;
          var B = b;
          var U = _;
          var M = T;
          var V = S;
          var H = x;
          var j = w;
          var F = E;
          var z = A;
          var G = C;
          for (var W = 0; W < 80; W++) {
            var q;
            var Y;
            var K = l[W];
            if (W < 16) {
              Y = K.high = e[t + W * 2] | 0;
              q = K.low = e[t + W * 2 + 1] | 0;
            } else {
              var X = l[W - 15];
              var $ = X.high;
              var J = X.low;
              var Q = ($ >>> 1 | J << 31) ^ ($ >>> 8 | J << 24) ^ $ >>> 7;
              var Z = (J >>> 1 | $ << 31) ^ (J >>> 8 | $ << 24) ^ (J >>> 7 | $ << 25);
              var ee = l[W - 2];
              var te = ee.high;
              var ne = ee.low;
              var re = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6;
              var oe = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26);
              var ie = l[W - 7];
              var ae = ie.high;
              var se = ie.low;
              var ce = l[W - 16];
              var le = ce.high;
              var ue = ce.low;
              Y = (Y = (Y = Q + ae + ((q = Z + se) >>> 0 < Z >>> 0 ? 1 : 0)) + re + ((q += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + le + ((q += ue) >>> 0 < ue >>> 0 ? 1 : 0);
              K.high = Y;
              K.low = q;
            }
            var de;
            var fe = U & V ^ ~U & j;
            var pe = M & H ^ ~M & F;
            var he = O & N ^ O & R ^ N & R;
            var ge = I & D ^ I & L ^ D & L;
            var me = (O >>> 28 | I << 4) ^ (O << 30 | I >>> 2) ^ (O << 25 | I >>> 7);
            var ve = (I >>> 28 | O << 4) ^ (I << 30 | O >>> 2) ^ (I << 25 | O >>> 7);
            var ye = (U >>> 14 | M << 18) ^ (U >>> 18 | M << 14) ^ (U << 23 | M >>> 9);
            var ke = (M >>> 14 | U << 18) ^ (M >>> 18 | U << 14) ^ (M << 23 | U >>> 9);
            var be = c[W];
            var _e = be.high;
            var Te = be.low;
            var Se = z + ye + ((de = G + ke) >>> 0 < G >>> 0 ? 1 : 0);
            var xe = ve + ge;
            z = j;
            G = F;
            j = V;
            F = H;
            V = U;
            H = M;
            U = P + (Se = (Se = (Se = Se + fe + ((de += pe) >>> 0 < pe >>> 0 ? 1 : 0)) + _e + ((de += Te) >>> 0 < Te >>> 0 ? 1 : 0)) + Y + ((de += q) >>> 0 < q >>> 0 ? 1 : 0)) + ((M = B + de | 0) >>> 0 < B >>> 0 ? 1 : 0) | 0;
            P = R;
            B = L;
            R = N;
            L = D;
            N = O;
            D = I;
            O = Se + (me + he + (xe >>> 0 < ve >>> 0 ? 1 : 0)) + ((I = de + xe | 0) >>> 0 < de >>> 0 ? 1 : 0) | 0;
          }
          h = r.low = h + I;
          r.high = p + O + (h >>> 0 < I >>> 0 ? 1 : 0);
          m = o.low = m + D;
          o.high = g + N + (m >>> 0 < D >>> 0 ? 1 : 0);
          y = i.low = y + L;
          i.high = v + R + (y >>> 0 < L >>> 0 ? 1 : 0);
          b = a.low = b + B;
          a.high = k + P + (b >>> 0 < B >>> 0 ? 1 : 0);
          T = s.low = T + M;
          s.high = _ + U + (T >>> 0 < M >>> 0 ? 1 : 0);
          x = u.low = x + H;
          u.high = S + V + (x >>> 0 < H >>> 0 ? 1 : 0);
          E = d.low = E + F;
          d.high = w + j + (E >>> 0 < F >>> 0 ? 1 : 0);
          C = f.low = C + G;
          f.high = A + z + (C >>> 0 < G >>> 0 ? 1 : 0);
        },
        _doFinalize: function () {
          var e = this._data;
          var t = e.words;
          var n = this._nDataBytes * 8;
          var r = e.sigBytes * 8;
          t[r >>> 5] |= 128 << 24 - r % 32;
          t[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296);
          t[31 + (r + 128 >>> 10 << 5)] = n;
          e.sigBytes = t.length * 4;
          this._process();
          return this._hash.toX32();
        },
        clone: function () {
          var e = t.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        },
        blockSize: 32
      });
      e.SHA512 = t._createHelper(u);
      e.HmacSHA512 = t._createHmacHelper(u);
    })();
    e.exports = r.SHA512;
  },
  5: function (e, t, n) {
    "use strict";

    var r = n(11);
    var o = n(38);
    class i {
      constructor() {
        this.SOURCE_POPUP_PAGE = 0;
        this.SOURCE_OPTIONS_PAGE = 10;
        this.SOURCE_CONTENT_SCRIPT = 20;
        this.SOURCE_BACKGROUND_PAGE = 30;
        this.LEGACY_METRICS_NAME_MAP = {
          ButtonClicked: "TryItNowButtonClicked",
          CheckBoxClicked: "OneClickCheckbox"
        };
        this.PAGE_WELCOME_SCREEN = 0;
        this.PAGE_DOWNLOADS_LIST = 1;
        this.PAGE_ONE_CLICK_DOWNLOAD = 2;
        this.PAGE_NO_MEDIA_FOUND = 3;
        this.PAGE_OPTIONS = 4;
        this.PAGE_CONTENT_SHOW_CONTROLS = 5;
        this.PAGE_CONTENT_NO_MEDIA = 9;
        this.YOUTUBE_ERROR_WALL_BY_ADS_BLOCK = 0;
        this.YOUTUBE_ERROR_POPUP_BY_ADS_BLOCK = 1;
        this.YOUTUBE_ERROR_WALL_BY_SAVIOR = 2;
        this.YOUTUBE_ERROR_POPUP_BY_SAVIOR = 3;
        this.YOUTUBE_ERROR_WALL_BY_ADGUARD = 4;
        this.YOUTUBE_ERROR_POPUP_WITH_CLOSE_BY_ADGUARD = 5;
        this.YOUTUBE_ERROR_POPUP_WITHOUT_CLOSE_BY_ADGUARD = 6;
        this.YOUTUBE_ERROR_POPUP_WITH_CLOSE_BY_ADS_BLOCK = 7;
        this.YOUTUBE_ERROR_POPUP_WITHOUT_CLOSE_BY_ADS_BLOCK = 8;
        this.YOUTUBE_ERROR_POPUP_WITH_CLOSE_BY_SAVIOR = 9;
        this.YOUTUBE_ERROR_POPUP_WITHOUT_CLOSE_BY_SAVIOR = 10;
        this.YOUTUBE_AUTO_CLOSE_POPUP_WITH_CLOSE = 11;
        this.YOUTUBE_AUTO_CLOSE_POPUP_WITHOUT_CLOSE = 12;
        this.YOUTUBE_VIDEO_ERROR_ADBLOCK = 13;
        this.YOUTUBE_VIDEO_ERROR_ADGUARD = 14;
        this.YOUTUBE_VIDEO_ERROR_ADBLOCK_OFF = 15;
        this.YOUTUBE_VIDEO_ERROR_ADGUARD_OFF = 16;
        this.YOUTUBE_ADGUARD_OFF = 0;
        this.YOUTUBE_ADGUARD_ON = 1;
        this.YOUTUBE_ADGUARD_API_ERROR_TURN_OFF_ABP = 2;
        this.YOUTUBE_ADGUARD_API_ERROR_CHECK_TURN_OFF_ABP = 3;
        this.YOUTUBE_ADGUARD_NO_OFFSCREEN = 4;
        this.YOUTUBE_ADGUARD_NO_SCRIPT = 5;
        this.YOUTUBE_ADGUARD_NO_TAB_ID = 6;
        this.YOUTUBE_ADGUARD_USER_SCRIPT = 7;
        this.YOUTUBE_ADGUARD_SCRIPTING = 8;
        this.YOUTUBE_ADGUARD_IS_GROUP_TEST = 9;
        this.YOUTUBE_ADGUARD_HAS_EVENT = 10;
        this.YOUTUBE_ADGUARD_REGISTER_INJECT = 11;
        this.YOUTUBE_SKIP_ADS_SHOWN = 1;
        this.YOUTUBE_SKIP_ADS_FAST_FWD = 2;
        this.YOUTUBE_SKIPPABLE_ADS = 3;
        this.YOUTUBE_UNSKIPPABLE_ADS = 4;
        this.YOUTUBE_AUDIO_CHANNEL_WIDGET_SHOW = 1;
        this.YOUTUBE_AUDIO_CHANNEL_WIDGET_CHANGE = 2;
        this.YOUTUBE_AUDIO_CHANNEL_POPUP_SHOW = 3;
        this.YOUTUBE_AUDIO_CHANNEL_POPUP_CHANGE = 4;
        this.DOWNLOAD_AUTO = 0;
        this.DOWNLOAD_BUTTON = 1;
        this.DOWNLOAD_ALL = 2;
        this.DOWNLOAD_REQUEST_SIZE = 3;
        this.DOWNLOAD_REQUEST_SIZE_FAILED = 4;
        this.DOWNLOAD_SOUND_ONLY = 5;
        this.DOWNLOAD_YOUTUBE_ERROR = 6;
        this.DOWNLOAD_CANCELED = 7;
        this.DOWNLOAD_SUBTITLES = 9;
        this.DOWNLOAD_CURRENT_IMAGE = 0;
        this.DOWNLOAD_ALL_IMAGES = 1;
        this.BUTTON_HIDE_WITH_IMAGE = 0;
        this.BUTTON_HIDE_PERMANENT_WITH_IMAGE = 1;
        this.BUTTON_MAIN = 0;
        this.BUTTON_TRY_IT_NOW = 1;
        this.BUTTON_SHOW_DOWNLOADS = 2;
        this.BUTTON_OPEN_SETTINGS = 3;
        this.BUTTON_DOWNLOAD_ALL = 4;
        this.BUTTON_MORE_OPTIONS = 5;
        this.BUTTON_HIDE_PERMANENT = 6;
        this.BUTTON_FAKE_QUALITY = 7;
        this.BUTTON_DETACH = 8;
        this.BUTTON_HIDE = 9;
        this.CHECK_BOX_ENABLE_ONE_CLICK = 0;
        this.CHECK_BOX_SHOW_ON_PAGE_BUTTONS = 2;
        this.CHECK_BOX_PREFER_LAST_QUALITY = 4;
        this.CHECK_BOX_DETACH_ENABLED = 6;
        this.CHECK_BOX_DARK_THEM_ENABLED = 8;
        this.PIP_DETACH_CLICK = 0;
        this.PIP_RESTORE_CLICK = 1;
        this.PIP_SITE_LINK_CLICK = 2;
        this.PLAY_NOW_SHOWN = 0;
        this.PLAY_NOW_WIDGET_CLICKED = 1;
        this.PLAY_NOW_TOOLTIP_SHOWN = 2;
        this.PLAY_NOW_TOOLTIP_CLOSED = 3;
        this.PLAY_NOW_TOOLTIP_NOT_SHOW_AGAIN = 4;
        this.PLAY_NOW_TOOLTIP_BOTTOM_SHOWN = 5;
        this.PLAY_NOW_TOOLTIP_BOTTOM_CLOSED = 6;
        this.PLAY_NOW_TOOLTIP_BOTTOM_NOT_SHOW_AGAIN = 7;
        this.EXTENSION_MP4 = 1;
        this.EXTENSION_MP3 = 2;
        this.EXTENSION_WEBM = 3;
        this.EXTENSION_3GP = 4;
        this.EXTENSION_SRT = 5;
        this.EXTENSION_OTHER = 6;
        this.SEND_MOBILE_SHOW = 1;
        this.SEND_MOBILE_CLICK = 2;
        this.SEND_MOBILE_CLICK_CLOSE = 3;
        this.SEND_MOBILE_CLICK_A = 4;
        this.SEND_MOBILE_CLICK_G = 5;
        this.SEND_MOBILE_CLICK_W = 6;
        this.SEND_MOBILE_CLICK_AUDIO = 7;
        this.SEND_MOBILE_ERROR = 9;
        this.TURN_LIGHT_ON = 0;
        this.TURN_LIGHT_OFF = 1;
        this.ONBOARD_POPUP_SHOWN = 1;
        this.ONBOARD_POPUP_SHOWN_SECOND = 1;
        this.ONBOARD_POPUP_SHOWN_THIRD = 1;
        this.ONBOARD_TRY_NOW_BTN_CLICK = 1;
        this.CLOSE_ONBOARD_POPUP = 1;
        this.OPEN_SETTING_POPUP = 1;
        this.OPEN_SETTING_CONTENT = 2;
        this.SKIP_VIDEO = 0;
        this.SETTING_ENABLE_SKIP_VIDEO = 1;
        this.SETTING_DISABLE_SKIP_VIDEO = 2;
        this.SIDEPANEL_OPEN_ICON_CLICK = 1;
        this.SIDEPANEL_OPEN_DONE = 2;
        this.DOWNLOAD_SIDEPANEL_CLICK_VIDEO = 1;
        this.DOWNLOAD_SIDEPANEL_CLICK_AUDIO = 2;
        this.DOWNLOAD_SIDEPANEL_CLICK_SUBTITLE = 3;
        this.DOWNLOAD_SIDEPANEL_CLICK_IMAGE = 4;
        this.DOWNLOAD_SIDEPANEL_CLICK_BULK_MEDIA = 5;
        this.DOWNLOAD_SIDEPANEL_CLICK_BULK_IMAGE = 6;
        this.DOWNLOAD_SIDEPANEL_VIDEO_DIRECT = 1;
        this.DOWNLOAD_SIDEPANEL_AUDIO_DIRECT = 2;
        this.DOWNLOAD_SIDEPANEL_SUBTITLE_DIRECT = 3;
        this.DOWNLOAD_SIDEPANEL_IMAGE_DIRECT = 4;
        this.ONECLICK_CHECKBOX_ON = 1;
        this.ONECLICK_CHECKBOX_OFF = 2;
        this.ONECLICK_AUTO_QUALITY_HIGH = 18;
        this.ONECLICK_AUTO_QUALITY_STANDARD = 19;
        this.ONECLICK_AUTO_QUALITY_LOW = 20;
        this.DOWNLOAD_SIDEPANEL_QUALITY_MOBILE = 10;
        this.DOWNLOAD_SIDEPANEL_QUALITY_LOW = 11;
        this.DOWNLOAD_SIDEPANEL_QUALITY_MEDIUM = 12;
        this.DOWNLOAD_SIDEPANEL_QUALITY_STANDARD = 13;
        this.DOWNLOAD_SIDEPANEL_QUALITY_HD = 14;
        this.DOWNLOAD_SIDEPANEL_QUALITY_FULLHD = 15;
        this.DOWNLOAD_SIDEPANEL_QUALITY_QHD = 16;
        this.DOWNLOAD_SIDEPANEL_QUALITY_4K = 17;
        this.DOWNLOAD_SIDEPANEL_QUALITY_8K = 18;
        this.DOWNLOAD_SIDEPANEL_AUDIO_128 = 20;
        this.DOWNLOAD_SIDEPANEL_AUDIO_320 = 21;
        this.DOWNLOAD_SIDEPANEL_AUDIO_LOSSLESS = 22;
        this.SELECT_ALL_TOGGLE_ON = 1;
        this.SELECT_ALL_TOGGLE_OFF = 2;
        this.IMAGE_SIZE_FILTER_ALL = 0;
        this.IMAGE_SIZE_FILTER_SMALL = 1;
        this.IMAGE_SIZE_FILTER_MEDIUM = 2;
        this.IMAGE_SIZE_FILTER_LARGE = 3;
      }
      get source() {
        if (!chrome.action && !chrome.pageAction) {
          return this.SOURCE_CONTENT_SCRIPT;
        }
        switch (location.pathname) {
          case "/popup.html":
            return this.SOURCE_POPUP_PAGE;
          case "/options.html":
            return this.SOURCE_OPTIONS_PAGE;
          case "/background.js":
          case "/background.html":
            return this.SOURCE_BACKGROUND_PAGE;
          default:
            return null;
        }
      }
      _getFullName(e) {
        return "Savior." + (this.LEGACY_METRICS_NAME_MAP[e] || e);
      }
      _getTotalValue(e, t, n) {
        if (e.indexOf("Refr") === 0 || n || ["PageShown", "YTBlockType", "YTSkipAdShown", "ForceDisableAdblockOnYoutube"].includes(e) || (e == null ? undefined : e.startsWith("Onboarding.")) || typeof t != "number") {
          return t;
        } else {
          return t + this.source;
        }
      }
      _doLog(e, t, n) {
        var i = this._getFullName(t);
        if (!(parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)?.[2] || "") <= 50)) {
          if (this.source === this.SOURCE_CONTENT_SCRIPT) {
            Object(o.a)({
              type: "metrics",
              method: "log",
              params: {
                name: t,
                value: n
              }
            });
          } else if (chrome.metricsPrivate) {
            switch (e) {
              case "recordSmallCount":
                chrome.metricsPrivate.recordValue({
                  metricName: i,
                  type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                  min: 0,
                  max: 100,
                  buckets: 100
                }, n);
                break;
              case "recordValue":
                chrome.metricsPrivate.recordValue({
                  metricName: i,
                  type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                  min: 0,
                  max: 1000,
                  buckets: 1002
                }, n);
                break;
              case "recordCustomData":
                chrome.metricsPrivate.recordCustomData(n);
                break;
              case "recordLongTime":
                chrome.metricsPrivate.recordLongTime(i, n);
                break;
              case "recordEnumerationValue":
                chrome.metricsPrivate.recordEnumerationValue(i, n, 1000);
            }
          } else if (e === "recordCustomData") {
            if (n && n.length === 1) {
              console.info("%c[Metrics] %crecordCustomData %c%s", "color:gray", "color:silver", "color: lightgreen", n[0].key, JSON.parse(n[0].value));
              return;
            }
            console.info("%c[Metrics]", "color:gray", "recordCustomData", n);
          } else {
            console.info("%c[Metrics]", "color:gray", e, i, n);
          }
        }
      }
      static _getMethodByName(e) {
        switch (e) {
          case "Refr":
          case "RefrSE":
          case "RefrFE":
          case "RefrPin":
            return "recordValue";
          case "recordCustomData":
            return "recordCustomData";
          default:
            return "recordEnumerationValue";
        }
      }
      log(e, t, n) {
        try {
          var o = i._getMethodByName(e);
          if (o === "recordCustomData" && r.a.CUSTOM_METRICS_JSON) {
            this._doLog(o, e, t);
            return;
          }
          var a = this._getTotalValue(e, t, n);
          this._doLog(o, e, a);
        } catch (e) {
          console.warn("Catched", e);
        }
      }
      logYtExtension(e) {
        switch (e.toLowerCase()) {
          case "mp4":
            this.log("YtExtension", this.EXTENSION_MP4);
            break;
          case "mp3":
            this.log("YtExtension", this.EXTENSION_MP3);
            break;
          case "webm":
            this.log("YtExtension", this.EXTENSION_WEBM);
            break;
          case "3gp":
            this.log("YtExtension", this.EXTENSION_3GP);
            break;
          case "srt":
            this.log("YtExtension", this.EXTENSION_SRT);
            break;
          default:
            this.log("YtExtension", this.EXTENSION_OTHER);
        }
      }
      logSendMobile(e) {
        this.log("SendMobile", e);
      }
      logFromContentScript(e, t) {
        this.log(e, t, true);
      }
      logRequest(e) {
        var t = Object.keys(e).reduce((t, n, r) => t += `${r ? "&" : ""}${n}=${e[n]}`, "?");
        fetch("https://coccoc.com/log" + t);
      }
    }
    t.a = new i();
  },
  50: function (e, t) {},
  51: function (e, t, n) {
    var r;
    r = n(4);
    (function () {
      if (typeof ArrayBuffer == "function") {
        var e = r.lib.WordArray;
        var t = e.init;
        (e.init = function (e) {
          if (e instanceof ArrayBuffer) {
            e = new Uint8Array(e);
          }
          if (e instanceof Int8Array || typeof Uint8ClampedArray != "undefined" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) {
            e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          }
          if (e instanceof Uint8Array) {
            for (var n = e.byteLength, r = [], o = 0; o < n; o++) {
              r[o >>> 2] |= e[o] << 24 - o % 4 * 8;
            }
            t.call(this, r, n);
          } else {
            t.apply(this, arguments);
          }
        }).prototype = e;
      }
    })();
    e.exports = r.lib.WordArray;
  },
  52: function (e, t, n) {
    var r;
    r = n(4);
    (function () {
      var e = r;
      var t = e.lib.WordArray;
      var n = e.enc;
      function o(e) {
        return e << 8 & -16711936 | e >>> 8 & 16711935;
      }
      n.Utf16 = n.Utf16BE = {
        stringify: function (e) {
          var t = e.words;
          for (var n = e.sigBytes, r = [], o = 0; o < n; o += 2) {
            var i = t[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
            r.push(String.fromCharCode(i));
          }
          return r.join("");
        },
        parse: function (e) {
          for (var n = e.length, r = [], o = 0; o < n; o++) {
            r[o >>> 1] |= e.charCodeAt(o) << 16 - o % 2 * 16;
          }
          return t.create(r, n * 2);
        }
      };
      n.Utf16LE = {
        stringify: function (e) {
          var t = e.words;
          for (var n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
            var a = o(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
            r.push(String.fromCharCode(a));
          }
          return r.join("");
        },
        parse: function (e) {
          for (var n = e.length, r = [], i = 0; i < n; i++) {
            r[i >>> 1] |= o(e.charCodeAt(i) << 16 - i % 2 * 16);
          }
          return t.create(r, n * 2);
        }
      };
    })();
    e.exports = r.enc.Utf16;
  },
  53: function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    o = (r = i).lib.WordArray;
    r.enc.Base64url = {
      stringify: function (e, t = true) {
        var n = e.words;
        var r = e.sigBytes;
        var o = t ? this._safe_map : this._map;
        e.clamp();
        var i = [];
        for (var a = 0; a < r; a += 3) {
          var s = (n[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (n[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | n[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255;
          for (var c = 0; c < 4 && a + c * 0.75 < r; c++) {
            i.push(o.charAt(s >>> (3 - c) * 6 & 63));
          }
        }
        var l = o.charAt(64);
        if (l) {
          while (i.length % 4) {
            i.push(l);
          }
        }
        return i.join("");
      },
      parse: function (e, t = true) {
        var n = e.length;
        var r = t ? this._safe_map : this._map;
        var i = this._reverseMap;
        if (!i) {
          i = this._reverseMap = [];
          for (var a = 0; a < r.length; a++) {
            i[r.charCodeAt(a)] = a;
          }
        }
        var s = r.charAt(64);
        if (s) {
          var c = e.indexOf(s);
          if (c !== -1) {
            n = c;
          }
        }
        return function (e, t, n) {
          var r = [];
          var i = 0;
          for (var a = 0; a < t; a++) {
            if (a % 4) {
              var s = n[e.charCodeAt(a - 1)] << a % 4 * 2;
              var c = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
              var l = s | c;
              r[i >>> 2] |= l << 24 - i % 4 * 8;
              i++;
            }
          }
          return o.create(r, i);
        }(e, n, i);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    };
    e.exports = i.enc.Base64url;
  },
  54: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    c = n(4);
    n(34);
    o = (r = c).lib.WordArray;
    i = r.algo;
    a = i.SHA256;
    s = i.SHA224 = a.extend({
      _doReset: function () {
        this._hash = new o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      },
      _doFinalize: function () {
        var e = a._doFinalize.call(this);
        e.sigBytes -= 4;
        return e;
      }
    });
    r.SHA224 = a._createHelper(s);
    r.HmacSHA224 = a._createHmacHelper(s);
    e.exports = c.SHA224;
  },
  55: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    u = n(4);
    n(26);
    n(41);
    o = (r = u).x64;
    i = o.Word;
    a = o.WordArray;
    s = r.algo;
    c = s.SHA512;
    l = s.SHA384 = c.extend({
      _doReset: function () {
        this._hash = new a.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]);
      },
      _doFinalize: function () {
        var e = c._doFinalize.call(this);
        e.sigBytes -= 16;
        return e;
      }
    });
    r.SHA384 = c._createHelper(l);
    r.HmacSHA384 = c._createHmacHelper(l);
    e.exports = u.SHA384;
  },
  56: function (e, t, n) {
    var r;
    r = n(4);
    n(26);
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.x64.Word;
      var s = t.algo;
      var c = [];
      var l = [];
      var u = [];
      (function () {
        var e = 1;
        var t = 0;
        for (var n = 0; n < 24; n++) {
          c[e + t * 5] = (n + 1) * (n + 2) / 2 % 64;
          var r = (e * 2 + t * 3) % 5;
          e = t % 5;
          t = r;
        }
        for (e = 0; e < 5; e++) {
          for (t = 0; t < 5; t++) {
            l[e + t * 5] = t + (e * 2 + t * 3) % 5 * 5;
          }
        }
        var o = 1;
        for (var i = 0; i < 24; i++) {
          var s = 0;
          var d = 0;
          for (var f = 0; f < 7; f++) {
            if (o & 1) {
              var p = (1 << f) - 1;
              if (p < 32) {
                d ^= 1 << p;
              } else {
                s ^= 1 << p - 32;
              }
            }
            if (o & 128) {
              o = o << 1 ^ 113;
            } else {
              o <<= 1;
            }
          }
          u[i] = a.create(s, d);
        }
      })();
      var d = [];
      (function () {
        for (var e = 0; e < 25; e++) {
          d[e] = a.create();
        }
      })();
      var f = s.SHA3 = i.extend({
        cfg: i.cfg.extend({
          outputLength: 512
        }),
        _doReset: function () {
          var e = this._state = [];
          for (var t = 0; t < 25; t++) {
            e[t] = new a.init();
          }
          this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
        },
        _doProcessBlock: function (e, t) {
          var n = this._state;
          for (var r = this.blockSize / 2, o = 0; o < r; o++) {
            var i = e[t + o * 2];
            var a = e[t + o * 2 + 1];
            i = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
            a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
            (C = n[o]).high ^= a;
            C.low ^= i;
          }
          for (var s = 0; s < 24; s++) {
            for (var f = 0; f < 5; f++) {
              var p = 0;
              var h = 0;
              for (var g = 0; g < 5; g++) {
                p ^= (C = n[f + g * 5]).high;
                h ^= C.low;
              }
              var m = d[f];
              m.high = p;
              m.low = h;
            }
            for (f = 0; f < 5; f++) {
              var v = d[(f + 4) % 5];
              var y = d[(f + 1) % 5];
              var k = y.high;
              var b = y.low;
              p = v.high ^ (k << 1 | b >>> 31);
              h = v.low ^ (b << 1 | k >>> 31);
              g = 0;
              for (; g < 5; g++) {
                (C = n[f + g * 5]).high ^= p;
                C.low ^= h;
              }
            }
            for (var _ = 1; _ < 25; _++) {
              var T = (C = n[_]).high;
              var S = C.low;
              var x = c[_];
              if (x < 32) {
                p = T << x | S >>> 32 - x;
                h = S << x | T >>> 32 - x;
              } else {
                p = S << x - 32 | T >>> 64 - x;
                h = T << x - 32 | S >>> 64 - x;
              }
              var w = d[l[_]];
              w.high = p;
              w.low = h;
            }
            var E = d[0];
            var A = n[0];
            E.high = A.high;
            E.low = A.low;
            f = 0;
            for (; f < 5; f++) {
              for (g = 0; g < 5; g++) {
                var C = n[_ = f + g * 5];
                var O = d[_];
                var I = d[(f + 1) % 5 + g * 5];
                var N = d[(f + 2) % 5 + g * 5];
                C.high = O.high ^ ~I.high & N.high;
                C.low = O.low ^ ~I.low & N.low;
              }
            }
            C = n[0];
            var D = u[s];
            C.high ^= D.high;
            C.low ^= D.low;
          }
        },
        _doFinalize: function () {
          var t = this._data;
          var n = t.words;
          this._nDataBytes;
          var r = t.sigBytes * 8;
          var i = this.blockSize * 32;
          n[r >>> 5] |= 1 << 24 - r % 32;
          n[(e.ceil((r + 1) / i) * i >>> 5) - 1] |= 128;
          t.sigBytes = n.length * 4;
          this._process();
          var a = this._state;
          var s = this.cfg.outputLength / 8;
          for (var c = s / 8, l = [], u = 0; u < c; u++) {
            var d = a[u];
            var f = d.high;
            var p = d.low;
            f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & -16711936;
            p = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & -16711936;
            l.push(p);
            l.push(f);
          }
          return new o.init(l, s);
        },
        clone: function () {
          var e = i.clone.call(this);
          var t = e._state = this._state.slice(0);
          for (var n = 0; n < 25; n++) {
            t[n] = t[n].clone();
          }
          return e;
        }
      });
      t.SHA3 = i._createHelper(f);
      t.HmacSHA3 = i._createHmacHelper(f);
    })(Math);
    e.exports = r.SHA3;
  },
  57: function (e, t, n) {
    var r;
    r = n(4);
    /** @preserve
      (c) 2012 by Cédric Mesnil. All rights reserved.
      	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
          - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.algo;
      var s = o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
      var c = o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
      var l = o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
      var u = o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
      var d = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
      var f = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
      var p = a.RIPEMD160 = i.extend({
        _doReset: function () {
          this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function (e, t) {
          for (var n = 0; n < 16; n++) {
            var r = t + n;
            var o = e[r];
            e[r] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
          }
          var i;
          var a;
          var p;
          var b;
          var _;
          var T;
          var S;
          var x;
          var w;
          var E;
          var A;
          var C = this._hash.words;
          var O = d.words;
          var I = f.words;
          var N = s.words;
          var D = c.words;
          var R = l.words;
          var L = u.words;
          T = i = C[0];
          S = a = C[1];
          x = p = C[2];
          w = b = C[3];
          E = _ = C[4];
          n = 0;
          for (; n < 80; n += 1) {
            A = i + e[t + N[n]] | 0;
            A += n < 16 ? h(a, p, b) + O[0] : n < 32 ? g(a, p, b) + O[1] : n < 48 ? m(a, p, b) + O[2] : n < 64 ? v(a, p, b) + O[3] : y(a, p, b) + O[4];
            A = (A = k(A |= 0, R[n])) + _ | 0;
            i = _;
            _ = b;
            b = k(p, 10);
            p = a;
            a = A;
            A = T + e[t + D[n]] | 0;
            A += n < 16 ? y(S, x, w) + I[0] : n < 32 ? v(S, x, w) + I[1] : n < 48 ? m(S, x, w) + I[2] : n < 64 ? g(S, x, w) + I[3] : h(S, x, w) + I[4];
            A = (A = k(A |= 0, L[n])) + E | 0;
            T = E;
            E = w;
            w = k(x, 10);
            x = S;
            S = A;
          }
          A = C[1] + p + w | 0;
          C[1] = C[2] + b + E | 0;
          C[2] = C[3] + _ + T | 0;
          C[3] = C[4] + i + S | 0;
          C[4] = C[0] + a + x | 0;
          C[0] = A;
        },
        _doFinalize: function () {
          var e = this._data;
          var t = e.words;
          var n = this._nDataBytes * 8;
          var r = e.sigBytes * 8;
          t[r >>> 5] |= 128 << 24 - r % 32;
          t[14 + (r + 64 >>> 9 << 4)] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & -16711936;
          e.sigBytes = (t.length + 1) * 4;
          this._process();
          var o = this._hash;
          var i = o.words;
          for (var a = 0; a < 5; a++) {
            var s = i[a];
            i[a] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & -16711936;
          }
          return o;
        },
        clone: function () {
          var e = i.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        }
      });
      function h(e, t, n) {
        return e ^ t ^ n;
      }
      function g(e, t, n) {
        return e & t | ~e & n;
      }
      function m(e, t, n) {
        return (e | ~t) ^ n;
      }
      function v(e, t, n) {
        return e & n | t & ~n;
      }
      function y(e, t, n) {
        return e ^ (t | ~n);
      }
      function k(e, t) {
        return e << t | e >>> 32 - t;
      }
      t.RIPEMD160 = i._createHelper(p);
      t.HmacRIPEMD160 = i._createHmacHelper(p);
    })(Math);
    e.exports = r.RIPEMD160;
  },
  58: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    var d;
    d = n(4);
    n(34);
    n(35);
    o = (r = d).lib;
    i = o.Base;
    a = o.WordArray;
    s = r.algo;
    c = s.SHA256;
    l = s.HMAC;
    u = s.PBKDF2 = i.extend({
      cfg: i.extend({
        keySize: 4,
        hasher: c,
        iterations: 250000
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var n = this.cfg;
        var r = l.create(n.hasher, e);
        var o = a.create();
        var i = a.create([1]);
        for (var s = o.words, c = i.words, u = n.keySize, d = n.iterations; s.length < u;) {
          var f = r.update(t).finalize(i);
          r.reset();
          var p = f.words;
          var h = p.length;
          var g = f;
          for (var m = 1; m < d; m++) {
            g = r.finalize(g);
            r.reset();
            var v = g.words;
            for (var y = 0; y < h; y++) {
              p[y] ^= v[y];
            }
          }
          o.concat(f);
          c[0]++;
        }
        o.sigBytes = u * 4;
        return o;
      }
    });
    r.PBKDF2 = function (e, t, n) {
      return u.create(n).compute(e, t);
    };
    e.exports = d.PBKDF2;
  },
  59: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.mode.CFB = function () {
      var e = r.lib.BlockCipherMode.extend();
      function t(e, t, n, r) {
        var o;
        var i = this._iv;
        if (i) {
          o = i.slice(0);
          this._iv = undefined;
        } else {
          o = this._prevBlock;
        }
        r.encryptBlock(o, 0);
        for (var a = 0; a < n; a++) {
          e[t + a] ^= o[a];
        }
      }
      e.Encryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          t.call(this, e, n, o, r);
          this._prevBlock = e.slice(n, n + o);
        }
      });
      e.Decryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          var i = e.slice(n, n + o);
          t.call(this, e, n, o, r);
          this._prevBlock = i;
        }
      });
      return e;
    }();
    e.exports = r.mode.CFB;
  },
  60: function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    n(8);
    i.mode.CTR = (r = i.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
      processBlock: function (e, t) {
        var n = this._cipher;
        var r = n.blockSize;
        var o = this._iv;
        var i = this._counter;
        if (o) {
          i = this._counter = o.slice(0);
          this._iv = undefined;
        }
        var a = i.slice(0);
        n.encryptBlock(a, 0);
        i[r - 1] = i[r - 1] + 1 | 0;
        for (var s = 0; s < r; s++) {
          e[t + s] ^= a[s];
        }
      }
    }), r.Decryptor = o, r);
    e.exports = i.mode.CTR;
  },
  61: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
    r.mode.CTRGladman = function () {
      var e = r.lib.BlockCipherMode.extend();
      function t(e) {
        if ((e >> 24 & 255) == 255) {
          var t = e >> 16 & 255;
          var n = e >> 8 & 255;
          var r = e & 255;
          if (t === 255) {
            t = 0;
            if (n === 255) {
              n = 0;
              if (r === 255) {
                r = 0;
              } else {
                ++r;
              }
            } else {
              ++n;
            }
          } else {
            ++t;
          }
          e = 0;
          e += t << 16;
          e += n << 8;
          e += r;
        } else {
          e += 16777216;
        }
        return e;
      }
      var n = e.Encryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          var i = this._iv;
          var a = this._counter;
          if (i) {
            a = this._counter = i.slice(0);
            this._iv = undefined;
          }
          (function (e) {
            if ((e[0] = t(e[0])) === 0) {
              e[1] = t(e[1]);
            }
          })(a);
          var s = a.slice(0);
          r.encryptBlock(s, 0);
          for (var c = 0; c < o; c++) {
            e[n + c] ^= s[c];
          }
        }
      });
      e.Decryptor = n;
      return e;
    }();
    e.exports = r.mode.CTRGladman;
  },
  62: function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    n(8);
    i.mode.OFB = (r = i.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
      processBlock: function (e, t) {
        var n = this._cipher;
        var r = n.blockSize;
        var o = this._iv;
        var i = this._keystream;
        if (o) {
          i = this._keystream = o.slice(0);
          this._iv = undefined;
        }
        n.encryptBlock(i, 0);
        for (var a = 0; a < r; a++) {
          e[t + a] ^= i[a];
        }
      }
    }), r.Decryptor = o, r);
    e.exports = i.mode.OFB;
  },
  63: function (e, t, n) {
    var r;
    var o;
    o = n(4);
    n(8);
    o.mode.ECB = ((r = o.lib.BlockCipherMode.extend()).Encryptor = r.extend({
      processBlock: function (e, t) {
        this._cipher.encryptBlock(e, t);
      }
    }), r.Decryptor = r.extend({
      processBlock: function (e, t) {
        this._cipher.decryptBlock(e, t);
      }
    }), r);
    e.exports = o.mode.ECB;
  },
  64: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.AnsiX923 = {
      pad: function (e, t) {
        var n = e.sigBytes;
        var r = t * 4;
        var o = r - n % r;
        var i = n + o - 1;
        e.clamp();
        e.words[i >>> 2] |= o << 24 - i % 4 * 8;
        e.sigBytes += o;
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    };
    e.exports = r.pad.Ansix923;
  },
  65: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.Iso10126 = {
      pad: function (e, t) {
        var n = t * 4;
        var o = n - e.sigBytes % n;
        e.concat(r.lib.WordArray.random(o - 1)).concat(r.lib.WordArray.create([o << 24], 1));
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    };
    e.exports = r.pad.Iso10126;
  },
  66: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.Iso97971 = {
      pad: function (e, t) {
        e.concat(r.lib.WordArray.create([2147483648], 1));
        r.pad.ZeroPadding.pad(e, t);
      },
      unpad: function (e) {
        r.pad.ZeroPadding.unpad(e);
        e.sigBytes--;
      }
    };
    e.exports = r.pad.Iso97971;
  },
  67: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.ZeroPadding = {
      pad: function (e, t) {
        var n = t * 4;
        e.clamp();
        e.sigBytes += n - (e.sigBytes % n || n);
      },
      unpad: function (e) {
        var t = e.words;
        var n = e.sigBytes - 1;
        for (n = e.sigBytes - 1; n >= 0; n--) {
          if (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
            e.sigBytes = n + 1;
            break;
          }
        }
      }
    };
    e.exports = r.pad.ZeroPadding;
  },
  68: function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.NoPadding = {
      pad: function () {},
      unpad: function () {}
    };
    e.exports = r.pad.NoPadding;
  },
  69: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    a = n(4);
    n(8);
    o = (r = a).lib.CipherParams;
    i = r.enc.Hex;
    r.format.Hex = {
      stringify: function (e) {
        return e.ciphertext.toString(i);
      },
      parse: function (e) {
        var t = i.parse(e);
        return o.create({
          ciphertext: t
        });
      }
    };
    e.exports = a.format.Hex;
  },
  70: function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib.BlockCipher;
      var n = e.algo;
      var o = [];
      var i = [];
      var a = [];
      var s = [];
      var c = [];
      var l = [];
      var u = [];
      var d = [];
      var f = [];
      var p = [];
      (function () {
        var e = [];
        for (var t = 0; t < 256; t++) {
          e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
        }
        var n = 0;
        var r = 0;
        for (t = 0; t < 256; t++) {
          var h = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
          h = h >>> 8 ^ h & 255 ^ 99;
          o[n] = h;
          i[h] = n;
          var g = e[n];
          var m = e[g];
          var v = e[m];
          var y = e[h] * 257 ^ h * 16843008;
          a[n] = y << 24 | y >>> 8;
          s[n] = y << 16 | y >>> 16;
          c[n] = y << 8 | y >>> 24;
          l[n] = y;
          y = v * 16843009 ^ m * 65537 ^ g * 257 ^ n * 16843008;
          u[h] = y << 24 | y >>> 8;
          d[h] = y << 16 | y >>> 16;
          f[h] = y << 8 | y >>> 24;
          p[h] = y;
          if (n) {
            n = g ^ e[e[e[v ^ g]]];
            r ^= e[e[r]];
          } else {
            n = r = 1;
          }
        }
      })();
      var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var g = n.AES = t.extend({
        _doReset: function () {
          if (!this._nRounds || this._keyPriorReset !== this._key) {
            var e = this._keyPriorReset = this._key;
            var t = e.words;
            var n = e.sigBytes / 4;
            for (var r = ((this._nRounds = n + 6) + 1) * 4, i = this._keySchedule = [], a = 0; a < r; a++) {
              if (a < n) {
                i[a] = t[a];
              } else {
                l = i[a - 1];
                if (a % n) {
                  if (n > 6 && a % n == 4) {
                    l = o[l >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[l & 255];
                  }
                } else {
                  l = o[(l = l << 8 | l >>> 24) >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[l & 255];
                  l ^= h[a / n | 0] << 24;
                }
                i[a] = i[a - n] ^ l;
              }
            }
            var s = this._invKeySchedule = [];
            for (var c = 0; c < r; c++) {
              a = r - c;
              if (c % 4) {
                var l = i[a];
              } else {
                l = i[a - 4];
              }
              s[c] = c < 4 || a <= 4 ? l : u[o[l >>> 24]] ^ d[o[l >>> 16 & 255]] ^ f[o[l >>> 8 & 255]] ^ p[o[l & 255]];
            }
          }
        },
        encryptBlock: function (e, t) {
          this._doCryptBlock(e, t, this._keySchedule, a, s, c, l, o);
        },
        decryptBlock: function (e, t) {
          var n = e[t + 1];
          e[t + 1] = e[t + 3];
          e[t + 3] = n;
          this._doCryptBlock(e, t, this._invKeySchedule, u, d, f, p, i);
          n = e[t + 1];
          e[t + 1] = e[t + 3];
          e[t + 3] = n;
        },
        _doCryptBlock: function (e, t, n, r, o, i, a, s) {
          for (var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], p = 4, h = 1; h < c; h++) {
            var g = r[l >>> 24] ^ o[u >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[f & 255] ^ n[p++];
            var m = r[u >>> 24] ^ o[d >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[l & 255] ^ n[p++];
            var v = r[d >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[u & 255] ^ n[p++];
            var y = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[d & 255] ^ n[p++];
            l = g;
            u = m;
            d = v;
            f = y;
          }
          g = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[f & 255]) ^ n[p++];
          m = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[l & 255]) ^ n[p++];
          v = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[u & 255]) ^ n[p++];
          y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[d & 255]) ^ n[p++];
          e[t] = g;
          e[t + 1] = m;
          e[t + 2] = v;
          e[t + 3] = y;
        },
        keySize: 8
      });
      e.AES = t._createHelper(g);
    })();
    e.exports = r.AES;
  },
  71: function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib;
      var n = t.WordArray;
      var o = t.BlockCipher;
      var i = e.algo;
      var a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
      var s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
      var c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
      var l = [{
        0: 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
      }, {
        0: 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
      }, {
        0: 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
      }, {
        0: 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
      }, {
        0: 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
      }, {
        0: 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
      }, {
        0: 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
      }, {
        0: 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
      }];
      var u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
      var d = i.DES = o.extend({
        _doReset: function () {
          var e = this._key.words;
          var t = [];
          for (var n = 0; n < 56; n++) {
            var r = a[n] - 1;
            t[n] = e[r >>> 5] >>> 31 - r % 32 & 1;
          }
          var o = this._subKeys = [];
          for (var i = 0; i < 16; i++) {
            var l = o[i] = [];
            var u = c[i];
            for (n = 0; n < 24; n++) {
              l[n / 6 | 0] |= t[(s[n] - 1 + u) % 28] << 31 - n % 6;
              l[4 + (n / 6 | 0)] |= t[28 + (s[n + 24] - 1 + u) % 28] << 31 - n % 6;
            }
            l[0] = l[0] << 1 | l[0] >>> 31;
            n = 1;
            for (; n < 7; n++) {
              l[n] = l[n] >>> (n - 1) * 4 + 3;
            }
            l[7] = l[7] << 5 | l[7] >>> 27;
          }
          var d = this._invSubKeys = [];
          for (n = 0; n < 16; n++) {
            d[n] = o[15 - n];
          }
        },
        encryptBlock: function (e, t) {
          this._doCryptBlock(e, t, this._subKeys);
        },
        decryptBlock: function (e, t) {
          this._doCryptBlock(e, t, this._invSubKeys);
        },
        _doCryptBlock: function (e, t, n) {
          this._lBlock = e[t];
          this._rBlock = e[t + 1];
          f.call(this, 4, 252645135);
          f.call(this, 16, 65535);
          p.call(this, 2, 858993459);
          p.call(this, 8, 16711935);
          f.call(this, 1, 1431655765);
          for (var r = 0; r < 16; r++) {
            var o = n[r];
            var i = this._lBlock;
            var a = this._rBlock;
            var s = 0;
            for (var c = 0; c < 8; c++) {
              s |= l[c][((a ^ o[c]) & u[c]) >>> 0];
            }
            this._lBlock = a;
            this._rBlock = i ^ s;
          }
          var d = this._lBlock;
          this._lBlock = this._rBlock;
          this._rBlock = d;
          f.call(this, 1, 1431655765);
          p.call(this, 8, 16711935);
          p.call(this, 2, 858993459);
          f.call(this, 16, 65535);
          f.call(this, 4, 252645135);
          e[t] = this._lBlock;
          e[t + 1] = this._rBlock;
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2
      });
      function f(e, t) {
        var n = (this._lBlock >>> e ^ this._rBlock) & t;
        this._rBlock ^= n;
        this._lBlock ^= n << e;
      }
      function p(e, t) {
        var n = (this._rBlock >>> e ^ this._lBlock) & t;
        this._lBlock ^= n;
        this._rBlock ^= n << e;
      }
      e.DES = o._createHelper(d);
      var h = i.TripleDES = o.extend({
        _doReset: function () {
          var e = this._key.words;
          if (e.length !== 2 && e.length !== 4 && e.length < 6) {
            throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
          }
          var t = e.slice(0, 2);
          var r = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4);
          var o = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
          this._des1 = d.createEncryptor(n.create(t));
          this._des2 = d.createEncryptor(n.create(r));
          this._des3 = d.createEncryptor(n.create(o));
        },
        encryptBlock: function (e, t) {
          this._des1.encryptBlock(e, t);
          this._des2.decryptBlock(e, t);
          this._des3.encryptBlock(e, t);
        },
        decryptBlock: function (e, t) {
          this._des3.decryptBlock(e, t);
          this._des2.encryptBlock(e, t);
          this._des1.decryptBlock(e, t);
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
      });
      e.TripleDES = o._createHelper(h);
    })();
    e.exports = r.TripleDES;
  },
  72: function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib.StreamCipher;
      var n = e.algo;
      var o = n.RC4 = t.extend({
        _doReset: function () {
          var e = this._key;
          var t = e.words;
          var n = e.sigBytes;
          var r = this._S = [];
          for (var o = 0; o < 256; o++) {
            r[o] = o;
          }
          o = 0;
          var i = 0;
          for (; o < 256; o++) {
            var a = o % n;
            var s = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
            i = (i + r[o] + s) % 256;
            var c = r[o];
            r[o] = r[i];
            r[i] = c;
          }
          this._i = this._j = 0;
        },
        _doProcessBlock: function (e, t) {
          e[t] ^= i.call(this);
        },
        keySize: 8,
        ivSize: 0
      });
      function i() {
        var e = this._S;
        var t = this._i;
        var n = this._j;
        var r = 0;
        for (var o = 0; o < 4; o++) {
          n = (n + e[t = (t + 1) % 256]) % 256;
          var i = e[t];
          e[t] = e[n];
          e[n] = i;
          r |= e[(e[t] + e[n]) % 256] << 24 - o * 8;
        }
        this._i = t;
        this._j = n;
        return r;
      }
      e.RC4 = t._createHelper(o);
      var a = n.RC4Drop = o.extend({
        cfg: o.cfg.extend({
          drop: 192
        }),
        _doReset: function () {
          o._doReset.call(this);
          for (var e = this.cfg.drop; e > 0; e--) {
            i.call(this);
          }
        }
      });
      e.RC4Drop = t._createHelper(a);
    })();
    e.exports = r.RC4;
  },
  73: function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib.StreamCipher;
      var n = e.algo;
      var o = [];
      var i = [];
      var a = [];
      var s = n.Rabbit = t.extend({
        _doReset: function () {
          var e = this._key.words;
          var t = this.cfg.iv;
          for (var n = 0; n < 4; n++) {
            e[n] = (e[n] << 8 | e[n] >>> 24) & 16711935 | (e[n] << 24 | e[n] >>> 8) & -16711936;
          }
          var r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16];
          var o = this._C = [e[2] << 16 | e[2] >>> 16, e[0] & -65536 | e[1] & 65535, e[3] << 16 | e[3] >>> 16, e[1] & -65536 | e[2] & 65535, e[0] << 16 | e[0] >>> 16, e[2] & -65536 | e[3] & 65535, e[1] << 16 | e[1] >>> 16, e[3] & -65536 | e[0] & 65535];
          this._b = 0;
          n = 0;
          for (; n < 4; n++) {
            c.call(this);
          }
          for (n = 0; n < 8; n++) {
            o[n] ^= r[n + 4 & 7];
          }
          if (t) {
            var i = t.words;
            var a = i[0];
            var s = i[1];
            var l = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
            var u = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & -16711936;
            var d = l >>> 16 | u & -65536;
            var f = u << 16 | l & 65535;
            o[0] ^= l;
            o[1] ^= d;
            o[2] ^= u;
            o[3] ^= f;
            o[4] ^= l;
            o[5] ^= d;
            o[6] ^= u;
            o[7] ^= f;
            n = 0;
            for (; n < 4; n++) {
              c.call(this);
            }
          }
        },
        _doProcessBlock: function (e, t) {
          var n = this._X;
          c.call(this);
          o[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16;
          o[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16;
          o[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16;
          o[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
          for (var r = 0; r < 4; r++) {
            o[r] = (o[r] << 8 | o[r] >>> 24) & 16711935 | (o[r] << 24 | o[r] >>> 8) & -16711936;
            e[t + r] ^= o[r];
          }
        },
        blockSize: 4,
        ivSize: 2
      });
      function c() {
        var e = this._X;
        var t = this._C;
        for (var n = 0; n < 8; n++) {
          i[n] = t[n];
        }
        t[0] = t[0] + 1295307597 + this._b | 0;
        t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0;
        t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0;
        t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0;
        t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0;
        t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0;
        t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0;
        t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0;
        this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0;
        n = 0;
        for (; n < 8; n++) {
          var r = e[n] + t[n];
          var o = r & 65535;
          var s = r >>> 16;
          var c = ((o * o >>> 17) + o * s >>> 15) + s * s;
          var l = ((r & -65536) * r | 0) + ((r & 65535) * r | 0);
          a[n] = c ^ l;
        }
        e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0;
        e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0;
        e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0;
        e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0;
        e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0;
        e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0;
        e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0;
        e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
      }
      e.Rabbit = t._createHelper(s);
    })();
    e.exports = r.Rabbit;
  },
  736: function (e, t, n) {
    n(39);
    e.exports = n(0);
  },
  74: function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib.StreamCipher;
      var n = e.algo;
      var o = [];
      var i = [];
      var a = [];
      var s = n.RabbitLegacy = t.extend({
        _doReset: function () {
          var e = this._key.words;
          var t = this.cfg.iv;
          var n = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16];
          var r = this._C = [e[2] << 16 | e[2] >>> 16, e[0] & -65536 | e[1] & 65535, e[3] << 16 | e[3] >>> 16, e[1] & -65536 | e[2] & 65535, e[0] << 16 | e[0] >>> 16, e[2] & -65536 | e[3] & 65535, e[1] << 16 | e[1] >>> 16, e[3] & -65536 | e[0] & 65535];
          this._b = 0;
          for (var o = 0; o < 4; o++) {
            c.call(this);
          }
          for (o = 0; o < 8; o++) {
            r[o] ^= n[o + 4 & 7];
          }
          if (t) {
            var i = t.words;
            var a = i[0];
            var s = i[1];
            var l = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
            var u = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & -16711936;
            var d = l >>> 16 | u & -65536;
            var f = u << 16 | l & 65535;
            r[0] ^= l;
            r[1] ^= d;
            r[2] ^= u;
            r[3] ^= f;
            r[4] ^= l;
            r[5] ^= d;
            r[6] ^= u;
            r[7] ^= f;
            o = 0;
            for (; o < 4; o++) {
              c.call(this);
            }
          }
        },
        _doProcessBlock: function (e, t) {
          var n = this._X;
          c.call(this);
          o[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16;
          o[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16;
          o[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16;
          o[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
          for (var r = 0; r < 4; r++) {
            o[r] = (o[r] << 8 | o[r] >>> 24) & 16711935 | (o[r] << 24 | o[r] >>> 8) & -16711936;
            e[t + r] ^= o[r];
          }
        },
        blockSize: 4,
        ivSize: 2
      });
      function c() {
        var e = this._X;
        var t = this._C;
        for (var n = 0; n < 8; n++) {
          i[n] = t[n];
        }
        t[0] = t[0] + 1295307597 + this._b | 0;
        t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0;
        t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0;
        t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0;
        t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0;
        t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0;
        t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0;
        t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0;
        this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0;
        n = 0;
        for (; n < 8; n++) {
          var r = e[n] + t[n];
          var o = r & 65535;
          var s = r >>> 16;
          var c = ((o * o >>> 17) + o * s >>> 15) + s * s;
          var l = ((r & -65536) * r | 0) + ((r & 65535) * r | 0);
          a[n] = c ^ l;
        }
        e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0;
        e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0;
        e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0;
        e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0;
        e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0;
        e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0;
        e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0;
        e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
      }
      e.RabbitLegacy = t._createHelper(s);
    })();
    e.exports = r.RabbitLegacy;
  },
  75: function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib.BlockCipher;
      var n = e.algo;
      const o = 16;
      const i = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731];
      const a = [[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], [1266315497, 3048417604, 3681880366, 3289982499, 2909710000, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409000, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]];
      var s = {
        pbox: [],
        sbox: []
      };
      function c(e, t) {
        let n = t >> 24 & 255;
        let r = t >> 16 & 255;
        let o = t >> 8 & 255;
        let i = t & 255;
        let a = e.sbox[0][n] + e.sbox[1][r];
        a ^= e.sbox[2][o];
        a += e.sbox[3][i];
        return a;
      }
      function l(e, t, n) {
        let r;
        let i = t;
        let a = n;
        for (let t = 0; t < o; ++t) {
          i ^= e.pbox[t];
          a = c(e, i) ^ a;
          r = i;
          i = a;
          a = r;
        }
        r = i;
        i = a;
        a = r;
        a ^= e.pbox[o];
        i ^= e.pbox[17];
        return {
          left: i,
          right: a
        };
      }
      var u = n.Blowfish = t.extend({
        _doReset: function () {
          if (this._keyPriorReset !== this._key) {
            var e = this._keyPriorReset = this._key;
            var t = e.words;
            var n = e.sigBytes / 4;
            (function (e, t, n) {
              for (let t = 0; t < 4; t++) {
                e.sbox[t] = [];
                for (let n = 0; n < 256; n++) {
                  e.sbox[t][n] = a[t][n];
                }
              }
              let r = 0;
              for (let o = 0; o < 18; o++) {
                e.pbox[o] = i[o] ^ t[r];
                r++;
                if (r >= n) {
                  r = 0;
                }
              }
              let o = 0;
              let s = 0;
              let c = 0;
              for (let t = 0; t < 18; t += 2) {
                c = l(e, o, s);
                o = c.left;
                s = c.right;
                e.pbox[t] = o;
                e.pbox[t + 1] = s;
              }
              for (let t = 0; t < 4; t++) {
                for (let n = 0; n < 256; n += 2) {
                  c = l(e, o, s);
                  o = c.left;
                  s = c.right;
                  e.sbox[t][n] = o;
                  e.sbox[t][n + 1] = s;
                }
              }
            })(s, t, n);
          }
        },
        encryptBlock: function (e, t) {
          var n = l(s, e[t], e[t + 1]);
          e[t] = n.left;
          e[t + 1] = n.right;
        },
        decryptBlock: function (e, t) {
          var n = function (e, t, n) {
            let r;
            let o = t;
            let i = n;
            for (let t = 17; t > 1; --t) {
              o ^= e.pbox[t];
              i = c(e, o) ^ i;
              r = o;
              o = i;
              i = r;
            }
            r = o;
            o = i;
            i = r;
            i ^= e.pbox[1];
            o ^= e.pbox[0];
            return {
              left: o,
              right: i
            };
          }(s, e[t], e[t + 1]);
          e[t] = n.left;
          e[t + 1] = n.right;
        },
        blockSize: 2,
        keySize: 4,
        ivSize: 2
      });
      e.Blowfish = t._createHelper(u);
    })();
    e.exports = r.Blowfish;
  },
  8: function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    var d;
    var f;
    var p;
    var h;
    var g;
    var m;
    var v;
    var y;
    var k;
    var b;
    var _;
    r = n(4);
    n(17);
    e.exports = void (r.lib.Cipher || (o = r, i = o.lib, a = i.Base, s = i.WordArray, c = i.BufferedBlockAlgorithm, l = o.enc, l.Utf8, u = l.Base64, d = o.algo.EvpKDF, f = i.Cipher = c.extend({
      cfg: a.extend(),
      createEncryptor: function (e, t) {
        return this.create(this._ENC_XFORM_MODE, e, t);
      },
      createDecryptor: function (e, t) {
        return this.create(this._DEC_XFORM_MODE, e, t);
      },
      init: function (e, t, n) {
        this.cfg = this.cfg.extend(n);
        this._xformMode = e;
        this._key = t;
        this.reset();
      },
      reset: function () {
        c.reset.call(this);
        this._doReset();
      },
      process: function (e) {
        this._append(e);
        return this._process();
      },
      finalize: function (e) {
        if (e) {
          this._append(e);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function () {
        function e(e) {
          if (typeof e == "string") {
            return _;
          } else {
            return k;
          }
        }
        return function (t) {
          return {
            encrypt: function (n, r, o) {
              return e(r).encrypt(t, n, r, o);
            },
            decrypt: function (n, r, o) {
              return e(r).decrypt(t, n, r, o);
            }
          };
        };
      }()
    }), i.StreamCipher = f.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1
    }), p = o.mode = {}, h = i.BlockCipherMode = a.extend({
      createEncryptor: function (e, t) {
        return this.Encryptor.create(e, t);
      },
      createDecryptor: function (e, t) {
        return this.Decryptor.create(e, t);
      },
      init: function (e, t) {
        this._cipher = e;
        this._iv = t;
      }
    }), g = p.CBC = function () {
      var e = h.extend();
      function t(e, t, n) {
        var r;
        var o = this._iv;
        if (o) {
          r = o;
          this._iv = undefined;
        } else {
          r = this._prevBlock;
        }
        for (var i = 0; i < n; i++) {
          e[t + i] ^= r[i];
        }
      }
      e.Encryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          t.call(this, e, n, o);
          r.encryptBlock(e, n);
          this._prevBlock = e.slice(n, n + o);
        }
      });
      e.Decryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          var i = e.slice(n, n + o);
          r.decryptBlock(e, n);
          t.call(this, e, n, o);
          this._prevBlock = i;
        }
      });
      return e;
    }(), m = (o.pad = {}).Pkcs7 = {
      pad: function (e, t) {
        var n = t * 4;
        for (var r = n - e.sigBytes % n, o = r << 24 | r << 16 | r << 8 | r, i = [], a = 0; a < r; a += 4) {
          i.push(o);
        }
        var c = s.create(i, r);
        e.concat(c);
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    }, i.BlockCipher = f.extend({
      cfg: f.cfg.extend({
        mode: g,
        padding: m
      }),
      reset: function () {
        var e;
        f.reset.call(this);
        var t = this.cfg;
        var n = t.iv;
        var r = t.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          e = r.createEncryptor;
        } else {
          e = r.createDecryptor;
          this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator == e) {
          this._mode.init(this, n && n.words);
        } else {
          this._mode = e.call(r, this, n && n.words);
          this._mode.__creator = e;
        }
      },
      _doProcessBlock: function (e, t) {
        this._mode.processBlock(e, t);
      },
      _doFinalize: function () {
        var e;
        var t = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          t.pad(this._data, this.blockSize);
          e = this._process(true);
        } else {
          e = this._process(true);
          t.unpad(e);
        }
        return e;
      },
      blockSize: 4
    }), v = i.CipherParams = a.extend({
      init: function (e) {
        this.mixIn(e);
      },
      toString: function (e) {
        return (e || this.formatter).stringify(this);
      }
    }), y = (o.format = {}).OpenSSL = {
      stringify: function (e) {
        var t = e.ciphertext;
        var n = e.salt;
        return (n ? s.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(u);
      },
      parse: function (e) {
        var t;
        var n = u.parse(e);
        var r = n.words;
        if (r[0] == 1398893684 && r[1] == 1701076831) {
          t = s.create(r.slice(2, 4));
          r.splice(0, 4);
          n.sigBytes -= 16;
        }
        return v.create({
          ciphertext: n,
          salt: t
        });
      }
    }, k = i.SerializableCipher = a.extend({
      cfg: a.extend({
        format: y
      }),
      encrypt: function (e, t, n, r) {
        r = this.cfg.extend(r);
        var o = e.createEncryptor(n, r);
        var i = o.finalize(t);
        var a = o.cfg;
        return v.create({
          ciphertext: i,
          key: n,
          iv: a.iv,
          algorithm: e,
          mode: a.mode,
          padding: a.padding,
          blockSize: e.blockSize,
          formatter: r.format
        });
      },
      decrypt: function (e, t, n, r) {
        r = this.cfg.extend(r);
        t = this._parse(t, r.format);
        return e.createDecryptor(n, r).finalize(t.ciphertext);
      },
      _parse: function (e, t) {
        if (typeof e == "string") {
          return t.parse(e, this);
        } else {
          return e;
        }
      }
    }), b = (o.kdf = {}).OpenSSL = {
      execute: function (e, t, n, r, o) {
        r ||= s.random(8);
        if (o) {
          i = d.create({
            keySize: t + n,
            hasher: o
          }).compute(e, r);
        } else {
          var i = d.create({
            keySize: t + n
          }).compute(e, r);
        }
        var a = s.create(i.words.slice(t), n * 4);
        i.sigBytes = t * 4;
        return v.create({
          key: i,
          iv: a,
          salt: r
        });
      }
    }, _ = i.PasswordBasedCipher = k.extend({
      cfg: k.cfg.extend({
        kdf: b
      }),
      encrypt: function (e, t, n, r) {
        var o = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize, r.salt, r.hasher);
        r.iv = o.iv;
        var i = k.encrypt.call(this, e, t, o.key, r);
        i.mixIn(o);
        return i;
      },
      decrypt: function (e, t, n, r) {
        r = this.cfg.extend(r);
        t = this._parse(t, r.format);
        var o = r.kdf.execute(n, e.keySize, e.ivSize, t.salt, r.hasher);
        r.iv = o.iv;
        return k.decrypt.call(this, e, t, o.key, r);
      }
    })));
  }
});