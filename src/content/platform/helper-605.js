// Module 605 - Savior Helper 605
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_116 = requireFn(116),
  dep_module_15 = requireFn(15),
  dep_helper_427 = requireFn(427),
  dep_helper_478 = requireFn(478);
  function var_s(param_t, param_e) {
  dep_helper_116.equal(param_e.length, 24, "Invalid key length");
  var var_r = param_e.slice(0, 8),
  var_i = param_e.slice(8, 16),
  var_o = param_e.slice(16, 24);
  this.ciphers = "encrypt" === param_t ? [dep_helper_478.create({
  type: "encrypt",
  key: var_r
  }
  ), dep_helper_478.create({
  type: "decrypt",
  key: var_i
  }
  ), dep_helper_478.create({
  type: "encrypt",
  key: var_o
  }
  )] : [dep_helper_478.create({
  type: "decrypt",
  key: var_o
  }
  ), dep_helper_478.create({
  type: "encrypt",
  key: var_i
  }
  ), dep_helper_478.create({
  type: "decrypt",
  key: var_r
  }
  )];
  }
  function var_u(param_t) {
  dep_helper_427.call(this, param_t);
  var var_e = new var_s(this.type, this.options.key);
  this._edeState = var_e;
  }
  dep_module_15(var_u, dep_helper_427), moduleObj.exports = var_u, var_u.create = function (
  param_t) {
  return new var_u(param_t);
  }
  , var_u.prototype._update = function (param_t, param_e, param_r, param_n) {
  var var_i = this._edeState;
  var_i.ciphers[0]._update(param_t, param_e, param_r, param_n), var_i.ciphers[1]._update(
  param_r, param_n, param_r, param_n), var_i.ciphers[2]._update(param_r, param_n,
  param_r, param_n);
  }
  , var_u.prototype._pad = dep_helper_478.prototype._pad, var_u.prototype._unpad = dep_helper_478.prototype._unpad;
  };
