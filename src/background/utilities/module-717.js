// Module 717 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e, n) {
    var o; /*! https://mths.be/punycode v1.4.1 by @mathias */
    (function (i) {
      if (t) {
        t.nodeType;
      }
      if (e) {
        e.nodeType;
      }
      var a = typeof n == "object" && n;
      if (a.global !== a && a.window !== a) {
        a.self;
      }
      var s;
      var c = 2147483647;
      var u = /^xn--/;
      var l = /[^\x20-\x7E]/;
      var d = /[\x2E\u3002\uFF0E\uFF61]/g;
      var p = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var f = Math.floor;
      var h = String.fromCharCode;
      function m(e) {
        throw new RangeError(p[e]);
      }
      function g(e, t) {
        for (var r = e.length, n = []; r--;) {
          n[r] = t(e[r]);
        }
        return n;
      }
      function v(e, t) {
        var r = e.split("@");
        var n = "";
        if (r.length > 1) {
          n = r[0] + "@";
          e = r[1];
        }
        return n + g((e = e.replace(d, ".")).split("."), t).join(".");
      }
      function y(e) {
        for (var t, r, n = [], o = 0, i = e.length; o < i;) {
          if ((t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i) {
            if (((r = e.charCodeAt(o++)) & 64512) == 56320) {
              n.push(((t & 1023) << 10) + (r & 1023) + 65536);
            } else {
              n.push(t);
              o--;
            }
          } else {
            n.push(t);
          }
        }
        return n;
      }
      function _(e) {
        return g(e, function (e) {
          var t = "";
          if (e > 65535) {
            t += h((e -= 65536) >>> 10 & 1023 | 55296);
            e = e & 1023 | 56320;
          }
          return t += h(e);
        }).join("");
      }
      function b(e, t) {
        return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
      }
      function w(e, t, r) {
        var n = 0;
        e = r ? f(e / 700) : e >> 1;
        e += f(e / t);
        for (; e > 455; n += 36) {
          e = f(e / 35);
        }
        return f(n + e * 36 / (e + 38));
      }
      function E(e) {
        var t;
        var r;
        var n;
        var o;
        var i;
        var a;
        var s;
        var u;
        var l;
        var d;
        var p;
        var h = [];
        var g = e.length;
        var v = 0;
        var y = 128;
        var b = 72;
        if ((r = e.lastIndexOf("-")) < 0) {
          r = 0;
        }
        n = 0;
        for (; n < r; ++n) {
          if (e.charCodeAt(n) >= 128) {
            m("not-basic");
          }
          h.push(e.charCodeAt(n));
        }
        for (o = r > 0 ? r + 1 : 0; o < g;) {
          i = v;
          a = 1;
          s = 36;
          for (; o >= g && m("invalid-input"), ((u = (p = e.charCodeAt(o++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : 36) >= 36 || u > f((c - v) / a)) && m("overflow"), v += u * a, !(u < (l = s <= b ? 1 : s >= b + 26 ? 26 : s - b)); s += 36) {
            if (a > f(c / (d = 36 - l))) {
              m("overflow");
            }
            a *= d;
          }
          b = w(v - i, t = h.length + 1, i == 0);
          if (f(v / t) > c - y) {
            m("overflow");
          }
          y += f(v / t);
          v %= t;
          h.splice(v++, 0, y);
        }
        return _(h);
      }
      function D(e) {
        var t;
        var r;
        var n;
        var o;
        var i;
        var a;
        var s;
        var u;
        var l;
        var d;
        var p;
        var g;
        var v;
        var _;
        var E;
        var D = [];
        g = (e = y(e)).length;
        t = 128;
        r = 0;
        i = 72;
        a = 0;
        for (; a < g; ++a) {
          if ((p = e[a]) < 128) {
            D.push(h(p));
          }
        }
        n = o = D.length;
        if (o) {
          D.push("-");
        }
        while (n < g) {
          s = c;
          a = 0;
          for (; a < g; ++a) {
            if ((p = e[a]) >= t && p < s) {
              s = p;
            }
          }
          if (s - t > f((c - r) / (v = n + 1))) {
            m("overflow");
          }
          r += (s - t) * v;
          t = s;
          a = 0;
          for (; a < g; ++a) {
            if ((p = e[a]) < t && ++r > c) {
              m("overflow");
            }
            if (p == t) {
              u = r;
              l = 36;
              for (; !(u < (d = l <= i ? 1 : l >= i + 26 ? 26 : l - i)); l += 36) {
                E = u - d;
                _ = 36 - d;
                D.push(h(b(d + E % _, 0)));
                u = f(E / _);
              }
              D.push(h(b(u, 0)));
              i = w(r, v, n == o);
              r = 0;
              ++n;
            }
          }
          ++r;
          ++t;
        }
        return D.join("");
      }
      s = {
        version: "1.4.1",
        ucs2: {
          decode: y,
          encode: _
        },
        decode: E,
        encode: D,
        toASCII: function (e) {
          return v(e, function (e) {
            if (l.test(e)) {
              return "xn--" + D(e);
            } else {
              return e;
            }
          });
        },
        toUnicode: function (e) {
          return v(e, function (e) {
            if (u.test(e)) {
              return E(e.slice(4).toLowerCase());
            } else {
              return e;
            }
          });
        }
      };
      if ((o = function () {
        return s;
      }.call(t, r, t, e)) !== undefined) {
        e.exports = o;
      }
    })();
  }).call(this, r(96)(e), r(13));
};
