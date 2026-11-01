// Module 62 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    n(8);
    i.mode.OFB = (r = i.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
      processBlock: function (e, t) {
        var n = this._cipher;
        var r = n.blockSize;
        var o = this._iv;
        var i = this._keystream;
        if (o) {
          i = this._keystream = o.slice(0);
          this._iv = undefined;
        }
        n.encryptBlock(i, 0);
        for (var a = 0; a < r; a++) {
          e[t + a] ^= i[a];
        }
      }
    }), r.Decryptor = o, r);
    e.exports = i.mode.OFB;
  };
