// Module 580 - Savior Helper 580
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var dep_helper_581 = requireFn(581),
  var_i = "undefined" == typeof globalThis ? param_e : globalThis;
  moduleObj.exports = function () {
  for (var list_t = [], num_e = 0;
  num_e < dep_helper_581.length;
  num_e++) "function" == typeof var_i[dep_helper_581[num_e]] &&
  (list_t[list_t.length] = dep_helper_581[num_e]);
  return list_t;
  };
  }
  ).call(this, requireFn(13));
  };
