// Module 55 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    u = n(4);
    n(26);
    n(41);
    o = (r = u).x64;
    i = o.Word;
    a = o.WordArray;
    s = r.algo;
    c = s.SHA512;
    l = s.SHA384 = c.extend({
      _doReset: function () {
        this._hash = new a.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]);
      },
      _doFinalize: function () {
        var e = c._doFinalize.call(this);
        e.sigBytes -= 16;
        return e;
      }
    });
    r.SHA384 = c._createHelper(l);
    r.HmacSHA384 = c._createHmacHelper(l);
    e.exports = u.SHA384;
  };
