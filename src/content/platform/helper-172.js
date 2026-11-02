// Module 172 - Savior Helper 172
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_126 = requireFn(126),
  dep_helper_117 = requireFn(117),
  var_o = dep_helper_117.getNAF,
  var_a = dep_helper_117.getJSF,
  var_s = dep_helper_117.assert;
  function var_u(param_t, param_e) {
  this.type = param_t, this.p = new dep_module_126(param_e.p, 16), this.red = param_e.prime ?
  dep_module_126.red(param_e.prime) : dep_module_126.mont(this.p), this.zero = new dep_module_126(
  0).toRed(this.red), this.one = new dep_module_126(1).toRed(this.red), this.two = new dep_module_126(
  2).toRed(this.red), this.n = param_e.n && new dep_module_126(param_e.n, 16), this.g = param_e.g &&
  this.pointFromJSON(param_e.g, param_e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(
  4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ?
  this.n.bitLength() : 0;
  var var_r = this.n && this.p.div(this.n);
  !var_r || var_r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(
  this.red));
  }
  function var_c(param_t, param_e) {
  this.curve = param_t, this.type = param_e, this.precomputed = null;
  }
  moduleObj.exports = var_u, var_u.prototype.point = function () {
  throw new Error("Not implemented");
  }
  , var_u.prototype.validate = function () {
  throw new Error("Not implemented");
  }
  , var_u.prototype._fixedNafMul = function (param_t, param_e) {
  var_s(param_t.precomputed);
  var var_r = param_t._getDoubles(),
  var_n = var_o(param_e, 1, this._bitLength),
  var_i = (1 << var_r.step + 1) - (var_r.step % 2 == 0 ? 2 :
  1);
  var_i /= 3;
  var var_a_1,
  var_u_1,
  list_c = [];
  for (var_a_1 = 0;
  var_a_1 < var_n.length;
  var_a_1 += var_r.step) {
  var_u_1 = 0;
  for (var var_l = var_a_1 + var_r.step - 1;
  var_l >= var_a_1;
  var_l--) var_u_1 = (var_u_1 << 1) + var_n[var_l];
  list_c.push(var_u_1);
  }
  for (var var_f = this.jpoint(null, null, null), var_d = this.jpoint(null, null,
  null), var_h = var_i;
  var_h > 0;
  var_h--) {
  for (var_a_1 = 0;
  var_a_1 < list_c.length;
  var_a_1++) (var_u_1 = list_c[var_a_1]) === var_h ? var_d = var_d.mixedAdd(var_r.points[var_a_1]) :
  var_u_1 === -var_h && (var_d = var_d.mixedAdd(var_r.points[var_a_1].neg()));
  var_f = var_f.add(var_d);
  }
  return var_f.toP();
  }
  , var_u.prototype._wnafMul = function (param_t, param_e) {
  var num_r = 4,
  var_n = param_t._getNAFPoints(num_r);
  num_r = var_n.wnd;
  for (var var_i = var_n.points, var_a_1 = var_o(param_e, num_r, this._bitLength),
  var_u_1 = this.jpoint(null, null, null), var_c_1 = var_a_1.length - 1;
  var_c_1 >= 0;
  var_c_1--) {
  for (var num_l = 0;
  var_c_1 >= 0 && 0 === var_a_1[var_c_1];
  var_c_1--) num_l++;
  if (var_c_1 >= 0 && num_l++, var_u_1 = var_u_1.dblp(num_l), var_c_1 < 0) break;
  var var_f = var_a_1[var_c_1];
  var_s(0 !== var_f), var_u_1 = "affine" === param_t.type ? var_f > 0 ?
  var_u_1.mixedAdd(var_i[var_f - 1 >> 1]) : var_u_1.mixedAdd(var_i[-var_f - 1 >> 1].neg(
  )) : var_f > 0 ? var_u_1.add(var_i[var_f - 1 >> 1]) : var_u_1.add(var_i[-var_f - 1 >> 1].neg(
  ));
  }
  return "affine" === param_t.type ? var_u_1.toP() : var_u_1;
  }
  , var_u.prototype._wnafMulAdd = function (param_t, param_e, param_r, param_n, param_i) {
  var var_s_1,
  var_u_1,
  var_c_1,
  var_l = this._wnafT1,
  var_f = this._wnafT2,
  var_d = this._wnafT3,
  num_h = 0;
  for (var_s_1 = 0;
  var_s_1 < param_n;
  var_s_1++) {
  var var_p = (var_c_1 = param_e[var_s_1])._getNAFPoints(param_t);
  var_l[var_s_1] = var_p.wnd, var_f[var_s_1] = var_p.points;
  }
  for (var_s_1 = param_n - 1;
  var_s_1 >= 1;
  var_s_1 -= 2) {
  var var_v = var_s_1 - 1,
  var_m = var_s_1;
  if (1 === var_l[var_v] && 1 === var_l[var_m]) {
  var list_y = [param_e[var_v], null, null, param_e[var_m]];
  0 === param_e[var_v].y.cmp(param_e[var_m].y) ? (list_y[1] = param_e[var_v].add(
  param_e[var_m]), list_y[2] = param_e[var_v].toJ().mixedAdd(param_e[var_m].neg(
  ))) : 0 === param_e[var_v].y.cmp(param_e[var_m].y.redNeg()) ?
  (list_y[1] = param_e[var_v].toJ().mixedAdd(param_e[var_m]), list_y[2] = param_e[var_v].add(
  param_e[var_m].neg())) : (list_y[1] = param_e[var_v].toJ().mixedAdd(param_e[var_m]),
  list_y[2] = param_e[var_v].toJ().mixedAdd(param_e[var_m].neg()));
  var list_g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
  var_b = var_a(param_r[var_v], param_r[var_m]);
  for (num_h = Math.max(var_b[0].length, num_h), var_d[var_v] = new Array(num_h),
  var_d[var_m] = new Array(num_h), var_u_1 = 0;
  var_u_1 < num_h;
  var_u_1++) {
  var var_w = 0 | var_b[0][var_u_1],
  var_A = 0 | var_b[1][var_u_1];
  var_d[var_v][var_u_1] = list_g[3 * (var_w + 1) + (var_A + 1)], var_d[var_m][var_u_1] = 0,
  var_f[var_v] = list_y;
  }
  }
  else var_d[var_v] = var_o(param_r[var_v], var_l[var_v], this._bitLength), var_d[var_m] = var_o(
  param_r[var_m], var_l[var_m], this._bitLength), num_h = Math.max(var_d[var_v].length,
  num_h), num_h = Math.max(var_d[var_m].length, num_h);
  }
  var var__ = this.jpoint(null, null, null),
  var_E = this._wnafT4;
  for (var_s_1 = num_h;
  var_s_1 >= 0;
  var_s_1--) {
  for (var num_S = 0;
  var_s_1 >= 0;
  ) {
  var flag_O = !0;
  for (var_u_1 = 0;
  var_u_1 < param_n;
  var_u_1++) var_E[var_u_1] = 0 | var_d[var_u_1][var_s_1], 0 !== var_E[var_u_1] &&
  (flag_O = !1);
  if (!flag_O) break;
  num_S++, var_s_1--;
  }
  if (var_s_1 >= 0 && num_S++, var__ = var__.dblp(num_S), var_s_1 < 0) break;
  for (var_u_1 = 0;
  var_u_1 < param_n;
  var_u_1++) {
  var var_x = var_E[var_u_1];
  0 !== var_x && (var_x > 0 ? var_c_1 = var_f[var_u_1][var_x - 1 >> 1] :
  var_x < 0 && (var_c_1 = var_f[var_u_1][-var_x - 1 >> 1].neg()), var__ = "affine" === var_c_1.type ?
  var__.mixedAdd(var_c_1) : var__.add(var_c_1));
  }
  }
  for (var_s_1 = 0;
  var_s_1 < param_n;
  var_s_1++) var_f[var_s_1] = null;
  return param_i ? var__ : var__.toP();
  }
  , var_u.BasePoint = var_c, var_c.prototype.eq = function () {
  throw new Error("Not implemented");
  }
  , var_c.prototype.validate = function () {
  return this.curve.validate(this);
  }
  , var_u.prototype.decodePoint = function (param_t, param_e) {
  param_t = dep_helper_117.toArray(param_t, param_e);
  var var_r = this.p.byteLength();
  if ((4 === param_t[0] || 6 === param_t[0] || 7 === param_t[0]) &&
  param_t.length - 1 == 2 * var_r) return 6 === param_t[0] ?
  var_s(param_t[param_t.length - 1] % 2 == 0) : 7 === param_t[0] &&
  var_s(param_t[param_t.length - 1] % 2 == 1), this.point(param_t.slice(1, 1 + var_r),
  param_t.slice(1 + var_r, 1 + 2 * var_r));
  if ((2 === param_t[0] || 3 === param_t[0]) && param_t.length - 1 === var_r) return this.pointFromX(
  param_t.slice(1, 1 + var_r), 3 === param_t[0]);
  throw new Error("Unknown point format");
  }
  , var_c.prototype.encodeCompressed = function (param_t) {
  return this.encode(param_t, !0);
  }
  , var_c.prototype._encode = function (param_t) {
  var var_e = this.curve.p.byteLength(),
  var_r = this.getX().toArray("be", var_e);
  return param_t ? [this.getY().isEven() ? 2 : 3].concat(var_r) :
  [4].concat(var_r, this.getY().toArray("be", var_e));
  }
  , var_c.prototype.encode = function (param_t, param_e) {
  return dep_helper_117.encode(this._encode(param_e), param_t);
  }
  , var_c.prototype.precompute = function (param_t) {
  if (this.precomputed) return this;
  var obj_e = {
  doubles: null,
  naf: null,
  beta: null
  };
  return obj_e.naf = this._getNAFPoints(8), obj_e.doubles = this._getDoubles(4, param_t),
  obj_e.beta = this._getBeta(), this.precomputed = obj_e, this;
  }
  , var_c.prototype._hasDoubles = function (param_t) {
  if (!this.precomputed) return !1;
  var var_e = this.precomputed.doubles;
  return !!var_e && var_e.points.length >= Math.ceil((param_t.bitLength() + 1) / var_e.step);
  }
  , var_c.prototype._getDoubles = function (param_t, param_e) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var list_r = [this], var_n = this, num_i = 0;
  num_i < param_e;
  num_i += param_t) {
  for (var num_o = 0;
  num_o < param_t;
  num_o++) var_n = var_n.dbl();
  list_r.push(var_n);
  }
  return {
  step: param_t,
  points: list_r
  };
  }
  , var_c.prototype._getNAFPoints = function (param_t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var list_e = [this], var_r = (1 << param_t) - 1, var_n = 1 === var_r ?
  null : this.dbl(), num_i = 1;
  num_i < var_r;
  num_i++) list_e[num_i] = list_e[num_i - 1].add(var_n);
  return {
  wnd: param_t,
  points: list_e
  };
  }
  , var_c.prototype._getBeta = function () {
  return null;
  }
  , var_c.prototype.dblp = function (param_t) {
  for (var var_e = this, num_r = 0;
  num_r < param_t;
  num_r++) var_e = var_e.dbl();
  return var_e;
  };
  };
