// Module 276 - Savior Mitom2live_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["mitom4live.org"],
  default: {
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = param_t.node,
  var_o = (null === (var_r = null === (var_e = null == var_i ?
  void 0 : var_i.closest("div.highlights-detail-wrapper")) ||
  void 0 === var_e ? void 0 : var_e.querySelector("h1.detail-title")) ||
  void 0 === var_r ? void 0 : var_r.textContent) || document.title.split("/").pop(
  );
  var_n.filename = var_o;
  }
  }
  };
  exportsObj.default = obj_n;
  };
