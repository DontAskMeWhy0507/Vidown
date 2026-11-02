// Module 67 [utilities] - CryptoJS cryptographic component (pad-zero)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.ZeroPadding = {
  pad: function (param_e, param_t) {
  var var_n = param_t * 4;
  param_e.clamp();
  param_e.sigBytes += var_n - (param_e.sigBytes % var_n || var_n);
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words;
  var var_n = param_e.sigBytes - 1;
  for (var_n = param_e.sigBytes - 1;
  var_n >= 0;
  var_n--) {
  if (var_t[var_n >>> 2] >>> 24 - var_n % 4 * 8 & 255) {
  param_e.sigBytes = var_n + 1;
  break;
  }
  }
  }
  };
  moduleObj.exports = var_r.pad.ZeroPadding;
  };
