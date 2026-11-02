// Module 466 - Savior Helper 466
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = var_a;
  var dep_helper_143 = requireFn(143),
  var_i = Object.create(requireFn(29));
  function var_o(param_t, param_e) {
  var var_r = this._transformState;
  var_r.transforming = !1;
  var var_n = var_r.writecb;
  if (!var_n) return this.emit("error", new Error("write callback called multiple times"));
  var_r.writechunk = null, var_r.writecb = null, null != param_e &&
  this.push(param_e), var_n(param_t);
  var var_i_1 = this._readableState;
  var_i_1.reading = !1, (var_i_1.needReadable || var_i_1.length < var_i_1.highWaterMark) &&
  this._read(var_i_1.highWaterMark);
  }
  function var_a(param_t) {
  if (!(this instanceof var_a)) return new var_a(param_t);
  dep_helper_143.call(this, param_t), this._transformState = {
  afterTransform: var_o.bind(this),
  needTransform: !1,
  transforming: !1,
  writecb: null,
  writechunk: null,
  writeencoding: null
  }
  , this._readableState.needReadable = !0, this._readableState.sync = !1, param_t &&
  ("function" == typeof param_t.transform && (this._transform = param_t.transform),
  "function" == typeof param_t.flush && (this._flush = param_t.flush)), this.on(
  "prefinish", var_s);
  }
  function var_s() {
  var var_t = this;
  "function" == typeof this._flush ? this._flush(function (param_e, param_r) {
  var_u(var_t, param_e, param_r);
  }
  ) : var_u(this, null, null);
  }
  function var_u(param_t, param_e, param_r) {
  if (param_e) return param_t.emit("error", param_e);
  if (null != param_r && param_t.push(param_r), param_t._writableState.length) throw new Error(
  "Calling transform done when ws.length != 0");
  if (param_t._transformState.transforming) throw new Error("Calling transform done when still transforming");
  return param_t.push(null);
  }
  var_i.inherits = requireFn(15), var_i.inherits(var_a, dep_helper_143), var_a.prototype.push = function (
  param_t, param_e) {
  return this._transformState.needTransform = !1, dep_helper_143.prototype.push.call(
  this, param_t, param_e);
  }
  , var_a.prototype._transform = function (param_t, param_e, param_r) {
  throw new Error("_transform() is not implemented");
  }
  , var_a.prototype._write = function (param_t, param_e, param_r) {
  var var_n = this._transformState;
  if (var_n.writecb = param_r, var_n.writechunk = param_t, var_n.writeencoding = param_e,
  !var_n.transforming) {
  var var_i_1 = this._readableState;
  (var_n.needTransform || var_i_1.needReadable || var_i_1.length < var_i_1.highWaterMark) &&
  this._read(var_i_1.highWaterMark);
  }
  }
  , var_a.prototype._read = function (param_t) {
  var var_e = this._transformState;
  null !== var_e.writechunk && var_e.writecb && !var_e.transforming ?
  (var_e.transforming = !0, this._transform(var_e.writechunk, var_e.writeencoding,
  var_e.afterTransform)) : var_e.needTransform = !0;
  }
  , var_a.prototype._destroy = function (param_t, param_e) {
  var var_r = this;
  dep_helper_143.prototype._destroy.call(this, param_t, function (param_t_1) {
  param_e(param_t_1), var_r.emit("close");
  }
  );
  };
  };
