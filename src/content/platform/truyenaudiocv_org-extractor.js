// Module 356 - Savior Truyenaudiocv_org Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["truyenaudiocv.org"],
  default: {
  mediaObjectChange(param_t) {
  var var_e,
  var_r = param_t.mediaObject,
  var_n = null === (var_e = document.getElementById("npTitle")) ||
  void 0 === var_e ? void 0 : var_e.innerText.trim();
  return var_n && (var_r.filename = var_n), var_r.type;
  }
  }
  };
  exportsObj.default = obj_n;
  };
