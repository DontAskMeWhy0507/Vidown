// Module 42 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n;
  var o = typeof Reflect == "object" ? Reflect : null;
  var i = o && typeof o.apply == "function" ? o.apply : function (e, t, r) {
    return Function.prototype.apply.call(e, t, r);
  };
  n = o && typeof o.ownKeys == "function" ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : function (e) {
    return Object.getOwnPropertyNames(e);
  };
  var a = Number.isNaN || function (e) {
    return e != e;
  };
  function s() {
    s.init.call(this);
  }
  e.exports = s;
  e.exports.once = function (e, t) {
    return new Promise(function (r, n) {
      function o(r) {
        e.removeListener(t, i);
        n(r);
      }
      function i() {
        if (typeof e.removeListener == "function") {
          e.removeListener("error", o);
        }
        r([].slice.call(arguments));
      }
      v(e, t, i, {
        once: true
      });
      if (t !== "error") {
        (function (e, t, r) {
          if (typeof e.on == "function") {
            v(e, "error", t, r);
          }
        })(e, o, {
          once: true
        });
      }
    });
  };
  s.EventEmitter = s;
  s.prototype._events = undefined;
  s.prototype._eventsCount = 0;
  s.prototype._maxListeners = undefined;
  var c = 10;
  function u(e) {
    if (typeof e != "function") {
      throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
    }
  }
  function l(e) {
    if (e._maxListeners === undefined) {
      return s.defaultMaxListeners;
    } else {
      return e._maxListeners;
    }
  }
  function d(e, t, r, n) {
    var o;
    var i;
    var a;
    var s;
    u(r);
    if ((i = e._events) === undefined) {
      i = e._events = Object.create(null);
      e._eventsCount = 0;
    } else {
      if (i.newListener !== undefined) {
        e.emit("newListener", t, r.listener ? r.listener : r);
        i = e._events;
      }
      a = i[t];
    }
    if (a === undefined) {
      a = i[t] = r;
      ++e._eventsCount;
    } else {
      if (typeof a == "function") {
        a = i[t] = n ? [r, a] : [a, r];
      } else if (n) {
        a.unshift(r);
      } else {
        a.push(r);
      }
      if ((o = l(e)) > 0 && a.length > o && !a.warned) {
        a.warned = true;
        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning";
        c.emitter = e;
        c.type = t;
        c.count = a.length;
        s = c;
        if (console && console.warn) {
          console.warn(s);
        }
      }
    }
    return e;
  }
  function p() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0) {
        return this.listener.call(this.target);
      } else {
        return this.listener.apply(this.target, arguments);
      }
    }
  }
  function f(e, t, r) {
    var n = {
      fired: false,
      wrapFn: undefined,
      target: e,
      type: t,
      listener: r
    };
    var o = p.bind(n);
    o.listener = r;
    n.wrapFn = o;
    return o;
  }
  function h(e, t, r) {
    var n = e._events;
    if (n === undefined) {
      return [];
    }
    var o = n[t];
    if (o === undefined) {
      return [];
    } else if (typeof o == "function") {
      if (r) {
        return [o.listener || o];
      } else {
        return [o];
      }
    } else if (r) {
      return function (e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) {
          t[r] = e[r].listener || e[r];
        }
        return t;
      }(o);
    } else {
      return g(o, o.length);
    }
  }
  function m(e) {
    var t = this._events;
    if (t !== undefined) {
      var r = t[e];
      if (typeof r == "function") {
        return 1;
      }
      if (r !== undefined) {
        return r.length;
      }
    }
    return 0;
  }
  function g(e, t) {
    var r = new Array(t);
    for (var n = 0; n < t; ++n) {
      r[n] = e[n];
    }
    return r;
  }
  function v(e, t, r, n) {
    if (typeof e.on == "function") {
      if (n.once) {
        e.once(t, r);
      } else {
        e.on(t, r);
      }
    } else {
      if (typeof e.addEventListener != "function") {
        throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
      }
      e.addEventListener(t, function o(i) {
        if (n.once) {
          e.removeEventListener(t, o);
        }
        r(i);
      });
    }
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
      return c;
    },
    set: function (e) {
      if (typeof e != "number" || e < 0 || a(e)) {
        throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
      }
      c = e;
    }
  });
  s.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  s.prototype.setMaxListeners = function (e) {
    if (typeof e != "number" || e < 0 || a(e)) {
      throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
    }
    this._maxListeners = e;
    return this;
  };
  s.prototype.getMaxListeners = function () {
    return l(this);
  };
  s.prototype.emit = function (e) {
    var t = [];
    for (var r = 1; r < arguments.length; r++) {
      t.push(arguments[r]);
    }
    var n = e === "error";
    var o = this._events;
    if (o !== undefined) {
      n = n && o.error === undefined;
    } else if (!n) {
      return false;
    }
    if (n) {
      var a;
      if (t.length > 0) {
        a = t[0];
      }
      if (a instanceof Error) {
        throw a;
      }
      var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
      s.context = a;
      throw s;
    }
    var c = o[e];
    if (c === undefined) {
      return false;
    }
    if (typeof c == "function") {
      i(c, this, t);
    } else {
      var u = c.length;
      var l = g(c, u);
      for (r = 0; r < u; ++r) {
        i(l[r], this, t);
      }
    }
    return true;
  };
  s.prototype.addListener = function (e, t) {
    return d(this, e, t, false);
  };
  s.prototype.on = s.prototype.addListener;
  s.prototype.prependListener = function (e, t) {
    return d(this, e, t, true);
  };
  s.prototype.once = function (e, t) {
    u(t);
    this.on(e, f(this, e, t));
    return this;
  };
  s.prototype.prependOnceListener = function (e, t) {
    u(t);
    this.prependListener(e, f(this, e, t));
    return this;
  };
  s.prototype.removeListener = function (e, t) {
    var r;
    var n;
    var o;
    var i;
    var a;
    u(t);
    if ((n = this._events) === undefined) {
      return this;
    }
    if ((r = n[e]) === undefined) {
      return this;
    }
    if (r === t || r.listener === t) {
      if (--this._eventsCount == 0) {
        this._events = Object.create(null);
      } else {
        delete n[e];
        if (n.removeListener) {
          this.emit("removeListener", e, r.listener || t);
        }
      }
    } else if (typeof r != "function") {
      o = -1;
      i = r.length - 1;
      for (; i >= 0; i--) {
        if (r[i] === t || r[i].listener === t) {
          a = r[i].listener;
          o = i;
          break;
        }
      }
      if (o < 0) {
        return this;
      }
      if (o === 0) {
        r.shift();
      } else {
        (function (e, t) {
          for (; t + 1 < e.length; t++) {
            e[t] = e[t + 1];
          }
          e.pop();
        })(r, o);
      }
      if (r.length === 1) {
        n[e] = r[0];
      }
      if (n.removeListener !== undefined) {
        this.emit("removeListener", e, a || t);
      }
    }
    return this;
  };
  s.prototype.off = s.prototype.removeListener;
  s.prototype.removeAllListeners = function (e) {
    var t;
    var r;
    var n;
    if ((r = this._events) === undefined) {
      return this;
    }
    if (r.removeListener === undefined) {
      if (arguments.length === 0) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      } else if (r[e] !== undefined) {
        if (--this._eventsCount == 0) {
          this._events = Object.create(null);
        } else {
          delete r[e];
        }
      }
      return this;
    }
    if (arguments.length === 0) {
      var o;
      var i = Object.keys(r);
      for (n = 0; n < i.length; ++n) {
        if ((o = i[n]) !== "removeListener") {
          this.removeAllListeners(o);
        }
      }
      this.removeAllListeners("removeListener");
      this._events = Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    if (typeof (t = r[e]) == "function") {
      this.removeListener(e, t);
    } else if (t !== undefined) {
      for (n = t.length - 1; n >= 0; n--) {
        this.removeListener(e, t[n]);
      }
    }
    return this;
  };
  s.prototype.listeners = function (e) {
    return h(this, e, true);
  };
  s.prototype.rawListeners = function (e) {
    return h(this, e, false);
  };
  s.listenerCount = function (e, t) {
    if (typeof e.listenerCount == "function") {
      return e.listenerCount(t);
    } else {
      return m.call(e, t);
    }
  };
  s.prototype.listenerCount = m;
  s.prototype.eventNames = function () {
    if (this._eventsCount > 0) {
      return n(this._events);
    } else {
      return [];
    }
  };
};
