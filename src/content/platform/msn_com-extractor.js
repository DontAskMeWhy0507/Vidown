// Module 283 - Savior Msn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["msn.com"],
  addNode: () => ["video-card"],
  isValidVideoNode: param_t => !!["video", "video-card"].includes(param_t.nodeName.toLowerCase(
  )),
  getCustomPipControlElement(param_t) {
  var var_e;
  if ("video-card" === param_t.nodeName.toLowerCase()) {
  var var_r = param_t.shadowRoot,
  var_n = null === (var_e = null == var_r ? void 0 : var_r.querySelector("content-video-player")) ||
  void 0 === var_e ? void 0 : var_e.shadowRoot,
  var_i = null == var_n ? void 0 : var_n.querySelector("video");
  if (var_i) return var_i;
  }
  return param_t;
  }
  ,
  default: {
  getUrl: param_t => {
  var var_e = param_t.ids;
  if (var_e.length > 0) return var_e;
  }
  }
  };
  exportsObj.default = obj_n;
  };
