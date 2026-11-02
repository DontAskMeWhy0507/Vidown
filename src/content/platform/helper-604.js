// Module 604 - Savior Helper 604
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_116 = requireFn(116),
  dep_module_15 = requireFn(15),
  obj_o = {
  };
  function var_a(param_t) {
  dep_helper_116.equal(param_t.length, 8, "Invalid IV length"), this.iv = new Array(
  8);
  for (var num_e = 0;
  num_e < this.iv.length;
  num_e++) this.iv[num_e] = param_t[num_e];
  }
  exportsObj.instantiate = function (param_t) {
  function var_e(param_e) {
  param_t.call(this, param_e), this._cbcInit();
  }
  dep_module_15(var_e, param_t);
  for (var var_r = Object.keys(obj_o), num_n = 0;
  num_n < var_r.length;
  num_n++) {
  var var_a_1 = var_r[num_n];
  var_e.prototype[var_a_1] = obj_o[var_a_1];
  }
  return var_e.create = function (param_t_1) {
  return new var_e(param_t_1);
  }
  , var_e;
  }
  , obj_o._cbcInit = function () {
  var var_t = new var_a(this.options.iv);
  this._cbcState = var_t;
  }
  , obj_o._update = function (param_t, param_e, param_r, param_n) {
  var var_i = this._cbcState,
  var_o = this.constructor.super_.prototype,
  var_a_1 = var_i.iv;
  if ("encrypt" === this.type) {
  for (var num_s = 0;
  num_s < this.blockSize;
  num_s++) var_a_1[num_s] ^= param_t[param_e + num_s];
  var_o._update.call(this, var_a_1, 0, param_r, param_n);
  for (num_s = 0;
  num_s < this.blockSize;
  num_s++) var_a_1[num_s] = param_r[param_n + num_s];
  }
  else {
  var_o._update.call(this, param_t, param_e, param_r, param_n);
  for (num_s = 0;
  num_s < this.blockSize;
  num_s++) param_r[param_n + num_s] ^= var_a_1[num_s];
  for (num_s = 0;
  num_s < this.blockSize;
  num_s++) var_a_1[num_s] = param_t[param_e + num_s];
  }
  };
  };
