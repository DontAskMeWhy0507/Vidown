// Module 34 [utilities] - CryptoJS cryptographic component (cipher-core)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  (function (param_e) {
  var var_t = var_n;
  var var_r = var_t.lib;
  var var_o = var_r.WordArray;
  var var_i = var_r.Hasher;
  var var_a = var_t.algo;
  var list_s = [];
  var list_c = [];
  (function () {
  function var_t_1(param_t) {
  for (var var_r_2 = param_e.sqrt(param_t), num_n_1 = 2;
  num_n_1 <= var_r_2;
  num_n_1++) {
  if (!(param_t % num_n_1)) {
  return false;
  }
  }
  return true;
  }
  function var_r_1(param_e_1) {
  return (param_e_1 - (param_e_1 | 0)) * 4294967296 | 0;
  }
  var num_n = 2;
  for (var num_o = 0;
  num_o < 64;
  ) {
  if (var_t_1(num_n)) {
  if (num_o < 8) {
  list_s[num_o] = var_r_1(param_e.pow(num_n, 0.5));
  }
  list_c[num_o] = var_r_1(param_e.pow(num_n, 1 / 3));
  num_o++;
  }
  num_n++;
  }
  }
  )();
  var list_u = [];
  var var_l = var_a.SHA256 = var_i.extend({
  _doReset: function () {
  this._hash = new var_o.init(list_s.slice(0));
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  var var_r_1 = this._hash.words;
  var var_n_1 = var_r_1[0];
  var var_o_1 = var_r_1[1];
  var var_i_1 = var_r_1[2];
  var var_a_1 = var_r_1[3];
  var var_s = var_r_1[4];
  var var_l_1 = var_r_1[5];
  var var_d = var_r_1[6];
  var var_p = var_r_1[7];
  for (var num_f = 0;
  num_f < 64;
  num_f++) {
  if (num_f < 16) {
  list_u[num_f] = param_e_1[param_t + num_f] | 0;
  }
  else {
  var var_h = list_u[num_f - 15];
  var var_m = (var_h << 25 | var_h >>> 7) ^ (var_h << 14 | var_h >>> 18) ^ var_h >>> 3;
  var var_g = list_u[num_f - 2];
  var var_v = (var_g << 15 | var_g >>> 17) ^ (var_g << 13 | var_g >>> 19) ^ var_g >>> 10;
  list_u[num_f] = var_m + list_u[num_f - 7] + var_v + list_u[num_f - 16];
  }
  var var_y = var_n_1 & var_o_1 ^ var_n_1 & var_i_1 ^ var_o_1 & var_i_1;
  var var__ = (var_n_1 << 30 | var_n_1 >>> 2) ^ (var_n_1 << 19 | var_n_1 >>> 13) ^ (
  var_n_1 << 10 | var_n_1 >>> 22);
  var var_b = var_p + ((var_s << 26 | var_s >>> 6) ^ (var_s << 21 | var_s >>> 11) ^ (
  var_s << 7 | var_s >>> 25)) + (var_s & var_l_1 ^ ~var_s & var_d) + list_c[num_f] + list_u[num_f];
  var_p = var_d;
  var_d = var_l_1;
  var_l_1 = var_s;
  var_s = var_a_1 + var_b | 0;
  var_a_1 = var_i_1;
  var_i_1 = var_o_1;
  var_o_1 = var_n_1;
  var_n_1 = var_b + (var__ + var_y) | 0;
  }
  var_r_1[0] = var_r_1[0] + var_n_1 | 0;
  var_r_1[1] = var_r_1[1] + var_o_1 | 0;
  var_r_1[2] = var_r_1[2] + var_i_1 | 0;
  var_r_1[3] = var_r_1[3] + var_a_1 | 0;
  var_r_1[4] = var_r_1[4] + var_s | 0;
  var_r_1[5] = var_r_1[5] + var_l_1 | 0;
  var_r_1[6] = var_r_1[6] + var_d | 0;
  var_r_1[7] = var_r_1[7] + var_p | 0;
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_r_1 = var_t_1.words;
  var var_n_1 = this._nDataBytes * 8;
  var var_o_1 = var_t_1.sigBytes * 8;
  var_r_1[var_o_1 >>> 5] |= 128 << 24 - var_o_1 % 32;
  var_r_1[14 + (var_o_1 + 64 >>> 9 << 4)] = param_e.floor(var_n_1 / 4294967296);
  var_r_1[15 + (var_o_1 + 64 >>> 9 << 4)] = var_n_1;
  var_t_1.sigBytes = var_r_1.length * 4;
  this._process();
  return this._hash;
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  var_t.SHA256 = var_i._createHelper(var_l);
  var_t.HmacSHA256 = var_i._createHmacHelper(var_l);
  }
  )(Math);
  moduleObj.exports = var_n.SHA256;
  };
