// Module 42 [events] - Stream / runtime utility component (event-emitter)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  var var_o = typeof Reflect == "object" ? Reflect : null;
  var var_i = var_o && typeof var_o.apply == "function" ? var_o.apply :
  function (param_e, param_t, param_r) {
  return Function.prototype.apply.call(param_e, param_t, param_r);
  };
  var_n = var_o && typeof var_o.ownKeys == "function" ? var_o.ownKeys :
  Object.getOwnPropertySymbols ? function (param_e) {
  return Object.getOwnPropertyNames(param_e).concat(Object.getOwnPropertySymbols(
  param_e));
  }
  : function (param_e) {
  return Object.getOwnPropertyNames(param_e);
  };
  var var_a = Number.isNaN || function (param_e) {
  return param_e != param_e;
  };
  function var_s() {
  var_s.init.call(this);
  }
  moduleObj.exports = var_s;
  moduleObj.exports.once = function (param_e, param_t) {
  return new Promise(function (param_r, param_n) {
  function var_o_1(param_r_1) {
  param_e.removeListener(param_t, var_i_1);
  param_n(param_r_1);
  }
  function var_i_1() {
  if (typeof param_e.removeListener == "function") {
  param_e.removeListener("error", var_o_1);
  }
  param_r([].slice.call(arguments));
  }
  var_v(param_e, param_t, var_i_1, {
  once: true
  }
  );
  if (param_t !== "error") {
  (function (param_e_1, param_t_1, param_r_1) {
  if (typeof param_e_1.on == "function") {
  var_v(param_e_1, "error", param_t_1, param_r_1);
  }
  }
  )(param_e, var_o_1, {
  once: true
  }
  );
  }
  }
  );
  };
  var_s.EventEmitter = var_s;
  var_s.prototype._events = undefined;
  var_s.prototype._eventsCount = 0;
  var_s.prototype._maxListeners = undefined;
  var num_c = 10;
  function var_u(param_e) {
  if (typeof param_e != "function") {
  throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof param_e);
  }
  }
  function var_l(param_e) {
  if (param_e._maxListeners === undefined) {
  return var_s.defaultMaxListeners;
  }
  else {
  return param_e._maxListeners;
  }
  }
  function var_d(param_e, param_t, param_r, param_n) {
  var var_o_1;
  var var_i_1;
  var var_a_1;
  var var_s_1;
  var_u(param_r);
  if ((var_i_1 = param_e._events) === undefined) {
  var_i_1 = param_e._events = Object.create(null);
  param_e._eventsCount = 0;
  }
  else {
  if (var_i_1.newListener !== undefined) {
  param_e.emit("newListener", param_t, param_r.listener ? param_r.listener :
  param_r);
  var_i_1 = param_e._events;
  }
  var_a_1 = var_i_1[param_t];
  }
  if (var_a_1 === undefined) {
  var_a_1 = var_i_1[param_t] = param_r;
  ++param_e._eventsCount;
  }
  else {
  if (typeof var_a_1 == "function") {
  var_a_1 = var_i_1[param_t] = param_n ? [param_r, var_a_1] :
  [var_a_1, param_r];
  }
  else if (param_n) {
  var_a_1.unshift(param_r);
  }
  else {
  var_a_1.push(param_r);
  }
  if ((var_o_1 = var_l(param_e)) > 0 && var_a_1.length > var_o_1 &&
  !var_a_1.warned) {
  var_a_1.warned = true;
  var var_c = new Error("Possible EventEmitter memory leak detected. " + var_a_1.length + " " + String(
  param_t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
  var_c.name = "MaxListenersExceededWarning";
  var_c.emitter = param_e;
  var_c.type = param_t;
  var_c.count = var_a_1.length;
  var_s_1 = var_c;
  if (console && console.warn) {
  console.warn(var_s_1);
  }
  }
  }
  return param_e;
  }
  function var_p() {
  if (!this.fired) {
  this.target.removeListener(this.type, this.wrapFn);
  this.fired = true;
  if (arguments.length === 0) {
  return this.listener.call(this.target);
  }
  else {
  return this.listener.apply(this.target, arguments);
  }
  }
  }
  function var_f(param_e, param_t, param_r) {
  var obj_n = {
  fired: false,
  wrapFn: undefined,
  target: param_e,
  type: param_t,
  listener: param_r
  };
  var var_o_1 = var_p.bind(obj_n);
  var_o_1.listener = param_r;
  obj_n.wrapFn = var_o_1;
  return var_o_1;
  }
  function var_h(param_e, param_t, param_r) {
  var var_n_1 = param_e._events;
  if (var_n_1 === undefined) {
  return [];
  }
  var var_o_1 = var_n_1[param_t];
  if (var_o_1 === undefined) {
  return [];
  }
  else if (typeof var_o_1 == "function") {
  if (param_r) {
  return [var_o_1.listener || var_o_1];
  }
  else {
  return [var_o_1];
  }
  }
  else if (param_r) {
  return function (param_e_1) {
  for (var var_t = new Array(param_e_1.length), num_r = 0;
  num_r < var_t.length;
  ++num_r) {
  var_t[num_r] = param_e_1[num_r].listener || param_e_1[num_r];
  }
  return var_t;
  }
  (var_o_1);
  }
  else {
  return var_g(var_o_1, var_o_1.length);
  }
  }
  function var_m(param_e) {
  var var_t = this._events;
  if (var_t !== undefined) {
  var var_r = var_t[param_e];
  if (typeof var_r == "function") {
  return 1;
  }
  if (var_r !== undefined) {
  return var_r.length;
  }
  }
  return 0;
  }
  function var_g(param_e, param_t) {
  var var_r = new Array(param_t);
  for (var num_n = 0;
  num_n < param_t;
  ++num_n) {
  var_r[num_n] = param_e[num_n];
  }
  return var_r;
  }
  function var_v(param_e, param_t, param_r, param_n) {
  if (typeof param_e.on == "function") {
  if (param_n.once) {
  param_e.once(param_t, param_r);
  }
  else {
  param_e.on(param_t, param_r);
  }
  }
  else {
  if (typeof param_e.addEventListener != "function") {
  throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof param_e);
  }
  param_e.addEventListener(param_t, function var_o_1(param_i) {
  if (param_n.once) {
  param_e.removeEventListener(param_t, var_o_1);
  }
  param_r(param_i);
  }
  );
  }
  }
  Object.defineProperty(var_s, "defaultMaxListeners", {
  enumerable: true,
  get: function () {
  return num_c;
  }
  ,
  set: function (param_e) {
  if (typeof param_e != "number" || param_e < 0 || var_a(param_e)) {
  throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + param_e + ".");
  }
  num_c = param_e;
  }
  }
  );
  var_s.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
  this._events = Object.create(null);
  this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
  };
  var_s.prototype.setMaxListeners = function (param_e) {
  if (typeof param_e != "number" || param_e < 0 || var_a(param_e)) {
  throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + param_e + ".");
  }
  this._maxListeners = param_e;
  return this;
  };
  var_s.prototype.getMaxListeners = function () {
  return var_l(this);
  };
  var_s.prototype.emit = function (param_e) {
  var list_t = [];
  for (var num_r = 1;
  num_r < arguments.length;
  num_r++) {
  list_t.push(arguments[num_r]);
  }
  var var_n_1 = param_e === "error";
  var var_o_1 = this._events;
  if (var_o_1 !== undefined) {
  var_n_1 = var_n_1 && var_o_1.error === undefined;
  }
  else if (!var_n_1) {
  return false;
  }
  if (var_n_1) {
  var var_a_1;
  if (list_t.length > 0) {
  var_a_1 = list_t[0];
  }
  if (var_a_1 instanceof Error) {
  throw var_a_1;
  }
  var var_s_1 = new Error("Unhandled error." + (var_a_1 ? " (" + var_a_1.message + ")" :
  ""));
  var_s_1.context = var_a_1;
  throw var_s_1;
  }
  var var_c = var_o_1[param_e];
  if (var_c === undefined) {
  return false;
  }
  if (typeof var_c == "function") {
  var_i(var_c, this, list_t);
  }
  else {
  var var_u_1 = var_c.length;
  var var_l_1 = var_g(var_c, var_u_1);
  for (num_r = 0;
  num_r < var_u_1;
  ++num_r) {
  var_i(var_l_1[num_r], this, list_t);
  }
  }
  return true;
  };
  var_s.prototype.addListener = function (param_e, param_t) {
  return var_d(this, param_e, param_t, false);
  };
  var_s.prototype.on = var_s.prototype.addListener;
  var_s.prototype.prependListener = function (param_e, param_t) {
  return var_d(this, param_e, param_t, true);
  };
  var_s.prototype.once = function (param_e, param_t) {
  var_u(param_t);
  this.on(param_e, var_f(this, param_e, param_t));
  return this;
  };
  var_s.prototype.prependOnceListener = function (param_e, param_t) {
  var_u(param_t);
  this.prependListener(param_e, var_f(this, param_e, param_t));
  return this;
  };
  var_s.prototype.removeListener = function (param_e, param_t) {
  var var_r;
  var var_n_1;
  var var_o_1;
  var var_i_1;
  var var_a_1;
  var_u(param_t);
  if ((var_n_1 = this._events) === undefined) {
  return this;
  }
  if ((var_r = var_n_1[param_e]) === undefined) {
  return this;
  }
  if (var_r === param_t || var_r.listener === param_t) {
  if (--this._eventsCount == 0) {
  this._events = Object.create(null);
  }
  else {
  delete var_n_1[param_e];
  if (var_n_1.removeListener) {
  this.emit("removeListener", param_e, var_r.listener || param_t);
  }
  }
  }
  else if (typeof var_r != "function") {
  var_o_1 = -1;
  var_i_1 = var_r.length - 1;
  for (;
  var_i_1 >= 0;
  var_i_1--) {
  if (var_r[var_i_1] === param_t || var_r[var_i_1].listener === param_t) {
  var_a_1 = var_r[var_i_1].listener;
  var_o_1 = var_i_1;
  break;
  }
  }
  if (var_o_1 < 0) {
  return this;
  }
  if (var_o_1 === 0) {
  var_r.shift();
  }
  else {
  (function (param_e_1, param_t_1) {
  for (;
  param_t_1 + 1 < param_e_1.length;
  param_t_1++) {
  param_e_1[param_t_1] = param_e_1[param_t_1 + 1];
  }
  param_e_1.pop();
  }
  )(var_r, var_o_1);
  }
  if (var_r.length === 1) {
  var_n_1[param_e] = var_r[0];
  }
  if (var_n_1.removeListener !== undefined) {
  this.emit("removeListener", param_e, var_a_1 || param_t);
  }
  }
  return this;
  };
  var_s.prototype.off = var_s.prototype.removeListener;
  var_s.prototype.removeAllListeners = function (param_e) {
  var var_t;
  var var_r;
  var var_n_1;
  if ((var_r = this._events) === undefined) {
  return this;
  }
  if (var_r.removeListener === undefined) {
  if (arguments.length === 0) {
  this._events = Object.create(null);
  this._eventsCount = 0;
  }
  else if (var_r[param_e] !== undefined) {
  if (--this._eventsCount == 0) {
  this._events = Object.create(null);
  }
  else {
  delete var_r[param_e];
  }
  }
  return this;
  }
  if (arguments.length === 0) {
  var var_o_1;
  var var_i_1 = Object.keys(var_r);
  for (var_n_1 = 0;
  var_n_1 < var_i_1.length;
  ++var_n_1) {
  if ((var_o_1 = var_i_1[var_n_1]) !== "removeListener") {
  this.removeAllListeners(var_o_1);
  }
  }
  this.removeAllListeners("removeListener");
  this._events = Object.create(null);
  this._eventsCount = 0;
  return this;
  }
  if (typeof (var_t = var_r[param_e]) == "function") {
  this.removeListener(param_e, var_t);
  }
  else if (var_t !== undefined) {
  for (var_n_1 = var_t.length - 1;
  var_n_1 >= 0;
  var_n_1--) {
  this.removeListener(param_e, var_t[var_n_1]);
  }
  }
  return this;
  };
  var_s.prototype.listeners = function (param_e) {
  return var_h(this, param_e, true);
  };
  var_s.prototype.rawListeners = function (param_e) {
  return var_h(this, param_e, false);
  };
  var_s.listenerCount = function (param_e, param_t) {
  if (typeof param_e.listenerCount == "function") {
  return param_e.listenerCount(param_t);
  }
  else {
  return var_m.call(param_e, param_t);
  }
  };
  var_s.prototype.listenerCount = var_m;
  var_s.prototype.eventNames = function () {
  if (this._eventsCount > 0) {
  return var_n(this._events);
  }
  else {
  return [];
  }
  };
  };
