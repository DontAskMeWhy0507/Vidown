// Module 62 [utilities] - CryptoJS cryptographic component (mode-ecb)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  requireFn(8);
  var_i.mode.OFB = (var_n = var_i.lib.BlockCipherMode.extend(), var_o = var_n.Encryptor = var_n.extend(
  {
  processBlock: function (param_e, param_t) {
  var var_r = this._cipher;
  var var_n_1 = var_r.blockSize;
  var var_o_1 = this._iv;
  var var_i_1 = this._keystream;
  if (var_o_1) {
  var_i_1 = this._keystream = var_o_1.slice(0);
  this._iv = undefined;
  }
  var_r.encryptBlock(var_i_1, 0);
  for (var num_a = 0;
  num_a < var_n_1;
  num_a++) {
  param_e[param_t + num_a] ^= var_i_1[num_a];
  }
  }
  }
  ), var_n.Decryptor = var_o, var_n);
  moduleObj.exports = var_i.mode.OFB;
  };
