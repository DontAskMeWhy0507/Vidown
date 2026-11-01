// Module 420 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = typeof Symbol != "undefined" && Symbol;
  var o = r(167);
  e.exports = function () {
    return typeof n == "function" && typeof Symbol == "function" && typeof n("foo") == "symbol" && typeof Symbol("bar") == "symbol" && o();
  };
};
