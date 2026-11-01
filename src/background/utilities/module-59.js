// Module 59 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(8);
  n.mode.CFB = function () {
    var e = n.lib.BlockCipherMode.extend();
    function t(e, t, r, n) {
      var o;
      var i = this._iv;
      if (i) {
        o = i.slice(0);
        this._iv = undefined;
      } else {
        o = this._prevBlock;
      }
      n.encryptBlock(o, 0);
      for (var a = 0; a < r; a++) {
        e[t + a] ^= o[a];
      }
    }
    e.Encryptor = e.extend({
      processBlock: function (e, r) {
        var n = this._cipher;
        var o = n.blockSize;
        t.call(this, e, r, o, n);
        this._prevBlock = e.slice(r, r + o);
      }
    });
    e.Decryptor = e.extend({
      processBlock: function (e, r) {
        var n = this._cipher;
        var o = n.blockSize;
        var i = e.slice(r, r + o);
        t.call(this, e, r, o, n);
        this._prevBlock = i;
      }
    });
    return e;
  }();
  e.exports = n.mode.CFB;
};
