// Module 368 - Savior Vatlyhadong_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_dash_parser = requireFn(28),
  regex_o = /youtube\.com\/embed\//i,
  obj_a = {
  getDomains: () => ["vatlyhadong."],
  getCustomParent: param_t => param_t.parentElement,
  parse: {
  sources: [{
  checkSource: param_t => regex_o.test(param_t.url),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = Object(dep_dom_utils.getVideoId)(var_e.url);
  return var_r ? dep_dash_parser.a.parse(var_r) : [];
  }
  }
  ]
  }
  };
  exportsObj.default = obj_a;
  };
