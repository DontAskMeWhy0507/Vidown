// Module 175 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (t) {
    var n = typeof Map == "function" && Map.prototype;
    var o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var i = n && o && typeof o.get == "function" ? o.get : null;
    var a = n && Map.prototype.forEach;
    var s = typeof Set == "function" && Set.prototype;
    var c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var u = s && c && typeof c.get == "function" ? c.get : null;
    var l = s && Set.prototype.forEach;
    var d = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
    var p = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
    var f = typeof WeakRef == "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
    var h = Boolean.prototype.valueOf;
    var m = Object.prototype.toString;
    var g = Function.prototype.toString;
    var v = String.prototype.match;
    var y = String.prototype.slice;
    var _ = String.prototype.replace;
    var b = String.prototype.toUpperCase;
    var w = String.prototype.toLowerCase;
    var E = RegExp.prototype.test;
    var D = Array.prototype.concat;
    var T = Array.prototype.join;
    var k = Array.prototype.slice;
    var A = Math.floor;
    var C = typeof BigInt == "function" ? BigInt.prototype.valueOf : null;
    var x = Object.getOwnPropertySymbols;
    var S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null;
    var O = typeof Symbol == "function" && typeof Symbol.iterator == "object";
    var I = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === O || "symbol") ? Symbol.toStringTag : null;
    var L = Object.prototype.propertyIsEnumerable;
    var R = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
      return e.__proto__;
    } : null);
    function P(e, t) {
      if (e === Infinity || e === -Infinity || e != e || e && e > -1000 && e < 1000 || E.call(/e/, t)) {
        return t;
      }
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof e == "number") {
        var n = e < 0 ? -A(-e) : A(e);
        if (n !== e) {
          var o = String(n);
          var i = y.call(t, o.length + 1);
          return _.call(o, r, "$&_") + "." + _.call(_.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return _.call(t, r, "$&_");
    }
    var B = r(720);
    var M = B.custom;
    var F = z(M) ? M : null;
    var U = {
      __proto__: null,
      double: "\"",
      single: "'"
    };
    var N = {
      __proto__: null,
      double: /(["\\])/g,
      single: /(['\\])/g
    };
    function j(e, t, r) {
      var n = r.quoteStyle || t;
      var o = U[n];
      return o + e + o;
    }
    function q(e) {
      return _.call(String(e), /"/g, "&quot;");
    }
    function H(e) {
      return !I || typeof e != "object" || !(I in e) && e[I] === undefined;
    }
    function V(e) {
      return Q(e) === "[object Array]" && H(e);
    }
    function W(e) {
      return Q(e) === "[object RegExp]" && H(e);
    }
    function z(e) {
      if (O) {
        return e && typeof e == "object" && e instanceof Symbol;
      }
      if (typeof e == "symbol") {
        return true;
      }
      if (!e || typeof e != "object" || !S) {
        return false;
      }
      try {
        S.call(e);
        return true;
      } catch (e) {}
      return false;
    }
    e.exports = function e(r, n, o, s) {
      var c = n || {};
      if (G(c, "quoteStyle") && !G(U, c.quoteStyle)) {
        throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
      }
      if (G(c, "maxStringLength") && (typeof c.maxStringLength == "number" ? c.maxStringLength < 0 && c.maxStringLength !== Infinity : c.maxStringLength !== null)) {
        throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
      }
      var m = !G(c, "customInspect") || c.customInspect;
      if (typeof m != "boolean" && m !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (G(c, "indent") && c.indent !== null && c.indent !== "\t" && (parseInt(c.indent, 10) !== c.indent || !(c.indent > 0))) {
        throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
      }
      if (G(c, "numericSeparator") && typeof c.numericSeparator != "boolean") {
        throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
      }
      var b = c.numericSeparator;
      if (r === undefined) {
        return "undefined";
      }
      if (r === null) {
        return "null";
      }
      if (typeof r == "boolean") {
        if (r) {
          return "true";
        } else {
          return "false";
        }
      }
      if (typeof r == "string") {
        return function e(t, r) {
          if (t.length > r.maxStringLength) {
            var n = t.length - r.maxStringLength;
            var o = "... " + n + " more character" + (n > 1 ? "s" : "");
            return e(y.call(t, 0, r.maxStringLength), r) + o;
          }
          var i = N[r.quoteStyle || "single"];
          i.lastIndex = 0;
          return j(_.call(_.call(t, i, "\\$1"), /[\x00-\x1f]/g, K), "single", r);
        }(r, c);
      }
      if (typeof r == "number") {
        if (r === 0) {
          if (Infinity / r > 0) {
            return "0";
          } else {
            return "-0";
          }
        }
        var E = String(r);
        if (b) {
          return P(r, E);
        } else {
          return E;
        }
      }
      if (typeof r == "bigint") {
        var A = String(r) + "n";
        if (b) {
          return P(r, A);
        } else {
          return A;
        }
      }
      var x = c.depth === undefined ? 5 : c.depth;
      if (o === undefined) {
        o = 0;
      }
      if (o >= x && x > 0 && typeof r == "object") {
        if (V(r)) {
          return "[Array]";
        } else {
          return "[Object]";
        }
      }
      var M = function (e, t) {
        var r;
        if (e.indent === "\t") {
          r = "\t";
        } else {
          if (typeof e.indent != "number" || !(e.indent > 0)) {
            return null;
          }
          r = T.call(Array(e.indent + 1), " ");
        }
        return {
          base: r,
          prev: T.call(Array(t + 1), r)
        };
      }(c, o);
      if (s === undefined) {
        s = [];
      } else if ($(s, r) >= 0) {
        return "[Circular]";
      }
      function Y(t, r, n) {
        if (r) {
          (s = k.call(s)).push(r);
        }
        if (n) {
          var i = {
            depth: c.depth
          };
          if (G(c, "quoteStyle")) {
            i.quoteStyle = c.quoteStyle;
          }
          return e(t, i, o + 1, s);
        }
        return e(t, c, o + 1, s);
      }
      if (typeof r == "function" && !W(r)) {
        var re = function (e) {
          if (e.name) {
            return e.name;
          }
          var t = v.call(g.call(e), /^function\s*([\w$]+)/);
          if (t) {
            return t[1];
          }
          return null;
        }(r);
        var ne = te(r, Y);
        return "[Function" + (re ? ": " + re : " (anonymous)") + "]" + (ne.length > 0 ? " { " + T.call(ne, ", ") + " }" : "");
      }
      if (z(r)) {
        var oe = O ? _.call(String(r), /^(Symbol\(.*\))_[^)]*$/, "$1") : S.call(r);
        if (typeof r != "object" || O) {
          return oe;
        } else {
          return X(oe);
        }
      }
      if (function (e) {
        if (!e || typeof e != "object") {
          return false;
        }
        if (typeof HTMLElement != "undefined" && e instanceof HTMLElement) {
          return true;
        }
        return typeof e.nodeName == "string" && typeof e.getAttribute == "function";
      }(r)) {
        var ie = "<" + w.call(String(r.nodeName));
        for (var ae = r.attributes || [], se = 0; se < ae.length; se++) {
          ie += " " + ae[se].name + "=" + j(q(ae[se].value), "double", c);
        }
        ie += ">";
        if (r.childNodes && r.childNodes.length) {
          ie += "...";
        }
        return ie += "</" + w.call(String(r.nodeName)) + ">";
      }
      if (V(r)) {
        if (r.length === 0) {
          return "[]";
        }
        var ce = te(r, Y);
        if (M && !function (e) {
          for (var t = 0; t < e.length; t++) {
            if ($(e[t], "\n") >= 0) {
              return false;
            }
          }
          return true;
        }(ce)) {
          return "[" + ee(ce, M) + "]";
        } else {
          return "[ " + T.call(ce, ", ") + " ]";
        }
      }
      if (function (e) {
        return Q(e) === "[object Error]" && H(e);
      }(r)) {
        var ue = te(r, Y);
        if ("cause" in Error.prototype || !("cause" in r) || L.call(r, "cause")) {
          if (ue.length === 0) {
            return "[" + String(r) + "]";
          } else {
            return "{ [" + String(r) + "] " + T.call(ue, ", ") + " }";
          }
        } else {
          return "{ [" + String(r) + "] " + T.call(D.call("[cause]: " + Y(r.cause), ue), ", ") + " }";
        }
      }
      if (typeof r == "object" && m) {
        if (F && typeof r[F] == "function" && B) {
          return B(r, {
            depth: x - o
          });
        }
        if (m !== "symbol" && typeof r.inspect == "function") {
          return r.inspect();
        }
      }
      if (function (e) {
        if (!i || !e || typeof e != "object") {
          return false;
        }
        try {
          i.call(e);
          try {
            u.call(e);
          } catch (e) {
            return true;
          }
          return e instanceof Map;
        } catch (e) {}
        return false;
      }(r)) {
        var le = [];
        if (a) {
          a.call(r, function (e, t) {
            le.push(Y(t, r, true) + " => " + Y(e, r));
          });
        }
        return J("Map", i.call(r), le, M);
      }
      if (function (e) {
        if (!u || !e || typeof e != "object") {
          return false;
        }
        try {
          u.call(e);
          try {
            i.call(e);
          } catch (e) {
            return true;
          }
          return e instanceof Set;
        } catch (e) {}
        return false;
      }(r)) {
        var de = [];
        if (l) {
          l.call(r, function (e) {
            de.push(Y(e, r));
          });
        }
        return J("Set", u.call(r), de, M);
      }
      if (function (e) {
        if (!d || !e || typeof e != "object") {
          return false;
        }
        try {
          d.call(e, d);
          try {
            p.call(e, p);
          } catch (e) {
            return true;
          }
          return e instanceof WeakMap;
        } catch (e) {}
        return false;
      }(r)) {
        return Z("WeakMap");
      }
      if (function (e) {
        if (!p || !e || typeof e != "object") {
          return false;
        }
        try {
          p.call(e, p);
          try {
            d.call(e, d);
          } catch (e) {
            return true;
          }
          return e instanceof WeakSet;
        } catch (e) {}
        return false;
      }(r)) {
        return Z("WeakSet");
      }
      if (function (e) {
        if (!f || !e || typeof e != "object") {
          return false;
        }
        try {
          f.call(e);
          return true;
        } catch (e) {}
        return false;
      }(r)) {
        return Z("WeakRef");
      }
      if (function (e) {
        return Q(e) === "[object Number]" && H(e);
      }(r)) {
        return X(Y(Number(r)));
      }
      if (function (e) {
        if (!e || typeof e != "object" || !C) {
          return false;
        }
        try {
          C.call(e);
          return true;
        } catch (e) {}
        return false;
      }(r)) {
        return X(Y(C.call(r)));
      }
      if (function (e) {
        return Q(e) === "[object Boolean]" && H(e);
      }(r)) {
        return X(h.call(r));
      }
      if (function (e) {
        return Q(e) === "[object String]" && H(e);
      }(r)) {
        return X(Y(String(r)));
      }
      if (typeof window != "undefined" && r === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis != "undefined" && r === globalThis || t !== undefined && r === t) {
        return "{ [object globalThis] }";
      }
      if (!function (e) {
        return Q(e) === "[object Date]" && H(e);
      }(r) && !W(r)) {
        var pe = te(r, Y);
        var fe = R ? R(r) === Object.prototype : r instanceof Object || r.constructor === Object;
        var he = r instanceof Object ? "" : "null prototype";
        var me = !fe && I && Object(r) === r && I in r ? y.call(Q(r), 8, -1) : he ? "Object" : "";
        var ge = (fe || typeof r.constructor != "function" ? "" : r.constructor.name ? r.constructor.name + " " : "") + (me || he ? "[" + T.call(D.call([], me || [], he || []), ": ") + "] " : "");
        if (pe.length === 0) {
          return ge + "{}";
        } else if (M) {
          return ge + "{" + ee(pe, M) + "}";
        } else {
          return ge + "{ " + T.call(pe, ", ") + " }";
        }
      }
      return String(r);
    };
    var Y = Object.prototype.hasOwnProperty || function (e) {
      return e in this;
    };
    function G(e, t) {
      return Y.call(e, t);
    }
    function Q(e) {
      return m.call(e);
    }
    function $(e, t) {
      if (e.indexOf) {
        return e.indexOf(t);
      }
      for (var r = 0, n = e.length; r < n; r++) {
        if (e[r] === t) {
          return r;
        }
      }
      return -1;
    }
    function K(e) {
      var t = e.charCodeAt(0);
      var r = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[t];
      if (r) {
        return "\\" + r;
      } else {
        return "\\x" + (t < 16 ? "0" : "") + b.call(t.toString(16));
      }
    }
    function X(e) {
      return "Object(" + e + ")";
    }
    function Z(e) {
      return e + " { ? }";
    }
    function J(e, t, r, n) {
      return e + " (" + t + ") {" + (n ? ee(r, n) : T.call(r, ", ")) + "}";
    }
    function ee(e, t) {
      if (e.length === 0) {
        return "";
      }
      var r = "\n" + t.prev + t.base;
      return r + T.call(e, "," + r) + "\n" + t.prev;
    }
    function te(e, t) {
      var r = V(e);
      var n = [];
      if (r) {
        n.length = e.length;
        for (var o = 0; o < e.length; o++) {
          n[o] = G(e, o) ? t(e[o], e) : "";
        }
      }
      var i;
      var a = typeof x == "function" ? x(e) : [];
      if (O) {
        i = {};
        for (var s = 0; s < a.length; s++) {
          i["$" + a[s]] = a[s];
        }
      }
      for (var c in e) {
        if (G(e, c)) {
          if ((!r || String(Number(c)) !== c || !(c < e.length)) && (!O || !(i["$" + c] instanceof Symbol))) {
            if (E.call(/[^\w$]/, c)) {
              n.push(t(c, e) + ": " + t(e[c], e));
            } else {
              n.push(c + ": " + t(e[c], e));
            }
          }
        }
      }
      if (typeof x == "function") {
        for (var u = 0; u < a.length; u++) {
          if (L.call(e, a[u])) {
            n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
          }
        }
      }
      return n;
    }
  }).call(this, r(13));
};
