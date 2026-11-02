// Module 250 - Savior Hoathinh3d Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_request_interceptor = requireFn(94);
  exportsObj.default = Object.assign({
  getDomains: () => ["hoathinh3d."],
  toggleLight: {
  turnOff: {
  updated(param_t, param_e) {
  var var_r;
  param_e.parent.$parent.setAttribute("style", "z-index: 2147483643 !important"),
  null === (var_r = param_e.parent.$parent) || void 0 === var_r ||
  var_r.classList.add("--savior-overlay-z-index-top");
  }
  }
  }
  }
  , dep_request_interceptor.a);
  };
