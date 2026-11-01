// Module 4 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (t) {
    var n;
    n = n || function (e, n) {
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
          o = r(50);
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
          var r;
          e.prototype = t;
          r = new e();
          e.prototype = null;
          return r;
        };
      }();
      var s = {};
      var c = s.lib = {};
      var u = c.Base = {
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
      var l = c.WordArray = u.extend({
        init: function (e, t) {
          e = this.words = e || [];
          this.sigBytes = t ?? e.length * 4;
        },
        toString: function (e) {
          return (e || p).stringify(this);
        },
        concat: function (e) {
          var t = this.words;
          var r = e.words;
          var n = this.sigBytes;
          var o = e.sigBytes;
          this.clamp();
          if (n % 4) {
            for (var i = 0; i < o; i++) {
              var a = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[n + i >>> 2] |= a << 24 - (n + i) % 4 * 8;
            }
          } else {
            for (var s = 0; s < o; s += 4) {
              t[n + s >>> 2] = r[s >>> 2];
            }
          }
          this.sigBytes += o;
          return this;
        },
        clamp: function () {
          var t = this.words;
          var r = this.sigBytes;
          t[r >>> 2] &= -1 << 32 - r % 4 * 8;
          t.length = e.ceil(r / 4);
        },
        clone: function () {
          var e = u.clone.call(this);
          e.words = this.words.slice(0);
          return e;
        },
        random: function (e) {
          var t = [];
          for (var r = 0; r < e; r += 4) {
            t.push(i());
          }
          return new l.init(t, e);
        }
      });
      var d = s.enc = {};
      var p = d.Hex = {
        stringify: function (e) {
          var t = e.words;
          for (var r = e.sigBytes, n = [], o = 0; o < r; o++) {
            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
            n.push((i >>> 4).toString(16));
            n.push((i & 15).toString(16));
          }
          return n.join("");
        },
        parse: function (e) {
          for (var t = e.length, r = [], n = 0; n < t; n += 2) {
            r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
          }
          return new l.init(r, t / 2);
        }
      };
      var f = d.Latin1 = {
        stringify: function (e) {
          var t = e.words;
          for (var r = e.sigBytes, n = [], o = 0; o < r; o++) {
            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
            n.push(String.fromCharCode(i));
          }
          return n.join("");
        },
        parse: function (e) {
          for (var t = e.length, r = [], n = 0; n < t; n++) {
            r[n >>> 2] |= (e.charCodeAt(n) & 255) << 24 - n % 4 * 8;
          }
          return new l.init(r, t);
        }
      };
      var h = d.Utf8 = {
        stringify: function (e) {
          try {
            return decodeURIComponent(escape(f.stringify(e)));
          } catch (e) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function (e) {
          return f.parse(unescape(encodeURIComponent(e)));
        }
      };
      var m = c.BufferedBlockAlgorithm = u.extend({
        reset: function () {
          this._data = new l.init();
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
          var r;
          var n = this._data;
          var o = n.words;
          var i = n.sigBytes;
          var a = this.blockSize;
          var s = i / (a * 4);
          var c = (s = t ? e.ceil(s) : e.max((s | 0) - this._minBufferSize, 0)) * a;
          var u = e.min(c * 4, i);
          if (c) {
            for (var d = 0; d < c; d += a) {
              this._doProcessBlock(o, d);
            }
            r = o.splice(0, c);
            n.sigBytes -= u;
          }
          return new l.init(r, u);
        },
        clone: function () {
          var e = u.clone.call(this);
          e._data = this._data.clone();
          return e;
        },
        _minBufferSize: 0
      });
      c.Hasher = m.extend({
        cfg: u.extend(),
        init: function (e) {
          this.cfg = this.cfg.extend(e);
          this.reset();
        },
        reset: function () {
          m.reset.call(this);
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
          return function (t, r) {
            return new e.init(r).finalize(t);
          };
        },
        _createHmacHelper: function (e) {
          return function (t, r) {
            return new g.HMAC.init(e, r).finalize(t);
          };
        }
      });
      var g = s.algo = {};
      return s;
    }(Math);
    e.exports = n;
  }).call(this, r(13));
};
