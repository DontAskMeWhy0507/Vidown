// Module 634 - Savior Helper 634
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_117 = requireFn(117),
  dep_module_126 = requireFn(126),
  dep_module_15 = requireFn(15),
  dep_helper_172 = requireFn(172),
  var_s = dep_helper_117.assert;
  function var_u(param_t) {
  dep_helper_172.call(this, "short", param_t), this.a = new dep_module_126(param_t.a,
  16).toRed(this.red), this.b = new dep_module_126(param_t.b, 16).toRed(this.red),
  this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed(
  ).sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(param_t), this._endoWnafT1 = new Array(
  4), this._endoWnafT2 = new Array(4);
  }
  function var_c(param_t, param_e, param_r, param_n) {
  dep_helper_172.BasePoint.call(this, param_t, "affine"), null === param_e &&
  null === param_r ? (this.x = null, this.y = null, this.inf = !0) :
  (this.x = new dep_module_126(param_e, 16), this.y = new dep_module_126(param_r,
  16), param_n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
  this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red ||
  (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
  }
  function var_l(param_t, param_e, param_r, param_n) {
  dep_helper_172.BasePoint.call(this, param_t, "jacobian"), null === param_e &&
  null === param_r && null === param_n ? (this.x = this.curve.one, this.y = this.curve.one,
  this.z = new dep_module_126(0)) : (this.x = new dep_module_126(param_e, 16), this.y = new dep_module_126(
  param_r, 16), this.z = new dep_module_126(param_n, 16)), this.x.red ||
  (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(
  this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
  }
  dep_module_15(var_u, dep_helper_172), moduleObj.exports = var_u, var_u.prototype._getEndomorphism = function (
  param_t) {
  if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
  var var_e, var_r;
  if (param_t.beta) var_e = new dep_module_126(param_t.beta, 16).toRed(this.red);
  else {
  var var_n = this._getEndoRoots(this.p);
  var_e = (var_e = var_n[0].cmp(var_n[1]) < 0 ? var_n[0] : var_n[1]).toRed(this.red);
  }
  if (param_t.lambda) var_r = new dep_module_126(param_t.lambda, 16);
  else {
  var var_o = this._getEndoRoots(this.n);
  0 === this.g.mul(var_o[0]).x.cmp(this.g.x.redMul(var_e)) ?
  var_r = var_o[0] : (var_r = var_o[1], var_s(0 === this.g.mul(var_r).x.cmp(this.g.x.redMul(
  var_e))));
  }
  return {
  beta: var_e,
  lambda: var_r,
  basis: param_t.basis ? param_t.basis.map(function (param_t_1) {
  return {
  a: new dep_module_126(param_t_1.a, 16),
  b: new dep_module_126(param_t_1.b, 16)
  };
  }
  ) : this._getEndoBasis(var_r)
  };
  }
  }
  , var_u.prototype._getEndoRoots = function (param_t) {
  var var_e = param_t === this.p ? this.red : dep_module_126.mont(param_t),
  var_r = new dep_module_126(2).toRed(var_e).redInvm(),
  var_n = var_r.redNeg(),
  var_o = new dep_module_126(3).toRed(var_e).redNeg().redSqrt().redMul(var_r);
  return [var_n.redAdd(var_o).fromRed(), var_n.redSub(var_o).fromRed()];
  }
  , var_u.prototype._getEndoBasis = function (param_t) {
  for (var var_e, var_r, var_n, var_o, var_a, var_s_1, var_u_1, var_c_1, var_l_1,
  var_f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), var_d = param_t, var_h = this.n.clone(
  ), var_p = new dep_module_126(1), var_v = new dep_module_126(0), var_m = new dep_module_126(
  0), var_y = new dep_module_126(1), num_g = 0;
  0 !== var_d.cmpn(0);
  ) {
  var var_b = var_h.div(var_d);
  var_c_1 = var_h.sub(var_b.mul(var_d)), var_l_1 = var_m.sub(var_b.mul(var_p));
  var var_w = var_y.sub(var_b.mul(var_v));
  if (!var_n && var_c_1.cmp(var_f) < 0) var_e = var_u_1.neg(), var_r = var_p, var_n = var_c_1.neg(
  ), var_o = var_l_1;
  else if (var_n && 2 == ++num_g) break;
  var_u_1 = var_c_1, var_h = var_d, var_d = var_c_1, var_m = var_p, var_p = var_l_1,
  var_y = var_v, var_v = var_w;
  }
  var_a = var_c_1.neg(), var_s_1 = var_l_1;
  var var_A = var_n.sqr().add(var_o.sqr());
  return var_a.sqr().add(var_s_1.sqr()).cmp(var_A) >= 0 && (var_a = var_e, var_s_1 = var_r),
  var_n.negative && (var_n = var_n.neg(), var_o = var_o.neg()), var_a.negative &&
  (var_a = var_a.neg(), var_s_1 = var_s_1.neg()), [{
  a: var_n,
  b: var_o
  }
  , {
  a: var_a,
  b: var_s_1
  }
  ];
  }
  , var_u.prototype._endoSplit = function (param_t) {
  var var_e = this.endo.basis,
  var_r = var_e[0],
  var_n = var_e[1],
  var_i = var_n.b.mul(param_t).divRound(this.n),
  var_o = var_r.b.neg().mul(param_t).divRound(this.n),
  var_a = var_i.mul(var_r.a),
  var_s_1 = var_o.mul(var_n.a),
  var_u_1 = var_i.mul(var_r.b),
  var_c_1 = var_o.mul(var_n.b);
  return {
  k1: param_t.sub(var_a).sub(var_s_1),
  k2: var_u_1.add(var_c_1).neg()
  };
  }
  , var_u.prototype.pointFromX = function (param_t, param_e) {
  (param_t = new dep_module_126(param_t, 16)).red || (param_t = param_t.toRed(this.red));
  var var_r = param_t.redSqr().redMul(param_t).redIAdd(param_t.redMul(this.a)).redIAdd(
  this.b),
  var_n = var_r.redSqrt();
  if (0 !== var_n.redSqr().redSub(var_r).cmp(this.zero)) throw new Error("invalid point");
  var var_o = var_n.fromRed().isOdd();
  return (param_e && !var_o || !param_e && var_o) && (var_n = var_n.redNeg()), this.point(
  param_t, var_n);
  }
  , var_u.prototype.validate = function (param_t) {
  if (param_t.inf) return !0;
  var var_e = param_t.x,
  var_r = param_t.y,
  var_n = this.a.redMul(var_e),
  var_i = var_e.redSqr().redMul(var_e).redIAdd(var_n).redIAdd(this.b);
  return 0 === var_r.redSqr().redISub(var_i).cmpn(0);
  }
  , var_u.prototype._endoWnafMulAdd = function (param_t, param_e, param_r) {
  for (var var_n = this._endoWnafT1, var_i = this._endoWnafT2, num_o = 0;
  num_o < param_t.length;
  num_o++) {
  var var_a = this._endoSplit(param_e[num_o]),
  var_s_1 = param_t[num_o],
  var_u_1 = var_s_1._getBeta();
  var_a.k1.negative && (var_a.k1.ineg(), var_s_1 = var_s_1.neg(!0)), var_a.k2.negative &&
  (var_a.k2.ineg(), var_u_1 = var_u_1.neg(!0)), var_n[2 * num_o] = var_s_1, var_n[2 * num_o + 1] = var_u_1,
  var_i[2 * num_o] = var_a.k1, var_i[2 * num_o + 1] = var_a.k2;
  }
  for (var var_c_1 = this._wnafMulAdd(1, var_n, var_i, 2 * num_o, param_r), num_l = 0;
  num_l < 2 * num_o;
  num_l++) var_n[num_l] = null, var_i[num_l] = null;
  return var_c_1;
  }
  , dep_module_15(var_c, dep_helper_172.BasePoint), var_u.prototype.point = function (
  param_t, param_e, param_r) {
  return new var_c(this, param_t, param_e, param_r);
  }
  , var_u.prototype.pointFromJSON = function (param_t, param_e) {
  return var_c.fromJSON(this, param_t, param_e);
  }
  , var_c.prototype._getBeta = function () {
  if (this.curve.endo) {
  var var_t = this.precomputed;
  if (var_t && var_t.beta) return var_t.beta;
  var var_e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
  if (var_t) {
  var var_r = this.curve,
  fn_n = function (param_t) {
  return var_r.point(param_t.x.redMul(var_r.endo.beta), param_t.y);
  };
  var_t.beta = var_e, var_e.precomputed = {
  beta: null,
  naf: var_t.naf && {
  wnd: var_t.naf.wnd,
  points: var_t.naf.points.map(fn_n)
  }
  ,
  doubles: var_t.doubles && {
  step: var_t.doubles.step,
  points: var_t.doubles.points.map(fn_n)
  }
  };
  }
  return var_e;
  }
  }
  , var_c.prototype.toJSON = function () {
  return this.precomputed ? [this.x, this.y, this.precomputed &&
  {
  doubles: this.precomputed.doubles && {
  step: this.precomputed.doubles.step,
  points: this.precomputed.doubles.points.slice(1)
  }
  ,
  naf: this.precomputed.naf && {
  wnd: this.precomputed.naf.wnd,
  points: this.precomputed.naf.points.slice(1)
  }
  }
  ] : [this.x, this.y];
  }
  , var_c.fromJSON = function (param_t, param_e, param_r) {
  "string" == typeof param_e && (param_e = JSON.parse(param_e));
  var var_n = param_t.point(param_e[0], param_e[1], param_r);
  if (!param_e[2]) return var_n;
  function var_i(param_e_1) {
  return param_t.point(param_e_1[0], param_e_1[1], param_r);
  }
  var var_o = param_e[2];
  return var_n.precomputed = {
  beta: null,
  doubles: var_o.doubles && {
  step: var_o.doubles.step,
  points: [var_n].concat(var_o.doubles.points.map(var_i))
  }
  ,
  naf: var_o.naf && {
  wnd: var_o.naf.wnd,
  points: [var_n].concat(var_o.naf.points.map(var_i))
  }
  }
  , var_n;
  }
  , var_c.prototype.inspect = function () {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed(
  ).toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
  }
  , var_c.prototype.isInfinity = function () {
  return this.inf;
  }
  , var_c.prototype.add = function (param_t) {
  if (this.inf) return param_t;
  if (param_t.inf) return this;
  if (this.eq(param_t)) return this.dbl();
  if (this.neg().eq(param_t)) return this.curve.point(null, null);
  if (0 === this.x.cmp(param_t.x)) return this.curve.point(null, null);
  var var_e = this.y.redSub(param_t.y);
  0 !== var_e.cmpn(0) && (var_e = var_e.redMul(this.x.redSub(param_t.x).redInvm(
  )));
  var var_r = var_e.redSqr().redISub(this.x).redISub(param_t.x),
  var_n = var_e.redMul(this.x.redSub(var_r)).redISub(this.y);
  return this.curve.point(var_r, var_n);
  }
  , var_c.prototype.dbl = function () {
  if (this.inf) return this;
  var var_t = this.y.redAdd(this.y);
  if (0 === var_t.cmpn(0)) return this.curve.point(null, null);
  var var_e = this.curve.a,
  var_r = this.x.redSqr(),
  var_n = var_t.redInvm(),
  var_i = var_r.redAdd(var_r).redIAdd(var_r).redIAdd(var_e).redMul(var_n),
  var_o = var_i.redSqr().redISub(this.x.redAdd(this.x)),
  var_a = var_i.redMul(this.x.redSub(var_o)).redISub(this.y);
  return this.curve.point(var_o, var_a);
  }
  , var_c.prototype.getX = function () {
  return this.x.fromRed();
  }
  , var_c.prototype.getY = function () {
  return this.y.fromRed();
  }
  , var_c.prototype.mul = function (param_t) {
  return param_t = new dep_module_126(param_t, 16), this.isInfinity() ?
  this : this._hasDoubles(param_t) ? this.curve._fixedNafMul(this, param_t) :
  this.curve.endo ? this.curve._endoWnafMulAdd([this], [param_t]) :
  this.curve._wnafMul(this, param_t);
  }
  , var_c.prototype.mulAdd = function (param_t, param_e, param_r) {
  var list_n = [this, param_e],
  list_i = [param_t, param_r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(list_n, list_i) :
  this.curve._wnafMulAdd(1, list_n, list_i, 2);
  }
  , var_c.prototype.jmulAdd = function (param_t, param_e, param_r) {
  var list_n = [this, param_e],
  list_i = [param_t, param_r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(list_n, list_i, !0) :
  this.curve._wnafMulAdd(1, list_n, list_i, 2, !0);
  }
  , var_c.prototype.eq = function (param_t) {
  return this === param_t || this.inf === param_t.inf && (this.inf ||
  0 === this.x.cmp(param_t.x) && 0 === this.y.cmp(param_t.y));
  }
  , var_c.prototype.neg = function (param_t) {
  if (this.inf) return this;
  var var_e = this.curve.point(this.x, this.y.redNeg());
  if (param_t && this.precomputed) {
  var var_r = this.precomputed,
  fn_n = function (param_t_1) {
  return param_t_1.neg();
  };
  var_e.precomputed = {
  naf: var_r.naf && {
  wnd: var_r.naf.wnd,
  points: var_r.naf.points.map(fn_n)
  }
  ,
  doubles: var_r.doubles && {
  step: var_r.doubles.step,
  points: var_r.doubles.points.map(fn_n)
  }
  };
  }
  return var_e;
  }
  , var_c.prototype.toJ = function () {
  return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x,
  this.y, this.curve.one);
  }
  , dep_module_15(var_l, dep_helper_172.BasePoint), var_u.prototype.jpoint = function (
  param_t, param_e, param_r) {
  return new var_l(this, param_t, param_e, param_r);
  }
  , var_l.prototype.toP = function () {
  if (this.isInfinity()) return this.curve.point(null, null);
  var var_t = this.z.redInvm(),
  var_e = var_t.redSqr(),
  var_r = this.x.redMul(var_e),
  var_n = this.y.redMul(var_e).redMul(var_t);
  return this.curve.point(var_r, var_n);
  }
  , var_l.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }
  , var_l.prototype.add = function (param_t) {
  if (this.isInfinity()) return param_t;
  if (param_t.isInfinity()) return this;
  var var_e = param_t.z.redSqr(),
  var_r = this.z.redSqr(),
  var_n = this.x.redMul(var_e),
  var_i = param_t.x.redMul(var_r),
  var_o = this.y.redMul(var_e.redMul(param_t.z)),
  var_a = param_t.y.redMul(var_r.redMul(this.z)),
  var_s_1 = var_n.redSub(var_i),
  var_u_1 = var_o.redSub(var_a);
  if (0 === var_s_1.cmpn(0)) return 0 !== var_u_1.cmpn(0) ? this.curve.jpoint(null,
  null, null) : this.dbl();
  var var_c_1 = var_s_1.redSqr(),
  var_l_1 = var_c_1.redMul(var_s_1),
  var_f = var_n.redMul(var_c_1),
  var_d = var_u_1.redSqr().redIAdd(var_l_1).redISub(var_f).redISub(var_f),
  var_h = var_u_1.redMul(var_f.redISub(var_d)).redISub(var_o.redMul(var_l_1)),
  var_p = this.z.redMul(param_t.z).redMul(var_s_1);
  return this.curve.jpoint(var_d, var_h, var_p);
  }
  , var_l.prototype.mixedAdd = function (param_t) {
  if (this.isInfinity()) return param_t.toJ();
  if (param_t.isInfinity()) return this;
  var var_e = this.z.redSqr(),
  var_r = this.x,
  var_n = param_t.x.redMul(var_e),
  var_i = this.y,
  var_o = param_t.y.redMul(var_e).redMul(this.z),
  var_a = var_r.redSub(var_n),
  var_s_1 = var_i.redSub(var_o);
  if (0 === var_a.cmpn(0)) return 0 !== var_s_1.cmpn(0) ? this.curve.jpoint(null,
  null, null) : this.dbl();
  var var_u_1 = var_a.redSqr(),
  var_c_1 = var_u_1.redMul(var_a),
  var_l_1 = var_r.redMul(var_u_1),
  var_f = var_s_1.redSqr().redIAdd(var_c_1).redISub(var_l_1).redISub(var_l_1),
  var_d = var_s_1.redMul(var_l_1.redISub(var_f)).redISub(var_i.redMul(var_c_1)),
  var_h = this.z.redMul(var_a);
  return this.curve.jpoint(var_f, var_d, var_h);
  }
  , var_l.prototype.dblp = function (param_t) {
  if (0 === param_t) return this;
  if (this.isInfinity()) return this;
  if (!param_t) return this.dbl();
  var var_e;
  if (this.curve.zeroA || this.curve.threeA) {
  var var_r = this;
  for (var_e = 0;
  var_e < param_t;
  var_e++) var_r = var_r.dbl();
  return var_r;
  }
  var var_n = this.curve.a,
  var_i = this.curve.tinv,
  var_o = this.x,
  var_a = this.y,
  var_s_1 = this.z,
  var_u_1 = var_s_1.redSqr().redSqr(),
  var_c_1 = var_a.redAdd(var_a);
  for (var_e = 0;
  var_e < param_t;
  var_e++) {
  var var_l_1 = var_o.redSqr(),
  var_f = var_c_1.redSqr(),
  var_d = var_f.redSqr(),
  var_h = var_l_1.redAdd(var_l_1).redIAdd(var_l_1).redIAdd(var_n.redMul(var_u_1)),
  var_p = var_o.redMul(var_f),
  var_v = var_h.redSqr().redISub(var_p.redAdd(var_p)),
  var_m = var_p.redISub(var_v),
  var_y = var_h.redMul(var_m);
  var_y = var_y.redIAdd(var_y).redISub(var_d);
  var var_g = var_c_1.redMul(var_s_1);
  var_e + 1 < param_t && (var_u_1 = var_u_1.redMul(var_d)), var_o = var_v, var_s_1 = var_g,
  var_c_1 = var_y;
  }
  return this.curve.jpoint(var_o, var_c_1.redMul(var_i), var_s_1);
  }
  , var_l.prototype.dbl = function () {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() :
  this.curve.threeA ? this._threeDbl() : this._dbl();
  }
  , var_l.prototype._zeroDbl = function () {
  var var_t, var_e, var_r;
  if (this.zOne) {
  var var_n = this.x.redSqr(),
  var_i = this.y.redSqr(),
  var_o = var_i.redSqr(),
  var_a = this.x.redAdd(var_i).redSqr().redISub(var_n).redISub(var_o);
  var_a = var_a.redIAdd(var_a);
  var var_s_1 = var_n.redAdd(var_n).redIAdd(var_n),
  var_u_1 = var_s_1.redSqr().redISub(var_a).redISub(var_a),
  var_c_1 = var_o.redIAdd(var_o);
  var_c_1 = (var_c_1 = var_c_1.redIAdd(var_c_1)).redIAdd(var_c_1), var_t = var_u_1,
  var_e = var_s_1.redMul(var_a.redISub(var_u_1)).redISub(var_c_1), var_r = this.y.redAdd(
  this.y);
  }
  else {
  var var_l_1 = this.x.redSqr(),
  var_f = this.y.redSqr(),
  var_d = var_f.redSqr(),
  var_h = this.x.redAdd(var_f).redSqr().redISub(var_l_1).redISub(var_d);
  var_h = var_h.redIAdd(var_h);
  var var_p = var_l_1.redAdd(var_l_1).redIAdd(var_l_1),
  var_v = var_p.redSqr(),
  var_m = var_d.redIAdd(var_d);
  var_m = (var_m = var_m.redIAdd(var_m)).redIAdd(var_m), var_t = var_v.redISub(var_h).redISub(
  var_h), var_e = var_p.redMul(var_h.redISub(var_t)).redISub(var_m), var_r = (var_r = this.y.redMul(
  this.z)).redIAdd(var_r);
  }
  return this.curve.jpoint(var_t, var_e, var_r);
  }
  , var_l.prototype._threeDbl = function () {
  var var_t, var_e, var_r;
  if (this.zOne) {
  var var_n = this.x.redSqr(),
  var_i = this.y.redSqr(),
  var_o = var_i.redSqr(),
  var_a = this.x.redAdd(var_i).redSqr().redISub(var_n).redISub(var_o);
  var_a = var_a.redIAdd(var_a);
  var var_s_1 = var_n.redAdd(var_n).redIAdd(var_n).redIAdd(this.curve.a),
  var_u_1 = var_s_1.redSqr().redISub(var_a).redISub(var_a);
  var_t = var_u_1;
  var var_c_1 = var_o.redIAdd(var_o);
  var_c_1 = (var_c_1 = var_c_1.redIAdd(var_c_1)).redIAdd(var_c_1), var_e = var_s_1.redMul(
  var_a.redISub(var_u_1)).redISub(var_c_1), var_r = this.y.redAdd(this.y);
  }
  else {
  var var_l_1 = this.z.redSqr(),
  var_f = this.y.redSqr(),
  var_d = this.x.redMul(var_f),
  var_h = this.x.redSub(var_l_1).redMul(this.x.redAdd(var_l_1));
  var_h = var_h.redAdd(var_h).redIAdd(var_h);
  var var_p = var_d.redIAdd(var_d),
  var_v = (var_p = var_p.redIAdd(var_p)).redAdd(var_p);
  var_t = var_h.redSqr().redISub(var_v), var_r = this.y.redAdd(this.z).redSqr().redISub(
  var_f).redISub(var_l_1);
  var var_m = var_f.redSqr();
  var_m = (var_m = (var_m = var_m.redIAdd(var_m)).redIAdd(var_m)).redIAdd(var_m),
  var_e = var_h.redMul(var_p.redISub(var_t)).redISub(var_m);
  }
  return this.curve.jpoint(var_t, var_e, var_r);
  }
  , var_l.prototype._dbl = function () {
  var var_t = this.curve.a,
  var_e = this.x,
  var_r = this.y,
  var_n = this.z,
  var_i = var_n.redSqr().redSqr(),
  var_o = var_e.redSqr(),
  var_a = var_r.redSqr(),
  var_s_1 = var_o.redAdd(var_o).redIAdd(var_o).redIAdd(var_t.redMul(var_i)),
  var_u_1 = var_e.redAdd(var_e),
  var_c_1 = (var_u_1 = var_u_1.redIAdd(var_u_1)).redMul(var_a),
  var_l_1 = var_s_1.redSqr().redISub(var_c_1.redAdd(var_c_1)),
  var_f = var_c_1.redISub(var_l_1),
  var_d = var_a.redSqr();
  var_d = (var_d = (var_d = var_d.redIAdd(var_d)).redIAdd(var_d)).redIAdd(var_d);
  var var_h = var_s_1.redMul(var_f).redISub(var_d),
  var_p = var_r.redAdd(var_r).redMul(var_n);
  return this.curve.jpoint(var_l_1, var_h, var_p);
  }
  , var_l.prototype.trpl = function () {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var var_t = this.x.redSqr(),
  var_e = this.y.redSqr(),
  var_r = this.z.redSqr(),
  var_n = var_e.redSqr(),
  var_i = var_t.redAdd(var_t).redIAdd(var_t),
  var_o = var_i.redSqr(),
  var_a = this.x.redAdd(var_e).redSqr().redISub(var_t).redISub(var_n),
  var_s_1 = (var_a = (var_a = (var_a = var_a.redIAdd(var_a)).redAdd(var_a).redIAdd(
  var_a)).redISub(var_o)).redSqr(),
  var_u_1 = var_n.redIAdd(var_n);
  var_u_1 = (var_u_1 = (var_u_1 = var_u_1.redIAdd(var_u_1)).redIAdd(var_u_1)).redIAdd(
  var_u_1);
  var var_c_1 = var_i.redIAdd(var_a).redSqr().redISub(var_o).redISub(var_s_1).redISub(
  var_u_1),
  var_l_1 = var_e.redMul(var_c_1);
  var_l_1 = (var_l_1 = var_l_1.redIAdd(var_l_1)).redIAdd(var_l_1);
  var var_f = this.x.redMul(var_s_1).redISub(var_l_1);
  var_f = (var_f = var_f.redIAdd(var_f)).redIAdd(var_f);
  var var_d = this.y.redMul(var_c_1.redMul(var_u_1.redISub(var_c_1)).redISub(var_a.redMul(
  var_s_1)));
  var_d = (var_d = (var_d = var_d.redIAdd(var_d)).redIAdd(var_d)).redIAdd(var_d);
  var var_h = this.z.redAdd(var_a).redSqr().redISub(var_r).redISub(var_s_1);
  return this.curve.jpoint(var_f, var_d, var_h);
  }
  , var_l.prototype.mul = function (param_t, param_e) {
  return param_t = new dep_module_126(param_t, param_e), this.curve._wnafMul(this,
  param_t);
  }
  , var_l.prototype.eq = function (param_t) {
  if ("affine" === param_t.type) return this.eq(param_t.toJ());
  if (this === param_t) return !0;
  var var_e = this.z.redSqr(),
  var_r = param_t.z.redSqr();
  if (0 !== this.x.redMul(var_r).redISub(param_t.x.redMul(var_e)).cmpn(0)) return !1;
  var var_n = var_e.redMul(this.z),
  var_i = var_r.redMul(param_t.z);
  return 0 === this.y.redMul(var_i).redISub(param_t.y.redMul(var_n)).cmpn(0);
  }
  , var_l.prototype.eqXToP = function (param_t) {
  var var_e = this.z.redSqr(),
  var_r = param_t.toRed(this.curve.red).redMul(var_e);
  if (0 === this.x.cmp(var_r)) return !0;
  for (var var_n = param_t.clone(), var_i = this.curve.redN.redMul(var_e);;
  ) {
  if (var_n.iadd(this.curve.n), var_n.cmp(this.curve.p) >= 0) return !1;
  if (var_r.redIAdd(var_i), 0 === this.x.cmp(var_r)) return !0;
  }
  }
  , var_l.prototype.inspect = function () {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(
  16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
  }
  , var_l.prototype.isInfinity = function () {
  return 0 === this.z.cmpn(0);
  };
  };
