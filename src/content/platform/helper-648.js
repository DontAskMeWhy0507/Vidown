// Module 648 - Savior Helper 648
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_436 = requireFn(436),
  dep_helper_435 = requireFn(435),
  dep_helper_117 = requireFn(117),
  var_a = dep_helper_117.assert,
  var_s = dep_helper_117.parseBytes,
  dep_helper_649 = requireFn(649),
  dep_helper_650 = requireFn(650);
  function var_l(param_t) {
  if (var_a("ed25519" === param_t, "only tested with ed25519 so far"), !(this instanceof var_l)) return new var_l(
  param_t);
  param_t = dep_helper_435[param_t].curve, this.curve = param_t, this.g = param_t.g,
  this.g.precompute(param_t.n.bitLength() + 1), this.pointClass = param_t.point(
  ).constructor, this.encodingLength = Math.ceil(param_t.n.bitLength() / 8), this.hash = dep_helper_436.sha512;
  }
  moduleObj.exports = var_l, var_l.prototype.sign = function (param_t, param_e) {
  param_t = var_s(param_t);
  var var_r = this.keyFromSecret(param_e),
  var_n = this.hashInt(var_r.messagePrefix(), param_t),
  var_i = this.g.mul(var_n),
  var_o = this.encodePoint(var_i),
  var_a_1 = this.hashInt(var_o, var_r.pubBytes(), param_t).mul(var_r.priv()),
  var_u = var_n.add(var_a_1).umod(this.curve.n);
  return this.makeSignature({
  R: var_i,
  S: var_u,
  Rencoded: var_o
  }
  );
  }
  , var_l.prototype.verify = function (param_t, param_e, param_r) {
  if (param_t = var_s(param_t), (param_e = this.makeSignature(param_e)).S().gte(
  param_e.eddsa.curve.n) || param_e.S().isNeg()) return !1;
  var var_n = this.keyFromPublic(param_r),
  var_i = this.hashInt(param_e.Rencoded(), var_n.pubBytes(), param_t),
  var_o = this.g.mul(param_e.S());
  return param_e.R().add(var_n.pub().mul(var_i)).eq(var_o);
  }
  , var_l.prototype.hashInt = function () {
  for (var var_t = this.hash(), num_e = 0;
  num_e < arguments.length;
  num_e++) var_t.update(arguments[num_e]);
  return dep_helper_117.intFromLE(var_t.digest()).umod(this.curve.n);
  }
  , var_l.prototype.keyFromPublic = function (param_t) {
  return dep_helper_649.fromPublic(this, param_t);
  }
  , var_l.prototype.keyFromSecret = function (param_t) {
  return dep_helper_649.fromSecret(this, param_t);
  }
  , var_l.prototype.makeSignature = function (param_t) {
  return param_t instanceof dep_helper_650 ? param_t : new dep_helper_650(this, param_t);
  }
  , var_l.prototype.encodePoint = function (param_t) {
  var var_e = param_t.getY().toArray("le", this.encodingLength);
  return var_e[this.encodingLength - 1] |= param_t.getX().isOdd() ?
  128 : 0, var_e;
  }
  , var_l.prototype.decodePoint = function (param_t) {
  var var_e = (param_t = dep_helper_117.parseBytes(param_t)).length - 1,
  var_r = param_t.slice(0, var_e).concat(-129 & param_t[var_e]),
  var_n = 0 != (128 & param_t[var_e]),
  var_i = dep_helper_117.intFromLE(var_r);
  return this.curve.pointFromY(var_i, var_n);
  }
  , var_l.prototype.encodeInt = function (param_t) {
  return param_t.toArray("le", this.encodingLength);
  }
  , var_l.prototype.decodeInt = function (param_t) {
  return dep_helper_117.intFromLE(param_t);
  }
  , var_l.prototype.isPoint = function (param_t) {
  return param_t instanceof this.pointClass;
  };
  };
