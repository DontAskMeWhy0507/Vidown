// Module 58 [utilities] - CryptoJS cryptographic component (pad-ansix923)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_u;
  var var_l;
  var var_d;
  var_d = requireFn(4);
  requireFn(34);
  requireFn(35);
  var_o = (var_n = var_d).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  var_s = var_n.algo;
  var_c = var_s.SHA256;
  var_u = var_s.HMAC;
  var_l = var_s.PBKDF2 = var_i.extend({
  cfg: var_i.extend({
  keySize: 4,
  hasher: var_c,
  iterations: 250000
  }
  ),
  init: function (param_e) {
  this.cfg = this.cfg.extend(param_e);
  }
  ,
  compute: function (param_e, param_t) {
  var var_r = this.cfg;
  var var_n_1 = var_u.create(var_r.hasher, param_e);
  var var_o_1 = var_a.create();
  var var_i_1 = var_a.create([1]);
  for (var var_s_1 = var_o_1.words, var_c_1 = var_i_1.words, var_l_1 = var_r.keySize,
  var_d_1 = var_r.iterations;
  var_s_1.length < var_l_1;
  ) {
  var var_p = var_n_1.update(param_t).finalize(var_i_1);
  var_n_1.reset();
  var var_f = var_p.words;
  var var_h = var_f.length;
  var var_m = var_p;
  for (var num_g = 1;
  num_g < var_d_1;
  num_g++) {
  var_m = var_n_1.finalize(var_m);
  var_n_1.reset();
  var var_v = var_m.words;
  for (var num_y = 0;
  num_y < var_h;
  num_y++) {
  var_f[num_y] ^= var_v[num_y];
  }
  }
  var_o_1.concat(var_p);
  var_c_1[0]++;
  }
  var_o_1.sigBytes = var_l_1 * 4;
  return var_o_1;
  }
  }
  );
  var_n.PBKDF2 = function (param_e, param_t, param_r) {
  return var_l.create(param_r).compute(param_e, param_t);
  };
  moduleObj.exports = var_d.PBKDF2;
  };
