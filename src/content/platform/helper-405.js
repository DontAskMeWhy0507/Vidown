// Module 405 - Savior Helper 405
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(27).Buffer,
  dep_module_15 = requireFn(15),
  dep_helper_572 = requireFn(572),
  var_a = new Array(16),
  list_s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
  6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
  11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
  12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
  list_u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
  13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
  0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4,
  1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
  list_c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
  11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8,
  13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
  15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
  list_l = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
  12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5,
  14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
  12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
  list_f = [0, 1518500249, 1859775393, 2400959708, 2840853838],
  list_d = [1352829926, 1548603684, 1836072691, 2053994217, 0];
  function var_h(param_t, param_e) {
  return param_t << param_e | param_t >>> 32 - param_e;
  }
  function var_p(param_t, param_e, param_r, param_n, param_i, param_o, param_a, param_s) {
  return var_h(param_t + (param_e ^ param_r ^ param_n) + param_o + param_a | 0, param_s) + param_i | 0;
  }
  function var_v(param_t, param_e, param_r, param_n, param_i, param_o, param_a, param_s) {
  return var_h(param_t + (param_e & param_r | ~param_e & param_n) + param_o + param_a | 0,
  param_s) + param_i | 0;
  }
  function var_m(param_t, param_e, param_r, param_n, param_i, param_o, param_a, param_s) {
  return var_h(param_t + ((param_e | ~param_r) ^ param_n) + param_o + param_a | 0,
  param_s) + param_i | 0;
  }
  function var_y(param_t, param_e, param_r, param_n, param_i, param_o, param_a, param_s) {
  return var_h(param_t + (param_e & param_n | param_r & ~param_n) + param_o + param_a | 0,
  param_s) + param_i | 0;
  }
  function var_g(param_t, param_e, param_r, param_n, param_i, param_o, param_a, param_s) {
  return var_h(param_t + (param_e ^ (param_r | ~param_n)) + param_o + param_a | 0,
  param_s) + param_i | 0;
  }
  function var_b() {
  dep_helper_572.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102,
  this._d = 271733878, this._e = 3285377520;
  }
  dep_module_15(var_b, dep_helper_572), var_b.prototype._update = function () {
  for (var var_t = var_a, num_e = 0;
  num_e < 16;
  ++num_e) var_t[num_e] = this._block.readInt32LE(4 * num_e);
  for (var var_r = 0 | this._a, var_n_1 = 0 | this._b, var_i = 0 | this._c, var_o = 0 | this._d,
  var_b_1 = 0 | this._e, var_w = 0 | this._a, var_A = 0 | this._b, var__ = 0 | this._c,
  var_E = 0 | this._d, var_S = 0 | this._e, num_O = 0;
  num_O < 80;
  num_O += 1) {
  var var_x, var_k;
  num_O < 16 ? (var_x = var_p(var_r, var_n_1, var_i, var_o, var_b_1, var_t[list_s[num_O]],
  list_f[0], list_c[num_O]), var_k = var_g(var_w, var_A, var__, var_E, var_S, var_t[list_u[num_O]],
  list_d[0], list_l[num_O])) : num_O < 32 ? (var_x = var_v(var_r, var_n_1, var_i,
  var_o, var_b_1, var_t[list_s[num_O]], list_f[1], list_c[num_O]), var_k = var_y(
  var_w, var_A, var__, var_E, var_S, var_t[list_u[num_O]], list_d[1], list_l[num_O])) :
  num_O < 48 ? (var_x = var_m(var_r, var_n_1, var_i, var_o, var_b_1, var_t[list_s[num_O]],
  list_f[2], list_c[num_O]), var_k = var_m(var_w, var_A, var__, var_E, var_S, var_t[list_u[num_O]],
  list_d[2], list_l[num_O])) : num_O < 64 ? (var_x = var_y(var_r, var_n_1, var_i,
  var_o, var_b_1, var_t[list_s[num_O]], list_f[3], list_c[num_O]), var_k = var_v(
  var_w, var_A, var__, var_E, var_S, var_t[list_u[num_O]], list_d[3], list_l[num_O])) :
  (var_x = var_g(var_r, var_n_1, var_i, var_o, var_b_1, var_t[list_s[num_O]], list_f[4],
  list_c[num_O]), var_k = var_p(var_w, var_A, var__, var_E, var_S, var_t[list_u[num_O]],
  list_d[4], list_l[num_O])), var_r = var_b_1, var_b_1 = var_o, var_o = var_h(var_i,
  10), var_i = var_n_1, var_n_1 = var_x, var_w = var_S, var_S = var_E, var_E = var_h(
  var__, 10), var__ = var_A, var_A = var_k;
  }
  var var_M = this._b + var_i + var_E | 0;
  this._b = this._c + var_o + var_S | 0, this._c = this._d + var_b_1 + var_w | 0,
  this._d = this._e + var_r + var_A | 0, this._e = this._a + var_n_1 + var__ | 0,
  this._a = var_M;
  }
  , var_b.prototype._digest = function () {
  this._block[this._blockOffset] = 128, this._blockOffset += 1, this._blockOffset > 56 &&
  (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0),
  this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0],
  56), this._block.writeUInt32LE(this._length[1], 60), this._update();
  var var_t = var_n.alloc ? var_n.alloc(20) : new var_n(20);
  return var_t.writeInt32LE(this._a, 0), var_t.writeInt32LE(this._b, 4), var_t.writeInt32LE(
  this._c, 8), var_t.writeInt32LE(this._d, 12), var_t.writeInt32LE(this._e, 16),
  var_t;
  }
  , moduleObj.exports = var_b;
  };
