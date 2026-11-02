// Module 470 - Savior Helper 470
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_76 = requireFn(76);
  moduleObj.exports = function (param_t) {
  return new dep_module_76().update(param_t).digest();
  };
  };
