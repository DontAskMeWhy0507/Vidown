// Module 15 [utilities] - Stream / runtime utility component (util-inherits)
export default function (moduleObj, exportsObj) {
  if (typeof Object.create == "function") {
  moduleObj.exports = function (param_e, param_t) {
  if (param_t) {
  param_e.super_ = param_t;
  param_e.prototype = Object.create(param_t.prototype, {
  constructor: {
  value: param_e,
  enumerable: false,
  writable: true,
  configurable: true
  }
  }
  );
  }
  };
  }
  else {
  moduleObj.exports = function (param_e, param_t) {
  if (param_t) {
  param_e.super_ = param_t;
  function var_r() {
  }
  var_r.prototype = param_t.prototype;
  param_e.prototype = new var_r();
  param_e.prototype.constructor = param_e;
  }
  };
  }
  };
