// Module 40 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  var u;
  var l;
  l = r(4);
  o = (n = l).lib;
  i = o.WordArray;
  a = o.Hasher;
  s = n.algo;
  c = [];
  u = s.SHA1 = a.extend({
    _doReset: function () {
      this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (e, t) {
      var r = this._hash.words;
      var n = r[0];
      var o = r[1];
      var i = r[2];
      var a = r[3];
      var s = r[4];
      for (var u = 0; u < 80; u++) {
        if (u < 16) {
          c[u] = e[t + u] | 0;
        } else {
          var l = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
          c[u] = l << 1 | l >>> 31;
        }
        var d = (n << 5 | n >>> 27) + s + c[u];
        d += u < 20 ? 1518500249 + (o & i | ~o & a) : u < 40 ? 1859775393 + (o ^ i ^ a) : u < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514;
        s = a;
        a = i;
        i = o << 30 | o >>> 2;
        o = n;
        n = d;
      }
      r[0] = r[0] + n | 0;
      r[1] = r[1] + o | 0;
      r[2] = r[2] + i | 0;
      r[3] = r[3] + a | 0;
      r[4] = r[4] + s | 0;
    },
    _doFinalize: function () {
      var e = this._data;
      var t = e.words;
      var r = this._nDataBytes * 8;
      var n = e.sigBytes * 8;
      t[n >>> 5] |= 128 << 24 - n % 32;
      t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296);
      t[15 + (n + 64 >>> 9 << 4)] = r;
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
  n.SHA1 = a._createHelper(u);
  n.HmacSHA1 = a._createHmacHelper(u);
  e.exports = l.SHA1;
};
