// Module 645 - Savior Helper 645
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_436 = requireFn(436),
  dep_helper_492 = requireFn(492),
  dep_helper_116 = requireFn(116);
  function var_a(param_t) {
  if (!(this instanceof var_a)) return new var_a(param_t);
  this.hash = param_t.hash, this.predResist = !!param_t.predResist, this.outLen = this.hash.outSize,
  this.minEntropy = param_t.minEntropy || this.hash.hmacStrength, this._reseed = null,
  this.reseedInterval = null, this.K = null, this.V = null;
  var var_e = dep_helper_492.toArray(param_t.entropy, param_t.entropyEnc ||
  "hex"),
  var_r = dep_helper_492.toArray(param_t.nonce, param_t.nonceEnc ||
  "hex"),
  var_n = dep_helper_492.toArray(param_t.pers, param_t.persEnc ||
  "hex");
  dep_helper_116(var_e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
  this._init(var_e, var_r, var_n);
  }
  moduleObj.exports = var_a, var_a.prototype._init = function (param_t, param_e,
  param_r) {
  var var_n = param_t.concat(param_e).concat(param_r);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var num_i = 0;
  num_i < this.V.length;
  num_i++) this.K[num_i] = 0, this.V[num_i] = 1;
  this._update(var_n), this._reseed = 1, this.reseedInterval = 281474976710656;
  }
  , var_a.prototype._hmac = function () {
  return new dep_helper_436.hmac(this.hash, this.K);
  }
  , var_a.prototype._update = function (param_t) {
  var var_e = this._hmac().update(this.V).update([0]);
  param_t && (var_e = var_e.update(param_t)), this.K = var_e.digest(), this.V = this._hmac(
  ).update(this.V).digest(), param_t && (this.K = this._hmac().update(this.V).update(
  [1]).update(param_t).digest(), this.V = this._hmac().update(this.V).digest());
  }
  , var_a.prototype.reseed = function (param_t, param_e, param_r, param_n) {
  "string" != typeof param_e && (param_n = param_r, param_r = param_e, param_e = null),
  param_t = dep_helper_492.toArray(param_t, param_e), param_r = dep_helper_492.toArray(
  param_r, param_n), dep_helper_116(param_t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
  this._update(param_t.concat(param_r || [])), this._reseed = 1;
  }
  , var_a.prototype.generate = function (param_t, param_e, param_r, param_n) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  "string" != typeof param_e && (param_n = param_r, param_r = param_e, param_e = null),
  param_r && (param_r = dep_helper_492.toArray(param_r, param_n ||
  "hex"), this._update(param_r));
  for (var list_o = [];
  list_o.length < param_t;
  ) this.V = this._hmac().update(this.V).digest(), list_o = list_o.concat(this.V);
  var var_a_1 = list_o.slice(0, param_t);
  return this._update(param_r), this._reseed++, dep_helper_492.encode(var_a_1, param_e);
  };
  };
