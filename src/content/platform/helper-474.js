// Module 474 - Savior Helper 474
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e, param_r) {
  var var_n;
  if (param_e.process && param_e.process.browser) var_n = "utf-8";
  else if (param_e.process && param_e.process.version) {
  var_n = parseInt(param_r.version.split(".")[0].slice(1), 10) >= 6 ?
  "utf-8" : "binary";
  }
  else var_n = "utf-8";
  moduleObj.exports = var_n;
  }
  ).call(this, requireFn(13), requireFn(32));
  };
