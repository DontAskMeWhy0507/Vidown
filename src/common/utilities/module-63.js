// Module 63 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    o = n(4);
    n(8);
    o.mode.ECB = ((r = o.lib.BlockCipherMode.extend()).Encryptor = r.extend({
      processBlock: function (e, t) {
        this._cipher.encryptBlock(e, t);
      }
    }), r.Decryptor = r.extend({
      processBlock: function (e, t) {
        this._cipher.decryptBlock(e, t);
      }
    }), r);
    e.exports = o.mode.ECB;
  };
