// Module 62 [utilities] - CryptoJS cryptographic component (mode-ecb)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  requireFn(8);
  var_i.mode.OFB = (var_r = var_i.lib.BlockCipherMode.extend(), var_o = var_r.Encryptor = var_r.extend(
  {
  processBlock: function (param_e, param_t) {
  var var_n = this._cipher;
  var var_r_1 = var_n.blockSize;
  var var_o_1 = this._iv;
  var var_i_1 = this._keystream;
  if (var_o_1) {
  var_i_1 = this._keystream = var_o_1.slice(0);
  this._iv = undefined;
  }
  var_n.encryptBlock(var_i_1, 0);
  for (var num_a = 0;
  num_a < var_r_1;
  num_a++) {
  param_e[param_t + num_a] ^= var_i_1[num_a];
  }
  }
  }
  ), var_r.Decryptor = var_o, var_r);
  moduleObj.exports = var_i.mode.OFB;
  };
