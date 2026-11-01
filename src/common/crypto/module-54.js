// Module 54 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    c = n(4);
    n(34);
    o = (r = c).lib.WordArray;
    i = r.algo;
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
    r.SHA224 = a._createHelper(s);
    r.HmacSHA224 = a._createHmacHelper(s);
    e.exports = c.SHA224;
  };
