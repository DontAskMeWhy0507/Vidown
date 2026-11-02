// Module 165 - Savior Helper 165
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_helper_574 = requireFn(574),
  dep_helper_575 = requireFn(575),
  var_a = ArrayBuffer.isView || function (param_t) {
  try {
  return dep_helper_575(param_t), !0;
  }
  catch (var_t) {
  return !1;
  }
  }
  ,
  var_s = "undefined" != typeof Uint8Array,
  var_u = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array,
  var_c = var_u && (var_n.prototype instanceof Uint8Array ||
  var_n.TYPED_ARRAY_SUPPORT);
  moduleObj.exports = function (param_t, param_e) {
  if (var_n.isBuffer(param_t)) return param_t.constructor &&
  !("isBuffer" in param_t) ? var_n.from(param_t) : param_t;
  if ("string" == typeof param_t) return var_n.from(param_t, param_e);
  if (var_u && var_a(param_t)) {
  if (0 === param_t.byteLength) return var_n.alloc(0);
  if (var_c) {
  var var_r = var_n.from(param_t.buffer, param_t.byteOffset, param_t.byteLength);
  if (var_r.byteLength === param_t.byteLength) return var_r;
  }
  var var_o = param_t instanceof Uint8Array ? param_t : new Uint8Array(param_t.buffer,
  param_t.byteOffset, param_t.byteLength),
  var_l = var_n.from(var_o);
  if (var_l.length === param_t.byteLength) return var_l;
  }
  if (var_s && param_t instanceof Uint8Array) return var_n.from(param_t);
  var var_f = dep_helper_574(param_t);
  if (var_f) for (var num_d = 0;
  num_d < param_t.length;
  num_d += 1) {
  var var_h = param_t[num_d];
  if ("number" != typeof var_h || var_h < 0 || var_h > 255 ||
  ~~var_h !== var_h) throw new RangeError("Array items must be numbers in the range 0-255.");
  }
  if (var_f || var_n.isBuffer(param_t) && param_t.constructor &&
  "function" == typeof param_t.constructor.isBuffer && param_t.constructor.isBuffer(
  param_t)) return var_n.from(param_t);
  throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
  };
  };
