// Module 386 - Savior Vtc_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/demo\.vtc\.gov\.vn\/vtcnews\.html/i));
  }
  ,
  getUrl: () => []
  }
  ],
  getDomains: () => ["vtc.vn"]
  };
  exportsObj.default = obj_n;
  };
