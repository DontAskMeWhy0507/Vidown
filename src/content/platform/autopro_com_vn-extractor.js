// Module 210 - Savior Autopro_com_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["autopro.com.vn"],
  urls: [{
  checkUrl: param_t => "VIDEO" === param_t.node.tagName,
  getUrl: param_t => {
  var var_e;
  return `https://${null === (var_e = param_t.node.closest(".VCSortableInPreviewMode")) ||
  void 0 === var_e ? void 0 : var_e.getAttribute("data-vid")}
  
  
  /master.m3u8`.replace("autopro/", "autopro8.mediacdn.vn/");
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i = param_t.mediaObject,
  var_o = param_t.node;
  var_i.url && (var_i.fixName = (null === (var_n = null === (var_r = null === (var_e = var_o.closest(
  "li")) || void 0 === var_e ? void 0 : var_e.querySelector("h3")) ||
  void 0 === var_r ? void 0 : var_r.querySelector("a")) || void 0 === var_n ?
  void 0 : var_n.title) || document.title);
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
