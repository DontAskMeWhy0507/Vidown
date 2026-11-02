// Module 467 - Savior Helper 467
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_helper_144 = requireFn(144),
  var_o = requireFn(25).Buffer,
  list_a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
  2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388,
  2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628,
  770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
  3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
  1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921,
  2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
  430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
  1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187,
  3204031479, 3329325298],
  var_s = new Array(64);
  function var_u() {
  this.init(), this._w = var_s, dep_helper_144.call(this, 64, 56);
  }
  function var_c(param_t, param_e, param_r) {
  return param_r ^ param_t & (param_e ^ param_r);
  }
  function var_l(param_t, param_e, param_r) {
  return param_t & param_e | param_r & (param_t | param_e);
  }
  function var_f(param_t) {
  return (param_t >>> 2 | param_t << 30) ^ (param_t >>> 13 | param_t << 19) ^ (param_t >>> 22 | param_t << 10);
  }
  function var_d(param_t) {
  return (param_t >>> 6 | param_t << 26) ^ (param_t >>> 11 | param_t << 21) ^ (param_t >>> 25 | param_t << 7);
  }
  function var_h(param_t) {
  return (param_t >>> 7 | param_t << 25) ^ (param_t >>> 18 | param_t << 14) ^ param_t >>> 3;
  }
  dep_module_15(var_u, dep_helper_144), var_u.prototype.init = function () {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762,
  this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225,
  this;
  }
  , var_u.prototype._update = function (param_t) {
  for (var var_e, var_r = this._w, var_n = 0 | this._a, var_i = 0 | this._b, var_o_1 = 0 | this._c,
  var_s_1 = 0 | this._d, var_u_1 = 0 | this._e, var_p = 0 | this._f, var_v = 0 | this._g,
  var_m = 0 | this._h, num_y = 0;
  num_y < 16;
  ++num_y) var_r[num_y] = param_t.readInt32BE(4 * num_y);
  for (;
  num_y < 64;
  ++num_y) var_r[num_y] = 0 | (((var_e = var_r[num_y - 2]) >>> 17 | var_e << 15) ^ (
  var_e >>> 19 | var_e << 13) ^ var_e >>> 10) + var_r[num_y - 7] + var_h(var_r[num_y - 15]) + var_r[num_y - 16];
  for (var num_g = 0;
  num_g < 64;
  ++num_g) {
  var var_b = var_m + var_d(var_u_1) + var_c(var_u_1, var_p, var_v) + list_a[num_g] + var_r[num_g] | 0,
  var_w = var_f(var_n) + var_l(var_n, var_i, var_o_1) | 0;
  var_m = var_v, var_v = var_p, var_p = var_u_1, var_u_1 = var_s_1 + var_b | 0, var_s_1 = var_o_1,
  var_o_1 = var_i, var_i = var_n, var_n = var_b + var_w | 0;
  }
  this._a = var_n + this._a | 0, this._b = var_i + this._b | 0, this._c = var_o_1 + this._c | 0,
  this._d = var_s_1 + this._d | 0, this._e = var_u_1 + this._e | 0, this._f = var_p + this._f | 0,
  this._g = var_v + this._g | 0, this._h = var_m + this._h | 0;
  }
  , var_u.prototype._hash = function () {
  var var_t = var_o.allocUnsafe(32);
  return var_t.writeInt32BE(this._a, 0), var_t.writeInt32BE(this._b, 4), var_t.writeInt32BE(
  this._c, 8), var_t.writeInt32BE(this._d, 12), var_t.writeInt32BE(this._e, 16),
  var_t.writeInt32BE(this._f, 20), var_t.writeInt32BE(this._g, 24), var_t.writeInt32BE(
  this._h, 28), var_t;
  }
  , moduleObj.exports = var_u;
  };
