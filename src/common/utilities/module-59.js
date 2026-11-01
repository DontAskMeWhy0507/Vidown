// Module 59 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.mode.CFB = function () {
      var e = r.lib.BlockCipherMode.extend();
      function t(e, t, n, r) {
        var o;
        var i = this._iv;
        if (i) {
          o = i.slice(0);
          this._iv = undefined;
        } else {
          o = this._prevBlock;
        }
        r.encryptBlock(o, 0);
        for (var a = 0; a < n; a++) {
          e[t + a] ^= o[a];
        }
      }
      e.Encryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          t.call(this, e, n, o, r);
          this._prevBlock = e.slice(n, n + o);
        }
      });
      e.Decryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          var i = e.slice(n, n + o);
          t.call(this, e, n, o, r);
          this._prevBlock = i;
        }
      });
      return e;
    }();
    e.exports = r.mode.CFB;
  };
