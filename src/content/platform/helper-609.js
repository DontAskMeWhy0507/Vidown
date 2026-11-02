// Module 609 - Savior Helper 609
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(25).Buffer,
  dep_helper_155 = requireFn(155);
  function var_o(param_t, param_e, param_r) {
  var var_o_1 = param_e.length,
  var_a = dep_helper_155(param_e, param_t._cache);
  return param_t._cache = param_t._cache.slice(var_o_1), param_t._prev = var_n.concat(
  [param_t._prev, param_r ? param_e : var_a]), var_a;
  }
  exportsObj.encrypt = function (param_t, param_e, param_r) {
  for (var var_i, var_a = var_n.allocUnsafe(0);
  param_e.length;
  ) {
  if (0 === param_t._cache.length && (param_t._cache = param_t._cipher.encryptBlock(
  param_t._prev), param_t._prev = var_n.allocUnsafe(0)), !(param_t._cache.length <= param_e.length)) {
  var_a = var_n.concat([var_a, var_o(param_t, param_e, param_r)]);
  break;
  }
  var_i = param_t._cache.length, var_a = var_n.concat([var_a, var_o(param_t, param_e.slice(
  0, var_i), param_r)]), param_e = param_e.slice(var_i);
  }
  return var_a;
  };
  };
