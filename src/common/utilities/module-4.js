// Module 4 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
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
  };
