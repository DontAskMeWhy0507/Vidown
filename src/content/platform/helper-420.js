// Module 420 - Savior Helper 420
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = "undefined" != typeof Symbol && Symbol,
  dep_helper_167 = requireFn(167);
  moduleObj.exports = function () {
  return "function" == typeof var_n && "function" == typeof Symbol &&
  "symbol" == typeof var_n("foo") && "symbol" == typeof Symbol("bar") &&
  dep_helper_167();
  };
  };
