// Module 41 [utilities] - CryptoJS cryptographic component (sha512)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(26);
  (function () {
  var var_e = var_r;
  var var_t = var_e.lib.Hasher;
  var var_n = var_e.x64;
  var var_o = var_n.Word;
  var var_i = var_n.WordArray;
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
  var list_l = [];
  (function () {
  for (var num_e = 0;
  num_e < 80;
  num_e++) {
  list_l[num_e] = var_s();
  }
  }
  )();
  var var_u = var_a.SHA512 = var_t.extend({
  _doReset: function () {
  this._hash = new var_i.init([new var_o.init(1779033703, 4089235720), new var_o.init(
  3144134277, 2227873595), new var_o.init(1013904242, 4271175723), new var_o.init(
  2773480762, 1595750129), new var_o.init(1359893119, 2917565137), new var_o.init(
  2600822924, 725511199), new var_o.init(528734635, 4215389547), new var_o.init(
  1541459225, 327033209)]);
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  var var_n_1 = this._hash.words;
  var var_r_1 = var_n_1[0];
  var var_o_1 = var_n_1[1];
  var var_i_1 = var_n_1[2];
  var var_a_1 = var_n_1[3];
  var var_s_1 = var_n_1[4];
  var var_u_1 = var_n_1[5];
  var var_d = var_n_1[6];
  var var_f = var_n_1[7];
  var var_p = var_r_1.high;
  var var_h = var_r_1.low;
  var var_g = var_o_1.high;
  var var_m = var_o_1.low;
  var var_v = var_i_1.high;
  var var_y = var_i_1.low;
  var var_k = var_a_1.high;
  var var_b = var_a_1.low;
  var var__ = var_s_1.high;
  var var_T = var_s_1.low;
  var var_S = var_u_1.high;
  var var_x = var_u_1.low;
  var var_w = var_d.high;
  var var_E = var_d.low;
  var var_A = var_f.high;
  var var_C = var_f.low;
  var var_O = var_p;
  var var_I = var_h;
  var var_N = var_g;
  var var_D = var_m;
  var var_R = var_v;
  var var_L = var_y;
  var var_P = var_k;
  var var_B = var_b;
  var var_U = var__;
  var var_M = var_T;
  var var_V = var_S;
  var var_H = var_x;
  var var_j = var_w;
  var var_F = var_E;
  var var_z = var_A;
  var var_G = var_C;
  for (var num_W = 0;
  num_W < 80;
  num_W++) {
  var var_q;
  var var_Y;
  var var_K = list_l[num_W];
  if (num_W < 16) {
  var_Y = var_K.high = param_e[param_t + num_W * 2] | 0;
  var_q = var_K.low = param_e[param_t + num_W * 2 + 1] | 0;
  }
  else {
  var var_X = list_l[num_W - 15];
  var var_$ = var_X.high;
  var var_J = var_X.low;
  var var_Q = (var_$ >>> 1 | var_J << 31) ^ (var_$ >>> 8 | var_J << 24) ^ var_$ >>> 7;
  var var_Z = (var_J >>> 1 | var_$ << 31) ^ (var_J >>> 8 | var_$ << 24) ^ (var_J >>> 7 | var_$ << 25);
  var ee = list_l[num_W - 2];
  var te = ee.high;
  var ne = ee.low;
  var re = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6;
  var oe = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26);
  var ie = list_l[num_W - 7];
  var ae = ie.high;
  var se = ie.low;
  var ce = list_l[num_W - 16];
  var le = ce.high;
  var ue = ce.low;
  var_Y = (var_Y = (var_Y = var_Q + ae + ((var_q = var_Z + se) >>> 0 < var_Z >>> 0 ?
  1 : 0)) + re + ((var_q += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + le + ((var_q += ue) >>> 0 < ue >>> 0 ?
  1 : 0);
  var_K.high = var_Y;
  var_K.low = var_q;
  }
  var de;
  var fe = var_U & var_V ^ ~var_U & var_j;
  var pe = var_M & var_H ^ ~var_M & var_F;
  var he = var_O & var_N ^ var_O & var_R ^ var_N & var_R;
  var ge = var_I & var_D ^ var_I & var_L ^ var_D & var_L;
  var me = (var_O >>> 28 | var_I << 4) ^ (var_O << 30 | var_I >>> 2) ^ (var_O << 25 | var_I >>> 7);
  var ve = (var_I >>> 28 | var_O << 4) ^ (var_I << 30 | var_O >>> 2) ^ (var_I << 25 | var_O >>> 7);
  var ye = (var_U >>> 14 | var_M << 18) ^ (var_U >>> 18 | var_M << 14) ^ (var_U << 23 | var_M >>> 9);
  var ke = (var_M >>> 14 | var_U << 18) ^ (var_M >>> 18 | var_U << 14) ^ (var_M << 23 | var_U >>> 9);
  var be = list_c[num_W];
  var _e = be.high;
  var Te = be.low;
  var Se = var_z + ye + ((de = var_G + ke) >>> 0 < var_G >>> 0 ?
  1 : 0);
  var xe = ve + ge;
  var_z = var_j;
  var_G = var_F;
  var_j = var_V;
  var_F = var_H;
  var_V = var_U;
  var_H = var_M;
  var_U = var_P + (Se = (Se = (Se = Se + fe + ((de += pe) >>> 0 < pe >>> 0 ?
  1 : 0)) + _e + ((de += Te) >>> 0 < Te >>> 0 ? 1 : 0)) + var_Y + ((de += var_q) >>> 0 < var_q >>> 0 ?
  1 : 0)) + ((var_M = var_B + de | 0) >>> 0 < var_B >>> 0 ? 1 :
  0) | 0;
  var_P = var_R;
  var_B = var_L;
  var_R = var_N;
  var_L = var_D;
  var_N = var_O;
  var_D = var_I;
  var_O = Se + (me + he + (xe >>> 0 < ve >>> 0 ? 1 : 0)) + ((var_I = de + xe | 0) >>> 0 < de >>> 0 ?
  1 : 0) | 0;
  }
  var_h = var_r_1.low = var_h + var_I;
  var_r_1.high = var_p + var_O + (var_h >>> 0 < var_I >>> 0 ?
  1 : 0);
  var_m = var_o_1.low = var_m + var_D;
  var_o_1.high = var_g + var_N + (var_m >>> 0 < var_D >>> 0 ?
  1 : 0);
  var_y = var_i_1.low = var_y + var_L;
  var_i_1.high = var_v + var_R + (var_y >>> 0 < var_L >>> 0 ?
  1 : 0);
  var_b = var_a_1.low = var_b + var_B;
  var_a_1.high = var_k + var_P + (var_b >>> 0 < var_B >>> 0 ?
  1 : 0);
  var_T = var_s_1.low = var_T + var_M;
  var_s_1.high = var__ + var_U + (var_T >>> 0 < var_M >>> 0 ?
  1 : 0);
  var_x = var_u_1.low = var_x + var_H;
  var_u_1.high = var_S + var_V + (var_x >>> 0 < var_H >>> 0 ?
  1 : 0);
  var_E = var_d.low = var_E + var_F;
  var_d.high = var_w + var_j + (var_E >>> 0 < var_F >>> 0 ? 1 :
  0);
  var_C = var_f.low = var_C + var_G;
  var_f.high = var_A + var_z + (var_C >>> 0 < var_G >>> 0 ? 1 :
  0);
  }
  ,
  _doFinalize: function () {
  var var_e_1 = this._data;
  var var_t_1 = var_e_1.words;
  var var_n_1 = this._nDataBytes * 8;
  var var_r_1 = var_e_1.sigBytes * 8;
  var_t_1[var_r_1 >>> 5] |= 128 << 24 - var_r_1 % 32;
  var_t_1[30 + (var_r_1 + 128 >>> 10 << 5)] = Math.floor(var_n_1 / 4294967296);
  var_t_1[31 + (var_r_1 + 128 >>> 10 << 5)] = var_n_1;
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
  var_e.SHA512 = var_t._createHelper(var_u);
  var_e.HmacSHA512 = var_t._createHmacHelper(var_u);
  }
  )();
  moduleObj.exports = var_r.SHA512;
  };
