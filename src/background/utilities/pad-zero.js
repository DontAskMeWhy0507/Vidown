// Module 67 [utilities] - CryptoJS cryptographic component (pad-zero)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(8);
  var_n.pad.ZeroPadding = {
  pad: function (param_e, param_t) {
  var var_r = param_t * 4;
  param_e.clamp();
  param_e.sigBytes += var_r - (param_e.sigBytes % var_r || var_r);
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words;
  var var_r = param_e.sigBytes - 1;
  for (var_r = param_e.sigBytes - 1;
  var_r >= 0;
  var_r--) {
  if (var_t[var_r >>> 2] >>> 24 - var_r % 4 * 8 & 255) {
  param_e.sigBytes = var_r + 1;
  break;
  }
  }
  }
  };
  moduleObj.exports = var_n.pad.ZeroPadding;
  };
