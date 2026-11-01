// Module 706 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  function n(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  e.exports = function (e, t, r, i) {
    t = t || "&";
    r = r || "=";
    var a = {};
    if (typeof e != "string" || e.length === 0) {
      return a;
    }
    var s = /\+/g;
    e = e.split(t);
    var c = 1000;
    if (i && typeof i.maxKeys == "number") {
      c = i.maxKeys;
    }
    var u = e.length;
    if (c > 0 && u > c) {
      u = c;
    }
    for (var l = 0; l < u; ++l) {
      var d;
      var p;
      var f;
      var h;
      var m = e[l].replace(s, "%20");
      var g = m.indexOf(r);
      if (g >= 0) {
        d = m.substr(0, g);
        p = m.substr(g + 1);
      } else {
        d = m;
        p = "";
      }
      f = decodeURIComponent(d);
      h = decodeURIComponent(p);
      if (n(a, f)) {
        if (o(a[f])) {
          a[f].push(h);
        } else {
          a[f] = [a[f], h];
        }
      } else {
        a[f] = h;
      }
    }
    return a;
  };
  var o = Array.isArray || function (e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  };
};
