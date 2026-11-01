// Module 62 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  i = r(4);
  r(8);
  i.mode.OFB = (n = i.lib.BlockCipherMode.extend(), o = n.Encryptor = n.extend({
    processBlock: function (e, t) {
      var r = this._cipher;
      var n = r.blockSize;
      var o = this._iv;
      var i = this._keystream;
      if (o) {
        i = this._keystream = o.slice(0);
        this._iv = undefined;
      }
      r.encryptBlock(i, 0);
      for (var a = 0; a < n; a++) {
        e[t + a] ^= i[a];
      }
    }
  }), n.Decryptor = o, n);
  e.exports = i.mode.OFB;
};
