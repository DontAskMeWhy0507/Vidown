// Module 642 - Savior Helper 642
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_116 = requireFn(116);
  function var_o(param_t, param_e, param_r) {
  if (!(this instanceof var_o)) return new var_o(param_t, param_e, param_r);
  this.Hash = param_t, this.blockSize = param_t.blockSize / 8, this.outSize = param_t.outSize / 8,
  this.inner = null, this.outer = null, this._init(dep_helper_122.toArray(param_e,
  param_r));
  }
  moduleObj.exports = var_o, var_o.prototype._init = function (param_t) {
  param_t.length > this.blockSize && (param_t = new this.Hash().update(param_t).digest(
  )), dep_helper_116(param_t.length <= this.blockSize);
  for (var var_e = param_t.length;
  var_e < this.blockSize;
  var_e++) param_t.push(0);
  for (var_e = 0;
  var_e < param_t.length;
  var_e++) param_t[var_e] ^= 54;
  for (this.inner = new this.Hash().update(param_t), var_e = 0;
  var_e < param_t.length;
  var_e++) param_t[var_e] ^= 106;
  this.outer = new this.Hash().update(param_t);
  }
  , var_o.prototype.update = function (param_t, param_e) {
  return this.inner.update(param_t, param_e), this;
  }
  , var_o.prototype.digest = function (param_t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(param_t);
  };
  };
