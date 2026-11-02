// Module 489 - Savior Helper 489
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_36 = requireFn(36);
  function var_i(param_t, param_e) {
  param_t.emit("error", param_e);
  }
  moduleObj.exports = {
  destroy: function (param_t, param_e) {
  var var_r = this,
  var_o = this._readableState && this._readableState.destroyed,
  var_a = this._writableState && this._writableState.destroyed;
  return var_o || var_a ? (param_e ? param_e(param_t) : param_t &&
  (this._writableState ? this._writableState.errorEmitted ||
  (this._writableState.errorEmitted = !0, dep_module_36.nextTick(var_i, this, param_t)) :
  dep_module_36.nextTick(var_i, this, param_t)), this) : (this._readableState &&
  (this._readableState.destroyed = !0), this._writableState &&
  (this._writableState.destroyed = !0), this._destroy(param_t ||
  null, function (param_t_1) {
  !param_e && param_t_1 ? var_r._writableState ? var_r._writableState.errorEmitted ||
  (var_r._writableState.errorEmitted = !0, dep_module_36.nextTick(var_i, var_r, param_t_1)) :
  dep_module_36.nextTick(var_i, var_r, param_t_1) : param_e &&
  param_e(param_t_1);
  }
  ), this);
  }
  ,
  undestroy: function () {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1,
  this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState &&
  (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1,
  this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1,
  this._writableState.errorEmitted = !1);
  }
  };
  };
