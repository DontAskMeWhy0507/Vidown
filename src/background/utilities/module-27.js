// Module 27 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (e) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var n = r(99);
    var o = r(100);
    var i = r(101);
    function a() {
      if (c.TYPED_ARRAY_SUPPORT) {
        return 2147483647;
      } else {
        return 1073741823;
      }
    }
    function s(e, t) {
      if (a() < t) {
        throw new RangeError("Invalid typed array length");
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        (e = new Uint8Array(t)).__proto__ = c.prototype;
      } else {
        if (e === null) {
          e = new c(t);
        }
        e.length = t;
      }
      return e;
    }
    function c(e, t, r) {
      if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c)) {
        return new c(e, t, r);
      }
      if (typeof e == "number") {
        if (typeof t == "string") {
          throw new Error("If encoding is specified then the first argument must be a string");
        }
        return d(this, e);
      }
      return u(this, e, t, r);
    }
    function u(e, t, r, n) {
      if (typeof t == "number") {
        throw new TypeError("\"value\" argument must not be a number");
      }
      if (typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer) {
        return function (e, t, r, n) {
          t.byteLength;
          if (r < 0 || t.byteLength < r) {
            throw new RangeError("'offset' is out of bounds");
          }
          if (t.byteLength < r + (n || 0)) {
            throw new RangeError("'length' is out of bounds");
          }
          t = r === undefined && n === undefined ? new Uint8Array(t) : n === undefined ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
          if (c.TYPED_ARRAY_SUPPORT) {
            (e = t).__proto__ = c.prototype;
          } else {
            e = p(e, t);
          }
          return e;
        }(e, t, r, n);
      } else if (typeof t == "string") {
        return function (e, t, r) {
          if (typeof r != "string" || r === "") {
            r = "utf8";
          }
          if (!c.isEncoding(r)) {
            throw new TypeError("\"encoding\" must be a valid string encoding");
          }
          var n = h(t, r) | 0;
          var o = (e = s(e, n)).write(t, r);
          if (o !== n) {
            e = e.slice(0, o);
          }
          return e;
        }(e, t, r);
      } else {
        return function (e, t) {
          if (c.isBuffer(t)) {
            var r = f(t.length) | 0;
            if ((e = s(e, r)).length !== 0) {
              t.copy(e, 0, 0, r);
            }
            return e;
          }
          if (t) {
            if (typeof ArrayBuffer != "undefined" && t.buffer instanceof ArrayBuffer || "length" in t) {
              if (typeof t.length != "number" || (n = t.length) != n) {
                return s(e, 0);
              } else {
                return p(e, t);
              }
            }
            if (t.type === "Buffer" && i(t.data)) {
              return p(e, t.data);
            }
          }
          var n;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(e, t);
      }
    }
    function l(e) {
      if (typeof e != "number") {
        throw new TypeError("\"size\" argument must be a number");
      }
      if (e < 0) {
        throw new RangeError("\"size\" argument must not be negative");
      }
    }
    function d(e, t) {
      l(t);
      e = s(e, t < 0 ? 0 : f(t) | 0);
      if (!c.TYPED_ARRAY_SUPPORT) {
        for (var r = 0; r < t; ++r) {
          e[r] = 0;
        }
      }
      return e;
    }
    function p(e, t) {
      var r = t.length < 0 ? 0 : f(t.length) | 0;
      e = s(e, r);
      for (var n = 0; n < r; n += 1) {
        e[n] = t[n] & 255;
      }
      return e;
    }
    function f(e) {
      if (e >= a()) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
      }
      return e | 0;
    }
    function h(e, t) {
      if (c.isBuffer(e)) {
        return e.length;
      }
      if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) {
        return e.byteLength;
      }
      if (typeof e != "string") {
        e = "" + e;
      }
      var r = e.length;
      if (r === 0) {
        return 0;
      }
      var n = false;
      while (true) {
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
          case undefined:
            return j(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return q(e).length;
          default:
            if (n) {
              return j(e).length;
            }
            t = ("" + t).toLowerCase();
            n = true;
        }
      }
    }
    function m(e, t, r) {
      var n = false;
      if (t === undefined || t < 0) {
        t = 0;
      }
      if (t > this.length) {
        return "";
      }
      if (r === undefined || r > this.length) {
        r = this.length;
      }
      if (r <= 0) {
        return "";
      }
      if ((r >>>= 0) <= (t >>>= 0)) {
        return "";
      }
      for (e ||= "utf8";;) {
        switch (e) {
          case "hex":
            return S(this, t, r);
          case "utf8":
          case "utf-8":
            return A(this, t, r);
          case "ascii":
            return C(this, t, r);
          case "latin1":
          case "binary":
            return x(this, t, r);
          case "base64":
            return k(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return O(this, t, r);
          default:
            if (n) {
              throw new TypeError("Unknown encoding: " + e);
            }
            e = (e + "").toLowerCase();
            n = true;
        }
      }
    }
    function g(e, t, r) {
      var n = e[t];
      e[t] = e[r];
      e[r] = n;
    }
    function v(e, t, r, n, o) {
      if (e.length === 0) {
        return -1;
      }
      if (typeof r == "string") {
        n = r;
        r = 0;
      } else if (r > 2147483647) {
        r = 2147483647;
      } else if (r < -2147483648) {
        r = -2147483648;
      }
      r = +r;
      if (isNaN(r)) {
        r = o ? 0 : e.length - 1;
      }
      if (r < 0) {
        r = e.length + r;
      }
      if (r >= e.length) {
        if (o) {
          return -1;
        }
        r = e.length - 1;
      } else if (r < 0) {
        if (!o) {
          return -1;
        }
        r = 0;
      }
      if (typeof t == "string") {
        t = c.from(t, n);
      }
      if (c.isBuffer(t)) {
        if (t.length === 0) {
          return -1;
        } else {
          return y(e, t, r, n, o);
        }
      }
      if (typeof t == "number") {
        t &= 255;
        if (c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
          if (o) {
            return Uint8Array.prototype.indexOf.call(e, t, r);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(e, t, r);
          }
        } else {
          return y(e, [t], r, n, o);
        }
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function y(e, t, r, n, o) {
      var i;
      var a = 1;
      var s = e.length;
      var c = t.length;
      if (n !== undefined && ((n = String(n).toLowerCase()) === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2) {
          return -1;
        }
        a = 2;
        s /= 2;
        c /= 2;
        r /= 2;
      }
      function u(e, t) {
        if (a === 1) {
          return e[t];
        } else {
          return e.readUInt16BE(t * a);
        }
      }
      if (o) {
        var l = -1;
        for (i = r; i < s; i++) {
          if (u(e, i) === u(t, l === -1 ? 0 : i - l)) {
            if (l === -1) {
              l = i;
            }
            if (i - l + 1 === c) {
              return l * a;
            }
          } else {
            if (l !== -1) {
              i -= i - l;
            }
            l = -1;
          }
        }
      } else {
        if (r + c > s) {
          r = s - c;
        }
        i = r;
        for (; i >= 0; i--) {
          var d = true;
          for (var p = 0; p < c; p++) {
            if (u(e, i + p) !== u(t, p)) {
              d = false;
              break;
            }
          }
          if (d) {
            return i;
          }
        }
      }
      return -1;
    }
    function _(e, t, r, n) {
      r = Number(r) || 0;
      var o = e.length - r;
      if (n) {
        if ((n = Number(n)) > o) {
          n = o;
        }
      } else {
        n = o;
      }
      var i = t.length;
      if (i % 2 != 0) {
        throw new TypeError("Invalid hex string");
      }
      if (n > i / 2) {
        n = i / 2;
      }
      for (var a = 0; a < n; ++a) {
        var s = parseInt(t.substr(a * 2, 2), 16);
        if (isNaN(s)) {
          return a;
        }
        e[r + a] = s;
      }
      return a;
    }
    function b(e, t, r, n) {
      return H(j(t, e.length - r), e, r, n);
    }
    function w(e, t, r, n) {
      return H(function (e) {
        var t = [];
        for (var r = 0; r < e.length; ++r) {
          t.push(e.charCodeAt(r) & 255);
        }
        return t;
      }(t), e, r, n);
    }
    function E(e, t, r, n) {
      return w(e, t, r, n);
    }
    function D(e, t, r, n) {
      return H(q(t), e, r, n);
    }
    function T(e, t, r, n) {
      return H(function (e, t) {
        var r;
        var n;
        var o;
        var i = [];
        for (var a = 0; a < e.length && !((t -= 2) < 0); ++a) {
          r = e.charCodeAt(a);
          n = r >> 8;
          o = r % 256;
          i.push(o);
          i.push(n);
        }
        return i;
      }(t, e.length - r), e, r, n);
    }
    function k(e, t, r) {
      if (t === 0 && r === e.length) {
        return n.fromByteArray(e);
      } else {
        return n.fromByteArray(e.slice(t, r));
      }
    }
    function A(e, t, r) {
      r = Math.min(e.length, r);
      var n = [];
      for (var o = t; o < r;) {
        var i;
        var a;
        var s;
        var c;
        var u = e[o];
        var l = null;
        var d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (o + d <= r) {
          switch (d) {
            case 1:
              if (u < 128) {
                l = u;
              }
              break;
            case 2:
              if (((i = e[o + 1]) & 192) == 128 && (c = (u & 31) << 6 | i & 63) > 127) {
                l = c;
              }
              break;
            case 3:
              i = e[o + 1];
              a = e[o + 2];
              if ((i & 192) == 128 && (a & 192) == 128 && (c = (u & 15) << 12 | (i & 63) << 6 | a & 63) > 2047 && (c < 55296 || c > 57343)) {
                l = c;
              }
              break;
            case 4:
              i = e[o + 1];
              a = e[o + 2];
              s = e[o + 3];
              if ((i & 192) == 128 && (a & 192) == 128 && (s & 192) == 128 && (c = (u & 15) << 18 | (i & 63) << 12 | (a & 63) << 6 | s & 63) > 65535 && c < 1114112) {
                l = c;
              }
          }
        }
        if (l === null) {
          l = 65533;
          d = 1;
        } else if (l > 65535) {
          l -= 65536;
          n.push(l >>> 10 & 1023 | 55296);
          l = l & 1023 | 56320;
        }
        n.push(l);
        o += d;
      }
      return function (e) {
        var t = e.length;
        if (t <= 4096) {
          return String.fromCharCode.apply(String, e);
        }
        var r = "";
        var n = 0;
        while (n < t) {
          r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
        }
        return r;
      }(n);
    }
    t.Buffer = c;
    t.SlowBuffer = function (e) {
      if (+e != e) {
        e = 0;
      }
      return c.alloc(+e);
    };
    t.INSPECT_MAX_BYTES = 50;
    c.TYPED_ARRAY_SUPPORT = e.TYPED_ARRAY_SUPPORT !== undefined ? e.TYPED_ARRAY_SUPPORT : function () {
      try {
        var e = new Uint8Array(1);
        e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          }
        };
        return e.foo() === 42 && typeof e.subarray == "function" && e.subarray(1, 1).byteLength === 0;
      } catch (e) {
        return false;
      }
    }();
    t.kMaxLength = a();
    c.poolSize = 8192;
    c._augment = function (e) {
      e.__proto__ = c.prototype;
      return e;
    };
    c.from = function (e, t, r) {
      return u(null, e, t, r);
    };
    if (c.TYPED_ARRAY_SUPPORT) {
      c.prototype.__proto__ = Uint8Array.prototype;
      c.__proto__ = Uint8Array;
      if (typeof Symbol != "undefined" && Symbol.species && c[Symbol.species] === c) {
        Object.defineProperty(c, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }
    c.alloc = function (e, t, r) {
      return function (e, t, r, n) {
        l(t);
        if (t <= 0) {
          return s(e, t);
        } else if (r !== undefined) {
          if (typeof n == "string") {
            return s(e, t).fill(r, n);
          } else {
            return s(e, t).fill(r);
          }
        } else {
          return s(e, t);
        }
      }(null, e, t, r);
    };
    c.allocUnsafe = function (e) {
      return d(null, e);
    };
    c.allocUnsafeSlow = function (e) {
      return d(null, e);
    };
    c.isBuffer = function (e) {
      return e != null && !!e._isBuffer;
    };
    c.compare = function (e, t) {
      if (!c.isBuffer(e) || !c.isBuffer(t)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (e === t) {
        return 0;
      }
      var r = e.length;
      var n = t.length;
      for (var o = 0, i = Math.min(r, n); o < i; ++o) {
        if (e[o] !== t[o]) {
          r = e[o];
          n = t[o];
          break;
        }
      }
      if (r < n) {
        return -1;
      } else if (n < r) {
        return 1;
      } else {
        return 0;
      }
    };
    c.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    c.concat = function (e, t) {
      if (!i(e)) {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      if (e.length === 0) {
        return c.alloc(0);
      }
      var r;
      if (t === undefined) {
        t = 0;
        r = 0;
        for (; r < e.length; ++r) {
          t += e[r].length;
        }
      }
      var n = c.allocUnsafe(t);
      var o = 0;
      for (r = 0; r < e.length; ++r) {
        var a = e[r];
        if (!c.isBuffer(a)) {
          throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        a.copy(n, o);
        o += a.length;
      }
      return n;
    };
    c.byteLength = h;
    c.prototype._isBuffer = true;
    c.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var t = 0; t < e; t += 2) {
        g(this, t, t + 1);
      }
      return this;
    };
    c.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var t = 0; t < e; t += 4) {
        g(this, t, t + 3);
        g(this, t + 1, t + 2);
      }
      return this;
    };
    c.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var t = 0; t < e; t += 8) {
        g(this, t, t + 7);
        g(this, t + 1, t + 6);
        g(this, t + 2, t + 5);
        g(this, t + 3, t + 4);
      }
      return this;
    };
    c.prototype.toString = function () {
      var e = this.length | 0;
      if (e === 0) {
        return "";
      } else if (arguments.length === 0) {
        return A(this, 0, e);
      } else {
        return m.apply(this, arguments);
      }
    };
    c.prototype.equals = function (e) {
      if (!c.isBuffer(e)) {
        throw new TypeError("Argument must be a Buffer");
      }
      return this === e || c.compare(this, e) === 0;
    };
    c.prototype.inspect = function () {
      var e = "";
      var r = t.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        e = this.toString("hex", 0, r).match(/.{2}/g).join(" ");
        if (this.length > r) {
          e += " ... ";
        }
      }
      return "<Buffer " + e + ">";
    };
    c.prototype.compare = function (e, t, r, n, o) {
      if (!c.isBuffer(e)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (t === undefined) {
        t = 0;
      }
      if (r === undefined) {
        r = e ? e.length : 0;
      }
      if (n === undefined) {
        n = 0;
      }
      if (o === undefined) {
        o = this.length;
      }
      if (t < 0 || r > e.length || n < 0 || o > this.length) {
        throw new RangeError("out of range index");
      }
      if (n >= o && t >= r) {
        return 0;
      }
      if (n >= o) {
        return -1;
      }
      if (t >= r) {
        return 1;
      }
      if (this === e) {
        return 0;
      }
      var i = (o >>>= 0) - (n >>>= 0);
      var a = (r >>>= 0) - (t >>>= 0);
      for (var s = Math.min(i, a), u = this.slice(n, o), l = e.slice(t, r), d = 0; d < s; ++d) {
        if (u[d] !== l[d]) {
          i = u[d];
          a = l[d];
          break;
        }
      }
      if (i < a) {
        return -1;
      } else if (a < i) {
        return 1;
      } else {
        return 0;
      }
    };
    c.prototype.includes = function (e, t, r) {
      return this.indexOf(e, t, r) !== -1;
    };
    c.prototype.indexOf = function (e, t, r) {
      return v(this, e, t, r, true);
    };
    c.prototype.lastIndexOf = function (e, t, r) {
      return v(this, e, t, r, false);
    };
    c.prototype.write = function (e, t, r, n) {
      if (t === undefined) {
        n = "utf8";
        r = this.length;
        t = 0;
      } else if (r === undefined && typeof t == "string") {
        n = t;
        r = this.length;
        t = 0;
      } else {
        if (!isFinite(t)) {
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        }
        t |= 0;
        if (isFinite(r)) {
          r |= 0;
          if (n === undefined) {
            n = "utf8";
          }
        } else {
          n = r;
          r = undefined;
        }
      }
      var o = this.length - t;
      if (r === undefined || r > o) {
        r = o;
      }
      if (e.length > 0 && (r < 0 || t < 0) || t > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      n ||= "utf8";
      var i = false;
      while (true) {
        switch (n) {
          case "hex":
            return _(this, e, t, r);
          case "utf8":
          case "utf-8":
            return b(this, e, t, r);
          case "ascii":
            return w(this, e, t, r);
          case "latin1":
          case "binary":
            return E(this, e, t, r);
          case "base64":
            return D(this, e, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return T(this, e, t, r);
          default:
            if (i) {
              throw new TypeError("Unknown encoding: " + n);
            }
            n = ("" + n).toLowerCase();
            i = true;
        }
      }
    };
    c.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function C(e, t, r) {
      var n = "";
      r = Math.min(e.length, r);
      for (var o = t; o < r; ++o) {
        n += String.fromCharCode(e[o] & 127);
      }
      return n;
    }
    function x(e, t, r) {
      var n = "";
      r = Math.min(e.length, r);
      for (var o = t; o < r; ++o) {
        n += String.fromCharCode(e[o]);
      }
      return n;
    }
    function S(e, t, r) {
      var n = e.length;
      if (!t || t < 0) {
        t = 0;
      }
      if (!r || r < 0 || r > n) {
        r = n;
      }
      var o = "";
      for (var i = t; i < r; ++i) {
        o += N(e[i]);
      }
      return o;
    }
    function O(e, t, r) {
      for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) {
        o += String.fromCharCode(n[i] + n[i + 1] * 256);
      }
      return o;
    }
    function I(e, t, r) {
      if (e % 1 != 0 || e < 0) {
        throw new RangeError("offset is not uint");
      }
      if (e + t > r) {
        throw new RangeError("Trying to access beyond buffer length");
      }
    }
    function L(e, t, r, n, o, i) {
      if (!c.isBuffer(e)) {
        throw new TypeError("\"buffer\" argument must be a Buffer instance");
      }
      if (t > o || t < i) {
        throw new RangeError("\"value\" argument is out of bounds");
      }
      if (r + n > e.length) {
        throw new RangeError("Index out of range");
      }
    }
    function R(e, t, r, n) {
      if (t < 0) {
        t = 65535 + t + 1;
      }
      for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) {
        e[r + o] = (t & 255 << (n ? o : 1 - o) * 8) >>> (n ? o : 1 - o) * 8;
      }
    }
    function P(e, t, r, n) {
      if (t < 0) {
        t = 4294967295 + t + 1;
      }
      for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) {
        e[r + o] = t >>> (n ? o : 3 - o) * 8 & 255;
      }
    }
    function B(e, t, r, n, o, i) {
      if (r + n > e.length) {
        throw new RangeError("Index out of range");
      }
      if (r < 0) {
        throw new RangeError("Index out of range");
      }
    }
    function M(e, t, r, n, i) {
      if (!i) {
        B(e, 0, r, 4);
      }
      o.write(e, t, r, n, 23, 4);
      return r + 4;
    }
    function F(e, t, r, n, i) {
      if (!i) {
        B(e, 0, r, 8);
      }
      o.write(e, t, r, n, 52, 8);
      return r + 8;
    }
    c.prototype.slice = function (e, t) {
      var r;
      var n = this.length;
      if ((e = ~~e) < 0) {
        if ((e += n) < 0) {
          e = 0;
        }
      } else if (e > n) {
        e = n;
      }
      if ((t = t === undefined ? n : ~~t) < 0) {
        if ((t += n) < 0) {
          t = 0;
        }
      } else if (t > n) {
        t = n;
      }
      if (t < e) {
        t = e;
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        (r = this.subarray(e, t)).__proto__ = c.prototype;
      } else {
        var o = t - e;
        r = new c(o, undefined);
        for (var i = 0; i < o; ++i) {
          r[i] = this[i + e];
        }
      }
      return r;
    };
    c.prototype.readUIntLE = function (e, t, r) {
      e |= 0;
      t |= 0;
      if (!r) {
        I(e, t, this.length);
      }
      var n = this[e];
      for (var o = 1, i = 0; ++i < t && (o *= 256);) {
        n += this[e + i] * o;
      }
      return n;
    };
    c.prototype.readUIntBE = function (e, t, r) {
      e |= 0;
      t |= 0;
      if (!r) {
        I(e, t, this.length);
      }
      var n = this[e + --t];
      for (var o = 1; t > 0 && (o *= 256);) {
        n += this[e + --t] * o;
      }
      return n;
    };
    c.prototype.readUInt8 = function (e, t) {
      if (!t) {
        I(e, 1, this.length);
      }
      return this[e];
    };
    c.prototype.readUInt16LE = function (e, t) {
      if (!t) {
        I(e, 2, this.length);
      }
      return this[e] | this[e + 1] << 8;
    };
    c.prototype.readUInt16BE = function (e, t) {
      if (!t) {
        I(e, 2, this.length);
      }
      return this[e] << 8 | this[e + 1];
    };
    c.prototype.readUInt32LE = function (e, t) {
      if (!t) {
        I(e, 4, this.length);
      }
      return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    };
    c.prototype.readUInt32BE = function (e, t) {
      if (!t) {
        I(e, 4, this.length);
      }
      return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    };
    c.prototype.readIntLE = function (e, t, r) {
      e |= 0;
      t |= 0;
      if (!r) {
        I(e, t, this.length);
      }
      var n = this[e];
      for (var o = 1, i = 0; ++i < t && (o *= 256);) {
        n += this[e + i] * o;
      }
      if (n >= (o *= 128)) {
        n -= Math.pow(2, t * 8);
      }
      return n;
    };
    c.prototype.readIntBE = function (e, t, r) {
      e |= 0;
      t |= 0;
      if (!r) {
        I(e, t, this.length);
      }
      for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) {
        i += this[e + --n] * o;
      }
      if (i >= (o *= 128)) {
        i -= Math.pow(2, t * 8);
      }
      return i;
    };
    c.prototype.readInt8 = function (e, t) {
      if (!t) {
        I(e, 1, this.length);
      }
      if (this[e] & 128) {
        return (255 - this[e] + 1) * -1;
      } else {
        return this[e];
      }
    };
    c.prototype.readInt16LE = function (e, t) {
      if (!t) {
        I(e, 2, this.length);
      }
      var r = this[e] | this[e + 1] << 8;
      if (r & 32768) {
        return r | -65536;
      } else {
        return r;
      }
    };
    c.prototype.readInt16BE = function (e, t) {
      if (!t) {
        I(e, 2, this.length);
      }
      var r = this[e + 1] | this[e] << 8;
      if (r & 32768) {
        return r | -65536;
      } else {
        return r;
      }
    };
    c.prototype.readInt32LE = function (e, t) {
      if (!t) {
        I(e, 4, this.length);
      }
      return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    };
    c.prototype.readInt32BE = function (e, t) {
      if (!t) {
        I(e, 4, this.length);
      }
      return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    };
    c.prototype.readFloatLE = function (e, t) {
      if (!t) {
        I(e, 4, this.length);
      }
      return o.read(this, e, true, 23, 4);
    };
    c.prototype.readFloatBE = function (e, t) {
      if (!t) {
        I(e, 4, this.length);
      }
      return o.read(this, e, false, 23, 4);
    };
    c.prototype.readDoubleLE = function (e, t) {
      if (!t) {
        I(e, 8, this.length);
      }
      return o.read(this, e, true, 52, 8);
    };
    c.prototype.readDoubleBE = function (e, t) {
      if (!t) {
        I(e, 8, this.length);
      }
      return o.read(this, e, false, 52, 8);
    };
    c.prototype.writeUIntLE = function (e, t, r, n) {
      if (!(e = +e, t |= 0, r |= 0, n)) {
        L(this, e, t, r, Math.pow(2, r * 8) - 1, 0);
      }
      var o = 1;
      var i = 0;
      for (this[t] = e & 255; ++i < r && (o *= 256);) {
        this[t + i] = e / o & 255;
      }
      return t + r;
    };
    c.prototype.writeUIntBE = function (e, t, r, n) {
      if (!(e = +e, t |= 0, r |= 0, n)) {
        L(this, e, t, r, Math.pow(2, r * 8) - 1, 0);
      }
      var o = r - 1;
      var i = 1;
      for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
        this[t + o] = e / i & 255;
      }
      return t + r;
    };
    c.prototype.writeUInt8 = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 1, 255, 0);
      }
      if (!c.TYPED_ARRAY_SUPPORT) {
        e = Math.floor(e);
      }
      this[t] = e & 255;
      return t + 1;
    };
    c.prototype.writeUInt16LE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e & 255;
        this[t + 1] = e >>> 8;
      } else {
        R(this, e, t, true);
      }
      return t + 2;
    };
    c.prototype.writeUInt16BE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e >>> 8;
        this[t + 1] = e & 255;
      } else {
        R(this, e, t, false);
      }
      return t + 2;
    };
    c.prototype.writeUInt32LE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t + 3] = e >>> 24;
        this[t + 2] = e >>> 16;
        this[t + 1] = e >>> 8;
        this[t] = e & 255;
      } else {
        P(this, e, t, true);
      }
      return t + 4;
    };
    c.prototype.writeUInt32BE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e >>> 24;
        this[t + 1] = e >>> 16;
        this[t + 2] = e >>> 8;
        this[t + 3] = e & 255;
      } else {
        P(this, e, t, false);
      }
      return t + 4;
    };
    c.prototype.writeIntLE = function (e, t, r, n) {
      e = +e;
      t |= 0;
      if (!n) {
        var o = Math.pow(2, r * 8 - 1);
        L(this, e, t, r, o - 1, -o);
      }
      var i = 0;
      var a = 1;
      var s = 0;
      for (this[t] = e & 255; ++i < r && (a *= 256);) {
        if (e < 0 && s === 0 && this[t + i - 1] !== 0) {
          s = 1;
        }
        this[t + i] = (e / a >> 0) - s & 255;
      }
      return t + r;
    };
    c.prototype.writeIntBE = function (e, t, r, n) {
      e = +e;
      t |= 0;
      if (!n) {
        var o = Math.pow(2, r * 8 - 1);
        L(this, e, t, r, o - 1, -o);
      }
      var i = r - 1;
      var a = 1;
      var s = 0;
      for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) {
        if (e < 0 && s === 0 && this[t + i + 1] !== 0) {
          s = 1;
        }
        this[t + i] = (e / a >> 0) - s & 255;
      }
      return t + r;
    };
    c.prototype.writeInt8 = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 1, 127, -128);
      }
      if (!c.TYPED_ARRAY_SUPPORT) {
        e = Math.floor(e);
      }
      if (e < 0) {
        e = 255 + e + 1;
      }
      this[t] = e & 255;
      return t + 1;
    };
    c.prototype.writeInt16LE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e & 255;
        this[t + 1] = e >>> 8;
      } else {
        R(this, e, t, true);
      }
      return t + 2;
    };
    c.prototype.writeInt16BE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e >>> 8;
        this[t + 1] = e & 255;
      } else {
        R(this, e, t, false);
      }
      return t + 2;
    };
    c.prototype.writeInt32LE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 4, 2147483647, -2147483648);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e & 255;
        this[t + 1] = e >>> 8;
        this[t + 2] = e >>> 16;
        this[t + 3] = e >>> 24;
      } else {
        P(this, e, t, true);
      }
      return t + 4;
    };
    c.prototype.writeInt32BE = function (e, t, r) {
      e = +e;
      t |= 0;
      if (!r) {
        L(this, e, t, 4, 2147483647, -2147483648);
      }
      if (e < 0) {
        e = 4294967295 + e + 1;
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[t] = e >>> 24;
        this[t + 1] = e >>> 16;
        this[t + 2] = e >>> 8;
        this[t + 3] = e & 255;
      } else {
        P(this, e, t, false);
      }
      return t + 4;
    };
    c.prototype.writeFloatLE = function (e, t, r) {
      return M(this, e, t, true, r);
    };
    c.prototype.writeFloatBE = function (e, t, r) {
      return M(this, e, t, false, r);
    };
    c.prototype.writeDoubleLE = function (e, t, r) {
      return F(this, e, t, true, r);
    };
    c.prototype.writeDoubleBE = function (e, t, r) {
      return F(this, e, t, false, r);
    };
    c.prototype.copy = function (e, t, r, n) {
      r ||= 0;
      if (!n && n !== 0) {
        n = this.length;
      }
      if (t >= e.length) {
        t = e.length;
      }
      t ||= 0;
      if (n > 0 && n < r) {
        n = r;
      }
      if (n === r) {
        return 0;
      }
      if (e.length === 0 || this.length === 0) {
        return 0;
      }
      if (t < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (r < 0 || r >= this.length) {
        throw new RangeError("sourceStart out of bounds");
      }
      if (n < 0) {
        throw new RangeError("sourceEnd out of bounds");
      }
      if (n > this.length) {
        n = this.length;
      }
      if (e.length - t < n - r) {
        n = e.length - t + r;
      }
      var o;
      var i = n - r;
      if (this === e && r < t && t < n) {
        for (o = i - 1; o >= 0; --o) {
          e[o + t] = this[o + r];
        }
      } else if (i < 1000 || !c.TYPED_ARRAY_SUPPORT) {
        for (o = 0; o < i; ++o) {
          e[o + t] = this[o + r];
        }
      } else {
        Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
      }
      return i;
    };
    c.prototype.fill = function (e, t, r, n) {
      if (typeof e == "string") {
        if (typeof t == "string") {
          n = t;
          t = 0;
          r = this.length;
        } else if (typeof r == "string") {
          n = r;
          r = this.length;
        }
        if (e.length === 1) {
          var o = e.charCodeAt(0);
          if (o < 256) {
            e = o;
          }
        }
        if (n !== undefined && typeof n != "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof n == "string" && !c.isEncoding(n)) {
          throw new TypeError("Unknown encoding: " + n);
        }
      } else if (typeof e == "number") {
        e &= 255;
      }
      if (t < 0 || this.length < t || this.length < r) {
        throw new RangeError("Out of range index");
      }
      if (r <= t) {
        return this;
      }
      var i;
      t >>>= 0;
      r = r === undefined ? this.length : r >>> 0;
      e ||= 0;
      if (typeof e == "number") {
        for (i = t; i < r; ++i) {
          this[i] = e;
        }
      } else {
        var a = c.isBuffer(e) ? e : j(new c(e, n).toString());
        var s = a.length;
        for (i = 0; i < r - t; ++i) {
          this[i + t] = a[i % s];
        }
      }
      return this;
    };
    var U = /[^+\/0-9A-Za-z-_]/g;
    function N(e) {
      if (e < 16) {
        return "0" + e.toString(16);
      } else {
        return e.toString(16);
      }
    }
    function j(e, t) {
      var r;
      t = t || Infinity;
      for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
        if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
          if (!o) {
            if (r > 56319) {
              if ((t -= 3) > -1) {
                i.push(239, 191, 189);
              }
              continue;
            }
            if (a + 1 === n) {
              if ((t -= 3) > -1) {
                i.push(239, 191, 189);
              }
              continue;
            }
            o = r;
            continue;
          }
          if (r < 56320) {
            if ((t -= 3) > -1) {
              i.push(239, 191, 189);
            }
            o = r;
            continue;
          }
          r = 65536 + (o - 55296 << 10 | r - 56320);
        } else if (o && (t -= 3) > -1) {
          i.push(239, 191, 189);
        }
        o = null;
        if (r < 128) {
          if ((t -= 1) < 0) {
            break;
          }
          i.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0) {
            break;
          }
          i.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0) {
            break;
          }
          i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else {
          if (!(r < 1114112)) {
            throw new Error("Invalid code point");
          }
          if ((t -= 4) < 0) {
            break;
          }
          i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        }
      }
      return i;
    }
    function q(e) {
      return n.toByteArray(function (e) {
        if ((e = function (e) {
          if (e.trim) {
            return e.trim();
          } else {
            return e.replace(/^\s+|\s+$/g, "");
          }
        }(e).replace(U, "")).length < 2) {
          return "";
        }
        while (e.length % 4 != 0) {
          e += "=";
        }
        return e;
      }(e));
    }
    function H(e, t, r, n) {
      for (var o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o) {
        t[o + r] = e[o];
      }
      return o;
    }
  }).call(this, r(13));
};
