// Module 591 - Savior Helper 591
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(425).Buffer,
  dep_helper_592 = requireFn(592);
  moduleObj.exports = function () {
  function var_t() {
  !function (param_t, param_e) {
  if (!(param_t instanceof param_e)) throw new TypeError("Cannot call a class as a function");
  }
  (this, var_t), this.head = null, this.tail = null, this.length = 0;
  }
  return var_t.prototype.push = function (param_t) {
  var obj_e = {
  data: param_t,
  next: null
  };
  this.length > 0 ? this.tail.next = obj_e : this.head = obj_e, this.tail = obj_e,
  ++this.length;
  }
  , var_t.prototype.unshift = function (param_t) {
  var obj_e = {
  data: param_t,
  next: this.head
  };
  0 === this.length && (this.tail = obj_e), this.head = obj_e, ++this.length;
  }
  , var_t.prototype.shift = function () {
  if (0 !== this.length) {
  var var_t_1 = this.head.data;
  return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
  --this.length, var_t_1;
  }
  }
  , var_t.prototype.clear = function () {
  this.head = this.tail = null, this.length = 0;
  }
  , var_t.prototype.join = function (param_t) {
  if (0 === this.length) return "";
  for (var var_e = this.head, var_r = "" + var_e.data;
  var_e = var_e.next;
  ) var_r += param_t + var_e.data;
  return var_r;
  }
  , var_t.prototype.concat = function (param_t) {
  if (0 === this.length) return var_n.alloc(0);
  for (var var_e, var_r, var_i, var_o = var_n.allocUnsafe(param_t >>> 0), var_a = this.head,
  num_s = 0;
  var_a;
  ) var_e = var_a.data, var_r = var_o, var_i = num_s, var_e.copy(var_r, var_i), num_s += var_a.data.length,
  var_a = var_a.next;
  return var_o;
  }
  , var_t;
  }
  (), dep_helper_592 && dep_helper_592.inspect && dep_helper_592.inspect.custom &&
  (moduleObj.exports.prototype[dep_helper_592.inspect.custom] = function () {
  var var_t = dep_helper_592.inspect({
  length: this.length
  }
  );
  return this.constructor.name + " " + var_t;
  }
  );
  };
