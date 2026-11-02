// Module 56 [utilities] - CryptoJS cryptographic component (sha256)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(26);
  (function (param_e) {
  var var_t = var_r;
  var var_n = var_t.lib;
  var var_o = var_n.WordArray;
  var var_i = var_n.Hasher;
  var var_a = var_t.x64.Word;
  var var_s = var_t.algo;
  var list_c = [];
  var list_l = [];
  var list_u = [];
  (function () {
  var num_e = 1;
  var num_t = 0;
  for (var num_n = 0;
  num_n < 24;
  num_n++) {
  list_c[num_e + num_t * 5] = (num_n + 1) * (num_n + 2) / 2 % 64;
  var var_r_1 = (num_e * 2 + num_t * 3) % 5;
  num_e = num_t % 5;
  num_t = var_r_1;
  }
  for (num_e = 0;
  num_e < 5;
  num_e++) {
  for (num_t = 0;
  num_t < 5;
  num_t++) {
  list_l[num_e + num_t * 5] = num_t + (num_e * 2 + num_t * 3) % 5 * 5;
  }
  }
  var num_o = 1;
  for (var num_i = 0;
  num_i < 24;
  num_i++) {
  var num_s = 0;
  var num_d = 0;
  for (var num_f = 0;
  num_f < 7;
  num_f++) {
  if (num_o & 1) {
  var var_p = (1 << num_f) - 1;
  if (var_p < 32) {
  num_d ^= 1 << var_p;
  }
  else {
  num_s ^= 1 << var_p - 32;
  }
  }
  if (num_o & 128) {
  num_o = num_o << 1 ^ 113;
  }
  else {
  num_o <<= 1;
  }
  }
  list_u[num_i] = var_a.create(num_s, num_d);
  }
  }
  )();
  var list_d = [];
  (function () {
  for (var num_e = 0;
  num_e < 25;
  num_e++) {
  list_d[num_e] = var_a.create();
  }
  }
  )();
  var var_f = var_s.SHA3 = var_i.extend({
  cfg: var_i.cfg.extend({
  outputLength: 512
  }
  ),
  _doReset: function () {
  var var_e = this._state = [];
  for (var num_t = 0;
  num_t < 25;
  num_t++) {
  var_e[num_t] = new var_a.init();
  }
  this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  var var_n_1 = this._state;
  for (var var_r_1 = this.blockSize / 2, num_o = 0;
  num_o < var_r_1;
  num_o++) {
  var var_i_1 = param_e_1[param_t + num_o * 2];
  var var_a_1 = param_e_1[param_t + num_o * 2 + 1];
  var_i_1 = (var_i_1 << 8 | var_i_1 >>> 24) & 16711935 | (var_i_1 << 24 | var_i_1 >>> 8) & -16711936;
  var_a_1 = (var_a_1 << 8 | var_a_1 >>> 24) & 16711935 | (var_a_1 << 24 | var_a_1 >>> 8) & -16711936;
  (var_C = var_n_1[num_o]).high ^= var_a_1;
  var_C.low ^= var_i_1;
  }
  for (var num_s = 0;
  num_s < 24;
  num_s++) {
  for (var num_f = 0;
  num_f < 5;
  num_f++) {
  var num_p = 0;
  var num_h = 0;
  for (var num_g = 0;
  num_g < 5;
  num_g++) {
  num_p ^= (var_C = var_n_1[num_f + num_g * 5]).high;
  num_h ^= var_C.low;
  }
  var var_m = list_d[num_f];
  var_m.high = num_p;
  var_m.low = num_h;
  }
  for (num_f = 0;
  num_f < 5;
  num_f++) {
  var var_v = list_d[(num_f + 4) % 5];
  var var_y = list_d[(num_f + 1) % 5];
  var var_k = var_y.high;
  var var_b = var_y.low;
  num_p = var_v.high ^ (var_k << 1 | var_b >>> 31);
  num_h = var_v.low ^ (var_b << 1 | var_k >>> 31);
  num_g = 0;
  for (;
  num_g < 5;
  num_g++) {
  (var_C = var_n_1[num_f + num_g * 5]).high ^= num_p;
  var_C.low ^= num_h;
  }
  }
  for (var num__ = 1;
  num__ < 25;
  num__++) {
  var var_T = (var_C = var_n_1[num__]).high;
  var var_S = var_C.low;
  var var_x = list_c[num__];
  if (var_x < 32) {
  num_p = var_T << var_x | var_S >>> 32 - var_x;
  num_h = var_S << var_x | var_T >>> 32 - var_x;
  }
  else {
  num_p = var_S << var_x - 32 | var_T >>> 64 - var_x;
  num_h = var_T << var_x - 32 | var_S >>> 64 - var_x;
  }
  var var_w = list_d[list_l[num__]];
  var_w.high = num_p;
  var_w.low = num_h;
  }
  var var_E = list_d[0];
  var var_A = var_n_1[0];
  var_E.high = var_A.high;
  var_E.low = var_A.low;
  num_f = 0;
  for (;
  num_f < 5;
  num_f++) {
  for (num_g = 0;
  num_g < 5;
  num_g++) {
  var var_C = var_n_1[num__ = num_f + num_g * 5];
  var var_O = list_d[num__];
  var var_I = list_d[(num_f + 1) % 5 + num_g * 5];
  var var_N = list_d[(num_f + 2) % 5 + num_g * 5];
  var_C.high = var_O.high ^ ~var_I.high & var_N.high;
  var_C.low = var_O.low ^ ~var_I.low & var_N.low;
  }
  }
  var_C = var_n_1[0];
  var var_D = list_u[num_s];
  var_C.high ^= var_D.high;
  var_C.low ^= var_D.low;
  }
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_n_1 = var_t_1.words;
  this._nDataBytes;
  var var_r_1 = var_t_1.sigBytes * 8;
  var var_i_1 = this.blockSize * 32;
  var_n_1[var_r_1 >>> 5] |= 1 << 24 - var_r_1 % 32;
  var_n_1[(param_e.ceil((var_r_1 + 1) / var_i_1) * var_i_1 >>> 5) - 1] |= 128;
  var_t_1.sigBytes = var_n_1.length * 4;
  this._process();
  var var_a_1 = this._state;
  var var_s_1 = this.cfg.outputLength / 8;
  for (var var_c = var_s_1 / 8, list_l_1 = [], num_u = 0;
  num_u < var_c;
  num_u++) {
  var var_d = var_a_1[num_u];
  var var_f_1 = var_d.high;
  var var_p = var_d.low;
  var_f_1 = (var_f_1 << 8 | var_f_1 >>> 24) & 16711935 | (var_f_1 << 24 | var_f_1 >>> 8) & -16711936;
  var_p = (var_p << 8 | var_p >>> 24) & 16711935 | (var_p << 24 | var_p >>> 8) & -16711936;
  list_l_1.push(var_p);
  list_l_1.push(var_f_1);
  }
  return new var_o.init(list_l_1, var_s_1);
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var var_t_1 = var_e._state = this._state.slice(0);
  for (var num_n = 0;
  num_n < 25;
  num_n++) {
  var_t_1[num_n] = var_t_1[num_n].clone();
  }
  return var_e;
  }
  }
  );
  var_t.SHA3 = var_i._createHelper(var_f);
  var_t.HmacSHA3 = var_i._createHmacHelper(var_f);
  }
  )(Math);
  moduleObj.exports = var_r.SHA3;
  };
