// Module 40 [utilities] - CryptoJS cryptographic component (pad-pkcs7)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_u;
  var var_l;
  var_l = requireFn(4);
  var_o = (var_n = var_l).lib;
  var_i = var_o.WordArray;
  var_a = var_o.Hasher;
  var_s = var_n.algo;
  var_c = [];
  var_u = var_s.SHA1 = var_a.extend({
  _doReset: function () {
  this._hash = new var_i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  var var_r = this._hash.words;
  var var_n_1 = var_r[0];
  var var_o_1 = var_r[1];
  var var_i_1 = var_r[2];
  var var_a_1 = var_r[3];
  var var_s_1 = var_r[4];
  for (var num_u = 0;
  num_u < 80;
  num_u++) {
  if (num_u < 16) {
  var_c[num_u] = param_e[param_t + num_u] | 0;
  }
  else {
  var var_l_1 = var_c[num_u - 3] ^ var_c[num_u - 8] ^ var_c[num_u - 14] ^ var_c[num_u - 16];
  var_c[num_u] = var_l_1 << 1 | var_l_1 >>> 31;
  }
  var var_d = (var_n_1 << 5 | var_n_1 >>> 27) + var_s_1 + var_c[num_u];
  var_d += num_u < 20 ? 1518500249 + (var_o_1 & var_i_1 | ~var_o_1 & var_a_1) :
  num_u < 40 ? 1859775393 + (var_o_1 ^ var_i_1 ^ var_a_1) : num_u < 60 ?
  (var_o_1 & var_i_1 | var_o_1 & var_a_1 | var_i_1 & var_a_1) - 1894007588 :
  (var_o_1 ^ var_i_1 ^ var_a_1) - 899497514;
  var_s_1 = var_a_1;
  var_a_1 = var_i_1;
  var_i_1 = var_o_1 << 30 | var_o_1 >>> 2;
  var_o_1 = var_n_1;
  var_n_1 = var_d;
  }
  var_r[0] = var_r[0] + var_n_1 | 0;
  var_r[1] = var_r[1] + var_o_1 | 0;
  var_r[2] = var_r[2] + var_i_1 | 0;
  var_r[3] = var_r[3] + var_a_1 | 0;
  var_r[4] = var_r[4] + var_s_1 | 0;
  }
  ,
  _doFinalize: function () {
  var var_e = this._data;
  var var_t = var_e.words;
  var var_r = this._nDataBytes * 8;
  var var_n_1 = var_e.sigBytes * 8;
  var_t[var_n_1 >>> 5] |= 128 << 24 - var_n_1 % 32;
  var_t[14 + (var_n_1 + 64 >>> 9 << 4)] = Math.floor(var_r / 4294967296);
  var_t[15 + (var_n_1 + 64 >>> 9 << 4)] = var_r;
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
  var_n.SHA1 = var_a._createHelper(var_u);
  var_n.HmacSHA1 = var_a._createHmacHelper(var_u);
  moduleObj.exports = var_l.SHA1;
  };
