// Module 426 - Savior Helper 426
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = function (param_e) {
  var var_r = param_e.toLowerCase(),
  var_n = moduleObj.exports[var_r];
  if (!var_n) throw new Error(var_r + " is not supported (we accept pull requests)");
  return new var_n();
  }
  , moduleObj.exports.sha = requireFn(594), moduleObj.exports.sha1 = requireFn(595),
  moduleObj.exports.sha224 = requireFn(596), moduleObj.exports.sha256 = requireFn(
  467), moduleObj.exports.sha384 = requireFn(597), moduleObj.exports.sha512 = requireFn(
  468);
  };
