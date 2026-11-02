// Module 492 - Savior Helper 492
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = exportsObj;
  function var_i(param_t) {
  return 1 === param_t.length ? "0" + param_t : param_t;
  }
  function var_o(param_t) {
  for (var str_e = "", num_r = 0;
  num_r < param_t.length;
  num_r++) str_e += var_i(param_t[num_r].toString(16));
  return str_e;
  }
  var_n.toArray = function (param_t, param_e) {
  if (Array.isArray(param_t)) return param_t.slice();
  if (!param_t) return [];
  var list_r = [];
  if ("string" != typeof param_t) {
  for (var num_n = 0;
  num_n < param_t.length;
  num_n++) list_r[num_n] = 0 | param_t[num_n];
  return list_r;
  }
  if ("hex" === param_e) {
  (param_t = param_t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
  (param_t = "0" + param_t);
  for (num_n = 0;
  num_n < param_t.length;
  num_n += 2) list_r.push(parseInt(param_t[num_n] + param_t[num_n + 1], 16));
  }
  else for (num_n = 0;
  num_n < param_t.length;
  num_n++) {
  var var_i_1 = param_t.charCodeAt(num_n),
  var_o_1 = var_i_1 >> 8,
  var_a = 255 & var_i_1;
  var_o_1 ? list_r.push(var_o_1, var_a) : list_r.push(var_a);
  }
  return list_r;
  }
  , var_n.zero2 = var_i, var_n.toHex = var_o, var_n.encode = function (param_t, param_e) {
  return "hex" === param_e ? var_o(param_t) : param_t;
  };
  };
