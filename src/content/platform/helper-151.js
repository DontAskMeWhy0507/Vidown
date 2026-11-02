// Module 151 - Savior Helper 151
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_encrypted_stream_decipherer = requireFn(140),
  dep_helper_141 = requireFn(141),
  var_o = dep_helper_141([dep_encrypted_stream_decipherer("%String.prototype.indexOf%")]);
  moduleObj.exports = function (param_t, param_e) {
  var var_r = dep_encrypted_stream_decipherer(param_t, !!param_e);
  return "function" == typeof var_r && var_o(param_t, ".prototype.") > -1 ?
  dep_helper_141([var_r]) : var_r;
  };
  };
