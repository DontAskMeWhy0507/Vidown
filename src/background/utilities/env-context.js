// Module 78 [utilities] - Shared utility component (env-context)
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  var var_n = param_e !== undefined && param_e || typeof self != "undefined" &&
  self || window;
  var var_o = Function.prototype.apply;
  function var_i(param_e_1, param_t) {
  this._id = param_e_1;
  this._clearFn = param_t;
  }
  exportsObj.setTimeout = function () {
  return new var_i(var_o.call(setTimeout, var_n, arguments), clearTimeout);
  };
  exportsObj.setInterval = function () {
  return new var_i(var_o.call(setInterval, var_n, arguments), clearInterval);
  };
  exportsObj.clearTimeout = exportsObj.clearInterval = function (param_e_1) {
  if (param_e_1) {
  param_e_1.close();
  }
  };
  var_i.prototype.unref = var_i.prototype.ref = function () {
  };
  var_i.prototype.close = function () {
  this._clearFn.call(var_n, this._id);
  };
  exportsObj.enroll = function (param_e_1, param_t) {
  clearTimeout(param_e_1._idleTimeoutId);
  param_e_1._idleTimeout = param_t;
  };
  exportsObj.unenroll = function (param_e_1) {
  clearTimeout(param_e_1._idleTimeoutId);
  param_e_1._idleTimeout = -1;
  };
  exportsObj._unrefActive = exportsObj.active = function (param_e_1) {
  clearTimeout(param_e_1._idleTimeoutId);
  var var_t = param_e_1._idleTimeout;
  if (var_t >= 0) {
  param_e_1._idleTimeoutId = setTimeout(function () {
  if (param_e_1._onTimeout) {
  param_e_1._onTimeout();
  }
  }
  , var_t);
  }
  };
  requireFn(106);
  exportsObj.setImmediate = typeof self != "undefined" && self.setImmediate ||
  param_e !== undefined && param_e.setImmediate || this && this.setImmediate;
  exportsObj.clearImmediate = typeof self != "undefined" && self.clearImmediate ||
  param_e !== undefined && param_e.clearImmediate || this &&
  this.clearImmediate;
  }
  ).call(this, requireFn(13));
  };
