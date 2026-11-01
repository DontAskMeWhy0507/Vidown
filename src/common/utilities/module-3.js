// Module 3 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
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
  };
