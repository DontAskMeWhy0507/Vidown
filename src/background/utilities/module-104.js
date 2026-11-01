// Module 104 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(48).Buffer;
  var o = r(105);
  e.exports = function () {
    function e() {
      (function (e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, e);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    e.prototype.push = function (e) {
      var t = {
        data: e,
        next: null
      };
      if (this.length > 0) {
        this.tail.next = t;
      } else {
        this.head = t;
      }
      this.tail = t;
      ++this.length;
    };
    e.prototype.unshift = function (e) {
      var t = {
        data: e,
        next: this.head
      };
      if (this.length === 0) {
        this.tail = t;
      }
      this.head = t;
      ++this.length;
    };
    e.prototype.shift = function () {
      if (this.length !== 0) {
        var e = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return e;
      }
    };
    e.prototype.clear = function () {
      this.head = this.tail = null;
      this.length = 0;
    };
    e.prototype.join = function (e) {
      if (this.length === 0) {
        return "";
      }
      for (var t = this.head, r = "" + t.data; t = t.next;) {
        r += e + t.data;
      }
      return r;
    };
    e.prototype.concat = function (e) {
      if (this.length === 0) {
        return n.alloc(0);
      }
      var t;
      var r;
      var o;
      var i = n.allocUnsafe(e >>> 0);
      for (var a = this.head, s = 0; a;) {
        t = a.data;
        r = i;
        o = s;
        t.copy(r, o);
        s += a.data.length;
        a = a.next;
      }
      return i;
    };
    return e;
  }();
  if (o && o.inspect && o.inspect.custom) {
    e.exports.prototype[o.inspect.custom] = function () {
      var e = o.inspect({
        length: this.length
      });
      return this.constructor.name + " " + e;
    };
  }
};
