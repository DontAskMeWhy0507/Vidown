// Module 40 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    u = n(4);
    o = (r = u).lib;
    i = o.WordArray;
    a = o.Hasher;
    s = r.algo;
    c = [];
    l = s.SHA1 = a.extend({
      _doReset: function () {
        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        var n = this._hash.words;
        var r = n[0];
        var o = n[1];
        var i = n[2];
        var a = n[3];
        var s = n[4];
        for (var l = 0; l < 80; l++) {
          if (l < 16) {
            c[l] = e[t + l] | 0;
          } else {
            var u = c[l - 3] ^ c[l - 8] ^ c[l - 14] ^ c[l - 16];
            c[l] = u << 1 | u >>> 31;
          }
          var d = (r << 5 | r >>> 27) + s + c[l];
          d += l < 20 ? 1518500249 + (o & i | ~o & a) : l < 40 ? 1859775393 + (o ^ i ^ a) : l < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514;
          s = a;
          a = i;
          i = o << 30 | o >>> 2;
          o = r;
          r = d;
        }
        n[0] = n[0] + r | 0;
        n[1] = n[1] + o | 0;
        n[2] = n[2] + i | 0;
        n[3] = n[3] + a | 0;
        n[4] = n[4] + s | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var t = e.words;
        var n = this._nDataBytes * 8;
        var r = e.sigBytes * 8;
        t[r >>> 5] |= 128 << 24 - r % 32;
        t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296);
        t[15 + (r + 64 >>> 9 << 4)] = n;
        e.sigBytes = t.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var e = a.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    r.SHA1 = a._createHelper(l);
    r.HmacSHA1 = a._createHmacHelper(l);
    e.exports = u.SHA1;
  };
