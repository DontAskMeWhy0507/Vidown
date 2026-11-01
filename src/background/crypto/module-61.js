// Module 61 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(8);
  /** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
  n.mode.CTRGladman = function () {
    var e = n.lib.BlockCipherMode.extend();
    function t(e) {
      if ((e >> 24 & 255) == 255) {
        var t = e >> 16 & 255;
        var r = e >> 8 & 255;
        var n = e & 255;
        if (t === 255) {
          t = 0;
          if (r === 255) {
            r = 0;
            if (n === 255) {
              n = 0;
            } else {
              ++n;
            }
          } else {
            ++r;
          }
        } else {
          ++t;
        }
        e = 0;
        e += t << 16;
        e += r << 8;
        e += n;
      } else {
        e += 16777216;
      }
      return e;
    }
    var r = e.Encryptor = e.extend({
      processBlock: function (e, r) {
        var n = this._cipher;
        var o = n.blockSize;
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
        n.encryptBlock(s, 0);
        for (var c = 0; c < o; c++) {
          e[r + c] ^= s[c];
        }
      }
    });
    e.Decryptor = r;
    return e;
  }();
  e.exports = n.mode.CTRGladman;
};
