// Module 674 - Savior Helper 674
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_t, param_n) {
  function var_i() {
  throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
  }
  var dep_module_25 = requireFn(25),
  dep_helper_139 = requireFn(139),
  var_s = dep_module_25.Buffer,
  var_u = dep_module_25.kMaxLength,
  var_c = param_t.crypto || param_t.msCrypto,
  var_l = Math.pow(2, 32) - 1;
  function var_f(param_t_1, param_e) {
  if ("number" != typeof param_t_1 || param_t_1 != param_t_1) throw new TypeError(
  "offset must be a number");
  if (param_t_1 > var_l || param_t_1 < 0) throw new TypeError("offset must be a uint32");
  if (param_t_1 > var_u || param_t_1 > param_e) throw new RangeError("offset out of range");
  }
  function var_d(param_t_1, param_e, param_r) {
  if ("number" != typeof param_t_1 || param_t_1 != param_t_1) throw new TypeError(
  "size must be a number");
  if (param_t_1 > var_l || param_t_1 < 0) throw new TypeError("size must be a uint32");
  if (param_t_1 + param_e > param_r || param_t_1 > var_u) throw new RangeError("buffer too small");
  }
  function var_h(param_t_1, param_e, param_r, param_i) {
  if (param_n.browser) {
  var var_o = param_t_1.buffer,
  var_s_1 = new Uint8Array(var_o, param_e, param_r);
  return var_c.getRandomValues(var_s_1), param_i ? void param_n.nextTick(function (
  ) {
  param_i(null, param_t_1);
  }
  ) : param_t_1;
  }
  if (!param_i) return dep_helper_139(param_r).copy(param_t_1, param_e), param_t_1;
  dep_helper_139(param_r, function (param_r_1, param_n_1) {
  if (param_r_1) return param_i(param_r_1);
  param_n_1.copy(param_t_1, param_e), param_i(null, param_t_1);
  }
  );
  }
  var_c && var_c.getRandomValues || !param_n.browser ? (exportsObj.randomFill = function (
  param_e, param_r, param_n_1, param_i) {
  if (!(var_s.isBuffer(param_e) || param_e instanceof param_t.Uint8Array)) throw new TypeError(
  '"buf" argument must be a Buffer or Uint8Array');
  if ("function" == typeof param_r) param_i = param_r, param_r = 0, param_n_1 = param_e.length;
  else if ("function" == typeof param_n_1) param_i = param_n_1, param_n_1 = param_e.length - param_r;
  else if ("function" != typeof param_i) throw new TypeError('"cb" argument must be a function');
  return var_f(param_r, param_e.length), var_d(param_n_1, param_r, param_e.length),
  var_h(param_e, param_r, param_n_1, param_i);
  }
  , exportsObj.randomFillSync = function (param_e, param_r, param_n_1) {
  void 0 === param_r && (param_r = 0);
  if (!(var_s.isBuffer(param_e) || param_e instanceof param_t.Uint8Array)) throw new TypeError(
  '"buf" argument must be a Buffer or Uint8Array');
  var_f(param_r, param_e.length), void 0 === param_n_1 && (param_n_1 = param_e.length - param_r);
  return var_d(param_n_1, param_r, param_e.length), var_h(param_e, param_r, param_n_1);
  }
  ) : (exportsObj.randomFill = var_i, exportsObj.randomFillSync = var_i);
  }
  ).call(this, requireFn(13), requireFn(32));
  };
