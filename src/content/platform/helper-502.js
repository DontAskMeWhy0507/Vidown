// Module 502 - Savior Helper 502
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_150 = requireFn(150),
  var_i = requireFn(25).Buffer;
  function var_o(param_t) {
  var var_e = var_i.allocUnsafe(4);
  return var_e.writeUInt32BE(param_t, 0), var_e;
  }
  moduleObj.exports = function (param_t, param_e) {
  for (var var_r, var_a = var_i.alloc(0), num_s = 0;
  var_a.length < param_e;
  ) var_r = var_o(num_s++), var_a = var_i.concat([var_a, dep_helper_150("sha1").update(
  param_t).update(var_r).digest()]);
  return var_a.slice(0, param_e);
  };
  };
