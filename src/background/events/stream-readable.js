// Module 84 [events] - Stream / runtime utility component (stream-readable)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_t, param_n) {
  var dep_safe_buffer = requireFn(36);
  moduleObj.exports = var__;
  var var_i;
  var dep_stream_end_of_stream = requireFn(102);
  var__.ReadableState = var_y;
  requireFn(42).EventEmitter;
  function var_s(param_e, param_t_1) {
  return param_e.listeners(param_t_1).length;
  }
  var dep_stream_internal_state = requireFn(85);
  var var_u = requireFn(48).Buffer;
  var var_l = (param_t !== undefined ? param_t : typeof window != "undefined" ?
  window : typeof self != "undefined" ? self : {
  }
  ).Uint8Array || function () {
  };
  var var_d = Object.create(requireFn(29));
  var_d.inherits = requireFn(15);
  var dep_stream_util = requireFn(103);
  var var_f = undefined;
  var_f = dep_stream_util && dep_stream_util.debuglog ? dep_stream_util.debuglog(
  "stream") : function () {
  };
  var var_h;
  var dep_stream_readable_stream = requireFn(104);
  var dep_stream_buffer_list = requireFn(86);
  var_d.inherits(var__, dep_stream_internal_state);
  var list_v = ["error", "close", "destroy", "pause", "resume"];
  function var_y(param_e, param_t_1) {
  param_e = param_e || {
  };
  var var_n = param_t_1 instanceof (var_i = var_i || requireFn(30));
  this.objectMode = !!param_e.objectMode;
  if (var_n) {
  this.objectMode = this.objectMode || !!param_e.readableObjectMode;
  }
  var var_o = param_e.highWaterMark;
  var var_a = param_e.readableHighWaterMark;
  var var_s_1 = this.objectMode ? 16 : 16384;
  this.highWaterMark = var_o || var_o === 0 ? var_o : var_n &&
  (var_a || var_a === 0) ? var_a : var_s_1;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.buffer = new dep_stream_readable_stream();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.destroyed = false;
  this.defaultEncoding = param_e.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (param_e.encoding) {
  var_h ||= requireFn(46).StringDecoder;
  this.decoder = new var_h(param_e.encoding);
  this.encoding = param_e.encoding;
  }
  }
  function var__(param_e) {
  var_i = var_i || requireFn(30);
  if (!(this instanceof var__)) {
  return new var__(param_e);
  }
  this._readableState = new var_y(param_e, this);
  this.readable = true;
  if (param_e) {
  if (typeof param_e.read == "function") {
  this._read = param_e.read;
  }
  if (typeof param_e.destroy == "function") {
  this._destroy = param_e.destroy;
  }
  }
  dep_stream_internal_state.call(this);
  }
  function var_b(param_e, param_t_1, param_r, param_n_1, param_o) {
  var var_i_1;
  var var_a = param_e._readableState;
  if (param_t_1 === null) {
  var_a.reading = false;
  (function (param_e_1, param_t_2) {
  if (param_t_2.ended) {
  return;
  }
  if (param_t_2.decoder) {
  var var_r = param_t_2.decoder.end();
  if (var_r && var_r.length) {
  param_t_2.buffer.push(var_r);
  param_t_2.length += param_t_2.objectMode ? 1 : var_r.length;
  }
  }
  param_t_2.ended = true;
  var_D(param_e_1);
  }
  )(param_e, var_a);
  }
  else {
  if (!param_o) {
  var_i_1 = function (param_e_1, param_t_2) {
  var var_r;
  var_n = param_t_2;
  if (!var_u.isBuffer(var_n) && !(var_n instanceof var_l) &&
  typeof param_t_2 != "string" && param_t_2 !== undefined &&
  !param_e_1.objectMode) {
  var_r = new TypeError("Invalid non-string/buffer chunk");
  }
  var var_n;
  return var_r;
  }
  (var_a, param_t_1);
  }
  if (var_i_1) {
  param_e.emit("error", var_i_1);
  }
  else if (var_a.objectMode || param_t_1 && param_t_1.length > 0) {
  if (typeof param_t_1 != "string" && !var_a.objectMode && Object.getPrototypeOf(
  param_t_1) !== var_u.prototype) {
  param_t_1 = function (param_e_1) {
  return var_u.from(param_e_1);
  }
  (param_t_1);
  }
  if (param_n_1) {
  if (var_a.endEmitted) {
  param_e.emit("error", new Error("stream.unshift() after end event"));
  }
  else {
  var_w(param_e, var_a, param_t_1, true);
  }
  }
  else if (var_a.ended) {
  param_e.emit("error", new Error("stream.push() after EOF"));
  }
  else {
  var_a.reading = false;
  if (var_a.decoder && !param_r) {
  param_t_1 = var_a.decoder.write(param_t_1);
  if (var_a.objectMode || param_t_1.length !== 0) {
  var_w(param_e, var_a, param_t_1, false);
  }
  else {
  var_k(param_e, var_a);
  }
  }
  else {
  var_w(param_e, var_a, param_t_1, false);
  }
  }
  }
  else if (!param_n_1) {
  var_a.reading = false;
  }
  }
  return function (param_e_1) {
  return !param_e_1.ended && (param_e_1.needReadable || param_e_1.length < param_e_1.highWaterMark ||
  param_e_1.length === 0);
  }
  (var_a);
  }
  function var_w(param_e, param_t_1, param_r, param_n_1) {
  if (param_t_1.flowing && param_t_1.length === 0 && !param_t_1.sync) {
  param_e.emit("data", param_r);
  param_e.read(0);
  }
  else {
  param_t_1.length += param_t_1.objectMode ? 1 : param_r.length;
  if (param_n_1) {
  param_t_1.buffer.unshift(param_r);
  }
  else {
  param_t_1.buffer.push(param_r);
  }
  if (param_t_1.needReadable) {
  var_D(param_e);
  }
  }
  var_k(param_e, param_t_1);
  }
  Object.defineProperty(var__.prototype, "destroyed", {
  get: function () {
  return this._readableState !== undefined && this._readableState.destroyed;
  }
  ,
  set: function (param_e) {
  if (this._readableState) {
  this._readableState.destroyed = param_e;
  }
  }
  }
  );
  var__.prototype.destroy = dep_stream_buffer_list.destroy;
  var__.prototype._undestroy = dep_stream_buffer_list.undestroy;
  var__.prototype._destroy = function (param_e, param_t_1) {
  this.push(null);
  param_t_1(param_e);
  };
  var__.prototype.push = function (param_e, param_t_1) {
  var var_r;
  var var_n = this._readableState;
  if (var_n.objectMode) {
  var_r = true;
  }
  else if (typeof param_e == "string") {
  if ((param_t_1 = param_t_1 || var_n.defaultEncoding) !== var_n.encoding) {
  param_e = var_u.from(param_e, param_t_1);
  param_t_1 = "";
  }
  var_r = true;
  }
  return var_b(this, param_e, param_t_1, false, var_r);
  };
  var__.prototype.unshift = function (param_e) {
  return var_b(this, param_e, null, true, false);
  };
  var__.prototype.isPaused = function () {
  return this._readableState.flowing === false;
  };
  var__.prototype.setEncoding = function (param_e) {
  var_h ||= requireFn(46).StringDecoder;
  this._readableState.decoder = new var_h(param_e);
  this._readableState.encoding = param_e;
  return this;
  };
  function var_E(param_e, param_t_1) {
  if (param_e <= 0 || param_t_1.length === 0 && param_t_1.ended) {
  return 0;
  }
  else if (param_t_1.objectMode) {
  return 1;
  }
  else if (param_e != param_e) {
  if (param_t_1.flowing && param_t_1.length) {
  return param_t_1.buffer.head.data.length;
  }
  else {
  return param_t_1.length;
  }
  }
  else {
  if (param_e > param_t_1.highWaterMark) {
  param_t_1.highWaterMark = function (param_e_1) {
  if (param_e_1 >= 8388608) {
  param_e_1 = 8388608;
  }
  else {
  param_e_1--;
  param_e_1 |= param_e_1 >>> 1;
  param_e_1 |= param_e_1 >>> 2;
  param_e_1 |= param_e_1 >>> 4;
  param_e_1 |= param_e_1 >>> 8;
  param_e_1 |= param_e_1 >>> 16;
  param_e_1++;
  }
  return param_e_1;
  }
  (param_e);
  }
  if (param_e <= param_t_1.length) {
  return param_e;
  }
  else if (param_t_1.ended) {
  return param_t_1.length;
  }
  else {
  param_t_1.needReadable = true;
  return 0;
  }
  }
  }
  function var_D(param_e) {
  var var_t = param_e._readableState;
  var_t.needReadable = false;
  if (!var_t.emittedReadable) {
  var_f("emitReadable", var_t.flowing);
  var_t.emittedReadable = true;
  if (var_t.sync) {
  dep_safe_buffer.nextTick(var_T, param_e);
  }
  else {
  var_T(param_e);
  }
  }
  }
  function var_T(param_e) {
  var_f("emit readable");
  param_e.emit("readable");
  var_S(param_e);
  }
  function var_k(param_e, param_t_1) {
  if (!param_t_1.readingMore) {
  param_t_1.readingMore = true;
  dep_safe_buffer.nextTick(var_A, param_e, param_t_1);
  }
  }
  function var_A(param_e, param_t_1) {
  for (var var_r = param_t_1.length;
  !param_t_1.reading && !param_t_1.flowing && !param_t_1.ended &&
  param_t_1.length < param_t_1.highWaterMark && (var_f("maybeReadMore read 0"), param_e.read(
  0), var_r !== param_t_1.length);
  ) {
  var_r = param_t_1.length;
  }
  param_t_1.readingMore = false;
  }
  function var_C(param_e) {
  var_f("readable nexttick read 0");
  param_e.read(0);
  }
  function var_x(param_e, param_t_1) {
  if (!param_t_1.reading) {
  var_f("resume read 0");
  param_e.read(0);
  }
  param_t_1.resumeScheduled = false;
  param_t_1.awaitDrain = 0;
  param_e.emit("resume");
  var_S(param_e);
  if (param_t_1.flowing && !param_t_1.reading) {
  param_e.read(0);
  }
  }
  function var_S(param_e) {
  var var_t = param_e._readableState;
  for (var_f("flow", var_t.flowing);
  var_t.flowing && param_e.read() !== null;
  );
  }
  function var_O(param_e, param_t_1) {
  if (param_t_1.length === 0) {
  return null;
  }
  else {
  if (param_t_1.objectMode) {
  var_r = param_t_1.buffer.shift();
  }
  else if (!param_e || param_e >= param_t_1.length) {
  var_r = param_t_1.decoder ? param_t_1.buffer.join("") : param_t_1.buffer.length === 1 ?
  param_t_1.buffer.head.data : param_t_1.buffer.concat(param_t_1.length);
  param_t_1.buffer.clear();
  }
  else {
  var_r = function (param_e_1, param_t_2, param_r) {
  var var_n;
  if (param_e_1 < param_t_2.head.data.length) {
  var_n = param_t_2.head.data.slice(0, param_e_1);
  param_t_2.head.data = param_t_2.head.data.slice(param_e_1);
  }
  else {
  var_n = param_e_1 === param_t_2.head.data.length ? param_t_2.shift() :
  param_r ? function (param_e_2, param_t_3) {
  var var_r_1 = param_t_3.head;
  var num_n = 1;
  var var_o = var_r_1.data;
  param_e_2 -= var_o.length;
  while (var_r_1 = var_r_1.next) {
  var var_i_1 = var_r_1.data;
  var var_a = param_e_2 > var_i_1.length ? var_i_1.length : param_e_2;
  if (var_a === var_i_1.length) {
  var_o += var_i_1;
  }
  else {
  var_o += var_i_1.slice(0, param_e_2);
  }
  if ((param_e_2 -= var_a) === 0) {
  if (var_a === var_i_1.length) {
  ++num_n;
  if (var_r_1.next) {
  param_t_3.head = var_r_1.next;
  }
  else {
  param_t_3.head = param_t_3.tail = null;
  }
  }
  else {
  param_t_3.head = var_r_1;
  var_r_1.data = var_i_1.slice(var_a);
  }
  break;
  }
  ++num_n;
  }
  param_t_3.length -= num_n;
  return var_o;
  }
  (param_e_1, param_t_2) : function (param_e_2, param_t_3) {
  var var_r_1 = var_u.allocUnsafe(param_e_2);
  var var_n_1 = param_t_3.head;
  var num_o = 1;
  var_n_1.data.copy(var_r_1);
  param_e_2 -= var_n_1.data.length;
  while (var_n_1 = var_n_1.next) {
  var var_i_1 = var_n_1.data;
  var var_a = param_e_2 > var_i_1.length ? var_i_1.length : param_e_2;
  var_i_1.copy(var_r_1, var_r_1.length - param_e_2, 0, var_a);
  if ((param_e_2 -= var_a) === 0) {
  if (var_a === var_i_1.length) {
  ++num_o;
  if (var_n_1.next) {
  param_t_3.head = var_n_1.next;
  }
  else {
  param_t_3.head = param_t_3.tail = null;
  }
  }
  else {
  param_t_3.head = var_n_1;
  var_n_1.data = var_i_1.slice(var_a);
  }
  break;
  }
  ++num_o;
  }
  param_t_3.length -= num_o;
  return var_r_1;
  }
  (param_e_1, param_t_2);
  }
  return var_n;
  }
  (param_e, param_t_1.buffer, param_t_1.decoder);
  }
  return var_r;
  }
  var var_r;
  }
  function var_I(param_e) {
  var var_t = param_e._readableState;
  if (var_t.length > 0) {
  throw new Error("\"endReadable()\" called on non-empty stream");
  }
  if (!var_t.endEmitted) {
  var_t.ended = true;
  dep_safe_buffer.nextTick(var_L, var_t, param_e);
  }
  }
  function var_L(param_e, param_t_1) {
  if (!param_e.endEmitted && param_e.length === 0) {
  param_e.endEmitted = true;
  param_t_1.readable = false;
  param_t_1.emit("end");
  }
  }
  function var_R(param_e, param_t_1) {
  for (var num_r = 0, var_n = param_e.length;
  num_r < var_n;
  num_r++) {
  if (param_e[num_r] === param_t_1) {
  return num_r;
  }
  }
  return -1;
  }
  var__.prototype.read = function (param_e) {
  var_f("read", param_e);
  param_e = parseInt(param_e, 10);
  var var_t = this._readableState;
  var var_r = param_e;
  if (param_e !== 0) {
  var_t.emittedReadable = false;
  }
  if (param_e === 0 && var_t.needReadable && (var_t.length >= var_t.highWaterMark ||
  var_t.ended)) {
  var_f("read: emitReadable", var_t.length, var_t.ended);
  if (var_t.length === 0 && var_t.ended) {
  var_I(this);
  }
  else {
  var_D(this);
  }
  return null;
  }
  if ((param_e = var_E(param_e, var_t)) === 0 && var_t.ended) {
  if (var_t.length === 0) {
  var_I(this);
  }
  return null;
  }
  var var_n;
  var var_o = var_t.needReadable;
  var_f("need readable", var_o);
  if (var_t.length === 0 || var_t.length - param_e < var_t.highWaterMark) {
  var_f("length less than watermark", var_o = true);
  }
  if (var_t.ended || var_t.reading) {
  var_f("reading or ended", var_o = false);
  }
  else if (var_o) {
  var_f("do read");
  var_t.reading = true;
  var_t.sync = true;
  if (var_t.length === 0) {
  var_t.needReadable = true;
  }
  this._read(var_t.highWaterMark);
  var_t.sync = false;
  if (!var_t.reading) {
  param_e = var_E(var_r, var_t);
  }
  }
  if ((var_n = param_e > 0 ? var_O(param_e, var_t) : null) === null) {
  var_t.needReadable = true;
  param_e = 0;
  }
  else {
  var_t.length -= param_e;
  }
  if (var_t.length === 0) {
  if (!var_t.ended) {
  var_t.needReadable = true;
  }
  if (var_r !== param_e && var_t.ended) {
  var_I(this);
  }
  }
  if (var_n !== null) {
  this.emit("data", var_n);
  }
  return var_n;
  };
  var__.prototype._read = function (param_e) {
  this.emit("error", new Error("_read() is not implemented"));
  };
  var__.prototype.pipe = function (param_e, param_t_1) {
  var var_r = this;
  var var_i_1 = this._readableState;
  switch (var_i_1.pipesCount) {
  case 0:
  var_i_1.pipes = param_e;
  break;
  case 1:
  var_i_1.pipes = [var_i_1.pipes, param_e];
  break;
  default:
  var_i_1.pipes.push(param_e);
  }
  var_i_1.pipesCount += 1;
  var_f("pipe count=%d opts=%j", var_i_1.pipesCount, param_t_1);
  var var_c = (!param_t_1 || param_t_1.end !== false) && param_e !== param_n.stdout &&
  param_e !== param_n.stderr ? var_l_1 : var___1;
  function var_u_1(param_t_2, param_n_1) {
  var_f("onunpipe");
  if (param_t_2 === var_r && param_n_1 && param_n_1.hasUnpiped === false) {
  param_n_1.hasUnpiped = true;
  var_f("cleanup");
  param_e.removeListener("close", var_v);
  param_e.removeListener("finish", var_y_1);
  param_e.removeListener("drain", var_d_1);
  param_e.removeListener("error", var_g);
  param_e.removeListener("unpipe", var_u_1);
  var_r.removeListener("end", var_l_1);
  var_r.removeListener("end", var___1);
  var_r.removeListener("data", var_m);
  flag_p = true;
  if (!!var_i_1.awaitDrain && (!param_e._writableState || !!param_e._writableState.needDrain)) {
  var_d_1();
  }
  }
  }
  function var_l_1() {
  var_f("onend");
  param_e.end();
  }
  if (var_i_1.endEmitted) {
  dep_safe_buffer.nextTick(var_c);
  }
  else {
  var_r.once("end", var_c);
  }
  param_e.on("unpipe", var_u_1);
  var var_d_1 = function (param_e_1) {
  return function () {
  var var_t = param_e_1._readableState;
  var_f("pipeOnDrain", var_t.awaitDrain);
  if (var_t.awaitDrain) {
  var_t.awaitDrain--;
  }
  if (var_t.awaitDrain === 0 && var_s(param_e_1, "data")) {
  var_t.flowing = true;
  var_S(param_e_1);
  }
  };
  }
  (var_r);
  param_e.on("drain", var_d_1);
  var flag_p = false;
  var flag_h = false;
  function var_m(param_t_2) {
  var_f("ondata");
  flag_h = false;
  if (param_e.write(param_t_2) === false && !flag_h) {
  if ((var_i_1.pipesCount === 1 && var_i_1.pipes === param_e ||
  var_i_1.pipesCount > 1 && var_R(var_i_1.pipes, param_e) !== -1) &&
  !flag_p) {
  var_f("false write response, pause", var_i_1.awaitDrain);
  var_i_1.awaitDrain++;
  flag_h = true;
  }
  var_r.pause();
  }
  }
  function var_g(param_t_2) {
  var_f("onerror", param_t_2);
  var___1();
  param_e.removeListener("error", var_g);
  if (var_s(param_e, "error") === 0) {
  param_e.emit("error", param_t_2);
  }
  }
  function var_v() {
  param_e.removeListener("finish", var_y_1);
  var___1();
  }
  function var_y_1() {
  var_f("onfinish");
  param_e.removeListener("close", var_v);
  var___1();
  }
  function var___1() {
  var_f("unpipe");
  var_r.unpipe(param_e);
  }
  var_r.on("data", var_m);
  (function (param_e_1, param_t_2, param_r) {
  if (typeof param_e_1.prependListener == "function") {
  return param_e_1.prependListener(param_t_2, param_r);
  }
  if (param_e_1._events && param_e_1._events[param_t_2]) {
  if (dep_stream_end_of_stream(param_e_1._events[param_t_2])) {
  param_e_1._events[param_t_2].unshift(param_r);
  }
  else {
  param_e_1._events[param_t_2] = [param_r, param_e_1._events[param_t_2]];
  }
  }
  else {
  param_e_1.on(param_t_2, param_r);
  }
  }
  )(param_e, "error", var_g);
  param_e.once("close", var_v);
  param_e.once("finish", var_y_1);
  param_e.emit("pipe", var_r);
  if (!var_i_1.flowing) {
  var_f("pipe resume");
  var_r.resume();
  }
  return param_e;
  };
  var__.prototype.unpipe = function (param_e) {
  var var_t = this._readableState;
  var obj_r = {
  hasUnpiped: false
  };
  if (var_t.pipesCount === 0) {
  return this;
  }
  if (var_t.pipesCount === 1) {
  if (!param_e || param_e === var_t.pipes) {
  param_e ||= var_t.pipes;
  var_t.pipes = null;
  var_t.pipesCount = 0;
  var_t.flowing = false;
  if (param_e) {
  param_e.emit("unpipe", this, obj_r);
  }
  }
  return this;
  }
  if (!param_e) {
  var var_n = var_t.pipes;
  var var_o = var_t.pipesCount;
  var_t.pipes = null;
  var_t.pipesCount = 0;
  var_t.flowing = false;
  for (var num_i = 0;
  num_i < var_o;
  num_i++) {
  var_n[num_i].emit("unpipe", this, {
  hasUnpiped: false
  }
  );
  }
  return this;
  }
  var var_a = var_R(var_t.pipes, param_e);
  if (var_a !== -1) {
  var_t.pipes.splice(var_a, 1);
  var_t.pipesCount -= 1;
  if (var_t.pipesCount === 1) {
  var_t.pipes = var_t.pipes[0];
  }
  param_e.emit("unpipe", this, obj_r);
  }
  return this;
  };
  var__.prototype.on = function (param_e, param_t_1) {
  var var_r = dep_stream_internal_state.prototype.on.call(this, param_e, param_t_1);
  if (param_e === "data") {
  if (this._readableState.flowing !== false) {
  this.resume();
  }
  }
  else if (param_e === "readable") {
  var var_n = this._readableState;
  if (!var_n.endEmitted && !var_n.readableListening) {
  var_n.readableListening = var_n.needReadable = true;
  var_n.emittedReadable = false;
  if (var_n.reading) {
  if (var_n.length) {
  var_D(this);
  }
  }
  else {
  dep_safe_buffer.nextTick(var_C, this);
  }
  }
  }
  return var_r;
  };
  var__.prototype.addListener = var__.prototype.on;
  var__.prototype.resume = function () {
  var var_e = this._readableState;
  if (!var_e.flowing) {
  var_f("resume");
  var_e.flowing = true;
  (function (param_e, param_t_1) {
  if (!param_t_1.resumeScheduled) {
  param_t_1.resumeScheduled = true;
  dep_safe_buffer.nextTick(var_x, param_e, param_t_1);
  }
  }
  )(this, var_e);
  }
  return this;
  };
  var__.prototype.pause = function () {
  var_f("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
  var_f("pause");
  this._readableState.flowing = false;
  this.emit("pause");
  }
  return this;
  };
  var__.prototype.wrap = function (param_e) {
  var var_t = this;
  var var_r = this._readableState;
  var flag_n = false;
  param_e.on("end", function () {
  var_f("wrapped end");
  if (var_r.decoder && !var_r.ended) {
  var var_e = var_r.decoder.end();
  if (var_e && var_e.length) {
  var_t.push(var_e);
  }
  }
  var_t.push(null);
  }
  );
  param_e.on("data", function (param_o) {
  if (!(var_f("wrapped data"), var_r.decoder && (param_o = var_r.decoder.write(param_o)),
  var_r.objectMode && param_o == null)) {
  if (var_r.objectMode || param_o && param_o.length) {
  if (!var_t.push(param_o)) {
  flag_n = true;
  param_e.pause();
  }
  }
  }
  }
  );
  for (var var_o in param_e) {
  if (this[var_o] === undefined && typeof param_e[var_o] == "function") {
  this[var_o] = function (param_t_1) {
  return function () {
  return param_e[param_t_1].apply(param_e, arguments);
  };
  }
  (var_o);
  }
  }
  for (var num_i = 0;
  num_i < list_v.length;
  num_i++) {
  param_e.on(list_v[num_i], this.emit.bind(this, list_v[num_i]));
  }
  this._read = function (param_t_1) {
  var_f("wrapped _read", param_t_1);
  if (flag_n) {
  flag_n = false;
  param_e.resume();
  }
  };
  return this;
  };
  Object.defineProperty(var__.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
  return this._readableState.highWaterMark;
  }
  }
  );
  var__._fromList = var_O;
  }
  ).call(this, requireFn(13), requireFn(32));
  };
