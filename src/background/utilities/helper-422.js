// Module 422 [utilities] - Shared utility component (helper-422)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var str_n = "Function.prototype.bind called on incompatible ";
  var var_o = Object.prototype.toString;
  var var_i = Math.max;
  function var_a(param_e, param_t) {
  var list_r = [];
  for (var num_n = 0;
  num_n < param_e.length;
  num_n += 1) {
  list_r[num_n] = param_e[num_n];
  }
  for (var num_o = 0;
  num_o < param_t.length;
  num_o += 1) {
  list_r[num_o + param_e.length] = param_t[num_o];
  }
  return list_r;
  }
  function var_s(param_e, param_t) {
  var list_r = [];
  for (var var_n = param_t || 0, num_o = 0;
  var_n < param_e.length;
  var_n += 1, num_o += 1) {
  list_r[num_o] = param_e[var_n];
  }
  return list_r;
  }
  function var_c(param_e, param_t) {
  var str_r = "";
  for (var num_n = 0;
  num_n < param_e.length;
  num_n += 1) {
  str_r += param_e[num_n];
  if (num_n + 1 < param_e.length) {
  str_r += param_t;
  }
  }
  return str_r;
  }
  moduleObj.exports = function (param_e) {
  var var_t = this;
  if (typeof var_t != "function" || var_o.apply(var_t) !== "[object Function]") {
  throw new TypeError(str_n + var_t);
  }
  var var_r;
  var var_u = var_s(arguments, 1);
  var fn_l = function () {
  if (this instanceof var_r) {
  var var_n = var_t.apply(this, var_a(var_u, arguments));
  if (Object(var_n) === var_n) {
  return var_n;
  }
  else {
  return this;
  }
  }
  return var_t.apply(param_e, var_a(var_u, arguments));
  };
  for (var var_d = var_i(0, var_t.length - var_u.length), list_p = [], num_f = 0;
  num_f < var_d;
  num_f++) {
  list_p[num_f] = "$" + num_f;
  }
  var_r = Function("binder", "return function (" + var_c(list_p, ",") + "){ return binder.apply(this,arguments); }")(
  fn_l);
  if (var_t.prototype) {
  function var_h() {
  }
  var_h.prototype = var_t.prototype;
  var_r.prototype = new var_h();
  var_h.prototype = null;
  }
  return var_r;
  };
  };
