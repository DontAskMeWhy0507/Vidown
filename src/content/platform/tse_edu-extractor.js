// Module 357 - Savior Tse_edu Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  requireFn.r(exportsObj);
  var obj_i = {
  getDomains: () => ["tse.edu.vn"],
  default: {
  getUrl: () => var_n ? var_n.url : []
  }
  ,
  processRequestIds: param_t => !!param_t.url.includes("playlist") &&
  (var_n = param_t, !0)
  };
  exportsObj.default = obj_i;
  };
