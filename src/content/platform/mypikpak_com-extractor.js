// Module 287 - Savior Mypikpak_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  getDomains: () => ["mypikpak.com"],
  getCustomParent: param_t => param_t.closest("blockquote") ?
  param_t.closest("blockquote") : param_t,
  default: {
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return console.log(var_e), var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  };
  };
