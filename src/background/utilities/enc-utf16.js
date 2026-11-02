// Module 19 [utilities] - CryptoJS cryptographic component (enc-utf16)
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
  (function () {
  for (var num_t = 0;
  num_t < 64;
  num_t++) {
  list_s[num_t] = param_e.abs(param_e.sin(num_t + 1)) * 4294967296 | 0;
  }
  }
  )();
  var var_c = var_a.MD5 = var_i.extend({
  _doReset: function () {
  this._hash = new var_o.init([1732584193, 4023233417, 2562383102, 271733878]);
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  for (var num_r = 0;
  num_r < 16;
  num_r++) {
  var var_n_1 = param_t + num_r;
  var var_o_1 = param_e_1[var_n_1];
  param_e_1[var_n_1] = (var_o_1 << 8 | var_o_1 >>> 24) & 16711935 | (var_o_1 << 24 | var_o_1 >>> 8) & -16711936;
  }
  var var_i_1 = this._hash.words;
  var var_a_1 = param_e_1[param_t + 0];
  var var_c_1 = param_e_1[param_t + 1];
  var var_f = param_e_1[param_t + 2];
  var var_h = param_e_1[param_t + 3];
  var var_m = param_e_1[param_t + 4];
  var var_g = param_e_1[param_t + 5];
  var var_v = param_e_1[param_t + 6];
  var var_y = param_e_1[param_t + 7];
  var var__ = param_e_1[param_t + 8];
  var var_b = param_e_1[param_t + 9];
  var var_w = param_e_1[param_t + 10];
  var var_E = param_e_1[param_t + 11];
  var var_D = param_e_1[param_t + 12];
  var var_T = param_e_1[param_t + 13];
  var var_k = param_e_1[param_t + 14];
  var var_A = param_e_1[param_t + 15];
  var var_C = var_i_1[0];
  var var_x = var_i_1[1];
  var var_S = var_i_1[2];
  var var_O = var_i_1[3];
  var_C = var_u(var_C, var_x, var_S, var_O, var_a_1, 7, list_s[0]);
  var_O = var_u(var_O, var_C, var_x, var_S, var_c_1, 12, list_s[1]);
  var_S = var_u(var_S, var_O, var_C, var_x, var_f, 17, list_s[2]);
  var_x = var_u(var_x, var_S, var_O, var_C, var_h, 22, list_s[3]);
  var_C = var_u(var_C, var_x, var_S, var_O, var_m, 7, list_s[4]);
  var_O = var_u(var_O, var_C, var_x, var_S, var_g, 12, list_s[5]);
  var_S = var_u(var_S, var_O, var_C, var_x, var_v, 17, list_s[6]);
  var_x = var_u(var_x, var_S, var_O, var_C, var_y, 22, list_s[7]);
  var_C = var_u(var_C, var_x, var_S, var_O, var__, 7, list_s[8]);
  var_O = var_u(var_O, var_C, var_x, var_S, var_b, 12, list_s[9]);
  var_S = var_u(var_S, var_O, var_C, var_x, var_w, 17, list_s[10]);
  var_x = var_u(var_x, var_S, var_O, var_C, var_E, 22, list_s[11]);
  var_C = var_u(var_C, var_x, var_S, var_O, var_D, 7, list_s[12]);
  var_O = var_u(var_O, var_C, var_x, var_S, var_T, 12, list_s[13]);
  var_S = var_u(var_S, var_O, var_C, var_x, var_k, 17, list_s[14]);
  var_C = var_l(var_C, var_x = var_u(var_x, var_S, var_O, var_C, var_A, 22, list_s[15]),
  var_S, var_O, var_c_1, 5, list_s[16]);
  var_O = var_l(var_O, var_C, var_x, var_S, var_v, 9, list_s[17]);
  var_S = var_l(var_S, var_O, var_C, var_x, var_E, 14, list_s[18]);
  var_x = var_l(var_x, var_S, var_O, var_C, var_a_1, 20, list_s[19]);
  var_C = var_l(var_C, var_x, var_S, var_O, var_g, 5, list_s[20]);
  var_O = var_l(var_O, var_C, var_x, var_S, var_w, 9, list_s[21]);
  var_S = var_l(var_S, var_O, var_C, var_x, var_A, 14, list_s[22]);
  var_x = var_l(var_x, var_S, var_O, var_C, var_m, 20, list_s[23]);
  var_C = var_l(var_C, var_x, var_S, var_O, var_b, 5, list_s[24]);
  var_O = var_l(var_O, var_C, var_x, var_S, var_k, 9, list_s[25]);
  var_S = var_l(var_S, var_O, var_C, var_x, var_h, 14, list_s[26]);
  var_x = var_l(var_x, var_S, var_O, var_C, var__, 20, list_s[27]);
  var_C = var_l(var_C, var_x, var_S, var_O, var_T, 5, list_s[28]);
  var_O = var_l(var_O, var_C, var_x, var_S, var_f, 9, list_s[29]);
  var_S = var_l(var_S, var_O, var_C, var_x, var_y, 14, list_s[30]);
  var_C = var_d(var_C, var_x = var_l(var_x, var_S, var_O, var_C, var_D, 20, list_s[31]),
  var_S, var_O, var_g, 4, list_s[32]);
  var_O = var_d(var_O, var_C, var_x, var_S, var__, 11, list_s[33]);
  var_S = var_d(var_S, var_O, var_C, var_x, var_E, 16, list_s[34]);
  var_x = var_d(var_x, var_S, var_O, var_C, var_k, 23, list_s[35]);
  var_C = var_d(var_C, var_x, var_S, var_O, var_c_1, 4, list_s[36]);
  var_O = var_d(var_O, var_C, var_x, var_S, var_m, 11, list_s[37]);
  var_S = var_d(var_S, var_O, var_C, var_x, var_y, 16, list_s[38]);
  var_x = var_d(var_x, var_S, var_O, var_C, var_w, 23, list_s[39]);
  var_C = var_d(var_C, var_x, var_S, var_O, var_T, 4, list_s[40]);
  var_O = var_d(var_O, var_C, var_x, var_S, var_a_1, 11, list_s[41]);
  var_S = var_d(var_S, var_O, var_C, var_x, var_h, 16, list_s[42]);
  var_x = var_d(var_x, var_S, var_O, var_C, var_v, 23, list_s[43]);
  var_C = var_d(var_C, var_x, var_S, var_O, var_b, 4, list_s[44]);
  var_O = var_d(var_O, var_C, var_x, var_S, var_D, 11, list_s[45]);
  var_S = var_d(var_S, var_O, var_C, var_x, var_A, 16, list_s[46]);
  var_C = var_p(var_C, var_x = var_d(var_x, var_S, var_O, var_C, var_f, 23, list_s[47]),
  var_S, var_O, var_a_1, 6, list_s[48]);
  var_O = var_p(var_O, var_C, var_x, var_S, var_y, 10, list_s[49]);
  var_S = var_p(var_S, var_O, var_C, var_x, var_k, 15, list_s[50]);
  var_x = var_p(var_x, var_S, var_O, var_C, var_g, 21, list_s[51]);
  var_C = var_p(var_C, var_x, var_S, var_O, var_D, 6, list_s[52]);
  var_O = var_p(var_O, var_C, var_x, var_S, var_h, 10, list_s[53]);
  var_S = var_p(var_S, var_O, var_C, var_x, var_w, 15, list_s[54]);
  var_x = var_p(var_x, var_S, var_O, var_C, var_c_1, 21, list_s[55]);
  var_C = var_p(var_C, var_x, var_S, var_O, var__, 6, list_s[56]);
  var_O = var_p(var_O, var_C, var_x, var_S, var_A, 10, list_s[57]);
  var_S = var_p(var_S, var_O, var_C, var_x, var_v, 15, list_s[58]);
  var_x = var_p(var_x, var_S, var_O, var_C, var_T, 21, list_s[59]);
  var_C = var_p(var_C, var_x, var_S, var_O, var_m, 6, list_s[60]);
  var_O = var_p(var_O, var_C, var_x, var_S, var_E, 10, list_s[61]);
  var_S = var_p(var_S, var_O, var_C, var_x, var_f, 15, list_s[62]);
  var_x = var_p(var_x, var_S, var_O, var_C, var_b, 21, list_s[63]);
  var_i_1[0] = var_i_1[0] + var_C | 0;
  var_i_1[1] = var_i_1[1] + var_x | 0;
  var_i_1[2] = var_i_1[2] + var_S | 0;
  var_i_1[3] = var_i_1[3] + var_O | 0;
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_r_1 = var_t_1.words;
  var var_n_1 = this._nDataBytes * 8;
  var var_o_1 = var_t_1.sigBytes * 8;
  var_r_1[var_o_1 >>> 5] |= 128 << 24 - var_o_1 % 32;
  var var_i_1 = param_e.floor(var_n_1 / 4294967296);
  var var_a_1 = var_n_1;
  var_r_1[15 + (var_o_1 + 64 >>> 9 << 4)] = (var_i_1 << 8 | var_i_1 >>> 24) & 16711935 | (
  var_i_1 << 24 | var_i_1 >>> 8) & -16711936;
  var_r_1[14 + (var_o_1 + 64 >>> 9 << 4)] = (var_a_1 << 8 | var_a_1 >>> 24) & 16711935 | (
  var_a_1 << 24 | var_a_1 >>> 8) & -16711936;
  var_t_1.sigBytes = (var_r_1.length + 1) * 4;
  this._process();
  var var_s = this._hash;
  var var_c_1 = var_s.words;
  for (var num_u = 0;
  num_u < 4;
  num_u++) {
  var var_l_1 = var_c_1[num_u];
  var_c_1[num_u] = (var_l_1 << 8 | var_l_1 >>> 24) & 16711935 | (var_l_1 << 24 | var_l_1 >>> 8) & -16711936;
  }
  return var_s;
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  function var_u(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t & param_r | ~param_t & param_n) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_l(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t & param_n | param_r & ~param_n) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_d(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t ^ param_r ^ param_n) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_p(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_r ^ (param_t | ~param_n)) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  var_t.MD5 = var_i._createHelper(var_c);
  var_t.HmacMD5 = var_i._createHmacHelper(var_c);
  }
  )(Math);
  moduleObj.exports = var_n.MD5;
  };
