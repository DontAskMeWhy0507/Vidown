// Module 711 [utilities] - Stream flow and highwatermark controller
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(439).Buffer;
  var dep_stream_drain_listener = requireFn(712);
  moduleObj.exports = function () {
  function var_e() {
  (function (param_e, param_t) {
  if (!(param_e instanceof param_t)) {
  throw new TypeError("Cannot call a class as a function");
  }
  }
  )(this, var_e);
  this.head = null;
  this.tail = null;
  this.length = 0;
  }
  var_e.prototype.push = function (param_e) {
  var obj_t = {
  data: param_e,
  next: null
  };
  if (this.length > 0) {
  this.tail.next = obj_t;
  }
  else {
  this.head = obj_t;
  }
  this.tail = obj_t;
  ++this.length;
  };
  var_e.prototype.unshift = function (param_e) {
  var obj_t = {
  data: param_e,
  next: this.head
  };
  if (this.length === 0) {
  this.tail = obj_t;
  }
  this.head = obj_t;
  ++this.length;
  };
  var_e.prototype.shift = function () {
  if (this.length !== 0) {
  var var_e_1 = this.head.data;
  if (this.length === 1) {
  this.head = this.tail = null;
  }
  else {
  this.head = this.head.next;
  }
  --this.length;
  return var_e_1;
  }
  };
  var_e.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
  };
  var_e.prototype.join = function (param_e) {
  if (this.length === 0) {
  return "";
  }
  for (var var_t = this.head, var_r = "" + var_t.data;
  var_t = var_t.next;
  ) {
  var_r += param_e + var_t.data;
  }
  return var_r;
  };
  var_e.prototype.concat = function (param_e) {
  if (this.length === 0) {
  return var_n.alloc(0);
  }
  var var_t;
  var var_r;
  var var_o;
  var var_i = var_n.allocUnsafe(param_e >>> 0);
  for (var var_a = this.head, num_s = 0;
  var_a;
  ) {
  var_t = var_a.data;
  var_r = var_i;
  var_o = num_s;
  var_t.copy(var_r, var_o);
  num_s += var_a.data.length;
  var_a = var_a.next;
  }
  return var_i;
  };
  return var_e;
  }
  ();
  if (dep_stream_drain_listener && dep_stream_drain_listener.inspect &&
  dep_stream_drain_listener.inspect.custom) {
  moduleObj.exports.prototype[dep_stream_drain_listener.inspect.custom] = function (
  ) {
  var var_e = dep_stream_drain_listener.inspect({
  length: this.length
  }
  );
  return this.constructor.name + " " + var_e;
  };
  }
  };
