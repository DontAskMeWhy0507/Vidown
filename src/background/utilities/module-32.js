// Module 32 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  var r;
  var n;
  var o = e.exports = {};
  function i() {
    throw new Error("setTimeout has not been defined");
  }
  function a() {
    throw new Error("clearTimeout has not been defined");
  }
  function s(e) {
    if (r === setTimeout) {
      return setTimeout(e, 0);
    }
    if ((r === i || !r) && setTimeout) {
      r = setTimeout;
      return setTimeout(e, 0);
    }
    try {
      return r(e, 0);
    } catch (t) {
      try {
        return r.call(null, e, 0);
      } catch (t) {
        return r.call(this, e, 0);
      }
    }
  }
  (function () {
    try {
      r = typeof setTimeout == "function" ? setTimeout : i;
    } catch (e) {
      r = i;
    }
    try {
      n = typeof clearTimeout == "function" ? clearTimeout : a;
    } catch (e) {
      n = a;
    }
  })();
  var c;
  var u = [];
  var l = false;
  var d = -1;
  function p() {
    if (l && c) {
      l = false;
      if (c.length) {
        u = c.concat(u);
      } else {
        d = -1;
      }
      if (u.length) {
        f();
      }
    }
  }
  function f() {
    if (!l) {
      var e = s(p);
      l = true;
      for (var t = u.length; t;) {
        c = u;
        u = [];
        while (++d < t) {
          if (c) {
            c[d].run();
          }
        }
        d = -1;
        t = u.length;
      }
      c = null;
      l = false;
      (function (e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === a || !n) && clearTimeout) {
          n = clearTimeout;
          return clearTimeout(e);
        }
        try {
          n(e);
        } catch (t) {
          try {
            return n.call(null, e);
          } catch (t) {
            return n.call(this, e);
          }
        }
      })(e);
    }
  }
  function h(e, t) {
    this.fun = e;
    this.array = t;
  }
  function m() {}
  o.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var r = 1; r < arguments.length; r++) {
        t[r - 1] = arguments[r];
      }
    }
    u.push(new h(e, t));
    if (u.length === 1 && !l) {
      s(f);
    }
  };
  h.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  o.title = "browser";
  o.browser = true;
  o.env = {};
  o.argv = [];
  o.version = "";
  o.versions = {};
  o.on = m;
  o.addListener = m;
  o.once = m;
  o.off = m;
  o.removeListener = m;
  o.removeAllListeners = m;
  o.emit = m;
  o.prependListener = m;
  o.prependOnceListener = m;
  o.listeners = function (e) {
    return [];
  };
  o.binding = function (e) {
    throw new Error("process.binding is not supported");
  };
  o.cwd = function () {
    return "/";
  };
  o.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  };
  o.umask = function () {
    return 0;
  };
};
