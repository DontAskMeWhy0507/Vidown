// Module 18 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  i = r(4);
  o = (n = i).lib.WordArray;
  n.enc.Base64 = {
    stringify: function (e) {
      var t = e.words;
      var r = e.sigBytes;
      var n = this._map;
      e.clamp();
      var o = [];
      for (var i = 0; i < r; i += 3) {
        var a = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
        for (var s = 0; s < 4 && i + s * 0.75 < r; s++) {
          o.push(n.charAt(a >>> (3 - s) * 6 & 63));
        }
      }
      var c = n.charAt(64);
      if (c) {
        while (o.length % 4) {
          o.push(c);
        }
      }
      return o.join("");
    },
    parse: function (e) {
      var t = e.length;
      var r = this._map;
      var n = this._reverseMap;
      if (!n) {
        n = this._reverseMap = [];
        for (var i = 0; i < r.length; i++) {
          n[r.charCodeAt(i)] = i;
        }
      }
      var a = r.charAt(64);
      if (a) {
        var s = e.indexOf(a);
        if (s !== -1) {
          t = s;
        }
      }
      return function (e, t, r) {
        var n = [];
        var i = 0;
        for (var a = 0; a < t; a++) {
          if (a % 4) {
            var s = r[e.charCodeAt(a - 1)] << a % 4 * 2;
            var c = r[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
            var u = s | c;
            n[i >>> 2] |= u << 24 - i % 4 * 8;
            i++;
          }
        }
        return o.create(n, i);
      }(e, t, n);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  e.exports = i.enc.Base64;
};
