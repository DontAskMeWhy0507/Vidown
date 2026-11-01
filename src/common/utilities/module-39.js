// Module 39 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    e.exports = function () {
      "use strict";

      /*!
         * mustache.js - Logic-less {{mustache}} templates with JavaScript
         * http://github.com/janl/mustache.js
         */
      var e = Object.prototype.toString;
      var t = Array.isArray || function (t) {
        return e.call(t) === "[object Array]";
      };
      function n(e) {
        return typeof e == "function";
      }
      function r(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function o(e, t) {
        return e != null && typeof e == "object" && t in e;
      }
      var i = RegExp.prototype.test;
      var a = /\S/;
      function s(e) {
        return !function (e, t) {
          return i.call(e, t);
        }(a, e);
      }
      var c = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      var l = /\s*/;
      var u = /\s+/;
      var d = /\s*=/;
      var f = /\s*\}/;
      var p = /#|\^|\/|>|\{|&|=|!/;
      function h(e) {
        this.string = e;
        this.tail = e;
        this.pos = 0;
      }
      function g(e, t) {
        this.view = e;
        this.cache = {
          ".": this.view
        };
        this.parent = t;
      }
      function m() {
        this.cache = {};
      }
      h.prototype.eos = function () {
        return this.tail === "";
      };
      h.prototype.scan = function (e) {
        var t = this.tail.match(e);
        if (!t || t.index !== 0) {
          return "";
        }
        var n = t[0];
        this.tail = this.tail.substring(n.length);
        this.pos += n.length;
        return n;
      };
      h.prototype.scanUntil = function (e) {
        var t;
        var n = this.tail.search(e);
        switch (n) {
          case -1:
            t = this.tail;
            this.tail = "";
            break;
          case 0:
            t = "";
            break;
          default:
            t = this.tail.substring(0, n);
            this.tail = this.tail.substring(n);
        }
        this.pos += t.length;
        return t;
      };
      g.prototype.push = function (e) {
        return new g(e, this);
      };
      g.prototype.lookup = function (e) {
        var t;
        var r;
        var i;
        var a = this.cache;
        if (a.hasOwnProperty(e)) {
          t = a[e];
        } else {
          var s;
          var c;
          var l;
          for (var u = this, d = false; u;) {
            if (e.indexOf(".") > 0) {
              s = u.view;
              c = e.split(".");
              l = 0;
              while (s != null && l < c.length) {
                if (l === c.length - 1) {
                  d = o(s, c[l]) || (r = s, i = c[l], r != null && typeof r != "object" && r.hasOwnProperty && r.hasOwnProperty(i));
                }
                s = s[c[l++]];
              }
            } else {
              s = u.view[e];
              d = o(u.view, e);
            }
            if (d) {
              t = s;
              break;
            }
            u = u.parent;
          }
          a[e] = t;
        }
        if (n(t)) {
          t = t.call(this.view);
        }
        return t;
      };
      m.prototype.clearCache = function () {
        this.cache = {};
      };
      m.prototype.parse = function (e, n) {
        var o = this.cache;
        var i = e + ":" + (n || v.tags).join(":");
        var a = o[i];
        if (a == null) {
          a = o[i] = function (e, n) {
            if (!e) {
              return [];
            }
            var o;
            var i;
            var a;
            var c = false;
            var g = [];
            var m = [];
            var y = [];
            var k = false;
            var b = false;
            var _ = "";
            var T = 0;
            function S() {
              if (k && !b) {
                while (y.length) {
                  delete m[y.pop()];
                }
              } else {
                y = [];
              }
              k = false;
              b = false;
            }
            function x(e) {
              if (typeof e == "string") {
                e = e.split(u, 2);
              }
              if (!t(e) || e.length !== 2) {
                throw new Error("Invalid tags: " + e);
              }
              o = new RegExp(r(e[0]) + "\\s*");
              i = new RegExp("\\s*" + r(e[1]));
              a = new RegExp("\\s*" + r("}" + e[1]));
            }
            x(n || v.tags);
            var w;
            var E;
            var A;
            var C;
            var O;
            var I;
            for (var N = new h(e); !N.eos();) {
              w = N.pos;
              if (A = N.scanUntil(o)) {
                for (var D = 0, R = A.length; D < R; ++D) {
                  if (s(C = A.charAt(D))) {
                    y.push(m.length);
                    _ += C;
                  } else {
                    b = true;
                    c = true;
                    _ += " ";
                  }
                  m.push(["text", C, w, w + 1]);
                  w += 1;
                  if (C === "\n") {
                    S();
                    _ = "";
                    T = 0;
                    c = false;
                  }
                }
              }
              if (!N.scan(o)) {
                break;
              }
              k = true;
              E = N.scan(p) || "name";
              N.scan(l);
              if (E === "=") {
                A = N.scanUntil(d);
                N.scan(d);
                N.scanUntil(i);
              } else if (E === "{") {
                A = N.scanUntil(a);
                N.scan(f);
                N.scanUntil(i);
                E = "&";
              } else {
                A = N.scanUntil(i);
              }
              if (!N.scan(i)) {
                throw new Error("Unclosed tag at " + N.pos);
              }
              O = E == ">" ? [E, A, w, N.pos, _, T, c] : [E, A, w, N.pos];
              T++;
              m.push(O);
              if (E === "#" || E === "^") {
                g.push(O);
              } else if (E === "/") {
                if (!(I = g.pop())) {
                  throw new Error("Unopened section \"" + A + "\" at " + w);
                }
                if (I[1] !== A) {
                  throw new Error("Unclosed section \"" + I[1] + "\" at " + w);
                }
              } else if (E === "name" || E === "{" || E === "&") {
                b = true;
              } else if (E === "=") {
                x(A);
              }
            }
            S();
            if (I = g.pop()) {
              throw new Error("Unclosed section \"" + I[1] + "\" at " + N.pos);
            }
            return function (e) {
              var t;
              var n = [];
              var r = n;
              var o = [];
              for (var i = 0, a = e.length; i < a; ++i) {
                switch ((t = e[i])[0]) {
                  case "#":
                  case "^":
                    r.push(t);
                    o.push(t);
                    r = t[4] = [];
                    break;
                  case "/":
                    o.pop()[5] = t[2];
                    r = o.length > 0 ? o[o.length - 1][4] : n;
                    break;
                  default:
                    r.push(t);
                }
              }
              return n;
            }(function (e) {
              var t;
              var n;
              var r = [];
              for (var o = 0, i = e.length; o < i; ++o) {
                if (t = e[o]) {
                  if (t[0] === "text" && n && n[0] === "text") {
                    n[1] += t[1];
                    n[3] = t[3];
                  } else {
                    r.push(t);
                    n = t;
                  }
                }
              }
              return r;
            }(m));
          }(e, n);
        }
        return a;
      };
      m.prototype.render = function (e, t, n, r) {
        var o = this.parse(e, r);
        var i = t instanceof g ? t : new g(t, undefined);
        return this.renderTokens(o, i, n, e, r);
      };
      m.prototype.renderTokens = function (e, t, n, r, o) {
        var i;
        var a;
        var s;
        var c = "";
        for (var l = 0, u = e.length; l < u; ++l) {
          s = undefined;
          if ((a = (i = e[l])[0]) === "#") {
            s = this.renderSection(i, t, n, r);
          } else if (a === "^") {
            s = this.renderInverted(i, t, n, r);
          } else if (a === ">") {
            s = this.renderPartial(i, t, n, o);
          } else if (a === "&") {
            s = this.unescapedValue(i, t);
          } else if (a === "name") {
            s = this.escapedValue(i, t);
          } else if (a === "text") {
            s = this.rawValue(i);
          }
          if (s !== undefined) {
            c += s;
          }
        }
        return c;
      };
      m.prototype.renderSection = function (e, r, o, i) {
        var a = this;
        var s = "";
        var c = r.lookup(e[1]);
        if (c) {
          if (t(c)) {
            for (var l = 0, u = c.length; l < u; ++l) {
              s += this.renderTokens(e[4], r.push(c[l]), o, i);
            }
          } else if (typeof c == "object" || typeof c == "string" || typeof c == "number") {
            s += this.renderTokens(e[4], r.push(c), o, i);
          } else if (n(c)) {
            if (typeof i != "string") {
              throw new Error("Cannot use higher-order sections without the original template");
            }
            if ((c = c.call(r.view, i.slice(e[3], e[5]), function (e) {
              return a.render(e, r, o);
            })) != null) {
              s += c;
            }
          } else {
            s += this.renderTokens(e[4], r, o, i);
          }
          return s;
        }
      };
      m.prototype.renderInverted = function (e, n, r, o) {
        var i = n.lookup(e[1]);
        if (!i || t(i) && i.length === 0) {
          return this.renderTokens(e[4], n, r, o);
        }
      };
      m.prototype.indentPartial = function (e, t, n) {
        var r = t.replace(/[^ \t]/g, "");
        for (var o = e.split("\n"), i = 0; i < o.length; i++) {
          if (o[i].length && (i > 0 || !n)) {
            o[i] = r + o[i];
          }
        }
        return o.join("\n");
      };
      m.prototype.renderPartial = function (e, t, r, o) {
        if (r) {
          var i = n(r) ? r(e[1]) : r[e[1]];
          if (i != null) {
            var a = e[6];
            var s = e[5];
            var c = e[4];
            var l = i;
            if (s == 0 && c) {
              l = this.indentPartial(i, c, a);
            }
            return this.renderTokens(this.parse(l, o), t, r, l);
          }
        }
      };
      m.prototype.unescapedValue = function (e, t) {
        var n = t.lookup(e[1]);
        if (n != null) {
          return n;
        }
      };
      m.prototype.escapedValue = function (e, t) {
        var n = t.lookup(e[1]);
        if (n != null) {
          return v.escape(n);
        }
      };
      m.prototype.rawValue = function (e) {
        return e[1];
      };
      var v = {
        name: "mustache.js",
        version: "3.2.1",
        tags: ["{{", "}}"],
        clearCache: undefined,
        escape: undefined,
        parse: undefined,
        render: undefined,
        to_html: undefined,
        Scanner: undefined,
        Context: undefined,
        Writer: undefined
      };
      var y = new m();
      v.clearCache = function () {
        return y.clearCache();
      };
      v.parse = function (e, t) {
        return y.parse(e, t);
      };
      v.render = function (e, n, r, o) {
        if (typeof e != "string") {
          throw new TypeError("Invalid template! Template should be a \"string\" but \"" + (t(i = e) ? "array" : typeof i) + "\" was given as the first argument for mustache#render(template, view, partials)");
        }
        var i;
        return y.render(e, n, r, o);
      };
      v.to_html = function (e, t, r, o) {
        var i = v.render(e, t, r);
        if (!n(o)) {
          return i;
        }
        o(i);
      };
      v.escape = function (e) {
        return String(e).replace(/[&<>"'`=\/]/g, function (e) {
          return c[e];
        });
      };
      v.Scanner = h;
      v.Context = g;
      v.Writer = m;
      return v;
    }();
  };
