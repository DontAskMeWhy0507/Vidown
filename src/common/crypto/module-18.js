// Module 18 [crypto] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    i = n(4);
    o = (r = i).lib.WordArray;
    r.enc.Base64 = {
      stringify: function (e) {
        var t = e.words;
        var n = e.sigBytes;
        var r = this._map;
        e.clamp();
        var o = [];
        for (var i = 0; i < n; i += 3) {
          var a = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
          for (var s = 0; s < 4 && i + s * 0.75 < n; s++) {
            o.push(r.charAt(a >>> (3 - s) * 6 & 63));
          }
        }
        var c = r.charAt(64);
        if (c) {
          while (o.length % 4) {
            o.push(c);
          }
        }
        return o.join("");
      },
      parse: function (e) {
        var t = e.length;
        var n = this._map;
        var r = this._reverseMap;
        if (!r) {
          r = this._reverseMap = [];
          for (var i = 0; i < n.length; i++) {
            r[n.charCodeAt(i)] = i;
          }
        }
        var a = n.charAt(64);
        if (a) {
          var s = e.indexOf(a);
          if (s !== -1) {
            t = s;
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
        }(e, t, r);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    e.exports = i.enc.Base64;
  };
