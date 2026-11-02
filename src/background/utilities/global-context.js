// Module 13 [utilities] - Stream / runtime utility component (global-context)
export default function (moduleObj, exportsObj) {
  var var_r;
  var_r = function () {
  return this;
  }
  ();
  try {
  var_r = var_r || new Function("return this")();
  }
  catch (var_e) {
  if (typeof window == "object") {
  var_r = window;
  }
  }
  moduleObj.exports = var_r;
  };
