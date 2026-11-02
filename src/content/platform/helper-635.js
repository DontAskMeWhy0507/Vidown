// Module 635 - Savior Helper 635
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_126 = requireFn(126),
  dep_module_15 = requireFn(15),
  dep_helper_172 = requireFn(172),
  dep_helper_117 = requireFn(117);
  function var_s(param_t) {
  dep_helper_172.call(this, "mont", param_t), this.a = new dep_module_126(param_t.a,
  16).toRed(this.red), this.b = new dep_module_126(param_t.b, 16).toRed(this.red),
  this.i4 = new dep_module_126(4).toRed(this.red).redInvm(), this.two = new dep_module_126(
  2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
  }
  function var_u(param_t, param_e, param_r) {
  dep_helper_172.BasePoint.call(this, param_t, "projective"), null === param_e &&
  null === param_r ? (this.x = this.curve.one, this.z = this.curve.zero) :
  (this.x = new dep_module_126(param_e, 16), this.z = new dep_module_126(param_r,
  16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red ||
  (this.z = this.z.toRed(this.curve.red)));
  }
  dep_module_15(var_s, dep_helper_172), moduleObj.exports = var_s, var_s.prototype.validate = function (
  param_t) {
  var var_e = param_t.normalize().x,
  var_r = var_e.redSqr(),
  var_n = var_r.redMul(var_e).redAdd(var_r.redMul(this.a)).redAdd(var_e);
  return 0 === var_n.redSqrt().redSqr().cmp(var_n);
  }
  , dep_module_15(var_u, dep_helper_172.BasePoint), var_s.prototype.decodePoint = function (
  param_t, param_e) {
  return this.point(dep_helper_117.toArray(param_t, param_e), 1);
  }
  , var_s.prototype.point = function (param_t, param_e) {
  return new var_u(this, param_t, param_e);
  }
  , var_s.prototype.pointFromJSON = function (param_t) {
  return var_u.fromJSON(this, param_t);
  }
  , var_u.prototype.precompute = function () {
  }
  , var_u.prototype._encode = function () {
  return this.getX().toArray("be", this.curve.p.byteLength());
  }
  , var_u.fromJSON = function (param_t, param_e) {
  return new var_u(param_t, param_e[0], param_e[1] || param_t.one);
  }
  , var_u.prototype.inspect = function () {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed(
  ).toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  }
  , var_u.prototype.isInfinity = function () {
  return 0 === this.z.cmpn(0);
  }
  , var_u.prototype.dbl = function () {
  var var_t = this.x.redAdd(this.z).redSqr(),
  var_e = this.x.redSub(this.z).redSqr(),
  var_r = var_t.redSub(var_e),
  var_n = var_t.redMul(var_e),
  var_i = var_r.redMul(var_e.redAdd(this.curve.a24.redMul(var_r)));
  return this.curve.point(var_n, var_i);
  }
  , var_u.prototype.add = function () {
  throw new Error("Not supported on Montgomery curve");
  }
  , var_u.prototype.diffAdd = function (param_t, param_e) {
  var var_r = this.x.redAdd(this.z),
  var_n = this.x.redSub(this.z),
  var_i = param_t.x.redAdd(param_t.z),
  var_o = param_t.x.redSub(param_t.z).redMul(var_r),
  var_a = var_i.redMul(var_n),
  var_s_1 = param_e.z.redMul(var_o.redAdd(var_a).redSqr()),
  var_u_1 = param_e.x.redMul(var_o.redISub(var_a).redSqr());
  return this.curve.point(var_s_1, var_u_1);
  }
  , var_u.prototype.mul = function (param_t) {
  for (var var_e = param_t.clone(), var_r = this, var_n = this.curve.point(null,
  null), list_i = [];
  0 !== var_e.cmpn(0);
  var_e.iushrn(1)) list_i.push(var_e.andln(1));
  for (var var_o = list_i.length - 1;
  var_o >= 0;
  var_o--) 0 === list_i[var_o] ? (var_r = var_r.diffAdd(var_n, this), var_n = var_n.dbl(
  )) : (var_n = var_r.diffAdd(var_n, this), var_r = var_r.dbl());
  return var_n;
  }
  , var_u.prototype.mulAdd = function () {
  throw new Error("Not supported on Montgomery curve");
  }
  , var_u.prototype.jumlAdd = function () {
  throw new Error("Not supported on Montgomery curve");
  }
  , var_u.prototype.eq = function (param_t) {
  return 0 === this.getX().cmp(param_t.getX());
  }
  , var_u.prototype.normalize = function () {
  return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
  }
  , var_u.prototype.getX = function () {
  return this.normalize(), this.x.fromRed();
  };
  };
