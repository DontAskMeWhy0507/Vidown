// Module 38 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    "use strict";

    function r() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var n = typeof Symbol == "function" ? Symbol : {};
      var i = n.iterator || "@@iterator";
      var a = n.toStringTag || "@@toStringTag";
      function s(n, r, i, a) {
        var s = r && r.prototype instanceof l ? r : l;
        var u = Object.create(s.prototype);
        o(u, "_invoke", function (n, r, o) {
          var i;
          var a;
          var s;
          var l = 0;
          var u = o || [];
          var d = false;
          var f = {
            p: 0,
            n: 0,
            v: e,
            a: p,
            f: p.bind(e, 4),
            d: function (t, n) {
              i = t;
              a = 0;
              s = e;
              f.n = n;
              return c;
            }
          };
          function p(n, r) {
            a = n;
            s = r;
            t = 0;
            for (; !d && l && !o && t < u.length; t++) {
              var o;
              var i = u[t];
              var p = f.p;
              var h = i[2];
              if (n > 3) {
                if (o = h === r) {
                  s = i[(a = i[4]) ? 5 : (a = 3, 3)];
                  i[4] = i[5] = e;
                }
              } else if (i[0] <= p) {
                if (o = n < 2 && p < i[1]) {
                  a = 0;
                  f.v = r;
                  f.n = i[1];
                } else if (p < h && (o = n < 3 || i[0] > r || r > h)) {
                  i[4] = n;
                  i[5] = r;
                  f.n = h;
                  a = 0;
                }
              }
            }
            if (o || n > 1) {
              return c;
            }
            d = true;
            throw r;
          }
          return function (o, u, h) {
            if (l > 1) {
              throw TypeError("Generator is already running");
            }
            if (d && u === 1) {
              p(u, h);
            }
            a = u;
            s = h;
            while ((t = a < 2 ? e : s) || !d) {
              if (!i) {
                if (a) {
                  if (a < 3) {
                    if (a > 1) {
                      f.n = -1;
                    }
                    p(a, s);
                  } else {
                    f.n = s;
                  }
                } else {
                  f.v = s;
                }
              }
              try {
                l = 2;
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
                } else if ((t = (d = f.n < 0) ? s : n.call(r, f)) !== c) {
                  break;
                }
              } catch (t) {
                i = e;
                a = 1;
                s = t;
              } finally {
                l = 1;
              }
            }
            return {
              value: t,
              done: d
            };
          };
        }(n, i, a), true);
        return u;
      }
      var c = {};
      function l() {}
      function u() {}
      function d() {}
      t = Object.getPrototypeOf;
      var f = [][i] ? t(t([][i]())) : (o(t = {}, i, function () {
        return this;
      }), t);
      var p = d.prototype = l.prototype = Object.create(f);
      function h(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, d);
        } else {
          e.__proto__ = d;
          o(e, a, "GeneratorFunction");
        }
        e.prototype = Object.create(p);
        return e;
      }
      u.prototype = d;
      o(p, "constructor", d);
      o(d, "constructor", u);
      u.displayName = "GeneratorFunction";
      o(d, a, "GeneratorFunction");
      o(p);
      o(p, a, "Generator");
      o(p, i, function () {
        return this;
      });
      o(p, "toString", function () {
        return "[object Generator]";
      });
      return (r = function () {
        return {
          w: s,
          m: h
        };
      })();
    }
    function o(e, t, n, r) {
      var i = Object.defineProperty;
      try {
        i({}, "", {});
      } catch (e) {
        i = 0;
      }
      (o = function (e, t, n, r) {
        function a(t, n) {
          o(e, t, function (e) {
            return this._invoke(t, n, e);
          });
        }
        if (t) {
          if (i) {
            i(e, t, {
              value: n,
              enumerable: !r,
              configurable: !r,
              writable: !r
            });
          } else {
            e[t] = n;
          }
        } else {
          a("next", 0);
          a("throw", 1);
          a("return", 2);
        }
      })(e, t, n, r);
    }
    n.d(t, "a", function () {
      return a;
    });
    function i(e, t, n, r) {
      return new (n ||= Promise)(function (o, i) {
        function a(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          if (e.done) {
            o(e.value);
          } else {
            (t = e.value, t instanceof n ? t : new n(function (e) {
              e(t);
            })).then(a, s);
          }
        }
        c((r = r.apply(e, t || [])).next());
      });
    }
    function a(e) {
      return i(this, undefined, undefined, r().m(function t() {
        var n;
        return r().w(function (t) {
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
                n = t.v;
                console.log("Caught", n);
              case 3:
                return t.a(2);
            }
          }
        }, t, null, [[0, 2]]);
      }));
    }
  };
