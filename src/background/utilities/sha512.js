// Module 41 [utilities] - CryptoJS cryptographic component (sha512)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(26);
  (function () {
  var var_e = var_n;
  var var_t = var_e.lib.Hasher;
  var var_r = var_e.x64;
  var var_o = var_r.Word;
  var var_i = var_r.WordArray;
  var var_a = var_e.algo;
  function var_s() {
  return var_o.create.apply(var_o, arguments);
  }
  var list_c = [var_s(1116352408, 3609767458), var_s(1899447441, 602891725), var_s(
  3049323471, 3964484399), var_s(3921009573, 2173295548), var_s(961987163, 4081628472),
  var_s(1508970993, 3053834265), var_s(2453635748, 2937671579), var_s(2870763221,
  3664609560), var_s(3624381080, 2734883394), var_s(310598401, 1164996542), var_s(
  607225278, 1323610764), var_s(1426881987, 3590304994), var_s(1925078388, 4068182383),
  var_s(2162078206, 991336113), var_s(2614888103, 633803317), var_s(3248222580, 3479774868),
  var_s(3835390401, 2666613458), var_s(4022224774, 944711139), var_s(264347078, 2341262773),
  var_s(604807628, 2007800933), var_s(770255983, 1495990901), var_s(1249150122, 1856431235),
  var_s(1555081692, 3175218132), var_s(1996064986, 2198950837), var_s(2554220882,
  3999719339), var_s(2821834349, 766784016), var_s(2952996808, 2566594879), var_s(
  3210313671, 3203337956), var_s(3336571891, 1034457026), var_s(3584528711, 2466948901),
  var_s(113926993, 3758326383), var_s(338241895, 168717936), var_s(666307205, 1188179964),
  var_s(773529912, 1546045734), var_s(1294757372, 1522805485), var_s(1396182291,
  2643833823), var_s(1695183700, 2343527390), var_s(1986661051, 1014477480), var_s(
  2177026350, 1206759142), var_s(2456956037, 344077627), var_s(2730485921, 1290863460),
  var_s(2820302411, 3158454273), var_s(3259730800, 3505952657), var_s(3345764771,
  106217008), var_s(3516065817, 3606008344), var_s(3600352804, 1432725776), var_s(
  4094571909, 1467031594), var_s(275423344, 851169720), var_s(430227734, 3100823752),
  var_s(506948616, 1363258195), var_s(659060556, 3750685593), var_s(883997877, 3785050280),
  var_s(958139571, 3318307427), var_s(1322822218, 3812723403), var_s(1537002063,
  2003034995), var_s(1747873779, 3602036899), var_s(1955562222, 1575990012), var_s(
  2024104815, 1125592928), var_s(2227730452, 2716904306), var_s(2361852424, 442776044),
  var_s(2428436474, 593698344), var_s(2756734187, 3733110249), var_s(3204031479,
  2999351573), var_s(3329325298, 3815920427), var_s(3391569614, 3928383900), var_s(
  3515267271, 566280711), var_s(3940187606, 3454069534), var_s(4118630271, 4000239992),
  var_s(116418474, 1914138554), var_s(174292421, 2731055270), var_s(289380356, 3203993006),
  var_s(460393269, 320620315), var_s(685471733, 587496836), var_s(852142971, 1086792851),
  var_s(1017036298, 365543100), var_s(1126000580, 2618297676), var_s(1288033470,
  3409855158), var_s(1501505948, 4234509866), var_s(1607167915, 987167468), var_s(
  1816402316, 1246189591)];
  var list_u = [];
  (function () {
  for (var num_e = 0;
  num_e < 80;
  num_e++) {
  list_u[num_e] = var_s();
  }
  }
  )();
  var var_l = var_a.SHA512 = var_t.extend({
  _doReset: function () {
  this._hash = new var_i.init([new var_o.init(1779033703, 4089235720), new var_o.init(
  3144134277, 2227873595), new var_o.init(1013904242, 4271175723), new var_o.init(
  2773480762, 1595750129), new var_o.init(1359893119, 2917565137), new var_o.init(
  2600822924, 725511199), new var_o.init(528734635, 4215389547), new var_o.init(
  1541459225, 327033209)]);
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  var var_r_1 = this._hash.words;
  var var_n_1 = var_r_1[0];
  var var_o_1 = var_r_1[1];
  var var_i_1 = var_r_1[2];
  var var_a_1 = var_r_1[3];
  var var_s_1 = var_r_1[4];
  var var_l_1 = var_r_1[5];
  var var_d = var_r_1[6];
  var var_p = var_r_1[7];
  var var_f = var_n_1.high;
  var var_h = var_n_1.low;
  var var_m = var_o_1.high;
  var var_g = var_o_1.low;
  var var_v = var_i_1.high;
  var var_y = var_i_1.low;
  var var__ = var_a_1.high;
  var var_b = var_a_1.low;
  var var_w = var_s_1.high;
  var var_E = var_s_1.low;
  var var_D = var_l_1.high;
  var var_T = var_l_1.low;
  var var_k = var_d.high;
  var var_A = var_d.low;
  var var_C = var_p.high;
  var var_x = var_p.low;
  var var_S = var_f;
  var var_O = var_h;
  var var_I = var_m;
  var var_L = var_g;
  var var_R = var_v;
  var var_P = var_y;
  var var_B = var__;
  var var_M = var_b;
  var var_F = var_w;
  var var_U = var_E;
  var var_N = var_D;
  var var_j = var_T;
  var var_q = var_k;
  var var_H = var_A;
  var var_V = var_C;
  var var_W = var_x;
  for (var num_z = 0;
  num_z < 80;
  num_z++) {
  var var_Y;
  var var_G;
  var var_Q = list_u[num_z];
  if (num_z < 16) {
  var_G = var_Q.high = param_e[param_t + num_z * 2] | 0;
  var_Y = var_Q.low = param_e[param_t + num_z * 2 + 1] | 0;
  }
  else {
  var var_$ = list_u[num_z - 15];
  var var_K = var_$.high;
  var var_X = var_$.low;
  var var_Z = (var_K >>> 1 | var_X << 31) ^ (var_K >>> 8 | var_X << 24) ^ var_K >>> 7;
  var var_J = (var_X >>> 1 | var_K << 31) ^ (var_X >>> 8 | var_K << 24) ^ (var_X >>> 7 | var_K << 25);
  var ee = list_u[num_z - 2];
  var te = ee.high;
  var re = ee.low;
  var ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6;
  var oe = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26);
  var ie = list_u[num_z - 7];
  var ae = ie.high;
  var se = ie.low;
  var ce = list_u[num_z - 16];
  var ue = ce.high;
  var le = ce.low;
  var_G = (var_G = (var_G = var_Z + ae + ((var_Y = var_J + se) >>> 0 < var_J >>> 0 ?
  1 : 0)) + ne + ((var_Y += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + ue + ((var_Y += le) >>> 0 < le >>> 0 ?
  1 : 0);
  var_Q.high = var_G;
  var_Q.low = var_Y;
  }
  var de;
  var pe = var_F & var_N ^ ~var_F & var_q;
  var fe = var_U & var_j ^ ~var_U & var_H;
  var he = var_S & var_I ^ var_S & var_R ^ var_I & var_R;
  var me = var_O & var_L ^ var_O & var_P ^ var_L & var_P;
  var ge = (var_S >>> 28 | var_O << 4) ^ (var_S << 30 | var_O >>> 2) ^ (var_S << 25 | var_O >>> 7);
  var ve = (var_O >>> 28 | var_S << 4) ^ (var_O << 30 | var_S >>> 2) ^ (var_O << 25 | var_S >>> 7);
  var ye = (var_F >>> 14 | var_U << 18) ^ (var_F >>> 18 | var_U << 14) ^ (var_F << 23 | var_U >>> 9);
  var _e = (var_U >>> 14 | var_F << 18) ^ (var_U >>> 18 | var_F << 14) ^ (var_U << 23 | var_F >>> 9);
  var be = list_c[num_z];
  var we = be.high;
  var Ee = be.low;
  var De = var_V + ye + ((de = var_W + _e) >>> 0 < var_W >>> 0 ?
  1 : 0);
  var Te = ve + me;
  var_V = var_q;
  var_W = var_H;
  var_q = var_N;
  var_H = var_j;
  var_N = var_F;
  var_j = var_U;
  var_F = var_B + (De = (De = (De = De + pe + ((de += fe) >>> 0 < fe >>> 0 ?
  1 : 0)) + we + ((de += Ee) >>> 0 < Ee >>> 0 ? 1 : 0)) + var_G + ((de += var_Y) >>> 0 < var_Y >>> 0 ?
  1 : 0)) + ((var_U = var_M + de | 0) >>> 0 < var_M >>> 0 ? 1 :
  0) | 0;
  var_B = var_R;
  var_M = var_P;
  var_R = var_I;
  var_P = var_L;
  var_I = var_S;
  var_L = var_O;
  var_S = De + (ge + he + (Te >>> 0 < ve >>> 0 ? 1 : 0)) + ((var_O = de + Te | 0) >>> 0 < de >>> 0 ?
  1 : 0) | 0;
  }
  var_h = var_n_1.low = var_h + var_O;
  var_n_1.high = var_f + var_S + (var_h >>> 0 < var_O >>> 0 ?
  1 : 0);
  var_g = var_o_1.low = var_g + var_L;
  var_o_1.high = var_m + var_I + (var_g >>> 0 < var_L >>> 0 ?
  1 : 0);
  var_y = var_i_1.low = var_y + var_P;
  var_i_1.high = var_v + var_R + (var_y >>> 0 < var_P >>> 0 ?
  1 : 0);
  var_b = var_a_1.low = var_b + var_M;
  var_a_1.high = var__ + var_B + (var_b >>> 0 < var_M >>> 0 ?
  1 : 0);
  var_E = var_s_1.low = var_E + var_U;
  var_s_1.high = var_w + var_F + (var_E >>> 0 < var_U >>> 0 ?
  1 : 0);
  var_T = var_l_1.low = var_T + var_j;
  var_l_1.high = var_D + var_N + (var_T >>> 0 < var_j >>> 0 ?
  1 : 0);
  var_A = var_d.low = var_A + var_H;
  var_d.high = var_k + var_q + (var_A >>> 0 < var_H >>> 0 ? 1 :
  0);
  var_x = var_p.low = var_x + var_W;
  var_p.high = var_C + var_V + (var_x >>> 0 < var_W >>> 0 ? 1 :
  0);
  }
  ,
  _doFinalize: function () {
  var var_e_1 = this._data;
  var var_t_1 = var_e_1.words;
  var var_r_1 = this._nDataBytes * 8;
  var var_n_1 = var_e_1.sigBytes * 8;
  var_t_1[var_n_1 >>> 5] |= 128 << 24 - var_n_1 % 32;
  var_t_1[30 + (var_n_1 + 128 >>> 10 << 5)] = Math.floor(var_r_1 / 4294967296);
  var_t_1[31 + (var_n_1 + 128 >>> 10 << 5)] = var_r_1;
  var_e_1.sigBytes = var_t_1.length * 4;
  this._process();
  return this._hash.toX32();
  }
  ,
  clone: function () {
  var var_e_1 = var_t.clone.call(this);
  var_e_1._hash = this._hash.clone();
  return var_e_1;
  }
  ,
  blockSize: 32
  }
  );
  var_e.SHA512 = var_t._createHelper(var_l);
  var_e.HmacSHA512 = var_t._createHmacHelper(var_l);
  }
  )();
  moduleObj.exports = var_n.SHA512;
  };
