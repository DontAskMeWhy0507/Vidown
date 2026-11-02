// Module 65 [crypto] - CryptoJS cryptographic component (aes)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(8);
  var_n.pad.Iso10126 = {
  pad: function (param_e, param_t) {
  var var_r = param_t * 4;
  var var_o = var_r - param_e.sigBytes % var_r;
  param_e.concat(var_n.lib.WordArray.random(var_o - 1)).concat(var_n.lib.WordArray.create(
  [var_o << 24], 1));
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  };
  moduleObj.exports = var_n.pad.Iso10126;
  };
