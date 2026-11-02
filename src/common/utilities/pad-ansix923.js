// Module 58 [utilities] - CryptoJS cryptographic component (pad-ansix923)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var var_d;
  var_d = requireFn(4);
  requireFn(34);
  requireFn(35);
  var_o = (var_r = var_d).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  var_s = var_r.algo;
  var_c = var_s.SHA256;
  var_l = var_s.HMAC;
  var_u = var_s.PBKDF2 = var_i.extend({
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
  var var_n = this.cfg;
  var var_r_1 = var_l.create(var_n.hasher, param_e);
  var var_o_1 = var_a.create();
  var var_i_1 = var_a.create([1]);
  for (var var_s_1 = var_o_1.words, var_c_1 = var_i_1.words, var_u_1 = var_n.keySize,
  var_d_1 = var_n.iterations;
  var_s_1.length < var_u_1;
  ) {
  var var_f = var_r_1.update(param_t).finalize(var_i_1);
  var_r_1.reset();
  var var_p = var_f.words;
  var var_h = var_p.length;
  var var_g = var_f;
  for (var num_m = 1;
  num_m < var_d_1;
  num_m++) {
  var_g = var_r_1.finalize(var_g);
  var_r_1.reset();
  var var_v = var_g.words;
  for (var num_y = 0;
  num_y < var_h;
  num_y++) {
  var_p[num_y] ^= var_v[num_y];
  }
  }
  var_o_1.concat(var_f);
  var_c_1[0]++;
  }
  var_o_1.sigBytes = var_u_1 * 4;
  return var_o_1;
  }
  }
  );
  var_r.PBKDF2 = function (param_e, param_t, param_n) {
  return var_u.create(param_n).compute(param_e, param_t);
  };
  moduleObj.exports = var_d.PBKDF2;
  };
