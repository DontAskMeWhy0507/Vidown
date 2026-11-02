// Module 498 - Savior Helper 498
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = exportsObj;
  var_n._reverse = function (param_t) {
  var obj_e = {
  };
  return Object.keys(param_t).forEach(function (param_r) {
  (0 | param_r) == param_r && (param_r |= 0);
  var var_n_1 = param_t[param_r];
  obj_e[var_n_1] = param_r;
  }
  ), obj_e;
  }
  , var_n.der = requireFn(658);
  };
