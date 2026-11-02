// Module 240 - Savior Hayko_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_helper = requireFn(12),
  obj_i = {
  getDomains: () => ["hayko.tv"],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  ,
  getCustomParent(param_t) {
  var var_e = Object(dep_dom_helper.d)(param_t);
  return param_t.closest(".video-card") || var_e;
  }
  };
  exportsObj.default = obj_i;
  };
