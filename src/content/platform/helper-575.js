// Module 575 - Savior Helper 575
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_115 = requireFn(115),
  var_i = requireFn(151)("TypedArray.prototype.buffer", !0),
  dep_helper_576 = requireFn(576);
  moduleObj.exports = var_i || function (param_t) {
  if (!dep_helper_576(param_t)) throw new dep_helper_115("Not a Typed Array");
  return param_t.buffer;
  };
  };
