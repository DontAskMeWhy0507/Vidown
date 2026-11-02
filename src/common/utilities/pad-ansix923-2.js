// Module 64 [utilities] - CryptoJS cryptographic component (pad-ansix923-2)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.AnsiX923 = {
  pad: function (param_e, param_t) {
  var var_n = param_e.sigBytes;
  var var_r_1 = param_t * 4;
  var var_o = var_r_1 - var_n % var_r_1;
  var var_i = var_n + var_o - 1;
  param_e.clamp();
  param_e.words[var_i >>> 2] |= var_o << 24 - var_i % 4 * 8;
  param_e.sigBytes += var_o;
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  };
  moduleObj.exports = var_r.pad.Ansix923;
  };
