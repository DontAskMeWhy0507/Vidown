// Module 623 - Savior Helper 623
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_helper_150 = requireFn(150),
  dep_helper_624 = requireFn(624),
  dep_module_15 = requireFn(15),
  dep_helper_630 = requireFn(630),
  dep_helper_666 = requireFn(666),
  dep_helper_471 = requireFn(471);
  function var_l(param_t) {
  dep_helper_624.Writable.call(this);
  var var_e = dep_helper_471[param_t];
  if (!var_e) throw new Error("Unknown message digest");
  this._hashType = var_e.hash, this._hash = dep_helper_150(var_e.hash), this._tag = var_e.id,
  this._signType = var_e.sign;
  }
  function var_f(param_t) {
  dep_helper_624.Writable.call(this);
  var var_e = dep_helper_471[param_t];
  if (!var_e) throw new Error("Unknown message digest");
  this._hash = dep_helper_150(var_e.hash), this._tag = var_e.id, this._signType = var_e.sign;
  }
  function var_d(param_t) {
  return new var_l(param_t);
  }
  function var_h(param_t) {
  return new var_f(param_t);
  }
  Object.keys(dep_helper_471).forEach(function (param_t) {
  dep_helper_471[param_t].id = var_n.from(dep_helper_471[param_t].id, "hex"), dep_helper_471[param_t.toLowerCase(
  )] = dep_helper_471[param_t];
  }
  ), dep_module_15(var_l, dep_helper_624.Writable), var_l.prototype._write = function (
  param_t, param_e, param_r) {
  this._hash.update(param_t), param_r();
  }
  , var_l.prototype.update = function (param_t, param_e) {
  return this._hash.update("string" == typeof param_t ? var_n.from(param_t, param_e) :
  param_t), this;
  }
  , var_l.prototype.sign = function (param_t, param_e) {
  this.end();
  var var_r = this._hash.digest(),
  var_n_1 = dep_helper_630(var_r, param_t, this._hashType, this._signType, this._tag);
  return param_e ? var_n_1.toString(param_e) : var_n_1;
  }
  , dep_module_15(var_f, dep_helper_624.Writable), var_f.prototype._write = function (
  param_t, param_e, param_r) {
  this._hash.update(param_t), param_r();
  }
  , var_f.prototype.update = function (param_t, param_e) {
  return this._hash.update("string" == typeof param_t ? var_n.from(param_t, param_e) :
  param_t), this;
  }
  , var_f.prototype.verify = function (param_t, param_e, param_r) {
  var var_i = "string" == typeof param_e ? var_n.from(param_e, param_r) :
  param_e;
  this.end();
  var var_o = this._hash.digest();
  return dep_helper_666(var_i, var_o, param_t, this._signType, this._tag);
  }
  , moduleObj.exports = {
  Sign: var_d,
  Verify: var_h,
  createSign: var_d,
  createVerify: var_h
  };
  };
