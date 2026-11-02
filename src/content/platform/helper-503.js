// Module 503 - Savior Helper 503
export default function (moduleObj, exportsObj) {
  moduleObj.exports = function (param_t, param_e) {
  for (var var_r = param_t.length, var_n = -1;
  ++var_n < var_r;
  ) param_t[var_n] ^= param_e[var_n];
  return param_t;
  };
  };
