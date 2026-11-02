// Module 377 - Savior Vk_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  var_i = location.href;
  function var_o(param_t, param_e) {
  var var_r,
  var_n_1,
  var_i_1 = null === (var_n_1 = null === (var_r = param_e.closest("#mv_box")) ||
  void 0 === var_r ? void 0 : var_r.querySelector("#mv_info .vkuiHeader, .mv_info .vkuiHeader")) ||
  void 0 === var_n_1 ? void 0 : var_n_1.innerText;
  if (var_i_1) return param_t.filename = var_i_1, param_t.fixName = var_i_1, var_i_1;
  }
  exportsObj.default = {
  getDomains: () => ["vk.com"],
  forceUpdate() {
  location.href !== var_i && (EE.emit("widget.forceUpdate"), var_i = location.href,
  var_n = void 0);
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.startsWith("blob:"),
  getUrl(param_t) {
  var var_e = param_t.node;
  if (var_n) return var_o(var_n, var_e), [var_n];
  }
  }
  ],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_o(var_e, param_t.node), var_e.type;
  }
  }
  ,
  processRequestIds(param_t) {
  var var_e;
  if (/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)/i.test(param_t.url)) {
  if (6 == Number((null === (var_e = param_t.url.match(/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i)) ||
  void 0 === var_e ? void 0 : var_e[2]) || "0")) return var_n = param_t, !0;
  }
  }
  };
  };
