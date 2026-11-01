// Module 77 - Savior Object.assign polyfill and prototype binder
export default function(t, e) {
  function r() {
    return t.exports = r = Object.assign ? Object.assign.bind() : function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var r2 = arguments[e2];
        for (var n in r2) ({}).hasOwnProperty.call(r2, n) && (t2[n] = r2[n]);
      }
      return t2;
    }, t.exports.__esModule = true, t.exports.default = t.exports, r.apply(null, arguments);
  }
  t.exports = r, t.exports.__esModule = true, t.exports.default = t.exports;
}
