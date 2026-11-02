// Module 144 - Savior Helper 144
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_helper_165 = requireFn(165);
  function var_o(param_t, param_e) {
  this._block = var_n.alloc(param_t), this._finalSize = param_e, this._blockSize = param_t,
  this._len = 0;
  }
  var_o.prototype.update = function (param_t, param_e) {
  param_t = dep_helper_165(param_t, param_e || "utf8");
  for (var var_r = this._block, var_n_1 = this._blockSize, var_o_1 = param_t.length,
  var_a = this._len, num_s = 0;
  num_s < var_o_1;
  ) {
  for (var var_u = var_a % var_n_1, var_c = Math.min(var_o_1 - num_s, var_n_1 - var_u),
  num_l = 0;
  num_l < var_c;
  num_l++) var_r[var_u + num_l] = param_t[num_s + num_l];
  num_s += var_c, (var_a += var_c) % var_n_1 == 0 && this._update(var_r);
  }
  return this._len += var_o_1, this;
  }
  , var_o.prototype.digest = function (param_t) {
  var var_e = this._len % this._blockSize;
  this._block[var_e] = 128, this._block.fill(0, var_e + 1), var_e >= this._finalSize &&
  (this._update(this._block), this._block.fill(0));
  var var_r = 8 * this._len;
  if (var_r <= 4294967295) this._block.writeUInt32BE(var_r, this._blockSize - 4);
  else {
  var var_n_1 = (4294967295 & var_r) >>> 0,
  var_i = (var_r - var_n_1) / 4294967296;
  this._block.writeUInt32BE(var_i, this._blockSize - 8), this._block.writeUInt32BE(
  var_n_1, this._blockSize - 4);
  }
  this._update(this._block);
  var var_o_1 = this._hash();
  return param_t ? var_o_1.toString(param_t) : var_o_1;
  }
  , var_o.prototype._update = function () {
  throw new Error("_update must be implemented by subclass");
  }
  , moduleObj.exports = var_o;
  };
