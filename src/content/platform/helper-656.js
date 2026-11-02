// Module 656 - Savior Helper 656
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_15 = requireFn(15);
  function var_i(param_t) {
  this._reporterState = {
  obj: null,
  path: [],
  options: param_t || {
  }
  ,
  errors: []
  };
  }
  function var_o(param_t, param_e) {
  this.path = param_t, this.rethrow(param_e);
  }
  exportsObj.Reporter = var_i, var_i.prototype.isError = function (param_t) {
  return param_t instanceof var_o;
  }
  , var_i.prototype.save = function () {
  var var_t = this._reporterState;
  return {
  obj: var_t.obj,
  pathLen: var_t.path.length
  };
  }
  , var_i.prototype.restore = function (param_t) {
  var var_e = this._reporterState;
  var_e.obj = param_t.obj, var_e.path = var_e.path.slice(0, param_t.pathLen);
  }
  , var_i.prototype.enterKey = function (param_t) {
  return this._reporterState.path.push(param_t);
  }
  , var_i.prototype.exitKey = function (param_t) {
  var var_e = this._reporterState;
  var_e.path = var_e.path.slice(0, param_t - 1);
  }
  , var_i.prototype.leaveKey = function (param_t, param_e, param_r) {
  var var_n = this._reporterState;
  this.exitKey(param_t), null !== var_n.obj && (var_n.obj[param_e] = param_r);
  }
  , var_i.prototype.path = function () {
  return this._reporterState.path.join("/");
  }
  , var_i.prototype.enterObject = function () {
  var var_t = this._reporterState,
  var_e = var_t.obj;
  return var_t.obj = {
  }
  , var_e;
  }
  , var_i.prototype.leaveObject = function (param_t) {
  var var_e = this._reporterState,
  var_r = var_e.obj;
  return var_e.obj = param_t, var_r;
  }
  , var_i.prototype.error = function (param_t) {
  var var_e,
  var_r = this._reporterState,
  var_n = param_t instanceof var_o;
  if (var_e = var_n ? param_t : new var_o(var_r.path.map(function (param_t_1) {
  return "[" + JSON.stringify(param_t_1) + "]";
  }
  ).join(""), param_t.message || param_t, param_t.stack), !var_r.options.partial) throw var_e;
  return var_n || var_r.errors.push(var_e), var_e;
  }
  , var_i.prototype.wrapResult = function (param_t) {
  var var_e = this._reporterState;
  return var_e.options.partial ? {
  result: this.isError(param_t) ? null : param_t,
  errors: var_e.errors
  }
  : param_t;
  }
  , dep_module_15(var_o, Error), var_o.prototype.rethrow = function (param_t) {
  if (this.message = param_t + " at: " + (this.path || "(shallow)"), Error.captureStackTrace &&
  Error.captureStackTrace(this, var_o), !this.stack) try {
  throw new Error(this.message);
  }
  catch (var_t) {
  this.stack = var_t.stack;
  }
  return this;
  };
  };
