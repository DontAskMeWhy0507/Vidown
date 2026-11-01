// Module 99 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  t.byteLength = function (e) {
    var t = u(e);
    var r = t[0];
    var n = t[1];
    return (r + n) * 3 / 4 - n;
  };
  t.toByteArray = function (e) {
    var t;
    var r;
    var n = u(e);
    var a = n[0];
    var s = n[1];
    var c = new i(function (e, t, r) {
      return (t + r) * 3 / 4 - r;
    }(0, a, s));
    var l = 0;
    var d = s > 0 ? a - 4 : a;
    for (r = 0; r < d; r += 4) {
      t = o[e.charCodeAt(r)] << 18 | o[e.charCodeAt(r + 1)] << 12 | o[e.charCodeAt(r + 2)] << 6 | o[e.charCodeAt(r + 3)];
      c[l++] = t >> 16 & 255;
      c[l++] = t >> 8 & 255;
      c[l++] = t & 255;
    }
    if (s === 2) {
      t = o[e.charCodeAt(r)] << 2 | o[e.charCodeAt(r + 1)] >> 4;
      c[l++] = t & 255;
    }
    if (s === 1) {
      t = o[e.charCodeAt(r)] << 10 | o[e.charCodeAt(r + 1)] << 4 | o[e.charCodeAt(r + 2)] >> 2;
      c[l++] = t >> 8 & 255;
      c[l++] = t & 255;
    }
    return c;
  };
  t.fromByteArray = function (e) {
    var t;
    var r = e.length;
    var o = r % 3;
    var i = [];
    for (var a = 0, s = r - o; a < s; a += 16383) {
      i.push(l(e, a, a + 16383 > s ? s : a + 16383));
    }
    if (o === 1) {
      t = e[r - 1];
      i.push(n[t >> 2] + n[t << 4 & 63] + "==");
    } else if (o === 2) {
      t = (e[r - 2] << 8) + e[r - 1];
      i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=");
    }
    return i.join("");
  };
  var n = [];
  var o = [];
  var i = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var s = 0, c = a.length; s < c; ++s) {
    n[s] = a[s];
    o[a.charCodeAt(s)] = s;
  }
  function u(e) {
    var t = e.length;
    if (t % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var r = e.indexOf("=");
    if (r === -1) {
      r = t;
    }
    return [r, r === t ? 0 : 4 - r % 4];
  }
  function l(e, t, r) {
    var o;
    var i;
    var a = [];
    for (var s = t; s < r; s += 3) {
      o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255);
      a.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[i & 63]);
    }
    return a.join("");
  }
  o["-".charCodeAt(0)] = 62;
  o["_".charCodeAt(0)] = 63;
};
