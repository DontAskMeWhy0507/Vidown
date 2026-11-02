// Module 79 [events] - Stream / runtime utility component (event-emitter-3)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = Object.prototype.hasOwnProperty;
  var str_o = "~";
  function var_i() {
  }
  function var_a(param_e, param_t, param_r) {
  this.fn = param_e;
  this.context = param_t;
  this.once = param_r || false;
  }
  function var_s(param_e, param_t, param_r, param_n, param_i) {
  if (typeof param_r != "function") {
  throw new TypeError("The listener must be a function");
  }
  var var_s_1 = new var_a(param_r, param_n || param_e, param_i);
  var var_c_1 = str_o ? str_o + param_t : param_t;
  if (param_e._events[var_c_1]) {
  if (param_e._events[var_c_1].fn) {
  param_e._events[var_c_1] = [param_e._events[var_c_1], var_s_1];
  }
  else {
  param_e._events[var_c_1].push(var_s_1);
  }
  }
  else {
  param_e._events[var_c_1] = var_s_1;
  param_e._eventsCount++;
  }
  return param_e;
  }
  function var_c(param_e, param_t) {
  if (--param_e._eventsCount == 0) {
  param_e._events = new var_i();
  }
  else {
  delete param_e._events[param_t];
  }
  }
  function var_u() {
  this._events = new var_i();
  this._eventsCount = 0;
  }
  if (Object.create) {
  var_i.prototype = Object.create(null);
  if (!new var_i().__proto__) {
  str_o = false;
  }
  }
  var_u.prototype.eventNames = function () {
  var var_e;
  var var_t;
  var list_r = [];
  if (this._eventsCount === 0) {
  return list_r;
  }
  for (var_t in var_e = this._events) {
  if (var_n.call(var_e, var_t)) {
  list_r.push(str_o ? var_t.slice(1) : var_t);
  }
  }
  if (Object.getOwnPropertySymbols) {
  return list_r.concat(Object.getOwnPropertySymbols(var_e));
  }
  else {
  return list_r;
  }
  };
  var_u.prototype.listeners = function (param_e) {
  var var_t = str_o ? str_o + param_e : param_e;
  var var_r = this._events[var_t];
  if (!var_r) {
  return [];
  }
  if (var_r.fn) {
  return [var_r.fn];
  }
  for (var num_n = 0, var_i_1 = var_r.length, var_a_1 = new Array(var_i_1);
  num_n < var_i_1;
  num_n++) {
  var_a_1[num_n] = var_r[num_n].fn;
  }
  return var_a_1;
  };
  var_u.prototype.listenerCount = function (param_e) {
  var var_t = str_o ? str_o + param_e : param_e;
  var var_r = this._events[var_t];
  if (var_r) {
  if (var_r.fn) {
  return 1;
  }
  else {
  return var_r.length;
  }
  }
  else {
  return 0;
  }
  };
  var_u.prototype.emit = function (param_e, param_t, param_r, param_n, param_i, param_a) {
  var var_s_1 = str_o ? str_o + param_e : param_e;
  if (!this._events[var_s_1]) {
  return false;
  }
  var var_c_1;
  var var_u_1;
  var var_l = this._events[var_s_1];
  var var_d = arguments.length;
  if (var_l.fn) {
  if (var_l.once) {
  this.removeListener(param_e, var_l.fn, undefined, true);
  }
  switch (var_d) {
  case 1:
  var_l.fn.call(var_l.context);
  return true;
  case 2:
  var_l.fn.call(var_l.context, param_t);
  return true;
  case 3:
  var_l.fn.call(var_l.context, param_t, param_r);
  return true;
  case 4:
  var_l.fn.call(var_l.context, param_t, param_r, param_n);
  return true;
  case 5:
  var_l.fn.call(var_l.context, param_t, param_r, param_n, param_i);
  return true;
  case 6:
  var_l.fn.call(var_l.context, param_t, param_r, param_n, param_i, param_a);
  return true;
  }
  var_u_1 = 1;
  var_c_1 = new Array(var_d - 1);
  for (;
  var_u_1 < var_d;
  var_u_1++) {
  var_c_1[var_u_1 - 1] = arguments[var_u_1];
  }
  var_l.fn.apply(var_l.context, var_c_1);
  }
  else {
  var var_p;
  var var_f = var_l.length;
  for (var_u_1 = 0;
  var_u_1 < var_f;
  var_u_1++) {
  if (var_l[var_u_1].once) {
  this.removeListener(param_e, var_l[var_u_1].fn, undefined, true);
  }
  switch (var_d) {
  case 1:
  var_l[var_u_1].fn.call(var_l[var_u_1].context);
  break;
  case 2:
  var_l[var_u_1].fn.call(var_l[var_u_1].context, param_t);
  break;
  case 3:
  var_l[var_u_1].fn.call(var_l[var_u_1].context, param_t, param_r);
  break;
  case 4:
  var_l[var_u_1].fn.call(var_l[var_u_1].context, param_t, param_r, param_n);
  break;
  default:
  if (!var_c_1) {
  var_p = 1;
  var_c_1 = new Array(var_d - 1);
  for (;
  var_p < var_d;
  var_p++) {
  var_c_1[var_p - 1] = arguments[var_p];
  }
  }
  var_l[var_u_1].fn.apply(var_l[var_u_1].context, var_c_1);
  }
  }
  }
  return true;
  };
  var_u.prototype.on = function (param_e, param_t, param_r) {
  return var_s(this, param_e, param_t, param_r, false);
  };
  var_u.prototype.once = function (param_e, param_t, param_r) {
  return var_s(this, param_e, param_t, param_r, true);
  };
  var_u.prototype.removeListener = function (param_e, param_t, param_r, param_n) {
  var var_i_1 = str_o ? str_o + param_e : param_e;
  if (!this._events[var_i_1]) {
  return this;
  }
  if (!param_t) {
  var_c(this, var_i_1);
  return this;
  }
  var var_a_1 = this._events[var_i_1];
  if (var_a_1.fn) {
  if (var_a_1.fn === param_t && (!param_n || !!var_a_1.once) &&
  (!param_r || var_a_1.context === param_r)) {
  var_c(this, var_i_1);
  }
  }
  else {
  for (var num_s = 0, list_u = [], var_l = var_a_1.length;
  num_s < var_l;
  num_s++) {
  if (var_a_1[num_s].fn !== param_t || param_n && !var_a_1[num_s].once ||
  param_r && var_a_1[num_s].context !== param_r) {
  list_u.push(var_a_1[num_s]);
  }
  }
  if (list_u.length) {
  this._events[var_i_1] = list_u.length === 1 ? list_u[0] : list_u;
  }
  else {
  var_c(this, var_i_1);
  }
  }
  return this;
  };
  var_u.prototype.removeAllListeners = function (param_e) {
  var var_t;
  if (param_e) {
  var_t = str_o ? str_o + param_e : param_e;
  if (this._events[var_t]) {
  var_c(this, var_t);
  }
  }
  else {
  this._events = new var_i();
  this._eventsCount = 0;
  }
  return this;
  };
  var_u.prototype.off = var_u.prototype.removeListener;
  var_u.prototype.addListener = var_u.prototype.on;
  var_u.prefixed = str_o;
  var_u.EventEmitter = var_u;
  moduleObj.exports = var_u;
  };
