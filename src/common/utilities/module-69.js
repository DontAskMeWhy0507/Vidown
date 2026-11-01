// Module 69 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    a = n(4);
    n(8);
    o = (r = a).lib.CipherParams;
    i = r.enc.Hex;
    r.format.Hex = {
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
