// Module 321 - Savior Rachelsenglishacademy_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  }
  ,
  obj_i = {
  getDomains: () => ["rachelsenglishacademy.com"],
  processRequestIds: param_t => (obj_n[param_t.filename] = param_t, !0),
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.node;
  return Boolean(var_e.closest(".wistia_embed"));
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_i = param_t.node,
  var_o = param_t.url,
  var_a = null === (var_e = var_i.closest(".wistia_embed").id.match(/-([a-z0-9]+)-/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  return var_a && (null === (var_r = obj_n[var_a]) || void 0 === var_r ?
  void 0 : var_r.url) || var_o;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.fixName = var_e.filename + "_" + document.title.trim();
  }
  }
  ]
  };
  exportsObj.default = obj_i;
  };
