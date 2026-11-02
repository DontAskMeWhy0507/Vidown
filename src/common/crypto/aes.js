// Module 65 [crypto] - CryptoJS cryptographic component (aes)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.Iso10126 = {
  pad: function (param_e, param_t) {
  var var_n = param_t * 4;
  var var_o = var_n - param_e.sigBytes % var_n;
  param_e.concat(var_r.lib.WordArray.random(var_o - 1)).concat(var_r.lib.WordArray.create(
  [var_o << 24], 1));
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  };
  moduleObj.exports = var_r.pad.Iso10126;
  };
