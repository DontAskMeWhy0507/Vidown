// Module 64 [utilities] - CryptoJS cryptographic component (pad-ansix923-2)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(8);
  var_n.pad.AnsiX923 = {
  pad: function (param_e, param_t) {
  var var_r = param_e.sigBytes;
  var var_n_1 = param_t * 4;
  var var_o = var_n_1 - var_r % var_n_1;
  var var_i = var_r + var_o - 1;
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
  moduleObj.exports = var_n.pad.Ansix923;
  };
