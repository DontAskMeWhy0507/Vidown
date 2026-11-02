// Module 30 [utilities] - Stream / runtime utility component (core-util-is)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_safe_buffer = requireFn(36);
  var var_o = Object.keys || function (param_e) {
  var list_t = [];
  for (var var_r in param_e) {
  list_t.push(var_r);
  }
  return list_t;
  };
  moduleObj.exports = var_d;
  var var_i = Object.create(requireFn(29));
  var_i.inherits = requireFn(15);
  var dep_stream_readable = requireFn(84);
  var dep_stream_writable = requireFn(49);
  var_i.inherits(var_d, dep_stream_readable);
  for (var var_c = var_o(dep_stream_writable.prototype), num_u = 0;
  num_u < var_c.length;
  num_u++) {
  var var_l = var_c[num_u];
  var_d.prototype[var_l] ||= dep_stream_writable.prototype[var_l];
  }
  function var_d(param_e) {
  if (!(this instanceof var_d)) {
  return new var_d(param_e);
  }
  dep_stream_readable.call(this, param_e);
  dep_stream_writable.call(this, param_e);
  if (param_e && param_e.readable === false) {
  this.readable = false;
  }
  if (param_e && param_e.writable === false) {
  this.writable = false;
  }
  this.allowHalfOpen = true;
  if (param_e && param_e.allowHalfOpen === false) {
  this.allowHalfOpen = false;
  }
  this.once("end", var_p);
  }
  function var_p() {
  if (!this.allowHalfOpen && !this._writableState.ended) {
  dep_safe_buffer.nextTick(var_f, this);
  }
  }
  function var_f(param_e) {
  param_e.end();
  }
  Object.defineProperty(var_d.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
  return this._writableState.highWaterMark;
  }
  }
  );
  Object.defineProperty(var_d.prototype, "destroyed", {
  get: function () {
  return this._readableState !== undefined && this._writableState !== undefined &&
  this._readableState.destroyed && this._writableState.destroyed;
  }
  ,
  set: function (param_e) {
  if (this._readableState !== undefined && this._writableState !== undefined) {
  this._readableState.destroyed = param_e;
  this._writableState.destroyed = param_e;
  }
  }
  }
  );
  var_d.prototype._destroy = function (param_e, param_t) {
  this.push(null);
  this.end();
  dep_safe_buffer.nextTick(param_t, param_e);
  };
  };
