// Module 715 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  e.exports = function () {
    var e = {};
    for (var t = 0; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) {
        if (r.call(n, o)) {
          e[o] = n[o];
        }
      }
    }
    return e;
  };
  var r = Object.prototype.hasOwnProperty;
};
