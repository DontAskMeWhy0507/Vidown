// Module 67 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(8);
  n.pad.ZeroPadding = {
    pad: function (e, t) {
      var r = t * 4;
      e.clamp();
      e.sigBytes += r - (e.sigBytes % r || r);
    },
    unpad: function (e) {
      var t = e.words;
      var r = e.sigBytes - 1;
      for (r = e.sigBytes - 1; r >= 0; r--) {
        if (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
          e.sigBytes = r + 1;
          break;
        }
      }
    }
  };
  e.exports = n.pad.ZeroPadding;
};
