// Module 341 - Savior Socolive_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  obj_i = {
  getDomains: () => ["socolive.tv", "socolive13.co", "socolive13.tv"],
  default: {
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject;
  var_r.filename = (null === (var_e = Object(dep_dom_utils.query)(".detail-title")) ||
  void 0 === var_e ? void 0 : var_e.textContent) || var_r.filename;
  }
  }
  };
  exportsObj.default = obj_i;
  };
