// Module 420 [utilities] - Shared utility component (helper-420)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = typeof Symbol != "undefined" && Symbol;
  var dep_helper_167 = requireFn(167);
  moduleObj.exports = function () {
  return typeof var_n == "function" && typeof Symbol == "function" &&
  typeof var_n("foo") == "symbol" && typeof Symbol("bar") == "symbol" &&
  dep_helper_167();
  };
  };
