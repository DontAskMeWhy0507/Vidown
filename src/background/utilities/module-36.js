// Module 36 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (t) {
    if (t === undefined || !t.version || t.version.indexOf("v0.") === 0 || t.version.indexOf("v1.") === 0 && t.version.indexOf("v1.8.") !== 0) {
      e.exports = {
        nextTick: function (e, r, n, o) {
          if (typeof e != "function") {
            throw new TypeError("\"callback\" argument must be a function");
          }
          var i;
          var a;
          var s = arguments.length;
          switch (s) {
            case 0:
            case 1:
              return t.nextTick(e);
            case 2:
              return t.nextTick(function () {
                e.call(null, r);
              });
            case 3:
              return t.nextTick(function () {
                e.call(null, r, n);
              });
            case 4:
              return t.nextTick(function () {
                e.call(null, r, n, o);
              });
            default:
              i = new Array(s - 1);
              a = 0;
              while (a < i.length) {
                i[a++] = arguments[a];
              }
              return t.nextTick(function () {
                e.apply(null, i);
              });
          }
        }
      };
    } else {
      e.exports = t;
    }
  }).call(this, r(32));
};
