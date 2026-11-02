// Module 610 - Savior Helper 610
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(25).Buffer;
  function var_i(param_t, param_e, param_r) {
  var var_i_1 = param_t._cipher.encryptBlock(param_t._prev)[0] ^ param_e;
  return param_t._prev = var_n.concat([param_t._prev.slice(1), var_n.from([param_r ?
  param_e : var_i_1])]), var_i_1;
  }
  exportsObj.encrypt = function (param_t, param_e, param_r) {
  for (var var_o = param_e.length, var_a = var_n.allocUnsafe(var_o), var_s = -1;
  ++var_s < var_o;
  ) var_a[var_s] = var_i(param_t, param_e[var_s], param_r);
  return var_a;
  };
  };
