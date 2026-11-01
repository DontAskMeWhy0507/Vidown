// Module 518 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(440);
  var o = r(516);
  var i = r(136);
  var a = Object.prototype.hasOwnProperty;
  var s = Array.isArray;
  var c = o();
  function u(e, t) {
    c.set(e, t);
    return e;
  }
  function l(e) {
    return c.has(e);
  }
  function d(e) {
    return c.get(e);
  }
  function p(e, t) {
    c.set(e, t);
  }
  var f = function () {
    var e = [];
    for (var t = 0; t < 256; ++t) {
      e[e.length] = "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase();
    }
    return e;
  }();
  function h(e, t) {
    var r = t && t.plainObjects ? {
      __proto__: null
    } : {};
    for (var n = 0; n < e.length; ++n) {
      if (e[n] !== undefined) {
        r[n] = e[n];
      }
    }
    return r;
  }
  function m(e, t, r) {
    if (t === "__proto__" && i) {
      i(e, t, {
        configurable: true,
        enumerable: true,
        value: r,
        writable: true
      });
    } else {
      e[t] = r;
    }
  }
  e.exports = {
    arrayToObject: h,
    assign: function (e, t) {
      return Object.keys(t).reduce(function (e, r) {
        m(e, r, t[r]);
        return e;
      }, e);
    },
    combine: function (e, t, r, n, o) {
      if (l(e)) {
        if (o) {
          throw new RangeError("Array limit exceeded. Only " + r + " element" + (r === 1 ? "" : "s") + " allowed in an array.");
        }
        for (var i = s(t) ? t : [t], a = d(e), c = 0; c < i.length; ++c) {
          e[a += 1] = i[c];
        }
        p(e, a);
        return e;
      }
      var f = [].concat(e, t);
      if (f.length > r) {
        if (o) {
          throw new RangeError("Array limit exceeded. Only " + r + " element" + (r === 1 ? "" : "s") + " allowed in an array.");
        }
        return u(h(f, {
          plainObjects: n
        }), f.length - 1);
      }
      return f;
    },
    compact: function (e) {
      for (var t = [{
          obj: {
            o: e
          },
          prop: "o"
        }], r = o(), n = 0; n < t.length; ++n) {
        var i = t[n];
        var a = i.obj[i.prop];
        for (var c = Object.keys(a), u = 0; u < c.length; ++u) {
          var l = c[u];
          var d = a[l];
          if (typeof d == "object" && d !== null && !r.has(d)) {
            t[t.length] = {
              obj: a,
              prop: l
            };
            r.set(d, true);
          }
        }
      }
      (function (e) {
        while (e.length > 1) {
          var t = e.pop();
          var r = t.obj[t.prop];
          if (s(r)) {
            var n = [];
            for (var o = 0; o < r.length; ++o) {
              if (r[o] !== undefined) {
                n[n.length] = r[o];
              }
            }
            t.obj[t.prop] = n;
          }
        }
      })(t);
      return e;
    },
    decode: function (e, t, r) {
      var n = e.replace(/\+/g, " ");
      if (r === "iso-8859-1") {
        return n.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(n);
      } catch (e) {
        return n;
      }
    },
    encode: function (e, t, r, o, i) {
      if (e.length === 0) {
        return e;
      }
      var a = e;
      if (typeof e == "symbol") {
        a = Symbol.prototype.toString.call(e);
      } else if (typeof e != "string") {
        a = String(e);
      }
      if (r === "iso-8859-1") {
        return escape(a).replace(/%u[0-9a-f]{4}/gi, function (e) {
          return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
        });
      }
      var s = "";
      for (var c = 0; c < a.length; c += 1024) {
        var u = a.length >= 1024 ? a.slice(c, c + 1024) : a;
        if (c + 1024 < a.length) {
          var l = u.charCodeAt(u.length - 1);
          if (l >= 55296 && l <= 56319) {
            u = u.slice(0, -1);
            c -= 1;
          }
        }
        var d = [];
        for (var p = 0; p < u.length; ++p) {
          var h = u.charCodeAt(p);
          if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || i === n.RFC1738 && (h === 40 || h === 41)) {
            d[d.length] = u.charAt(p);
          } else if (h < 128) {
            d[d.length] = f[h];
          } else if (h < 2048) {
            d[d.length] = f[h >> 6 | 192] + f[h & 63 | 128];
          } else if (h < 55296 || h >= 57344) {
            d[d.length] = f[h >> 12 | 224] + f[h >> 6 & 63 | 128] + f[h & 63 | 128];
          } else {
            p += 1;
            h = 65536 + ((h & 1023) << 10 | u.charCodeAt(p) & 1023);
            d[d.length] = f[h >> 18 | 240] + f[h >> 12 & 63 | 128] + f[h >> 6 & 63 | 128] + f[h & 63 | 128];
          }
        }
        s += d.join("");
      }
      return s;
    },
    isBuffer: function (e) {
      return !!e && typeof e == "object" && !!e.constructor && typeof e.constructor.isBuffer == "function" && !!e.constructor.isBuffer(e);
    },
    isOverflow: l,
    isRegExp: function (e) {
      return Object.prototype.toString.call(e) === "[object RegExp]";
    },
    markOverflow: u,
    maybeMap: function (e, t) {
      if (s(e)) {
        var r = [];
        for (var n = 0; n < e.length; n += 1) {
          r[r.length] = t(e[n]);
        }
        return r;
      }
      return t(e);
    },
    merge: function e(t, r, n) {
      if (!r) {
        return t;
      }
      if (typeof r != "object" && typeof r != "function") {
        if (s(t)) {
          var o = t.length;
          if (n && typeof n.arrayLimit == "number" && o >= n.arrayLimit) {
            if (n.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + n.arrayLimit + " element" + (n.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            return u(h(t.concat(r), n), o);
          }
          t[o] = r;
        } else {
          if (!t || typeof t != "object") {
            return [t, r];
          }
          if (l(t)) {
            var i = d(t) + 1;
            t[i] = r;
            p(t, i);
          } else {
            if (n && n.strictMerge) {
              return [t, r];
            }
            if (n && (n.plainObjects || n.allowPrototypes) || !a.call(Object.prototype, r)) {
              t[r] = true;
            }
          }
        }
        return t;
      }
      if (!t || typeof t != "object") {
        if (l(r)) {
          for (var c = Object.keys(r), f = n && n.plainObjects ? {
              __proto__: null,
              0: t
            } : {
              0: t
            }, g = 0; g < c.length; g++) {
            f[parseInt(c[g], 10) + 1] = r[c[g]];
          }
          return u(f, d(r) + 1);
        }
        var v = [t].concat(r);
        if (n && typeof n.arrayLimit == "number" && v.length > n.arrayLimit) {
          if (n.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + n.arrayLimit + " element" + (n.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return u(h(v, n), v.length - 1);
        }
        return v;
      }
      var y = t;
      if (s(t) && !s(r)) {
        y = h(t, n);
      }
      if (s(t) && s(r)) {
        r.forEach(function (r, o) {
          if (a.call(t, o)) {
            var i = t[o];
            if (i && typeof i == "object" && r && typeof r == "object") {
              t[o] = e(i, r, n);
            } else {
              t[t.length] = r;
            }
          } else {
            t[o] = r;
          }
        });
        if (n && typeof n.arrayLimit == "number" && t.length > n.arrayLimit) {
          if (n.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + n.arrayLimit + " element" + (n.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return u(h(t, n), t.length - 1);
        }
        return t;
      }
      return Object.keys(r).reduce(function (t, o) {
        var i = r[o];
        if (a.call(t, o)) {
          m(t, o, e(t[o], i, n));
        } else {
          m(t, o, i);
        }
        if (l(r) && !l(t)) {
          u(t, d(r));
        }
        if (l(t)) {
          var s = parseInt(o, 10);
          if (String(s) === o && s >= 0 && s > d(t)) {
            p(t, s);
          }
        }
        return t;
      }, y);
    }
  };
};
