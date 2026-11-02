// Module 36 [utilities] - Stream / runtime utility component (safe-buffer)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_t) {
  if (param_t === undefined || !param_t.version || param_t.version.indexOf("v0.") === 0 ||
  param_t.version.indexOf("v1.") === 0 && param_t.version.indexOf("v1.8.") !== 0) {
  moduleObj.exports = {
  nextTick: function (param_e, param_r, param_n, param_o) {
  if (typeof param_e != "function") {
  throw new TypeError("\"callback\" argument must be a function");
  }
  var var_i;
  var var_a;
  var var_s = arguments.length;
  switch (var_s) {
  case 0:
  case 1:
  return param_t.nextTick(param_e);
  case 2:
  return param_t.nextTick(function () {
  param_e.call(null, param_r);
  }
  );
  case 3:
  return param_t.nextTick(function () {
  param_e.call(null, param_r, param_n);
  }
  );
  case 4:
  return param_t.nextTick(function () {
  param_e.call(null, param_r, param_n, param_o);
  }
  );
  default:
  var_i = new Array(var_s - 1);
  var_a = 0;
  while (var_a < var_i.length) {
  var_i[var_a++] = arguments[var_a];
  }
  return param_t.nextTick(function () {
  param_e.apply(null, var_i);
  }
  );
  }
  }
  };
  }
  else {
  moduleObj.exports = param_t;
  }
  }
  ).call(this, requireFn(32));
  };
