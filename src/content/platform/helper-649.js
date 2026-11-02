// Module 649 - Savior Helper 649
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_117 = requireFn(117),
  var_i = dep_helper_117.assert,
  var_o = dep_helper_117.parseBytes,
  var_a = dep_helper_117.cachedProperty;
  function var_s(param_t, param_e) {
  this.eddsa = param_t, this._secret = var_o(param_e.secret), param_t.isPoint(param_e.pub) ?
  this._pub = param_e.pub : this._pubBytes = var_o(param_e.pub);
  }
  var_s.fromPublic = function (param_t, param_e) {
  return param_e instanceof var_s ? param_e : new var_s(param_t, {
  pub: param_e
  }
  );
  }
  , var_s.fromSecret = function (param_t, param_e) {
  return param_e instanceof var_s ? param_e : new var_s(param_t, {
  secret: param_e
  }
  );
  }
  , var_s.prototype.secret = function () {
  return this._secret;
  }
  , var_a(var_s, "pubBytes", function () {
  return this.eddsa.encodePoint(this.pub());
  }
  ), var_a(var_s, "pub", function () {
  return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) :
  this.eddsa.g.mul(this.priv());
  }
  ), var_a(var_s, "privBytes", function () {
  var var_t = this.eddsa,
  var_e = this.hash(),
  var_r = var_t.encodingLength - 1,
  var_n = var_e.slice(0, var_t.encodingLength);
  return var_n[0] &= 248, var_n[var_r] &= 127, var_n[var_r] |= 64, var_n;
  }
  ), var_a(var_s, "priv", function () {
  return this.eddsa.decodeInt(this.privBytes());
  }
  ), var_a(var_s, "hash", function () {
  return this.eddsa.hash().update(this.secret()).digest();
  }
  ), var_a(var_s, "messagePrefix", function () {
  return this.hash().slice(this.eddsa.encodingLength);
  }
  ), var_s.prototype.sign = function (param_t) {
  return var_i(this._secret, "KeyPair can only verify"), this.eddsa.sign(param_t,
  this);
  }
  , var_s.prototype.verify = function (param_t, param_e) {
  return this.eddsa.verify(param_t, param_e, this);
  }
  , var_s.prototype.getSecret = function (param_t) {
  return var_i(this._secret, "KeyPair is public only"), dep_helper_117.encode(this.secret(
  ), param_t);
  }
  , var_s.prototype.getPublic = function (param_t) {
  return dep_helper_117.encode(this.pubBytes(), param_t);
  }
  , moduleObj.exports = var_s;
  };
