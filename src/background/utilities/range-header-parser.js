// Module 707 [utilities] - HTTP Range request header builder and parser
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n(param_e) {
  switch (typeof param_e) {
  case "string":
  return param_e;
  case "boolean":
  if (param_e) {
  return "true";
  }
  else {
  return "false";
  }
  case "number":
  if (isFinite(param_e)) {
  return param_e;
  }
  else {
  return "";
  }
  default:
  return "";
  }
  }
  moduleObj.exports = function (param_e, param_t, param_r, param_s) {
  param_t = param_t || "&";
  param_r = param_r || "=";
  if (param_e === null) {
  param_e = undefined;
  }
  if (typeof param_e == "object") {
  return var_i(var_a(param_e), function (param_a) {
  var var_s = encodeURIComponent(var_n(param_a)) + param_r;
  if (var_o(param_e[param_a])) {
  return var_i(param_e[param_a], function (param_e_1) {
  return var_s + encodeURIComponent(var_n(param_e_1));
  }
  ).join(param_t);
  }
  else {
  return var_s + encodeURIComponent(var_n(param_e[param_a]));
  }
  }
  ).join(param_t);
  }
  else if (param_s) {
  return encodeURIComponent(var_n(param_s)) + param_r + encodeURIComponent(var_n(
  param_e));
  }
  else {
  return "";
  }
  };
  var var_o = Array.isArray || function (param_e) {
  return Object.prototype.toString.call(param_e) === "[object Array]";
  };
  function var_i(param_e, param_t) {
  if (param_e.map) {
  return param_e.map(param_t);
  }
  var list_r = [];
  for (var num_n = 0;
  num_n < param_e.length;
  num_n++) {
  list_r.push(param_t(param_e[num_n], num_n));
  }
  return list_r;
  }
  var var_a = Object.keys || function (param_e) {
  var list_t = [];
  for (var var_r in param_e) {
  if (Object.prototype.hasOwnProperty.call(param_e, var_r)) {
  list_t.push(var_r);
  }
  }
  return list_t;
  };
  };
