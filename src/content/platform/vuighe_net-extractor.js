// Module 389 - Savior Vuighe_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["vuighe.net"],
  siteMatcher: (param_t, param_e) => /vuighe[a-z0-9]{0,3}\.net/.test(param_t),
  urls: [{
  checkUrl: param_t => param_t.url.includes("scontent.cdninstagram.com"),
  getUrl: param_t => param_t.ids
  }
  ]
  };
  exportsObj.default = obj_n;
  };
