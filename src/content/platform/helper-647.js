// Module 647 - Savior Helper 647
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_126 = requireFn(126),
  dep_helper_117 = requireFn(117),
  var_o = dep_helper_117.assert;
  function var_a(param_t, param_e) {
  if (param_t instanceof var_a) return param_t;
  this._importDER(param_t, param_e) || (var_o(param_t.r && param_t.s, "Signature without r or s"),
  this.r = new dep_module_126(param_t.r, 16), this.s = new dep_module_126(param_t.s,
  16), void 0 === param_t.recoveryParam ? this.recoveryParam = null :
  this.recoveryParam = param_t.recoveryParam);
  }
  function var_s() {
  this.place = 0;
  }
  function var_u(param_t, param_e) {
  var var_r = param_t[param_e.place++];
  if (!(128 & var_r)) return var_r;
  var var_n = 15 & var_r;
  if (0 === var_n || var_n > 4) return !1;
  if (0 === param_t[param_e.place]) return !1;
  for (var num_i = 0, num_o = 0, var_a_1 = param_e.place;
  num_o < var_n;
  num_o++, var_a_1++) num_i <<= 8, num_i |= param_t[var_a_1], num_i >>>= 0;
  return !(num_i <= 127) && (param_e.place = var_a_1, num_i);
  }
  function var_c(param_t) {
  for (var num_e = 0, var_r = param_t.length - 1;
  !param_t[num_e] && !(128 & param_t[num_e + 1]) && num_e < var_r;
  ) num_e++;
  return 0 === num_e ? param_t : param_t.slice(num_e);
  }
  function var_l(param_t, param_e) {
  if (param_e < 128) param_t.push(param_e);
  else {
  var var_r = 1 + (Math.log(param_e) / Math.LN2 >>> 3);
  for (param_t.push(128 | var_r);
  --var_r;
  ) param_t.push(param_e >>> (var_r << 3) & 255);
  param_t.push(param_e);
  }
  }
  moduleObj.exports = var_a, var_a.prototype._importDER = function (param_t, param_e) {
  param_t = dep_helper_117.toArray(param_t, param_e);
  var var_r = new var_s();
  if (48 !== param_t[var_r.place++]) return !1;
  var var_o_1 = var_u(param_t, var_r);
  if (!1 === var_o_1) return !1;
  if (var_o_1 + var_r.place !== param_t.length) return !1;
  if (2 !== param_t[var_r.place++]) return !1;
  var var_a_1 = var_u(param_t, var_r);
  if (!1 === var_a_1) return !1;
  if (0 != (128 & param_t[var_r.place])) return !1;
  var var_c_1 = param_t.slice(var_r.place, var_a_1 + var_r.place);
  if (var_r.place += var_a_1, 2 !== param_t[var_r.place++]) return !1;
  var var_l_1 = var_u(param_t, var_r);
  if (!1 === var_l_1) return !1;
  if (param_t.length !== var_l_1 + var_r.place) return !1;
  if (0 != (128 & param_t[var_r.place])) return !1;
  var var_f = param_t.slice(var_r.place, var_l_1 + var_r.place);
  if (0 === var_c_1[0]) {
  if (!(128 & var_c_1[1])) return !1;
  var_c_1 = var_c_1.slice(1);
  }
  if (0 === var_f[0]) {
  if (!(128 & var_f[1])) return !1;
  var_f = var_f.slice(1);
  }
  return this.r = new dep_module_126(var_c_1), this.s = new dep_module_126(var_f),
  this.recoveryParam = null, !0;
  }
  , var_a.prototype.toDER = function (param_t) {
  var var_e = this.r.toArray(),
  var_r = this.s.toArray();
  for (128 & var_e[0] && (var_e = [0].concat(var_e)), 128 & var_r[0] &&
  (var_r = [0].concat(var_r)), var_e = var_c(var_e), var_r = var_c(var_r);
  !(var_r[0] || 128 & var_r[1]);
  ) var_r = var_r.slice(1);
  var list_n = [2];
  var_l(list_n, var_e.length), (list_n = list_n.concat(var_e)).push(2), var_l(list_n,
  var_r.length);
  var var_o_1 = list_n.concat(var_r),
  list_a = [48];
  return var_l(list_a, var_o_1.length), list_a = list_a.concat(var_o_1), dep_helper_117.encode(
  list_a, param_t);
  };
  };
