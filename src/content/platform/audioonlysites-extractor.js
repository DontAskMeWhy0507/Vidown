// Module 209 - Savior Audioonlysites Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_quality_helper = requireFn(9),
  list_i = [".story-listen #list-chapter .chapter.active", "#container_content .ss_track_info"],
  list_o = [],
  obj_a = {
  getDomains: () => ["truyenaudiofull.com", "bailemi.com"],
  addNode: () => list_i,
  getCustomElement: () => Array.from(document.querySelectorAll(list_i.join(","))),
  isMiniPlayerNode: param_t => param_t.matches(list_i.join(",")),
  urls: [{
  checkUrl: param_t => param_t.node.matches(list_i[0]),
  getUrl: () => list_o
  }
  ],
  default: {
  getUrl: () => list_o
  }
  ,
  processRequestIds(param_t) {
  if (location.href.includes("bailemi.com") && (param_t.filename = document.title),
  !list_o.find(param_e => param_e.url == param_t.url) && !param_t.altUrl) {
  var var_e = dep_quality_helper.b.QUALITY_TYPES[dep_quality_helper.a.QL_VIDEO_STANDARD];
  param_t.quality = param_t.quality || var_e.quality, param_t.resolution = param_t.resolution ||
  "128kbps", list_o.push(param_t);
  }
  return !0;
  }
  };
  exportsObj.default = obj_a;
  };
