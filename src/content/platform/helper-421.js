// Module 421 - Savior Helper 421
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n,
  dep_helper_141 = requireFn(141),
  dep_helper_129 = requireFn(129);
  try {
  var_n = [].__proto__ === Array.prototype;
  }
  catch (var_t) {
  if (!var_t || "object" != typeof var_t || !("code" in var_t) ||
  "ERR_PROTO_ACCESS" !== var_t.code) throw var_t;
  }
  var var_a = !!var_n && dep_helper_129 && dep_helper_129(Object.prototype, "__proto__"),
  var_s = Object,
  var_u = var_s.getPrototypeOf;
  moduleObj.exports = var_a && "function" == typeof var_a.get ?
  dep_helper_141([var_a.get]) : "function" == typeof var_u &&
  function (param_t) {
  return var_u(null == param_t ? param_t : var_s(param_t));
  };
  };
