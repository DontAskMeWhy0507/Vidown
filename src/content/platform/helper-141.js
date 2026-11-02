// Module 141 - Savior Helper 141
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_121 = requireFn(121),
  dep_helper_115 = requireFn(115),
  dep_helper_137 = requireFn(137),
  dep_helper_169 = requireFn(169);
  moduleObj.exports = function (param_t) {
  if (param_t.length < 1 || "function" != typeof param_t[0]) throw new dep_helper_115(
  "a function is required");
  return dep_helper_169(dep_helper_121, dep_helper_137, param_t);
  };
  };
