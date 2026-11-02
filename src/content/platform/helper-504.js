// Module 504 - Savior Helper 504
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_437 = requireFn(437),
  var_i = requireFn(25).Buffer;
  moduleObj.exports = function (param_t, param_e) {
  return var_i.from(param_t.toRed(dep_module_437.mont(param_e.modulus)).redPow(new dep_module_437(
  param_e.publicExponent)).fromRed().toArray());
  };
  };
