// Module 289 - Savior Netflix_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["netflix.com", "dungmori.com"],
  default: {
  getUrl: () => []
  }
  ,
  shouldWidgetAttachToParentNode: param_t => !0,
  getCustomParent: param_t => param_t.closest('[data-videoid], [data-uia="player"]')
  };
  exportsObj.default = obj_n;
  };
