// Module 59 [utilities] - CryptoJS cryptographic component (mode-cfb-8bit)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.mode.CFB = function () {
  var var_e = var_r.lib.BlockCipherMode.extend();
  function var_t(param_e, param_t, param_n, param_r) {
  var var_o;
  var var_i = this._iv;
  if (var_i) {
  var_o = var_i.slice(0);
  this._iv = undefined;
  }
  else {
  var_o = this._prevBlock;
  }
  param_r.encryptBlock(var_o, 0);
  for (var num_a = 0;
  num_a < param_n;
  num_a++) {
  param_e[param_t + num_a] ^= var_o[num_a];
  }
  }
  var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o = var_r_1.blockSize;
  var_t.call(this, param_e, param_n, var_o, var_r_1);
  this._prevBlock = param_e.slice(param_n, param_n + var_o);
  }
  }
  );
  var_e.Decryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o = var_r_1.blockSize;
  var var_i = param_e.slice(param_n, param_n + var_o);
  var_t.call(this, param_e, param_n, var_o, var_r_1);
  this._prevBlock = var_i;
  }
  }
  );
  return var_e;
  }
  ();
  moduleObj.exports = var_r.mode.CFB;
  };
