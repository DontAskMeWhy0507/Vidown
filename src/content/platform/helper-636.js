// Module 636 - Savior Helper 636
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_117 = requireFn(117),
  dep_module_126 = requireFn(126),
  dep_module_15 = requireFn(15),
  dep_helper_172 = requireFn(172),
  var_s = dep_helper_117.assert;
  function var_u(param_t) {
  this.twisted = 1 != (0 | param_t.a), this.mOneA = this.twisted &&
  -1 == (0 | param_t.a), this.extended = this.mOneA, dep_helper_172.call(this, "edwards",
  param_t), this.a = new dep_module_126(param_t.a, 16).umod(this.red.m), this.a = this.a.toRed(
  this.red), this.c = new dep_module_126(param_t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(
  ), this.d = new dep_module_126(param_t.d, 16).toRed(this.red), this.dd = this.d.redAdd(
  this.d), var_s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (
  0 | param_t.c);
  }
  function var_c(param_t, param_e, param_r, param_n, param_o) {
  dep_helper_172.BasePoint.call(this, param_t, "projective"), null === param_e &&
  null === param_r && null === param_n ? (this.x = this.curve.zero, this.y = this.curve.one,
  this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) :
  (this.x = new dep_module_126(param_e, 16), this.y = new dep_module_126(param_r,
  16), this.z = param_n ? new dep_module_126(param_n, 16) : this.curve.one, this.t = param_o &&
  new dep_module_126(param_o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)),
  this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red ||
  (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red &&
  (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one,
  this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne ||
  (this.t = this.t.redMul(this.z.redInvm()))));
  }
  dep_module_15(var_u, dep_helper_172), moduleObj.exports = var_u, var_u.prototype._mulA = function (
  param_t) {
  return this.mOneA ? param_t.redNeg() : this.a.redMul(param_t);
  }
  , var_u.prototype._mulC = function (param_t) {
  return this.oneC ? param_t : this.c.redMul(param_t);
  }
  , var_u.prototype.jpoint = function (param_t, param_e, param_r, param_n) {
  return this.point(param_t, param_e, param_r, param_n);
  }
  , var_u.prototype.pointFromX = function (param_t, param_e) {
  (param_t = new dep_module_126(param_t, 16)).red || (param_t = param_t.toRed(this.red));
  var var_r = param_t.redSqr(),
  var_n = this.c2.redSub(this.a.redMul(var_r)),
  var_o = this.one.redSub(this.c2.redMul(this.d).redMul(var_r)),
  var_a = var_n.redMul(var_o.redInvm()),
  var_s_1 = var_a.redSqrt();
  if (0 !== var_s_1.redSqr().redSub(var_a).cmp(this.zero)) throw new Error("invalid point");
  var var_u_1 = var_s_1.fromRed().isOdd();
  return (param_e && !var_u_1 || !param_e && var_u_1) && (var_s_1 = var_s_1.redNeg(
  )), this.point(param_t, var_s_1);
  }
  , var_u.prototype.pointFromY = function (param_t, param_e) {
  (param_t = new dep_module_126(param_t, 16)).red || (param_t = param_t.toRed(this.red));
  var var_r = param_t.redSqr(),
  var_n = var_r.redSub(this.c2),
  var_o = var_r.redMul(this.d).redMul(this.c2).redSub(this.a),
  var_a = var_n.redMul(var_o.redInvm());
  if (0 === var_a.cmp(this.zero)) {
  if (param_e) throw new Error("invalid point");
  return this.point(this.zero, param_t);
  }
  var var_s_1 = var_a.redSqrt();
  if (0 !== var_s_1.redSqr().redSub(var_a).cmp(this.zero)) throw new Error("invalid point");
  return var_s_1.fromRed().isOdd() !== param_e && (var_s_1 = var_s_1.redNeg()), this.point(
  var_s_1, param_t);
  }
  , var_u.prototype.validate = function (param_t) {
  if (param_t.isInfinity()) return !0;
  param_t.normalize();
  var var_e = param_t.x.redSqr(),
  var_r = param_t.y.redSqr(),
  var_n = var_e.redMul(this.a).redAdd(var_r),
  var_i = this.c2.redMul(this.one.redAdd(this.d.redMul(var_e).redMul(var_r)));
  return 0 === var_n.cmp(var_i);
  }
  , dep_module_15(var_c, dep_helper_172.BasePoint), var_u.prototype.pointFromJSON = function (
  param_t) {
  return var_c.fromJSON(this, param_t);
  }
  , var_u.prototype.point = function (param_t, param_e, param_r, param_n) {
  return new var_c(this, param_t, param_e, param_r, param_n);
  }
  , var_c.fromJSON = function (param_t, param_e) {
  return new var_c(param_t, param_e[0], param_e[1], param_e[2]);
  }
  , var_c.prototype.inspect = function () {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed(
  ).toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed(
  ).toString(16, 2) + ">";
  }
  , var_c.prototype.isInfinity = function () {
  return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) ||
  this.zOne && 0 === this.y.cmp(this.curve.c));
  }
  , var_c.prototype._extDbl = function () {
  var var_t = this.x.redSqr(),
  var_e = this.y.redSqr(),
  var_r = this.z.redSqr();
  var_r = var_r.redIAdd(var_r);
  var var_n = this.curve._mulA(var_t),
  var_i = this.x.redAdd(this.y).redSqr().redISub(var_t).redISub(var_e),
  var_o = var_n.redAdd(var_e),
  var_a = var_o.redSub(var_r),
  var_s_1 = var_n.redSub(var_e),
  var_u_1 = var_i.redMul(var_a),
  var_c_1 = var_o.redMul(var_s_1),
  var_l = var_i.redMul(var_s_1),
  var_f = var_a.redMul(var_o);
  return this.curve.point(var_u_1, var_c_1, var_f, var_l);
  }
  , var_c.prototype._projDbl = function () {
  var var_t,
  var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a = this.x.redAdd(this.y).redSqr(),
  var_s_1 = this.x.redSqr(),
  var_u_1 = this.y.redSqr();
  if (this.curve.twisted) {
  var var_c_1 = (var_n = this.curve._mulA(var_s_1)).redAdd(var_u_1);
  this.zOne ? (var_t = var_a.redSub(var_s_1).redSub(var_u_1).redMul(var_c_1.redSub(
  this.curve.two)), var_e = var_c_1.redMul(var_n.redSub(var_u_1)), var_r = var_c_1.redSqr(
  ).redSub(var_c_1).redSub(var_c_1)) : (var_i = this.z.redSqr(), var_o = var_c_1.redSub(
  var_i).redISub(var_i), var_t = var_a.redSub(var_s_1).redISub(var_u_1).redMul(var_o),
  var_e = var_c_1.redMul(var_n.redSub(var_u_1)), var_r = var_c_1.redMul(var_o));
  }
  else var_n = var_s_1.redAdd(var_u_1), var_i = this.curve._mulC(this.z).redSqr(
  ), var_o = var_n.redSub(var_i).redSub(var_i), var_t = this.curve._mulC(var_a.redISub(
  var_n)).redMul(var_o), var_e = this.curve._mulC(var_n).redMul(var_s_1.redISub(
  var_u_1)), var_r = var_n.redMul(var_o);
  return this.curve.point(var_t, var_e, var_r);
  }
  , var_c.prototype.dbl = function () {
  return this.isInfinity() ? this : this.curve.extended ? this._extDbl() :
  this._projDbl();
  }
  , var_c.prototype._extAdd = function (param_t) {
  var var_e = this.y.redSub(this.x).redMul(param_t.y.redSub(param_t.x)),
  var_r = this.y.redAdd(this.x).redMul(param_t.y.redAdd(param_t.x)),
  var_n = this.t.redMul(this.curve.dd).redMul(param_t.t),
  var_i = this.z.redMul(param_t.z.redAdd(param_t.z)),
  var_o = var_r.redSub(var_e),
  var_a = var_i.redSub(var_n),
  var_s_1 = var_i.redAdd(var_n),
  var_u_1 = var_r.redAdd(var_e),
  var_c_1 = var_o.redMul(var_a),
  var_l = var_s_1.redMul(var_u_1),
  var_f = var_o.redMul(var_u_1),
  var_d = var_a.redMul(var_s_1);
  return this.curve.point(var_c_1, var_l, var_d, var_f);
  }
  , var_c.prototype._projAdd = function (param_t) {
  var var_e,
  var_r,
  var_n = this.z.redMul(param_t.z),
  var_i = var_n.redSqr(),
  var_o = this.x.redMul(param_t.x),
  var_a = this.y.redMul(param_t.y),
  var_s_1 = this.curve.d.redMul(var_o).redMul(var_a),
  var_u_1 = var_i.redSub(var_s_1),
  var_c_1 = var_i.redAdd(var_s_1),
  var_l = this.x.redAdd(this.y).redMul(param_t.x.redAdd(param_t.y)).redISub(var_o).redISub(
  var_a),
  var_f = var_n.redMul(var_u_1).redMul(var_l);
  return this.curve.twisted ? (var_e = var_n.redMul(var_c_1).redMul(var_a.redSub(
  this.curve._mulA(var_o))), var_r = var_u_1.redMul(var_c_1)) :
  (var_e = var_n.redMul(var_c_1).redMul(var_a.redSub(var_o)), var_r = this.curve._mulC(
  var_u_1).redMul(var_c_1)), this.curve.point(var_f, var_e, var_r);
  }
  , var_c.prototype.add = function (param_t) {
  return this.isInfinity() ? param_t : param_t.isInfinity() ?
  this : this.curve.extended ? this._extAdd(param_t) : this._projAdd(param_t);
  }
  , var_c.prototype.mul = function (param_t) {
  return this._hasDoubles(param_t) ? this.curve._fixedNafMul(this, param_t) :
  this.curve._wnafMul(this, param_t);
  }
  , var_c.prototype.mulAdd = function (param_t, param_e, param_r) {
  return this.curve._wnafMulAdd(1, [this, param_e], [param_t, param_r], 2, !1);
  }
  , var_c.prototype.jmulAdd = function (param_t, param_e, param_r) {
  return this.curve._wnafMulAdd(1, [this, param_e], [param_t, param_r], 2, !0);
  }
  , var_c.prototype.normalize = function () {
  if (this.zOne) return this;
  var var_t = this.z.redInvm();
  return this.x = this.x.redMul(var_t), this.y = this.y.redMul(var_t), this.t &&
  (this.t = this.t.redMul(var_t)), this.z = this.curve.one, this.zOne = !0, this;
  }
  , var_c.prototype.neg = function () {
  return this.curve.point(this.x.redNeg(), this.y, this.z, this.t &&
  this.t.redNeg());
  }
  , var_c.prototype.getX = function () {
  return this.normalize(), this.x.fromRed();
  }
  , var_c.prototype.getY = function () {
  return this.normalize(), this.y.fromRed();
  }
  , var_c.prototype.eq = function (param_t) {
  return this === param_t || 0 === this.getX().cmp(param_t.getX()) &&
  0 === this.getY().cmp(param_t.getY());
  }
  , var_c.prototype.eqXToP = function (param_t) {
  var var_e = param_t.toRed(this.curve.red).redMul(this.z);
  if (0 === this.x.cmp(var_e)) return !0;
  for (var var_r = param_t.clone(), var_n = this.curve.redN.redMul(this.z);;
  ) {
  if (var_r.iadd(this.curve.n), var_r.cmp(this.curve.p) >= 0) return !1;
  if (var_e.redIAdd(var_n), 0 === this.x.cmp(var_e)) return !0;
  }
  }
  , var_c.prototype.toP = var_c.prototype.normalize, var_c.prototype.mixedAdd = var_c.prototype.add;
  };
