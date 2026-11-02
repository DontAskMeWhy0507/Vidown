// Module 130 - Savior Helper 130
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  var_i = requireFn(83).Transform,
  var_o = requireFn(46).StringDecoder,
  dep_module_15 = requireFn(15),
  dep_helper_165 = requireFn(165);
  function var_u(param_t) {
  var_i.call(this), this.hashMode = "string" == typeof param_t, this.hashMode ?
  this[param_t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final &&
  (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
  }
  dep_module_15(var_u, var_i), var_u.prototype.update = function (param_t, param_e,
  param_r) {
  var var_n_1 = dep_helper_165(param_t, param_e),
  var_i_1 = this._update(var_n_1);
  return this.hashMode ? this : (param_r && (var_i_1 = this._toString(var_i_1, param_r)),
  var_i_1);
  }
  , var_u.prototype.setAutoPadding = function () {
  }
  , var_u.prototype.getAuthTag = function () {
  throw new Error("trying to get auth tag in unsupported state");
  }
  , var_u.prototype.setAuthTag = function () {
  throw new Error("trying to set auth tag in unsupported state");
  }
  , var_u.prototype.setAAD = function () {
  throw new Error("trying to set aad in unsupported state");
  }
  , var_u.prototype._transform = function (param_t, param_e, param_r) {
  var var_n_1;
  try {
  this.hashMode ? this._update(param_t) : this.push(this._update(param_t));
  }
  catch (var_t) {
  var_n_1 = var_t;
  }
  finally {
  param_r(var_n_1);
  }
  }
  , var_u.prototype._flush = function (param_t) {
  var var_e;
  try {
  this.push(this.__final());
  }
  catch (var_t) {
  var_e = var_t;
  }
  param_t(var_e);
  }
  , var_u.prototype._finalOrDigest = function (param_t) {
  var var_e = this.__final() || var_n.alloc(0);
  return param_t && (var_e = this._toString(var_e, param_t, !0)), var_e;
  }
  , var_u.prototype._toString = function (param_t, param_e, param_r) {
  if (this._decoder || (this._decoder = new var_o(param_e), this._encoding = param_e),
  this._encoding !== param_e) throw new Error("can’t switch encodings");
  var var_n_1 = this._decoder.write(param_t);
  return param_r && (var_n_1 += this._decoder.end()), var_n_1;
  }
  , moduleObj.exports = var_u;
  };
