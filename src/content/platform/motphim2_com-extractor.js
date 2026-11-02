// Module 279 - Savior Motphim2_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_format_resolver = requireFn(14),
  dep_network_monitor = requireFn(20),
  list_o = [],
  obj_a = {
  getDomains: () => ["motphim2.com", "iphimchillzz.com"],
  processRequestIds: param_t => {
  if (null == param_t ? void 0 : param_t.url) {
  var var_e = new URL(param_t.url),
  var_r = var_e.origin,
  var_n = var_e.searchParams;
  return "1" === var_n.get("type") && "6" === var_n.get("ct") &&
  (param_t.origin = var_r, list_o.push(param_t)), !0;
  }
  }
  ,
  parse: {
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return var_r ? Object(dep_format_resolver.b)(var_r, document.title, var_e.origin,
  var_e.url) : [];
  }
  }
  ,
  urls: [...(dep_network_monitor.a.urls || [])],
  default: {
  getUrl: () => list_o[0] ? [list_o[0]] : []
  }
  };
  exportsObj.default = obj_a;
  };
