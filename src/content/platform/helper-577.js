// Module 577 - Savior Helper 577
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var dep_helper_578 = requireFn(578),
  dep_helper_580 = requireFn(580),
  dep_helper_582 = requireFn(582),
  dep_helper_151 = requireFn(151),
  dep_helper_129 = requireFn(129),
  dep_helper_168 = requireFn(168),
  var_c = dep_helper_151("Object.prototype.toString"),
  var_l = requireFn(587)(),
  var_f = "undefined" == typeof globalThis ? param_e : globalThis,
  var_d = dep_helper_580(),
  var_h = dep_helper_151("String.prototype.slice"),
  var_p = dep_helper_151("Array.prototype.indexOf", !0) || function (param_t, param_e_1) {
  for (var num_r = 0;
  num_r < param_t.length;
  num_r += 1) if (param_t[num_r] === param_e_1) return num_r;
  return -1;
  }
  ,
  obj_v = {
  __proto__: null
  };
  dep_helper_578(var_d, var_l && dep_helper_129 && dep_helper_168 ?
  function (param_t) {
  var var_e = new var_f[param_t]();
  if (Symbol.toStringTag in var_e && dep_helper_168) {
  var var_r = dep_helper_168(var_e),
  var_n = dep_helper_129(var_r, Symbol.toStringTag);
  if (!var_n && var_r) {
  var var_i = dep_helper_168(var_r);
  var_n = dep_helper_129(var_i, Symbol.toStringTag);
  }
  if (var_n && var_n.get) {
  var var_a = dep_helper_582(var_n.get);
  obj_v["$" + param_t] = var_a;
  }
  }
  }
  : function (param_t) {
  var var_e = new var_f[param_t](),
  var_r = var_e.slice || var_e.set;
  if (var_r) {
  var var_n = dep_helper_582(var_r);
  obj_v["$" + param_t] = var_n;
  }
  }
  ), moduleObj.exports = function (param_t) {
  if (!param_t || "object" != typeof param_t) return !1;
  if (!var_l) {
  var var_e = var_h(var_c(param_t), 8, -1);
  return function (param_t_1) {
  return var_p(var_d, param_t_1) > -1;
  }
  (var_e) ? var_e : "Object" === var_e && function (param_t_1) {
  var flag_e = !1;
  return dep_helper_578(obj_v, function (param_r, param_n) {
  if (!flag_e) try {
  param_r(param_t_1), flag_e = var_h(param_n, 1);
  }
  catch (var_t) {
  }
  }
  ), flag_e;
  }
  (param_t);
  }
  return dep_helper_129 ? function (param_t_1) {
  var flag_e = !1;
  return dep_helper_578(obj_v, function (param_r, param_n) {
  if (!flag_e) try {
  "$" + param_r(param_t_1) === param_n && (flag_e = var_h(param_n, 1));
  }
  catch (var_t) {
  }
  }
  ), flag_e;
  }
  (param_t) : null;
  };
  }
  ).call(this, requireFn(13));
  };
