// Module 168 [utilities] - Shared utility component (helper-168)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_153 = requireFn(153);
  var dep_helper_154 = requireFn(154);
  var dep_helper_421 = requireFn(421);
  moduleObj.exports = dep_helper_153 ? function (param_e) {
  return dep_helper_153(param_e);
  }
  : dep_helper_154 ? function (param_e) {
  if (!param_e || typeof param_e != "object" && typeof param_e != "function") {
  throw new TypeError("getProto: not an object");
  }
  return dep_helper_154(param_e);
  }
  : dep_helper_421 ? function (param_e) {
  return dep_helper_421(param_e);
  }
  : null;
  };
