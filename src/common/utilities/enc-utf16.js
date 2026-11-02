// Module 19 [utilities] - CryptoJS cryptographic component (enc-utf16)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  (function (param_e) {
  var var_t = var_r;
  var var_n = var_t.lib;
  var var_o = var_n.WordArray;
  var var_i = var_n.Hasher;
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
  for (var num_n = 0;
  num_n < 16;
  num_n++) {
  var var_r_1 = param_t + num_n;
  var var_o_1 = param_e_1[var_r_1];
  param_e_1[var_r_1] = (var_o_1 << 8 | var_o_1 >>> 24) & 16711935 | (var_o_1 << 24 | var_o_1 >>> 8) & -16711936;
  }
  var var_i_1 = this._hash.words;
  var var_a_1 = param_e_1[param_t + 0];
  var var_c_1 = param_e_1[param_t + 1];
  var var_p = param_e_1[param_t + 2];
  var var_h = param_e_1[param_t + 3];
  var var_g = param_e_1[param_t + 4];
  var var_m = param_e_1[param_t + 5];
  var var_v = param_e_1[param_t + 6];
  var var_y = param_e_1[param_t + 7];
  var var_k = param_e_1[param_t + 8];
  var var_b = param_e_1[param_t + 9];
  var var__ = param_e_1[param_t + 10];
  var var_T = param_e_1[param_t + 11];
  var var_S = param_e_1[param_t + 12];
  var var_x = param_e_1[param_t + 13];
  var var_w = param_e_1[param_t + 14];
  var var_E = param_e_1[param_t + 15];
  var var_A = var_i_1[0];
  var var_C = var_i_1[1];
  var var_O = var_i_1[2];
  var var_I = var_i_1[3];
  var_A = var_l(var_A, var_C, var_O, var_I, var_a_1, 7, list_s[0]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_c_1, 12, list_s[1]);
  var_O = var_l(var_O, var_I, var_A, var_C, var_p, 17, list_s[2]);
  var_C = var_l(var_C, var_O, var_I, var_A, var_h, 22, list_s[3]);
  var_A = var_l(var_A, var_C, var_O, var_I, var_g, 7, list_s[4]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_m, 12, list_s[5]);
  var_O = var_l(var_O, var_I, var_A, var_C, var_v, 17, list_s[6]);
  var_C = var_l(var_C, var_O, var_I, var_A, var_y, 22, list_s[7]);
  var_A = var_l(var_A, var_C, var_O, var_I, var_k, 7, list_s[8]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_b, 12, list_s[9]);
  var_O = var_l(var_O, var_I, var_A, var_C, var__, 17, list_s[10]);
  var_C = var_l(var_C, var_O, var_I, var_A, var_T, 22, list_s[11]);
  var_A = var_l(var_A, var_C, var_O, var_I, var_S, 7, list_s[12]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_x, 12, list_s[13]);
  var_O = var_l(var_O, var_I, var_A, var_C, var_w, 17, list_s[14]);
  var_A = var_u(var_A, var_C = var_l(var_C, var_O, var_I, var_A, var_E, 22, list_s[15]),
  var_O, var_I, var_c_1, 5, list_s[16]);
  var_I = var_u(var_I, var_A, var_C, var_O, var_v, 9, list_s[17]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_T, 14, list_s[18]);
  var_C = var_u(var_C, var_O, var_I, var_A, var_a_1, 20, list_s[19]);
  var_A = var_u(var_A, var_C, var_O, var_I, var_m, 5, list_s[20]);
  var_I = var_u(var_I, var_A, var_C, var_O, var__, 9, list_s[21]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_E, 14, list_s[22]);
  var_C = var_u(var_C, var_O, var_I, var_A, var_g, 20, list_s[23]);
  var_A = var_u(var_A, var_C, var_O, var_I, var_b, 5, list_s[24]);
  var_I = var_u(var_I, var_A, var_C, var_O, var_w, 9, list_s[25]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_h, 14, list_s[26]);
  var_C = var_u(var_C, var_O, var_I, var_A, var_k, 20, list_s[27]);
  var_A = var_u(var_A, var_C, var_O, var_I, var_x, 5, list_s[28]);
  var_I = var_u(var_I, var_A, var_C, var_O, var_p, 9, list_s[29]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_y, 14, list_s[30]);
  var_A = var_d(var_A, var_C = var_u(var_C, var_O, var_I, var_A, var_S, 20, list_s[31]),
  var_O, var_I, var_m, 4, list_s[32]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_k, 11, list_s[33]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_T, 16, list_s[34]);
  var_C = var_d(var_C, var_O, var_I, var_A, var_w, 23, list_s[35]);
  var_A = var_d(var_A, var_C, var_O, var_I, var_c_1, 4, list_s[36]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_g, 11, list_s[37]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_y, 16, list_s[38]);
  var_C = var_d(var_C, var_O, var_I, var_A, var__, 23, list_s[39]);
  var_A = var_d(var_A, var_C, var_O, var_I, var_x, 4, list_s[40]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_a_1, 11, list_s[41]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_h, 16, list_s[42]);
  var_C = var_d(var_C, var_O, var_I, var_A, var_v, 23, list_s[43]);
  var_A = var_d(var_A, var_C, var_O, var_I, var_b, 4, list_s[44]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_S, 11, list_s[45]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_E, 16, list_s[46]);
  var_A = var_f(var_A, var_C = var_d(var_C, var_O, var_I, var_A, var_p, 23, list_s[47]),
  var_O, var_I, var_a_1, 6, list_s[48]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_y, 10, list_s[49]);
  var_O = var_f(var_O, var_I, var_A, var_C, var_w, 15, list_s[50]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_m, 21, list_s[51]);
  var_A = var_f(var_A, var_C, var_O, var_I, var_S, 6, list_s[52]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_h, 10, list_s[53]);
  var_O = var_f(var_O, var_I, var_A, var_C, var__, 15, list_s[54]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_c_1, 21, list_s[55]);
  var_A = var_f(var_A, var_C, var_O, var_I, var_k, 6, list_s[56]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_E, 10, list_s[57]);
  var_O = var_f(var_O, var_I, var_A, var_C, var_v, 15, list_s[58]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_x, 21, list_s[59]);
  var_A = var_f(var_A, var_C, var_O, var_I, var_g, 6, list_s[60]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_T, 10, list_s[61]);
  var_O = var_f(var_O, var_I, var_A, var_C, var_p, 15, list_s[62]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_b, 21, list_s[63]);
  var_i_1[0] = var_i_1[0] + var_A | 0;
  var_i_1[1] = var_i_1[1] + var_C | 0;
  var_i_1[2] = var_i_1[2] + var_O | 0;
  var_i_1[3] = var_i_1[3] + var_I | 0;
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_n_1 = var_t_1.words;
  var var_r_1 = this._nDataBytes * 8;
  var var_o_1 = var_t_1.sigBytes * 8;
  var_n_1[var_o_1 >>> 5] |= 128 << 24 - var_o_1 % 32;
  var var_i_1 = param_e.floor(var_r_1 / 4294967296);
  var var_a_1 = var_r_1;
  var_n_1[15 + (var_o_1 + 64 >>> 9 << 4)] = (var_i_1 << 8 | var_i_1 >>> 24) & 16711935 | (
  var_i_1 << 24 | var_i_1 >>> 8) & -16711936;
  var_n_1[14 + (var_o_1 + 64 >>> 9 << 4)] = (var_a_1 << 8 | var_a_1 >>> 24) & 16711935 | (
  var_a_1 << 24 | var_a_1 >>> 8) & -16711936;
  var_t_1.sigBytes = (var_n_1.length + 1) * 4;
  this._process();
  var var_s = this._hash;
  var var_c_1 = var_s.words;
  for (var num_l = 0;
  num_l < 4;
  num_l++) {
  var var_u_1 = var_c_1[num_l];
  var_c_1[num_l] = (var_u_1 << 8 | var_u_1 >>> 24) & 16711935 | (var_u_1 << 24 | var_u_1 >>> 8) & -16711936;
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
  function var_l(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t & param_n | ~param_t & param_r) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_u(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t & param_r | param_n & ~param_r) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_d(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t ^ param_n ^ param_r) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_f(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_n ^ (param_t | ~param_r)) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  var_t.MD5 = var_i._createHelper(var_c);
  var_t.HmacMD5 = var_i._createHmacHelper(var_c);
  }
  )(Math);
  moduleObj.exports = var_r.MD5;
  };
