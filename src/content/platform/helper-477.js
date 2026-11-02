// Module 477 - Savior Helper 477
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  exportsObj.readUInt32BE = function (param_t, param_e) {
  return (param_t[0 + param_e] << 24 | param_t[1 + param_e] << 16 | param_t[2 + param_e] << 8 | param_t[3 + param_e]) >>> 0;
  }
  , exportsObj.writeUInt32BE = function (param_t, param_e, param_r) {
  param_t[0 + param_r] = param_e >>> 24, param_t[1 + param_r] = param_e >>> 16 & 255,
  param_t[2 + param_r] = param_e >>> 8 & 255, param_t[3 + param_r] = 255 & param_e;
  }
  , exportsObj.ip = function (param_t, param_e, param_r, param_n) {
  for (var num_i = 0, num_o = 0, num_a = 6;
  num_a >= 0;
  num_a -= 2) {
  for (var num_s = 0;
  num_s <= 24;
  num_s += 8) num_i <<= 1, num_i |= param_e >>> num_s + num_a & 1;
  for (num_s = 0;
  num_s <= 24;
  num_s += 8) num_i <<= 1, num_i |= param_t >>> num_s + num_a & 1;
  }
  for (num_a = 6;
  num_a >= 0;
  num_a -= 2) {
  for (num_s = 1;
  num_s <= 25;
  num_s += 8) num_o <<= 1, num_o |= param_e >>> num_s + num_a & 1;
  for (num_s = 1;
  num_s <= 25;
  num_s += 8) num_o <<= 1, num_o |= param_t >>> num_s + num_a & 1;
  }
  param_r[param_n + 0] = num_i >>> 0, param_r[param_n + 1] = num_o >>> 0;
  }
  , exportsObj.rip = function (param_t, param_e, param_r, param_n) {
  for (var num_i = 0, num_o = 0, num_a = 0;
  num_a < 4;
  num_a++) for (var num_s = 24;
  num_s >= 0;
  num_s -= 8) num_i <<= 1, num_i |= param_e >>> num_s + num_a & 1, num_i <<= 1, num_i |= param_t >>> num_s + num_a & 1;
  for (num_a = 4;
  num_a < 8;
  num_a++) for (num_s = 24;
  num_s >= 0;
  num_s -= 8) num_o <<= 1, num_o |= param_e >>> num_s + num_a & 1, num_o <<= 1, num_o |= param_t >>> num_s + num_a & 1;
  param_r[param_n + 0] = num_i >>> 0, param_r[param_n + 1] = num_o >>> 0;
  }
  , exportsObj.pc1 = function (param_t, param_e, param_r, param_n) {
  for (var num_i = 0, num_o = 0, num_a = 7;
  num_a >= 5;
  num_a--) {
  for (var num_s = 0;
  num_s <= 24;
  num_s += 8) num_i <<= 1, num_i |= param_e >> num_s + num_a & 1;
  for (num_s = 0;
  num_s <= 24;
  num_s += 8) num_i <<= 1, num_i |= param_t >> num_s + num_a & 1;
  }
  for (num_s = 0;
  num_s <= 24;
  num_s += 8) num_i <<= 1, num_i |= param_e >> num_s + num_a & 1;
  for (num_a = 1;
  num_a <= 3;
  num_a++) {
  for (num_s = 0;
  num_s <= 24;
  num_s += 8) num_o <<= 1, num_o |= param_e >> num_s + num_a & 1;
  for (num_s = 0;
  num_s <= 24;
  num_s += 8) num_o <<= 1, num_o |= param_t >> num_s + num_a & 1;
  }
  for (num_s = 0;
  num_s <= 24;
  num_s += 8) num_o <<= 1, num_o |= param_t >> num_s + num_a & 1;
  param_r[param_n + 0] = num_i >>> 0, param_r[param_n + 1] = num_o >>> 0;
  }
  , exportsObj.r28shl = function (param_t, param_e) {
  return param_t << param_e & 268435455 | param_t >>> 28 - param_e;
  };
  var list_n = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20,
  12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0,
  22, 3, 10, 14, 6, 20, 27, 24];
  exportsObj.pc2 = function (param_t, param_e, param_r, param_i) {
  for (var num_o = 0, num_a = 0, var_s = list_n.length >>> 1, num_u = 0;
  num_u < var_s;
  num_u++) num_o <<= 1, num_o |= param_t >>> list_n[num_u] & 1;
  for (num_u = var_s;
  num_u < list_n.length;
  num_u++) num_a <<= 1, num_a |= param_e >>> list_n[num_u] & 1;
  param_r[param_i + 0] = num_o >>> 0, param_r[param_i + 1] = num_a >>> 0;
  }
  , exportsObj.expand = function (param_t, param_e, param_r) {
  var num_n = 0,
  num_i = 0;
  num_n = (1 & param_t) << 5 | param_t >>> 27;
  for (var num_o = 23;
  num_o >= 15;
  num_o -= 4) num_n <<= 6, num_n |= param_t >>> num_o & 63;
  for (num_o = 11;
  num_o >= 3;
  num_o -= 4) num_i |= param_t >>> num_o & 63, num_i <<= 6;
  num_i |= (31 & param_t) << 1 | param_t >>> 31, param_e[param_r + 0] = num_n >>> 0,
  param_e[param_r + 1] = num_i >>> 0;
  };
  var list_i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10,
  6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6,
  9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1,
  13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0,
  9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11,
  8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3,
  3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13,
  1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5,
  11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3,
  1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6,
  12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14,
  2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10,
  13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13,
  15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15,
  2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11,
  8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10,
  7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13,
  10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13,
  8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2,
  12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14,
  11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2,
  13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
  exportsObj.substitute = function (param_t, param_e) {
  for (var num_r = 0, num_n = 0;
  num_n < 4;
  num_n++) {
  num_r <<= 4, num_r |= list_i[64 * num_n + (param_t >>> 18 - 6 * num_n & 63)];
  }
  for (num_n = 0;
  num_n < 4;
  num_n++) {
  num_r <<= 4, num_r |= list_i[256 + 64 * num_n + (param_e >>> 18 - 6 * num_n & 63)];
  }
  return num_r >>> 0;
  };
  var list_o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24,
  8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
  exportsObj.permute = function (param_t) {
  for (var num_e = 0, num_r = 0;
  num_r < list_o.length;
  num_r++) num_e <<= 1, num_e |= param_t >>> list_o[num_r] & 1;
  return num_e >>> 0;
  }
  , exportsObj.padSplit = function (param_t, param_e, param_r) {
  for (var var_n = param_t.toString(2);
  var_n.length < param_e;
  ) var_n = "0" + var_n;
  for (var list_i_1 = [], num_o = 0;
  num_o < param_e;
  num_o += param_r) list_i_1.push(var_n.slice(num_o, num_o + param_r));
  return list_i_1.join(" ");
  };
  };
