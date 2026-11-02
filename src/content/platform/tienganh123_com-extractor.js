// Module 353 - Savior Tienganh123_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["tienganh123.com"],
  addNode: () => ["span[media-url]"],
  getCustomParent: param_t => param_t.closest(".flowplayer, #hlsjsvod"),
  urls: [{
  checkUrl: param_t => "SPAN" == param_t.node.nodeName,
  getUrl: param_t => param_t.node.getAttribute("media-url") ||
  void 0,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = null === (var_r = null === (var_e = param_t.node.parentElement) ||
  void 0 === var_e ? void 0 : var_e.parentElement) || void 0 === var_r ?
  void 0 : var_r.innerText;
  return var_i && (var_n.filename = var_i), var_n.type;
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
