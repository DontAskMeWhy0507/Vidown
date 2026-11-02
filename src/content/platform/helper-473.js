// Module 473 - Savior Helper 473
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = isFinite,
  var_i = Math.pow(2, 30) - 1;
  moduleObj.exports = function (param_t, param_e) {
  if ("number" != typeof param_t) throw new TypeError("Iterations not a number");
  if (param_t < 0 || !var_n(param_t)) throw new TypeError("Bad iterations");
  if ("number" != typeof param_e) throw new TypeError("Key length not a number");
  if (param_e < 0 || param_e > var_i || param_e != param_e) throw new TypeError(
  "Bad key length");
  return param_e + 0;
  };
  };
