// Module 63 [utilities] - CryptoJS cryptographic component (mode-cbc)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var var_o;
  var_o = requireFn(4);
  requireFn(8);
  var_o.mode.ECB = ((var_n = var_o.lib.BlockCipherMode.extend()).Encryptor = var_n.extend(
  {
  processBlock: function (param_e, param_t) {
  this._cipher.encryptBlock(param_e, param_t);
  }
  }
  ), var_n.Decryptor = var_n.extend({
  processBlock: function (param_e, param_t) {
  this._cipher.decryptBlock(param_e, param_t);
  }
  }
  ), var_n);
  moduleObj.exports = var_o.mode.ECB;
  };
