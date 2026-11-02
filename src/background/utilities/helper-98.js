// Module 98 [utilities] - Subsystem utility helper (98)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer;
  var var_o = requireFn(83).Transform;
  function var_i(param_e) {
  var_o.call(this);
  this._block = var_n.allocUnsafe(param_e);
  this._blockSize = param_e;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
  }
  requireFn(15)(var_i, var_o);
  var_i.prototype._transform = function (param_e, param_t, param_r) {
  var var_n_1 = null;
  try {
  this.update(param_e, param_t);
  }
  catch (var_e) {
  var_n_1 = var_e;
  }
  param_r(var_n_1);
  };
  var_i.prototype._flush = function (param_e) {
  var var_t = null;
  try {
  this.push(this.digest());
  }
  catch (var_e) {
  var_t = var_e;
  }
  param_e(var_t);
  };
  var var_a = typeof Uint8Array != "undefined";
  var var_s = typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined" &&
  ArrayBuffer.isView && (var_n.prototype instanceof Uint8Array ||
  var_n.TYPED_ARRAY_SUPPORT);
  var_i.prototype.update = function (param_e, param_t) {
  if (this._finalized) {
  throw new Error("Digest already called");
  }
  param_e = function (param_e_1, param_t_1) {
  if (param_e_1 instanceof var_n) {
  return param_e_1;
  }
  if (typeof param_e_1 == "string") {
  return var_n.from(param_e_1, param_t_1);
  }
  if (var_s && ArrayBuffer.isView(param_e_1)) {
  if (param_e_1.byteLength === 0) {
  return var_n.alloc(0);
  }
  var var_r_1 = var_n.from(param_e_1.buffer, param_e_1.byteOffset, param_e_1.byteLength);
  if (var_r_1.byteLength === param_e_1.byteLength) {
  return var_r_1;
  }
  }
  if (var_a && param_e_1 instanceof Uint8Array) {
  return var_n.from(param_e_1);
  }
  if (var_n.isBuffer(param_e_1) && param_e_1.constructor && typeof param_e_1.constructor.isBuffer == "function" &&
  param_e_1.constructor.isBuffer(param_e_1)) {
  return var_n.from(param_e_1);
  }
  throw new TypeError("The \"data\" argument must be of type string or an instance of Buffer, TypedArray, or DataView.");
  }
  (param_e, param_t);
  var var_r = this._block;
  for (var num_o = 0;
  this._blockOffset + param_e.length - num_o >= this._blockSize;
  ) {
  for (var var_i_1 = this._blockOffset;
  var_i_1 < this._blockSize;
  ) {
  var_r[var_i_1++] = param_e[num_o++];
  }
  this._update();
  this._blockOffset = 0;
  }
  while (num_o < param_e.length) {
  var_r[this._blockOffset++] = param_e[num_o++];
  }
  for (var num_c = 0, var_u = param_e.length * 8;
  var_u > 0;
  ++num_c) {
  this._length[num_c] += var_u;
  if ((var_u = this._length[num_c] / 4294967296 | 0) > 0) {
  this._length[num_c] -= var_u * 4294967296;
  }
  }
  return this;
  };
  var_i.prototype._update = function () {
  throw new Error("_update is not implemented");
  };
  var_i.prototype.digest = function (param_e) {
  if (this._finalized) {
  throw new Error("Digest already called");
  }
  this._finalized = true;
  var var_t = this._digest();
  if (param_e !== undefined) {
  var_t = var_t.toString(param_e);
  }
  this._block.fill(0);
  this._blockOffset = 0;
  for (var num_r = 0;
  num_r < 4;
  ++num_r) {
  this._length[num_r] = 0;
  }
  return var_t;
  };
  var_i.prototype._digest = function () {
  throw new Error("_digest is not implemented");
  };
  moduleObj.exports = var_i;
  };
