// Module 285 - Savior Myclip_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n, var_i;
  requireFn.r(exportsObj);
  var obj_o = {
  getDomains: () => ["myclip.vn"],
  forceUpdate() {
  var_i != location.href && (var_i = location.href, var_n = void 0);
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /^blob:/i.test(var_e);
  }
  ,
  getUrl: () => var_n ? var_n.url : "",
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_i_1 = param_t.mediaObject,
  var_o = null === (var_r = null === (var_e = param_t.node.closest(".swiper-slide")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".headline")) ||
  void 0 === var_r ? void 0 : var_r.innerText;
  return var_o && (var_i_1.fixName = var_o), var_i_1.url == (null == var_n ?
  void 0 : var_n.url) ? "video" : var_i_1.type;
  }
  }
  ],
  processRequestIds(param_t) {
  if (/_m\.m3u8/i.test(param_t.url)) return var_n = param_t, !0;
  }
  };
  exportsObj.default = obj_o;
  };
