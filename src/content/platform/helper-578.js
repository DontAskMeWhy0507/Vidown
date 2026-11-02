// Module 578 - Savior Helper 578
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_579 = requireFn(579),
  var_i = Object.prototype.toString,
  var_o = Object.prototype.hasOwnProperty,
  fn_a = function (param_t, param_e, param_r) {
  for (var num_n = 0, var_i_1 = param_t.length;
  num_n < var_i_1;
  num_n++) var_o.call(param_t, num_n) && (null == param_r ? param_e(param_t[num_n],
  num_n, param_t) : param_e.call(param_r, param_t[num_n], num_n, param_t));
  }
  ,
  fn_s = function (param_t, param_e, param_r) {
  for (var num_n = 0, var_i_1 = param_t.length;
  num_n < var_i_1;
  num_n++) null == param_r ? param_e(param_t.charAt(num_n), num_n, param_t) :
  param_e.call(param_r, param_t.charAt(num_n), num_n, param_t);
  }
  ,
  fn_u = function (param_t, param_e, param_r) {
  for (var var_n in param_t) var_o.call(param_t, var_n) && (null == param_r ?
  param_e(param_t[var_n], var_n, param_t) : param_e.call(param_r, param_t[var_n],
  var_n, param_t));
  };
  function var_c(param_t) {
  return "[object Array]" === var_i.call(param_t);
  }
  moduleObj.exports = function (param_t, param_e, param_r) {
  if (!dep_helper_579(param_e)) throw new TypeError("iterator must be a function");
  var var_i_1;
  arguments.length >= 3 && (var_i_1 = param_r), var_c(param_t) ?
  fn_a(param_t, param_e, var_i_1) : "string" == typeof param_t ?
  fn_s(param_t, param_e, var_i_1) : fn_u(param_t, param_e, var_i_1);
  };
  };
