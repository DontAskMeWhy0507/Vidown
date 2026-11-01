// Module 53 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    o = (r = i).lib.WordArray;
    r.enc.Base64url = {
      stringify: function (e, t = true) {
        var n = e.words;
        var r = e.sigBytes;
        var o = t ? this._safe_map : this._map;
        e.clamp();
        var i = [];
        for (var a = 0; a < r; a += 3) {
          var s = (n[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (n[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | n[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255;
          for (var c = 0; c < 4 && a + c * 0.75 < r; c++) {
            i.push(o.charAt(s >>> (3 - c) * 6 & 63));
          }
        }
        var l = o.charAt(64);
        if (l) {
          while (i.length % 4) {
            i.push(l);
          }
        }
        return i.join("");
      },
      parse: function (e, t = true) {
        var n = e.length;
        var r = t ? this._safe_map : this._map;
        var i = this._reverseMap;
        if (!i) {
          i = this._reverseMap = [];
          for (var a = 0; a < r.length; a++) {
            i[r.charCodeAt(a)] = a;
          }
        }
        var s = r.charAt(64);
        if (s) {
          var c = e.indexOf(s);
          if (c !== -1) {
            n = c;
          }
        }
        return function (e, t, n) {
          var r = [];
          var i = 0;
          for (var a = 0; a < t; a++) {
            if (a % 4) {
              var s = n[e.charCodeAt(a - 1)] << a % 4 * 2;
              var c = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
              var l = s | c;
              r[i >>> 2] |= l << 24 - i % 4 * 8;
              i++;
            }
          }
          return o.create(r, i);
        }(e, n, i);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    };
    e.exports = i.enc.Base64url;
  };
