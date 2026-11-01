// Module 66 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(8);
    r.pad.Iso97971 = {
      pad: function (e, t) {
        e.concat(r.lib.WordArray.create([2147483648], 1));
        r.pad.ZeroPadding.pad(e, t);
      },
      unpad: function (e) {
        r.pad.ZeroPadding.unpad(e);
        e.sigBytes--;
      }
    };
    e.exports = r.pad.Iso97971;
  };
