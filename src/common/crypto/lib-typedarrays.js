// Module 51 [crypto] - CryptoJS cryptographic component (lib-typedarrays)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  (function () {
  if (typeof ArrayBuffer == "function") {
  var var_e = var_r.lib.WordArray;
  var var_t = var_e.init;
  (var_e.init = function (param_e) {
  if (param_e instanceof ArrayBuffer) {
  param_e = new Uint8Array(param_e);
  }
  if (param_e instanceof Int8Array || typeof Uint8ClampedArray != "undefined" &&
  param_e instanceof Uint8ClampedArray || param_e instanceof Int16Array ||
  param_e instanceof Uint16Array || param_e instanceof Int32Array ||
  param_e instanceof Uint32Array || param_e instanceof Float32Array ||
  param_e instanceof Float64Array) {
  param_e = new Uint8Array(param_e.buffer, param_e.byteOffset, param_e.byteLength);
  }
  if (param_e instanceof Uint8Array) {
  for (var var_n = param_e.byteLength, list_r = [], num_o = 0;
  num_o < var_n;
  num_o++) {
  list_r[num_o >>> 2] |= param_e[num_o] << 24 - num_o % 4 * 8;
  }
  var_t.call(this, list_r, var_n);
  }
  else {
  var_t.apply(this, arguments);
  }
  }
  ).prototype = var_e;
  }
  }
  )();
  moduleObj.exports = var_r.lib.WordArray;
  };
