// Module 33 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (e) {
    var n = r(22);
    var o = r(7);
    var i = r(0);
    var a = r(1);
    var s = r(43);
    function c() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var r = typeof Symbol == "function" ? Symbol : {};
      var n = r.iterator || "@@iterator";
      var o = r.toStringTag || "@@toStringTag";
      function i(r, n, o, i) {
        var c = n && n.prototype instanceof s ? n : s;
        var l = Object.create(c.prototype);
        u(l, "_invoke", function (r, n, o) {
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
      function s() {}
      function l() {}
      function d() {}
      t = Object.getPrototypeOf;
      var p = [][n] ? t(t([][n]())) : (u(t = {}, n, function () {
        return this;
      }), t);
      var f = d.prototype = s.prototype = Object.create(p);
      function h(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, d);
        } else {
          e.__proto__ = d;
          u(e, o, "GeneratorFunction");
        }
        e.prototype = Object.create(f);
        return e;
      }
      l.prototype = d;
      u(f, "constructor", d);
      u(d, "constructor", l);
      l.displayName = "GeneratorFunction";
      u(d, o, "GeneratorFunction");
      u(f);
      u(f, o, "Generator");
      u(f, n, function () {
        return this;
      });
      u(f, "toString", function () {
        return "[object Generator]";
      });
      return (c = function () {
        return {
          w: i,
          m: h
        };
      })();
    }
    function u(e, t, r, n) {
      var o = Object.defineProperty;
      try {
        o({}, "", {});
      } catch (e) {
        o = 0;
      }
      (u = function (e, t, r, n) {
        function i(t, r) {
          u(e, t, function (e) {
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
    function l(e, t, r, n) {
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
    function d(e, t, r, n) {
      return l(this, undefined, undefined, c().m(function o() {
        var a;
        var s;
        return c().w(function (o) {
          while (true) {
            switch (o.p = o.n) {
              case 0:
                o.p = 0;
                if (!(t > 0)) {
                  o.n = 3;
                  break;
                }
                o.n = 1;
                return Object(i.sleep)(t);
              case 1:
                o.n = 2;
                return p(e, n);
              case 2:
                a = o.v;
                return o.a(2, a);
              case 3:
                o.n = 4;
                return p(e, n);
              case 4:
                a = o.v;
                return o.a(2, a);
              case 5:
                o.p = 5;
                o.v;
                if (!(r >= 3)) {
                  o.n = 6;
                  break;
                }
                return o.a(2);
              case 6:
                s = t === 0 ? 2000 : t * 2;
                o.n = 7;
                return d(e, s, r + 1, n);
              case 7:
                return o.a(2);
            }
          }
        }, o, null, [[0, 5]]);
      }));
    }
    function p(e, t) {
      return l(this, undefined, undefined, c().m(function r() {
        var n;
        return c().w(function (r) {
          while (true) {
            switch (r.n) {
              case 0:
                n = !(e == null ? undefined : e.ruleVersion);
                if (!e || !e.ruleVersion) {
                  r.n = 1;
                  break;
                }
                r.n = 1;
                return fetch(t, {
                  method: "HEAD"
                }).then(t => {
                  if (t == null ? undefined : t.ok) {
                    var r = t.headers.get("x-coc-coc-version") || "";
                    if (!!e && !!e.ruleVersion && !(r <= e.ruleVersion)) {
                      n = true;
                    }
                  }
                });
              case 1:
                if (n) {
                  r.n = 2;
                  break;
                }
                return r.a(2);
              case 2:
                return r.a(2, fetch(t, {
                  mode: "no-cors"
                }).then(e => {
                  if (e == null ? undefined : e.ok) {
                    var t = e.headers.get("x-coc-coc-version") || "";
                    return e.json().then(e => Object.assign(Object.assign({}, e), {
                      ruleVersion: t
                    }));
                  }
                }));
            }
          }
        }, r);
      }));
    }
    var f = {
      ad_filter: "",
      hide_savior: "hide-widget",
      disable_pin_rx: "disallow-pip",
      disable_savior_rx: "disable_savior_sites"
    };
    var h = [];
    t.a = new class {
      constructor() {
        this.extra = {};
        this._loadRules(n.a);
        this._loadRules(n.g, "pip");
        this._loadRules(n.c, "pip-allowfullscreen-false");
        this._loadRules(n.h, "requests");
        this._loadRules(n.e, "hide-widget");
        this._loadRegex(n.d, "disallow-pip");
        this._loadRegex(n.b, "disable_savior_sites");
        this._loadRules(n.f, "mount-directly");
        this.loadPromise = this.loadCustomRules();
      }
      loadCustomRules() {
        return l(this, undefined, undefined, c().m(function t() {
          var r;
          var n;
          var u;
          var l;
          return c().w(function (t) {
            while (true) {
              switch (t.p = t.n) {
                case 0:
                  t.n = 1;
                  return i.Storage.get(["ADLIST_CUSTOM_RULE"]);
                case 1:
                  r = t.v;
                  if ((n = (r == null ? undefined : r.ADLIST_CUSTOM_RULE) || {}).timestamp && !(n.timestamp + 28800000 < Date.now())) {
                    t.n = 5;
                    break;
                  }
                  if (e.IS_CONTENT_SCRIPT) {
                    t.n = 5;
                    break;
                  }
                  "https://browser.coccoc.com/api/v1/savior/rules";
                  t.p = 2;
                  t.n = 3;
                  return d(n, 0, 0, "https://browser.coccoc.com/api/v1/savior/rules");
                case 3:
                  if (u = t.v) {
                    u.timestamp = Date.now();
                    o.a.set("ADLIST_CUSTOM_RULE", u);
                    n = u;
                  } else {
                    n.timestamp = Date.now();
                    o.a.set("ADLIST_CUSTOM_RULE", n);
                  }
                  t.n = 5;
                  break;
                case 4:
                  t.p = 4;
                  l = t.v;
                  console.warn("Caught an error", l);
                case 5:
                  Object.keys(n).forEach(e => {
                    var t = f[e];
                    if (typeof t == "string") {
                      if (h.includes(t)) {
                        this._loadRegex(n[e], t);
                        return;
                      }
                      this._loadRules(n[e], t || undefined);
                      delete n[e];
                    }
                  });
                  try {
                    if (n.youtube_logic) {
                      if (typeof n.youtube_logic != "object") {
                        n.youtube_logic = JSON.parse(n.youtube_logic || "{}");
                      }
                      o.a.set(a.w, n.youtube_logic);
                    }
                    if (n.gserp_selector) {
                      if (typeof n.gserp_selector != "object") {
                        n.gserp_selector = JSON.parse(n.gserp_selector || "{}");
                      }
                      o.a.set(a.i, n.gserp_selector);
                    }
                    if (n.custom_control) {
                      if (typeof n.custom_control != "object") {
                        n.custom_control = JSON.parse(n.custom_control || "{}");
                      }
                      o.a.set(a.c, n.custom_control);
                    }
                    delete n.timestamp;
                    delete n.custom_control;
                    delete n.youtube_logic;
                    delete n.gserp_selector;
                    if (Object.keys(n).length) {
                      o.a.set(a.n, n);
                    }
                  } catch (e) {}
                  if (!e.IS_CONTENT_SCRIPT) {
                    s.a.loadTestsFromServer();
                  }
                case 6:
                  return t.a(2);
              }
            }
          }, t, this, [[2, 4]]);
        }));
      }
      check(e, t) {
        var r = t ? this.extra[t] : this.rules;
        return this._testRules(e, r);
      }
      checkWhite(e, t) {
        var r = t ? this.extra[t] : this.rules;
        return this._testWhiteList(e, r);
      }
      checkRegex(e, t) {
        var r = this.extra[t];
        return !!r && !!Array.isArray(r) && typeof e == "string" && r.some(t => t instanceof RegExp && t.test(e));
      }
      shouldWidgetAttachToParentNode(e) {
        return n.i.some(t => t.test(e));
      }
      shouldDisableSavior(e) {
        return l(this, undefined, undefined, c().m(function t() {
          return c().w(function (t) {
            while (true) {
              switch (t.n) {
                case 0:
                  t.n = 1;
                  return this.loadPromise;
                case 1:
                  return t.a(2, (this.extra.disable_savior_sites || n.b).some(t => t.test(e)));
              }
            }
          }, t, this);
        }));
      }
      _loadRules(e, t) {
        var r = this._parseFilters(e);
        if (t) {
          if (!this.extra[t]) {
            this.extra[t] = r;
            return;
          }
          var n = this.extra[t];
          if (Array.isArray(n)) {
            return;
          }
          this._appendRules(n, r);
        } else {
          if (!this.rules) {
            this.rules = r;
            return;
          }
          this._appendRules(this.rules, r);
        }
      }
      _appendRules(e, t) {
        e.blCosmetics.push(...t.blCosmetics);
        e.blUrls.push(...t.blUrls);
        e.wlCosmetics.push(...t.wlCosmetics);
        e.wlUrls.push(...t.wlUrls);
      }
      filterRegex(e) {
        return e.map(e => {
          try {
            return new RegExp(e);
          } catch (e) {
            return;
          }
        }).filter(Boolean);
      }
      _loadRegex(e, t) {
        var r = this.filterRegex(e);
        if (Array.isArray(r) && t) {
          this.extra[t] ||= [];
          this.extra[t].push(...r);
        }
      }
      _testRules(e, t) {
        if (!t) {
          return false;
        }
        var r;
        if (typeof e == "string") {
          r = e;
        } else if (e.src || e.href) {
          r = e.src || e.href;
        }
        if (r == null ? undefined : r.startsWith("data:")) {
          return !!/^data:(audio|video)/i.test(r);
        }
        if (r) {
          for (var n = t.wlUrls.length, o = 0; o < n; o++) {
            try {
              if (t.wlUrls[o].test(r)) {
                return false;
              }
            } catch (e) {}
          }
          n = t.blUrls.length;
          for (var i = 0; i < n; i++) {
            try {
              if (t.blUrls[i].test(r)) {
                return true;
              }
            } catch (e) {}
          }
        }
        if (!(e instanceof EventTarget)) {
          return false;
        }
        var a = e.ownerDocument.location.href;
        for (var s = 0; s < t.wlCosmetics.length; s++) {
          try {
            var c = t.wlCosmetics[s];
            if ((c.domain[0] === "~" && a.match(c.domain.substr(1)) || a.match(c.domain)) && c.selectors.some(e.matches.bind(e))) {
              return false;
            }
          } catch (e) {}
        }
        for (var u = 0; u < t.blCosmetics.length; u++) {
          try {
            var l = t.blCosmetics[u];
            if ((l.domain[0] === "~" && a.match(l.domain.substr(1)) || a.match(l.domain)) && l.selectors.some(e.matches.bind(e))) {
              return true;
            }
          } catch (e) {}
        }
        return false;
      }
      _testWhiteList(e, t) {
        if (!t) {
          return false;
        }
        var r;
        if (typeof e == "string") {
          r = e;
        } else if (e.src || e.href) {
          r = e.src || e.href;
        }
        if (r) {
          for (var n = t.wlUrls.length, o = 0; o < n; o++) {
            try {
              if (t.wlUrls[o].test(r)) {
                return true;
              }
            } catch (e) {}
          }
        }
        if (!(e instanceof EventTarget)) {
          return false;
        }
        var i = e.ownerDocument.location.href;
        for (var a = 0; a < t.wlCosmetics.length; a++) {
          try {
            var s = t.wlCosmetics[a];
            if ((s.domain[0] === "~" && i.match(s.domain.substr(1)) || i.match(s.domain)) && s.selectors.some(e.matches.bind(e))) {
              return true;
            }
          } catch (e) {}
        }
        return false;
      }
      _convertWildcard(e) {
        if (/^\/.*?\/$/.test(e) && /[[\\(){}]/.test(e)) {
          return new RegExp(e.replace(/^\/|\/$/g, ""), "i");
        }
        var t = e.replace(/[.?+\\[{()]/g, e => "\\" + e).replace(/\^/g, "[\\w\\d_.%-]").replace(/\*/g, ".*").replace(/\|\|/g, "^\\w+://([\\d\\w-]+\\.)*").replace(/\|/g, "$");
        return new RegExp(t, "i");
      }
      _getParsingRegex() {
        if (this.regex) {
          return this.regex;
        }
        this.regex = new RegExp("^\\s*(@@)?(/(?:[^/]|\\\\/)+/|(?:[^#$]+|#(?!#))+)?(?:(#@#|##)([^$]+))?(?:\\$(.*))?\\s*$", "i");
        return this.regex;
      }
      _parseFilters(e) {
        var t = e;
        if (typeof e == "string") {
          t = e.split(/[\r\n]+/);
        }
        var r = {
          blUrls: [],
          wlUrls: [],
          blCosmetics: [],
          wlCosmetics: []
        };
        var n = {
          "": {
            bl: [],
            wl: []
          }
        };
        for (var o = 0; o < t.length; o++) {
          var i = t[o];
          if (!/^\s*!|^\s*\[.*?\]\s*$/.test(i)) {
            var a = undefined;
            try {
              if (!(a = this._getParsingRegex().exec(i))) {
                throw new Error();
              }
            } catch (e) {
              console.warn("AdFilter: could not parse adblock rule: " + i);
              continue;
            }
            var s = {
              whitelist: a[1],
              url: a[2],
              separator: a[3],
              selector: a[4],
              comment: a[5]
            };
            if (s.separator) {
              for (var c = s.url ? s.url.split(/,/) : [""], u = undefined, l = 0; l < c.length; l++) {
                if (!((u = c[l]) in n)) {
                  n[u] = {
                    bl: [],
                    wl: []
                  };
                }
                u = n[u];
                if (s.separator === "#@#") {
                  if (!s.whitelist) {
                    n[""].wl.push(s.selector);
                  }
                  u[s.whitelist ? "bl" : "wl"].push(s.selector);
                } else {
                  u[s.whitelist ? "wl" : "bl"].push(s.selector);
                }
              }
            } else {
              if (!s.url) {
                continue;
              }
              var d = s.whitelist === "@@" ? r.wlUrls : r.blUrls;
              try {
                var p = this._convertWildcard(s.url);
                d.push(p);
              } catch (e) {}
            }
          }
        }
        for (var f = Object.keys(n), h = 0; h < f.length; h++) {
          var m = f[h];
          var g = n[m];
          if (g.bl.length) {
            try {
              r.blCosmetics.push({
                domain: this._convertWildcard(m),
                selectors: n[m].bl
              });
            } catch (e) {}
          }
          if (g.wl.length) {
            try {
              r.wlCosmetics.push({
                domain: this._convertWildcard(m),
                selectors: n[m].wl
              });
            } catch (e) {}
          }
        }
        return r;
      }
    }();
  }).call(this, r(13));
};
