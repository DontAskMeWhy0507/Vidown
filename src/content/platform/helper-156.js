// Module 156 - Savior Helper 156
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_116 = requireFn(116);
  function var_o() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize,
  this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength,
  this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8,
  this._delta32 = this.blockSize / 32;
  }
  exportsObj.BlockHash = var_o, var_o.prototype.update = function (param_t, param_e) {
  if (param_t = dep_helper_122.toArray(param_t, param_e), this.pending ?
  this.pending = this.pending.concat(param_t) : this.pending = param_t, this.pendingTotal += param_t.length,
  this.pending.length >= this._delta8) {
  var var_r = (param_t = this.pending).length % this._delta8;
  this.pending = param_t.slice(param_t.length - var_r, param_t.length), 0 === this.pending.length &&
  (this.pending = null), param_t = dep_helper_122.join32(param_t, 0, param_t.length - var_r,
  this.endian);
  for (var num_i = 0;
  num_i < param_t.length;
  num_i += this._delta32) this._update(param_t, num_i, num_i + this._delta32);
  }
  return this;
  }
  , var_o.prototype.digest = function (param_t) {
  return this.update(this._pad()), dep_helper_116(null === this.pending), this._digest(
  param_t);
  }
  , var_o.prototype._pad = function () {
  var var_t = this.pendingTotal,
  var_e = this._delta8,
  var_r = var_e - (var_t + this.padLength) % var_e,
  var_n = new Array(var_r + this.padLength);
  var_n[0] = 128;
  for (var num_i = 1;
  num_i < var_r;
  num_i++) var_n[num_i] = 0;
  if (var_t <<= 3, "big" === this.endian) {
  for (var num_o = 8;
  num_o < this.padLength;
  num_o++) var_n[num_i++] = 0;
  var_n[num_i++] = 0, var_n[num_i++] = 0, var_n[num_i++] = 0, var_n[num_i++] = 0,
  var_n[num_i++] = var_t >>> 24 & 255, var_n[num_i++] = var_t >>> 16 & 255, var_n[num_i++] = var_t >>> 8 & 255,
  var_n[num_i++] = 255 & var_t;
  }
  else for (var_n[num_i++] = 255 & var_t, var_n[num_i++] = var_t >>> 8 & 255, var_n[num_i++] = var_t >>> 16 & 255,
  var_n[num_i++] = var_t >>> 24 & 255, var_n[num_i++] = 0, var_n[num_i++] = 0, var_n[num_i++] = 0,
  var_n[num_i++] = 0, num_o = 8;
  num_o < this.padLength;
  num_o++) var_n[num_i++] = 0;
  return var_n;
  };
  };
