// Module 34 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  (function (e) {
    var t = n;
    var r = t.lib;
    var o = r.WordArray;
    var i = r.Hasher;
    var a = t.algo;
    var s = [];
    var c = [];
    (function () {
      function t(t) {
        for (var r = e.sqrt(t), n = 2; n <= r; n++) {
          if (!(t % n)) {
            return false;
          }
        }
        return true;
      }
      function r(e) {
        return (e - (e | 0)) * 4294967296 | 0;
      }
      var n = 2;
      for (var o = 0; o < 64;) {
        if (t(n)) {
          if (o < 8) {
            s[o] = r(e.pow(n, 0.5));
          }
          c[o] = r(e.pow(n, 1 / 3));
          o++;
        }
        n++;
      }
    })();
    var u = [];
    var l = a.SHA256 = i.extend({
      _doReset: function () {
        this._hash = new o.init(s.slice(0));
      },
      _doProcessBlock: function (e, t) {
        var r = this._hash.words;
        var n = r[0];
        var o = r[1];
        var i = r[2];
        var a = r[3];
        var s = r[4];
        var l = r[5];
        var d = r[6];
        var p = r[7];
        for (var f = 0; f < 64; f++) {
          if (f < 16) {
            u[f] = e[t + f] | 0;
          } else {
            var h = u[f - 15];
            var m = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3;
            var g = u[f - 2];
            var v = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
            u[f] = m + u[f - 7] + v + u[f - 16];
          }
          var y = n & o ^ n & i ^ o & i;
          var _ = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22);
          var b = p + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & l ^ ~s & d) + c[f] + u[f];
          p = d;
          d = l;
          l = s;
          s = a + b | 0;
          a = i;
          i = o;
          o = n;
          n = b + (_ + y) | 0;
        }
        r[0] = r[0] + n | 0;
        r[1] = r[1] + o | 0;
        r[2] = r[2] + i | 0;
        r[3] = r[3] + a | 0;
        r[4] = r[4] + s | 0;
        r[5] = r[5] + l | 0;
        r[6] = r[6] + d | 0;
        r[7] = r[7] + p | 0;
      },
      _doFinalize: function () {
        var t = this._data;
        var r = t.words;
        var n = this._nDataBytes * 8;
        var o = t.sigBytes * 8;
        r[o >>> 5] |= 128 << 24 - o % 32;
        r[14 + (o + 64 >>> 9 << 4)] = e.floor(n / 4294967296);
        r[15 + (o + 64 >>> 9 << 4)] = n;
        t.sigBytes = r.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var e = i.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    t.SHA256 = i._createHelper(l);
    t.HmacSHA256 = i._createHmacHelper(l);
  })(Math);
  e.exports = n.SHA256;
};
