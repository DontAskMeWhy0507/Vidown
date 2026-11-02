// Module 233 - Savior Fansly_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  requireFn.r(exportsObj);
  var str_i = "",
  obj_o = {
  getDomains: () => ["fansly.com"],
  forceUpdate() {
  var var_t,
  var_e,
  var_r,
  var_o = document.querySelector(".stream iframe"),
  var_a = (null === (var_r = null === (var_e = null === (var_t = null == var_o ?
  void 0 : var_o.closest(".stream")) || void 0 === var_t ? void 0 :
  var_t.querySelector(`.server_option [data-embed="${var_o.src}
  
  
  "]`)) || void 0 === var_e ? void 0 : var_e.innerText) ||
  void 0 === var_r ? void 0 : var_r.trim()) || "_",
  var_s = `${document.title}
  
  
   ${var_a}
  
  
  `;
  str_i != var_s && (str_i = var_s, var_n = void 0);
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.startsWith("blob:"),
  getUrl: () => null == var_n ? void 0 : var_n.url,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n_1,
  var_o = param_t.mediaObject,
  var_a = null === (var_n_1 = null === (var_r = null === (var_e = param_t.node.closest(
  "div:has(.post-text-container)")) || void 0 === var_e ? void 0 :
  var_e.querySelector(".post-text-container")) || void 0 === var_r ?
  void 0 : var_r.innerText) || void 0 === var_n_1 ? void 0 :
  var_n_1.trim();
  if (var_a && (str_i = var_a, var_o.filename = var_a, var_o.fixName = var_a), var_o.url.match(
  /\.(m3u8|mpd)$/i)) return "video";
  }
  }
  ],
  default: {
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n_1,
  var_o = param_t.mediaObject,
  var_a = null === (var_n_1 = null === (var_r = null === (var_e = param_t.node.closest(
  "div:has(.post-text-container)")) || void 0 === var_e ? void 0 :
  var_e.querySelector(".post-text-container")) || void 0 === var_r ?
  void 0 : var_r.innerText) || void 0 === var_n_1 ? void 0 :
  var_n_1.trim();
  if (var_a && (str_i = var_a, var_o.filename = var_a, var_o.fixName = var_a), var_o.url.match(
  /\.(m3u8|mpd)$/i)) return "video";
  }
  }
  ,
  processRequestIds(param_t) {
  if (param_t.url.match(/\.(m3u8|mpd)$/i)) return var_n = param_t, !0;
  }
  };
  exportsObj.default = obj_o;
  };
