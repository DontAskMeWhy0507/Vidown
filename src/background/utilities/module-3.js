// Module 3 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  r.d(t, "d", function () {
    return d;
  });
  r.d(t, "f", function () {
    return p;
  });
  r.d(t, "e", function () {
    return f;
  });
  r.d(t, "g", function () {
    return m;
  });
  r.d(t, "b", function () {
    return v;
  });
  r.d(t, "h", function () {
    return y;
  });
  r.d(t, "c", function () {
    return _;
  });
  r.d(t, "a", function () {
    return b;
  });
  var n = r(1);
  var o = r(0);
  function i() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e;
    var t;
    var r = typeof Symbol == "function" ? Symbol : {};
    var n = r.iterator || "@@iterator";
    var o = r.toStringTag || "@@toStringTag";
    function s(r, n, o, i) {
      var s = n && n.prototype instanceof u ? n : u;
      var l = Object.create(s.prototype);
      a(l, "_invoke", function (r, n, o) {
        var i;
        var a;
        var s;
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
            a = 0;
            s = e;
            p.n = r;
            return c;
          }
        };
        function f(r, n) {
          a = r;
          s = n;
          t = 0;
          for (; !d && u && !o && t < l.length; t++) {
            var o;
            var i = l[t];
            var f = p.p;
            var h = i[2];
            if (r > 3) {
              if (o = h === n) {
                s = i[(a = i[4]) ? 5 : (a = 3, 3)];
                i[4] = i[5] = e;
              }
            } else if (i[0] <= f) {
              if (o = r < 2 && f < i[1]) {
                a = 0;
                p.v = n;
                p.n = i[1];
              } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                i[4] = r;
                i[5] = n;
                p.n = h;
                a = 0;
              }
            }
          }
          if (o || r > 1) {
            return c;
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
          a = l;
          s = h;
          while ((t = a < 2 ? e : s) || !d) {
            if (!i) {
              if (a) {
                if (a < 3) {
                  if (a > 1) {
                    p.n = -1;
                  }
                  f(a, s);
                } else {
                  p.n = s;
                }
              } else {
                p.v = s;
              }
            }
            try {
              u = 2;
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
              } else if ((t = (d = p.n < 0) ? s : r.call(n, p)) !== c) {
                break;
              }
            } catch (t) {
              i = e;
              a = 1;
              s = t;
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
      return l;
    }
    var c = {};
    function u() {}
    function l() {}
    function d() {}
    t = Object.getPrototypeOf;
    var p = [][n] ? t(t([][n]())) : (a(t = {}, n, function () {
      return this;
    }), t);
    var f = d.prototype = u.prototype = Object.create(p);
    function h(e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, d);
      } else {
        e.__proto__ = d;
        a(e, o, "GeneratorFunction");
      }
      e.prototype = Object.create(f);
      return e;
    }
    l.prototype = d;
    a(f, "constructor", d);
    a(d, "constructor", l);
    l.displayName = "GeneratorFunction";
    a(d, o, "GeneratorFunction");
    a(f);
    a(f, o, "Generator");
    a(f, n, function () {
      return this;
    });
    a(f, "toString", function () {
      return "[object Generator]";
    });
    return (i = function () {
      return {
        w: s,
        m: h
      };
    })();
  }
  function a(e, t, r, n) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (e) {
      o = 0;
    }
    (a = function (e, t, r, n) {
      function i(t, r) {
        a(e, t, function (e) {
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
  function s(e, t, r, n) {
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
  var c = /([^/]+)$/i;
  var u = /\.([^/.]*)$/i;
  function l(e) {
    if (e && e.indexOf("data:image") !== 0) {
      return /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/\.?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
    } else {
      return [];
    }
  }
  function d(e) {
    var t = "";
    var r = "";
    try {
      var n = e.split("/");
      t = n[0];
      var o = n[1].split(";")[0];
      r = o;
      switch (o) {
        case "webm":
          r = t == "video" ? "webm" : "weba";
          break;
        case "3gpp":
          r = "3gp";
          break;
        case "3gpp2":
          r = "3g2";
          break;
        case "ogg":
          r = t == "video" ? "ogv" : "oga";
          break;
        case "mpeg":
          r = t == "video" ? "mpeg" : "mp3";
          break;
        case "x-midi":
          r = "midi";
          break;
        case "x-msvideo":
          r = "avi";
          break;
        case "mp2t":
          r = "ts";
      }
      return {
        type: t,
        ext: r
      };
    } catch (e) {
      return {
        type: t,
        ext: r
      };
    }
  }
  function p(e, t) {
    var r = typeof e == "object" ? e.videoUrl : e;
    var n = new URL(r, r.startsWith("http") ? undefined : location.origin);
    var i = (n.pathname.match(c) || [])[1] || "";
    var a = i.split(".").map(e => e.toLowerCase());
    i = decodeURIComponent(i.replace(u, ""));
    a.shift();
    if (a.length === 0 && Object(o.isSpecialUrls)(e)) {
      a = ["m3u8"];
    }
    var s = a[a.length - 1] || "";
    var l = null;
    if (n.href.startsWith("data:")) {
      var p = d(n.href.match(/data:([a-z]+\/[a-z0-9\-_]+);/i)[1]);
      s = p.ext;
      l = p.type;
    }
    var f = {
      url: typeof e == "object" ? e : n.href,
      protocol: n.protocol,
      host: n.host,
      port: n.port,
      pathname: n.pathname,
      filename: i,
      ext: s,
      exts: a,
      hash: n.hash,
      search: n.search,
      type: l
    };
    if (!f.port) {
      delete f.port;
    }
    if (t) {
      var h = {};
      n.search.replace(/^\?/, "").split(/&/).forEach(e => {
        var t = e.split("=");
        h[t[0]] = t[1];
      });
      f.query = h;
    }
    if (s == "flac") {
      f.quality = "Lossless";
      f.resolution = "lossless";
    }
    return f;
  }
  function f(e) {
    var r = typeof e == "object" ? e.videoUrl : e;
    if (r.startsWith("data:")) {
      var o = r.match(/data:([a-z]+)/)[1];
      if (["audio", "video"].includes(o)) {
        return o;
      } else {
        return "";
      }
    }
    var i = l(r)?.[11] || "";
    if (!i) {
      return "";
    }
    var a = new Map();
    var s = ["no_watermark_video"];
    Object.keys(n.k).forEach(e => {
      if (!s.includes(e)) {
        for (var t = n.k[e].extensions, r = 0; r < t.length; r++) {
          a.set(t[r], e);
        }
      }
    });
    if (r.includes("googlevideo.com/videoplayback") && i === "videoplayback" && r.includes("mp4")) {
      i = "video.mp4";
    }
    if (r.includes("videoplayback") && i === "videoplayback" && r.includes("mp4")) {
      i = "video.mp4";
    }
    var c = i.split(".");
    var u = c.length - 1;
    if (u <= 0) {
      return "";
    }
    var d = c[u].toLowerCase();
    return a.get(d);
  }
  function h(e) {
    return s(this, undefined, undefined, i().m(function t() {
      var r;
      var n;
      return i().w(function (t) {
        while (true) {
          switch (t.n) {
            case 0:
              t.n = 1;
              return fetch(e);
            case 1:
              r = t.v;
              t.n = 2;
              return r.blob();
            case 2:
              n = t.v;
              return t.a(2, new Promise((e, t) => {
                var r = new FileReader();
                r.onloadend = () => {
                  var t;
                  return e((t = r.result) === null || t === undefined ? undefined : t.toString());
                };
                r.onerror = t;
                r.readAsDataURL(n);
              }));
          }
        }
      }, t);
    }));
  }
  function m(e) {
    var t = e.url;
    var r = e.node;
    return s(this, undefined, undefined, i().m(function e() {
      var n;
      var a;
      var s;
      var l;
      var d;
      return i().w(function (e) {
        while (true) {
          switch (e.n) {
            case 0:
              n = new URL(t.startsWith("blob:") ? t.replace("blob:", "") : t);
              a = r.alt || (n.pathname.match(c) || [])[1] || "";
              a = decodeURIComponent(a.replace(u, "").replace(/%/g, "%25"));
              e.n = 1;
              return g(t);
            case 1:
              s = e.v;
              l = {
                url: t,
                protocol: n.protocol,
                host: n.host,
                pathname: n.pathname,
                filename: `${a}.${s}`,
                ext: s,
                exts: [s],
                hash: n.hash,
                search: n.search,
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
                l.url = d;
              }
            case 3:
              return e.a(2, l);
          }
        }
      }, e);
    }));
  }
  function g(e) {
    return s(this, undefined, undefined, i().m(function r() {
      var n;
      var o;
      var a;
      return i().w(function (r) {
        while (true) {
          switch (r.n) {
            case 0:
              n = new AbortController();
              r.n = 1;
              return fetch(e, {
                signal: n.signal
              });
            case 1:
              o = r.v;
              a = o.headers.get("content-type");
              n.abort();
              return r.a(2, (a == null ? undefined : a.split("/"))?.[1]);
          }
        }
      }, r);
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
    var r = {};
    t.forEach(e => {
      var t = e.split("=");
      if (Object(o.defined)(t[0]) && Object(o.defined)(t[1])) {
        r[t[0]] = decodeURIComponent(t[1].replace(/\+/g, " "));
      }
    });
    return r;
  }
  var _ = (() => {
    var e = ["facebook.com", "youtube.com", "video.vnexpress.net", "mp3.zing.vn", "radio.zing.vn", "tv.zing.vn", "nhaccuatui.com", "video.thethao247.vn", "video.ngoisao.net", "xvideos.com", "phimmoi.net", "clip.vn", "yan.vn", "xem.vn", "pornhub.com", "xhamster.com", "dailymotion.com", "xnxx.com", "hdonline.vn", "phim3s.net", "redtube.com", "phim14.net", "soundcloud.com", "youporn.com", "vimeo.com", "fptplay.net", "haivn.com", "chiasenhac.com", "movies.hdviet.com", "nhac.vui.vn", "nhacso.net", "anime47.com", "tube8.com", "talktv.vn", "chatvl.info", "cohet.tv", "vlxx.tv", "hayhaytv.vn", "xemphimso.com", "vivo.vn", "xemvtv.net", "vkool.net", "chimsedinang.com", "keeng.vn", "vuighe.net", "vetv.vn", "xemphimon.com", "ixxx.com", "biphim.com", "kenhvideo.com", "videogame.vn", "phim.in", "voh.com.vn", "phimsexporn.com", "porn99.net", "news.zing.vn", "me.zing.vn", "twitter.com", "24h.com.vn", "phim.clip.vn", "video.ringring.vn", "v.nhaccuatui.com", "clip.vietnamnet.vn", "afamily.vn", "media.bongdaplus.vn", "bongdaclip.com", "gamek.vn", "phapluattp.vn", "hdviet.com", "haiivl.com", "chatvl.com", "2sao.vn", "videos.vietgiaitri.com", "nhac.vietgiaitri.com", "megafun.vn", "phim.hayhd.vn", "cand.com.vn", "ohay.tv", "phim.megabox.vn", "anhtrang.org", "phim.anhtrang.org", "8bongda.com", "xemphimone.com", "bongda365.com.vn", "phimhd.vn", "dinotube.com", "phimvipvn.net", "animeax.com", "phimdata.com", "phimnhanh.net", "vipphim.net", "phimvon.com", "pubvn.tv", "phim22.com", "phim7.com", "hayxemphim.com", "m-viet.com", "thethaoclip.com", "nhac.hay365.com", "ssphim.com", "phimtructuyenhd.com", "xuongphim.tv", "vino.vn/mp3", "haivl.io", "nhacvang.org", "starmovies.mobi", "clipvuivn.com", "phimporn.com", "123tv.vn", "phimonlinehd.net", "hai24h.net", "jax.vn", "kenhgioitre.net", "chiaseclip.net", "phim.xixam.com", "bilutv.com", "phimbathu.com", "instagram.com", "banhtv.com", "txxx.com", "video.vietnamnet.vn", "video.bongdaplus.vn", "creatives.livejasmin.com", "tv.naver.com", "tv.tuoitre.vn", "icdrama.se", "video.thanhnien.vn", "spankbang.com", "dmm.co.jp", "v.youku.com", "v.qq.com", "daikynguyenvn.com", "thethao247.vn", "e.vnexpress.net", "ione.vnexpress.net", "kenh14.vn", "dantri.com.vn", "baomoi.com", "emdep.vn", "tuoitre.vn", "soha.vn", "video.congan.com.vn", "cafef.vn", "bongda.com.vn", "bongdaso.com", "eva.vn", "danviet.vn", "cliptv.vn", "bbc.co.uk", "edition.cnn.com", "buzzfeed.com", "businessinsider.com", "cnet.com", "dailymail.co.uk", "bilutvx.net", "chill123.gotdns.ch"];
    var t = {};
    for (var r = 0, n = e.length; r < n; ++r) {
      var o = e[r];
      console.assert(!(o in t), "Duplicate \"" + o + "\": " + t[o] + ", " + r);
      t[o] = r + 1;
    }
    return function (e) {
      for (var r = function (e) {
          return l(e)?.[6] || "";
        }(e), n = t[r]; !n && r;) {
        var o = r.indexOf(".") + 1;
        if (o === 0) {
          break;
        }
        r = r.substr(o);
        n = t[r];
      }
      return 100 + (n | 0);
    };
  })();
  function b(e, t, r = false) {
    var n = e || new URL(t);
    if (t.includes("https") || t.includes("//")) {
      if (!t.includes("http")) {
        t = "https:" + t;
      }
      return t.replace(/http:\/\//, "https://");
    }
    if (r && t.startsWith("/")) {
      if (n.origin) {
        return n.origin + t;
      } else {
        return t;
      }
    }
    var o = (n.host + n.pathname).split("/").filter(e => !!e).slice(0, -1);
    var i = t.split("/").filter(e => !!e);
    var a = i.lastIndexOf("..");
    var s = i.slice(0, a + 1);
    var c = i.slice(a + 1);
    if (s.length > 0) {
      o = o.slice(0, -s.length);
    }
    var u = o.indexOf(c[0]);
    if (u == -1) {
      o.push(...c);
    } else {
      u += 1;
      for (var l = 1; l < c.length; ++l) {
        var d = c[l];
        if (!o.includes(d)) {
          if (o[u - 1] === c[l - 1]) {
            o[u] = d;
          } else {
            o.push(d);
          }
        }
        u += 1;
      }
    }
    return n.protocol + "//" + o.join("/");
  }
};
