// Module 440 [utilities] - Network activity and stream traffic monitor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = String.prototype.replace;
  var regex_o = /%20/g;
  var str_i = "RFC1738";
  var str_a = "RFC3986";
  moduleObj.exports = {
  default: str_a,
  formatters: {
  RFC1738: function (param_e) {
  return var_n.call(param_e, regex_o, "+");
  }
  ,
  RFC3986: function (param_e) {
  return String(param_e);
  }
  }
  ,
  RFC1738: str_i,
  RFC3986: str_a
  };
  };
