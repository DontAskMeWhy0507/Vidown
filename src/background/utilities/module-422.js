// Module 422 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = "Function.prototype.bind called on incompatible ";
  var o = Object.prototype.toString;
  var i = Math.max;
  function a(e, t) {
    var r = [];
    for (var n = 0; n < e.length; n += 1) {
      r[n] = e[n];
    }
    for (var o = 0; o < t.length; o += 1) {
      r[o + e.length] = t[o];
    }
    return r;
  }
  function s(e, t) {
    var r = [];
    for (var n = t || 0, o = 0; n < e.length; n += 1, o += 1) {
      r[o] = e[n];
    }
    return r;
  }
  function c(e, t) {
    var r = "";
    for (var n = 0; n < e.length; n += 1) {
      r += e[n];
      if (n + 1 < e.length) {
        r += t;
      }
    }
    return r;
  }
  e.exports = function (e) {
    var t = this;
    if (typeof t != "function" || o.apply(t) !== "[object Function]") {
      throw new TypeError(n + t);
    }
    var r;
    var u = s(arguments, 1);
    var l = function () {
      if (this instanceof r) {
        var n = t.apply(this, a(u, arguments));
        if (Object(n) === n) {
          return n;
        } else {
          return this;
        }
      }
      return t.apply(e, a(u, arguments));
    };
    for (var d = i(0, t.length - u.length), p = [], f = 0; f < d; f++) {
      p[f] = "$" + f;
    }
    r = Function("binder", "return function (" + c(p, ",") + "){ return binder.apply(this,arguments); }")(l);
    if (t.prototype) {
      function h() {}
      h.prototype = t.prototype;
      r.prototype = new h();
      h.prototype = null;
    }
    return r;
  };
};
