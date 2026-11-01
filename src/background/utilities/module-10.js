// Module 10 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  r.d(t, "c", function () {
    return c;
  });
  r.d(t, "a", function () {
    return u;
  });
  r.d(t, "b", function () {
    return f;
  });
  r.d(t, "d", function () {
    return h;
  });
  var n = r(3);
  var o = r(0);
  r.d(t, "e", function () {
    return o.query;
  });
  r.d(t, "f", function () {
    return o.queryAll;
  });
  var i = r(7);
  function a(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return s(e, t);
          }
          var r = {}.toString.call(e).slice(8, -1);
          if (r === "Object" && e.constructor) {
            r = e.constructor.name;
          }
          if (r === "Map" || r === "Set") {
            return Array.from(e);
          } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
            return s(e, t);
          } else {
            return undefined;
          }
        }
      }(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
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
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        a = e.done;
        return e;
      },
      e: function (e) {
        c = true;
        i = e;
      },
      f: function () {
        try {
          if (!a && r.return != null) {
            r.return();
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
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function c(e, t) {
    return e && e.getAttribute(t) || "";
  }
  var u = {
    isCocCocSerp: function (e) {
      if (e) {
        return Boolean(e.match(/(^(https|http):\/\/(dev[0-9]?\.)?coccoc.com\/search\?query=)(?!.*tbm).*$/i));
      }
    },
    isGGAds: function (e) {
      return Boolean(e.match(/^https:\/\/www\.(google\.com\/afs\/ads([\s\S]+master[\-A-Za-z\-0-9])*)|(((adsensecustomsearchads|google)\.com|syndicatedsearch\.goog)\/afs\/ads)/i));
    },
    isCocCocComposer: function (e) {
      return Boolean(e.match(/(^(https|http):\/\/(dev[0-9]?\.)?coccoc.com\/composer\?)(?!.*tbm).*$/i));
    },
    saveQueryId: function (e) {
      i.a.remove("_serpid_on_coccoc");
      if (e && i.a.get("coccoc_query_id") !== e) {
        i.a.set("coccoc_query_id", e);
      }
    },
    hasGGAdsIrames: function (e) {
      var t;
      var r = a(Object(o.queryAll)("iframe", e));
      try {
        for (r.s(); !(t = r.n()).done;) {
          var n = t.value;
          if (f.isGGAdsOnCocCoc(n == null ? undefined : n.src)) {
            return true;
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
  };
  var l = new RegExp("^(www\\.)?google\\.((com|ac|ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cc|cd|cf|cat|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|ee|fi|dm|dz|es|fm|fr|ga|ge|gf|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ir|iq|ie|im|io|is|it|je|ki|kg|jo|kz|la|lt|lu|lv|li|lk|md|me|mg|mk|ml|mn|ms|mu|mv|mw|nl|no|nr|nu|pl|ne|pn|ps|pt|ro|rs|ru|rw|sc|se|sh|si|sn|sm|so|tk|tl|tm|to|tn|st|sk|tt|td|vu|ws|vg|tg|us)|(co((\\.(th|id|il|in|jp|ke|ma|kr|mz|ls|nz|tz|ug|uk|uz|ve|vi|za|zm|zw|ao|ck|bw|cr))|m\\.(pr|py|qa|sa|sb|sg|sl|sv|tj|tn|tr|tw|gh|gi|gt|hk|jm|kw|lb|lc|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|ph|pk|pg|ua|uy|vc|vn|af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|kh|co|cu|cy|do|ec|eg|et|fj))))$", "i");
  var d = /[&?]q=[^&]/i;
  var p = /^https:\/\/www.google.com\/afs\/ads/i;
  var f = {
    isSERPHost: function (e) {
      return Boolean(e.match(l) && !location.href.match(p) || u.isCocCocSerp(location.href));
    },
    isGGAdsOnCocCoc: function (e) {
      return Boolean(u.isGGAds(e) && u.isCocCocSerp(document.referrer));
    },
    isYSERPHref: function (e) {
      return e && Boolean(e.match(/(youtube.com\/results+[\s\S]+search_query=)/g));
    },
    isVideoSERPHref: function (e) {
      return Boolean(e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(tbm=vid|vid:|udm=7)/g));
    },
    isShortVideoTabSERPHref: function (e) {
      return Boolean(e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(udm=39)/g));
    },
    isImageSERPHref: function (e) {
      return Boolean(e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(tbm=isch|udm=2)/g));
    },
    isSERPRequest: function (e) {
      var t;
      var r;
      var o = Object(n.f)(e);
      return Boolean(this.isSERPHost(o.host) && ((t = o.pathname) === null || t === undefined ? undefined : t.match(/\/s(earch)?/i)) && ((r = o.search) === null || r === undefined ? undefined : r.match(d)));
    },
    getSearchParams: function (e) {
      var t = Object(n.f)(e);
      var r = Object(n.h)(t.search);
      var i = Object(n.h)(t.hash || "#");
      var a = Object(o.defined)(i.q);
      return {
        _rawSearch: r,
        _rawHash: i,
        q: a ? i.q : r.q || r.query || "",
        s: a ? i.start || 0 : r.start || 0,
        udm: a ? i.udm : r.udm,
        tbm: a ? i.tbm : r.tbm && r.tbm != "vid" && r.tbm != "isch" || null,
        isXHR: r.tch,
        isHash: a
      };
    },
    isGGAds: function (e) {
      return e && /(^https:\/\/www\.google\.com\/afs\/ads([\s\S]+master[\-A-Za-z\-0-9])*)|(^https:\/\/googleads\.g\.doubleclick\.net\/pagead\/ads)|(^https:\/\/.+safeframe\.googlesyndication\.com\/safeframe)/i.test(e);
    },
    isCollectingAdSites: function (e) {
      return e && /^(https:\/\/((www\.)?(eva\.vn\/)|(vietnamnet\.vn\/)|(coccoc\.com\/webhp)))|(chrome:\/\/newtab\/)/i.test(e);
    }
  };
  function h(e, t) {
    return e.matches(t) || e.closest(t);
  }
};
