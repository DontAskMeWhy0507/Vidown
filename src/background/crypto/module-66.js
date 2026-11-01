// Module 66 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(8);
  n.pad.Iso97971 = {
    pad: function (e, t) {
      e.concat(n.lib.WordArray.create([2147483648], 1));
      n.pad.ZeroPadding.pad(e, t);
    },
    unpad: function (e) {
      n.pad.ZeroPadding.unpad(e);
      e.sigBytes--;
    }
  };
  e.exports = n.pad.Iso97971;
};
