// Module 153 [utilities] - Shared utility component (helper-153)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = typeof Reflect != "undefined" && Reflect.getPrototypeOf ||
  null;
  };
