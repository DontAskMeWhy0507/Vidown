// Module 388 - Savior Vtv16_info Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["vtv16.info"],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/public\/dist\/index\.html\?id=\w{32}/g));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = new URL(var_e),
  var_n = var_r.searchParams.get("id");
  return `${var_r.protocol}
  
  
  //${var_r.host}
  
  
  /playlist/${var_n}
  
  
  /${Date.now()}
  
  
  .m3u8`;
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
