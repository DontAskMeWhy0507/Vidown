// Module 185 - Savior Amazon Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  flag_i = !1,
  obj_o = {
  getDomains: () => ["amazon.com"],
  forceUpdate() {
  var var_t = document.querySelector("video.vjs-tech");
  void 0 !== (null == var_t ? void 0 : var_t.src) && (flag_i ||
  (list_n = []), flag_i = !1);
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.node.classList.contains("vjs-tech"),
  getUrl: () => list_n
  }
  ],
  processRequestIds: param_t => {
  var var_e,
  var_r,
  var_o,
  var_a = document.querySelector(`[data-video-url="${param_t.url}
  
  
  "]`),
  var_s = null === (var_r = null === (var_e = null == var_a ?
  void 0 : var_a.querySelector('[data-element-id="video-title"], .vse-video-title-text')) ||
  void 0 === var_e ? void 0 : var_e.innerText) || void 0 === var_r ?
  void 0 : var_r.trim();
  return var_s && (param_t.fixName = var_s), (null === (var_o = param_t.filename) ||
  void 0 === var_o ? void 0 : var_o.match(/jobtemplate\.hls$/)) &&
  (list_n.length > 0 && (flag_i = !0), list_n[0] = param_t), !0;
  }
  };
  exportsObj.default = obj_o;
  };
