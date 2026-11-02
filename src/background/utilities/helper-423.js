// Module 423 [utilities] - Shared utility component (helper-423)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = typeof Reflect != "undefined" && Reflect &&
  Reflect.apply;
  };
