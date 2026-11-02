// Module 26 [utilities] - CryptoJS cryptographic component (crypto-x64)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var_c = requireFn(4);
  var_o = (var_r = var_c).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  (var_s = var_r.x64 = {
  }
  ).Word = var_i.extend({
  init: function (param_e, param_t) {
  this.high = param_e;
  this.low = param_t;
  }
  }
  );
  var_s.WordArray = var_i.extend({
  init: function (param_e, param_t) {
  param_e = this.words = param_e || [];
  this.sigBytes = param_t ?? param_e.length * 8;
  }
  ,
  toX32: function () {
  var var_e = this.words;
  for (var var_t = var_e.length, list_n = [], num_r = 0;
  num_r < var_t;
  num_r++) {
  var var_o_1 = var_e[num_r];
  list_n.push(var_o_1.high);
  list_n.push(var_o_1.low);
  }
  return var_a.create(list_n, this.sigBytes);
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var var_t = var_e.words = this.words.slice(0);
  for (var var_n = var_t.length, num_r = 0;
  num_r < var_n;
  num_r++) {
  var_t[num_r] = var_t[num_r].clone();
  }
  return var_e;
  }
  }
  );
  moduleObj.exports = var_c;
  };
