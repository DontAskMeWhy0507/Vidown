// Module 78 - Savior Environment context and window/self resolution
export default function(t, e, r) {
  (function(t2) {
    var n = void 0 !== t2 && t2 || "undefined" != typeof self && self || window, i = Function.prototype.apply;
    function o(t3, e2) {
      this._id = t3, this._clearFn = e2;
    }
    e.setTimeout = function() {
      return new o(i.call(setTimeout, n, arguments), clearTimeout);
    }, e.setInterval = function() {
      return new o(i.call(setInterval, n, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function(t3) {
      t3 && t3.close();
    }, o.prototype.unref = o.prototype.ref = function() {
    }, o.prototype.close = function() {
      this._clearFn.call(n, this._id);
    }, e.enroll = function(t3, e2) {
      clearTimeout(t3._idleTimeoutId), t3._idleTimeout = e2;
    }, e.unenroll = function(t3) {
      clearTimeout(t3._idleTimeoutId), t3._idleTimeout = -1;
    }, e._unrefActive = e.active = function(t3) {
      clearTimeout(t3._idleTimeoutId);
      var e2 = t3._idleTimeout;
      e2 >= 0 && (t3._idleTimeoutId = setTimeout((function() {
        t3._onTimeout && t3._onTimeout();
      }), e2));
    }, r(106), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t2 && t2.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t2 && t2.clearImmediate || this && this.clearImmediate;
  }).call(this, r(13));
}
