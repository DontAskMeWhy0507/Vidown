// Module 106 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e, t) {
    (function (e, r) {
      "use strict";

      if (!e.setImmediate) {
        var n;
        var o;
        var i;
        var a;
        var s;
        var c = 1;
        var u = {};
        var l = false;
        var d = e.document;
        var p = Object.getPrototypeOf && Object.getPrototypeOf(e);
        p = p && p.setTimeout ? p : e;
        if ({}.toString.call(e.process) === "[object process]") {
          n = function (e) {
            t.nextTick(function () {
              h(e);
            });
          };
        } else if (!function () {
          if (e.postMessage && !e.importScripts) {
            var t = true;
            var r = e.onmessage;
            e.onmessage = function () {
              t = false;
            };
            e.postMessage("", "*");
            e.onmessage = r;
            return t;
          }
        }()) {
          if (e.MessageChannel) {
            (i = new MessageChannel()).port1.onmessage = function (e) {
              h(e.data);
            };
            n = function (e) {
              i.port2.postMessage(e);
            };
          } else if (d && "onreadystatechange" in d.createElement("script")) {
            o = d.documentElement;
            n = function (e) {
              var t = d.createElement("script");
              t.onreadystatechange = function () {
                h(e);
                t.onreadystatechange = null;
                o.removeChild(t);
                t = null;
              };
              o.appendChild(t);
            };
          } else {
            n = function (e) {
              setTimeout(h, 0, e);
            };
          }
        } else {
          a = "setImmediate$" + Math.random() + "$";
          s = function (t) {
            if (t.source === e && typeof t.data == "string" && t.data.indexOf(a) === 0) {
              h(+t.data.slice(a.length));
            }
          };
          if (e.addEventListener) {
            e.addEventListener("message", s, false);
          } else {
            e.attachEvent("onmessage", s);
          }
          n = function (t) {
            e.postMessage(a + t, "*");
          };
        }
        p.setImmediate = function (e) {
          if (typeof e != "function") {
            e = new Function("" + e);
          }
          for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) {
            t[r] = arguments[r + 1];
          }
          var o = {
            callback: e,
            args: t
          };
          u[c] = o;
          n(c);
          return c++;
        };
        p.clearImmediate = f;
      }
      function f(e) {
        delete u[e];
      }
      function h(e) {
        if (l) {
          setTimeout(h, 0, e);
        } else {
          var t = u[e];
          if (t) {
            l = true;
            try {
              (function (e) {
                var t = e.callback;
                var r = e.args;
                switch (r.length) {
                  case 0:
                    t();
                    break;
                  case 1:
                    t(r[0]);
                    break;
                  case 2:
                    t(r[0], r[1]);
                    break;
                  case 3:
                    t(r[0], r[1], r[2]);
                    break;
                  default:
                    t.apply(undefined, r);
                }
              })(t);
            } finally {
              f(e);
              l = false;
            }
          }
        }
      }
    })(typeof self == "undefined" ? e === undefined ? this : e : self);
  }).call(this, r(13), r(32));
};
