// Module 17 [utilities] - CryptoJS cryptographic component (hmac-core)
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
  requireFn(40);
  requireFn(35);
  var_o = (var_r = var_u).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  var_s = var_r.algo;
  var_c = var_s.MD5;
  var_l = var_s.EvpKDF = var_i.extend({
  cfg: var_i.extend({
  keySize: 4,
  hasher: var_c,
  iterations: 1
  }
  ),
  init: function (param_e) {
  this.cfg = this.cfg.extend(param_e);
  }
  ,
  compute: function (param_e, param_t) {
  var var_n;
  var var_r_1 = this.cfg;
  var var_o_1 = var_r_1.hasher.create();
  var var_i_1 = var_a.create();
  for (var var_s_1 = var_i_1.words, var_c_1 = var_r_1.keySize, var_l_1 = var_r_1.iterations;
  var_s_1.length < var_c_1;
  ) {
  if (var_n) {
  var_o_1.update(var_n);
  }
  var_n = var_o_1.update(param_e).finalize(param_t);
  var_o_1.reset();
  for (var num_u = 1;
  num_u < var_l_1;
  num_u++) {
  var_n = var_o_1.finalize(var_n);
  var_o_1.reset();
  }
  var_i_1.concat(var_n);
  }
  var_i_1.sigBytes = var_c_1 * 4;
  return var_i_1;
  }
  }
  );
  var_r.EvpKDF = function (param_e, param_t, param_n) {
  return var_l.create(param_n).compute(param_e, param_t);
  };
  moduleObj.exports = var_u.EvpKDF;
  };
