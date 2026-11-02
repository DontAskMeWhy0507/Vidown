// Module 17 [utilities] - CryptoJS cryptographic component (hmac-core)
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
  requireFn(40);
  requireFn(35);
  var_o = (var_n = var_l).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  var_s = var_n.algo;
  var_c = var_s.MD5;
  var_u = var_s.EvpKDF = var_i.extend({
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
  var var_r;
  var var_n_1 = this.cfg;
  var var_o_1 = var_n_1.hasher.create();
  var var_i_1 = var_a.create();
  for (var var_s_1 = var_i_1.words, var_c_1 = var_n_1.keySize, var_u_1 = var_n_1.iterations;
  var_s_1.length < var_c_1;
  ) {
  if (var_r) {
  var_o_1.update(var_r);
  }
  var_r = var_o_1.update(param_e).finalize(param_t);
  var_o_1.reset();
  for (var num_l = 1;
  num_l < var_u_1;
  num_l++) {
  var_r = var_o_1.finalize(var_r);
  var_o_1.reset();
  }
  var_i_1.concat(var_r);
  }
  var_i_1.sigBytes = var_c_1 * 4;
  return var_i_1;
  }
  }
  );
  var_n.EvpKDF = function (param_e, param_t, param_r) {
  return var_u.create(param_r).compute(param_e, param_t);
  };
  moduleObj.exports = var_l.EvpKDF;
  };
