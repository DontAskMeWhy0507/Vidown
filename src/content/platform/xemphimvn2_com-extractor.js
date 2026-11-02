// Module 392 - Savior Xemphimvn2_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_network_monitor = requireFn(20),
  obj_o = {
  getDomains: () => ["xemphimvn2.com"],
  parse: {
  sources: [...((null === (var_n = dep_network_monitor.a.parse) ||
  void 0 === var_n ? void 0 : var_n.sources) || [])]
  }
  ,
  urls: [...(dep_network_monitor.a.urls || [])]
  };
  exportsObj.default = obj_o;
  };
