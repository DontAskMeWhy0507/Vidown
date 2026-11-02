// Module 326 - Savior Rule34video Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  getDomains: () => ["rule34video"],
  urls: [{
  checkUrl: param_t => param_t.url.includes(".mp4"),
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = param_t.node;
  var_n.ext = "mp4", var_n.exts = ["mp4"];
  var var_o = null === (var_r = null === (var_e = var_i.closest(".fancybox-overlay")) ||
  void 0 === var_e ? void 0 : var_e.querySelector("h1")) || void 0 === var_r ?
  void 0 : var_r.innerText;
  return var_n.filename = var_o || document.title, "video";
  }
  }
  ]
  };
  };
