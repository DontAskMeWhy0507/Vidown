// Module 221 - Savior Capcut Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["capcut."],
  urls: [{
  checkUrl: () => !0,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject;
  if (var_r) return var_r.ext = "mp4", var_r.exts = ["mp4"], var_r.filename = null === (
  var_e = document.querySelector("h1")) || void 0 === var_e ?
  void 0 : var_e.innerHTML, "video";
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
