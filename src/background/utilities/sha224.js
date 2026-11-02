// Module 57 [utilities] - CryptoJS cryptographic component (sha224)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  /** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
    	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
  (function (param_e) {
  var var_t = var_n;
  var var_r = var_t.lib;
  var var_o = var_r.WordArray;
  var var_i = var_r.Hasher;
  var var_a = var_t.algo;
  var var_s = var_o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1,
  2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  var var_c = var_o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
  11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  var var_u = var_o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9,
  8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9,
  13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8,
  6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  var var_l = var_o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12,
  6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6,
  6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12,
  5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  var var_d = var_o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  var var_p = var_o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  var var_f = var_a.RIPEMD160 = var_i.extend({
  _doReset: function () {
  this._hash = var_o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
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
  var var_i_1;
  var var_a_1;
  var var_f_1;
  var var_b;
  var var_w;
  var var_E;
  var var_D;
  var var_T;
  var var_k;
  var var_A;
  var var_C;
  var var_x = this._hash.words;
  var var_S = var_d.words;
  var var_O = var_p.words;
  var var_I = var_s.words;
  var var_L = var_c.words;
  var var_R = var_u.words;
  var var_P = var_l.words;
  var_E = var_i_1 = var_x[0];
  var_D = var_a_1 = var_x[1];
  var_T = var_f_1 = var_x[2];
  var_k = var_b = var_x[3];
  var_A = var_w = var_x[4];
  num_r = 0;
  for (;
  num_r < 80;
  num_r += 1) {
  var_C = var_i_1 + param_e_1[param_t + var_I[num_r]] | 0;
  var_C += num_r < 16 ? var_h(var_a_1, var_f_1, var_b) + var_S[0] :
  num_r < 32 ? var_m(var_a_1, var_f_1, var_b) + var_S[1] : num_r < 48 ?
  var_g(var_a_1, var_f_1, var_b) + var_S[2] : num_r < 64 ? var_v(var_a_1, var_f_1,
  var_b) + var_S[3] : var_y(var_a_1, var_f_1, var_b) + var_S[4];
  var_C = (var_C = var__(var_C |= 0, var_R[num_r])) + var_w | 0;
  var_i_1 = var_w;
  var_w = var_b;
  var_b = var__(var_f_1, 10);
  var_f_1 = var_a_1;
  var_a_1 = var_C;
  var_C = var_E + param_e_1[param_t + var_L[num_r]] | 0;
  var_C += num_r < 16 ? var_y(var_D, var_T, var_k) + var_O[0] :
  num_r < 32 ? var_v(var_D, var_T, var_k) + var_O[1] : num_r < 48 ?
  var_g(var_D, var_T, var_k) + var_O[2] : num_r < 64 ? var_m(var_D, var_T, var_k) + var_O[3] :
  var_h(var_D, var_T, var_k) + var_O[4];
  var_C = (var_C = var__(var_C |= 0, var_P[num_r])) + var_A | 0;
  var_E = var_A;
  var_A = var_k;
  var_k = var__(var_T, 10);
  var_T = var_D;
  var_D = var_C;
  }
  var_C = var_x[1] + var_f_1 + var_k | 0;
  var_x[1] = var_x[2] + var_b + var_A | 0;
  var_x[2] = var_x[3] + var_w + var_E | 0;
  var_x[3] = var_x[4] + var_i_1 + var_D | 0;
  var_x[4] = var_x[0] + var_a_1 + var_T | 0;
  var_x[0] = var_C;
  }
  ,
  _doFinalize: function () {
  var var_e = this._data;
  var var_t_1 = var_e.words;
  var var_r_1 = this._nDataBytes * 8;
  var var_n_1 = var_e.sigBytes * 8;
  var_t_1[var_n_1 >>> 5] |= 128 << 24 - var_n_1 % 32;
  var_t_1[14 + (var_n_1 + 64 >>> 9 << 4)] = (var_r_1 << 8 | var_r_1 >>> 24) & 16711935 | (
  var_r_1 << 24 | var_r_1 >>> 8) & -16711936;
  var_e.sigBytes = (var_t_1.length + 1) * 4;
  this._process();
  var var_o_1 = this._hash;
  var var_i_1 = var_o_1.words;
  for (var num_a = 0;
  num_a < 5;
  num_a++) {
  var var_s_1 = var_i_1[num_a];
  var_i_1[num_a] = (var_s_1 << 8 | var_s_1 >>> 24) & 16711935 | (var_s_1 << 24 | var_s_1 >>> 8) & -16711936;
  }
  return var_o_1;
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  function var_h(param_e_1, param_t, param_r) {
  return param_e_1 ^ param_t ^ param_r;
  }
  function var_m(param_e_1, param_t, param_r) {
  return param_e_1 & param_t | ~param_e_1 & param_r;
  }
  function var_g(param_e_1, param_t, param_r) {
  return (param_e_1 | ~param_t) ^ param_r;
  }
  function var_v(param_e_1, param_t, param_r) {
  return param_e_1 & param_r | param_t & ~param_r;
  }
  function var_y(param_e_1, param_t, param_r) {
  return param_e_1 ^ (param_t | ~param_r);
  }
  function var__(param_e_1, param_t) {
  return param_e_1 << param_t | param_e_1 >>> 32 - param_t;
  }
  var_t.RIPEMD160 = var_i._createHelper(var_f);
  var_t.HmacRIPEMD160 = var_i._createHmacHelper(var_f);
  }
  )(Math);
  moduleObj.exports = var_n.RIPEMD160;
  };
