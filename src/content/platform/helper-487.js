// Module 487 - Savior Helper 487
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e, param_n) {
  var dep_module_36 = requireFn(36);
  moduleObj.exports = var_b;
  var var_o,
  dep_helper_625 = requireFn(625);
  var_b.ReadableState = var_g;
  requireFn(42).EventEmitter;
  var fn_s = function (param_t, param_e_1) {
  return param_t.listeners(param_e_1).length;
  }
  ,
  dep_helper_488 = requireFn(488),
  var_c = requireFn(431).Buffer,
  var_l = (void 0 !== param_e ? param_e : "undefined" != typeof window ?
  window : "undefined" != typeof self ? self : {
  }
  ).Uint8Array || function () {
  };
  var var_f = Object.create(requireFn(29));
  var_f.inherits = requireFn(15);
  var dep_helper_626 = requireFn(626),
  var_h = void 0;
  var_h = dep_helper_626 && dep_helper_626.debuglog ? dep_helper_626.debuglog("stream") :
  function () {
  };
  var var_p,
  dep_helper_627 = requireFn(627),
  dep_helper_489 = requireFn(489);
  var_f.inherits(var_b, dep_helper_488);
  var list_y = ["error", "close", "destroy", "pause", "resume"];
  function var_g(param_t, param_e_1) {
  param_t = param_t || {
  };
  var var_n = param_e_1 instanceof (var_o = var_o || requireFn(145));
  this.objectMode = !!param_t.objectMode, var_n && (this.objectMode = this.objectMode ||
  !!param_t.readableObjectMode);
  var var_i = param_t.highWaterMark,
  var_a = param_t.readableHighWaterMark,
  var_s = this.objectMode ? 16 : 16384;
  this.highWaterMark = var_i || 0 === var_i ? var_i : var_n &&
  (var_a || 0 === var_a) ? var_a : var_s, this.highWaterMark = Math.floor(this.highWaterMark),
  this.buffer = new dep_helper_627(), this.length = 0, this.pipes = null, this.pipesCount = 0,
  this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1,
  this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1,
  this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = param_t.defaultEncoding ||
  "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null,
  param_t.encoding && (var_p || (var_p = requireFn(46).StringDecoder), this.decoder = new var_p(
  param_t.encoding), this.encoding = param_t.encoding);
  }
  function var_b(param_t) {
  if (var_o = var_o || requireFn(145), !(this instanceof var_b)) return new var_b(
  param_t);
  this._readableState = new var_g(param_t, this), this.readable = !0, param_t &&
  ("function" == typeof param_t.read && (this._read = param_t.read), "function" == typeof param_t.destroy &&
  (this._destroy = param_t.destroy)), dep_helper_488.call(this);
  }
  function var_w(param_t, param_e_1, param_r, param_n_1, param_i) {
  var var_o_1,
  var_a = param_t._readableState;
  null === param_e_1 ? (var_a.reading = !1, function (param_t_1, param_e_2) {
  if (param_e_2.ended) return;
  if (param_e_2.decoder) {
  var var_r = param_e_2.decoder.end();
  var_r && var_r.length && (param_e_2.buffer.push(var_r), param_e_2.length += param_e_2.objectMode ?
  1 : var_r.length);
  }
  param_e_2.ended = !0, var_E(param_t_1);
  }
  (param_t, var_a)) : (param_i || (var_o_1 = function (param_t_1, param_e_2) {
  var var_r;
  var_n = param_e_2, var_c.isBuffer(var_n) || var_n instanceof var_l ||
  "string" == typeof param_e_2 || void 0 === param_e_2 || param_t_1.objectMode ||
  (var_r = new TypeError("Invalid non-string/buffer chunk"));
  var var_n;
  return var_r;
  }
  (var_a, param_e_1)), var_o_1 ? param_t.emit("error", var_o_1) :
  var_a.objectMode || param_e_1 && param_e_1.length > 0 ? ("string" == typeof param_e_1 ||
  var_a.objectMode || Object.getPrototypeOf(param_e_1) === var_c.prototype ||
  (param_e_1 = function (param_t_1) {
  return var_c.from(param_t_1);
  }
  (param_e_1)), param_n_1 ? var_a.endEmitted ? param_t.emit("error", new Error("stream.unshift() after end event")) :
  var_A(param_t, var_a, param_e_1, !0) : var_a.ended ? param_t.emit("error", new Error(
  "stream.push() after EOF")) : (var_a.reading = !1, var_a.decoder &&
  !param_r ? (param_e_1 = var_a.decoder.write(param_e_1), var_a.objectMode ||
  0 !== param_e_1.length ? var_A(param_t, var_a, param_e_1, !1) :
  var_O(param_t, var_a)) : var_A(param_t, var_a, param_e_1, !1))) :
  param_n_1 || (var_a.reading = !1));
  return function (param_t_1) {
  return !param_t_1.ended && (param_t_1.needReadable || param_t_1.length < param_t_1.highWaterMark ||
  0 === param_t_1.length);
  }
  (var_a);
  }
  function var_A(param_t, param_e_1, param_r, param_n_1) {
  param_e_1.flowing && 0 === param_e_1.length && !param_e_1.sync ?
  (param_t.emit("data", param_r), param_t.read(0)) : (param_e_1.length += param_e_1.objectMode ?
  1 : param_r.length, param_n_1 ? param_e_1.buffer.unshift(param_r) :
  param_e_1.buffer.push(param_r), param_e_1.needReadable && var_E(param_t)), var_O(
  param_t, param_e_1);
  }
  Object.defineProperty(var_b.prototype, "destroyed", {
  get: function () {
  return void 0 !== this._readableState && this._readableState.destroyed;
  }
  ,
  set: function (param_t) {
  this._readableState && (this._readableState.destroyed = param_t);
  }
  }
  ), var_b.prototype.destroy = dep_helper_489.destroy, var_b.prototype._undestroy = dep_helper_489.undestroy,
  var_b.prototype._destroy = function (param_t, param_e_1) {
  this.push(null), param_e_1(param_t);
  }
  , var_b.prototype.push = function (param_t, param_e_1) {
  var var_r,
  var_n = this._readableState;
  return var_n.objectMode ? var_r = !0 : "string" == typeof param_t &&
  ((param_e_1 = param_e_1 || var_n.defaultEncoding) !== var_n.encoding &&
  (param_t = var_c.from(param_t, param_e_1), param_e_1 = ""), var_r = !0), var_w(
  this, param_t, param_e_1, !1, var_r);
  }
  , var_b.prototype.unshift = function (param_t) {
  return var_w(this, param_t, null, !0, !1);
  }
  , var_b.prototype.isPaused = function () {
  return !1 === this._readableState.flowing;
  }
  , var_b.prototype.setEncoding = function (param_t) {
  return var_p || (var_p = requireFn(46).StringDecoder), this._readableState.decoder = new var_p(
  param_t), this._readableState.encoding = param_t, this;
  };
  function var__(param_t, param_e_1) {
  return param_t <= 0 || 0 === param_e_1.length && param_e_1.ended ?
  0 : param_e_1.objectMode ? 1 : param_t != param_t ? param_e_1.flowing &&
  param_e_1.length ? param_e_1.buffer.head.data.length : param_e_1.length :
  (param_t > param_e_1.highWaterMark && (param_e_1.highWaterMark = function (param_t_1) {
  return param_t_1 >= 8388608 ? param_t_1 = 8388608 : (param_t_1--, param_t_1 |= param_t_1 >>> 1,
  param_t_1 |= param_t_1 >>> 2, param_t_1 |= param_t_1 >>> 4, param_t_1 |= param_t_1 >>> 8,
  param_t_1 |= param_t_1 >>> 16, param_t_1++), param_t_1;
  }
  (param_t)), param_t <= param_e_1.length ? param_t : param_e_1.ended ?
  param_e_1.length : (param_e_1.needReadable = !0, 0));
  }
  function var_E(param_t) {
  var var_e = param_t._readableState;
  var_e.needReadable = !1, var_e.emittedReadable || (var_h("emitReadable", var_e.flowing),
  var_e.emittedReadable = !0, var_e.sync ? dep_module_36.nextTick(var_S, param_t) :
  var_S(param_t));
  }
  function var_S(param_t) {
  var_h("emit readable"), param_t.emit("readable"), var_T(param_t);
  }
  function var_O(param_t, param_e_1) {
  param_e_1.readingMore || (param_e_1.readingMore = !0, dep_module_36.nextTick(var_x,
  param_t, param_e_1));
  }
  function var_x(param_t, param_e_1) {
  for (var var_r = param_e_1.length;
  !param_e_1.reading && !param_e_1.flowing && !param_e_1.ended &&
  param_e_1.length < param_e_1.highWaterMark && (var_h("maybeReadMore read 0"), param_t.read(
  0), var_r !== param_e_1.length);
  ) var_r = param_e_1.length;
  param_e_1.readingMore = !1;
  }
  function var_k(param_t) {
  var_h("readable nexttick read 0"), param_t.read(0);
  }
  function var_M(param_t, param_e_1) {
  param_e_1.reading || (var_h("resume read 0"), param_t.read(0)), param_e_1.resumeScheduled = !1,
  param_e_1.awaitDrain = 0, param_t.emit("resume"), var_T(param_t), param_e_1.flowing &&
  !param_e_1.reading && param_t.read(0);
  }
  function var_T(param_t) {
  var var_e = param_t._readableState;
  for (var_h("flow", var_e.flowing);
  var_e.flowing && null !== param_t.read();
  );
  }
  function var_I(param_t, param_e_1) {
  return 0 === param_e_1.length ? null : (param_e_1.objectMode ?
  var_r = param_e_1.buffer.shift() : !param_t || param_t >= param_e_1.length ?
  (var_r = param_e_1.decoder ? param_e_1.buffer.join("") : 1 === param_e_1.buffer.length ?
  param_e_1.buffer.head.data : param_e_1.buffer.concat(param_e_1.length), param_e_1.buffer.clear(
  )) : var_r = function (param_t_1, param_e_2, param_r) {
  var var_n;
  param_t_1 < param_e_2.head.data.length ? (var_n = param_e_2.head.data.slice(0,
  param_t_1), param_e_2.head.data = param_e_2.head.data.slice(param_t_1)) :
  var_n = param_t_1 === param_e_2.head.data.length ? param_e_2.shift() :
  param_r ? function (param_t_2, param_e_3) {
  var var_r_1 = param_e_3.head,
  num_n = 1,
  var_i = var_r_1.data;
  param_t_2 -= var_i.length;
  for (;
  var_r_1 = var_r_1.next;
  ) {
  var var_o_1 = var_r_1.data,
  var_a = param_t_2 > var_o_1.length ? var_o_1.length : param_t_2;
  if (var_a === var_o_1.length ? var_i += var_o_1 : var_i += var_o_1.slice(0, param_t_2),
  0 === (param_t_2 -= var_a)) {
  var_a === var_o_1.length ? (++num_n, var_r_1.next ? param_e_3.head = var_r_1.next :
  param_e_3.head = param_e_3.tail = null) : (param_e_3.head = var_r_1, var_r_1.data = var_o_1.slice(
  var_a));
  break;
  }
  ++num_n;
  }
  return param_e_3.length -= num_n, var_i;
  }
  (param_t_1, param_e_2) : function (param_t_2, param_e_3) {
  var var_r_1 = var_c.allocUnsafe(param_t_2),
  var_n_1 = param_e_3.head,
  num_i = 1;
  var_n_1.data.copy(var_r_1), param_t_2 -= var_n_1.data.length;
  for (;
  var_n_1 = var_n_1.next;
  ) {
  var var_o_1 = var_n_1.data,
  var_a = param_t_2 > var_o_1.length ? var_o_1.length : param_t_2;
  if (var_o_1.copy(var_r_1, var_r_1.length - param_t_2, 0, var_a), 0 === (param_t_2 -= var_a)) {
  var_a === var_o_1.length ? (++num_i, var_n_1.next ? param_e_3.head = var_n_1.next :
  param_e_3.head = param_e_3.tail = null) : (param_e_3.head = var_n_1, var_n_1.data = var_o_1.slice(
  var_a));
  break;
  }
  ++num_i;
  }
  return param_e_3.length -= num_i, var_r_1;
  }
  (param_t_1, param_e_2);
  return var_n;
  }
  (param_t, param_e_1.buffer, param_e_1.decoder), var_r);
  var var_r;
  }
  function var_j(param_t) {
  var var_e = param_t._readableState;
  if (var_e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
  var_e.endEmitted || (var_e.ended = !0, dep_module_36.nextTick(var_C, var_e, param_t));
  }
  function var_C(param_t, param_e_1) {
  param_t.endEmitted || 0 !== param_t.length || (param_t.endEmitted = !0, param_e_1.readable = !1,
  param_e_1.emit("end"));
  }
  function var_B(param_t, param_e_1) {
  for (var num_r = 0, var_n = param_t.length;
  num_r < var_n;
  num_r++) if (param_t[num_r] === param_e_1) return num_r;
  return -1;
  }
  var_b.prototype.read = function (param_t) {
  var_h("read", param_t), param_t = parseInt(param_t, 10);
  var var_e = this._readableState,
  var_r = param_t;
  if (0 !== param_t && (var_e.emittedReadable = !1), 0 === param_t &&
  var_e.needReadable && (var_e.length >= var_e.highWaterMark ||
  var_e.ended)) return var_h("read: emitReadable", var_e.length, var_e.ended), 0 === var_e.length &&
  var_e.ended ? var_j(this) : var_E(this), null;
  if (0 === (param_t = var__(param_t, var_e)) && var_e.ended) return 0 === var_e.length &&
  var_j(this), null;
  var var_n,
  var_i = var_e.needReadable;
  return var_h("need readable", var_i), (0 === var_e.length ||
  var_e.length - param_t < var_e.highWaterMark) && var_h("length less than watermark",
  var_i = !0), var_e.ended || var_e.reading ? var_h("reading or ended", var_i = !1) :
  var_i && (var_h("do read"), var_e.reading = !0, var_e.sync = !0, 0 === var_e.length &&
  (var_e.needReadable = !0), this._read(var_e.highWaterMark), var_e.sync = !1, var_e.reading ||
  (param_t = var__(var_r, var_e))), null === (var_n = param_t > 0 ?
  var_I(param_t, var_e) : null) ? (var_e.needReadable = !0, param_t = 0) :
  var_e.length -= param_t, 0 === var_e.length && (var_e.ended ||
  (var_e.needReadable = !0), var_r !== param_t && var_e.ended &&
  var_j(this)), null !== var_n && this.emit("data", var_n), var_n;
  }
  , var_b.prototype._read = function (param_t) {
  this.emit("error", new Error("_read() is not implemented"));
  }
  , var_b.prototype.pipe = function (param_t, param_e_1) {
  var var_r = this,
  var_o_1 = this._readableState;
  switch (var_o_1.pipesCount) {
  case 0:
  var_o_1.pipes = param_t;
  break;
  case 1:
  var_o_1.pipes = [var_o_1.pipes, param_t];
  break;
  default:
  var_o_1.pipes.push(param_t);
  }
  var_o_1.pipesCount += 1, var_h("pipe count=%d opts=%j", var_o_1.pipesCount, param_e_1);
  var var_u = (!param_e_1 || !1 !== param_e_1.end) && param_t !== param_n.stdout &&
  param_t !== param_n.stderr ? var_l_1 : var_b_1;
  function var_c_1(param_e_2, param_n_1) {
  var_h("onunpipe"), param_e_2 === var_r && param_n_1 && !1 === param_n_1.hasUnpiped &&
  (param_n_1.hasUnpiped = !0, var_h("cleanup"), param_t.removeListener("close", var_y),
  param_t.removeListener("finish", var_g_1), param_t.removeListener("drain", var_f_1),
  param_t.removeListener("error", var_m), param_t.removeListener("unpipe", var_c_1),
  var_r.removeListener("end", var_l_1), var_r.removeListener("end", var_b_1), var_r.removeListener(
  "data", var_v), flag_d = !0, !var_o_1.awaitDrain || param_t._writableState &&
  !param_t._writableState.needDrain || var_f_1());
  }
  function var_l_1() {
  var_h("onend"), param_t.end();
  }
  var_o_1.endEmitted ? dep_module_36.nextTick(var_u) : var_r.once("end", var_u),
  param_t.on("unpipe", var_c_1);
  var var_f_1 = function (param_t_1) {
  return function () {
  var var_e = param_t_1._readableState;
  var_h("pipeOnDrain", var_e.awaitDrain), var_e.awaitDrain &&
  var_e.awaitDrain--, 0 === var_e.awaitDrain && fn_s(param_t_1, "data") &&
  (var_e.flowing = !0, var_T(param_t_1));
  };
  }
  (var_r);
  param_t.on("drain", var_f_1);
  var flag_d = !1;
  var flag_p = !1;
  function var_v(param_e_2) {
  var_h("ondata"), flag_p = !1, !1 !== param_t.write(param_e_2) ||
  flag_p || ((1 === var_o_1.pipesCount && var_o_1.pipes === param_t ||
  var_o_1.pipesCount > 1 && -1 !== var_B(var_o_1.pipes, param_t)) &&
  !flag_d && (var_h("false write response, pause", var_o_1.awaitDrain), var_o_1.awaitDrain++,
  flag_p = !0), var_r.pause());
  }
  function var_m(param_e_2) {
  var_h("onerror", param_e_2), var_b_1(), param_t.removeListener("error", var_m),
  0 === fn_s(param_t, "error") && param_t.emit("error", param_e_2);
  }
  function var_y() {
  param_t.removeListener("finish", var_g_1), var_b_1();
  }
  function var_g_1() {
  var_h("onfinish"), param_t.removeListener("close", var_y), var_b_1();
  }
  function var_b_1() {
  var_h("unpipe"), var_r.unpipe(param_t);
  }
  return var_r.on("data", var_v), function (param_t_1, param_e_2, param_r) {
  if ("function" == typeof param_t_1.prependListener) return param_t_1.prependListener(
  param_e_2, param_r);
  param_t_1._events && param_t_1._events[param_e_2] ? dep_helper_625(param_t_1._events[param_e_2]) ?
  param_t_1._events[param_e_2].unshift(param_r) : param_t_1._events[param_e_2] = [param_r,
  param_t_1._events[param_e_2]] : param_t_1.on(param_e_2, param_r);
  }
  (param_t, "error", var_m), param_t.once("close", var_y), param_t.once("finish",
  var_g_1), param_t.emit("pipe", var_r), var_o_1.flowing || (var_h("pipe resume"),
  var_r.resume()), param_t;
  }
  , var_b.prototype.unpipe = function (param_t) {
  var var_e = this._readableState,
  obj_r = {
  hasUnpiped: !1
  };
  if (0 === var_e.pipesCount) return this;
  if (1 === var_e.pipesCount) return param_t && param_t !== var_e.pipes ||
  (param_t || (param_t = var_e.pipes), var_e.pipes = null, var_e.pipesCount = 0,
  var_e.flowing = !1, param_t && param_t.emit("unpipe", this, obj_r)), this;
  if (!param_t) {
  var var_n = var_e.pipes,
  var_i = var_e.pipesCount;
  var_e.pipes = null, var_e.pipesCount = 0, var_e.flowing = !1;
  for (var num_o = 0;
  num_o < var_i;
  num_o++) var_n[num_o].emit("unpipe", this, {
  hasUnpiped: !1
  }
  );
  return this;
  }
  var var_a = var_B(var_e.pipes, param_t);
  return -1 === var_a || (var_e.pipes.splice(var_a, 1), var_e.pipesCount -= 1, 1 === var_e.pipesCount &&
  (var_e.pipes = var_e.pipes[0]), param_t.emit("unpipe", this, obj_r)), this;
  }
  , var_b.prototype.on = function (param_t, param_e_1) {
  var var_r = dep_helper_488.prototype.on.call(this, param_t, param_e_1);
  if ("data" === param_t) !1 !== this._readableState.flowing &&
  this.resume();
  else if ("readable" === param_t) {
  var var_n = this._readableState;
  var_n.endEmitted || var_n.readableListening || (var_n.readableListening = var_n.needReadable = !0,
  var_n.emittedReadable = !1, var_n.reading ? var_n.length &&
  var_E(this) : dep_module_36.nextTick(var_k, this));
  }
  return var_r;
  }
  , var_b.prototype.addListener = var_b.prototype.on, var_b.prototype.resume = function (
  ) {
  var var_t = this._readableState;
  return var_t.flowing || (var_h("resume"), var_t.flowing = !0, function (param_t,
  param_e_1) {
  param_e_1.resumeScheduled || (param_e_1.resumeScheduled = !0, dep_module_36.nextTick(
  var_M, param_t, param_e_1));
  }
  (this, var_t)), this;
  }
  , var_b.prototype.pause = function () {
  return var_h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing &&
  (var_h("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  }
  , var_b.prototype.wrap = function (param_t) {
  var var_e = this,
  var_r = this._readableState,
  flag_n = !1;
  for (var var_i in param_t.on("end", function () {
  if (var_h("wrapped end"), var_r.decoder && !var_r.ended) {
  var var_t = var_r.decoder.end();
  var_t && var_t.length && var_e.push(var_t);
  }
  var_e.push(null);
  }
  ), param_t.on("data", function (param_i) {
  (var_h("wrapped data"), var_r.decoder && (param_i = var_r.decoder.write(param_i)),
  var_r.objectMode && null == param_i) || (var_r.objectMode ||
  param_i && param_i.length) && (var_e.push(param_i) || (flag_n = !0, param_t.pause(
  )));
  }
  ), param_t) void 0 === this[var_i] && "function" == typeof param_t[var_i] &&
  (this[var_i] = function (param_e_1) {
  return function () {
  return param_t[param_e_1].apply(param_t, arguments);
  };
  }
  (var_i));
  for (var num_o = 0;
  num_o < list_y.length;
  num_o++) param_t.on(list_y[num_o], this.emit.bind(this, list_y[num_o]));
  return this._read = function (param_e_1) {
  var_h("wrapped _read", param_e_1), flag_n && (flag_n = !1, param_t.resume());
  }
  , this;
  }
  , Object.defineProperty(var_b.prototype, "readableHighWaterMark", {
  enumerable: !1,
  get: function () {
  return this._readableState.highWaterMark;
  }
  }
  ), var_b._fromList = var_I;
  }
  ).call(this, requireFn(13), requireFn(32));
  };
