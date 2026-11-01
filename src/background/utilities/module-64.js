// Module 64 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(8);
  n.pad.AnsiX923 = {
    pad: function (e, t) {
      var r = e.sigBytes;
      var n = t * 4;
      var o = n - r % n;
      var i = r + o - 1;
      e.clamp();
      e.words[i >>> 2] |= o << 24 - i % 4 * 8;
      e.sigBytes += o;
    },
    unpad: function (e) {
      var t = e.words[e.sigBytes - 1 >>> 2] & 255;
      e.sigBytes -= t;
    }
  };
  e.exports = n.pad.Ansix923;
};
