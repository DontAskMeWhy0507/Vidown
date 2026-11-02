// Module 49 [events] - Stream / runtime utility component (stream-writable)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_t, param_n, param_o) {
  var dep_safe_buffer = requireFn(36);
  function var_a(param_e) {
  var var_t = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
  (function (param_e_1, param_t_1, param_r) {
  var var_n = param_e_1.entry;
  param_e_1.entry = null;
  while (var_n) {
  var var_o = var_n.callback;
  param_t_1.pendingcb--;
  var_o(param_r);
  var_n = var_n.next;
  }
  param_t_1.corkedRequestsFree.next = param_e_1;
  }
  )(var_t, param_e);
  };
  }
  moduleObj.exports = var_y;
  var var_s;
  var var_c = !param_t.browser && ["v0.10", "v0.9."].indexOf(param_t.version.slice(
  0, 5)) > -1 ? param_n : dep_safe_buffer.nextTick;
  var_y.WritableState = var_v;
  var var_u = Object.create(requireFn(29));
  var_u.inherits = requireFn(15);
  var obj_l = {
  deprecate: requireFn(91)
  };
  var dep_stream_internal_state = requireFn(85);
  var var_p = requireFn(48).Buffer;
  var var_f = (param_o !== undefined ? param_o : typeof window != "undefined" ?
  window : typeof self != "undefined" ? self : {
  }
  ).Uint8Array || function () {
  };
  var var_h;
  var dep_stream_buffer_list = requireFn(86);
  function var_g() {
  }
  function var_v(param_e, param_t_1) {
  var_s = var_s || requireFn(30);
  param_e = param_e || {
  };
  var var_n = param_t_1 instanceof var_s;
  this.objectMode = !!param_e.objectMode;
  if (var_n) {
  this.objectMode = this.objectMode || !!param_e.writableObjectMode;
  }
  var var_o = param_e.highWaterMark;
  var var_u_1 = param_e.writableHighWaterMark;
  var var_l = this.objectMode ? 16 : 16384;
  this.highWaterMark = var_o || var_o === 0 ? var_o : var_n &&
  (var_u_1 || var_u_1 === 0) ? var_u_1 : var_l;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var var_d = param_e.decodeStrings === false;
  this.decodeStrings = !var_d;
  this.defaultEncoding = param_e.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (param_e_1) {
  (function (param_e_2, param_t_2) {
  var var_r = param_e_2._writableState;
  var var_n_1 = var_r.sync;
  var var_o_1 = var_r.writecb;
  (function (param_e_3) {
  param_e_3.writing = false;
  param_e_3.writecb = null;
  param_e_3.length -= param_e_3.writelen;
  param_e_3.writelen = 0;
  }
  )(var_r);
  if (param_t_2) {
  (function (param_e_3, param_t_3, param_r, param_n_1, param_o_1) {
  --param_t_3.pendingcb;
  if (param_r) {
  dep_safe_buffer.nextTick(param_o_1, param_n_1);
  dep_safe_buffer.nextTick(var_T, param_e_3, param_t_3);
  param_e_3._writableState.errorEmitted = true;
  param_e_3.emit("error", param_n_1);
  }
  else {
  param_o_1(param_n_1);
  param_e_3._writableState.errorEmitted = true;
  param_e_3.emit("error", param_n_1);
  var_T(param_e_3, param_t_3);
  }
  }
  )(param_e_2, var_r, var_n_1, param_t_2, var_o_1);
  }
  else {
  var var_a_1 = var_E(var_r);
  if (!var_a_1 && !var_r.corked && !var_r.bufferProcessing &&
  !!var_r.bufferedRequest) {
  var_w(param_e_2, var_r);
  }
  if (var_n_1) {
  var_c(var_b, param_e_2, var_r, var_a_1, var_o_1);
  }
  else {
  var_b(param_e_2, var_r, var_a_1, var_o_1);
  }
  }
  }
  )(param_t_1, param_e_1);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new var_a(this);
  }
  function var_y(param_e) {
  var_s = var_s || requireFn(30);
  if (!var_h.call(var_y, this) && !(this instanceof var_s)) {
  return new var_y(param_e);
  }
  this._writableState = new var_v(param_e, this);
  this.writable = true;
  if (param_e) {
  if (typeof param_e.write == "function") {
  this._write = param_e.write;
  }
  if (typeof param_e.writev == "function") {
  this._writev = param_e.writev;
  }
  if (typeof param_e.destroy == "function") {
  this._destroy = param_e.destroy;
  }
  if (typeof param_e.final == "function") {
  this._final = param_e.final;
  }
  }
  dep_stream_internal_state.call(this);
  }
  function var__(param_e, param_t_1, param_r, param_n_1, param_o_1, param_i, param_a) {
  param_t_1.writelen = param_n_1;
  param_t_1.writecb = param_a;
  param_t_1.writing = true;
  param_t_1.sync = true;
  if (param_r) {
  param_e._writev(param_o_1, param_t_1.onwrite);
  }
  else {
  param_e._write(param_o_1, param_i, param_t_1.onwrite);
  }
  param_t_1.sync = false;
  }
  function var_b(param_e, param_t_1, param_r, param_n_1) {
  if (!param_r) {
  (function (param_e_1, param_t_2) {
  if (param_t_2.length === 0 && param_t_2.needDrain) {
  param_t_2.needDrain = false;
  param_e_1.emit("drain");
  }
  }
  )(param_e, param_t_1);
  }
  param_t_1.pendingcb--;
  param_n_1();
  var_T(param_e, param_t_1);
  }
  function var_w(param_e, param_t_1) {
  param_t_1.bufferProcessing = true;
  var var_r = param_t_1.bufferedRequest;
  if (param_e._writev && var_r && var_r.next) {
  var var_n = param_t_1.bufferedRequestCount;
  var var_o = new Array(var_n);
  var var_i = param_t_1.corkedRequestsFree;
  var_i.entry = var_r;
  var num_s = 0;
  var flag_c = true;
  while (var_r) {
  var_o[num_s] = var_r;
  if (!var_r.isBuf) {
  flag_c = false;
  }
  var_r = var_r.next;
  num_s += 1;
  }
  var_o.allBuffers = flag_c;
  var__(param_e, param_t_1, true, param_t_1.length, var_o, "", var_i.finish);
  param_t_1.pendingcb++;
  param_t_1.lastBufferedRequest = null;
  if (var_i.next) {
  param_t_1.corkedRequestsFree = var_i.next;
  var_i.next = null;
  }
  else {
  param_t_1.corkedRequestsFree = new var_a(param_t_1);
  }
  param_t_1.bufferedRequestCount = 0;
  }
  else {
  while (var_r) {
  var var_u_1 = var_r.chunk;
  var var_l = var_r.encoding;
  var var_d = var_r.callback;
  var__(param_e, param_t_1, false, param_t_1.objectMode ? 1 :
  var_u_1.length, var_u_1, var_l, var_d);
  var_r = var_r.next;
  param_t_1.bufferedRequestCount--;
  if (param_t_1.writing) {
  break;
  }
  }
  if (var_r === null) {
  param_t_1.lastBufferedRequest = null;
  }
  }
  param_t_1.bufferedRequest = var_r;
  param_t_1.bufferProcessing = false;
  }
  function var_E(param_e) {
  return param_e.ending && param_e.length === 0 && param_e.bufferedRequest === null &&
  !param_e.finished && !param_e.writing;
  }
  function var_D(param_e, param_t_1) {
  param_e._final(function (param_r) {
  param_t_1.pendingcb--;
  if (param_r) {
  param_e.emit("error", param_r);
  }
  param_t_1.prefinished = true;
  param_e.emit("prefinish");
  var_T(param_e, param_t_1);
  }
  );
  }
  function var_T(param_e, param_t_1) {
  var var_r = var_E(param_t_1);
  if (var_r) {
  (function (param_e_1, param_t_2) {
  if (!param_t_2.prefinished && !param_t_2.finalCalled) {
  if (typeof param_e_1._final == "function") {
  param_t_2.pendingcb++;
  param_t_2.finalCalled = true;
  dep_safe_buffer.nextTick(var_D, param_e_1, param_t_2);
  }
  else {
  param_t_2.prefinished = true;
  param_e_1.emit("prefinish");
  }
  }
  }
  )(param_e, param_t_1);
  if (param_t_1.pendingcb === 0) {
  param_t_1.finished = true;
  param_e.emit("finish");
  }
  }
  return var_r;
  }
  var_u.inherits(var_y, dep_stream_internal_state);
  var_v.prototype.getBuffer = function () {
  for (var var_e = this.bufferedRequest, list_t = [];
  var_e;
  ) {
  list_t.push(var_e);
  var_e = var_e.next;
  }
  return list_t;
  };
  (function () {
  try {
  Object.defineProperty(var_v.prototype, "buffer", {
  get: obj_l.deprecate(function () {
  return this.getBuffer();
  }
  , "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
  "DEP0003")
  }
  );
  }
  catch (var_e) {
  }
  }
  )();
  if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
  var_h = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(var_y, Symbol.hasInstance, {
  value: function (param_e) {
  return !!var_h.call(this, param_e) || this === var_y && param_e &&
  param_e._writableState instanceof var_v;
  }
  }
  );
  }
  else {
  var_h = function (param_e) {
  return param_e instanceof this;
  };
  }
  var_y.prototype.pipe = function () {
  this.emit("error", new Error("Cannot pipe, not readable"));
  };
  var_y.prototype.write = function (param_e, param_t_1, param_r) {
  var var_n;
  var var_o = this._writableState;
  var flag_a = false;
  var var_s_1 = !var_o.objectMode && (var_n = param_e, var_p.isBuffer(var_n) ||
  var_n instanceof var_f);
  if (var_s_1 && !var_p.isBuffer(param_e)) {
  param_e = function (param_e_1) {
  return var_p.from(param_e_1);
  }
  (param_e);
  }
  if (typeof param_t_1 == "function") {
  param_r = param_t_1;
  param_t_1 = null;
  }
  if (var_s_1) {
  param_t_1 = "buffer";
  }
  else {
  param_t_1 ||= var_o.defaultEncoding;
  }
  if (typeof param_r != "function") {
  param_r = var_g;
  }
  if (var_o.ended) {
  (function (param_e_1, param_t_2) {
  var var_r = new Error("write after end");
  param_e_1.emit("error", var_r);
  dep_safe_buffer.nextTick(param_t_2, var_r);
  }
  )(this, param_r);
  }
  else if (var_s_1 || function (param_e_1, param_t_2, param_r_1, param_n_1) {
  var flag_o = true;
  var flag_a_1 = false;
  if (param_r_1 === null) {
  flag_a_1 = new TypeError("May not write null values to stream");
  }
  else if (typeof param_r_1 != "string" && param_r_1 !== undefined &&
  !param_t_2.objectMode) {
  flag_a_1 = new TypeError("Invalid non-string/buffer chunk");
  }
  if (flag_a_1) {
  param_e_1.emit("error", flag_a_1);
  dep_safe_buffer.nextTick(param_n_1, flag_a_1);
  flag_o = false;
  }
  return flag_o;
  }
  (this, var_o, param_e, param_r)) {
  var_o.pendingcb++;
  flag_a = function (param_e_1, param_t_2, param_r_1, param_n_1, param_o_1, param_i) {
  if (!param_r_1) {
  var var_a_1 = function (param_e_2, param_t_3, param_r_2) {
  if (!param_e_2.objectMode && param_e_2.decodeStrings !== false &&
  typeof param_t_3 == "string") {
  param_t_3 = var_p.from(param_t_3, param_r_2);
  }
  return param_t_3;
  }
  (param_t_2, param_n_1, param_o_1);
  if (param_n_1 !== var_a_1) {
  param_r_1 = true;
  param_o_1 = "buffer";
  param_n_1 = var_a_1;
  }
  }
  var var_s_2 = param_t_2.objectMode ? 1 : param_n_1.length;
  param_t_2.length += var_s_2;
  var var_c_1 = param_t_2.length < param_t_2.highWaterMark;
  if (!var_c_1) {
  param_t_2.needDrain = true;
  }
  if (param_t_2.writing || param_t_2.corked) {
  var var_u_1 = param_t_2.lastBufferedRequest;
  param_t_2.lastBufferedRequest = {
  chunk: param_n_1,
  encoding: param_o_1,
  isBuf: param_r_1,
  callback: param_i,
  next: null
  };
  if (var_u_1) {
  var_u_1.next = param_t_2.lastBufferedRequest;
  }
  else {
  param_t_2.bufferedRequest = param_t_2.lastBufferedRequest;
  }
  param_t_2.bufferedRequestCount += 1;
  }
  else {
  var__(param_e_1, param_t_2, false, var_s_2, param_n_1, param_o_1, param_i);
  }
  return var_c_1;
  }
  (this, var_o, var_s_1, param_e, param_t_1, param_r);
  }
  return flag_a;
  };
  var_y.prototype.cork = function () {
  this._writableState.corked++;
  };
  var_y.prototype.uncork = function () {
  var var_e = this._writableState;
  if (var_e.corked) {
  var_e.corked--;
  if (!var_e.writing && !var_e.corked && !var_e.bufferProcessing &&
  !!var_e.bufferedRequest) {
  var_w(this, var_e);
  }
  }
  };
  var_y.prototype.setDefaultEncoding = function (param_e) {
  if (typeof param_e == "string") {
  param_e = param_e.toLowerCase();
  }
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le",
  "utf-16le", "raw"].indexOf((param_e + "").toLowerCase()) > -1)) {
  throw new TypeError("Unknown encoding: " + param_e);
  }
  this._writableState.defaultEncoding = param_e;
  return this;
  };
  Object.defineProperty(var_y.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
  return this._writableState.highWaterMark;
  }
  }
  );
  var_y.prototype._write = function (param_e, param_t_1, param_r) {
  param_r(new Error("_write() is not implemented"));
  };
  var_y.prototype._writev = null;
  var_y.prototype.end = function (param_e, param_t_1, param_r) {
  var var_n = this._writableState;
  if (typeof param_e == "function") {
  param_r = param_e;
  param_e = null;
  param_t_1 = null;
  }
  else if (typeof param_t_1 == "function") {
  param_r = param_t_1;
  param_t_1 = null;
  }
  if (param_e != null) {
  this.write(param_e, param_t_1);
  }
  if (var_n.corked) {
  var_n.corked = 1;
  this.uncork();
  }
  if (!var_n.ending) {
  (function (param_e_1, param_t_2, param_r_1) {
  param_t_2.ending = true;
  var_T(param_e_1, param_t_2);
  if (param_r_1) {
  if (param_t_2.finished) {
  dep_safe_buffer.nextTick(param_r_1);
  }
  else {
  param_e_1.once("finish", param_r_1);
  }
  }
  param_t_2.ended = true;
  param_e_1.writable = false;
  }
  )(this, var_n, param_r);
  }
  };
  Object.defineProperty(var_y.prototype, "destroyed", {
  get: function () {
  return this._writableState !== undefined && this._writableState.destroyed;
  }
  ,
  set: function (param_e) {
  if (this._writableState) {
  this._writableState.destroyed = param_e;
  }
  }
  }
  );
  var_y.prototype.destroy = dep_stream_buffer_list.destroy;
  var_y.prototype._undestroy = dep_stream_buffer_list.undestroy;
  var_y.prototype._destroy = function (param_e, param_t_1) {
  this.end();
  param_t_1(param_e);
  };
  }
  ).call(this, requireFn(32), requireFn(78).setImmediate, requireFn(13));
  };
