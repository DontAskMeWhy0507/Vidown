// Module 630 - Savior Helper 630
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(25).Buffer,
  dep_helper_469 = requireFn(469),
  dep_helper_432 = requireFn(432),
  var_a = requireFn(434).ec,
  dep_module_433 = requireFn(433),
  dep_helper_173 = requireFn(173),
  dep_helper_501 = requireFn(501);
  function var_l(param_t, param_e, param_r, param_o) {
  if ((param_t = var_n.from(param_t.toArray())).length < param_e.byteLength()) {
  var var_a_1 = var_n.alloc(param_e.byteLength() - param_t.length);
  param_t = var_n.concat([var_a_1, param_t]);
  }
  var var_s = param_r.length,
  var_u = function (param_t_1, param_e_1) {
  param_t_1 = (param_t_1 = var_f(param_t_1, param_e_1)).mod(param_e_1);
  var var_r = var_n.from(param_t_1.toArray());
  if (var_r.length < param_e_1.byteLength()) {
  var var_i = var_n.alloc(param_e_1.byteLength() - var_r.length);
  var_r = var_n.concat([var_i, var_r]);
  }
  return var_r;
  }
  (param_r, param_e),
  var_c = var_n.alloc(var_s);
  var_c.fill(1);
  var var_l_1 = var_n.alloc(var_s);
  return var_l_1 = dep_helper_469(param_o, var_l_1).update(var_c).update(var_n.from(
  [0])).update(param_t).update(var_u).digest(), var_c = dep_helper_469(param_o, var_l_1).update(
  var_c).digest(), {
  k: var_l_1 = dep_helper_469(param_o, var_l_1).update(var_c).update(var_n.from(
  [1])).update(param_t).update(var_u).digest(),
  v: var_c = dep_helper_469(param_o, var_l_1).update(var_c).digest()
  };
  }
  function var_f(param_t, param_e) {
  var var_r = new dep_module_433(param_t),
  var_n_1 = (param_t.length << 3) - param_e.bitLength();
  return var_n_1 > 0 && var_r.ishrn(var_n_1), var_r;
  }
  function var_d(param_t, param_e, param_r) {
  var var_o, var_a_1;
  do {
  for (var_o = var_n.alloc(0);
  8 * var_o.length < param_t.bitLength();
  ) param_e.v = dep_helper_469(param_r, param_e.k).update(param_e.v).digest(), var_o = var_n.concat(
  [var_o, param_e.v]);
  var_a_1 = var_f(var_o, param_t), param_e.k = dep_helper_469(param_r, param_e.k).update(
  param_e.v).update(var_n.from([0])).digest(), param_e.v = dep_helper_469(param_r,
  param_e.k).update(param_e.v).digest();
  }
  while (-1 !== var_a_1.cmp(param_t));
  return var_a_1;
  }
  function var_h(param_t, param_e, param_r, param_n) {
  return param_t.toRed(dep_module_433.mont(param_r)).redPow(param_e).fromRed().mod(
  param_n);
  }
  moduleObj.exports = function (param_t, param_e, param_r, param_i, param_p) {
  var var_v = dep_helper_173(param_e);
  if (var_v.curve) {
  if ("ecdsa" !== param_i && "ecdsa/rsa" !== param_i) throw new Error("wrong private key type");
  return function (param_t_1, param_e_1) {
  var var_r = dep_helper_501[param_e_1.curve.join(".")];
  if (!var_r) throw new Error("unknown curve " + param_e_1.curve.join("."));
  var var_i = new var_a(var_r).keyFromPrivate(param_e_1.privateKey).sign(param_t_1);
  return var_n.from(var_i.toDER());
  }
  (param_t, var_v);
  }
  if ("dsa" === var_v.type) {
  if ("dsa" !== param_i) throw new Error("wrong private key type");
  return function (param_t_1, param_e_1, param_r_1) {
  var var_i,
  var_o = param_e_1.params.priv_key,
  var_a_1 = param_e_1.params.p,
  var_u = param_e_1.params.q,
  var_c = param_e_1.params.g,
  var_p = new dep_module_433(0),
  var_v_1 = var_f(param_t_1, var_u).mod(var_u),
  flag_m = !1,
  var_y = var_l(var_o, var_u, param_t_1, param_r_1);
  for (;
  !1 === flag_m;
  ) var_i = var_d(var_u, var_y, param_r_1), var_p = var_h(var_c, var_i, var_a_1,
  var_u), 0 === (flag_m = var_i.invm(var_u).imul(var_v_1.add(var_o.mul(var_p))).mod(
  var_u)).cmpn(0) && (flag_m = !1, var_p = new dep_module_433(0));
  return function (param_t_2, param_e_2) {
  param_t_2 = param_t_2.toArray(), param_e_2 = param_e_2.toArray(), 128 & param_t_2[0] &&
  (param_t_2 = [0].concat(param_t_2));
  128 & param_e_2[0] && (param_e_2 = [0].concat(param_e_2));
  var list_r = [48, param_t_2.length + param_e_2.length + 4, 2, param_t_2.length];
  return list_r = list_r.concat(param_t_2, [2, param_e_2.length], param_e_2), var_n.from(
  list_r);
  }
  (var_p, flag_m);
  }
  (param_t, var_v, param_r);
  }
  if ("rsa" !== param_i && "ecdsa/rsa" !== param_i) throw new Error("wrong private key type");
  if (void 0 !== param_e.padding && 1 !== param_e.padding) throw new Error("illegal or unsupported padding mode");
  param_t = var_n.concat([param_p, param_t]);
  for (var var_m = var_v.modulus.byteLength(), list_y = [0, 1];
  param_t.length + list_y.length + 1 < var_m;
  ) list_y.push(255);
  list_y.push(0);
  for (var var_g = -1;
  ++var_g < param_t.length;
  ) list_y.push(param_t[var_g]);
  return dep_helper_432(list_y, var_v);
  }
  , moduleObj.exports.getKey = var_l, moduleObj.exports.makeKey = var_d;
  };
