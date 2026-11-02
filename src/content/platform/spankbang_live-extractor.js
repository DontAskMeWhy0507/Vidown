// Module 344 - Savior Spankbang_live Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["spankbanglive."],
  isValidVideoNode(param_t) {
  var var_e;
  return (0 != param_t.clientHeight || 0 != param_t.clientWidth) &&
  !(null === (var_e = param_t.closest(".content")) || void 0 === var_e ?
  void 0 : var_e.querySelector(".player-live-badge"));
  }
  };
  exportsObj.default = obj_n;
  };
