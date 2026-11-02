// Module 596 - Savior Helper 596
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_helper_467 = requireFn(467),
  dep_helper_144 = requireFn(144),
  var_a = requireFn(25).Buffer,
  var_s = new Array(64);
  function var_u() {
  this.init(), this._w = var_s, dep_helper_144.call(this, 64, 56);
  }
  dep_module_15(var_u, dep_helper_467), var_u.prototype.init = function () {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697,
  this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428,
  this;
  }
  , var_u.prototype._hash = function () {
  var var_t = var_a.allocUnsafe(28);
  return var_t.writeInt32BE(this._a, 0), var_t.writeInt32BE(this._b, 4), var_t.writeInt32BE(
  this._c, 8), var_t.writeInt32BE(this._d, 12), var_t.writeInt32BE(this._e, 16),
  var_t.writeInt32BE(this._f, 20), var_t.writeInt32BE(this._g, 24), var_t;
  }
  , moduleObj.exports = var_u;
  };
