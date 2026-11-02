// Module 303 - Savior Phim_vkoolzz_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_network_monitor = requireFn(20),
  obj_i = {
  getDomains: () => ["phim.vkoolzz.net", "phim.vkoolss.net", "phimoxy.com"],
  parse: dep_network_monitor.a.parse,
  urls: dep_network_monitor.a.urls
  };
  exportsObj.default = obj_i;
  };
