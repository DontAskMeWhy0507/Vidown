// Module 514 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  e.exports = a;
  var n = r(146);
  var o = Object.create(r(29));
  function i(e, t) {
    var r = this._transformState;
    r.transforming = false;
    var n = r.writecb;
    if (!n) {
      return this.emit("error", new Error("write callback called multiple times"));
    }
    r.writechunk = null;
    r.writecb = null;
    if (t != null) {
      this.push(t);
    }
    n(e);
    var o = this._readableState;
    o.reading = false;
    if (o.needReadable || o.length < o.highWaterMark) {
      this._read(o.highWaterMark);
    }
  }
  function a(e) {
    if (!(this instanceof a)) {
      return new a(e);
    }
    n.call(this, e);
    this._transformState = {
      afterTransform: i.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (e) {
      if (typeof e.transform == "function") {
        this._transform = e.transform;
      }
      if (typeof e.flush == "function") {
        this._flush = e.flush;
      }
    }
    this.on("prefinish", s);
  }
  function s() {
    var e = this;
    if (typeof this._flush == "function") {
      this._flush(function (t, r) {
        c(e, t, r);
      });
    } else {
      c(this, null, null);
    }
  }
  function c(e, t, r) {
    if (t) {
      return e.emit("error", t);
    }
    if (r != null) {
      e.push(r);
    }
    if (e._writableState.length) {
      throw new Error("Calling transform done when ws.length != 0");
    }
    if (e._transformState.transforming) {
      throw new Error("Calling transform done when still transforming");
    }
    return e.push(null);
  }
  o.inherits = r(15);
  o.inherits(a, n);
  a.prototype.push = function (e, t) {
    this._transformState.needTransform = false;
    return n.prototype.push.call(this, e, t);
  };
  a.prototype._transform = function (e, t, r) {
    throw new Error("_transform() is not implemented");
  };
  a.prototype._write = function (e, t, r) {
    var n = this._transformState;
    n.writecb = r;
    n.writechunk = e;
    n.writeencoding = t;
    if (!n.transforming) {
      var o = this._readableState;
      if (n.needTransform || o.needReadable || o.length < o.highWaterMark) {
        this._read(o.highWaterMark);
      }
    }
  };
  a.prototype._read = function (e) {
    var t = this._transformState;
    if (t.writechunk !== null && t.writecb && !t.transforming) {
      t.transforming = true;
      this._transform(t.writechunk, t.writeencoding, t.afterTransform);
    } else {
      t.needTransform = true;
    }
  };
  a.prototype._destroy = function (e, t) {
    var r = this;
    n.prototype._destroy.call(this, e, function (e) {
      t(e);
      r.emit("close");
    });
  };
};
