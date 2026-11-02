// Module 305 - Savior Phimbom_click Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["phimbom."],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/phimbom\.click.+\.mp4/));
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.filename && var_e.filename.length < 10 && (var_e.filename = document.title),
  var_e.skipReferrer = !0;
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
