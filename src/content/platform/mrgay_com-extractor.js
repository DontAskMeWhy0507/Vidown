// Module 282 - Savior Mrgay_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["mrgay."],
  default: {
  getUrl: param_t => {
  var var_e = param_t.url;
  return /mrgay\..*\/get_file/.test(var_e) ? var_e : [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.filename = document.title, var_e.ext = "mp4", var_e.exts = ["mp4"],
  "video";
  }
  }
  };
  exportsObj.default = obj_n;
  };
