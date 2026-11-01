// Module 83 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  e.exports = o;
  var n = r(42).EventEmitter;
  function o() {
    n.call(this);
  }
  r(15)(o, n);
  o.Readable = r(47);
  o.Writable = r(109);
  o.Duplex = r(110);
  o.Transform = r(111);
  o.PassThrough = r(112);
  o.Stream = o;
  o.prototype.pipe = function (e, t) {
    var r = this;
    function o(t) {
      if (e.writable && e.write(t) === false && r.pause) {
        r.pause();
      }
    }
    function i() {
      if (r.readable && r.resume) {
        r.resume();
      }
    }
    r.on("data", o);
    e.on("drain", i);
    if (!e._isStdio && (!t || t.end !== false)) {
      r.on("end", s);
      r.on("close", c);
    }
    var a = false;
    function s() {
      if (!a) {
        a = true;
        e.end();
      }
    }
    function c() {
      if (!a) {
        a = true;
        if (typeof e.destroy == "function") {
          e.destroy();
        }
      }
    }
    function u(e) {
      l();
      if (n.listenerCount(this, "error") === 0) {
        throw e;
      }
    }
    function l() {
      r.removeListener("data", o);
      e.removeListener("drain", i);
      r.removeListener("end", s);
      r.removeListener("close", c);
      r.removeListener("error", u);
      e.removeListener("error", u);
      r.removeListener("end", l);
      r.removeListener("close", l);
      e.removeListener("close", l);
    }
    r.on("error", u);
    e.on("error", u);
    r.on("end", l);
    r.on("close", l);
    e.on("close", l);
    e.emit("pipe", r);
    return e;
  };
};
