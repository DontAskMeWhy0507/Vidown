// Module 572 - Savior Helper 572
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_helper_573 = requireFn(573),
  var_o = requireFn(588).Transform;
  function var_a(param_t) {
  var_o.call(this), this._block = var_n.allocUnsafe(param_t), this._blockSize = param_t,
  this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1;
  }
  requireFn(15)(var_a, var_o), var_a.prototype._transform = function (param_t, param_e,
  param_r) {
  var var_n_1 = null;
  try {
  this.update(param_t, param_e);
  }
  catch (var_t) {
  var_n_1 = var_t;
  }
  param_r(var_n_1);
  }
  , var_a.prototype._flush = function (param_t) {
  var var_e = null;
  try {
  this.push(this.digest());
  }
  catch (var_t) {
  var_e = var_t;
  }
  param_t(var_e);
  }
  , var_a.prototype.update = function (param_t, param_e) {
  if (this._finalized) throw new Error("Digest already called");
  for (var var_r = dep_helper_573(param_t, param_e), var_n_1 = this._block, num_o = 0;
  this._blockOffset + var_r.length - num_o >= this._blockSize;
  ) {
  for (var var_a_1 = this._blockOffset;
  var_a_1 < this._blockSize;
  ) var_n_1[var_a_1] = var_r[num_o], var_a_1 += 1, num_o += 1;
  this._update(), this._blockOffset = 0;
  }
  for (;
  num_o < var_r.length;
  ) var_n_1[this._blockOffset] = var_r[num_o], this._blockOffset += 1, num_o += 1;
  for (var num_s = 0, var_u = 8 * var_r.length;
  var_u > 0;
  ++num_s) this._length[num_s] += var_u, (var_u = this._length[num_s] / 4294967296 | 0) > 0 &&
  (this._length[num_s] -= 4294967296 * var_u);
  return this;
  }
  , var_a.prototype._update = function () {
  throw new Error("_update is not implemented");
  }
  , var_a.prototype.digest = function (param_t) {
  if (this._finalized) throw new Error("Digest already called");
  this._finalized = !0;
  var var_e = this._digest();
  void 0 !== param_t && (var_e = var_e.toString(param_t)), this._block.fill(0), this._blockOffset = 0;
  for (var num_r = 0;
  num_r < 4;
  ++num_r) this._length[num_r] = 0;
  return var_e;
  }
  , var_a.prototype._digest = function () {
  throw new Error("_digest is not implemented");
  }
  , moduleObj.exports = var_a;
  };
