// Module 391 - Savior Weibo_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["weibo.com"],
  toggleLight: {
  turnOff: {
  updated(param_t) {
  var var_e;
  null === (var_e = null == param_t ? void 0 : param_t.closest("#app")) ||
  void 0 === var_e || var_e.classList.add("--savior-overlay-position-relative");
  }
  }
  }
  };
  exportsObj.default = obj_n;
  };
