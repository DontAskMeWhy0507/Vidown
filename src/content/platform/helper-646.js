// Module 646 - Savior Helper 646
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_126 = requireFn(126),
  var_i = requireFn(117).assert;
  function var_o(param_t, param_e) {
  this.ec = param_t, this.priv = null, this.pub = null, param_e.priv &&
  this._importPrivate(param_e.priv, param_e.privEnc), param_e.pub &&
  this._importPublic(param_e.pub, param_e.pubEnc);
  }
  moduleObj.exports = var_o, var_o.fromPublic = function (param_t, param_e, param_r) {
  return param_e instanceof var_o ? param_e : new var_o(param_t, {
  pub: param_e,
  pubEnc: param_r
  }
  );
  }
  , var_o.fromPrivate = function (param_t, param_e, param_r) {
  return param_e instanceof var_o ? param_e : new var_o(param_t, {
  priv: param_e,
  privEnc: param_r
  }
  );
  }
  , var_o.prototype.validate = function () {
  var var_t = this.getPublic();
  return var_t.isInfinity() ? {
  result: !1,
  reason: "Invalid public key"
  }
  : var_t.validate() ? var_t.mul(this.ec.curve.n).isInfinity() ?
  {
  result: !0,
  reason: null
  }
  : {
  result: !1,
  reason: "Public key * N != O"
  }
  : {
  result: !1,
  reason: "Public key is not a point"
  };
  }
  , var_o.prototype.getPublic = function (param_t, param_e) {
  return "string" == typeof param_t && (param_e = param_t, param_t = null), this.pub ||
  (this.pub = this.ec.g.mul(this.priv)), param_e ? this.pub.encode(param_e, param_t) :
  this.pub;
  }
  , var_o.prototype.getPrivate = function (param_t) {
  return "hex" === param_t ? this.priv.toString(16, 2) : this.priv;
  }
  , var_o.prototype._importPrivate = function (param_t, param_e) {
  this.priv = new dep_module_126(param_t, param_e || 16), this.priv = this.priv.umod(
  this.ec.curve.n);
  }
  , var_o.prototype._importPublic = function (param_t, param_e) {
  if (param_t.x || param_t.y) return "mont" === this.ec.curve.type ?
  var_i(param_t.x, "Need x coordinate") : "short" !== this.ec.curve.type &&
  "edwards" !== this.ec.curve.type || var_i(param_t.x && param_t.y, "Need both x and y coordinate"),
  void (this.pub = this.ec.curve.point(param_t.x, param_t.y));
  this.pub = this.ec.curve.decodePoint(param_t, param_e);
  }
  , var_o.prototype.derive = function (param_t) {
  return param_t.validate() || var_i(param_t.validate(), "public point not validated"),
  param_t.mul(this.priv).getX();
  }
  , var_o.prototype.sign = function (param_t, param_e, param_r) {
  return this.ec.sign(param_t, this, param_e, param_r);
  }
  , var_o.prototype.verify = function (param_t, param_e, param_r) {
  return this.ec.verify(param_t, param_e, this, void 0, param_r);
  }
  , var_o.prototype.inspect = function () {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (
  this.pub && this.pub.inspect()) + " >";
  };
  };
