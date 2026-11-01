// Module 0 [messaging] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  r.r(t);
  (function (e) {
    r.d(t, "query", function () {
      return f;
    });
    r.d(t, "queryAll", function () {
      return h;
    });
    r.d(t, "findParent", function () {
      return m;
    });
    r.d(t, "nearestParent", function () {
      return g;
    });
    r.d(t, "getNodePropOrEmptyString", function () {
      return v;
    });
    r.d(t, "stripTagsExcept", function () {
      return y;
    });
    r.d(t, "toArray", function () {
      return _;
    });
    r.d(t, "unique", function () {
      return b;
    });
    r.d(t, "arrayBufferToBase64", function () {
      return w;
    });
    r.d(t, "base64ToArrayBuffer", function () {
      return E;
    });
    r.d(t, "isMatches", function () {
      return D;
    });
    r.d(t, "getYoutubeInfo", function () {
      return T;
    });
    r.d(t, "getYoutubeDashMPDInfo", function () {
      return k;
    });
    r.d(t, "send", function () {
      return A;
    });
    r.d(t, "get", function () {
      return C;
    });
    r.d(t, "_getSize", function () {
      return x;
    });
    r.d(t, "getSize", function () {
      return S;
    });
    r.d(t, "logDownloadError", function () {
      return O;
    });
    r.d(t, "beautifyFileSize", function () {
      return I;
    });
    r.d(t, "detectMediaTypeAndExt", function () {
      return L;
    });
    r.d(t, "getFileNameFromContentDisposition", function () {
      return R;
    });
    r.d(t, "getMediaType", function () {
      return P;
    });
    r.d(t, "getProp", function () {
      return M;
    });
    r.d(t, "call", function () {
      return F;
    });
    r.d(t, "defined", function () {
      return U;
    });
    r.d(t, "debounce", function () {
      return N;
    });
    r.d(t, "flatten", function () {
      return j;
    });
    r.d(t, "generateId", function () {
      return H;
    });
    r.d(t, "sendMessageDirect", function () {
      return V;
    });
    r.d(t, "sendMessage", function () {
      return W;
    });
    r.d(t, "sendRequest", function () {
      return z;
    });
    r.d(t, "isSpecialUrls", function () {
      return Y;
    });
    r.d(t, "getFilenameFromTitleOfDownload", function () {
      return G;
    });
    r.d(t, "getVideoId", function () {
      return Q;
    });
    r.d(t, "isValidData", function () {
      return $;
    });
    r.d(t, "getBestFitResolution", function () {
      return K;
    });
    r.d(t, "createMP3Resources", function () {
      return X;
    });
    r.d(t, "MIN_IMAGE_TOTAL_PIXEL", function () {
      return J;
    });
    r.d(t, "createImageInfo", function () {
      return ee;
    });
    r.d(t, "getVideoPoster", function () {
      return te;
    });
    r.d(t, "splitMediaByWidgetID", function () {
      return ne;
    });
    r.d(t, "splitMediaByTitle", function () {
      return oe;
    });
    r.d(t, "i18n", function () {
      return ie;
    });
    r.d(t, "isSameMedia", function () {
      return ae;
    });
    r.d(t, "isTikTok", function () {
      return se;
    });
    r.d(t, "cleanSymbols", function () {
      return ce;
    });
    r.d(t, "fetchWithTimeout", function () {
      return ue;
    });
    r.d(t, "sleep", function () {
      return le;
    });
    r.d(t, "beDefinedOr", function () {
      return de;
    });
    r.d(t, "mergeArray", function () {
      return pe;
    });
    r.d(t, "Storage", function () {
      return fe;
    });
    r.d(t, "nextTick", function () {
      return he;
    });
    r.d(t, "jwtDecode", function () {
      return me;
    });
    r.d(t, "formatDomain", function () {
      return ge;
    });
    r.d(t, "paddZero", function () {
      return ve;
    });
    r.d(t, "transformVersionToNumber", function () {
      return ye;
    });
    r.d(t, "getDateNumber", function () {
      return _e;
    });
    r.d(t, "useDebounce", function () {
      return be;
    });
    r.d(t, "checkSameDate", function () {
      return we;
    });
    r.d(t, "checkDateInRow", function () {
      return Ee;
    });
    r.d(t, "checkIsDarkMode", function () {
      return De;
    });
    r.d(t, "devLog", function () {
      return Te;
    });
    r.d(t, "parseLinkPhimmoiChillee", function () {
      return ke;
    });
    r.d(t, "extractFirstJsonObject", function () {
      return Ae;
    });
    r.d(t, "youtubeAdsblockedRules", function () {
      return Ce;
    });
    r.d(t, "getPageLanguage", function () {
      return xe;
    });
    r.d(t, "getCookies", function () {
      return Se;
    });
    r.d(t, "getYTCookieAuth", function () {
      return Oe;
    });
    r.d(t, "fetchStatus", function () {
      return Re;
    });
    var n = r(1);
    var o = r(11);
    var i = r(5);
    var a = r(3);
    var s = r(16);
    var c = r.n(s);
    var u = r(24);
    function l() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var r = typeof Symbol == "function" ? Symbol : {};
      var n = r.iterator || "@@iterator";
      var o = r.toStringTag || "@@toStringTag";
      function i(r, n, o, i) {
        var c = n && n.prototype instanceof s ? n : s;
        var u = Object.create(c.prototype);
        d(u, "_invoke", function (r, n, o) {
          var i;
          var s;
          var c;
          var u = 0;
          var l = o || [];
          var d = false;
          var p = {
            p: 0,
            n: 0,
            v: e,
            a: f,
            f: f.bind(e, 4),
            d: function (t, r) {
              i = t;
              s = 0;
              c = e;
              p.n = r;
              return a;
            }
          };
          function f(r, n) {
            s = r;
            c = n;
            t = 0;
            for (; !d && u && !o && t < l.length; t++) {
              var o;
              var i = l[t];
              var f = p.p;
              var h = i[2];
              if (r > 3) {
                if (o = h === n) {
                  c = i[(s = i[4]) ? 5 : (s = 3, 3)];
                  i[4] = i[5] = e;
                }
              } else if (i[0] <= f) {
                if (o = r < 2 && f < i[1]) {
                  s = 0;
                  p.v = n;
                  p.n = i[1];
                } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                  i[4] = r;
                  i[5] = n;
                  p.n = h;
                  s = 0;
                }
              }
            }
            if (o || r > 1) {
              return a;
            }
            d = true;
            throw n;
          }
          return function (o, l, h) {
            if (u > 1) {
              throw TypeError("Generator is already running");
            }
            if (d && l === 1) {
              f(l, h);
            }
            s = l;
            c = h;
            while ((t = s < 2 ? e : c) || !d) {
              if (!i) {
                if (s) {
                  if (s < 3) {
                    if (s > 1) {
                      p.n = -1;
                    }
                    f(s, c);
                  } else {
                    p.n = c;
                  }
                } else {
                  p.v = c;
                }
              }
              try {
                u = 2;
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
                } else if ((t = (d = p.n < 0) ? c : r.call(n, p)) !== a) {
                  break;
                }
              } catch (t) {
                i = e;
                s = 1;
                c = t;
              } finally {
                u = 1;
              }
            }
            return {
              value: t,
              done: d
            };
          };
        }(r, o, i), true);
        return u;
      }
      var a = {};
      function s() {}
      function c() {}
      function u() {}
      t = Object.getPrototypeOf;
      var p = [][n] ? t(t([][n]())) : (d(t = {}, n, function () {
        return this;
      }), t);
      var f = u.prototype = s.prototype = Object.create(p);
      function h(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, u);
        } else {
          e.__proto__ = u;
          d(e, o, "GeneratorFunction");
        }
        e.prototype = Object.create(f);
        return e;
      }
      c.prototype = u;
      d(f, "constructor", u);
      d(u, "constructor", c);
      c.displayName = "GeneratorFunction";
      d(u, o, "GeneratorFunction");
      d(f);
      d(f, o, "Generator");
      d(f, n, function () {
        return this;
      });
      d(f, "toString", function () {
        return "[object Generator]";
      });
      return (l = function () {
        return {
          w: i,
          m: h
        };
      })();
    }
    function d(e, t, r, n) {
      var o = Object.defineProperty;
      try {
        o({}, "", {});
      } catch (e) {
        o = 0;
      }
      (d = function (e, t, r, n) {
        function i(t, r) {
          d(e, t, function (e) {
            return this._invoke(t, r, e);
          });
        }
        if (t) {
          if (o) {
            o(e, t, {
              value: r,
              enumerable: !n,
              configurable: !n,
              writable: !n
            });
          } else {
            e[t] = r;
          }
        } else {
          i("next", 0);
          i("throw", 1);
          i("return", 2);
        }
      })(e, t, r, n);
    }
    function p(e, t, r, n) {
      return new (r ||= Promise)(function (o, i) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          if (e.done) {
            o(e.value);
          } else {
            (t = e.value, t instanceof r ? t : new r(function (e) {
              e(t);
            })).then(a, s);
          }
        }
        c((n = n.apply(e, t || [])).next());
      });
    }
    function f(e, t) {
      return (t = t || document).querySelector(e);
    }
    function h(e, t) {
      var r;
      return _(((r = (t = t || document).querySelectorAll) === null || r === undefined ? undefined : r.call(t, e)) ?? []);
    }
    function m(e, t) {
      while (e !== null && e.classList && !e.classList.contains(t)) {
        e = e.parentNode;
      }
      return e;
    }
    function g(e, t) {
      for (var n = document.body.parentNode?.parentNode, o = e; o != null && o != n && !o.matches(t);) {
        o = o.parentElement;
      }
      if (n == o) {
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
    function _(e) {
      return Array.prototype.slice.call(e);
    }
    function b(e) {
      return Array.from(new Set(e));
    }
    function w(e) {
      for (var t = new Uint8Array(e), r = "", n = 0; n < t.byteLength; n++) {
        r += String.fromCharCode(t[n]);
      }
      return btoa(r);
    }
    function E(e) {
      for (var t = atob(e), r = new Uint8Array(t.length), n = 0; n < t.length; n++) {
        r[n] = t.charCodeAt(n);
      }
      return r.buffer;
    }
    function D(e, t) {
      var r;
      var n;
      var o;
      if (Array.isArray(e)) {
        for (r = 0; r < e.length; ++r) {
          if (D(e[r], t)) {
            return true;
          }
        }
        return false;
      }
      r = 0;
      n = (t = Array.isArray(t) ? t : [t]).length;
      for (; r < n; ++r) {
        if (typeof (o = t[r]) == "string" && e.indexOf(o) !== -1 || o instanceof RegExp && e.match(o)) {
          return true;
        }
      }
      return false;
    }
    function T(e) {
      return p(this, undefined, undefined, l().m(function t() {
        return l().w(function (t) {
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
                  EE.on("youtube_get_info_result", r => {
                    if (r.data.url === e) {
                      t(r.data);
                    }
                  });
                }));
            }
          }
        }, t);
      }));
    }
    function k(e) {
      return p(this, undefined, undefined, l().m(function t() {
        return l().w(function (t) {
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
    function A(t, r, o, i, a = false, s = "FormData") {
      function c(e) {
        return [/www\.facebook\.com\/video\/tahoe\/async\/\d+\/\?originalmediaid=\d.+&payloadtype=primary/, /vnecdn\.net/, /vnecdn\.net\/vnexpress\/video\/.+master.m3u8$/, /.smamuhh1metro/, /gpt[0-9]+\.phimmoi\.net/, /vtvgiaitri\.vn/, /hydra/, /www\.facebook\.com\/api\/graphql/, /www.facebook.com\/video\/tahoe\/async/, /www\.nhaccuatui\.com\/flash\/xml\?key3/, /content-aapm1\.uplynk\.com/, /master2-eu\.playerx\.stream/, /i\.instagram\.com\/api\/v1\/media/, /s\d+\.imacdn\.com/, /ok\d+-\d+\.vkuser\.net/, /vd\d+\.mycdn\.me/, /cdn\d*\.javhd\..+\/stream\/.+\.m3u8/, /search-api.artlist.io\/v2\/graphql/i, /embed[0-9]+\.streamc\.xyz/, /b-cdn\.net\/.+\.m3u8/, /https:\/\/sf16-sg.tiktokcdn.top\/ad-site-i18n-sg/, /googleapiscdn\.com/, /https:\/\/vkvideo\.ru/, /monfansubvn\./, /phncdn\.com\/hls\/.+\.m3u8/].some(t => e.match(t));
      }
      if (e.IS_CONTENT_SCRIPT && !c(r)) {
        var u = "background_request." + H();
        EE.emit("message.background.send", {
          type: n.b.FETCH,
          data: {
            id: u,
            method: t,
            url: r,
            params: o,
            headers: i,
            includeCredentials: a,
            paramType: s
          }
        });
        return new Promise((e, t) => {
          EE.on("background_request_result", r => {
            var n = r.data;
            if (n.id === u) {
              if (n.success === "resolve") {
                e(n.response);
              } else {
                t(n.response);
              }
            }
          });
        });
      }
      var l = null;
      var d = new Headers();
      if (typeof i == "object") {
        for (var p in i) {
          if (!location.href.includes("nhaccuatui.com/video/") || p != "X-Savior-Replace-Cookie") {
            d.append(p, i[p]);
          }
        }
      }
      if (typeof o == "object") {
        if (s === "FormData") {
          l = Object.keys(o).map(e => e + "=" + o[e]).join("&");
          if (location.host.includes("facebook")) {
            l = Object.keys(o).map(e => `${e}=${encodeURIComponent(o[e])}`).join("&");
          }
        } else {
          l = JSON.stringify(o);
        }
      }
      if (t === "POST") {
        if (s === "FormData") {
          d.append("Content-type", "application/x-www-form-urlencoded");
        } else {
          d.append("Content-type", "application/json");
        }
      }
      var f = {
        method: t,
        headers: d,
        cache: "reload",
        body: l || undefined
      };
      if (a) {
        f.credentials = "include";
      }
      return fetch(r, f).then(e => e.text().then(t => ({
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
    function C(e, t) {
      return A("GET", e, {}, t);
    }
    function x(e) {
      var t;
      var r = new XMLHttpRequest();
      e = function (e, t = "http") {
        if (e.slice(0, 2) === "//") {
          return t + ":" + e;
        }
        return e;
      }(e);
      return new Promise((n, o) => {
        function i(e) {
          if (e) {
            n(e);
          } else {
            o(e);
          }
          r.abort();
          clearTimeout(t);
          t = undefined;
        }
        r.open("GET", e);
        r.onreadystatechange = function () {
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
        r.send(null);
        t = setTimeout(i, 10000);
      });
    }
    function S(e) {
      return new Promise(t => {
        var r = H();
        var n = e + "_size";
        function o(o, i) {
          if (o == r) {
            if (i) {
              t(i);
            } else {
              x(e).then(e => {
                t(e);
                EE.emit("media-provider.cache.put", H(), n, e);
              }).catch(() => {
                O({
                  url: JSON.stringify(e),
                  referrer: document.referrer || location.host || JSON.stringify(e),
                  error: "Error: Cannot get media size or media url is wrong"
                });
                t(null);
                EE.emit("media-provider.cache.put", H(), n, null);
              });
            }
          }
        }
        EE.emit("media-provider.cache.get", r, n);
        EE.on("media-provider.cache.hit", o);
        EE.on("media-provider.cache.miss", o);
      });
    }
    function O(e) {
      i.a.log("recordCustomData", [{
        key: "savior_download_error",
        value: JSON.stringify(e)
      }]);
    }
    function I(e, t = false) {
      var r = ["B", "KB", "MB", "GB", "TB", "PB"];
      var n = window.navigator.appVersion.indexOf("Win") !== -1 ? 1024 : 1000;
      if (!e) {
        return "";
      }
      var o;
      var i = n;
      for (o = 0; o < r.length && e >= i; ++o) {
        e /= i;
      }
      var a = r[o];
      var s = Math.round(e * 10) / 10;
      if (t && a && a.toLowerCase() === "kb") {
        s = s.toFixed(0);
      }
      return s + r[o];
    }
    function L(e) {
      var t;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var i = ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/x-mpegurl", "audio/mpegurl"];
      if (i.indexOf(r) !== -1) {
        e.type = "video";
        e.ext = "m3u8";
        return e;
      }
      var s = ["application/dash+xml"];
      if (s.indexOf(r) !== -1) {
        e.type = "video";
        e.ext = "mpd";
        return e;
      }
      var c = P(r, e.exts || []);
      if (c && n.k[c]) {
        e.type = c;
        var u = r.match(/mp4|webm/g);
        if ((!e.exts || e.exts.length === 0) && !!u && !!u[0]) {
          e.ext = u[0];
        }
      }
      var l = Object(a.d)(r);
      var d = l.ext;
      e.ext ||= d;
      if (Y(e.url)) {
        e.ext = "m3u8";
        e.exts = ["m3u8"];
      }
      if (r == "application/octet-stream") {
        var p = ((t = R(o)) === null || t === undefined ? undefined : t.split(".")) || [];
        if (p && p.length) {
          var f = p.shift();
          var h = p;
          if (f) {
            e.filename = f;
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
    function P(e, t) {
      var r;
      for (var o in n.k) {
        r = n.k[o];
        if (e && e.match(r.rgxp)) {
          return o;
        }
        if (Array.isArray(t) && B(t, r.extensions) || r.extensions.indexOf(t) !== -1) {
          return o;
        }
      }
      return null;
    }
    function B(e, t) {
      for (var r = e.concat(t), n = {}, o = 0; o < r.length; ++o) {
        var i = r[o];
        if (n[i]) {
          return i;
        }
        n[i] = true;
      }
      return null;
    }
    function M(e, t) {
      return function e(t, r) {
        var n = r.shift();
        if (!n || typeof t != "object" && typeof t != "function" || t === null) {
          return null;
        } else if (r.length === 0) {
          return t[n];
        } else {
          return e(t[n], r);
        }
      }(e, t.split("."));
    }
    function F(e, t) {
      if (e && !(e.length <= 0)) {
        var r = [].slice.call(arguments, 2);
        for (var n = 0; n < e.length; n++) {
          e[n].apply(t, r);
        }
      }
    }
    function U(e) {
      return e !== undefined;
    }
    function N(e, t, r) {
      var n;
      var o = false;
      function i() {
        if (!o) {
          var i = this;
          var a = arguments;
          if (n) {
            clearTimeout(n);
          } else if (r) {
            e.apply(i, a);
          }
          n = setTimeout(s, t || 100);
        }
        function s() {
          if (!r) {
            e.apply(i, a);
          }
          n = undefined;
        }
      }
      i.destroy = () => {
        clearTimeout(n);
        o = true;
      };
      return i;
    }
    function j(e, t) {
      var r;
      var n = Object.prototype.toString;
      var o = [];
      var i = t && e || e.slice();
      if (!e.length) {
        return o;
      }
      r = i.pop();
      do {
        if (n.call(r) === "[object Array]") {
          i.push.apply(i, r.filter(e => !!e));
        } else {
          o.push(r);
        }
      } while (i.length && (r = i.pop()) !== undefined);
      o.reverse();
      return o;
    }
    var q = 0;
    function H() {
      return q++;
    }
    function V(e) {
      return new Promise(t => {
        var r = e.type + "_" + H();
        e.id = r;
        chrome.runtime.sendMessage(e);
        EE.on("utils.send_message_result", e => {
          if (e.id === r) {
            t(e.data);
          }
        });
      });
    }
    function W(e) {
      return new Promise(t => {
        var r = e.type + "_" + H();
        e.id = r;
        EE.emit("message.background.send", e);
        EE.on("utils.send_message_result", e => {
          if (e.id === r) {
            t(e.data);
          }
        });
      });
    }
    function z(e) {
      return W({
        type: n.b.SEND_REQUEST,
        request: e
      });
    }
    function Y(e) {
      if (e && typeof e != "object" && !e.includes("data:")) {
        return [/(http|https):\/\/[\s\S]*(streamasia\.|\.bongngo\.|\.manga123\.net)[\s\S]*\/playlist\/|stream\.vltv\.xyz\/m3u8\/|apix\.gooqlevideo\.com\/player|khophim18\.net\/m3u8|iamplayer\.xyz\/stream.*\/Manifest/g, /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi, /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi, /vdrm\.vtvgiaitri\.vn\/stream/, /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi, /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/, /^\/sequence\/(play|full)\/([a-z0-9]+)/i, /\/video\/(\d+)\/config(\?|$)/i, /key[0-9]=[0-9a-f]{32}/i, /^\/(api|get)_video_info/, /\.mp4.+?\.ts\?nimblesessionid=/, /meo\.saku\.net\/player/, /get\.gooqlevideo\.com\/player/, /streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i, /discordapp\.com\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/, /vidsugar\.com\/.+api\.json/i, /\-hls.*\.cuoiia\.top\/(cdn|media|hls)/, /vkvd\d*\.mycdn\.me/, /vk[a-z0-9\-]+\.vkuser\.net/i, /v\.douyu\.com\/api\/stream\/getStreamUrl/, /api\-.+\.(play|plhq)[\s\S]*\.(xyz|net|site|click|cfd|com)\/api\/.+(playiframe|getblob).+/, /ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i, /ssplay\.net\/[a-z0-9]{2,4}\/[a-z\d]+\.html/i, /\.helurl\.com\/uploads\/.+filename/i, /((smutr\.com)|(cdnka\.net))\/remote_control\.php?.+&file=.+\.(mp4|m3u8)/i, /\.video-delivery\.net/i, /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i, /.+\.play[\s\S]*(xyz|net)\/(m3u8|hls)/i, /.+\.plhqtv[\s\S]*(xyz|net)\/(type1rdv3)/i, /v[0-9]*\.sanstream\.xyz\/video\/.*\/master.html\?.*/i, /stream\.shorthotp\.site\/video\/.*\/master.html/i, /cdn.+\/segment.+\/?token.+/i, /helvid\.([a-z0-9]+)\/hash.php\?.+/i, /southeastasia1-mediap.svc.ms\/.+\/videomanifest/i, /cdn\.animevui\.[a-z]+\/file/i, /\.xyz\/cdn\/hls\/.+\/master\.txt/i, /hls\.streamcdn\.[a-z]+\/m3u8\//i, /\.streamc\.xyz\/(.*hash\.php|(get|[a-z]{1,2})[a-z0-9]*\.php)\?hash=/i, /\.streamc\.xyz\/getPlaylist\.php+/i, /intl-api.iq.com.+\/cache\-video\.iq\.com\/dash\?.+/i, /api\.bilibili\.com\/.+\/wbi\/playurl/i, /cdn\/hls\/[a-z0-9\-_]+\/master\.txt/i, /stream12345\.online\/video\/[a-z0-9\-_]+\/master\.html/i, /content\.vdcdn\.top\/stream\/master\.php/i, /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i, /https:\/\/hls\.fasthls\.top\/media\/.+/i, /eporner\.com\/xhr\/video\/.+\?hash\=.+/i, /phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i, /video\.twimg\.com\/.+video\/(\d+)(\/pu)?\/pl\/[a-z0-9\-_]+\.m3u8/i, /syntheticvideo\..+\/sources\?videoId/i, /goplayer\.xyz\/video\/[a-z0-9\-_]+\/(master|playlist)\./i, /m3u8\.cloustream\.net/i, /x\.mimix\.cc\/watch\/.+/i, /toptop\.fasthls\.top\/hls\/.+/i, /play\.cloudfrela\.com\/stream\/.+/i, /m3u8\-play\-\d+\.(playstreamz\.site|playsex3x\.xyz)\/m3u8\/.+/i, /animixplay\-n.+\/count-data\.js\?.+/i, /hlsmovie\.com\/video\/.+\/master\.html.+/i, /pl\.vlogphim\.net\/m3u8.+/i, /graph\.nhaccuatui\.com\/api\/v1\/playlist/i, /graph\.nhaccuatui\.com\/api\/v1\/song/i, /graph\.nhaccuatui\.com\/api\/v2\/search\/artist\/detail/i, /hlstream\.com\/video\/.+\/master\.html.+/i, /macky\.xtremestream\.xyz\/player\/index\.php\?data\=.+/i, /helvid\.[a-z0-9]+\/play\/token_hash\?.+/i, /hlstream\.com\/video\/.+\/master\.html.+/i, /nhaccuatui\.com\/api(\/v\d+)?(\/playlist\/detail|\/song\/detail|\/video\/detail|\/app\/home\/index|\/song\/feed|\/radio\/musiclist|\/search\/artist\/song)/i, /apis\.naver\.com\/.*\/vod\/play.*\?key\=.*/i, /qooglevideo\.com\/manifest-s1\/02938\.vl/, /pl-ali\.youku\.com\/playlist\/m3u8/, /hs-vod2\.nimo\.tv/, /vevocloud\.com\/play\/index/, /scontent-sin([\d\-]+)\.xx\.fbcdn\.net/, /scontent\.fhan.*\.fbcdn\.net/, /scontent-sin([\d\-]+)-xx\.fbcdn\.cloud\/.+\.m3u8\/stream-plain\?/, /vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist.json/, /^https:\/\/abyssplayer\.com\/[\w-]+$/i, /online\.tiengtrung\.vn\/api\/play\.php/i, /cdn\.donghua3d/, /audinifer.*\/stream\/.+\.m3u8/i, /tiktok\.phimhdc\.com\/edgeplayer\.html/, /data-vod-node\.onflixcdn\.com\/\?.*url=/i, /chophim\.\w+\/static\/image\/\w+/].some(t => t.test(e));
      }
    }
    function G(e) {
      var t = e.title || e.filename || document.title;
      if (e.type == "subtitles") {
        t = t + " (" + (e.i18n_quality || e.quality) + ")";
      }
      var r = "." + e.ext;
      return t = (t = (t == null ? undefined : t.replace(/\s+/g, " ").replace(/[/\\:*?"<>|\u200c\u200d]/g, "-")) + r).match(/[*~]/gi) ? "_" + t.replace(/[*~]/gi, ".") : t;
    }
    function Q(e) {
      if (!e) {
        return null;
      }
      var r;
      for (var n = [/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([\w\-]+)/i, /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/, /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/, /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/, /youtube.*.com\/embed\/([a-z0-9\-_]+)/i, /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/], o = 0; o < n.length; ++o) {
        if (r = e.match(n[o])) {
          return r[1];
        }
      }
      if (e.match(/youtube\.com\/embed\/videoseries/i) && document.querySelector("link[rel=\"canonical\"]")?.href) {
        return Q(e);
      }
      return null;
    }
    function $(e) {
      if (o.a.M3U8 && Object(n.B)(e.ext)) {
        return true;
      }
      var t = e.type;
      if (!t) {
        return false;
      }
      var r = n.k[t];
      var i = r && r.extensions;
      return r && i.indexOf(e.ext) !== -1;
    }
    function K(e) {
      for (var t = 0, r = n.q.length; t < r && n.q[t] >= e;) {
        t++;
      }
      return n.q[t - 1];
    }
    function X(e) {
      var t = e.filter(function (e) {
        return e.type === "video" && (!!o.a.DOWNLOAD.M3U8_AUDIO || !["m3u", "m3u8"].includes(e.ext)) && (typeof e.url == "object" && e.url.audioUrl || typeof e.url == "string");
      });
      var r = [{
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
      var n = location.host === "www.youtube.com" ? r : [r[0]];
      var i = [];
      if (t.length) {
        oe(t).forEach(function (e) {
          var t = e.media;
          var o = n.map(function (e) {
            var n = function (e, t) {
              t = t.toLowerCase();
              var r = [...e];
              var n = e.filter(function (e) {
                return e.ext === "mp4";
              });
              if (n.length) {
                r = n;
              }
              var o = r.filter(function (e) {
                return e.quality && e.quality.toLowerCase() === "full hd";
              });
              var i = r.filter(function (e) {
                return e.quality && e.quality.toLowerCase() === "hd";
              });
              var a = r.filter(function (e) {
                return e.quality && ["normal", "medium", "standard"].includes(e.quality.toLowerCase());
              });
              switch (t) {
                case "high":
                  if (o.length) {
                    r = o;
                  } else if (i.length) {
                    r = i;
                  } else if (a.length) {
                    r = a;
                  }
                  break;
                case "medium":
                default:
                  if (a.length) {
                    r = a;
                  } else if (i.length) {
                    r = i;
                  } else if (o.length) {
                    r = o;
                  }
              }
              var s = r.filter(function (e) {
                return typeof e.url == "object" && e.url.audioUrl;
              });
              if (s.length) {
                r = s;
              }
              return r[0];
            }(t, e.name);
            var o = Object.assign({}, n);
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
              var a = r.find(e => e.itag === i) || r[0];
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
    var Z;
    var J = 20000;
    function ee(e) {
      return p(this, undefined, undefined, l().m(function t() {
        var r;
        var n;
        var o;
        var i;
        var a;
        var s;
        var c;
        var u;
        var d;
        var p;
        return l().w(function (t) {
          while (true) {
            switch (t.p = t.n) {
              case 0:
                t.p = 0;
                t.n = 1;
                return fetch(e);
              case 1:
                if ((r = t.v).ok) {
                  t.n = 2;
                  break;
                }
                return t.a(2, null);
              case 2:
                n = r.headers;
                o = n.get("content-type");
                t.n = 3;
                return r.blob();
              case 3:
                i = t.v;
                t.n = 4;
                return createImageBitmap(i);
              case 4:
                a = t.v;
                if (!((s = a.width * a.height) < J)) {
                  t.n = 5;
                  break;
                }
                a.close();
                return t.a(2, null);
              case 5:
                c = new URL(e);
                u = c.pathname;
                d = u.split(".").pop();
                p = {
                  url: e,
                  width: a.width,
                  height: a.height,
                  totalPixel: s,
                  sizeKiloBytes: Number((i.size / 1000).toFixed(1)),
                  extension: (o == null ? undefined : o.split("/").pop()) || d || ""
                };
                a.close();
                return t.a(2, p);
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
    function re(e) {
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
    function ne(e) {
      var t = [];
      e.forEach(e => {
        var r = e.type == "video";
        e.title ||= e.filename;
        var n = e.widgetID;
        var o = e.title || e.filename;
        var i = t.find(e => e.widgetID === n);
        if (i) {
          if (r) {
            if (e.thumbnail) {
              i.videoThumbnail = e.thumbnail;
            } else {
              i.videoThumbnail = re(e.referrer || "");
            }
            i.hasVideo = true;
          }
          i.media.push(e);
        } else {
          t.push({
            media: [e],
            title: o,
            hasVideo: !!r,
            videoThumbnail: r ? e.thumbnail || re(e.referrer || "") : null,
            widgetID: e.widgetID
          });
        }
      });
      return t;
    }
    function oe(e) {
      var t = [];
      e.forEach(e => {
        var r = e.type == "video";
        e.title ||= e.filename;
        var n = e.title || e.filename;
        var o = t.find(e => e.title === n || e.filename === n);
        if (o) {
          if (r) {
            if (e.thumbnail) {
              o.videoThumbnail = e.thumbnail;
            } else {
              o.videoThumbnail = re(e.referrer || "");
            }
            o.hasVideo = true;
          }
          o.media.push(e);
        } else {
          t.push({
            media: [e],
            title: n,
            hasVideo: !!r,
            videoThumbnail: r ? e.thumbnail || re(e.referrer || "") : null
          });
        }
      });
      return t;
    }
    try {
      Z = chrome.i18n.getMessage || (() => "");
    } catch (e) {
      Z = () => "";
    }
    var ie = Z;
    var ae = (e, t) => e.type === t.type && e.id === t.id && (typeof e.url != "string" && typeof t.url != "string" ? e.url.videoUrl == t.url.videoUrl : e.url === t.url);
    var se = t => {
      return (t = t ?? e.tab_url ?? window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/);
    };
    var ce = e => e ? e.replaceAll(/[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g, "").replaceAll(/\s+/g, " ") : e;
    var ue = (e, t, r) => {
      var n = t.timeout;
      delete t.timeout;
      if (n) {
        r = r ?? new AbortController();
        setTimeout(() => r.abort(), n);
        return fetch(e, Object.assign({
          signal: r.signal
        }, t));
      } else {
        return fetch(e, t);
      }
    };
    var le = e => new Promise(t => setTimeout(t, e));
    function de(e) {
      return function (t = e) {
        return t;
      };
    }
    function pe(e, t, r) {
      t.forEach(t => {
        if (typeof r == "function" && r(t, e) || e.includes(t)) {
          e.push(t);
        }
      });
      return e;
    }
    class fe {
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
    function me(e) {
      var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      var r = decodeURIComponent(window.atob(t).split("").map(function (e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
      return JSON.parse(r);
    }
    function ge(e) {
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
    function _e(e) {
      var t = e.getFullYear();
      var r = e.getMonth();
      var n = e.getDate();
      return parseInt(`${t}${ve(r)}${ve(n)}`);
    }
    function be(e) {
      var t;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      return function (n) {
        clearTimeout(t);
        t = setTimeout(() => {
          e(n);
        }, r);
      };
    }
    function we(e) {
      var t = new Date(e);
      var r = new Date(Date.now());
      return t.getDate() == r.getDate() && t.getMonth() == r.getMonth() && t.getFullYear() == r.getFullYear();
    }
    function Ee(e) {
      var t = we(e);
      var r = (new Date(Date.now()).setHours(0, 0, 0, 0) - new Date(e).setHours(0, 0, 0, 0)) / 86400 / 1000 == 1;
      return !t && r;
    }
    function De() {
      var e;
      return !!((e = window?.matchMedia) === null || e === undefined ? undefined : e.call(window, "(prefers-color-scheme: dark)"))?.matches;
    }
    function Te() {
      0;
    }
    function ke(e) {
      var t = c.a.enc.Hex.parse(e).toString(c.a.enc.Base64);
      return c.a.AES.decrypt(t, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ").toString(c.a.enc.Utf8);
    }
    function Ae(e) {
      var t = e.indexOf("{");
      if (t === -1) {
        return null;
      }
      var r = 0;
      for (var n = t; n < e.length; n++) {
        if (e[n] === "{") {
          r++;
        }
        if (e[n] === "}") {
          r--;
        }
        if (r === 0) {
          var o = e.slice(t, n + 1);
          try {
            return JSON.parse(o);
          } catch (e) {
            return null;
          }
        }
      }
    }
    var Ce = [{
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
    var xe = () => new Promise(e => {
      chrome.i18n.detectLanguage(document.body.innerText.substring(0, 1000), function (t) {
        if (t.isReliable) {
          e(t.languages[0]);
        }
        e(null);
      });
    });
    var Se = e => e.split(";").map(e => e.trim().split(/=(.+)/)).reduce((e, t) => {
      e[t[0]] = t[1];
      return e;
    }, {});
    function Oe() {
      return p(this, undefined, undefined, l().m(function e() {
        var t;
        var r;
        var o;
        var i;
        var a;
        return l().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                t = ["SAPISID", "__Secure-3PAPISID", "__Secure-1PAPISID"];
                r = ["SAPISIDHASH", "SAPISID1PHASH", "SAPISID3PHASH"];
                e.n = 1;
                return W({
                  type: n.b.GET_COOKIES,
                  cookies: t
                });
              case 1:
                o = e.v;
                i = u.a.ssId;
                if (!o) {
                  e.n = 2;
                  break;
                }
                a = r.map((e, r) => Ie(e, o[t[r]], "https://www.youtube.com", {
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
    function Ie(e, t, r, n) {
      return p(this, undefined, undefined, l().m(function o() {
        var i;
        var a;
        var s;
        var c;
        return l().w(function (o) {
          while (true) {
            switch (o.n) {
              case 0:
                i = Math.round(Date.now() / 1000);
                a = [];
                if (n) {
                  a.push(Object.values(n).join(":"));
                }
                a.push(i, t, r);
                o.n = 1;
                return Le(a.join(" "));
              case 1:
                s = o.v;
                c = [i, s];
                if (n) {
                  c.push(...Object.keys(n));
                }
                return o.a(2, `${e} ${c.join("_")}`);
            }
          }
        }, o);
      }));
    }
    function Le(e) {
      return p(this, undefined, undefined, l().m(function t() {
        var r;
        var n;
        var o;
        var i;
        var a;
        return l().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                r = new TextEncoder();
                n = r.encode(e);
                t.n = 1;
                return crypto.subtle.digest("SHA-1", n);
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
      return p(this, undefined, undefined, l().m(function t() {
        var r;
        return l().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                t.n = 1;
                return W({
                  type: n.b.CHECK_URL,
                  data: {
                    url: e
                  }
                });
              case 1:
                if (r = t.v) {
                  t.n = 2;
                  break;
                }
                return t.a(2, null);
              case 2:
                return t.a(2, r.status);
            }
          }
        }, t);
      }));
    }
  }).call(this, r(13));
};
