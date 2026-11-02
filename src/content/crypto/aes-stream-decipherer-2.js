// Module 482 - Savior Aes Stream Decipherer 2
export default function (moduleObj, exportsObj, requireFn) {
  var dep_signature_verifier = requireFn(170),
  var_i = requireFn(25).Buffer,
  dep_helper_130 = requireFn(130),
  dep_module_15 = requireFn(15),
  dep_helper_613 = requireFn(613),
  dep_helper_155 = requireFn(155),
  dep_helper_480 = requireFn(480);
  function var_l(param_t, param_e, param_r, param_a) {
  dep_helper_130.call(this);
  var var_u = var_i.alloc(4, 0);
  this._cipher = new dep_signature_verifier.AES(param_e);
  var var_l_1 = this._cipher.encryptBlock(var_u);
  this._ghash = new dep_helper_613(var_l_1), param_r = function (param_t_1, param_e_1,
  param_r_1) {
  if (12 === param_e_1.length) return param_t_1._finID = var_i.concat([param_e_1,
  var_i.from([0, 0, 0, 1])]), var_i.concat([param_e_1, var_i.from([0, 0, 0, 2])]);
  var var_n = new dep_helper_613(param_r_1),
  var_o = param_e_1.length,
  var_a = var_o % 16;
  var_n.update(param_e_1), var_a && (var_a = 16 - var_a, var_n.update(var_i.alloc(
  var_a, 0))), var_n.update(var_i.alloc(8, 0));
  var var_u_1 = 8 * var_o,
  var_l_2 = var_i.alloc(8);
  var_l_2.writeUIntBE(var_u_1, 0, 8), var_n.update(var_l_2), param_t_1._finID = var_n.state;
  var var_f = var_i.from(param_t_1._finID);
  return dep_helper_480(var_f), var_f;
  }
  (this, param_r, var_l_1), this._prev = var_i.from(param_r), this._cache = var_i.allocUnsafe(
  0), this._secCache = var_i.allocUnsafe(0), this._decrypt = param_a, this._alen = 0,
  this._len = 0, this._mode = param_t, this._authTag = null, this._called = !1;
  }
  dep_module_15(var_l, dep_helper_130), var_l.prototype._update = function (param_t) {
  if (!this._called && this._alen) {
  var var_e = 16 - this._alen % 16;
  var_e < 16 && (var_e = var_i.alloc(var_e, 0), this._ghash.update(var_e));
  }
  this._called = !0;
  var var_r = this._mode.encrypt(this, param_t);
  return this._decrypt ? this._ghash.update(param_t) : this._ghash.update(var_r),
  this._len += param_t.length, var_r;
  }
  , var_l.prototype._final = function () {
  if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
  var var_t = dep_helper_155(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(
  this._finID));
  if (this._decrypt && function (param_t, param_e) {
  var num_r = 0;
  param_t.length !== param_e.length && num_r++;
  for (var var_n = Math.min(param_t.length, param_e.length), num_i = 0;
  num_i < var_n;
  ++num_i) num_r += param_t[num_i] ^ param_e[num_i];
  return num_r;
  }
  (var_t, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
  this._authTag = var_t, this._cipher.scrub();
  }
  , var_l.prototype.getAuthTag = function () {
  if (this._decrypt || !var_i.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
  return this._authTag;
  }
  , var_l.prototype.setAuthTag = function (param_t) {
  if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
  this._authTag = param_t;
  }
  , var_l.prototype.setAAD = function (param_t) {
  if (this._called) throw new Error("Attempting to set AAD in unsupported state");
  this._ghash.update(param_t), this._alen += param_t.length;
  }
  , moduleObj.exports = var_l;
  };
