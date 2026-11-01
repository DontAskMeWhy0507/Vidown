// Module 13 [utilities] - Savior Common Utility Subsystem
export default function (e, t) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      if (typeof window == "object") {
        n = window;
      }
    }
    e.exports = n;
  };
