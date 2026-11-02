// Module 597 - Savior Helper 597
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_helper_468 = requireFn(468),
  dep_helper_144 = requireFn(144),
  var_a = requireFn(25).Buffer,
  var_s = new Array(160);
  function var_u() {
  this.init(), this._w = var_s, dep_helper_144.call(this, 128, 112);
  }
  dep_module_15(var_u, dep_helper_468), var_u.prototype.init = function () {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360,
  this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813,
  this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697,
  this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428,
  this;
  }
  , var_u.prototype._hash = function () {
  var var_t = var_a.allocUnsafe(48);
  function var_e(param_e, param_r, param_n) {
  var_t.writeInt32BE(param_e, param_n), var_t.writeInt32BE(param_r, param_n + 4);
  }
  return var_e(this._ah, this._al, 0), var_e(this._bh, this._bl, 8), var_e(this._ch,
  this._cl, 16), var_e(this._dh, this._dl, 24), var_e(this._eh, this._el, 32), var_e(
  this._fh, this._fl, 40), var_t;
  }
  , moduleObj.exports = var_u;
  };
