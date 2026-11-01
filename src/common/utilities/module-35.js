// Module 35 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    r = n(4);
    i = (o = r).lib.Base;
    a = o.enc.Utf8;
    e.exports = void (o.algo.HMAC = i.extend({
      init: function (e, t) {
        e = this._hasher = new e.init();
        if (typeof t == "string") {
          t = a.parse(t);
        }
        var n = e.blockSize;
        var r = n * 4;
        if (t.sigBytes > r) {
          t = e.finalize(t);
        }
        t.clamp();
        var o = this._oKey = t.clone();
        var i = this._iKey = t.clone();
        var s = o.words;
        var c = i.words;
        for (var l = 0; l < n; l++) {
          s[l] ^= 1549556828;
          c[l] ^= 909522486;
        }
        o.sigBytes = i.sigBytes = r;
        this.reset();
      },
      reset: function () {
        var e = this._hasher;
        e.reset();
        e.update(this._iKey);
      },
      update: function (e) {
        this._hasher.update(e);
        return this;
      },
      finalize: function (e) {
        var t = this._hasher;
        var n = t.finalize(e);
        t.reset();
        return t.finalize(this._oKey.clone().concat(n));
      }
    }));
  };
