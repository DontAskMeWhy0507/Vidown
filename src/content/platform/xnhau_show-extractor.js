// Module 396 - Savior Xnhau_show Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["xnhau."],
  isValidVideoNode: param_t => !!param_t.matches(".fp-engine"),
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /xnhau\.\w+\/get_file\//i.test(var_e);
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
