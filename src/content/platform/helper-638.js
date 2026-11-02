// Module 638 - Savior Helper 638
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_156 = requireFn(156),
  dep_helper_494 = requireFn(494),
  var_a = dep_helper_122.rotl32,
  var_s = dep_helper_122.sum32,
  var_u = dep_helper_122.sum32_5,
  var_c = dep_helper_494.ft_1,
  var_l = dep_helper_156.BlockHash,
  list_f = [1518500249, 1859775393, 2400959708, 3395469782];
  function var_d() {
  if (!(this instanceof var_d)) return new var_d();
  var_l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
  this.W = new Array(80);
  }
  dep_helper_122.inherits(var_d, var_l), moduleObj.exports = var_d, var_d.blockSize = 512,
  var_d.outSize = 160, var_d.hmacStrength = 80, var_d.padLength = 64, var_d.prototype._update = function (
  param_t, param_e) {
  for (var var_r = this.W, num_n = 0;
  num_n < 16;
  num_n++) var_r[num_n] = param_t[param_e + num_n];
  for (;
  num_n < var_r.length;
  num_n++) var_r[num_n] = var_a(var_r[num_n - 3] ^ var_r[num_n - 8] ^ var_r[num_n - 14] ^ var_r[num_n - 16],
  1);
  var var_i = this.h[0],
  var_o = this.h[1],
  var_l_1 = this.h[2],
  var_d_1 = this.h[3],
  var_h = this.h[4];
  for (num_n = 0;
  num_n < var_r.length;
  num_n++) {
  var var_p = ~~(num_n / 20),
  var_v = var_u(var_a(var_i, 5), var_c(var_p, var_o, var_l_1, var_d_1), var_h, var_r[num_n],
  list_f[var_p]);
  var_h = var_d_1, var_d_1 = var_l_1, var_l_1 = var_a(var_o, 30), var_o = var_i,
  var_i = var_v;
  }
  this.h[0] = var_s(this.h[0], var_i), this.h[1] = var_s(this.h[1], var_o), this.h[2] = var_s(
  this.h[2], var_l_1), this.h[3] = var_s(this.h[3], var_d_1), this.h[4] = var_s(
  this.h[4], var_h);
  }
  , var_d.prototype._digest = function (param_t) {
  return "hex" === param_t ? dep_helper_122.toHex32(this.h, "big") :
  dep_helper_122.split32(this.h, "big");
  };
  };
