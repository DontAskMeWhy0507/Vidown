// Module 479 - Savior Helper 479
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_155 = requireFn(155),
  var_i = requireFn(25).Buffer,
  dep_helper_480 = requireFn(480);
  function var_a(param_t) {
  var var_e = param_t._cipher.encryptBlockRaw(param_t._prev);
  return dep_helper_480(param_t._prev), var_e;
  }
  exportsObj.encrypt = function (param_t, param_e) {
  var var_r = Math.ceil(param_e.length / 16),
  var_o = param_t._cache.length;
  param_t._cache = var_i.concat([param_t._cache, var_i.allocUnsafe(16 * var_r)]);
  for (var num_s = 0;
  num_s < var_r;
  num_s++) {
  var var_u = var_a(param_t),
  var_c = var_o + 16 * num_s;
  param_t._cache.writeUInt32BE(var_u[0], var_c + 0), param_t._cache.writeUInt32BE(
  var_u[1], var_c + 4), param_t._cache.writeUInt32BE(var_u[2], var_c + 8), param_t._cache.writeUInt32BE(
  var_u[3], var_c + 12);
  }
  var var_l = param_t._cache.slice(0, param_e.length);
  return param_t._cache = param_t._cache.slice(param_e.length), dep_helper_155(param_e,
  var_l);
  };
  };
