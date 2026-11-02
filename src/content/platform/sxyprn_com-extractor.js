// Module 348 - Savior Sxyprn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  getDomains: () => ["sxyprn.com"],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /vid\/.+\/vidthumb\.mp4/i.test(var_e);
  }
  ,
  getUrl: () => []
  }
  ]
  };
  };
