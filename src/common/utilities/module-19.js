// Module 19 [utilities] - Savior Common Utility Subsystem
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
          for (var n = 0; n < 16; n++) {
            var r = t + n;
            var o = e[r];
            e[r] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
          }
          var i = this._hash.words;
          var a = e[t + 0];
          var c = e[t + 1];
          var p = e[t + 2];
          var h = e[t + 3];
          var g = e[t + 4];
          var m = e[t + 5];
          var v = e[t + 6];
          var y = e[t + 7];
          var k = e[t + 8];
          var b = e[t + 9];
          var _ = e[t + 10];
          var T = e[t + 11];
          var S = e[t + 12];
          var x = e[t + 13];
          var w = e[t + 14];
          var E = e[t + 15];
          var A = i[0];
          var C = i[1];
          var O = i[2];
          var I = i[3];
          A = l(A, C, O, I, a, 7, s[0]);
          I = l(I, A, C, O, c, 12, s[1]);
          O = l(O, I, A, C, p, 17, s[2]);
          C = l(C, O, I, A, h, 22, s[3]);
          A = l(A, C, O, I, g, 7, s[4]);
          I = l(I, A, C, O, m, 12, s[5]);
          O = l(O, I, A, C, v, 17, s[6]);
          C = l(C, O, I, A, y, 22, s[7]);
          A = l(A, C, O, I, k, 7, s[8]);
          I = l(I, A, C, O, b, 12, s[9]);
          O = l(O, I, A, C, _, 17, s[10]);
          C = l(C, O, I, A, T, 22, s[11]);
          A = l(A, C, O, I, S, 7, s[12]);
          I = l(I, A, C, O, x, 12, s[13]);
          O = l(O, I, A, C, w, 17, s[14]);
          A = u(A, C = l(C, O, I, A, E, 22, s[15]), O, I, c, 5, s[16]);
          I = u(I, A, C, O, v, 9, s[17]);
          O = u(O, I, A, C, T, 14, s[18]);
          C = u(C, O, I, A, a, 20, s[19]);
          A = u(A, C, O, I, m, 5, s[20]);
          I = u(I, A, C, O, _, 9, s[21]);
          O = u(O, I, A, C, E, 14, s[22]);
          C = u(C, O, I, A, g, 20, s[23]);
          A = u(A, C, O, I, b, 5, s[24]);
          I = u(I, A, C, O, w, 9, s[25]);
          O = u(O, I, A, C, h, 14, s[26]);
          C = u(C, O, I, A, k, 20, s[27]);
          A = u(A, C, O, I, x, 5, s[28]);
          I = u(I, A, C, O, p, 9, s[29]);
          O = u(O, I, A, C, y, 14, s[30]);
          A = d(A, C = u(C, O, I, A, S, 20, s[31]), O, I, m, 4, s[32]);
          I = d(I, A, C, O, k, 11, s[33]);
          O = d(O, I, A, C, T, 16, s[34]);
          C = d(C, O, I, A, w, 23, s[35]);
          A = d(A, C, O, I, c, 4, s[36]);
          I = d(I, A, C, O, g, 11, s[37]);
          O = d(O, I, A, C, y, 16, s[38]);
          C = d(C, O, I, A, _, 23, s[39]);
          A = d(A, C, O, I, x, 4, s[40]);
          I = d(I, A, C, O, a, 11, s[41]);
          O = d(O, I, A, C, h, 16, s[42]);
          C = d(C, O, I, A, v, 23, s[43]);
          A = d(A, C, O, I, b, 4, s[44]);
          I = d(I, A, C, O, S, 11, s[45]);
          O = d(O, I, A, C, E, 16, s[46]);
          A = f(A, C = d(C, O, I, A, p, 23, s[47]), O, I, a, 6, s[48]);
          I = f(I, A, C, O, y, 10, s[49]);
          O = f(O, I, A, C, w, 15, s[50]);
          C = f(C, O, I, A, m, 21, s[51]);
          A = f(A, C, O, I, S, 6, s[52]);
          I = f(I, A, C, O, h, 10, s[53]);
          O = f(O, I, A, C, _, 15, s[54]);
          C = f(C, O, I, A, c, 21, s[55]);
          A = f(A, C, O, I, k, 6, s[56]);
          I = f(I, A, C, O, E, 10, s[57]);
          O = f(O, I, A, C, v, 15, s[58]);
          C = f(C, O, I, A, x, 21, s[59]);
          A = f(A, C, O, I, g, 6, s[60]);
          I = f(I, A, C, O, T, 10, s[61]);
          O = f(O, I, A, C, p, 15, s[62]);
          C = f(C, O, I, A, b, 21, s[63]);
          i[0] = i[0] + A | 0;
          i[1] = i[1] + C | 0;
          i[2] = i[2] + O | 0;
          i[3] = i[3] + I | 0;
        },
        _doFinalize: function () {
          var t = this._data;
          var n = t.words;
          var r = this._nDataBytes * 8;
          var o = t.sigBytes * 8;
          n[o >>> 5] |= 128 << 24 - o % 32;
          var i = e.floor(r / 4294967296);
          var a = r;
          n[15 + (o + 64 >>> 9 << 4)] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
          n[14 + (o + 64 >>> 9 << 4)] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
          t.sigBytes = (n.length + 1) * 4;
          this._process();
          var s = this._hash;
          var c = s.words;
          for (var l = 0; l < 4; l++) {
            var u = c[l];
            c[l] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & -16711936;
          }
          return s;
        },
        clone: function () {
          var e = i.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        }
      });
      function l(e, t, n, r, o, i, a) {
        var s = e + (t & n | ~t & r) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function u(e, t, n, r, o, i, a) {
        var s = e + (t & r | n & ~r) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function d(e, t, n, r, o, i, a) {
        var s = e + (t ^ n ^ r) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function f(e, t, n, r, o, i, a) {
        var s = e + (n ^ (t | ~r)) + o + a;
        return (s << i | s >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c);
      t.HmacMD5 = i._createHmacHelper(c);
    })(Math);
    e.exports = r.MD5;
  };
