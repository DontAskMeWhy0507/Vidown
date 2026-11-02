// Module 151 [utilities] - Shared utility component (helper-151)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_encrypted_stream_decipherer = requireFn(140);
  var dep_helper_141 = requireFn(141);
  var var_i = dep_helper_141([dep_encrypted_stream_decipherer("%String.prototype.indexOf%")]);
  moduleObj.exports = function (param_e, param_t) {
  var var_r = dep_encrypted_stream_decipherer(param_e, !!param_t);
  if (typeof var_r == "function" && var_i(param_e, ".prototype.") > -1) {
  return dep_helper_141([var_r]);
  }
  else {
  return var_r;
  }
  };
  };
