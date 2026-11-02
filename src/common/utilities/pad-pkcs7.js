// Module 40 [utilities] - CryptoJS cryptographic component (pad-pkcs7)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var_u = requireFn(4);
  var_o = (var_r = var_u).lib;
  var_i = var_o.WordArray;
  var_a = var_o.Hasher;
  var_s = var_r.algo;
  var_c = [];
  var_l = var_s.SHA1 = var_a.extend({
  _doReset: function () {
  this._hash = new var_i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  var var_n = this._hash.words;
  var var_r_1 = var_n[0];
  var var_o_1 = var_n[1];
  var var_i_1 = var_n[2];
  var var_a_1 = var_n[3];
  var var_s_1 = var_n[4];
  for (var num_l = 0;
  num_l < 80;
  num_l++) {
  if (num_l < 16) {
  var_c[num_l] = param_e[param_t + num_l] | 0;
  }
  else {
  var var_u_1 = var_c[num_l - 3] ^ var_c[num_l - 8] ^ var_c[num_l - 14] ^ var_c[num_l - 16];
  var_c[num_l] = var_u_1 << 1 | var_u_1 >>> 31;
  }
  var var_d = (var_r_1 << 5 | var_r_1 >>> 27) + var_s_1 + var_c[num_l];
  var_d += num_l < 20 ? 1518500249 + (var_o_1 & var_i_1 | ~var_o_1 & var_a_1) :
  num_l < 40 ? 1859775393 + (var_o_1 ^ var_i_1 ^ var_a_1) : num_l < 60 ?
  (var_o_1 & var_i_1 | var_o_1 & var_a_1 | var_i_1 & var_a_1) - 1894007588 :
  (var_o_1 ^ var_i_1 ^ var_a_1) - 899497514;
  var_s_1 = var_a_1;
  var_a_1 = var_i_1;
  var_i_1 = var_o_1 << 30 | var_o_1 >>> 2;
  var_o_1 = var_r_1;
  var_r_1 = var_d;
  }
  var_n[0] = var_n[0] + var_r_1 | 0;
  var_n[1] = var_n[1] + var_o_1 | 0;
  var_n[2] = var_n[2] + var_i_1 | 0;
  var_n[3] = var_n[3] + var_a_1 | 0;
  var_n[4] = var_n[4] + var_s_1 | 0;
  }
  ,
  _doFinalize: function () {
  var var_e = this._data;
  var var_t = var_e.words;
  var var_n = this._nDataBytes * 8;
  var var_r_1 = var_e.sigBytes * 8;
  var_t[var_r_1 >>> 5] |= 128 << 24 - var_r_1 % 32;
  var_t[14 + (var_r_1 + 64 >>> 9 << 4)] = Math.floor(var_n / 4294967296);
  var_t[15 + (var_r_1 + 64 >>> 9 << 4)] = var_n;
  var_e.sigBytes = var_t.length * 4;
  this._process();
  return this._hash;
  }
  ,
  clone: function () {
  var var_e = var_a.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  var_r.SHA1 = var_a._createHelper(var_l);
  var_r.HmacSHA1 = var_a._createHmacHelper(var_l);
  moduleObj.exports = var_u.SHA1;
  };
