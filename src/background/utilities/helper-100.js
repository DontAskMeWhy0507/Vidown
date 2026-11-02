// Module 100 [utilities] - Subsystem utility helper (100)
export default function (moduleObj, exportsObj) {
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  exportsObj.read = function (param_e, param_t, param_r, param_n, param_o) {
  var var_i;
  var var_a;
  var var_s = param_o * 8 - param_n - 1;
  var var_c = (1 << var_s) - 1;
  var var_u = var_c >> 1;
  var var_l = -7;
  var var_d = param_r ? param_o - 1 : 0;
  var var_p = param_r ? -1 : 1;
  var var_f = param_e[param_t + var_d];
  var_d += var_p;
  var_i = var_f & (1 << -var_l) - 1;
  var_f >>= -var_l;
  var_l += var_s;
  for (;
  var_l > 0;
  var_l -= 8) {
  var_i = var_i * 256 + param_e[param_t + var_d];
  var_d += var_p;
  }
  var_a = var_i & (1 << -var_l) - 1;
  var_i >>= -var_l;
  var_l += param_n;
  for (;
  var_l > 0;
  var_l -= 8) {
  var_a = var_a * 256 + param_e[param_t + var_d];
  var_d += var_p;
  }
  if (var_i === 0) {
  var_i = 1 - var_u;
  }
  else {
  if (var_i === var_c) {
  if (var_a) {
  return NaN;
  }
  else {
  return (var_f ? -1 : 1) * Infinity;
  }
  }
  var_a += Math.pow(2, param_n);
  var_i -= var_u;
  }
  return (var_f ? -1 : 1) * var_a * Math.pow(2, var_i - param_n);
  };
  exportsObj.write = function (param_e, param_t, param_r, param_n, param_o, param_i) {
  var var_a;
  var var_s;
  var var_c;
  var var_u = param_i * 8 - param_o - 1;
  var var_l = (1 << var_u) - 1;
  var var_d = var_l >> 1;
  var var_p = param_o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) :
  0;
  var var_f = param_n ? 0 : param_i - 1;
  var var_h = param_n ? 1 : -1;
  var var_m = param_t < 0 || param_t === 0 && 1 / param_t < 0 ?
  1 : 0;
  param_t = Math.abs(param_t);
  if (isNaN(param_t) || param_t === Infinity) {
  var_s = isNaN(param_t) ? 1 : 0;
  var_a = var_l;
  }
  else {
  var_a = Math.floor(Math.log(param_t) / Math.LN2);
  if (param_t * (var_c = Math.pow(2, -var_a)) < 1) {
  var_a--;
  var_c *= 2;
  }
  if ((param_t += var_a + var_d >= 1 ? var_p / var_c : var_p * Math.pow(2, 1 - var_d)) * var_c >= 2) {
  var_a++;
  var_c /= 2;
  }
  if (var_a + var_d >= var_l) {
  var_s = 0;
  var_a = var_l;
  }
  else if (var_a + var_d >= 1) {
  var_s = (param_t * var_c - 1) * Math.pow(2, param_o);
  var_a += var_d;
  }
  else {
  var_s = param_t * Math.pow(2, var_d - 1) * Math.pow(2, param_o);
  var_a = 0;
  }
  }
  for (;
  param_o >= 8;
  param_o -= 8) {
  param_e[param_r + var_f] = var_s & 255;
  var_f += var_h;
  var_s /= 256;
  }
  var_a = var_a << param_o | var_s;
  var_u += param_o;
  for (;
  var_u > 0;
  var_u -= 8) {
  param_e[param_r + var_f] = var_a & 255;
  var_f += var_h;
  var_a /= 256;
  }
  param_e[param_r + var_f - var_h] |= var_m * 128;
  };
  };
