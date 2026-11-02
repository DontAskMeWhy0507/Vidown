// Module 613 - Savior Helper 613
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(25).Buffer,
  var_i = var_n.alloc(16, 0);
  function var_o(param_t) {
  var var_e = var_n.allocUnsafe(16);
  return var_e.writeUInt32BE(param_t[0] >>> 0, 0), var_e.writeUInt32BE(param_t[1] >>> 0,
  4), var_e.writeUInt32BE(param_t[2] >>> 0, 8), var_e.writeUInt32BE(param_t[3] >>> 0,
  12), var_e;
  }
  function var_a(param_t) {
  this.h = param_t, this.state = var_n.alloc(16, 0), this.cache = var_n.allocUnsafe(
  0);
  }
  var_a.prototype.ghash = function (param_t) {
  for (var var_e = -1;
  ++var_e < param_t.length;
  ) this.state[var_e] ^= param_t[var_e];
  this._multiply();
  }
  , var_a.prototype._multiply = function () {
  for (var var_t, var_e, var_r, list_n = [(var_t = this.h).readUInt32BE(0), var_t.readUInt32BE(
  4), var_t.readUInt32BE(8), var_t.readUInt32BE(12)], list_i = [0, 0, 0, 0], var_a_1 = -1;
  ++var_a_1 < 128;
  ) {
  for (0 != (this.state[~~(var_a_1 / 8)] & 1 << 7 - var_a_1 % 8) &&
  (list_i[0] ^= list_n[0], list_i[1] ^= list_n[1], list_i[2] ^= list_n[2], list_i[3] ^= list_n[3]),
  var_r = 0 != (1 & list_n[3]), var_e = 3;
  var_e > 0;
  var_e--) list_n[var_e] = list_n[var_e] >>> 1 | (1 & list_n[var_e - 1]) << 31;
  list_n[0] = list_n[0] >>> 1, var_r && (list_n[0] = list_n[0] ^ 225 << 24);
  }
  this.state = var_o(list_i);
  }
  , var_a.prototype.update = function (param_t) {
  var var_e;
  for (this.cache = var_n.concat([this.cache, param_t]);
  this.cache.length >= 16;
  ) var_e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(
  var_e);
  }
  , var_a.prototype.final = function (param_t, param_e) {
  return this.cache.length && this.ghash(var_n.concat([this.cache, var_i], 16)),
  this.ghash(var_o([0, param_t, 0, param_e])), this.state;
  }
  , moduleObj.exports = var_a;
  };
