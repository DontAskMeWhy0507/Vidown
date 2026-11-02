// Module 150 - Savior Helper 150
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_15 = requireFn(15),
  dep_module_76 = requireFn(76),
  dep_helper_405 = requireFn(405),
  dep_helper_426 = requireFn(426),
  dep_helper_130 = requireFn(130);
  function var_u(param_t) {
  dep_helper_130.call(this, "digest"), this._hash = param_t;
  }
  dep_module_15(var_u, dep_helper_130), var_u.prototype._update = function (param_t) {
  this._hash.update(param_t);
  }
  , var_u.prototype._final = function () {
  return this._hash.digest();
  }
  , moduleObj.exports = function (param_t) {
  return "md5" === (param_t = param_t.toLowerCase()) ? new dep_module_76() :
  "rmd160" === param_t || "ripemd160" === param_t ? new dep_helper_405() :
  new var_u(dep_helper_426(param_t));
  };
  };
