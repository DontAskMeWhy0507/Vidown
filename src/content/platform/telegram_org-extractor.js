// Module 349 - Savior Telegram_org Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["web.telegram.org"],
  urls: [{
  checkUrl: param_t => param_t.url.includes("mimeType%22%3A%22video%2Fmp4"),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.filename = document.title,
  "video";
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
