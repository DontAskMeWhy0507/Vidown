// Module 427 - Savior Helper 427
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_116 = requireFn(116);
  function var_i(param_t) {
  this.options = param_t, this.type = this.options.type, this.blockSize = 8, this._init(
  ), this.buffer = new Array(this.blockSize), this.bufferOff = 0, this.padding = !1 !== param_t.padding;
  }
  moduleObj.exports = var_i, var_i.prototype._init = function () {
  }
  , var_i.prototype.update = function (param_t) {
  return 0 === param_t.length ? [] : "decrypt" === this.type ?
  this._updateDecrypt(param_t) : this._updateEncrypt(param_t);
  }
  , var_i.prototype._buffer = function (param_t, param_e) {
  for (var var_r = Math.min(this.buffer.length - this.bufferOff, param_t.length - param_e),
  num_n = 0;
  num_n < var_r;
  num_n++) this.buffer[this.bufferOff + num_n] = param_t[param_e + num_n];
  return this.bufferOff += var_r, var_r;
  }
  , var_i.prototype._flushBuffer = function (param_t, param_e) {
  return this._update(this.buffer, 0, param_t, param_e), this.bufferOff = 0, this.blockSize;
  }
  , var_i.prototype._updateEncrypt = function (param_t) {
  var num_e = 0,
  num_r = 0,
  var_n = (this.bufferOff + param_t.length) / this.blockSize | 0,
  var_i_1 = new Array(var_n * this.blockSize);
  0 !== this.bufferOff && (num_e += this._buffer(param_t, num_e), this.bufferOff === this.buffer.length &&
  (num_r += this._flushBuffer(var_i_1, num_r)));
  for (var var_o = param_t.length - (param_t.length - num_e) % this.blockSize;
  num_e < var_o;
  num_e += this.blockSize) this._update(param_t, num_e, var_i_1, num_r), num_r += this.blockSize;
  for (;
  num_e < param_t.length;
  num_e++, this.bufferOff++) this.buffer[this.bufferOff] = param_t[num_e];
  return var_i_1;
  }
  , var_i.prototype._updateDecrypt = function (param_t) {
  for (var num_e = 0, num_r = 0, var_n = Math.ceil((this.bufferOff + param_t.length) / this.blockSize) - 1,
  var_i_1 = new Array(var_n * this.blockSize);
  var_n > 0;
  var_n--) num_e += this._buffer(param_t, num_e), num_r += this._flushBuffer(var_i_1,
  num_r);
  return num_e += this._buffer(param_t, num_e), var_i_1;
  }
  , var_i.prototype.final = function (param_t) {
  var var_e, var_r;
  return param_t && (var_e = this.update(param_t)), var_r = "encrypt" === this.type ?
  this._finalEncrypt() : this._finalDecrypt(), var_e ? var_e.concat(var_r) :
  var_r;
  }
  , var_i.prototype._pad = function (param_t, param_e) {
  if (0 === param_e) return !1;
  for (;
  param_e < param_t.length;
  ) param_t[param_e++] = 0;
  return !0;
  }
  , var_i.prototype._finalEncrypt = function () {
  if (!this._pad(this.buffer, this.bufferOff)) return [];
  var var_t = new Array(this.blockSize);
  return this._update(this.buffer, 0, var_t, 0), var_t;
  }
  , var_i.prototype._unpad = function (param_t) {
  return param_t;
  }
  , var_i.prototype._finalDecrypt = function () {
  dep_helper_116.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
  var var_t = new Array(this.blockSize);
  return this._flushBuffer(var_t, 0), this._unpad(var_t);
  };
  };
