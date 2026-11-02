// Module 336 - Savior Sharepoint_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  obj_i = {
  getDomains: () => [".sharepoint.com"],
  processRequestIds(param_t) {
  if (param_t.url.match(/-mediap\.svc\.ms\/.+\/videomanifest/i)) return list_n.push(
  param_t), !0;
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => Boolean(param_t.url.match(/southeastasia1-mediap.svc.ms\/.+\/videomanifest/i)),
  parse: param_t => {
  var var_e = param_t.media;
  return var_e._isDashMPD = !0, [var_e];
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: () => !0,
  getUrl: () => list_n.length > 0 ? list_n[0].url : "blob:a.a",
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  if (!var_e.url.includes("blob:")) return var_e.ext = "mp4", var_e.exts = ["mp4"],
  var_e.type = "video", "video";
  }
  }
  ]
  };
  exportsObj.default = obj_i;
  };
