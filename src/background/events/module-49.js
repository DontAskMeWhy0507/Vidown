// Module 49 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (t, n, o) {
    var i = r(36);
    function a(e) {
      var t = this;
      this.next = null;
      this.entry = null;
      this.finish = function () {
        (function (e, t, r) {
          var n = e.entry;
          e.entry = null;
          while (n) {
            var o = n.callback;
            t.pendingcb--;
            o(r);
            n = n.next;
          }
          t.corkedRequestsFree.next = e;
        })(t, e);
      };
    }
    e.exports = y;
    var s;
    var c = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : i.nextTick;
    y.WritableState = v;
    var u = Object.create(r(29));
    u.inherits = r(15);
    var l = {
      deprecate: r(91)
    };
    var d = r(85);
    var p = r(48).Buffer;
    var f = (o !== undefined ? o : typeof window != "undefined" ? window : typeof self != "undefined" ? self : {}).Uint8Array || function () {};
    var h;
    var m = r(86);
    function g() {}
    function v(e, t) {
      s = s || r(30);
      e = e || {};
      var n = t instanceof s;
      this.objectMode = !!e.objectMode;
      if (n) {
        this.objectMode = this.objectMode || !!e.writableObjectMode;
      }
      var o = e.highWaterMark;
      var u = e.writableHighWaterMark;
      var l = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || o === 0 ? o : n && (u || u === 0) ? u : l;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var d = e.decodeStrings === false;
      this.decodeStrings = !d;
      this.defaultEncoding = e.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function (e) {
        (function (e, t) {
          var r = e._writableState;
          var n = r.sync;
          var o = r.writecb;
          (function (e) {
            e.writing = false;
            e.writecb = null;
            e.length -= e.writelen;
            e.writelen = 0;
          })(r);
          if (t) {
            (function (e, t, r, n, o) {
              --t.pendingcb;
              if (r) {
                i.nextTick(o, n);
                i.nextTick(T, e, t);
                e._writableState.errorEmitted = true;
                e.emit("error", n);
              } else {
                o(n);
                e._writableState.errorEmitted = true;
                e.emit("error", n);
                T(e, t);
              }
            })(e, r, n, t, o);
          } else {
            var a = E(r);
            if (!a && !r.corked && !r.bufferProcessing && !!r.bufferedRequest) {
              w(e, r);
            }
            if (n) {
              c(b, e, r, a, o);
            } else {
              b(e, r, a, o);
            }
          }
        })(t, e);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new a(this);
    }
    function y(e) {
      s = s || r(30);
      if (!h.call(y, this) && !(this instanceof s)) {
        return new y(e);
      }
      this._writableState = new v(e, this);
      this.writable = true;
      if (e) {
        if (typeof e.write == "function") {
          this._write = e.write;
        }
        if (typeof e.writev == "function") {
          this._writev = e.writev;
        }
        if (typeof e.destroy == "function") {
          this._destroy = e.destroy;
        }
        if (typeof e.final == "function") {
          this._final = e.final;
        }
      }
      d.call(this);
    }
    function _(e, t, r, n, o, i, a) {
      t.writelen = n;
      t.writecb = a;
      t.writing = true;
      t.sync = true;
      if (r) {
        e._writev(o, t.onwrite);
      } else {
        e._write(o, i, t.onwrite);
      }
      t.sync = false;
    }
    function b(e, t, r, n) {
      if (!r) {
        (function (e, t) {
          if (t.length === 0 && t.needDrain) {
            t.needDrain = false;
            e.emit("drain");
          }
        })(e, t);
      }
      t.pendingcb--;
      n();
      T(e, t);
    }
    function w(e, t) {
      t.bufferProcessing = true;
      var r = t.bufferedRequest;
      if (e._writev && r && r.next) {
        var n = t.bufferedRequestCount;
        var o = new Array(n);
        var i = t.corkedRequestsFree;
        i.entry = r;
        var s = 0;
        var c = true;
        while (r) {
          o[s] = r;
          if (!r.isBuf) {
            c = false;
          }
          r = r.next;
          s += 1;
        }
        o.allBuffers = c;
        _(e, t, true, t.length, o, "", i.finish);
        t.pendingcb++;
        t.lastBufferedRequest = null;
        if (i.next) {
          t.corkedRequestsFree = i.next;
          i.next = null;
        } else {
          t.corkedRequestsFree = new a(t);
        }
        t.bufferedRequestCount = 0;
      } else {
        while (r) {
          var u = r.chunk;
          var l = r.encoding;
          var d = r.callback;
          _(e, t, false, t.objectMode ? 1 : u.length, u, l, d);
          r = r.next;
          t.bufferedRequestCount--;
          if (t.writing) {
            break;
          }
        }
        if (r === null) {
          t.lastBufferedRequest = null;
        }
      }
      t.bufferedRequest = r;
      t.bufferProcessing = false;
    }
    function E(e) {
      return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
    }
    function D(e, t) {
      e._final(function (r) {
        t.pendingcb--;
        if (r) {
          e.emit("error", r);
        }
        t.prefinished = true;
        e.emit("prefinish");
        T(e, t);
      });
    }
    function T(e, t) {
      var r = E(t);
      if (r) {
        (function (e, t) {
          if (!t.prefinished && !t.finalCalled) {
            if (typeof e._final == "function") {
              t.pendingcb++;
              t.finalCalled = true;
              i.nextTick(D, e, t);
            } else {
              t.prefinished = true;
              e.emit("prefinish");
            }
          }
        })(e, t);
        if (t.pendingcb === 0) {
          t.finished = true;
          e.emit("finish");
        }
      }
      return r;
    }
    u.inherits(y, d);
    v.prototype.getBuffer = function () {
      for (var e = this.bufferedRequest, t = []; e;) {
        t.push(e);
        e = e.next;
      }
      return t;
    };
    (function () {
      try {
        Object.defineProperty(v.prototype, "buffer", {
          get: l.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (e) {}
    })();
    if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
      h = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(y, Symbol.hasInstance, {
        value: function (e) {
          return !!h.call(this, e) || this === y && e && e._writableState instanceof v;
        }
      });
    } else {
      h = function (e) {
        return e instanceof this;
      };
    }
    y.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    y.prototype.write = function (e, t, r) {
      var n;
      var o = this._writableState;
      var a = false;
      var s = !o.objectMode && (n = e, p.isBuffer(n) || n instanceof f);
      if (s && !p.isBuffer(e)) {
        e = function (e) {
          return p.from(e);
        }(e);
      }
      if (typeof t == "function") {
        r = t;
        t = null;
      }
      if (s) {
        t = "buffer";
      } else {
        t ||= o.defaultEncoding;
      }
      if (typeof r != "function") {
        r = g;
      }
      if (o.ended) {
        (function (e, t) {
          var r = new Error("write after end");
          e.emit("error", r);
          i.nextTick(t, r);
        })(this, r);
      } else if (s || function (e, t, r, n) {
        var o = true;
        var a = false;
        if (r === null) {
          a = new TypeError("May not write null values to stream");
        } else if (typeof r != "string" && r !== undefined && !t.objectMode) {
          a = new TypeError("Invalid non-string/buffer chunk");
        }
        if (a) {
          e.emit("error", a);
          i.nextTick(n, a);
          o = false;
        }
        return o;
      }(this, o, e, r)) {
        o.pendingcb++;
        a = function (e, t, r, n, o, i) {
          if (!r) {
            var a = function (e, t, r) {
              if (!e.objectMode && e.decodeStrings !== false && typeof t == "string") {
                t = p.from(t, r);
              }
              return t;
            }(t, n, o);
            if (n !== a) {
              r = true;
              o = "buffer";
              n = a;
            }
          }
          var s = t.objectMode ? 1 : n.length;
          t.length += s;
          var c = t.length < t.highWaterMark;
          if (!c) {
            t.needDrain = true;
          }
          if (t.writing || t.corked) {
            var u = t.lastBufferedRequest;
            t.lastBufferedRequest = {
              chunk: n,
              encoding: o,
              isBuf: r,
              callback: i,
              next: null
            };
            if (u) {
              u.next = t.lastBufferedRequest;
            } else {
              t.bufferedRequest = t.lastBufferedRequest;
            }
            t.bufferedRequestCount += 1;
          } else {
            _(e, t, false, s, n, o, i);
          }
          return c;
        }(this, o, s, e, t, r);
      }
      return a;
    };
    y.prototype.cork = function () {
      this._writableState.corked++;
    };
    y.prototype.uncork = function () {
      var e = this._writableState;
      if (e.corked) {
        e.corked--;
        if (!e.writing && !e.corked && !e.bufferProcessing && !!e.bufferedRequest) {
          w(this, e);
        }
      }
    };
    y.prototype.setDefaultEncoding = function (e) {
      if (typeof e == "string") {
        e = e.toLowerCase();
      }
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) {
        throw new TypeError("Unknown encoding: " + e);
      }
      this._writableState.defaultEncoding = e;
      return this;
    };
    Object.defineProperty(y.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    y.prototype._write = function (e, t, r) {
      r(new Error("_write() is not implemented"));
    };
    y.prototype._writev = null;
    y.prototype.end = function (e, t, r) {
      var n = this._writableState;
      if (typeof e == "function") {
        r = e;
        e = null;
        t = null;
      } else if (typeof t == "function") {
        r = t;
        t = null;
      }
      if (e != null) {
        this.write(e, t);
      }
      if (n.corked) {
        n.corked = 1;
        this.uncork();
      }
      if (!n.ending) {
        (function (e, t, r) {
          t.ending = true;
          T(e, t);
          if (r) {
            if (t.finished) {
              i.nextTick(r);
            } else {
              e.once("finish", r);
            }
          }
          t.ended = true;
          e.writable = false;
        })(this, n, r);
      }
    };
    Object.defineProperty(y.prototype, "destroyed", {
      get: function () {
        return this._writableState !== undefined && this._writableState.destroyed;
      },
      set: function (e) {
        if (this._writableState) {
          this._writableState.destroyed = e;
        }
      }
    });
    y.prototype.destroy = m.destroy;
    y.prototype._undestroy = m.undestroy;
    y.prototype._destroy = function (e, t) {
      this.end();
      t(e);
    };
  }).call(this, r(32), r(78).setImmediate, r(13));
};
