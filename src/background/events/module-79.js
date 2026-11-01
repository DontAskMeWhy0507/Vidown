// Module 79 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = Object.prototype.hasOwnProperty;
  var o = "~";
  function i() {}
  function a(e, t, r) {
    this.fn = e;
    this.context = t;
    this.once = r || false;
  }
  function s(e, t, r, n, i) {
    if (typeof r != "function") {
      throw new TypeError("The listener must be a function");
    }
    var s = new a(r, n || e, i);
    var c = o ? o + t : t;
    if (e._events[c]) {
      if (e._events[c].fn) {
        e._events[c] = [e._events[c], s];
      } else {
        e._events[c].push(s);
      }
    } else {
      e._events[c] = s;
      e._eventsCount++;
    }
    return e;
  }
  function c(e, t) {
    if (--e._eventsCount == 0) {
      e._events = new i();
    } else {
      delete e._events[t];
    }
  }
  function u() {
    this._events = new i();
    this._eventsCount = 0;
  }
  if (Object.create) {
    i.prototype = Object.create(null);
    if (!new i().__proto__) {
      o = false;
    }
  }
  u.prototype.eventNames = function () {
    var e;
    var t;
    var r = [];
    if (this._eventsCount === 0) {
      return r;
    }
    for (t in e = this._events) {
      if (n.call(e, t)) {
        r.push(o ? t.slice(1) : t);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return r.concat(Object.getOwnPropertySymbols(e));
    } else {
      return r;
    }
  };
  u.prototype.listeners = function (e) {
    var t = o ? o + e : e;
    var r = this._events[t];
    if (!r) {
      return [];
    }
    if (r.fn) {
      return [r.fn];
    }
    for (var n = 0, i = r.length, a = new Array(i); n < i; n++) {
      a[n] = r[n].fn;
    }
    return a;
  };
  u.prototype.listenerCount = function (e) {
    var t = o ? o + e : e;
    var r = this._events[t];
    if (r) {
      if (r.fn) {
        return 1;
      } else {
        return r.length;
      }
    } else {
      return 0;
    }
  };
  u.prototype.emit = function (e, t, r, n, i, a) {
    var s = o ? o + e : e;
    if (!this._events[s]) {
      return false;
    }
    var c;
    var u;
    var l = this._events[s];
    var d = arguments.length;
    if (l.fn) {
      if (l.once) {
        this.removeListener(e, l.fn, undefined, true);
      }
      switch (d) {
        case 1:
          l.fn.call(l.context);
          return true;
        case 2:
          l.fn.call(l.context, t);
          return true;
        case 3:
          l.fn.call(l.context, t, r);
          return true;
        case 4:
          l.fn.call(l.context, t, r, n);
          return true;
        case 5:
          l.fn.call(l.context, t, r, n, i);
          return true;
        case 6:
          l.fn.call(l.context, t, r, n, i, a);
          return true;
      }
      u = 1;
      c = new Array(d - 1);
      for (; u < d; u++) {
        c[u - 1] = arguments[u];
      }
      l.fn.apply(l.context, c);
    } else {
      var p;
      var f = l.length;
      for (u = 0; u < f; u++) {
        if (l[u].once) {
          this.removeListener(e, l[u].fn, undefined, true);
        }
        switch (d) {
          case 1:
            l[u].fn.call(l[u].context);
            break;
          case 2:
            l[u].fn.call(l[u].context, t);
            break;
          case 3:
            l[u].fn.call(l[u].context, t, r);
            break;
          case 4:
            l[u].fn.call(l[u].context, t, r, n);
            break;
          default:
            if (!c) {
              p = 1;
              c = new Array(d - 1);
              for (; p < d; p++) {
                c[p - 1] = arguments[p];
              }
            }
            l[u].fn.apply(l[u].context, c);
        }
      }
    }
    return true;
  };
  u.prototype.on = function (e, t, r) {
    return s(this, e, t, r, false);
  };
  u.prototype.once = function (e, t, r) {
    return s(this, e, t, r, true);
  };
  u.prototype.removeListener = function (e, t, r, n) {
    var i = o ? o + e : e;
    if (!this._events[i]) {
      return this;
    }
    if (!t) {
      c(this, i);
      return this;
    }
    var a = this._events[i];
    if (a.fn) {
      if (a.fn === t && (!n || !!a.once) && (!r || a.context === r)) {
        c(this, i);
      }
    } else {
      for (var s = 0, u = [], l = a.length; s < l; s++) {
        if (a[s].fn !== t || n && !a[s].once || r && a[s].context !== r) {
          u.push(a[s]);
        }
      }
      if (u.length) {
        this._events[i] = u.length === 1 ? u[0] : u;
      } else {
        c(this, i);
      }
    }
    return this;
  };
  u.prototype.removeAllListeners = function (e) {
    var t;
    if (e) {
      t = o ? o + e : e;
      if (this._events[t]) {
        c(this, t);
      }
    } else {
      this._events = new i();
      this._eventsCount = 0;
    }
    return this;
  };
  u.prototype.off = u.prototype.removeListener;
  u.prototype.addListener = u.prototype.on;
  u.prefixed = o;
  u.EventEmitter = u;
  e.exports = u;
};
