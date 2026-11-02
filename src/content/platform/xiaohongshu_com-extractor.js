// Module 395 - Savior Xiaohongshu_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  }
  ,
  obj_i = {
  getDomains: () => ["xiaohongshu.com"],
  processRequestIds(param_t) {
  var var_e,
  var_r,
  var_i = null === (var_e = location.href.match(/\/explore\/([\da-f]+)/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  if (var_i && (null === (var_r = obj_n[var_i]) || void 0 === var_r ?
  void 0 : var_r.url) != param_t.url) return obj_n[var_i] = param_t, !0;
  }
  ,
  default: {
  getUrl: param_t => {
  var var_e,
  var_r,
  var_i,
  var_o = param_t.node,
  var_a = null === (var_e = location.href.match(/\/explore\/([\da-f]+)/i)) ||
  void 0 === var_e ? void 0 : var_e[1],
  var_s = null === (var_r = var_o.closest('.xgplayer, [id^="videoPlayer"]')) ||
  void 0 === var_r ? void 0 : var_r.id;
  if (var_s) {
  var var_u = null === (var_i = var_s.match(/videoPlayer([\da-f]+)/i)) ||
  void 0 === var_i ? void 0 : var_i[1];
  var_u && (var_a = var_u);
  }
  if (var_a && obj_n[var_a]) return [obj_n[var_a]];
  }
  }
  };
  exportsObj.default = obj_i;
  };
