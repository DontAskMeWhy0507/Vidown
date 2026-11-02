// Module 486 - Savior Helper 486
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_618 = requireFn(618),
  dep_helper_430 = requireFn(430);
  function var_o(param_t) {
  this.rand = param_t || new dep_helper_430.Rand();
  }
  moduleObj.exports = var_o, var_o.create = function (param_t) {
  return new var_o(param_t);
  }
  , var_o.prototype._randbelow = function (param_t) {
  var var_e = param_t.bitLength(),
  var_r = Math.ceil(var_e / 8);
  do {
  var var_i = new dep_module_618(this.rand.generate(var_r));
  }
  while (var_i.cmp(param_t) >= 0);
  return var_i;
  }
  , var_o.prototype._randrange = function (param_t, param_e) {
  var var_r = param_e.sub(param_t);
  return param_t.add(this._randbelow(var_r));
  }
  , var_o.prototype.test = function (param_t, param_e, param_r) {
  var var_i = param_t.bitLength(),
  var_o_1 = dep_module_618.mont(param_t),
  var_a = new dep_module_618(1).toRed(var_o_1);
  param_e || (param_e = Math.max(1, var_i / 48 | 0));
  for (var var_s = param_t.subn(1), num_u = 0;
  !var_s.testn(num_u);
  num_u++);
  for (var var_c = param_t.shrn(num_u), var_l = var_s.toRed(var_o_1);
  param_e > 0;
  param_e--) {
  var var_f = this._randrange(new dep_module_618(2), var_s);
  param_r && param_r(var_f);
  var var_d = var_f.toRed(var_o_1).redPow(var_c);
  if (0 !== var_d.cmp(var_a) && 0 !== var_d.cmp(var_l)) {
  for (var num_h = 1;
  num_h < num_u;
  num_h++) {
  if (0 === (var_d = var_d.redSqr()).cmp(var_a)) return !1;
  if (0 === var_d.cmp(var_l)) break;
  }
  if (num_h === num_u) return !1;
  }
  }
  return !0;
  }
  , var_o.prototype.getDivisor = function (param_t, param_e) {
  var var_r = param_t.bitLength(),
  var_i = dep_module_618.mont(param_t),
  var_o_1 = new dep_module_618(1).toRed(var_i);
  param_e || (param_e = Math.max(1, var_r / 48 | 0));
  for (var var_a = param_t.subn(1), num_s = 0;
  !var_a.testn(num_s);
  num_s++);
  for (var var_u = param_t.shrn(num_s), var_c = var_a.toRed(var_i);
  param_e > 0;
  param_e--) {
  var var_l = this._randrange(new dep_module_618(2), var_a),
  var_f = param_t.gcd(var_l);
  if (0 !== var_f.cmpn(1)) return var_f;
  var var_d = var_l.toRed(var_i).redPow(var_u);
  if (0 !== var_d.cmp(var_o_1) && 0 !== var_d.cmp(var_c)) {
  for (var num_h = 1;
  num_h < num_s;
  num_h++) {
  if (0 === (var_d = var_d.redSqr()).cmp(var_o_1)) return var_d.fromRed().subn(1).gcd(
  param_t);
  if (0 === var_d.cmp(var_c)) break;
  }
  if (num_h === num_s) return (var_d = var_d.redSqr()).fromRed().subn(1).gcd(param_t);
  }
  }
  return !1;
  };
  };
