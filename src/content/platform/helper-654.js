// Module 654 - Savior Helper 654
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_157 = requireFn(157),
  dep_module_15 = requireFn(15);
  function var_o(param_t, param_e) {
  this.name = param_t, this.body = param_e, this.decoders = {
  }
  , this.encoders = {
  };
  }
  exportsObj.define = function (param_t, param_e) {
  return new var_o(param_t, param_e);
  }
  , var_o.prototype._createNamed = function (param_t) {
  var var_e;
  try {
  var_e = requireFn(655).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})");
  }
  catch (var_t) {
  var_e = function (param_t_1) {
  this._initNamed(param_t_1);
  };
  }
  return dep_module_15(var_e, param_t), var_e.prototype._initNamed = function (param_e) {
  param_t.call(this, param_e);
  }
  , new var_e(this);
  }
  , var_o.prototype._getDecoder = function (param_t) {
  return param_t = param_t || "der", this.decoders.hasOwnProperty(param_t) ||
  (this.decoders[param_t] = this._createNamed(dep_helper_157.decoders[param_t])),
  this.decoders[param_t];
  }
  , var_o.prototype.decode = function (param_t, param_e, param_r) {
  return this._getDecoder(param_e).decode(param_t, param_r);
  }
  , var_o.prototype._getEncoder = function (param_t) {
  return param_t = param_t || "der", this.encoders.hasOwnProperty(param_t) ||
  (this.encoders[param_t] = this._createNamed(dep_helper_157.encoders[param_t])),
  this.encoders[param_t];
  }
  , var_o.prototype.encode = function (param_t, param_e, param_r) {
  return this._getEncoder(param_e).encode(param_t, param_r);
  };
  };
