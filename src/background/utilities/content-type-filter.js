// Module 706 [utilities] - MIME content-type filter and detector
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n(param_e, param_t) {
  return Object.prototype.hasOwnProperty.call(param_e, param_t);
  }
  moduleObj.exports = function (param_e, param_t, param_r, param_i) {
  param_t = param_t || "&";
  param_r = param_r || "=";
  var obj_a = {
  };
  if (typeof param_e != "string" || param_e.length === 0) {
  return obj_a;
  }
  var regex_s = /\+/g;
  param_e = param_e.split(param_t);
  var num_c = 1000;
  if (param_i && typeof param_i.maxKeys == "number") {
  num_c = param_i.maxKeys;
  }
  var var_u = param_e.length;
  if (num_c > 0 && var_u > num_c) {
  var_u = num_c;
  }
  for (var num_l = 0;
  num_l < var_u;
  ++num_l) {
  var var_d;
  var var_p;
  var var_f;
  var var_h;
  var var_m = param_e[num_l].replace(regex_s, "%20");
  var var_g = var_m.indexOf(param_r);
  if (var_g >= 0) {
  var_d = var_m.substr(0, var_g);
  var_p = var_m.substr(var_g + 1);
  }
  else {
  var_d = var_m;
  var_p = "";
  }
  var_f = decodeURIComponent(var_d);
  var_h = decodeURIComponent(var_p);
  if (var_n(obj_a, var_f)) {
  if (var_o(obj_a[var_f])) {
  obj_a[var_f].push(var_h);
  }
  else {
  obj_a[var_f] = [obj_a[var_f], var_h];
  }
  }
  else {
  obj_a[var_f] = var_h;
  }
  }
  return obj_a;
  };
  var var_o = Array.isArray || function (param_e) {
  return Object.prototype.toString.call(param_e) === "[object Array]";
  };
  };
