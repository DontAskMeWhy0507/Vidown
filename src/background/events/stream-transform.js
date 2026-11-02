// Module 514 [events] - Stream / runtime utility component (stream-transform)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = var_a;
  var dep_stream_highwatermark = requireFn(146);
  var var_o = Object.create(requireFn(29));
  function var_i(param_e, param_t) {
  var var_r = this._transformState;
  var_r.transforming = false;
  var var_n = var_r.writecb;
  if (!var_n) {
  return this.emit("error", new Error("write callback called multiple times"));
  }
  var_r.writechunk = null;
  var_r.writecb = null;
  if (param_t != null) {
  this.push(param_t);
  }
  var_n(param_e);
  var var_o_1 = this._readableState;
  var_o_1.reading = false;
  if (var_o_1.needReadable || var_o_1.length < var_o_1.highWaterMark) {
  this._read(var_o_1.highWaterMark);
  }
  }
  function var_a(param_e) {
  if (!(this instanceof var_a)) {
  return new var_a(param_e);
  }
  dep_stream_highwatermark.call(this, param_e);
  this._transformState = {
  afterTransform: var_i.bind(this),
  needTransform: false,
  transforming: false,
  writecb: null,
  writechunk: null,
  writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (param_e) {
  if (typeof param_e.transform == "function") {
  this._transform = param_e.transform;
  }
  if (typeof param_e.flush == "function") {
  this._flush = param_e.flush;
  }
  }
  this.on("prefinish", var_s);
  }
  function var_s() {
  var var_e = this;
  if (typeof this._flush == "function") {
  this._flush(function (param_t, param_r) {
  var_c(var_e, param_t, param_r);
  }
  );
  }
  else {
  var_c(this, null, null);
  }
  }
  function var_c(param_e, param_t, param_r) {
  if (param_t) {
  return param_e.emit("error", param_t);
  }
  if (param_r != null) {
  param_e.push(param_r);
  }
  if (param_e._writableState.length) {
  throw new Error("Calling transform done when ws.length != 0");
  }
  if (param_e._transformState.transforming) {
  throw new Error("Calling transform done when still transforming");
  }
  return param_e.push(null);
  }
  var_o.inherits = requireFn(15);
  var_o.inherits(var_a, dep_stream_highwatermark);
  var_a.prototype.push = function (param_e, param_t) {
  this._transformState.needTransform = false;
  return dep_stream_highwatermark.prototype.push.call(this, param_e, param_t);
  };
  var_a.prototype._transform = function (param_e, param_t, param_r) {
  throw new Error("_transform() is not implemented");
  };
  var_a.prototype._write = function (param_e, param_t, param_r) {
  var var_n = this._transformState;
  var_n.writecb = param_r;
  var_n.writechunk = param_e;
  var_n.writeencoding = param_t;
  if (!var_n.transforming) {
  var var_o_1 = this._readableState;
  if (var_n.needTransform || var_o_1.needReadable || var_o_1.length < var_o_1.highWaterMark) {
  this._read(var_o_1.highWaterMark);
  }
  }
  };
  var_a.prototype._read = function (param_e) {
  var var_t = this._transformState;
  if (var_t.writechunk !== null && var_t.writecb && !var_t.transforming) {
  var_t.transforming = true;
  this._transform(var_t.writechunk, var_t.writeencoding, var_t.afterTransform);
  }
  else {
  var_t.needTransform = true;
  }
  };
  var_a.prototype._destroy = function (param_e, param_t) {
  var var_r = this;
  dep_stream_highwatermark.prototype._destroy.call(this, param_e, function (param_e_1) {
  param_t(param_e_1);
  var_r.emit("close");
  }
  );
  };
  };
