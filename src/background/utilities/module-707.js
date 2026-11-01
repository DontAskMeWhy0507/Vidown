// Module 707 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  function n(e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        if (e) {
          return "true";
        } else {
          return "false";
        }
      case "number":
        if (isFinite(e)) {
          return e;
        } else {
          return "";
        }
      default:
        return "";
    }
  }
  e.exports = function (e, t, r, s) {
    t = t || "&";
    r = r || "=";
    if (e === null) {
      e = undefined;
    }
    if (typeof e == "object") {
      return i(a(e), function (a) {
        var s = encodeURIComponent(n(a)) + r;
        if (o(e[a])) {
          return i(e[a], function (e) {
            return s + encodeURIComponent(n(e));
          }).join(t);
        } else {
          return s + encodeURIComponent(n(e[a]));
        }
      }).join(t);
    } else if (s) {
      return encodeURIComponent(n(s)) + r + encodeURIComponent(n(e));
    } else {
      return "";
    }
  };
  var o = Array.isArray || function (e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  };
  function i(e, t) {
    if (e.map) {
      return e.map(t);
    }
    var r = [];
    for (var n = 0; n < e.length; n++) {
      r.push(t(e[n], n));
    }
    return r;
  }
  var a = Object.keys || function (e) {
    var t = [];
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        t.push(r);
      }
    }
    return t;
  };
};
