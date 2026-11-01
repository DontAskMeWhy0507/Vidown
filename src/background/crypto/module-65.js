// Module 65 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(8);
  n.pad.Iso10126 = {
    pad: function (e, t) {
      var r = t * 4;
      var o = r - e.sigBytes % r;
      e.concat(n.lib.WordArray.random(o - 1)).concat(n.lib.WordArray.create([o << 24], 1));
    },
    unpad: function (e) {
      var t = e.words[e.sigBytes - 1 >>> 2] & 255;
      e.sigBytes -= t;
    }
  };
  e.exports = n.pad.Iso10126;
};
