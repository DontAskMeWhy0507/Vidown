// Module 510 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (t, n) {
    var o = r(36);
    e.exports = _;
    var i;
    var a = r(709);
    _.ReadableState = y;
    r(42).EventEmitter;
    function s(e, t) {
      return e.listeners(t).length;
    }
    var c = r(511);
    var u = r(439).Buffer;
    var l = (t !== undefined ? t : typeof window != "undefined" ? window : typeof self != "undefined" ? self : {}).Uint8Array || function () {};
    var d = Object.create(r(29));
    d.inherits = r(15);
    var p = r(710);
    var f = undefined;
    f = p && p.debuglog ? p.debuglog("stream") : function () {};
    var h;
    var m = r(711);
    var g = r(512);
    d.inherits(_, c);
    var v = ["error", "close", "destroy", "pause", "resume"];
    function y(e, t) {
      e = e || {};
      var n = t instanceof (i = i || r(146));
      this.objectMode = !!e.objectMode;
      if (n) {
        this.objectMode = this.objectMode || !!e.readableObjectMode;
      }
      var o = e.highWaterMark;
      var a = e.readableHighWaterMark;
      var s = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || o === 0 ? o : n && (a || a === 0) ? a : s;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new m();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = e.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (e.encoding) {
        h ||= r(46).StringDecoder;
        this.decoder = new h(e.encoding);
        this.encoding = e.encoding;
      }
    }
    function _(e) {
      i = i || r(146);
      if (!(this instanceof _)) {
        return new _(e);
      }
      this._readableState = new y(e, this);
      this.readable = true;
      if (e) {
        if (typeof e.read == "function") {
          this._read = e.read;
        }
        if (typeof e.destroy == "function") {
          this._destroy = e.destroy;
        }
      }
      c.call(this);
    }
    function b(e, t, r, n, o) {
      var i;
      var a = e._readableState;
      if (t === null) {
        a.reading = false;
        (function (e, t) {
          if (t.ended) {
            return;
          }
          if (t.decoder) {
            var r = t.decoder.end();
            if (r && r.length) {
              t.buffer.push(r);
              t.length += t.objectMode ? 1 : r.length;
            }
          }
          t.ended = true;
          D(e);
        })(e, a);
      } else {
        if (!o) {
          i = function (e, t) {
            var r;
            n = t;
            if (!u.isBuffer(n) && !(n instanceof l) && typeof t != "string" && t !== undefined && !e.objectMode) {
              r = new TypeError("Invalid non-string/buffer chunk");
            }
            var n;
            return r;
          }(a, t);
        }
        if (i) {
          e.emit("error", i);
        } else if (a.objectMode || t && t.length > 0) {
          if (typeof t != "string" && !a.objectMode && Object.getPrototypeOf(t) !== u.prototype) {
            t = function (e) {
              return u.from(e);
            }(t);
          }
          if (n) {
            if (a.endEmitted) {
              e.emit("error", new Error("stream.unshift() after end event"));
            } else {
              w(e, a, t, true);
            }
          } else if (a.ended) {
            e.emit("error", new Error("stream.push() after EOF"));
          } else {
            a.reading = false;
            if (a.decoder && !r) {
              t = a.decoder.write(t);
              if (a.objectMode || t.length !== 0) {
                w(e, a, t, false);
              } else {
                k(e, a);
              }
            } else {
              w(e, a, t, false);
            }
          }
        } else if (!n) {
          a.reading = false;
        }
      }
      return function (e) {
        return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
      }(a);
    }
    function w(e, t, r, n) {
      if (t.flowing && t.length === 0 && !t.sync) {
        e.emit("data", r);
        e.read(0);
      } else {
        t.length += t.objectMode ? 1 : r.length;
        if (n) {
          t.buffer.unshift(r);
        } else {
          t.buffer.push(r);
        }
        if (t.needReadable) {
          D(e);
        }
      }
      k(e, t);
    }
    Object.defineProperty(_.prototype, "destroyed", {
      get: function () {
        return this._readableState !== undefined && this._readableState.destroyed;
      },
      set: function (e) {
        if (this._readableState) {
          this._readableState.destroyed = e;
        }
      }
    });
    _.prototype.destroy = g.destroy;
    _.prototype._undestroy = g.undestroy;
    _.prototype._destroy = function (e, t) {
      this.push(null);
      t(e);
    };
    _.prototype.push = function (e, t) {
      var r;
      var n = this._readableState;
      if (n.objectMode) {
        r = true;
      } else if (typeof e == "string") {
        if ((t = t || n.defaultEncoding) !== n.encoding) {
          e = u.from(e, t);
          t = "";
        }
        r = true;
      }
      return b(this, e, t, false, r);
    };
    _.prototype.unshift = function (e) {
      return b(this, e, null, true, false);
    };
    _.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };
    _.prototype.setEncoding = function (e) {
      h ||= r(46).StringDecoder;
      this._readableState.decoder = new h(e);
      this._readableState.encoding = e;
      return this;
    };
    function E(e, t) {
      if (e <= 0 || t.length === 0 && t.ended) {
        return 0;
      } else if (t.objectMode) {
        return 1;
      } else if (e != e) {
        if (t.flowing && t.length) {
          return t.buffer.head.data.length;
        } else {
          return t.length;
        }
      } else {
        if (e > t.highWaterMark) {
          t.highWaterMark = function (e) {
            if (e >= 8388608) {
              e = 8388608;
            } else {
              e--;
              e |= e >>> 1;
              e |= e >>> 2;
              e |= e >>> 4;
              e |= e >>> 8;
              e |= e >>> 16;
              e++;
            }
            return e;
          }(e);
        }
        if (e <= t.length) {
          return e;
        } else if (t.ended) {
          return t.length;
        } else {
          t.needReadable = true;
          return 0;
        }
      }
    }
    function D(e) {
      var t = e._readableState;
      t.needReadable = false;
      if (!t.emittedReadable) {
        f("emitReadable", t.flowing);
        t.emittedReadable = true;
        if (t.sync) {
          o.nextTick(T, e);
        } else {
          T(e);
        }
      }
    }
    function T(e) {
      f("emit readable");
      e.emit("readable");
      S(e);
    }
    function k(e, t) {
      if (!t.readingMore) {
        t.readingMore = true;
        o.nextTick(A, e, t);
      }
    }
    function A(e, t) {
      for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (f("maybeReadMore read 0"), e.read(0), r !== t.length);) {
        r = t.length;
      }
      t.readingMore = false;
    }
    function C(e) {
      f("readable nexttick read 0");
      e.read(0);
    }
    function x(e, t) {
      if (!t.reading) {
        f("resume read 0");
        e.read(0);
      }
      t.resumeScheduled = false;
      t.awaitDrain = 0;
      e.emit("resume");
      S(e);
      if (t.flowing && !t.reading) {
        e.read(0);
      }
    }
    function S(e) {
      var t = e._readableState;
      for (f("flow", t.flowing); t.flowing && e.read() !== null;);
    }
    function O(e, t) {
      if (t.length === 0) {
        return null;
      } else {
        if (t.objectMode) {
          r = t.buffer.shift();
        } else if (!e || e >= t.length) {
          r = t.decoder ? t.buffer.join("") : t.buffer.length === 1 ? t.buffer.head.data : t.buffer.concat(t.length);
          t.buffer.clear();
        } else {
          r = function (e, t, r) {
            var n;
            if (e < t.head.data.length) {
              n = t.head.data.slice(0, e);
              t.head.data = t.head.data.slice(e);
            } else {
              n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
                var r = t.head;
                var n = 1;
                var o = r.data;
                e -= o.length;
                while (r = r.next) {
                  var i = r.data;
                  var a = e > i.length ? i.length : e;
                  if (a === i.length) {
                    o += i;
                  } else {
                    o += i.slice(0, e);
                  }
                  if ((e -= a) === 0) {
                    if (a === i.length) {
                      ++n;
                      if (r.next) {
                        t.head = r.next;
                      } else {
                        t.head = t.tail = null;
                      }
                    } else {
                      t.head = r;
                      r.data = i.slice(a);
                    }
                    break;
                  }
                  ++n;
                }
                t.length -= n;
                return o;
              }(e, t) : function (e, t) {
                var r = u.allocUnsafe(e);
                var n = t.head;
                var o = 1;
                n.data.copy(r);
                e -= n.data.length;
                while (n = n.next) {
                  var i = n.data;
                  var a = e > i.length ? i.length : e;
                  i.copy(r, r.length - e, 0, a);
                  if ((e -= a) === 0) {
                    if (a === i.length) {
                      ++o;
                      if (n.next) {
                        t.head = n.next;
                      } else {
                        t.head = t.tail = null;
                      }
                    } else {
                      t.head = n;
                      n.data = i.slice(a);
                    }
                    break;
                  }
                  ++o;
                }
                t.length -= o;
                return r;
              }(e, t);
            }
            return n;
          }(e, t.buffer, t.decoder);
        }
        return r;
      }
      var r;
    }
    function I(e) {
      var t = e._readableState;
      if (t.length > 0) {
        throw new Error("\"endReadable()\" called on non-empty stream");
      }
      if (!t.endEmitted) {
        t.ended = true;
        o.nextTick(L, t, e);
      }
    }
    function L(e, t) {
      if (!e.endEmitted && e.length === 0) {
        e.endEmitted = true;
        t.readable = false;
        t.emit("end");
      }
    }
    function R(e, t) {
      for (var r = 0, n = e.length; r < n; r++) {
        if (e[r] === t) {
          return r;
        }
      }
      return -1;
    }
    _.prototype.read = function (e) {
      f("read", e);
      e = parseInt(e, 10);
      var t = this._readableState;
      var r = e;
      if (e !== 0) {
        t.emittedReadable = false;
      }
      if (e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended)) {
        f("read: emitReadable", t.length, t.ended);
        if (t.length === 0 && t.ended) {
          I(this);
        } else {
          D(this);
        }
        return null;
      }
      if ((e = E(e, t)) === 0 && t.ended) {
        if (t.length === 0) {
          I(this);
        }
        return null;
      }
      var n;
      var o = t.needReadable;
      f("need readable", o);
      if (t.length === 0 || t.length - e < t.highWaterMark) {
        f("length less than watermark", o = true);
      }
      if (t.ended || t.reading) {
        f("reading or ended", o = false);
      } else if (o) {
        f("do read");
        t.reading = true;
        t.sync = true;
        if (t.length === 0) {
          t.needReadable = true;
        }
        this._read(t.highWaterMark);
        t.sync = false;
        if (!t.reading) {
          e = E(r, t);
        }
      }
      if ((n = e > 0 ? O(e, t) : null) === null) {
        t.needReadable = true;
        e = 0;
      } else {
        t.length -= e;
      }
      if (t.length === 0) {
        if (!t.ended) {
          t.needReadable = true;
        }
        if (r !== e && t.ended) {
          I(this);
        }
      }
      if (n !== null) {
        this.emit("data", n);
      }
      return n;
    };
    _.prototype._read = function (e) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    _.prototype.pipe = function (e, t) {
      var r = this;
      var i = this._readableState;
      switch (i.pipesCount) {
        case 0:
          i.pipes = e;
          break;
        case 1:
          i.pipes = [i.pipes, e];
          break;
        default:
          i.pipes.push(e);
      }
      i.pipesCount += 1;
      f("pipe count=%d opts=%j", i.pipesCount, t);
      var c = (!t || t.end !== false) && e !== n.stdout && e !== n.stderr ? l : _;
      function u(t, n) {
        f("onunpipe");
        if (t === r && n && n.hasUnpiped === false) {
          n.hasUnpiped = true;
          f("cleanup");
          e.removeListener("close", v);
          e.removeListener("finish", y);
          e.removeListener("drain", d);
          e.removeListener("error", g);
          e.removeListener("unpipe", u);
          r.removeListener("end", l);
          r.removeListener("end", _);
          r.removeListener("data", m);
          p = true;
          if (!!i.awaitDrain && (!e._writableState || !!e._writableState.needDrain)) {
            d();
          }
        }
      }
      function l() {
        f("onend");
        e.end();
      }
      if (i.endEmitted) {
        o.nextTick(c);
      } else {
        r.once("end", c);
      }
      e.on("unpipe", u);
      var d = function (e) {
        return function () {
          var t = e._readableState;
          f("pipeOnDrain", t.awaitDrain);
          if (t.awaitDrain) {
            t.awaitDrain--;
          }
          if (t.awaitDrain === 0 && s(e, "data")) {
            t.flowing = true;
            S(e);
          }
        };
      }(r);
      e.on("drain", d);
      var p = false;
      var h = false;
      function m(t) {
        f("ondata");
        h = false;
        if (e.write(t) === false && !h) {
          if ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && R(i.pipes, e) !== -1) && !p) {
            f("false write response, pause", i.awaitDrain);
            i.awaitDrain++;
            h = true;
          }
          r.pause();
        }
      }
      function g(t) {
        f("onerror", t);
        _();
        e.removeListener("error", g);
        if (s(e, "error") === 0) {
          e.emit("error", t);
        }
      }
      function v() {
        e.removeListener("finish", y);
        _();
      }
      function y() {
        f("onfinish");
        e.removeListener("close", v);
        _();
      }
      function _() {
        f("unpipe");
        r.unpipe(e);
      }
      r.on("data", m);
      (function (e, t, r) {
        if (typeof e.prependListener == "function") {
          return e.prependListener(t, r);
        }
        if (e._events && e._events[t]) {
          if (a(e._events[t])) {
            e._events[t].unshift(r);
          } else {
            e._events[t] = [r, e._events[t]];
          }
        } else {
          e.on(t, r);
        }
      })(e, "error", g);
      e.once("close", v);
      e.once("finish", y);
      e.emit("pipe", r);
      if (!i.flowing) {
        f("pipe resume");
        r.resume();
      }
      return e;
    };
    _.prototype.unpipe = function (e) {
      var t = this._readableState;
      var r = {
        hasUnpiped: false
      };
      if (t.pipesCount === 0) {
        return this;
      }
      if (t.pipesCount === 1) {
        if (!e || e === t.pipes) {
          e ||= t.pipes;
          t.pipes = null;
          t.pipesCount = 0;
          t.flowing = false;
          if (e) {
            e.emit("unpipe", this, r);
          }
        }
        return this;
      }
      if (!e) {
        var n = t.pipes;
        var o = t.pipesCount;
        t.pipes = null;
        t.pipesCount = 0;
        t.flowing = false;
        for (var i = 0; i < o; i++) {
          n[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        }
        return this;
      }
      var a = R(t.pipes, e);
      if (a !== -1) {
        t.pipes.splice(a, 1);
        t.pipesCount -= 1;
        if (t.pipesCount === 1) {
          t.pipes = t.pipes[0];
        }
        e.emit("unpipe", this, r);
      }
      return this;
    };
    _.prototype.on = function (e, t) {
      var r = c.prototype.on.call(this, e, t);
      if (e === "data") {
        if (this._readableState.flowing !== false) {
          this.resume();
        }
      } else if (e === "readable") {
        var n = this._readableState;
        if (!n.endEmitted && !n.readableListening) {
          n.readableListening = n.needReadable = true;
          n.emittedReadable = false;
          if (n.reading) {
            if (n.length) {
              D(this);
            }
          } else {
            o.nextTick(C, this);
          }
        }
      }
      return r;
    };
    _.prototype.addListener = _.prototype.on;
    _.prototype.resume = function () {
      var e = this._readableState;
      if (!e.flowing) {
        f("resume");
        e.flowing = true;
        (function (e, t) {
          if (!t.resumeScheduled) {
            t.resumeScheduled = true;
            o.nextTick(x, e, t);
          }
        })(this, e);
      }
      return this;
    };
    _.prototype.pause = function () {
      f("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        f("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    _.prototype.wrap = function (e) {
      var t = this;
      var r = this._readableState;
      var n = false;
      e.on("end", function () {
        f("wrapped end");
        if (r.decoder && !r.ended) {
          var e = r.decoder.end();
          if (e && e.length) {
            t.push(e);
          }
        }
        t.push(null);
      });
      e.on("data", function (o) {
        if (!(f("wrapped data"), r.decoder && (o = r.decoder.write(o)), r.objectMode && o == null)) {
          if (r.objectMode || o && o.length) {
            if (!t.push(o)) {
              n = true;
              e.pause();
            }
          }
        }
      });
      for (var o in e) {
        if (this[o] === undefined && typeof e[o] == "function") {
          this[o] = function (t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          }(o);
        }
      }
      for (var i = 0; i < v.length; i++) {
        e.on(v[i], this.emit.bind(this, v[i]));
      }
      this._read = function (t) {
        f("wrapped _read", t);
        if (n) {
          n = false;
          e.resume();
        }
      };
      return this;
    };
    Object.defineProperty(_.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    });
    _._fromList = O;
  }).call(this, r(13), r(32));
};
