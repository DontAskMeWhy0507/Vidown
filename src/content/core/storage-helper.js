// Module 91 - Savior Chrome and localStorage access wrapper
export default function(t, e, r) {
  (function(e2) {
    function r2(t2) {
      try {
        if (!e2.localStorage) return false;
      } catch (t3) {
        return false;
      }
      var r3 = e2.localStorage[t2];
      return null != r3 && "true" === String(r3).toLowerCase();
    }
    t.exports = function(t2, e3) {
      if (r2("noDeprecation")) return t2;
      var n = false;
      return function() {
        if (!n) {
          if (r2("throwDeprecation")) throw new Error(e3);
          r2("traceDeprecation") ? console.trace(e3) : console.warn(e3), n = true;
        }
        return t2.apply(this, arguments);
      };
    };
  }).call(this, r(13));
}
