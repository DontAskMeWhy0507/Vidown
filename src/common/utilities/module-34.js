// Module 34 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.algo;
      var s = [];
      var c = [];
      (function () {
        function t(t) {
          for (var n = e.sqrt(t), r = 2; r <= n; r++) {
            if (!(t % r)) {
              return false;
            }
          }
          return true;
        }
        function n(e) {
          return (e - (e | 0)) * 4294967296 | 0;
        }
        var r = 2;
        for (var o = 0; o < 64;) {
          if (t(r)) {
            if (o < 8) {
              s[o] = n(e.pow(r, 0.5));
            }
            c[o] = n(e.pow(r, 1 / 3));
            o++;
          }
          r++;
        }
      })();
      var l = [];
      var u = a.SHA256 = i.extend({
        _doReset: function () {
          this._hash = new o.init(s.slice(0));
        },
        _doProcessBlock: function (e, t) {
          var n = this._hash.words;
          var r = n[0];
          var o = n[1];
          var i = n[2];
          var a = n[3];
          var s = n[4];
          var u = n[5];
          var d = n[6];
          var f = n[7];
          for (var p = 0; p < 64; p++) {
            if (p < 16) {
              l[p] = e[t + p] | 0;
            } else {
              var h = l[p - 15];
              var g = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3;
              var m = l[p - 2];
              var v = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
              l[p] = g + l[p - 7] + v + l[p - 16];
            }
            var y = r & o ^ r & i ^ o & i;
            var k = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22);
            var b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & d) + c[p] + l[p];
            f = d;
            d = u;
            u = s;
            s = a + b | 0;
            a = i;
            i = o;
            o = r;
            r = b + (k + y) | 0;
          }
          n[0] = n[0] + r | 0;
          n[1] = n[1] + o | 0;
          n[2] = n[2] + i | 0;
          n[3] = n[3] + a | 0;
          n[4] = n[4] + s | 0;
          n[5] = n[5] + u | 0;
          n[6] = n[6] + d | 0;
          n[7] = n[7] + f | 0;
        },
        _doFinalize: function () {
          var t = this._data;
          var n = t.words;
          var r = this._nDataBytes * 8;
          var o = t.sigBytes * 8;
          n[o >>> 5] |= 128 << 24 - o % 32;
          n[14 + (o + 64 >>> 9 << 4)] = e.floor(r / 4294967296);
          n[15 + (o + 64 >>> 9 << 4)] = r;
          t.sigBytes = n.length * 4;
          this._process();
          return this._hash;
        },
        clone: function () {
          var e = i.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        }
      });
      t.SHA256 = i._createHelper(u);
      t.HmacSHA256 = i._createHmacHelper(u);
    })(Math);
    e.exports = r.SHA256;
  };
