// Module 673 - Savior Helper 673
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_173 = requireFn(173),
  dep_helper_502 = requireFn(502),
  dep_helper_503 = requireFn(503),
  dep_module_437 = requireFn(437),
  dep_helper_432 = requireFn(432),
  dep_helper_150 = requireFn(150),
  dep_helper_504 = requireFn(504),
  var_l = requireFn(25).Buffer;
  moduleObj.exports = function (param_t, param_e, param_r) {
  var var_f;
  var_f = param_t.padding ? param_t.padding : param_r ? 1 : 4;
  var var_d,
  var_h = dep_helper_173(param_t),
  var_p = var_h.modulus.byteLength();
  if (param_e.length > var_p || new dep_module_437(param_e).cmp(var_h.modulus) >= 0) throw new Error(
  "decryption error");
  var_d = param_r ? dep_helper_504(new dep_module_437(param_e), var_h) :
  dep_helper_432(param_e, var_h);
  var var_v = var_l.alloc(var_p - var_d.length);
  if (var_d = var_l.concat([var_v, var_d], var_p), 4 === var_f) return function (
  param_t_1, param_e_1) {
  var var_r = param_t_1.modulus.byteLength(),
  var_n = dep_helper_150("sha1").update(var_l.alloc(0)).digest(),
  var_a = var_n.length;
  if (0 !== param_e_1[0]) throw new Error("decryption error");
  var var_s = param_e_1.slice(1, var_a + 1),
  var_c = param_e_1.slice(var_a + 1),
  var_f_1 = dep_helper_503(var_s, dep_helper_502(var_c, var_a)),
  var_d_1 = dep_helper_503(var_c, dep_helper_502(var_f_1, var_r - var_a - 1));
  if (function (param_t_2, param_e_2) {
  param_t_2 = var_l.from(param_t_2), param_e_2 = var_l.from(param_e_2);
  var num_r = 0,
  var_n_1 = param_t_2.length;
  param_t_2.length !== param_e_2.length && (num_r++, var_n_1 = Math.min(param_t_2.length,
  param_e_2.length));
  var var_i = -1;
  for (;
  ++var_i < var_n_1;
  ) num_r += param_t_2[var_i] ^ param_e_2[var_i];
  return num_r;
  }
  (var_n, var_d_1.slice(0, var_a))) throw new Error("decryption error");
  var var_h_1 = var_a;
  for (;
  0 === var_d_1[var_h_1];
  ) var_h_1++;
  if (1 !== var_d_1[var_h_1++]) throw new Error("decryption error");
  return var_d_1.slice(var_h_1);
  }
  (var_h, var_d);
  if (1 === var_f) return function (param_t_1, param_e_1, param_r_1) {
  var var_n = param_e_1.slice(0, 2),
  num_i = 2,
  num_o = 0;
  for (;
  0 !== param_e_1[num_i++];
  ) if (num_i >= param_e_1.length) {
  num_o++;
  break;
  }
  var var_a = param_e_1.slice(2, num_i - 1);
  ("0002" !== var_n.toString("hex") && !param_r_1 || "0001" !== var_n.toString("hex") &&
  param_r_1) && num_o++;
  var_a.length < 8 && num_o++;
  if (num_o) throw new Error("decryption error");
  return param_e_1.slice(num_i);
  }
  (0, var_d, param_r);
  if (3 === var_f) return var_d;
  throw new Error("unknown padding");
  };
  };
