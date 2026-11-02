// Module 671 - Savior Helper 671
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_173 = requireFn(173),
  dep_helper_139 = requireFn(139),
  dep_helper_150 = requireFn(150),
  dep_helper_502 = requireFn(502),
  dep_helper_503 = requireFn(503),
  dep_module_437 = requireFn(437),
  dep_helper_504 = requireFn(504),
  dep_helper_432 = requireFn(432),
  var_f = requireFn(25).Buffer;
  moduleObj.exports = function (param_t, param_e, param_r) {
  var var_d;
  var_d = param_t.padding ? param_t.padding : param_r ? 1 : 4;
  var var_h,
  var_p = dep_helper_173(param_t);
  if (4 === var_d) var_h = function (param_t_1, param_e_1) {
  var var_r = param_t_1.modulus.byteLength(),
  var_n = param_e_1.length,
  var_c = dep_helper_150("sha1").update(var_f.alloc(0)).digest(),
  var_l = var_c.length,
  var_d_1 = 2 * var_l;
  if (var_n > var_r - var_d_1 - 2) throw new Error("message too long");
  var var_h_1 = var_f.alloc(var_r - var_n - var_d_1 - 2),
  var_p_1 = var_r - var_l - 1,
  var_v = dep_helper_139(var_l),
  var_m = dep_helper_503(var_f.concat([var_c, var_h_1, var_f.alloc(1, 1), param_e_1],
  var_p_1), dep_helper_502(var_v, var_p_1)),
  var_y = dep_helper_503(var_v, dep_helper_502(var_m, var_l));
  return new dep_module_437(var_f.concat([var_f.alloc(1), var_y, var_m], var_r));
  }
  (var_p, param_e);
  else if (1 === var_d) var_h = function (param_t_1, param_e_1, param_r_1) {
  var var_n,
  var_o = param_e_1.length,
  var_a = param_t_1.modulus.byteLength();
  if (var_o > var_a - 11) throw new Error("message too long");
  var_n = param_r_1 ? var_f.alloc(var_a - var_o - 3, 255) : function (param_t_2) {
  var var_e,
  var_r = var_f.allocUnsafe(param_t_2),
  num_n = 0,
  var_o_1 = dep_helper_139(2 * param_t_2),
  num_a = 0;
  for (;
  num_n < param_t_2;
  ) num_a === var_o_1.length && (var_o_1 = dep_helper_139(2 * param_t_2), num_a = 0),
  (var_e = var_o_1[num_a++]) && (var_r[num_n++] = var_e);
  return var_r;
  }
  (var_a - var_o - 3);
  return new dep_module_437(var_f.concat([var_f.from([0, param_r_1 ?
  1 : 2]), var_n, var_f.alloc(1), param_e_1], var_a));
  }
  (var_p, param_e, param_r);
  else {
  if (3 !== var_d) throw new Error("unknown padding");
  if ((var_h = new dep_module_437(param_e)).cmp(var_p.modulus) >= 0) throw new Error(
  "data too long for modulus");
  }
  return param_r ? dep_helper_432(var_h, var_p) : dep_helper_504(var_h, var_p);
  };
  };
