// Module 38 [messaging] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  function n() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e;
    var t;
    var r = typeof Symbol == "function" ? Symbol : {};
    var i = r.iterator || "@@iterator";
    var a = r.toStringTag || "@@toStringTag";
    function s(r, n, i, a) {
      var s = n && n.prototype instanceof u ? n : u;
      var l = Object.create(s.prototype);
      o(l, "_invoke", function (r, n, o) {
        var i;
        var a;
        var s;
        var u = 0;
        var l = o || [];
        var d = false;
        var p = {
          p: 0,
          n: 0,
          v: e,
          a: f,
          f: f.bind(e, 4),
          d: function (t, r) {
            i = t;
            a = 0;
            s = e;
            p.n = r;
            return c;
          }
        };
        function f(r, n) {
          a = r;
          s = n;
          t = 0;
          for (; !d && u && !o && t < l.length; t++) {
            var o;
            var i = l[t];
            var f = p.p;
            var h = i[2];
            if (r > 3) {
              if (o = h === n) {
                s = i[(a = i[4]) ? 5 : (a = 3, 3)];
                i[4] = i[5] = e;
              }
            } else if (i[0] <= f) {
              if (o = r < 2 && f < i[1]) {
                a = 0;
                p.v = n;
                p.n = i[1];
              } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                i[4] = r;
                i[5] = n;
                p.n = h;
                a = 0;
              }
            }
          }
          if (o || r > 1) {
            return c;
          }
          d = true;
          throw n;
        }
        return function (o, l, h) {
          if (u > 1) {
            throw TypeError("Generator is already running");
          }
          if (d && l === 1) {
            f(l, h);
          }
          a = l;
          s = h;
          while ((t = a < 2 ? e : s) || !d) {
            if (!i) {
              if (a) {
                if (a < 3) {
                  if (a > 1) {
                    p.n = -1;
                  }
                  f(a, s);
                } else {
                  p.n = s;
                }
              } else {
                p.v = s;
              }
            }
            try {
              u = 2;
              if (i) {
                if (!a) {
                  o = "next";
                }
                if (t = i[o]) {
                  if (!(t = t.call(i, s))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!t.done) {
                    return t;
                  }
                  s = t.value;
                  if (a < 2) {
                    a = 0;
                  }
                } else {
                  if (a === 1 && (t = i.return)) {
                    t.call(i);
                  }
                  if (a < 2) {
                    s = TypeError("The iterator does not provide a '" + o + "' method");
                    a = 1;
                  }
                }
                i = e;
              } else if ((t = (d = p.n < 0) ? s : r.call(n, p)) !== c) {
                break;
              }
            } catch (t) {
              i = e;
              a = 1;
              s = t;
            } finally {
              u = 1;
            }
          }
          return {
            value: t,
            done: d
          };
        };
      }(r, i, a), true);
      return l;
    }
    var c = {};
    function u() {}
    function l() {}
    function d() {}
    t = Object.getPrototypeOf;
    var p = [][i] ? t(t([][i]())) : (o(t = {}, i, function () {
      return this;
    }), t);
    var f = d.prototype = u.prototype = Object.create(p);
    function h(e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, d);
      } else {
        e.__proto__ = d;
        o(e, a, "GeneratorFunction");
      }
      e.prototype = Object.create(f);
      return e;
    }
    l.prototype = d;
    o(f, "constructor", d);
    o(d, "constructor", l);
    l.displayName = "GeneratorFunction";
    o(d, a, "GeneratorFunction");
    o(f);
    o(f, a, "Generator");
    o(f, i, function () {
      return this;
    });
    o(f, "toString", function () {
      return "[object Generator]";
    });
    return (n = function () {
      return {
        w: s,
        m: h
      };
    })();
  }
  function o(e, t, r, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    (o = function (e, t, r, n) {
      function a(t, r) {
        o(e, t, function (e) {
          return this._invoke(t, r, e);
        });
      }
      if (t) {
        if (i) {
          i(e, t, {
            value: r,
            enumerable: !n,
            configurable: !n,
            writable: !n
          });
        } else {
          e[t] = r;
        }
      } else {
        a("next", 0);
        a("throw", 1);
        a("return", 2);
      }
    })(e, t, r, n);
  }
  r.d(t, "a", function () {
    return a;
  });
  function i(e, t, r, n) {
    return new (r ||= Promise)(function (o, i) {
      function a(e) {
        try {
          c(n.next(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          o(e.value);
        } else {
          (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((n = n.apply(e, t || [])).next());
    });
  }
  function a(e) {
    return i(this, undefined, undefined, n().m(function t() {
      var r;
      return n().w(function (t) {
        while (true) {
          switch (t.p = t.n) {
            case 0:
              t.p = 0;
              t.n = 1;
              return chrome.runtime.sendMessage(e);
            case 1:
              t.n = 3;
              break;
            case 2:
              t.p = 2;
              r = t.v;
              console.log("Caught", r);
            case 3:
              return t.a(2);
          }
        }
      }, t, null, [[0, 2]]);
    }));
  }
};
