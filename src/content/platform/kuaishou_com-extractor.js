// Module 267 - Savior Kuaishou_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["kuaishou.com"],
  urls: [{
  checkUrl: () => location.href.includes("live.kuaishou.com"),
  getUrl: () => []
  }
  ],
  getCustomParent: param_t => param_t.closest(".swiper-container") ||
  param_t.parentElement
  };
  exportsObj.default = obj_n;
  };
