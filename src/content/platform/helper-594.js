// Module 594 - Savior Helper 594
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_helper_144 = requireFn(144),
  var_o = requireFn(25).Buffer,
  list_a = [1518500249, 1859775393, -1894007588, -899497514],
  var_s = new Array(80);
  function var_u() {
  this.init(), this._w = var_s, dep_helper_144.call(this, 64, 56);
  }
  function var_c(param_t) {
  return param_t << 30 | param_t >>> 2;
  }
  function var_l(param_t, param_e, param_r, param_n) {
  return 0 === param_t ? param_e & param_r | ~param_e & param_n :
  2 === param_t ? param_e & param_r | param_e & param_n | param_r & param_n :
  param_e ^ param_r ^ param_n;
  }
  dep_module_15(var_u, dep_helper_144), var_u.prototype.init = function () {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878,
  this._e = 3285377520, this;
  }
  , var_u.prototype._update = function (param_t) {
  for (var var_e, var_r = this._w, var_n = 0 | this._a, var_i = 0 | this._b, var_o_1 = 0 | this._c,
  var_s_1 = 0 | this._d, var_u_1 = 0 | this._e, num_f = 0;
  num_f < 16;
  ++num_f) var_r[num_f] = param_t.readInt32BE(4 * num_f);
  for (;
  num_f < 80;
  ++num_f) var_r[num_f] = var_r[num_f - 3] ^ var_r[num_f - 8] ^ var_r[num_f - 14] ^ var_r[num_f - 16];
  for (var num_d = 0;
  num_d < 80;
  ++num_d) {
  var var_h = ~~(num_d / 20),
  var_p = 0 | ((var_e = var_n) << 5 | var_e >>> 27) + var_l(var_h, var_i, var_o_1,
  var_s_1) + var_u_1 + var_r[num_d] + list_a[var_h];
  var_u_1 = var_s_1, var_s_1 = var_o_1, var_o_1 = var_c(var_i), var_i = var_n, var_n = var_p;
  }
  this._a = var_n + this._a | 0, this._b = var_i + this._b | 0, this._c = var_o_1 + this._c | 0,
  this._d = var_s_1 + this._d | 0, this._e = var_u_1 + this._e | 0;
  }
  , var_u.prototype._hash = function () {
  var var_t = var_o.allocUnsafe(20);
  return var_t.writeInt32BE(0 | this._a, 0), var_t.writeInt32BE(0 | this._b, 4),
  var_t.writeInt32BE(0 | this._c, 8), var_t.writeInt32BE(0 | this._d, 12), var_t.writeInt32BE(
  0 | this._e, 16), var_t;
  }
  , moduleObj.exports = var_u;
  };
