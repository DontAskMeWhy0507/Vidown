// Module 469 - Savior Helper 469
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_helper_598 = requireFn(598),
  dep_helper_130 = requireFn(130),
  var_a = requireFn(25).Buffer,
  dep_helper_470 = requireFn(470),
  dep_helper_405 = requireFn(405),
  dep_helper_426 = requireFn(426),
  var_l = var_a.alloc(128);
  function var_f(param_t, param_e) {
  dep_helper_130.call(this, "digest"), "string" == typeof param_e &&
  (param_e = var_a.from(param_e));
  var var_r = "sha512" === param_t || "sha384" === param_t ?
  128 : 64;
  (this._alg = param_t, this._key = param_e, param_e.length > var_r) ?
  param_e = ("rmd160" === param_t ? new dep_helper_405() : dep_helper_426(param_t)).update(
  param_e).digest() : param_e.length < var_r && (param_e = var_a.concat([param_e,
  var_l], var_r));
  for (var var_n = this._ipad = var_a.allocUnsafe(var_r), var_i = this._opad = var_a.allocUnsafe(
  var_r), num_s = 0;
  num_s < var_r;
  num_s++) var_n[num_s] = 54 ^ param_e[num_s], var_i[num_s] = 92 ^ param_e[num_s];
  this._hash = "rmd160" === param_t ? new dep_helper_405() :
  dep_helper_426(param_t), this._hash.update(var_n);
  }
  dep_module_15(var_f, dep_helper_130), var_f.prototype._update = function (param_t) {
  this._hash.update(param_t);
  }
  , var_f.prototype._final = function () {
  var var_t = this._hash.digest();
  return ("rmd160" === this._alg ? new dep_helper_405() : dep_helper_426(this._alg)).update(
  this._opad).update(var_t).digest();
  }
  , moduleObj.exports = function (param_t, param_e) {
  return "rmd160" === (param_t = param_t.toLowerCase()) || "ripemd160" === param_t ?
  new var_f("rmd160", param_e) : "md5" === param_t ? new dep_helper_598(dep_helper_470,
  param_e) : new var_f(param_t, param_e);
  };
  };
