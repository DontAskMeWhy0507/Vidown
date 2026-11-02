// Module 171 - Savior Helper 171
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(25).Buffer,
  dep_module_76 = requireFn(76);
  moduleObj.exports = function (param_t, param_e, param_r, param_o) {
  if (var_n.isBuffer(param_t) || (param_t = var_n.from(param_t, "binary")), param_e &&
  (var_n.isBuffer(param_e) || (param_e = var_n.from(param_e, "binary")), 8 !== param_e.length)) throw new RangeError(
  "salt should be Buffer with 8 byte length");
  for (var var_a = param_r / 8, var_s = var_n.alloc(var_a), var_u = var_n.alloc(
  param_o || 0), var_c = var_n.alloc(0);
  var_a > 0 || param_o > 0;
  ) {
  var var_l = new dep_module_76();
  var_l.update(var_c), var_l.update(param_t), param_e && var_l.update(param_e), var_c = var_l.digest(
  );
  var num_f = 0;
  if (var_a > 0) {
  var var_d = var_s.length - var_a;
  num_f = Math.min(var_a, var_c.length), var_c.copy(var_s, var_d, 0, num_f), var_a -= num_f;
  }
  if (num_f < var_c.length && param_o > 0) {
  var var_h = var_u.length - param_o,
  var_p = Math.min(param_o, var_c.length - num_f);
  var_c.copy(var_u, var_h, num_f, num_f + var_p), param_o -= var_p;
  }
  }
  return var_c.fill(0), {
  key: var_s,
  iv: var_u
  };
  };
  };
