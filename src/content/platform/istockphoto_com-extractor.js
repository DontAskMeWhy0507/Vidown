// Module 256 - Savior Istockphoto_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  exportsObj.default = {
  getDomains: () => ["istockphoto.com"],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (!var_e.url.startsWith("blob:")) return var_e.ext = "mp4", var_e.exts = ["mp4"],
  var_e.noAudio = !0, "video";
  }
  }
  };
  };
