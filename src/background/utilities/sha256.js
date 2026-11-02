// Module 56 [utilities] - CryptoJS cryptographic component (sha256)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(26);
  (function (param_e) {
  var var_t = var_n;
  var var_r = var_t.lib;
  var var_o = var_r.WordArray;
  var var_i = var_r.Hasher;
  var var_a = var_t.x64.Word;
  var var_s = var_t.algo;
  var list_c = [];
  var list_u = [];
  var list_l = [];
  (function () {
  var num_e = 1;
  var num_t = 0;
  for (var num_r = 0;
  num_r < 24;
  num_r++) {
  list_c[num_e + num_t * 5] = (num_r + 1) * (num_r + 2) / 2 % 64;
  var var_n_1 = (num_e * 2 + num_t * 3) % 5;
  num_e = num_t % 5;
  num_t = var_n_1;
  }
  for (num_e = 0;
  num_e < 5;
  num_e++) {
  for (num_t = 0;
  num_t < 5;
  num_t++) {
  list_u[num_e + num_t * 5] = num_t + (num_e * 2 + num_t * 3) % 5 * 5;
  }
  }
  var num_o = 1;
  for (var num_i = 0;
  num_i < 24;
  num_i++) {
  var num_s = 0;
  var num_d = 0;
  for (var num_p = 0;
  num_p < 7;
  num_p++) {
  if (num_o & 1) {
  var var_f = (1 << num_p) - 1;
  if (var_f < 32) {
  num_d ^= 1 << var_f;
  }
  else {
  num_s ^= 1 << var_f - 32;
  }
  }
  if (num_o & 128) {
  num_o = num_o << 1 ^ 113;
  }
  else {
  num_o <<= 1;
  }
  }
  list_l[num_i] = var_a.create(num_s, num_d);
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
  var var_p = var_s.SHA3 = var_i.extend({
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
  var var_r_1 = this._state;
  for (var var_n_1 = this.blockSize / 2, num_o = 0;
  num_o < var_n_1;
  num_o++) {
  var var_i_1 = param_e_1[param_t + num_o * 2];
  var var_a_1 = param_e_1[param_t + num_o * 2 + 1];
  var_i_1 = (var_i_1 << 8 | var_i_1 >>> 24) & 16711935 | (var_i_1 << 24 | var_i_1 >>> 8) & -16711936;
  var_a_1 = (var_a_1 << 8 | var_a_1 >>> 24) & 16711935 | (var_a_1 << 24 | var_a_1 >>> 8) & -16711936;
  (var_x = var_r_1[num_o]).high ^= var_a_1;
  var_x.low ^= var_i_1;
  }
  for (var num_s = 0;
  num_s < 24;
  num_s++) {
  for (var num_p = 0;
  num_p < 5;
  num_p++) {
  var num_f = 0;
  var num_h = 0;
  for (var num_m = 0;
  num_m < 5;
  num_m++) {
  num_f ^= (var_x = var_r_1[num_p + num_m * 5]).high;
  num_h ^= var_x.low;
  }
  var var_g = list_d[num_p];
  var_g.high = num_f;
  var_g.low = num_h;
  }
  for (num_p = 0;
  num_p < 5;
  num_p++) {
  var var_v = list_d[(num_p + 4) % 5];
  var var_y = list_d[(num_p + 1) % 5];
  var var__ = var_y.high;
  var var_b = var_y.low;
  num_f = var_v.high ^ (var__ << 1 | var_b >>> 31);
  num_h = var_v.low ^ (var_b << 1 | var__ >>> 31);
  num_m = 0;
  for (;
  num_m < 5;
  num_m++) {
  (var_x = var_r_1[num_p + num_m * 5]).high ^= num_f;
  var_x.low ^= num_h;
  }
  }
  for (var num_w = 1;
  num_w < 25;
  num_w++) {
  var var_E = (var_x = var_r_1[num_w]).high;
  var var_D = var_x.low;
  var var_T = list_c[num_w];
  if (var_T < 32) {
  num_f = var_E << var_T | var_D >>> 32 - var_T;
  num_h = var_D << var_T | var_E >>> 32 - var_T;
  }
  else {
  num_f = var_D << var_T - 32 | var_E >>> 64 - var_T;
  num_h = var_E << var_T - 32 | var_D >>> 64 - var_T;
  }
  var var_k = list_d[list_u[num_w]];
  var_k.high = num_f;
  var_k.low = num_h;
  }
  var var_A = list_d[0];
  var var_C = var_r_1[0];
  var_A.high = var_C.high;
  var_A.low = var_C.low;
  num_p = 0;
  for (;
  num_p < 5;
  num_p++) {
  for (num_m = 0;
  num_m < 5;
  num_m++) {
  var var_x = var_r_1[num_w = num_p + num_m * 5];
  var var_S = list_d[num_w];
  var var_O = list_d[(num_p + 1) % 5 + num_m * 5];
  var var_I = list_d[(num_p + 2) % 5 + num_m * 5];
  var_x.high = var_S.high ^ ~var_O.high & var_I.high;
  var_x.low = var_S.low ^ ~var_O.low & var_I.low;
  }
  }
  var_x = var_r_1[0];
  var var_L = list_l[num_s];
  var_x.high ^= var_L.high;
  var_x.low ^= var_L.low;
  }
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_r_1 = var_t_1.words;
  this._nDataBytes;
  var var_n_1 = var_t_1.sigBytes * 8;
  var var_i_1 = this.blockSize * 32;
  var_r_1[var_n_1 >>> 5] |= 1 << 24 - var_n_1 % 32;
  var_r_1[(param_e.ceil((var_n_1 + 1) / var_i_1) * var_i_1 >>> 5) - 1] |= 128;
  var_t_1.sigBytes = var_r_1.length * 4;
  this._process();
  var var_a_1 = this._state;
  var var_s_1 = this.cfg.outputLength / 8;
  for (var var_c = var_s_1 / 8, list_u_1 = [], num_l = 0;
  num_l < var_c;
  num_l++) {
  var var_d = var_a_1[num_l];
  var var_p_1 = var_d.high;
  var var_f = var_d.low;
  var_p_1 = (var_p_1 << 8 | var_p_1 >>> 24) & 16711935 | (var_p_1 << 24 | var_p_1 >>> 8) & -16711936;
  var_f = (var_f << 8 | var_f >>> 24) & 16711935 | (var_f << 24 | var_f >>> 8) & -16711936;
  list_u_1.push(var_f);
  list_u_1.push(var_p_1);
  }
  return new var_o.init(list_u_1, var_s_1);
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var var_t_1 = var_e._state = this._state.slice(0);
  for (var num_r = 0;
  num_r < 25;
  num_r++) {
  var_t_1[num_r] = var_t_1[num_r].clone();
  }
  return var_e;
  }
  }
  );
  var_t.SHA3 = var_i._createHelper(var_p);
  var_t.HmacSHA3 = var_i._createHmacHelper(var_p);
  }
  )(Math);
  moduleObj.exports = var_n.SHA3;
  };
