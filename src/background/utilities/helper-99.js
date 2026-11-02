// Module 99 [utilities] - Subsystem utility helper (99)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  exportsObj.byteLength = function (param_e) {
  var var_t = var_u(param_e);
  var var_r = var_t[0];
  var var_n = var_t[1];
  return (var_r + var_n) * 3 / 4 - var_n;
  };
  exportsObj.toByteArray = function (param_e) {
  var var_t;
  var var_r;
  var var_n = var_u(param_e);
  var var_a = var_n[0];
  var var_s = var_n[1];
  var var_c_1 = new var_i(function (param_e_1, param_t, param_r) {
  return (param_t + param_r) * 3 / 4 - param_r;
  }
  (0, var_a, var_s));
  var num_l = 0;
  var var_d = var_s > 0 ? var_a - 4 : var_a;
  for (var_r = 0;
  var_r < var_d;
  var_r += 4) {
  var_t = list_o[param_e.charCodeAt(var_r)] << 18 | list_o[param_e.charCodeAt(var_r + 1)] << 12 | list_o[param_e.charCodeAt(
  var_r + 2)] << 6 | list_o[param_e.charCodeAt(var_r + 3)];
  var_c_1[num_l++] = var_t >> 16 & 255;
  var_c_1[num_l++] = var_t >> 8 & 255;
  var_c_1[num_l++] = var_t & 255;
  }
  if (var_s === 2) {
  var_t = list_o[param_e.charCodeAt(var_r)] << 2 | list_o[param_e.charCodeAt(var_r + 1)] >> 4;
  var_c_1[num_l++] = var_t & 255;
  }
  if (var_s === 1) {
  var_t = list_o[param_e.charCodeAt(var_r)] << 10 | list_o[param_e.charCodeAt(var_r + 1)] << 4 | list_o[param_e.charCodeAt(
  var_r + 2)] >> 2;
  var_c_1[num_l++] = var_t >> 8 & 255;
  var_c_1[num_l++] = var_t & 255;
  }
  return var_c_1;
  };
  exportsObj.fromByteArray = function (param_e) {
  var var_t;
  var var_r = param_e.length;
  var var_o = var_r % 3;
  var list_i = [];
  for (var num_a = 0, var_s = var_r - var_o;
  num_a < var_s;
  num_a += 16383) {
  list_i.push(var_l(param_e, num_a, num_a + 16383 > var_s ? var_s :
  num_a + 16383));
  }
  if (var_o === 1) {
  var_t = param_e[var_r - 1];
  list_i.push(list_n[var_t >> 2] + list_n[var_t << 4 & 63] + "==");
  }
  else if (var_o === 2) {
  var_t = (param_e[var_r - 2] << 8) + param_e[var_r - 1];
  list_i.push(list_n[var_t >> 10] + list_n[var_t >> 4 & 63] + list_n[var_t << 2 & 63] + "=");
  }
  return list_i.join("");
  };
  var list_n = [];
  var list_o = [];
  var var_i = typeof Uint8Array != "undefined" ? Uint8Array :
  Array;
  var str_a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var num_s = 0, var_c = str_a.length;
  num_s < var_c;
  ++num_s) {
  list_n[num_s] = str_a[num_s];
  list_o[str_a.charCodeAt(num_s)] = num_s;
  }
  function var_u(param_e) {
  var var_t = param_e.length;
  if (var_t % 4 > 0) {
  throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var var_r = param_e.indexOf("=");
  if (var_r === -1) {
  var_r = var_t;
  }
  return [var_r, var_r === var_t ? 0 : 4 - var_r % 4];
  }
  function var_l(param_e, param_t, param_r) {
  var var_o;
  var var_i_1;
  var list_a = [];
  for (var var_s = param_t;
  var_s < param_r;
  var_s += 3) {
  var_o = (param_e[var_s] << 16 & 16711680) + (param_e[var_s + 1] << 8 & 65280) + (
  param_e[var_s + 2] & 255);
  list_a.push(list_n[(var_i_1 = var_o) >> 18 & 63] + list_n[var_i_1 >> 12 & 63] + list_n[var_i_1 >> 6 & 63] + list_n[var_i_1 & 63]);
  }
  return list_a.join("");
  }
  list_o["-".charCodeAt(0)] = 62;
  list_o["_".charCodeAt(0)] = 63;
  };
