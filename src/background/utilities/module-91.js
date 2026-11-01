// Module 91 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (t) {
    function r(e) {
      try {
        if (!t.localStorage) {
          return false;
        }
      } catch (e) {
        return false;
      }
      var r = t.localStorage[e];
      return r != null && String(r).toLowerCase() === "true";
    }
    e.exports = function (e, t) {
      if (r("noDeprecation")) {
        return e;
      }
      var n = false;
      return function () {
        if (!n) {
          if (r("throwDeprecation")) {
            throw new Error(t);
          }
          if (r("traceDeprecation")) {
            console.trace(t);
          } else {
            console.warn(t);
          }
          n = true;
        }
        return e.apply(this, arguments);
      };
    };
  }).call(this, r(13));
};
