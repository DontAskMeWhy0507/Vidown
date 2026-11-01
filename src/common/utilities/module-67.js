// Module 67 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.ZeroPadding = {
      pad: function (e, t) {
        var n = t * 4;
        e.clamp();
        e.sigBytes += n - (e.sigBytes % n || n);
      },
      unpad: function (e) {
        var t = e.words;
        var n = e.sigBytes - 1;
        for (n = e.sigBytes - 1; n >= 0; n--) {
          if (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
            e.sigBytes = n + 1;
            break;
          }
        }
      }
    };
    e.exports = r.pad.ZeroPadding;
  };
