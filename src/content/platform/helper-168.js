// Module 168 - Savior Helper 168
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_153 = requireFn(153),
  dep_helper_154 = requireFn(154),
  dep_helper_421 = requireFn(421);
  moduleObj.exports = dep_helper_153 ? function (param_t) {
  return dep_helper_153(param_t);
  }
  : dep_helper_154 ? function (param_t) {
  if (!param_t || "object" != typeof param_t && "function" != typeof param_t) throw new TypeError(
  "getProto: not an object");
  return dep_helper_154(param_t);
  }
  : dep_helper_421 ? function (param_t) {
  return dep_helper_421(param_t);
  }
  : null;
  };
