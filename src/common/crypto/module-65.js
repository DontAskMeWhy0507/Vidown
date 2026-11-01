// Module 65 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.Iso10126 = {
      pad: function (e, t) {
        var n = t * 4;
        var o = n - e.sigBytes % n;
        e.concat(r.lib.WordArray.random(o - 1)).concat(r.lib.WordArray.create([o << 24], 1));
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    };
    e.exports = r.pad.Iso10126;
  };
