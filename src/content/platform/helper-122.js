// Module 122 - Savior Helper 122
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_116 = requireFn(116),
  dep_module_15 = requireFn(15);
  function var_o(param_t, param_e) {
  return 55296 == (64512 & param_t.charCodeAt(param_e)) && !(param_e < 0 ||
  param_e + 1 >= param_t.length) && 56320 == (64512 & param_t.charCodeAt(param_e + 1));
  }
  function var_a(param_t) {
  return (param_t >>> 24 | param_t >>> 8 & 65280 | param_t << 8 & 16711680 | (255 & param_t) << 24) >>> 0;
  }
  function var_s(param_t) {
  return 1 === param_t.length ? "0" + param_t : param_t;
  }
  function var_u(param_t) {
  return 7 === param_t.length ? "0" + param_t : 6 === param_t.length ?
  "00" + param_t : 5 === param_t.length ? "000" + param_t : 4 === param_t.length ?
  "0000" + param_t : 3 === param_t.length ? "00000" + param_t :
  2 === param_t.length ? "000000" + param_t : 1 === param_t.length ?
  "0000000" + param_t : param_t;
  }
  exportsObj.inherits = dep_module_15, exportsObj.toArray = function (param_t, param_e) {
  if (Array.isArray(param_t)) return param_t.slice();
  if (!param_t) return [];
  var list_r = [];
  if ("string" == typeof param_t) {
  if (param_e) {
  if ("hex" === param_e) for ((param_t = param_t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
  (param_t = "0" + param_t), num_i = 0;
  num_i < param_t.length;
  num_i += 2) list_r.push(parseInt(param_t[num_i] + param_t[num_i + 1], 16));
  }
  else for (var num_n = 0, num_i = 0;
  num_i < param_t.length;
  num_i++) {
  var var_a_1 = param_t.charCodeAt(num_i);
  var_a_1 < 128 ? list_r[num_n++] = var_a_1 : var_a_1 < 2048 ?
  (list_r[num_n++] = var_a_1 >> 6 | 192, list_r[num_n++] = 63 & var_a_1 | 128) :
  var_o(param_t, num_i) ? (var_a_1 = 65536 + ((1023 & var_a_1) << 10) + (1023 & param_t.charCodeAt(
  ++num_i)), list_r[num_n++] = var_a_1 >> 18 | 240, list_r[num_n++] = var_a_1 >> 12 & 63 | 128,
  list_r[num_n++] = var_a_1 >> 6 & 63 | 128, list_r[num_n++] = 63 & var_a_1 | 128) :
  (list_r[num_n++] = var_a_1 >> 12 | 224, list_r[num_n++] = var_a_1 >> 6 & 63 | 128,
  list_r[num_n++] = 63 & var_a_1 | 128);
  }
  }
  else for (num_i = 0;
  num_i < param_t.length;
  num_i++) list_r[num_i] = 0 | param_t[num_i];
  return list_r;
  }
  , exportsObj.toHex = function (param_t) {
  for (var str_e = "", num_r = 0;
  num_r < param_t.length;
  num_r++) str_e += var_s(param_t[num_r].toString(16));
  return str_e;
  }
  , exportsObj.htonl = var_a, exportsObj.toHex32 = function (param_t, param_e) {
  for (var str_r = "", num_n = 0;
  num_n < param_t.length;
  num_n++) {
  var var_i = param_t[num_n];
  "little" === param_e && (var_i = var_a(var_i)), str_r += var_u(var_i.toString(
  16));
  }
  return str_r;
  }
  , exportsObj.zero2 = var_s, exportsObj.zero8 = var_u, exportsObj.join32 = function (
  param_t, param_e, param_r, param_i) {
  var var_o_1 = param_r - param_e;
  dep_helper_116(var_o_1 % 4 == 0);
  for (var var_a_1 = new Array(var_o_1 / 4), num_s = 0, var_u_1 = param_e;
  num_s < var_a_1.length;
  num_s++, var_u_1 += 4) {
  var var_c;
  var_c = "big" === param_i ? param_t[var_u_1] << 24 | param_t[var_u_1 + 1] << 16 | param_t[var_u_1 + 2] << 8 | param_t[var_u_1 + 3] :
  param_t[var_u_1 + 3] << 24 | param_t[var_u_1 + 2] << 16 | param_t[var_u_1 + 1] << 8 | param_t[var_u_1],
  var_a_1[num_s] = var_c >>> 0;
  }
  return var_a_1;
  }
  , exportsObj.split32 = function (param_t, param_e) {
  for (var var_r = new Array(4 * param_t.length), num_n = 0, num_i = 0;
  num_n < param_t.length;
  num_n++, num_i += 4) {
  var var_o_1 = param_t[num_n];
  "big" === param_e ? (var_r[num_i] = var_o_1 >>> 24, var_r[num_i + 1] = var_o_1 >>> 16 & 255,
  var_r[num_i + 2] = var_o_1 >>> 8 & 255, var_r[num_i + 3] = 255 & var_o_1) :
  (var_r[num_i + 3] = var_o_1 >>> 24, var_r[num_i + 2] = var_o_1 >>> 16 & 255, var_r[num_i + 1] = var_o_1 >>> 8 & 255,
  var_r[num_i] = 255 & var_o_1);
  }
  return var_r;
  }
  , exportsObj.rotr32 = function (param_t, param_e) {
  return param_t >>> param_e | param_t << 32 - param_e;
  }
  , exportsObj.rotl32 = function (param_t, param_e) {
  return param_t << param_e | param_t >>> 32 - param_e;
  }
  , exportsObj.sum32 = function (param_t, param_e) {
  return param_t + param_e >>> 0;
  }
  , exportsObj.sum32_3 = function (param_t, param_e, param_r) {
  return param_t + param_e + param_r >>> 0;
  }
  , exportsObj.sum32_4 = function (param_t, param_e, param_r, param_n) {
  return param_t + param_e + param_r + param_n >>> 0;
  }
  , exportsObj.sum32_5 = function (param_t, param_e, param_r, param_n, param_i) {
  return param_t + param_e + param_r + param_n + param_i >>> 0;
  }
  , exportsObj.sum64 = function (param_t, param_e, param_r, param_n) {
  var var_i = param_t[param_e],
  var_o_1 = param_n + param_t[param_e + 1] >>> 0,
  var_a_1 = (var_o_1 < param_n ? 1 : 0) + param_r + var_i;
  param_t[param_e] = var_a_1 >>> 0, param_t[param_e + 1] = var_o_1;
  }
  , exportsObj.sum64_hi = function (param_t, param_e, param_r, param_n) {
  return (param_e + param_n >>> 0 < param_e ? 1 : 0) + param_t + param_r >>> 0;
  }
  , exportsObj.sum64_lo = function (param_t, param_e, param_r, param_n) {
  return param_e + param_n >>> 0;
  }
  , exportsObj.sum64_4_hi = function (param_t, param_e, param_r, param_n, param_i,
  param_o, param_a, param_s) {
  var num_u = 0,
  var_c = param_e;
  return num_u += (var_c = var_c + param_n >>> 0) < param_e ?
  1 : 0, num_u += (var_c = var_c + param_o >>> 0) < param_o ?
  1 : 0, param_t + param_r + param_i + param_a + (num_u += (var_c = var_c + param_s >>> 0) < param_s ?
  1 : 0) >>> 0;
  }
  , exportsObj.sum64_4_lo = function (param_t, param_e, param_r, param_n, param_i,
  param_o, param_a, param_s) {
  return param_e + param_n + param_o + param_s >>> 0;
  }
  , exportsObj.sum64_5_hi = function (param_t, param_e, param_r, param_n, param_i,
  param_o, param_a, param_s, param_u, param_c) {
  var num_l = 0,
  var_f = param_e;
  return num_l += (var_f = var_f + param_n >>> 0) < param_e ?
  1 : 0, num_l += (var_f = var_f + param_o >>> 0) < param_o ?
  1 : 0, num_l += (var_f = var_f + param_s >>> 0) < param_s ?
  1 : 0, param_t + param_r + param_i + param_a + param_u + (num_l += (var_f = var_f + param_c >>> 0) < param_c ?
  1 : 0) >>> 0;
  }
  , exportsObj.sum64_5_lo = function (param_t, param_e, param_r, param_n, param_i,
  param_o, param_a, param_s, param_u, param_c) {
  return param_e + param_n + param_o + param_s + param_c >>> 0;
  }
  , exportsObj.rotr64_hi = function (param_t, param_e, param_r) {
  return (param_e << 32 - param_r | param_t >>> param_r) >>> 0;
  }
  , exportsObj.rotr64_lo = function (param_t, param_e, param_r) {
  return (param_t << 32 - param_r | param_e >>> param_r) >>> 0;
  }
  , exportsObj.shr64_hi = function (param_t, param_e, param_r) {
  return param_t >>> param_r;
  }
  , exportsObj.shr64_lo = function (param_t, param_e, param_r) {
  return (param_t << 32 - param_r | param_e >>> param_r) >>> 0;
  };
  };
