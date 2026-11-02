// Module 417 [utilities] - Shared utility component (helper-417)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_418 = requireFn(418);
  moduleObj.exports = function (param_e) {
  if (dep_helper_418(param_e) || param_e === 0) {
  return param_e;
  }
  else if (param_e < 0) {
  return -1;
  }
  else {
  return 1;
  }
  };
  };
