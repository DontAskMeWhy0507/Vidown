// Module 60 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    n(8);
    i.mode.CTR = (r = i.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
      processBlock: function (e, t) {
        var n = this._cipher;
        var r = n.blockSize;
        var o = this._iv;
        var i = this._counter;
        if (o) {
          i = this._counter = o.slice(0);
          this._iv = undefined;
        }
        var a = i.slice(0);
        n.encryptBlock(a, 0);
        i[r - 1] = i[r - 1] + 1 | 0;
        for (var s = 0; s < r; s++) {
          e[t + s] ^= a[s];
        }
      }
    }), r.Decryptor = o, r);
    e.exports = i.mode.CTR;
  };
