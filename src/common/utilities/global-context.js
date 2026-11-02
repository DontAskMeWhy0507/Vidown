// Module 13 [utilities] - Stream / runtime utility component (global-context)
export default function (moduleObj, exportsObj) {
  var var_n;
  var_n = function () {
  return this;
  }
  ();
  try {
  var_n = var_n || new Function("return this")();
  }
  catch (var_e) {
  if (typeof window == "object") {
  var_n = window;
  }
  }
  moduleObj.exports = var_n;
  };
