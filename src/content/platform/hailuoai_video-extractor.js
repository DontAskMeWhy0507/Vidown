// Module 239 - Savior Hailuoai_video Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["hailuoai.video"],
  default: {
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i = param_t.mediaObject,
  var_o = param_t.node,
  var_a = (null === (var_e = document.body.querySelector(".detail-page-container .prompt-text")) ||
  void 0 === var_e ? void 0 : var_e.textContent) || (null === (var_n = null === (
  var_r = var_o.closest(".group\\/video-card ")) || void 0 === var_r ?
  void 0 : var_r.querySelector(".prompt-text")) || void 0 === var_n ?
  void 0 : var_n.textContent);
  var_a && (var_i.filename = var_a);
  }
  }
  };
  exportsObj.default = obj_n;
  };
