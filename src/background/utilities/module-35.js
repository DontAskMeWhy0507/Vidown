// Module 35 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  n = r(4);
  i = (o = n).lib.Base;
  a = o.enc.Utf8;
  e.exports = void (o.algo.HMAC = i.extend({
    init: function (e, t) {
      e = this._hasher = new e.init();
      if (typeof t == "string") {
        t = a.parse(t);
      }
      var r = e.blockSize;
      var n = r * 4;
      if (t.sigBytes > n) {
        t = e.finalize(t);
      }
      t.clamp();
      var o = this._oKey = t.clone();
      var i = this._iKey = t.clone();
      var s = o.words;
      var c = i.words;
      for (var u = 0; u < r; u++) {
        s[u] ^= 1549556828;
        c[u] ^= 909522486;
      }
      o.sigBytes = i.sigBytes = n;
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
      var r = t.finalize(e);
      t.reset();
      return t.finalize(this._oKey.clone().concat(r));
    }
  }));
};
