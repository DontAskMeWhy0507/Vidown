// Module 478 - Savior Helper 478
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_116 = requireFn(116),
  dep_module_15 = requireFn(15),
  dep_helper_477 = requireFn(477),
  dep_helper_427 = requireFn(427);
  function var_s() {
  this.tmp = new Array(2), this.keys = null;
  }
  function var_u(param_t) {
  dep_helper_427.call(this, param_t);
  var var_e = new var_s();
  this._desState = var_e, this.deriveKeys(var_e, param_t.key);
  }
  dep_module_15(var_u, dep_helper_427), moduleObj.exports = var_u, var_u.create = function (
  param_t) {
  return new var_u(param_t);
  };
  var list_c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
  var_u.prototype.deriveKeys = function (param_t, param_e) {
  param_t.keys = new Array(32), dep_helper_116.equal(param_e.length, this.blockSize,
  "Invalid key length");
  var var_r = dep_helper_477.readUInt32BE(param_e, 0),
  var_i = dep_helper_477.readUInt32BE(param_e, 4);
  dep_helper_477.pc1(var_r, var_i, param_t.tmp, 0), var_r = param_t.tmp[0], var_i = param_t.tmp[1];
  for (var num_a = 0;
  num_a < param_t.keys.length;
  num_a += 2) {
  var var_s_1 = list_c[num_a >>> 1];
  var_r = dep_helper_477.r28shl(var_r, var_s_1), var_i = dep_helper_477.r28shl(var_i,
  var_s_1), dep_helper_477.pc2(var_r, var_i, param_t.keys, num_a);
  }
  }
  , var_u.prototype._update = function (param_t, param_e, param_r, param_n) {
  var var_i = this._desState,
  var_a = dep_helper_477.readUInt32BE(param_t, param_e),
  var_s_1 = dep_helper_477.readUInt32BE(param_t, param_e + 4);
  dep_helper_477.ip(var_a, var_s_1, var_i.tmp, 0), var_a = var_i.tmp[0], var_s_1 = var_i.tmp[1],
  "encrypt" === this.type ? this._encrypt(var_i, var_a, var_s_1, var_i.tmp, 0) :
  this._decrypt(var_i, var_a, var_s_1, var_i.tmp, 0), var_a = var_i.tmp[0], var_s_1 = var_i.tmp[1],
  dep_helper_477.writeUInt32BE(param_r, var_a, param_n), dep_helper_477.writeUInt32BE(
  param_r, var_s_1, param_n + 4);
  }
  , var_u.prototype._pad = function (param_t, param_e) {
  if (!1 === this.padding) return !1;
  for (var var_r = param_t.length - param_e, var_n = param_e;
  var_n < param_t.length;
  var_n++) param_t[var_n] = var_r;
  return !0;
  }
  , var_u.prototype._unpad = function (param_t) {
  if (!1 === this.padding) return param_t;
  for (var var_e = param_t[param_t.length - 1], var_r = param_t.length - var_e;
  var_r < param_t.length;
  var_r++) dep_helper_116.equal(param_t[var_r], var_e);
  return param_t.slice(0, param_t.length - var_e);
  }
  , var_u.prototype._encrypt = function (param_t, param_e, param_r, param_n, param_i) {
  for (var var_a = param_e, var_s_1 = param_r, num_u = 0;
  num_u < param_t.keys.length;
  num_u += 2) {
  var var_c = param_t.keys[num_u],
  var_l = param_t.keys[num_u + 1];
  dep_helper_477.expand(var_s_1, param_t.tmp, 0), var_c ^= param_t.tmp[0], var_l ^= param_t.tmp[1];
  var var_f = dep_helper_477.substitute(var_c, var_l),
  var_d = var_s_1;
  var_s_1 = (var_a ^ dep_helper_477.permute(var_f)) >>> 0, var_a = var_d;
  }
  dep_helper_477.rip(var_s_1, var_a, param_n, param_i);
  }
  , var_u.prototype._decrypt = function (param_t, param_e, param_r, param_n, param_i) {
  for (var var_a = param_r, var_s_1 = param_e, var_u_1 = param_t.keys.length - 2;
  var_u_1 >= 0;
  var_u_1 -= 2) {
  var var_c = param_t.keys[var_u_1],
  var_l = param_t.keys[var_u_1 + 1];
  dep_helper_477.expand(var_a, param_t.tmp, 0), var_c ^= param_t.tmp[0], var_l ^= param_t.tmp[1];
  var var_f = dep_helper_477.substitute(var_c, var_l),
  var_d = var_a;
  var_a = (var_s_1 ^ dep_helper_477.permute(var_f)) >>> 0, var_s_1 = var_d;
  }
  dep_helper_477.rip(var_a, var_s_1, param_n, param_i);
  };
  };
