// Module 666 - Savior Helper 666
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_module_433 = requireFn(433),
  var_o = requireFn(434).ec,
  dep_helper_173 = requireFn(173),
  dep_helper_501 = requireFn(501);
  function var_u(param_t, param_e) {
  if (param_t.cmpn(0) <= 0) throw new Error("invalid sig");
  if (param_t.cmp(param_e) >= 0) throw new Error("invalid sig");
  }
  moduleObj.exports = function (param_t, param_e, param_r, param_c, param_l) {
  var var_f = dep_helper_173(param_r);
  if ("ec" === var_f.type) {
  if ("ecdsa" !== param_c && "ecdsa/rsa" !== param_c) throw new Error("wrong public key type");
  return function (param_t_1, param_e_1, param_r_1) {
  var var_n_1 = dep_helper_501[param_r_1.data.algorithm.curve.join(".")];
  if (!var_n_1) throw new Error("unknown curve " + param_r_1.data.algorithm.curve.join(
  "."));
  var var_i = new var_o(var_n_1),
  var_a = param_r_1.data.subjectPrivateKey.data;
  return var_i.verify(param_e_1, param_t_1, var_a);
  }
  (param_t, param_e, var_f);
  }
  if ("dsa" === var_f.type) {
  if ("dsa" !== param_c) throw new Error("wrong public key type");
  return function (param_t_1, param_e_1, param_r_1) {
  var var_n_1 = param_r_1.data.p,
  var_o_1 = param_r_1.data.q,
  var_s = param_r_1.data.g,
  var_c = param_r_1.data.pub_key,
  var_l = dep_helper_173.signature.decode(param_t_1, "der"),
  var_f_1 = var_l.s,
  var_d_1 = var_l.r;
  var_u(var_f_1, var_o_1), var_u(var_d_1, var_o_1);
  var var_h = dep_module_433.mont(var_n_1),
  var_p = var_f_1.invm(var_o_1);
  return 0 === var_s.toRed(var_h).redPow(new dep_module_433(param_e_1).mul(var_p).mod(
  var_o_1)).fromRed().mul(var_c.toRed(var_h).redPow(var_d_1.mul(var_p).mod(var_o_1)).fromRed(
  )).mod(var_n_1).mod(var_o_1).cmp(var_d_1);
  }
  (param_t, param_e, var_f);
  }
  if ("rsa" !== param_c && "ecdsa/rsa" !== param_c) throw new Error("wrong public key type");
  param_e = var_n.concat([param_l, param_e]);
  for (var var_d = var_f.modulus.byteLength(), list_h = [1], num_p = 0;
  param_e.length + list_h.length + 2 < var_d;
  ) list_h.push(255), num_p += 1;
  list_h.push(0);
  for (var var_v = -1;
  ++var_v < param_e.length;
  ) list_h.push(param_e[var_v]);
  list_h = var_n.from(list_h);
  var var_m = dep_module_433.mont(var_f.modulus);
  param_t = (param_t = new dep_module_433(param_t).toRed(var_m)).redPow(new dep_module_433(
  var_f.publicExponent)), param_t = var_n.from(param_t.fromRed().toArray());
  var var_y = num_p < 8 ? 1 : 0;
  for (var_d = Math.min(param_t.length, list_h.length), param_t.length !== list_h.length &&
  (var_y = 1), var_v = -1;
  ++var_v < var_d;
  ) var_y |= param_t[var_v] ^ list_h[var_v];
  return 0 === var_y;
  };
  };
