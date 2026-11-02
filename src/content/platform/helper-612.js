// Module 612 - Savior Helper 612
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  var dep_helper_155 = requireFn(155);
  function var_i(param_t_1) {
  return param_t_1._prev = param_t_1._cipher.encryptBlock(param_t_1._prev), param_t_1._prev;
  }
  exportsObj.encrypt = function (param_e, param_r) {
  for (;
  param_e._cache.length < param_r.length;
  ) param_e._cache = param_t.concat([param_e._cache, var_i(param_e)]);
  var var_o = param_e._cache.slice(0, param_r.length);
  return param_e._cache = param_e._cache.slice(param_r.length), dep_helper_155(param_r,
  var_o);
  };
  }
  ).call(this, requireFn(27).Buffer);
  };
