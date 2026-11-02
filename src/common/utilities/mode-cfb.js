// Module 35 [utilities] - CryptoJS cryptographic component (mode-cfb)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var_r = requireFn(4);
  var_i = (var_o = var_r).lib.Base;
  var_a = var_o.enc.Utf8;
  moduleObj.exports = void (var_o.algo.HMAC = var_i.extend({
  init: function (param_e, param_t) {
  param_e = this._hasher = new param_e.init();
  if (typeof param_t == "string") {
  param_t = var_a.parse(param_t);
  }
  var var_n = param_e.blockSize;
  var var_r_1 = var_n * 4;
  if (param_t.sigBytes > var_r_1) {
  param_t = param_e.finalize(param_t);
  }
  param_t.clamp();
  var var_o_1 = this._oKey = param_t.clone();
  var var_i_1 = this._iKey = param_t.clone();
  var var_s = var_o_1.words;
  var var_c = var_i_1.words;
  for (var num_l = 0;
  num_l < var_n;
  num_l++) {
  var_s[num_l] ^= 1549556828;
  var_c[num_l] ^= 909522486;
  }
  var_o_1.sigBytes = var_i_1.sigBytes = var_r_1;
  this.reset();
  }
  ,
  reset: function () {
  var var_e = this._hasher;
  var_e.reset();
  var_e.update(this._iKey);
  }
  ,
  update: function (param_e) {
  this._hasher.update(param_e);
  return this;
  }
  ,
  finalize: function (param_e) {
  var var_t = this._hasher;
  var var_n = var_t.finalize(param_e);
  var_t.reset();
  return var_t.finalize(this._oKey.clone().concat(var_n));
  }
  }
  ));
  };
