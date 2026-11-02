// Module 468 - Savior Helper 468
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_helper_144 = requireFn(144),
  var_o = requireFn(25).Buffer,
  list_a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
  3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748,
  2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542,
  607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206,
  991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458,
  4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
  1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
  2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671,
  3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383,
  338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
  1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480,
  2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411,
  3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
  3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
  3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
  958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779,
  3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306,
  2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479,
  2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
  3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421,
  2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836,
  852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470,
  3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
  var_s = new Array(160);
  function var_u() {
  this.init(), this._w = var_s, dep_helper_144.call(this, 128, 112);
  }
  function var_c(param_t, param_e, param_r) {
  return param_r ^ param_t & (param_e ^ param_r);
  }
  function var_l(param_t, param_e, param_r) {
  return param_t & param_e | param_r & (param_t | param_e);
  }
  function var_f(param_t, param_e) {
  return (param_t >>> 28 | param_e << 4) ^ (param_e >>> 2 | param_t << 30) ^ (param_e >>> 7 | param_t << 25);
  }
  function var_d(param_t, param_e) {
  return (param_t >>> 14 | param_e << 18) ^ (param_t >>> 18 | param_e << 14) ^ (
  param_e >>> 9 | param_t << 23);
  }
  function var_h(param_t, param_e) {
  return (param_t >>> 1 | param_e << 31) ^ (param_t >>> 8 | param_e << 24) ^ param_t >>> 7;
  }
  function var_p(param_t, param_e) {
  return (param_t >>> 1 | param_e << 31) ^ (param_t >>> 8 | param_e << 24) ^ (param_t >>> 7 | param_e << 25);
  }
  function var_v(param_t, param_e) {
  return (param_t >>> 19 | param_e << 13) ^ (param_e >>> 29 | param_t << 3) ^ param_t >>> 6;
  }
  function var_m(param_t, param_e) {
  return (param_t >>> 19 | param_e << 13) ^ (param_e >>> 29 | param_t << 3) ^ (param_t >>> 6 | param_e << 26);
  }
  function var_y(param_t, param_e) {
  return param_t >>> 0 < param_e >>> 0 ? 1 : 0;
  }
  dep_module_15(var_u, dep_helper_144), var_u.prototype.init = function () {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762,
  this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225,
  this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129,
  this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209,
  this;
  }
  , var_u.prototype._update = function (param_t) {
  for (var var_e = this._w, var_r = 0 | this._ah, var_n = 0 | this._bh, var_i = 0 | this._ch,
  var_o_1 = 0 | this._dh, var_s_1 = 0 | this._eh, var_u_1 = 0 | this._fh, var_g = 0 | this._gh,
  var_b = 0 | this._hh, var_w = 0 | this._al, var_A = 0 | this._bl, var__ = 0 | this._cl,
  var_E = 0 | this._dl, var_S = 0 | this._el, var_O = 0 | this._fl, var_x = 0 | this._gl,
  var_k = 0 | this._hl, num_M = 0;
  num_M < 32;
  num_M += 2) var_e[num_M] = param_t.readInt32BE(4 * num_M), var_e[num_M + 1] = param_t.readInt32BE(
  4 * num_M + 4);
  for (;
  num_M < 160;
  num_M += 2) {
  var var_T = var_e[num_M - 30],
  var_I = var_e[num_M - 30 + 1],
  var_j = var_h(var_T, var_I),
  var_C = var_p(var_I, var_T),
  var_B = var_v(var_T = var_e[num_M - 4], var_I = var_e[num_M - 4 + 1]),
  var_U = var_m(var_I, var_T),
  var_P = var_e[num_M - 14],
  var_N = var_e[num_M - 14 + 1],
  var_D = var_e[num_M - 32],
  var_R = var_e[num_M - 32 + 1],
  var_L = var_C + var_N | 0,
  var_q = var_j + var_P + var_y(var_L, var_C) | 0;
  var_q = (var_q = var_q + var_B + var_y(var_L = var_L + var_U | 0, var_U) | 0) + var_D + var_y(
  var_L = var_L + var_R | 0, var_R) | 0, var_e[num_M] = var_q, var_e[num_M + 1] = var_L;
  }
  for (var num_F = 0;
  num_F < 160;
  num_F += 2) {
  var_q = var_e[num_F], var_L = var_e[num_F + 1];
  var var_G = var_l(var_r, var_n, var_i),
  var_Q = var_l(var_w, var_A, var__),
  var_z = var_f(var_r, var_w),
  var_H = var_f(var_w, var_r),
  var_V = var_d(var_s_1, var_S),
  var_$ = var_d(var_S, var_s_1),
  var_Y = list_a[num_F],
  var_W = list_a[num_F + 1],
  var_X = var_c(var_s_1, var_u_1, var_g),
  var_K = var_c(var_S, var_O, var_x),
  var_J = var_k + var_$ | 0,
  var_Z = var_b + var_V + var_y(var_J, var_k) | 0;
  var_Z = (var_Z = (var_Z = var_Z + var_X + var_y(var_J = var_J + var_K | 0, var_K) | 0) + var_Y + var_y(
  var_J = var_J + var_W | 0, var_W) | 0) + var_q + var_y(var_J = var_J + var_L | 0,
  var_L) | 0;
  var tt = var_H + var_Q | 0,
  et = var_z + var_G + var_y(tt, var_H) | 0;
  var_b = var_g, var_k = var_x, var_g = var_u_1, var_x = var_O, var_u_1 = var_s_1,
  var_O = var_S, var_s_1 = var_o_1 + var_Z + var_y(var_S = var_E + var_J | 0, var_E) | 0,
  var_o_1 = var_i, var_E = var__, var_i = var_n, var__ = var_A, var_n = var_r, var_A = var_w,
  var_r = var_Z + et + var_y(var_w = var_J + tt | 0, var_J) | 0;
  }
  this._al = this._al + var_w | 0, this._bl = this._bl + var_A | 0, this._cl = this._cl + var__ | 0,
  this._dl = this._dl + var_E | 0, this._el = this._el + var_S | 0, this._fl = this._fl + var_O | 0,
  this._gl = this._gl + var_x | 0, this._hl = this._hl + var_k | 0, this._ah = this._ah + var_r + var_y(
  this._al, var_w) | 0, this._bh = this._bh + var_n + var_y(this._bl, var_A) | 0,
  this._ch = this._ch + var_i + var_y(this._cl, var__) | 0, this._dh = this._dh + var_o_1 + var_y(
  this._dl, var_E) | 0, this._eh = this._eh + var_s_1 + var_y(this._el, var_S) | 0,
  this._fh = this._fh + var_u_1 + var_y(this._fl, var_O) | 0, this._gh = this._gh + var_g + var_y(
  this._gl, var_x) | 0, this._hh = this._hh + var_b + var_y(this._hl, var_k) | 0;
  }
  , var_u.prototype._hash = function () {
  var var_t = var_o.allocUnsafe(64);
  function var_e(param_e, param_r, param_n) {
  var_t.writeInt32BE(param_e, param_n), var_t.writeInt32BE(param_r, param_n + 4);
  }
  return var_e(this._ah, this._al, 0), var_e(this._bh, this._bl, 8), var_e(this._ch,
  this._cl, 16), var_e(this._dh, this._dl, 24), var_e(this._eh, this._el, 32), var_e(
  this._fh, this._fl, 40), var_e(this._gh, this._gl, 48), var_e(this._hh, this._hl,
  56), var_t;
  }
  , moduleObj.exports = var_u;
  };
