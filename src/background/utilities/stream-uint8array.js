// Module 91 [utilities] - Stream / runtime utility component (stream-uint8array)
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  function var_r(param_e) {
  try {
  if (!param_t.localStorage) {
  return false;
  }
  }
  catch (var_e) {
  return false;
  }
  var var_r_1 = param_t.localStorage[param_e];
  return var_r_1 != null && String(var_r_1).toLowerCase() === "true";
  }
  moduleObj.exports = function (param_e, param_t_1) {
  if (var_r("noDeprecation")) {
  return param_e;
  }
  var flag_n = false;
  return function () {
  if (!flag_n) {
  if (var_r("throwDeprecation")) {
  throw new Error(param_t_1);
  }
  if (var_r("traceDeprecation")) {
  console.trace(param_t_1);
  }
  else {
  console.warn(param_t_1);
  }
  flag_n = true;
  }
  return param_e.apply(this, arguments);
  };
  };
  }
  ).call(this, requireFn(13));
  };
