// Module 70 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(18);
    n(19);
    n(17);
    n(8);
    (function () {
      var e = r;
      var t = e.lib.BlockCipher;
      var n = e.algo;
      var o = [];
      var i = [];
      var a = [];
      var s = [];
      var c = [];
      var l = [];
      var u = [];
      var d = [];
      var f = [];
      var p = [];
      (function () {
        var e = [];
        for (var t = 0; t < 256; t++) {
          e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
        }
        var n = 0;
        var r = 0;
        for (t = 0; t < 256; t++) {
          var h = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
          h = h >>> 8 ^ h & 255 ^ 99;
          o[n] = h;
          i[h] = n;
          var g = e[n];
          var m = e[g];
          var v = e[m];
          var y = e[h] * 257 ^ h * 16843008;
          a[n] = y << 24 | y >>> 8;
          s[n] = y << 16 | y >>> 16;
          c[n] = y << 8 | y >>> 24;
          l[n] = y;
          y = v * 16843009 ^ m * 65537 ^ g * 257 ^ n * 16843008;
          u[h] = y << 24 | y >>> 8;
          d[h] = y << 16 | y >>> 16;
          f[h] = y << 8 | y >>> 24;
          p[h] = y;
          if (n) {
            n = g ^ e[e[e[v ^ g]]];
            r ^= e[e[r]];
          } else {
            n = r = 1;
          }
        }
      })();
      var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var g = n.AES = t.extend({
        _doReset: function () {
          if (!this._nRounds || this._keyPriorReset !== this._key) {
            var e = this._keyPriorReset = this._key;
            var t = e.words;
            var n = e.sigBytes / 4;
            for (var r = ((this._nRounds = n + 6) + 1) * 4, i = this._keySchedule = [], a = 0; a < r; a++) {
              if (a < n) {
                i[a] = t[a];
              } else {
                l = i[a - 1];
                if (a % n) {
                  if (n > 6 && a % n == 4) {
                    l = o[l >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[l & 255];
                  }
                } else {
                  l = o[(l = l << 8 | l >>> 24) >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[l & 255];
                  l ^= h[a / n | 0] << 24;
                }
                i[a] = i[a - n] ^ l;
              }
            }
            var s = this._invKeySchedule = [];
            for (var c = 0; c < r; c++) {
              a = r - c;
              if (c % 4) {
                var l = i[a];
              } else {
                l = i[a - 4];
              }
              s[c] = c < 4 || a <= 4 ? l : u[o[l >>> 24]] ^ d[o[l >>> 16 & 255]] ^ f[o[l >>> 8 & 255]] ^ p[o[l & 255]];
            }
          }
        },
        encryptBlock: function (e, t) {
          this._doCryptBlock(e, t, this._keySchedule, a, s, c, l, o);
        },
        decryptBlock: function (e, t) {
          var n = e[t + 1];
          e[t + 1] = e[t + 3];
          e[t + 3] = n;
          this._doCryptBlock(e, t, this._invKeySchedule, u, d, f, p, i);
          n = e[t + 1];
          e[t + 1] = e[t + 3];
          e[t + 3] = n;
        },
        _doCryptBlock: function (e, t, n, r, o, i, a, s) {
          for (var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], p = 4, h = 1; h < c; h++) {
            var g = r[l >>> 24] ^ o[u >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[f & 255] ^ n[p++];
            var m = r[u >>> 24] ^ o[d >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[l & 255] ^ n[p++];
            var v = r[d >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[u & 255] ^ n[p++];
            var y = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[d & 255] ^ n[p++];
            l = g;
            u = m;
            d = v;
            f = y;
          }
          g = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[f & 255]) ^ n[p++];
          m = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[l & 255]) ^ n[p++];
          v = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[u & 255]) ^ n[p++];
          y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[d & 255]) ^ n[p++];
          e[t] = g;
          e[t + 1] = m;
          e[t + 2] = v;
          e[t + 3] = y;
        },
        keySize: 8
      });
      e.AES = t._createHelper(g);
    })();
    e.exports = r.AES;
  };
