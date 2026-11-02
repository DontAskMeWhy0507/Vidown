// Module 59 [utilities] - CryptoJS cryptographic component (mode-cfb-8bit)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(8);
  var_n.mode.CFB = function () {
  var var_e = var_n.lib.BlockCipherMode.extend();
  function var_t(param_e, param_t, param_r, param_n) {
  var var_o;
  var var_i = this._iv;
  if (var_i) {
  var_o = var_i.slice(0);
  this._iv = undefined;
  }
  else {
  var_o = this._prevBlock;
  }
  param_n.encryptBlock(var_o, 0);
  for (var num_a = 0;
  num_a < param_r;
  num_a++) {
  param_e[param_t + num_a] ^= var_o[num_a];
  }
  }
  var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_r) {
  var var_n_1 = this._cipher;
  var var_o = var_n_1.blockSize;
  var_t.call(this, param_e, param_r, var_o, var_n_1);
  this._prevBlock = param_e.slice(param_r, param_r + var_o);
  }
  }
  );
  var_e.Decryptor = var_e.extend({
  processBlock: function (param_e, param_r) {
  var var_n_1 = this._cipher;
  var var_o = var_n_1.blockSize;
  var var_i = param_e.slice(param_r, param_r + var_o);
  var_t.call(this, param_e, param_r, var_o, var_n_1);
  this._prevBlock = var_i;
  }
  }
  );
  return var_e;
  }
  ();
  moduleObj.exports = var_n.mode.CFB;
  };
