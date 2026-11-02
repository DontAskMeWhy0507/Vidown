// Module 70 [crypto] - CryptoJS cryptographic component (pbkdf2)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(18);
  requireFn(19);
  requireFn(17);
  requireFn(8);
  (function () {
  var var_e = var_r;
  var var_t = var_e.lib.BlockCipher;
  var var_n = var_e.algo;
  var list_o = [];
  var list_i = [];
  var list_a = [];
  var list_s = [];
  var list_c = [];
  var list_l = [];
  var list_u = [];
  var list_d = [];
  var list_f = [];
  var list_p = [];
  (function () {
  var list_e = [];
  for (var num_t = 0;
  num_t < 256;
  num_t++) {
  list_e[num_t] = num_t < 128 ? num_t << 1 : num_t << 1 ^ 283;
  }
  var num_n = 0;
  var num_r = 0;
  for (num_t = 0;
  num_t < 256;
  num_t++) {
  var var_h = num_r ^ num_r << 1 ^ num_r << 2 ^ num_r << 3 ^ num_r << 4;
  var_h = var_h >>> 8 ^ var_h & 255 ^ 99;
  list_o[num_n] = var_h;
  list_i[var_h] = num_n;
  var var_g_1 = list_e[num_n];
  var var_m = list_e[var_g_1];
  var var_v = list_e[var_m];
  var var_y = list_e[var_h] * 257 ^ var_h * 16843008;
  list_a[num_n] = var_y << 24 | var_y >>> 8;
  list_s[num_n] = var_y << 16 | var_y >>> 16;
  list_c[num_n] = var_y << 8 | var_y >>> 24;
  list_l[num_n] = var_y;
  var_y = var_v * 16843009 ^ var_m * 65537 ^ var_g_1 * 257 ^ num_n * 16843008;
  list_u[var_h] = var_y << 24 | var_y >>> 8;
  list_d[var_h] = var_y << 16 | var_y >>> 16;
  list_f[var_h] = var_y << 8 | var_y >>> 24;
  list_p[var_h] = var_y;
  if (num_n) {
  num_n = var_g_1 ^ list_e[list_e[list_e[var_v ^ var_g_1]]];
  num_r ^= list_e[list_e[num_r]];
  }
  else {
  num_n = num_r = 1;
  }
  }
  }
  )();
  var list_h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var var_g = var_n.AES = var_t.extend({
  _doReset: function () {
  if (!this._nRounds || this._keyPriorReset !== this._key) {
  var var_e_1 = this._keyPriorReset = this._key;
  var var_t_1 = var_e_1.words;
  var var_n_1 = var_e_1.sigBytes / 4;
  for (var var_r_1 = ((this._nRounds = var_n_1 + 6) + 1) * 4, var_i = this._keySchedule = [],
  num_a = 0;
  num_a < var_r_1;
  num_a++) {
  if (num_a < var_n_1) {
  var_i[num_a] = var_t_1[num_a];
  }
  else {
  var_l = var_i[num_a - 1];
  if (num_a % var_n_1) {
  if (var_n_1 > 6 && num_a % var_n_1 == 4) {
  var_l = list_o[var_l >>> 24] << 24 | list_o[var_l >>> 16 & 255] << 16 | list_o[var_l >>> 8 & 255] << 8 | list_o[var_l & 255];
  }
  }
  else {
  var_l = list_o[(var_l = var_l << 8 | var_l >>> 24) >>> 24] << 24 | list_o[var_l >>> 16 & 255] << 16 | list_o[var_l >>> 8 & 255] << 8 | list_o[var_l & 255];
  var_l ^= list_h[num_a / var_n_1 | 0] << 24;
  }
  var_i[num_a] = var_i[num_a - var_n_1] ^ var_l;
  }
  }
  var var_s = this._invKeySchedule = [];
  for (var num_c = 0;
  num_c < var_r_1;
  num_c++) {
  num_a = var_r_1 - num_c;
  if (num_c % 4) {
  var var_l = var_i[num_a];
  }
  else {
  var_l = var_i[num_a - 4];
  }
  var_s[num_c] = num_c < 4 || num_a <= 4 ? var_l : list_u[list_o[var_l >>> 24]] ^ list_d[list_o[var_l >>> 16 & 255]] ^ list_f[list_o[var_l >>> 8 & 255]] ^ list_p[list_o[var_l & 255]];
  }
  }
  }
  ,
  encryptBlock: function (param_e, param_t) {
  this._doCryptBlock(param_e, param_t, this._keySchedule, list_a, list_s, list_c,
  list_l, list_o);
  }
  ,
  decryptBlock: function (param_e, param_t) {
  var var_n_1 = param_e[param_t + 1];
  param_e[param_t + 1] = param_e[param_t + 3];
  param_e[param_t + 3] = var_n_1;
  this._doCryptBlock(param_e, param_t, this._invKeySchedule, list_u, list_d, list_f,
  list_p, list_i);
  var_n_1 = param_e[param_t + 1];
  param_e[param_t + 1] = param_e[param_t + 3];
  param_e[param_t + 3] = var_n_1;
  }
  ,
  _doCryptBlock: function (param_e, param_t, param_n, param_r, param_o, param_i,
  param_a, param_s) {
  for (var var_c = this._nRounds, var_l = param_e[param_t] ^ param_n[0], var_u = param_e[param_t + 1] ^ param_n[1],
  var_d = param_e[param_t + 2] ^ param_n[2], var_f = param_e[param_t + 3] ^ param_n[3],
  num_p = 4, num_h = 1;
  num_h < var_c;
  num_h++) {
  var var_g_1 = param_r[var_l >>> 24] ^ param_o[var_u >>> 16 & 255] ^ param_i[var_d >>> 8 & 255] ^ param_a[var_f & 255] ^ param_n[num_p++];
  var var_m = param_r[var_u >>> 24] ^ param_o[var_d >>> 16 & 255] ^ param_i[var_f >>> 8 & 255] ^ param_a[var_l & 255] ^ param_n[num_p++];
  var var_v = param_r[var_d >>> 24] ^ param_o[var_f >>> 16 & 255] ^ param_i[var_l >>> 8 & 255] ^ param_a[var_u & 255] ^ param_n[num_p++];
  var var_y = param_r[var_f >>> 24] ^ param_o[var_l >>> 16 & 255] ^ param_i[var_u >>> 8 & 255] ^ param_a[var_d & 255] ^ param_n[num_p++];
  var_l = var_g_1;
  var_u = var_m;
  var_d = var_v;
  var_f = var_y;
  }
  var_g_1 = (param_s[var_l >>> 24] << 24 | param_s[var_u >>> 16 & 255] << 16 | param_s[var_d >>> 8 & 255] << 8 | param_s[var_f & 255]) ^ param_n[num_p++];
  var_m = (param_s[var_u >>> 24] << 24 | param_s[var_d >>> 16 & 255] << 16 | param_s[var_f >>> 8 & 255] << 8 | param_s[var_l & 255]) ^ param_n[num_p++];
  var_v = (param_s[var_d >>> 24] << 24 | param_s[var_f >>> 16 & 255] << 16 | param_s[var_l >>> 8 & 255] << 8 | param_s[var_u & 255]) ^ param_n[num_p++];
  var_y = (param_s[var_f >>> 24] << 24 | param_s[var_l >>> 16 & 255] << 16 | param_s[var_u >>> 8 & 255] << 8 | param_s[var_d & 255]) ^ param_n[num_p++];
  param_e[param_t] = var_g_1;
  param_e[param_t + 1] = var_m;
  param_e[param_t + 2] = var_v;
  param_e[param_t + 3] = var_y;
  }
  ,
  keySize: 8
  }
  );
  var_e.AES = var_t._createHelper(var_g);
  }
  )();
  moduleObj.exports = var_r.AES;
  };
