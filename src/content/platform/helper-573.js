// Module 573 - Savior Helper 573
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_helper_165 = requireFn(165),
  var_o = "undefined" != typeof Uint8Array,
  var_a = var_o && "undefined" != typeof ArrayBuffer && ArrayBuffer.isView;
  moduleObj.exports = function (param_t, param_e) {
  if ("string" == typeof param_t || var_n.isBuffer(param_t) ||
  var_o && param_t instanceof Uint8Array || var_a && var_a(param_t)) return dep_helper_165(
  param_t, param_e);
  throw new TypeError('The "data" argument must be a string, a Buffer, a Uint8Array, or a DataView');
  };
  };
