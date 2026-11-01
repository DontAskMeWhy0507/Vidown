// Module 56 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(26);
  (function (e) {
    var t = n;
    var r = t.lib;
    var o = r.WordArray;
    var i = r.Hasher;
    var a = t.x64.Word;
    var s = t.algo;
    var c = [];
    var u = [];
    var l = [];
    (function () {
      var e = 1;
      var t = 0;
      for (var r = 0; r < 24; r++) {
        c[e + t * 5] = (r + 1) * (r + 2) / 2 % 64;
        var n = (e * 2 + t * 3) % 5;
        e = t % 5;
        t = n;
      }
      for (e = 0; e < 5; e++) {
        for (t = 0; t < 5; t++) {
          u[e + t * 5] = t + (e * 2 + t * 3) % 5 * 5;
        }
      }
      var o = 1;
      for (var i = 0; i < 24; i++) {
        var s = 0;
        var d = 0;
        for (var p = 0; p < 7; p++) {
          if (o & 1) {
            var f = (1 << p) - 1;
            if (f < 32) {
              d ^= 1 << f;
            } else {
              s ^= 1 << f - 32;
            }
          }
          if (o & 128) {
            o = o << 1 ^ 113;
          } else {
            o <<= 1;
          }
        }
        l[i] = a.create(s, d);
      }
    })();
    var d = [];
    (function () {
      for (var e = 0; e < 25; e++) {
        d[e] = a.create();
      }
    })();
    var p = s.SHA3 = i.extend({
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
        var r = this._state;
        for (var n = this.blockSize / 2, o = 0; o < n; o++) {
          var i = e[t + o * 2];
          var a = e[t + o * 2 + 1];
          i = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
          a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
          (x = r[o]).high ^= a;
          x.low ^= i;
        }
        for (var s = 0; s < 24; s++) {
          for (var p = 0; p < 5; p++) {
            var f = 0;
            var h = 0;
            for (var m = 0; m < 5; m++) {
              f ^= (x = r[p + m * 5]).high;
              h ^= x.low;
            }
            var g = d[p];
            g.high = f;
            g.low = h;
          }
          for (p = 0; p < 5; p++) {
            var v = d[(p + 4) % 5];
            var y = d[(p + 1) % 5];
            var _ = y.high;
            var b = y.low;
            f = v.high ^ (_ << 1 | b >>> 31);
            h = v.low ^ (b << 1 | _ >>> 31);
            m = 0;
            for (; m < 5; m++) {
              (x = r[p + m * 5]).high ^= f;
              x.low ^= h;
            }
          }
          for (var w = 1; w < 25; w++) {
            var E = (x = r[w]).high;
            var D = x.low;
            var T = c[w];
            if (T < 32) {
              f = E << T | D >>> 32 - T;
              h = D << T | E >>> 32 - T;
            } else {
              f = D << T - 32 | E >>> 64 - T;
              h = E << T - 32 | D >>> 64 - T;
            }
            var k = d[u[w]];
            k.high = f;
            k.low = h;
          }
          var A = d[0];
          var C = r[0];
          A.high = C.high;
          A.low = C.low;
          p = 0;
          for (; p < 5; p++) {
            for (m = 0; m < 5; m++) {
              var x = r[w = p + m * 5];
              var S = d[w];
              var O = d[(p + 1) % 5 + m * 5];
              var I = d[(p + 2) % 5 + m * 5];
              x.high = S.high ^ ~O.high & I.high;
              x.low = S.low ^ ~O.low & I.low;
            }
          }
          x = r[0];
          var L = l[s];
          x.high ^= L.high;
          x.low ^= L.low;
        }
      },
      _doFinalize: function () {
        var t = this._data;
        var r = t.words;
        this._nDataBytes;
        var n = t.sigBytes * 8;
        var i = this.blockSize * 32;
        r[n >>> 5] |= 1 << 24 - n % 32;
        r[(e.ceil((n + 1) / i) * i >>> 5) - 1] |= 128;
        t.sigBytes = r.length * 4;
        this._process();
        var a = this._state;
        var s = this.cfg.outputLength / 8;
        for (var c = s / 8, u = [], l = 0; l < c; l++) {
          var d = a[l];
          var p = d.high;
          var f = d.low;
          p = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & -16711936;
          f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & -16711936;
          u.push(f);
          u.push(p);
        }
        return new o.init(u, s);
      },
      clone: function () {
        var e = i.clone.call(this);
        var t = e._state = this._state.slice(0);
        for (var r = 0; r < 25; r++) {
          t[r] = t[r].clone();
        }
        return e;
      }
    });
    t.SHA3 = i._createHelper(p);
    t.HmacSHA3 = i._createHmacHelper(p);
  })(Math);
  e.exports = n.SHA3;
};
