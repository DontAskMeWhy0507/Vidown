// Module 108 [utilities] - Subsystem utility helper (108)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = var_i;
  var dep_stream_passthrough = requireFn(87);
  var var_o = Object.create(requireFn(29));
  function var_i(param_e) {
  if (!(this instanceof var_i)) {
  return new var_i(param_e);
  }
  dep_stream_passthrough.call(this, param_e);
  }
  var_o.inherits = requireFn(15);
  var_o.inherits(var_i, dep_stream_passthrough);
  var_i.prototype._transform = function (param_e, param_t, param_r) {
  param_r(null, param_e);
  };
  };
