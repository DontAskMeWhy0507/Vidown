// Module 149 - Savior Theyounglove_com Ts Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_vimeo_com_extractor = requireFn(119),
  dep_extractor_url_merger = requireFn(23),
  obj_o = {
  getDomains: () => ["theyounglove.com"],
  getCustomParent: param_t => param_t.closest("#player, .course-learn-video .plyr"),
  default: {
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = document.querySelector(".course-item.active, .lesson-active"),
  var_o = null === (var_r = null === (var_e = (null == var_i ?
  void 0 : var_i.querySelector("a")) || var_i) || void 0 === var_e ?
  void 0 : var_e.innerText) || void 0 === var_r ? void 0 : var_r.trim();
  return var_o && (var_n.filename = var_o, var_n.fixName = var_o), var_n.type;
  }
  }
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_vimeo_com_extractor.default,
  ["parse", "default", "idsProcess"])(obj_o);
  };
