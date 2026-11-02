// Module 608 - Savior Helper 608
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_155 = requireFn(155);
  exportsObj.encrypt = function (param_t, param_e) {
  var var_r = dep_helper_155(param_e, param_t._prev);
  return param_t._prev = param_t._cipher.encryptBlock(var_r), param_t._prev;
  }
  , exportsObj.decrypt = function (param_t, param_e) {
  var var_r = param_t._prev;
  param_t._prev = param_e;
  var var_i = param_t._cipher.decryptBlock(param_e);
  return dep_helper_155(var_i, var_r);
  };
  };
