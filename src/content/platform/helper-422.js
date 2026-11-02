// Module 422 - Savior Helper 422
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var str_n = "Function.prototype.bind called on incompatible ",
  var_i = Object.prototype.toString,
  var_o = Math.max,
  fn_a = function (param_t, param_e) {
  for (var list_r = [], num_n = 0;
  num_n < param_t.length;
  num_n += 1) list_r[num_n] = param_t[num_n];
  for (var num_i = 0;
  num_i < param_e.length;
  num_i += 1) list_r[num_i + param_t.length] = param_e[num_i];
  return list_r;
  }
  ,
  fn_s = function (param_t, param_e) {
  for (var list_r = [], var_n = param_e || 0, num_i = 0;
  var_n < param_t.length;
  var_n += 1, num_i += 1) list_r[num_i] = param_t[var_n];
  return list_r;
  }
  ,
  fn_u = function (param_t, param_e) {
  for (var str_r = "", num_n = 0;
  num_n < param_t.length;
  num_n += 1) str_r += param_t[num_n], num_n + 1 < param_t.length &&
  (str_r += param_e);
  return str_r;
  };
  moduleObj.exports = function (param_t) {
  var var_e = this;
  if ("function" != typeof var_e || "[object Function]" !== var_i.apply(var_e)) throw new TypeError(
  str_n + var_e);
  for (var var_r, var_c = fn_s(arguments, 1), fn_l = function () {
  if (this instanceof var_r) {
  var var_n = var_e.apply(this, fn_a(var_c, arguments));
  return Object(var_n) === var_n ? var_n : this;
  }
  return var_e.apply(param_t, fn_a(var_c, arguments));
  }
  , var_f = var_o(0, var_e.length - var_c.length), list_d = [], num_h = 0;
  num_h < var_f;
  num_h++) list_d[num_h] = "$" + num_h;
  if (var_r = Function("binder", "return function (" + fn_u(list_d, ",") + "){ return binder.apply(this,arguments); }")(
  fn_l), var_e.prototype) {
  var fn_p = function () {
  };
  fn_p.prototype = var_e.prototype, var_r.prototype = new fn_p(), fn_p.prototype = null;
  }
  return var_r;
  };
  };
