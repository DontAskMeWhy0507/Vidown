// Module 644 - Savior Helper 644
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_126 = requireFn(126),
  dep_helper_645 = requireFn(645),
  dep_helper_117 = requireFn(117),
  dep_helper_435 = requireFn(435),
  dep_helper_430 = requireFn(430),
  var_u = dep_helper_117.assert,
  dep_helper_646 = requireFn(646),
  dep_helper_647 = requireFn(647);
  function var_f(param_t) {
  if (!(this instanceof var_f)) return new var_f(param_t);
  "string" == typeof param_t && (var_u(Object.prototype.hasOwnProperty.call(dep_helper_435,
  param_t), "Unknown curve " + param_t), param_t = dep_helper_435[param_t]), param_t instanceof dep_helper_435.PresetCurve &&
  (param_t = {
  curve: param_t
  }
  ), this.curve = param_t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(
  1), this.g = this.curve.g, this.g = param_t.curve.g, this.g.precompute(param_t.curve.n.bitLength(
  ) + 1), this.hash = param_t.hash || param_t.curve.hash;
  }
  moduleObj.exports = var_f, var_f.prototype.keyPair = function (param_t) {
  return new dep_helper_646(this, param_t);
  }
  , var_f.prototype.keyFromPrivate = function (param_t, param_e) {
  return dep_helper_646.fromPrivate(this, param_t, param_e);
  }
  , var_f.prototype.keyFromPublic = function (param_t, param_e) {
  return dep_helper_646.fromPublic(this, param_t, param_e);
  }
  , var_f.prototype.genKeyPair = function (param_t) {
  param_t || (param_t = {
  }
  );
  for (var var_e = new dep_helper_645({
  hash: this.hash,
  pers: param_t.pers,
  persEnc: param_t.persEnc || "utf8",
  entropy: param_t.entropy || dep_helper_430(this.hash.hmacStrength),
  entropyEnc: param_t.entropy && param_t.entropyEnc || "utf8",
  nonce: this.n.toArray()
  }
  ), var_r = this.n.byteLength(), var_o = this.n.sub(new dep_module_126(2));;
  ) {
  var var_a = new dep_module_126(var_e.generate(var_r));
  if (!(var_a.cmp(var_o) > 0)) return var_a.iaddn(1), this.keyFromPrivate(var_a);
  }
  }
  , var_f.prototype._truncateToN = function (param_t, param_e, param_r) {
  var var_i;
  if (dep_module_126.isBN(param_t) || "number" == typeof param_t) var_i = (param_t = new dep_module_126(
  param_t, 16)).byteLength();
  else if ("object" == typeof param_t) var_i = param_t.length, param_t = new dep_module_126(
  param_t, 16);
  else {
  var var_o = param_t.toString();
  var_i = var_o.length + 1 >>> 1, param_t = new dep_module_126(var_o, 16);
  }
  "number" != typeof param_r && (param_r = 8 * var_i);
  var var_a = param_r - this.n.bitLength();
  return var_a > 0 && (param_t = param_t.ushrn(var_a)), !param_e &&
  param_t.cmp(this.n) >= 0 ? param_t.sub(this.n) : param_t;
  }
  , var_f.prototype.sign = function (param_t, param_e, param_r, param_o) {
  if ("object" == typeof param_r && (param_o = param_r, param_r = null), param_o ||
  (param_o = {
  }
  ), "string" != typeof param_t && "number" != typeof param_t &&
  !dep_module_126.isBN(param_t)) {
  var_u("object" == typeof param_t && param_t && "number" == typeof param_t.length,
  "Expected message to be an array-like, a hex string, or a BN instance"), var_u(
  param_t.length >>> 0 === param_t.length);
  for (var num_a = 0;
  num_a < param_t.length;
  num_a++) var_u((255 & param_t[num_a]) === param_t[num_a]);
  }
  param_e = this.keyFromPrivate(param_e, param_r), param_t = this._truncateToN(param_t,
  !1, param_o.msgBitLength), var_u(!param_t.isNeg(), "Can not sign a negative message");
  var var_s = this.n.byteLength(),
  var_c = param_e.getPrivate().toArray("be", var_s),
  var_f_1 = param_t.toArray("be", var_s);
  var_u(new dep_module_126(var_f_1).eq(param_t), "Can not sign message");
  for (var var_d = new dep_helper_645({
  hash: this.hash,
  entropy: var_c,
  nonce: var_f_1,
  pers: param_o.pers,
  persEnc: param_o.persEnc || "utf8"
  }
  ), var_h = this.n.sub(new dep_module_126(1)), num_p = 0;;
  num_p++) {
  var var_v = param_o.k ? param_o.k(num_p) : new dep_module_126(var_d.generate(this.n.byteLength(
  )));
  if (!((var_v = this._truncateToN(var_v, !0)).cmpn(1) <= 0 ||
  var_v.cmp(var_h) >= 0)) {
  var var_m = this.g.mul(var_v);
  if (!var_m.isInfinity()) {
  var var_y = var_m.getX(),
  var_g = var_y.umod(this.n);
  if (0 !== var_g.cmpn(0)) {
  var var_b = var_v.invm(this.n).mul(var_g.mul(param_e.getPrivate()).iadd(param_t));
  if (0 !== (var_b = var_b.umod(this.n)).cmpn(0)) {
  var var_w = (var_m.getY().isOdd() ? 1 : 0) | (0 !== var_y.cmp(var_g) ?
  2 : 0);
  return param_o.canonical && var_b.cmp(this.nh) > 0 && (var_b = this.n.sub(var_b),
  var_w ^= 1), new dep_helper_647({
  r: var_g,
  s: var_b,
  recoveryParam: var_w
  }
  );
  }
  }
  }
  }
  }
  }
  , var_f.prototype.verify = function (param_t, param_e, param_r, param_n, param_i) {
  param_i || (param_i = {
  }
  ), param_t = this._truncateToN(param_t, !1, param_i.msgBitLength), param_r = this.keyFromPublic(
  param_r, param_n);
  var var_o = (param_e = new dep_helper_647(param_e, "hex")).r,
  var_a = param_e.s;
  if (var_o.cmpn(1) < 0 || var_o.cmp(this.n) >= 0) return !1;
  if (var_a.cmpn(1) < 0 || var_a.cmp(this.n) >= 0) return !1;
  var var_s,
  var_u_1 = var_a.invm(this.n),
  var_c = var_u_1.mul(param_t).umod(this.n),
  var_f_1 = var_u_1.mul(var_o).umod(this.n);
  return this.curve._maxwellTrick ? !(var_s = this.g.jmulAdd(var_c, param_r.getPublic(
  ), var_f_1)).isInfinity() && var_s.eqXToP(var_o) : !(var_s = this.g.mulAdd(var_c,
  param_r.getPublic(), var_f_1)).isInfinity() && 0 === var_s.getX().umod(this.n).cmp(
  var_o);
  }
  , var_f.prototype.recoverPubKey = function (param_t, param_e, param_r, param_i) {
  var_u((3 & param_r) === param_r, "The recovery param is more than two bits"), param_e = new dep_helper_647(
  param_e, param_i);
  var var_o = this.n,
  var_a = new dep_module_126(param_t),
  var_s = param_e.r,
  var_c = param_e.s,
  var_f_1 = 1 & param_r,
  var_d = param_r >> 1;
  if (var_s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && var_d) throw new Error(
  "Unable to find sencond key candinate");
  var_s = var_d ? this.curve.pointFromX(var_s.add(this.curve.n), var_f_1) :
  this.curve.pointFromX(var_s, var_f_1);
  var var_h = param_e.r.invm(var_o),
  var_p = var_o.sub(var_a).mul(var_h).umod(var_o),
  var_v = var_c.mul(var_h).umod(var_o);
  return this.g.mulAdd(var_p, var_s, var_v);
  }
  , var_f.prototype.getKeyRecoveryParam = function (param_t, param_e, param_r, param_n) {
  if (null !== (param_e = new dep_helper_647(param_e, param_n)).recoveryParam) return param_e.recoveryParam;
  for (var num_i = 0;
  num_i < 4;
  num_i++) {
  var var_o;
  try {
  var_o = this.recoverPubKey(param_t, param_e, num_i);
  }
  catch (var_t) {
  continue;
  }
  if (var_o.eq(param_r)) return num_i;
  }
  throw new Error("Unable to find valid recovery factor");
  };
  };
