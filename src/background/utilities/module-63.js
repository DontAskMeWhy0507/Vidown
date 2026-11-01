// Module 63 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  o = r(4);
  r(8);
  o.mode.ECB = ((n = o.lib.BlockCipherMode.extend()).Encryptor = n.extend({
    processBlock: function (e, t) {
      this._cipher.encryptBlock(e, t);
    }
  }), n.Decryptor = n.extend({
    processBlock: function (e, t) {
      this._cipher.decryptBlock(e, t);
    }
  }), n);
  e.exports = o.mode.ECB;
};
