// Module 496 - Savior Helper 496
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_156 = requireFn(156),
  dep_helper_116 = requireFn(116),
  var_a = dep_helper_122.rotr64_hi,
  var_s = dep_helper_122.rotr64_lo,
  var_u = dep_helper_122.shr64_hi,
  var_c = dep_helper_122.shr64_lo,
  var_l = dep_helper_122.sum64,
  var_f = dep_helper_122.sum64_hi,
  var_d = dep_helper_122.sum64_lo,
  var_h = dep_helper_122.sum64_4_hi,
  var_p = dep_helper_122.sum64_4_lo,
  var_v = dep_helper_122.sum64_5_hi,
  var_m = dep_helper_122.sum64_5_lo,
  var_y = dep_helper_156.BlockHash,
  list_g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
  3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748,
  2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542,
  607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206,
  991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458,
  4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
  1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
  2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671,
  3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383,
  338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
  1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480,
  2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411,
  3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
  3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
  3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
  958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779,
  3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306,
  2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479,
  2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
  3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421,
  2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836,
  852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470,
  3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
  function var_b() {
  if (!(this instanceof var_b)) return new var_b();
  var_y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
  4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
  528734635, 4215389547, 1541459225, 327033209], this.k = list_g, this.W = new Array(
  160);
  }
  function var_w(param_t, param_e, param_r, param_n, param_i) {
  var var_o = param_t & param_r ^ ~param_t & param_i;
  return var_o < 0 && (var_o += 4294967296), var_o;
  }
  function var_A(param_t, param_e, param_r, param_n, param_i, param_o) {
  var var_a_1 = param_e & param_n ^ ~param_e & param_o;
  return var_a_1 < 0 && (var_a_1 += 4294967296), var_a_1;
  }
  function var__(param_t, param_e, param_r, param_n, param_i) {
  var var_o = param_t & param_r ^ param_t & param_i ^ param_r & param_i;
  return var_o < 0 && (var_o += 4294967296), var_o;
  }
  function var_E(param_t, param_e, param_r, param_n, param_i, param_o) {
  var var_a_1 = param_e & param_n ^ param_e & param_o ^ param_n & param_o;
  return var_a_1 < 0 && (var_a_1 += 4294967296), var_a_1;
  }
  function var_S(param_t, param_e) {
  var var_r = var_a(param_t, param_e, 28) ^ var_a(param_e, param_t, 2) ^ var_a(param_e,
  param_t, 7);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_O(param_t, param_e) {
  var var_r = var_s(param_t, param_e, 28) ^ var_s(param_e, param_t, 2) ^ var_s(param_e,
  param_t, 7);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_x(param_t, param_e) {
  var var_r = var_a(param_t, param_e, 14) ^ var_a(param_t, param_e, 18) ^ var_a(
  param_e, param_t, 9);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_k(param_t, param_e) {
  var var_r = var_s(param_t, param_e, 14) ^ var_s(param_t, param_e, 18) ^ var_s(
  param_e, param_t, 9);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_M(param_t, param_e) {
  var var_r = var_a(param_t, param_e, 1) ^ var_a(param_t, param_e, 8) ^ var_u(param_t,
  param_e, 7);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_T(param_t, param_e) {
  var var_r = var_s(param_t, param_e, 1) ^ var_s(param_t, param_e, 8) ^ var_c(param_t,
  param_e, 7);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_I(param_t, param_e) {
  var var_r = var_a(param_t, param_e, 19) ^ var_a(param_e, param_t, 29) ^ var_u(
  param_t, param_e, 6);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  function var_j(param_t, param_e) {
  var var_r = var_s(param_t, param_e, 19) ^ var_s(param_e, param_t, 29) ^ var_c(
  param_t, param_e, 6);
  return var_r < 0 && (var_r += 4294967296), var_r;
  }
  dep_helper_122.inherits(var_b, var_y), moduleObj.exports = var_b, var_b.blockSize = 1024,
  var_b.outSize = 512, var_b.hmacStrength = 192, var_b.padLength = 128, var_b.prototype._prepareBlock = function (
  param_t, param_e) {
  for (var var_r = this.W, num_n = 0;
  num_n < 32;
  num_n++) var_r[num_n] = param_t[param_e + num_n];
  for (;
  num_n < var_r.length;
  num_n += 2) {
  var var_i = var_I(var_r[num_n - 4], var_r[num_n - 3]),
  var_o = var_j(var_r[num_n - 4], var_r[num_n - 3]),
  var_a_1 = var_r[num_n - 14],
  var_s_1 = var_r[num_n - 13],
  var_u_1 = var_M(var_r[num_n - 30], var_r[num_n - 29]),
  var_c_1 = var_T(var_r[num_n - 30], var_r[num_n - 29]),
  var_l_1 = var_r[num_n - 32],
  var_f_1 = var_r[num_n - 31];
  var_r[num_n] = var_h(var_i, var_o, var_a_1, var_s_1, var_u_1, var_c_1, var_l_1,
  var_f_1), var_r[num_n + 1] = var_p(var_i, var_o, var_a_1, var_s_1, var_u_1, var_c_1,
  var_l_1, var_f_1);
  }
  }
  , var_b.prototype._update = function (param_t, param_e) {
  this._prepareBlock(param_t, param_e);
  var var_r = this.W,
  var_n = this.h[0],
  var_i = this.h[1],
  var_a_1 = this.h[2],
  var_s_1 = this.h[3],
  var_u_1 = this.h[4],
  var_c_1 = this.h[5],
  var_h_1 = this.h[6],
  var_p_1 = this.h[7],
  var_y_1 = this.h[8],
  var_g = this.h[9],
  var_b_1 = this.h[10],
  var_M_1 = this.h[11],
  var_T_1 = this.h[12],
  var_I_1 = this.h[13],
  var_j_1 = this.h[14],
  var_C = this.h[15];
  dep_helper_116(this.k.length === var_r.length);
  for (var num_B = 0;
  num_B < var_r.length;
  num_B += 2) {
  var var_U = var_j_1,
  var_P = var_C,
  var_N = var_x(var_y_1, var_g),
  var_D = var_k(var_y_1, var_g),
  var_R = var_w(var_y_1, var_g, var_b_1, var_M_1, var_T_1),
  var_L = var_A(var_y_1, var_g, var_b_1, var_M_1, var_T_1, var_I_1),
  var_q = this.k[num_B],
  var_F = this.k[num_B + 1],
  var_G = var_r[num_B],
  var_Q = var_r[num_B + 1],
  var_z = var_v(var_U, var_P, var_N, var_D, var_R, var_L, var_q, var_F, var_G, var_Q),
  var_H = var_m(var_U, var_P, var_N, var_D, var_R, var_L, var_q, var_F, var_G, var_Q);
  var_U = var_S(var_n, var_i), var_P = var_O(var_n, var_i), var_N = var__(var_n,
  var_i, var_a_1, var_s_1, var_u_1), var_D = var_E(var_n, var_i, var_a_1, var_s_1,
  var_u_1, var_c_1);
  var var_V = var_f(var_U, var_P, var_N, var_D),
  var_$ = var_d(var_U, var_P, var_N, var_D);
  var_j_1 = var_T_1, var_C = var_I_1, var_T_1 = var_b_1, var_I_1 = var_M_1, var_b_1 = var_y_1,
  var_M_1 = var_g, var_y_1 = var_f(var_h_1, var_p_1, var_z, var_H), var_g = var_d(
  var_p_1, var_p_1, var_z, var_H), var_h_1 = var_u_1, var_p_1 = var_c_1, var_u_1 = var_a_1,
  var_c_1 = var_s_1, var_a_1 = var_n, var_s_1 = var_i, var_n = var_f(var_z, var_H,
  var_V, var_$), var_i = var_d(var_z, var_H, var_V, var_$);
  }
  var_l(this.h, 0, var_n, var_i), var_l(this.h, 2, var_a_1, var_s_1), var_l(this.h,
  4, var_u_1, var_c_1), var_l(this.h, 6, var_h_1, var_p_1), var_l(this.h, 8, var_y_1,
  var_g), var_l(this.h, 10, var_b_1, var_M_1), var_l(this.h, 12, var_T_1, var_I_1),
  var_l(this.h, 14, var_j_1, var_C);
  }
  , var_b.prototype._digest = function (param_t) {
  return "hex" === param_t ? dep_helper_122.toHex32(this.h, "big") :
  dep_helper_122.split32(this.h, "big");
  };
  };
