// Module 641 - Savior Helper 641
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_156 = requireFn(156),
  var_o = dep_helper_122.rotl32,
  var_a = dep_helper_122.sum32,
  var_s = dep_helper_122.sum32_3,
  var_u = dep_helper_122.sum32_4,
  var_c = dep_helper_156.BlockHash;
  function var_l() {
  if (!(this instanceof var_l)) return new var_l();
  var_c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
  this.endian = "little";
  }
  function var_f(param_t, param_e, param_r, param_n) {
  return param_t <= 15 ? param_e ^ param_r ^ param_n : param_t <= 31 ?
  param_e & param_r | ~param_e & param_n : param_t <= 47 ? (param_e | ~param_r) ^ param_n :
  param_t <= 63 ? param_e & param_n | param_r & ~param_n : param_e ^ (param_r | ~param_n);
  }
  function var_d(param_t) {
  return param_t <= 15 ? 0 : param_t <= 31 ? 1518500249 : param_t <= 47 ?
  1859775393 : param_t <= 63 ? 2400959708 : 2840853838;
  }
  function var_h(param_t) {
  return param_t <= 15 ? 1352829926 : param_t <= 31 ? 1548603684 :
  param_t <= 47 ? 1836072691 : param_t <= 63 ? 2053994217 : 0;
  }
  dep_helper_122.inherits(var_l, var_c), exportsObj.ripemd160 = var_l, var_l.blockSize = 512,
  var_l.outSize = 160, var_l.hmacStrength = 192, var_l.padLength = 64, var_l.prototype._update = function (
  param_t, param_e) {
  for (var var_r = this.h[0], var_n = this.h[1], var_i = this.h[2], var_c_1 = this.h[3],
  var_l_1 = this.h[4], var_g = var_r, var_b = var_n, var_w = var_i, var_A = var_c_1,
  var__ = var_l_1, num_E = 0;
  num_E < 80;
  num_E++) {
  var var_S = var_a(var_o(var_u(var_r, var_f(num_E, var_n, var_i, var_c_1), param_t[list_p[num_E] + param_e],
  var_d(num_E)), list_m[num_E]), var_l_1);
  var_r = var_l_1, var_l_1 = var_c_1, var_c_1 = var_o(var_i, 10), var_i = var_n,
  var_n = var_S, var_S = var_a(var_o(var_u(var_g, var_f(79 - num_E, var_b, var_w,
  var_A), param_t[list_v[num_E] + param_e], var_h(num_E)), list_y[num_E]), var__),
  var_g = var__, var__ = var_A, var_A = var_o(var_w, 10), var_w = var_b, var_b = var_S;
  }
  var_S = var_s(this.h[1], var_i, var_A), this.h[1] = var_s(this.h[2], var_c_1, var__),
  this.h[2] = var_s(this.h[3], var_l_1, var_g), this.h[3] = var_s(this.h[4], var_r,
  var_b), this.h[4] = var_s(this.h[0], var_n, var_w), this.h[0] = var_S;
  }
  , var_l.prototype._digest = function (param_t) {
  return "hex" === param_t ? dep_helper_122.toHex32(this.h, "little") :
  dep_helper_122.split32(this.h, "little");
  };
  var list_p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
  10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6,
  13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
  7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
  list_v = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
  13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
  0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4,
  1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
  list_m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
  11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8,
  13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
  15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
  list_y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
  12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5,
  14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
  12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  };
