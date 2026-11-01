// Module 55 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  var u;
  var l;
  l = r(4);
  r(26);
  r(41);
  o = (n = l).x64;
  i = o.Word;
  a = o.WordArray;
  s = n.algo;
  c = s.SHA512;
  u = s.SHA384 = c.extend({
    _doReset: function () {
      this._hash = new a.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]);
    },
    _doFinalize: function () {
      var e = c._doFinalize.call(this);
      e.sigBytes -= 16;
      return e;
    }
  });
  n.SHA384 = c._createHelper(u);
  n.HmacSHA384 = c._createHmacHelper(u);
  e.exports = l.SHA384;
};
