// Module 15 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  if (typeof Object.create == "function") {
    e.exports = function (e, t) {
      if (t) {
        e.super_ = t;
        e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    e.exports = function (e, t) {
      if (t) {
        e.super_ = t;
        function r() {}
        r.prototype = t.prototype;
        e.prototype = new r();
        e.prototype.constructor = e;
      }
    };
  }
};
