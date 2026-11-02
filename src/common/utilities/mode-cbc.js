// Module 63 [utilities] - CryptoJS cryptographic component (mode-cbc)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var_o = requireFn(4);
  requireFn(8);
  var_o.mode.ECB = ((var_r = var_o.lib.BlockCipherMode.extend()).Encryptor = var_r.extend(
  {
  processBlock: function (param_e, param_t) {
  this._cipher.encryptBlock(param_e, param_t);
  }
  }
  ), var_r.Decryptor = var_r.extend({
  processBlock: function (param_e, param_t) {
  this._cipher.decryptBlock(param_e, param_t);
  }
  }
  ), var_r);
  moduleObj.exports = var_o.mode.ECB;
  };
