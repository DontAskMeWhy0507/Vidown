// Module 650 - Savior Helper 650
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_126 = requireFn(126),
  dep_helper_117 = requireFn(117),
  var_o = dep_helper_117.assert,
  var_a = dep_helper_117.cachedProperty,
  var_s = dep_helper_117.parseBytes;
  function var_u(param_t, param_e) {
  this.eddsa = param_t, "object" != typeof param_e && (param_e = var_s(param_e)),
  Array.isArray(param_e) && (var_o(param_e.length === 2 * param_t.encodingLength,
  "Signature has invalid size"), param_e = {
  R: param_e.slice(0, param_t.encodingLength),
  S: param_e.slice(param_t.encodingLength)
  }
  ), var_o(param_e.R && param_e.S, "Signature without R or S"), param_t.isPoint(
  param_e.R) && (this._R = param_e.R), param_e.S instanceof dep_module_126 &&
  (this._S = param_e.S), this._Rencoded = Array.isArray(param_e.R) ?
  param_e.R : param_e.Rencoded, this._Sencoded = Array.isArray(param_e.S) ?
  param_e.S : param_e.Sencoded;
  }
  var_a(var_u, "S", function () {
  return this.eddsa.decodeInt(this.Sencoded());
  }
  ), var_a(var_u, "R", function () {
  return this.eddsa.decodePoint(this.Rencoded());
  }
  ), var_a(var_u, "Rencoded", function () {
  return this.eddsa.encodePoint(this.R());
  }
  ), var_a(var_u, "Sencoded", function () {
  return this.eddsa.encodeInt(this.S());
  }
  ), var_u.prototype.toBytes = function () {
  return this.Rencoded().concat(this.Sencoded());
  }
  , var_u.prototype.toHex = function () {
  return dep_helper_117.encode(this.toBytes(), "hex").toUpperCase();
  }
  , moduleObj.exports = var_u;
  };
