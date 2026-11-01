// Module 52 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  (function () {
    var e = n;
    var t = e.lib.WordArray;
    var r = e.enc;
    function o(e) {
      return e << 8 & -16711936 | e >>> 8 & 16711935;
    }
    r.Utf16 = r.Utf16BE = {
      stringify: function (e) {
        var t = e.words;
        for (var r = e.sigBytes, n = [], o = 0; o < r; o += 2) {
          var i = t[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
          n.push(String.fromCharCode(i));
        }
        return n.join("");
      },
      parse: function (e) {
        for (var r = e.length, n = [], o = 0; o < r; o++) {
          n[o >>> 1] |= e.charCodeAt(o) << 16 - o % 2 * 16;
        }
        return t.create(n, r * 2);
      }
    };
    r.Utf16LE = {
      stringify: function (e) {
        var t = e.words;
        for (var r = e.sigBytes, n = [], i = 0; i < r; i += 2) {
          var a = o(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
          n.push(String.fromCharCode(a));
        }
        return n.join("");
      },
      parse: function (e) {
        for (var r = e.length, n = [], i = 0; i < r; i++) {
          n[i >>> 1] |= o(e.charCodeAt(i) << 16 - i % 2 * 16);
        }
        return t.create(n, r * 2);
      }
    };
  })();
  e.exports = n.enc.Utf16;
};
