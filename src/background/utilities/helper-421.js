// Module 421 [utilities] - Shared utility component (helper-421)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  var dep_helper_141 = requireFn(141);
  var dep_helper_129 = requireFn(129);
  try {
  var_n = [].__proto__ === Array.prototype;
  }
  catch (var_e) {
  if (!var_e || typeof var_e != "object" || !("code" in var_e) ||
  var_e.code !== "ERR_PROTO_ACCESS") {
  throw var_e;
  }
  }
  var var_a = !!var_n && dep_helper_129 && dep_helper_129(Object.prototype, "__proto__");
  var var_s = Object;
  var var_c = var_s.getPrototypeOf;
  moduleObj.exports = var_a && typeof var_a.get == "function" ?
  dep_helper_141([var_a.get]) : typeof var_c == "function" &&
  function (param_e) {
  return var_c(param_e == null ? param_e : var_s(param_e));
  };
  };
