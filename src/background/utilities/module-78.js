// Module 78 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e) {
    var n = e !== undefined && e || typeof self != "undefined" && self || window;
    var o = Function.prototype.apply;
    function i(e, t) {
      this._id = e;
      this._clearFn = t;
    }
    t.setTimeout = function () {
      return new i(o.call(setTimeout, n, arguments), clearTimeout);
    };
    t.setInterval = function () {
      return new i(o.call(setInterval, n, arguments), clearInterval);
    };
    t.clearTimeout = t.clearInterval = function (e) {
      if (e) {
        e.close();
      }
    };
    i.prototype.unref = i.prototype.ref = function () {};
    i.prototype.close = function () {
      this._clearFn.call(n, this._id);
    };
    t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId);
      e._idleTimeout = t;
    };
    t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId);
      e._idleTimeout = -1;
    };
    t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      if (t >= 0) {
        e._idleTimeoutId = setTimeout(function () {
          if (e._onTimeout) {
            e._onTimeout();
          }
        }, t);
      }
    };
    r(106);
    t.setImmediate = typeof self != "undefined" && self.setImmediate || e !== undefined && e.setImmediate || this && this.setImmediate;
    t.clearImmediate = typeof self != "undefined" && self.clearImmediate || e !== undefined && e.clearImmediate || this && this.clearImmediate;
  }).call(this, r(13));
};
