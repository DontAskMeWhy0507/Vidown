// Module 64 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.AnsiX923 = {
      pad: function (e, t) {
        var n = e.sigBytes;
        var r = t * 4;
        var o = r - n % r;
        var i = n + o - 1;
        e.clamp();
        e.words[i >>> 2] |= o << 24 - i % 4 * 8;
        e.sigBytes += o;
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    };
    e.exports = r.pad.Ansix923;
  };
