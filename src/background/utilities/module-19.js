// Module 19 [utilities] - Savior Background Script Subsystem
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
    (function () {
      for (var t = 0; t < 64; t++) {
        s[t] = e.abs(e.sin(t + 1)) * 4294967296 | 0;
      }
    })();
    var c = a.MD5 = i.extend({
      _doReset: function () {
        this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function (e, t) {
        for (var r = 0; r < 16; r++) {
          var n = t + r;
          var o = e[n];
          e[n] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
        }
        var i = this._hash.words;
        var a = e[t + 0];
        var c = e[t + 1];
        var f = e[t + 2];
        var h = e[t + 3];
        var m = e[t + 4];
        var g = e[t + 5];
        var v = e[t + 6];
        var y = e[t + 7];
        var _ = e[t + 8];
        var b = e[t + 9];
        var w = e[t + 10];
        var E = e[t + 11];
        var D = e[t + 12];
        var T = e[t + 13];
        var k = e[t + 14];
        var A = e[t + 15];
        var C = i[0];
        var x = i[1];
        var S = i[2];
        var O = i[3];
        C = u(C, x, S, O, a, 7, s[0]);
        O = u(O, C, x, S, c, 12, s[1]);
        S = u(S, O, C, x, f, 17, s[2]);
        x = u(x, S, O, C, h, 22, s[3]);
        C = u(C, x, S, O, m, 7, s[4]);
        O = u(O, C, x, S, g, 12, s[5]);
        S = u(S, O, C, x, v, 17, s[6]);
        x = u(x, S, O, C, y, 22, s[7]);
        C = u(C, x, S, O, _, 7, s[8]);
        O = u(O, C, x, S, b, 12, s[9]);
        S = u(S, O, C, x, w, 17, s[10]);
        x = u(x, S, O, C, E, 22, s[11]);
        C = u(C, x, S, O, D, 7, s[12]);
        O = u(O, C, x, S, T, 12, s[13]);
        S = u(S, O, C, x, k, 17, s[14]);
        C = l(C, x = u(x, S, O, C, A, 22, s[15]), S, O, c, 5, s[16]);
        O = l(O, C, x, S, v, 9, s[17]);
        S = l(S, O, C, x, E, 14, s[18]);
        x = l(x, S, O, C, a, 20, s[19]);
        C = l(C, x, S, O, g, 5, s[20]);
        O = l(O, C, x, S, w, 9, s[21]);
        S = l(S, O, C, x, A, 14, s[22]);
        x = l(x, S, O, C, m, 20, s[23]);
        C = l(C, x, S, O, b, 5, s[24]);
        O = l(O, C, x, S, k, 9, s[25]);
        S = l(S, O, C, x, h, 14, s[26]);
        x = l(x, S, O, C, _, 20, s[27]);
        C = l(C, x, S, O, T, 5, s[28]);
        O = l(O, C, x, S, f, 9, s[29]);
        S = l(S, O, C, x, y, 14, s[30]);
        C = d(C, x = l(x, S, O, C, D, 20, s[31]), S, O, g, 4, s[32]);
        O = d(O, C, x, S, _, 11, s[33]);
        S = d(S, O, C, x, E, 16, s[34]);
        x = d(x, S, O, C, k, 23, s[35]);
        C = d(C, x, S, O, c, 4, s[36]);
        O = d(O, C, x, S, m, 11, s[37]);
        S = d(S, O, C, x, y, 16, s[38]);
        x = d(x, S, O, C, w, 23, s[39]);
        C = d(C, x, S, O, T, 4, s[40]);
        O = d(O, C, x, S, a, 11, s[41]);
        S = d(S, O, C, x, h, 16, s[42]);
        x = d(x, S, O, C, v, 23, s[43]);
        C = d(C, x, S, O, b, 4, s[44]);
        O = d(O, C, x, S, D, 11, s[45]);
        S = d(S, O, C, x, A, 16, s[46]);
        C = p(C, x = d(x, S, O, C, f, 23, s[47]), S, O, a, 6, s[48]);
        O = p(O, C, x, S, y, 10, s[49]);
        S = p(S, O, C, x, k, 15, s[50]);
        x = p(x, S, O, C, g, 21, s[51]);
        C = p(C, x, S, O, D, 6, s[52]);
        O = p(O, C, x, S, h, 10, s[53]);
        S = p(S, O, C, x, w, 15, s[54]);
        x = p(x, S, O, C, c, 21, s[55]);
        C = p(C, x, S, O, _, 6, s[56]);
        O = p(O, C, x, S, A, 10, s[57]);
        S = p(S, O, C, x, v, 15, s[58]);
        x = p(x, S, O, C, T, 21, s[59]);
        C = p(C, x, S, O, m, 6, s[60]);
        O = p(O, C, x, S, E, 10, s[61]);
        S = p(S, O, C, x, f, 15, s[62]);
        x = p(x, S, O, C, b, 21, s[63]);
        i[0] = i[0] + C | 0;
        i[1] = i[1] + x | 0;
        i[2] = i[2] + S | 0;
        i[3] = i[3] + O | 0;
      },
      _doFinalize: function () {
        var t = this._data;
        var r = t.words;
        var n = this._nDataBytes * 8;
        var o = t.sigBytes * 8;
        r[o >>> 5] |= 128 << 24 - o % 32;
        var i = e.floor(n / 4294967296);
        var a = n;
        r[15 + (o + 64 >>> 9 << 4)] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
        r[14 + (o + 64 >>> 9 << 4)] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
        t.sigBytes = (r.length + 1) * 4;
        this._process();
        var s = this._hash;
        var c = s.words;
        for (var u = 0; u < 4; u++) {
          var l = c[u];
          c[u] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & -16711936;
        }
        return s;
      },
      clone: function () {
        var e = i.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    function u(e, t, r, n, o, i, a) {
      var s = e + (t & r | ~t & n) + o + a;
      return (s << i | s >>> 32 - i) + t;
    }
    function l(e, t, r, n, o, i, a) {
      var s = e + (t & n | r & ~n) + o + a;
      return (s << i | s >>> 32 - i) + t;
    }
    function d(e, t, r, n, o, i, a) {
      var s = e + (t ^ r ^ n) + o + a;
      return (s << i | s >>> 32 - i) + t;
    }
    function p(e, t, r, n, o, i, a) {
      var s = e + (r ^ (t | ~n)) + o + a;
      return (s << i | s >>> 32 - i) + t;
    }
    t.MD5 = i._createHelper(c);
    t.HmacMD5 = i._createHmacHelper(c);
  })(Math);
  e.exports = n.MD5;
};
