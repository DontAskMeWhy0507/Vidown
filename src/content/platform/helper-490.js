// Module 490 - Savior Helper 490
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e, param_n, param_i) {
  var dep_module_36 = requireFn(36);
  function var_a(param_t) {
  var var_e = this;
  this.next = null, this.entry = null, this.finish = function () {
  !function (param_t_1, param_e_1, param_r) {
  var var_n = param_t_1.entry;
  param_t_1.entry = null;
  for (;
  var_n;
  ) {
  var var_i = var_n.callback;
  param_e_1.pendingcb--, var_i(param_r), var_n = var_n.next;
  }
  param_e_1.corkedRequestsFree.next = param_t_1;
  }
  (var_e, param_t);
  };
  }
  moduleObj.exports = var_g;
  var var_s,
  var_u = !param_e.browser && ["v0.10", "v0.9."].indexOf(param_e.version.slice(0,
  5)) > -1 ? param_n : dep_module_36.nextTick;
  var_g.WritableState = var_y;
  var var_c = Object.create(requireFn(29));
  var_c.inherits = requireFn(15);
  var obj_l = {
  deprecate: requireFn(91)
  }
  ,
  dep_helper_488 = requireFn(488),
  var_d = requireFn(431).Buffer,
  var_h = (void 0 !== param_i ? param_i : "undefined" != typeof window ?
  window : "undefined" != typeof self ? self : {
  }
  ).Uint8Array || function () {
  };
  var var_p,
  dep_helper_489 = requireFn(489);
  function var_m() {
  }
  function var_y(param_t, param_e_1) {
  var_s = var_s || requireFn(145), param_t = param_t || {
  };
  var var_n = param_e_1 instanceof var_s;
  this.objectMode = !!param_t.objectMode, var_n && (this.objectMode = this.objectMode ||
  !!param_t.writableObjectMode);
  var var_i = param_t.highWaterMark,
  var_c_1 = param_t.writableHighWaterMark,
  var_l = this.objectMode ? 16 : 16384;
  this.highWaterMark = var_i || 0 === var_i ? var_i : var_n &&
  (var_c_1 || 0 === var_c_1) ? var_c_1 : var_l, this.highWaterMark = Math.floor(
  this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1,
  this.ended = !1, this.finished = !1, this.destroyed = !1;
  var var_f = !1 === param_t.decodeStrings;
  this.decodeStrings = !var_f, this.defaultEncoding = param_t.defaultEncoding ||
  "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1,
  this.onwrite = function (param_t_1) {
  !function (param_t_2, param_e_2) {
  var var_r = param_t_2._writableState,
  var_n_1 = var_r.sync,
  var_i_1 = var_r.writecb;
  if (function (param_t_3) {
  param_t_3.writing = !1, param_t_3.writecb = null, param_t_3.length -= param_t_3.writelen,
  param_t_3.writelen = 0;
  }
  (var_r), param_e_2) !function (param_t_3, param_e_3, param_r, param_n_1, param_i_1) {
  --param_e_3.pendingcb, param_r ? (dep_module_36.nextTick(param_i_1, param_n_1),
  dep_module_36.nextTick(var_S, param_t_3, param_e_3), param_t_3._writableState.errorEmitted = !0,
  param_t_3.emit("error", param_n_1)) : (param_i_1(param_n_1), param_t_3._writableState.errorEmitted = !0,
  param_t_3.emit("error", param_n_1), var_S(param_t_3, param_e_3));
  }
  (param_t_2, var_r, var_n_1, param_e_2, var_i_1);
  else {
  var var_a_1 = var__(var_r);
  var_a_1 || var_r.corked || var_r.bufferProcessing || !var_r.bufferedRequest ||
  var_A(param_t_2, var_r), var_n_1 ? var_u(var_w, param_t_2, var_r, var_a_1, var_i_1) :
  var_w(param_t_2, var_r, var_a_1, var_i_1);
  }
  }
  (param_e_1, param_t_1);
  }
  , this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null,
  this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0,
  this.corkedRequestsFree = new var_a(this);
  }
  function var_g(param_t) {
  if (var_s = var_s || requireFn(145), !(var_p.call(var_g, this) ||
  this instanceof var_s)) return new var_g(param_t);
  this._writableState = new var_y(param_t, this), this.writable = !0, param_t &&
  ("function" == typeof param_t.write && (this._write = param_t.write), "function" == typeof param_t.writev &&
  (this._writev = param_t.writev), "function" == typeof param_t.destroy &&
  (this._destroy = param_t.destroy), "function" == typeof param_t.final &&
  (this._final = param_t.final)), dep_helper_488.call(this);
  }
  function var_b(param_t, param_e_1, param_r, param_n_1, param_i_1, param_o, param_a) {
  param_e_1.writelen = param_n_1, param_e_1.writecb = param_a, param_e_1.writing = !0,
  param_e_1.sync = !0, param_r ? param_t._writev(param_i_1, param_e_1.onwrite) :
  param_t._write(param_i_1, param_o, param_e_1.onwrite), param_e_1.sync = !1;
  }
  function var_w(param_t, param_e_1, param_r, param_n_1) {
  param_r || function (param_t_1, param_e_2) {
  0 === param_e_2.length && param_e_2.needDrain && (param_e_2.needDrain = !1, param_t_1.emit(
  "drain"));
  }
  (param_t, param_e_1), param_e_1.pendingcb--, param_n_1(), var_S(param_t, param_e_1);
  }
  function var_A(param_t, param_e_1) {
  param_e_1.bufferProcessing = !0;
  var var_r = param_e_1.bufferedRequest;
  if (param_t._writev && var_r && var_r.next) {
  var var_n = param_e_1.bufferedRequestCount,
  var_i = new Array(var_n),
  var_o = param_e_1.corkedRequestsFree;
  var_o.entry = var_r;
  for (var num_s = 0, flag_u = !0;
  var_r;
  ) var_i[num_s] = var_r, var_r.isBuf || (flag_u = !1), var_r = var_r.next, num_s += 1;
  var_i.allBuffers = flag_u, var_b(param_t, param_e_1, !0, param_e_1.length, var_i,
  "", var_o.finish), param_e_1.pendingcb++, param_e_1.lastBufferedRequest = null,
  var_o.next ? (param_e_1.corkedRequestsFree = var_o.next, var_o.next = null) :
  param_e_1.corkedRequestsFree = new var_a(param_e_1), param_e_1.bufferedRequestCount = 0;
  }
  else {
  for (;
  var_r;
  ) {
  var var_c_1 = var_r.chunk,
  var_l = var_r.encoding,
  var_f = var_r.callback;
  if (var_b(param_t, param_e_1, !1, param_e_1.objectMode ? 1 :
  var_c_1.length, var_c_1, var_l, var_f), var_r = var_r.next, param_e_1.bufferedRequestCount--,
  param_e_1.writing) break;
  }
  null === var_r && (param_e_1.lastBufferedRequest = null);
  }
  param_e_1.bufferedRequest = var_r, param_e_1.bufferProcessing = !1;
  }
  function var__(param_t) {
  return param_t.ending && 0 === param_t.length && null === param_t.bufferedRequest &&
  !param_t.finished && !param_t.writing;
  }
  function var_E(param_t, param_e_1) {
  param_t._final(function (param_r) {
  param_e_1.pendingcb--, param_r && param_t.emit("error", param_r), param_e_1.prefinished = !0,
  param_t.emit("prefinish"), var_S(param_t, param_e_1);
  }
  );
  }
  function var_S(param_t, param_e_1) {
  var var_r = var__(param_e_1);
  return var_r && (!function (param_t_1, param_e_2) {
  param_e_2.prefinished || param_e_2.finalCalled || ("function" == typeof param_t_1._final ?
  (param_e_2.pendingcb++, param_e_2.finalCalled = !0, dep_module_36.nextTick(var_E,
  param_t_1, param_e_2)) : (param_e_2.prefinished = !0, param_t_1.emit("prefinish")));
  }
  (param_t, param_e_1), 0 === param_e_1.pendingcb && (param_e_1.finished = !0, param_t.emit(
  "finish"))), var_r;
  }
  var_c.inherits(var_g, dep_helper_488), var_y.prototype.getBuffer = function () {
  for (var var_t = this.bufferedRequest, list_e = [];
  var_t;
  ) list_e.push(var_t), var_t = var_t.next;
  return list_e;
  }
  , function () {
  try {
  Object.defineProperty(var_y.prototype, "buffer", {
  get: obj_l.deprecate(function () {
  return this.getBuffer();
  }
  , "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
  "DEP0003")
  }
  );
  }
  catch (var_t) {
  }
  }
  (), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ?
  (var_p = Function.prototype[Symbol.hasInstance], Object.defineProperty(var_g, Symbol.hasInstance,
  {
  value: function (param_t) {
  return !!var_p.call(this, param_t) || this === var_g && param_t &&
  param_t._writableState instanceof var_y;
  }
  }
  )) : var_p = function (param_t) {
  return param_t instanceof this;
  }
  , var_g.prototype.pipe = function () {
  this.emit("error", new Error("Cannot pipe, not readable"));
  }
  , var_g.prototype.write = function (param_t, param_e_1, param_r) {
  var var_n,
  var_i = this._writableState,
  flag_a = !1,
  var_s_1 = !var_i.objectMode && (var_n = param_t, var_d.isBuffer(var_n) ||
  var_n instanceof var_h);
  return var_s_1 && !var_d.isBuffer(param_t) && (param_t = function (param_t_1) {
  return var_d.from(param_t_1);
  }
  (param_t)), "function" == typeof param_e_1 && (param_r = param_e_1, param_e_1 = null),
  var_s_1 ? param_e_1 = "buffer" : param_e_1 || (param_e_1 = var_i.defaultEncoding),
  "function" != typeof param_r && (param_r = var_m), var_i.ended ?
  function (param_t_1, param_e_2) {
  var var_r = new Error("write after end");
  param_t_1.emit("error", var_r), dep_module_36.nextTick(param_e_2, var_r);
  }
  (this, param_r) : (var_s_1 || function (param_t_1, param_e_2, param_r_1, param_n_1) {
  var flag_i = !0,
  flag_a_1 = !1;
  return null === param_r_1 ? flag_a_1 = new TypeError("May not write null values to stream") :
  "string" == typeof param_r_1 || void 0 === param_r_1 || param_e_2.objectMode ||
  (flag_a_1 = new TypeError("Invalid non-string/buffer chunk")), flag_a_1 &&
  (param_t_1.emit("error", flag_a_1), dep_module_36.nextTick(param_n_1, flag_a_1),
  flag_i = !1), flag_i;
  }
  (this, var_i, param_t, param_r)) && (var_i.pendingcb++, flag_a = function (param_t_1,
  param_e_2, param_r_1, param_n_1, param_i_1, param_o) {
  if (!param_r_1) {
  var var_a_1 = function (param_t_2, param_e_3, param_r_2) {
  param_t_2.objectMode || !1 === param_t_2.decodeStrings || "string" != typeof param_e_3 ||
  (param_e_3 = var_d.from(param_e_3, param_r_2));
  return param_e_3;
  }
  (param_e_2, param_n_1, param_i_1);
  param_n_1 !== var_a_1 && (param_r_1 = !0, param_i_1 = "buffer", param_n_1 = var_a_1);
  }
  var var_s_2 = param_e_2.objectMode ? 1 : param_n_1.length;
  param_e_2.length += var_s_2;
  var var_u_1 = param_e_2.length < param_e_2.highWaterMark;
  var_u_1 || (param_e_2.needDrain = !0);
  if (param_e_2.writing || param_e_2.corked) {
  var var_c_1 = param_e_2.lastBufferedRequest;
  param_e_2.lastBufferedRequest = {
  chunk: param_n_1,
  encoding: param_i_1,
  isBuf: param_r_1,
  callback: param_o,
  next: null
  }
  , var_c_1 ? var_c_1.next = param_e_2.lastBufferedRequest :
  param_e_2.bufferedRequest = param_e_2.lastBufferedRequest, param_e_2.bufferedRequestCount += 1;
  }
  else var_b(param_t_1, param_e_2, !1, var_s_2, param_n_1, param_i_1, param_o);
  return var_u_1;
  }
  (this, var_i, var_s_1, param_t, param_e_1, param_r)), flag_a;
  }
  , var_g.prototype.cork = function () {
  this._writableState.corked++;
  }
  , var_g.prototype.uncork = function () {
  var var_t = this._writableState;
  var_t.corked && (var_t.corked--, var_t.writing || var_t.corked ||
  var_t.bufferProcessing || !var_t.bufferedRequest || var_A(this, var_t));
  }
  , var_g.prototype.setDefaultEncoding = function (param_t) {
  if ("string" == typeof param_t && (param_t = param_t.toLowerCase()), !(["hex",
  "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le",
  "raw"].indexOf((param_t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + param_t);
  return this._writableState.defaultEncoding = param_t, this;
  }
  , Object.defineProperty(var_g.prototype, "writableHighWaterMark", {
  enumerable: !1,
  get: function () {
  return this._writableState.highWaterMark;
  }
  }
  ), var_g.prototype._write = function (param_t, param_e_1, param_r) {
  param_r(new Error("_write() is not implemented"));
  }
  , var_g.prototype._writev = null, var_g.prototype.end = function (param_t, param_e_1,
  param_r) {
  var var_n = this._writableState;
  "function" == typeof param_t ? (param_r = param_t, param_t = null, param_e_1 = null) :
  "function" == typeof param_e_1 && (param_r = param_e_1, param_e_1 = null), null != param_t &&
  this.write(param_t, param_e_1), var_n.corked && (var_n.corked = 1, this.uncork(
  )), var_n.ending || function (param_t_1, param_e_2, param_r_1) {
  param_e_2.ending = !0, var_S(param_t_1, param_e_2), param_r_1 &&
  (param_e_2.finished ? dep_module_36.nextTick(param_r_1) : param_t_1.once("finish",
  param_r_1));
  param_e_2.ended = !0, param_t_1.writable = !1;
  }
  (this, var_n, param_r);
  }
  , Object.defineProperty(var_g.prototype, "destroyed", {
  get: function () {
  return void 0 !== this._writableState && this._writableState.destroyed;
  }
  ,
  set: function (param_t) {
  this._writableState && (this._writableState.destroyed = param_t);
  }
  }
  ), var_g.prototype.destroy = dep_helper_489.destroy, var_g.prototype._undestroy = dep_helper_489.undestroy,
  var_g.prototype._destroy = function (param_t, param_e_1) {
  this.end(), param_e_1(param_t);
  };
  }
  ).call(this, requireFn(32), requireFn(78).setImmediate, requireFn(13));
  };
