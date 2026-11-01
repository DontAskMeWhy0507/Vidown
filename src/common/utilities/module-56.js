// Module 56 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(26);
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.x64.Word;
      var s = t.algo;
      var c = [];
      var l = [];
      var u = [];
      (function () {
        var e = 1;
        var t = 0;
        for (var n = 0; n < 24; n++) {
          c[e + t * 5] = (n + 1) * (n + 2) / 2 % 64;
          var r = (e * 2 + t * 3) % 5;
          e = t % 5;
          t = r;
        }
        for (e = 0; e < 5; e++) {
          for (t = 0; t < 5; t++) {
            l[e + t * 5] = t + (e * 2 + t * 3) % 5 * 5;
          }
        }
        var o = 1;
        for (var i = 0; i < 24; i++) {
          var s = 0;
          var d = 0;
          for (var f = 0; f < 7; f++) {
            if (o & 1) {
              var p = (1 << f) - 1;
              if (p < 32) {
                d ^= 1 << p;
              } else {
                s ^= 1 << p - 32;
              }
            }
            if (o & 128) {
              o = o << 1 ^ 113;
            } else {
              o <<= 1;
            }
          }
          u[i] = a.create(s, d);
        }
      })();
      var d = [];
      (function () {
        for (var e = 0; e < 25; e++) {
          d[e] = a.create();
        }
      })();
      var f = s.SHA3 = i.extend({
        cfg: i.cfg.extend({
          outputLength: 512
        }),
        _doReset: function () {
          var e = this._state = [];
          for (var t = 0; t < 25; t++) {
            e[t] = new a.init();
          }
          this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
        },
        _doProcessBlock: function (e, t) {
          var n = this._state;
          for (var r = this.blockSize / 2, o = 0; o < r; o++) {
            var i = e[t + o * 2];
            var a = e[t + o * 2 + 1];
            i = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
            a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
            (C = n[o]).high ^= a;
            C.low ^= i;
          }
          for (var s = 0; s < 24; s++) {
            for (var f = 0; f < 5; f++) {
              var p = 0;
              var h = 0;
              for (var g = 0; g < 5; g++) {
                p ^= (C = n[f + g * 5]).high;
                h ^= C.low;
              }
              var m = d[f];
              m.high = p;
              m.low = h;
            }
            for (f = 0; f < 5; f++) {
              var v = d[(f + 4) % 5];
              var y = d[(f + 1) % 5];
              var k = y.high;
              var b = y.low;
              p = v.high ^ (k << 1 | b >>> 31);
              h = v.low ^ (b << 1 | k >>> 31);
              g = 0;
              for (; g < 5; g++) {
                (C = n[f + g * 5]).high ^= p;
                C.low ^= h;
              }
            }
            for (var _ = 1; _ < 25; _++) {
              var T = (C = n[_]).high;
              var S = C.low;
              var x = c[_];
              if (x < 32) {
                p = T << x | S >>> 32 - x;
                h = S << x | T >>> 32 - x;
              } else {
                p = S << x - 32 | T >>> 64 - x;
                h = T << x - 32 | S >>> 64 - x;
              }
              var w = d[l[_]];
              w.high = p;
              w.low = h;
            }
            var E = d[0];
            var A = n[0];
            E.high = A.high;
            E.low = A.low;
            f = 0;
            for (; f < 5; f++) {
              for (g = 0; g < 5; g++) {
                var C = n[_ = f + g * 5];
                var O = d[_];
                var I = d[(f + 1) % 5 + g * 5];
                var N = d[(f + 2) % 5 + g * 5];
                C.high = O.high ^ ~I.high & N.high;
                C.low = O.low ^ ~I.low & N.low;
              }
            }
            C = n[0];
            var D = u[s];
            C.high ^= D.high;
            C.low ^= D.low;
          }
        },
        _doFinalize: function () {
          var t = this._data;
          var n = t.words;
          this._nDataBytes;
          var r = t.sigBytes * 8;
          var i = this.blockSize * 32;
          n[r >>> 5] |= 1 << 24 - r % 32;
          n[(e.ceil((r + 1) / i) * i >>> 5) - 1] |= 128;
          t.sigBytes = n.length * 4;
          this._process();
          var a = this._state;
          var s = this.cfg.outputLength / 8;
          for (var c = s / 8, l = [], u = 0; u < c; u++) {
            var d = a[u];
            var f = d.high;
            var p = d.low;
            f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & -16711936;
            p = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & -16711936;
            l.push(p);
            l.push(f);
          }
          return new o.init(l, s);
        },
        clone: function () {
          var e = i.clone.call(this);
          var t = e._state = this._state.slice(0);
          for (var n = 0; n < 25; n++) {
            t[n] = t[n].clone();
          }
          return e;
        }
      });
      t.SHA3 = i._createHelper(f);
      t.HmacSHA3 = i._createHmacHelper(f);
    })(Math);
    e.exports = r.SHA3;
  };
