// Module 139 - Savior Helper 139
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e, param_n) {
  var var_i = requireFn(25).Buffer,
  var_o = param_e.crypto || param_e.msCrypto;
  var_o && var_o.getRandomValues ? moduleObj.exports = function (param_t, param_e_1) {
  if (param_t > 4294967295) throw new RangeError("requested too many random bytes");
  var var_r = var_i.allocUnsafe(param_t);
  if (param_t > 0) if (param_t > 65536) for (var num_a = 0;
  num_a < param_t;
  num_a += 65536) var_o.getRandomValues(var_r.slice(num_a, num_a + 65536));
  else var_o.getRandomValues(var_r);
  if ("function" == typeof param_e_1) return param_n.nextTick(function () {
  param_e_1(null, var_r);
  }
  );
  return var_r;
  }
  : moduleObj.exports = function () {
  throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
  };
  }
  ).call(this, requireFn(13), requireFn(32));
  };
