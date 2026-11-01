// Module 53 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  i = r(4);
  o = (n = i).lib.WordArray;
  n.enc.Base64url = {
    stringify: function (e, t = true) {
      var r = e.words;
      var n = e.sigBytes;
      var o = t ? this._safe_map : this._map;
      e.clamp();
      var i = [];
      for (var a = 0; a < n; a += 3) {
        var s = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255;
        for (var c = 0; c < 4 && a + c * 0.75 < n; c++) {
          i.push(o.charAt(s >>> (3 - c) * 6 & 63));
        }
      }
      var u = o.charAt(64);
      if (u) {
        while (i.length % 4) {
          i.push(u);
        }
      }
      return i.join("");
    },
    parse: function (e, t = true) {
      var r = e.length;
      var n = t ? this._safe_map : this._map;
      var i = this._reverseMap;
      if (!i) {
        i = this._reverseMap = [];
        for (var a = 0; a < n.length; a++) {
          i[n.charCodeAt(a)] = a;
        }
      }
      var s = n.charAt(64);
      if (s) {
        var c = e.indexOf(s);
        if (c !== -1) {
          r = c;
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
      }(e, r, i);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  };
  e.exports = i.enc.Base64url;
};
