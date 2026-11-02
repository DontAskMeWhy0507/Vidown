// Module 585 - Savior Helper 585
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_136 = requireFn(136),
  fn_i = function () {
  return !!dep_helper_136;
  };
  fn_i.hasArrayLengthDefineBug = function () {
  if (!dep_helper_136) return null;
  try {
  return 1 !== dep_helper_136([], "length", {
  value: 1
  }
  ).length;
  }
  catch (var_t) {
  return !0;
  }
  }
  , moduleObj.exports = fn_i;
  };
