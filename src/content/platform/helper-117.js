// Module 117 - Savior Helper 117
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = exportsObj,
  dep_module_126 = requireFn(126),
  dep_helper_116 = requireFn(116),
  dep_helper_492 = requireFn(492);
  var_n.assert = dep_helper_116, var_n.toArray = dep_helper_492.toArray, var_n.zero2 = dep_helper_492.zero2,
  var_n.toHex = dep_helper_492.toHex, var_n.encode = dep_helper_492.encode, var_n.getNAF = function (
  param_t, param_e, param_r) {
  var var_n_1,
  var_i = new Array(Math.max(param_t.bitLength(), param_r) + 1);
  for (var_n_1 = 0;
  var_n_1 < var_i.length;
  var_n_1 += 1) var_i[var_n_1] = 0;
  var var_o = 1 << param_e + 1,
  var_a = param_t.clone();
  for (var_n_1 = 0;
  var_n_1 < var_i.length;
  var_n_1++) {
  var var_s,
  var_u = var_a.andln(var_o - 1);
  var_a.isOdd() ? (var_s = var_u > (var_o >> 1) - 1 ? (var_o >> 1) - var_u :
  var_u, var_a.isubn(var_s)) : var_s = 0, var_i[var_n_1] = var_s, var_a.iushrn(1);
  }
  return var_i;
  }
  , var_n.getJSF = function (param_t, param_e) {
  var list_r = [[], []];
  param_t = param_t.clone(), param_e = param_e.clone();
  for (var var_n_1, num_i = 0, num_o = 0;
  param_t.cmpn(-num_i) > 0 || param_e.cmpn(-num_o) > 0;
  ) {
  var var_a,
  var_s,
  var_u = param_t.andln(3) + num_i & 3,
  var_c = param_e.andln(3) + num_o & 3;
  3 === var_u && (var_u = -1), 3 === var_c && (var_c = -1), var_a = 0 == (1 & var_u) ?
  0 : 3 !== (var_n_1 = param_t.andln(7) + num_i & 7) && 5 !== var_n_1 ||
  2 !== var_c ? var_u : -var_u, list_r[0].push(var_a), var_s = 0 == (1 & var_c) ?
  0 : 3 !== (var_n_1 = param_e.andln(7) + num_o & 7) && 5 !== var_n_1 ||
  2 !== var_u ? var_c : -var_c, list_r[1].push(var_s), 2 * num_i === var_a + 1 &&
  (num_i = 1 - num_i), 2 * num_o === var_s + 1 && (num_o = 1 - num_o), param_t.iushrn(
  1), param_e.iushrn(1);
  }
  return list_r;
  }
  , var_n.cachedProperty = function (param_t, param_e, param_r) {
  var var_n_1 = "_" + param_e;
  param_t.prototype[param_e] = function () {
  return void 0 !== this[var_n_1] ? this[var_n_1] : this[var_n_1] = param_r.call(
  this);
  };
  }
  , var_n.parseBytes = function (param_t) {
  return "string" == typeof param_t ? var_n.toArray(param_t, "hex") :
  param_t;
  }
  , var_n.intFromLE = function (param_t) {
  return new dep_module_126(param_t, "hex", "le");
  };
  };
