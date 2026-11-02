// Module 430 - Savior Helper 430
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  function var_i(param_t) {
  this.rand = param_t;
  }
  if (moduleObj.exports = function (param_t) {
  return var_n || (var_n = new var_i(null)), var_n.generate(param_t);
  }
  , moduleObj.exports.Rand = var_i, var_i.prototype.generate = function (param_t) {
  return this._rand(param_t);
  }
  , var_i.prototype._rand = function (param_t) {
  if (this.rand.getBytes) return this.rand.getBytes(param_t);
  for (var var_e = new Uint8Array(param_t), num_r = 0;
  num_r < var_e.length;
  num_r++) var_e[num_r] = this.rand.getByte();
  return var_e;
  }
  , "object" == typeof self) self.crypto && self.crypto.getRandomValues ?
  var_i.prototype._rand = function (param_t) {
  var var_e = new Uint8Array(param_t);
  return self.crypto.getRandomValues(var_e), var_e;
  }
  : self.msCrypto && self.msCrypto.getRandomValues ? var_i.prototype._rand = function (
  param_t) {
  var var_e = new Uint8Array(param_t);
  return self.msCrypto.getRandomValues(var_e), var_e;
  }
  : "object" == typeof window && (var_i.prototype._rand = function () {
  throw new Error("Not implemented yet");
  }
  );
  else try {
  var dep_helper_620 = requireFn(620);
  if ("function" != typeof dep_helper_620.randomBytes) throw new Error("Not supported");
  var_i.prototype._rand = function (param_t) {
  return dep_helper_620.randomBytes(param_t);
  };
  }
  catch (var_t) {
  }
  };
