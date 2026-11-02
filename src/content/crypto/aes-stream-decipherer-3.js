// Module 483 - Savior Aes Stream Decipherer 3
export default function (moduleObj, exportsObj, requireFn) {
  var dep_signature_verifier = requireFn(170),
  var_i = requireFn(25).Buffer,
  dep_helper_130 = requireFn(130);
  function var_a(param_t, param_e, param_r, param_a) {
  dep_helper_130.call(this), this._cipher = new dep_signature_verifier.AES(param_e),
  this._prev = var_i.from(param_r), this._cache = var_i.allocUnsafe(0), this._secCache = var_i.allocUnsafe(
  0), this._decrypt = param_a, this._mode = param_t;
  }
  requireFn(15)(var_a, dep_helper_130), var_a.prototype._update = function (param_t) {
  return this._mode.encrypt(this, param_t, this._decrypt);
  }
  , var_a.prototype._final = function () {
  this._cipher.scrub();
  }
  , moduleObj.exports = var_a;
  };
