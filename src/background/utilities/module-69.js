// Module 69 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  a = r(4);
  r(8);
  o = (n = a).lib.CipherParams;
  i = n.enc.Hex;
  n.format.Hex = {
    stringify: function (e) {
      return e.ciphertext.toString(i);
    },
    parse: function (e) {
      var t = i.parse(e);
      return o.create({
        ciphertext: t
      });
    }
  };
  e.exports = a.format.Hex;
};
