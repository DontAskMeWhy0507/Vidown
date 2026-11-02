// Module 598 - Savior Helper 598
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  var_i = requireFn(25).Buffer,
  dep_helper_130 = requireFn(130),
  var_a = var_i.alloc(128);
  function var_s(param_t, param_e) {
  dep_helper_130.call(this, "digest"), "string" == typeof param_e &&
  (param_e = var_i.from(param_e)), this._alg = param_t, this._key = param_e, param_e.length > 64 ?
  param_e = param_t(param_e) : param_e.length < 64 && (param_e = var_i.concat([param_e,
  var_a], 64));
  for (var var_r = this._ipad = var_i.allocUnsafe(64), var_n = this._opad = var_i.allocUnsafe(
  64), num_s = 0;
  num_s < 64;
  num_s++) var_r[num_s] = 54 ^ param_e[num_s], var_n[num_s] = 92 ^ param_e[num_s];
  this._hash = [var_r];
  }
  dep_module_15(var_s, dep_helper_130), var_s.prototype._update = function (param_t) {
  this._hash.push(param_t);
  }
  , var_s.prototype._final = function () {
  var var_t = this._alg(var_i.concat(this._hash));
  return this._alg(var_i.concat([this._opad, var_t]));
  }
  , moduleObj.exports = var_s;
  };
