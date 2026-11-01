// Module 61 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
    r.mode.CTRGladman = function () {
      var e = r.lib.BlockCipherMode.extend();
      function t(e) {
        if ((e >> 24 & 255) == 255) {
          var t = e >> 16 & 255;
          var n = e >> 8 & 255;
          var r = e & 255;
          if (t === 255) {
            t = 0;
            if (n === 255) {
              n = 0;
              if (r === 255) {
                r = 0;
              } else {
                ++r;
              }
            } else {
              ++n;
            }
          } else {
            ++t;
          }
          e = 0;
          e += t << 16;
          e += n << 8;
          e += r;
        } else {
          e += 16777216;
        }
        return e;
      }
      var n = e.Encryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          var i = this._iv;
          var a = this._counter;
          if (i) {
            a = this._counter = i.slice(0);
            this._iv = undefined;
          }
          (function (e) {
            if ((e[0] = t(e[0])) === 0) {
              e[1] = t(e[1]);
            }
          })(a);
          var s = a.slice(0);
          r.encryptBlock(s, 0);
          for (var c = 0; c < o; c++) {
            e[n + c] ^= s[c];
          }
        }
      });
      e.Decryptor = n;
      return e;
    }();
    e.exports = r.mode.CTRGladman;
  };
