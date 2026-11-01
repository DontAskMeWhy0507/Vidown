// Module 54 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  c = r(4);
  r(34);
  o = (n = c).lib.WordArray;
  i = n.algo;
  a = i.SHA256;
  s = i.SHA224 = a.extend({
    _doReset: function () {
      this._hash = new o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function () {
      var e = a._doFinalize.call(this);
      e.sigBytes -= 4;
      return e;
    }
  });
  n.SHA224 = a._createHelper(s);
  n.HmacSHA224 = a._createHmacHelper(s);
  e.exports = c.SHA224;
};
