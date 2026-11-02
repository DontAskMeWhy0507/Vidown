// Module 417 - Savior Helper 417
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_418 = requireFn(418);
  moduleObj.exports = function (param_t) {
  return dep_helper_418(param_t) || 0 === param_t ? param_t :
  param_t < 0 ? -1 : 1;
  };
  };
