// Module 145 - Savior Helper 145
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_36 = requireFn(36),
  var_i = Object.keys || function (param_t) {
  var list_e = [];
  for (var var_r in param_t) list_e.push(var_r);
  return list_e;
  };
  moduleObj.exports = var_f;
  var var_o = Object.create(requireFn(29));
  var_o.inherits = requireFn(15);
  var dep_helper_487 = requireFn(487),
  dep_helper_490 = requireFn(490);
  var_o.inherits(var_f, dep_helper_487);
  for (var var_u = var_i(dep_helper_490.prototype), num_c = 0;
  num_c < var_u.length;
  num_c++) {
  var var_l = var_u[num_c];
  var_f.prototype[var_l] || (var_f.prototype[var_l] = dep_helper_490.prototype[var_l]);
  }
  function var_f(param_t) {
  if (!(this instanceof var_f)) return new var_f(param_t);
  dep_helper_487.call(this, param_t), dep_helper_490.call(this, param_t), param_t &&
  !1 === param_t.readable && (this.readable = !1), param_t &&
  !1 === param_t.writable && (this.writable = !1), this.allowHalfOpen = !0, param_t &&
  !1 === param_t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", var_d);
  }
  function var_d() {
  this.allowHalfOpen || this._writableState.ended || dep_module_36.nextTick(var_h,
  this);
  }
  function var_h(param_t) {
  param_t.end();
  }
  Object.defineProperty(var_f.prototype, "writableHighWaterMark", {
  enumerable: !1,
  get: function () {
  return this._writableState.highWaterMark;
  }
  }
  ), Object.defineProperty(var_f.prototype, "destroyed", {
  get: function () {
  return void 0 !== this._readableState && void 0 !== this._writableState &&
  this._readableState.destroyed && this._writableState.destroyed;
  }
  ,
  set: function (param_t) {
  void 0 !== this._readableState && void 0 !== this._writableState &&
  (this._readableState.destroyed = param_t, this._writableState.destroyed = param_t);
  }
  }
  ), var_f.prototype._destroy = function (param_t, param_e) {
  this.push(null), this.end(), dep_module_36.nextTick(param_e, param_t);
  };
  };
