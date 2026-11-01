// Module 146 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(36);
  var o = Object.keys || function (e) {
    var t = [];
    for (var r in e) {
      t.push(r);
    }
    return t;
  };
  e.exports = d;
  var i = Object.create(r(29));
  i.inherits = r(15);
  var a = r(510);
  var s = r(513);
  i.inherits(d, a);
  for (var c = o(s.prototype), u = 0; u < c.length; u++) {
    var l = c[u];
    d.prototype[l] ||= s.prototype[l];
  }
  function d(e) {
    if (!(this instanceof d)) {
      return new d(e);
    }
    a.call(this, e);
    s.call(this, e);
    if (e && e.readable === false) {
      this.readable = false;
    }
    if (e && e.writable === false) {
      this.writable = false;
    }
    this.allowHalfOpen = true;
    if (e && e.allowHalfOpen === false) {
      this.allowHalfOpen = false;
    }
    this.once("end", p);
  }
  function p() {
    if (!this.allowHalfOpen && !this._writableState.ended) {
      n.nextTick(f, this);
    }
  }
  function f(e) {
    e.end();
  }
  Object.defineProperty(d.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(d.prototype, "destroyed", {
    get: function () {
      return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (e) {
      if (this._readableState !== undefined && this._writableState !== undefined) {
        this._readableState.destroyed = e;
        this._writableState.destroyed = e;
      }
    }
  });
  d.prototype._destroy = function (e, t) {
    this.push(null);
    this.end();
    n.nextTick(t, e);
  };
};
