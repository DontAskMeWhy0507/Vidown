// Module 484 - Savior Helper 484
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_139 = requireFn(139);
  moduleObj.exports = var_g, var_g.simpleSieve = var_m, var_g.fermatTest = var_y;
  var dep_module_485 = requireFn(485),
  var_o = new dep_module_485(24),
  var_a = new (requireFn(486))(),
  var_s = new dep_module_485(1),
  var_u = new dep_module_485(2),
  var_c = new dep_module_485(5),
  var_l = (new dep_module_485(16), new dep_module_485(8), new dep_module_485(10)),
  var_f = new dep_module_485(3),
  var_d = (new dep_module_485(7), new dep_module_485(11)),
  var_h = new dep_module_485(4),
  var_p = (new dep_module_485(12), null);
  function var_v() {
  if (null !== var_p) return var_p;
  var list_t = [];
  list_t[0] = 2;
  for (var num_e = 1, num_r = 3;
  num_r < 1048576;
  num_r += 2) {
  for (var var_n = Math.ceil(Math.sqrt(num_r)), num_i = 0;
  num_i < num_e && list_t[num_i] <= var_n && num_r % list_t[num_i] != 0;
  num_i++);
  num_e !== num_i && list_t[num_i] <= var_n || (list_t[num_e++] = num_r);
  }
  return var_p = list_t, list_t;
  }
  function var_m(param_t) {
  for (var var_e = var_v(), num_r = 0;
  num_r < var_e.length;
  num_r++) if (0 === param_t.modn(var_e[num_r])) return 0 === param_t.cmpn(var_e[num_r]);
  return !0;
  }
  function var_y(param_t) {
  var var_e = dep_module_485.mont(param_t);
  return 0 === var_u.toRed(var_e).redPow(param_t.subn(1)).fromRed().cmpn(1);
  }
  function var_g(param_t, param_e) {
  if (param_t < 16) return new dep_module_485(2 === param_e ||
  5 === param_e ? [140, 123] : [140, 39]);
  var var_r, var_p_1;
  for (param_e = new dep_module_485(param_e);;
  ) {
  for (var_r = new dep_module_485(dep_helper_139(Math.ceil(param_t / 8)));
  var_r.bitLength() > param_t;
  ) var_r.ishrn(1);
  if (var_r.isEven() && var_r.iadd(var_s), var_r.testn(1) ||
  var_r.iadd(var_u), param_e.cmp(var_u)) {
  if (!param_e.cmp(var_c)) for (;
  var_r.mod(var_l).cmp(var_f);
  ) var_r.iadd(var_h);
  }
  else for (;
  var_r.mod(var_o).cmp(var_d);
  ) var_r.iadd(var_h);
  if (var_m(var_p_1 = var_r.shrn(1)) && var_m(var_r) && var_y(var_p_1) &&
  var_y(var_r) && var_a.test(var_p_1) && var_a.test(var_r)) return var_r;
  }
  }
  };
