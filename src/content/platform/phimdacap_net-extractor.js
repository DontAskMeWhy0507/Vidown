// Module 308 - Savior Phimdacap_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["phimdacap."],
  default: {
  getUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.ids,
  var_n = var_e.closest("#watch-stream") || var_e.closest("[data-url]");
  if (var_n && var_n.getAttribute("data-url")) {
  var var_i = new URL(var_n.getAttribute("data-url")).searchParams.get("url");
  if (var_i) return var_i;
  }
  return Array.isArray(var_r) && var_r.slice(var_r.length - 1) ||
  void 0;
  }
  }
  ,
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  var_r.size && Number(var_r.size) < 10240 && var_e.splice(var_n, 1);
  }
  };
  exportsObj.default = obj_n;
  };
