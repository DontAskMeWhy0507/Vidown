// Module 100 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  t.read = function (e, t, r, n, o) {
    var i;
    var a;
    var s = o * 8 - n - 1;
    var c = (1 << s) - 1;
    var u = c >> 1;
    var l = -7;
    var d = r ? o - 1 : 0;
    var p = r ? -1 : 1;
    var f = e[t + d];
    d += p;
    i = f & (1 << -l) - 1;
    f >>= -l;
    l += s;
    for (; l > 0; l -= 8) {
      i = i * 256 + e[t + d];
      d += p;
    }
    a = i & (1 << -l) - 1;
    i >>= -l;
    l += n;
    for (; l > 0; l -= 8) {
      a = a * 256 + e[t + d];
      d += p;
    }
    if (i === 0) {
      i = 1 - u;
    } else {
      if (i === c) {
        if (a) {
          return NaN;
        } else {
          return (f ? -1 : 1) * Infinity;
        }
      }
      a += Math.pow(2, n);
      i -= u;
    }
    return (f ? -1 : 1) * a * Math.pow(2, i - n);
  };
  t.write = function (e, t, r, n, o, i) {
    var a;
    var s;
    var c;
    var u = i * 8 - o - 1;
    var l = (1 << u) - 1;
    var d = l >> 1;
    var p = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var f = n ? 0 : i - 1;
    var h = n ? 1 : -1;
    var m = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    t = Math.abs(t);
    if (isNaN(t) || t === Infinity) {
      s = isNaN(t) ? 1 : 0;
      a = l;
    } else {
      a = Math.floor(Math.log(t) / Math.LN2);
      if (t * (c = Math.pow(2, -a)) < 1) {
        a--;
        c *= 2;
      }
      if ((t += a + d >= 1 ? p / c : p * Math.pow(2, 1 - d)) * c >= 2) {
        a++;
        c /= 2;
      }
      if (a + d >= l) {
        s = 0;
        a = l;
      } else if (a + d >= 1) {
        s = (t * c - 1) * Math.pow(2, o);
        a += d;
      } else {
        s = t * Math.pow(2, d - 1) * Math.pow(2, o);
        a = 0;
      }
    }
    for (; o >= 8; o -= 8) {
      e[r + f] = s & 255;
      f += h;
      s /= 256;
    }
    a = a << o | s;
    u += o;
    for (; u > 0; u -= 8) {
      e[r + f] = a & 255;
      f += h;
      a /= 256;
    }
    e[r + f - h] |= m * 128;
  };
};
