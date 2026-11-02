// Module 582 - Savior Helper 582
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_583 = requireFn(583),
  dep_helper_136 = requireFn(136),
  dep_helper_141 = requireFn(141),
  dep_helper_586 = requireFn(586);
  moduleObj.exports = function (param_t) {
  var var_e = dep_helper_141(arguments),
  var_r = 1 + param_t.length - (arguments.length - 1);
  return dep_helper_583(var_e, var_r > 0 ? var_r : 0, !0);
  }
  , dep_helper_136 ? dep_helper_136(moduleObj.exports, "apply", {
  value: dep_helper_586
  }
  ) : moduleObj.exports.apply = dep_helper_586;
  };
