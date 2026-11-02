// Module 495 - Savior Helper 495
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_156 = requireFn(156),
  dep_helper_494 = requireFn(494),
  dep_helper_116 = requireFn(116),
  var_s = dep_helper_122.sum32,
  var_u = dep_helper_122.sum32_4,
  var_c = dep_helper_122.sum32_5,
  var_l = dep_helper_494.ch32,
  var_f = dep_helper_494.maj32,
  var_d = dep_helper_494.s0_256,
  var_h = dep_helper_494.s1_256,
  var_p = dep_helper_494.g0_256,
  var_v = dep_helper_494.g1_256,
  var_m = dep_helper_156.BlockHash,
  list_y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
  2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388,
  2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628,
  770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
  3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
  1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921,
  2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
  430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
  1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187,
  3204031479, 3329325298];
  function var_g() {
  if (!(this instanceof var_g)) return new var_g();
  var_m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
  2600822924, 528734635, 1541459225], this.k = list_y, this.W = new Array(64);
  }
  dep_helper_122.inherits(var_g, var_m), moduleObj.exports = var_g, var_g.blockSize = 512,
  var_g.outSize = 256, var_g.hmacStrength = 192, var_g.padLength = 64, var_g.prototype._update = function (
  param_t, param_e) {
  for (var var_r = this.W, num_n = 0;
  num_n < 16;
  num_n++) var_r[num_n] = param_t[param_e + num_n];
  for (;
  num_n < var_r.length;
  num_n++) var_r[num_n] = var_u(var_v(var_r[num_n - 2]), var_r[num_n - 7], var_p(
  var_r[num_n - 15]), var_r[num_n - 16]);
  var var_i = this.h[0],
  var_o = this.h[1],
  var_m_1 = this.h[2],
  var_y = this.h[3],
  var_g_1 = this.h[4],
  var_b = this.h[5],
  var_w = this.h[6],
  var_A = this.h[7];
  for (dep_helper_116(this.k.length === var_r.length), num_n = 0;
  num_n < var_r.length;
  num_n++) {
  var var__ = var_c(var_A, var_h(var_g_1), var_l(var_g_1, var_b, var_w), this.k[num_n],
  var_r[num_n]),
  var_E = var_s(var_d(var_i), var_f(var_i, var_o, var_m_1));
  var_A = var_w, var_w = var_b, var_b = var_g_1, var_g_1 = var_s(var_y, var__), var_y = var_m_1,
  var_m_1 = var_o, var_o = var_i, var_i = var_s(var__, var_E);
  }
  this.h[0] = var_s(this.h[0], var_i), this.h[1] = var_s(this.h[1], var_o), this.h[2] = var_s(
  this.h[2], var_m_1), this.h[3] = var_s(this.h[3], var_y), this.h[4] = var_s(this.h[4],
  var_g_1), this.h[5] = var_s(this.h[5], var_b), this.h[6] = var_s(this.h[6], var_w),
  this.h[7] = var_s(this.h[7], var_A);
  }
  , var_g.prototype._digest = function (param_t) {
  return "hex" === param_t ? dep_helper_122.toHex32(this.h, "big") :
  dep_helper_122.split32(this.h, "big");
  };
  };
