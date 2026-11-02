// Module 268 - Savior Lazi_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_helper = requireFn(12),
  obj_i = {
  getCustomParent(param_t) {
  var var_e = Object(dep_dom_helper.d)(param_t);
  return param_t.closest(".media-wrapper") || var_e;
  }
  ,
  getDomains: () => ["lazi.vn"]
  };
  exportsObj.default = obj_i;
  };
