// Module 373 - Savior Videojs_github_io Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["videojs.github.io"],
  default: {
  getUrl: () => {
  var var_t;
  return null === (var_t = document.getElementById("url")) ||
  void 0 === var_t ? void 0 : var_t.value;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  };
  exportsObj.default = obj_n;
  };
