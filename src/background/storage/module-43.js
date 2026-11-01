// Module 43 [storage] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(1);
  var o = r(5);
  var i = r(76);
  var a = r.n(i);
  function s() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e;
    var t;
    var r = typeof Symbol == "function" ? Symbol : {};
    var n = r.iterator || "@@iterator";
    var o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var s = n && n.prototype instanceof u ? n : u;
      var l = Object.create(s.prototype);
      c(l, "_invoke", function (r, n, o) {
        var i;
        var s;
        var c;
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
            s = 0;
            c = e;
            p.n = r;
            return a;
          }
        };
        function f(r, n) {
          s = r;
          c = n;
          t = 0;
          for (; !d && u && !o && t < l.length; t++) {
            var o;
            var i = l[t];
            var f = p.p;
            var h = i[2];
            if (r > 3) {
              if (o = h === n) {
                c = i[(s = i[4]) ? 5 : (s = 3, 3)];
                i[4] = i[5] = e;
              }
            } else if (i[0] <= f) {
              if (o = r < 2 && f < i[1]) {
                s = 0;
                p.v = n;
                p.n = i[1];
              } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                i[4] = r;
                i[5] = n;
                p.n = h;
                s = 0;
              }
            }
          }
          if (o || r > 1) {
            return a;
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
          s = l;
          c = h;
          while ((t = s < 2 ? e : c) || !d) {
            if (!i) {
              if (s) {
                if (s < 3) {
                  if (s > 1) {
                    p.n = -1;
                  }
                  f(s, c);
                } else {
                  p.n = c;
                }
              } else {
                p.v = c;
              }
            }
            try {
              u = 2;
              if (i) {
                if (!s) {
                  o = "next";
                }
                if (t = i[o]) {
                  if (!(t = t.call(i, c))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!t.done) {
                    return t;
                  }
                  c = t.value;
                  if (s < 2) {
                    s = 0;
                  }
                } else {
                  if (s === 1 && (t = i.return)) {
                    t.call(i);
                  }
                  if (s < 2) {
                    c = TypeError("The iterator does not provide a '" + o + "' method");
                    s = 1;
                  }
                }
                i = e;
              } else if ((t = (d = p.n < 0) ? c : r.call(n, p)) !== a) {
                break;
              }
            } catch (t) {
              i = e;
              s = 1;
              c = t;
            } finally {
              u = 1;
            }
          }
          return {
            value: t,
            done: d
          };
        };
      }(r, o, i), true);
      return l;
    }
    var a = {};
    function u() {}
    function l() {}
    function d() {}
    t = Object.getPrototypeOf;
    var p = [][n] ? t(t([][n]())) : (c(t = {}, n, function () {
      return this;
    }), t);
    var f = d.prototype = u.prototype = Object.create(p);
    function h(e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, d);
      } else {
        e.__proto__ = d;
        c(e, o, "GeneratorFunction");
      }
      e.prototype = Object.create(f);
      return e;
    }
    l.prototype = d;
    c(f, "constructor", d);
    c(d, "constructor", l);
    l.displayName = "GeneratorFunction";
    c(d, o, "GeneratorFunction");
    c(f);
    c(f, o, "Generator");
    c(f, n, function () {
      return this;
    });
    c(f, "toString", function () {
      return "[object Generator]";
    });
    return (s = function () {
      return {
        w: i,
        m: h
      };
    })();
  }
  function c(e, t, r, n) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (e) {
      o = 0;
    }
    (c = function (e, t, r, n) {
      function i(t, r) {
        c(e, t, function (e) {
          return this._invoke(t, r, e);
        });
      }
      if (t) {
        if (o) {
          o(e, t, {
            value: r,
            enumerable: !n,
            configurable: !n,
            writable: !n
          });
        } else {
          e[t] = r;
        }
      } else {
        i("next", 0);
        i("throw", 1);
        i("return", 2);
      }
    })(e, t, r, n);
  }
  function u(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var o;
        var i;
        var a;
        var s = [];
        var c = true;
        var u = false;
        try {
          i = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            c = false;
          } else {
            for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = true);
          }
        } catch (e) {
          u = true;
          o = e;
        } finally {
          try {
            if (!c && r.return != null && (a = r.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw o;
            }
          }
        }
        return s;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return l(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return l(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function l(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function d(e, t, r, n) {
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
  var p = new Date();
  if (p.getMonth() >= 8) {
    5;
    var f = p.getDate();
    if (f >= 8) {
      2;
    }
    if (f >= 11) {
      1;
    }
  }
  class h {
    constructor() {
      this.tests = {
        youtubeMobileonboarding: {
          groups: ["A", null, null, null, null, null, null, null, null, null, "B", null, null, null, null, null, null, null, null, null],
          buckets: 20
        },
        setCCAsDefaultonboarding: {
          groups: ["A", ...Array(49).fill(null), ...Array(49).fill(null), "B"],
          buckets: 100
        },
        accountOnboardingonboarding: {
          groups: ["A"],
          buckets: 1
        }
      };
      this.serverRuleLoadPromise = this.loadTestsFromServer();
      this.cookies = {};
      this.forced = {};
    }
    loadTestsFromServer() {
      return d(this, undefined, undefined, s().m(function e() {
        return s().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                return e.a(2, new Promise(e => {
                  chrome.storage.local.get(n.n, t => d(this, undefined, undefined, s().m(function r() {
                    var o;
                    return s().w(function (r) {
                      while (true) {
                        switch (r.n) {
                          case 0:
                            if ((o = t[n.n] || {}).ab_test_data) {
                              Object.entries(o.ab_test_data).forEach(e => {
                                var t = u(e, 2);
                                var r = t[0];
                                var n = t[1];
                                if (n.groups && n.buckets) {
                                  this.tests[r] = n;
                                }
                              });
                            }
                            e();
                          case 1:
                            return r.a(2);
                        }
                      }
                    }, r, this);
                  })));
                }));
            }
          }
        }, e, this);
      }));
    }
    processRequest(e) {
      var t = e.testName;
      return d(this, undefined, undefined, s().m(function e() {
        return s().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                if (t) {
                  e.n = 1;
                  break;
                }
                return e.a(2, Promise.reject("No test name"));
              case 1:
                if (!this.serverRuleLoadPromise) {
                  e.n = 3;
                  break;
                }
                e.n = 2;
                return this.serverRuleLoadPromise;
              case 2:
                this.serverRuleLoadPromise = null;
              case 3:
                return e.a(2, this.getCookies().then(this.getTest.bind(this, t)));
            }
          }
        }, e, this);
      }));
    }
    getCookies() {
      return new Promise((e, t) => {
        chrome.cookies.getAll({
          url: "https://coccoc.com"
        }, r => {
          var n = r.find(e => e.name === "uid");
          var o = r.find(e => e.name === "vid");
          var i = r.find(e => e.name === "forceAB");
          var a = r.find(e => e.name === "idCookie");
          if (n && n.value) {
            this.cookies = {
              uid: n.value,
              idCookie: a == null ? undefined : a.value,
              vid: o == null ? undefined : o.value
            };
            if (i && i.value) {
              this.cookies.forceAB = i.value;
              try {
                var s = decodeURIComponent(this.cookies.forceAB);
                this.forced = h.parseForcedTests(s);
              } catch (e) {
                console.warn("Cannot parse forced tests");
              }
            }
            e();
          } else {
            t("No uid cookie");
          }
        });
      });
    }
    getTest(e) {
      var t = this.forced[e];
      if (t !== undefined) {
        var r = this.tests[e] ? this.tests[e].groups[t] : null;
        return Promise.resolve({
          group: t,
          groupName: r
        });
      }
      var n = this.tests[e];
      if (!n || n.time && n.time.end && (Date.parse(n.time.end) < Date.now() || n.time && n.time.start && Date.parse(n.time.start) > Date.now())) {
        return Promise.resolve({
          group: null
        });
      }
      var o = this.cookies.vid;
      var i = h.generateGroup(n.groups, n.buckets, o, e);
      h.generateGroup(n.groups, n.buckets, this.cookies.uid, e);
      if (!i) {
        return Promise.resolve({
          group: null
        });
      }
      var a = n.groups.indexOf(i);
      return Promise.resolve({
        group: a,
        groupName: i
      });
    }
    static generateGroup(e, t, r, n = "") {
      var i = e[parseInt(new a.a().update(r + String(n)).digest("hex").slice(-12), 16) % t] || null;
      if (n === "setCCAsDefaultonboarding" && i) {
        o.a.log("Onboarding.setCCAsDefault.Variant", {
          A: 1,
          B: 2,
          C: 3,
          D: 4
        }[i]);
      }
      return i;
    }
    static parseForcedTests(e) {
      return (e || "").split(",").filter(Boolean).reduce(function (e, t) {
        var r = t.split(":");
        e[r[0]] = Number(r[1]);
        return e;
      }, {});
    }
    checkIsNewUser(e = 1) {
      var t = decodeURIComponent(this.cookies.idCookie || "");
      if (t.match(/\d+:\d+:\w+$/)) {
        return (Date.now() - Number(new Date(Number(t.split(":")[1]) * 1000 * 86400))) / 1000 / 86400 < e;
      } else {
        return null;
      }
    }
  }
  t.a = new h();
};
