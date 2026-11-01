// Module 70 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(18);
  r(19);
  r(17);
  r(8);
  (function () {
    var e = n;
    var t = e.lib.BlockCipher;
    var r = e.algo;
    var o = [];
    var i = [];
    var a = [];
    var s = [];
    var c = [];
    var u = [];
    var l = [];
    var d = [];
    var p = [];
    var f = [];
    (function () {
      var e = [];
      for (var t = 0; t < 256; t++) {
        e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
      }
      var r = 0;
      var n = 0;
      for (t = 0; t < 256; t++) {
        var h = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
        h = h >>> 8 ^ h & 255 ^ 99;
        o[r] = h;
        i[h] = r;
        var m = e[r];
        var g = e[m];
        var v = e[g];
        var y = e[h] * 257 ^ h * 16843008;
        a[r] = y << 24 | y >>> 8;
        s[r] = y << 16 | y >>> 16;
        c[r] = y << 8 | y >>> 24;
        u[r] = y;
        y = v * 16843009 ^ g * 65537 ^ m * 257 ^ r * 16843008;
        l[h] = y << 24 | y >>> 8;
        d[h] = y << 16 | y >>> 16;
        p[h] = y << 8 | y >>> 24;
        f[h] = y;
        if (r) {
          r = m ^ e[e[e[v ^ m]]];
          n ^= e[e[n]];
        } else {
          r = n = 1;
        }
      }
    })();
    var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var m = r.AES = t.extend({
      _doReset: function () {
        if (!this._nRounds || this._keyPriorReset !== this._key) {
          var e = this._keyPriorReset = this._key;
          var t = e.words;
          var r = e.sigBytes / 4;
          for (var n = ((this._nRounds = r + 6) + 1) * 4, i = this._keySchedule = [], a = 0; a < n; a++) {
            if (a < r) {
              i[a] = t[a];
            } else {
              u = i[a - 1];
              if (a % r) {
                if (r > 6 && a % r == 4) {
                  u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[u & 255];
                }
              } else {
                u = o[(u = u << 8 | u >>> 24) >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[u & 255];
                u ^= h[a / r | 0] << 24;
              }
              i[a] = i[a - r] ^ u;
            }
          }
          var s = this._invKeySchedule = [];
          for (var c = 0; c < n; c++) {
            a = n - c;
            if (c % 4) {
              var u = i[a];
            } else {
              u = i[a - 4];
            }
            s[c] = c < 4 || a <= 4 ? u : l[o[u >>> 24]] ^ d[o[u >>> 16 & 255]] ^ p[o[u >>> 8 & 255]] ^ f[o[u & 255]];
          }
        }
      },
      encryptBlock: function (e, t) {
        this._doCryptBlock(e, t, this._keySchedule, a, s, c, u, o);
      },
      decryptBlock: function (e, t) {
        var r = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = r;
        this._doCryptBlock(e, t, this._invKeySchedule, l, d, p, f, i);
        r = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = r;
      },
      _doCryptBlock: function (e, t, r, n, o, i, a, s) {
        for (var c = this._nRounds, u = e[t] ^ r[0], l = e[t + 1] ^ r[1], d = e[t + 2] ^ r[2], p = e[t + 3] ^ r[3], f = 4, h = 1; h < c; h++) {
          var m = n[u >>> 24] ^ o[l >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[p & 255] ^ r[f++];
          var g = n[l >>> 24] ^ o[d >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[u & 255] ^ r[f++];
          var v = n[d >>> 24] ^ o[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[l & 255] ^ r[f++];
          var y = n[p >>> 24] ^ o[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[d & 255] ^ r[f++];
          u = m;
          l = g;
          d = v;
          p = y;
        }
        m = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[p & 255]) ^ r[f++];
        g = (s[l >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[u & 255]) ^ r[f++];
        v = (s[d >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[l & 255]) ^ r[f++];
        y = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[d & 255]) ^ r[f++];
        e[t] = m;
        e[t + 1] = g;
        e[t + 2] = v;
        e[t + 3] = y;
      },
      keySize: 8
    });
    e.AES = t._createHelper(m);
  })();
  e.exports = n.AES;
};
