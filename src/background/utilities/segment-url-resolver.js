// Module 717 [utilities] - Media segment absolute URL resolver
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e, param_n) {
  var var_o;
  /*! https://mths.be/punycode v1.4.1 by @mathias */
  (function (param_i) {
  if (exportsObj) {
  exportsObj.nodeType;
  }
  if (param_e) {
  param_e.nodeType;
  }
  var var_a = typeof param_n == "object" && param_n;
  if (var_a.global !== var_a && var_a.window !== var_a) {
  var_a.self;
  }
  var var_s;
  var num_c = 2147483647;
  var regex_u = /^xn--/;
  var regex_l = /[^\x20-\x7E]/;
  var regex_d = /[\x2E\u3002\uFF0E\uFF61]/g;
  var obj_p = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
  };
  var var_f = Math.floor;
  var var_h = String.fromCharCode;
  function var_m(param_e_1) {
  throw new RangeError(obj_p[param_e_1]);
  }
  function var_g(param_e_1, param_t) {
  for (var var_r = param_e_1.length, list_n = [];
  var_r--;
  ) {
  list_n[var_r] = param_t(param_e_1[var_r]);
  }
  return list_n;
  }
  function var_v(param_e_1, param_t) {
  var var_r = param_e_1.split("@");
  var str_n = "";
  if (var_r.length > 1) {
  str_n = var_r[0] + "@";
  param_e_1 = var_r[1];
  }
  return str_n + var_g((param_e_1 = param_e_1.replace(regex_d, ".")).split("."),
  param_t).join(".");
  }
  function var_y(param_e_1) {
  for (var var_t, var_r, list_n = [], num_o = 0, var_i = param_e_1.length;
  num_o < var_i;
  ) {
  if ((var_t = param_e_1.charCodeAt(num_o++)) >= 55296 && var_t <= 56319 &&
  num_o < var_i) {
  if (((var_r = param_e_1.charCodeAt(num_o++)) & 64512) == 56320) {
  list_n.push(((var_t & 1023) << 10) + (var_r & 1023) + 65536);
  }
  else {
  list_n.push(var_t);
  num_o--;
  }
  }
  else {
  list_n.push(var_t);
  }
  }
  return list_n;
  }
  function var__(param_e_1) {
  return var_g(param_e_1, function (param_e_2) {
  var str_t = "";
  if (param_e_2 > 65535) {
  str_t += var_h((param_e_2 -= 65536) >>> 10 & 1023 | 55296);
  param_e_2 = param_e_2 & 1023 | 56320;
  }
  return str_t += var_h(param_e_2);
  }
  ).join("");
  }
  function var_b(param_e_1, param_t) {
  return param_e_1 + 22 + (param_e_1 < 26) * 75 - ((param_t != 0) << 5);
  }
  function var_w(param_e_1, param_t, param_r) {
  var num_n = 0;
  param_e_1 = param_r ? var_f(param_e_1 / 700) : param_e_1 >> 1;
  param_e_1 += var_f(param_e_1 / param_t);
  for (;
  param_e_1 > 455;
  num_n += 36) {
  param_e_1 = var_f(param_e_1 / 35);
  }
  return var_f(num_n + param_e_1 * 36 / (param_e_1 + 38));
  }
  function var_E(param_e_1) {
  var var_t;
  var var_r;
  var var_n;
  var var_o_1;
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_u;
  var var_l;
  var var_d;
  var var_p;
  var list_h = [];
  var var_g_1 = param_e_1.length;
  var num_v = 0;
  var num_y = 128;
  var num_b = 72;
  if ((var_r = param_e_1.lastIndexOf("-")) < 0) {
  var_r = 0;
  }
  var_n = 0;
  for (;
  var_n < var_r;
  ++var_n) {
  if (param_e_1.charCodeAt(var_n) >= 128) {
  var_m("not-basic");
  }
  list_h.push(param_e_1.charCodeAt(var_n));
  }
  for (var_o_1 = var_r > 0 ? var_r + 1 : 0;
  var_o_1 < var_g_1;
  ) {
  var_i = num_v;
  var_a_1 = 1;
  var_s_1 = 36;
  for (;
  var_o_1 >= var_g_1 && var_m("invalid-input"), ((var_u = (var_p = param_e_1.charCodeAt(
  var_o_1++)) - 48 < 10 ? var_p - 22 : var_p - 65 < 26 ? var_p - 65 :
  var_p - 97 < 26 ? var_p - 97 : 36) >= 36 || var_u > var_f((num_c - num_v) / var_a_1)) &&
  var_m("overflow"), num_v += var_u * var_a_1, !(var_u < (var_l = var_s_1 <= num_b ?
  1 : var_s_1 >= num_b + 26 ? 26 : var_s_1 - num_b));
  var_s_1 += 36) {
  if (var_a_1 > var_f(num_c / (var_d = 36 - var_l))) {
  var_m("overflow");
  }
  var_a_1 *= var_d;
  }
  num_b = var_w(num_v - var_i, var_t = list_h.length + 1, var_i == 0);
  if (var_f(num_v / var_t) > num_c - num_y) {
  var_m("overflow");
  }
  num_y += var_f(num_v / var_t);
  num_v %= var_t;
  list_h.splice(num_v++, 0, num_y);
  }
  return var__(list_h);
  }
  function var_D(param_e_1) {
  var var_t;
  var var_r;
  var var_n;
  var var_o_1;
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_u;
  var var_l;
  var var_d;
  var var_p;
  var var_g_1;
  var var_v_1;
  var var___1;
  var var_E_1;
  var list_D = [];
  var_g_1 = (param_e_1 = var_y(param_e_1)).length;
  var_t = 128;
  var_r = 0;
  var_i = 72;
  var_a_1 = 0;
  for (;
  var_a_1 < var_g_1;
  ++var_a_1) {
  if ((var_p = param_e_1[var_a_1]) < 128) {
  list_D.push(var_h(var_p));
  }
  }
  var_n = var_o_1 = list_D.length;
  if (var_o_1) {
  list_D.push("-");
  }
  while (var_n < var_g_1) {
  var_s_1 = num_c;
  var_a_1 = 0;
  for (;
  var_a_1 < var_g_1;
  ++var_a_1) {
  if ((var_p = param_e_1[var_a_1]) >= var_t && var_p < var_s_1) {
  var_s_1 = var_p;
  }
  }
  if (var_s_1 - var_t > var_f((num_c - var_r) / (var_v_1 = var_n + 1))) {
  var_m("overflow");
  }
  var_r += (var_s_1 - var_t) * var_v_1;
  var_t = var_s_1;
  var_a_1 = 0;
  for (;
  var_a_1 < var_g_1;
  ++var_a_1) {
  if ((var_p = param_e_1[var_a_1]) < var_t && ++var_r > num_c) {
  var_m("overflow");
  }
  if (var_p == var_t) {
  var_u = var_r;
  var_l = 36;
  for (;
  !(var_u < (var_d = var_l <= var_i ? 1 : var_l >= var_i + 26 ?
  26 : var_l - var_i));
  var_l += 36) {
  var_E_1 = var_u - var_d;
  var___1 = 36 - var_d;
  list_D.push(var_h(var_b(var_d + var_E_1 % var___1, 0)));
  var_u = var_f(var_E_1 / var___1);
  }
  list_D.push(var_h(var_b(var_u, 0)));
  var_i = var_w(var_r, var_v_1, var_n == var_o_1);
  var_r = 0;
  ++var_n;
  }
  }
  ++var_r;
  ++var_t;
  }
  return list_D.join("");
  }
  var_s = {
  version: "1.4.1",
  ucs2: {
  decode: var_y,
  encode: var__
  }
  ,
  decode: var_E,
  encode: var_D,
  toASCII: function (param_e_1) {
  return var_v(param_e_1, function (param_e_2) {
  if (regex_l.test(param_e_2)) {
  return "xn--" + var_D(param_e_2);
  }
  else {
  return param_e_2;
  }
  }
  );
  }
  ,
  toUnicode: function (param_e_1) {
  return var_v(param_e_1, function (param_e_2) {
  if (regex_u.test(param_e_2)) {
  return var_E(param_e_2.slice(4).toLowerCase());
  }
  else {
  return param_e_2;
  }
  }
  );
  }
  };
  if ((var_o = function () {
  return var_s;
  }
  .call(exportsObj, requireFn, exportsObj, param_e)) !== undefined) {
  param_e.exports = var_o;
  }
  }
  )();
  }
  ).call(this, requireFn(96)(moduleObj), requireFn(13));
  };
