// Module 611 - Savior Helper 611
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(25).Buffer;
  function var_i(param_t, param_e, param_r) {
  for (var var_n_1, var_i_1, var_a = -1, num_s = 0;
  ++var_a < 8;
  ) var_n_1 = param_e & 1 << 7 - var_a ? 128 : 0, num_s += (128 & (var_i_1 = param_t._cipher.encryptBlock(
  param_t._prev)[0] ^ var_n_1)) >> var_a % 8, param_t._prev = var_o(param_t._prev,
  param_r ? var_n_1 : var_i_1);
  return num_s;
  }
  function var_o(param_t, param_e) {
  var var_r = param_t.length,
  var_i_1 = -1,
  var_o_1 = var_n.allocUnsafe(param_t.length);
  for (param_t = var_n.concat([param_t, var_n.from([param_e])]);
  ++var_i_1 < var_r;
  ) var_o_1[var_i_1] = param_t[var_i_1] << 1 | param_t[var_i_1 + 1] >> 7;
  return var_o_1;
  }
  exportsObj.encrypt = function (param_t, param_e, param_r) {
  for (var var_o_1 = param_e.length, var_a = var_n.allocUnsafe(var_o_1), var_s = -1;
  ++var_s < var_o_1;
  ) var_a[var_s] = var_i(param_t, param_e[var_s], param_r);
  return var_a;
  };
  };
