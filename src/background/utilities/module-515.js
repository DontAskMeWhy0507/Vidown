// Module 515 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(717);
  function o() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var i = /^([a-z0-9.+-]+:)/i;
  var a = /:[0-9]*$/;
  var s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
  var c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]);
  var u = ["'"].concat(c);
  var l = ["%", "/", "?", ";", "#"].concat(u);
  var d = ["/", "?", "#"];
  var p = /^[+a-z0-9A-Z_-]{0,63}$/;
  var f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
  var h = {
    javascript: true,
    "javascript:": true
  };
  var m = {
    javascript: true,
    "javascript:": true
  };
  var g = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  var v = r(718);
  function y(e, t, r) {
    if (e && typeof e == "object" && e instanceof o) {
      return e;
    }
    var n = new o();
    n.parse(e, t, r);
    return n;
  }
  o.prototype.parse = function (e, t, r) {
    if (typeof e != "string") {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    }
    var o = e.indexOf("?");
    var a = o !== -1 && o < e.indexOf("#") ? "?" : "#";
    var c = e.split(a);
    c[0] = c[0].replace(/\\/g, "/");
    var y = e = c.join(a);
    y = y.trim();
    if (!r && e.split("#").length === 1) {
      var _ = s.exec(y);
      if (_) {
        this.path = y;
        this.href = y;
        this.pathname = _[1];
        if (_[2]) {
          this.search = _[2];
          this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1);
        } else if (t) {
          this.search = "";
          this.query = {};
        }
        return this;
      }
    }
    var b = i.exec(y);
    if (b) {
      var w = (b = b[0]).toLowerCase();
      this.protocol = w;
      y = y.substr(b.length);
    }
    if (r || b || y.match(/^\/\/[^@/]+@[^@/]+/)) {
      var E = y.substr(0, 2) === "//";
      if (!!E && (!b || !m[b])) {
        y = y.substr(2);
        this.slashes = true;
      }
    }
    if (!m[b] && (E || b && !g[b])) {
      var D;
      var T;
      var k = -1;
      for (var A = 0; A < d.length; A++) {
        if ((C = y.indexOf(d[A])) !== -1 && (k === -1 || C < k)) {
          k = C;
        }
      }
      if ((T = k === -1 ? y.lastIndexOf("@") : y.lastIndexOf("@", k)) !== -1) {
        D = y.slice(0, T);
        y = y.slice(T + 1);
        this.auth = decodeURIComponent(D);
      }
      k = -1;
      for (A = 0; A < l.length; A++) {
        var C;
        if ((C = y.indexOf(l[A])) !== -1 && (k === -1 || C < k)) {
          k = C;
        }
      }
      if (k === -1) {
        k = y.length;
      }
      this.host = y.slice(0, k);
      y = y.slice(k);
      this.parseHost();
      this.hostname = this.hostname || "";
      var x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!x) {
        var S = this.hostname.split(/\./);
        A = 0;
        for (var O = S.length; A < O; A++) {
          var I = S[A];
          if (I && !I.match(p)) {
            var L = "";
            for (var R = 0, P = I.length; R < P; R++) {
              if (I.charCodeAt(R) > 127) {
                L += "x";
              } else {
                L += I[R];
              }
            }
            if (!L.match(p)) {
              var B = S.slice(0, A);
              var M = S.slice(A + 1);
              var F = I.match(f);
              if (F) {
                B.push(F[1]);
                M.unshift(F[2]);
              }
              if (M.length) {
                y = "/" + M.join(".") + y;
              }
              this.hostname = B.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > 255) {
        this.hostname = "";
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!x) {
        this.hostname = n.toASCII(this.hostname);
      }
      var U = this.port ? ":" + this.port : "";
      var N = this.hostname || "";
      this.host = N + U;
      this.href += this.host;
      if (x) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (y[0] !== "/") {
          y = "/" + y;
        }
      }
    }
    if (!h[w]) {
      A = 0;
      O = u.length;
      for (; A < O; A++) {
        var j = u[A];
        if (y.indexOf(j) !== -1) {
          var q = encodeURIComponent(j);
          if (q === j) {
            q = escape(j);
          }
          y = y.split(j).join(q);
        }
      }
    }
    var H = y.indexOf("#");
    if (H !== -1) {
      this.hash = y.substr(H);
      y = y.slice(0, H);
    }
    var V = y.indexOf("?");
    if (V !== -1) {
      this.search = y.substr(V);
      this.query = y.substr(V + 1);
      if (t) {
        this.query = v.parse(this.query);
      }
      y = y.slice(0, V);
    } else if (t) {
      this.search = "";
      this.query = {};
    }
    if (y) {
      this.pathname = y;
    }
    if (g[w] && this.hostname && !this.pathname) {
      this.pathname = "/";
    }
    if (this.pathname || this.search) {
      U = this.pathname || "";
      var W = this.search || "";
      this.path = U + W;
    }
    this.href = this.format();
    return this;
  };
  o.prototype.format = function () {
    var e = this.auth || "";
    if (e) {
      e = (e = encodeURIComponent(e)).replace(/%3A/i, ":");
      e += "@";
    }
    var t = this.protocol || "";
    var r = this.pathname || "";
    var n = this.hash || "";
    var o = false;
    var i = "";
    if (this.host) {
      o = e + this.host;
    } else if (this.hostname) {
      o = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
      if (this.port) {
        o += ":" + this.port;
      }
    }
    if (this.query && typeof this.query == "object" && Object.keys(this.query).length) {
      i = v.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: false
      });
    }
    var a = this.search || i && "?" + i || "";
    if (t && t.substr(-1) !== ":") {
      t += ":";
    }
    if (this.slashes || (!t || g[t]) && o !== false) {
      o = "//" + (o || "");
      if (r && r.charAt(0) !== "/") {
        r = "/" + r;
      }
    } else {
      o ||= "";
    }
    if (n && n.charAt(0) !== "#") {
      n = "#" + n;
    }
    if (a && a.charAt(0) !== "?") {
      a = "?" + a;
    }
    return t + o + (r = r.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e);
    })) + (a = a.replace("#", "%23")) + n;
  };
  o.prototype.resolve = function (e) {
    return this.resolveObject(y(e, false, true)).format();
  };
  o.prototype.resolveObject = function (e) {
    if (typeof e == "string") {
      var t = new o();
      t.parse(e, false, true);
      e = t;
    }
    var r = new o();
    for (var n = Object.keys(this), i = 0; i < n.length; i++) {
      var a = n[i];
      r[a] = this[a];
    }
    r.hash = e.hash;
    if (e.href === "") {
      r.href = r.format();
      return r;
    }
    if (e.slashes && !e.protocol) {
      for (var s = Object.keys(e), c = 0; c < s.length; c++) {
        var u = s[c];
        if (u !== "protocol") {
          r[u] = e[u];
        }
      }
      if (g[r.protocol] && r.hostname && !r.pathname) {
        r.pathname = "/";
        r.path = r.pathname;
      }
      r.href = r.format();
      return r;
    }
    if (e.protocol && e.protocol !== r.protocol) {
      if (!g[e.protocol]) {
        for (var l = Object.keys(e), d = 0; d < l.length; d++) {
          var p = l[d];
          r[p] = e[p];
        }
        r.href = r.format();
        return r;
      }
      r.protocol = e.protocol;
      if (e.host || m[e.protocol]) {
        r.pathname = e.pathname;
      } else {
        for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
        e.host ||= "";
        e.hostname ||= "";
        if (f[0] !== "") {
          f.unshift("");
        }
        if (f.length < 2) {
          f.unshift("");
        }
        r.pathname = f.join("/");
      }
      r.search = e.search;
      r.query = e.query;
      r.host = e.host || "";
      r.auth = e.auth;
      r.hostname = e.hostname || e.host;
      r.port = e.port;
      if (r.pathname || r.search) {
        var h = r.pathname || "";
        var v = r.search || "";
        r.path = h + v;
      }
      r.slashes = r.slashes || e.slashes;
      r.href = r.format();
      return r;
    }
    var y = r.pathname && r.pathname.charAt(0) === "/";
    var _ = e.host || e.pathname && e.pathname.charAt(0) === "/";
    var b = _ || y || r.host && e.pathname;
    var w = b;
    var E = r.pathname && r.pathname.split("/") || [];
    f = e.pathname && e.pathname.split("/") || [];
    var D = r.protocol && !g[r.protocol];
    if (D) {
      r.hostname = "";
      r.port = null;
      if (r.host) {
        if (E[0] === "") {
          E[0] = r.host;
        } else {
          E.unshift(r.host);
        }
      }
      r.host = "";
      if (e.protocol) {
        e.hostname = null;
        e.port = null;
        if (e.host) {
          if (f[0] === "") {
            f[0] = e.host;
          } else {
            f.unshift(e.host);
          }
        }
        e.host = null;
      }
      b = b && (f[0] === "" || E[0] === "");
    }
    if (_) {
      r.host = e.host || e.host === "" ? e.host : r.host;
      r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname;
      r.search = e.search;
      r.query = e.query;
      E = f;
    } else if (f.length) {
      E ||= [];
      E.pop();
      E = E.concat(f);
      r.search = e.search;
      r.query = e.query;
    } else if (e.search != null) {
      if (D) {
        r.host = E.shift();
        r.hostname = r.host;
        if (x = !!r.host && !!(r.host.indexOf("@") > 0) && r.host.split("@")) {
          r.auth = x.shift();
          r.hostname = x.shift();
          r.host = r.hostname;
        }
      }
      r.search = e.search;
      r.query = e.query;
      if (r.pathname !== null || r.search !== null) {
        r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "");
      }
      r.href = r.format();
      return r;
    }
    if (!E.length) {
      r.pathname = null;
      if (r.search) {
        r.path = "/" + r.search;
      } else {
        r.path = null;
      }
      r.href = r.format();
      return r;
    }
    var T = E.slice(-1)[0];
    var k = (r.host || e.host || E.length > 1) && (T === "." || T === "..") || T === "";
    var A = 0;
    for (var C = E.length; C >= 0; C--) {
      if ((T = E[C]) === ".") {
        E.splice(C, 1);
      } else if (T === "..") {
        E.splice(C, 1);
        A++;
      } else if (A) {
        E.splice(C, 1);
        A--;
      }
    }
    if (!b && !w) {
      for (; A--; A) {
        E.unshift("..");
      }
    }
    if (!!b && E[0] !== "" && (!E[0] || E[0].charAt(0) !== "/")) {
      E.unshift("");
    }
    if (k && E.join("/").substr(-1) !== "/") {
      E.push("");
    }
    var x;
    var S = E[0] === "" || E[0] && E[0].charAt(0) === "/";
    if (D) {
      r.hostname = S ? "" : E.length ? E.shift() : "";
      r.host = r.hostname;
      if (x = !!r.host && !!(r.host.indexOf("@") > 0) && r.host.split("@")) {
        r.auth = x.shift();
        r.hostname = x.shift();
        r.host = r.hostname;
      }
    }
    if ((b = b || r.host && E.length) && !S) {
      E.unshift("");
    }
    if (E.length > 0) {
      r.pathname = E.join("/");
    } else {
      r.pathname = null;
      r.path = null;
    }
    if (r.pathname !== null || r.search !== null) {
      r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "");
    }
    r.auth = e.auth || r.auth;
    r.slashes = r.slashes || e.slashes;
    r.href = r.format();
    return r;
  };
  o.prototype.parseHost = function () {
    var e = this.host;
    var t = a.exec(e);
    if (t) {
      if ((t = t[0]) !== ":") {
        this.port = t.substr(1);
      }
      e = e.substr(0, e.length - t.length);
    }
    if (e) {
      this.hostname = e;
    }
  };
  t.parse = y;
  t.resolve = function (e, t) {
    return y(e, false, true).resolve(t);
  };
  t.resolveObject = function (e, t) {
    if (e) {
      return y(e, false, true).resolveObject(t);
    } else {
      return t;
    }
  };
  t.format = function (e) {
    if (typeof e == "string") {
      e = y(e);
    }
    if (e instanceof o) {
      return e.format();
    } else {
      return o.prototype.format.call(e);
    }
  };
  t.Url = o;
};
