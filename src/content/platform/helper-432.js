// Module 432 - Savior Helper 432
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_433 = requireFn(433),
  dep_helper_139 = requireFn(139),
  var_o = requireFn(25).Buffer;
  function var_a(param_t) {
  var var_e,
  var_r = param_t.modulus.byteLength();
  do {
  var_e = new dep_module_433(dep_helper_139(var_r));
  }
  while (var_e.cmp(param_t.modulus) >= 0 || !var_e.umod(param_t.prime1) ||
  !var_e.umod(param_t.prime2));
  return var_e;
  }
  function var_s(param_t, param_e) {
  var var_r = function (param_t_1) {
  var var_e = var_a(param_t_1);
  return {
  blinder: var_e.toRed(dep_module_433.mont(param_t_1.modulus)).redPow(new dep_module_433(
  param_t_1.publicExponent)).fromRed(),
  unblinder: var_e.invm(param_t_1.modulus)
  };
  }
  (param_e),
  var_i = param_e.modulus.byteLength(),
  var_s_1 = new dep_module_433(param_t).mul(var_r.blinder).umod(param_e.modulus),
  var_u = var_s_1.toRed(dep_module_433.mont(param_e.prime1)),
  var_c = var_s_1.toRed(dep_module_433.mont(param_e.prime2)),
  var_l = param_e.coefficient,
  var_f = param_e.prime1,
  var_d = param_e.prime2,
  var_h = var_u.redPow(param_e.exponent1).fromRed(),
  var_p = var_c.redPow(param_e.exponent2).fromRed(),
  var_v = var_h.isub(var_p).imul(var_l).umod(var_f).imul(var_d);
  return var_p.iadd(var_v).imul(var_r.unblinder).umod(param_e.modulus).toArrayLike(
  var_o, "be", var_i);
  }
  var_s.getr = var_a, moduleObj.exports = var_s;
  };
