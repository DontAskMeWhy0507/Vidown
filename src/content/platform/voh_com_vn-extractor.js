// Module 383 - Savior Voh_com_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  urls: [{
  checkUrl: param_t => param_t.url.includes("streamfile.aspx"),
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject;
  return var_r.ext = "mp4", var_r.filename = null === (var_e = document.getElementById(
  "titlePlaying")) || void 0 === var_e ? void 0 : var_e.innerText, "video";
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
