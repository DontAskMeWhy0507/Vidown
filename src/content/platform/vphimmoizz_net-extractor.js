// Module 384 - Savior Vphimmoizz_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  obj_i = {
  getDomains: () => ["vphimmoizz."],
  processRequestIds: param_t => !param_t.url.match(/.+app-.+\/video.mp4/i) ||
  (list_n.push(param_t), !0),
  urls: [{
  checkUrl: param_t => param_t.url.includes("p.thoctv.com"),
  getUrl: () => {
  if (list_n.length > 0) {
  var var_t = list_n[0];
  return var_t.referrer = "https://p.thoctv.com", var_t.title = document.title, [var_t];
  }
  }
  }
  ]
  };
  exportsObj.default = obj_i;
  };
