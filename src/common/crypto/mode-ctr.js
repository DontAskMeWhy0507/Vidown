// Module 61 [crypto] - CryptoJS cryptographic component (mode-ctr)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  /** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
  var_r.mode.CTRGladman = function () {
  var var_e = var_r.lib.BlockCipherMode.extend();
  function var_t(param_e) {
  if ((param_e >> 24 & 255) == 255) {
  var var_t_1 = param_e >> 16 & 255;
  var var_n_1 = param_e >> 8 & 255;
  var var_r_1 = param_e & 255;
  if (var_t_1 === 255) {
  var_t_1 = 0;
  if (var_n_1 === 255) {
  var_n_1 = 0;
  if (var_r_1 === 255) {
  var_r_1 = 0;
  }
  else {
  ++var_r_1;
  }
  }
  else {
  ++var_n_1;
  }
  }
  else {
  ++var_t_1;
  }
  param_e = 0;
  param_e += var_t_1 << 16;
  param_e += var_n_1 << 8;
  param_e += var_r_1;
  }
  else {
  param_e += 16777216;
  }
  return param_e;
  }
  var var_n = var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o = var_r_1.blockSize;
  var var_i = this._iv;
  var var_a = this._counter;
  if (var_i) {
  var_a = this._counter = var_i.slice(0);
  this._iv = undefined;
  }
  (function (param_e_1) {
  if ((param_e_1[0] = var_t(param_e_1[0])) === 0) {
  param_e_1[1] = var_t(param_e_1[1]);
  }
  }
  )(var_a);
  var var_s = var_a.slice(0);
  var_r_1.encryptBlock(var_s, 0);
  for (var num_c = 0;
  num_c < var_o;
  num_c++) {
  param_e[param_n + num_c] ^= var_s[num_c];
  }
  }
  }
  );
  var_e.Decryptor = var_n;
  return var_e;
  }
  ();
  moduleObj.exports = var_r.mode.CTRGladman;
  };
