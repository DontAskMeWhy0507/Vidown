// Module 512 [events] - Stream / runtime utility component (stream-buffer-queue)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_safe_buffer = requireFn(36);
  function var_o(param_e, param_t) {
  param_e.emit("error", param_t);
  }
  moduleObj.exports = {
  destroy: function (param_e, param_t) {
  var var_r = this;
  var var_i = this._readableState && this._readableState.destroyed;
  var var_a = this._writableState && this._writableState.destroyed;
  if (var_i || var_a) {
  if (param_t) {
  param_t(param_e);
  }
  else if (param_e) {
  if (this._writableState) {
  if (!this._writableState.errorEmitted) {
  this._writableState.errorEmitted = true;
  dep_safe_buffer.nextTick(var_o, this, param_e);
  }
  }
  else {
  dep_safe_buffer.nextTick(var_o, this, param_e);
  }
  }
  return this;
  }
  else {
  if (this._readableState) {
  this._readableState.destroyed = true;
  }
  if (this._writableState) {
  this._writableState.destroyed = true;
  }
  this._destroy(param_e || null, function (param_e_1) {
  if (!param_t && param_e_1) {
  if (var_r._writableState) {
  if (!var_r._writableState.errorEmitted) {
  var_r._writableState.errorEmitted = true;
  dep_safe_buffer.nextTick(var_o, var_r, param_e_1);
  }
  }
  else {
  dep_safe_buffer.nextTick(var_o, var_r, param_e_1);
  }
  }
  else if (param_t) {
  param_t(param_e_1);
  }
  }
  );
  return this;
  }
  }
  ,
  undestroy: function () {
  if (this._readableState) {
  this._readableState.destroyed = false;
  this._readableState.reading = false;
  this._readableState.ended = false;
  this._readableState.endEmitted = false;
  }
  if (this._writableState) {
  this._writableState.destroyed = false;
  this._writableState.ended = false;
  this._writableState.ending = false;
  this._writableState.finalCalled = false;
  this._writableState.prefinished = false;
  this._writableState.finished = false;
  this._writableState.errorEmitted = false;
  }
  }
  };
  };
