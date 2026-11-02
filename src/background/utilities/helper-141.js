// Module 141 [utilities] - Shared utility component (helper-141)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_121 = requireFn(121);
  var dep_helper_115 = requireFn(115);
  var dep_helper_137 = requireFn(137);
  var dep_helper_169 = requireFn(169);
  moduleObj.exports = function (param_e) {
  if (param_e.length < 1 || typeof param_e[0] != "function") {
  throw new dep_helper_115("a function is required");
  }
  return dep_helper_169(dep_helper_121, dep_helper_137, param_e);
  };
  };
