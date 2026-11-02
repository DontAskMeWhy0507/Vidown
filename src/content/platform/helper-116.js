// Module 116 - Savior Helper 116
export default function (moduleObj, exportsObj) {
  function var_r(param_t, param_e) {
  if (!param_t) throw new Error(param_e || "Assertion failed");
  }
  moduleObj.exports = var_r, var_r.equal = function (param_t, param_e, param_r) {
  if (param_t != param_e) throw new Error(param_r || "Assertion failed: " + param_t + " != " + param_e);
  };
  };
