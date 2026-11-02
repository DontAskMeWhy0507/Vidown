// Module 121 [utilities] - Shared utility component (helper-121)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_422 = requireFn(422);
  moduleObj.exports = Function.prototype.bind || dep_helper_422;
  };
