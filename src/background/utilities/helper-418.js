// Module 418 [utilities] - Shared utility component (helper-418)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = Number.isNaN || function (param_e) {
  return param_e != param_e;
  };
  };
