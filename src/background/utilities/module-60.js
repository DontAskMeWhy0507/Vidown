// Module 60 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  i = r(4);
  r(8);
  i.mode.CTR = (n = i.lib.BlockCipherMode.extend(), o = n.Encryptor = n.extend({
    processBlock: function (e, t) {
      var r = this._cipher;
      var n = r.blockSize;
      var o = this._iv;
      var i = this._counter;
      if (o) {
        i = this._counter = o.slice(0);
        this._iv = undefined;
      }
      var a = i.slice(0);
      r.encryptBlock(a, 0);
      i[n - 1] = i[n - 1] + 1 | 0;
      for (var s = 0; s < n; s++) {
        e[t + s] ^= a[s];
      }
    }
  }), n.Decryptor = o, n);
  e.exports = i.mode.CTR;
};
