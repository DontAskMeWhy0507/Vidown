// Module 606 - Savior Hls Key Loader
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_429 = requireFn(429),
  dep_aes_stream_decipherer_2 = requireFn(482),
  var_o = requireFn(25).Buffer,
  dep_aes_stream_decipherer_3 = requireFn(483),
  dep_helper_130 = requireFn(130),
  dep_signature_verifier = requireFn(170),
  dep_helper_171 = requireFn(171);
  function var_l(param_t, param_e, param_r) {
  dep_helper_130.call(this), this._cache = new var_d(), this._cipher = new dep_signature_verifier.AES(
  param_e), this._prev = var_o.from(param_r), this._mode = param_t, this._autopadding = !0;
  }
  requireFn(15)(var_l, dep_helper_130), var_l.prototype._update = function (param_t) {
  var var_e, var_r;
  this._cache.add(param_t);
  for (var list_n = [];
  var_e = this._cache.get();
  ) var_r = this._mode.encrypt(this, var_e), list_n.push(var_r);
  return var_o.concat(list_n);
  };
  var var_f = var_o.alloc(16, 16);
  function var_d() {
  this.cache = var_o.allocUnsafe(0);
  }
  function var_h(param_t, param_e, param_r) {
  var var_s = dep_helper_429[param_t.toLowerCase()];
  if (!var_s) throw new TypeError("invalid suite type");
  if ("string" == typeof param_e && (param_e = var_o.from(param_e)), param_e.length !== var_s.key / 8) throw new TypeError(
  "invalid key length " + param_e.length);
  if ("string" == typeof param_r && (param_r = var_o.from(param_r)), "GCM" !== var_s.mode &&
  param_r.length !== var_s.iv) throw new TypeError("invalid iv length " + param_r.length);
  return "stream" === var_s.type ? new dep_aes_stream_decipherer_3(var_s.module,
  param_e, param_r) : "auth" === var_s.type ? new dep_aes_stream_decipherer_2(var_s.module,
  param_e, param_r) : new var_l(var_s.module, param_e, param_r);
  }
  var_l.prototype._final = function () {
  var var_t = this._cache.flush();
  if (this._autopadding) return var_t = this._mode.encrypt(this, var_t), this._cipher.scrub(
  ), var_t;
  if (!var_t.equals(var_f)) throw this._cipher.scrub(), new Error("data not multiple of block length");
  }
  , var_l.prototype.setAutoPadding = function (param_t) {
  return this._autopadding = !!param_t, this;
  }
  , var_d.prototype.add = function (param_t) {
  this.cache = var_o.concat([this.cache, param_t]);
  }
  , var_d.prototype.get = function () {
  if (this.cache.length > 15) {
  var var_t = this.cache.slice(0, 16);
  return this.cache = this.cache.slice(16), var_t;
  }
  return null;
  }
  , var_d.prototype.flush = function () {
  for (var var_t = 16 - this.cache.length, var_e = var_o.allocUnsafe(var_t), var_r = -1;
  ++var_r < var_t;
  ) var_e.writeUInt8(var_t, var_r);
  return var_o.concat([this.cache, var_e]);
  }
  , exportsObj.createCipheriv = var_h, exportsObj.createCipher = function (param_t,
  param_e) {
  var var_r = dep_helper_429[param_t.toLowerCase()];
  if (!var_r) throw new TypeError("invalid suite type");
  var var_i = dep_helper_171(param_e, !1, var_r.key, var_r.iv);
  return var_h(param_t, var_i.key, var_i.iv);
  };
  };
