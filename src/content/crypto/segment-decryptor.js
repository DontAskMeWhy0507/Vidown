// Module 614 - Savior Segment Decryptor
export default function (moduleObj, exportsObj, requireFn) {
  var dep_aes_stream_decipherer_2 = requireFn(482),
  var_i = requireFn(25).Buffer,
  dep_helper_429 = requireFn(429),
  dep_aes_stream_decipherer_3 = requireFn(483),
  dep_helper_130 = requireFn(130),
  dep_signature_verifier = requireFn(170),
  dep_helper_171 = requireFn(171);
  function var_l(param_t, param_e, param_r) {
  dep_helper_130.call(this), this._cache = new var_f(), this._last = void 0, this._cipher = new dep_signature_verifier.AES(
  param_e), this._prev = var_i.from(param_r), this._mode = param_t, this._autopadding = !0;
  }
  function var_f() {
  this.cache = var_i.allocUnsafe(0);
  }
  function var_d(param_t, param_e, param_r) {
  var var_s = dep_helper_429[param_t.toLowerCase()];
  if (!var_s) throw new TypeError("invalid suite type");
  if ("string" == typeof param_r && (param_r = var_i.from(param_r)), "GCM" !== var_s.mode &&
  param_r.length !== var_s.iv) throw new TypeError("invalid iv length " + param_r.length);
  if ("string" == typeof param_e && (param_e = var_i.from(param_e)), param_e.length !== var_s.key / 8) throw new TypeError(
  "invalid key length " + param_e.length);
  return "stream" === var_s.type ? new dep_aes_stream_decipherer_3(var_s.module,
  param_e, param_r, !0) : "auth" === var_s.type ? new dep_aes_stream_decipherer_2(
  var_s.module, param_e, param_r, !0) : new var_l(var_s.module, param_e, param_r);
  }
  requireFn(15)(var_l, dep_helper_130), var_l.prototype._update = function (param_t) {
  var var_e, var_r;
  this._cache.add(param_t);
  for (var list_n = [];
  var_e = this._cache.get(this._autopadding);
  ) var_r = this._mode.decrypt(this, var_e), list_n.push(var_r);
  return var_i.concat(list_n);
  }
  , var_l.prototype._final = function () {
  var var_t = this._cache.flush();
  if (this._autopadding) return function (param_t) {
  var var_e = param_t[15];
  if (var_e < 1 || var_e > 16) throw new Error("unable to decrypt data");
  var var_r = -1;
  for (;
  ++var_r < var_e;
  ) if (param_t[var_r + (16 - var_e)] !== var_e) throw new Error("unable to decrypt data");
  if (16 === var_e) return;
  return param_t.slice(0, 16 - var_e);
  }
  (this._mode.decrypt(this, var_t));
  if (var_t) throw new Error("data not multiple of block length");
  }
  , var_l.prototype.setAutoPadding = function (param_t) {
  return this._autopadding = !!param_t, this;
  }
  , var_f.prototype.add = function (param_t) {
  this.cache = var_i.concat([this.cache, param_t]);
  }
  , var_f.prototype.get = function (param_t) {
  var var_e;
  if (param_t) {
  if (this.cache.length > 16) return var_e = this.cache.slice(0, 16), this.cache = this.cache.slice(
  16), var_e;
  }
  else if (this.cache.length >= 16) return var_e = this.cache.slice(0, 16), this.cache = this.cache.slice(
  16), var_e;
  return null;
  }
  , var_f.prototype.flush = function () {
  if (this.cache.length) return this.cache;
  }
  , exportsObj.createDecipher = function (param_t, param_e) {
  var var_r = dep_helper_429[param_t.toLowerCase()];
  if (!var_r) throw new TypeError("invalid suite type");
  var var_n = dep_helper_171(param_e, !1, var_r.key, var_r.iv);
  return var_d(param_t, var_n.key, var_n.iv);
  }
  , exportsObj.createDecipheriv = var_d;
  };
